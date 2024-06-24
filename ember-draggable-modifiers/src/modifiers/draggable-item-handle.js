import { modifier } from 'ember-modifier';

export default modifier(
  function draggableItemHandle(element) {
    element.dataset.draggableItemHandle = '';
    return () => {
      delete element.dataset.draggableItemHandle;
    };
  },
  { eager: false },
);
