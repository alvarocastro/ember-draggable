import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertAt, removeFrom } from 'ember-draggable/utils/array';

export default class ExamplesSharedListsComponent extends Component {
  @tracked itemsTop = [ 'One', 'Two', 'Three', 'Four', 'Five' ];
  @tracked itemsBottom = [ 'Six', 'Seven', 'Eight', 'Nine', 'Ten' ];

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
      @tracked itemsTop = [ ${this.itemsTop.map(item => JSON.stringify(item)).join(', ')} ];
      @tracked itemsBottom = [ ${this.itemsBottom.map(item => JSON.stringify(item)).join(', ')} ];

      @action sortItems ({ fromList, oldIndex, newIndex }) {
        this[fromList] = move(this[fromList], oldIndex, newIndex);
      }

      @action removeItem ({ fromList, toList, oldIndex }) {
        this[fromList] = removeFrom(this[fromList], oldIndex);
      }

      @action addItem ({ fromList, toList, oldIndex, newIndex }) {
        this[toList] = insertAt(this[toList], newIndex, this[fromList][oldIndex]);
      }
    `;
  }


  @action move ({
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
    this[toList] = insertAt(this[toList], edge === 'top' ? newIndex : newIndex + 1, draggedItem);
  }
}
