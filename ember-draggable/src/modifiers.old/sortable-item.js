import { run } from '@ember/runloop';
import { modifier } from 'ember-modifier';
import {
  draggable,
  dropTargetForElements
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import {
  attachClosestEdge,
  extractClosestEdge
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

import { groupsRegistry } from 'ember-draggable/modifiers/sortable-group';

import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';



const getElementHeight = function (element) {
  const styles = window.getComputedStyle(element);

  return Math.ceil(element.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom));
};


const CLASS = {
  DRAGGING: 'is-dragging',
  DROP_TARGET_ITEM: 'drop-target-item',
};


export default modifier(function sortableItem (element, [ data ], {
  onDragStart = () => {},
  onDragEnd = () => {},
  onDragEnter = () => {},
  onDragLeave = () => {},
} = {}) {
  const cleanup = combine(
    draggable({
      element,
      canDrag: () => true,
      getInitialData: ({ element }) => {
        const groupElement = element.closest('[data-sortable-group]', element);
        return {
          data,
          ...groupsRegistry.get(groupElement)
        };
      },
      onDragStart: () => {
        element.classList.add(CLASS.DRAGGING);
      },
      onDrop: () => {
        element.classList.remove(CLASS.DRAGGING);
      },
      // onGenerateDragPreview: ({ nativeSetDragImage }) => {
      //   console.log('>>>> FART');
      //   return disableNativeDragPreview({ nativeSetDragImage });
      // },
    }),
    dropTargetForElements({
      canDrop: ({ element, source: { data } }) => {
        const groupElement = element.closest('[data-sortable-group]', element);

        console.log('>>>> CAN DROP', element, data);
      },
      element: element,
      getData: ({ input, element }) => {
        const groupElement = element.closest('[data-sortable-group]');


        return attachClosestEdge({
          data,
          ...groupsRegistry.get(groupElement)
        }, {
          input,
          element,
          allowedEdges: [ 'top', 'bottom' ],
          // currentLevel: 2,
          // indentPerLevel: 20,
          // mode: 'standard',
          // you can specify instructions to block
          // block: ['reorder-below'],
        });
      },
      onDragEnter: ({ source: { element: draggedElement } }) => {
        // Filter dragging over itself
        if (element !== draggedElement) {
          element.classList.add(CLASS.DROP_TARGET_ITEM);
        }
      },
      onDragLeave: () => {
        element.classList.remove(CLASS.DROP_TARGET_ITEM);
      },
      // onGenerateDragPreview
      // onDragStart: () => console.log('ON DRAG START'),
      // onDrag: () => console.log('ON DRAG'),
      // getData: () => ({ fart: 'poop' }),
      // onDropTargetChange: (a,s,d) => console.log('ON DRAG TARGET CHANGE', a,s,d),
      onDrop: () => {
        element.classList.remove(CLASS.DROP_TARGET_ITEM);
      },
    })
  );

  return cleanup;
}, { eager: false });
//

// // // // // // // // // // // // // // // // // // // // // // // // // // //
