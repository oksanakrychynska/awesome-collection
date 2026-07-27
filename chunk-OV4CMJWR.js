import{a as pt,d as ht,e as gt,g as _t,h as bt,i as xt}from"./chunk-BEVNS2X4.js";import{a as tt,b as it,e as oe,g as ye,j as V,k as j,o as Ce,v as Z,x as nt}from"./chunk-XIIYOVBG.js";import{b as ot,c as rt,d as at,e as lt,g as dt,h as st,i as ct,j as mt,k as ft}from"./chunk-DZZLF56M.js";import{$a as S,A as Ae,Aa as u,Ba as ee,Bb as et,C as Be,Ca as W,Da as G,E as H,Ea as _,Fa as s,G as me,Ga as d,Ha as O,I as E,Ia as qe,Ja as Ue,K as w,Ka as ue,Kb as ut,La as Q,M as l,Ma as te,Na as b,P as T,Pa as p,Q as P,Qa as pe,R as Ne,Ra as k,S as fe,Sa as We,T as q,Ta as he,Ua as v,V as M,Va as y,Wa as Ge,Xa as Qe,Y as x,Ya as ge,Z as L,Za as _e,_ as He,_a as be,aa as z,bb as m,cb as F,d as Oe,db as ie,e as X,eb as ne,f as D,ga as c,gb as $e,h as De,ia as Ve,ib as xe,j as Te,ja as U,jb as h,mb as Ze,n as Pe,ob as $,pa as I,pb as Ye,q as Ie,qb as Xe,r as K,ra as R,rb as ve,tb as Ke,u as Re,ua as J,va as je,w as Le,y as ze,ya as A,yb as Je,za as f}from"./chunk-PPNW6PST.js";var Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),Gt={passive:!0},vt=(()=>{class n{_platform=l(j);_ngZone=l(M);_renderer=l(Ve).createRenderer(null,null);_styleLoader=l(tt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Te;this._styleLoader.load(Wt);let t=ye(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new D,a="cdk-text-field-autofilled",g=N=>{N.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:N.target,isAutofilled:!0}))):N.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:N.target,isAutofilled:!1})))},C=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",g,Gt)));return this._monitoredElements.set(t,{subject:r,unlisten:C}),r}stopMonitoring(e){let t=ye(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yt=new w("MAT_INPUT_VALUE_ACCESSOR");var we=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new X(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(K(e=>e.some(t=>t.target===o)),Ae({bufferSize:1,refCount:!0}),H(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ct=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new we(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qt=["notch"],$t=["matFormFieldNotchedOutline",""],Zt=["*"],wt=["iconPrefixContainer"],Mt=["textPrefixContainer"],kt=["iconSuffixContainer"],St=["textSuffixContainer"],Yt=["textField"],Xt=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Kt=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Jt(n,o){n&1&&O(0,"span",21)}function ei(n,o){if(n&1&&(s(0,"label",20),k(1,1),f(2,Jt,1,0,"span",21),d()),n&2){let e=p(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),A("for",e._control.disableAutomaticLabeling?null:e._control.id),c(2),u(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ti(n,o){if(n&1&&f(0,ei,3,5,"label",20),n&2){let e=p();u(e._hasFloatingLabel()?0:-1)}}function ii(n,o){n&1&&O(0,"div",7)}function ni(n,o){}function oi(n,o){if(n&1&&J(0,ni,0,0,"ng-template",13),n&2){p(2);let e=_e(1);_("ngTemplateOutlet",e)}}function ri(n,o){if(n&1&&(s(0,"div",9),f(1,oi,1,1,null,13),d()),n&2){let e=p();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),c(),u(e._forceDisplayInfixLabel()?-1:1)}}function ai(n,o){n&1&&(s(0,"div",10,2),k(2,2),d())}function li(n,o){n&1&&(s(0,"div",11,3),k(2,3),d())}function di(n,o){}function si(n,o){if(n&1&&J(0,di,0,0,"ng-template",13),n&2){p();let e=_e(1);_("ngTemplateOutlet",e)}}function ci(n,o){n&1&&(s(0,"div",14,4),k(2,4),d())}function mi(n,o){n&1&&(s(0,"div",15,5),k(2,5),d())}function fi(n,o){n&1&&O(0,"div",16)}function ui(n,o){n&1&&(s(0,"div",18),k(1,6),d())}function pi(n,o){if(n&1&&(s(0,"mat-hint",22),m(1),d()),n&2){let e=p(2);_("id",e._hintLabelId),c(),F(e.hintLabel)}}function hi(n,o){if(n&1&&(s(0,"div",19),f(1,pi,2,2,"mat-hint",22),k(2,7),O(3,"div",23),k(4,8),d()),n&2){let e=p();c(),u(e.hintLabel?1:-1)}}var Y=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-label"]]})}return n})(),gi=new w("MatError");var Me=(()=>{class n{align="start";id=l(Z).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(te("id",i.id),A("align",null),S("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),_i=new w("MatPrefix");var bi=new w("MatSuffix");var It=new w("FloatingLabelParent"),Ft=(()=>{class n{_elementRef=l(z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Ct);_ngZone=l(M);_parent=l(It);_resizeSubscription=new Oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return xi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&S("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function xi(n){let o=n;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Et="mdc-line-ripple--active",re="mdc-line-ripple--deactivating",Ot=(()=>{class n{_elementRef=l(z);_cleanupTransitionEnd;constructor(){let e=l(M),t=l(U);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(re),e.add(Et)}deactivate(){this._elementRef.nativeElement.classList.add(re)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(re);e.propertyName==="opacity"&&i&&t.remove(Et,re)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Dt=(()=>{class n{_elementRef=l(z);_ngZone=l(M);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&he(Qt,5),t&2){let r;v(r=y())&&(i._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&S("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:$t,ngContentSelectors:Zt,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(pe(),ue(0,"div",1),qe(1,"div",2,0),k(3),Ue(),ue(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),ke=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n})}return n})();var Se=new w("MatFormField"),vi=new w("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Tt="fill",yi="auto",Pt="fixed",Ci="translateY(-50%)",Fe=(()=>{class n{_elementRef=l(z);_changeDetectorRef=l(Xe);_platform=l(j);_idGenerator=l(Z);_ngZone=l(M);_defaults=l(vi,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=$("iconPrefixContainer");_textPrefixContainerSignal=$("textPrefixContainer");_iconSuffixContainerSignal=$("iconSuffixContainer");_textSuffixContainerSignal=$("textSuffixContainer");_prefixSuffixContainers=h(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ye(Y);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=V(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||yi}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Tt;this._appearanceSignal.set(t)}_appearanceSignal=x(Tt);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Pt}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Pt}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,t=l(it);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),L(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=h(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Be([void 0,void 0]),Pe(()=>[t.errorState,t.userAriaDescribedBy]),ze(),K(([[r,a],[g,C]])=>r!==g||a!==C)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(H(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ie(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ke({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=h(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(g=>g.align==="start"):null,a=this._hintChildren?this._hintChildren.find(g=>g.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,i;if(t){let r=this._describedByIds||e;i=e.concat(t.filter(a=>a&&!r.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,g=t?.getBoundingClientRect().width??0,C=i?.getBoundingClientRect().width??0,N=r?.getBoundingClientRect().width??0,Bt=this._currentDirection==="rtl"?"-1":"1",Nt=`${a+g}px`,Ht=`calc(${Bt} * (${Nt} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Vt=`var(--mat-mdc-form-field-label-transform, ${Ci} translateX(${Ht}))`,jt=a+g+C+N;return[Vt,jt]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,r){if(t&1&&(Ge(r,i._labelChild,Y,5),We(r,ke,5)(r,_i,5)(r,bi,5)(r,gi,5)(r,Me,5)),t&2){ge();let a;v(a=y())&&(i._formFieldControl=a.first),v(a=y())&&(i._prefixChildren=a),v(a=y())&&(i._suffixChildren=a),v(a=y())&&(i._errorChildren=a),v(a=y())&&(i._hintChildren=a)}},viewQuery:function(t,i){if(t&1&&(Qe(i._iconPrefixContainerSignal,wt,5)(i._textPrefixContainerSignal,Mt,5)(i._iconSuffixContainerSignal,kt,5)(i._textSuffixContainerSignal,St,5),he(Yt,5)(wt,5)(Mt,5)(kt,5)(St,5)(Ft,5)(Dt,5)(Ot,5)),t&2){ge(4);let r;v(r=y())&&(i._textField=r.first),v(r=y())&&(i._iconPrefixContainer=r.first),v(r=y())&&(i._textPrefixContainer=r.first),v(r=y())&&(i._iconSuffixContainer=r.first),v(r=y())&&(i._textSuffixContainer=r.first),v(r=y())&&(i._floatingLabel=r.first),v(r=y())&&(i._notchedOutline=r.first),v(r=y())&&(i._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&S("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ne([{provide:Se,useExisting:n},{provide:It,useExisting:n}])],ngContentSelectors:Kt,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(pe(Xt),J(0,ti,1,1,"ng-template",null,0,$e),s(2,"div",6,1),b("click",function(a){return i._control.onContainerClick(a)}),f(4,ii,1,0,"div",7),s(5,"div",8),f(6,ri,2,2,"div",9),f(7,ai,3,0,"div",10),f(8,li,3,0,"div",11),s(9,"div",12),f(10,si,1,1,null,13),k(11),d(),f(12,ci,3,0,"div",14),f(13,mi,3,0,"div",15),d(),f(14,fi,1,0,"div",16),d(),s(15,"div",17),f(16,ui,2,0,"div",18)(17,hi,5,1,"div",19),d()),t&2){let r;c(2),S("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),c(2),u(!i._hasOutline()&&!i._control.disabled?4:-1),c(2),u(i._hasOutline()?6:-1),c(),u(i._hasIconPrefix?7:-1),c(),u(i._hasTextPrefix?8:-1),c(2),u(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),c(2),u(i._hasTextSuffix?12:-1),c(),u(i._hasIconSuffix?13:-1),c(),u(i._hasOutline()?-1:14),c(),S("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();c(),u((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Ft,Dt,Je,Ot,Me],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Rt=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ae=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,i,r){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=r}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(i,e)??!1;r!==o&&(this.errorState=r,this._stateChanges.next())}};var wi=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Mi=new w("MAT_INPUT_CONFIG"),Lt=(()=>{class n{_elementRef=l(z);_platform=l(j);ngControl=l(at,{optional:!0,self:!0});_autofillMonitor=l(vt);_ngZone=l(M);_formField=l(Se,{optional:!0});_renderer=l(U);_uid=l(Z).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Mi,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=V(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(rt.required)??!1}set required(e){this._required=V(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ce().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=V(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ce().has(e));constructor(){let e=l(dt,{optional:!0}),t=l(mt,{optional:!0}),i=l(Rt),r=l(yt,{optional:!0,self:!0}),a=this._elementRef.nativeElement,g=a.nodeName.toLowerCase();r?je(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ae(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=g==="select",this._isTextarea=g==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&L(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){wi.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=R({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&b("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(te("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),A("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),S("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},exportAs:["matInput"],features:[ne([{provide:ke,useExisting:n}]),He]})}return n})();function le(n){n||(n=l(q));let o=new X(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(H(o))}function zt(n,o){let e=o?.injector??l(Ne),t=new De(1),i=L(()=>{let r;try{r=n()}catch(a){xe(()=>t.error(a));return}xe(()=>t.next(r))},{injector:e,manualCleanup:!0});return e.get(q).onDestroy(()=>{i.destroy(),t.complete()}),t.asObservable()}function Ee(n,o){let t=!o?.manualCleanup?o?.injector?.get(q)??l(q):null,i=ki(o?.equal),r;o?.requireSync?r=x({kind:0},{equal:i}):r=x({kind:1,value:o?.initialValue},{equal:i});let a,g=n.subscribe({next:C=>r.set({kind:1,value:C}),error:C=>{r.set({kind:2,error:C}),a?.()},complete:()=>{a?.()}});if(o?.requireSync&&r().kind===0)throw new me(601,!1);return a=t?.onDestroy(g.unsubscribe.bind(g)),h(()=>{let C=r();switch(C.kind){case 1:return C.value;case 2:throw C.error;case 0:throw new me(601,!1)}},{equal:o?.equal})}function ki(n=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&n(o.value,e.value)}function Fi(n,o){if(n&1){let e=Q();s(0,"button",3),b("click",function(){T(e);let i=p();return P(i.searchControl.reset())}),s(1,"mat-icon"),m(2,"close"),d()()}}var de=class n{search=Ze();searchControl=new st("",{nonNullable:!0});constructor(){this.searchControl.valueChanges.pipe(le()).subscribe(o=>{this.search.emit(o)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-search"]],outputs:{search:"search"},decls:5,vars:2,consts:[[1,"example-form-field"],["matInput","","type","text",3,"formControl"],["matSuffix","","matIconButton","","aria-label","Clear"],["matSuffix","","matIconButton","","aria-label","Clear",3,"click"]],template:function(e,t){e&1&&(s(0,"mat-form-field",0)(1,"mat-label"),m(2,"Search your books"),d(),O(3,"input",1),f(4,Fi,3,0,"button",2),d()),e&2&&(c(3),_("formControl",t.searchControl),c(),u(t.searchControl.value?4:-1))},dependencies:[Fe,Y,bt,oe,ft,ot,lt,ct,Lt],encapsulation:2,changeDetection:0})};var se=class n{http=l(et);getBooks(){return this.http.get("./books.json")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};var ce=class n{constructor(){L(()=>this.applyTheme(this.theme()))}document=l(fe);theme=x(this.loadTheme());loadTheme(){return localStorage.getItem("theme")==="light"?"light":"dark"}applyTheme(o){this.document.documentElement.dataset.theme=o,localStorage.setItem("theme",o)}toggleTheme(){this.theme.update(o=>o==="dark"?"light":"dark")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ei=(n,o)=>o.id;function Oi(n,o){if(n&1&&m(0),n&2){let e=p();ie(" ",e.activeFiltersCount()," ")}}function Di(n,o){if(n&1&&(s(0,"option",16),m(1),d()),n&2){let e=o.$implicit;_("value",e),c(),F(e)}}function Ti(n,o){if(n&1&&(s(0,"option",16),m(1),d()),n&2){let e=o.$implicit;_("value",e),c(),F(e)}}function Pi(n,o){if(n&1&&(s(0,"option",16),m(1),d()),n&2){let e=o.$implicit;_("value",e),c(),F(e)}}function Ii(n,o){if(n&1){let e=Q();s(0,"div",10)(1,"label")(2,"span"),m(3,"Author"),d(),s(4,"select",14),b("change",function(i){T(e);let r=p();return P(r.onAuthorChange(i.target.value))}),s(5,"option",15),m(6,"All authors"),d(),W(7,Di,2,2,"option",16,ee),d()(),s(9,"label")(10,"span"),m(11,"Country"),d(),s(12,"select",14),b("change",function(i){T(e);let r=p();return P(r.onCountryChange(i.target.value))}),s(13,"option",15),m(14,"All countries"),d(),W(15,Ti,2,2,"option",16,ee),d()(),s(17,"label")(18,"span"),m(19,"Publisher"),d(),s(20,"select",14),b("change",function(i){T(e);let r=p();return P(r.onPublisherChange(i.target.value))}),s(21,"option",15),m(22,"All publishers"),d(),W(23,Pi,2,2,"option",16,ee),d()(),s(25,"button",17),b("click",function(){T(e);let i=p();return P(i.clearFilters())}),m(26," Clear filters "),d()()}if(n&2){let e=p();c(4),_("value",e.selectedAuthor()),c(3),G(e.authors()),c(5),_("value",e.selectedCountry()),c(3),G(e.countries()),c(5),_("value",e.selectedPublisher()),c(3),G(e.publishers()),c(2),_("disabled",!e.activeFiltersCount())}}function Ri(n,o){if(n&1&&(s(0,"article",20)(1,"div",21),m(2),d(),s(3,"div",22)(4,"h2"),m(5),d(),s(6,"p",23),m(7),d(),s(8,"dl",24)(9,"div")(10,"dt"),m(11,"Publisher"),d(),s(12,"dd"),m(13),d()(),s(14,"div")(15,"dt"),m(16,"Country"),d(),s(17,"dd"),m(18),d()()()()()),n&2){let e=o.$implicit;c(2),F(e.id),c(3),F(e.name),c(2),F(e.author),c(6),F(e.publisher),c(5),F(e.country)}}function Li(n,o){if(n&1){let e=Q();s(0,"section",18),b("scroll",function(i){T(e);let r=p();return P(r.onBookListScroll(i))})("cdkDropListDropped",function(i){T(e);let r=p();return P(r.drop(i))}),O(1,"div",19),W(2,Ri,19,5,"article",20,Ei),O(4,"div",19),d()}if(n&2){let e=p();_("cdkDropListData",e.filteredBooks()),c(),be("height",e.topSpacerHeight(),"px"),c(),G(e.visibleBooks()),c(2),be("height",e.bottomSpacerHeight(),"px")}}function zi(n,o){n&1&&(s(0,"section",13)(1,"h2"),m(2,"No books found"),d(),s(3,"p"),m(4,"Try another title, author, publisher, or country."),d()())}var At=class n{booksService=l(se);auth=l(ut);bookItemHeight=206;overscan=5;searchTerm=x("");filtersOpen=x(!1);selectedAuthor=x("");selectedCountry=x("");selectedPublisher=x("");bookOrder=x([]);booksScrollTop=x(0);booksViewportHeight=x(620);booksTotal=h(()=>this.filteredBooks().length);store=l(ce);allBooks=Ee(this.booksService.getBooks(),{initialValue:[]});debouncedTerm=Ee(zt(this.searchTerm).pipe(Re(300),Le(),le()),{initialValue:""});authors=h(()=>this.getFilterOptions("author"));countries=h(()=>this.getFilterOptions("country"));publishers=h(()=>this.getFilterOptions("publisher"));activeFiltersCount=h(()=>[this.selectedAuthor(),this.selectedCountry(),this.selectedPublisher()].filter(Boolean).length);filteredBooks=h(()=>{let o=this.debouncedTerm().toLowerCase().trim(),e=this.selectedAuthor(),t=this.selectedCountry(),i=this.selectedPublisher(),r=this.allBooks().filter(a=>(!o||a.name.toLowerCase().includes(o)||a.author.toLowerCase().includes(o)||a.publisher.toLowerCase().includes(o)||a.country.toLowerCase().includes(o))&&(!e||a.author===e)&&(!t||a.country===t)&&(!i||a.publisher===i));return this.orderBooks(r)});visibleBookStartIndex=h(()=>Math.max(0,Math.floor(this.booksScrollTop()/this.bookItemHeight)-this.overscan));visibleBookEndIndex=h(()=>Math.min(this.filteredBooks().length,Math.ceil((this.booksScrollTop()+this.booksViewportHeight())/this.bookItemHeight)+this.overscan));visibleBooks=h(()=>this.filteredBooks().slice(this.visibleBookStartIndex(),this.visibleBookEndIndex()));topSpacerHeight=h(()=>this.visibleBookStartIndex()*this.bookItemHeight);bottomSpacerHeight=h(()=>(this.filteredBooks().length-this.visibleBookEndIndex())*this.bookItemHeight);onSearch(o){this.searchTerm.set(o)}toggleFilters(){this.filtersOpen.update(o=>!o)}onAuthorChange(o){this.selectedAuthor.set(o)}onCountryChange(o){this.selectedCountry.set(o)}onPublisherChange(o){this.selectedPublisher.set(o)}clearFilters(){this.selectedAuthor.set(""),this.selectedCountry.set(""),this.selectedPublisher.set("")}logout(){this.auth.logout()}onBookListScroll(o){let e=o.target;this.booksScrollTop.set(e.scrollTop),this.booksViewportHeight.set(e.clientHeight)}drop(o){if(o.previousContainer!==o.container)return;let e=[...this.filteredBooks()];ht(e,this.visibleBookStartIndex()+o.previousIndex,this.visibleBookStartIndex()+o.currentIndex);let t=new Set(e.map(a=>a.id)),i=0,r=this.orderBooks(this.allBooks()).map(a=>t.has(a.id)?e[i++]:a);this.bookOrder.set(r.map(a=>a.id))}getFilterOptions(o){return[...new Set(this.allBooks().map(e=>e[o]).filter(Boolean))].sort((e,t)=>e.localeCompare(t))}orderBooks(o){let e=new Map(this.bookOrder().map((t,i)=>[t,i]));return[...o].sort((t,i)=>(e.get(t.id)??Number.MAX_SAFE_INTEGER)-(e.get(i.id)??Number.MAX_SAFE_INTEGER))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-books"]],decls:24,vars:9,consts:[["color","primary",1,"app-toolbar","flex-row","justify-space-between"],[1,"brand-mark"],[1,"buttons"],["matButton","outlined",1,"theme-toggle",3,"click"],["matButton","outlined","type","button",1,"logout",3,"click"],[1,"main-content"],[1,"search-panel"],[1,"search-actions"],[3,"search"],["matButton","filled","type","button","aria-controls","books-filter-panel",1,"filter-button",3,"click"],["id","books-filter-panel",1,"filters-panel"],[1,"total-books","flex-row","align-center","justify-end"],["cdkDropList","",1,"viewport",3,"cdkDropListData"],[1,"empty-state"],[3,"change","value"],["value",""],[3,"value"],["type","button",1,"clear-filters",3,"click","disabled"],["cdkDropList","",1,"viewport",3,"scroll","cdkDropListDropped","cdkDropListData"],[1,"spacer"],["cdkDrag","",1,"book-card"],[1,"index"],[1,"content"],[1,"author"],[1,"details"]],template:function(e,t){e&1&&(s(0,"mat-toolbar",0)(1,"span",1),m(2,"Books"),d(),s(3,"div",2)(4,"button",3),b("click",function(){return t.store.toggleTheme()}),m(5),d(),s(6,"button",4),b("click",function(){return t.logout()}),m(7,"Log out"),d()()(),s(8,"main",5)(9,"div",6)(10,"div",7)(11,"app-search",8),b("search",function(r){return t.onSearch(r)}),d(),s(12,"button",9),b("click",function(){return t.toggleFilters()}),s(13,"mat-icon"),m(14,"filter_list"),d(),s(15,"span"),m(16,"Filter"),d(),f(17,Oi,1,1),d()(),f(18,Ii,27,4,"div",10),s(19,"div",11)(20,"span"),m(21),d()()(),f(22,Li,5,5,"section",12)(23,zi,5,0,"section",13),d()),e&2&&(c(4),A("aria-pressed",t.store.theme()==="light"),c(),ie(" ",t.store.theme()==="dark"?"Light mode":"Dark mode"," "),c(7),S("active",t.filtersOpen()||t.activeFiltersCount()),A("aria-expanded",t.filtersOpen()),c(5),u(t.activeFiltersCount()?17:-1),c(),u(t.filtersOpen()?18:-1),c(3),ie("Total books: ",t.booksTotal()),c(),u(t.filteredBooks().length?22:23))},dependencies:[pt,xt,oe,_t,gt,de],styles:[".app-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;height:72px;padding:0 clamp(18px,4vw,56px);background:#0d9e6e;box-shadow:0 18px 50px #192e3629;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}.brand-mark[_ngcontent-%COMP%]{font-size:22px;font-weight:800;letter-spacing:0}[_nghost-%COMP%]{display:block;min-height:100vh;color:#1c2d2d}[_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%]{margin-right:12px;border-radius:999px;background:color-mix(in srgb,var(--color-surface) 90%,var(--color-bg));color:var(--color-text);cursor:pointer;font-size:11px;font-weight:600;min-height:28px;transition:background .15s,border-color .15s,box-shadow .15s}[_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%]:hover{background:var(--color-hover);border-color:var(--color-accent);box-shadow:0 1px 4px #00000024}[_nghost-%COMP%]   .logout[_ngcontent-%COMP%]:hover{background:var(--color-hover);border-color:var(--color-accent);box-shadow:0 1px 4px #00000024}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.main-content[_ngcontent-%COMP%]{width:min(1180px,100% - 32px);margin:0 auto;padding:32px 0 72px}.eyebrow[_ngcontent-%COMP%]{display:inline-flex;margin-bottom:12px;padding:6px 12px;border:1px solid rgba(33,182,123,.24);border-radius:999px;background:#ffffff9e;color:#28765c;font-size:13px;font-weight:800}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{max-width:720px;color:#172927;font-size:clamp(38px,7vw,72px);line-height:.95;font-weight:900}.search-panel[_ngcontent-%COMP%], .book-card[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]{border:1px solid rgba(43,68,67,.12);border-radius:8px;background:#ffffffc7;box-shadow:0 18px 44px #21393e1a}.search-panel[_ngcontent-%COMP%]{padding:18px 18px 4px}.search-panel[_ngcontent-%COMP%]   app-search[_ngcontent-%COMP%], .search-panel[_ngcontent-%COMP%]     .mat-mdc-form-field{display:block;width:100%}.search-actions[_ngcontent-%COMP%], .filters-panel[_ngcontent-%COMP%]{display:grid;gap:12px}.search-actions[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) auto;align-items:start}.filter-button[_ngcontent-%COMP%]{min-width:116px;height:56px;border-radius:8px;font-weight:900}.filter-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}.filters-panel[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr)) auto;align-items:end;margin-top:14px;padding-top:14px;border-top:1px solid rgba(43,68,67,.1)}.filters-panel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:7px;min-width:0}.filters-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#57706d;font-size:12px;font-weight:900;text-transform:uppercase}.filters-panel[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .filters-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px;border:1px solid rgba(43,68,67,.18);border-radius:8px;background:#fff;color:#1c2d2d;font:inherit}.filters-panel[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:0 12px;outline:none}.clear-filters[_ngcontent-%COMP%]{padding:0 14px;color:#28765c;font-weight:900;cursor:pointer}.clear-filters[_ngcontent-%COMP%]:disabled{color:#8ca09d;cursor:not-allowed;opacity:.62}.total-books[_ngcontent-%COMP%]{margin-bottom:18px;padding:5px 0}.total-books[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#57706d;font-size:14px;font-weight:800}.viewport[_ngcontent-%COMP%]{display:block;height:min(620px,100vh - 280px);min-height:360px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable}.spacer[_ngcontent-%COMP%]{height:0}.book-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:48px minmax(0,1fr);gap:14px;box-sizing:border-box;height:190px;margin-bottom:16px;padding:18px;background:linear-gradient(160deg,#fffffff0,#f8fcf9c2);cursor:grab}.book-card[_ngcontent-%COMP%]:active{cursor:grabbing}.book-card[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%]{display:grid;place-items:center;width:48px;height:48px;border-radius:8px;background:linear-gradient(135deg,#21b67b,#87d971);color:#fff;font-weight:900}.book-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-width:0}.book-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#172927;font-size:21px;line-height:1.18;font-weight:900;overflow-wrap:anywhere}.book-card[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-top:8px;color:#28765c;font-weight:800}.book-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:grid;gap:10px;margin:18px 0 0}.book-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-top:10px;border-top:1px solid rgba(43,68,67,.1)}.book-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#6b7f7c;font-size:11px;font-weight:900;text-transform:uppercase}.book-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:4px 0 0;color:#233937;font-size:14px;overflow-wrap:anywhere}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:8px;box-shadow:0 22px 48px #21393e3d}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .viewport.cdk-drop-list-dragging[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.empty-state[_ngcontent-%COMP%]{padding:48px 24px;text-align:center}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;color:#57706d}@media(max-width:760px){.main-content[_ngcontent-%COMP%]{width:min(100% - 24px,1180px);padding-top:20px}.search-actions[_ngcontent-%COMP%], .filters-panel[_ngcontent-%COMP%]{grid-template-columns:1fr}h1[_ngcontent-%COMP%]{font-size:42px}.filter-button[_ngcontent-%COMP%]{width:100%}.book-card[_ngcontent-%COMP%]{grid-template-columns:42px minmax(0,1fr);min-height:0;padding:16px}.book-card[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%]{width:42px;height:42px}}"],changeDetection:0})};export{At as Books};
