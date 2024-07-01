import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {
  insertAt,
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
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.seed = title;
  }
}

export default class ExamplesBoardComponent extends Component {
  @tracked columns = [
    new Column('Todo', [
      new Card('X-Spark', 'Dimensional sync'),
      new Card('Automaton Prime', 'Salvage derelict ship'),
      new Card('QuantumPulse', 'Explore lunar caves'),
      new Card('X-Spark', 'Neutralize rogue AI'),
      new Card('NovaCircuit', 'Graviton synthesis'),
    ]),
    new Column('In progress', []),
    new Column('Done', [
      new Card('Automaton Prime', 'Analyze cosmic dust'),
      new Card('QuantumPulse', 'Repair starship hull'),
      new Card('NovaCircuit', 'Temporal stability'),
      new Card('QuantumPulse', 'Repair warp drive'),
    ]),
  ];

  @action moveColumn({
    source: { data: draggedItem },
    target: { data: dropTarget, edge },
  }) {
    this.columns = removeItem(this.columns, draggedItem);

    if (edge === 'left') {
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

    if (!dropTarget) {
      dropTargetParent.cards = insertAt(dropTargetParent.cards, 0, draggedItem);
    } else if (edge === 'top') {
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
