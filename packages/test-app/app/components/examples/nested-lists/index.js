import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {
  insertBefore,
  insertAfter,
  removeItem,
} from 'ember-draggable-modifiers/utils/array';

class Item {
  @tracked childs = [];

  constructor(name, childs = []) {
    this.name = name;
    this.childs = childs;
  }
}

const dump = function (node, depth = 0, indent = '  ') {
  if (node.childs.length) {
    return `new Item('${node.name}', [\n${indent.repeat(depth + 1)}${node.childs.map((child) => dump(child, depth + 1, indent)).join(`,\n${indent.repeat(depth + 1)}`)}\n${indent.repeat(depth)}])`;
  }
  return `new Item('${node.name}')`;
};

export default class ExamplesNestedListsComponent extends Component {
  @tracked root = new Item('root', [
    new Item('One'),
    new Item('Two', [new Item('Six'), new Item('Seven', [new Item('Eight')])]),
    new Item('Three'),
    new Item('Four'),
    new Item('Five'),
  ]);

  hbsCode = `
    <ul class="list-group mb-3">
      {{#each this.root.childs as |item|}}
        <TreeItem
          @item={{item}}
          @parent={{this.root}}
          @onDrop={{this.move}}
        />
      {{/each}}
    </ul>

    {{! tree-item.hbs }}
    <li {{sortable-item data=(hash item=@item parent=@parent) onDrop=@onDrop}}>
      {{@item.name}}
      {{#if @item.childs}}
        <ul>
          {{#each @item.childs as |child|}}
            <Examples::NestedLists::TreeItem
              @item={{child}}
              @parent={{@item}}
              @onDrop={{@onDrop}}
            />
          {{/each}}
        </ul>
      {{/if}}
    </li>
  `;

  get jsCode() {
    return `
      class Item {
        @tracked childs = [];

        constructor (name, childs = []) {
          this.name = name;
          this.childs = childs;
        }
      }

      export default class NestedListsComponent extends Component {
        @tracked root = ${dump(this.root, 4)};

        @action move ({ source, target }) {
          const { data: { item: draggedItem, parent: draggedItemParent } } = source;
          const { data: { item: dropTarget, parent: dropTargetParent }, edge, tree } = target;

          draggedItemParent.childs = removeItem(draggedItemParent.childs, draggedItem);

          const parent = tree === 'make-child' ? dropTarget : dropTargetParent;
          if (edge === 'top') {
            parent.childs = insertBefore(parent.childs, dropTarget, draggedItem);
          } else {
            parent.childs = insertAfter(parent.childs, dropTarget, draggedItem);
          }
        }
      }
    `;
  }

  @action move({ source, target }) {
    const {
      data: { item: draggedItem, parent: draggedItemParent },
    } = source;
    const {
      data: { item: dropTarget, parent: dropTargetParent },
      edge,
      tree,
    } = target;

    draggedItemParent.childs = removeItem(
      draggedItemParent.childs,
      draggedItem,
    );

    const parent = tree === 'make-child' ? dropTarget : dropTargetParent;
    if (edge === 'top') {
      parent.childs = insertBefore(parent.childs, dropTarget, draggedItem);
    } else {
      parent.childs = insertAfter(parent.childs, dropTarget, draggedItem);
    }
  }
}
