import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertBefore, insertAfter, removeItem } from 'ember-draggable-modifiers/utils/array';

export default class ExamplesSharedListsComponent extends Component {
  @tracked itemsTop = [ 'One', 'Two', 'Three', 'Four', 'Five' ];
  @tracked itemsBottom = [ 'Six', 'Seven', 'Eight', 'Nine', 'Ten' ];

  hbsCode = `
    <ul>
      {{#each this.itemsTop as |item|}}
        <li
          {{sortable-item
            data=item
            group="itemsTop"
            accepts=(array "itemsTop" "itemsBottom")
            onDrop=this.move
          }}
        >
          {{item}}
        </li>
      {{/each}}
    </ul>
    <ul>
      {{#each this.itemsBottom as |item|}}
        <li
          {{sortable-item
            data=item
            group="itemsBottom"
            accepts="itemsTop"
            onDrop=this.move
          }}
        >
          {{item}}
        </li>
      {{/each}}
    </ul>
  `;

  get jsCode () {
    return `
      @tracked itemsTop = [ ${this.itemsTop.map(item => JSON.stringify(item)).join(', ')} ];
      @tracked itemsBottom = [ ${this.itemsBottom.map(item => JSON.stringify(item)).join(', ')} ];

      @action move ({ source, target }) {
        const { data: draggedItem, group: fromList } = source;
        const { data: dropTarget, group: toList, edge } = target;

        this[fromList] = removeItem(this[fromList], draggedItem);

        if (edge === 'top') {
          this[toList] = insertBefore(this[toList], dropTarget, draggedItem);
        } else {
          this[toList] = insertAfter(this[toList], dropTarget, draggedItem);
        }
      }
    `;
  }

  @action move ({ source, target }) {
    const { data: draggedItem, group: fromList } = source;
    const { data: dropTarget, group: toList, edge } = target;

    this[fromList] = removeItem(this[fromList], draggedItem);

    if (edge === 'top') {
      this[toList] = insertBefore(this[toList], dropTarget, draggedItem);
    } else {
      this[toList] = insertAfter(this[toList], dropTarget, draggedItem);
    }
  }
}
