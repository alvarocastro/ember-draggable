var __ember_auto_import__;(()=>{var e,r={5657:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>n}),t(1223)
var n=(0,t(2237).W)((function(e,r,t){return e.dataset.draggableItemHandle="",()=>{delete e.dataset.draggableItemHandle}}),{eager:!1})},4822:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>i})
var n=t(2237),a=t(9296),o=t(1990),i=(0,n.W)((function(e,r,{data:t,group:n,dragHandleElement:i,disabled:l=!1,isDraggingClass:s=o.CLASS.DRAGGING,onDragStart:d=(()=>{}),onDragEnd:u=(()=>{})}={}){return(0,a.kZ)({element:e,dragHandle:i??e.querySelector("[data-draggable-item-handle]"),getInitialData:()=>({data:t,group:n}),canDrag:()=>!l,onDragStart:r=>{e.classList.add(s),d((0,o.prepareDataForCallback)(r))},onDrop:r=>{e.classList.remove(s),u((0,o.prepareDataForCallback)(r))}})}),{eager:!1})},1990:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{CLASS:()=>l,DIRECTION:()=>s,DIRECTION_EDGES:()=>d,default:()=>p,getNestedDepth:()=>c,prepareDataForCallback:()=>u})
var n=t(2237),a=t(9296),o=t(2053),i=t(6776)
t(8241)
const l={DRAGGING:"is-dragging",DROP_TARGET_ITEM:"drop-target-item"},s={VERTICAL:"vertical",HORIZONTAL:"horizontal"},d={[s.VERTICAL]:["top","bottom"],[s.HORIZONTAL]:["left","right"]},u=function(e){return{source:{data:e.source.data.data,group:e.source.data.group},target:e.self?{data:e.self.data.data,group:e.self.data.group,edge:(0,o.S)(e.self.data),tree:(0,i.Q)(e.self.data).type}:{},event:e}},c=function(e){const r=e.location.current.dropTargets,t=e.self.element
return r.indexOf(r.find((e=>e.element===t)))}
var p=(0,n.W)((function(e,r,{data:t,group:n,accepts:p=[],direction:m=s.VERTICAL,allowedEdges:g,allowDropOnItself:f=!1,allowDropOnChildren:b=!1,disabled:_=!1,disabledDrag:v=!1,disabledDrop:D=!1,isOnTargetClass:y=l.DROP_TARGET_ITEM,canDrop:h=((e,r)=>r),onDrop:O=(()=>{}),onHover:E=(()=>{}),onDragEnter:I=(()=>{}),onDragLeave:A=(()=>{})}={}){return(0,a.tO)({element:e,canDrop:r=>{const{source:{data:t,element:a}}=r
let o=!0
return o=!_&&!(!b&&a.contains(e))&&!(!f&&e===a)&&(p.length?p.includes(t.group):t.group===n),h(u(r),o)},getData:({input:e,element:r})=>{let a={data:t,group:n}
return a=(0,o.E)(a,{input:e,element:r,allowedEdges:g??d[m]}),a=(0,i.G)(a,{input:e,element:r,currentLevel:2,indentPerLevel:20,mode:"standard"}),a},onDragEnter:r=>{e.classList.add(y),I(u(r))},onDragLeave:r=>{e.classList.remove(y),delete e.dataset.dropEdge,delete e.dataset.treeInstruction,A(u(r))},onDrag:r=>{if(c(r)>0)return e.classList.remove(y),delete e.dataset.dropEdge,void delete e.dataset.treeInstruction
e.classList.add(y),e.dataset.dropEdge=(0,o.S)(r.self.data),e.dataset.treeInstruction=(0,i.Q)(r.self.data).type,E(u(r))},onDrop:r=>{e.classList.remove(y),delete e.dataset.dropEdge,delete e.dataset.treeInstruction,0===c(r)&&O(u(r))}})}),{eager:!1})},4297:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>i})
var n=t(2237),a=t(2083),o=t(3007),i=(0,n.W)((function(e,r,{}={}){return(0,a.F)({element:e,canDrop:o.f,onDragEnter:e=>{console.log(">>>> DRAG ENTER",e,(0,o.o)(e))},onDrop:e=>{console.log(">>>> ON DROP",e,(0,o.o)(e))}})}),{eager:!1})},4151:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>l})
var n=t(2237),a=t(4186),o=t(4822),i=t(1990),l=(0,n.W)((function(e,r,t){return(0,a.k)((0,o.default)(e,r,{...t,disabled:t.disabled??t.disabledDrag}),(0,i.default)(e,r,{...t,disabled:t.disabled??t.disabledDrop}))}),{eager:!1})},2421:(e,r,t)=>{"use strict"
function n(e,r,t){const n=[...e]
return n.splice(r,0,t),n}function a(e,r){const t=[...e]
return t.splice(r,1),t}function o(e,r,t){return n(e,e.indexOf(r),t)}function i(e,r,t){return n(e,e.indexOf(r)+1,t)}function l(e,r){return a(e,e.indexOf(r))}t.r(r),t.d(r,{insertAfter:()=>i,insertAt:()=>n,insertBefore:()=>o,removeAt:()=>a,removeItem:()=>l})},2294:e=>{"use strict"
e.exports=require("@ember/application")},336:e=>{"use strict"
e.exports=require("@ember/component/helper")},1603:e=>{"use strict"
e.exports=require("@ember/debug")},1130:e=>{"use strict"
e.exports=require("@ember/destroyable")},2377:e=>{"use strict"
e.exports=require("@ember/modifier")},4666:e=>{"use strict"
e.exports=require("@ember/object/internals")},1223:e=>{"use strict"
e.exports=require("@ember/runloop")},2735:e=>{"use strict"
e.exports=require("@ember/service")},9553:e=>{"use strict"
e.exports=require("@ember/utils")},2413:(e,r,t)=>{e.exports=function(){var e=_eai_d,r=_eai_r
function n(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?r("_eai_dyn_"+e):r("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return r("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("common-tags",[],(function(){return n(t(2555))})),e("ember-draggable-modifiers/modifiers/draggable-item",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return n(t(4822))})),e("ember-draggable-modifiers/modifiers/draggable-item-handle",["@ember/runloop","@ember/application","@ember/modifier","@ember/destroyable"],(function(){return n(t(5657))})),e("ember-draggable-modifiers/modifiers/drop-target",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return n(t(1990))})),e("ember-draggable-modifiers/modifiers/file-drop-target",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return n(t(4297))})),e("ember-draggable-modifiers/modifiers/sortable-item",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return n(t(4151))})),e("ember-draggable-modifiers/utils/array",[],(function(){return n(t(2421))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return n(t(3314))})),e("ember-page-title/services/page-title",["@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return n(t(771))})),e("he",[],(function(){return n(t(3597))})),e("highlight.js/lib/core",[],(function(){return n(t(2978))})),e("highlight.js/lib/languages/bash",[],(function(){return n(t(2355))})),e("highlight.js/lib/languages/handlebars",[],(function(){return n(t(7397))})),e("highlight.js/lib/languages/typescript",[],(function(){return n(t(1246))})),e("slugify",[],(function(){return n(t(7681))}))}()},6968:function(e,r){window._eai_r=require,window._eai_d=define},1443:(e,r,t)=>{var n,a
e.exports=(n=_eai_d,a=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?a("_eai_dyn_"+e):a("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return a("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},n("dom-element-descriptors",[],(function(){return(e=t(5774))&&e.__esModule?e:Object.assign({default:e},e)
var e})),void t(2413))},5774:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{IS_DESCRIPTOR:()=>n,createDescriptor:()=>c,isDescriptor:()=>a,lookupDescriptorData:()=>l,registerDescriptorData:()=>i,resolveDOMElement:()=>s,resolveDOMElements:()=>d,resolveDescription:()=>u})
const n="__dom_element_descriptor_is_descriptor__"
function a(e){return"object"==typeof e&&e&&n in e}function o(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}function i(e,r){r?o().set(e,r):o().delete(e)}function l(e){return o().get(e)||null}function s(e){let r=a(e)?l(e):e
if(!r)return null
if(void 0!==r.element)return r.element
for(let t of r.elements||[])return t
return null}function d(e){let r=a(e)?l(e):e
if(!r)return[]
if(r.elements)return Array.from(r.elements)
{let e=r.element
return e?[e]:[]}}function u(e){let r=a(e)?l(e):e
return r?.description}function c(e){let r={[n]:!0}
return i(r,e),r}}},t={}
function n(e){var a=t[e]
if(void 0!==a)return a.exports
var o=t[e]={id:e,loaded:!1,exports:{}}
return r[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=r,e=[],n.O=(r,t,a,o)=>{if(!t){var i=1/0
for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],l=!0,s=0;s<t.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(l=!1,o<i&&(i=o))
if(l){e.splice(u--,1)
var d=a()
void 0!==d&&(r=d)}}return r}o=o||0
for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1]
e[u]=[t,a,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={582:0,524:0}
n.O.j=r=>0===e[r]
var r=(r,t)=>{var a,o,[i,l,s]=t,d=0
if(i.some((r=>0!==e[r]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a])
if(s)var u=s(n)}for(r&&r(t);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0
return n.O(u)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[127],(()=>n(6968)))
var a=n.O(void 0,[127],(()=>n(1443)))
a=n.O(a),__ember_auto_import__=a})()
