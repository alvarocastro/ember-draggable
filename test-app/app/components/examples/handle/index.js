import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertAt, removeFrom } from 'ember-draggable/utils/array';

export default class ExamplesHandleComponent extends Component {
  @tracked items = [ 'One', 'Two', 'Three', 'Four', 'Five' ];

  get dumpCode () {
    return `
      this.items = [ ${this.items.map(item => JSON.stringify(item)).join(', ')} ];
    `;
  }

  hbsCode = `
    <ul {{sortable-group
      animation=150
      onSort=this.sortItems
    }}>
      {{#each this.items as |item|}}
        <li {{sortable-item}} class="list-group-item">
          <i class="fa-solid fa-grip-lines" {{sortable-item-handle}}></i>
          {{item}}
        </li>
      {{/each}}
    </ul>
  `;

  get jsCode () {
    return `
      @tracked items = [ ${this.items.map(item => JSON.stringify(item)).join(', ')} ];

      @action sortItems ({ oldIndex, newIndex }) {
        this.items = move(this.items, oldIndex, newIndex);
      }
    `;
  };

  @action move ({ source, target }) {
    const oldIndex = this.items.indexOf(source.data);
    this.items = removeFrom(this.items, oldIndex);

    const newIndex = this.items.indexOf(target.data);
    this.items = insertAt(this.items, target.edge === 'top' ? newIndex : newIndex + 1, source.data);
  }
}
