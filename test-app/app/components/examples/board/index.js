import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertAt, removeFrom } from 'ember-draggable/utils/array';

class Column {
  @tracked cards = [];

  constructor (name, cards = []) {
    this.name = name;
    this.cards = cards;
  }
}
class Card {
  constructor (title, text, seed) {
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

  @action moveColumn ({
    source: {
      data: draggedItem,
      group: fromList
    },
    target: {
      data: dropTarget,
      group: toList,
      edge
    }
  }) {
    const oldIndex = this[fromList].indexOf(draggedItem);
    this[fromList] = removeFrom(this[fromList], oldIndex);

    const newIndex = this[toList].indexOf(dropTarget);
    this[toList] = insertAt(this[toList], edge === 'left' ? newIndex : newIndex + 1, draggedItem);
  }

  @action moveCard ({
    source: {
      data: {
        item: draggedItem,
        parent: draggedItemParent,
      },
      group: fromList
    },
    target: {
      data: {
        item: dropTarget,
        parent: dropTargetParent,
      },
      group: toList,
      edge
    },
  }) {
    const oldIndex = draggedItemParent.cards.indexOf(draggedItem);
    draggedItemParent.cards = removeFrom(draggedItemParent.cards, oldIndex);

    const newIndex = dropTarget ? dropTargetParent.cards.indexOf(dropTarget) : 0;
    dropTargetParent.cards = insertAt(dropTargetParent.cards, edge === 'top' ? newIndex : newIndex + 1, draggedItem);
  }
}
