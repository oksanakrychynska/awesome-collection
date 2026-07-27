import{A as oe,B as ae,a as et,b as wt,f as nt,g as y,h as Xt,k as z,l as it,m as A,p as Jt,q as te,r as ee,v as ne,x as ot,y as xt,z as ie}from"./chunk-XIIYOVBG.js";import{$a as D,C as Y,D as ht,E as L,F as Kt,I as T,Ia as gt,Ja as _t,K as R,Ka as O,M as d,Qa as M,R as F,Ra as x,S as w,Sa as Qt,U as v,Ua as vt,V as g,Va as yt,Y as K,_ as pt,aa as E,ab as X,d as I,e as B,eb as j,f as u,g as Gt,ha as ft,i as mt,ia as k,ja as V,l as Ut,n as Zt,na as bt,p as $t,pa as C,q,qb as J,r as qt,ra as P,rb as f,s as ut,sb as tt,ta as H,v as Yt,ya as Q}from"./chunk-PPNW6PST.js";var Le=["*",[["mat-toolbar-row"]]],Fe=["*","mat-toolbar-row"],Ne=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275dir=P({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),wn=(()=>{class o{_elementRef=d(E);_platform=d(z);_document=d(w);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["mat-toolbar"]],contentQueries:function(n,i,a){if(n&1&&Qt(a,Ne,5),n&2){let r;vt(r=yt())&&(i._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){n&2&&(X(i.color?"mat-"+i.color:""),D("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Fe,decls:2,vars:0,template:function(n,i){n&1&&(M(Le),x(0),x(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var Ve=20,re=(()=>{class o{_ngZone=d(g);_platform=d(z);_renderer=d(k).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new u;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Ve){return this._platform.isBrowser?new B(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(ut(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ut()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let i=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(qt(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((i,a)=>{this._scrollableContainsElement(a,t)&&n.push(a)}),n}_scrollableContainsElement(t,n){let i=y(n),a=t.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(n){return new(n||o)};static \u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var He=20,Rt=(()=>{class o{_platform=d(z);_listeners;_viewportSize=null;_change=new u;_document=d(w);constructor(){let t=d(g),n=d(k).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[n.listen("window","resize",i),n.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+n,height:i,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),i=t.documentElement,a=i.getBoundingClientRect(),r=-a.top||t.body?.scrollTop||n.scrollY||i.scrollTop||0,s=-a.left||t.body?.scrollLeft||n.scrollX||i.scrollLeft||0;return{top:r,left:s}}change(t=He){return t>0?this._change.pipe(ut(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||o)};static \u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Et(o){let e=o.cloneNode(!0),t=e.querySelectorAll("[id]"),n=o.nodeName.toLowerCase();e.removeAttribute("id");for(let i=0;i<t.length;i++)t[i].removeAttribute("id");return n==="canvas"?ce(o,e):(n==="input"||n==="select"||n==="textarea")&&le(o,e),se("canvas",o,e,ce),se("input, textarea, select",o,e,le),e}function se(o,e,t,n){let i=e.querySelectorAll(o);if(i.length){let a=t.querySelectorAll(o);for(let r=0;r<i.length;r++)n(i[r],a[r])}}var je=0;function le(o,e){e.type!=="file"&&(e.value=o.value),e.type==="radio"&&e.name&&(e.name=`mat-clone-${e.name}-${je++}`)}function ce(o,e){let t=e.getContext("2d");if(t)try{t.drawImage(o,0,0)}catch{}}function At(o){let e=o.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}function kt(o,e,t){let{top:n,bottom:i,left:a,right:r}=o;return t>=n&&t<=i&&e>=a&&e<=r}function We(o,e){let t=e.left<o.left,n=e.left+e.width>o.right,i=e.top<o.top,a=e.top+e.height>o.bottom;return t||n||i||a}function Z(o,e,t){o.top+=e,o.bottom=o.top+o.height,o.left+=t,o.right=o.left+o.width}function de(o,e,t,n){let{top:i,right:a,bottom:r,left:s,width:l,height:c}=o,m=l*e,p=c*e;return n>i-p&&n<r+p&&t>s-m&&t<a+m}var at=class{_document;positions=new Map;constructor(e){this._document=e}clear(){this.positions.clear()}cache(e){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),e.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:At(t)})})}handleScroll(e){let t=A(e),n=this.positions.get(t);if(!n)return null;let i=n.scrollPosition,a,r;if(t===this._document){let c=this.getViewportScrollPosition();a=c.top,r=c.left}else a=t.scrollTop,r=t.scrollLeft;let s=i.top-a,l=i.left-r;return this.positions.forEach((c,m)=>{c.clientRect&&t!==m&&t.contains(m)&&Z(c.clientRect,s,l)}),i.top=a,i.left=r,{top:s,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function xe(o,e){let t=o.rootNodes;if(t.length===1&&t[0].nodeType===e.ELEMENT_NODE)return t[0];let n=e.createElement("div");return t.forEach(i=>n.appendChild(i)),n}function Lt(o,e,t){for(let n in e)if(e.hasOwnProperty(n)){let i=e[n];i?o.setProperty(n,i,t?.has(n)?"important":""):o.removeProperty(n)}return o}function N(o,e){let t=e?"":"none";Lt(o.style,{"touch-action":e?"":"none","-webkit-user-drag":e?"":"none","-webkit-tap-highlight-color":e?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function me(o,e,t){Lt(o.style,{position:e?"":"fixed",top:e?"":"0",opacity:e?"":"0",left:e?"":"-999em"},t)}function rt(o,e){return e&&e!="none"?o+" "+e:o}function ue(o,e){o.style.width=`${e.width}px`,o.style.height=`${e.height}px`,o.style.transform=$(e.left,e.top)}function $(o,e){return`translate3d(${Math.round(o)}px, ${Math.round(e)}px, 0)`}var G={capture:!0},Ct={passive:!1,capture:!0},Ge=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(n,i){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return o})(),Ft=(()=>{class o{_ngZone=d(g);_document=d(w);_styleLoader=d(et);_renderer=d(k).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new u;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=K([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new u;pointerUp=new u;constructor(){}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Ct)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(t,n){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(Ge),this._activeDragInstances.update(i=>[...i,t]),this._activeDragInstances().length===1)){let i=n.type.startsWith("touch"),a=s=>this.pointerUp.next(s),r=[["scroll",s=>this._scroll.next(s),G],["selectstart",this._preventDefaultWhileDragging,Ct]];i?r.push(["touchend",a,G],["touchcancel",a,G]):r.push(["mouseup",a,G]),i||r.push(["mousemove",s=>this.pointerMove.next(s),Ct]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([s,l,c])=>this._renderer.listen(this._document,s,l,c))})}}stopDragging(t){this._activeDragInstances.update(n=>{let i=n.indexOf(t);return i>-1?(n.splice(i,1),[...n]):n}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let n=[this._scroll];return t&&t!==this._document&&n.push(new B(i=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(t,"scroll",r=>{this._activeDragInstances().length&&i.next(r)},G);return()=>{a()}}))),q(...n)}registerDirectiveNode(t,n){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,n)}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t)}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault()};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0}static \u0275fac=function(n){return new(n||o)};static \u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function he(o){let e=o.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(o)*e}function Ue(o){let e=getComputedStyle(o),t=Pt(e,"transition-property"),n=t.find(s=>s==="transform"||s==="all");if(!n)return 0;let i=t.indexOf(n),a=Pt(e,"transition-duration"),r=Pt(e,"transition-delay");return he(a[i])+he(r[i])}function Pt(o,e){return o.getPropertyValue(e).split(",").map(n=>n.trim())}var Ze=new Set(["position"]),It=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(e,t,n,i,a,r,s,l,c,m){this._document=e,this._rootElement=t,this._direction=n,this._initialDomRect=i,this._previewTemplate=a,this._previewClass=r,this._pickupPositionOnPage=s,this._initialTransform=l,this._zIndex=c,this._renderer=m}attach(e){this._preview=this._createPreview(),e.appendChild(this._preview),pe(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(e){this._preview.style.transform=e}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(e){this._preview.classList.add(e)}getTransitionDuration(){return Ue(this._preview)}addEventListener(e,t){return this._renderer.listen(this._preview,e,t)}_createPreview(){let e=this._previewTemplate,t=this._previewClass,n=e?e.template:null,i;if(n&&e){let a=e.matchSize?this._initialDomRect:null,r=e.viewContainer.createEmbeddedView(n,e.context);r.detectChanges(),i=xe(r,this._document),this._previewEmbeddedView=r,e.matchSize?ue(i,a):i.style.transform=$(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else i=Et(this._rootElement),ue(i,this._initialDomRect),this._initialTransform&&(i.style.transform=this._initialTransform);return Lt(i.style,{"pointer-events":"none",margin:pe(i)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Ze),N(i,!1),i.classList.add("cdk-drag-preview"),i.setAttribute("popover","manual"),i.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(a=>i.classList.add(a)):i.classList.add(t)),i}};function pe(o){return"showPopover"in o}var $e={passive:!0},fe={passive:!1},qe={passive:!1,capture:!0},Ye=800,be="cdk-drag-placeholder",ge=new Set(["position"]);function Ke(o,e,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let n=o.get(V,null,{optional:!0})||o.get(k).createRenderer(null,null);return new Tt(e,t,o.get(w),o.get(g),o.get(Rt),o.get(Ft),n)}var Tt=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=K(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new u;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=I.EMPTY;_pointerUpSubscription=I.EMPTY;_scrollSubscription=I.EMPTY;_resizeSubscription=I.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(e){e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(t=>N(t,e)))}_disabled=!1;beforeStarted=new u;started=new u;released=new u;ended=new u;entered=new u;exited=new u;dropped=new u;moved=this._moveEvents;data;constrainPosition;constructor(e,t,n,i,a,r,s){this._config=t,this._document=n,this._ngZone=i,this._viewportRuler=a,this._dragDropRegistry=r,this._renderer=s,this.withRootElement(e).withParent(t.parentDragRef||null),this._parentPositions=new at(n),r.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(e){this._handles=e.map(n=>y(n)),this._handles.forEach(n=>N(n,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(n=>{this._handles.indexOf(n)>-1&&t.add(n)}),this._disabledHandles=t,this}withPreviewTemplate(e){return this._previewTemplate=e,this}withPlaceholderTemplate(e){return this._placeholderTemplate=e,this}withRootElement(e){let t=y(e);if(t!==this._rootElement){this._removeRootElementListeners();let n=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(t,"mousedown",this._pointerDown,fe),n.listen(t,"touchstart",this._pointerDown,$e),n.listen(t,"dragstart",this._nativeDragStart,fe)]),this._initialTransform=void 0,this._rootElement=t}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(e){return this._boundaryElement=e?y(e):null,this._resizeSubscription.unsubscribe(),e&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(e){return this._parentDragRef=e,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&We(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let e=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),n=0,i=0;t.left<e.left?n=e.left-t.left:t.right>e.right&&(n=e.right-t.right),t.top<e.top?i=e.top-t.top:t.bottom>e.bottom&&(i=e.bottom-t.bottom);let a=this._activeTransform.x,r=this._activeTransform.y,s=a+n,l=r+i;this._rootElement.style.transform=$(s,l),this._activeTransform={x:s,y:l},this._passiveTransform={x:s,y:l}}}disableHandle(e){!this._disabledHandles.has(e)&&this._handles.indexOf(e)>-1&&(this._disabledHandles.add(e),N(e,!0))}enableHandle(e){this._disabledHandles.has(e)&&(this._disabledHandles.delete(e),N(e,this.disabled))}withDirection(e){return this._direction=e,this}_withDropContainer(e){this._dropContainer=e}getFreeDragPosition(){let e=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:e.x,y:e.y}}setFreeDragPosition(e){return this._activeTransform={x:0,y:0},this._passiveTransform.x=e.x,this._passiveTransform.y=e.y,this._dropContainer||this._applyRootElementTransform(e.x,e.y),this}withPreviewContainer(e){return this._previewContainer=e,this}_sortFromLastPointerPosition(){let e=this._lastKnownPointerPosition;e&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(e),e)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=e=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,e)}else this.disabled||this._initializeDragSequence(this._rootElement,e)};_pointerMove=e=>{let t=this._getPointerPositionOnPage(e);if(!this._hasStartedDragging()){let i=Math.abs(t.x-this._pickupPositionOnPage.x),a=Math.abs(t.y-this._pickupPositionOnPage.y);if(i+a>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(e),l=this._dropContainer;if(!s){this._endDragSequence(e);return}(!l||!l.isDragging()&&!l.isReceiving())&&(e.cancelable&&e.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(e)))}return}e.cancelable&&e.preventDefault();let n=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(n),this._dropContainer)this._updateActiveDropContainer(n,t);else{let i=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=n.x-i.x+this._passiveTransform.x,a.y=n.y-i.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:n,event:e,distance:this._getDragDistance(n),delta:this._pointerDirectionDelta})})};_pointerUp=e=>{this._endDragSequence(e)};_endDragSequence(e){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:e}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(e),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(e);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:e})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(e){U(e)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),n=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Qe,qe)}),n){let i=this._rootElement,a=i.parentNode,r=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");a.insertBefore(s,i),this._initialTransform=i.style.transform||"",this._preview=new It(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,t)),me(i,!1,ge),this._document.body.appendChild(a.replaceChild(r,i)),this.started.next({source:this,event:e}),n.start(),this._initialContainer=n,this._initialIndex=n.getItemIndex(this)}else this.started.next({source:this,event:e}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(n?n.getScrollableParents():[])}_initializeDragSequence(e,t){this._parentDragRef&&t.stopPropagation();let n=this.isDragging(),i=U(t),a=!i&&t.button!==0,r=this._rootElement,s=A(t),l=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+Ye>Date.now(),c=i?te(t):Jt(t);if(s&&s.draggable&&t.type==="mousedown"&&t.preventDefault(),n||a||l||c)return;if(this._handles.length){let S=r.style;this._rootElementTapHighlight=S.webkitTapHighlightColor||"",S.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(S=>this._updateOnScroll(S)),this._boundaryElement&&(this._boundaryRect=At(this._boundaryElement));let m=this._previewTemplate;this._pickupPositionInElement=m&&m.template&&!m.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,e,t);let p=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:p.x,y:p.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(e){me(this._rootElement,!0,ge),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,n=t.getItemIndex(this),i=this._getPointerPositionOnPage(e),a=this._getDragDistance(i),r=t._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:a,dropPoint:i,event:e}),this.dropped.next({item:this,currentIndex:n,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:a,dropPoint:i,event:e}),t.drop(this,n,this._initialIndex,this._initialContainer,r,a,i,e),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:e,y:t},{x:n,y:i}){let a=this._initialContainer._getSiblingContainerFromPosition(this,e,t);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(e,t)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,s),this._dropContainer=a,this._dropContainer.enter(this,e,t,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(n,i),this._dropContainer._sortItem(this,e,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(e,t):this._applyPreviewTransform(e-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let e=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(e.left,e.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(n=>{let i=s=>{(!s||this._preview&&A(s)===this._preview.element&&s.propertyName==="transform")&&(r(),n(),clearTimeout(a))},a=setTimeout(i,t*1.5),r=this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){let e=this._placeholderTemplate,t=e?e.template:null,n;return t?(this._placeholderRef=e.viewContainer.createEmbeddedView(t,e.context),this._placeholderRef.detectChanges(),n=xe(this._placeholderRef,this._document)):n=Et(this._rootElement),n.style.pointerEvents="none",n.classList.add(be),n}_getPointerPositionInElement(e,t,n){let i=t===this._rootElement?null:t,a=i?i.getBoundingClientRect():e,r=U(n)?n.targetTouches[0]:n,s=this._getViewportScrollPosition(),l=r.pageX-a.left-s.left,c=r.pageY-a.top-s.top;return{x:a.left-e.left+l,y:a.top-e.top+c}}_getPointerPositionOnPage(e){let t=this._getViewportScrollPosition(),n=U(e)?e.touches[0]||e.changedTouches[0]||{pageX:0,pageY:0}:e,i=n.pageX-t.left,a=n.pageY-t.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let s=this._ownerSVGElement.createSVGPoint();return s.x=i,s.y=a,s.matrixTransform(r.inverse())}}return{x:i,y:a}}_getConstrainedPointerPosition(e){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:n,y:i}=this.constrainPosition?this.constrainPosition(e,this,this._initialDomRect,this._pickupPositionInElement):e;if(this.lockAxis==="x"||t==="x"?i=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(n=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),m=s.top+r,p=s.bottom-(c-r),S=s.left+a,ct=s.right-(l-a);n=_e(n,S,ct),i=_e(i,m,p)}return{x:n,y:i}}_updatePointerDirectionDelta(e){let{x:t,y:n}=e,i=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,r=Math.abs(t-a.x),s=Math.abs(n-a.y);return r>this._config.pointerDirectionChangeThreshold&&(i.x=t>a.x?1:-1,a.x=t),s>this._config.pointerDirectionChangeThreshold&&(i.y=n>a.y?1:-1,a.y=n),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let e=this._handles.length>0||!this.isDragging();e!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=e,N(this._rootElement,e))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(e=>e()),this._rootElementCleanups=void 0}_applyRootElementTransform(e,t){let n=1/this.scale,i=$(e*n,t*n),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=rt(i,this._initialTransform)}_applyPreviewTransform(e,t){let n=this._previewTemplate?.template?void 0:this._initialTransform,i=$(e,t);this._preview.setTransform(rt(i,n))}_getDragDistance(e){let t=this._pickupPositionOnPage;return t?{x:e.x-t.x,y:e.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:e,y:t}=this._passiveTransform;if(e===0&&t===0||this.isDragging()||!this._boundaryElement)return;let n=this._rootElement.getBoundingClientRect(),i=this._boundaryElement.getBoundingClientRect();if(i.width===0&&i.height===0||n.width===0&&n.height===0)return;let a=i.left-n.left,r=n.right-i.right,s=i.top-n.top,l=n.bottom-i.bottom;i.width>n.width?(a>0&&(e+=a),r>0&&(e-=r)):e=0,i.height>n.height?(s>0&&(t+=s),l>0&&(t-=l)):t=0,(e!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:e})}_getDragStartDelay(e){let t=this.dragStartDelay;return typeof t=="number"?t:U(e)?t.touch:t?t.mouse:0}_updateOnScroll(e){let t=this._parentPositions.handleScroll(e);if(t){let n=A(e);this._boundaryRect&&n!==this._boundaryElement&&n.contains(this._boundaryElement)&&Z(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=it(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(e,t){let n=this._previewContainer||"global";if(n==="parent")return e;if(n==="global"){let i=this._document;return t||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return y(n)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=e=>{if(this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&e.preventDefault()}else this.disabled||e.preventDefault()};_getTargetHandle(e){return this._handles.find(t=>e.target&&(e.target===t||t.contains(e.target)))}_conditionallyInsertAnchor(e,t,n){if(e===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let i=this._anchor??=Et(this._placeholder);i.classList.remove(be),i.classList.add("cdk-drag-anchor"),i.style.transform="",n?n.before(i):y(t.element).appendChild(i)}}};function _e(o,e,t){return Math.max(e,Math.min(t,o))}function U(o){return o.type[0]==="t"}function Qe(o){o.preventDefault()}function De(o,e,t){let n=ve(e,o.length-1),i=ve(t,o.length-1);if(n===i)return;let a=o[n],r=i<n?-1:1;for(let s=n;s!==i;s+=r)o[s]=o[s+r];o[i]=a}function ve(o,e){return Math.max(0,Math.min(e,o))}var st=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(e){this._dragDropRegistry=e}_previousSwap={drag:null,delta:0,overlaps:!1};start(e){this.withItems(e)}sort(e,t,n,i){let a=this._itemPositions,r=this._getItemIndexFromPointerPosition(e,t,n,i);if(r===-1&&a.length>0)return null;let s=this.orientation==="horizontal",l=a.findIndex(b=>b.drag===e),c=a[r],m=a[l].clientRect,p=c.clientRect,S=l>r?1:-1,ct=this._getItemOffsetPx(m,p,S),Me=this._getSiblingOffsetPx(l,a,S),ze=a.slice();return De(a,l,r),a.forEach((b,Ae)=>{if(ze[Ae]===b)return;let Ht=b.drag===e,dt=Ht?ct:Me,jt=Ht?e.getPlaceholderElement():b.drag.getRootElement();b.offset+=dt;let Wt=Math.round(b.offset*(1/b.drag.scale));s?(jt.style.transform=rt(`translate3d(${Wt}px, 0, 0)`,b.initialTransform),Z(b.clientRect,0,dt)):(jt.style.transform=rt(`translate3d(0, ${Wt}px, 0)`,b.initialTransform),Z(b.clientRect,dt,0))}),this._previousSwap.overlaps=kt(p,t,n),this._previousSwap.drag=c.drag,this._previousSwap.delta=s?i.x:i.y,{previousIndex:l,currentIndex:r}}enter(e,t,n,i){let a=this._activeDraggables,r=a.indexOf(e),s=e.getPlaceholderElement();r>-1&&a.splice(r,1);let l=i==null||i<0?this._getItemIndexFromPointerPosition(e,t,n):i,c=a[l];if(c===e&&(c=a[l+1]),!c&&(l==null||l===-1||l<a.length-1)&&this._shouldEnterAsFirstChild(t,n)&&(c=a[0]),c&&!this._dragDropRegistry.isDragging(c)){let m=c.getRootElement();m.parentElement.insertBefore(s,m),a.splice(l,0,e)}else this._element.appendChild(s),a.push(e);s.style.transform="",this._cacheItemPositions()}withItems(e){this._activeDraggables=e.slice(),this._cacheItemPositions()}withSortPredicate(e){this._sortPredicate=e}reset(){this._activeDraggables?.forEach(e=>{let t=e.getRootElement();if(t){let n=this._itemPositions.find(i=>i.drag===e)?.initialTransform;t.style.transform=n||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(e){return this._getVisualItemPositions().findIndex(t=>t.drag===e)}getItemAtIndex(e){return this._getVisualItemPositions()[e]?.drag||null}updateOnScroll(e,t){this._itemPositions.forEach(({clientRect:n})=>{Z(n,e,t)}),this._itemPositions.forEach(({drag:n})=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(e){this._element=e}_cacheItemPositions(){let e=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let n=t.getVisibleElement();return{drag:t,offset:0,initialTransform:n.style.transform||"",clientRect:At(n)}}).sort((t,n)=>e?t.clientRect.left-n.clientRect.left:t.clientRect.top-n.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(e,t,n){let i=this.orientation==="horizontal",a=i?t.left-e.left:t.top-e.top;return n===-1&&(a+=i?t.width-e.width:t.height-e.height),a}_getSiblingOffsetPx(e,t,n){let i=this.orientation==="horizontal",a=t[e].clientRect,r=t[e+n*-1],s=a[i?"width":"height"]*n;if(r){let l=i?"left":"top",c=i?"right":"bottom";n===-1?s-=r.clientRect[l]-a[c]:s+=a[l]-r.clientRect[c]}return s}_shouldEnterAsFirstChild(e,t){if(!this._activeDraggables.length)return!1;let n=this._itemPositions,i=this.orientation==="horizontal";if(n[0].drag!==this._activeDraggables[0]){let r=n[n.length-1].clientRect;return i?e>=r.right:t>=r.bottom}else{let r=n[0].clientRect;return i?e<=r.left:t<=r.top}}_getItemIndexFromPointerPosition(e,t,n,i){let a=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:s,clientRect:l})=>{if(s===e)return!1;if(i){let c=a?i.x:i.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return a?t>=Math.floor(l.left)&&t<Math.floor(l.right):n>=Math.floor(l.top)&&n<Math.floor(l.bottom)});return r===-1||!this._sortPredicate(r,e)?-1:r}},Ot=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(e,t){this._document=e,this._dragDropRegistry=t}start(e){let t=this._element.childNodes;this._relatedNodes=[];for(let n=0;n<t.length;n++){let i=t[n];this._relatedNodes.push([i,i.nextSibling])}this.withItems(e)}sort(e,t,n,i){let a=this._getItemIndexFromPointerPosition(e,t,n),r=this._previousSwap;if(a===-1||this._activeItems[a]===e)return null;let s=this._activeItems[a];if(r.drag===s&&r.overlaps&&r.deltaX===i.x&&r.deltaY===i.y)return null;let l=this.getItemIndex(e),c=e.getPlaceholderElement(),m=s.getRootElement();a>l?m.after(c):m.before(c),De(this._activeItems,l,a);let p=this._getRootNode().elementFromPoint(t,n);return r.deltaX=i.x,r.deltaY=i.y,r.drag=s,r.overlaps=m===p||m.contains(p),{previousIndex:l,currentIndex:a}}enter(e,t,n,i){let a=this._activeItems.indexOf(e);a>-1&&this._activeItems.splice(a,1);let r=i==null||i<0?this._getItemIndexFromPointerPosition(e,t,n):i;r===-1&&(r=this._getClosestItemIndexToPointer(e,t,n));let s=this._activeItems[r];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(r,0,e),s.getRootElement().before(e.getPlaceholderElement())):(this._activeItems.push(e),this._element.appendChild(e.getPlaceholderElement()))}withItems(e){this._activeItems=e.slice()}withSortPredicate(e){this._sortPredicate=e}reset(){let e=this._element,t=this._previousSwap;for(let n=this._relatedNodes.length-1;n>-1;n--){let[i,a]=this._relatedNodes[n];i.parentNode===e&&i.nextSibling!==a&&(a===null?e.appendChild(i):a.parentNode===e&&e.insertBefore(i,a))}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(e){return this._activeItems.indexOf(e)}getItemAtIndex(e){return this._activeItems[e]||null}updateOnScroll(){this._activeItems.forEach(e=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition()})}withElementContainer(e){e!==this._element&&(this._element=e,this._rootNode=void 0)}_getItemIndexFromPointerPosition(e,t,n){let i=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(n)),a=i?this._activeItems.findIndex(r=>{let s=r.getRootElement();return i===s||s.contains(i)}):-1;return a===-1||!this._sortPredicate(a,e)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=it(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(e,t,n){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let i=1/0,a=-1;for(let r=0;r<this._activeItems.length;r++){let s=this._activeItems[r];if(s!==e){let{x:l,y:c}=s.getRootElement().getBoundingClientRect(),m=Math.hypot(t-l,n-c);m<i&&(i=m,a=r)}}return a}},ye=.05,Se=.05,_=(function(o){return o[o.NONE=0]="NONE",o[o.UP=1]="UP",o[o.DOWN=2]="DOWN",o})(_||{}),h=(function(o){return o[o.NONE=0]="NONE",o[o.LEFT=1]="LEFT",o[o.RIGHT=2]="RIGHT",o})(h||{});function Xe(o,e){return new Mt(e,o.get(Ft),o.get(w),o.get(g),o.get(Rt))}var Mt=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new u;entered=new u;exited=new u;dropped=new u;sorted=new u;receivingStarted=new u;receivingStopped=new u;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=I.EMPTY;_verticalScrollDirection=_.NONE;_horizontalScrollDirection=h.NONE;_scrollNode;_stopScrollTimers=new u;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(e,t,n,i,a){this._dragDropRegistry=t,this._ngZone=i,this._viewportRuler=a;let r=this.element=y(e);this._document=n,this.withOrientation("vertical").withElementContainer(r),t.registerDropContainer(this),this._parentPositions=new at(n)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(e,t,n,i){this._draggingStarted(),i==null&&this.sortingDisabled&&(i=this._draggables.indexOf(e)),this._sortStrategy.enter(e,t,n,i),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:e,container:this,currentIndex:this.getItemIndex(e)})}exit(e){this._reset(),this.exited.next({item:e,container:this})}drop(e,t,n,i,a,r,s,l={}){this._reset(),this.dropped.next({item:e,currentIndex:t,previousIndex:n,container:this,previousContainer:i,isPointerOverContainer:a,distance:r,dropPoint:s,event:l})}withItems(e){let t=this._draggables;return this._draggables=e,e.forEach(n=>n._withDropContainer(this)),this.isDragging()&&(t.filter(i=>i.isDragging()).every(i=>e.indexOf(i)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(e){return this._direction=e,this._sortStrategy instanceof st&&(this._sortStrategy.direction=e),this}connectedTo(e){return this._siblings=e.slice(),this}withOrientation(e){if(e==="mixed")this._sortStrategy=new Ot(this._document,this._dragDropRegistry);else{let t=new st(this._dragDropRegistry);t.direction=this._direction,t.orientation=e,this._sortStrategy=t}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,n)=>this.sortPredicate(t,n,this)),this}withScrollableParents(e){let t=this._container;return this._scrollableElements=e.indexOf(t)===-1?[t,...e]:e.slice(),this}withElementContainer(e){if(e===this._container)return this;let t=y(this.element),n=this._scrollableElements.indexOf(this._container),i=this._scrollableElements.indexOf(e);return n>-1&&this._scrollableElements.splice(n,1),i>-1&&this._scrollableElements.splice(i,1),this._sortStrategy&&this._sortStrategy.withElementContainer(e),this._cachedShadowRoot=null,this._scrollableElements.unshift(e),this._container=e,this}getScrollableParents(){return this._scrollableElements}getItemIndex(e){return this._isDragging?this._sortStrategy.getItemIndex(e):this._draggables.indexOf(e)}getItemAtIndex(e){return this._isDragging?this._sortStrategy.getItemAtIndex(e):this._draggables[e]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(e,t,n,i){if(this.sortingDisabled||!this._domRect||!de(this._domRect,ye,t,n))return;let a=this._sortStrategy.sort(e,t,n,i);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:e})}_startScrollingIfNecessary(e,t){if(this.autoScrollDisabled)return;let n,i=_.NONE,a=h.NONE;if(this._parentPositions.positions.forEach((r,s)=>{s===this._document||!r.clientRect||n||de(r.clientRect,ye,e,t)&&([i,a]=Je(s,r.clientRect,this._direction,e,t),(i||a)&&(n=s))}),!i&&!a){let{width:r,height:s}=this._viewportRuler.getViewportSize(),l={width:r,height:s,top:0,right:r,bottom:s,left:0};i=Re(l,t),a=Ce(l,e),n=window}n&&(i!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||n!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=a,this._scrollNode=n,(i||a)&&n?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let e=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=e.msScrollSnapType||e.scrollSnapType||"",e.scrollSnapType=e.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let e=this._container.style;e.scrollSnapType=e.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),$t(0,mt).pipe(L(this._stopScrollTimers)).subscribe(()=>{let e=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===_.UP?e.scrollBy(0,-t):this._verticalScrollDirection===_.DOWN&&e.scrollBy(0,t),this._horizontalScrollDirection===h.LEFT?e.scrollBy(-t,0):this._horizontalScrollDirection===h.RIGHT&&e.scrollBy(t,0)})};_isOverContainer(e,t){return this._domRect!=null&&kt(this._domRect,e,t)}_getSiblingContainerFromPosition(e,t,n){return this._siblings.find(i=>i._canReceive(e,t,n))}_canReceive(e,t,n){if(!this._domRect||!kt(this._domRect,t,n)||!this.enterPredicate(e,this))return!1;let i=this._getShadowRoot().elementFromPoint(t,n);return i?i===this._container||this._container.contains(i):!1}_startReceiving(e,t){let n=this._activeSiblings;!n.has(e)&&t.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(n.add(e),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:e,receiver:this,items:t}))}_stopReceiving(e){this._activeSiblings.delete(e),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:e,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(e);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let e=it(this._container);this._cachedShadowRoot=e||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let e=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,e))}};function Re(o,e){let{top:t,bottom:n,height:i}=o,a=i*Se;return e>=t-a&&e<=t+a?_.UP:e>=n-a&&e<=n+a?_.DOWN:_.NONE}function Ce(o,e){let{left:t,right:n,width:i}=o,a=i*Se;return e>=t-a&&e<=t+a?h.LEFT:e>=n-a&&e<=n+a?h.RIGHT:h.NONE}function Je(o,e,t,n,i){let a=Re(e,i),r=Ce(e,n),s=_.NONE,l=h.NONE;if(a){let c=o.scrollTop;a===_.UP?c>0&&(s=_.UP):o.scrollHeight-c>o.clientHeight&&(s=_.DOWN)}if(r){let c=o.scrollLeft;t==="rtl"?r===h.RIGHT?c<0&&(l=h.RIGHT):o.scrollWidth+c>o.clientWidth&&(l=h.LEFT):r===h.LEFT?c>0&&(l=h.LEFT):o.scrollWidth-c>o.clientWidth&&(l=h.RIGHT)}return[s,l]}var we=new R("CDK_DRAG_PARENT");var tn=new R("CdkDragHandle");var Pe=new R("CDK_DRAG_CONFIG"),Ee=new R("CdkDropList"),_i=(()=>{class o{element=d(E);dropContainer=d(Ee,{optional:!0,skipSelf:!0});_ngZone=d(g);_viewContainerRef=d(bt);_dir=d(wt,{optional:!0});_changeDetectorRef=d(J);_selfHandle=d(tn,{optional:!0,self:!0});_parentDrag=d(we,{optional:!0,skipSelf:!0});_dragDropRegistry=d(Ft);_destroyed=new u;_handles=new Gt([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new v;released=new v;ended=new v;entered=new v;exited=new v;dropped=new v;moved=new B(t=>{let n=this._dragRef.moved.pipe(Zt(i=>({source:this,pointerPosition:i.pointerPosition,event:i.event,delta:i.delta,distance:i.distance}))).subscribe(t);return()=>{n.unsubscribe()}});_injector=d(F);constructor(){let t=this.dropContainer,n=d(Pe,{optional:!0});this._dragRef=Ke(this._injector,this.element,{dragStartThreshold:n&&n.dragStartThreshold!=null?n.dragStartThreshold:5,pointerDirectionChangeThreshold:n&&n.pointerDirectionChangeThreshold!=null?n.pointerDirectionChangeThreshold:5,zIndex:n?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),n&&this._assignDefaults(n),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(L(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t)}ngAfterViewInit(){ft(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(t){let n=t.rootElementSelector,i=t.freeDragPosition;n&&!n.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(t){let n=this._handles.getValue();n.push(t),this._handles.next(n)}_removeHandle(t){let n=this._handles.getValue(),i=n.indexOf(t);i>-1&&(n.splice(i,1),this._handles.next(n))}_setPreviewTemplate(t){this._previewTemplate=t}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(t){this._placeholderTemplate=t}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let t=this.element.nativeElement,n=t;this.rootElementSelector&&(n=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(n||t)}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):y(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let n=this._dir,i=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof i=="object"&&i?i:nt(i),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),n&&t.withDirection(n.value)}}),t.beforeStarted.pipe(Yt(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let n=this.element.nativeElement.parentElement;for(;n;){let i=this._dragDropRegistry.getDragDirectiveForNode(n);if(i){t.withParent(i._dragRef);break}n=n.parentElement}})}_handleEvents(t){t.started.subscribe(n=>{this.started.emit({source:this,event:n.event}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(n=>{this.released.emit({source:this,event:n.event})}),t.ended.subscribe(n=>{this.ended.emit({source:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(n=>{this.entered.emit({container:n.container.data,item:this,currentIndex:n.currentIndex})}),t.exited.subscribe(n=>{this.exited.emit({container:n.container.data,item:this})}),t.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,isPointerOverContainer:n.isPointerOverContainer,item:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event})})}_assignDefaults(t){let{lockAxis:n,dragStartDelay:i,constrainPosition:a,previewClass:r,boundaryElement:s,draggingDisabled:l,rootElementSelector:c,previewContainer:m}=t;this.disabled=l??!1,this.dragStartDelay=i||0,this.lockAxis=n||null,a&&(this.constrainPosition=a),r&&(this.previewClass=r),s&&(this.boundaryElement=s),c&&(this.rootElementSelector=c),m&&(this.previewContainer=m)}_setupHandlesListener(){this._handles.pipe(Kt(t=>{let n=t.map(i=>i.element);this._selfHandle&&this.rootElementSelector&&n.push(this.element),this._dragRef.withHandles(n)}),ht(t=>q(...t.map(n=>n._stateChanges.pipe(Y(n))))),L(this._destroyed)).subscribe(t=>{let n=this._dragRef,i=t.element.nativeElement;t.disabled?n.disableHandle(i):n.enableHandle(i)})}static \u0275fac=function(n){return new(n||o)};static \u0275dir=P({type:o,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(n,i){n&2&&D("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",f],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",tt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[j([{provide:we,useExisting:o}]),pt]})}return o})(),zt=new R("CdkDropListGroup"),vi=(()=>{class o{_items=new Set;disabled=!1;ngOnDestroy(){this._items.clear()}static \u0275fac=function(n){return new(n||o)};static \u0275dir=P({type:o,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",f]},exportAs:["cdkDropListGroup"],features:[j([{provide:zt,useExisting:o}])]})}return o})(),yi=(()=>{class o{element=d(E);_changeDetectorRef=d(J);_scrollDispatcher=d(re);_dir=d(wt,{optional:!0});_group=d(zt,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new u;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=d(ne).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new v;entered=new v;exited=new v;sorted=new v;_unsortedItems=new Set;constructor(){let t=d(Pe,{optional:!0}),n=d(F);this._dropListRef=Xe(n,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(i,a)=>this.enterPredicate(i.data,a.data),this._dropListRef.sortPredicate=(i,a,r)=>this.sortPredicate(i,a.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),o._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef))}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let n=this._latestSortedRefs.indexOf(t._dragRef);n>-1&&(this._latestSortedRefs.splice(n,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,n)=>t._dragRef.getVisibleElement().compareDocumentPosition(n._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=o._dropLists.indexOf(this);t>-1&&o._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(Y(this._dir.value),L(this._destroyed)).subscribe(n=>t.withDirection(n)),t.beforeStarted.subscribe(()=>{let n=Xt(this.connectedTo).map(i=>{if(typeof i=="string"){let a=o._dropLists.find(r=>r.id===i);return a}return i});if(this._group&&this._group._items.forEach(i=>{n.indexOf(i)===-1&&n.push(i)}),!this._scrollableParentsResolved){let i=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(i),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let i=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(i)}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=nt(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(n.filter(i=>i&&i!==this).map(i=>i._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef)),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(n=>{this.entered.emit({container:this,item:n.item.data,currentIndex:n.currentIndex})}),t.exited.subscribe(n=>{this.exited.emit({container:this,item:n.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(n=>{this.sorted.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,container:this,item:n.item.data})}),t.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,item:n.item.data,isPointerOverContainer:n.isPointerOverContainer,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),q(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(t){let{lockAxis:n,draggingDisabled:i,sortingDisabled:a,listAutoScrollDisabled:r,listOrientation:s}=t;this.disabled=i??!1,this.sortingDisabled=a??!1,this.autoScrollDisabled=r??!1,this.orientation=s||"vertical",this.lockAxis=n||null}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t)}static \u0275fac=function(n){return new(n||o)};static \u0275dir=P({type:o,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(n,i){n&2&&(Q("id",i.id),D("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",f],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",f],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",f],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",f]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[j([{provide:zt,useValue:void 0},{provide:Ee,useExisting:o}])]})}return o})();var en={capture:!0},nn=["focus","mousedown","mouseenter","touchstart"],Nt="mat-ripple-loader-uninitialized",Bt="mat-ripple-loader-class-name",ke="mat-ripple-loader-centered",lt="mat-ripple-loader-disabled",Ie=(()=>{class o{_document=d(w);_animationsDisabled=ot();_globalRippleOptions=d(oe,{optional:!0});_platform=d(z);_ngZone=d(g);_injector=d(F);_eventCleanups;_hosts=new Map;constructor(){let t=d(k).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>nn.map(n=>t.listen(this._document,n,this._onInteraction,en)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Nt,this._globalRippleOptions?.namespace??""),(n.className||!t.hasAttribute(Bt))&&t.setAttribute(Bt,n.className||""),n.centered&&t.setAttribute(ke,""),n.disabled&&t.setAttribute(lt,"")}setDisabled(t,n){let i=this._hosts.get(t);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):n?t.setAttribute(lt,""):t.removeAttribute(lt)}_onInteraction=t=>{let n=A(t);if(n instanceof HTMLElement){let i=n.closest(`[${Nt}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",t.getAttribute(Bt)),t.append(n);let i=this._globalRippleOptions,a=this._animationsDisabled?0:i?.animation?.enterDuration??xt.enterDuration,r=this._animationsDisabled?0:i?.animation?.exitDuration??xt.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(lt),rippleConfig:{centered:t.hasAttribute(ke),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},l=new ie(s,this._ngZone,n,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:c}),t.removeAttribute(Nt)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var on=["mat-icon-button",""],an=["*"],rn=new R("MAT_BUTTON_CONFIG");function Te(o){return o==null?void 0:tt(o)}var Vt=(()=>{class o{_elementRef=d(E);_ngZone=d(g);_animationsDisabled=ot();_config=d(rn,{optional:!0});_focusMonitor=d(ee);_cleanupClick;_renderer=d(V);_rippleLoader=d(Ie);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){d(et).load(ae);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||o)};static \u0275dir=P({type:o,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(Q("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),X(i.color?"mat-"+i.color:""),D("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",f],disabled:[2,"disabled","disabled",f],ariaDisabled:[2,"aria-disabled","ariaDisabled",f],disabledInteractive:[2,"disabledInteractive","disabledInteractive",f],tabIndex:[2,"tabIndex","tabIndex",Te],_tabindex:[2,"tabindex","_tabindex",Te]}})}return o})(),sn=(()=>{class o extends Vt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[H],attrs:on,ngContentSelectors:an,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(M(),O(0,"span",0),x(1),O(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var ln=["matButton",""],cn=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],dn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Oe=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Hi=(()=>{class o extends Vt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=mn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Oe.get(this._appearance):null,a=Oe.get(t);i&&n.remove(...i),n.add(...a),this._appearance=t}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=C({type:o,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[H],attrs:ln,ngContentSelectors:dn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(M(cn),O(0,"span",0),x(1),gt(2,"span",1),x(3,1),_t(),x(4,2),O(5,"span",2)(6,"span",3)),n&2&&D("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return o})();function mn(o){return o.hasAttribute("mat-raised-button")?"elevated":o.hasAttribute("mat-stroked-button")?"outlined":o.hasAttribute("mat-flat-button")?"filled":o.hasAttribute("mat-button")?"text":null}export{wn as a,re as b,Rt as c,De as d,_i as e,vi as f,yi as g,sn as h,Hi as i};
