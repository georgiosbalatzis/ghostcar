(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ag(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ku={exports:{}},ua={},Qu={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function N_(){if(Dp)return Ct;Dp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(I,$,xe){this.props=I,this.context=$,this.refs=w,this.updater=xe||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,$){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,$,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function N(I,$,xe){this.props=I,this.context=$,this.refs=w,this.updater=xe||S}var R=N.prototype=new v;R.constructor=N,E(R,x.prototype),R.isPureReactComponent=!0;var P=Array.isArray,G=Object.prototype.hasOwnProperty,H={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function J(I,$,xe){var K,le={},Se=null,Oe=null;if($!=null)for(K in $.ref!==void 0&&(Oe=$.ref),$.key!==void 0&&(Se=""+$.key),$)G.call($,K)&&!L.hasOwnProperty(K)&&(le[K]=$[K]);var De=arguments.length-2;if(De===1)le.children=xe;else if(1<De){for(var Re=Array(De),ct=0;ct<De;ct++)Re[ct]=arguments[ct+2];le.children=Re}if(I&&I.defaultProps)for(K in De=I.defaultProps,De)le[K]===void 0&&(le[K]=De[K]);return{$$typeof:s,type:I,key:Se,ref:Oe,props:le,_owner:H.current}}function me(I,$){return{$$typeof:s,type:I.type,key:$,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function U(I){var $={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xe){return $[xe]})}var pe=/\/+/g;function Q(I,$){return typeof I=="object"&&I!==null&&I.key!=null?U(""+I.key):$.toString(36)}function W(I,$,xe,K,le){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var Oe=!1;if(I===null)Oe=!0;else switch(Se){case"string":case"number":Oe=!0;break;case"object":switch(I.$$typeof){case s:case e:Oe=!0}}if(Oe)return Oe=I,le=le(Oe),I=K===""?"."+Q(Oe,0):K,P(le)?(xe="",I!=null&&(xe=I.replace(pe,"$&/")+"/"),W(le,$,xe,"",function(ct){return ct})):le!=null&&(A(le)&&(le=me(le,xe+(!le.key||Oe&&Oe.key===le.key?"":(""+le.key).replace(pe,"$&/")+"/")+I)),$.push(le)),1;if(Oe=0,K=K===""?".":K+":",P(I))for(var De=0;De<I.length;De++){Se=I[De];var Re=K+Q(Se,De);Oe+=W(Se,$,xe,Re,le)}else if(Re=y(I),typeof Re=="function")for(I=Re.call(I),De=0;!(Se=I.next()).done;)Se=Se.value,Re=K+Q(Se,De++),Oe+=W(Se,$,xe,Re,le);else if(Se==="object")throw $=String(I),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Oe}function V(I,$,xe){if(I==null)return I;var K=[],le=0;return W(I,K,"","",function(Se){return $.call(xe,Se,le++)}),K}function oe(I){if(I._status===-1){var $=I._result;$=$(),$.then(function(xe){(I._status===0||I._status===-1)&&(I._status=1,I._result=xe)},function(xe){(I._status===0||I._status===-1)&&(I._status=2,I._result=xe)}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var ee={current:null},z={transition:null},te={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:z,ReactCurrentOwner:H};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:V,forEach:function(I,$,xe){V(I,function(){$.apply(this,arguments)},xe)},count:function(I){var $=0;return V(I,function(){$++}),$},toArray:function(I){return V(I,function($){return $})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ct.Component=x,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=N,Ct.StrictMode=r,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Ct.act=Z,Ct.cloneElement=function(I,$,xe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=E({},I.props),le=I.key,Se=I.ref,Oe=I._owner;if($!=null){if($.ref!==void 0&&(Se=$.ref,Oe=H.current),$.key!==void 0&&(le=""+$.key),I.type&&I.type.defaultProps)var De=I.type.defaultProps;for(Re in $)G.call($,Re)&&!L.hasOwnProperty(Re)&&(K[Re]=$[Re]===void 0&&De!==void 0?De[Re]:$[Re])}var Re=arguments.length-2;if(Re===1)K.children=xe;else if(1<Re){De=Array(Re);for(var ct=0;ct<Re;ct++)De[ct]=arguments[ct+2];K.children=De}return{$$typeof:s,type:I.type,key:le,ref:Se,props:K,_owner:Oe}},Ct.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Ct.createElement=J,Ct.createFactory=function(I){var $=J.bind(null,I);return $.type=I,$},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(I){return{$$typeof:u,render:I}},Ct.isValidElement=A,Ct.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:oe}},Ct.memo=function(I,$){return{$$typeof:p,type:I,compare:$===void 0?null:$}},Ct.startTransition=function(I){var $=z.transition;z.transition={};try{I()}finally{z.transition=$}},Ct.unstable_act=Z,Ct.useCallback=function(I,$){return ee.current.useCallback(I,$)},Ct.useContext=function(I){return ee.current.useContext(I)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(I){return ee.current.useDeferredValue(I)},Ct.useEffect=function(I,$){return ee.current.useEffect(I,$)},Ct.useId=function(){return ee.current.useId()},Ct.useImperativeHandle=function(I,$,xe){return ee.current.useImperativeHandle(I,$,xe)},Ct.useInsertionEffect=function(I,$){return ee.current.useInsertionEffect(I,$)},Ct.useLayoutEffect=function(I,$){return ee.current.useLayoutEffect(I,$)},Ct.useMemo=function(I,$){return ee.current.useMemo(I,$)},Ct.useReducer=function(I,$,xe){return ee.current.useReducer(I,$,xe)},Ct.useRef=function(I){return ee.current.useRef(I)},Ct.useState=function(I){return ee.current.useState(I)},Ct.useSyncExternalStore=function(I,$,xe){return ee.current.useSyncExternalStore(I,$,xe)},Ct.useTransition=function(){return ee.current.useTransition()},Ct.version="18.3.1",Ct}var Ip;function nd(){return Ip||(Ip=1,Qu.exports=N_()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function U_(){if(Np)return ua;Np=1;var s=nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,h,p){var _,g={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(u&&u.defaultProps)for(_ in h=u.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:u,key:y,ref:S,props:g,_owner:a.current}}return ua.Fragment=t,ua.jsx=f,ua.jsxs=f,ua}var Up;function F_(){return Up||(Up=1,Ku.exports=U_()),Ku.exports}var k=F_(),Ee=nd();const O_=Ag(Ee);var Al={},Zu={exports:{}},Zn={},Ju={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function z_(){return Fp||(Fp=1,(function(s){function e(z,te){var Z=z.length;z.push(te);e:for(;0<Z;){var I=Z-1>>>1,$=z[I];if(0<a($,te))z[I]=te,z[Z]=$,Z=I;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var te=z[0],Z=z.pop();if(Z!==te){z[0]=Z;e:for(var I=0,$=z.length,xe=$>>>1;I<xe;){var K=2*(I+1)-1,le=z[K],Se=K+1,Oe=z[Se];if(0>a(le,Z))Se<$&&0>a(Oe,le)?(z[I]=Oe,z[Se]=Z,I=Se):(z[I]=le,z[K]=Z,I=K);else if(Se<$&&0>a(Oe,Z))z[I]=Oe,z[Se]=Z,I=Se;else break e}}return te}function a(z,te){var Z=z.sortIndex-te.sortIndex;return Z!==0?Z:z.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();s.unstable_now=function(){return f.now()-u}}var h=[],p=[],_=1,g=null,y=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var te=t(p);te!==null;){if(te.callback===null)r(p);else if(te.startTime<=z)r(p),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(p)}}function P(z){if(w=!1,R(z),!E)if(t(h)!==null)E=!0,oe(G);else{var te=t(p);te!==null&&ee(P,te.startTime-z)}}function G(z,te){E=!1,w&&(w=!1,v(J),J=-1),S=!0;var Z=y;try{for(R(te),g=t(h);g!==null&&(!(g.expirationTime>te)||z&&!U());){var I=g.callback;if(typeof I=="function"){g.callback=null,y=g.priorityLevel;var $=I(g.expirationTime<=te);te=s.unstable_now(),typeof $=="function"?g.callback=$:g===t(h)&&r(h),R(te)}else r(h);g=t(h)}if(g!==null)var xe=!0;else{var K=t(p);K!==null&&ee(P,K.startTime-te),xe=!1}return xe}finally{g=null,y=Z,S=!1}}var H=!1,L=null,J=-1,me=5,A=-1;function U(){return!(s.unstable_now()-A<me)}function pe(){if(L!==null){var z=s.unstable_now();A=z;var te=!0;try{te=L(!0,z)}finally{te?Q():(H=!1,L=null)}}else H=!1}var Q;if(typeof N=="function")Q=function(){N(pe)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,V=W.port2;W.port1.onmessage=pe,Q=function(){V.postMessage(null)}}else Q=function(){x(pe,0)};function oe(z){L=z,H||(H=!0,Q())}function ee(z,te){J=x(function(){z(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(G))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var te=3;break;default:te=y}var Z=y;y=te;try{return z()}finally{y=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=y;y=z;try{return te()}finally{y=Z}},s.unstable_scheduleCallback=function(z,te,Z){var I=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?I+Z:I):Z=I,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Z+$,z={id:_++,callback:te,priorityLevel:z,startTime:Z,expirationTime:$,sortIndex:-1},Z>I?(z.sortIndex=Z,e(p,z),t(h)===null&&z===t(p)&&(w?(v(J),J=-1):w=!0,ee(P,Z-I))):(z.sortIndex=$,e(h,z),E||S||(E=!0,oe(G))),z},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(z){var te=y;return function(){var Z=y;y=te;try{return z.apply(this,arguments)}finally{y=Z}}}})(ef)),ef}var Op;function k_(){return Op||(Op=1,Ju.exports=z_()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function B_(){if(zp)return Zn;zp=1;var s=nd(),e=k_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,N);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,N);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,N);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,c)&&(o=null),c||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),U=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),z=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,I;function $(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var xe=!1;function K(n,i){if(!n||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),M=d.length-1,F=m.length-1;1<=M&&0<=F&&d[M]!==m[F];)F--;for(;1<=M&&0<=F;M--,F--)if(d[M]!==m[F]){if(M!==1||F!==1)do if(M--,F--,0>F||d[M]!==m[F]){var j=`
`+d[M].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=M&&0<=F);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function le(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=K(n.type,!1),n;case 11:return n=K(n.type.render,!1),n;case 1:return n=K(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case H:return"Portal";case me:return"Profiler";case J:return"StrictMode";case Q:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case pe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rt(n){n._valueTracker||(n._valueTracker=ct(n))}function re(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function et(n,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ut(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=De(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function He(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function xt(n,i){He(n,i);var o=De(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&pt(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function qe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function pt(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Mt=Array.isArray;function D(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function he(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Mt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:De(o)}}function _e(n,i){var o=De(i.value),c=De(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Ae(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nt,Ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(nt=nt||document.createElement("div"),nt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=nt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ne(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function It(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function st(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=It(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var $e=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var it=null;function Xe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,O=null,ne=null;function B(n){if(n=$o(n)){if(typeof ye!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ha(i),ye(n.stateNode,n.type,i))}}function ge(n){O?ne?ne.push(n):ne=[n]:O=n}function ve(){if(O){var n=O,i=ne;if(ne=O=null,B(n),i)for(n=0;n<i.length;n++)B(i[n])}}function ke(n,i){return n(i)}function dt(){}var Rt=!1;function wt(n,i,o){if(Rt)return n(i,o);Rt=!0;try{return ke(n,i,o)}finally{Rt=!1,(O!==null||ne!==null)&&(dt(),ve())}}function mt(n,i){var o=n.stateNode;if(o===null)return null;var c=Ha(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var zt=!1;if(u)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){zt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{zt=!1}function Gi(n,i,o,c,d,m,M,F,j){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(Te){this.onError(Te)}}var Ti=!1,zn=null,ti=!1,mn=null,Pt={onError:function(n){Ti=!0,zn=n}};function yn(n,i,o,c,d,m,M,F,j){Ti=!1,zn=null,Gi.apply(Pt,arguments)}function yr(n,i,o,c,d,m,M,F,j){if(yn.apply(this,arguments),Ti){if(Ti){var ue=zn;Ti=!1,zn=null}else throw Error(t(198));ti||(ti=!0,mn=ue)}}function bn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ds(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(bn(n)!==n)throw Error(t(188))}function ie(n){var i=n.alternate;if(!i){if(i=bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return C(d),n;if(m===c)return C(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var M=!1,F=d.child;F;){if(F===o){M=!0,o=d,c=m;break}if(F===c){M=!0,c=d,o=m;break}F=F.sibling}if(!M){for(F=m.child;F;){if(F===o){M=!0,o=m,c=d;break}if(F===c){M=!0,c=m,o=d;break}F=F.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function fe(n){return n=ie(n),n!==null?de(n):null}function de(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=de(n);if(i!==null)return i;n=n.sibling}return null}var ce=e.unstable_scheduleCallback,Be=e.unstable_cancelCallback,Ze=e.unstable_shouldYield,ot=e.unstable_requestPaint,Ve=e.unstable_now,yt=e.unstable_getCurrentPriorityLevel,ht=e.unstable_ImmediatePriority,gt=e.unstable_UserBlockingPriority,Ut=e.unstable_NormalPriority,Sn=e.unstable_LowPriority,Kt=e.unstable_IdlePriority,Mn=null,bt=null;function St(n){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Mn,n,void 0,(n.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Jr,Ft=Math.log,pi=Math.LN2;function Jr(n){return n>>>=0,n===0?32:31-(Ft(n)/pi|0)|0}var ni=64,Ai=4194304;function Vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var F=M&~d;F!==0?c=Vt(F):(m&=M,m!==0&&(c=Vt(m)))}else M=o&~d,M!==0?c=Vt(M):m!==0&&(c=Vt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-En(i),d=1<<o,c|=n[o],i&=~d;return c}function Sr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-En(m),F=1<<M,j=d[M];j===-1?((F&o)===0||(F&c)!==0)&&(d[M]=Sr(F,i)):j<=i&&(n.expiredLanes|=F),m&=~F}}function Vi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function es(){var n=ni;return ni<<=1,(ni&4194240)===0&&(ni=64),n}function b(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Pe(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-En(i),n[i]=o}function Ke(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-En(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function Ot(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-En(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var tt=0;function tn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qt,Ri,mi,ii,Mr,Er=!1,ri=[],Tn=null,gi=null,Ci=null,si=new Map,An=new Map,Pn=[],Wi="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function er(n,i){switch(n){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":si.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(i.pointerId)}}function ji(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=$o(i),i!==null&&Ri(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function _i(n,i,o,c,d){switch(i){case"focusin":return Tn=ji(Tn,n,i,o,c,d),!0;case"dragenter":return gi=ji(gi,n,i,o,c,d),!0;case"mouseover":return Ci=ji(Ci,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return si.set(m,ji(si.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,An.set(m,ji(An.get(m)||null,n,i,o,c,d)),!0}return!1}function Zt(n){var i=ns(n.target);if(i!==null){var o=bn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ds(o),i!==null){n.blockedOn=i,Mr(n.priority,function(){mi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ec(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);it=c,o.target.dispatchEvent(c),it=null}else return i=$o(o),i!==null&&Ri(i),n.blockedOn=o,!1;i.shift()}return!0}function Ra(n,i,o){tr(n)&&o.delete(i)}function Sc(){Er=!1,Tn!==null&&tr(Tn)&&(Tn=null),gi!==null&&tr(gi)&&(gi=null),Ci!==null&&tr(Ci)&&(Ci=null),si.forEach(Ra),An.forEach(Ra)}function Is(n,i){n.blockedOn===i&&(n.blockedOn=null,Er||(Er=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sc)))}function ts(n){function i(d){return Is(d,n)}if(0<ri.length){Is(ri[0],n);for(var o=1;o<ri.length;o++){var c=ri[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Tn!==null&&Is(Tn,n),gi!==null&&Is(gi,n),Ci!==null&&Is(Ci,n),si.forEach(i),An.forEach(i),o=0;o<Pn.length;o++)c=Pn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)Zt(o),o.blockedOn===null&&Pn.shift()}var Ns=P.ReactCurrentBatchConfig,Ca=!0;function s0(n,i,o,c){var d=tt,m=Ns.transition;Ns.transition=null;try{tt=1,Mc(n,i,o,c)}finally{tt=d,Ns.transition=m}}function o0(n,i,o,c){var d=tt,m=Ns.transition;Ns.transition=null;try{tt=4,Mc(n,i,o,c)}finally{tt=d,Ns.transition=m}}function Mc(n,i,o,c){if(Ca){var d=Ec(n,i,o,c);if(d===null)Bc(n,i,c,ba,o),er(n,c);else if(_i(d,n,i,o,c))c.stopPropagation();else if(er(n,c),i&4&&-1<Wi.indexOf(n)){for(;d!==null;){var m=$o(d);if(m!==null&&Qt(m),m=Ec(n,i,o,c),m===null&&Bc(n,i,c,ba,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,o)}}var ba=null;function Ec(n,i,o,c){if(ba=null,n=Xe(c),n=ns(n),n!==null)if(i=bn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ds(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ba=n,null}function vd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yt()){case ht:return 1;case gt:return 4;case Ut:case Sn:return 16;case Kt:return 536870912;default:return 16}default:return 16}}var wr=null,wc=null,Pa=null;function xd(){if(Pa)return Pa;var n,i=wc,o=i.length,c,d="value"in wr?wr.value:wr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===d[m-c];c++);return Pa=d.slice(n,1<c?1-c:void 0)}function La(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Da(){return!0}function yd(){return!1}function oi(n){function i(o,c,d,m,M){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Da:yd,this.isPropagationStopped=yd,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),i}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=oi(Us),zo=Z({},Us,{view:0,detail:0}),a0=oi(zo),Ac,Rc,ko,Ia=Z({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Ac=n.screenX-ko.screenX,Rc=n.screenY-ko.screenY):Rc=Ac=0,ko=n),Ac)},movementY:function(n){return"movementY"in n?n.movementY:Rc}}),Sd=oi(Ia),l0=Z({},Ia,{dataTransfer:0}),c0=oi(l0),u0=Z({},zo,{relatedTarget:0}),Cc=oi(u0),f0=Z({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=oi(f0),h0=Z({},Us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p0=oi(h0),m0=Z({},Us,{data:0}),Md=oi(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=v0[n])?!!i[n]:!1}function bc(){return x0}var y0=Z({},zo,{key:function(n){if(n.key){var i=g0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=La(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?La(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?La(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),S0=oi(y0),M0=Z({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=oi(M0),E0=Z({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),w0=oi(E0),T0=Z({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=oi(T0),R0=Z({},Ia,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=oi(R0),b0=[9,13,27,32],Pc=u&&"CompositionEvent"in window,Bo=null;u&&"documentMode"in document&&(Bo=document.documentMode);var P0=u&&"TextEvent"in window&&!Bo,wd=u&&(!Pc||Bo&&8<Bo&&11>=Bo),Td=" ",Ad=!1;function Rd(n,i){switch(n){case"keyup":return b0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function L0(n,i){switch(n){case"compositionend":return Cd(i);case"keypress":return i.which!==32?null:(Ad=!0,Td);case"textInput":return n=i.data,n===Td&&Ad?null:n;default:return null}}function D0(n,i){if(Fs)return n==="compositionend"||!Pc&&Rd(n,i)?(n=xd(),Pa=wc=wr=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wd&&i.locale!=="ko"?null:i.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!I0[n.type]:i==="textarea"}function Pd(n,i,o,c){ge(c),i=za(i,"onChange"),0<i.length&&(o=new Tc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Ho=null,Go=null;function N0(n){Yd(n,0)}function Na(n){var i=Hs(n);if(re(i))return n}function U0(n,i){if(n==="change")return i}var Ld=!1;if(u){var Lc;if(u){var Dc="oninput"in document;if(!Dc){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Dc=typeof Dd.oninput=="function"}Lc=Dc}else Lc=!1;Ld=Lc&&(!document.documentMode||9<document.documentMode)}function Id(){Ho&&(Ho.detachEvent("onpropertychange",Nd),Go=Ho=null)}function Nd(n){if(n.propertyName==="value"&&Na(Go)){var i=[];Pd(i,Go,n,Xe(n)),wt(N0,i)}}function F0(n,i,o){n==="focusin"?(Id(),Ho=i,Go=o,Ho.attachEvent("onpropertychange",Nd)):n==="focusout"&&Id()}function O0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Na(Go)}function z0(n,i){if(n==="click")return Na(i)}function k0(n,i){if(n==="input"||n==="change")return Na(i)}function B0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bi=typeof Object.is=="function"?Object.is:B0;function Vo(n,i){if(bi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!bi(n[d],i[d]))return!1}return!0}function Ud(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fd(n,i){var o=Ud(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ud(o)}}function Od(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Od(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function zd(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function H0(n){var i=zd(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Od(o.ownerDocument.documentElement,o)){if(c!==null&&Ic(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Fd(o,m);var M=Fd(o,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G0=u&&"documentMode"in document&&11>=document.documentMode,Os=null,Nc=null,Wo=null,Uc=!1;function kd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Uc||Os==null||Os!==Nt(c)||(c=Os,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Wo&&Vo(Wo,c)||(Wo=c,c=za(Nc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Os)))}function Ua(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var zs={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Fc={},Bd={};u&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Fa(n){if(Fc[n])return Fc[n];if(!zs[n])return n;var i=zs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Bd)return Fc[n]=i[o];return n}var Hd=Fa("animationend"),Gd=Fa("animationiteration"),Vd=Fa("animationstart"),Wd=Fa("transitionend"),jd=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){jd.set(n,i),l(i,[n])}for(var Oc=0;Oc<Xd.length;Oc++){var zc=Xd[Oc],V0=zc.toLowerCase(),W0=zc[0].toUpperCase()+zc.slice(1);Tr(V0,"on"+W0)}Tr(Hd,"onAnimationEnd"),Tr(Gd,"onAnimationIteration"),Tr(Vd,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Wd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function qd(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,yr(c,i,void 0,n),n.currentTarget=null}function Yd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var F=c[M],j=F.instance,ue=F.currentTarget;if(F=F.listener,j!==m&&d.isPropagationStopped())break e;qd(d,F,ue),m=j}else for(M=0;M<c.length;M++){if(F=c[M],j=F.instance,ue=F.currentTarget,F=F.listener,j!==m&&d.isPropagationStopped())break e;qd(d,F,ue),m=j}}}if(ti)throw n=mn,ti=!1,mn=null,n}function Wt(n,i){var o=i[Xc];o===void 0&&(o=i[Xc]=new Set);var c=n+"__bubble";o.has(c)||($d(i,n,2,!1),o.add(c))}function kc(n,i,o){var c=0;i&&(c|=4),$d(o,n,c,i)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[Oa]){n[Oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(j0.has(o)||kc(o,!1,n),kc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Oa]||(i[Oa]=!0,kc("selectionchange",!1,i))}}function $d(n,i,o,c){switch(vd(i)){case 1:var d=s0;break;case 4:d=o0;break;default:d=Mc}o=d.bind(null,i,o,n),d=void 0,!zt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Bc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var j=M.tag;if((j===3||j===4)&&(j=M.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;M=M.return}for(;F!==null;){if(M=ns(F),M===null)return;if(j=M.tag,j===5||j===6){c=m=M;continue e}F=F.parentNode}}c=c.return}wt(function(){var ue=m,Te=Xe(o),Ce=[];e:{var we=jd.get(n);if(we!==void 0){var We=Tc,Ye=n;switch(n){case"keypress":if(La(o)===0)break e;case"keydown":case"keyup":We=S0;break;case"focusin":Ye="focus",We=Cc;break;case"focusout":Ye="blur",We=Cc;break;case"beforeblur":case"afterblur":We=Cc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=w0;break;case Hd:case Gd:case Vd:We=d0;break;case Wd:We=A0;break;case"scroll":We=a0;break;case"wheel":We=C0;break;case"copy":case"cut":case"paste":We=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Ed}var Qe=(i&4)!==0,an=!Qe&&n==="scroll",se=Qe?we!==null?we+"Capture":null:we;Qe=[];for(var q=ue,ae;q!==null;){ae=q;var Le=ae.stateNode;if(ae.tag===5&&Le!==null&&(ae=Le,se!==null&&(Le=mt(q,se),Le!=null&&Qe.push(qo(q,Le,ae)))),an)break;q=q.return}0<Qe.length&&(we=new We(we,Ye,null,o,Te),Ce.push({event:we,listeners:Qe}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",we&&o!==it&&(Ye=o.relatedTarget||o.fromElement)&&(ns(Ye)||Ye[nr]))break e;if((We||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,We?(Ye=o.relatedTarget||o.toElement,We=ue,Ye=Ye?ns(Ye):null,Ye!==null&&(an=bn(Ye),Ye!==an||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=ue),We!==Ye)){if(Qe=Sd,Le="onMouseLeave",se="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=Ed,Le="onPointerLeave",se="onPointerEnter",q="pointer"),an=We==null?we:Hs(We),ae=Ye==null?we:Hs(Ye),we=new Qe(Le,q+"leave",We,o,Te),we.target=an,we.relatedTarget=ae,Le=null,ns(Te)===ue&&(Qe=new Qe(se,q+"enter",Ye,o,Te),Qe.target=ae,Qe.relatedTarget=an,Le=Qe),an=Le,We&&Ye)t:{for(Qe=We,se=Ye,q=0,ae=Qe;ae;ae=ks(ae))q++;for(ae=0,Le=se;Le;Le=ks(Le))ae++;for(;0<q-ae;)Qe=ks(Qe),q--;for(;0<ae-q;)se=ks(se),ae--;for(;q--;){if(Qe===se||se!==null&&Qe===se.alternate)break t;Qe=ks(Qe),se=ks(se)}Qe=null}else Qe=null;We!==null&&Kd(Ce,we,We,Qe,!1),Ye!==null&&an!==null&&Kd(Ce,an,Ye,Qe,!0)}}e:{if(we=ue?Hs(ue):window,We=we.nodeName&&we.nodeName.toLowerCase(),We==="select"||We==="input"&&we.type==="file")var Je=U0;else if(bd(we))if(Ld)Je=k0;else{Je=O0;var at=F0}else(We=we.nodeName)&&We.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Je=z0);if(Je&&(Je=Je(n,ue))){Pd(Ce,Je,o,Te);break e}at&&at(n,we,ue),n==="focusout"&&(at=we._wrapperState)&&at.controlled&&we.type==="number"&&pt(we,"number",we.value)}switch(at=ue?Hs(ue):window,n){case"focusin":(bd(at)||at.contentEditable==="true")&&(Os=at,Nc=ue,Wo=null);break;case"focusout":Wo=Nc=Os=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,kd(Ce,o,Te);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":kd(Ce,o,Te)}var lt;if(Pc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Fs?Rd(n,o)&&(_t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(wd&&o.locale!=="ko"&&(Fs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Fs&&(lt=xd()):(wr=Te,wc="value"in wr?wr.value:wr.textContent,Fs=!0)),at=za(ue,_t),0<at.length&&(_t=new Md(_t,n,null,o,Te),Ce.push({event:_t,listeners:at}),lt?_t.data=lt:(lt=Cd(o),lt!==null&&(_t.data=lt)))),(lt=P0?L0(n,o):D0(n,o))&&(ue=za(ue,"onBeforeInput"),0<ue.length&&(Te=new Md("onBeforeInput","beforeinput",null,o,Te),Ce.push({event:Te,listeners:ue}),Te.data=lt))}Yd(Ce,i)})}function qo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function za(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=mt(n,o),m!=null&&c.unshift(qo(n,m,d)),m=mt(n,i),m!=null&&c.push(qo(n,m,d))),n=n.return}return c}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kd(n,i,o,c,d){for(var m=i._reactName,M=[];o!==null&&o!==c;){var F=o,j=F.alternate,ue=F.stateNode;if(j!==null&&j===c)break;F.tag===5&&ue!==null&&(F=ue,d?(j=mt(o,m),j!=null&&M.unshift(qo(o,j,F))):d||(j=mt(o,m),j!=null&&M.push(qo(o,j,F)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var X0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Qd(n){return(typeof n=="string"?n:""+n).replace(X0,`
`).replace(q0,"")}function ka(n,i,o){if(i=Qd(i),Qd(n)!==i&&o)throw Error(t(425))}function Ba(){}var Hc=null,Gc=null;function Vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(n){return Zd.resolve(null).then(n).catch(K0)}:Wc;function K0(n){setTimeout(function(){throw n})}function jc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),ts(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ts(i)}function Ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Xi="__reactFiber$"+Bs,Yo="__reactProps$"+Bs,nr="__reactContainer$"+Bs,Xc="__reactEvents$"+Bs,Q0="__reactListeners$"+Bs,Z0="__reactHandles$"+Bs;function ns(n){var i=n[Xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[nr]||o[Xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Jd(n);n!==null;){if(o=n[Xi])return o;n=Jd(n)}return i}n=o,o=n.parentNode}return null}function $o(n){return n=n[Xi]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ha(n){return n[Yo]||null}var qc=[],Gs=-1;function Rr(n){return{current:n}}function jt(n){0>Gs||(n.current=qc[Gs],qc[Gs]=null,Gs--)}function Ht(n,i){Gs++,qc[Gs]=n.current,n.current=i}var Cr={},Ln=Rr(Cr),qn=Rr(!1),is=Cr;function Vs(n,i){var o=n.type.contextTypes;if(!o)return Cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yn(n){return n=n.childContextTypes,n!=null}function Ga(){jt(qn),jt(Ln)}function eh(n,i,o){if(Ln.current!==Cr)throw Error(t(168));Ht(Ln,i),Ht(qn,o)}function th(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Oe(n)||"Unknown",d));return Z({},o,c)}function Va(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,is=Ln.current,Ht(Ln,n),Ht(qn,qn.current),!0}function nh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=th(n,i,is),c.__reactInternalMemoizedMergedChildContext=n,jt(qn),jt(Ln),Ht(Ln,n)):jt(qn),Ht(qn,o)}var ir=null,Wa=!1,Yc=!1;function ih(n){ir===null?ir=[n]:ir.push(n)}function J0(n){Wa=!0,ih(n)}function br(){if(!Yc&&ir!==null){Yc=!0;var n=0,i=tt;try{var o=ir;for(tt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ir=null,Wa=!1}catch(d){throw ir!==null&&(ir=ir.slice(n+1)),ce(ht,br),d}finally{tt=i,Yc=!1}}return null}var Ws=[],js=0,ja=null,Xa=0,vi=[],xi=0,rs=null,rr=1,sr="";function ss(n,i){Ws[js++]=Xa,Ws[js++]=ja,ja=n,Xa=i}function rh(n,i,o){vi[xi++]=rr,vi[xi++]=sr,vi[xi++]=rs,rs=n;var c=rr;n=sr;var d=32-En(c)-1;c&=~(1<<d),o+=1;var m=32-En(i)+d;if(30<m){var M=d-d%5;m=(c&(1<<M)-1).toString(32),c>>=M,d-=M,rr=1<<32-En(i)+d|o<<d|c,sr=m+n}else rr=1<<m|o<<d|c,sr=n}function $c(n){n.return!==null&&(ss(n,1),rh(n,1,0))}function Kc(n){for(;n===ja;)ja=Ws[--js],Ws[js]=null,Xa=Ws[--js],Ws[js]=null;for(;n===rs;)rs=vi[--xi],vi[xi]=null,sr=vi[--xi],vi[xi]=null,rr=vi[--xi],vi[xi]=null}var ai=null,li=null,Yt=!1,Pi=null;function sh(n,i){var o=Ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function oh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ai=n,li=Ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ai=n,li=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=rs!==null?{id:rr,overflow:sr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ai=n,li=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Yt){var i=li;if(i){var o=i;if(!oh(n,i)){if(Qc(n))throw Error(t(418));i=Ar(o.nextSibling);var c=ai;i&&oh(n,i)?sh(c,o):(n.flags=n.flags&-4097|2,Yt=!1,ai=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,ai=n}}}function ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ai=n}function qa(n){if(n!==ai)return!1;if(!Yt)return ah(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vc(n.type,n.memoizedProps)),i&&(i=li)){if(Qc(n))throw lh(),Error(t(418));for(;i;)sh(n,i),i=Ar(i.nextSibling)}if(ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){li=Ar(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}li=null}}else li=ai?Ar(n.stateNode.nextSibling):null;return!0}function lh(){for(var n=li;n;)n=Ar(n.nextSibling)}function Xs(){li=ai=null,Yt=!1}function Jc(n){Pi===null?Pi=[n]:Pi.push(n)}var e_=P.ReactCurrentBatchConfig;function Ko(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var F=d.refs;M===null?delete F[m]:F[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ch(n){var i=n._init;return i(n._payload)}function uh(n){function i(se,q){if(n){var ae=se.deletions;ae===null?(se.deletions=[q],se.flags|=16):ae.push(q)}}function o(se,q){if(!n)return null;for(;q!==null;)i(se,q),q=q.sibling;return null}function c(se,q){for(se=new Map;q!==null;)q.key!==null?se.set(q.key,q):se.set(q.index,q),q=q.sibling;return se}function d(se,q){return se=Or(se,q),se.index=0,se.sibling=null,se}function m(se,q,ae){return se.index=ae,n?(ae=se.alternate,ae!==null?(ae=ae.index,ae<q?(se.flags|=2,q):ae):(se.flags|=2,q)):(se.flags|=1048576,q)}function M(se){return n&&se.alternate===null&&(se.flags|=2),se}function F(se,q,ae,Le){return q===null||q.tag!==6?(q=Wu(ae,se.mode,Le),q.return=se,q):(q=d(q,ae),q.return=se,q)}function j(se,q,ae,Le){var Je=ae.type;return Je===L?Te(se,q,ae.props.children,Le,ae.key):q!==null&&(q.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&ch(Je)===q.type)?(Le=d(q,ae.props),Le.ref=Ko(se,q,ae),Le.return=se,Le):(Le=vl(ae.type,ae.key,ae.props,null,se.mode,Le),Le.ref=Ko(se,q,ae),Le.return=se,Le)}function ue(se,q,ae,Le){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=ju(ae,se.mode,Le),q.return=se,q):(q=d(q,ae.children||[]),q.return=se,q)}function Te(se,q,ae,Le,Je){return q===null||q.tag!==7?(q=hs(ae,se.mode,Le,Je),q.return=se,q):(q=d(q,ae),q.return=se,q)}function Ce(se,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Wu(""+q,se.mode,ae),q.return=se,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case G:return ae=vl(q.type,q.key,q.props,null,se.mode,ae),ae.ref=Ko(se,null,q),ae.return=se,ae;case H:return q=ju(q,se.mode,ae),q.return=se,q;case oe:var Le=q._init;return Ce(se,Le(q._payload),ae)}if(Mt(q)||te(q))return q=hs(q,se.mode,ae,null),q.return=se,q;Ya(se,q)}return null}function we(se,q,ae,Le){var Je=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:F(se,q,""+ae,Le);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case G:return ae.key===Je?j(se,q,ae,Le):null;case H:return ae.key===Je?ue(se,q,ae,Le):null;case oe:return Je=ae._init,we(se,q,Je(ae._payload),Le)}if(Mt(ae)||te(ae))return Je!==null?null:Te(se,q,ae,Le,null);Ya(se,ae)}return null}function We(se,q,ae,Le,Je){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return se=se.get(ae)||null,F(q,se,""+Le,Je);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case G:return se=se.get(Le.key===null?ae:Le.key)||null,j(q,se,Le,Je);case H:return se=se.get(Le.key===null?ae:Le.key)||null,ue(q,se,Le,Je);case oe:var at=Le._init;return We(se,q,ae,at(Le._payload),Je)}if(Mt(Le)||te(Le))return se=se.get(ae)||null,Te(q,se,Le,Je,null);Ya(q,Le)}return null}function Ye(se,q,ae,Le){for(var Je=null,at=null,lt=q,_t=q=0,vn=null;lt!==null&&_t<ae.length;_t++){lt.index>_t?(vn=lt,lt=null):vn=lt.sibling;var Dt=we(se,lt,ae[_t],Le);if(Dt===null){lt===null&&(lt=vn);break}n&&lt&&Dt.alternate===null&&i(se,lt),q=m(Dt,q,_t),at===null?Je=Dt:at.sibling=Dt,at=Dt,lt=vn}if(_t===ae.length)return o(se,lt),Yt&&ss(se,_t),Je;if(lt===null){for(;_t<ae.length;_t++)lt=Ce(se,ae[_t],Le),lt!==null&&(q=m(lt,q,_t),at===null?Je=lt:at.sibling=lt,at=lt);return Yt&&ss(se,_t),Je}for(lt=c(se,lt);_t<ae.length;_t++)vn=We(lt,se,_t,ae[_t],Le),vn!==null&&(n&&vn.alternate!==null&&lt.delete(vn.key===null?_t:vn.key),q=m(vn,q,_t),at===null?Je=vn:at.sibling=vn,at=vn);return n&&lt.forEach(function(zr){return i(se,zr)}),Yt&&ss(se,_t),Je}function Qe(se,q,ae,Le){var Je=te(ae);if(typeof Je!="function")throw Error(t(150));if(ae=Je.call(ae),ae==null)throw Error(t(151));for(var at=Je=null,lt=q,_t=q=0,vn=null,Dt=ae.next();lt!==null&&!Dt.done;_t++,Dt=ae.next()){lt.index>_t?(vn=lt,lt=null):vn=lt.sibling;var zr=we(se,lt,Dt.value,Le);if(zr===null){lt===null&&(lt=vn);break}n&&lt&&zr.alternate===null&&i(se,lt),q=m(zr,q,_t),at===null?Je=zr:at.sibling=zr,at=zr,lt=vn}if(Dt.done)return o(se,lt),Yt&&ss(se,_t),Je;if(lt===null){for(;!Dt.done;_t++,Dt=ae.next())Dt=Ce(se,Dt.value,Le),Dt!==null&&(q=m(Dt,q,_t),at===null?Je=Dt:at.sibling=Dt,at=Dt);return Yt&&ss(se,_t),Je}for(lt=c(se,lt);!Dt.done;_t++,Dt=ae.next())Dt=We(lt,se,_t,Dt.value,Le),Dt!==null&&(n&&Dt.alternate!==null&&lt.delete(Dt.key===null?_t:Dt.key),q=m(Dt,q,_t),at===null?Je=Dt:at.sibling=Dt,at=Dt);return n&&lt.forEach(function(I_){return i(se,I_)}),Yt&&ss(se,_t),Je}function an(se,q,ae,Le){if(typeof ae=="object"&&ae!==null&&ae.type===L&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case G:e:{for(var Je=ae.key,at=q;at!==null;){if(at.key===Je){if(Je=ae.type,Je===L){if(at.tag===7){o(se,at.sibling),q=d(at,ae.props.children),q.return=se,se=q;break e}}else if(at.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&ch(Je)===at.type){o(se,at.sibling),q=d(at,ae.props),q.ref=Ko(se,at,ae),q.return=se,se=q;break e}o(se,at);break}else i(se,at);at=at.sibling}ae.type===L?(q=hs(ae.props.children,se.mode,Le,ae.key),q.return=se,se=q):(Le=vl(ae.type,ae.key,ae.props,null,se.mode,Le),Le.ref=Ko(se,q,ae),Le.return=se,se=Le)}return M(se);case H:e:{for(at=ae.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){o(se,q.sibling),q=d(q,ae.children||[]),q.return=se,se=q;break e}else{o(se,q);break}else i(se,q);q=q.sibling}q=ju(ae,se.mode,Le),q.return=se,se=q}return M(se);case oe:return at=ae._init,an(se,q,at(ae._payload),Le)}if(Mt(ae))return Ye(se,q,ae,Le);if(te(ae))return Qe(se,q,ae,Le);Ya(se,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,q!==null&&q.tag===6?(o(se,q.sibling),q=d(q,ae),q.return=se,se=q):(o(se,q),q=Wu(ae,se.mode,Le),q.return=se,se=q),M(se)):o(se,q)}return an}var qs=uh(!0),fh=uh(!1),$a=Rr(null),Ka=null,Ys=null,eu=null;function tu(){eu=Ys=Ka=null}function nu(n){var i=$a.current;jt($a),n._currentValue=i}function iu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function $s(n,i){Ka=n,eu=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Ys===null){if(Ka===null)throw Error(t(308));Ys=n,Ka.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return i}var os=null;function ru(n){os===null?os=[n]:os.push(n)}function dh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,ru(i)):(o.next=d.next,d.next=o),i.interleaved=o,or(n,c)}function or(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Pr=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,or(n,o)}return d=c.interleaved,d===null?(i.next=i,ru(c)):(i.next=d.next,d.next=i),c.interleaved=i,or(n,o)}function Qa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ot(n,o)}}function ph(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Za(n,i,o,c){var d=n.updateQueue;Pr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var j=F,ue=j.next;j.next=null,M===null?m=ue:M.next=ue,M=j;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,F=Te.lastBaseUpdate,F!==M&&(F===null?Te.firstBaseUpdate=ue:F.next=ue,Te.lastBaseUpdate=j))}if(m!==null){var Ce=d.baseState;M=0,Te=ue=j=null,F=m;do{var we=F.lane,We=F.eventTime;if((c&we)===we){Te!==null&&(Te=Te.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ye=n,Qe=F;switch(we=i,We=o,Qe.tag){case 1:if(Ye=Qe.payload,typeof Ye=="function"){Ce=Ye.call(We,Ce,we);break e}Ce=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Qe.payload,we=typeof Ye=="function"?Ye.call(We,Ce,we):Ye,we==null)break e;Ce=Z({},Ce,we);break e;case 2:Pr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,we=d.effects,we===null?d.effects=[F]:we.push(F))}else We={eventTime:We,lane:we,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Te===null?(ue=Te=We,j=Ce):Te=Te.next=We,M|=we;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;we=F,F=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(Te===null&&(j=Ce),d.baseState=j,d.firstBaseUpdate=ue,d.lastBaseUpdate=Te,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);cs|=M,n.lanes=M,n.memoizedState=Ce}}function mh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Qo={},qi=Rr(Qo),Zo=Rr(Qo),Jo=Rr(Qo);function as(n){if(n===Qo)throw Error(t(174));return n}function ou(n,i){switch(Ht(Jo,i),Ht(Zo,n),Ht(qi,Qo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}jt(qi),Ht(qi,i)}function Ks(){jt(qi),jt(Zo),jt(Jo)}function gh(n){as(Jo.current);var i=as(qi.current),o=ft(i,n.type);i!==o&&(Ht(Zo,n),Ht(qi,o))}function au(n){Zo.current===n&&(jt(qi),jt(Zo))}var Jt=Rr(0);function Ja(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var el=P.ReactCurrentDispatcher,uu=P.ReactCurrentBatchConfig,ls=0,en=null,fn=null,gn=null,tl=!1,ea=!1,ta=0,t_=0;function Dn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!bi(n[o],i[o]))return!1;return!0}function du(n,i,o,c,d,m){if(ls=m,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,el.current=n===null||n.memoizedState===null?s_:o_,n=o(c,d),ea){m=0;do{if(ea=!1,ta=0,25<=m)throw Error(t(301));m+=1,gn=fn=null,i.updateQueue=null,el.current=a_,n=o(c,d)}while(ea)}if(el.current=rl,i=fn!==null&&fn.next!==null,ls=0,gn=fn=en=null,tl=!1,i)throw Error(t(300));return n}function hu(){var n=ta!==0;return ta=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?en.memoizedState=gn=n:gn=gn.next=n,gn}function Si(){if(fn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=gn===null?en.memoizedState:gn.next;if(i!==null)gn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?en.memoizedState=gn=n:gn=gn.next=n}return gn}function na(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=fn,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=M=null,j=null,ue=m;do{var Te=ue.lane;if((ls&Te)===Te)j!==null&&(j=j.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Ce={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};j===null?(F=j=Ce,M=c):j=j.next=Ce,en.lanes|=Te,cs|=Te}ue=ue.next}while(ue!==null&&ue!==m);j===null?M=c:j.next=F,bi(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=j,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,en.lanes|=m,cs|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function mu(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);bi(m,i.memoizedState)||($n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function _h(){}function vh(n,i){var o=en,c=Si(),d=i(),m=!bi(c.memoizedState,d);if(m&&(c.memoizedState=d,$n=!0),c=c.queue,gu(Sh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,ia(9,yh.bind(null,o,c,d,i),void 0,null),_n===null)throw Error(t(349));(ls&30)!==0||xh(o,i,d)}return d}function xh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function yh(n,i,o,c){i.value=o,i.getSnapshot=c,Mh(i)&&Eh(n)}function Sh(n,i,o){return o(function(){Mh(i)&&Eh(n)})}function Mh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!bi(n,o)}catch{return!0}}function Eh(n){var i=or(n,1);i!==null&&Ni(i,n,1,-1)}function wh(n){var i=Yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},i.queue=n,n=n.dispatch=r_.bind(null,en,n),[i.memoizedState,n]}function ia(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Th(){return Si().memoizedState}function nl(n,i,o,c){var d=Yi();en.flags|=n,d.memoizedState=ia(1|i,o,void 0,c===void 0?null:c)}function il(n,i,o,c){var d=Si();c=c===void 0?null:c;var m=void 0;if(fn!==null){var M=fn.memoizedState;if(m=M.destroy,c!==null&&fu(c,M.deps)){d.memoizedState=ia(i,o,m,c);return}}en.flags|=n,d.memoizedState=ia(1|i,o,m,c)}function Ah(n,i){return nl(8390656,8,n,i)}function gu(n,i){return il(2048,8,n,i)}function Rh(n,i){return il(4,2,n,i)}function Ch(n,i){return il(4,4,n,i)}function bh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ph(n,i,o){return o=o!=null?o.concat([n]):null,il(4,4,bh.bind(null,i,n),o)}function _u(){}function Lh(n,i){var o=Si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Dh(n,i){var o=Si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Ih(n,i,o){return(ls&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=o):(bi(o,i)||(o=es(),en.lanes|=o,cs|=o,n.baseState=!0),i)}function n_(n,i){var o=tt;tt=o!==0&&4>o?o:4,n(!0);var c=uu.transition;uu.transition={};try{n(!1),i()}finally{tt=o,uu.transition=c}}function Nh(){return Si().memoizedState}function i_(n,i,o){var c=Ur(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Uh(n))Fh(i,o);else if(o=dh(n,i,o,c),o!==null){var d=Hn();Ni(o,n,c,d),Oh(o,i,c)}}function r_(n,i,o){var c=Ur(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Uh(n))Fh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,F=m(M,o);if(d.hasEagerState=!0,d.eagerState=F,bi(F,M)){var j=i.interleaved;j===null?(d.next=d,ru(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}o=dh(n,i,d,c),o!==null&&(d=Hn(),Ni(o,n,c,d),Oh(o,i,c))}}function Uh(n){var i=n.alternate;return n===en||i!==null&&i===en}function Fh(n,i){ea=tl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Oh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ot(n,o)}}var rl={readContext:yi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},s_={readContext:yi,useCallback:function(n,i){return Yi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Ah,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,nl(4194308,4,bh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return nl(4194308,4,n,i)},useInsertionEffect:function(n,i){return nl(4,2,n,i)},useMemo:function(n,i){var o=Yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=i_.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Yi();return n={current:n},i.memoizedState=n},useState:wh,useDebugValue:_u,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=wh(!1),i=n[0];return n=n_.bind(null,n[1]),Yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=en,d=Yi();if(Yt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),_n===null)throw Error(t(349));(ls&30)!==0||xh(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Ah(Sh.bind(null,c,m,n),[n]),c.flags|=2048,ia(9,yh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Yi(),i=_n.identifierPrefix;if(Yt){var o=sr,c=rr;o=(c&~(1<<32-En(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=ta++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=t_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},o_={readContext:yi,useCallback:Lh,useContext:yi,useEffect:gu,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Dh,useReducer:pu,useRef:Th,useState:function(){return pu(na)},useDebugValue:_u,useDeferredValue:function(n){var i=Si();return Ih(i,fn.memoizedState,n)},useTransition:function(){var n=pu(na)[0],i=Si().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Nh,unstable_isNewReconciler:!1},a_={readContext:yi,useCallback:Lh,useContext:yi,useEffect:gu,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Dh,useReducer:mu,useRef:Th,useState:function(){return mu(na)},useDebugValue:_u,useDeferredValue:function(n){var i=Si();return fn===null?i.memoizedState=n:Ih(i,fn.memoizedState,n)},useTransition:function(){var n=mu(na)[0],i=Si().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Nh,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function vu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:Z({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var sl={isMounted:function(n){return(n=n._reactInternals)?bn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Hn(),d=Ur(n),m=ar(c,d);m.payload=i,o!=null&&(m.callback=o),i=Lr(n,m,d),i!==null&&(Ni(i,n,d,c),Qa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Hn(),d=Ur(n),m=ar(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Lr(n,m,d),i!==null&&(Ni(i,n,d,c),Qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Hn(),c=Ur(n),d=ar(o,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(n,d,c),i!==null&&(Ni(i,n,c,o),Qa(i,n,c))}};function zh(n,i,o,c,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!Vo(o,c)||!Vo(d,m):!0}function kh(n,i,o){var c=!1,d=Cr,m=i.contextType;return typeof m=="object"&&m!==null?m=yi(m):(d=Yn(i)?is:Ln.current,c=i.contextTypes,m=(c=c!=null)?Vs(n,d):Cr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Bh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&sl.enqueueReplaceState(i,i.state,null)}function xu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},su(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=yi(m):(m=Yn(i)?is:Ln.current,d.context=Vs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(vu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&sl.enqueueReplaceState(d,d.state,null),Za(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,i){try{var o="",c=i;do o+=le(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function yu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function Hh(n,i,o){o=ar(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){dl||(dl=!0,Fu=c),Su(n,i)},o}function Gh(n,i,o){o=ar(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Su(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Su(n,i),typeof c!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Vh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new l_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=M_.bind(null,n,i,o),i.then(n,n))}function Wh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jh(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ar(-1,1),i.tag=2,Lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var c_=P.ReactCurrentOwner,$n=!1;function Bn(n,i,o,c){i.child=n===null?fh(i,null,o,c):qs(i,n.child,o,c)}function Xh(n,i,o,c,d){o=o.render;var m=i.ref;return $s(i,d),c=du(n,i,o,c,m,d),o=hu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(Yt&&o&&$c(i),i.flags|=1,Bn(n,i,c,d),i.child)}function qh(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Yh(n,i,m,c,d)):(n=vl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Vo,o(M,c)&&n.ref===i.ref)return lr(n,i,d)}return i.flags|=1,n=Or(m,c),n.ref=i.ref,n.return=i,i.child=n}function Yh(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(Vo(m,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,lr(n,i,d)}return Mu(n,i,o,c,d)}function $h(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Js,ci),ci|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Js,ci),ci|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ht(Js,ci),ci|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ht(Js,ci),ci|=c;return Bn(n,i,d,o),i.child}function Kh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Mu(n,i,o,c,d){var m=Yn(o)?is:Ln.current;return m=Vs(i,m),$s(i,d),o=du(n,i,o,c,m,d),c=hu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(Yt&&c&&$c(i),i.flags|=1,Bn(n,i,o,d),i.child)}function Qh(n,i,o,c,d){if(Yn(o)){var m=!0;Va(i)}else m=!1;if($s(i,d),i.stateNode===null)al(n,i),kh(i,o,c),xu(i,o,c,d),c=!0;else if(n===null){var M=i.stateNode,F=i.memoizedProps;M.props=F;var j=M.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=yi(ue):(ue=Yn(o)?is:Ln.current,ue=Vs(i,ue));var Te=o.getDerivedStateFromProps,Ce=typeof Te=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ce||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==c||j!==ue)&&Bh(i,M,c,ue),Pr=!1;var we=i.memoizedState;M.state=we,Za(i,c,M,d),j=i.memoizedState,F!==c||we!==j||qn.current||Pr?(typeof Te=="function"&&(vu(i,o,Te,c),j=i.memoizedState),(F=Pr||zh(i,o,F,c,we,j,ue))?(Ce||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),M.props=c,M.state=j,M.context=ue,c=F):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,hh(n,i),F=i.memoizedProps,ue=i.type===i.elementType?F:Li(i.type,F),M.props=ue,Ce=i.pendingProps,we=M.context,j=o.contextType,typeof j=="object"&&j!==null?j=yi(j):(j=Yn(o)?is:Ln.current,j=Vs(i,j));var We=o.getDerivedStateFromProps;(Te=typeof We=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==Ce||we!==j)&&Bh(i,M,c,j),Pr=!1,we=i.memoizedState,M.state=we,Za(i,c,M,d);var Ye=i.memoizedState;F!==Ce||we!==Ye||qn.current||Pr?(typeof We=="function"&&(vu(i,o,We,c),Ye=i.memoizedState),(ue=Pr||zh(i,o,ue,c,we,Ye,j)||!1)?(Te||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ye,j),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ye,j)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),M.props=c,M.state=Ye,M.context=j,c=ue):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return Eu(n,i,o,c,m,d)}function Eu(n,i,o,c,d,m){Kh(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&nh(i,o,!1),lr(n,i,m);c=i.stateNode,c_.current=i;var F=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=qs(i,n.child,null,m),i.child=qs(i,null,F,m)):Bn(n,i,F,m),i.memoizedState=c.state,d&&nh(i,o,!0),i.child}function Zh(n){var i=n.stateNode;i.pendingContext?eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&eh(n,i.context,!1),ou(n,i.containerInfo)}function Jh(n,i,o,c,d){return Xs(),Jc(d),i.flags|=256,Bn(n,i,o,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ep(n,i,o){var c=i.pendingProps,d=Jt.current,m=!1,M=(i.flags&128)!==0,F;if((F=M)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ht(Jt,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=xl(M,c,0,null),n=hs(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Tu(o),i.memoizedState=wu,n):Au(i,M));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return u_(n,i,M,c,F,d,o);if(m){m=c.fallback,M=i.mode,d=n.child,F=d.sibling;var j={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Or(d,j),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Or(F,m):(m=hs(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?Tu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=wu,c}return m=n.child,n=m.sibling,c=Or(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Au(n,i){return i=xl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,o,c){return c!==null&&Jc(c),qs(i,n.child,null,o),n=Au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function u_(n,i,o,c,d,m,M){if(o)return i.flags&256?(i.flags&=-257,c=yu(Error(t(422))),ol(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=xl({mode:"visible",children:c.children},d,0,null),m=hs(m,d,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&qs(i,n.child,null,M),i.child.memoizedState=Tu(M),i.memoizedState=wu,m);if((i.mode&1)===0)return ol(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=yu(m,c,void 0),ol(n,i,M,c)}if(F=(M&n.childLanes)!==0,$n||F){if(c=_n,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,or(n,d),Ni(c,n,d,-1))}return Gu(),c=yu(Error(t(421))),ol(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=E_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,li=Ar(d.nextSibling),ai=i,Yt=!0,Pi=null,n!==null&&(vi[xi++]=rr,vi[xi++]=sr,vi[xi++]=rs,rr=n.id,sr=n.overflow,rs=i),i=Au(i,c.children),i.flags|=4096,i)}function tp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),iu(n.return,i,o)}function Ru(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function np(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bn(n,i,c.children,o),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tp(n,o,i);else if(n.tag===19)tp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ja(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ru(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ja(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Ru(i,!0,o,null,m);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function lr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Or(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Or(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function f_(n,i,o){switch(i.tag){case 3:Zh(i),Xs();break;case 5:gh(i);break;case 1:Yn(i.type)&&Va(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ht($a,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Jt,Jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ep(n,i,o):(Ht(Jt,Jt.current&1),n=lr(n,i,o),n!==null?n.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return np(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,$h(n,i,o)}return lr(n,i,o)}var ip,Cu,rp,sp;ip=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Cu=function(){},rp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,as(qi.current);var m=null;switch(o){case"input":d=et(n,d),c=et(n,c),m=[];break;case"select":d=Z({},d,{value:void 0}),c=Z({},c,{value:void 0}),m=[];break;case"textarea":d=T(n,d),c=T(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ba)}Ue(o,c);var M;o=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var F=d[ue];for(M in F)F.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var j=c[ue];if(F=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&j!==F&&(j!=null||F!=null))if(ue==="style")if(F){for(M in F)!F.hasOwnProperty(M)||j&&j.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in j)j.hasOwnProperty(M)&&F[M]!==j[M]&&(o||(o={}),o[M]=j[M])}else o||(m||(m=[]),m.push(ue,o)),o=j;else ue==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,F=F?F.__html:void 0,j!=null&&F!==j&&(m=m||[]).push(ue,j)):ue==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(ue,""+j):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(j!=null&&ue==="onScroll"&&Wt("scroll",n),m||F===j||(m=[])):(m=m||[]).push(ue,j))}o&&(m=m||[]).push("style",o);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},sp=function(n,i,o,c){o!==c&&(i.flags|=4)};function ra(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function d_(n,i,o){var c=i.pendingProps;switch(Kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return Yn(i.type)&&Ga(),In(i),null;case 3:return c=i.stateNode,Ks(),jt(qn),jt(Ln),cu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pi!==null&&(ku(Pi),Pi=null))),Cu(n,i),In(i),null;case 5:au(i);var d=as(Jo.current);if(o=i.type,n!==null&&i.stateNode!=null)rp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=as(qi.current),qa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Xi]=i,c[Yo]=m,n=(i.mode&1)!==0,o){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(d=0;d<jo.length;d++)Wt(jo[d],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":ut(c,m),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Wt("invalid",c);break;case"textarea":he(c,m),Wt("invalid",c)}Ue(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var F=m[M];M==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&ka(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&ka(c.textContent,F,n),d=["children",""+F]):a.hasOwnProperty(M)&&F!=null&&M==="onScroll"&&Wt("scroll",c)}switch(o){case"input":rt(c),qe(c,m,!0);break;case"textarea":rt(c),Ae(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ba)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Me(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Xi]=i,n[Yo]=c,ip(n,i,!1,!1),i.stateNode=n;e:{switch(M=Ge(o,c),o){case"dialog":Wt("cancel",n),Wt("close",n),d=c;break;case"iframe":case"object":case"embed":Wt("load",n),d=c;break;case"video":case"audio":for(d=0;d<jo.length;d++)Wt(jo[d],n);d=c;break;case"source":Wt("error",n),d=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),d=c;break;case"details":Wt("toggle",n),d=c;break;case"input":ut(n,c),d=et(n,c),Wt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=Z({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":he(n,c),d=T(n,c),Wt("invalid",n);break;default:d=c}Ue(o,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var j=F[m];m==="style"?st(n,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Ie(n,j)):m==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&Ne(n,j):typeof j=="number"&&Ne(n,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?j!=null&&m==="onScroll"&&Wt("scroll",n):j!=null&&R(n,m,j,M))}switch(o){case"input":rt(n),qe(n,c,!1);break;case"textarea":rt(n),Ae(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?D(n,!!c.multiple,m,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ba)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)sp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=as(Jo.current),as(qi.current),qa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Xi]=i,(m=c.nodeValue!==o)&&(n=ai,n!==null))switch(n.tag){case 3:ka(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ka(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Xi]=i,i.stateNode=c}return In(i),null;case 13:if(jt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&li!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lh(),Xs(),i.flags|=98560,m=!1;else if(m=qa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Xi]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),m=!1}else Pi!==null&&(ku(Pi),Pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?dn===0&&(dn=3):Gu())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Ks(),Cu(n,i),n===null&&Xo(i.stateNode.containerInfo),In(i),null;case 10:return nu(i.type._context),In(i),null;case 17:return Yn(i.type)&&Ga(),In(i),null;case 19:if(jt(Jt),m=i.memoizedState,m===null)return In(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)ra(m,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Ja(n),M!==null){for(i.flags|=128,ra(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Jt,Jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ve()>eo&&(i.flags|=128,c=!0,ra(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ja(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ra(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Yt)return In(i),null}else 2*Ve()-m.renderingStartTime>eo&&o!==1073741824&&(i.flags|=128,c=!0,ra(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ve(),i.sibling=null,o=Jt.current,Ht(Jt,c?o&1|2:o&1),i):(In(i),null);case 22:case 23:return Hu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ci&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h_(n,i){switch(Kc(i),i.tag){case 1:return Yn(i.type)&&Ga(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),jt(qn),jt(Ln),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(jt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Jt),null;case 4:return Ks(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var ll=!1,Nn=!1,p_=typeof WeakSet=="function"?WeakSet:Set,je=null;function Zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){nn(n,i,c)}else o.current=null}function bu(n,i,o){try{o()}catch(c){nn(n,i,c)}}var op=!1;function m_(n,i){if(Hc=Ca,n=zd(),Ic(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,F=-1,j=-1,ue=0,Te=0,Ce=n,we=null;t:for(;;){for(var We;Ce!==o||d!==0&&Ce.nodeType!==3||(F=M+d),Ce!==m||c!==0&&Ce.nodeType!==3||(j=M+c),Ce.nodeType===3&&(M+=Ce.nodeValue.length),(We=Ce.firstChild)!==null;)we=Ce,Ce=We;for(;;){if(Ce===n)break t;if(we===o&&++ue===d&&(F=M),we===m&&++Te===c&&(j=M),(We=Ce.nextSibling)!==null)break;Ce=we,we=Ce.parentNode}Ce=We}o=F===-1||j===-1?null:{start:F,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Gc={focusedElem:n,selectionRange:o},Ca=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Qe=Ye.memoizedProps,an=Ye.memoizedState,se=i.stateNode,q=se.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:Li(i.type,Qe),an);se.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){nn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ye=op,op=!1,Ye}function sa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&bu(i,o,m)}d=d.next}while(d!==c)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Pu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function ap(n){var i=n.alternate;i!==null&&(n.alternate=null,ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xi],delete i[Yo],delete i[Xc],delete i[Q0],delete i[Z0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lp(n){return n.tag===5||n.tag===3||n.tag===4}function cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ba));else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,o),n=n.sibling;n!==null;)Lu(n,i,o),n=n.sibling}function Du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,o),n=n.sibling;n!==null;)Du(n,i,o),n=n.sibling}var Rn=null,Di=!1;function Dr(n,i,o){for(o=o.child;o!==null;)up(n,i,o),o=o.sibling}function up(n,i,o){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Mn,o)}catch{}switch(o.tag){case 5:Nn||Zs(o,i);case 6:var c=Rn,d=Di;Rn=null,Dr(n,i,o),Rn=c,Di=d,Rn!==null&&(Di?(n=Rn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Rn.removeChild(o.stateNode));break;case 18:Rn!==null&&(Di?(n=Rn,o=o.stateNode,n.nodeType===8?jc(n.parentNode,o):n.nodeType===1&&jc(n,o),ts(n)):jc(Rn,o.stateNode));break;case 4:c=Rn,d=Di,Rn=o.stateNode.containerInfo,Di=!0,Dr(n,i,o),Rn=c,Di=d;break;case 0:case 11:case 14:case 15:if(!Nn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&bu(o,i,M),d=d.next}while(d!==c)}Dr(n,i,o);break;case 1:if(!Nn&&(Zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(F){nn(o,i,F)}Dr(n,i,o);break;case 21:Dr(n,i,o);break;case 22:o.mode&1?(Nn=(c=Nn)||o.memoizedState!==null,Dr(n,i,o),Nn=c):Dr(n,i,o);break;default:Dr(n,i,o)}}function fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new p_),i.forEach(function(c){var d=w_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Ii(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,M=i,F=M;e:for(;F!==null;){switch(F.tag){case 5:Rn=F.stateNode,Di=!1;break e;case 3:Rn=F.stateNode.containerInfo,Di=!0;break e;case 4:Rn=F.stateNode.containerInfo,Di=!0;break e}F=F.return}if(Rn===null)throw Error(t(160));up(m,M,d),Rn=null,Di=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(ue){nn(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,n),i=i.sibling}function dp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(i,n),$i(n),c&4){try{sa(3,n,n.return),cl(3,n)}catch(Qe){nn(n,n.return,Qe)}try{sa(5,n,n.return)}catch(Qe){nn(n,n.return,Qe)}}break;case 1:Ii(i,n),$i(n),c&512&&o!==null&&Zs(o,o.return);break;case 5:if(Ii(i,n),$i(n),c&512&&o!==null&&Zs(o,o.return),n.flags&32){var d=n.stateNode;try{Ne(d,"")}catch(Qe){nn(n,n.return,Qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,F=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&He(d,m),Ge(F,M);var ue=Ge(F,m);for(M=0;M<j.length;M+=2){var Te=j[M],Ce=j[M+1];Te==="style"?st(d,Ce):Te==="dangerouslySetInnerHTML"?Ie(d,Ce):Te==="children"?Ne(d,Ce):R(d,Te,Ce,ue)}switch(F){case"input":xt(d,m);break;case"textarea":_e(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?D(d,!!m.multiple,We,!1):we!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[Yo]=m}catch(Qe){nn(n,n.return,Qe)}}break;case 6:if(Ii(i,n),$i(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){nn(n,n.return,Qe)}}break;case 3:if(Ii(i,n),$i(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ts(i.containerInfo)}catch(Qe){nn(n,n.return,Qe)}break;case 4:Ii(i,n),$i(n);break;case 13:Ii(i,n),$i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Uu=Ve())),c&4&&fp(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(Nn=(ue=Nn)||Te,Ii(i,n),Nn=ue):Ii(i,n),$i(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Te&&(n.mode&1)!==0)for(je=n,Te=n.child;Te!==null;){for(Ce=je=Te;je!==null;){switch(we=je,We=we.child,we.tag){case 0:case 11:case 14:case 15:sa(4,we,we.return);break;case 1:Zs(we,we.return);var Ye=we.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=we,o=we.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Qe){nn(c,o,Qe)}}break;case 5:Zs(we,we.return);break;case 22:if(we.memoizedState!==null){mp(Ce);continue}}We!==null?(We.return=we,je=We):mp(Ce)}Te=Te.sibling}e:for(Te=null,Ce=n;;){if(Ce.tag===5){if(Te===null){Te=Ce;try{d=Ce.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Ce.stateNode,j=Ce.memoizedProps.style,M=j!=null&&j.hasOwnProperty("display")?j.display:null,F.style.display=It("display",M))}catch(Qe){nn(n,n.return,Qe)}}}else if(Ce.tag===6){if(Te===null)try{Ce.stateNode.nodeValue=ue?"":Ce.memoizedProps}catch(Qe){nn(n,n.return,Qe)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Te===Ce&&(Te=null),Ce=Ce.return}Te===Ce&&(Te=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Ii(i,n),$i(n),c&4&&fp(n);break;case 21:break;default:Ii(i,n),$i(n)}}function $i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(lp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ne(d,""),c.flags&=-33);var m=cp(n);Du(n,m,d);break;case 3:case 4:var M=c.stateNode.containerInfo,F=cp(n);Lu(n,F,M);break;default:throw Error(t(161))}}catch(j){nn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function g_(n,i,o){je=n,hp(n)}function hp(n,i,o){for(var c=(n.mode&1)!==0;je!==null;){var d=je,m=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||ll;if(!M){var F=d.alternate,j=F!==null&&F.memoizedState!==null||Nn;F=ll;var ue=Nn;if(ll=M,(Nn=j)&&!ue)for(je=d;je!==null;)M=je,j=M.child,M.tag===22&&M.memoizedState!==null?gp(d):j!==null?(j.return=M,je=j):gp(d);for(;m!==null;)je=m,hp(m),m=m.sibling;je=d,ll=F,Nn=ue}pp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,je=m):pp(n)}}function pp(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Nn||cl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Nn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Li(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&mh(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}mh(i,M,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Ce=Te.dehydrated;Ce!==null&&ts(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||i.flags&512&&Pu(i)}catch(we){nn(i,i.return,we)}}if(i===n){je=null;break}if(o=i.sibling,o!==null){o.return=i.return,je=o;break}je=i.return}}function mp(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,je=o;break}je=i.return}}function gp(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{cl(4,i)}catch(j){nn(i,o,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){nn(i,d,j)}}var m=i.return;try{Pu(i)}catch(j){nn(i,m,j)}break;case 5:var M=i.return;try{Pu(i)}catch(j){nn(i,M,j)}}}catch(j){nn(i,i.return,j)}if(i===n){je=null;break}var F=i.sibling;if(F!==null){F.return=i.return,je=F;break}je=i.return}}var __=Math.ceil,ul=P.ReactCurrentDispatcher,Iu=P.ReactCurrentOwner,Mi=P.ReactCurrentBatchConfig,Lt=0,_n=null,cn=null,Cn=0,ci=0,Js=Rr(0),dn=0,oa=null,cs=0,fl=0,Nu=0,aa=null,Kn=null,Uu=0,eo=1/0,cr=null,dl=!1,Fu=null,Ir=null,hl=!1,Nr=null,pl=0,la=0,Ou=null,ml=-1,gl=0;function Hn(){return(Lt&6)!==0?Ve():ml!==-1?ml:ml=Ve()}function Ur(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Cn!==0?Cn&-Cn:e_.transition!==null?(gl===0&&(gl=es()),gl):(n=tt,n!==0||(n=window.event,n=n===void 0?16:vd(n.type)),n)}function Ni(n,i,o,c){if(50<la)throw la=0,Ou=null,Error(t(185));Pe(n,o,c),((Lt&2)===0||n!==_n)&&(n===_n&&((Lt&2)===0&&(fl|=o),dn===4&&Fr(n,Cn)),Qn(n,c),o===1&&Lt===0&&(i.mode&1)===0&&(eo=Ve()+500,Wa&&br()))}function Qn(n,i){var o=n.callbackNode;wn(n,i);var c=kn(n,n===_n?Cn:0);if(c===0)o!==null&&Be(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Be(o),i===1)n.tag===0?J0(vp.bind(null,n)):ih(vp.bind(null,n)),$0(function(){(Lt&6)===0&&br()}),o=null;else{switch(tn(c)){case 1:o=ht;break;case 4:o=gt;break;case 16:o=Ut;break;case 536870912:o=Kt;break;default:o=Ut}o=Ap(o,_p.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function _p(n,i){if(ml=-1,gl=0,(Lt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(to()&&n.callbackNode!==o)return null;var c=kn(n,n===_n?Cn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=_l(n,c);else{i=c;var d=Lt;Lt|=2;var m=yp();(_n!==n||Cn!==i)&&(cr=null,eo=Ve()+500,fs(n,i));do try{y_();break}catch(F){xp(n,F)}while(!0);tu(),ul.current=m,Lt=d,cn!==null?i=0:(_n=null,Cn=0,i=dn)}if(i!==0){if(i===2&&(d=Vi(n),d!==0&&(c=d,i=zu(n,d))),i===1)throw o=oa,fs(n,0),Fr(n,c),Qn(n,Ve()),o;if(i===6)Fr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!v_(d)&&(i=_l(n,c),i===2&&(m=Vi(n),m!==0&&(c=m,i=zu(n,m))),i===1))throw o=oa,fs(n,0),Fr(n,c),Qn(n,Ve()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,Kn,cr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=Uu+500-Ve(),10<i)){if(kn(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(ds.bind(null,n,Kn,cr),i);break}ds(n,Kn,cr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-En(c);m=1<<M,M=i[M],M>d&&(d=M),c&=~m}if(c=d,c=Ve()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*__(c/1960))-c,10<c){n.timeoutHandle=Wc(ds.bind(null,n,Kn,cr),c);break}ds(n,Kn,cr);break;case 5:ds(n,Kn,cr);break;default:throw Error(t(329))}}}return Qn(n,Ve()),n.callbackNode===o?_p.bind(null,n):null}function zu(n,i){var o=aa;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=_l(n,i),n!==2&&(i=Kn,Kn=o,i!==null&&ku(i)),n}function ku(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function v_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!bi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Nu,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-En(i),c=1<<o;n[o]=-1,i&=~c}}function vp(n){if((Lt&6)!==0)throw Error(t(327));to();var i=kn(n,0);if((i&1)===0)return Qn(n,Ve()),null;var o=_l(n,i);if(n.tag!==0&&o===2){var c=Vi(n);c!==0&&(i=c,o=zu(n,c))}if(o===1)throw o=oa,fs(n,0),Fr(n,i),Qn(n,Ve()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,Kn,cr),Qn(n,Ve()),null}function Bu(n,i){var o=Lt;Lt|=1;try{return n(i)}finally{Lt=o,Lt===0&&(eo=Ve()+500,Wa&&br())}}function us(n){Nr!==null&&Nr.tag===0&&(Lt&6)===0&&to();var i=Lt;Lt|=1;var o=Mi.transition,c=tt;try{if(Mi.transition=null,tt=1,n)return n()}finally{tt=c,Mi.transition=o,Lt=i,(Lt&6)===0&&br()}}function Hu(){ci=Js.current,jt(Js)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Y0(o)),cn!==null)for(o=cn.return;o!==null;){var c=o;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ga();break;case 3:Ks(),jt(qn),jt(Ln),cu();break;case 5:au(c);break;case 4:Ks();break;case 13:jt(Jt);break;case 19:jt(Jt);break;case 10:nu(c.type._context);break;case 22:case 23:Hu()}o=o.return}if(_n=n,cn=n=Or(n.current,null),Cn=ci=i,dn=0,oa=null,Nu=fl=cs=0,Kn=aa=null,os!==null){for(i=0;i<os.length;i++)if(o=os[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,c.next=M}o.pending=c}os=null}return n}function xp(n,i){do{var o=cn;try{if(tu(),el.current=rl,tl){for(var c=en.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tl=!1}if(ls=0,gn=fn=en=null,ea=!1,ta=0,Iu.current=null,o===null||o.return===null){dn=1,oa=i,cn=null;break}e:{var m=n,M=o.return,F=o,j=i;if(i=Cn,F.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var ue=j,Te=F,Ce=Te.tag;if((Te.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var We=Wh(M);if(We!==null){We.flags&=-257,jh(We,M,F,m,i),We.mode&1&&Vh(m,ue,i),i=We,j=ue;var Ye=i.updateQueue;if(Ye===null){var Qe=new Set;Qe.add(j),i.updateQueue=Qe}else Ye.add(j);break e}else{if((i&1)===0){Vh(m,ue,i),Gu();break e}j=Error(t(426))}}else if(Yt&&F.mode&1){var an=Wh(M);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),jh(an,M,F,m,i),Jc(Qs(j,F));break e}}m=j=Qs(j,F),dn!==4&&(dn=2),aa===null?aa=[m]:aa.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=Hh(m,j,i);ph(m,se);break e;case 1:F=j;var q=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Ir===null||!Ir.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var Le=Gh(m,F,i);ph(m,Le);break e}}m=m.return}while(m!==null)}Mp(o)}catch(Je){i=Je,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function yp(){var n=ul.current;return ul.current=rl,n===null?rl:n}function Gu(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(cs&268435455)===0&&(fl&268435455)===0||Fr(_n,Cn)}function _l(n,i){var o=Lt;Lt|=2;var c=yp();(_n!==n||Cn!==i)&&(cr=null,fs(n,i));do try{x_();break}catch(d){xp(n,d)}while(!0);if(tu(),Lt=o,ul.current=c,cn!==null)throw Error(t(261));return _n=null,Cn=0,dn}function x_(){for(;cn!==null;)Sp(cn)}function y_(){for(;cn!==null&&!Ze();)Sp(cn)}function Sp(n){var i=Tp(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?Mp(n):cn=i,Iu.current=null}function Mp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=d_(o,i,ci),o!==null){cn=o;return}}else{if(o=h_(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);dn===0&&(dn=5)}function ds(n,i,o){var c=tt,d=Mi.transition;try{Mi.transition=null,tt=1,S_(n,i,o,c)}finally{Mi.transition=d,tt=c}return null}function S_(n,i,o,c){do to();while(Nr!==null);if((Lt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Ke(n,m),n===_n&&(cn=_n=null,Cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||hl||(hl=!0,Ap(Ut,function(){return to(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Mi.transition,Mi.transition=null;var M=tt;tt=1;var F=Lt;Lt|=4,Iu.current=null,m_(n,o),dp(o,n),H0(Gc),Ca=!!Hc,Gc=Hc=null,n.current=o,g_(o),ot(),Lt=F,tt=M,Mi.transition=m}else n.current=o;if(hl&&(hl=!1,Nr=n,pl=d),m=n.pendingLanes,m===0&&(Ir=null),St(o.stateNode),Qn(n,Ve()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(dl)throw dl=!1,n=Fu,Fu=null,n;return(pl&1)!==0&&n.tag!==0&&to(),m=n.pendingLanes,(m&1)!==0?n===Ou?la++:(la=0,Ou=n):la=0,br(),null}function to(){if(Nr!==null){var n=tn(pl),i=Mi.transition,o=tt;try{if(Mi.transition=null,tt=16>n?16:n,Nr===null)var c=!1;else{if(n=Nr,Nr=null,pl=0,(Lt&6)!==0)throw Error(t(331));var d=Lt;for(Lt|=4,je=n.current;je!==null;){var m=je,M=m.child;if((je.flags&16)!==0){var F=m.deletions;if(F!==null){for(var j=0;j<F.length;j++){var ue=F[j];for(je=ue;je!==null;){var Te=je;switch(Te.tag){case 0:case 11:case 15:sa(8,Te,m)}var Ce=Te.child;if(Ce!==null)Ce.return=Te,je=Ce;else for(;je!==null;){Te=je;var we=Te.sibling,We=Te.return;if(ap(Te),Te===ue){je=null;break}if(we!==null){we.return=We,je=we;break}je=We}}}var Ye=m.alternate;if(Ye!==null){var Qe=Ye.child;if(Qe!==null){Ye.child=null;do{var an=Qe.sibling;Qe.sibling=null,Qe=an}while(Qe!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,je=M;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:sa(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,je=se;break e}je=m.return}}var q=n.current;for(je=q;je!==null;){M=je;var ae=M.child;if((M.subtreeFlags&2064)!==0&&ae!==null)ae.return=M,je=ae;else e:for(M=q;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:cl(9,F)}}catch(Je){nn(F,F.return,Je)}if(F===M){je=null;break e}var Le=F.sibling;if(Le!==null){Le.return=F.return,je=Le;break e}je=F.return}}if(Lt=d,br(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Mn,n)}catch{}c=!0}return c}finally{tt=o,Mi.transition=i}}return!1}function Ep(n,i,o){i=Qs(o,i),i=Hh(n,i,1),n=Lr(n,i,1),i=Hn(),n!==null&&(Pe(n,1,i),Qn(n,i))}function nn(n,i,o){if(n.tag===3)Ep(n,n,o);else for(;i!==null;){if(i.tag===3){Ep(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ir===null||!Ir.has(c))){n=Qs(o,n),n=Gh(i,n,1),i=Lr(i,n,1),n=Hn(),i!==null&&(Pe(i,1,n),Qn(i,n));break}}i=i.return}}function M_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&o,_n===n&&(Cn&o)===o&&(dn===4||dn===3&&(Cn&130023424)===Cn&&500>Ve()-Uu?fs(n,0):Nu|=o),Qn(n,i)}function wp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ai,Ai<<=1,(Ai&130023424)===0&&(Ai=4194304)));var o=Hn();n=or(n,i),n!==null&&(Pe(n,i,o),Qn(n,o))}function E_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),wp(n,o)}function w_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),wp(n,o)}var Tp;Tp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||qn.current)$n=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return $n=!1,f_(n,i,o);$n=(n.flags&131072)!==0}else $n=!1,Yt&&(i.flags&1048576)!==0&&rh(i,Xa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;al(n,i),n=i.pendingProps;var d=Vs(i,Ln.current);$s(i,o),d=du(null,i,c,n,d,o);var m=hu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(m=!0,Va(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,su(i),d.updater=sl,i.stateNode=d,d._reactInternals=i,xu(i,c,n,o),i=Eu(null,i,c,!0,m,o)):(i.tag=0,Yt&&m&&$c(i),Bn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(al(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=A_(c),n=Li(c,n),d){case 0:i=Mu(null,i,c,n,o);break e;case 1:i=Qh(null,i,c,n,o);break e;case 11:i=Xh(null,i,c,n,o);break e;case 14:i=qh(null,i,c,Li(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Mu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Qh(n,i,c,d,o);case 3:e:{if(Zh(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,hh(n,i),Za(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Qs(Error(t(423)),i),i=Jh(n,i,c,o,d);break e}else if(c!==d){d=Qs(Error(t(424)),i),i=Jh(n,i,c,o,d);break e}else for(li=Ar(i.stateNode.containerInfo.firstChild),ai=i,Yt=!0,Pi=null,o=fh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xs(),c===d){i=lr(n,i,o);break e}Bn(n,i,c,o)}i=i.child}return i;case 5:return gh(i),n===null&&Zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Vc(c,d)?M=null:m!==null&&Vc(c,m)&&(i.flags|=32),Kh(n,i),Bn(n,i,M,o),i.child;case 6:return n===null&&Zc(i),null;case 13:return ep(n,i,o);case 4:return ou(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,o):Bn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Xh(n,i,c,d,o);case 7:return Bn(n,i,i.pendingProps,o),i.child;case 8:return Bn(n,i,i.pendingProps.children,o),i.child;case 12:return Bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Ht($a,c._currentValue),c._currentValue=M,m!==null)if(bi(m.value,M)){if(m.children===d.children&&!qn.current){i=lr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){M=m.child;for(var j=F.firstContext;j!==null;){if(j.context===c){if(m.tag===1){j=ar(-1,o&-o),j.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?j.next=j:(j.next=Te.next,Te.next=j),ue.pending=j}}m.lanes|=o,j=m.alternate,j!==null&&(j.lanes|=o),iu(m.return,o,i),F.lanes|=o;break}j=j.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,F=M.alternate,F!==null&&(F.lanes|=o),iu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Bn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,$s(i,o),d=yi(d),c=c(d),i.flags|=1,Bn(n,i,c,o),i.child;case 14:return c=i.type,d=Li(c,i.pendingProps),d=Li(c.type,d),qh(n,i,c,d,o);case 15:return Yh(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),al(n,i),i.tag=1,Yn(c)?(n=!0,Va(i)):n=!1,$s(i,o),kh(i,c,d),xu(i,c,d,o),Eu(null,i,c,!0,n,o);case 19:return np(n,i,o);case 22:return $h(n,i,o)}throw Error(t(156,i.tag))};function Ap(n,i){return ce(n,i)}function T_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,i,o,c){return new T_(n,i,o,c)}function Vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function A_(n){if(typeof n=="function")return Vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pe)return 11;if(n===V)return 14}return 2}function Or(n,i){var o=n.alternate;return o===null?(o=Ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vl(n,i,o,c,d,m){var M=2;if(c=n,typeof n=="function")Vu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case L:return hs(o.children,d,m,i);case J:M=8,d|=8;break;case me:return n=Ei(12,o,i,d|2),n.elementType=me,n.lanes=m,n;case Q:return n=Ei(13,o,i,d),n.elementType=Q,n.lanes=m,n;case W:return n=Ei(19,o,i,d),n.elementType=W,n.lanes=m,n;case ee:return xl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:M=10;break e;case U:M=9;break e;case pe:M=11;break e;case V:M=14;break e;case oe:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ei(M,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function hs(n,i,o,c){return n=Ei(7,n,c,i),n.lanes=o,n}function xl(n,i,o,c){return n=Ei(22,n,c,i),n.elementType=ee,n.lanes=o,n.stateNode={isHidden:!1},n}function Wu(n,i,o){return n=Ei(6,n,null,i),n.lanes=o,n}function ju(n,i,o){return i=Ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function R_(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=b(0),this.expirationTimes=b(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=b(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xu(n,i,o,c,d,m,M,F,j){return n=new R_(n,i,o,F,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(m),n}function C_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Rp(n){if(!n)return Cr;n=n._reactInternals;e:{if(bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Yn(o))return th(n,o,i)}return i}function Cp(n,i,o,c,d,m,M,F,j){return n=Xu(o,c,!0,n,d,m,M,F,j),n.context=Rp(null),o=n.current,c=Hn(),d=Ur(o),m=ar(c,d),m.callback=i??null,Lr(o,m,d),n.current.lanes=d,Pe(n,d,c),Qn(n,c),n}function yl(n,i,o,c){var d=i.current,m=Hn(),M=Ur(d);return o=Rp(o),i.context===null?i.context=o:i.pendingContext=o,i=ar(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(d,i,M),n!==null&&(Ni(n,d,M,m),Qa(n,d,M)),M}function Sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function bp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function qu(n,i){bp(n,i),(n=n.alternate)&&bp(n,i)}function b_(){return null}var Pp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}Ml.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));yl(n,i,null,null)},Ml.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){yl(null,n,null,null)}),i[nr]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=ii();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,n),o===0&&Zt(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function P_(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=Sl(M);m.call(ue)}}var M=Cp(i,c,n,0,null,!1,!1,"",Lp);return n._reactRootContainer=M,n[nr]=M.current,Xo(n.nodeType===8?n.parentNode:n),us(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ue=Sl(j);F.call(ue)}}var j=Xu(n,0,!1,null,null,!1,!1,"",Lp);return n._reactRootContainer=j,n[nr]=j.current,Xo(n.nodeType===8?n.parentNode:n),us(function(){yl(i,j,o,c)}),j}function wl(n,i,o,c,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var F=d;d=function(){var j=Sl(M);F.call(j)}}yl(i,M,n,d)}else M=P_(o,i,n,d,c);return Sl(M)}Qt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Vt(i.pendingLanes);o!==0&&(Ot(i,o|1),Qn(i,Ve()),(Lt&6)===0&&(eo=Ve()+500,br()))}break;case 13:us(function(){var c=or(n,1);if(c!==null){var d=Hn();Ni(c,n,1,d)}}),qu(n,1)}},Ri=function(n){if(n.tag===13){var i=or(n,134217728);if(i!==null){var o=Hn();Ni(i,n,134217728,o)}qu(n,134217728)}},mi=function(n){if(n.tag===13){var i=Ur(n),o=or(n,i);if(o!==null){var c=Hn();Ni(o,n,i,c)}qu(n,i)}},ii=function(){return tt},Mr=function(n,i){var o=tt;try{return tt=n,i()}finally{tt=o}},ye=function(n,i,o){switch(i){case"input":if(xt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ha(c);if(!d)throw Error(t(90));re(c),xt(c,d)}}}break;case"textarea":_e(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},ke=Bu,dt=us;var L_={usingClientEntryPoint:!1,Events:[$o,Hs,Ha,ge,ve,Bu]},ca={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fe(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||b_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Mn=Tl.inject(D_),bt=Tl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_,Zn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(i))throw Error(t(200));return C_(n,i,null,o)},Zn.createRoot=function(n,i){if(!$u(n))throw Error(t(299));var o=!1,c="",d=Pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xu(n,1,!1,null,null,o,!1,c,d),n[nr]=i.current,Xo(n.nodeType===8?n.parentNode:n),new Yu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fe(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return us(n)},Zn.hydrate=function(n,i,o){if(!El(i))throw Error(t(200));return wl(null,n,i,!0,o)},Zn.hydrateRoot=function(n,i,o){if(!$u(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",M=Pp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Cp(i,null,n,1,o??null,d,!1,m,M),n[nr]=i.current,Xo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ml(i)},Zn.render=function(n,i,o){if(!El(i))throw Error(t(200));return wl(null,n,i,!1,o)},Zn.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(us(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Bu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!El(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,o,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var kp;function H_(){if(kp)return Zu.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=B_(),Zu.exports}var Bp;function G_(){if(Bp)return Al;Bp=1;var s=H_();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var V_=G_();const W_=Ag(V_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="162",j_=0,Hp=1,X_=2,Rg=1,q_=2,mr=3,Qr=0,jn=1,di=2,qr=0,Po=1,Gp=2,Vp=3,Wp=4,Y_=5,Es=100,$_=101,K_=102,jp=103,Xp=104,Q_=200,Z_=201,J_=202,ev=203,Wf=204,jf=205,tv=206,nv=207,iv=208,rv=209,sv=210,ov=211,av=212,lv=213,cv=214,uv=0,fv=1,dv=2,cc=3,hv=4,pv=5,mv=6,gv=7,rd=0,_v=1,vv=2,Yr=0,xv=1,yv=2,Sv=3,Mv=4,Ev=5,wv=6,Tv=7,Cg=300,Do=301,Io=302,Xf=303,qf=304,vc=306,Yf=1e3,zi=1001,$f=1002,Wn=1003,qp=1004,fa=1005,Jn=1006,tf=1007,Ts=1008,$r=1009,Av=1010,Rv=1011,sd=1012,bg=1013,Xr=1014,gr=1015,Sa=1016,Pg=1017,Lg=1018,As=1020,Cv=1021,ki=1023,bv=1024,Pv=1025,Rs=1026,No=1027,Lv=1028,Dg=1029,Dv=1030,Ig=1031,Ng=1033,nf=33776,rf=33777,sf=33778,of=33779,Yp=35840,$p=35841,Kp=35842,Qp=35843,Ug=36196,Zp=37492,Jp=37496,em=37808,tm=37809,nm=37810,im=37811,rm=37812,sm=37813,om=37814,am=37815,lm=37816,cm=37817,um=37818,fm=37819,dm=37820,hm=37821,af=36492,pm=36494,mm=36495,Iv=36283,gm=36284,_m=36285,vm=36286,Nv=3200,Uv=3201,od=0,Fv=1,jr="",Ki="srgb",Zr="srgb-linear",ad="display-p3",xc="display-p3-linear",uc="linear",Xt="srgb",fc="rec709",dc="p3",no=7680,xm=519,Ov=512,zv=513,kv=514,Fg=515,Bv=516,Hv=517,Gv=518,Vv=519,Kf=35044,ym="300 es",Qf=1035,_r=2e3,hc=2001;class Fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=Math.PI/180,pc=180/Math.PI;function Kr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function On(s,e,t){return Math.max(e,Math.min(t,s))}function Wv(s,e){return(s%e+e)%e}function cf(s,e,t){return(1-t)*s+t*e}function Sm(s){return(s&s-1)===0&&s!==0}function Zf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,r,a,l,f,u,h,p){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,u,h,p)}set(e,t,r,a,l,f,u,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=u,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],u=r[3],h=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],w=a[0],x=a[3],v=a[6],N=a[1],R=a[4],P=a[7],G=a[2],H=a[5],L=a[8];return l[0]=f*w+u*N+h*G,l[3]=f*x+u*R+h*H,l[6]=f*v+u*P+h*L,l[1]=p*w+_*N+g*G,l[4]=p*x+_*R+g*H,l[7]=p*v+_*P+g*L,l[2]=y*w+S*N+E*G,l[5]=y*x+S*R+E*H,l[8]=y*v+S*P+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],_=e[8];return t*f*_-t*u*p-r*l*_+r*u*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],_=e[8],g=_*f-u*p,y=u*h-_*l,S=p*l-f*h,E=t*g+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(a*p-_*r)*w,e[2]=(u*r-a*f)*w,e[3]=y*w,e[4]=(_*t-a*h)*w,e[5]=(a*l-u*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(f*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,u){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*u)+f+e,-a*p,a*h,-a*(-p*f+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new At;function Og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jv(){const s=mc("canvas");return s.style.display="block",s}const Mm={};function zg(s){s in Mm||(Mm[s]=!0,console.warn(s))}const Em=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wm=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rl={[Zr]:{transfer:uc,primaries:fc,toReference:s=>s,fromReference:s=>s},[Ki]:{transfer:Xt,primaries:fc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xc]:{transfer:uc,primaries:dc,toReference:s=>s.applyMatrix3(wm),fromReference:s=>s.applyMatrix3(Em)},[ad]:{transfer:Xt,primaries:dc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wm),fromReference:s=>s.applyMatrix3(Em).convertLinearToSRGB()}},Xv=new Set([Zr,xc]),Bt={enabled:!0,_workingColorSpace:Zr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Xv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=Rl[e].toReference,a=Rl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Rl[s].primaries},getTransfer:function(s){return s===jr?uc:Rl[s].transfer}};function Lo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ff(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let io;class kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{io===void 0&&(io=mc("canvas")),io.width=e.width,io.height=e.height;const r=io.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=io}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=Lo(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Lo(t[r]/255)*255):t[r]=Lo(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qv=0;class Bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,u=a.length;f<u;f++)a[f].isDataTexture?l.push(df(a[f].image)):l.push(df(a[f]))}else l=df(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function df(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class Xn extends Fo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=zi,a=zi,l=Jn,f=Ts,u=ki,h=$r,p=Xn.DEFAULT_ANISOTROPY,_=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Kr(),this.name="",this.source=new Bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yf:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yf:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Cg;Xn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],y=h[1],S=h[5],E=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(S+1)/2,G=(v+1)/2,H=(_+y)/4,L=(g+w)/4,J=(E+x)/4;return R>P&&R>G?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=H/r,l=L/r):P>G?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=H/a,l=J/a):G<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),r=L/l,a=J/l),this.set(r,a,l,t),this}let N=Math.sqrt((x-E)*(x-E)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(g-w)/N,this.z=(y-_)/N,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $v extends Fo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Xn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let u=0;u<f;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends $v{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hg extends Xn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kv extends Xn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,u){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const y=l[f+0],S=l[f+1],E=l[f+2],w=l[f+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(g!==w||h!==y||p!==S||_!==E){let x=1-u;const v=h*y+p*S+_*E+g*w,N=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const G=Math.sqrt(R),H=Math.atan2(G,v*N);x=Math.sin(x*H)/G,u=Math.sin(u*H)/G}const P=u*N;if(h=h*x+y*P,p=p*x+S*P,_=_*x+E*P,g=g*x+w*P,x===1-u){const G=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=G,p*=G,_*=G,g*=G}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,f){const u=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[f],y=l[f+1],S=l[f+2],E=l[f+3];return e[t]=u*E+_*g+h*S-p*y,e[t+1]=h*E+_*y+p*g-u*S,e[t+2]=p*E+_*S+u*y-h*g,e[t+3]=_*E-u*g-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,u=Math.cos,h=Math.sin,p=u(r/2),_=u(a/2),g=u(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(f){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],u=t[5],h=t[9],p=t[2],_=t[6],g=t[10],y=r+u+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>u&&r>g){const S=2*Math.sqrt(1+r-u-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(u>g){const S=2*Math.sqrt(1+u-r-g);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-u);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,u=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+f*u+a*p-l*h,this._y=a*_+f*h+l*u-r*p,this._z=l*_+f*p+r*h-a*u,this._w=f*_-r*u-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let u=f*e._w+r*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,u),g=Math.sin((1-t)*_)/p,y=Math.sin(t*_)/p;return this._w=f*g+this._w*y,this._x=r*g+this._x*y,this._y=a*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,u=e.z,h=e.w,p=2*(f*a-u*r),_=2*(u*t-l*a),g=2*(l*r-f*t);return this.x=t+h*p+f*g-u*_,this.y=r+h*_+u*p-l*g,this.z=a+h*g+l*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,u=t.y,h=t.z;return this.x=a*h-l*u,this.y=l*f-r*h,this.z=r*u-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new X,Tm=new Ma;class Ea{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=l.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(l,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),bl.subVectors(this.max,da),ro.subVectors(e.a,da),so.subVectors(e.b,da),oo.subVectors(e.c,da),kr.subVectors(so,ro),Br.subVectors(oo,so),ps.subVectors(ro,oo);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-ps.z,ps.y,kr.z,0,-kr.x,Br.z,0,-Br.x,ps.z,0,-ps.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-ps.y,ps.x,0];return!pf(t,ro,so,oo,bl)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,ro,so,oo,bl))?!1:(Pl.crossVectors(kr,Br),t=[Pl.x,Pl.y,Pl.z],pf(t,ro,so,oo,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new X,new X,new X,new X,new X,new X,new X,new X],Ui=new X,Cl=new Ea,ro=new X,so=new X,oo=new X,kr=new X,Br=new X,ps=new X,da=new X,bl=new X,Pl=new X,ms=new X;function pf(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){ms.fromArray(s,l);const u=a.x*Math.abs(ms.x)+a.y*Math.abs(ms.y)+a.z*Math.abs(ms.z),h=e.dot(ms),p=t.dot(ms),_=r.dot(ms);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>u)return!1}return!0}const Qv=new Ea,ha=new X,mf=new X;class wa{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Qv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ha,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(mf)),this.expandByPoint(ha.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new X,gf=new X,Ll=new X,Hr=new X,_f=new X,Dl=new X,vf=new X;class ld{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){gf.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(gf);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Ll),u=Hr.dot(this.direction),h=-Hr.dot(Ll),p=Hr.lengthSq(),_=Math.abs(1-f*f);let g,y,S,E;if(_>0)if(g=f*h-u,y=f*u-h,E=l*_,g>=0)if(y>=-E)if(y<=E){const w=1/_;g*=w,y*=w,S=g*(g+f*y+2*u)+y*(f*g+y+2*h)+p}else y=l,g=Math.max(0,-(f*y+u)),S=-g*g+y*(y+2*h)+p;else y=-l,g=Math.max(0,-(f*y+u)),S=-g*g+y*(y+2*h)+p;else y<=-E?(g=Math.max(0,-(-f*l+u)),y=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(g=Math.max(0,-(f*l+u)),y=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p);else y=f>0?-l:l,g=Math.max(0,-(f*y+u)),S=-g*g+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(gf).addScaledVector(Ll,y),S}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const r=fr.dot(this.direction),a=fr.dot(fr)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),u=r-f,h=r+f;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,u,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),g>=0?(u=(e.min.z-y.z)*g,h=(e.max.z-y.z)*g):(u=(e.max.z-y.z)*g,h=(e.min.z-y.z)*g),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,r,a,l){_f.subVectors(t,e),Dl.subVectors(r,e),vf.crossVectors(_f,Dl);let f=this.direction.dot(vf),u;if(f>0){if(a)return null;u=1}else if(f<0)u=-1,f=-f;else return null;Hr.subVectors(this.origin,e);const h=u*this.direction.dot(Dl.crossVectors(Hr,Dl));if(h<0)return null;const p=u*this.direction.dot(_f.cross(Hr));if(p<0||h+p>f)return null;const _=-u*Hr.dot(vf);return _<0?null:this.at(_/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,r,a,l,f,u,h,p,_,g,y,S,E,w,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,u,h,p,_,g,y,S,E,w,x)}set(e,t,r,a,l,f,u,h,p,_,g,y,S,E,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=f,v[9]=u,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=S,v[7]=E,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ao.setFromMatrixColumn(e,0).length(),l=1/ao.setFromMatrixColumn(e,1).length(),f=1/ao.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),u=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=f*_,S=f*g,E=u*_,w=u*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+E*p,t[5]=y-w*p,t[9]=-u*h,t[2]=w-y*p,t[6]=E+S*p,t[10]=f*h}else if(e.order==="YXZ"){const y=h*_,S=h*g,E=p*_,w=p*g;t[0]=y+w*u,t[4]=E*u-S,t[8]=f*p,t[1]=f*g,t[5]=f*_,t[9]=-u,t[2]=S*u-E,t[6]=w+y*u,t[10]=f*h}else if(e.order==="ZXY"){const y=h*_,S=h*g,E=p*_,w=p*g;t[0]=y-w*u,t[4]=-f*g,t[8]=E+S*u,t[1]=S+E*u,t[5]=f*_,t[9]=w-y*u,t[2]=-f*p,t[6]=u,t[10]=f*h}else if(e.order==="ZYX"){const y=f*_,S=f*g,E=u*_,w=u*g;t[0]=h*_,t[4]=E*p-S,t[8]=y*p+w,t[1]=h*g,t[5]=w*p+y,t[9]=S*p-E,t[2]=-p,t[6]=u*h,t[10]=f*h}else if(e.order==="YZX"){const y=f*h,S=f*p,E=u*h,w=u*p;t[0]=h*_,t[4]=w-y*g,t[8]=E*g+S,t[1]=g,t[5]=f*_,t[9]=-u*_,t[2]=-p*_,t[6]=S*g+E,t[10]=y-w*g}else if(e.order==="XZY"){const y=f*h,S=f*p,E=u*h,w=u*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=y*g+w,t[5]=f*_,t[9]=S*g-E,t[2]=E*g-S,t[6]=u*_,t[10]=w*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Jv)}lookAt(e,t,r){const a=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Gr.crossVectors(r,ui),Gr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Gr.crossVectors(r,ui)),Gr.normalize(),Il.crossVectors(ui,Gr),a[0]=Gr.x,a[4]=Il.x,a[8]=ui.x,a[1]=Gr.y,a[5]=Il.y,a[9]=ui.y,a[2]=Gr.z,a[6]=Il.z,a[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],u=r[4],h=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],w=r[6],x=r[10],v=r[14],N=r[3],R=r[7],P=r[11],G=r[15],H=a[0],L=a[4],J=a[8],me=a[12],A=a[1],U=a[5],pe=a[9],Q=a[13],W=a[2],V=a[6],oe=a[10],ee=a[14],z=a[3],te=a[7],Z=a[11],I=a[15];return l[0]=f*H+u*A+h*W+p*z,l[4]=f*L+u*U+h*V+p*te,l[8]=f*J+u*pe+h*oe+p*Z,l[12]=f*me+u*Q+h*ee+p*I,l[1]=_*H+g*A+y*W+S*z,l[5]=_*L+g*U+y*V+S*te,l[9]=_*J+g*pe+y*oe+S*Z,l[13]=_*me+g*Q+y*ee+S*I,l[2]=E*H+w*A+x*W+v*z,l[6]=E*L+w*U+x*V+v*te,l[10]=E*J+w*pe+x*oe+v*Z,l[14]=E*me+w*Q+x*ee+v*I,l[3]=N*H+R*A+P*W+G*z,l[7]=N*L+R*U+P*V+G*te,l[11]=N*J+R*pe+P*oe+G*Z,l[15]=N*me+R*Q+P*ee+G*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],u=e[5],h=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],w=e[7],x=e[11],v=e[15];return E*(+l*h*g-a*p*g-l*u*y+r*p*y+a*u*S-r*h*S)+w*(+t*h*S-t*p*y+l*f*y-a*f*S+a*p*_-l*h*_)+x*(+t*p*g-t*u*S-l*f*g+r*f*S+l*u*_-r*p*_)+v*(-a*u*_-t*h*g+t*u*y+a*f*g-r*f*y+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],w=e[13],x=e[14],v=e[15],N=g*x*p-w*y*p+w*h*S-u*x*S-g*h*v+u*y*v,R=E*y*p-_*x*p-E*h*S+f*x*S+_*h*v-f*y*v,P=_*w*p-E*g*p+E*u*S-f*w*S-_*u*v+f*g*v,G=E*g*h-_*w*h-E*u*y+f*w*y+_*u*x-f*g*x,H=t*N+r*R+a*P+l*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/H;return e[0]=N*L,e[1]=(w*y*l-g*x*l-w*a*S+r*x*S+g*a*v-r*y*v)*L,e[2]=(u*x*l-w*h*l+w*a*p-r*x*p-u*a*v+r*h*v)*L,e[3]=(g*h*l-u*y*l-g*a*p+r*y*p+u*a*S-r*h*S)*L,e[4]=R*L,e[5]=(_*x*l-E*y*l+E*a*S-t*x*S-_*a*v+t*y*v)*L,e[6]=(E*h*l-f*x*l-E*a*p+t*x*p+f*a*v-t*h*v)*L,e[7]=(f*y*l-_*h*l+_*a*p-t*y*p-f*a*S+t*h*S)*L,e[8]=P*L,e[9]=(E*g*l-_*w*l-E*r*S+t*w*S+_*r*v-t*g*v)*L,e[10]=(f*w*l-E*u*l+E*r*p-t*w*p-f*r*v+t*u*v)*L,e[11]=(_*u*l-f*g*l-_*r*p+t*g*p+f*r*S-t*u*S)*L,e[12]=G*L,e[13]=(_*w*a-E*g*a+E*r*y-t*w*y-_*r*x+t*g*x)*L,e[14]=(E*u*a-f*w*a-E*r*h+t*w*h+f*r*x-t*u*x)*L,e[15]=(f*g*a-_*u*a+_*r*h-t*g*h-f*r*y+t*u*y)*L,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,u=e.y,h=e.z,p=l*f,_=l*u;return this.set(p*f+r,p*u-a*h,p*h+a*u,0,p*u+a*h,_*u+r,_*h-a*f,0,p*h-a*u,_*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,u=t._z,h=t._w,p=l+l,_=f+f,g=u+u,y=l*p,S=l*_,E=l*g,w=f*_,x=f*g,v=u*g,N=h*p,R=h*_,P=h*g,G=r.x,H=r.y,L=r.z;return a[0]=(1-(w+v))*G,a[1]=(S+P)*G,a[2]=(E-R)*G,a[3]=0,a[4]=(S-P)*H,a[5]=(1-(y+v))*H,a[6]=(x+N)*H,a[7]=0,a[8]=(E+R)*L,a[9]=(x-N)*L,a[10]=(1-(y+w))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=ao.set(a[0],a[1],a[2]).length();const f=ao.set(a[4],a[5],a[6]).length(),u=ao.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Fi.copy(this);const p=1/l,_=1/f,g=1/u;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=_,Fi.elements[5]*=_,Fi.elements[6]*=_,Fi.elements[8]*=g,Fi.elements[9]*=g,Fi.elements[10]*=g,t.setFromRotationMatrix(Fi),r.x=l,r.y=f,r.z=u,this}makePerspective(e,t,r,a,l,f,u=_r){const h=this.elements,p=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let S,E;if(u===_r)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(u===hc)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,u=_r){const h=this.elements,p=1/(t-e),_=1/(r-a),g=1/(f-l),y=(t+e)*p,S=(r+a)*_;let E,w;if(u===_r)E=(f+l)*g,w=-2*g;else if(u===hc)E=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ao=new X,Fi=new Gt,Zv=new X(0,0,0),Jv=new X(1,1,1),Gr=new X,Il=new X,ui=new X,Am=new Gt,Rm=new Ma;class Hi{constructor(e=0,t=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],u=a[8],h=a[1],p=a[5],_=a[9],g=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(On(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(On(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-On(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ex=0;const Cm=new X,lo=new Ma,dr=new Gt,Nl=new X,pa=new X,tx=new X,nx=new Ma,bm=new X(1,0,0),Pm=new X(0,1,0),Lm=new X(0,0,1),ix={type:"added"},rx={type:"removed"},xf={type:"childadded",child:null},yf={type:"childremoved",child:null};class on extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new X,t=new Hi,r=new Ma,a=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new At}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(pa,Nl,this.up):dr.lookAt(Nl,pa,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),lo.setFromRotationMatrix(dr),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ix),xf.child=e,this.dispatchEvent(xf),xf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(t){const u=f(e.geometries),h=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(u){const h=[];for(const p in u){const _=u[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new X(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new X,hr=new X,Sf=new X,pr=new X,co=new X,uo=new X,Dm=new X,Mf=new X,Ef=new X,wf=new X;class Bi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Oi.subVectors(e,t),a.cross(Oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Oi.subVectors(a,t),hr.subVectors(r,t),Sf.subVectors(e,t);const f=Oi.dot(Oi),u=Oi.dot(hr),h=Oi.dot(Sf),p=hr.dot(hr),_=hr.dot(Sf),g=f*p-u*u;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*h-u*_)*y,E=(f*_-u*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,r,a,l,f,u,h){return this.getBarycoord(e,t,r,a,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,pr.x),h.addScaledVector(f,pr.y),h.addScaledVector(u,pr.z),h)}static isFrontFacing(e,t,r,a){return Oi.subVectors(r,t),hr.subVectors(e,t),Oi.cross(hr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Oi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Bi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,u;co.subVectors(a,r),uo.subVectors(l,r),Mf.subVectors(e,r);const h=co.dot(Mf),p=uo.dot(Mf);if(h<=0&&p<=0)return t.copy(r);Ef.subVectors(e,a);const _=co.dot(Ef),g=uo.dot(Ef);if(_>=0&&g<=_)return t.copy(a);const y=h*g-_*p;if(y<=0&&h>=0&&_<=0)return f=h/(h-_),t.copy(r).addScaledVector(co,f);wf.subVectors(e,l);const S=co.dot(wf),E=uo.dot(wf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return u=p/(p-E),t.copy(r).addScaledVector(uo,u);const x=_*E-S*g;if(x<=0&&g-_>=0&&S-E>=0)return Dm.subVectors(l,a),u=(g-_)/(g-_+(S-E)),t.copy(a).addScaledVector(Dm,u);const v=1/(x+w+y);return f=w*v,u=y*v,t.copy(r).addScaledVector(co,f).addScaledVector(uo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Tf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Bt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Bt.workingColorSpace){if(e=Wv(e,1),t=On(t,0,1),r=On(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Tf(f,l,e+1/3),this.g=Tf(f,l,e),this.b=Tf(f,l,e-1/3)}return Bt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ki){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],u=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ki){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=ff(e.r),this.g=ff(e.g),this.b=ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ki){return Bt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(On(Fn.r*255,0,255))*65536+Math.round(On(Fn.g*255,0,255))*256+Math.round(On(Fn.b*255,0,255))}getHexString(e=Ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Fn.copy(this),t);const r=Fn.r,a=Fn.g,l=Fn.b,f=Math.max(r,a,l),u=Math.min(r,a,l);let h,p;const _=(u+f)/2;if(u===f)h=0,p=0;else{const g=f-u;switch(p=_<=.5?g/(f+u):g/(2-f-u),f){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ki){Bt.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,a=Fn.b;return e!==Ki?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Ul);const r=cf(Vr.h,Ul.h,t),a=cf(Vr.s,Ul.s,t),l=cf(Vr.l,Ul.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Et;Et.NAMES=Vg;let sx=0;class xr extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Po,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=jf,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wf&&(r.blendSrc=this.blendSrc),this.blendDst!==jf&&(r.blendDst=this.blendDst),this.blendEquation!==Es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(r.stencilFail=this.stencilFail),this.stencilZFail!==no&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const u in l){const h=l[u];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ro extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new X,Fl=new vt;class hi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Kf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kf&&(e.usage=this.usage),e}}class Wg extends hi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jg extends hi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class qt extends hi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ox=0;const wi=new Gt,Af=new on,fo=new X,fi=new Ea,ma=new Ea,xn=new X;class sn extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?jg:Wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new At().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,r){return wi.makeTranslation(e,t,r),this.applyMatrix4(wi),this}scale(e,t,r){return wi.makeScale(e,t,r),this.applyMatrix4(wi),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];ma.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(fi.min,ma.min),fi.expandByPoint(xn),xn.addVectors(fi.max,ma.max),fi.expandByPoint(xn)):(fi.expandByPoint(ma.min),fi.expandByPoint(ma.max))}fi.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)xn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(xn));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],h=this.morphTargetsRelative;for(let p=0,_=u.count;p<_;p++)xn.fromBufferAttribute(u,p),h&&(fo.fromBufferAttribute(e,p),xn.add(fo)),a=Math.max(a,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),u=[],h=[];for(let J=0;J<r.count;J++)u[J]=new X,h[J]=new X;const p=new X,_=new X,g=new X,y=new vt,S=new vt,E=new vt,w=new X,x=new X;function v(J,me,A){p.fromBufferAttribute(r,J),_.fromBufferAttribute(r,me),g.fromBufferAttribute(r,A),y.fromBufferAttribute(l,J),S.fromBufferAttribute(l,me),E.fromBufferAttribute(l,A),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(U),x.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(U),u[J].add(w),u[me].add(w),u[A].add(w),h[J].add(x),h[me].add(x),h[A].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let J=0,me=N.length;J<me;++J){const A=N[J],U=A.start,pe=A.count;for(let Q=U,W=U+pe;Q<W;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const R=new X,P=new X,G=new X,H=new X;function L(J){G.fromBufferAttribute(a,J),H.copy(G);const me=u[J];R.copy(me),R.sub(G.multiplyScalar(G.dot(me))).normalize(),P.crossVectors(H,me);const U=P.dot(h[J])<0?-1:1;f.setXYZW(J,R.x,R.y,R.z,U)}for(let J=0,me=N.length;J<me;++J){const A=N[J],U=A.start,pe=A.count;for(let Q=U,W=U+pe;Q<W;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new X,l=new X,f=new X,u=new X,h=new X,p=new X,_=new X,g=new X;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,x),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),u.add(_),h.add(_),p.add(_),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,h){const p=u.array,_=u.itemSize,g=u.normalized,y=new p.constructor(h.length*_);let S=0,E=0;for(let w=0,x=h.length;w<x;w++){u.isInterleavedBufferAttribute?S=h[w]*u.data.stride+u.offset:S=h[w]*_;for(let v=0;v<_;v++)y[E++]=p[S++]}return new hi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,r=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,r);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const h=[],p=l[u];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);h.push(S)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new Gt,gs=new ld,Ol=new wa,Nm=new X,ho=new X,po=new X,mo=new X,Rf=new X,zl=new X,kl=new vt,Bl=new vt,Hl=new vt,Um=new X,Fm=new X,Om=new X,Gl=new X,Vl=new X;class rn extends on{constructor(e=new sn,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){zl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=u[h],g=l[h];_!==0&&(Rf.fromBufferAttribute(g,e),f?zl.addScaledVector(Rf,_):zl.addScaledVector(Rf.sub(t),_))}t.add(zl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Ol.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ol,Nm)===null||gs.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Im.copy(l).invert(),gs.copy(e.ray).applyMatrix4(Im),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,u=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=f[x.materialIndex],N=Math.max(x.start,S.start),R=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let P=N,G=R;P<G;P+=3){const H=u.getX(P),L=u.getX(P+1),J=u.getX(P+2);a=Wl(this,v,e,r,p,_,g,H,L,J),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const N=u.getX(x),R=u.getX(x+1),P=u.getX(x+2);a=Wl(this,f,e,r,p,_,g,N,R,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=f[x.materialIndex],N=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=N,G=R;P<G;P+=3){const H=P,L=P+1,J=P+2;a=Wl(this,v,e,r,p,_,g,H,L,J),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const N=x,R=x+1,P=x+2;a=Wl(this,f,e,r,p,_,g,N,R,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function ax(s,e,t,r,a,l,f,u){let h;if(e.side===jn?h=r.intersectTriangle(f,l,a,!0,u):h=r.intersectTriangle(a,l,f,e.side===Qr,u),h===null)return null;Vl.copy(u),Vl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Vl);return p<t.near||p>t.far?null:{distance:p,point:Vl.clone(),object:s}}function Wl(s,e,t,r,a,l,f,u,h,p){s.getVertexPosition(u,ho),s.getVertexPosition(h,po),s.getVertexPosition(p,mo);const _=ax(s,e,t,r,ho,po,mo,Gl);if(_){a&&(kl.fromBufferAttribute(a,u),Bl.fromBufferAttribute(a,h),Hl.fromBufferAttribute(a,p),_.uv=Bi.getInterpolation(Gl,ho,po,mo,kl,Bl,Hl,new vt)),l&&(kl.fromBufferAttribute(l,u),Bl.fromBufferAttribute(l,h),Hl.fromBufferAttribute(l,p),_.uv1=Bi.getInterpolation(Gl,ho,po,mo,kl,Bl,Hl,new vt)),f&&(Um.fromBufferAttribute(f,u),Fm.fromBufferAttribute(f,h),Om.fromBufferAttribute(f,p),_.normal=Bi.getInterpolation(Gl,ho,po,mo,Um,Fm,Om,new X),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:u,b:h,c:p,normal:new X,materialIndex:0};Bi.getNormal(ho,po,mo,g.normal),_.face=g}return _}class Ji extends sn{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const u=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,a,f,2),E("x","z","y",1,-1,e,r,-t,a,f,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2));function E(w,x,v,N,R,P,G,H,L,J,me){const A=P/L,U=G/J,pe=P/2,Q=G/2,W=H/2,V=L+1,oe=J+1;let ee=0,z=0;const te=new X;for(let Z=0;Z<oe;Z++){const I=Z*U-Q;for(let $=0;$<V;$++){const xe=$*A-pe;te[w]=xe*N,te[x]=I*R,te[v]=W,p.push(te.x,te.y,te.z),te[w]=0,te[x]=0,te[v]=H>0?1:-1,_.push(te.x,te.y,te.z),g.push($/L),g.push(1-Z/J),ee+=1}}for(let Z=0;Z<J;Z++)for(let I=0;I<L;I++){const $=y+I+V*Z,xe=y+I+V*(Z+1),K=y+(I+1)+V*(Z+1),le=y+(I+1)+V*Z;h.push($,xe,le),h.push(xe,K,le),z+=6}u.addGroup(S,z,me),S+=z,y+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=Uo(s[t]);for(const a in r)e[a]=r[a]}return e}function lx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xg(s){return s.getRenderTarget()===null?s.outputColorSpace:Bt.workingColorSpace}const cx={clone:Uo,merge:Vn};var ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class qg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=_r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new X,zm=new vt,km=new vt;class ei extends qg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,zm,km),t.subVectors(km,zm)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lf*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const go=-90,_o=1;class dx extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(go,_o,e,t);a.layers=this.layers,this.add(a);const l=new ei(go,_o,e,t);l.layers=this.layers,this.add(l);const f=new ei(go,_o,e,t);f.layers=this.layers,this.add(f);const u=new ei(go,_o,e,t);u.layers=this.layers,this.add(u);const h=new ei(go,_o,e,t);h.layers=this.layers,this.add(h);const p=new ei(go,_o,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,u,h]=t;for(const p of t)this.remove(p);if(e===_r)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,u,h,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,u),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Yg extends Xn{constructor(e,t,r,a,l,f,u,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:Do,super(e,t,r,a,l,f,u,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hx extends Ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Yg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ji(5,5,5),l=new vr({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:qr});l.uniforms.tEquirect.value=t;const f=new rn(a,l),u=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Jn),new dx(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const Cf=new X,px=new X,mx=new At;class Ss{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Cf.subVectors(r,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Cf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||mx.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new wa,jl=new X;class cd{constructor(e=new Ss,t=new Ss,r=new Ss,a=new Ss,l=new Ss,f=new Ss){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(a),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=_r){const r=this.planes,a=e.elements,l=a[0],f=a[1],u=a[2],h=a[3],p=a[4],_=a[5],g=a[6],y=a[7],S=a[8],E=a[9],w=a[10],x=a[11],v=a[12],N=a[13],R=a[14],P=a[15];if(r[0].setComponents(h-l,y-p,x-S,P-v).normalize(),r[1].setComponents(h+l,y+p,x+S,P+v).normalize(),r[2].setComponents(h+f,y+_,x+E,P+N).normalize(),r[3].setComponents(h-f,y-_,x-E,P-N).normalize(),r[4].setComponents(h-u,y-g,x-w,P-R).normalize(),t===_r)r[5].setComponents(h+u,y+g,x+w,P+R).normalize();else if(t===hc)r[5].setComponents(u,g,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $g(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gx(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,y=p.usage,S=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,y),p.onUploadCallback();let w;if(g instanceof Float32Array)w=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)w=s.SHORT;else if(g instanceof Uint32Array)w=s.UNSIGNED_INT;else if(g instanceof Int32Array)w=s.INT;else if(g instanceof Int8Array)w=s.BYTE;else if(g instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:w,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,_,g){const y=_.array,S=_._updateRange,E=_.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&E.length===0&&s.bufferSubData(g,0,y),E.length!==0){for(let w=0,x=E.length;w<x;w++){const v=E[w];t?s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,a(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,_),g.version=p.version}}return{get:f,remove:u,update:h}}class Ta extends sn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,u=Math.floor(r),h=Math.floor(a),p=u+1,_=h+1,g=e/u,y=t/h,S=[],E=[],w=[],x=[];for(let v=0;v<_;v++){const N=v*y-f;for(let R=0;R<p;R++){const P=R*g-l;E.push(P,-N,0),w.push(0,0,1),x.push(R/u),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<u;N++){const R=N+p*v,P=N+p*(v+1),G=N+1+p*(v+1),H=N+1+p*v;S.push(R,P,H),S.push(P,G,H)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(w,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ry=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$S=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:_x,alphahash_pars_fragment:vx,alphamap_fragment:xx,alphamap_pars_fragment:yx,alphatest_fragment:Sx,alphatest_pars_fragment:Mx,aomap_fragment:Ex,aomap_pars_fragment:wx,batching_pars_vertex:Tx,batching_vertex:Ax,begin_vertex:Rx,beginnormal_vertex:Cx,bsdfs:bx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:Ux,color_fragment:Fx,color_pars_fragment:Ox,color_pars_vertex:zx,color_vertex:kx,common:Bx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Wx,emissivemap_fragment:jx,emissivemap_pars_fragment:Xx,colorspace_fragment:qx,colorspace_pars_fragment:Yx,envmap_fragment:$x,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Qx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:uy,envmap_vertex:Jx,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_fragment:sy,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:ly,lights_pars_begin:cy,lights_toon_fragment:fy,lights_toon_pars_fragment:dy,lights_phong_fragment:hy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:_y,lights_fragment_maps:vy,lights_fragment_end:xy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Ey,map_fragment:wy,map_pars_fragment:Ty,map_particle_fragment:Ay,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:by,morphinstance_vertex:Py,morphcolor_vertex:Ly,morphnormal_vertex:Dy,morphtarget_pars_vertex:Iy,morphtarget_vertex:Ny,normal_fragment_begin:Uy,normal_fragment_maps:Fy,normal_pars_fragment:Oy,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:Wy,opaque_fragment:jy,packing:Xy,premultiplied_alpha_fragment:qy,project_vertex:Yy,dithering_fragment:$y,dithering_pars_fragment:Ky,roughnessmap_fragment:Qy,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:eS,shadowmap_vertex:tS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:rS,skinning_vertex:sS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:uS,transmission_fragment:fS,transmission_pars_fragment:dS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:_S,background_frag:vS,backgroundCube_vert:xS,backgroundCube_frag:yS,cube_vert:SS,cube_frag:MS,depth_vert:ES,depth_frag:wS,distanceRGBA_vert:TS,distanceRGBA_frag:AS,equirect_vert:RS,equirect_frag:CS,linedashed_vert:bS,linedashed_frag:PS,meshbasic_vert:LS,meshbasic_frag:DS,meshlambert_vert:IS,meshlambert_frag:NS,meshmatcap_vert:US,meshmatcap_frag:FS,meshnormal_vert:OS,meshnormal_frag:zS,meshphong_vert:kS,meshphong_frag:BS,meshphysical_vert:HS,meshphysical_frag:GS,meshtoon_vert:VS,meshtoon_frag:WS,points_vert:jS,points_frag:XS,shadow_vert:qS,shadow_frag:YS,sprite_vert:$S,sprite_frag:KS},Fe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Qi={basic:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Vn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Vn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Vn([Fe.points,Fe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Vn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Vn([Fe.common,Fe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Vn([Fe.sprite,Fe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Vn([Fe.common,Fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Vn([Fe.lights,Fe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Qi.physical={uniforms:Vn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Xl={r:0,b:0,g:0},vs=new Hi,QS=new Gt;function ZS(s,e,t,r,a,l,f){const u=new Et(0);let h=l===!0?0:1,p,_,g=null,y=0,S=null;function E(x,v){let N=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?t:e).get(R)),R===null?w(u,h):R&&R.isColor&&(w(R,1),N=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===vc)?(_===void 0&&(_=new rn(new Ji(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Uo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,H,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(QS.makeRotationFromEuler(vs)),_.material.toneMapped=Bt.getTransfer(R.colorSpace)!==Xt,(g!==R||y!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new rn(new Ta(2,2),new vr({name:"BackgroundMaterial",uniforms:Uo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Bt.getTransfer(R.colorSpace)!==Xt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,v){x.getRGB(Xl,Xg(s)),r.buffers.color.setClear(Xl.r,Xl.g,Xl.b,v,f)}return{getClearColor:function(){return u},setClearColor:function(x,v=1){u.set(x),h=v,w(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,w(u,h)},render:E}}function JS(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,u={},h=x(null);let p=h,_=!1;function g(W,V,oe,ee,z){let te=!1;if(f){const Z=w(ee,oe,V);p!==Z&&(p=Z,S(p.object)),te=v(W,ee,oe,z),te&&N(W,ee,oe,z)}else{const Z=V.wireframe===!0;(p.geometry!==ee.id||p.program!==oe.id||p.wireframe!==Z)&&(p.geometry=ee.id,p.program=oe.id,p.wireframe=Z,te=!0)}z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(te||_)&&(_=!1,J(W,V,oe,ee),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(W){return r.isWebGL2?s.bindVertexArray(W):l.bindVertexArrayOES(W)}function E(W){return r.isWebGL2?s.deleteVertexArray(W):l.deleteVertexArrayOES(W)}function w(W,V,oe){const ee=oe.wireframe===!0;let z=u[W.id];z===void 0&&(z={},u[W.id]=z);let te=z[V.id];te===void 0&&(te={},z[V.id]=te);let Z=te[ee];return Z===void 0&&(Z=x(y()),te[ee]=Z),Z}function x(W){const V=[],oe=[],ee=[];for(let z=0;z<a;z++)V[z]=0,oe[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:oe,attributeDivisors:ee,object:W,attributes:{},index:null}}function v(W,V,oe,ee){const z=p.attributes,te=V.attributes;let Z=0;const I=oe.getAttributes();for(const $ in I)if(I[$].location>=0){const K=z[$];let le=te[$];if(le===void 0&&($==="instanceMatrix"&&W.instanceMatrix&&(le=W.instanceMatrix),$==="instanceColor"&&W.instanceColor&&(le=W.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;Z++}return p.attributesNum!==Z||p.index!==ee}function N(W,V,oe,ee){const z={},te=V.attributes;let Z=0;const I=oe.getAttributes();for(const $ in I)if(I[$].location>=0){let K=te[$];K===void 0&&($==="instanceMatrix"&&W.instanceMatrix&&(K=W.instanceMatrix),$==="instanceColor"&&W.instanceColor&&(K=W.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),z[$]=le,Z++}p.attributes=z,p.attributesNum=Z,p.index=ee}function R(){const W=p.newAttributes;for(let V=0,oe=W.length;V<oe;V++)W[V]=0}function P(W){G(W,0)}function G(W,V){const oe=p.newAttributes,ee=p.enabledAttributes,z=p.attributeDivisors;oe[W]=1,ee[W]===0&&(s.enableVertexAttribArray(W),ee[W]=1),z[W]!==V&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,V),z[W]=V)}function H(){const W=p.newAttributes,V=p.enabledAttributes;for(let oe=0,ee=V.length;oe<ee;oe++)V[oe]!==W[oe]&&(s.disableVertexAttribArray(oe),V[oe]=0)}function L(W,V,oe,ee,z,te,Z){Z===!0?s.vertexAttribIPointer(W,V,oe,z,te):s.vertexAttribPointer(W,V,oe,ee,z,te)}function J(W,V,oe,ee){if(r.isWebGL2===!1&&(W.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const z=ee.attributes,te=oe.getAttributes(),Z=V.defaultAttributeValues;for(const I in te){const $=te[I];if($.location>=0){let xe=z[I];if(xe===void 0&&(I==="instanceMatrix"&&W.instanceMatrix&&(xe=W.instanceMatrix),I==="instanceColor"&&W.instanceColor&&(xe=W.instanceColor)),xe!==void 0){const K=xe.normalized,le=xe.itemSize,Se=t.get(xe);if(Se===void 0)continue;const Oe=Se.buffer,De=Se.type,Re=Se.bytesPerElement,ct=r.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||xe.gpuType===bg);if(xe.isInterleavedBufferAttribute){const rt=xe.data,re=rt.stride,Nt=xe.offset;if(rt.isInstancedInterleavedBuffer){for(let et=0;et<$.locationSize;et++)G($.location+et,rt.meshPerAttribute);W.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<$.locationSize;et++)P($.location+et);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let et=0;et<$.locationSize;et++)L($.location+et,le/$.locationSize,De,K,re*Re,(Nt+le/$.locationSize*et)*Re,ct)}else{if(xe.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)G($.location+rt,xe.meshPerAttribute);W.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let rt=0;rt<$.locationSize;rt++)P($.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let rt=0;rt<$.locationSize;rt++)L($.location+rt,le/$.locationSize,De,K,le*Re,le/$.locationSize*rt*Re,ct)}}else if(Z!==void 0){const K=Z[I];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv($.location,K);break;case 3:s.vertexAttrib3fv($.location,K);break;case 4:s.vertexAttrib4fv($.location,K);break;default:s.vertexAttrib1fv($.location,K)}}}}H()}function me(){pe();for(const W in u){const V=u[W];for(const oe in V){const ee=V[oe];for(const z in ee)E(ee[z].object),delete ee[z];delete V[oe]}delete u[W]}}function A(W){if(u[W.id]===void 0)return;const V=u[W.id];for(const oe in V){const ee=V[oe];for(const z in ee)E(ee[z].object),delete ee[z];delete V[oe]}delete u[W.id]}function U(W){for(const V in u){const oe=u[V];if(oe[W.id]===void 0)continue;const ee=oe[W.id];for(const z in ee)E(ee[z].object),delete ee[z];delete oe[W.id]}}function pe(){Q(),_=!0,p!==h&&(p=h,S(p.object))}function Q(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:pe,resetDefaultState:Q,dispose:me,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:P,disableUnusedAttributes:H}}function eM(s,e,t,r){const a=r.isWebGL2;let l;function f(_){l=_}function u(_,g){s.drawArrays(l,_,g),t.update(g,l,1)}function h(_,g,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,_,g,y),t.update(g,l,y)}function p(_,g,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(_[E],g[E]);else{S.multiDrawArraysWEBGL(l,_,0,g,0,y);let E=0;for(let w=0;w<y;w++)E+=g[w];t.update(E,l,1)}}this.setMode=f,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function tM(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,P=f||e.has("OES_texture_float"),G=R&&P,H=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:N,vertexTextures:R,floatFragmentTextures:P,floatVertexTextures:G,maxSamples:H}}function nM(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new Ss,u=new At,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||a;return a=y,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!a||E===null||E.length===0||l&&!x)l?_(null):p();else{const N=l?0:r,R=N*4;let P=v.clippingState||null;h.value=P,P=_(E,y,R,S);for(let G=0;G!==R;++G)P[G]=t[G];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=h.value,E!==!0||x===null){const v=S+w*4,N=y.matrixWorldInverse;u.getNormalMatrix(N),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,P=S;R!==w;++R,P+=4)f.copy(g[R]).applyMatrix4(N,u),f.normal.toArray(x,P),x[P+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function iM(s){let e=new WeakMap;function t(f,u){return u===Xf?f.mapping=Do:u===qf&&(f.mapping=Io),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Xf||u===qf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new hx(h.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const u=f.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Kg extends qg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,u-=_*this.view.offsetY,h=u-_*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=4,Bm=[.125,.215,.35,.446,.526,.582],ws=20,bf=new Kg,Hm=new Et;let Pf=null,Lf=0,Df=0;const Ms=(1+Math.sqrt(5))/2,vo=1/Ms,Gm=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Ms,vo),new X(0,Ms,-vo),new X(vo,0,Ms),new X(-vo,0,Ms),new X(Ms,vo,0),new X(-Ms,vo,0)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Lf,Df),e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Do||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Sa,format:ki,colorSpace:Zr,depthBuffer:!1},a=Wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(l)),this._blurMaterial=sM(l,e,t)}return a}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,bf)}_sceneToCubeUV(e,t,r,a){const u=new ei(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Hm),_.toneMapping=Yr,_.autoClear=!1;const S=new Ro({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new rn(new Ji,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(Hm),w=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(u.up.set(0,h[v],0),u.lookAt(p[v],0,0)):N===1?(u.up.set(0,0,h[v]),u.lookAt(0,p[v],0)):(u.up.set(0,h[v],0),u.lookAt(0,0,p[v]));const R=this._cubeSize;ql(a,N*R,v>2?R:0,R,R),_.setRenderTarget(a),w&&_.render(E,u),_.render(e,u)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Do||e.mapping===Io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new rn(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;ql(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,bf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Gm[(a-1)%Gm.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,u){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new rn(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ws-1),w=l/E,x=isFinite(l)?1+Math.floor(_*w):ws;x>ws&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ws}`);const v=[];let N=0;for(let L=0;L<ws;++L){const J=L/w,me=Math.exp(-J*J/2);v.push(me),L===0?N+=me:L<x&&(N+=2*me)}for(let L=0;L<v.length;L++)v[L]=v[L]/N;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=f==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-r;const P=this._sizeLods[a],G=3*P*(a>R-Co?a-R+Co:0),H=4*(this._cubeSize-P);ql(t,G,H,3*P,2*P),h.setRenderTarget(t),h.render(g,bf)}}function rM(s){const e=[],t=[],r=[];let a=s;const l=s-Co+1+Bm.length;for(let f=0;f<l;f++){const u=Math.pow(2,a);t.push(u);let h=1/u;f>s-Co?h=Bm[f-s+Co-1]:f===0&&(h=0),r.push(h);const p=1/(u-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,w=3,x=2,v=1,N=new Float32Array(w*E*S),R=new Float32Array(x*E*S),P=new Float32Array(v*E*S);for(let H=0;H<S;H++){const L=H%3*2/3-1,J=H>2?0:-1,me=[L,J,0,L+2/3,J,0,L+2/3,J+1,0,L,J,0,L+2/3,J+1,0,L,J+1,0];N.set(me,w*E*H),R.set(y,x*E*H);const A=[H,H,H,H,H,H];P.set(A,v*E*H)}const G=new sn;G.setAttribute("position",new hi(N,w)),G.setAttribute("uv",new hi(R,x)),G.setAttribute("faceIndex",new hi(P,v)),e.push(G),a>Co&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Wm(s,e,t){const r=new Ps(s,e,t);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ql(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function sM(s,e,t){const r=new Float32Array(ws),a=new X(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function jm(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Xm(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(s){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const h=u.mapping,p=h===Xf||h===qf,_=h===Do||h===Io;if(p||_)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new Vm(s)),g=p?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(p&&g&&g.height>0||_&&g&&a(g)){t===null&&(t=new Vm(s));const y=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,y),u.addEventListener("dispose",l),y.texture}else return null}}}return u}function a(u){let h=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&h++;return h===p}function l(u){const h=u.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function aM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function lM(s,e,t,r){const a={},l=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const w=y.morphAttributes[E];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}y.removeEventListener("dispose",f),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function u(g,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,t.memory.geometries++),y}function h(g){const y=g.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const w=S[E];for(let x=0,v=w.length;x<v;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(g){const y=[],S=g.index,E=g.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let R=0,P=N.length;R<P;R+=3){const G=N[R+0],H=N[R+1],L=N[R+2];y.push(G,H,H,L,L,G)}}else if(E!==void 0){const N=E.array;w=E.version;for(let R=0,P=N.length/3-1;R<P;R+=3){const G=R+0,H=R+1,L=R+2;y.push(G,H,H,L,L,G)}}else return;const x=new(Og(y)?jg:Wg)(y,1);x.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:u,update:h,getWireframeAttribute:_}}function cM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let u,h;function p(S){u=S.type,h=S.bytesPerElement}function _(S,E){s.drawElements(l,E,u,S*h),t.update(E,l,1)}function g(S,E,w){if(w===0)return;let x,v;if(a)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](l,E,u,S*h,w),t.update(E,l,w)}function y(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<w;v++)this.render(S[v]/h,E[v]);else{x.multiDrawElementsWEBGL(l,E,0,u,S,0,w);let v=0;for(let N=0;N<w;N++)v+=E[N];t.update(v,l,1)}}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=y}function uM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,u){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function fM(s,e){return s[0]-e[0]}function dM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hM(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new $t,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function h(p,_,g){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=E!==void 0?E.length:0;let x=l.get(_);if(x===void 0||x.count!==w){let Q=function(){U.dispose(),l.delete(_),_.removeEventListener("dispose",Q)};var S=Q;x!==void 0&&x.texture.dispose();const v=_.morphAttributes.position!==void 0,N=_.morphAttributes.normal!==void 0,R=_.morphAttributes.color!==void 0,P=_.morphAttributes.position||[],G=_.morphAttributes.normal||[],H=_.morphAttributes.color||[];let L=0;v===!0&&(L=1),N===!0&&(L=2),R===!0&&(L=3);let J=_.attributes.position.count*L,me=1;J>e.maxTextureSize&&(me=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const A=new Float32Array(J*me*4*w),U=new Hg(A,J,me,w);U.type=gr,U.needsUpdate=!0;const pe=L*4;for(let W=0;W<w;W++){const V=P[W],oe=G[W],ee=H[W],z=J*me*4*W;for(let te=0;te<V.count;te++){const Z=te*pe;v===!0&&(f.fromBufferAttribute(V,te),A[z+Z+0]=f.x,A[z+Z+1]=f.y,A[z+Z+2]=f.z,A[z+Z+3]=0),N===!0&&(f.fromBufferAttribute(oe,te),A[z+Z+4]=f.x,A[z+Z+5]=f.y,A[z+Z+6]=f.z,A[z+Z+7]=0),R===!0&&(f.fromBufferAttribute(ee,te),A[z+Z+8]=f.x,A[z+Z+9]=f.y,A[z+Z+10]=f.z,A[z+Z+11]=ee.itemSize===4?f.w:1)}}x={count:w,texture:U,size:new vt(J,me)},l.set(_,x),_.addEventListener("dispose",Q)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let v=0;for(let R=0;R<y.length;R++)v+=y[R];const N=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",N),g.getUniforms().setValue(s,"morphTargetInfluences",y)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let w=r[_.id];if(w===void 0||w.length!==E){w=[];for(let P=0;P<E;P++)w[P]=[P,0];r[_.id]=w}for(let P=0;P<E;P++){const G=w[P];G[0]=P,G[1]=y[P]}w.sort(dM);for(let P=0;P<8;P++)P<E&&w[P][1]?(u[P][0]=w[P][0],u[P][1]=w[P][1]):(u[P][0]=Number.MAX_SAFE_INTEGER,u[P][1]=0);u.sort(fM);const x=_.morphAttributes.position,v=_.morphAttributes.normal;let N=0;for(let P=0;P<8;P++){const G=u[P],H=G[0],L=G[1];H!==Number.MAX_SAFE_INTEGER&&L?(x&&_.getAttribute("morphTarget"+P)!==x[H]&&_.setAttribute("morphTarget"+P,x[H]),v&&_.getAttribute("morphNormal"+P)!==v[H]&&_.setAttribute("morphNormal"+P,v[H]),a[P]=L,N+=L):(x&&_.hasAttribute("morphTarget"+P)===!0&&_.deleteAttribute("morphTarget"+P),v&&_.hasAttribute("morphNormal"+P)===!0&&_.deleteAttribute("morphNormal"+P),a[P]=0)}const R=_.morphTargetsRelative?1:1-N;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function pM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return g}function f(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class Qg extends Xn{constructor(e,t,r,a,l,f,u,h,p,_){if(_=_!==void 0?_:Rs,_!==Rs&&_!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Rs&&(r=Xr),r===void 0&&_===No&&(r=As),super(null,a,l,f,u,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Wn,this.minFilter=h!==void 0?h:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zg=new Xn,Jg=new Qg(1,1);Jg.compareFunction=Fg;const e0=new Hg,t0=new Kv,n0=new Yg,qm=[],Ym=[],$m=new Float32Array(16),Km=new Float32Array(9),Qm=new Float32Array(4);function Oo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=qm[a];if(l===void 0&&(l=new Float32Array(a),qm[a]=l),e!==0){r.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,s[f].toArray(l,u)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function yc(s,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Qm.set(r),s.uniformMatrix2fv(this.addr,!1,Qm),pn(t,r)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),pn(t,r)}}function SM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;$m.set(r),s.uniformMatrix4fv(this.addr,!1,$m),pn(t,r)}}function MM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function AM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Jg:Zg;t.setTexture2D(e||l,a)}function LM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||t0,a)}function DM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||n0,a)}function IM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||e0,a)}function NM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return IM}}function UM(s,e){s.uniform1fv(this.addr,e)}function FM(s,e){const t=Oo(e,this.size,2);s.uniform2fv(this.addr,t)}function OM(s,e){const t=Oo(e,this.size,3);s.uniform3fv(this.addr,t)}function zM(s,e){const t=Oo(e,this.size,4);s.uniform4fv(this.addr,t)}function kM(s,e){const t=Oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function BM(s,e){const t=Oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HM(s,e){const t=Oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GM(s,e){s.uniform1iv(this.addr,e)}function VM(s,e){s.uniform2iv(this.addr,e)}function WM(s,e){s.uniform3iv(this.addr,e)}function jM(s,e){s.uniform4iv(this.addr,e)}function XM(s,e){s.uniform1uiv(this.addr,e)}function qM(s,e){s.uniform2uiv(this.addr,e)}function YM(s,e){s.uniform3uiv(this.addr,e)}function $M(s,e){s.uniform4uiv(this.addr,e)}function KM(s,e,t){const r=this.cache,a=e.length,l=yc(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Zg,l[f])}function QM(s,e,t){const r=this.cache,a=e.length,l=yc(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||t0,l[f])}function ZM(s,e,t){const r=this.cache,a=e.length,l=yc(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||n0,l[f])}function JM(s,e,t){const r=this.cache,a=e.length,l=yc(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||e0,l[f])}function eE(s){switch(s){case 5126:return UM;case 35664:return FM;case 35665:return OM;case 35666:return zM;case 35674:return kM;case 35675:return BM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return VM;case 35668:case 35672:return WM;case 35669:case 35673:return jM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class tE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class nE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eE(t.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const u=a[l];u.setValue(e,t[u.id],r)}}}const If=/(\w+)(\])?(\[|\.)?/g;function Zm(s,e){s.seq.push(e),s.map[e.id]=e}function rE(s,e,t){const r=s.name,a=r.length;for(If.lastIndex=0;;){const l=If.exec(r),f=If.lastIndex;let u=l[1];const h=l[2]==="]",p=l[3];if(h&&(u=u|0),p===void 0||p==="["&&f+2===a){Zm(t,p===void 0?new tE(u,s,e):new nE(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new iE(u),Zm(t,g)),t=g}}}class lc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);rE(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const u=t[l],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Jm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const sE=37297;let oE=0;function aE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return r.join(`
`)}function lE(s){const e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(s);let r;switch(e===t?r="":e===dc&&t===fc?r="LinearDisplayP3ToLinearSRGB":e===fc&&t===dc&&(r="LinearSRGBToLinearDisplayP3"),s){case Zr:case xc:return[r,"LinearTransferOETF"];case Ki:case ad:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function eg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+aE(s.getShaderSource(e),f)}else return a}function cE(s,e){const t=lE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uE(s,e){let t;switch(e){case xv:t="Linear";break;case yv:t="Reinhard";break;case Sv:t="OptimizedCineon";break;case Mv:t="ACESFilmic";break;case wv:t="AgX";break;case Tv:t="Neutral";break;case Ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function dE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function hE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:u}}return t}function bo(s){return s!==""}function tg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(s){return s.replace(mE,_E)}const gE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _E(s,e){let t=Tt[e];if(t===void 0){const r=gE.get(e);if(r!==void 0)t=Tt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jf(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(s){return s.replace(vE,xE)}function xE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function rg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function SE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Do:case Io:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ME(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function wE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function TE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const h=yE(t),p=SE(t),_=ME(t),g=EE(t),y=wE(t),S=t.isWebGL2?"":fE(t),E=dE(t),w=hE(l),x=a.createProgram();let v,N,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bo).join(`
`),v.length>0&&(v+=`
`),N=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bo).join(`
`),N.length>0&&(N+=`
`)):(v=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),N=[S,rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Yr?uE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,cE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),f=Jf(f),f=tg(f,t),f=ng(f,t),u=Jf(u),u=tg(u,t),u=ng(u,t),f=ig(f),u=ig(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const P=R+v+f,G=R+N+u,H=Jm(a,a.VERTEX_SHADER,P),L=Jm(a,a.FRAGMENT_SHADER,G);a.attachShader(x,H),a.attachShader(x,L),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function J(pe){if(s.debug.checkShaderErrors){const Q=a.getProgramInfoLog(x).trim(),W=a.getShaderInfoLog(H).trim(),V=a.getShaderInfoLog(L).trim();let oe=!0,ee=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,H,L);else{const z=eg(a,H,"vertex"),te=eg(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+pe.name+`
Material Type: `+pe.type+`

Program Info Log: `+Q+`
`+z+`
`+te)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(W===""||V==="")&&(ee=!1);ee&&(pe.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:W,prefix:v},fragmentShader:{log:V,prefix:N}})}a.deleteShader(H),a.deleteShader(L),me=new lc(a,x),A=pE(a,x)}let me;this.getUniforms=function(){return me===void 0&&J(this),me};let A;this.getAttributes=function(){return A===void 0&&J(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(x,sE)),U},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=H,this.fragmentShader=L,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function bE(s,e,t,r,a,l,f){const u=new Gg,h=new RE,p=new Set,_=[],g=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return p.add(A),A===0?"uv":`uv${A}`}function v(A,U,pe,Q,W){const V=Q.fog,oe=W.geometry,ee=A.isMeshStandardMaterial?Q.environment:null,z=(A.isMeshStandardMaterial?t:e).get(A.envMap||ee),te=z&&z.mapping===vc?z.image.height:null,Z=w[A.type];A.precision!==null&&(E=a.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const I=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,$=I!==void 0?I.length:0;let xe=0;oe.morphAttributes.position!==void 0&&(xe=1),oe.morphAttributes.normal!==void 0&&(xe=2),oe.morphAttributes.color!==void 0&&(xe=3);let K,le,Se,Oe;if(Z){const dt=Qi[Z];K=dt.vertexShader,le=dt.fragmentShader}else K=A.vertexShader,le=A.fragmentShader,h.update(A),Se=h.getVertexShaderID(A),Oe=h.getFragmentShaderID(A);const De=s.getRenderTarget(),Re=W.isInstancedMesh===!0,ct=W.isBatchedMesh===!0,rt=!!A.map,re=!!A.matcap,Nt=!!z,et=!!A.aoMap,ut=!!A.lightMap,He=!!A.bumpMap,xt=!!A.normalMap,qe=!!A.displacementMap,pt=!!A.emissiveMap,Mt=!!A.metalnessMap,D=!!A.roughnessMap,T=A.anisotropy>0,he=A.clearcoat>0,_e=A.iridescence>0,Ae=A.sheen>0,Me=A.transmission>0,ft=T&&!!A.anisotropyMap,nt=he&&!!A.clearcoatMap,Ie=he&&!!A.clearcoatNormalMap,Ne=he&&!!A.clearcoatRoughnessMap,ze=_e&&!!A.iridescenceMap,be=_e&&!!A.iridescenceThicknessMap,It=Ae&&!!A.sheenColorMap,st=Ae&&!!A.sheenRoughnessMap,$e=!!A.specularMap,Ue=!!A.specularColorMap,Ge=!!A.specularIntensityMap,it=Me&&!!A.transmissionMap,Xe=Me&&!!A.thicknessMap,ye=!!A.gradientMap,O=!!A.alphaMap,ne=A.alphaTest>0,B=!!A.alphaHash,ge=!!A.extensions;let ve=Yr;A.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ve=s.toneMapping);const ke={isWebGL2:g,shaderID:Z,shaderType:A.type,shaderName:A.name,vertexShader:K,fragmentShader:le,defines:A.defines,customVertexShaderID:Se,customFragmentShaderID:Oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:ct,instancing:Re,instancingColor:Re&&W.instanceColor!==null,instancingMorph:Re&&W.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Zr,alphaToCoverage:!!A.alphaToCoverage,map:rt,matcap:re,envMap:Nt,envMapMode:Nt&&z.mapping,envMapCubeUVHeight:te,aoMap:et,lightMap:ut,bumpMap:He,normalMap:xt,displacementMap:S&&qe,emissiveMap:pt,normalMapObjectSpace:xt&&A.normalMapType===Fv,normalMapTangentSpace:xt&&A.normalMapType===od,metalnessMap:Mt,roughnessMap:D,anisotropy:T,anisotropyMap:ft,clearcoat:he,clearcoatMap:nt,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ne,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:be,sheen:Ae,sheenColorMap:It,sheenRoughnessMap:st,specularMap:$e,specularColorMap:Ue,specularIntensityMap:Ge,transmission:Me,transmissionMap:it,thicknessMap:Xe,gradientMap:ye,opaque:A.transparent===!1&&A.blending===Po&&A.alphaToCoverage===!1,alphaMap:O,alphaTest:ne,alphaHash:B,combine:A.combine,mapUv:rt&&x(A.map.channel),aoMapUv:et&&x(A.aoMap.channel),lightMapUv:ut&&x(A.lightMap.channel),bumpMapUv:He&&x(A.bumpMap.channel),normalMapUv:xt&&x(A.normalMap.channel),displacementMapUv:qe&&x(A.displacementMap.channel),emissiveMapUv:pt&&x(A.emissiveMap.channel),metalnessMapUv:Mt&&x(A.metalnessMap.channel),roughnessMapUv:D&&x(A.roughnessMap.channel),anisotropyMapUv:ft&&x(A.anisotropyMap.channel),clearcoatMapUv:nt&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:st&&x(A.sheenRoughnessMap.channel),specularMapUv:$e&&x(A.specularMap.channel),specularColorMapUv:Ue&&x(A.specularColorMap.channel),specularIntensityMapUv:Ge&&x(A.specularIntensityMap.channel),transmissionMapUv:it&&x(A.transmissionMap.channel),thicknessMapUv:Xe&&x(A.thicknessMap.channel),alphaMapUv:O&&x(A.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(xt||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!oe.attributes.uv&&(rt||O),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:W.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&pe.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:rt&&A.map.isVideoTexture===!0&&Bt.getTransfer(A.map.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===di,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:ge&&A.extensions.derivatives===!0,extensionFragDepth:ge&&A.extensions.fragDepth===!0,extensionDrawBuffers:ge&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&A.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ke.vertexUv1s=p.has(1),ke.vertexUv2s=p.has(2),ke.vertexUv3s=p.has(3),p.clear(),ke}function N(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const pe in A.defines)U.push(pe),U.push(A.defines[pe]);return A.isRawShaderMaterial===!1&&(R(U,A),P(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function R(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function P(A,U){u.disableAll(),U.isWebGL2&&u.enable(0),U.supportsVertexTextures&&u.enable(1),U.instancing&&u.enable(2),U.instancingColor&&u.enable(3),U.instancingMorph&&u.enable(4),U.matcap&&u.enable(5),U.envMap&&u.enable(6),U.normalMapObjectSpace&&u.enable(7),U.normalMapTangentSpace&&u.enable(8),U.clearcoat&&u.enable(9),U.iridescence&&u.enable(10),U.alphaTest&&u.enable(11),U.vertexColors&&u.enable(12),U.vertexAlphas&&u.enable(13),U.vertexUv1s&&u.enable(14),U.vertexUv2s&&u.enable(15),U.vertexUv3s&&u.enable(16),U.vertexTangents&&u.enable(17),U.anisotropy&&u.enable(18),U.alphaHash&&u.enable(19),U.batching&&u.enable(20),A.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.skinning&&u.enable(4),U.morphTargets&&u.enable(5),U.morphNormals&&u.enable(6),U.morphColors&&u.enable(7),U.premultipliedAlpha&&u.enable(8),U.shadowMapEnabled&&u.enable(9),U.useLegacyLights&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.alphaToCoverage&&u.enable(20),A.push(u.mask)}function G(A){const U=w[A.type];let pe;if(U){const Q=Qi[U];pe=cx.clone(Q.uniforms)}else pe=A.uniforms;return pe}function H(A,U){let pe;for(let Q=0,W=_.length;Q<W;Q++){const V=_[Q];if(V.cacheKey===U){pe=V,++pe.usedTimes;break}}return pe===void 0&&(pe=new TE(s,U,A,l),_.push(pe)),pe}function L(A){if(--A.usedTimes===0){const U=_.indexOf(A);_[U]=_[_.length-1],_.pop(),A.destroy()}}function J(A){h.remove(A)}function me(){h.dispose()}return{getParameters:v,getProgramCacheKey:N,getUniforms:G,acquireProgram:H,releaseProgram:L,releaseShaderCache:J,programs:_,dispose:me}}function PE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,u){s.get(l)[f]=u}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function LE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function og(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(g,y,S,E,w,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:w,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=w,v.group=x),e++,v}function u(g,y,S,E,w,x){const v=f(g,y,S,E,w,x);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,y,S,E,w,x){const v=f(g,y,S,E,w,x);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,y){t.length>1&&t.sort(g||LE),r.length>1&&r.sort(y||sg),a.length>1&&a.sort(y||sg)}function _(){for(let g=e,y=s.length;g<y;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:u,unshift:h,finish:_,sort:p}}function DE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new og,s.set(r,[f])):a>=l.length?(f=new og,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Et};break;case"SpotLight":t={position:new X,direction:new X,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function NE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let UE=0;function FE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OE(s,e){const t=new IE,r=NE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new X);const l=new X,f=new Gt,u=new Gt;function h(_,g){let y=0,S=0,E=0;for(let pe=0;pe<9;pe++)a.probe[pe].set(0,0,0);let w=0,x=0,v=0,N=0,R=0,P=0,G=0,H=0,L=0,J=0,me=0;_.sort(FE);const A=g===!0?Math.PI:1;for(let pe=0,Q=_.length;pe<Q;pe++){const W=_[pe],V=W.color,oe=W.intensity,ee=W.distance,z=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)y+=V.r*oe*A,S+=V.g*oe*A,E+=V.b*oe*A;else if(W.isLightProbe){for(let te=0;te<9;te++)a.probe[te].addScaledVector(W.sh.coefficients[te],oe);me++}else if(W.isDirectionalLight){const te=t.get(W);if(te.color.copy(W.color).multiplyScalar(W.intensity*A),W.castShadow){const Z=W.shadow,I=r.get(W);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,a.directionalShadow[w]=I,a.directionalShadowMap[w]=z,a.directionalShadowMatrix[w]=W.shadow.matrix,P++}a.directional[w]=te,w++}else if(W.isSpotLight){const te=t.get(W);te.position.setFromMatrixPosition(W.matrixWorld),te.color.copy(V).multiplyScalar(oe*A),te.distance=ee,te.coneCos=Math.cos(W.angle),te.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),te.decay=W.decay,a.spot[v]=te;const Z=W.shadow;if(W.map&&(a.spotLightMap[L]=W.map,L++,Z.updateMatrices(W),W.castShadow&&J++),a.spotLightMatrix[v]=Z.matrix,W.castShadow){const I=r.get(W);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,a.spotShadow[v]=I,a.spotShadowMap[v]=z,H++}v++}else if(W.isRectAreaLight){const te=t.get(W);te.color.copy(V).multiplyScalar(oe),te.halfWidth.set(W.width*.5,0,0),te.halfHeight.set(0,W.height*.5,0),a.rectArea[N]=te,N++}else if(W.isPointLight){const te=t.get(W);if(te.color.copy(W.color).multiplyScalar(W.intensity*A),te.distance=W.distance,te.decay=W.decay,W.castShadow){const Z=W.shadow,I=r.get(W);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,a.pointShadow[x]=I,a.pointShadowMap[x]=z,a.pointShadowMatrix[x]=W.shadow.matrix,G++}a.point[x]=te,x++}else if(W.isHemisphereLight){const te=t.get(W);te.skyColor.copy(W.color).multiplyScalar(oe*A),te.groundColor.copy(W.groundColor).multiplyScalar(oe*A),a.hemi[R]=te,R++}}N>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const U=a.hash;(U.directionalLength!==w||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==N||U.hemiLength!==R||U.numDirectionalShadows!==P||U.numPointShadows!==G||U.numSpotShadows!==H||U.numSpotMaps!==L||U.numLightProbes!==me)&&(a.directional.length=w,a.spot.length=v,a.rectArea.length=N,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=G,a.pointShadowMap.length=G,a.spotShadow.length=H,a.spotShadowMap.length=H,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=G,a.spotLightMatrix.length=H+L-J,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=J,a.numLightProbes=me,U.directionalLength=w,U.pointLength=x,U.spotLength=v,U.rectAreaLength=N,U.hemiLength=R,U.numDirectionalShadows=P,U.numPointShadows=G,U.numSpotShadows=H,U.numSpotMaps=L,U.numLightProbes=me,a.version=UE++)}function p(_,g){let y=0,S=0,E=0,w=0,x=0;const v=g.matrixWorldInverse;for(let N=0,R=_.length;N<R;N++){const P=_[N];if(P.isDirectionalLight){const G=a.directional[y];G.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(v),y++}else if(P.isSpotLight){const G=a.spot[E];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(v),G.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(v),E++}else if(P.isRectAreaLight){const G=a.rectArea[w];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(v),u.identity(),f.copy(P.matrixWorld),f.premultiply(v),u.extractRotation(f),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),G.halfWidth.applyMatrix4(u),G.halfHeight.applyMatrix4(u),w++}else if(P.isPointLight){const G=a.point[S];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(v),S++}else if(P.isHemisphereLight){const G=a.hemi[x];G.direction.setFromMatrixPosition(P.matrixWorld),G.direction.transformDirection(v),x++}}}return{setup:h,setupView:p,state:a}}function ag(s,e){const t=new OE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(g){r.push(g)}function u(g){a.push(g)}function h(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:u}}function zE(s,e){let t=new WeakMap;function r(l,f=0){const u=t.get(l);let h;return u===void 0?(h=new ag(s,e),t.set(l,[h])):f>=u.length?(h=new ag(s,e),u.push(h)):h=u[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class kE extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BE extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VE(s,e,t){let r=new cd;const a=new vt,l=new vt,f=new $t,u=new kE({depthPacking:Uv}),h=new BE,p={},_=t.maxTextureSize,g={[Qr]:jn,[jn]:Qr,[di]:di},y=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new sn;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new rn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rg;let v=this.type;this.render=function(H,L,J){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const me=s.getRenderTarget(),A=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),pe=s.state;pe.setBlending(qr),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const Q=v!==mr&&this.type===mr,W=v===mr&&this.type!==mr;for(let V=0,oe=H.length;V<oe;V++){const ee=H[V],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const te=z.getFrameExtents();if(a.multiply(te),l.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/te.x),a.x=l.x*te.x,z.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/te.y),a.y=l.y*te.y,z.mapSize.y=l.y)),z.map===null||Q===!0||W===!0){const I=this.type!==mr?{minFilter:Wn,magFilter:Wn}:{};z.map!==null&&z.map.dispose(),z.map=new Ps(a.x,a.y,I),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const Z=z.getViewportCount();for(let I=0;I<Z;I++){const $=z.getViewport(I);f.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),pe.viewport(f),z.updateMatrices(ee,I),r=z.getFrustum(),P(L,J,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===mr&&N(z,J),z.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(me,A,U)};function N(H,L){const J=e.update(w);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ps(a.x,a.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(L,null,J,y,w,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(L,null,J,S,w,null)}function R(H,L,J,me){let A=null;const U=J.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(U!==void 0)A=U;else if(A=J.isPointLight===!0?h:u,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const pe=A.uuid,Q=L.uuid;let W=p[pe];W===void 0&&(W={},p[pe]=W);let V=W[Q];V===void 0&&(V=A.clone(),W[Q]=V,L.addEventListener("dispose",G)),A=V}if(A.visible=L.visible,A.wireframe=L.wireframe,me===mr?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:g[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,J.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const pe=s.properties.get(A);pe.light=J}return A}function P(H,L,J,me,A){if(H.visible===!1)return;if(H.layers.test(L.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===mr)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,H.matrixWorld);const Q=e.update(H),W=H.material;if(Array.isArray(W)){const V=Q.groups;for(let oe=0,ee=V.length;oe<ee;oe++){const z=V[oe],te=W[z.materialIndex];if(te&&te.visible){const Z=R(H,te,me,A);H.onBeforeShadow(s,H,L,J,Q,Z,z),s.renderBufferDirect(J,null,Q,Z,H,z),H.onAfterShadow(s,H,L,J,Q,Z,z)}}}else if(W.visible){const V=R(H,W,me,A);H.onBeforeShadow(s,H,L,J,Q,V,null),s.renderBufferDirect(J,null,Q,V,H,null),H.onAfterShadow(s,H,L,J,Q,V,null)}}const pe=H.children;for(let Q=0,W=pe.length;Q<W;Q++)P(pe[Q],L,J,me,A)}function G(H){H.target.removeEventListener("dispose",G);for(const J in p){const me=p[J],A=H.target.uuid;A in me&&(me[A].dispose(),delete me[A])}}}function WE(s,e,t){const r=t.isWebGL2;function a(){let O=!1;const ne=new $t;let B=null;const ge=new $t(0,0,0,0);return{setMask:function(ve){B!==ve&&!O&&(s.colorMask(ve,ve,ve,ve),B=ve)},setLocked:function(ve){O=ve},setClear:function(ve,ke,dt,Rt,wt){wt===!0&&(ve*=Rt,ke*=Rt,dt*=Rt),ne.set(ve,ke,dt,Rt),ge.equals(ne)===!1&&(s.clearColor(ve,ke,dt,Rt),ge.copy(ne))},reset:function(){O=!1,B=null,ge.set(-1,0,0,0)}}}function l(){let O=!1,ne=null,B=null,ge=null;return{setTest:function(ve){ve?Re(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(ve){ne!==ve&&!O&&(s.depthMask(ve),ne=ve)},setFunc:function(ve){if(B!==ve){switch(ve){case uv:s.depthFunc(s.NEVER);break;case fv:s.depthFunc(s.ALWAYS);break;case dv:s.depthFunc(s.LESS);break;case cc:s.depthFunc(s.LEQUAL);break;case hv:s.depthFunc(s.EQUAL);break;case pv:s.depthFunc(s.GEQUAL);break;case mv:s.depthFunc(s.GREATER);break;case gv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}B=ve}},setLocked:function(ve){O=ve},setClear:function(ve){ge!==ve&&(s.clearDepth(ve),ge=ve)},reset:function(){O=!1,ne=null,B=null,ge=null}}}function f(){let O=!1,ne=null,B=null,ge=null,ve=null,ke=null,dt=null,Rt=null,wt=null;return{setTest:function(mt){O||(mt?Re(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(mt){ne!==mt&&!O&&(s.stencilMask(mt),ne=mt)},setFunc:function(mt,zt,ln){(B!==mt||ge!==zt||ve!==ln)&&(s.stencilFunc(mt,zt,ln),B=mt,ge=zt,ve=ln)},setOp:function(mt,zt,ln){(ke!==mt||dt!==zt||Rt!==ln)&&(s.stencilOp(mt,zt,ln),ke=mt,dt=zt,Rt=ln)},setLocked:function(mt){O=mt},setClear:function(mt){wt!==mt&&(s.clearStencil(mt),wt=mt)},reset:function(){O=!1,ne=null,B=null,ge=null,ve=null,ke=null,dt=null,Rt=null,wt=null}}}const u=new a,h=new l,p=new f,_=new WeakMap,g=new WeakMap;let y={},S={},E=new WeakMap,w=[],x=null,v=!1,N=null,R=null,P=null,G=null,H=null,L=null,J=null,me=new Et(0,0,0),A=0,U=!1,pe=null,Q=null,W=null,V=null,oe=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=te>=2);let I=null,$={};const xe=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),le=new $t().fromArray(xe),Se=new $t().fromArray(K);function Oe(O,ne,B,ge){const ve=new Uint8Array(4),ke=s.createTexture();s.bindTexture(O,ke),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<B;dt++)r&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(ne,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ne+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return ke}const De={};De[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(De[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Re(s.DEPTH_TEST),h.setFunc(cc),qe(!1),pt(Hp),Re(s.CULL_FACE),He(qr);function Re(O){y[O]!==!0&&(s.enable(O),y[O]=!0)}function ct(O){y[O]!==!1&&(s.disable(O),y[O]=!1)}function rt(O,ne){return S[O]!==ne?(s.bindFramebuffer(O,ne),S[O]=ne,r&&(O===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=ne),O===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=ne)),!0):!1}function re(O,ne){let B=w,ge=!1;if(O){B=E.get(ne),B===void 0&&(B=[],E.set(ne,B));const ve=O.textures;if(B.length!==ve.length||B[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,dt=ve.length;ke<dt;ke++)B[ke]=s.COLOR_ATTACHMENT0+ke;B.length=ve.length,ge=!0}}else B[0]!==s.BACK&&(B[0]=s.BACK,ge=!0);if(ge)if(t.isWebGL2)s.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Nt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const et={[Es]:s.FUNC_ADD,[$_]:s.FUNC_SUBTRACT,[K_]:s.FUNC_REVERSE_SUBTRACT};if(r)et[jp]=s.MIN,et[Xp]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(et[jp]=O.MIN_EXT,et[Xp]=O.MAX_EXT)}const ut={[Q_]:s.ZERO,[Z_]:s.ONE,[J_]:s.SRC_COLOR,[Wf]:s.SRC_ALPHA,[sv]:s.SRC_ALPHA_SATURATE,[iv]:s.DST_COLOR,[tv]:s.DST_ALPHA,[ev]:s.ONE_MINUS_SRC_COLOR,[jf]:s.ONE_MINUS_SRC_ALPHA,[rv]:s.ONE_MINUS_DST_COLOR,[nv]:s.ONE_MINUS_DST_ALPHA,[ov]:s.CONSTANT_COLOR,[av]:s.ONE_MINUS_CONSTANT_COLOR,[lv]:s.CONSTANT_ALPHA,[cv]:s.ONE_MINUS_CONSTANT_ALPHA};function He(O,ne,B,ge,ve,ke,dt,Rt,wt,mt){if(O===qr){v===!0&&(ct(s.BLEND),v=!1);return}if(v===!1&&(Re(s.BLEND),v=!0),O!==Y_){if(O!==N||mt!==U){if((R!==Es||H!==Es)&&(s.blendEquation(s.FUNC_ADD),R=Es,H=Es),mt)switch(O){case Po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}P=null,G=null,L=null,J=null,me.set(0,0,0),A=0,N=O,U=mt}return}ve=ve||ne,ke=ke||B,dt=dt||ge,(ne!==R||ve!==H)&&(s.blendEquationSeparate(et[ne],et[ve]),R=ne,H=ve),(B!==P||ge!==G||ke!==L||dt!==J)&&(s.blendFuncSeparate(ut[B],ut[ge],ut[ke],ut[dt]),P=B,G=ge,L=ke,J=dt),(Rt.equals(me)===!1||wt!==A)&&(s.blendColor(Rt.r,Rt.g,Rt.b,wt),me.copy(Rt),A=wt),N=O,U=!1}function xt(O,ne){O.side===di?ct(s.CULL_FACE):Re(s.CULL_FACE);let B=O.side===jn;ne&&(B=!B),qe(B),O.blending===Po&&O.transparent===!1?He(qr):He(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),u.setMask(O.colorWrite);const ge=O.stencilWrite;p.setTest(ge),ge&&(p.setMask(O.stencilWriteMask),p.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),p.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),D(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){pe!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),pe=O)}function pt(O){O!==j_?(Re(s.CULL_FACE),O!==Q&&(O===Hp?s.cullFace(s.BACK):O===X_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),Q=O}function Mt(O){O!==W&&(z&&s.lineWidth(O),W=O)}function D(O,ne,B){O?(Re(s.POLYGON_OFFSET_FILL),(V!==ne||oe!==B)&&(s.polygonOffset(ne,B),V=ne,oe=B)):ct(s.POLYGON_OFFSET_FILL)}function T(O){O?Re(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function he(O){O===void 0&&(O=s.TEXTURE0+ee-1),I!==O&&(s.activeTexture(O),I=O)}function _e(O,ne,B){B===void 0&&(I===null?B=s.TEXTURE0+ee-1:B=I);let ge=$[B];ge===void 0&&(ge={type:void 0,texture:void 0},$[B]=ge),(ge.type!==O||ge.texture!==ne)&&(I!==B&&(s.activeTexture(B),I=B),s.bindTexture(O,ne||De[O]),ge.type=O,ge.texture=ne)}function Ae(){const O=$[I];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(O){le.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Ge(O){Se.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Se.copy(O))}function it(O,ne){let B=g.get(ne);B===void 0&&(B=new WeakMap,g.set(ne,B));let ge=B.get(O);ge===void 0&&(ge=s.getUniformBlockIndex(ne,O.name),B.set(O,ge))}function Xe(O,ne){const ge=g.get(ne).get(O);_.get(ne)!==ge&&(s.uniformBlockBinding(ne,ge,O.__bindingPointIndex),_.set(ne,ge))}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},I=null,$={},S={},E=new WeakMap,w=[],x=null,v=!1,N=null,R=null,P=null,G=null,H=null,L=null,J=null,me=new Et(0,0,0),A=0,U=!1,pe=null,Q=null,W=null,V=null,oe=null,le.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:Re,disable:ct,bindFramebuffer:rt,drawBuffers:re,useProgram:Nt,setBlending:He,setMaterial:xt,setFlipSided:qe,setCullFace:pt,setLineWidth:Mt,setPolygonOffset:D,setScissorTest:T,activeTexture:he,bindTexture:_e,unbindTexture:Ae,compressedTexImage2D:Me,compressedTexImage3D:ft,texImage2D:st,texImage3D:$e,updateUBOMapping:it,uniformBlockBinding:Xe,texStorage2D:be,texStorage3D:It,texSubImage2D:nt,texSubImage3D:Ie,compressedTexSubImage2D:Ne,compressedTexSubImage3D:ze,scissor:Ue,viewport:Ge,reset:ye}}function jE(s,e,t,r,a,l,f){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new vt,g=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return E?new OffscreenCanvas(D,T):mc("canvas")}function x(D,T,he,_e){let Ae=1;const Me=Mt(D);if((Me.width>_e||Me.height>_e)&&(Ae=_e/Math.max(Me.width,Me.height)),Ae<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ft=T?Zf:Math.floor,nt=ft(Ae*Me.width),Ie=ft(Ae*Me.height);y===void 0&&(y=w(nt,Ie));const Ne=he?w(nt,Ie):y;return Ne.width=nt,Ne.height=Ie,Ne.getContext("2d").drawImage(D,0,0,nt,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+nt+"x"+Ie+")."),Ne}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),D;return D}function v(D){const T=Mt(D);return Sm(T.width)&&Sm(T.height)}function N(D){return u?!1:D.wrapS!==zi||D.wrapT!==zi||D.minFilter!==Wn&&D.minFilter!==Jn}function R(D,T){return D.generateMipmaps&&T&&D.minFilter!==Wn&&D.minFilter!==Jn}function P(D){s.generateMipmap(D)}function G(D,T,he,_e,Ae=!1){if(u===!1)return T;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Me=T;if(T===s.RED&&(he===s.FLOAT&&(Me=s.R32F),he===s.HALF_FLOAT&&(Me=s.R16F),he===s.UNSIGNED_BYTE&&(Me=s.R8)),T===s.RED_INTEGER&&(he===s.UNSIGNED_BYTE&&(Me=s.R8UI),he===s.UNSIGNED_SHORT&&(Me=s.R16UI),he===s.UNSIGNED_INT&&(Me=s.R32UI),he===s.BYTE&&(Me=s.R8I),he===s.SHORT&&(Me=s.R16I),he===s.INT&&(Me=s.R32I)),T===s.RG&&(he===s.FLOAT&&(Me=s.RG32F),he===s.HALF_FLOAT&&(Me=s.RG16F),he===s.UNSIGNED_BYTE&&(Me=s.RG8)),T===s.RG_INTEGER&&(he===s.UNSIGNED_BYTE&&(Me=s.RG8UI),he===s.UNSIGNED_SHORT&&(Me=s.RG16UI),he===s.UNSIGNED_INT&&(Me=s.RG32UI),he===s.BYTE&&(Me=s.RG8I),he===s.SHORT&&(Me=s.RG16I),he===s.INT&&(Me=s.RG32I)),T===s.RGBA){const ft=Ae?uc:Bt.getTransfer(_e);he===s.FLOAT&&(Me=s.RGBA32F),he===s.HALF_FLOAT&&(Me=s.RGBA16F),he===s.UNSIGNED_BYTE&&(Me=ft===Xt?s.SRGB8_ALPHA8:s.RGBA8),he===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),he===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function H(D,T,he){return R(D,he)===!0||D.isFramebufferTexture&&D.minFilter!==Wn&&D.minFilter!==Jn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){return D===Wn||D===qp||D===fa?s.NEAREST:s.LINEAR}function J(D){const T=D.target;T.removeEventListener("dispose",J),A(T),T.isVideoTexture&&g.delete(T)}function me(D){const T=D.target;T.removeEventListener("dispose",me),pe(T)}function A(D){const T=r.get(D);if(T.__webglInit===void 0)return;const he=D.source,_e=S.get(he);if(_e){const Ae=_e[T.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&U(D),Object.keys(_e).length===0&&S.delete(he)}r.remove(D)}function U(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const he=D.source,_e=S.get(he);delete _e[T.__cacheKey],f.memory.textures--}function pe(D){const T=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Ae=0;Ae<T.__webglFramebuffer[_e].length;Ae++)s.deleteFramebuffer(T.__webglFramebuffer[_e][Ae]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const he=D.textures;for(let _e=0,Ae=he.length;_e<Ae;_e++){const Me=r.get(he[_e]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),f.memory.textures--),r.remove(he[_e])}r.remove(D)}let Q=0;function W(){Q=0}function V(){const D=Q;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),Q+=1,D}function oe(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ee(D,T){const he=r.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&he.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(he,D,T);return}}t.bindTexture(s.TEXTURE_2D,he.__webglTexture,s.TEXTURE0+T)}function z(D,T){const he=r.get(D);if(D.version>0&&he.__version!==D.version){Se(he,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,he.__webglTexture,s.TEXTURE0+T)}function te(D,T){const he=r.get(D);if(D.version>0&&he.__version!==D.version){Se(he,D,T);return}t.bindTexture(s.TEXTURE_3D,he.__webglTexture,s.TEXTURE0+T)}function Z(D,T){const he=r.get(D);if(D.version>0&&he.__version!==D.version){Oe(he,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture,s.TEXTURE0+T)}const I={[Yf]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[$f]:s.MIRRORED_REPEAT},$={[Wn]:s.NEAREST,[qp]:s.NEAREST_MIPMAP_NEAREST,[fa]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},xe={[Ov]:s.NEVER,[Vv]:s.ALWAYS,[zv]:s.LESS,[Fg]:s.LEQUAL,[kv]:s.EQUAL,[Gv]:s.GEQUAL,[Bv]:s.GREATER,[Hv]:s.NOTEQUAL};function K(D,T,he){if(T.type===gr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Jn||T.magFilter===tf||T.magFilter===fa||T.magFilter===Ts||T.minFilter===Jn||T.minFilter===tf||T.minFilter===fa||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),he?(s.texParameteri(D,s.TEXTURE_WRAP_S,I[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,I[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,I[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,$[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,$[T.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==zi||T.wrapT!==zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L(T.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L(T.minFilter)),T.minFilter!==Wn&&T.minFilter!==Jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wn||T.minFilter!==fa&&T.minFilter!==Ts||T.type===gr&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===Sa&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const _e=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(D,T){let he=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",J));const _e=T.source;let Ae=S.get(_e);Ae===void 0&&(Ae={},S.set(_e,Ae));const Me=oe(T);if(Me!==D.__cacheKey){Ae[Me]===void 0&&(Ae[Me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,he=!0),Ae[Me].usedTimes++;const ft=Ae[D.__cacheKey];ft!==void 0&&(Ae[D.__cacheKey].usedTimes--,ft.usedTimes===0&&U(T)),D.__cacheKey=Me,D.__webglTexture=Ae[Me].texture}return he}function Se(D,T,he){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const Ae=le(D,T),Me=T.source;t.bindTexture(_e,D.__webglTexture,s.TEXTURE0+he);const ft=r.get(Me);if(Me.version!==ft.__version||Ae===!0){t.activeTexture(s.TEXTURE0+he);const nt=Bt.getPrimaries(Bt.workingColorSpace),Ie=T.colorSpace===jr?null:Bt.getPrimaries(T.colorSpace),Ne=T.colorSpace===jr||nt===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ze=N(T)&&v(T.image)===!1;let be=x(T.image,ze,!1,a.maxTextureSize);be=pt(T,be);const It=v(be)||u,st=l.convert(T.format,T.colorSpace);let $e=l.convert(T.type),Ue=G(T.internalFormat,st,$e,T.colorSpace,T.isVideoTexture);K(_e,T,It);let Ge;const it=T.mipmaps,Xe=u&&T.isVideoTexture!==!0&&Ue!==Ug,ye=ft.__version===void 0||Ae===!0,O=Me.dataReady,ne=H(T,be,It);if(T.isDepthTexture)Ue=s.DEPTH_COMPONENT,u?T.type===gr?Ue=s.DEPTH_COMPONENT32F:T.type===Xr?Ue=s.DEPTH_COMPONENT24:T.type===As?Ue=s.DEPTH24_STENCIL8:Ue=s.DEPTH_COMPONENT16:T.type===gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Rs&&Ue===s.DEPTH_COMPONENT&&T.type!==sd&&T.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Xr,$e=l.convert(T.type)),T.format===No&&Ue===s.DEPTH_COMPONENT&&(Ue=s.DEPTH_STENCIL,T.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=As,$e=l.convert(T.type))),ye&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,Ue,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Ue,be.width,be.height,0,st,$e,null));else if(T.isDataTexture)if(it.length>0&&It){Xe&&ye&&t.texStorage2D(s.TEXTURE_2D,ne,Ue,it[0].width,it[0].height);for(let B=0,ge=it.length;B<ge;B++)Ge=it[B],Xe?O&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,Ge.width,Ge.height,st,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,B,Ue,Ge.width,Ge.height,0,st,$e,Ge.data);T.generateMipmaps=!1}else Xe?(ye&&t.texStorage2D(s.TEXTURE_2D,ne,Ue,be.width,be.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,st,$e,be.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,be.width,be.height,0,st,$e,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Ue,it[0].width,it[0].height,be.depth);for(let B=0,ge=it.length;B<ge;B++)Ge=it[B],T.format!==ki?st!==null?Xe?O&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,Ge.width,Ge.height,be.depth,st,Ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,Ue,Ge.width,Ge.height,be.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,Ge.width,Ge.height,be.depth,st,$e,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,B,Ue,Ge.width,Ge.height,be.depth,0,st,$e,Ge.data)}else{Xe&&ye&&t.texStorage2D(s.TEXTURE_2D,ne,Ue,it[0].width,it[0].height);for(let B=0,ge=it.length;B<ge;B++)Ge=it[B],T.format!==ki?st!==null?Xe?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,Ge.width,Ge.height,st,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,B,Ue,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?O&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,Ge.width,Ge.height,st,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,B,Ue,Ge.width,Ge.height,0,st,$e,Ge.data)}else if(T.isDataArrayTexture)Xe?(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Ue,be.width,be.height,be.depth),O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,st,$e,be.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,be.width,be.height,be.depth,0,st,$e,be.data);else if(T.isData3DTexture)Xe?(ye&&t.texStorage3D(s.TEXTURE_3D,ne,Ue,be.width,be.height,be.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,st,$e,be.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,be.width,be.height,be.depth,0,st,$e,be.data);else if(T.isFramebufferTexture){if(ye)if(Xe)t.texStorage2D(s.TEXTURE_2D,ne,Ue,be.width,be.height);else{let B=be.width,ge=be.height;for(let ve=0;ve<ne;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ue,B,ge,0,st,$e,null),B>>=1,ge>>=1}}else if(it.length>0&&It){if(Xe&&ye){const B=Mt(it[0]);t.texStorage2D(s.TEXTURE_2D,ne,Ue,B.width,B.height)}for(let B=0,ge=it.length;B<ge;B++)Ge=it[B],Xe?O&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,st,$e,Ge):t.texImage2D(s.TEXTURE_2D,B,Ue,st,$e,Ge);T.generateMipmaps=!1}else if(Xe){if(ye){const B=Mt(be);t.texStorage2D(s.TEXTURE_2D,ne,Ue,B.width,B.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,st,$e,be)}else t.texImage2D(s.TEXTURE_2D,0,Ue,st,$e,be);R(T,It)&&P(_e),ft.__version=Me.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Oe(D,T,he){if(T.image.length!==6)return;const _e=le(D,T),Ae=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+he);const Me=r.get(Ae);if(Ae.version!==Me.__version||_e===!0){t.activeTexture(s.TEXTURE0+he);const ft=Bt.getPrimaries(Bt.workingColorSpace),nt=T.colorSpace===jr?null:Bt.getPrimaries(T.colorSpace),Ie=T.colorSpace===jr||ft===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,be=[];for(let B=0;B<6;B++)!Ne&&!ze?be[B]=x(T.image[B],!1,!0,a.maxCubemapSize):be[B]=ze?T.image[B].image:T.image[B],be[B]=pt(T,be[B]);const It=be[0],st=v(It)||u,$e=l.convert(T.format,T.colorSpace),Ue=l.convert(T.type),Ge=G(T.internalFormat,$e,Ue,T.colorSpace),it=u&&T.isVideoTexture!==!0,Xe=Me.__version===void 0||_e===!0,ye=Ae.dataReady;let O=H(T,It,st);K(s.TEXTURE_CUBE_MAP,T,st);let ne;if(Ne){it&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ge,It.width,It.height);for(let B=0;B<6;B++){ne=be[B].mipmaps;for(let ge=0;ge<ne.length;ge++){const ve=ne[ge];T.format!==ki?$e!==null?it?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge,0,0,ve.width,ve.height,$e,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge,Ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge,0,0,ve.width,ve.height,$e,Ue,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge,Ge,ve.width,ve.height,0,$e,Ue,ve.data)}}}else{if(ne=T.mipmaps,it&&Xe){ne.length>0&&O++;const B=Mt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ge,B.width,B.height)}for(let B=0;B<6;B++)if(ze){it?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,be[B].width,be[B].height,$e,Ue,be[B].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ge,be[B].width,be[B].height,0,$e,Ue,be[B].data);for(let ge=0;ge<ne.length;ge++){const ke=ne[ge].image[B].image;it?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge+1,0,0,ke.width,ke.height,$e,Ue,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge+1,Ge,ke.width,ke.height,0,$e,Ue,ke.data)}}else{it?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,$e,Ue,be[B]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ge,$e,Ue,be[B]);for(let ge=0;ge<ne.length;ge++){const ve=ne[ge];it?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge+1,0,0,$e,Ue,ve.image[B]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge+1,Ge,$e,Ue,ve.image[B])}}}R(T,st)&&P(s.TEXTURE_CUBE_MAP),Me.__version=Ae.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function De(D,T,he,_e,Ae,Me){const ft=l.convert(he.format,he.colorSpace),nt=l.convert(he.type),Ie=G(he.internalFormat,ft,nt,he.colorSpace);if(!r.get(T).__hasExternalTextures){const ze=Math.max(1,T.width>>Me),be=Math.max(1,T.height>>Me);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,Me,Ie,ze,be,T.depth,0,ft,nt,null):t.texImage2D(Ae,Me,Ie,ze,be,0,ft,nt,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Ae,r.get(he).__webglTexture,0,He(T)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Ae,r.get(he).__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(D,T,he){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let _e=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(he||xt(T)){const Ae=T.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===gr?_e=s.DEPTH_COMPONENT32F:Ae.type===Xr&&(_e=s.DEPTH_COMPONENT24));const Me=He(T);xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,_e,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,_e,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const _e=He(T);he&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const _e=T.textures;for(let Ae=0;Ae<_e.length;Ae++){const Me=_e[Ae],ft=l.convert(Me.format,Me.colorSpace),nt=l.convert(Me.type),Ie=G(Me.internalFormat,ft,nt,Me.colorSpace),Ne=He(T);he&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ie,T.width,T.height):xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,Ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ee(T.depthTexture,0);const _e=r.get(T.depthTexture).__webglTexture,Ae=He(T);if(T.depthTexture.format===Rs)xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===No)xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function rt(D){const T=r.get(D),he=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(he)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,D)}else if(he){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Re(T.__webglDepthbuffer[_e],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Re(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(D,T,he){const _e=r.get(D);T!==void 0&&De(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),he!==void 0&&rt(D)}function Nt(D){const T=D.texture,he=r.get(D),_e=r.get(T);D.addEventListener("dispose",me);const Ae=D.textures,Me=D.isWebGLCubeRenderTarget===!0,ft=Ae.length>1,nt=v(D)||u;if(ft||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,f.memory.textures++),Me){he.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(u&&T.mipmaps&&T.mipmaps.length>0){he.__webglFramebuffer[Ie]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)he.__webglFramebuffer[Ie][Ne]=s.createFramebuffer()}else he.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){he.__webglFramebuffer=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)he.__webglFramebuffer[Ie]=s.createFramebuffer()}else he.__webglFramebuffer=s.createFramebuffer();if(ft)if(a.drawBuffers)for(let Ie=0,Ne=Ae.length;Ie<Ne;Ie++){const ze=r.get(Ae[Ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&xt(D)===!1){he.__webglMultisampledFramebuffer=s.createFramebuffer(),he.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ae.length;Ie++){const Ne=Ae[Ie];he.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);const ze=l.convert(Ne.format,Ne.colorSpace),be=l.convert(Ne.type),It=G(Ne.internalFormat,ze,be,Ne.colorSpace,D.isXRRenderTarget===!0),st=He(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,It,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(he.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(he.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),K(s.TEXTURE_CUBE_MAP,T,nt);for(let Ie=0;Ie<6;Ie++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)De(he.__webglFramebuffer[Ie][Ne],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ne);else De(he.__webglFramebuffer[Ie],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);R(T,nt)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ft){for(let Ie=0,Ne=Ae.length;Ie<Ne;Ie++){const ze=Ae[Ie],be=r.get(ze);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),K(s.TEXTURE_2D,ze,nt),De(he.__webglFramebuffer,D,ze,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),R(ze,nt)&&P(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?Ie=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,_e.__webglTexture),K(Ie,T,nt),u&&T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)De(he.__webglFramebuffer[Ne],D,T,s.COLOR_ATTACHMENT0,Ie,Ne);else De(he.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Ie,0);R(T,nt)&&P(Ie),t.unbindTexture()}D.depthBuffer&&rt(D)}function et(D){const T=v(D)||u,he=D.textures;for(let _e=0,Ae=he.length;_e<Ae;_e++){const Me=he[_e];if(R(Me,T)){const ft=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,nt=r.get(Me).__webglTexture;t.bindTexture(ft,nt),P(ft),t.unbindTexture()}}}function ut(D){if(u&&D.samples>0&&xt(D)===!1){const T=D.textures,he=D.width,_e=D.height;let Ae=s.COLOR_BUFFER_BIT;const Me=[],ft=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=r.get(D),Ie=T.length>1;if(Ie)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){Me.push(s.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&Me.push(ft);const ze=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(ze===!1&&(D.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),Ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ne]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ft]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ft])),Ie){const be=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,he,_e,0,0,he,_e,Ae,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ne]);const ze=r.get(T[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function He(D){return Math.min(a.maxSamples,D.samples)}function xt(D){const T=r.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=f.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function pt(D,T){const he=D.colorSpace,_e=D.format,Ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Qf||he!==Zr&&he!==jr&&(Bt.getTransfer(he)===Xt?u===!1?e.has("EXT_sRGB")===!0&&_e===ki?(D.format=Qf,D.minFilter=Jn,D.generateMipmaps=!1):T=kg.sRGBToLinear(T):(_e!==ki||Ae!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",he)),T}function Mt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(_.width=D.naturalWidth||D.width,_.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(_.width=D.displayWidth,_.height=D.displayHeight):(_.width=D.width,_.height=D.height),_}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=xt}function XE(s,e,t){const r=t.isWebGL2;function a(l,f=jr){let u;const h=Bt.getTransfer(f);if(l===$r)return s.UNSIGNED_BYTE;if(l===Pg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Lg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===Av)return s.BYTE;if(l===Rv)return s.SHORT;if(l===sd)return s.UNSIGNED_SHORT;if(l===bg)return s.INT;if(l===Xr)return s.UNSIGNED_INT;if(l===gr)return s.FLOAT;if(l===Sa)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===Cv)return s.ALPHA;if(l===ki)return s.RGBA;if(l===bv)return s.LUMINANCE;if(l===Pv)return s.LUMINANCE_ALPHA;if(l===Rs)return s.DEPTH_COMPONENT;if(l===No)return s.DEPTH_STENCIL;if(l===Qf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===Lv)return s.RED;if(l===Dg)return s.RED_INTEGER;if(l===Dv)return s.RG;if(l===Ig)return s.RG_INTEGER;if(l===Ng)return s.RGBA_INTEGER;if(l===nf||l===rf||l===sf||l===of)if(h===Xt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===nf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===rf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===sf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===of)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===nf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===rf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===sf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===of)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Yp||l===$p||l===Kp||l===Qp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Yp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===$p)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Kp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Qp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ug)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Zp||l===Jp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Zp)return h===Xt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Jp)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===em||l===tm||l===nm||l===im||l===rm||l===sm||l===om||l===am||l===lm||l===cm||l===um||l===fm||l===dm||l===hm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===em)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===tm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===nm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===im)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===rm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===sm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===om)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===am)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===lm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===cm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===um)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===fm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===dm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===hm)return h===Xt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===af||l===pm||l===mm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===af)return h===Xt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===pm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===mm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Iv||l===gm||l===_m||l===vm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===af)return u.COMPRESSED_RED_RGTC1_EXT;if(l===gm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===_m)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===vm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===As?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class qE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ya;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const $E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Xn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new vr({extensions:{fragDepth:!0},vertexShader:$E,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new rn(new Ta(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ZE extends Fo{constructor(e,t){super();const r=this;let a=null,l=1,f=null,u="local-floor",h=1,p=null,_=null,g=null,y=null,S=null,E=null;const w=new QE,x=t.getContextAttributes();let v=null,N=null;const R=[],P=[],G=new vt;let H=null;const L=new ei;L.layers.enable(1),L.viewport=new $t;const J=new ei;J.layers.enable(2),J.viewport=new $t;const me=[L,J],A=new qE;A.layers.enable(1),A.layers.enable(2);let U=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=R[K];return le===void 0&&(le=new Nf,R[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=R[K];return le===void 0&&(le=new Nf,R[K]=le),le.getGripSpace()},this.getHand=function(K){let le=R[K];return le===void 0&&(le=new Nf,R[K]=le),le.getHandSpace()};function Q(K){const le=P.indexOf(K.inputSource);if(le===-1)return;const Se=R[le];Se!==void 0&&(Se.update(K.inputSource,K.frame,p||f),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",V);for(let K=0;K<R.length;K++){const le=P[K];le!==null&&(P[K]=null,R[K].disconnect(le))}U=null,pe=null,w.reset(),e.setRenderTarget(v),S=null,y=null,g=null,a=null,N=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",W),a.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(G),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Ps(S.framebufferWidth,S.framebufferHeight,{format:ki,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,Se=null,Oe=null;x.depth&&(Oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?No:Rs,Se=x.stencil?As:Xr);const De={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};g=new XRWebGLBinding(a,t),y=g.createProjectionLayer(De),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Ps(y.textureWidth,y.textureHeight,{format:ki,type:$r,depthTexture:new Qg(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(N);Re.__ignoreDepthValues=y.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(u),xe.setContext(a),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function V(K){for(let le=0;le<K.removed.length;le++){const Se=K.removed[le],Oe=P.indexOf(Se);Oe>=0&&(P[Oe]=null,R[Oe].disconnect(Se))}for(let le=0;le<K.added.length;le++){const Se=K.added[le];let Oe=P.indexOf(Se);if(Oe===-1){for(let Re=0;Re<R.length;Re++)if(Re>=P.length){P.push(Se),Oe=Re;break}else if(P[Re]===null){P[Re]=Se,Oe=Re;break}if(Oe===-1)break}const De=R[Oe];De&&De.connect(Se)}}const oe=new X,ee=new X;function z(K,le,Se){oe.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const Oe=oe.distanceTo(ee),De=le.projectionMatrix.elements,Re=Se.projectionMatrix.elements,ct=De[14]/(De[10]-1),rt=De[14]/(De[10]+1),re=(De[9]+1)/De[5],Nt=(De[9]-1)/De[5],et=(De[8]-1)/De[0],ut=(Re[8]+1)/Re[0],He=ct*et,xt=ct*ut,qe=Oe/(-et+ut),pt=qe*-et;le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const Mt=ct+qe,D=rt+qe,T=He-pt,he=xt+(Oe-pt),_e=re*rt/D*Mt,Ae=Nt*rt/D*Mt;K.projectionMatrix.makePerspective(T,he,_e,Ae,Mt,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function te(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;w.texture!==null&&(K.near=w.depthNear,K.far=w.depthFar),A.near=J.near=L.near=K.near,A.far=J.far=L.far=K.far,(U!==A.near||pe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,pe=A.far,L.near=U,L.far=pe,J.near=U,J.far=pe,L.updateProjectionMatrix(),J.updateProjectionMatrix(),K.updateProjectionMatrix());const le=K.parent,Se=A.cameras;te(A,le);for(let Oe=0;Oe<Se.length;Oe++)te(Se[Oe],le);Se.length===2?z(A,L,J):A.projectionMatrix.copy(L.projectionMatrix),Z(K,A,le)};function Z(K,le,Se){Se===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=pc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(K){h=K,y!==null&&(y.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null};let I=null;function $(K,le){if(_=le.getViewerPose(p||f),E=le,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Oe=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,Oe=!0);for(let Re=0;Re<Se.length;Re++){const ct=Se[Re];let rt=null;if(S!==null)rt=S.getViewport(ct);else{const Nt=g.getViewSubImage(y,ct);rt=Nt.viewport,Re===0&&(e.setRenderTargetTextures(N,Nt.colorTexture,y.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(N))}let re=me[Re];re===void 0&&(re=new ei,re.layers.enable(Re),re.viewport=new $t,me[Re]=re),re.matrix.fromArray(ct.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ct.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(rt.x,rt.y,rt.width,rt.height),Re===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Oe===!0&&A.cameras.push(re)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=g.getDepthInformation(Se[0]);Re&&Re.isValid&&Re.texture&&w.init(e,Re,a.renderState)}}for(let Se=0;Se<R.length;Se++){const Oe=P[Se],De=R[Se];Oe!==null&&De!==void 0&&De.update(Oe,le,p||f)}w.render(e,A),I&&I(K,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),E=null}const xe=new $g;xe.setAnimationLoop($),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const xs=new Hi,JE=new Gt;function e1(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Xg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,N,R,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,P)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&u(x,v)):v.isPointsMaterial?h(x,v,N,R):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const N=e.get(v),R=N.envMap,P=N.envMapRotation;if(R&&(x.envMap.value=R,xs.copy(P),xs.x*=-1,xs.y*=-1,xs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),x.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(xs)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const G=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*G,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function u(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,N,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*N,x.scale.value=R*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,N){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const N=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function t1(s,e,t,r){let a={},l={},f=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(N,R){const P=R.program;r.uniformBlockBinding(N,P)}function p(N,R){let P=a[N.id];P===void 0&&(E(N),P=_(N),a[N.id]=P,N.addEventListener("dispose",x));const G=R.program;r.updateUBOMapping(N,G);const H=e.render.frame;l[N.id]!==H&&(y(N),l[N.id]=H)}function _(N){const R=g();N.__bindingPointIndex=R;const P=s.createBuffer(),G=N.__size,H=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function g(){for(let N=0;N<u;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const R=a[N.id],P=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let H=0,L=P.length;H<L;H++){const J=Array.isArray(P[H])?P[H]:[P[H]];for(let me=0,A=J.length;me<A;me++){const U=J[me];if(S(U,H,me,G)===!0){const pe=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let V=0;V<Q.length;V++){const oe=Q[V],ee=w(oe);typeof oe=="number"||typeof oe=="boolean"?(U.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,pe+W,U.__data)):oe.isMatrix3?(U.__data[0]=oe.elements[0],U.__data[1]=oe.elements[1],U.__data[2]=oe.elements[2],U.__data[3]=0,U.__data[4]=oe.elements[3],U.__data[5]=oe.elements[4],U.__data[6]=oe.elements[5],U.__data[7]=0,U.__data[8]=oe.elements[6],U.__data[9]=oe.elements[7],U.__data[10]=oe.elements[8],U.__data[11]=0):(oe.toArray(U.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,pe,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,R,P,G){const H=N.value,L=R+"_"+P;if(G[L]===void 0)return typeof H=="number"||typeof H=="boolean"?G[L]=H:G[L]=H.clone(),!0;{const J=G[L];if(typeof H=="number"||typeof H=="boolean"){if(J!==H)return G[L]=H,!0}else if(J.equals(H)===!1)return J.copy(H),!0}return!1}function E(N){const R=N.uniforms;let P=0;const G=16;for(let L=0,J=R.length;L<J;L++){const me=Array.isArray(R[L])?R[L]:[R[L]];for(let A=0,U=me.length;A<U;A++){const pe=me[A],Q=Array.isArray(pe.value)?pe.value:[pe.value];for(let W=0,V=Q.length;W<V;W++){const oe=Q[W],ee=w(oe),z=P%G;z!==0&&G-z<ee.boundary&&(P+=G-z),pe.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=ee.storage}}}const H=P%G;return H>0&&(P+=G-H),N.__size=P,N.__cache={},this}function w(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function x(N){const R=N.target;R.removeEventListener("dispose",x);const P=f.indexOf(R.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},l={}}return{bind:h,update:p,dispose:v}}class i0{constructor(e={}){const{canvas:t=jv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=f;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const v=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ki,this._useLegacyLights=!1,this.toneMapping=Yr,this.toneMappingExposure=1;const R=this;let P=!1,G=0,H=0,L=null,J=-1,me=null;const A=new $t,U=new $t;let pe=null;const Q=new Et(0);let W=0,V=t.width,oe=t.height,ee=1,z=null,te=null;const Z=new $t(0,0,V,oe),I=new $t(0,0,V,oe);let $=!1;const xe=new cd;let K=!1,le=!1,Se=null;const Oe=new Gt,De=new vt,Re=new X,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return L===null?ee:1}let re=r;function Nt(C,ie){for(let fe=0;fe<C.length;fe++){const de=C[fe],ce=t.getContext(de,ie);if(ce!==null)return ce}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ne,!1),re===null){const ie=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&ie.shift(),re=Nt(ie,C),re===null)throw Nt(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&re instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,ut,He,xt,qe,pt,Mt,D,T,he,_e,Ae,Me,ft,nt,Ie,Ne,ze,be,It,st,$e,Ue,Ge;function it(){et=new aM(re),ut=new tM(re,et,e),et.init(ut),$e=new XE(re,et,ut),He=new WE(re,et,ut),xt=new uM(re),qe=new PE,pt=new jE(re,et,He,qe,ut,$e,xt),Mt=new iM(R),D=new oM(R),T=new gx(re,ut),Ue=new JS(re,et,T,ut),he=new lM(re,T,xt,Ue),_e=new pM(re,he,T,xt),be=new hM(re,ut,pt),Ie=new nM(qe),Ae=new bE(R,Mt,D,et,ut,Ue,Ie),Me=new e1(R,qe),ft=new DE,nt=new zE(et,ut),ze=new ZS(R,Mt,D,He,_e,y,h),Ne=new VE(R,_e,ut),Ge=new t1(re,xt,ut,He),It=new eM(re,et,xt,ut),st=new cM(re,et,xt,ut),xt.programs=Ae.programs,R.capabilities=ut,R.extensions=et,R.properties=qe,R.renderLists=ft,R.shadowMap=Ne,R.state=He,R.info=xt}it();const Xe=new ZE(R,re);this.xr=Xe,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(V,oe,!1))},this.getSize=function(C){return C.set(V,oe)},this.setSize=function(C,ie,fe=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,oe=ie,t.width=Math.floor(C*ee),t.height=Math.floor(ie*ee),fe===!0&&(t.style.width=C+"px",t.style.height=ie+"px"),this.setViewport(0,0,C,ie)},this.getDrawingBufferSize=function(C){return C.set(V*ee,oe*ee).floor()},this.setDrawingBufferSize=function(C,ie,fe){V=C,oe=ie,ee=fe,t.width=Math.floor(C*fe),t.height=Math.floor(ie*fe),this.setViewport(0,0,C,ie)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,ie,fe,de){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,ie,fe,de),He.viewport(A.copy(Z).multiplyScalar(ee).round())},this.getScissor=function(C){return C.copy(I)},this.setScissor=function(C,ie,fe,de){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,ie,fe,de),He.scissor(U.copy(I).multiplyScalar(ee).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){He.setScissorTest($=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){te=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(C=!0,ie=!0,fe=!0){let de=0;if(C){let ce=!1;if(L!==null){const Be=L.texture.format;ce=Be===Ng||Be===Ig||Be===Dg}if(ce){const Be=L.texture.type,Ze=Be===$r||Be===Xr||Be===sd||Be===As||Be===Pg||Be===Lg,ot=ze.getClearColor(),Ve=ze.getClearAlpha(),yt=ot.r,ht=ot.g,gt=ot.b;Ze?(S[0]=yt,S[1]=ht,S[2]=gt,S[3]=Ve,re.clearBufferuiv(re.COLOR,0,S)):(E[0]=yt,E[1]=ht,E[2]=gt,E[3]=Ve,re.clearBufferiv(re.COLOR,0,E))}else de|=re.COLOR_BUFFER_BIT}ie&&(de|=re.DEPTH_BUFFER_BIT),fe&&(de|=re.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ft.dispose(),nt.dispose(),qe.dispose(),Mt.dispose(),D.dispose(),_e.dispose(),Ue.dispose(),Ge.dispose(),Ae.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",wt),Xe.removeEventListener("sessionend",mt),Se&&(Se.dispose(),Se=null),zt.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=xt.autoReset,ie=Ne.enabled,fe=Ne.autoUpdate,de=Ne.needsUpdate,ce=Ne.type;it(),xt.autoReset=C,Ne.enabled=ie,Ne.autoUpdate=fe,Ne.needsUpdate=de,Ne.type=ce}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function B(C){const ie=C.target;ie.removeEventListener("dispose",B),ge(ie)}function ge(C){ve(C),qe.remove(C)}function ve(C){const ie=qe.get(C).programs;ie!==void 0&&(ie.forEach(function(fe){Ae.releaseProgram(fe)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,ie,fe,de,ce,Be){ie===null&&(ie=ct);const Ze=ce.isMesh&&ce.matrixWorld.determinant()<0,ot=yr(C,ie,fe,de,ce);He.setMaterial(de,Ze);let Ve=fe.index,yt=1;if(de.wireframe===!0){if(Ve=he.getWireframeAttribute(fe),Ve===void 0)return;yt=2}const ht=fe.drawRange,gt=fe.attributes.position;let Ut=ht.start*yt,Sn=(ht.start+ht.count)*yt;Be!==null&&(Ut=Math.max(Ut,Be.start*yt),Sn=Math.min(Sn,(Be.start+Be.count)*yt)),Ve!==null?(Ut=Math.max(Ut,0),Sn=Math.min(Sn,Ve.count)):gt!=null&&(Ut=Math.max(Ut,0),Sn=Math.min(Sn,gt.count));const Kt=Sn-Ut;if(Kt<0||Kt===1/0)return;Ue.setup(ce,de,ot,fe,Ve);let Mn,bt=It;if(Ve!==null&&(Mn=T.get(Ve),bt=st,bt.setIndex(Mn)),ce.isMesh)de.wireframe===!0?(He.setLineWidth(de.wireframeLinewidth*rt()),bt.setMode(re.LINES)):bt.setMode(re.TRIANGLES);else if(ce.isLine){let St=de.linewidth;St===void 0&&(St=1),He.setLineWidth(St*rt()),ce.isLineSegments?bt.setMode(re.LINES):ce.isLineLoop?bt.setMode(re.LINE_LOOP):bt.setMode(re.LINE_STRIP)}else ce.isPoints?bt.setMode(re.POINTS):ce.isSprite&&bt.setMode(re.TRIANGLES);if(ce.isBatchedMesh)bt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)bt.renderInstances(Ut,Kt,ce.count);else if(fe.isInstancedBufferGeometry){const St=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,En=Math.min(fe.instanceCount,St);bt.renderInstances(Ut,Kt,En)}else bt.render(Ut,Kt)};function ke(C,ie,fe){C.transparent===!0&&C.side===di&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,mn(C,ie,fe),C.side=Qr,C.needsUpdate=!0,mn(C,ie,fe),C.side=di):mn(C,ie,fe)}this.compile=function(C,ie,fe=null){fe===null&&(fe=C),x=nt.get(fe),x.init(),N.push(x),fe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ie.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),C!==fe&&C.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ie.layers)&&(x.pushLight(ce),ce.castShadow&&x.pushShadow(ce))}),x.setupLights(R._useLegacyLights);const de=new Set;return C.traverse(function(ce){const Be=ce.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){const ot=Be[Ze];ke(ot,fe,ce),de.add(ot)}else ke(Be,fe,ce),de.add(Be)}),N.pop(),x=null,de},this.compileAsync=function(C,ie,fe=null){const de=this.compile(C,ie,fe);return new Promise(ce=>{function Be(){if(de.forEach(function(Ze){qe.get(Ze).currentProgram.isReady()&&de.delete(Ze)}),de.size===0){ce(C);return}setTimeout(Be,10)}et.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let dt=null;function Rt(C){dt&&dt(C)}function wt(){zt.stop()}function mt(){zt.start()}const zt=new $g;zt.setAnimationLoop(Rt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(C){dt=C,Xe.setAnimationLoop(C),C===null?zt.stop():zt.start()},Xe.addEventListener("sessionstart",wt),Xe.addEventListener("sessionend",mt),this.render=function(C,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(ie),ie=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,ie,L),x=nt.get(C,N.length),x.init(),N.push(x),Oe.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),xe.setFromProjectionMatrix(Oe),le=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,le),w=ft.get(C,v.length),w.init(),v.push(w),ln(C,ie,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(z,te),this.info.render.frame++,K===!0&&Ie.beginShadows();const fe=x.state.shadowsArray;if(Ne.render(fe,C,ie),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1)&&ze.render(w,C),x.setupLights(R._useLegacyLights),ie.isArrayCamera){const de=ie.cameras;for(let ce=0,Be=de.length;ce<Be;ce++){const Ze=de[ce];Gi(w,C,Ze,Ze.viewport)}}else Gi(w,C,ie);L!==null&&(pt.updateMultisampleRenderTarget(L),pt.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(R,C,ie),Ue.resetDefaultState(),J=-1,me=null,N.pop(),N.length>0?x=N[N.length-1]:x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function ln(C,ie,fe,de){if(C.visible===!1)return;if(C.layers.test(ie.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ie);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){de&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const Ze=_e.update(C),ot=C.material;ot.visible&&w.push(C,Ze,ot,fe,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const Ze=_e.update(C),ot=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Re.copy(Ze.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(ot)){const Ve=Ze.groups;for(let yt=0,ht=Ve.length;yt<ht;yt++){const gt=Ve[yt],Ut=ot[gt.materialIndex];Ut&&Ut.visible&&w.push(C,Ze,Ut,fe,Re.z,gt)}}else ot.visible&&w.push(C,Ze,ot,fe,Re.z,null)}}const Be=C.children;for(let Ze=0,ot=Be.length;Ze<ot;Ze++)ln(Be[Ze],ie,fe,de)}function Gi(C,ie,fe,de){const ce=C.opaque,Be=C.transmissive,Ze=C.transparent;x.setupLightsView(fe),K===!0&&Ie.setGlobalState(R.clippingPlanes,fe),Be.length>0&&Ti(ce,Be,ie,fe),de&&He.viewport(A.copy(de)),ce.length>0&&zn(ce,ie,fe),Be.length>0&&zn(Be,ie,fe),Ze.length>0&&zn(Ze,ie,fe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Ti(C,ie,fe,de){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;const Be=ut.isWebGL2;Se===null&&(Se=new Ps(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?Sa:$r,minFilter:Ts,samples:Be?4:0})),R.getDrawingBufferSize(De),Be?Se.setSize(De.x,De.y):Se.setSize(Zf(De.x),Zf(De.y));const Ze=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(Q),W=R.getClearAlpha(),W<1&&R.setClearColor(16777215,.5),R.clear();const ot=R.toneMapping;R.toneMapping=Yr,zn(C,fe,de),pt.updateMultisampleRenderTarget(Se),pt.updateRenderTargetMipmap(Se);let Ve=!1;for(let yt=0,ht=ie.length;yt<ht;yt++){const gt=ie[yt],Ut=gt.object,Sn=gt.geometry,Kt=gt.material,Mn=gt.group;if(Kt.side===di&&Ut.layers.test(de.layers)){const bt=Kt.side;Kt.side=jn,Kt.needsUpdate=!0,ti(Ut,fe,de,Sn,Kt,Mn),Kt.side=bt,Kt.needsUpdate=!0,Ve=!0}}Ve===!0&&(pt.updateMultisampleRenderTarget(Se),pt.updateRenderTargetMipmap(Se)),R.setRenderTarget(Ze),R.setClearColor(Q,W),R.toneMapping=ot}function zn(C,ie,fe){const de=ie.isScene===!0?ie.overrideMaterial:null;for(let ce=0,Be=C.length;ce<Be;ce++){const Ze=C[ce],ot=Ze.object,Ve=Ze.geometry,yt=de===null?Ze.material:de,ht=Ze.group;ot.layers.test(fe.layers)&&ti(ot,ie,fe,Ve,yt,ht)}}function ti(C,ie,fe,de,ce,Be){C.onBeforeRender(R,ie,fe,de,ce,Be),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ce.onBeforeRender(R,ie,fe,de,C,Be),ce.transparent===!0&&ce.side===di&&ce.forceSinglePass===!1?(ce.side=jn,ce.needsUpdate=!0,R.renderBufferDirect(fe,ie,de,ce,C,Be),ce.side=Qr,ce.needsUpdate=!0,R.renderBufferDirect(fe,ie,de,ce,C,Be),ce.side=di):R.renderBufferDirect(fe,ie,de,ce,C,Be),C.onAfterRender(R,ie,fe,de,ce,Be)}function mn(C,ie,fe){ie.isScene!==!0&&(ie=ct);const de=qe.get(C),ce=x.state.lights,Be=x.state.shadowsArray,Ze=ce.state.version,ot=Ae.getParameters(C,ce.state,Be,ie,fe),Ve=Ae.getProgramCacheKey(ot);let yt=de.programs;de.environment=C.isMeshStandardMaterial?ie.environment:null,de.fog=ie.fog,de.envMap=(C.isMeshStandardMaterial?D:Mt).get(C.envMap||de.environment),de.envMapRotation=de.environment!==null&&C.envMap===null?ie.environmentRotation:C.envMapRotation,yt===void 0&&(C.addEventListener("dispose",B),yt=new Map,de.programs=yt);let ht=yt.get(Ve);if(ht!==void 0){if(de.currentProgram===ht&&de.lightsStateVersion===Ze)return yn(C,ot),ht}else ot.uniforms=Ae.getUniforms(C),C.onBuild(fe,ot,R),C.onBeforeCompile(ot,R),ht=Ae.acquireProgram(ot,Ve),yt.set(Ve,ht),de.uniforms=ot.uniforms;const gt=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(gt.clippingPlanes=Ie.uniform),yn(C,ot),de.needsLights=Ds(C),de.lightsStateVersion=Ze,de.needsLights&&(gt.ambientLightColor.value=ce.state.ambient,gt.lightProbe.value=ce.state.probe,gt.directionalLights.value=ce.state.directional,gt.directionalLightShadows.value=ce.state.directionalShadow,gt.spotLights.value=ce.state.spot,gt.spotLightShadows.value=ce.state.spotShadow,gt.rectAreaLights.value=ce.state.rectArea,gt.ltc_1.value=ce.state.rectAreaLTC1,gt.ltc_2.value=ce.state.rectAreaLTC2,gt.pointLights.value=ce.state.point,gt.pointLightShadows.value=ce.state.pointShadow,gt.hemisphereLights.value=ce.state.hemi,gt.directionalShadowMap.value=ce.state.directionalShadowMap,gt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,gt.spotShadowMap.value=ce.state.spotShadowMap,gt.spotLightMatrix.value=ce.state.spotLightMatrix,gt.spotLightMap.value=ce.state.spotLightMap,gt.pointShadowMap.value=ce.state.pointShadowMap,gt.pointShadowMatrix.value=ce.state.pointShadowMatrix),de.currentProgram=ht,de.uniformsList=null,ht}function Pt(C){if(C.uniformsList===null){const ie=C.currentProgram.getUniforms();C.uniformsList=lc.seqWithValue(ie.seq,C.uniforms)}return C.uniformsList}function yn(C,ie){const fe=qe.get(C);fe.outputColorSpace=ie.outputColorSpace,fe.batching=ie.batching,fe.instancing=ie.instancing,fe.instancingColor=ie.instancingColor,fe.instancingMorph=ie.instancingMorph,fe.skinning=ie.skinning,fe.morphTargets=ie.morphTargets,fe.morphNormals=ie.morphNormals,fe.morphColors=ie.morphColors,fe.morphTargetsCount=ie.morphTargetsCount,fe.numClippingPlanes=ie.numClippingPlanes,fe.numIntersection=ie.numClipIntersection,fe.vertexAlphas=ie.vertexAlphas,fe.vertexTangents=ie.vertexTangents,fe.toneMapping=ie.toneMapping}function yr(C,ie,fe,de,ce){ie.isScene!==!0&&(ie=ct),pt.resetTextureUnits();const Be=ie.fog,Ze=de.isMeshStandardMaterial?ie.environment:null,ot=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zr,Ve=(de.isMeshStandardMaterial?D:Mt).get(de.envMap||Ze),yt=de.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),gt=!!fe.morphAttributes.position,Ut=!!fe.morphAttributes.normal,Sn=!!fe.morphAttributes.color;let Kt=Yr;de.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Kt=R.toneMapping);const Mn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,bt=Mn!==void 0?Mn.length:0,St=qe.get(de),En=x.state.lights;if(K===!0&&(le===!0||C!==me)){const wn=C===me&&de.id===J;Ie.setState(de,C,wn)}let Ft=!1;de.version===St.__version?(St.needsLights&&St.lightsStateVersion!==En.state.version||St.outputColorSpace!==ot||ce.isBatchedMesh&&St.batching===!1||!ce.isBatchedMesh&&St.batching===!0||ce.isInstancedMesh&&St.instancing===!1||!ce.isInstancedMesh&&St.instancing===!0||ce.isSkinnedMesh&&St.skinning===!1||!ce.isSkinnedMesh&&St.skinning===!0||ce.isInstancedMesh&&St.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&St.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&St.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&St.instancingMorph===!1&&ce.morphTexture!==null||St.envMap!==Ve||de.fog===!0&&St.fog!==Be||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Ie.numPlanes||St.numIntersection!==Ie.numIntersection)||St.vertexAlphas!==yt||St.vertexTangents!==ht||St.morphTargets!==gt||St.morphNormals!==Ut||St.morphColors!==Sn||St.toneMapping!==Kt||ut.isWebGL2===!0&&St.morphTargetsCount!==bt)&&(Ft=!0):(Ft=!0,St.__version=de.version);let pi=St.currentProgram;Ft===!0&&(pi=mn(de,ie,ce));let Jr=!1,ni=!1,Ai=!1;const Vt=pi.getUniforms(),kn=St.uniforms;if(He.useProgram(pi.program)&&(Jr=!0,ni=!0,Ai=!0),de.id!==J&&(J=de.id,ni=!0),Jr||me!==C){Vt.setValue(re,"projectionMatrix",C.projectionMatrix),Vt.setValue(re,"viewMatrix",C.matrixWorldInverse);const wn=Vt.map.cameraPosition;wn!==void 0&&wn.setValue(re,Re.setFromMatrixPosition(C.matrixWorld)),ut.logarithmicDepthBuffer&&Vt.setValue(re,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Vt.setValue(re,"isOrthographic",C.isOrthographicCamera===!0),me!==C&&(me=C,ni=!0,Ai=!0)}if(ce.isSkinnedMesh){Vt.setOptional(re,ce,"bindMatrix"),Vt.setOptional(re,ce,"bindMatrixInverse");const wn=ce.skeleton;wn&&(ut.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Vt.setValue(re,"boneTexture",wn.boneTexture,pt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ce.isBatchedMesh&&(Vt.setOptional(re,ce,"batchingTexture"),Vt.setValue(re,"batchingTexture",ce._matricesTexture,pt));const Sr=fe.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&ut.isWebGL2===!0)&&be.update(ce,fe,pi),(ni||St.receiveShadow!==ce.receiveShadow)&&(St.receiveShadow=ce.receiveShadow,Vt.setValue(re,"receiveShadow",ce.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(kn.envMap.value=Ve,kn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ni&&(Vt.setValue(re,"toneMappingExposure",R.toneMappingExposure),St.needsLights&&bn(kn,Ai),Be&&de.fog===!0&&Me.refreshFogUniforms(kn,Be),Me.refreshMaterialUniforms(kn,de,ee,oe,Se),lc.upload(re,Pt(St),kn,pt)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(lc.upload(re,Pt(St),kn,pt),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Vt.setValue(re,"center",ce.center),Vt.setValue(re,"modelViewMatrix",ce.modelViewMatrix),Vt.setValue(re,"normalMatrix",ce.normalMatrix),Vt.setValue(re,"modelMatrix",ce.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const wn=de.uniformsGroups;for(let Vi=0,es=wn.length;Vi<es;Vi++)if(ut.isWebGL2){const b=wn[Vi];Ge.update(b,pi),Ge.bind(b,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function bn(C,ie){C.ambientLightColor.needsUpdate=ie,C.lightProbe.needsUpdate=ie,C.directionalLights.needsUpdate=ie,C.directionalLightShadows.needsUpdate=ie,C.pointLights.needsUpdate=ie,C.pointLightShadows.needsUpdate=ie,C.spotLights.needsUpdate=ie,C.spotLightShadows.needsUpdate=ie,C.rectAreaLights.needsUpdate=ie,C.hemisphereLights.needsUpdate=ie}function Ds(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,ie,fe){qe.get(C.texture).__webglTexture=ie,qe.get(C.depthTexture).__webglTexture=fe;const de=qe.get(C);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=fe===void 0,de.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,ie){const fe=qe.get(C);fe.__webglFramebuffer=ie,fe.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(C,ie=0,fe=0){L=C,G=ie,H=fe;let de=!0,ce=null,Be=!1,Ze=!1;if(C){const Ve=qe.get(C);Ve.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(re.FRAMEBUFFER,null),de=!1):Ve.__webglFramebuffer===void 0?pt.setupRenderTarget(C):Ve.__hasExternalTextures&&pt.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);const yt=C.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(Ze=!0);const ht=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ht[ie])?ce=ht[ie][fe]:ce=ht[ie],Be=!0):ut.isWebGL2&&C.samples>0&&pt.useMultisampledRTT(C)===!1?ce=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(ht)?ce=ht[fe]:ce=ht,A.copy(C.viewport),U.copy(C.scissor),pe=C.scissorTest}else A.copy(Z).multiplyScalar(ee).floor(),U.copy(I).multiplyScalar(ee).floor(),pe=$;if(He.bindFramebuffer(re.FRAMEBUFFER,ce)&&ut.drawBuffers&&de&&He.drawBuffers(C,ce),He.viewport(A),He.scissor(U),He.setScissorTest(pe),Be){const Ve=qe.get(C.texture);re.framebufferTexture2D(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,re.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ve.__webglTexture,fe)}else if(Ze){const Ve=qe.get(C.texture),yt=ie||0;re.framebufferTextureLayer(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,Ve.__webglTexture,fe||0,yt)}J=-1},this.readRenderTargetPixels=function(C,ie,fe,de,ce,Be,Ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(ot=ot[Ze]),ot){He.bindFramebuffer(re.FRAMEBUFFER,ot);try{const Ve=C.texture,yt=Ve.format,ht=Ve.type;if(yt!==ki&&$e.convert(yt)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const gt=ht===Sa&&(et.has("EXT_color_buffer_half_float")||ut.isWebGL2&&et.has("EXT_color_buffer_float"));if(ht!==$r&&$e.convert(ht)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===gr&&(ut.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=C.width-de&&fe>=0&&fe<=C.height-ce&&re.readPixels(ie,fe,de,ce,$e.convert(yt),$e.convert(ht),Be)}finally{const Ve=L!==null?qe.get(L).__webglFramebuffer:null;He.bindFramebuffer(re.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,ie,fe=0){const de=Math.pow(2,-fe),ce=Math.floor(ie.image.width*de),Be=Math.floor(ie.image.height*de);pt.setTexture2D(ie,0),re.copyTexSubImage2D(re.TEXTURE_2D,fe,0,0,C.x,C.y,ce,Be),He.unbindTexture()},this.copyTextureToTexture=function(C,ie,fe,de=0){const ce=ie.image.width,Be=ie.image.height,Ze=$e.convert(fe.format),ot=$e.convert(fe.type);pt.setTexture2D(fe,0),re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,fe.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,fe.unpackAlignment),ie.isDataTexture?re.texSubImage2D(re.TEXTURE_2D,de,C.x,C.y,ce,Be,Ze,ot,ie.image.data):ie.isCompressedTexture?re.compressedTexSubImage2D(re.TEXTURE_2D,de,C.x,C.y,ie.mipmaps[0].width,ie.mipmaps[0].height,Ze,ie.mipmaps[0].data):re.texSubImage2D(re.TEXTURE_2D,de,C.x,C.y,Ze,ot,ie.image),de===0&&fe.generateMipmaps&&re.generateMipmap(re.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(C,ie,fe,de,ce=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=Math.round(C.max.x-C.min.x),Ze=Math.round(C.max.y-C.min.y),ot=C.max.z-C.min.z+1,Ve=$e.convert(de.format),yt=$e.convert(de.type);let ht;if(de.isData3DTexture)pt.setTexture3D(de,0),ht=re.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)pt.setTexture2DArray(de,0),ht=re.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,de.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,de.unpackAlignment);const gt=re.getParameter(re.UNPACK_ROW_LENGTH),Ut=re.getParameter(re.UNPACK_IMAGE_HEIGHT),Sn=re.getParameter(re.UNPACK_SKIP_PIXELS),Kt=re.getParameter(re.UNPACK_SKIP_ROWS),Mn=re.getParameter(re.UNPACK_SKIP_IMAGES),bt=fe.isCompressedTexture?fe.mipmaps[ce]:fe.image;re.pixelStorei(re.UNPACK_ROW_LENGTH,bt.width),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,bt.height),re.pixelStorei(re.UNPACK_SKIP_PIXELS,C.min.x),re.pixelStorei(re.UNPACK_SKIP_ROWS,C.min.y),re.pixelStorei(re.UNPACK_SKIP_IMAGES,C.min.z),fe.isDataTexture||fe.isData3DTexture?re.texSubImage3D(ht,ce,ie.x,ie.y,ie.z,Be,Ze,ot,Ve,yt,bt.data):de.isCompressedArrayTexture?re.compressedTexSubImage3D(ht,ce,ie.x,ie.y,ie.z,Be,Ze,ot,Ve,bt.data):re.texSubImage3D(ht,ce,ie.x,ie.y,ie.z,Be,Ze,ot,Ve,yt,bt),re.pixelStorei(re.UNPACK_ROW_LENGTH,gt),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,Ut),re.pixelStorei(re.UNPACK_SKIP_PIXELS,Sn),re.pixelStorei(re.UNPACK_SKIP_ROWS,Kt),re.pixelStorei(re.UNPACK_SKIP_IMAGES,Mn),ce===0&&de.generateMipmaps&&re.generateMipmap(ht),He.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?pt.setTextureCube(C,0):C.isData3DTexture?pt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pt.setTexture2DArray(C,0):pt.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){G=0,H=0,L=null,He.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ad?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===xc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class n1 extends i0{}n1.prototype.isWebGL1Renderer=!0;class fd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=r}clone(){return new fd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i1 extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class r1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new X;class gc{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ed extends xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xo;const ga=new X,yo=new X,So=new X,Mo=new vt,_a=new vt,r0=new Gt,Yl=new X,va=new X,$l=new X,lg=new vt,Uf=new vt,cg=new vt;class ug extends on{constructor(e=new ed){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new r1(t,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new gc(r,3,0,!1)),xo.setAttribute("uv",new gc(r,2,3,!1))}this.geometry=xo,this.material=e,this.center=new vt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),r0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),So.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-So.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Kl(Yl.set(-.5,-.5,0),So,f,yo,a,l),Kl(va.set(.5,-.5,0),So,f,yo,a,l),Kl($l.set(.5,.5,0),So,f,yo,a,l),lg.set(0,0),Uf.set(1,0),cg.set(1,1);let u=e.ray.intersectTriangle(Yl,va,$l,!1,ga);if(u===null&&(Kl(va.set(-.5,.5,0),So,f,yo,a,l),Uf.set(0,1),u=e.ray.intersectTriangle(Yl,$l,va,!1,ga),u===null))return;const h=e.ray.origin.distanceTo(ga);h<e.near||h>e.far||t.push({distance:h,point:ga.clone(),uv:Bi.getInterpolation(ga,Yl,va,$l,lg,Uf,cg,new vt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kl(s,e,t,r,a,l){Mo.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(_a.x=l*Mo.x-a*Mo.y,_a.y=a*Mo.x+l*Mo.y):_a.copy(Mo),s.copy(e),s.x+=_a.x,s.y+=_a.y,s.applyMatrix4(r0)}class Ao extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fg=new X,dg=new X,hg=new Gt,Ff=new ld,Ql=new wa;class Eo extends on{constructor(e=new sn,t=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)fg.fromBufferAttribute(t,a-1),dg.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=fg.distanceTo(dg);e.setAttribute("lineDistance",new qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(a),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;hg.copy(a).invert(),Ff.copy(e.ray).applyMatrix4(hg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=new X,_=new X,g=new X,y=new X,S=this.isLineSegments?2:1,E=r.index,x=r.attributes.position;if(E!==null){const v=Math.max(0,f.start),N=Math.min(E.count,f.start+f.count);for(let R=v,P=N-1;R<P;R+=S){const G=E.getX(R),H=E.getX(R+1);if(p.fromBufferAttribute(x,G),_.fromBufferAttribute(x,H),Ff.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(y);J<e.near||J>e.far||t.push({distance:J,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,f.start),N=Math.min(x.count,f.start+f.count);for(let R=v,P=N-1;R<P;R+=S){if(p.fromBufferAttribute(x,R),_.fromBufferAttribute(x,R+1),Ff.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(y);H<e.near||H>e.far||t.push({distance:H,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}class s1 extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new Gt,td=new ld,Zl=new wa,Jl=new X;class o1 extends on{constructor(e=new sn,t=new s1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(a),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;pg.copy(a).invert(),td.copy(e.ray).applyMatrix4(pg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=y,w=S;E<w;E++){const x=p.getX(E);Jl.fromBufferAttribute(g,x),mg(Jl,x,h,a,e,t,this)}}else{const y=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=y,w=S;E<w;E++)Jl.fromBufferAttribute(g,E),mg(Jl,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function mg(s,e,t,r,a,l,f){const u=td.distanceSqToPoint(s);if(u<t){const h=new X;td.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,object:f})}}class gg extends Xn{constructor(e,t,r,a,l,f,u,h,p){super(e,t,r,a,l,f,u,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class a1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let u=0,h=l-1,p;for(;u<=h;)if(a=Math.floor(u+(h-u)/2),p=r[a]-f,p<0)u=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const _=r[a],y=r[a+1]-_,S=(f-_)/y;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),u=this.getPoint(l),h=t||(f.isVector2?new vt:new X);return h.copy(u).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new X,a=[],l=[],f=[],u=new X,h=new Gt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new X)}l[0]=new X,f[0]=new X;let p=Number.MAX_VALUE;const _=Math.abs(a[0].x),g=Math.abs(a[0].y),y=Math.abs(a[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),y<=p&&r.set(0,0,1),u.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],u),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),u.crossVectors(a[S-1],a[S]),u.length()>Number.EPSILON){u.normalize();const E=Math.acos(On(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(u,E))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(On(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),f[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function dd(){let s=0,e=0,t=0,r=0;function a(l,f,u,h){s=l,e=u,t=-3*l+3*f-2*u-h,r=2*l-2*f+u+h}return{initCatmullRom:function(l,f,u,h,p){a(f,u,p*(u-l),p*(h-f))},initNonuniformCatmullRom:function(l,f,u,h,p,_,g){let y=(f-l)/p-(u-l)/(p+_)+(u-f)/_,S=(u-f)/_-(h-f)/(_+g)+(h-u)/g;y*=_,S*=_,a(f,u,y,S)},calc:function(l){const f=l*l,u=f*l;return s+e*l+t*f+r*u}}}const ec=new X,Of=new dd,zf=new dd,kf=new dd;class l1 extends a1{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new X){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let u=Math.floor(f),h=f-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:h===0&&u===l-1&&(u=l-2,h=1);let p,_;this.closed||u>0?p=a[(u-1)%l]:(ec.subVectors(a[0],a[1]).add(a[0]),p=ec);const g=a[u%l],y=a[(u+1)%l];if(this.closed||u+2<l?_=a[(u+2)%l]:(ec.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(y),S),x=Math.pow(y.distanceToSquared(_),S);w<1e-4&&(w=1),E<1e-4&&(E=w),x<1e-4&&(x=w),Of.initNonuniformCatmullRom(p.x,g.x,y.x,_.x,E,w,x),zf.initNonuniformCatmullRom(p.y,g.y,y.y,_.y,E,w,x),kf.initNonuniformCatmullRom(p.z,g.z,y.z,_.z,E,w,x)}else this.curveType==="catmullrom"&&(Of.initCatmullRom(p.x,g.x,y.x,_.x,this.tension),zf.initCatmullRom(p.y,g.y,y.y,_.y,this.tension),kf.initCatmullRom(p.z,g.z,y.z,_.z,this.tension));return r.set(Of.calc(h),zf.calc(h),kf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new X().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class _c extends sn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],f=[],u=[],h=[],p=new X,_=new vt;f.push(0,0,0),u.push(0,0,1),h.push(.5,.5);for(let g=0,y=3;g<=t;g++,y+=3){const S=r+g/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(f[y]/e+1)/2,_.y=(f[y+1]/e+1)/2,h.push(_.x,_.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hd extends sn{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:u,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],g=[],y=[],S=[];let E=0;const w=[],x=r/2;let v=0;N(),f===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(S,2));function N(){const P=new X,G=new X;let H=0;const L=(t-e)/r;for(let J=0;J<=l;J++){const me=[],A=J/l,U=A*(t-e)+e;for(let pe=0;pe<=a;pe++){const Q=pe/a,W=Q*h+u,V=Math.sin(W),oe=Math.cos(W);G.x=U*V,G.y=-A*r+x,G.z=U*oe,g.push(G.x,G.y,G.z),P.set(V,L,oe).normalize(),y.push(P.x,P.y,P.z),S.push(Q,1-A),me.push(E++)}w.push(me)}for(let J=0;J<a;J++)for(let me=0;me<l;me++){const A=w[me][J],U=w[me+1][J],pe=w[me+1][J+1],Q=w[me][J+1];_.push(A,U,Q),_.push(U,pe,Q),H+=6}p.addGroup(v,H,0),v+=H}function R(P){const G=E,H=new vt,L=new X;let J=0;const me=P===!0?e:t,A=P===!0?1:-1;for(let pe=1;pe<=a;pe++)g.push(0,x*A,0),y.push(0,A,0),S.push(.5,.5),E++;const U=E;for(let pe=0;pe<=a;pe++){const W=pe/a*h+u,V=Math.cos(W),oe=Math.sin(W);L.x=me*oe,L.y=x*A,L.z=me*V,g.push(L.x,L.y,L.z),y.push(0,A,0),H.x=V*.5+.5,H.y=oe*.5*A+.5,S.push(H.x,H.y),E++}for(let pe=0;pe<a;pe++){const Q=G+pe,W=U+pe;P===!0?_.push(W,W+1,Q):_.push(W+1,W,Q),J+=3}p.addGroup(v,J,P===!0?1:2),v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pd extends hd{constructor(e=1,t=1,r=32,a=1,l=!1,f=0,u=Math.PI*2){super(0,e,t,r,a,l,f,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:f,thetaLength:u}}static fromJSON(e){return new pd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class md extends sn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+u,Math.PI);let p=0;const _=[],g=new X,y=new X,S=[],E=[],w=[],x=[];for(let v=0;v<=r;v++){const N=[],R=v/r;let P=0;v===0&&f===0?P=.5/t:v===r&&h===Math.PI&&(P=-.5/t);for(let G=0;G<=t;G++){const H=G/t;g.x=-e*Math.cos(a+H*l)*Math.sin(f+R*u),g.y=e*Math.cos(f+R*u),g.z=e*Math.sin(a+H*l)*Math.sin(f+R*u),E.push(g.x,g.y,g.z),y.copy(g).normalize(),w.push(y.x,y.y,y.z),x.push(H+P,1-R),N.push(p++)}_.push(N)}for(let v=0;v<r;v++)for(let N=0;N<t;N++){const R=_[v][N+1],P=_[v][N],G=_[v+1][N],H=_[v+1][N+1];(v!==0||f>0)&&S.push(R,P,H),(v!==r-1||h<Math.PI)&&S.push(P,G,H)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(w,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gd extends sn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const f=[],u=[],h=[],p=[],_=new X,g=new X,y=new X;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const w=E/a*l,x=S/r*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(w),g.y=(e+t*Math.cos(x))*Math.sin(w),g.z=t*Math.sin(x),u.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),y.subVectors(g,_).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const w=(a+1)*S+E-1,x=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,N=(a+1)*S+E;f.push(w,x,N),f.push(x,v,N)}this.setIndex(f),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tc extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c1 extends xr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Aa extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class u1 extends Aa{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bf=new Gt,_g=new X,vg=new X;class _d{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;_g.setFromMatrixPosition(e.matrixWorld),t.position.copy(_g),vg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vg),t.updateMatrixWorld(),Bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f1 extends _d{constructor(){super(new ei(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=pc*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xg extends Aa{constructor(e,t,r=0,a=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=r,this.angle=a,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new f1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yg=new Gt,xa=new X,Hf=new X;class d1 extends _d{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),r.position.copy(xa),Hf.copy(r.position),Hf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Hf),r.updateMatrixWorld(),a.makeTranslation(-xa.x,-xa.y,-xa.z),yg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yg)}}class h1 extends Aa{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new d1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p1 extends _d{constructor(){super(new Kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m1 extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class g1 extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);const _1="https://api.openf1.org/v1",Y={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},v1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},x1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},Sg=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(x1))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},y1=[{label:"🏆 NOR vs PIA — Australia 2025 Q • McLaren 1-2 pole battle",year:2025,meeting:"Australian Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2025"},{label:"🔥 HAM vs LEC — China 2025 Q • Ferrari teammates debut",year:2025,meeting:"Chinese Grand Prix",session:"Qualifying",d1:44,d2:16,cat:"2025"},{label:"⚔️ VER vs NOR — Monza 2024 Q • 0.025s gap",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🎭 LEC vs SAI — Monaco 2024 Q • Ferrari home pole fight",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2024"},{label:"🇬🇧 NOR vs PIA — Silverstone 2024 Q • McLaren supremacy",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2024"},{label:"💥 VER vs NOR — Austria 2024 R • The crash race",year:2024,meeting:"Austrian Grand Prix",session:"Race",d1:1,d2:4,cat:"2024"},{label:"🏁 RUS vs VER — Canada 2024 Q • Identical lap times",year:2024,meeting:"Canadian Grand Prix",session:"Qualifying",d1:63,d2:1,cat:"2024"},{label:"🌙 VER vs NOR — Abu Dhabi 2024 Q • Season finale",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🇧🇪 RUS vs HAM — Spa 2024 Q • Mercedes 1-2",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44,cat:"2024"},{label:"🎰 LEC vs PIA — Las Vegas 2024 Q • Night fight",year:2024,meeting:"Las Vegas Grand Prix",session:"Qualifying",d1:16,d2:81,cat:"2024"},{label:"🇺🇸 NOR vs VER — Miami 2024 Q • Sprint weekend",year:2024,meeting:"Miami Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"🏎️ HAM vs VER — Bahrain 2024 R • Season opener",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1,cat:"2024"},{label:"🇯🇵 VER vs PIA — Japan 2024 Q • Suzuka showdown",year:2024,meeting:"Japanese Grand Prix",session:"Qualifying",d1:1,d2:81,cat:"2024"},{label:"🇪🇸 NOR vs VER — Spain 2024 Q • Barcelona battle",year:2024,meeting:"Spanish Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"👑 VER vs LEC — Bahrain 2023 Q • Season opener",year:2023,meeting:"Bahrain Grand Prix",session:"Qualifying",d1:1,d2:16,cat:"2023"},{label:"🦁 VER vs HAM — Jeddah 2023 Q • Old rivals",year:2023,meeting:"Saudi Arabian Grand Prix",session:"Qualifying",d1:1,d2:44,cat:"2023"},{label:"🌧️ VER vs ALO — Monaco 2023 Q • Wet-dry thriller",year:2023,meeting:"Monaco Grand Prix",session:"Qualifying",d1:1,d2:14,cat:"2023"},{label:"🇸🇬 SAI vs NOR — Singapore 2023 Q • Street circuit pole",year:2023,meeting:"Singapore Grand Prix",session:"Qualifying",d1:55,d2:4,cat:"2023"},{label:"🏆 VER vs NOR — Zandvoort 2023 Q • Dutch home race",year:2023,meeting:"Dutch Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2023"},{label:"🇲🇽 LEC vs SAI — Mexico 2023 Q • Ferrari lockout",year:2023,meeting:"Mexico City Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2023"}],nc=["orbit","follow1","follow2","top","cinematic"],S1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function Ls(s,e={},t=2){const r=new URL(`${_1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=t;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===t)throw l;await new Promise(f=>setTimeout(f,800*(a+1)))}}const Mg=s=>Ls("/meetings",{year:s}),Eg=s=>Ls("/sessions",{meeting_key:s}),wg=s=>Ls("/drivers",{session_key:s}),ic=(s,e)=>Ls("/laps",{session_key:s,driver_number:e}),rc=(s,e)=>Ls("/stints",{session_key:s,driver_number:e});function sc(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),Ls("/location",a)}function oc(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),Ls("/car_data",a)}function Cs(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),a=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function bs(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,a=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>a&&(a=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const u=Math.max(t-e,a-r)||1,h=(e+t)/2,p=(r+a)/2,_=(l+f)/2;return s.map(g=>({x:(g.x-h)/u*40,y:(g.z-_)/u*4,z:(g.y-p)/u*40}))}function Tg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function ac(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function M1(){const[s,e]=Ee.useState(typeof window<"u"&&window.innerWidth<768);return Ee.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function wo(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*t)]);return r}function ys(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function E1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function To(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function w1(s,e,t,r,a,l,f,u,h,p,_,g){const y=Ee.useRef({}),S=Ee.useRef({angle:0,pitch:.6,dist:85,drag:!1,lx:0,ly:0,cinT:0}),E=Ee.useRef(u),w=Ee.useRef(new X(40,30,40)),x=Ee.useRef(new X(0,0,0)),v=Ee.useMemo(()=>t?bs(t):null,[t]),N=Ee.useMemo(()=>r?bs(r):null,[r]),R=Ee.useMemo(()=>(_==null?void 0:_.map(P=>P.speed||0))||[],[_]);Ee.useEffect(()=>{const P=s.current;if(!P||!e||e.length<10)return;y.current.ren&&(y.current.ren.dispose(),P.contains(y.current.ren.domElement)&&P.removeChild(y.current.ren.domElement)),y.current.fr&&cancelAnimationFrame(y.current.fr);const G=P.clientWidth,H=P.clientHeight,L=new i1;L.background=new Et(1184280),L.fog=new fd(1184280,120,350);const J=new ei(50,G/H,.1,500),me=new i0({antialias:!0});me.setSize(G,H),me.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.appendChild(me.domElement),L.add(new g1(14540264,.7));const A=new m1(16777215,1);A.position.set(40,80,30),L.add(A),L.add(new u1(12305629,3355456,.4));const U=new rn(new Ta(400,400),new c1({color:1579039}));U.rotation.x=-Math.PI/2,U.position.y=-.2,L.add(U);const pe=new md(180,32,16),Q=new Float32Array(pe.attributes.position.count*3);for(let ye=0;ye<pe.attributes.position.count;ye++){const O=pe.attributes.position.getY(ye),ne=Math.max(0,Math.min(1,(O+10)/190));Q[ye*3]=.06+ne*.04,Q[ye*3+1]=.06+ne*.07,Q[ye*3+2]=.1+ne*.12}pe.setAttribute("color",new qt(Q,3));const W=new rn(pe,new Ro({vertexColors:!0,side:jn,fog:!1}));L.add(W);const V=new l1(e.map(ye=>new X(ye.x,ye.y,ye.z)),!0),oe=Math.min(e.length*3,800),ee=2,z=V.getPoints(oe),te=[],Z=[],I=[],$=[],xe=[],K=z.map((ye,O)=>{const ne=z[(O+1)%z.length],B=z[(O-1+z.length)%z.length];return new X(ne.x-B.x,0,ne.z-B.z).normalize()});for(let ye=0;ye<z.length;ye++){const O=z[ye],ne=K[ye],B=new X(-ne.z,0,ne.x),ge=new X(O.x+B.x*ee/2,O.y,O.z+B.z*ee/2),ve=new X(O.x-B.x*ee/2,O.y,O.z-B.z*ee/2);if(te.push(ge.x,ge.y,ge.z,ve.x,ve.y,ve.z),Z.push(0,1,0,0,1,0),$.push(new X(ge.x,ge.y+.02,ge.z)),xe.push(new X(ve.x,ve.y+.02,ve.z)),ye<z.length-1){const ke=ye*2;I.push(ke,ke+2,ke+1,ke+1,ke+2,ke+3)}}const le=new sn;le.setAttribute("position",new qt(te,3)),le.setAttribute("normal",new qt(Z,3)),le.setIndex(I);const Se=new rn(le,new tc({color:3816008,roughness:.8,metalness:.1,side:di}));if(L.add(Se),g==="heatmap"&&R.length>10){const ye=new Float32Array(z.length*2*3);for(let B=0;B<z.length;B++){const ge=B/(z.length-1),ve=Math.min(Math.floor(ge*(R.length-1)),R.length-1),ke=Math.max(0,Math.min(1,(R[ve]-50)/300));let dt,Rt,wt;ke<.25?(dt=0,Rt=ke*4,wt=1):ke<.5?(dt=0,Rt=1,wt=1-(ke-.25)*4):ke<.75?(dt=(ke-.5)*4,Rt=1,wt=0):(dt=1,Rt=1-(ke-.75)*4,wt=0);const mt=B*2;ye[mt*3]=dt,ye[mt*3+1]=Rt,ye[mt*3+2]=wt,ye[(mt+1)*3]=dt,ye[(mt+1)*3+1]=Rt,ye[(mt+1)*3+2]=wt}const O=le.clone();O.setAttribute("color",new qt(ye,3));const ne=new rn(O,new Ro({vertexColors:!0,transparent:!0,opacity:.55,side:di,depthWrite:!1}));ne.position.y+=.01,L.add(ne)}const Oe=new Ao({color:16777215,transparent:!0,opacity:.55});L.add(new Eo(new sn().setFromPoints($),Oe)),L.add(new Eo(new sn().setFromPoints(xe),Oe));const De=[53866,16766720,14747136];[0,.33,.66].forEach((ye,O)=>{const ne=V.getPointAt(ye),B=V.getTangentAt(ye),ge=new X(-B.z,0,B.x).normalize(),ve=ne.clone().add(ge.clone().multiplyScalar(ee/2+.3)),ke=ne.clone().sub(ge.clone().multiplyScalar(ee/2+.3));ve.y+=.03,ke.y+=.03,L.add(new Eo(new sn().setFromPoints([ve,ke]),new Ao({color:De[O],linewidth:2}))),[-1,1].forEach(dt=>{const Rt=new Ji(.15,1.2,2),wt=new tc({color:De[O],emissive:De[O],emissiveIntensity:.5,transparent:!0,opacity:.7}),mt=new rn(Rt,wt),zt=ge.clone().multiplyScalar(dt*(ee/2+.8));mt.position.set(ne.x+zt.x,ne.y+.6,ne.z+zt.z),mt.lookAt(ne.x,ne.y+.6,ne.z),L.add(mt)})});const Re=[],ct=250;for(let ye=0;ye<ct-2;ye++){const O=ye/ct,ne=(ye+1)/ct,B=(ye+2)/ct,ge=V.getPointAt(O),ve=V.getPointAt(ne),ke=V.getPointAt(B);Math.abs((ve.x-ge.x)*(ke.z-ve.z)-(ve.z-ge.z)*(ke.x-ve.x))>.12&&(Re.length===0||Math.abs(ne-Re[Re.length-1].t)>.035)&&Re.push({t:ne,p:ve})}Re.slice(0,20).forEach((ye,O)=>{const ne=document.createElement("canvas");ne.width=48,ne.height=48;const B=ne.getContext("2d");B.fillStyle="rgba(225,6,0,0.75)",B.beginPath(),B.arc(24,24,20,0,Math.PI*2),B.fill(),B.fillStyle="#fff",B.font="bold 22px sans-serif",B.textAlign="center",B.textBaseline="middle",B.fillText(`${O+1}`,24,25);const ge=new gg(ne),ve=new ug(new ed({map:ge,transparent:!0,depthWrite:!1})),ke=V.getTangentAt(ye.t),Rt=new X(-ke.z,0,ke.x).normalize().clone().multiplyScalar(ee/2+1.5);ve.position.set(ye.p.x+Rt.x,ye.p.y+1.5,ye.p.z+Rt.z),ve.scale.set(1.3,1.3,1),L.add(ve)});const rt=V.getPointAt(0),re=V.getTangentAt(0),Nt=new X(-re.z,0,re.x).normalize(),et=rt.clone().add(Nt.clone().multiplyScalar(ee/2));et.y+=.03;const ut=rt.clone().sub(Nt.clone().multiplyScalar(ee/2));ut.y+=.03,L.add(new Eo(new sn().setFromPoints([et,ut]),new Ao({color:16777215})));function He(ye,O,ne){const B=new ya,ge=new Et(ye),ve=new tc({color:ge,emissive:ge,emissiveIntensity:ne?.6:.35,metalness:.7,roughness:.25,transparent:ne,opacity:ne?.55:1}),ke=new rn(new Ji(.5,.2,1.6),ve);ke.position.y=.2,B.add(ke);const dt=new rn(new Ji(.9,.06,.25),ve);dt.position.set(0,.12,.85),B.add(dt);const Rt=new rn(new Ji(.7,.18,.08),ve);Rt.position.set(0,.45,-.75),B.add(Rt),[-.35,.35].forEach(mn=>{const Pt=new rn(new Ji(.03,.22,.15),ve);Pt.position.set(mn,.42,-.75),B.add(Pt)});const wt=new rn(new pd(.12,.5,4),ve);wt.geometry.rotateX(-Math.PI/2),wt.position.set(0,.18,1.05),B.add(wt);const mt=new tc({color:3355443,metalness:.9,roughness:.1}),zt=new rn(new gd(.18,.025,6,12,Math.PI),mt);zt.rotation.z=Math.PI,zt.position.set(0,.35,.15),B.add(zt);const ln=new Ro({color:0,transparent:!0,opacity:.25,side:di,depthWrite:!1}),Gi=new rn(new _c(1,16),ln);Gi.rotation.x=-Math.PI/2,Gi.position.y=.01,B.add(Gi);const Ti=new Ro({color:ge,transparent:!0,opacity:ne?.08:.04,side:di,depthWrite:!1}),zn=new rn(new _c(1.5,16),Ti);zn.rotation.x=-Math.PI/2,zn.position.y=.005,B.add(zn);const ti=new h1(ge,ne?.7:.4,10);if(ti.position.set(0,.5,0),B.add(ti),O){const mn=document.createElement("canvas");mn.width=160,mn.height=56;const Pt=mn.getContext("2d");Pt.fillStyle=ye,Pt.globalAlpha=.9,Pt.beginPath();const yn=6;Pt.moveTo(yn,0),Pt.lineTo(160-yn,0),Pt.quadraticCurveTo(160,0,160,yn),Pt.lineTo(160,56-yn),Pt.quadraticCurveTo(160,56,160-yn,56),Pt.lineTo(yn,56),Pt.quadraticCurveTo(0,56,0,56-yn),Pt.lineTo(0,yn),Pt.quadraticCurveTo(0,0,yn,0),Pt.fill(),Pt.fillStyle="#fff",Pt.globalAlpha=.15,Pt.fillRect(0,0,6,56),Pt.globalAlpha=1,Pt.fillStyle="#fff",Pt.font="bold 30px sans-serif",Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(O,80,30);const yr=new gg(mn),bn=new ug(new ed({map:yr,transparent:!0,depthWrite:!1}));bn.position.set(0,1.6,0),bn.scale.set(2.8,1,1),B.add(bn)}return B}const xt=He(l,h,!1),qe=He(f,p,!0);L.add(xt),L.add(qe);const pt=new xg(new Et(l),.6,25,Math.PI/6,.5,1);pt.position.set(0,12,0),L.add(pt);const Mt=new xg(new Et(f),.4,25,Math.PI/6,.5,1);Mt.position.set(0,12,0),L.add(Mt);const D=new sn,T=new Float32Array(6);D.setAttribute("position",new qt(T,3));const he=new Ao({color:16777215,transparent:!0,opacity:.5}),_e=new Eo(D,he);_e.frustumCulled=!1,L.add(_e);const Ae=V.getPoints(oe),Me=new sn().setFromPoints(Ae),ft=new Eo(Me,new Ao({color:4500223,transparent:!0,opacity:.12}));ft.position.y+=.015,L.add(ft);function nt(ye,O){const B=new Float32Array(360),ge=new sn;ge.setAttribute("position",new hi(B,3));const ve=new Float32Array(120);ve.fill(0),ge.setAttribute("alpha",new hi(ve,1)),ge.setDrawRange(0,0);const ke=new vr({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Et(ye)}},vertexShader:"attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }",fragmentShader:`uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${O?"0.3":"0.55"}); }`}),dt=new o1(ge,ke);return L.add(dt),{mesh:dt,positions:B,alphas:ve,max:120,count:0}}const Ie=nt(l,!1),Ne=nt(f,!0);y.current={scene:L,camera:J,ren:me,car1:xt,car2:qe,tr1:Ie,tr2:Ne,n1:v,n2:N,curve:V,spot1:pt,spot2:Mt,deltaLine:_e,deltaPos:T,fr:null};const ze=S.current,be=ye=>{var O,ne,B,ge;ze.drag=!0,ze.lx=ye.clientX??((ne=(O=ye.touches)==null?void 0:O[0])==null?void 0:ne.clientX)??0,ze.ly=ye.clientY??((ge=(B=ye.touches)==null?void 0:B[0])==null?void 0:ge.clientY)??0},It=ye=>{var B,ge,ve,ke;if(!ze.drag)return;const O=ye.clientX??((ge=(B=ye.touches)==null?void 0:B[0])==null?void 0:ge.clientX)??0,ne=ye.clientY??((ke=(ve=ye.touches)==null?void 0:ve[0])==null?void 0:ke.clientY)??0;ze.angle+=(O-ze.lx)*.005,ze.pitch=Math.max(.1,Math.min(1.4,ze.pitch+(ne-ze.ly)*.005)),ze.lx=O,ze.ly=ne},st=()=>{ze.drag=!1},$e=ye=>{ze.dist=Math.max(15,Math.min(200,ze.dist+ye.deltaY*.05))},Ue=me.domElement;Ue.addEventListener("mousedown",be),Ue.addEventListener("mousemove",It),Ue.addEventListener("mouseup",st),Ue.addEventListener("mouseleave",st),Ue.addEventListener("wheel",$e,{passive:!0}),Ue.addEventListener("touchstart",be,{passive:!0}),Ue.addEventListener("touchmove",It,{passive:!0}),Ue.addEventListener("touchend",st);function Ge(){y.current.fr=requestAnimationFrame(Ge),ze.cinT+=3e-4;const ye=E.current;ye==="orbit"?(ze.drag||(ze.angle+=8e-4),w.current.set(Math.cos(ze.angle)*ze.dist*Math.cos(ze.pitch),ze.dist*Math.sin(ze.pitch),Math.sin(ze.angle)*ze.dist*Math.cos(ze.pitch)),x.current.set(0,0,0)):ye==="top"&&(w.current.set(0,65,.01),x.current.set(0,0,0)),J.position.lerp(w.current,.08),J.lookAt(x.current),me.render(L,J)}Ge();let it;const Xe=()=>{clearTimeout(it),it=setTimeout(()=>{P&&(J.aspect=P.clientWidth/P.clientHeight,J.updateProjectionMatrix(),me.setSize(P.clientWidth,P.clientHeight))},100)};return window.addEventListener("resize",Xe),()=>{window.removeEventListener("resize",Xe),Ue.removeEventListener("mousedown",be),Ue.removeEventListener("mousemove",It),Ue.removeEventListener("mouseup",st),Ue.removeEventListener("mouseleave",st),Ue.removeEventListener("wheel",$e),Ue.removeEventListener("touchstart",be),Ue.removeEventListener("touchmove",It),Ue.removeEventListener("touchend",st),cancelAnimationFrame(y.current.fr),me.dispose(),P.contains(me.domElement)&&P.removeChild(me.domElement)}},[e,l,f,h,p,g,R]),Ee.useEffect(()=>{y.current.n1=v},[v]),Ee.useEffect(()=>{y.current.n2=N},[N]),Ee.useEffect(()=>{E.current=u},[u]),Ee.useEffect(()=>{const{car1:P,car2:G,tr1:H,tr2:L,camera:J,spot1:me,spot2:A,deltaLine:U,deltaPos:pe}=y.current;if(!P||!G||!e||e.length<2)return;const Q=S.current;function W(ee,z,te,Z){const I=(te==null?void 0:te.length)>=2?te:e,$=Cs(I,Z);if(isNaN($.x)||isNaN($.y)||isNaN($.z))return{x:0,y:0,z:0};ee.position.set($.x,$.y+.2,$.z);const xe=Cs(I,Math.min(1,Z+.005));if(Math.abs(xe.x-$.x)+Math.abs(xe.z-$.z)>.001&&!isNaN(xe.x)&&ee.lookAt(xe.x,$.y+.2,xe.z),z){const K=Math.min(z.count+1,z.max);for(let le=(K-1)*3;le>=3;le-=3)z.positions[le]=z.positions[le-3],z.positions[le+1]=z.positions[le-2],z.positions[le+2]=z.positions[le-1];z.positions[0]=$.x,z.positions[1]=$.y+.05,z.positions[2]=$.z;for(let le=K-1;le>=1;le--)z.alphas[le]=z.alphas[le-1]*.97;z.alphas[0]=1,z.count=K,z.mesh.geometry.attributes.position.needsUpdate=!0,z.mesh.geometry.attributes.alpha.needsUpdate=!0,z.mesh.geometry.setDrawRange(0,K)}return $}const V=W(P,H,y.current.n1,a),oe=W(G,L,y.current.n2,a);if(me&&(me.position.set(V.x,V.y+12,V.z),me.target=P),A&&(A.position.set(oe.x,oe.y+12,oe.z),A.target=G),U&&pe){pe[0]=V.x,pe[1]=V.y+.5,pe[2]=V.z,pe[3]=oe.x,pe[4]=oe.y+.5,pe[5]=oe.z,U.geometry.attributes.position.needsUpdate=!0;const ee=Math.sqrt((V.x-oe.x)**2+(V.z-oe.z)**2);U.material.opacity=Math.min(.6,ee*.08)}if(J){const ee=E.current;if(ee==="follow1"||ee==="follow2"){const z=ee==="follow1"?V:oe,te=ee==="follow1"?y.current.n1||e:y.current.n2||e,Z=Cs(te,Math.min(1,a+.02)),I=Z.x-z.x,$=Z.z-z.z,xe=Math.sqrt(I*I+$*$)||1;w.current.set(z.x-I/xe*8,z.y+4.5,z.z-$/xe*8),x.current.set(Z.x,z.y+.3,Z.z)}else if(ee==="cinematic"&&y.current.curve){const z=(Q.cinT+a*.3)%1,te=y.current.curve.getPointAt(z);w.current.set(te.x+8,te.y+5,te.z+8),x.current.set((V.x+oe.x)/2,(V.y+oe.y)/2,(V.z+oe.z)/2)}}},[a,e,u])}const T1=Ee.memo(function({tp:e,l1:t,l2:r,prog:a,c1:l,c2:f}){const u=Ee.useRef(null),h=Ee.useMemo(()=>t?bs(t):null,[t]),p=Ee.useMemo(()=>r?bs(r):null,[r]);return Ee.useEffect(()=>{const _=u.current;if(!_||!(e!=null&&e.length))return;const g=_.getContext("2d"),y=_.width,S=14;g.clearRect(0,0,y,y),g.fillStyle=Y.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(y-8,0),g.quadraticCurveTo(y,0,y,8),g.lineTo(y,y-8),g.quadraticCurveTo(y,y,y-8,y),g.lineTo(8,y),g.quadraticCurveTo(0,y,0,y-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let E=1/0,w=-1/0,x=1/0,v=-1/0;for(const G of e)G.x<E&&(E=G.x),G.x>w&&(w=G.x),G.z<x&&(x=G.z),G.z>v&&(v=G.z);const N=Math.max(w-E,v-x)||1,R=G=>({x:S+(G.x-E)/N*(y-S*2),y:S+(G.z-x)/N*(y-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((G,H)=>{const L=R(G);H===0?g.moveTo(L.x,L.y):g.lineTo(L.x,L.y)}),g.closePath(),g.stroke();function P(G,H){const L=(G==null?void 0:G.length)>=2?G:e,J=Cs(L,a),me=R(J);g.fillStyle=H,g.shadowColor=H,g.shadowBlur=8,g.beginPath(),g.arc(me.x,me.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}P(h,l),P(p,f)},[e,a,t,r,l,f]),k.jsx("canvas",{ref:u,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),Gf=Ee.memo(function({data1:e,data2:t,color1:r,color2:a,maxVal:l,h:f,prog:u,label:h,fillColor:p}){if(!(e!=null&&e.length)&&!(t!=null&&t.length))return null;const _=f||45,g=300;function y(w){if(!(w!=null&&w.length))return"";const x=Math.max(1,Math.floor(w.length/150));let v="";for(let N=0;N<w.length;N+=x){const R=N/(w.length-1)*g,P=_-2-(w[N]||0)/l*(_-4);v+=(N===0?"M":"L")+`${R},${P}`}return v}const S=y(e),E=y(t);return k.jsxs("svg",{width:"100%",height:_,viewBox:`0 0 ${g} ${_}`,preserveAspectRatio:"none",style:{borderRadius:3,background:Y.cardBg,display:"block",marginBottom:2},children:[S&&k.jsxs(k.Fragment,{children:[k.jsx("path",{d:S+`L${g},${_}L0,${_}Z`,fill:p||`${r}10`}),k.jsx("path",{d:S,fill:"none",stroke:r,strokeWidth:"1.5",opacity:"0.7"})]}),E&&k.jsxs(k.Fragment,{children:[k.jsx("path",{d:E+`L${g},${_}L0,${_}Z`,fill:`${a}08`}),k.jsx("path",{d:E,fill:"none",stroke:a,strokeWidth:"1.2",opacity:"0.5",strokeDasharray:"3,2"})]}),u!==void 0&&k.jsx("line",{x1:u*g,y1:"0",x2:u*g,y2:_,stroke:"#fff",strokeWidth:"1",opacity:"0.5"}),u!==void 0&&(e==null?void 0:e.length)&&(()=>{const w=Math.floor(u*(e.length-1)),x=e[w]||0,v=_-2-x/l*(_-4);return k.jsx("circle",{cx:u*g,cy:v,r:"2.5",fill:r,opacity:"0.9"})})(),u!==void 0&&(t==null?void 0:t.length)&&(()=>{const w=Math.floor(u*(t.length-1)),x=t[w]||0,v=_-2-x/l*(_-4);return k.jsx("circle",{cx:u*g,cy:v,r:"2",fill:a,opacity:"0.7"})})()]})}),Vf=Ee.memo(function({s:e,t1:t,t2:r,c1:a,c2:l}){const f=t&&r?t-r:null,u=[Y.green,Y.yellow,Y.red];return k.jsxs("div",{style:{flex:1,padding:"5px 8px",background:Y.cardBg,borderRadius:4,borderTop:`2px solid ${u[e-1]}`},children:[k.jsxs("div",{style:{fontSize:9,color:Y.textMuted,fontFamily:Y.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[k.jsx("span",{style:{fontSize:12,color:a,fontFamily:Y.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),k.jsx("span",{style:{fontSize:12,color:l,fontFamily:Y.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&k.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?Y.red:Y.green,fontFamily:Y.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function A1(){var Ft,pi,Jr,ni,Ai,Vt,kn,Sr,wn,Vi,es;const s=M1(),[e,t]=Ee.useState(2026),[r,a]=Ee.useState([]),[l,f]=Ee.useState(null),[u,h]=Ee.useState([]),[p,_]=Ee.useState(null),[g,y]=Ee.useState([]),[S,E]=Ee.useState(null),[w,x]=Ee.useState(null),[v,N]=Ee.useState(null),[R,P]=Ee.useState(null),[G,H]=Ee.useState([]),[L,J]=Ee.useState([]),[me,A]=Ee.useState(null),[U,pe]=Ee.useState(null),[Q,W]=Ee.useState(null),[V,oe]=Ee.useState(null),[ee,z]=Ee.useState(null),[te,Z]=Ee.useState([]),[I,$]=Ee.useState([]),[xe,K]=Ee.useState(0),[le,Se]=Ee.useState(!1),[Oe,De]=Ee.useState(1),[Re,ct]=Ee.useState(!1),[rt,re]=Ee.useState("orbit"),[Nt,et]=Ee.useState("normal"),[ut,He]=Ee.useState(""),[xt,qe]=Ee.useState(void 0),[pt,Mt]=Ee.useState(""),[D,T]=Ee.useState(!0),[he,_e]=Ee.useState("3d"),[Ae,Me]=Ee.useState(!1),[ft,nt]=Ee.useState(!1),[Ie,Ne]=Ee.useState(!1),[ze,be]=Ee.useState(""),It=Ee.useRef(null),st=Ee.useRef(null),$e=Ee.useRef(null),Ue=Ee.useRef(!1);Ee.useRef(!1);const Ge=Ee.useRef(!1),it=g.find(b=>b.driver_number===S),Xe=g.find(b=>b.driver_number===w),ye=it?Sg(it.team_name):"#4488ff",O=Xe?Sg(Xe.team_name):"#ff4488",ne=G.find(b=>b.lap_number===v),B=L.find(b=>b.lap_number===R),ge=ne!=null&&ne.lap_duration&&(B!=null&&B.lap_duration)?ne.lap_duration-B.lap_duration:null,ve=ne!=null&&ne.lap_duration?xe*ne.lap_duration:0,ke=B!=null&&B.lap_duration?xe*B.lap_duration:0,dt=(pi=(Ft=te.find(b=>v>=b.lap_start&&v<=b.lap_end))==null?void 0:Ft.compound)==null?void 0:pi.toUpperCase(),Rt=(ni=(Jr=I.find(b=>R>=b.lap_start&&R<=b.lap_end))==null?void 0:Jr.compound)==null?void 0:ni.toUpperCase(),wt=s?200:400,mt=Ee.useMemo(()=>wo(Q==null?void 0:Q.map(b=>b.speed||0),wt),[Q,wt]),zt=Ee.useMemo(()=>wo(V==null?void 0:V.map(b=>b.speed||0),wt),[V,wt]),ln=Ee.useMemo(()=>wo(Q==null?void 0:Q.map(b=>b.throttle||0),wt),[Q,wt]),Gi=Ee.useMemo(()=>wo(V==null?void 0:V.map(b=>b.throttle||0),wt),[V,wt]),Ti=Ee.useMemo(()=>wo(Q==null?void 0:Q.map(b=>b.brake>0?100:0),wt),[Q,wt]),zn=Ee.useMemo(()=>wo(V==null?void 0:V.map(b=>b.brake>0?100:0),wt),[V,wt]),ti=Tg(Q,xe),mn=Tg(V,xe),Pt=Ee.useMemo(()=>Q?Math.max(...Q.map(b=>b.speed||0)):0,[Q]),yn=Ee.useMemo(()=>V?Math.max(...V.map(b=>b.speed||0)):0,[V]),yr=Ee.useMemo(()=>Q!=null&&Q.length?Q.reduce((b,Pe)=>b+(Pe.speed||0),0)/Q.length:0,[Q]),bn=Ee.useMemo(()=>V!=null&&V.length?V.reduce((b,Pe)=>b+(Pe.speed||0),0)/V.length:0,[V]);Ee.useEffect(()=>{Ge.current||(He("Loading..."),Mt(""),Mg(e).then(b=>{a(b.filter(Pe=>Pe.meeting_name)),f(null),_(null),h([]),y([]),E(null),x(null),z(null),He("")}).catch(b=>{Mt(b.message),He("")}))},[e]),Ee.useEffect(()=>{!l||Ge.current||(He("Loading sessions..."),Eg(l.meeting_key).then(b=>{h(b.filter(Pe=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Pe.session_name))),_(null),y([]),E(null),x(null),z(null),He("")}).catch(b=>{Mt(b.message),He("")}))},[l]),Ee.useEffect(()=>{!p||Ge.current||(He("Loading drivers..."),wg(p.session_key).then(b=>{const Pe=new Set;y(b.filter(Ke=>Pe.has(Ke.driver_number)?!1:(Pe.add(Ke.driver_number),!0))),E(null),x(null),z(null),He("")}).catch(b=>{Mt(b.message),He("")}))},[p]),Ee.useEffect(()=>{Ge.current||p&&S&&(ic(p.session_key,S).then(b=>{H(b),N(null)}).catch(()=>H([])),rc(p.session_key,S).then(Z).catch(()=>Z([])))},[p,S]),Ee.useEffect(()=>{Ge.current||p&&w&&(ic(p.session_key,w).then(b=>{J(b),P(null)}).catch(()=>J([])),rc(p.session_key,w).then($).catch(()=>$([])))},[p,w]),Ee.useEffect(()=>{if(G.length&&!v){const b=ac(G);b&&N(b.lap_number)}},[G]),Ee.useEffect(()=>{if(L.length&&!R){const b=ac(L);b&&P(b.lap_number)}},[L]),Ee.useEffect(()=>{if(Ue.current)return;const b=To();b.year&&b.mk&&(Ue.current=!0,t(Number(b.year)))},[]),Ee.useEffect(()=>{const b=To();if(b.mk&&r.length&&!l){const Pe=r.find(Ke=>String(Ke.meeting_key)===b.mk);Pe&&f(Pe)}},[r]),Ee.useEffect(()=>{const b=To();if(b.sk&&u.length&&!p){const Pe=u.find(Ke=>String(Ke.session_key)===b.sk);Pe&&_(Pe)}},[u]),Ee.useEffect(()=>{const b=To();b.d1&&b.d2&&g.length&&!S&&!w&&(E(Number(b.d1)),x(Number(b.d2)))},[g]),Ee.useEffect(()=>{const b=To();b.l1&&G.length&&!v&&N(Number(b.l1))},[G]),Ee.useEffect(()=>{const b=To();b.l2&&L.length&&!R&&P(Number(b.l2))},[L]);const Ds=Ee.useCallback(async()=>{if(!(!p||!S||!w||!v||!R)){He("Fetching telemetry..."),Mt(""),qe(0);try{const b=p.session_key,Pe=G.find(ii=>ii.lap_number===v),Ke=L.find(ii=>ii.lap_number===R);if(!(Pe!=null&&Pe.date_start)||!(Ke!=null&&Ke.date_start)){Mt("Lap timing unavailable."),He("");return}const Ot=new Date(new Date(Pe.date_start).getTime()+(Pe.lap_duration||120)*1e3).toISOString(),tt=new Date(new Date(Ke.date_start).getTime()+(Ke.lap_duration||120)*1e3).toISOString();qe(20);const[tn,Qt]=await Promise.all([sc(b,S,Pe.date_start,Ot),sc(b,w,Ke.date_start,tt)]);qe(60);const[Ri,mi]=await Promise.all([oc(b,S,Pe.date_start,Ot),oc(b,w,Ke.date_start,tt)]);if(tn.length<5||Qt.length<5){Mt("Insufficient data."),He(""),qe(void 0);return}A(tn),pe(Qt),W(Ri),oe(mi),z(bs(tn)),K(0),Se(!1),qe(100),setTimeout(()=>{He(""),qe(void 0)},300)}catch(b){Mt(b.message),He(""),qe(void 0)}}},[p,S,w,v,R,G,L]),C=Ee.useCallback(async b=>{Me(!1),He("Loading preset..."),Mt(""),qe(0),Ge.current=!0;try{const Ke=(await Mg(b.year)).filter(Zt=>Zt.meeting_name),Ot=Ke.find(Zt=>Zt.meeting_name&&Zt.meeting_name.toLowerCase().includes(b.meeting.toLowerCase().replace(" grand prix","").trim()));if(!Ot)throw new Error(`Meeting "${b.meeting}" not found for ${b.year}`);qe(10);const tn=(await Eg(Ot.meeting_key)).filter(Zt=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Zt.session_name)),Qt=tn.find(Zt=>Zt.session_name===b.session);if(!Qt)throw new Error(`Session "${b.session}" not found`);qe(20);const Ri=await wg(Qt.session_key),mi=new Set,ii=Ri.filter(Zt=>mi.has(Zt.driver_number)?!1:(mi.add(Zt.driver_number),!0));qe(30);const[Mr,Er]=await Promise.all([ic(Qt.session_key,b.d1),ic(Qt.session_key,b.d2)]),ri=ac(Mr),Tn=ac(Er);if(!ri||!Tn)throw new Error("No valid laps found for these drivers");qe(45);const[gi,Ci]=await Promise.all([rc(Qt.session_key,b.d1).catch(()=>[]),rc(Qt.session_key,b.d2).catch(()=>[])]);t(b.year),a(Ke),f(Ot),h(tn),_(Qt),y(ii),E(b.d1),x(b.d2),H(Mr),J(Er),N(ri.lap_number),P(Tn.lap_number),Z(gi),$(Ci),qe(50),He("Fetching telemetry...");const si=Qt.session_key,An=new Date(new Date(ri.date_start).getTime()+(ri.lap_duration||120)*1e3).toISOString(),Pn=new Date(new Date(Tn.date_start).getTime()+(Tn.lap_duration||120)*1e3).toISOString();qe(60);const[Wi,er]=await Promise.all([sc(si,b.d1,ri.date_start,An),sc(si,b.d2,Tn.date_start,Pn)]);qe(80);const[ji,_i]=await Promise.all([oc(si,b.d1,ri.date_start,An),oc(si,b.d2,Tn.date_start,Pn)]);if(Wi.length<5||er.length<5)throw new Error("Insufficient location data for these laps");A(Wi),pe(er),W(ji),oe(_i),z(bs(Wi)),K(0),Se(!1),qe(100),setTimeout(()=>{He(""),qe(void 0),Ge.current=!1},300)}catch(Pe){Mt(Pe.message),He(""),qe(void 0),Ge.current=!1}},[]),ie=Ee.useCallback(()=>{var Pe;if(!l||!p)return;const b=E1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:w,l1:v,l2:R});(Pe=navigator.clipboard)==null||Pe.writeText(b).then(()=>{be("Copied!"),setTimeout(()=>be(""),2e3)}),window.history.replaceState(null,"",b.split(window.location.origin)[1])},[e,l,p,S,w,v,R]);w1(It,ee,me,U,xe,ye,O,rt,(it==null?void 0:it.name_acronym)||"",(Xe==null?void 0:Xe.name_acronym)||"",Q,Nt),Ee.useEffect(()=>{if(!le){$e.current=null,st.current&&cancelAnimationFrame(st.current);return}function b(Pe){$e.current||($e.current=Pe);const Ke=(Pe-$e.current)/1e3;$e.current=Pe,K(Ot=>{const tt=Ot+Ke*.015*Oe;return tt>=1?Re?0:(Se(!1),1):tt}),st.current=requestAnimationFrame(b)}return st.current=requestAnimationFrame(b),()=>{st.current&&cancelAnimationFrame(st.current)}},[le,Oe,Re]);const fe=Ee.useRef(0);Ee.useEffect(()=>{const b=Pe=>{if(!(Pe.target.tagName==="SELECT"||Pe.target.tagName==="INPUT")&&(Pe.code==="Space"&&(Pe.preventDefault(),ee&&Se(Ke=>!Ke)),Pe.code==="KeyR"&&(K(0),Se(!1)),Pe.code==="KeyT"&&T(Ke=>!Ke),Pe.code==="KeyC"&&re(Ke=>nc[(nc.indexOf(Ke)+1)%nc.length]),Pe.code==="KeyL"&&ct(Ke=>!Ke),Pe.code==="ArrowRight"&&K(Ke=>Math.min(1,Ke+.01)),Pe.code==="ArrowLeft")){const Ke=Date.now();Ke-fe.current<300?K(Ot=>Math.max(0,Ot-.05)):K(Ot=>Math.max(0,Ot-.01)),fe.current=Ke}};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[ee]);const de=(Ae||ft||Ie)&&k.jsx("div",{onClick:()=>{Me(!1),nt(!1),Ne(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),ce=Ae&&k.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:Y.carbon,border:`1px solid ${Y.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":460,maxHeight:"80vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${Y.borderLight}`},children:[k.jsxs("div",{children:[k.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:Y.sans,letterSpacing:"0.05em"},children:"MEMORABLE BATTLES"}),k.jsx("div",{style:{fontSize:10,color:Y.textMuted,marginTop:2},children:"20 iconic qualifying & race comparisons"})]}),k.jsx("button",{onClick:()=>Me(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),k.jsx("div",{style:{overflowY:"auto",padding:"12px 20px 20px",flex:1},children:["2025","2024","2023"].map(b=>{const Pe=y1.filter(Ke=>Ke.cat===b);return Pe.length?k.jsxs("div",{style:{marginBottom:16},children:[k.jsxs("div",{style:{fontSize:11,fontWeight:900,color:Y.red,letterSpacing:"0.12em",marginBottom:8,fontFamily:Y.mono,borderBottom:`1px solid ${Y.red}22`,paddingBottom:4},children:[b," SEASON"]}),Pe.map((Ke,Ot)=>k.jsx("button",{onClick:()=>C(Ke),style:{display:"block",width:"100%",textAlign:"left",padding:"10px 12px",marginBottom:4,fontSize:12,fontFamily:Y.mono,borderLeft:`3px solid ${Y.red}`,lineHeight:1.4},children:Ke.label},Ot))]},b):null})})]}),Be=Ee.useMemo(()=>Q!=null&&Q.length?Math.min(...Q.filter(b=>b.speed>5).map(b=>b.speed)):0,[Q]),Ze=Ee.useMemo(()=>V!=null&&V.length?Math.min(...V.filter(b=>b.speed>5).map(b=>b.speed)):0,[V]),ot=Ee.useMemo(()=>Q!=null&&Q.length?Q.filter(b=>b.throttle>=95).length/Q.length*100:0,[Q]),Ve=Ee.useMemo(()=>V!=null&&V.length?V.filter(b=>b.throttle>=95).length/V.length*100:0,[V]),yt=Ee.useMemo(()=>Q!=null&&Q.length?Q.filter(b=>b.brake>0).length/Q.length*100:0,[Q]),ht=Ee.useMemo(()=>V!=null&&V.length?V.filter(b=>b.brake>0).length/V.length*100:0,[V]),gt=Ee.useMemo(()=>Q!=null&&Q.length?Q.filter(b=>b.throttle<5&&b.brake===0).length/Q.length*100:0,[Q]),Ut=Ee.useMemo(()=>V!=null&&V.length?V.filter(b=>b.throttle<5&&b.brake===0).length/V.length*100:0,[V]),Sn=Ee.useMemo(()=>{if(!(Q!=null&&Q.length))return 0;let b=0;for(let Pe=1;Pe<Q.length;Pe++)Q[Pe].drs>=10&&Q[Pe-1].drs<10&&b++;return b},[Q]),Kt=Ee.useMemo(()=>{if(!(V!=null&&V.length))return 0;let b=0;for(let Pe=1;Pe<V.length;Pe++)V[Pe].drs>=10&&V[Pe-1].drs<10&&b++;return b},[V]),Mn=Ee.useMemo(()=>Q!=null&&Q.length?Math.max(...Q.map(b=>b.rpm||0)):0,[Q]),bt=Ee.useMemo(()=>V!=null&&V.length?Math.max(...V.map(b=>b.rpm||0)):0,[V]),St=ft&&ee&&k.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:Y.carbon,border:`1px solid ${Y.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":480,maxHeight:"85vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${Y.borderLight}`},children:[k.jsxs("div",{children:[k.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:Y.sans,letterSpacing:"0.05em"},children:"LAP ANALYSIS"}),k.jsx("div",{style:{fontSize:10,color:Y.textMuted,marginTop:2},children:"Detailed telemetry comparison"})]}),k.jsx("button",{onClick:()=>nt(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),k.jsx("div",{style:{overflowY:"auto",padding:"0 20px 20px"},children:k.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:Y.mono},children:[k.jsx("thead",{children:k.jsxs("tr",{style:{color:Y.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[k.jsx("th",{style:{textAlign:"left",padding:"10px 8px 6px",borderBottom:`1px solid ${Y.red}22`},children:"METRIC"}),k.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:ye,borderBottom:`2px solid ${ye}44`},children:(it==null?void 0:it.name_acronym)||"D1"}),k.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:O,borderBottom:`2px solid ${O}44`},children:(Xe==null?void 0:Xe.name_acronym)||"D2"}),k.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:Y.textMuted,borderBottom:`1px solid ${Y.borderLight}`,width:50},children:"Δ"})]})}),k.jsx("tbody",{children:[{m:"LAP TIME",v1:ne!=null&&ne.lap_duration?ys(ne.lap_duration):"—",v2:B!=null&&B.lap_duration?ys(B.lap_duration):"—",d:ne!=null&&ne.lap_duration&&(B!=null&&B.lap_duration)?ne.lap_duration-B.lap_duration:null,unit:"s"},{m:"TOP SPEED",v1:Math.round(Pt),v2:Math.round(yn),d:Pt-yn,unit:"",inv:!0},{m:"AVG SPEED",v1:Math.round(yr),v2:Math.round(bn),d:yr-bn,unit:"",inv:!0},{m:"MIN SPEED",v1:Math.round(Be),v2:Math.round(Ze),d:Be-Ze,unit:"",inv:!0},{m:"SECTOR 1",v1:((Ai=ne==null?void 0:ne.duration_sector_1)==null?void 0:Ai.toFixed(3))||"—",v2:((Vt=B==null?void 0:B.duration_sector_1)==null?void 0:Vt.toFixed(3))||"—",d:ne!=null&&ne.duration_sector_1&&(B!=null&&B.duration_sector_1)?ne.duration_sector_1-B.duration_sector_1:null,unit:"s"},{m:"SECTOR 2",v1:((kn=ne==null?void 0:ne.duration_sector_2)==null?void 0:kn.toFixed(3))||"—",v2:((Sr=B==null?void 0:B.duration_sector_2)==null?void 0:Sr.toFixed(3))||"—",d:ne!=null&&ne.duration_sector_2&&(B!=null&&B.duration_sector_2)?ne.duration_sector_2-B.duration_sector_2:null,unit:"s"},{m:"SECTOR 3",v1:((wn=ne==null?void 0:ne.duration_sector_3)==null?void 0:wn.toFixed(3))||"—",v2:((Vi=B==null?void 0:B.duration_sector_3)==null?void 0:Vi.toFixed(3))||"—",d:ne!=null&&ne.duration_sector_3&&(B!=null&&B.duration_sector_3)?ne.duration_sector_3-B.duration_sector_3:null,unit:"s"},{m:"FULL THROTTLE",v1:`${ot.toFixed(1)}%`,v2:`${Ve.toFixed(1)}%`,d:ot-Ve,unit:"%",inv:!0},{m:"BRAKING",v1:`${yt.toFixed(1)}%`,v2:`${ht.toFixed(1)}%`,d:yt-ht,unit:"%"},{m:"COASTING",v1:`${gt.toFixed(1)}%`,v2:`${Ut.toFixed(1)}%`,d:gt-Ut,unit:"%"},{m:"DRS OPENS",v1:Sn,v2:Kt,d:null,unit:""},{m:"MAX RPM",v1:Mn?Math.round(Mn).toLocaleString():"—",v2:bt?Math.round(bt).toLocaleString():"—",d:null,unit:""},{m:"TYRE",v1:dt||"—",v2:Rt||"—",d:null,unit:""}].map(b=>{const Pe=b.d!==null?b.inv?b.d>0?1:b.d<0?2:0:b.d<0?1:b.d>0?2:0:0;return k.jsxs("tr",{style:{borderBottom:`1px solid ${Y.borderLight}`},children:[k.jsx("td",{style:{padding:"7px 8px",color:Y.textDim,letterSpacing:"0.04em",fontSize:10},children:b.m}),k.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Pe===1?ye:Y.text,background:Pe===1?`${ye}08`:"transparent"},children:b.v1}),k.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Pe===2?O:Y.text,background:Pe===2?`${O}08`:"transparent"},children:b.v2}),k.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontSize:10,color:b.d!==null?b.d>0?b.inv?Y.green:Y.red:b.d<0?b.inv?Y.red:Y.green:Y.textMuted:Y.textMuted},children:b.d!==null?`${b.d>0?"+":""}${typeof b.d=="number"?Math.abs(b.d)<1?b.d.toFixed(3):Math.round(b.d):b.d}`:"—"})]},b.m)})})]})})]}),En=Ie&&k.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:Y.carbon,borderLeft:`1px solid ${Y.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${Y.borderLight}`},children:[k.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:Y.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),k.jsx("button",{onClick:()=>Ne(!1),style:{marginLeft:"auto"},children:"✕"})]}),k.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(it==null?void 0:it.name_acronym)||"D1",col:ye,laps:G,sel:v,set:N},{lab:(Xe==null?void 0:Xe.name_acronym)||"D2",col:O,laps:L,sel:R,set:P}].map(b=>{const Pe=b.laps.filter(tt=>tt.lap_duration>10),Ke=Pe.length?Math.min(...Pe.map(tt=>tt.lap_duration)):0,Ot=Pe.length?Math.max(...Pe.map(tt=>tt.lap_duration)):0;return k.jsxs("div",{style:{marginBottom:18},children:[k.jsx("div",{style:{fontSize:12,fontWeight:700,color:b.col,marginBottom:8,fontFamily:Y.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${b.col}`,paddingLeft:8},children:b.lab}),Pe.sort((tt,tn)=>tt.lap_duration-tn.lap_duration).map(tt=>{const tn=Ot>Ke?(tt.lap_duration-Ke)/(Ot-Ke):0;return k.jsxs("div",{onClick:()=>b.set(tt.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:tt.lap_number===b.sel?`${b.col}18`:"transparent",borderLeft:tt.lap_number===b.sel?`2px solid ${b.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:Y.mono},children:[k.jsxs("span",{style:{width:30,color:Y.textMuted},children:["L",tt.lap_number]}),k.jsx("span",{style:{fontWeight:tt.lap_duration===Ke?800:400,color:tt.lap_duration===Ke?Y.green:Y.text},children:ys(tt.lap_duration)}),tt.lap_duration===Ke&&k.jsx("span",{style:{fontSize:9,color:Y.green,fontWeight:700,background:`${Y.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),k.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:Y.borderLight,borderRadius:2,overflow:"hidden"},children:k.jsx("div",{style:{height:"100%",width:`${(1-tn)*100}%`,background:tn<.1?Y.green:tn>.7?Y.red:Y.yellow,borderRadius:2}})})]},tt.lap_number)})]},b.lab)})})]});return k.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:Y.carbon,color:Y.text,fontFamily:Y.sans,overflow:"hidden"},children:[k.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${Y.red}44;border-radius:2px}
        select,button{font-family:${Y.sans}}
        select{background:${Y.inputBg};color:${Y.text};border:1px solid ${Y.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${Y.red}88}
        button{background:${Y.cardBg};color:${Y.text};border:1px solid ${Y.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${Y.red}88;background:${Y.carbonMid}}
        .f1-btn{background:${Y.red};border-color:${Y.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${Y.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${Y.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),de,ce,St,En,k.jsxs("div",{style:{display:"flex",alignItems:"stretch",borderBottom:`2px solid ${Y.red}`,background:`linear-gradient(180deg, #111118 0%, ${Y.carbon} 100%)`,zIndex:10,position:"relative"},children:[k.jsx("div",{style:{width:s?4:5,background:Y.red,flexShrink:0}}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:16,padding:s?"8px 10px":"0 20px",flex:1,flexWrap:"wrap",minHeight:s?"auto":48},children:[k.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:8,textDecoration:"none"},children:[k.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"F1 Stories",style:{height:s?28:34,width:"auto"},onError:b=>{b.target.style.display="none"}}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1},children:[k.jsx("span",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",letterSpacing:"0.03em"},children:"F1 STORIES"}),k.jsx("span",{style:{fontSize:s?8:9,fontWeight:400,color:Y.textMuted,letterSpacing:"0.12em",textTransform:"uppercase"},children:"Ghost Car Lab"})]})]}),!s&&k.jsx("div",{style:{display:"flex",gap:4,marginLeft:8},children:[{label:"Blog",href:"https://f1stories.gr/blog-module/blog/index.html"},{label:"YouTube",href:"https://www.youtube.com/@F1_Stories_Original"},{label:"Standings",href:"https://f1stories.gr/standings/"}].map(b=>k.jsx("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",style:{fontSize:10,color:Y.textDim,textDecoration:"none",padding:"3px 8px",borderRadius:3,fontWeight:600,letterSpacing:"0.05em",transition:"color 0.15s"},onMouseEnter:Pe=>Pe.target.style.color="#fff",onMouseLeave:Pe=>Pe.target.style.color=Y.textDim,children:b.label.toUpperCase()},b.label))}),l&&k.jsxs("span",{style:{fontSize:11,color:Y.textDim,fontWeight:600,letterSpacing:"0.05em",marginLeft:s?0:8},children:[(es=l.meeting_name)==null?void 0:es.replace("Grand Prix","GP")," ",e]}),k.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5},children:[k.jsx("button",{onClick:()=>Me(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&k.jsx("button",{onClick:ie,style:{fontSize:10,padding:"4px 10px"},children:ze||"SHARE"}),ee&&k.jsx("button",{onClick:()=>nt(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),ee&&k.jsx("button",{onClick:()=>Ne(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),k.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${Y.borderLight}`,background:Y.carbonLight},children:[k.jsx("select",{value:e,onChange:b=>t(Number(b.target.value)),children:[2026,2025,2024,2023].map(b=>k.jsx("option",{value:b,children:b},b))}),k.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:b=>f(r.find(Pe=>Pe.meeting_key===Number(b.target.value))||null),style:{minWidth:s?110:155},children:[k.jsx("option",{value:"",children:"Grand Prix"}),r.map(b=>k.jsx("option",{value:b.meeting_key,children:b.meeting_name},b.meeting_key))]}),k.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:b=>_(u.find(Pe=>Pe.session_key===Number(b.target.value))||null),disabled:!u.length,style:{minWidth:s?85:115},children:[k.jsx("option",{value:"",children:"Session"}),u.map(b=>k.jsx("option",{value:b.session_key,children:b.session_name},b.session_key))]}),!s&&k.jsx("div",{style:{width:1,height:20,background:`${Y.red}33`}}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[k.jsx("div",{style:{width:3,height:18,background:ye,borderRadius:1}}),k.jsxs("select",{value:S||"",onChange:b=>{E(Number(b.target.value)),N(null),H([])},disabled:!g.length,style:{minWidth:s?68:100},children:[k.jsx("option",{value:"",children:"Driver 1"}),g.map(b=>k.jsx("option",{value:b.driver_number,children:b.name_acronym||`#${b.driver_number}`},b.driver_number))]}),G.length>0&&k.jsxs("select",{value:v||"",onChange:b=>N(Number(b.target.value)),style:{width:s?56:72},children:[k.jsx("option",{value:"",children:"Lap"}),G.filter(b=>b.lap_duration>10).map(b=>k.jsxs("option",{value:b.lap_number,children:["L",b.lap_number]},b.lap_number))]})]}),k.jsx("span",{style:{color:Y.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[k.jsx("div",{style:{width:3,height:18,background:O,borderRadius:1}}),k.jsxs("select",{value:w||"",onChange:b=>{x(Number(b.target.value)),P(null),J([])},disabled:!g.length,style:{minWidth:s?68:100},children:[k.jsx("option",{value:"",children:"Driver 2"}),g.map(b=>k.jsx("option",{value:b.driver_number,children:b.name_acronym||`#${b.driver_number}`},b.driver_number))]}),L.length>0&&k.jsxs("select",{value:R||"",onChange:b=>P(Number(b.target.value)),style:{width:s?56:72},children:[k.jsx("option",{value:"",children:"Lap"}),L.filter(b=>b.lap_duration>10).map(b=>k.jsxs("option",{value:b.lap_number,children:["L",b.lap_number]},b.lap_number))]})]}),k.jsx("button",{className:"f1-btn",onClick:Ds,disabled:!S||!w||!v||!R||!!ut,children:ut?"...":"COMPARE"})]}),pt&&k.jsxs("div",{style:{padding:"8px 18px",background:`${Y.red}11`,borderBottom:`1px solid ${Y.red}22`,fontSize:12,color:Y.red,display:"flex",alignItems:"center",gap:8},children:[k.jsx("span",{style:{flex:1},children:pt}),k.jsx("button",{onClick:()=>Mt(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),ut&&k.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${Y.borderLight}`},children:[k.jsx("div",{style:{fontSize:11,color:Y.textDim,fontFamily:Y.mono,marginBottom:4},children:ut}),xt!==void 0&&k.jsx("div",{style:{height:2,background:Y.borderLight,borderRadius:1,overflow:"hidden"},children:k.jsx("div",{style:{height:"100%",width:`${xt}%`,background:Y.red,borderRadius:1,transition:"width .3s"}})})]}),s&&ee&&k.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${Y.borderLight}`},children:["3d","telemetry"].map(b=>k.jsx("button",{onClick:()=>_e(b),style:{flex:1,borderRadius:0,borderBottom:he===b?`2px solid ${Y.red}`:"2px solid transparent",background:he===b?Y.cardBg:"transparent",fontWeight:he===b?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:b==="3d"?"Track":"Telemetry"},b))}),k.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${ee?175:130}px)`},children:[(!s||he==="3d")&&k.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[k.jsx("div",{ref:It,style:{width:"100%",height:"100%",background:Y.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),ee&&k.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[nc.map(b=>k.jsx("button",{onClick:()=>re(b),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:rt===b?Y.red:Y.overlay,color:rt===b?"#fff":Y.textDim,borderColor:rt===b?Y.red:Y.borderLight,fontWeight:700},children:S1[b]},b)),k.jsx("div",{style:{width:1,height:16,background:Y.borderLight}}),k.jsx("button",{onClick:()=>et(b=>b==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:Nt==="heatmap"?"#0088ff":Y.overlay,color:Nt==="heatmap"?"#fff":Y.textDim,borderColor:Nt==="heatmap"?"#0088ff":Y.borderLight,fontWeight:700},children:"🌡 Speed"})]}),ee&&!s&&k.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:k.jsx(T1,{tp:ee,l1:me,l2:U,prog:xe,c1:ye,c2:O})}),ge!==null&&ee&&k.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:k.jsxs("div",{style:{background:Y.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${Y.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[k.jsx("div",{style:{fontSize:8,color:Y.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),k.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:Y.mono,color:ge>0?Y.red:Y.green,lineHeight:1.1},children:[ge>0?"+":"",ge.toFixed(3),k.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),k.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[k.jsxs("span",{style:{fontSize:10,color:ye,fontFamily:Y.mono,fontWeight:700},children:[it==null?void 0:it.name_acronym," ",ys(ne==null?void 0:ne.lap_duration)]}),k.jsxs("span",{style:{fontSize:10,color:O,fontFamily:Y.mono,fontWeight:700},children:[Xe==null?void 0:Xe.name_acronym," ",ys(B==null?void 0:B.lap_duration)]})]})]})}),ee&&ne&&B&&k.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[k.jsx(Vf,{s:1,t1:ne.duration_sector_1,t2:B.duration_sector_1,c1:ye,c2:O}),k.jsx(Vf,{s:2,t1:ne.duration_sector_2,t2:B.duration_sector_2,c1:ye,c2:O}),k.jsx(Vf,{s:3,t1:ne.duration_sector_3,t2:B.duration_sector_3,c1:ye,c2:O})]}),!ee&&!ut&&k.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[k.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:60,marginBottom:16,opacity:.6},onError:b=>{b.target.style.display="none"}}),k.jsx("div",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",marginBottom:4,letterSpacing:"0.04em"},children:"GHOST CAR LAB"}),k.jsx("div",{style:{fontSize:11,color:Y.red,fontWeight:600,marginBottom:14,letterSpacing:"0.1em"},children:"by F1 STORIES"}),k.jsx("div",{style:{fontSize:12,color:Y.textDim,maxWidth:360,lineHeight:1.6},children:"Compare qualifying laps in 3D with real telemetry data. Select a Grand Prix, session & two drivers — or try ⚡ Presets."}),k.jsxs("div",{style:{marginTop:18,display:"flex",gap:8,justifyContent:"center"},children:[k.jsx("button",{onClick:()=>Me(!0),className:"f1-btn",style:{padding:"8px 20px",fontSize:12},children:"⚡ QUICK START"}),k.jsx("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,color:Y.textDim,textDecoration:"none",padding:"8px 14px",border:`1px solid ${Y.border}`,borderRadius:4,fontWeight:600},children:"f1stories.gr →"})]})]})]}),(!s&&D&&ee||s&&he==="telemetry"&&ee)&&k.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${Y.borderLight}`,background:Y.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:k.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[k.jsx("div",{style:{display:"flex",gap:6,marginBottom:10},children:[{di:it,co:ye,ct:ti,tire:dt},{di:Xe,co:O,ct:mn,tire:Rt}].map((b,Pe)=>{var Ke;return k.jsxs("div",{style:{flex:1,background:Y.cardBg,borderRadius:6,padding:"8px 8px 6px",borderTop:`3px solid ${b.co}`,position:"relative",textAlign:"center"},children:[k.jsx("div",{style:{fontSize:12,fontWeight:900,color:b.co,fontFamily:Y.mono,letterSpacing:"0.05em"},children:((Ke=b.di)==null?void 0:Ke.name_acronym)||"—"}),k.jsxs("svg",{width:"90",height:"55",viewBox:"0 0 90 55",style:{margin:"4px auto 2px"},children:[k.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:Y.border,strokeWidth:"4",strokeLinecap:"round"}),k.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:b.co,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:`${Math.min(b.ct.speed,360)/360*110} 110`}),k.jsx("text",{x:"45",y:"42",textAnchor:"middle",fill:"#fff",fontSize:"18",fontWeight:"900",fontFamily:Y.mono,children:Math.round(b.ct.speed)}),k.jsx("text",{x:"45",y:"52",textAnchor:"middle",fill:Y.textMuted,fontSize:"7",fontFamily:Y.mono,children:"KM/H"})]}),k.jsxs("div",{style:{display:"flex",gap:3,justifyContent:"center",marginTop:2},children:[k.jsxs("div",{style:{width:28,textAlign:"center"},children:[k.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:Y.border,borderRadius:2,position:"relative",overflow:"hidden"},children:k.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:`${b.ct.throttle}%`,background:Y.green,borderRadius:2,transition:"height 0.1s"}})}),k.jsx("div",{style:{fontSize:7,color:Y.textMuted,fontFamily:Y.mono,marginTop:1},children:"THR"})]}),k.jsxs("div",{style:{width:28,textAlign:"center"},children:[k.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:Y.border,borderRadius:2,position:"relative",overflow:"hidden"},children:k.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:b.ct.brake>0?"100%":"0%",background:Y.red,borderRadius:2,transition:"height 0.1s"}})}),k.jsx("div",{style:{fontSize:7,color:Y.textMuted,fontFamily:Y.mono,marginTop:1},children:"BRK"})]}),k.jsxs("div",{style:{width:28,textAlign:"center"},children:[k.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#fff",fontFamily:Y.mono,lineHeight:"20px"},children:b.ct.n_gear??b.ct.gear??"—"}),k.jsx("div",{style:{fontSize:7,color:Y.textMuted,fontFamily:Y.mono,marginTop:1},children:"GEAR"})]})]}),b.tire&&k.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",alignItems:"center",gap:2},children:[k.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:v1[b.tire]||"#888"}}),k.jsx("span",{style:{fontSize:8,fontFamily:Y.mono,color:Y.textMuted},children:b.tire})]}),b.ct.drs>=10&&k.jsx("div",{style:{position:"absolute",bottom:4,right:6,fontSize:8,fontWeight:700,color:Y.green,fontFamily:Y.mono,background:`${Y.green}15`,padding:"1px 4px",borderRadius:2,animation:"pulse 1s infinite"},children:"DRS"})]},Pe)})}),ee&&k.jsxs("div",{style:{marginBottom:10},children:[k.jsx("div",{style:{fontSize:10,color:Y.textMuted,fontFamily:Y.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"ELEVATION"}),k.jsx("svg",{width:"100%",height:"40",viewBox:"0 0 300 40",preserveAspectRatio:"none",style:{borderRadius:3,background:Y.cardBg},children:(()=>{const b=ee.map(Qt=>Qt.y),Pe=Math.min(...b),Ot=Math.max(...b)-Pe||1,tt=Math.max(1,Math.floor(ee.length/150));let tn="";for(let Qt=0;Qt<ee.length;Qt+=tt){const Ri=Qt/(ee.length-1)*300,mi=38-(b[Qt]-Pe)/Ot*34;tn+=(Qt===0?"M":"L")+`${Ri},${mi}`}return k.jsxs(k.Fragment,{children:[k.jsx("path",{d:tn+"L300,40L0,40Z",fill:`${Y.red}15`}),k.jsx("path",{d:tn,fill:"none",stroke:Y.red,strokeWidth:"1.5",opacity:"0.6"}),k.jsx("line",{x1:xe*300,y1:"0",x2:xe*300,y2:"40",stroke:"#fff",strokeWidth:"1",opacity:"0.5"})]})})()})]}),ee&&k.jsxs("div",{style:{marginBottom:10},children:[k.jsx("div",{style:{fontSize:10,color:Y.textMuted,fontFamily:Y.mono,letterSpacing:"0.1em",marginBottom:4,fontWeight:700},children:"G-FORCE"}),k.jsx("div",{style:{display:"flex",gap:6},children:[{di:it,co:ye,ct:ti,tel:Q},{di:Xe,co:O,ct:mn,tel:V}].map((b,Pe)=>{var ji;const Ke=b.tel||[],Ot=Math.min(Math.floor(xe*(Ke.length-1)),Ke.length-1),tt=Ke[Math.max(0,Ot-2)]||{};Ke[Math.max(0,Ot-1)];const tn=Ke[Ot]||{};Ke[Math.min(Ot+1,Ke.length-1)];const Ri=((tn.speed||0)-(tt.speed||0))/3.6/(.54*9.81),mi=Ot>2?Cs(b.tel?bs(Ke.map((_i,Zt)=>({x:Zt,y:0,z:0}))):ee,Math.max(0,xe-.01)):{x:0,z:0},ii=Cs(ee,xe),Mr=Cs(ee,Math.min(1,xe+.01)),Er=ii.x-mi.x,ri=ii.z-mi.z,Tn=Mr.x-ii.x,gi=Mr.z-ii.z,si=(Er*gi-ri*Tn)*(tn.speed||0)*4e-4,An=(_i,Zt,tr)=>Math.max(Zt,Math.min(tr,_i)),Pn=An(si,-5,5),Wi=An(Ri,-5,5),er=Math.sqrt(Pn*Pn+Wi*Wi);return k.jsxs("div",{style:{flex:1,background:Y.cardBg,borderRadius:6,padding:"6px 4px 4px",textAlign:"center"},children:[k.jsxs("svg",{width:"100%",height:"90",viewBox:"-6 -6 12 12",style:{display:"block"},children:[k.jsx("defs",{children:k.jsxs("radialGradient",{id:`gGrad${Pe}`,children:[k.jsx("stop",{offset:"0%",stopColor:b.co,stopOpacity:"0.06"}),k.jsx("stop",{offset:"100%",stopColor:b.co,stopOpacity:"0"})]})}),k.jsx("circle",{cx:"0",cy:"0",r:"5.5",fill:`url(#gGrad${Pe})`}),[1,2,3,4,5].map(_i=>k.jsx("circle",{cx:"0",cy:"0",r:_i,fill:"none",stroke:_i<=2?`${Y.textMuted}33`:`${Y.textMuted}18`,strokeWidth:"0.06"},_i)),k.jsx("line",{x1:"-5.5",y1:"0",x2:"5.5",y2:"0",stroke:Y.textMuted,strokeWidth:"0.04",opacity:"0.4"}),k.jsx("line",{x1:"0",y1:"-5.5",x2:"0",y2:"5.5",stroke:Y.textMuted,strokeWidth:"0.04",opacity:"0.4"}),k.jsx("text",{x:"5.3",y:"-0.3",textAnchor:"end",fill:Y.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"LAT"}),k.jsx("text",{x:"0.3",y:"-5",textAnchor:"start",fill:Y.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"ACC"}),k.jsx("text",{x:"0.3",y:"5.5",textAnchor:"start",fill:Y.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"BRK"}),er>.2&&k.jsx("circle",{cx:"0",cy:"0",r:Math.min(er,5),fill:"none",stroke:b.co,strokeWidth:"0.08",opacity:"0.25"}),[.92,.84,.76,.68].map((_i,Zt)=>{const tr=Math.max(0,Math.floor((xe-(Zt+1)*.003)*(Ke.length-1))),Ra=Ke[tr]||{},Sc=Ke[Math.max(0,tr-2)]||{},ts=((Ra.speed||0)-(Sc.speed||0))/3.6/(.54*9.81);return k.jsx("circle",{cx:An(si*_i,-5,5),cy:An(-ts,-5,5),r:.25-Zt*.04,fill:b.co,opacity:.15+Zt*-.03},Zt)}),k.jsx("circle",{cx:An(Pn,-5,5),cy:An(-Wi,-5,5),r:"0.4",fill:b.co,opacity:"0.9"}),k.jsx("circle",{cx:An(Pn,-5,5),cy:An(-Wi,-5,5),r:"0.6",fill:"none",stroke:b.co,strokeWidth:"0.08",opacity:"0.4"})]}),k.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:2},children:[k.jsxs("span",{style:{fontSize:13,fontWeight:900,color:b.co,fontFamily:Y.mono},children:[er.toFixed(1),k.jsx("span",{style:{fontSize:8,fontWeight:400,color:Y.textMuted},children:"G"})]}),k.jsx("span",{style:{fontSize:9,color:Y.textDim,fontFamily:Y.mono,alignSelf:"center"},children:((ji=b.di)==null?void 0:ji.name_acronym)||"—"})]})]},Pe)})})]}),k.jsxs("div",{style:{fontSize:10,color:Y.textMuted,fontFamily:Y.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:["SPEED ",k.jsx("span",{style:{color:Y.textMuted,fontWeight:400},children:"(km/h)"})]}),k.jsx(Gf,{data1:mt,data2:zt,color1:ye,color2:O,maxVal:370,prog:xe}),k.jsxs("div",{style:{fontSize:10,color:Y.textMuted,fontFamily:Y.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:["THROTTLE ",k.jsx("span",{style:{color:Y.textMuted,fontWeight:400},children:"(%)"})]}),k.jsx(Gf,{data1:ln,data2:Gi,color1:ye,color2:O,maxVal:100,prog:xe,fillColor:`${Y.green}10`}),k.jsx("div",{style:{fontSize:10,color:Y.textMuted,fontFamily:Y.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),k.jsx(Gf,{data1:Ti,data2:zn,color1:ye,color2:O,maxVal:100,h:35,prog:xe,fillColor:`${Y.red}10`})]})})]}),ee&&k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${Y.carbonLight}, ${Y.carbon})`,borderTop:`1px solid ${Y.red}22`},children:[k.jsx("button",{onClick:()=>{K(0),Se(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),k.jsx("button",{onClick:()=>Se(!le),style:{padding:"3px 9px",fontSize:13,background:le?`${Y.red}33`:Y.cardBg,borderColor:le?Y.red:Y.border},children:le?"⏸":"▶"}),k.jsx("button",{onClick:()=>ct(!Re),style:{padding:"3px 7px",opacity:Re?1:.35,fontSize:11},children:"🔁"}),k.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:xe,onChange:b=>K(parseFloat(b.target.value)),style:{flex:1,height:4,accentColor:Y.red}}),k.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[k.jsx("span",{style:{fontSize:10,color:ye,fontFamily:Y.mono,fontWeight:700,lineHeight:1.2},children:ys(ve)}),k.jsx("span",{style:{fontSize:10,color:O,fontFamily:Y.mono,fontWeight:700,lineHeight:1.2},children:ys(ke)})]}),k.jsxs("select",{value:Oe,onChange:b=>De(parseFloat(b.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[k.jsx("option",{value:.25,children:".25x"}),k.jsx("option",{value:.5,children:".5x"}),k.jsx("option",{value:1,children:"1x"}),k.jsx("option",{value:2,children:"2x"}),k.jsx("option",{value:4,children:"4x"})]}),!s&&k.jsx("button",{onClick:()=>T(!D),style:{padding:"3px 7px",fontSize:10,opacity:D?1:.35},children:"📊"})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:s?8:16,padding:"8px 18px",background:Y.carbon,borderTop:`1px solid ${Y.borderLight}`,flexWrap:"wrap"},children:[k.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:6,textDecoration:"none"},children:[k.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:18},onError:b=>{b.target.style.display="none"}}),k.jsx("span",{style:{fontSize:10,color:Y.textDim,fontWeight:600},children:"f1stories.gr"})]}),k.jsx("span",{style:{fontSize:9,color:Y.textMuted},children:"•"}),k.jsx("span",{style:{fontSize:9,color:Y.textMuted,fontFamily:Y.mono},children:"Data by OpenF1 API"}),k.jsx("span",{style:{fontSize:9,color:Y.textMuted},children:"•"}),k.jsxs("span",{style:{fontSize:9,color:Y.textMuted},children:["© ",new Date().getFullYear()," F1 Stories"]})]})]})}W_.createRoot(document.getElementById("root")).render(k.jsx(O_.StrictMode,{children:k.jsx(A1,{})}));
