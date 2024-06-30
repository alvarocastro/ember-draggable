import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {
  insertBefore,
  insertAfter,
  removeItem,
} from 'ember-draggable-modifiers/utils/array';

class Column {
  @tracked cards = [];

  constructor(name, cards = []) {
    this.name = name;
    this.cards = cards;
  }
}
class Card {
  constructor(title, text, seed) {
    this.title = title;
    this.text = text;
    this.seed = seed;
  }
}

export default class ExamplesBoardComponent extends Component {
  @tracked columns = [
    new Column('Todo', [
      new Card('Sup 1', 'Lorem ipsum', 1),
      new Card('Sup 2', 'Lorem ipsum', 2),
      new Card('Sup 3', 'Lorem ipsum', 3),
    ]),
    new Column('In progress', [
      new Card('Sup 4', 'Lorem ipsum', 4),
      new Card('Sup 5', 'Lorem ipsum', 5),
    ]),
    new Column('Done', [
      new Card('Sup 6', 'Lorem ipsum', 6),
      new Card('Sup 7', 'Lorem ipsum', 7),
      new Card('Sup 8', 'Lorem ipsum', 8),
      new Card('Sup 9', 'Lorem ipsum', 9),
    ]),
  ];

  @action moveColumn({
    source: { data: draggedItem },
    target: { data: dropTarget, edge },
  }) {
    this.columns = removeItem(this.columns, draggedItem);

    if (edge === 'top') {
      this.columns = insertBefore(this.columns, dropTarget, draggedItem);
    } else {
      this.columns = insertAfter(this.columns, dropTarget, draggedItem);
    }
  }

  @action moveCard({
    source: {
      data: { item: draggedItem, parent: draggedItemParent },
    },
    target: {
      data: { item: dropTarget, parent: dropTargetParent },
      edge,
    },
  }) {
    draggedItemParent.cards = removeItem(draggedItemParent.cards, draggedItem);

    if (edge === 'top') {
      dropTargetParent.cards = insertBefore(
        dropTargetParent.cards,
        dropTarget,
        draggedItem,
      );
    } else {
      dropTargetParent.cards = insertAfter(
        dropTargetParent.cards,
        dropTarget,
        draggedItem,
      );
    }
  }
}
