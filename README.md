# ember-draggable-modifiers

![NPM Version](https://img.shields.io/npm/v/ember-draggable-modifiers)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/alvarocastro/ember-draggable-modifiers)

Drag and drop modifiers for Ember.js internally powered by the Atlassian Design System.

## Compatibility

- Ember.js v4.12 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-draggable-modifiers
```

## Usage

This example creates a sortable list by drag and drop.

```hbs
<ul>
  {{#each this.items as |item|}}
    <li {{sortable-item data=item onDrop=this.move}}>
      {{item}}
    </li>
  {{/each}}
</ul>
```

The actual reordering is done in the the `move()` action, leveraged by the optional array utils provided with this addon. Use your own custom logic if needed.

```js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { insertBefore, insertAfter, removeItem } from 'ember-draggable-modifiers/utils/array';

export default class ExampleComponent extends Component {
  @tracked items = [ "One", "Two", "Three", "Four", "Five" ];

  @action move ({ source: { data: draggedItem }, target: { data: dropTarget, edge } }) {
    this.items = removeItem(this.items, draggedItem);

    if (edge === 'top') {
      this.items = insertBefore(this.items, dropTarget, draggedItem);
    } else {
      this.items = insertAfter(this.items, dropTarget, draggedItem);
    }
  }
}
```

The `{{sortable-item}}` modifier combines both dragging and dropping functionality, for better control you can use the `{{draggable-item}}` and `{{drop-target}}` modifiers separately to better control the user interactions.

Check the docs site for more interactive examples.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
