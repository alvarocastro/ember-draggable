import { modifier } from 'ember-modifier';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import draggableItem from './draggable-item.js';
import dropTarget from './drop-target.js';

/**
 * Modifier that makes an element both a draggable item and drop target.
 *
 * @param {DOMElement} element Draggable DOM element.
 * @param {any} options.data Data to associate with the item.
 * @param {String} [options.group] Name of the group this item belongs to.
 * @param {Array} [options.accepts] Array of types this target accepts.
 * @param {String} [options.dragHandleElement] Element that acts as the drag handle.
 * @param {String} [options.direction="vertical"] Shortcut to define presets of `allowedEdges`. Options: "horizontal", "vertical".
 * @param {Array} [options.allowedEdges] Array of allowed edges to detect on drop. Options: "top", "bottom", "left", "right".
 * @param {Boolean} [options.allowDropOnItself=false] Allow an element to drop on itself if it's both a draggable item and drop target.
 * @param {Boolean} [options.allowDropOnChildren=false] Allow the target to receive drops from a parent draggable (this option is valid for nested targets)
 * @param {Boolean} [disabled] Prevents the element to be dragged or receive drops.
 * @param {Boolean} [disabledDrag] Prevents the element to be dragged.
 * @param {Boolean} [disabledDrop] Prevents the element to receive drops.
 * @param {String} [options.isDraggingClass] Class added to the element when it is being drag.
 * @param {String} [options.isOnTargetClass] Class added to the element when an item is dragged over.
 * @param {Function} [options.canDrop] Callback used to conditionally allow drops.
 * @param {Function} [options.onDrop] Callback fired when an item is dropped.
 * @param {Function} [options.onHover] Callback fired when an item is dragged over.
 * @param {Function} [option.onDragEnter] Callback fired when a dragged item enters this target.
 * @param {Function} [option.onDragLeave] Callback fired when a dragged item leaves this target.
 * @param {Function} [options.onDragStart] Callback fired when the drag starts.
 * @param {Function} [options.onDragEnd] Callback fired when the item is dropped.
 */
export default modifier(function sortableItem (element, positional, named) {
  return combine(
    draggableItem(element, positional, {
      ...named,
      disabled: named.disabled ?? named.disabledDrag
    }),
    dropTarget(element, positional, {
      ...named,
      disabled: named.disabled ?? named.disabledDrop
    })
  );
}, { eager: false });
