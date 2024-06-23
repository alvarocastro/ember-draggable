import { run } from '@ember/runloop';
import { modifier } from 'ember-modifier';

export default modifier(function draggableItemHandle (element, positional, named) {
  element.dataset.draggableItemHandle = '';
  return () => {
    delete element.dataset.draggableItemHandle;
  };
}, { eager: false });
