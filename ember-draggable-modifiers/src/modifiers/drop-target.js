import { modifier } from 'ember-modifier';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { attachClosestEdge, extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { attachInstruction, extractInstruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item';
import { preventUnhandled } from '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled';

export const CLASS = {
  DRAGGING: 'is-dragging',
  DROP_TARGET_ITEM: 'drop-target-item',
};

export const DIRECTION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};
export const DIRECTION_EDGES = {
  [DIRECTION.VERTICAL]: [ 'top', 'bottom' ],
  [DIRECTION.HORIZONTAL]: [ 'left', 'right' ],
};

/**
 * Util function to normalize the drag and drop event data.
 * @param {Object} event Drag and drop event.
 * @return {Object}
 */
export const prepareDataForCallback = function (event) {
  const source = {
    data: event.source.data.data,
    group: event.source.data.group,
  };
  const target = event.self ? {
    data: event.self.data.data,
    group: event.self.data.group,
    edge: extractClosestEdge(event.self.data),
    tree: extractInstruction(event.self.data).type,
  } : {};

  return {
    source,
    target,
    event,
  };
};

/**
 * Util function that computes the depth of a nested drop target relative to a
 * dragged item.
 * @param {Object} event Drag and drop event.
 * @return {Number}
 */
export const getNestedDepth = function (event) {
  const targets = event.location.current.dropTargets;
  const element = event.self.element;

  return targets.indexOf(targets.find(target => target.element === element));
};

/**
 * Modifier to define a drop target for draggable items.
 * @param {HTMLElement} element Target DOM element.
 * @param {any} options.data Data to associate with the drop target.
 * @param {String} options.group This drop target belongs to.
 * @param {Array} [options.accepts] Array of types this target accepts.
 * @param {String} [options.direction="vertical"] Shortcut to define presets of `allowedEdges`. Options: "horizontal", "vertical".
 * @param {Array} [options.allowedEdges] Array of allowed edges to detect on drop. Options: "top", "bottom", "left", "right".
 * @param {Boolean} [options.allowDropOnItself=false] Allow an element to drop on itself if it's both a draggable item and drop target.
 * @param {Boolean} [options.allowDropOnChildren=false] Allow the target to receive drops from a parent draggable (this option is valid for nested targets)
 * @param {Boolean} [disabled] Prevents the element to both be dragged and receive drops.
 * @param {String} [options.isOnTargetClass] Class added to the element when an item is dragged over.
 * @param {Function} [options.canDrop] Callback used to conditionally allow drops.
 * @param {Function} [options.onDrop] Callback fired when an item is dropped.
 * @param {Function} [options.onHover] Callback fired when an item is dragged over.
 * @param {Function} [option.onDragEnter] Callback fired when a dragged item enters this target.
 * @param {Function} [option.onDragLeave] Callback fired when a dragged item leaves this target.
 */
export default modifier(function dropTarget (element, positional, {
  data,
  group,
  accepts = [],
  direction = DIRECTION.VERTICAL, // 'vertical' | 'horizontal'
  allowedEdges, // [ 'top', 'bottom', 'left', 'right' ]
  allowDropOnItself = false,
  allowDropOnChildren = false,
  disabled = false,
  isOnTargetClass = CLASS.DROP_TARGET_ITEM,
  canDrop = (payload, canDrop) => canDrop,
  onDrop = () => {},
  onHover = () => {},
  onDragEnter = () => {},
  onDragLeave = () => {},
} = {}) {
  return dropTargetForElements({
    element: element,
    canDrop: (event) => {
      const { source: { data, element: draggedElement } } = event;
      let result = true;

      if (disabled) {
        result = false;
      } else if (!allowDropOnChildren && draggedElement.contains(element)) {
        result = false;
      } else if (!allowDropOnItself && element === draggedElement) {
        result = false;
      } else {
        result = accepts.length ? accepts.includes(data.group) : data.group === group;
      }
      return canDrop(prepareDataForCallback(event), result);
    },
    getData: ({ input, element }) => {
      let payload = { data, group };

      payload = attachClosestEdge(payload, {
        input,
        element,
        allowedEdges: allowedEdges ?? DIRECTION_EDGES[direction],
      });

      payload = attachInstruction(payload, {
        input,
        element,
        currentLevel: 2,
        indentPerLevel: 20,
        mode: 'standard',
      });

      return payload;
    },
    onDragEnter: (event) => {
      element.classList.add(isOnTargetClass);
      onDragEnter(prepareDataForCallback(event));
    },
    onDragLeave: (event) => {
      element.classList.remove(isOnTargetClass);
      delete element.dataset.dropEdge;
      delete element.dataset.treeInstruction;
      onDragLeave(prepareDataForCallback(event));
    },
    onDrag: (event) => {
      const depth = getNestedDepth(event);
      if (depth > 0) {
        element.classList.remove(isOnTargetClass);
        delete element.dataset.dropEdge;
        delete element.dataset.treeInstruction;
        return;
      }
      element.classList.add(isOnTargetClass);
      element.dataset.dropEdge = extractClosestEdge(event.self.data);
      element.dataset.treeInstruction = extractInstruction(event.self.data).type;
      onHover(prepareDataForCallback(event));
    },
    onDrop: (event) => {
      element.classList.remove(isOnTargetClass);
      delete element.dataset.dropEdge;
      delete element.dataset.treeInstruction;

      if (getNestedDepth(event) === 0) {
        onDrop(prepareDataForCallback(event));
      }
    },
  });
}, { eager: false });
