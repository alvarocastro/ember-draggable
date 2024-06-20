var __ember_auto_import__;(()=>{var e,r={5657:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>a}),t(1223)
var a=(0,t(2237).W)((function(e,r,t){return e.dataset.draggableItemHandle="",()=>{delete e.dataset.draggableItemHandle}}),{eager:!1})},4822:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>i})
var a=t(2237),n=t(9296),o=t(1990),i=(0,a.W)((function(e,r,{data:t,group:a,dragHandleElement:i,disabled:l=!1,isDraggingClass:d=o.CLASS.DRAGGING,onDragStart:s=(()=>{}),onDragEnd:u=(()=>{})}={}){return(0,n.kZ)({element:e,dragHandle:i??e.querySelector("[data-draggable-item-handle]"),getInitialData:()=>({data:t,group:a}),canDrag:()=>!l,onDragStart:r=>{e.classList.add(d),s((0,o.prepareDataForCallback)(r))},onDrop:r=>{e.classList.remove(d),u((0,o.prepareDataForCallback)(r))}})}),{eager:!1})},1990:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{CLASS:()=>l,DIRECTION:()=>d,DIRECTION_EDGES:()=>s,default:()=>g,getNestedDepth:()=>c,prepareDataForCallback:()=>u})
var a=t(2237),n=t(9296),o=t(2053),i=t(6776)
t(8241)
const l={DRAGGING:"is-dragging",DROP_TARGET_ITEM:"drop-target-item"},d={VERTICAL:"vertical",HORIZONTAL:"horizontal"},s={[d.VERTICAL]:["top","bottom"],[d.HORIZONTAL]:["left","right"]},u=function(e){return{source:{data:e.source.data.data,group:e.source.data.group},target:e.self?{data:e.self.data.data,group:e.self.data.group,edge:(0,o.S)(e.self.data),tree:(0,i.Q)(e.self.data).type}:{},event:e}},c=function(e){const r=e.location.current.dropTargets,t=e.self.element
return r.indexOf(r.find((e=>e.element===t)))}
var g=(0,a.W)((function(e,r,{data:t,group:a,accepts:g=[],direction:p=d.VERTICAL,allowedEdges:b,allowDropOnItself:m=!1,allowDropOnChildren:f=!1,disabled:_=!1,disabledDrag:v=!1,disabledDrop:h=!1,isOnTargetClass:D=l.DROP_TARGET_ITEM,canDrop:O=((e,r)=>r),onDrop:y=(()=>{}),onHover:E=(()=>{}),onDragEnter:I=(()=>{}),onDragLeave:T=(()=>{})}={}){return(0,n.tO)({element:e,canDrop:r=>{const{source:{data:t,element:n}}=r
let o=!0
return o=!_&&!(!f&&n.contains(e))&&!(!m&&e===n)&&(g.length?g.includes(t.group):t.group===a),O(u(r),o)},getData:({input:e,element:r})=>{let n={data:t,group:a}
return n=(0,o.E)(n,{input:e,element:r,allowedEdges:b??s[p]}),n=(0,i.G)(n,{input:e,element:r,currentLevel:2,indentPerLevel:20,mode:"standard"}),n},onDragEnter:r=>{e.classList.add(D),I(u(r))},onDragLeave:r=>{e.classList.remove(D),delete e.dataset.dropEdge,delete e.dataset.treeInstruction,T(u(r))},onDrag:r=>{if(c(r)>0)return e.classList.remove(D),delete e.dataset.dropEdge,void delete e.dataset.treeInstruction
e.classList.add(D),e.dataset.dropEdge=(0,o.S)(r.self.data),e.dataset.treeInstruction=(0,i.Q)(r.self.data).type,E(u(r))},onDrop:r=>{e.classList.remove(D),delete e.dataset.dropEdge,delete e.dataset.treeInstruction,0===c(r)&&y(u(r))}})}),{eager:!1})},4297:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>i})
var a=t(2237),n=t(2083),o=t(3007),i=(0,a.W)((function(e,r,{}={}){return(0,n.F)({element:e,canDrop:o.f,onDragEnter:e=>{console.log(">>>> DRAG ENTER",e,(0,o.o)(e))},onDrop:e=>{console.log(">>>> ON DROP",e,(0,o.o)(e))}})}),{eager:!1})},4151:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>l})
var a=t(2237),n=t(4186),o=t(4822),i=t(1990),l=(0,a.W)((function(e,r,t){return(0,n.k)((0,o.default)(e,r,{...t,disabled:t.disabled??t.disabledDrag}),(0,i.default)(e,r,{...t,disabled:t.disabled??t.disabledDrop}))}),{eager:!1})},2421:(e,r,t)=>{"use strict"
function a(e,r,t){const a=[...e]
return a.splice(r,0,t),a}function n(e,r){const t=[...e]
return t.splice(r,1),t}function o(e,r,t){return a(e,e.indexOf(r),t)}function i(e,r,t){return a(e,e.indexOf(r)+1,t)}function l(e,r){return n(e,e.indexOf(r))}t.r(r),t.d(r,{insertAfter:()=>i,insertAt:()=>a,insertBefore:()=>o,removeAt:()=>n,removeItem:()=>l})},2294:e=>{"use strict"
e.exports=require("@ember/application")},336:e=>{"use strict"
e.exports=require("@ember/component/helper")},1603:e=>{"use strict"
e.exports=require("@ember/debug")},1130:e=>{"use strict"
e.exports=require("@ember/destroyable")},2377:e=>{"use strict"
e.exports=require("@ember/modifier")},4666:e=>{"use strict"
e.exports=require("@ember/object/internals")},1223:e=>{"use strict"
e.exports=require("@ember/runloop")},2735:e=>{"use strict"
e.exports=require("@ember/service")},9553:e=>{"use strict"
e.exports=require("@ember/utils")},2413:(e,r,t)=>{e.exports=function(){var e=_eai_d,r=_eai_r
function a(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?r("_eai_dyn_"+e):r("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return r("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("common-tags",[],(function(){return a(t(2555))})),e("ember-draggable/modifiers/draggable-item",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return a(t(4822))})),e("ember-draggable/modifiers/draggable-item-handle",["@ember/runloop","@ember/application","@ember/modifier","@ember/destroyable"],(function(){return a(t(5657))})),e("ember-draggable/modifiers/drop-target",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return a(t(1990))})),e("ember-draggable/modifiers/file-drop-target",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return a(t(4297))})),e("ember-draggable/modifiers/sortable-item",["@ember/application","@ember/modifier","@ember/destroyable"],(function(){return a(t(4151))})),e("ember-draggable/utils/array",[],(function(){return a(t(2421))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper","@ember/object/internals"],(function(){return a(t(3314))})),e("ember-page-title/services/page-title",["@ember/runloop","@ember/service","@ember/utils","@ember/debug"],(function(){return a(t(771))})),e("he",[],(function(){return a(t(3597))})),e("highlight.js/lib/core",[],(function(){return a(t(2978))})),e("highlight.js/lib/languages/bash",[],(function(){return a(t(2355))})),e("highlight.js/lib/languages/handlebars",[],(function(){return a(t(7397))})),e("highlight.js/lib/languages/typescript",[],(function(){return a(t(1246))})),e("slugify",[],(function(){return a(t(7681))}))}()},6968:function(e,r){window._eai_r=require,window._eai_d=define}},t={}
function a(e){var n=t[e]
if(void 0!==n)return n.exports
var o=t[e]={id:e,loaded:!1,exports:{}}
return r[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=r,e=[],a.O=(r,t,n,o)=>{if(!t){var i=1/0
for(u=0;u<e.length;u++){for(var[t,n,o]=e[u],l=!0,d=0;d<t.length;d++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](t[d])))?t.splice(d--,1):(l=!1,o<i&&(i=o))
if(l){e.splice(u--,1)
var s=n()
void 0!==s&&(r=s)}}return r}o=o||0
for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1]
e[u]=[t,n,o]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={524:0}
a.O.j=r=>0===e[r]
var r=(r,t)=>{var n,o,[i,l,d]=t,s=0
if(i.some((r=>0!==e[r]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n])
if(d)var u=d(a)}for(r&&r(t);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0
return a.O(u)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.O(void 0,[127],(()=>a(6968)))
var n=a.O(void 0,[127],(()=>a(2413)))
n=a.O(n),__ember_auto_import__=n})()
