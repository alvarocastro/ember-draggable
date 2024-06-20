import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertBefore, insertAfter, removeItem } from 'ember-draggable/utils/array';

export default class ExamplesHandleComponent extends Component {
  @tracked items = [ 'One', 'Two', 'Three', 'Four', 'Five' ];

  hbsCode = `
    <ul>
      {{#each this.items as |item|}}
        <li {{sortable-item data=item onDrop=this.move}}>
          <i class="fa-solid fa-grip-lines" {{draggable-item-handle}}></i>
          {{item}}
        </li>
      {{/each}}
    </ul>
  `;

  get jsCode () {
    return `
      @tracked items = [ ${this.items.map(item => JSON.stringify(item)).join(', ')} ];

      @action move ({ source: { data: draggedItem }, target: { data: dropTarget, edge } }) {
        this.items = removeItem(this.items, draggedItem);

        if (edge === 'top') {
          this.items = insertBefore(this.items, dropTarget, draggedItem);
        } else {
          this.items = insertAfter(this.items, dropTarget, draggedItem);
        }
      }
    `;
  };

  @action move ({ source: { data: draggedItem }, target: { data: dropTarget, edge } }) {
    this.items = removeItem(this.items, draggedItem);

    if (edge === 'top') {
      this.items = insertBefore(this.items, dropTarget, draggedItem);
    } else {
      this.items = insertAfter(this.items, dropTarget, draggedItem);
    }
  }
}
