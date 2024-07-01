import { modifier } from 'ember-modifier';

var draggableItemHandle = modifier(function draggableItemHandle(element) {
  element.dataset.draggableItemHandle = '';
  return () => {
    delete element.dataset.draggableItemHandle;
  };
}, {
  eager: false
});

export { draggableItemHandle as default };
//# sourceMappingURL=draggable-item-handle.js.map
