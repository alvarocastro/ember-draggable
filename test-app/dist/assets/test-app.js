'use strict';



;define("test-app/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "test-app/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"test-app/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("test-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("test-app/components/api/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Section @title="API">
    <Ui::Subsection @title="Modifiers">
      <Ui::Function
        @title="\{{draggable-item}}"
        @description="Modifier to make a DOM element draggable."
        @params={{array
          (hash
            name="data"
            type="any"
            description="Data to associate with the item."
          )
          (hash
            name="group"
            type="string"
            description="Name of the group this item belongs to."
          )
          (hash
            name="dragHandleElement"
            type="HTMLElement"
            description="Element that acts as the drag handle."
          )
          (hash
            name="disabled"
            type="boolean"
            description="Prevents the element to be dragged."
          )
          (hash
            name="isDraggingClass"
            type="string"
            description="Class added to the element when it is being drag."
          )
          (hash
            name="onDragStart"
            type="function"
            description="Callback fired when the drag starts."
          )
          (hash
            name="onDragEnd"
            type="function"
            description="Callback fired when the item is dropped."
          )
        }}
      />
  
      <Ui::Function
        @title="\{{drop-target}}"
        @description="Modifier to define a drop target for draggable items."
        @params={{array
          (hash
            name="data"
            type="any"
            description="Data to associate with the drop target."
          )
          (hash
            name="group"
            type="string"
            description="Name of the group this drop target belongs to."
          )
          (hash
            name="accepts"
            type="string[]"
            description="Array of groups this target accepts from."
          )
          (hash
            name="direction"
            type="\"vertical\" | \"horizontal\""
            default="\"vertical\""
            description="Shortcut to define presets of allowed edges."
          )
          (hash
            name="allowedEdges"
            type="(\"top\" | \"bottom\" | \"left\" | \"right\")[]"
            description="Array of allowed edges to detect on drop."
          )
          (hash
            name="allowDropOnItself"
            type="boolean"
            default="false"
            description="Allow an element to drop on itself if it's both a draggable item and a drop target."
          )
          (hash
            name="allowDropOnChildren"
            type="boolean"
            default="false"
            description="Allow the target to receive drops from a parent draggable (this option is valid for nested targets)"
          )
          (hash
            name="disabled"
            type="boolean"
            description="Prevents the element to receive drops."
          )
          (hash
            name="isOnTargetClass"
            type="string"
            description="Class added to the element when an item is dragged over."
          )
          (hash
            name="canDrop"
            type="function"
            description="Callback used to conditionally allow drops."
          )
          (hash
            name="onDrop"
            type="function"
            description="Callback fired when an item is dropped."
          )
          (hash
            name="onHover"
            type="function"
            description="Callback fired when an item is dragged over."
          )
          (hash
            name="onDragEnter"
            type="function"
            description="Callback fired when a dragged item enters this target."
          )
          (hash
            name="onDragLeave"
            type="function"
            description="Callback fired when a dragged item leaves this target."
          )
        }}
      />
    </Ui::Subsection>
  
    <Ui::Subsection @title="Utilities">
      <p>
        All of the utilities listed here are optional convenience functions. You can also substitute them for your own similiar utilities if you want to.
      </p>
  
      <Ui::Code @lang="js">
        import { insertAt } from 'ember-sortable/utils/array';
  
        const arr = [ 'one', 'two', 'three' ];
        insertAt(arr, 1, 'new!'); // => [ 'one', 'new!', 'two', 'three' ]
      </Ui::Code>
  
      <Ui::Code @lang="js">
        import { removeAt } from 'ember-sortable/utils/array';
  
        const arr = [ 'one', 'two', 'three' ];
        removeAt(arr, 1); // => [ 'one', 'three' ]
      </Ui::Code>
  
      <Ui::Code @lang="js">
        import { insertBefore } from 'ember-sortable/utils/array';
  
        const arr = [ 'one', 'two', 'three' ];
        insertBefore(arr, 'two', 'new!'); // => [ 'one', 'new!', 'two', 'three' ]
      </Ui::Code>
  
      <Ui::Code @lang="js">
        import { insertAfter } from 'ember-sortable/utils/array';
  
        const arr = [ 'one', 'two', 'three' ];
        insertAfter(arr, 'two', 'new!'); // => [ 'one', 'two', 'new!', 'three' ]
      </Ui::Code>
  
      <Ui::Code @lang="js">
        import { removeItem } from 'ember-sortable/utils/array';
  
        const arr = [ 'one', 'two', 'three' ];
        removeItem(arr, 'two'); // => [ 'one', 'three' ]
      </Ui::Code>
    </Ui::Subsection>
  </Ui::Section>
  */
  {
    "id": "ziNeT0Kq",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"API\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@title\"],[\"Modifiers\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@title\",\"@description\",\"@params\"],[\"{{draggable-item}}\",\"Modifier to make a DOM element draggable.\",[28,[37,3],[[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"data\",\"any\",\"Data to associate with the item.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"group\",\"string\",\"Name of the group this item belongs to.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"dragHandleElement\",\"HTMLElement\",\"Element that acts as the drag handle.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"disabled\",\"boolean\",\"Prevents the element to be dragged.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"isDraggingClass\",\"string\",\"Class added to the element when it is being drag.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onDragStart\",\"function\",\"Callback fired when the drag starts.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onDragEnd\",\"function\",\"Callback fired when the item is dropped.\"]]]],null]]],null],[1,\"\\n\\n    \"],[8,[39,2],null,[[\"@title\",\"@description\",\"@params\"],[\"{{drop-target}}\",\"Modifier to define a drop target for draggable items.\",[28,[37,3],[[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"data\",\"any\",\"Data to associate with the drop target.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"group\",\"string\",\"Name of the group this drop target belongs to.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"accepts\",\"string[]\",\"Array of groups this target accepts from.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"default\",\"description\"],[\"direction\",\"\\\"vertical\\\" | \\\"horizontal\\\"\",\"\\\"vertical\\\"\",\"Shortcut to define presets of allowed edges.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"allowedEdges\",\"(\\\"top\\\" | \\\"bottom\\\" | \\\"left\\\" | \\\"right\\\")[]\",\"Array of allowed edges to detect on drop.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"default\",\"description\"],[\"allowDropOnItself\",\"boolean\",\"false\",\"Allow an element to drop on itself if it's both a draggable item and a drop target.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"default\",\"description\"],[\"allowDropOnChildren\",\"boolean\",\"false\",\"Allow the target to receive drops from a parent draggable (this option is valid for nested targets)\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"disabled\",\"boolean\",\"Prevents the element to receive drops.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"isOnTargetClass\",\"string\",\"Class added to the element when an item is dragged over.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"canDrop\",\"function\",\"Callback used to conditionally allow drops.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onDrop\",\"function\",\"Callback fired when an item is dropped.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onHover\",\"function\",\"Callback fired when an item is dragged over.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onDragEnter\",\"function\",\"Callback fired when a dragged item enters this target.\"]]],[28,[37,4],null,[[\"name\",\"type\",\"description\"],[\"onDragLeave\",\"function\",\"Callback fired when a dragged item leaves this target.\"]]]],null]]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@title\"],[\"Utilities\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,2],[12],[1,\"\\n      All of the utilities listed here are optional convenience functions. You can also substitute them for your own similiar utilities if you want to.\\n    \"],[13],[1,\"\\n\\n    \"],[8,[39,6],null,[[\"@lang\"],[\"js\"]],[[\"default\"],[[[[1,\"\\n      import { insertAt } from 'ember-sortable/utils/array';\\n\\n      const arr = [ 'one', 'two', 'three' ];\\n      insertAt(arr, 1, 'new!'); // => [ 'one', 'new!', 'two', 'three' ]\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,6],null,[[\"@lang\"],[\"js\"]],[[\"default\"],[[[[1,\"\\n      import { removeAt } from 'ember-sortable/utils/array';\\n\\n      const arr = [ 'one', 'two', 'three' ];\\n      removeAt(arr, 1); // => [ 'one', 'three' ]\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,6],null,[[\"@lang\"],[\"js\"]],[[\"default\"],[[[[1,\"\\n      import { insertBefore } from 'ember-sortable/utils/array';\\n\\n      const arr = [ 'one', 'two', 'three' ];\\n      insertBefore(arr, 'two', 'new!'); // => [ 'one', 'new!', 'two', 'three' ]\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,6],null,[[\"@lang\"],[\"js\"]],[[\"default\"],[[[[1,\"\\n      import { insertAfter } from 'ember-sortable/utils/array';\\n\\n      const arr = [ 'one', 'two', 'three' ];\\n      insertAfter(arr, 'two', 'new!'); // => [ 'one', 'two', 'new!', 'three' ]\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,6],null,[[\"@lang\"],[\"js\"]],[[\"default\"],[[[[1,\"\\n      import { removeItem } from 'ember-sortable/utils/array';\\n\\n      const arr = [ 'one', 'two', 'three' ];\\n      removeItem(arr, 'two'); // => [ 'one', 'three' ]\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"ui/section\",\"ui/subsection\",\"ui/function\",\"array\",\"hash\",\"p\",\"ui/code\"]]",
    "moduleName": "test-app/components/api/index.hbs",
    "isStrictMode": false
  });
  class ApiComponent extends _component2.default {}
  _exports.default = ApiComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ApiComponent);
});
;define("test-app/components/examples/board/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _class2, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Subsection @title="Board">
  
    <style type="text/css">
      .a {
        transform: rotate(-5deg);
      }
    </style>
    <div class="hstack gap-3 align-items-start overflow-scroll">
      {{#each this.columns as |column|}}
        <div
          class="card flex-grow-0 flex-shrink-0 bg-body-tertiary"
          style="width: 260px;"
          {{sortable-item
            data=column
            group="columns"
            direction="horizontal"
            onDrop=this.moveColumn
          }}
        >
          <div class="card-header fw-bold text-uppercase">
            {{column.name}}
          </div>
          <div class="card-body p-2 vstack gap-2">
            {{#each column.cards as |card|}}
              <div
                class="card p-2 d-flex flex-row align-items-center bg-body-secondary"
                {{sortable-item
                  group="cards"
                  data=(hash item=card parent=column)
                  onDrop=this.moveCard
                }}
              >
                <img src="https://api.dicebear.com/8.x/bottts-neutral/svg?seed={{card.seed}}" width="48" height="48" class="rounded pe-none" />
                <div class="ms-3 flex-grow-1">
                  <h5 class="card-title">{{card.title}}</h5>
                  <p class="card-text">{{card.text}}</p>
                </div>
              </div>
            {{else}}
              <div
                class="text-center py-4 text-secondary"
                {{drop-target
                  group="cards"
                  data=(hash parent=column)
                  onDrop=this.moveCard
                }}
              >
                Empty
              </div>
            {{/each}}
          </div>
        </div>
      {{/each}}
    </div>
  </Ui::Subsection>
  */
  {
    "id": "fFf6SHCM",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Board\"]],[[\"default\"],[[[[1,\"\\n\\n  \"],[10,\"style\"],[14,4,\"text/css\"],[12],[1,\"\\n    .a {\\n      transform: rotate(-5deg);\\n    }\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"hstack gap-3 align-items-start overflow-scroll\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"columns\"]]],null]],null],null,[[[1,\"      \"],[11,0],[24,0,\"card flex-grow-0 flex-shrink-0 bg-body-tertiary\"],[24,5,\"width: 260px;\"],[4,[38,5],null,[[\"data\",\"group\",\"direction\",\"onDrop\"],[[30,1],\"columns\",\"horizontal\",[30,0,[\"moveColumn\"]]]]],[12],[1,\"\\n        \"],[10,0],[14,0,\"card-header fw-bold text-uppercase\"],[12],[1,\"\\n          \"],[1,[30,1,[\"name\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"card-body p-2 vstack gap-2\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1,[\"cards\"]]],null]],null],null,[[[1,\"            \"],[11,0],[24,0,\"card p-2 d-flex flex-row align-items-center bg-body-secondary\"],[4,[38,5],null,[[\"group\",\"data\",\"onDrop\"],[\"cards\",[28,[37,6],null,[[\"item\",\"parent\"],[[30,2],[30,1]]]],[30,0,[\"moveCard\"]]]]],[12],[1,\"\\n              \"],[10,\"img\"],[15,\"src\",[29,[\"https://api.dicebear.com/8.x/bottts-neutral/svg?seed=\",[30,2,[\"seed\"]]]]],[14,\"width\",\"48\"],[14,\"height\",\"48\"],[14,0,\"rounded pe-none\"],[12],[13],[1,\"\\n              \"],[10,0],[14,0,\"ms-3 flex-grow-1\"],[12],[1,\"\\n                \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[1,[30,2,[\"title\"]]],[13],[1,\"\\n                \"],[10,2],[14,0,\"card-text\"],[12],[1,[30,2,[\"text\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[2]],[[[1,\"            \"],[11,0],[24,0,\"text-center py-4 text-secondary\"],[4,[38,10],null,[[\"group\",\"data\",\"onDrop\"],[\"cards\",[28,[37,6],null,[[\"parent\"],[[30,1]]]],[30,0,[\"moveCard\"]]]]],[12],[1,\"\\n              Empty\\n            \"],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"column\",\"card\"],false,[\"ui/subsection\",\"style\",\"div\",\"each\",\"-track-array\",\"sortable-item\",\"hash\",\"img\",\"h5\",\"p\",\"drop-target\"]]",
    "moduleName": "test-app/components/examples/board/index.hbs",
    "isStrictMode": false
  });
  let Column = (_class = class Column {
    constructor(name, cards = []) {
      _initializerDefineProperty(this, "cards", _descriptor, this);
      this.name = name;
      this.cards = cards;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cards", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class);
  class Card {
    constructor(title, text, seed) {
      this.title = title;
      this.text = text;
      this.seed = seed;
    }
  }
  let ExamplesBoardComponent = _exports.default = (_class2 = class ExamplesBoardComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "columns", _descriptor2, this);
    }
    moveColumn({
      source: {
        data: draggedItem
      },
      target: {
        data: dropTarget,
        edge
      }
    }) {
      this.columns = (0, _array.removeItem)(this.columns, draggedItem);
      if (edge === 'top') {
        this.columns = (0, _array.insertBefore)(this.columns, dropTarget, draggedItem);
      } else {
        this.columns = (0, _array.insertAfter)(this.columns, dropTarget, draggedItem);
      }
    }
    moveCard({
      source: {
        data: {
          item: draggedItem,
          parent: draggedItemParent
        }
      },
      target: {
        data: {
          item: dropTarget,
          parent: dropTargetParent
        },
        edge
      }
    }) {
      draggedItemParent.cards = (0, _array.removeItem)(draggedItemParent.cards, draggedItem);
      if (edge === 'top') {
        dropTargetParent.cards = (0, _array.insertBefore)(dropTargetParent.cards, dropTarget, draggedItem);
      } else {
        dropTargetParent.cards = (0, _array.insertAfter)(dropTargetParent.cards, dropTarget, draggedItem);
      }
    }
  }, (_descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "columns", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [new Column('Todo', [new Card('Sup 1', 'Lorem ipsum', 1), new Card('Sup 2', 'Lorem ipsum', 2), new Card('Sup 3', 'Lorem ipsum', 3)]), new Column('In progress', [new Card('Sup 4', 'Lorem ipsum', 4), new Card('Sup 5', 'Lorem ipsum', 5)]), new Column('Done', [new Card('Sup 6', 'Lorem ipsum', 6), new Card('Sup 7', 'Lorem ipsum', 7), new Card('Sup 8', 'Lorem ipsum', 8), new Card('Sup 9', 'Lorem ipsum', 9)])];
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "moveColumn", [_object.action], Object.getOwnPropertyDescriptor(_class2.prototype, "moveColumn"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "moveCard", [_object.action], Object.getOwnPropertyDescriptor(_class2.prototype, "moveCard"), _class2.prototype)), _class2);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ExamplesBoardComponent);
});
;define("test-app/components/examples/handle/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Subsection @title="Drag handle">
    <p>
      You can specify the dragging handle element using the <code>\{{draggable-item-handle}}</code>. This will override the default behaviour of making the whole item draggable.
    </p>
  
    <Ui::Alert::Info>
      Alternatively, the <code>\{{draggable-item}}</code> and <code>\{{sortable-item}}</code> modifiers can receive an element reference via the <code>dragHandleElement</code> option to act as the handle.
    </Ui::Alert::Info>
  
    <div class="row">
      <div class="col-md-8">
        <Ui::Code @code={{this.jsCode}} @lang="js" />
        <Ui::Code @code={{this.hbsCode}} @lang="hbs" />
      </div>
      <div class="col-md-4">
        <ul class="list-group mb-3">
          {{#each this.items as |item|}}
            <li
              {{sortable-item data=item onDrop=this.move}}
              class="list-group-item"
            >
              <i class="fa-solid fa-grip-lines me-2" {{draggable-item-handle}}></i>
              {{item}}
            </li>
          {{/each}}
        </ul>
      </div>
    </div>
  </Ui::Subsection>
  */
  {
    "id": "4gCxPFrx",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Drag handle\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[12],[1,\"\\n    You can specify the dragging handle element using the \"],[10,\"code\"],[12],[1,\"{{draggable-item-handle}}\"],[13],[1,\". This will override the default behaviour of making the whole item draggable.\\n  \"],[13],[1,\"\\n\\n  \"],[8,[39,3],null,null,[[\"default\"],[[[[1,\"\\n    Alternatively, the \"],[10,\"code\"],[12],[1,\"{{draggable-item}}\"],[13],[1,\" and \"],[10,\"code\"],[12],[1,\"{{sortable-item}}\"],[13],[1,\" modifiers can receive an element reference via the \"],[10,\"code\"],[12],[1,\"dragHandleElement\"],[13],[1,\" option to act as the handle.\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"col-md-8\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@code\",\"@lang\"],[[30,0,[\"jsCode\"]],\"js\"]],null],[1,\"\\n      \"],[8,[39,5],null,[[\"@code\",\"@lang\"],[[30,0,[\"hbsCode\"]],\"hbs\"]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,8],[[28,[37,8],[[30,0,[\"items\"]]],null]],null],null,[[[1,\"          \"],[11,\"li\"],[24,0,\"list-group-item\"],[4,[38,10],null,[[\"data\",\"onDrop\"],[[30,1],[30,0,[\"move\"]]]]],[12],[1,\"\\n            \"],[11,\"i\"],[24,0,\"fa-solid fa-grip-lines me-2\"],[4,[38,12],null,null],[12],[13],[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"],[13],[1,\"\\n\"]],[1]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"item\"],false,[\"ui/subsection\",\"p\",\"code\",\"ui/alert/info\",\"div\",\"ui/code\",\"ul\",\"each\",\"-track-array\",\"li\",\"sortable-item\",\"i\",\"draggable-item-handle\"]]",
    "moduleName": "test-app/components/examples/handle/index.hbs",
    "isStrictMode": false
  });
  let ExamplesHandleComponent = _exports.default = (_class = class ExamplesHandleComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
      _defineProperty(this, "hbsCode", `
    <ul>
      {{#each this.items as |item|}}
        <li {{sortable-item data=item onDrop=this.move}}>
          <i class="fa-solid fa-grip-lines" {{draggable-item-handle}}></i>
          {{item}}
        </li>
      {{/each}}
    </ul>
  `);
    }
    get jsCode() {
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
    }
    move({
      source: {
        data: draggedItem
      },
      target: {
        data: dropTarget,
        edge
      }
    }) {
      this.items = (0, _array.removeItem)(this.items, draggedItem);
      if (edge === 'top') {
        this.items = (0, _array.insertBefore)(this.items, dropTarget, draggedItem);
      } else {
        this.items = (0, _array.insertAfter)(this.items, dropTarget, draggedItem);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['One', 'Two', 'Three', 'Four', 'Five'];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "move", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "move"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ExamplesHandleComponent);
});
;define("test-app/components/examples/index", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Section @title="Examples">
    <Examples::Handle />
    <Examples::SharedLists />
    <Examples::NestedLists />
    <Examples::Board />
    <Examples::WindowsDesktop />
  </Ui::Section>
  */
  {
    "id": "USReQlDZ",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Examples\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n  \"],[8,[39,2],null,null,null],[1,\"\\n  \"],[8,[39,3],null,null,null],[1,\"\\n  \"],[8,[39,4],null,null,null],[1,\"\\n  \"],[8,[39,5],null,null,null],[1,\"\\n\"]],[]]]]]],[],false,[\"ui/section\",\"examples/handle\",\"examples/shared-lists\",\"examples/nested-lists\",\"examples/board\",\"examples/windows-desktop\"]]",
    "moduleName": "test-app/components/examples/index.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/examples/nested-lists/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _class2, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Subsection @title="Nested lists">
  
    <p>
      Nested lists work the same as other lists, since <code>\{{drop-target}}</code>s <code>onDrop()</code> event doesn't bubble up to parent <code>\{{drop-target}}</code>s (this behaviour can be modified by setting the option <code>allowDropOnChildren</code> to <code>true</code>)
    </p>
  
    <div class="row mb-3">
      <div class="col-md-8">
        <Ui::Code @code={{this.jsCode}} @lang="js" />
        <Ui::Code @code={{this.hbsCode}} @lang="hbs" />
      </div>
      <div class="col-md-4">
        <ul class="list-group mb-3">
          {{#each this.root.childs as |item|}}
            <Examples::NestedLists::TreeItem
              @item={{item}}
              @parent={{this.root}}
              @onDrop={{this.move}}
            />
          {{/each}}
        </ul>
      </div>
    </div>
  </Ui::Subsection>
  */
  {
    "id": "zXpM8KN9",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Nested lists\"]],[[\"default\"],[[[[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    Nested lists work the same as other lists, since \"],[10,\"code\"],[12],[1,\"{{drop-target}}\"],[13],[1,\"s \"],[10,\"code\"],[12],[1,\"onDrop()\"],[13],[1,\" event doesn't bubble up to parent \"],[10,\"code\"],[12],[1,\"{{drop-target}}\"],[13],[1,\"s (this behaviour can be modified by setting the option \"],[10,\"code\"],[12],[1,\"allowDropOnChildren\"],[13],[1,\" to \"],[10,\"code\"],[12],[1,\"true\"],[13],[1,\")\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"row mb-3\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"col-md-8\"],[12],[1,\"\\n      \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"jsCode\"]],\"js\"]],null],[1,\"\\n      \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"hbsCode\"]],\"hbs\"]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"root\",\"childs\"]]],null]],null],null,[[[1,\"          \"],[8,[39,8],null,[[\"@item\",\"@parent\",\"@onDrop\"],[[30,1],[30,0,[\"root\"]],[30,0,[\"move\"]]]],null],[1,\"\\n\"]],[1]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"item\"],false,[\"ui/subsection\",\"p\",\"code\",\"div\",\"ui/code\",\"ul\",\"each\",\"-track-array\",\"examples/nested-lists/tree-item\"]]",
    "moduleName": "test-app/components/examples/nested-lists/index.hbs",
    "isStrictMode": false
  });
  let Item = (_class = class Item {
    constructor(name, childs = []) {
      _initializerDefineProperty(this, "childs", _descriptor, this);
      this.name = name;
      this.childs = childs;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "childs", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class);
  const dump = function (node, depth = 0, indent = '  ') {
    if (node.childs.length) {
      return `new Item('${node.name}', [\n${indent.repeat(depth + 1)}${node.childs.map(child => dump(child, depth + 1, indent)).join(`,\n${indent.repeat(depth + 1)}`)}\n${indent.repeat(depth)}])`;
    }
    return `new Item('${node.name}')`;
  };
  let ExamplesNestedListsComponent = _exports.default = (_class2 = class ExamplesNestedListsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "root", _descriptor2, this);
      _defineProperty(this, "hbsCode", `
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
  `);
    }
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
          const { data: { item: draggedItem, parent: draggedItemParent }, group: fromList } = source;
          const { data: { item: dropTarget, parent: dropTargetParent }, group: toList, edge, tree } = target;

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
    move({
      source,
      target
    }) {
      const {
        data: {
          item: draggedItem,
          parent: draggedItemParent
        },
        group: fromList
      } = source;
      const {
        data: {
          item: dropTarget,
          parent: dropTargetParent
        },
        group: toList,
        edge,
        tree
      } = target;
      draggedItemParent.childs = (0, _array.removeItem)(draggedItemParent.childs, draggedItem);
      const parent = tree === 'make-child' ? dropTarget : dropTargetParent;
      if (edge === 'top') {
        parent.childs = (0, _array.insertBefore)(parent.childs, dropTarget, draggedItem);
      } else {
        parent.childs = (0, _array.insertAfter)(parent.childs, dropTarget, draggedItem);
      }
    }
  }, (_descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "root", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new Item('root', [new Item('One'), new Item('Two', [new Item('Six'), new Item('Seven', [new Item('Eight')])]), new Item('Three'), new Item('Four'), new Item('Five')]);
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "move", [_object.action], Object.getOwnPropertyDescriptor(_class2.prototype, "move"), _class2.prototype)), _class2);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ExamplesNestedListsComponent);
});
;define("test-app/components/examples/nested-lists/tree-item", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li
    {{sortable-item data=(hash item=@item parent=@parent) onDrop=@onDrop}}
    class="list-group-item"
  >
    {{@item.name}}
    {{#if @item.childs}}
    <ul class="list-group mb-3">
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
  */
  {
    "id": "2JH3duaG",
    "block": "[[[11,\"li\"],[24,0,\"list-group-item\"],[4,[38,1],null,[[\"data\",\"onDrop\"],[[28,[37,2],null,[[\"item\",\"parent\"],[[30,1],[30,2]]]],[30,3]]]],[12],[1,\"\\n  \"],[1,[30,1,[\"name\"]]],[1,\"\\n\"],[41,[30,1,[\"childs\"]],[[[1,\"  \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"childs\"]]],null]],null],null,[[[1,\"      \"],[8,[39,7],null,[[\"@item\",\"@parent\",\"@onDrop\"],[[30,4],[30,1],[30,3]]],null],[1,\"\\n\"]],[4]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"@item\",\"@parent\",\"@onDrop\",\"child\"],false,[\"li\",\"sortable-item\",\"hash\",\"if\",\"ul\",\"each\",\"-track-array\",\"examples/nested-lists/tree-item\"]]",
    "moduleName": "test-app/components/examples/nested-lists/tree-item.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/examples/shared-lists/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Subsection @title="Shared Lists">
  
    <p>
      By playing with both <code>group</code> and <code>accepts</code> properties, you can manage where items can be dragged and dropped from different lists.
    </p>
  
    <p>
      In this example, the top list accepts drops from both top and bottom lists, while the bottom list only accepts drops from the top one.
    </p>
  
    <div class="row">
      <div class="col-md-8">
        <Ui::Code @code={{this.jsCode}} @lang="js" />
        <Ui::Code @code={{this.hbsCode}} @lang="hbs" />
      </div>
      <div class="col-md-4">
        <ul class="list-group mb-3">
          {{#each this.itemsTop as |item|}}
            <li
              {{sortable-item
                data=item
                group="itemsTop"
                accepts=(array "itemsTop" "itemsBottom")
                onDrop=this.move
              }}
              class="list-group-item"
            >
              {{item}}
            </li>
          {{/each}}
        </ul>
        <ul class="list-group mb-3">
          {{#each this.itemsBottom as |item|}}
            <li
              {{sortable-item
                data=item
                group="itemsBottom"
                accepts="itemsTop"
                onDrop=this.move
              }}
              class="list-group-item"
            >
              {{item}}
            </li>
          {{/each}}
        </ul>
      </div>
    </div>
  </Ui::Subsection>
  */
  {
    "id": "E+5gdsP3",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Shared Lists\"]],[[\"default\"],[[[[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    By playing with both \"],[10,\"code\"],[12],[1,\"group\"],[13],[1,\" and \"],[10,\"code\"],[12],[1,\"accepts\"],[13],[1,\" properties, you can manage where items can be dragged and dropped from different lists.\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    In this example, the top list accepts drops from both top and bottom lists, while the bottom list only accepts drops from the top one.\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"col-md-8\"],[12],[1,\"\\n      \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"jsCode\"]],\"js\"]],null],[1,\"\\n      \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"hbsCode\"]],\"hbs\"]],null],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"itemsTop\"]]],null]],null],null,[[[1,\"          \"],[11,\"li\"],[24,0,\"list-group-item\"],[4,[38,9],null,[[\"data\",\"group\",\"accepts\",\"onDrop\"],[[30,1],\"itemsTop\",[28,[37,10],[\"itemsTop\",\"itemsBottom\"],null],[30,0,[\"move\"]]]]],[12],[1,\"\\n            \"],[1,[30,1]],[1,\"\\n          \"],[13],[1,\"\\n\"]],[1]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"itemsBottom\"]]],null]],null],null,[[[1,\"          \"],[11,\"li\"],[24,0,\"list-group-item\"],[4,[38,9],null,[[\"data\",\"group\",\"accepts\",\"onDrop\"],[[30,2],\"itemsBottom\",\"itemsTop\",[30,0,[\"move\"]]]]],[12],[1,\"\\n            \"],[1,[30,2]],[1,\"\\n          \"],[13],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"item\",\"item\"],false,[\"ui/subsection\",\"p\",\"code\",\"div\",\"ui/code\",\"ul\",\"each\",\"-track-array\",\"li\",\"sortable-item\",\"array\"]]",
    "moduleName": "test-app/components/examples/shared-lists/index.hbs",
    "isStrictMode": false
  });
  let ExamplesSharedListsComponent = _exports.default = (_class = class ExamplesSharedListsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "itemsTop", _descriptor, this);
      _initializerDefineProperty(this, "itemsBottom", _descriptor2, this);
      _defineProperty(this, "hbsCode", `
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
  `);
    }
    get jsCode() {
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
    move({
      source,
      target
    }) {
      const {
        data: draggedItem,
        group: fromList
      } = source;
      const {
        data: dropTarget,
        group: toList,
        edge
      } = target;
      this[fromList] = (0, _array.removeItem)(this[fromList], draggedItem);
      if (edge === 'top') {
        this[toList] = (0, _array.insertBefore)(this[toList], dropTarget, draggedItem);
      } else {
        this[toList] = (0, _array.insertAfter)(this[toList], dropTarget, draggedItem);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemsTop", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['One', 'Two', 'Three', 'Four', 'Five'];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "itemsBottom", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "move", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "move"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ExamplesSharedListsComponent);
});
;define("test-app/components/examples/windows-desktop/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _template, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _class2, _descriptor3, _class3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <style type="text/css">
    .desktop {
      position: relative;
      background: #008080;
      /*width: 600px;*\/
      height: 400px;
      overflow: hidden;
    }
    .desktop-icon {
      position: absolute;
      width: 96px;
    }
    .desktop-icon img {
      pointer-events: none;
      margin: 0 auto 4px;
      width: 48px;
      height: 48px;
      display: block;
    }
    .desktop-icon span {
      display: block;
      font-size: 14px;
      text-align: center;
    }
  
    .bsod {
      position: absolute;
      width: 100%;
      height: 100%;
      background: blue;
      font-family: monospace;
    }
    .bsod .message {
      max-width: 400px;
    }
    .bsod .title {
      text-align: center;
    }
    .bsod .title span {
      background: gray;
      color: blue;
      padding: 0 8px;
    }
  </style>
  
  <Ui::Subsection @title="Windows 98">
    <p>
      This example showcases the separate uses of <code>\{{draggable-item}}</code> and <code>\{{drop-target}}.</code>
    </p>
  
    <p>
      <code>\{{draggable-item}}</code> allows the icons to be dragged around, and <code>\{{drop-target}}</code> is used for the whole container (the desktop) to capture the new drop coordinates, and also the trash bin icon to allow you to delete stuff.
    </p>
  
    <div class="desktop" {{drop-target onDrop=this.move}}>
      {{#each this.icons as |icon|}}
        <div
          class="desktop-icon"
          style="{{icon.position}}"
          {{draggable-item data=icon}}
        >
          <img src="{{icon.image}}" />
          <span>{{icon.name}}</span>
        </div>
      {{/each}}
      <div
        class="desktop-icon"
        style="{{this.trash.position}}"
        {{draggable-item data=this.trash}}
        {{drop-target onDrop=this.delete data=this.trash}}
      >
        <img src="{{this.trash.image}}" />
        <span>{{this.trash.name}}</span>
      </div>
  
      {{#if this.isFatalErrorState}}
        <div class="bsod d-flex justify-content-center align-items-center">
          <div class="message">
            <p class="title">
              <span>WINDOWS</span>
            </p>
            <p>An error has occurred.</p>
            <p>Press F5 to restart your computer. If you do this, you will lose any unsaved information in the current tab.</p>
          </div>
        </div>
      {{/if}}
    </div>
  </Ui::Subsection>
  */
  {
    "id": "3GToYfwu",
    "block": "[[[10,\"style\"],[14,4,\"text/css\"],[12],[1,\"\\n  .desktop {\\n    position: relative;\\n    background: #008080;\\n    /*width: 600px;*/\\n    height: 400px;\\n    overflow: hidden;\\n  }\\n  .desktop-icon {\\n    position: absolute;\\n    width: 96px;\\n  }\\n  .desktop-icon img {\\n    pointer-events: none;\\n    margin: 0 auto 4px;\\n    width: 48px;\\n    height: 48px;\\n    display: block;\\n  }\\n  .desktop-icon span {\\n    display: block;\\n    font-size: 14px;\\n    text-align: center;\\n  }\\n\\n  .bsod {\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    background: blue;\\n    font-family: monospace;\\n  }\\n  .bsod .message {\\n    max-width: 400px;\\n  }\\n  .bsod .title {\\n    text-align: center;\\n  }\\n  .bsod .title span {\\n    background: gray;\\n    color: blue;\\n    padding: 0 8px;\\n  }\\n\"],[13],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\"],[\"Windows 98\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[12],[1,\"\\n    This example showcases the separate uses of \"],[10,\"code\"],[12],[1,\"{{draggable-item}}\"],[13],[1,\" and \"],[10,\"code\"],[12],[1,\"{{drop-target}}.\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"code\"],[12],[1,\"{{draggable-item}}\"],[13],[1,\" allows the icons to be dragged around, and \"],[10,\"code\"],[12],[1,\"{{drop-target}}\"],[13],[1,\" is used for the whole container (the desktop) to capture the new drop coordinates, and also the trash bin icon to allow you to delete stuff.\\n  \"],[13],[1,\"\\n\\n  \"],[11,0],[24,0,\"desktop\"],[4,[38,5],null,[[\"onDrop\"],[[30,0,[\"move\"]]]]],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"icons\"]]],null]],null],null,[[[1,\"      \"],[11,0],[24,0,\"desktop-icon\"],[16,5,[30,1,[\"position\"]]],[4,[38,8],null,[[\"data\"],[[30,1]]]],[12],[1,\"\\n        \"],[10,\"img\"],[15,\"src\",[29,[[30,1,[\"image\"]]]]],[12],[13],[1,\"\\n        \"],[10,1],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[11,0],[24,0,\"desktop-icon\"],[16,5,[30,0,[\"trash\",\"position\"]]],[4,[38,8],null,[[\"data\"],[[30,0,[\"trash\"]]]]],[4,[38,5],null,[[\"onDrop\",\"data\"],[[30,0,[\"delete\"]],[30,0,[\"trash\"]]]]],[12],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[29,[[30,0,[\"trash\",\"image\"]]]]],[12],[13],[1,\"\\n      \"],[10,1],[12],[1,[30,0,[\"trash\",\"name\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isFatalErrorState\"]],[[[1,\"      \"],[10,0],[14,0,\"bsod d-flex justify-content-center align-items-center\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"message\"],[12],[1,\"\\n          \"],[10,2],[14,0,\"title\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"WINDOWS\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"An error has occurred.\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Press F5 to restart your computer. If you do this, you will lose any unsaved information in the current tab.\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"icon\"],false,[\"style\",\"ui/subsection\",\"p\",\"code\",\"div\",\"drop-target\",\"each\",\"-track-array\",\"draggable-item\",\"img\",\"span\",\"if\"]]",
    "moduleName": "test-app/components/examples/windows-desktop/index.hbs",
    "isStrictMode": false
  });
  let Icon = (_class = class Icon {
    get position() {
      return (0, _template.htmlSafe)(`top: ${this.y}px; left: ${this.x}px`);
    }
    constructor(x = 0, y = 0) {
      _initializerDefineProperty(this, "x", _descriptor, this);
      _initializerDefineProperty(this, "y", _descriptor2, this);
      this.x = x;
      this.y = y;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "x", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "y", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  class GenericIcon extends Icon {
    constructor(x, y, name, image) {
      super(...arguments);
      this.name = name;
      this.image = image;
    }
  }
  class MyComputerIcon extends GenericIcon {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "name", 'My Computer');
      _defineProperty(this, "image", 'https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png');
    }
  }
  let TrashIcon = (_class2 = class TrashIcon extends Icon {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "isFull", _descriptor3, this);
      _defineProperty(this, "name", 'Recycle Bin');
    }
    get image() {
      return this.isFull ? 'https://win98icons.alexmeub.com/icons/png/recycle_bin_full-4.png' : 'https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png';
    }
  }, (_descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isFull", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class2);
  const GRID = {
    MARGIN: 8,
    HEIGHT: 96,
    WIDTH: 96
  };
  let ExamplesSharedListsComponent = _exports.default = (_class3 = class ExamplesSharedListsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "icons", _descriptor4, this);
      _defineProperty(this, "trash", new TrashIcon(GRID.MARGIN + GRID.WIDTH * 5, GRID.MARGIN + GRID.HEIGHT * 3, 'Recycle Bin'));
    }
    get isFatalErrorState() {
      return !this.icons.find(icon => icon instanceof MyComputerIcon);
    }
    move(payload) {
      const icon = payload.source.data;
      const {
        pageX: fromX,
        pageY: fromY
      } = payload.event.location.initial.input;
      const {
        pageX: toX,
        pageY: toY
      } = payload.event.location.current.input;
      icon.x = icon.x + toX - fromX;
      icon.y = icon.y + toY - fromY;
    }
    delete({
      source: {
        data: icon
      },
      target: {
        data: target
      }
    }) {
      if (!confirm(`Are you sure you want to delete "${icon.name}"?`)) {
        return;
      }
      this.icons = this.icons.filter(i => i !== icon);
      target.isFull = true;
    }
  }, (_descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "icons", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [new MyComputerIcon(GRID.MARGIN + GRID.WIDTH * 0, GRID.MARGIN + GRID.HEIGHT * 0), new GenericIcon(GRID.MARGIN + GRID.WIDTH * 0, GRID.MARGIN + GRID.HEIGHT * 1, 'My Documents', 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png'), new GenericIcon(GRID.MARGIN + GRID.WIDTH * 0, GRID.MARGIN + GRID.HEIGHT * 2, 'top secret', 'https://win98icons.alexmeub.com/icons/png/directory_closed-4.png'), new GenericIcon(GRID.MARGIN + GRID.WIDTH * 0, GRID.MARGIN + GRID.HEIGHT * 3, 'fancy.html', 'https://win98icons.alexmeub.com/icons/png/html-5.png'), new GenericIcon(GRID.MARGIN + GRID.WIDTH * 1, GRID.MARGIN + GRID.HEIGHT * 0, 'DELETE ME!.txt', 'https://win98icons.alexmeub.com/icons/png/notepad_file-2.png'), new GenericIcon(GRID.MARGIN + GRID.WIDTH * 1, GRID.MARGIN + GRID.HEIGHT * 1, 'flower.bmp', 'https://win98icons.alexmeub.com/icons/png/paint_file-4.png')];
    }
  }), _applyDecoratedDescriptor(_class3.prototype, "move", [_object.action], Object.getOwnPropertyDescriptor(_class3.prototype, "move"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "delete", [_object.action], Object.getOwnPropertyDescriptor(_class3.prototype, "delete"), _class3.prototype)), _class3);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ExamplesSharedListsComponent);
});
;define("test-app/components/header", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <style type="text/css">
  .fart1 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 200px;
  
    --c1: var(--c);
    --c2: hsl(from var(--c) h s calc(l + var(--v)));
  
    --_g: #0000 8%,var(--c1) 0 17%,#0000 0 58%;
    background:
      linear-gradient(135deg,#0000 20.5%,var(--c1) 0 29.5%,#0000 0) 0 calc(var(--s)/4),
      linear-gradient( 45deg,var(--_g)) calc(var(--s)/2) 0,
      linear-gradient(135deg,var(--_g),var(--c1) 0 67%,#0000 0),
      linear-gradient( 45deg,var(--_g),var(--c1) 0 67%,#0000 0 83%,var(--c1) 0 92%,#0000 0),
      var(--c2);
    background-size: var(--s) var(--s);
  }
  
  .fart2 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 60px;
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: hsl(from var(--c) h s calc(l - var(--v)));
    --c3: var(--c);
  
    background:
      var(--s) var(--s)/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(135deg, var(--c1) 10%, var(--c2) 0 25%, transparent 0 75%, var(--c2) 0 90%, var(--c1) 90%),
      0 0/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(135deg, var(--c1) 10%, var(--c3) 0 25%, transparent 0 75%, var(--c3) 0 90%, var(--c1) 90%),
      0 0/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(45deg, var(--c1) 10%, var(--c2) 0 25%, var(--c3) 0 40%, var(--c1) 0 60%, var(--c3) 0 75%, var(--c2) 0 90%, var(--c1) 90%);
  }
  
  .fart3 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 50px;
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: var(--c);
    background:
      radial-gradient(circle at 100% 50%, transparent 20%, var(--c1) 21%, var(--c1) 34%, transparent 35%, transparent),
      radial-gradient(circle at 0% 50%, transparent 20%, var(--c1) 21%, var(--c1) 34%, transparent 35%, transparent) 0 calc(var(--s) * -1);
    background-color: var(--c2);
    background-size: calc(var(--s) * 1.5) calc(var(--s) * 2);
  }
  
  .fart4 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 150px;
  
    --c1: var(--c);
    --c2: hsl(from var(--c) h s calc(l + var(--v)));
    --c3: hsl(from var(--c) h s calc(l + var(--v) * 2));
    --c4: hsl(from var(--c) h s calc(l + var(--v) * 3));
    --gp: 50%/var(--s) var(--s);
    background-color: var(--c1);
    background:
      repeating-conic-gradient(from 90deg at 75% 75% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 180deg at 50% 75% , var(--c1) 0% 12.5%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 135deg at 62.5% 62.5% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 134.5deg at 25% 75% , var(--c1) 0% 12.65%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 135deg at 12.5% 62.5% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 225deg at 12.5% 62.5% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 225deg at 25% 50% , var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 90deg at 75% 75% , var(--c1) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 135deg at 50% 50% , var(--c1) 0% 37.5%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 225deg at 75% 50% , var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 45deg at 62.5% 62.5% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 90deg at 75% 25% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 45deg at 62.5% 12.5%, var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from -45deg at 62.5% 12.5%, var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 45deg at 50% 25%, var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from -45deg at 12.5% 12.5%, var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from 0deg at 0% 25%, var(--c3) 0% 12.50%, #fff0 0% 100%) var(--gp),
      repeating-conic-gradient(from -90deg at 25% 25%, var(--c2) 0% 12.50%, #fff0 0% 100%) var(--gp),
      repeating-linear-gradient(180deg, var(--c1) 0 25%, var(--c2) 0 50%, var(--c1) 0 100% ) var(--gp);
  }
  
  .fart5 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 100px; /* diameter *\/
    --t: 4px; /* thickness *\/
    --o: 10px; /* offset *\/
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: var(--c);
    background-color: var(--c2);
    background-size: calc(var(--s) * 2 + var(--t) * 2) calc(var(--s) * 2 + var(--t) * 2);
    background-image:
      radial-gradient(transparent var(--s), var(--c1) var(--s), var(--c1) calc(var(--s) + var(--t)), transparent calc(var(--s) + var(--t))),
      radial-gradient(transparent var(--s), var(--c1) var(--s), var(--c1) calc(var(--s) + var(--t)), transparent calc(var(--s) + var(--t)));
    background-position: var(--o) var(--o), calc(var(--s) + var(--t) + var(--o)) calc(var(--s) + var(--t) + var(--o));
  }
  
  .fart6 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 200px; /* size *\/
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: var(--c);
    background:
      linear-gradient(135deg,#0000 18.75%,var(--c2) 0 31.25%,#0000 0),
      repeating-linear-gradient(45deg,var(--c2) -6.25% 6.25%,var(--c1) 0 18.75%);
    background-size: var(--s) var(--s);
  }
  
  .fart7 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 50px; /* size *\/
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: var(--c);
    background:
      linear-gradient(135deg, var(--c1) 25%, transparent 25%) calc(var(--s) * -1.5) 0,
      linear-gradient(225deg, var(--c1) 25%, transparent 25%) calc(var(--s) * -1.5) 0,
      linear-gradient(315deg, var(--c1) 25%, transparent 25%),
      linear-gradient(45deg, var(--c1) 25%, transparent 25%);
    background-size: var(--s) var(--s);
    background-color: var(--c2);
  }
  
  .fart8 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 90px;
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: hsl(from var(--c) h s calc(l - var(--v)));
    --c3: var(--c);
    --s1: calc(var(--s) * .5);
    --s2: calc(var(--s) * .6);
    background:
      radial-gradient(circle, var(--c1) calc(var(--s1) / 2), #0000 calc(var(--s1) / 2), #0000 var(--s1), var(--c2) var(--s1), var(--c2) var(--s2), #0000 var(--s2)) 0 0,
      radial-gradient(circle, var(--c2) calc(var(--s1) / 2), #0000 calc(var(--s1) / 2), #0000 var(--s1), var(--c1) var(--s1), var(--c1) var(--s2), #0000 var(--s2)) var(--s) var(--s),
      radial-gradient(circle, var(--c1) calc(var(--s1) / 4), #0000 calc(var(--s1) / 4)) var(--s) 0,
      radial-gradient(circle, var(--c2) calc(var(--s1) / 5), #0000 calc(var(--s1) / 5)) 0 var(--s);
    background-size: calc(var(--s) * 2) calc(var(--s) * 2);
    background-color: var(--c3);
    background-repeat: repeat;
  }
  
  .fart9 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 110px;
  
    --c1: hsl(from var(--c) h s calc(l + var(--v)));
    --c2: var(--c);
    background: linear-gradient(-45deg, #0000 50%, var(--c1) 50%, var(--c1) 60%, #0000 60%);
    background-size: var(--s) var(--s);
    background-color: var(--c2);
  }
  
  .fart10 {
    --c: var(--bs-tertiary-bg);
    --v: 3;
    --s: 100px;
  
    --c1: hsl(from var(--c) h s calc(l + var(--v) * 6));
    --c2: hsl(from var(--c) h s calc(l + var(--v) * 2));
    --c3: var(--c);
  
    --s1: var(--s);
    --s2: calc(var(--s) / 5);
    background-color: var(--c3);
    background-image:
      linear-gradient(var(--c1) 2px, transparent 2px),
      linear-gradient(90deg, var(--c1) 2px, transparent 2px),
      linear-gradient(var(--c2) 1px, transparent 1px),
      linear-gradient(90deg, var(--c2) 1px, transparent 1px);
    background-size: var(--s1) var(--s1), var(--s1) var(--s1), var(--s2) var(--s2), var(--s2) var(--s2);
    background-position: -10px -2px, -2px -2px, -1px -1px, -1px -1px;
  }
  </style>
  
  <div class="p-5 abg-body-tertiary fart1">
    <div class="container py-5">
      <h1 class="display-2">
        Ember draggable
      </h1>
      <p class="lead">
        Basic set of modifiers to create smooth drag and drop interfaces powered by the <a target="_blank" rel="noopener noreferrer"href="https://atlassian.design/components/pragmatic-drag-and-drop/about">Atlassian Design System</a>
      </p>
    </div>
  </div>
  */
  {
    "id": "TeppfBUk",
    "block": "[[[10,\"style\"],[14,4,\"text/css\"],[12],[1,\"\\n.fart1 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 200px;\\n\\n  --c1: var(--c);\\n  --c2: hsl(from var(--c) h s calc(l + var(--v)));\\n\\n  --_g: #0000 8%,var(--c1) 0 17%,#0000 0 58%;\\n  background:\\n    linear-gradient(135deg,#0000 20.5%,var(--c1) 0 29.5%,#0000 0) 0 calc(var(--s)/4),\\n    linear-gradient( 45deg,var(--_g)) calc(var(--s)/2) 0,\\n    linear-gradient(135deg,var(--_g),var(--c1) 0 67%,#0000 0),\\n    linear-gradient( 45deg,var(--_g),var(--c1) 0 67%,#0000 0 83%,var(--c1) 0 92%,#0000 0),\\n    var(--c2);\\n  background-size: var(--s) var(--s);\\n}\\n\\n.fart2 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 60px;\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: hsl(from var(--c) h s calc(l - var(--v)));\\n  --c3: var(--c);\\n\\n  background:\\n    var(--s) var(--s)/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(135deg, var(--c1) 10%, var(--c2) 0 25%, transparent 0 75%, var(--c2) 0 90%, var(--c1) 90%),\\n    0 0/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(135deg, var(--c1) 10%, var(--c3) 0 25%, transparent 0 75%, var(--c3) 0 90%, var(--c1) 90%),\\n    0 0/calc(var(--s) * 2) calc(var(--s) * 2) linear-gradient(45deg, var(--c1) 10%, var(--c2) 0 25%, var(--c3) 0 40%, var(--c1) 0 60%, var(--c3) 0 75%, var(--c2) 0 90%, var(--c1) 90%);\\n}\\n\\n.fart3 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 50px;\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: var(--c);\\n  background:\\n    radial-gradient(circle at 100% 50%, transparent 20%, var(--c1) 21%, var(--c1) 34%, transparent 35%, transparent),\\n    radial-gradient(circle at 0% 50%, transparent 20%, var(--c1) 21%, var(--c1) 34%, transparent 35%, transparent) 0 calc(var(--s) * -1);\\n  background-color: var(--c2);\\n  background-size: calc(var(--s) * 1.5) calc(var(--s) * 2);\\n}\\n\\n.fart4 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 150px;\\n\\n  --c1: var(--c);\\n  --c2: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c3: hsl(from var(--c) h s calc(l + var(--v) * 2));\\n  --c4: hsl(from var(--c) h s calc(l + var(--v) * 3));\\n  --gp: 50%/var(--s) var(--s);\\n  background-color: var(--c1);\\n  background:\\n    repeating-conic-gradient(from 90deg at 75% 75% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 180deg at 50% 75% , var(--c1) 0% 12.5%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 135deg at 62.5% 62.5% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 134.5deg at 25% 75% , var(--c1) 0% 12.65%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 135deg at 12.5% 62.5% , var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 225deg at 12.5% 62.5% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 225deg at 25% 50% , var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 90deg at 75% 75% , var(--c1) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 135deg at 50% 50% , var(--c1) 0% 37.5%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 225deg at 75% 50% , var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 45deg at 62.5% 62.5% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 90deg at 75% 25% , var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 45deg at 62.5% 12.5%, var(--c3) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from -45deg at 62.5% 12.5%, var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 45deg at 50% 25%, var(--c2) 0% 12.5%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from -45deg at 12.5% 12.5%, var(--c4) 0% 25%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from 0deg at 0% 25%, var(--c3) 0% 12.50%, #fff0 0% 100%) var(--gp),\\n    repeating-conic-gradient(from -90deg at 25% 25%, var(--c2) 0% 12.50%, #fff0 0% 100%) var(--gp),\\n    repeating-linear-gradient(180deg, var(--c1) 0 25%, var(--c2) 0 50%, var(--c1) 0 100% ) var(--gp);\\n}\\n\\n.fart5 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 100px; /* diameter */\\n  --t: 4px; /* thickness */\\n  --o: 10px; /* offset */\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: var(--c);\\n  background-color: var(--c2);\\n  background-size: calc(var(--s) * 2 + var(--t) * 2) calc(var(--s) * 2 + var(--t) * 2);\\n  background-image:\\n    radial-gradient(transparent var(--s), var(--c1) var(--s), var(--c1) calc(var(--s) + var(--t)), transparent calc(var(--s) + var(--t))),\\n    radial-gradient(transparent var(--s), var(--c1) var(--s), var(--c1) calc(var(--s) + var(--t)), transparent calc(var(--s) + var(--t)));\\n  background-position: var(--o) var(--o), calc(var(--s) + var(--t) + var(--o)) calc(var(--s) + var(--t) + var(--o));\\n}\\n\\n.fart6 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 200px; /* size */\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: var(--c);\\n  background:\\n    linear-gradient(135deg,#0000 18.75%,var(--c2) 0 31.25%,#0000 0),\\n    repeating-linear-gradient(45deg,var(--c2) -6.25% 6.25%,var(--c1) 0 18.75%);\\n  background-size: var(--s) var(--s);\\n}\\n\\n.fart7 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 50px; /* size */\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: var(--c);\\n  background:\\n    linear-gradient(135deg, var(--c1) 25%, transparent 25%) calc(var(--s) * -1.5) 0,\\n    linear-gradient(225deg, var(--c1) 25%, transparent 25%) calc(var(--s) * -1.5) 0,\\n    linear-gradient(315deg, var(--c1) 25%, transparent 25%),\\n    linear-gradient(45deg, var(--c1) 25%, transparent 25%);\\n  background-size: var(--s) var(--s);\\n  background-color: var(--c2);\\n}\\n\\n.fart8 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 90px;\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: hsl(from var(--c) h s calc(l - var(--v)));\\n  --c3: var(--c);\\n  --s1: calc(var(--s) * .5);\\n  --s2: calc(var(--s) * .6);\\n  background:\\n    radial-gradient(circle, var(--c1) calc(var(--s1) / 2), #0000 calc(var(--s1) / 2), #0000 var(--s1), var(--c2) var(--s1), var(--c2) var(--s2), #0000 var(--s2)) 0 0,\\n    radial-gradient(circle, var(--c2) calc(var(--s1) / 2), #0000 calc(var(--s1) / 2), #0000 var(--s1), var(--c1) var(--s1), var(--c1) var(--s2), #0000 var(--s2)) var(--s) var(--s),\\n    radial-gradient(circle, var(--c1) calc(var(--s1) / 4), #0000 calc(var(--s1) / 4)) var(--s) 0,\\n    radial-gradient(circle, var(--c2) calc(var(--s1) / 5), #0000 calc(var(--s1) / 5)) 0 var(--s);\\n  background-size: calc(var(--s) * 2) calc(var(--s) * 2);\\n  background-color: var(--c3);\\n  background-repeat: repeat;\\n}\\n\\n.fart9 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 110px;\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v)));\\n  --c2: var(--c);\\n  background: linear-gradient(-45deg, #0000 50%, var(--c1) 50%, var(--c1) 60%, #0000 60%);\\n  background-size: var(--s) var(--s);\\n  background-color: var(--c2);\\n}\\n\\n.fart10 {\\n  --c: var(--bs-tertiary-bg);\\n  --v: 3;\\n  --s: 100px;\\n\\n  --c1: hsl(from var(--c) h s calc(l + var(--v) * 6));\\n  --c2: hsl(from var(--c) h s calc(l + var(--v) * 2));\\n  --c3: var(--c);\\n\\n  --s1: var(--s);\\n  --s2: calc(var(--s) / 5);\\n  background-color: var(--c3);\\n  background-image:\\n    linear-gradient(var(--c1) 2px, transparent 2px),\\n    linear-gradient(90deg, var(--c1) 2px, transparent 2px),\\n    linear-gradient(var(--c2) 1px, transparent 1px),\\n    linear-gradient(90deg, var(--c2) 1px, transparent 1px);\\n  background-size: var(--s1) var(--s1), var(--s1) var(--s1), var(--s2) var(--s2), var(--s2) var(--s2);\\n  background-position: -10px -2px, -2px -2px, -1px -1px, -1px -1px;\\n}\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"p-5 abg-body-tertiary fart1\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"container py-5\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"display-2\"],[12],[1,\"\\n      Ember draggable\\n    \"],[13],[1,\"\\n    \"],[10,2],[14,0,\"lead\"],[12],[1,\"\\n      Basic set of modifiers to create smooth drag and drop interfaces powered by the \"],[10,3],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[14,6,\"https://atlassian.design/components/pragmatic-drag-and-drop/about\"],[12],[1,\"Atlassian Design System\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"style\",\"div\",\"h1\",\"p\",\"a\"]]",
    "moduleName": "test-app/components/header.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/introduction/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "ember-draggable/utils/array", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _array, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"ember-draggable/utils/array",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Section @title="Introduction">
    <p>
      Popular drag and drop libraries like <a href="https://bevacqua.github.io/dragula/" target="_blank">Dragula</a> and <a href="https://sortablejs.github.io/Sortable/" target="_blank">Sortable.js</a> manipulate the DOM, which conflicts with Ember.js and Glimmer. This library is an implementation of the pragmatic <a href="https://atlassian.design/components/pragmatic-drag-and-drop/about" target="_blank">drag and drop library from Atlassian</a> which doesn't manipulate the DOM, allowing us to leverage that task to Ember.js.
    </p>
  
    <p>
      Also, other Ember.js drag and drop addons have their logic implemented through components, which end up adding unwanted DOM elements in our templates, or are too specific and limited to just sort lists.
    </p>
  
    <p>
      This addon aims to provide a set of core modifiers (to avoid adding extra markup) that leverage the native drag and drop implementation of the browsers while also providing flexibility to create any kind of draggable interface.
    </p>
  
    <Ui::Subsection @title="Installation">
      <Ui::Code @lang="bash">
        npm install -d ember-draggable
      </Ui::Code>
    </Ui::Subsection>
  
    <Ui::Subsection @title="Usage">
      <p>
        This is the most basic example using the <code>\{{sortable-item}}</code> modifier, which combines the functionallity of both <code>\{{draggable-item}}</code> and <code>\{{drop-target}}</code> modifiers.
      </p>
  
      <p>
        The actual reordering is done in the the <code>move()</code> action, leveraged by the optional array utils provided with this addon, you can use your own custom logic if needed.
      </p>
  
      <div class="row mb-3">
        <div class="col-md-8">
          <Ui::Code @code={{this.hbsCode}} @lang="hbs" />
          <Ui::Code @code={{this.jsCode}} @lang="js" />
        </div>
        <div class="col-md-4">
          <ul class="list-group mb-3">
            {{#each this.items as |item|}}
              <li
                {{sortable-item data=item onDrop=this.move}}
                class="list-group-item"
              >
                {{item}}
              </li>
            {{/each}}
          </ul>
        </div>
      </div>
  
      {{!--
      <Ui::Alert @type="info">
        <Ui::Icon @name="lightbulb" @class="me-2" /><code>insertBefore()</code>, <code>insertAfter()</code> and <code>removeItem()</code> functions come from an array utils library bundled in the addon to ease the manipulation of arrays.
      </Ui::Alert>
      --}}
    </Ui::Subsection>
  </Ui::Section>
  */
  {
    "id": "3aFBYvM8",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"Introduction\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[12],[1,\"\\n    Popular drag and drop libraries like \"],[10,3],[14,6,\"https://bevacqua.github.io/dragula/\"],[14,\"target\",\"_blank\"],[12],[1,\"Dragula\"],[13],[1,\" and \"],[10,3],[14,6,\"https://sortablejs.github.io/Sortable/\"],[14,\"target\",\"_blank\"],[12],[1,\"Sortable.js\"],[13],[1,\" manipulate the DOM, which conflicts with Ember.js and Glimmer. This library is an implementation of the pragmatic \"],[10,3],[14,6,\"https://atlassian.design/components/pragmatic-drag-and-drop/about\"],[14,\"target\",\"_blank\"],[12],[1,\"drag and drop library from Atlassian\"],[13],[1,\" which doesn't manipulate the DOM, allowing us to leverage that task to Ember.js.\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    Also, other Ember.js drag and drop addons have their logic implemented through components, which end up adding unwanted DOM elements in our templates, or are too specific and limited to just sort lists.\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    This addon aims to provide a set of core modifiers (to avoid adding extra markup) that leverage the native drag and drop implementation of the browsers while also providing flexibility to create any kind of draggable interface.\\n  \"],[13],[1,\"\\n\\n  \"],[8,[39,3],null,[[\"@title\"],[\"Installation\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,4],null,[[\"@lang\"],[\"bash\"]],[[\"default\"],[[[[1,\"\\n      npm install -d ember-draggable\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,3],null,[[\"@title\"],[\"Usage\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,2],[12],[1,\"\\n      This is the most basic example using the \"],[10,\"code\"],[12],[1,\"{{sortable-item}}\"],[13],[1,\" modifier, which combines the functionallity of both \"],[10,\"code\"],[12],[1,\"{{draggable-item}}\"],[13],[1,\" and \"],[10,\"code\"],[12],[1,\"{{drop-target}}\"],[13],[1,\" modifiers.\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n      The actual reordering is done in the the \"],[10,\"code\"],[12],[1,\"move()\"],[13],[1,\" action, leveraged by the optional array utils provided with this addon, you can use your own custom logic if needed.\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"row mb-3\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"col-md-8\"],[12],[1,\"\\n        \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"hbsCode\"]],\"hbs\"]],null],[1,\"\\n        \"],[8,[39,4],null,[[\"@code\",\"@lang\"],[[30,0,[\"jsCode\"]],\"js\"]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"list-group mb-3\"],[12],[1,\"\\n\"],[42,[28,[37,9],[[28,[37,9],[[30,0,[\"items\"]]],null]],null],null,[[[1,\"            \"],[11,\"li\"],[24,0,\"list-group-item\"],[4,[38,11],null,[[\"data\",\"onDrop\"],[[30,1],[30,0,[\"move\"]]]]],[12],[1,\"\\n              \"],[1,[30,1]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[\"item\"],false,[\"ui/section\",\"p\",\"a\",\"ui/subsection\",\"ui/code\",\"code\",\"div\",\"ul\",\"each\",\"-track-array\",\"li\",\"sortable-item\"]]",
    "moduleName": "test-app/components/introduction/index.hbs",
    "isStrictMode": false
  });
  let IntroductionComponent = _exports.default = (_class = class IntroductionComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
      _defineProperty(this, "hbsCode", `
    <ul>
      {{#each this.items as |item|}}
        <li {{sortable-item data=item onDrop=this.move}}>
          {{item}}
        </li>
      {{/each}}
    </ul>
  `);
    }
    get jsCode() {
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
    }
    move({
      source: {
        data: draggedItem
      },
      target: {
        data: dropTarget,
        edge
      }
    }) {
      this.items = (0, _array.removeItem)(this.items, draggedItem);
      if (edge === 'top') {
        this.items = (0, _array.insertBefore)(this.items, dropTarget, draggedItem);
      } else {
        this.items = (0, _array.insertAfter)(this.items, dropTarget, draggedItem);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['One', 'Two', 'Three', 'Four', 'Five'];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "move", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "move"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, IntroductionComponent);
});
;define("test-app/components/theme-switcher", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <button
    class="btn btn-secondary"
    type="button"
    {{on "click" this.toggle}}
  >
    <i class="bi {{this.icon}}"></i> {{this.theme}}
  </button>
  */
  {
    "id": "jXc52Lsi",
    "block": "[[[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"toggle\"]]],null],[12],[1,\"\\n  \"],[10,\"i\"],[15,0,[29,[\"bi \",[30,0,[\"icon\"]]]]],[12],[13],[1,\" \"],[1,[30,0,[\"theme\"]]],[1,\"\\n\"],[13]],[],false,[\"button\",\"on\",\"i\"]]",
    "moduleName": "test-app/components/theme-switcher.hbs",
    "isStrictMode": false
  });
  const THEME = {
    DARK: 'dark',
    LIGHT: 'light'
  };
  const THEME_ROTATION = {
    [THEME.LIGHT]: THEME.DARK,
    [THEME.DARK]: THEME.LIGHT
  };
  let ThemeSwitcherComponent = _exports.default = (_class = class ThemeSwitcherComponent extends _component2.default {
    get icon() {
      return {
        [THEME.LIGHT]: 'bi-brightness-high-fill',
        [THEME.DARK]: 'bi-moon-stars-fill'
      }[this.theme];
    }
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "theme", _descriptor, this);
      this.theme = this.getCurrentTheme();
    }
    getCurrentTheme() {
      return document.documentElement.dataset.bsTheme;
    }
    toggle() {
      const theme = THEME_ROTATION[this.theme];
      document.documentElement.dataset.bsTheme = theme;
      document.getElementById('hljs-theme').href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/stackoverflow-${theme}.min.css`;
      this.theme = theme;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "theme", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "toggle", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggle"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ThemeSwitcherComponent);
});
;define("test-app/components/ui/alert/index", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="alert alert-{{@type}}" role="alert" ...attributes>
    {{yield}}
  </div>
  */
  {
    "id": "Lz3zx0Xt",
    "block": "[[[11,0],[16,0,[29,[\"alert alert-\",[30,1]]]],[24,\"role\",\"alert\"],[17,2],[12],[1,\"\\n  \"],[18,3,null],[1,\"\\n\"],[13]],[\"@type\",\"&attrs\",\"&default\"],false,[\"div\",\"yield\"]]",
    "moduleName": "test-app/components/ui/alert/index.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/alert/info", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Ui::Alert @type="info" class="d-flex">
    <Ui::Icon @name="lightbulb" class="flex-shrink-0 me-2 mt-1" />
    <div>{{yield}}</div>
  </Ui::Alert>
  */
  {
    "id": "/1CmH0QQ",
    "block": "[[[8,[39,0],[[24,0,\"d-flex\"]],[[\"@type\"],[\"info\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],[[24,0,\"flex-shrink-0 me-2 mt-1\"]],[[\"@name\"],[\"lightbulb\"]],null],[1,\"\\n  \"],[10,0],[12],[18,1,null],[13],[1,\"\\n\"]],[]]]]]],[\"&default\"],false,[\"ui/alert\",\"ui/icon\",\"div\",\"yield\"]]",
    "moduleName": "test-app/components/ui/alert/info.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/code/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "common-tags", "he", "highlight.js/lib/core", "highlight.js/lib/languages/typescript", "highlight.js/lib/languages/handlebars", "highlight.js/lib/languages/bash", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _commonTags, _he, _core, _typescript, _handlebars, _bash, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"common-tags",0,"he",0,"highlight.js/lib/core",0,"highlight.js/lib/languages/typescript",0,"highlight.js/lib/languages/handlebars",0,"highlight.js/lib/languages/bash",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <pre class="hljs position-relative border rounded px-3 py-2 {{@class}}"><div {{did-update this.update @code}} {{did-insert this.init}} {{!on "DOMSubtreeModified" this.update}} hidden>{{yield}}</div><span class="badge text-bg-secondary text-uppercase bg-opacity-50 opacity-75 position-absolute top-0 end-0">{{this.languageName}}</span><code>{{{this.highlightedCode}}}</code></pre>
  */
  {
    "id": "osXctY1v",
    "block": "[[[10,\"pre\"],[15,0,[29,[\"hljs position-relative border rounded px-3 py-2 \",[30,1]]]],[12],[11,0],[24,\"hidden\",\"\"],[4,[38,2],[[30,0,[\"update\"]],[30,2]],null],[4,[38,3],[[30,0,[\"init\"]]],null],[12],[18,3,null],[13],[10,1],[14,0,\"badge text-bg-secondary text-uppercase bg-opacity-50 opacity-75 position-absolute top-0 end-0\"],[12],[1,[30,0,[\"languageName\"]]],[13],[10,\"code\"],[12],[2,[30,0,[\"highlightedCode\"]]],[13],[13]],[\"@class\",\"@code\",\"&default\"],false,[\"pre\",\"div\",\"did-update\",\"did-insert\",\"yield\",\"span\",\"code\"]]",
    "moduleName": "test-app/components/ui/code/index.hbs",
    "isStrictMode": false
  });
  _core.default.registerLanguage('js', _typescript.default);
  _core.default.registerLanguage('hbs', _handlebars.default);
  _core.default.registerLanguage('bash', _bash.default);
  let UiCodeComponent = _exports.default = (_class = class UiCodeComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "highlightedCode", _descriptor, this);
      _initializerDefineProperty(this, "lang", _descriptor2, this);
      _defineProperty(this, "element", void 0);
    }
    get languageName() {
      return {
        js: 'Javascript',
        hbs: 'Handlebars',
        bash: 'Terminal'
      }[this.lang];
    }
    init(element) {
      this.element = element;
      this.highlightCode();
    }
    update() {
      this.highlightCode();
    }
    highlightCode() {
      const code = this.args.code ?? _he.default.decode(this.element.innerHTML);
      let result;
      if (this.args.lang) {
        result = _core.default.highlight(code, {
          language: this.args.lang
        });
      } else {
        result = _core.default.highlightAuto(code);
      }
      this.lang = result.language;
      this.highlightedCode = (0, _commonTags.stripIndent)(result.value);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "highlightedCode", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lang", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "init", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UiCodeComponent);
});
;define("test-app/components/ui/function/index", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="mb-5">
    <h1 class="font-monospace fs-5 mb-3">{{@title}}</h1>
  
    <p>{{@description}}</p>
  
    {{yield}}
  
    {{#if @params}}
      <Ui::Params as |p|>
        {{#each @params as |param|}}
          <p.param
            @name={{param.name}}
            @type={{param.type}}
            @default={{param.default}}
            @required={{param.required}}
            @description={{param.description}}
          />
        {{/each}}
      </Ui::Params>
    {{/if}}
  </section>
  */
  {
    "id": "g4xOwDP5",
    "block": "[[[10,\"section\"],[14,0,\"mb-5\"],[12],[1,\"\\n  \"],[10,\"h1\"],[14,0,\"font-monospace fs-5 mb-3\"],[12],[1,[30,1]],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,[30,2]],[13],[1,\"\\n\\n  \"],[18,6,null],[1,\"\\n\\n\"],[41,[30,3],[[[1,\"    \"],[8,[39,5],null,null,[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,3]],null]],null],null,[[[1,\"        \"],[8,[30,4,[\"param\"]],null,[[\"@name\",\"@type\",\"@default\",\"@required\",\"@description\"],[[30,5,[\"name\"]],[30,5,[\"type\"]],[30,5,[\"default\"]],[30,5,[\"required\"]],[30,5,[\"description\"]]]],null],[1,\"\\n\"]],[5]],null],[1,\"    \"]],[4]]]]],[1,\"\\n\"]],[]],null],[13]],[\"@title\",\"@description\",\"@params\",\"p\",\"param\",\"&default\"],false,[\"section\",\"h1\",\"p\",\"yield\",\"if\",\"ui/params\",\"each\",\"-track-array\"]]",
    "moduleName": "test-app/components/ui/function/index.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/icon/index", ["exports", "@ember/component", "@glimmer/component", "@ember/debug", "@ember/template-factory"], function (_exports, _component, _component2, _debug, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/debug",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <i class="{{this.classStr}}" ...attributes></i>
  */
  {
    "id": "KvWYn5Sm",
    "block": "[[[11,\"i\"],[16,0,[29,[[30,0,[\"classStr\"]]]]],[17,1],[12],[13]],[\"&attrs\"],false,[\"i\"]]",
    "moduleName": "test-app/components/ui/icon/index.hbs",
    "isStrictMode": false
  });
  class UiIconComponent extends _component2.default {
    get classStr() {
      (true && !(this.args.name) && (0, _debug.assert)('Must pass an icon name', this.args.name));
      return [`fa-${this.args.style ?? 'solid'}`, `fa-${this.args.name}`, (this.args.fw ?? true) && 'fa-fw'].filter(Boolean).join(' ');
    }
  }
  _exports.default = UiIconComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UiIconComponent);
});
;define("test-app/components/ui/nav/index", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="nav nav-pills flex-column" ...attributes>
    {{#each @items as |item|}}
      <a class="nav-link" href="{{item.href}}">{{item.text}}</a>
      {{#if item.items}}
        <Ui::Nav @items={{item.items}} class="mb-2 ms-3" />
      {{/if}}
    {{/each}}
  </nav>
  */
  {
    "id": "AiOWamNK",
    "block": "[[[11,\"nav\"],[24,0,\"nav nav-pills flex-column\"],[17,1],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,2]],null]],null],null,[[[1,\"    \"],[10,3],[14,0,\"nav-link\"],[15,6,[29,[[30,3,[\"href\"]]]]],[12],[1,[30,3,[\"text\"]]],[13],[1,\"\\n\"],[41,[30,3,[\"items\"]],[[[1,\"      \"],[8,[39,5],[[24,0,\"mb-2 ms-3\"]],[[\"@items\"],[[30,3,[\"items\"]]]],null],[1,\"\\n\"]],[]],null]],[3]],null],[13]],[\"&attrs\",\"@items\",\"item\"],false,[\"nav\",\"each\",\"-track-array\",\"a\",\"if\",\"ui/nav\"]]",
    "moduleName": "test-app/components/ui/nav/index.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/params/index", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <ul class="list-group list-group-flush" ...attributes>
    {{yield (hash
      param=(component "ui/params/param")
    )}}
  </ul>
  
  
  {{!--
  
  Alternative table version
  
  <ul class="list-group list-group-flush">
    {{#each params as |param|}}
      <li class="row border-bottom py-2">
        <div class="col-2">
          <span class="fw-bold">{{param.name}}</span>
        </div>
        <div class="col-2">
          <code>{{param.default}}</code>
        </div>
        <div class="col-8">
          {{param.description}}
        </div>
      </li>
    {{/each}}
  </ul>
  
  --}}
  */
  {
    "id": "5gGNs1CN",
    "block": "[[[11,\"ul\"],[24,0,\"list-group list-group-flush\"],[17,1],[12],[1,\"\\n  \"],[18,2,[[28,[37,2],null,[[\"param\"],[[50,\"ui/params/param\",0,null,null]]]]]],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"]],[\"&attrs\",\"&default\"],false,[\"ul\",\"yield\",\"hash\",\"component\"]]",
    "moduleName": "test-app/components/ui/params/index.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/params/param", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li class="list-group-item" ...attributes>
    <span class="font-monospace fw-bold text-light">{{@name}}</span>
    {{!-- <code class="fs-6">{{@name}}</code> --}}
  
    {{#if @required}}
      <small class="px-2 py-1 rounded border ms-3 font-monospace text-danger">required</small> {{!text-uppercase}}
    {{/if}}
  
    <small class="px-2 py-1 rounded border ms-3 font-monospace text-body-secondary">{{@type}}</small>
  
    {{#if @default}}
      <small class="px-2 py-1 rounded border ms-3 font-monospace text-body-secondary fst-italic">default: {{@default}}</small>
    {{/if}}
  
    <p class="mt-1 mb-0">{{@description}}</p>
  </li>
  
  {{!--
  <li class="list-group-item d-flex" ...attributes>
    <div class="col-4 font-monospace">
      <span class="fw-bold text-light">{{@name}}</span>
      <small class="text-body-secondary">{{@type}}</small>
      {{#if @default}}
        <small class="ms-4 font-monospace text-body-secondary fst-italic">{{@default}}</small>
      {{/if}}
    </div>
    <div class="col-8">
      {{@description}}
    </div>
  </li>
  --}}
  */
  {
    "id": "ETD2gSE5",
    "block": "[[[11,\"li\"],[24,0,\"list-group-item\"],[17,1],[12],[1,\"\\n  \"],[10,1],[14,0,\"font-monospace fw-bold text-light\"],[12],[1,[30,2]],[13],[1,\"\\n\"],[1,\"\\n\"],[41,[30,3],[[[1,\"    \"],[10,\"small\"],[14,0,\"px-2 py-1 rounded border ms-3 font-monospace text-danger\"],[12],[1,\"required\"],[13],[1,\" \"],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[10,\"small\"],[14,0,\"px-2 py-1 rounded border ms-3 font-monospace text-body-secondary\"],[12],[1,[30,4]],[13],[1,\"\\n\\n\"],[41,[30,5],[[[1,\"    \"],[10,\"small\"],[14,0,\"px-2 py-1 rounded border ms-3 font-monospace text-body-secondary fst-italic\"],[12],[1,\"default: \"],[1,[30,5]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[10,2],[14,0,\"mt-1 mb-0\"],[12],[1,[30,6]],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"&attrs\",\"@name\",\"@required\",\"@type\",\"@default\",\"@description\"],false,[\"li\",\"span\",\"if\",\"small\",\"p\"]]",
    "moduleName": "test-app/components/ui/params/param.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("test-app/components/ui/section/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "slugify", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _slugify, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"slugify",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <article id="{{this.anchorId}}" class="mb-5" ...attributes>
    {{#if @title}}
      <h1 class="mb-4">{{@title}}</h1>
    {{/if}}
  
    {{yield}}
  </article>
  */
  {
    "id": "FEOJ1ny2",
    "block": "[[[11,\"article\"],[16,1,[29,[[30,0,[\"anchorId\"]]]]],[24,0,\"mb-5\"],[17,1],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"    \"],[10,\"h1\"],[14,0,\"mb-4\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[18,3,null],[1,\"\\n\"],[13]],[\"&attrs\",\"@title\",\"&default\"],false,[\"article\",\"if\",\"h1\",\"yield\"]]",
    "moduleName": "test-app/components/ui/section/index.hbs",
    "isStrictMode": false
  });
  class UiSectionComponent extends _component2.default {
    get anchorId() {
      return this.args.anchorId ?? (0, _slugify.default)(this.args.title, {
        lower: true
      });
    }
  }
  _exports.default = UiSectionComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UiSectionComponent);
});
;define("test-app/components/ui/subsection/index", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "slugify", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _slugify, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"slugify",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section id="{{this.anchorId}}" class="mb-5" ...attributes>
    {{#if @title}}
      <h1 class="fs-3 mb-3">{{@title}}</h1>
    {{/if}}
  
    {{yield}}
  </section>
  */
  {
    "id": "F3MjY7FF",
    "block": "[[[11,\"section\"],[16,1,[29,[[30,0,[\"anchorId\"]]]]],[24,0,\"mb-5\"],[17,1],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"    \"],[10,\"h1\"],[14,0,\"fs-3 mb-3\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[18,3,null],[1,\"\\n\"],[13]],[\"&attrs\",\"@title\",\"&default\"],false,[\"section\",\"if\",\"h1\",\"yield\"]]",
    "moduleName": "test-app/components/ui/subsection/index.hbs",
    "isStrictMode": false
  });
  class UiSubsectionComponent extends _component2.default {
    get anchorId() {
      return this.args.anchorId ?? (0, _slugify.default)(this.args.title, {
        lower: true
      });
    }
  }
  _exports.default = UiSubsectionComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UiSubsectionComponent);
});
;define("test-app/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("test-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("test-app/helpers/app-version", ["exports", "@ember/component/helper", "test-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"test-app/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("test-app/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("test-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("test-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("test-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "test-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"test-app/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("test-app/initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("test-app/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/draggable-item-handle", ["exports", "ember-draggable/modifiers/draggable-item-handle"], function (_exports, _draggableItemHandle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _draggableItemHandle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-draggable/modifiers/draggable-item-handle"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/draggable-item", ["exports", "ember-draggable/modifiers/draggable-item"], function (_exports, _draggableItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _draggableItem.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-draggable/modifiers/draggable-item"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/drop-target", ["exports", "ember-draggable/modifiers/drop-target"], function (_exports, _dropTarget) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dropTarget.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-draggable/modifiers/drop-target"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/file-drop-target", ["exports", "ember-draggable/modifiers/file-drop-target"], function (_exports, _fileDropTarget) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileDropTarget.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-draggable/modifiers/file-drop-target"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/sortable-item", ["exports", "ember-draggable/modifiers/sortable-item"], function (_exports, _sortableItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortableItem.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-draggable/modifiers/sortable-item"eaimeta@70e063a35619d71f
});
;define("test-app/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("test-app/router", ["exports", "@ember/routing/router", "test-app/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"test-app/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("test-app/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("test-app/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("test-app/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "TestApp"}}
  
  <style type="text/css">
    [data-sortable-item="handle"], [data-sortable-item-handle] {
      cursor: grab;
    }
  /*
    .sortable-chosen[data-sortable-item="handle"], .sortable-chosen [data-sortable-item-handle] {
      cursor: grabbing;
    }
  *\/
  </style>
  
  <style type="text/css">
    .drop-target-item {
      background: gray;
    }
    .is-dragging {
      opacity: .5;
    }
  
    /* * /
    [data-drop-edge]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    [data-drop-edge="top"]::before {
      border-top: 3px solid red; bottom: auto;
    }
    [data-drop-edge="bottom"]::before {
      border-top: 3px solid red; top: auto;
    }
    [data-drop-edge="left"]::before {
      border-left: 3px solid red; right: auto;
    }
    [data-drop-edge="right"]::before {
      border-left: 3px solid red; left: auto;
    }
    /**\/
    [data-drop-tree-intruction]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    [data-drop-tree-intruction="make-child"] {
  
    }
    /*
  reorder-above
  reorder-below
  reparent
     *\/
  
  </style>
  
  <main class="flex-shrink-0">
    <Header />
  
    <div class="container">
      <div class="row">
        <div class="col-2">
  
          <div class="sticky-top pt-4">
            <nav class="vh-100 flex-column align-items-stretch pe-4 border-end">
              <Ui::Nav @items={{array
                (hash href="#introduction" text="Introduction"
                  items=(array
                    (hash href="#installation" text="Installation")
                    (hash href="#usage" text="Usage")
                  )
                )
                (hash href="#examples" text="Examples"
                  items=(array
                    (hash href="#drag-handle" text="Drag handle")
                    (hash href="#shared-lists" text="Shared lists")
                    (hash href="#nested-lists" text="Nested lists")
                    (hash href="#board" text="Board")
                    (hash href="#windows-98" text="Windows 98")
                  )
                )
                (hash href="#api" text="API"
                  items=(array
                    (hash href="#modifiers" text="Modifiers")
                    (hash href="#utilities" text="Utilities")
                  )
                )
              }} />
                    {{!-- (hash href="#service" text="Service") --}}
            </nav>
          </div>
  
        </div>
  
        <div class="col-10 mt-4">
  
          <Introduction />
          <Examples />
          <Api />
  
        </div>
      </div>
    </div>
  </main>
  
  
  {{outlet}}
  */
  {
    "id": "0/Qw3b0/",
    "block": "[[[1,[28,[35,0],[\"TestApp\"],null]],[1,\"\\n\\n\"],[10,\"style\"],[14,4,\"text/css\"],[12],[1,\"\\n  [data-sortable-item=\\\"handle\\\"], [data-sortable-item-handle] {\\n    cursor: grab;\\n  }\\n/*\\n  .sortable-chosen[data-sortable-item=\\\"handle\\\"], .sortable-chosen [data-sortable-item-handle] {\\n    cursor: grabbing;\\n  }\\n*/\\n\"],[13],[1,\"\\n\\n\"],[10,\"style\"],[14,4,\"text/css\"],[12],[1,\"\\n  .drop-target-item {\\n    background: gray;\\n  }\\n  .is-dragging {\\n    opacity: .5;\\n  }\\n\\n  /* * /\\n  [data-drop-edge]::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n  }\\n  [data-drop-edge=\\\"top\\\"]::before {\\n    border-top: 3px solid red; bottom: auto;\\n  }\\n  [data-drop-edge=\\\"bottom\\\"]::before {\\n    border-top: 3px solid red; top: auto;\\n  }\\n  [data-drop-edge=\\\"left\\\"]::before {\\n    border-left: 3px solid red; right: auto;\\n  }\\n  [data-drop-edge=\\\"right\\\"]::before {\\n    border-left: 3px solid red; left: auto;\\n  }\\n  /**/\\n  [data-drop-tree-intruction]::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n  }\\n  [data-drop-tree-intruction=\\\"make-child\\\"] {\\n\\n  }\\n  /*\\nreorder-above\\nreorder-below\\nreparent\\n   */\\n\\n\"],[13],[1,\"\\n\\n\"],[10,\"main\"],[14,0,\"flex-shrink-0\"],[12],[1,\"\\n  \"],[8,[39,3],null,null,null],[1,\"\\n\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"col-2\"],[12],[1,\"\\n\\n        \"],[10,0],[14,0,\"sticky-top pt-4\"],[12],[1,\"\\n          \"],[10,\"nav\"],[14,0,\"vh-100 flex-column align-items-stretch pe-4 border-end\"],[12],[1,\"\\n            \"],[8,[39,6],null,[[\"@items\"],[[28,[37,7],[[28,[37,8],null,[[\"href\",\"text\",\"items\"],[\"#introduction\",\"Introduction\",[28,[37,7],[[28,[37,8],null,[[\"href\",\"text\"],[\"#installation\",\"Installation\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#usage\",\"Usage\"]]]],null]]]],[28,[37,8],null,[[\"href\",\"text\",\"items\"],[\"#examples\",\"Examples\",[28,[37,7],[[28,[37,8],null,[[\"href\",\"text\"],[\"#drag-handle\",\"Drag handle\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#shared-lists\",\"Shared lists\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#nested-lists\",\"Nested lists\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#board\",\"Board\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#windows-98\",\"Windows 98\"]]]],null]]]],[28,[37,8],null,[[\"href\",\"text\",\"items\"],[\"#api\",\"API\",[28,[37,7],[[28,[37,8],null,[[\"href\",\"text\"],[\"#modifiers\",\"Modifiers\"]]],[28,[37,8],null,[[\"href\",\"text\"],[\"#utilities\",\"Utilities\"]]]],null]]]]],null]]],null],[1,\"\\n\"],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"col-10 mt-4\"],[12],[1,\"\\n\\n        \"],[8,[39,9],null,null,null],[1,\"\\n        \"],[8,[39,10],null,null,null],[1,\"\\n        \"],[8,[39,11],null,null,null],[1,\"\\n\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"],[46,[28,[37,13],null,null],null,null,null]],[],false,[\"page-title\",\"style\",\"main\",\"header\",\"div\",\"nav\",\"ui/nav\",\"array\",\"hash\",\"introduction\",\"examples\",\"api\",\"component\",\"-outlet\"]]",
    "moduleName": "test-app/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("test-app/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("test-app/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("test-app/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("test-app/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('test-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("test-app/app")["default"].create({"name":"test-app","version":"0.0.0+e9f53952"});
          }
        
//# sourceMappingURL=test-app.map
