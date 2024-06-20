'use strict';

define("test-app/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
/*
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { settled, find, findAll, render, triggerKeyEvent, waitUntil } from '@ember/test-helpers';
import { set } from '@ember/object';
import { reorder } from 'ember-sortable/test-support';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | sortable-group', function (hooks) {
  setupRenderingTest(hooks);

  test('Works with items added after render', async function (assert) {
    this.items = ['Uno', 'Dos', 'Tres'];

    this.update = (items) => {
      set(this, 'items', items);
    };

    await render(hbs`
      <ol id="test-list" {{sortable-group onChange=this.update}}>
        {{#each this.items as |item|}}
          <li {{sortable-item model=item}}>{{item}}</li>
        {{/each}}
      </ol>
    `);

    set(this, 'items', [...this.items, 'Quatro']);

    await settled();

    let order = findAll('li');

    await reorder('mouse', 'li', order[3], order[1], order[0], order[2]);
    assert.equal(contents('#test-list'), 'Quatro Dos Uno Tres');

    set(this, 'items', this.items.slice(1));

    await settled();

    await reorder('mouse', 'li', order[2], order[1], order[0]);

    assert.equal(contents('#test-list'), 'Tres Dos Uno');
  });
});
*/
define("test-app/tests/integration/modifiers/draggable-item", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
define("test-app/tests/test-helper", ["test-app/app", "test-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"test-app/app",0,"test-app/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('test-app/config/environment', [], function() {
  var prefix = 'test-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('test-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
