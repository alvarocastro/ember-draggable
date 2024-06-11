import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertAt, removeFrom } from 'ember-draggable/utils/array';

class Item {
  @tracked childs = [];

  constructor (name, childs = []) {
    this.name = name;
    this.childs = childs;
  }
}

export default class ExamplesNestedListsComponent extends Component {
  @tracked root = new Item('root', [
    new Item('One'),
    new Item('Two', [
      new Item('Six'),
      new Item('Seven', [
        new Item('Eight'),
      ]),
    ]),
    new Item('Three'),
    new Item('Four'),
    new Item('Five')
  ]);

  constructor () {
    super(...arguments);
    window.c = this;
  }

  get dumpCode () {
    return `
      this.itemsTop = ${JSON.stringify(this.itemsTop)};
      this.itemsBottom = ${JSON.stringify(this.itemsBottom)};
    `;
  }

  hbsCode = `
    <ul {{sortable-group
      name="itemsTop"
      group="shared"
      onSort=this.sortItems
      onAdd=this.addItem
      onRemove=this.removeItem
    }}>
      {{#each this.itemsTop as |item|}}
        <li {{sortable-item}} class="list-group-item">{{item}}</li>
      {{/each}}
    </ul>

    <ul {{sortable-group
      name="itemsBottom"
      group="shared"
      onSort=this.sortItems
      onAdd=this.addItem
      onRemove=this.removeItem
    }}>
      {{#each this.itemsBottom as |item|}}
        <li {{sortable-item}} class="list-group-item">{{item}}</li>
      {{/each}}
    </ul>
  `;

  get jsCode () {
    return `
      @tracked items = ${JSON.stringify(this.items, null, 2)};
    `;
  }

  @action move ({
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
      edge,
      tree
    },
  }) {
    const oldIndex = draggedItemParent.childs.indexOf(draggedItem);
    draggedItemParent.childs = removeFrom(draggedItemParent.childs, oldIndex);

    const parent = tree === 'make-child' ? dropTarget : dropTargetParent;
    const newIndex = parent.childs.indexOf(dropTarget);
    parent.childs = insertAt(parent.childs, edge === 'top' ? newIndex : newIndex + 1, draggedItem);
  }
}
