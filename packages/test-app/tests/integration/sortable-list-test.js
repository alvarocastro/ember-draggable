import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, triggerEvent, waitFor } from '@ember/test-helpers';
import { set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';
// import { triggerDragEvent } from 'ember-draggable-modifiers/test-support';

// @todo move this code to the addon as a test-support -> ember-draggable-modifiers/test-support/index.js
class MockDataTransfer {
  data;
  constructor(data = {}) {
    this.data = new Map(Object.entries(data));
  }
  setDragImage() {}
  setData(format, data) {
    this.data.set(format, data);
  }
  getData(format) {
    return this.data.get(format);
  }
}
const triggerDragEvent = function (target, eventType, options = {}) {
  const { top, left } = find(target).getBoundingClientRect();
  console.log('>>>', eventType, top, left);
  return triggerEvent(target, eventType, {
    ...options,
    clientY: top,
    clientX: left,
    pageY: top,
    pageX: left,
    dataTransfer: new MockDataTransfer(options.dataTransfer),
  });
};

module('Integration | Sortable list', function (hooks) {
  setupRenderingTest(hooks);

  test('Test drag', async function (assert) {
    this.items = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

    this.update = (items) => {
      console.log('>>> FART');
      set(this, 'items', items);
    };

    await render(hbs`
      <ol id="test-list">
        {{#each this.items as |item|}}
          <li id={{item}} {{sortable-item data=item onDrop=this.update}}>{{item}}</li>
        {{/each}}
      </ol>
    `);

    assert.dom('#dos').doesNotHaveClass('is-dragging');

    await triggerDragEvent('#dos', 'dragstart');

    await waitFor('.is-dragging', { timeout: 500 });

    assert.dom('#dos').hasClass('is-dragging');

    await triggerDragEvent('#tres', 'dragend');
  });
});
