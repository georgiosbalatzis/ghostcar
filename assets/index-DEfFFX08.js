(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function yg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lc={exports:{}},Xo={},Dc={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function k_(){if(yp)return wt;yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function _(U,Y,Ce){this.props=U,this.context=Y,this.refs=w,this.updater=Ce||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=_.prototype;function P(U,Y,Ce){this.props=U,this.context=Y,this.refs=w,this.updater=Ce||S}var C=P.prototype=new x;C.constructor=P,E(C,_.prototype),C.isPureReactComponent=!0;var b=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function X(U,Y,Ce){var j,ee={},ge=null,Ue=null;if(Y!=null)for(j in Y.ref!==void 0&&(Ue=Y.ref),Y.key!==void 0&&(ge=""+Y.key),Y)z.call(Y,j)&&!D.hasOwnProperty(j)&&(ee[j]=Y[j]);var Ae=arguments.length-2;if(Ae===1)ee.children=Ce;else if(1<Ae){for(var Te=Array(Ae),Ze=0;Ze<Ae;Ze++)Te[Ze]=arguments[Ze+2];ee.children=Te}if(U&&U.defaultProps)for(j in Ae=U.defaultProps,Ae)ee[j]===void 0&&(ee[j]=Ae[j]);return{$$typeof:s,type:U,key:ge,ref:Ue,props:ee,_owner:F.current}}function ue(U,Y){return{$$typeof:s,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function T(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function N(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ce){return Y[Ce]})}var pe=/\/+/g;function te(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?N(""+U.key):Y.toString(36)}function k(U,Y,Ce,j,ee){var ge=typeof U;(ge==="undefined"||ge==="boolean")&&(U=null);var Ue=!1;if(U===null)Ue=!0;else switch(ge){case"string":case"number":Ue=!0;break;case"object":switch(U.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=U,ee=ee(Ue),U=j===""?"."+te(Ue,0):j,b(ee)?(Ce="",U!=null&&(Ce=U.replace(pe,"$&/")+"/"),k(ee,Y,Ce,"",function(Ze){return Ze})):ee!=null&&(T(ee)&&(ee=ue(ee,Ce+(!ee.key||Ue&&Ue.key===ee.key?"":(""+ee.key).replace(pe,"$&/")+"/")+U)),Y.push(ee)),1;if(Ue=0,j=j===""?".":j+":",b(U))for(var Ae=0;Ae<U.length;Ae++){ge=U[Ae];var Te=j+te(ge,Ae);Ue+=k(ge,Y,Ce,Te,ee)}else if(Te=y(U),typeof Te=="function")for(U=Te.call(U),Ae=0;!(ge=U.next()).done;)ge=ge.value,Te=j+te(ge,Ae++),Ue+=k(ge,Y,Ce,Te,ee);else if(ge==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ue}function J(U,Y,Ce){if(U==null)return U;var j=[],ee=0;return k(U,j,"","",function(ge){return Y.call(Ce,ge,ee++)}),j}function ie(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Ce){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ce)},function(Ce){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ce)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},G={transition:null},Q={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function q(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:J,forEach:function(U,Y,Ce){J(U,function(){Y.apply(this,arguments)},Ce)},count:function(U){var Y=0;return J(U,function(){Y++}),Y},toArray:function(U){return J(U,function(Y){return Y})||[]},only:function(U){if(!T(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},wt.Component=_,wt.Fragment=t,wt.Profiler=a,wt.PureComponent=P,wt.StrictMode=r,wt.Suspense=h,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,wt.act=q,wt.cloneElement=function(U,Y,Ce){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var j=E({},U.props),ee=U.key,ge=U.ref,Ue=U._owner;if(Y!=null){if(Y.ref!==void 0&&(ge=Y.ref,Ue=F.current),Y.key!==void 0&&(ee=""+Y.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Te in Y)z.call(Y,Te)&&!D.hasOwnProperty(Te)&&(j[Te]=Y[Te]===void 0&&Ae!==void 0?Ae[Te]:Y[Te])}var Te=arguments.length-2;if(Te===1)j.children=Ce;else if(1<Te){Ae=Array(Te);for(var Ze=0;Ze<Te;Ze++)Ae[Ze]=arguments[Ze+2];j.children=Ae}return{$$typeof:s,type:U.type,key:ee,ref:ge,props:j,_owner:Ue}},wt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},wt.createElement=X,wt.createFactory=function(U){var Y=X.bind(null,U);return Y.type=U,Y},wt.createRef=function(){return{current:null}},wt.forwardRef=function(U){return{$$typeof:c,render:U}},wt.isValidElement=T,wt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ie}},wt.memo=function(U,Y){return{$$typeof:p,type:U,compare:Y===void 0?null:Y}},wt.startTransition=function(U){var Y=G.transition;G.transition={};try{U()}finally{G.transition=Y}},wt.unstable_act=q,wt.useCallback=function(U,Y){return ce.current.useCallback(U,Y)},wt.useContext=function(U){return ce.current.useContext(U)},wt.useDebugValue=function(){},wt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},wt.useEffect=function(U,Y){return ce.current.useEffect(U,Y)},wt.useId=function(){return ce.current.useId()},wt.useImperativeHandle=function(U,Y,Ce){return ce.current.useImperativeHandle(U,Y,Ce)},wt.useInsertionEffect=function(U,Y){return ce.current.useInsertionEffect(U,Y)},wt.useLayoutEffect=function(U,Y){return ce.current.useLayoutEffect(U,Y)},wt.useMemo=function(U,Y){return ce.current.useMemo(U,Y)},wt.useReducer=function(U,Y,Ce){return ce.current.useReducer(U,Y,Ce)},wt.useRef=function(U){return ce.current.useRef(U)},wt.useState=function(U){return ce.current.useState(U)},wt.useSyncExternalStore=function(U,Y,Ce){return ce.current.useSyncExternalStore(U,Y,Ce)},wt.useTransition=function(){return ce.current.useTransition()},wt.version="18.3.1",wt}var Sp;function zf(){return Sp||(Sp=1,Dc.exports=k_()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function B_(){if(Mp)return Xo;Mp=1;var s=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var g,v={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:y,ref:S,props:v,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=f,Xo.jsxs=f,Xo}var Ep;function H_(){return Ep||(Ep=1,Lc.exports=B_()),Lc.exports}var re=H_(),De=zf();const G_=yg(De);var fl={},Nc={exports:{}},On={},Uc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function V_(){return wp||(wp=1,(function(s){function e(G,Q){var q=G.length;G.push(Q);e:for(;0<q;){var U=q-1>>>1,Y=G[U];if(0<a(Y,Q))G[U]=Q,G[q]=Y,q=U;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var Q=G[0],q=G.pop();if(q!==Q){G[0]=q;e:for(var U=0,Y=G.length,Ce=Y>>>1;U<Ce;){var j=2*(U+1)-1,ee=G[j],ge=j+1,Ue=G[ge];if(0>a(ee,q))ge<Y&&0>a(Ue,ee)?(G[U]=Ue,G[ge]=q,U=ge):(G[U]=ee,G[j]=q,U=j);else if(ge<Y&&0>a(Ue,q))G[U]=Ue,G[ge]=q,U=ge;else break e}}return Q}function a(G,Q){var q=G.sortIndex-Q.sortIndex;return q!==0?q:G.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],p=[],g=1,v=null,y=3,S=!1,E=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(G){for(var Q=t(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=G)r(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=t(p)}}function b(G){if(w=!1,C(G),!E)if(t(h)!==null)E=!0,ie(z);else{var Q=t(p);Q!==null&&ce(b,Q.startTime-G)}}function z(G,Q){E=!1,w&&(w=!1,x(X),X=-1),S=!0;var q=y;try{for(C(Q),v=t(h);v!==null&&(!(v.expirationTime>Q)||G&&!N());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var Y=U(v.expirationTime<=Q);Q=s.unstable_now(),typeof Y=="function"?v.callback=Y:v===t(h)&&r(h),C(Q)}else r(h);v=t(h)}if(v!==null)var Ce=!0;else{var j=t(p);j!==null&&ce(b,j.startTime-Q),Ce=!1}return Ce}finally{v=null,y=q,S=!1}}var F=!1,D=null,X=-1,ue=5,T=-1;function N(){return!(s.unstable_now()-T<ue)}function pe(){if(D!==null){var G=s.unstable_now();T=G;var Q=!0;try{Q=D(!0,G)}finally{Q?te():(F=!1,D=null)}}else F=!1}var te;if(typeof P=="function")te=function(){P(pe)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,J=k.port2;k.port1.onmessage=pe,te=function(){J.postMessage(null)}}else te=function(){_(pe,0)};function ie(G){D=G,F||(F=!0,te())}function ce(G,Q){X=_(function(){G(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ie(z))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(G){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var q=y;y=Q;try{return G()}finally{y=q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,Q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var q=y;y=G;try{return Q()}finally{y=q}},s.unstable_scheduleCallback=function(G,Q,q){var U=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?U+q:U):q=U,G){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=q+Y,G={id:g++,callback:Q,priorityLevel:G,startTime:q,expirationTime:Y,sortIndex:-1},q>U?(G.sortIndex=q,e(p,G),t(h)===null&&G===t(p)&&(w?(x(X),X=-1):w=!0,ce(b,q-U))):(G.sortIndex=Y,e(h,G),E||S||(E=!0,ie(z))),G},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(G){var Q=y;return function(){var q=y;y=Q;try{return G.apply(this,arguments)}finally{y=q}}}})(Ic)),Ic}var Tp;function W_(){return Tp||(Tp=1,Uc.exports=V_()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function X_(){if(Ap)return On;Ap=1;var s=zf(),e=W_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,P);_[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,P);_[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,P);_[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,o,u){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),N=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),G=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var q=Object.assign,U;function Y(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ce=!1;function j(n,i){if(!n||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var u=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){u=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,I=m.length-1;1<=M&&0<=I&&d[M]!==m[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==m[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==m[I]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Y(n):""}function ee(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case F:return"Portal";case ue:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case k:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case pe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Te(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ot(n){n._valueTracker||(n._valueTracker=Ze(n))}function K(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Te(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ve(n,i){var o=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Je(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Pe(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function ke(n,i){Pe(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?qe(n,i.type,o):i.hasOwnProperty("defaultValue")&&qe(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Fe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function qe(n,i,o){(i!=="number"||Pt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Et=Array.isArray;function L(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function de(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Et(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function me(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function xe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?xe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rt,Re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(rt=rt||document.createElement("div"),rt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=rt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function _e(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(n){we.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),it[i]=it[n]})});function Ct(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||it.hasOwnProperty(n)&&it[n]?(""+i).trim():i+"px"}function _t(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Ct(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Ye=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Ye[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function He(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function Ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,V=null,Ne=null;function ae(n){if(n=Po(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Aa(i),st(n.stateNode,n.type,i))}}function Le(n){V?Ne?Ne.push(n):Ne=[n]:V=n}function Oe(){if(V){var n=V,i=Ne;if(Ne=V=null,ae(n),i)for(n=0;n<i.length;n++)ae(i[n])}}function ut(n,i){return n(i)}function Lt(){}var Vt=!1;function hn(n,i,o){if(Vt)return n(i,o);Vt=!0;try{return ut(n,i,o)}finally{Vt=!1,(V!==null||Ne!==null)&&(Lt(),Oe())}}function At(n,i){var o=n.stateNode;if(o===null)return null;var u=Aa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Kt=!1;if(c)try{var on={};Object.defineProperty(on,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Kt=!1}function rs(n,i,o,u,d,m,M,I,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(o,oe)}catch(Se){this.onError(Se)}}var Ri=!1,ii=null,bi=!1,vi=null,ss={onError:function(n){Ri=!0,ii=n}};function os(n,i,o,u,d,m,M,I,B){Ri=!1,ii=null,rs.apply(ss,arguments)}function co(n,i,o,u,d,m,M,I,B){if(os.apply(this,arguments),Ri){if(Ri){var oe=ii;Ri=!1,ii=null}else throw Error(t(198));bi||(bi=!0,vi=oe)}}function ri(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function as(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function R(n){if(ri(n)!==n)throw Error(t(188))}function $(n){var i=n.alternate;if(!i){if(i=ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return R(d),n;if(m===u)return R(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,I=d.child;I;){if(I===o){M=!0,o=d,u=m;break}if(I===u){M=!0,u=d,o=m;break}I=I.sibling}if(!M){for(I=m.child;I;){if(I===o){M=!0,o=m,u=d;break}if(I===u){M=!0,u=m,o=d;break}I=I.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function le(n){return n=$(n),n!==null?fe(n):null}function fe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fe(n);if(i!==null)return i;n=n.sibling}return null}var se=e.unstable_scheduleCallback,We=e.unstable_cancelCallback,tt=e.unstable_shouldYield,lt=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,pt=e.unstable_ImmediatePriority,mt=e.unstable_UserBlockingPriority,Dt=e.unstable_NormalPriority,an=e.unstable_LowPriority,O=e.unstable_IdlePriority,Ge=null,ze=null;function ht(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Ge,n,void 0,(n.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Pi,yt=Math.log,Pn=Math.LN2;function Pi(n){return n>>>=0,n===0?32:31-(yt(n)/Pn|0)|0}var Wt=64,Yn=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var I=M&~d;I!==0?u=qt(I):(m&=M,m!==0&&(u=qt(m)))}else M=o&~d,M!==0?u=qt(M):m!==0&&(u=qt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-xt(i),d=1<<o,u|=n[o],i&=~d;return u}function fo(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-xt(m),I=1<<M,B=d[M];B===-1?((I&o)===0||(I&u)!==0)&&(d[M]=fo(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function Rr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ca(){var n=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),n}function ls(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ho(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-xt(i),n[i]=o}function ov(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-xt(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function eu(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-xt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Nt=0;function Jf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qf,tu,ed,td,nd,nu=!1,fa=[],qi=null,$i=null,Ki=null,po=new Map,mo=new Map,Zi=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Po(i),i!==null&&tu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function lv(n,i,o,u,d){switch(i){case"focusin":return qi=go(qi,n,i,o,u,d),!0;case"dragenter":return $i=go($i,n,i,o,u,d),!0;case"mouseover":return Ki=go(Ki,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,u,d)),!0}return!1}function rd(n){var i=br(n.target);if(i!==null){var o=ri(i);if(o!==null){if(i=o.tag,i===13){if(i=as(o),i!==null){n.blockedOn=i,nd(n.priority,function(){ed(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ru(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return i=Po(o),i!==null&&tu(i),n.blockedOn=o,!1;i.shift()}return!0}function sd(n,i,o){da(n)&&o.delete(i)}function uv(){nu=!1,qi!==null&&da(qi)&&(qi=null),$i!==null&&da($i)&&($i=null),Ki!==null&&da(Ki)&&(Ki=null),po.forEach(sd),mo.forEach(sd)}function vo(n,i){n.blockedOn===i&&(n.blockedOn=null,nu||(nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function _o(n){function i(d){return vo(d,n)}if(0<fa.length){vo(fa[0],n);for(var o=1;o<fa.length;o++){var u=fa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&vo(qi,n),$i!==null&&vo($i,n),Ki!==null&&vo(Ki,n),po.forEach(i),mo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)rd(o),o.blockedOn===null&&Zi.shift()}var us=b.ReactCurrentBatchConfig,ha=!0;function cv(n,i,o,u){var d=Nt,m=us.transition;us.transition=null;try{Nt=1,iu(n,i,o,u)}finally{Nt=d,us.transition=m}}function fv(n,i,o,u){var d=Nt,m=us.transition;us.transition=null;try{Nt=4,iu(n,i,o,u)}finally{Nt=d,us.transition=m}}function iu(n,i,o,u){if(ha){var d=ru(n,i,o,u);if(d===null)Su(n,i,u,pa,o),id(n,u);else if(lv(d,n,i,o,u))u.stopPropagation();else if(id(n,u),i&4&&-1<av.indexOf(n)){for(;d!==null;){var m=Po(d);if(m!==null&&Qf(m),m=ru(n,i,o,u),m===null&&Su(n,i,u,pa,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Su(n,i,u,null,o)}}var pa=null;function ru(n,i,o,u){if(pa=null,n=Ve(u),n=br(n),n!==null)if(i=ri(n),i===null)n=null;else if(o=i.tag,o===13){if(n=as(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return pa=n,null}function od(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case pt:return 1;case mt:return 4;case Dt:case an:return 16;case O:return 536870912;default:return 16}default:return 16}}var Ji=null,su=null,ma=null;function ad(){if(ma)return ma;var n,i=su,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return ma=d.slice(n,1<u?1-u:void 0)}function ga(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function ld(){return!1}function Bn(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?va:ld,this.isPropagationStopped=ld,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Bn(cs),xo=q({},cs,{view:0,detail:0}),dv=Bn(xo),au,lu,yo,_a=q({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(au=n.screenX-yo.screenX,lu=n.screenY-yo.screenY):lu=au=0,yo=n),au)},movementY:function(n){return"movementY"in n?n.movementY:lu}}),ud=Bn(_a),hv=q({},_a,{dataTransfer:0}),pv=Bn(hv),mv=q({},xo,{relatedTarget:0}),uu=Bn(mv),gv=q({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Bn(gv),_v=q({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xv=Bn(_v),yv=q({},cs,{data:0}),cd=Bn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ev[n])?!!i[n]:!1}function cu(){return wv}var Tv=q({},xo,{key:function(n){if(n.key){var i=Sv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(n){return n.type==="keypress"?ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Av=Bn(Tv),Cv=q({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=Bn(Cv),Rv=q({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),bv=Bn(Rv),Pv=q({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Bn(Pv),Dv=q({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Bn(Dv),Uv=[9,13,27,32],fu=c&&"CompositionEvent"in window,So=null;c&&"documentMode"in document&&(So=document.documentMode);var Iv=c&&"TextEvent"in window&&!So,dd=c&&(!fu||So&&8<So&&11>=So),hd=" ",pd=!1;function md(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Fv(n,i){switch(n){case"compositionend":return gd(i);case"keypress":return i.which!==32?null:(pd=!0,hd);case"textInput":return n=i.data,n===hd&&pd?null:n;default:return null}}function Ov(n,i){if(fs)return n==="compositionend"||!fu&&md(n,i)?(n=ad(),ma=su=Ji=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zv[n.type]:i==="textarea"}function _d(n,i,o,u){Le(u),i=Ea(i,"onChange"),0<i.length&&(o=new ou("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Mo=null,Eo=null;function kv(n){Fd(n,0)}function xa(n){var i=gs(n);if(K(i))return n}function Bv(n,i){if(n==="change")return i}var xd=!1;if(c){var du;if(c){var hu="oninput"in document;if(!hu){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),hu=typeof yd.oninput=="function"}du=hu}else du=!1;xd=du&&(!document.documentMode||9<document.documentMode)}function Sd(){Mo&&(Mo.detachEvent("onpropertychange",Md),Eo=Mo=null)}function Md(n){if(n.propertyName==="value"&&xa(Eo)){var i=[];_d(i,Eo,n,Ve(n)),hn(kv,i)}}function Hv(n,i,o){n==="focusin"?(Sd(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Md)):n==="focusout"&&Sd()}function Gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xa(Eo)}function Vv(n,i){if(n==="click")return xa(i)}function Wv(n,i){if(n==="input"||n==="change")return xa(i)}function Xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:Xv;function wo(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!si(n[d],i[d]))return!1}return!0}function Ed(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wd(n,i){var o=Ed(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ed(o)}}function Td(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Td(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ad(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Pt(n.document)}return i}function pu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function jv(n){var i=Ad(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Td(o.ownerDocument.documentElement,o)){if(u!==null&&pu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=wd(o,m);var M=wd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=c&&"documentMode"in document&&11>=document.documentMode,ds=null,mu=null,To=null,gu=!1;function Cd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gu||ds==null||ds!==Pt(u)||(u=ds,"selectionStart"in u&&pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),To&&wo(To,u)||(To=u,u=Ea(mu,"onSelect"),0<u.length&&(i=new ou("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ds)))}function ya(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},vu={},Rd={};c&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Sa(n){if(vu[n])return vu[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Rd)return vu[n]=i[o];return n}var bd=Sa("animationend"),Pd=Sa("animationiteration"),Ld=Sa("animationstart"),Dd=Sa("transitionend"),Nd=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){Nd.set(n,i),l(i,[n])}for(var _u=0;_u<Ud.length;_u++){var xu=Ud[_u],qv=xu.toLowerCase(),$v=xu[0].toUpperCase()+xu.slice(1);Qi(qv,"on"+$v)}Qi(bd,"onAnimationEnd"),Qi(Pd,"onAnimationIteration"),Qi(Ld,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Dd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Id(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,co(u,i,void 0,n),n.currentTarget=null}function Fd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],B=I.instance,oe=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;Id(d,I,oe),m=B}else for(M=0;M<u.length;M++){if(I=u[M],B=I.instance,oe=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;Id(d,I,oe),m=B}}}if(bi)throw n=vi,bi=!1,vi=null,n}function Ot(n,i){var o=i[Cu];o===void 0&&(o=i[Cu]=new Set);var u=n+"__bubble";o.has(u)||(Od(i,n,2,!1),o.add(u))}function yu(n,i,o){var u=0;i&&(u|=4),Od(o,n,u,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[Ma]){n[Ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(Kv.has(o)||yu(o,!1,n),yu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,yu("selectionchange",!1,i))}}function Od(n,i,o,u){switch(od(i)){case 1:var d=cv;break;case 4:d=fv;break;default:d=iu}o=d.bind(null,i,o,n),d=void 0,!Kt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Su(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;I!==null;){if(M=br(I),M===null)return;if(B=M.tag,B===5||B===6){u=m=M;continue e}I=I.parentNode}}u=u.return}hn(function(){var oe=m,Se=Ve(o),Ee=[];e:{var ye=Nd.get(n);if(ye!==void 0){var je=ou,Ke=n;switch(n){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":je=Av;break;case"focusin":Ke="focus",je=uu;break;case"focusout":Ke="blur",je=uu;break;case"beforeblur":case"afterblur":je=uu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=bv;break;case bd:case Pd:case Ld:je=vv;break;case Dd:je=Lv;break;case"scroll":je=dv;break;case"wheel":je=Nv;break;case"copy":case"cut":case"paste":je=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=fd}var Qe=(i&4)!==0,Zt=!Qe&&n==="scroll",Z=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var W=oe,ne;W!==null;){ne=W;var be=ne.stateNode;if(ne.tag===5&&be!==null&&(ne=be,Z!==null&&(be=At(W,Z),be!=null&&Qe.push(Ro(W,be,ne)))),Zt)break;W=W.return}0<Qe.length&&(ye=new je(ye,Ke,null,o,Se),Ee.push({event:ye,listeners:Qe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",ye&&o!==at&&(Ke=o.relatedTarget||o.fromElement)&&(br(Ke)||Ke[Li]))break e;if((je||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,je?(Ke=o.relatedTarget||o.toElement,je=oe,Ke=Ke?br(Ke):null,Ke!==null&&(Zt=ri(Ke),Ke!==Zt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(je=null,Ke=oe),je!==Ke)){if(Qe=ud,be="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=fd,be="onPointerLeave",Z="onPointerEnter",W="pointer"),Zt=je==null?ye:gs(je),ne=Ke==null?ye:gs(Ke),ye=new Qe(be,W+"leave",je,o,Se),ye.target=Zt,ye.relatedTarget=ne,be=null,br(Se)===oe&&(Qe=new Qe(Z,W+"enter",Ke,o,Se),Qe.target=ne,Qe.relatedTarget=Zt,be=Qe),Zt=be,je&&Ke)t:{for(Qe=je,Z=Ke,W=0,ne=Qe;ne;ne=ps(ne))W++;for(ne=0,be=Z;be;be=ps(be))ne++;for(;0<W-ne;)Qe=ps(Qe),W--;for(;0<ne-W;)Z=ps(Z),ne--;for(;W--;){if(Qe===Z||Z!==null&&Qe===Z.alternate)break t;Qe=ps(Qe),Z=ps(Z)}Qe=null}else Qe=null;je!==null&&zd(Ee,ye,je,Qe,!1),Ke!==null&&Zt!==null&&zd(Ee,Zt,Ke,Qe,!0)}}e:{if(ye=oe?gs(oe):window,je=ye.nodeName&&ye.nodeName.toLowerCase(),je==="select"||je==="input"&&ye.type==="file")var nt=Bv;else if(vd(ye))if(xd)nt=Wv;else{nt=Gv;var ct=Hv}else(je=ye.nodeName)&&je.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(nt=Vv);if(nt&&(nt=nt(n,oe))){_d(Ee,nt,o,Se);break e}ct&&ct(n,ye,oe),n==="focusout"&&(ct=ye._wrapperState)&&ct.controlled&&ye.type==="number"&&qe(ye,"number",ye.value)}switch(ct=oe?gs(oe):window,n){case"focusin":(vd(ct)||ct.contentEditable==="true")&&(ds=ct,mu=oe,To=null);break;case"focusout":To=mu=ds=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Cd(Ee,o,Se);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Cd(Ee,o,Se)}var ft;if(fu)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else fs?md(n,o)&&(gt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(dd&&o.locale!=="ko"&&(fs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&fs&&(ft=ad()):(Ji=Se,su="value"in Ji?Ji.value:Ji.textContent,fs=!0)),ct=Ea(oe,gt),0<ct.length&&(gt=new cd(gt,n,null,o,Se),Ee.push({event:gt,listeners:ct}),ft?gt.data=ft:(ft=gd(o),ft!==null&&(gt.data=ft)))),(ft=Iv?Fv(n,o):Ov(n,o))&&(oe=Ea(oe,"onBeforeInput"),0<oe.length&&(Se=new cd("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:Se,listeners:oe}),Se.data=ft))}Fd(Ee,i)})}function Ro(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ea(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=At(n,o),m!=null&&u.unshift(Ro(n,m,d)),m=At(n,i),m!=null&&u.push(Ro(n,m,d))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zd(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var I=o,B=I.alternate,oe=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&oe!==null&&(I=oe,d?(B=At(o,m),B!=null&&M.unshift(Ro(o,B,I))):d||(B=At(o,m),B!=null&&M.push(Ro(o,B,I)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Zv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function kd(n){return(typeof n=="string"?n:""+n).replace(Zv,`
`).replace(Jv,"")}function wa(n,i,o){if(i=kd(i),kd(n)!==i&&o)throw Error(t(425))}function Ta(){}var Mu=null,Eu=null;function wu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(n){return Bd.resolve(null).then(n).catch(t_)}:Tu;function t_(n){setTimeout(function(){throw n})}function Au(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),_o(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);_o(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Hd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,bo="__reactProps$"+ms,Li="__reactContainer$"+ms,Cu="__reactEvents$"+ms,n_="__reactListeners$"+ms,i_="__reactHandles$"+ms;function br(n){var i=n[_i];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Li]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Hd(n);n!==null;){if(o=n[_i])return o;n=Hd(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[_i]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Aa(n){return n[bo]||null}var Ru=[],vs=-1;function tr(n){return{current:n}}function zt(n){0>vs||(n.current=Ru[vs],Ru[vs]=null,vs--)}function Ft(n,i){vs++,Ru[vs]=n.current,n.current=i}var nr={},vn=tr(nr),Dn=tr(!1),Pr=nr;function _s(n,i){var o=n.type.contextTypes;if(!o)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Nn(n){return n=n.childContextTypes,n!=null}function Ca(){zt(Dn),zt(vn)}function Gd(n,i,o){if(vn.current!==nr)throw Error(t(168));Ft(vn,i),Ft(Dn,o)}function Vd(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return q({},o,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Pr=vn.current,Ft(vn,n),Ft(Dn,Dn.current),!0}function Wd(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Vd(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,zt(Dn),zt(vn),Ft(vn,n)):zt(Dn),Ft(Dn,o)}var Di=null,ba=!1,bu=!1;function Xd(n){Di===null?Di=[n]:Di.push(n)}function r_(n){ba=!0,Xd(n)}function ir(){if(!bu&&Di!==null){bu=!0;var n=0,i=Nt;try{var o=Di;for(Nt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Di=null,ba=!1}catch(d){throw Di!==null&&(Di=Di.slice(n+1)),se(pt,ir),d}finally{Nt=i,bu=!1}}return null}var xs=[],ys=0,Pa=null,La=0,$n=[],Kn=0,Lr=null,Ni=1,Ui="";function Dr(n,i){xs[ys++]=La,xs[ys++]=Pa,Pa=n,La=i}function jd(n,i,o){$n[Kn++]=Ni,$n[Kn++]=Ui,$n[Kn++]=Lr,Lr=n;var u=Ni;n=Ui;var d=32-xt(u)-1;u&=~(1<<d),o+=1;var m=32-xt(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ni=1<<32-xt(i)+d|o<<d|u,Ui=m+n}else Ni=1<<m|o<<d|u,Ui=n}function Pu(n){n.return!==null&&(Dr(n,1),jd(n,1,0))}function Lu(n){for(;n===Pa;)Pa=xs[--ys],xs[ys]=null,La=xs[--ys],xs[ys]=null;for(;n===Lr;)Lr=$n[--Kn],$n[Kn]=null,Ui=$n[--Kn],$n[Kn]=null,Ni=$n[--Kn],$n[Kn]=null}var Hn=null,Gn=null,Ht=!1,oi=null;function Yd(n,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function qd(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:Ni,overflow:Ui}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Hn=n,Gn=null,!0):!1;default:return!1}}function Du(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nu(n){if(Ht){var i=Gn;if(i){var o=i;if(!qd(n,i)){if(Du(n))throw Error(t(418));i=er(o.nextSibling);var u=Hn;i&&qd(n,i)?Yd(u,o):(n.flags=n.flags&-4097|2,Ht=!1,Hn=n)}}else{if(Du(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Hn=n}}}function $d(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Da(n){if(n!==Hn)return!1;if(!Ht)return $d(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!wu(n.type,n.memoizedProps)),i&&(i=Gn)){if(Du(n))throw Kd(),Error(t(418));for(;i;)Yd(n,i),i=er(i.nextSibling)}if($d(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Gn=er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Hn?er(n.stateNode.nextSibling):null;return!0}function Kd(){for(var n=Gn;n;)n=er(n.nextSibling)}function Ss(){Gn=Hn=null,Ht=!1}function Uu(n){oi===null?oi=[n]:oi.push(n)}var s_=b.ReactCurrentBatchConfig;function Lo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var I=d.refs;M===null?delete I[m]:I[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Zd(n){var i=n._init;return i(n._payload)}function Jd(n){function i(Z,W){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[W],Z.flags|=16):ne.push(W)}}function o(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function u(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=fr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<W?(Z.flags|=2,W):ne):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function M(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,W,ne,be){return W===null||W.tag!==6?(W=Tc(ne,Z.mode,be),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function B(Z,W,ne,be){var nt=ne.type;return nt===D?Se(Z,W,ne.props.children,be,ne.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ie&&Zd(nt)===W.type)?(be=d(W,ne.props),be.ref=Lo(Z,W,ne),be.return=Z,be):(be=il(ne.type,ne.key,ne.props,null,Z.mode,be),be.ref=Lo(Z,W,ne),be.return=Z,be)}function oe(Z,W,ne,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Ac(ne,Z.mode,be),W.return=Z,W):(W=d(W,ne.children||[]),W.return=Z,W)}function Se(Z,W,ne,be,nt){return W===null||W.tag!==7?(W=Br(ne,Z.mode,be,nt),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function Ee(Z,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Tc(""+W,Z.mode,ne),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return ne=il(W.type,W.key,W.props,null,Z.mode,ne),ne.ref=Lo(Z,null,W),ne.return=Z,ne;case F:return W=Ac(W,Z.mode,ne),W.return=Z,W;case ie:var be=W._init;return Ee(Z,be(W._payload),ne)}if(Et(W)||Q(W))return W=Br(W,Z.mode,ne,null),W.return=Z,W;Na(Z,W)}return null}function ye(Z,W,ne,be){var nt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return nt!==null?null:I(Z,W,""+ne,be);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:return ne.key===nt?B(Z,W,ne,be):null;case F:return ne.key===nt?oe(Z,W,ne,be):null;case ie:return nt=ne._init,ye(Z,W,nt(ne._payload),be)}if(Et(ne)||Q(ne))return nt!==null?null:Se(Z,W,ne,be,null);Na(Z,ne)}return null}function je(Z,W,ne,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number")return Z=Z.get(ne)||null,I(W,Z,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case z:return Z=Z.get(be.key===null?ne:be.key)||null,B(W,Z,be,nt);case F:return Z=Z.get(be.key===null?ne:be.key)||null,oe(W,Z,be,nt);case ie:var ct=be._init;return je(Z,W,ne,ct(be._payload),nt)}if(Et(be)||Q(be))return Z=Z.get(ne)||null,Se(W,Z,be,nt,null);Na(W,be)}return null}function Ke(Z,W,ne,be){for(var nt=null,ct=null,ft=W,gt=W=0,cn=null;ft!==null&&gt<ne.length;gt++){ft.index>gt?(cn=ft,ft=null):cn=ft.sibling;var bt=ye(Z,ft,ne[gt],be);if(bt===null){ft===null&&(ft=cn);break}n&&ft&&bt.alternate===null&&i(Z,ft),W=m(bt,W,gt),ct===null?nt=bt:ct.sibling=bt,ct=bt,ft=cn}if(gt===ne.length)return o(Z,ft),Ht&&Dr(Z,gt),nt;if(ft===null){for(;gt<ne.length;gt++)ft=Ee(Z,ne[gt],be),ft!==null&&(W=m(ft,W,gt),ct===null?nt=ft:ct.sibling=ft,ct=ft);return Ht&&Dr(Z,gt),nt}for(ft=u(Z,ft);gt<ne.length;gt++)cn=je(ft,Z,gt,ne[gt],be),cn!==null&&(n&&cn.alternate!==null&&ft.delete(cn.key===null?gt:cn.key),W=m(cn,W,gt),ct===null?nt=cn:ct.sibling=cn,ct=cn);return n&&ft.forEach(function(dr){return i(Z,dr)}),Ht&&Dr(Z,gt),nt}function Qe(Z,W,ne,be){var nt=Q(ne);if(typeof nt!="function")throw Error(t(150));if(ne=nt.call(ne),ne==null)throw Error(t(151));for(var ct=nt=null,ft=W,gt=W=0,cn=null,bt=ne.next();ft!==null&&!bt.done;gt++,bt=ne.next()){ft.index>gt?(cn=ft,ft=null):cn=ft.sibling;var dr=ye(Z,ft,bt.value,be);if(dr===null){ft===null&&(ft=cn);break}n&&ft&&dr.alternate===null&&i(Z,ft),W=m(dr,W,gt),ct===null?nt=dr:ct.sibling=dr,ct=dr,ft=cn}if(bt.done)return o(Z,ft),Ht&&Dr(Z,gt),nt;if(ft===null){for(;!bt.done;gt++,bt=ne.next())bt=Ee(Z,bt.value,be),bt!==null&&(W=m(bt,W,gt),ct===null?nt=bt:ct.sibling=bt,ct=bt);return Ht&&Dr(Z,gt),nt}for(ft=u(Z,ft);!bt.done;gt++,bt=ne.next())bt=je(ft,Z,gt,bt.value,be),bt!==null&&(n&&bt.alternate!==null&&ft.delete(bt.key===null?gt:bt.key),W=m(bt,W,gt),ct===null?nt=bt:ct.sibling=bt,ct=bt);return n&&ft.forEach(function(z_){return i(Z,z_)}),Ht&&Dr(Z,gt),nt}function Zt(Z,W,ne,be){if(typeof ne=="object"&&ne!==null&&ne.type===D&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:e:{for(var nt=ne.key,ct=W;ct!==null;){if(ct.key===nt){if(nt=ne.type,nt===D){if(ct.tag===7){o(Z,ct.sibling),W=d(ct,ne.props.children),W.return=Z,Z=W;break e}}else if(ct.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ie&&Zd(nt)===ct.type){o(Z,ct.sibling),W=d(ct,ne.props),W.ref=Lo(Z,ct,ne),W.return=Z,Z=W;break e}o(Z,ct);break}else i(Z,ct);ct=ct.sibling}ne.type===D?(W=Br(ne.props.children,Z.mode,be,ne.key),W.return=Z,Z=W):(be=il(ne.type,ne.key,ne.props,null,Z.mode,be),be.ref=Lo(Z,W,ne),be.return=Z,Z=be)}return M(Z);case F:e:{for(ct=ne.key;W!==null;){if(W.key===ct)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){o(Z,W.sibling),W=d(W,ne.children||[]),W.return=Z,Z=W;break e}else{o(Z,W);break}else i(Z,W);W=W.sibling}W=Ac(ne,Z.mode,be),W.return=Z,Z=W}return M(Z);case ie:return ct=ne._init,Zt(Z,W,ct(ne._payload),be)}if(Et(ne))return Ke(Z,W,ne,be);if(Q(ne))return Qe(Z,W,ne,be);Na(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(o(Z,W.sibling),W=d(W,ne),W.return=Z,Z=W):(o(Z,W),W=Tc(ne,Z.mode,be),W.return=Z,Z=W),M(Z)):o(Z,W)}return Zt}var Ms=Jd(!0),Qd=Jd(!1),Ua=tr(null),Ia=null,Es=null,Iu=null;function Fu(){Iu=Es=Ia=null}function Ou(n){var i=Ua.current;zt(Ua),n._currentValue=i}function zu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Ia=n,Iu=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Ia===null)throw Error(t(308));Es=n,Ia.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Nr=null;function ku(n){Nr===null?Nr=[n]:Nr.push(n)}function eh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,ku(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ii(n,u)}function Ii(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var rr=!1;function Bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Rt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ii(n,o)}return d=u.interleaved,d===null?(i.next=i,ku(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ii(n,o)}function Fa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,eu(n,o)}}function nh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Oa(n,i,o,u){var d=n.updateQueue;rr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,oe=B.next;B.next=null,M===null?m=oe:M.next=oe,M=B;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==M&&(I===null?Se.firstBaseUpdate=oe:I.next=oe,Se.lastBaseUpdate=B))}if(m!==null){var Ee=d.baseState;M=0,Se=oe=B=null,I=m;do{var ye=I.lane,je=I.eventTime;if((u&ye)===ye){Se!==null&&(Se=Se.next={eventTime:je,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ke=n,Qe=I;switch(ye=i,je=o,Qe.tag){case 1:if(Ke=Qe.payload,typeof Ke=="function"){Ee=Ke.call(je,Ee,ye);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Qe.payload,ye=typeof Ke=="function"?Ke.call(je,Ee,ye):Ke,ye==null)break e;Ee=q({},Ee,ye);break e;case 2:rr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ye=d.effects,ye===null?d.effects=[I]:ye.push(I))}else je={eventTime:je,lane:ye,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(oe=Se=je,B=Ee):Se=Se.next=je,M|=ye;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ye=I,I=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Se===null&&(B=Ee),d.baseState=B,d.firstBaseUpdate=oe,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=M,n.lanes=M,n.memoizedState=Ee}}function ih(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Do={},xi=tr(Do),No=tr(Do),Uo=tr(Do);function Ur(n){if(n===Do)throw Error(t(174));return n}function Hu(n,i){switch(Ft(Uo,i),Ft(No,n),Ft(xi,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:dt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=dt(i,n)}zt(xi),Ft(xi,i)}function Ts(){zt(xi),zt(No),zt(Uo)}function rh(n){Ur(Uo.current);var i=Ur(xi.current),o=dt(i,n.type);i!==o&&(Ft(No,n),Ft(xi,o))}function Gu(n){No.current===n&&(zt(xi),zt(No))}var Xt=tr(0);function za(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vu=[];function Wu(){for(var n=0;n<Vu.length;n++)Vu[n]._workInProgressVersionPrimary=null;Vu.length=0}var ka=b.ReactCurrentDispatcher,Xu=b.ReactCurrentBatchConfig,Ir=0,jt=null,tn=null,ln=null,Ba=!1,Io=!1,Fo=0,o_=0;function _n(){throw Error(t(321))}function ju(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!si(n[o],i[o]))return!1;return!0}function Yu(n,i,o,u,d,m){if(Ir=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?c_:f_,n=o(u,d),Io){m=0;do{if(Io=!1,Fo=0,25<=m)throw Error(t(301));m+=1,ln=tn=null,i.updateQueue=null,ka.current=d_,n=o(u,d)}while(Io)}if(ka.current=Va,i=tn!==null&&tn.next!==null,Ir=0,ln=tn=jt=null,Ba=!1,i)throw Error(t(300));return n}function qu(){var n=Fo!==0;return Fo=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=n:ln=ln.next=n,ln}function Jn(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?jt.memoizedState=ln=n:ln=ln.next=n}return ln}function Oo(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=tn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=M=null,B=null,oe=m;do{var Se=oe.lane;if((Ir&Se)===Se)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var Ee={lane:Se,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(I=B=Ee,M=u):B=B.next=Ee,jt.lanes|=Se,Fr|=Se}oe=oe.next}while(oe!==null&&oe!==m);B===null?M=u:B.next=I,si(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,jt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ku(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);si(m,i.memoizedState)||(Un=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function sh(){}function oh(n,i){var o=jt,u=Jn(),d=i(),m=!si(u.memoizedState,d);if(m&&(u.memoizedState=d,Un=!0),u=u.queue,Zu(uh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,zo(9,lh.bind(null,o,u,d,i),void 0,null),un===null)throw Error(t(349));(Ir&30)!==0||ah(o,i,d)}return d}function ah(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function lh(n,i,o,u){i.value=o,i.getSnapshot=u,ch(i)&&fh(n)}function uh(n,i,o){return o(function(){ch(i)&&fh(n)})}function ch(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!si(n,o)}catch{return!0}}function fh(n){var i=Ii(n,1);i!==null&&ci(i,n,1,-1)}function dh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=u_.bind(null,jt,n),[i.memoizedState,n]}function zo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function hh(){return Jn().memoizedState}function Ha(n,i,o,u){var d=yi();jt.flags|=n,d.memoizedState=zo(1|i,o,void 0,u===void 0?null:u)}function Ga(n,i,o,u){var d=Jn();u=u===void 0?null:u;var m=void 0;if(tn!==null){var M=tn.memoizedState;if(m=M.destroy,u!==null&&ju(u,M.deps)){d.memoizedState=zo(i,o,m,u);return}}jt.flags|=n,d.memoizedState=zo(1|i,o,m,u)}function ph(n,i){return Ha(8390656,8,n,i)}function Zu(n,i){return Ga(2048,8,n,i)}function mh(n,i){return Ga(4,2,n,i)}function gh(n,i){return Ga(4,4,n,i)}function vh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _h(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4,4,vh.bind(null,i,n),o)}function Ju(){}function xh(n,i){var o=Jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function yh(n,i){var o=Jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Sh(n,i,o){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(si(o,i)||(o=ca(),jt.lanes|=o,Fr|=o,n.baseState=!0),i)}function a_(n,i){var o=Nt;Nt=o!==0&&4>o?o:4,n(!0);var u=Xu.transition;Xu.transition={};try{n(!1),i()}finally{Nt=o,Xu.transition=u}}function Mh(){return Jn().memoizedState}function l_(n,i,o){var u=ur(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Eh(n))wh(i,o);else if(o=eh(n,i,o,u),o!==null){var d=Tn();ci(o,n,u,d),Th(o,i,u)}}function u_(n,i,o){var u=ur(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Eh(n))wh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,I=m(M,o);if(d.hasEagerState=!0,d.eagerState=I,si(I,M)){var B=i.interleaved;B===null?(d.next=d,ku(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=eh(n,i,d,u),o!==null&&(d=Tn(),ci(o,n,u,d),Th(o,i,u))}}function Eh(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function wh(n,i){Io=Ba=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Th(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,eu(n,o)}}var Va={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},c_={readContext:Zn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:ph,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4194308,4,vh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ha(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ha(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=yi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=l_.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:dh,useDebugValue:Ju,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=dh(!1),i=n[0];return n=a_.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=jt,d=yi();if(Ht){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),un===null)throw Error(t(349));(Ir&30)!==0||ah(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,ph(uh.bind(null,u,m,n),[n]),u.flags|=2048,zo(9,lh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=yi(),i=un.identifierPrefix;if(Ht){var o=Ui,u=Ni;o=(u&~(1<<32-xt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=o_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},f_={readContext:Zn,useCallback:xh,useContext:Zn,useEffect:Zu,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:$u,useRef:hh,useState:function(){return $u(Oo)},useDebugValue:Ju,useDeferredValue:function(n){var i=Jn();return Sh(i,tn.memoizedState,n)},useTransition:function(){var n=$u(Oo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},d_={readContext:Zn,useCallback:xh,useContext:Zn,useEffect:Zu,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Ku,useRef:hh,useState:function(){return Ku(Oo)},useDebugValue:Ju,useDeferredValue:function(n){var i=Jn();return tn===null?i.memoizedState=n:Sh(i,tn.memoizedState,n)},useTransition:function(){var n=Ku(Oo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function ai(n,i){if(n&&n.defaultProps){i=q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Qu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Wa={isMounted:function(n){return(n=n._reactInternals)?ri(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=ur(n),m=Fi(u,d);m.payload=i,o!=null&&(m.callback=o),i=sr(n,m,d),i!==null&&(ci(i,n,d,u),Fa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=ur(n),m=Fi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=sr(n,m,d),i!==null&&(ci(i,n,d,u),Fa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Tn(),u=ur(n),d=Fi(o,u);d.tag=2,i!=null&&(d.callback=i),i=sr(n,d,u),i!==null&&(ci(i,n,u,o),Fa(i,n,u))}};function Ah(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!wo(o,u)||!wo(d,m):!0}function Ch(n,i,o){var u=!1,d=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(d=Nn(i)?Pr:vn.current,u=i.contextTypes,m=(u=u!=null)?_s(n,d):nr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Rh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Wa.enqueueReplaceState(i,i.state,null)}function ec(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Bu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Zn(m):(m=Nn(i)?Pr:vn.current,d.context=_s(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Qu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wa.enqueueReplaceState(d,d.state,null),Oa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",u=i;do o+=ee(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function tc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function nc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function bh(n,i,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Za||(Za=!0,vc=u),nc(n,i)},o}function Ph(n,i,o){o=Fi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){nc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){nc(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Lh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new h_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=C_.bind(null,n,i,o),i.then(n,n))}function Dh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Nh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Fi(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var p_=b.ReactCurrentOwner,Un=!1;function wn(n,i,o,u){i.child=n===null?Qd(i,null,o,u):Ms(i,n.child,o,u)}function Uh(n,i,o,u,d){o=o.render;var m=i.ref;return ws(i,d),u=Yu(n,i,o,u,m,d),o=qu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Oi(n,i,d)):(Ht&&o&&Pu(i),i.flags|=1,wn(n,i,u,d),i.child)}function Ih(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!wc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Fh(n,i,m,u,d)):(n=il(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(M,u)&&n.ref===i.ref)return Oi(n,i,d)}return i.flags|=1,n=fr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Fh(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(wo(m,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,Oi(n,i,d)}return ic(n,i,o,u,d)}function Oh(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Rs,Vn),Vn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Rs,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ft(Rs,Vn),Vn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ft(Rs,Vn),Vn|=u;return wn(n,i,d,o),i.child}function zh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ic(n,i,o,u,d){var m=Nn(o)?Pr:vn.current;return m=_s(i,m),ws(i,d),o=Yu(n,i,o,u,m,d),u=qu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Oi(n,i,d)):(Ht&&u&&Pu(i),i.flags|=1,wn(n,i,o,d),i.child)}function kh(n,i,o,u,d){if(Nn(o)){var m=!0;Ra(i)}else m=!1;if(ws(i,d),i.stateNode===null)ja(n,i),Ch(i,o,u),ec(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var B=M.context,oe=o.contextType;typeof oe=="object"&&oe!==null?oe=Zn(oe):(oe=Nn(o)?Pr:vn.current,oe=_s(i,oe));var Se=o.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||B!==oe)&&Rh(i,M,u,oe),rr=!1;var ye=i.memoizedState;M.state=ye,Oa(i,u,M,d),B=i.memoizedState,I!==u||ye!==B||Dn.current||rr?(typeof Se=="function"&&(Qu(i,o,Se,u),B=i.memoizedState),(I=rr||Ah(i,o,I,u,ye,B,oe))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=oe,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,th(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:ai(i.type,I),M.props=oe,Ee=i.pendingProps,ye=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Nn(o)?Pr:vn.current,B=_s(i,B));var je=o.getDerivedStateFromProps;(Se=typeof je=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Ee||ye!==B)&&Rh(i,M,u,B),rr=!1,ye=i.memoizedState,M.state=ye,Oa(i,u,M,d);var Ke=i.memoizedState;I!==Ee||ye!==Ke||Dn.current||rr?(typeof je=="function"&&(Qu(i,o,je,u),Ke=i.memoizedState),(oe=rr||Ah(i,o,oe,u,ye,Ke,B)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ke,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ke,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ke),M.props=u,M.state=Ke,M.context=B,u=oe):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),u=!1)}return rc(n,i,o,u,m,d)}function rc(n,i,o,u,d,m){zh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&Wd(i,o,!1),Oi(n,i,m);u=i.stateNode,p_.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,I,m)):wn(n,i,I,m),i.memoizedState=u.state,d&&Wd(i,o,!0),i.child}function Bh(n){var i=n.stateNode;i.pendingContext?Gd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gd(n,i.context,!1),Hu(n,i.containerInfo)}function Hh(n,i,o,u,d){return Ss(),Uu(d),i.flags|=256,wn(n,i,o,u),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gh(n,i,o){var u=i.pendingProps,d=Xt.current,m=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Xt,d&1),n===null)return Nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=rl(M,u,0,null),n=Br(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=oc(o),i.memoizedState=sc,n):ac(i,M));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return m_(n,i,M,u,I,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=fr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=fr(I,m):(m=Br(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?oc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=sc,u}return m=n.child,n=m.sibling,u=fr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function ac(n,i){return i=rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xa(n,i,o,u){return u!==null&&Uu(u),Ms(i,n.child,null,o),n=ac(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function m_(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=tc(Error(t(422))),Xa(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=rl({mode:"visible",children:u.children},d,0,null),m=Br(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ms(i,n.child,null,M),i.child.memoizedState=oc(M),i.memoizedState=sc,m);if((i.mode&1)===0)return Xa(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=tc(m,u,void 0),Xa(n,i,M,u)}if(I=(M&n.childLanes)!==0,Un||I){if(u=un,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ii(n,d),ci(u,n,d,-1))}return Ec(),u=tc(Error(t(421))),Xa(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=R_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Gn=er(d.nextSibling),Hn=i,Ht=!0,oi=null,n!==null&&($n[Kn++]=Ni,$n[Kn++]=Ui,$n[Kn++]=Lr,Ni=n.id,Ui=n.overflow,Lr=i),i=ac(i,u.children),i.flags|=4096,i)}function Vh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),zu(n.return,i,o)}function lc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Wh(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(wn(n,i,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vh(n,o,i);else if(n.tag===19)Vh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&za(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),lc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&za(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}lc(i,!0,o,null,m);break;case"together":lc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function g_(n,i,o){switch(i.tag){case 3:Bh(i),Ss();break;case 5:rh(i);break;case 1:Nn(i.type)&&Ra(i);break;case 4:Hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ft(Ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Gh(n,i,o):(Ft(Xt,Xt.current&1),n=Oi(n,i,o),n!==null?n.sibling:null);Ft(Xt,Xt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Wh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,Oh(n,i,o)}return Oi(n,i,o)}var Xh,uc,jh,Yh;Xh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uc=function(){},jh=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(xi.current);var m=null;switch(o){case"input":d=ve(n,d),u=ve(n,u),m=[];break;case"select":d=q({},d,{value:void 0}),u=q({},u,{value:void 0}),m=[];break;case"textarea":d=A(n,d),u=A(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ta)}Be(o,u);var M;o=null;for(oe in d)if(!u.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var I=d[oe];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in u){var B=u[oe];if(I=d!=null?d[oe]:void 0,u.hasOwnProperty(oe)&&B!==I&&(B!=null||I!=null))if(oe==="style")if(I){for(M in I)!I.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&I[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(m||(m=[]),m.push(oe,o)),o=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Ot("scroll",n),m||I===B||(m=[])):(m=m||[]).push(oe,B))}o&&(m=m||[]).push("style",o);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Yh=function(n,i,o,u){o!==u&&(i.flags|=4)};function ko(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function v_(n,i,o){var u=i.pendingProps;switch(Lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Nn(i.type)&&Ca(),xn(i),null;case 3:return u=i.stateNode,Ts(),zt(Dn),zt(vn),Wu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Da(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(yc(oi),oi=null))),uc(n,i),xn(i),null;case 5:Gu(i);var d=Ur(Uo.current);if(o=i.type,n!==null&&i.stateNode!=null)jh(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=Ur(xi.current),Da(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<Ao.length;d++)Ot(Ao[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Je(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":de(u,m),Ot("invalid",u)}Be(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var I=m[M];M==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&wa(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&wa(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ot("scroll",u)}switch(o){case"input":ot(u),Fe(u,m,!0);break;case"textarea":ot(u),Me(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ta)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[_i]=i,n[bo]=u,Xh(n,i,!1,!1),i.stateNode=n;e:{switch(M=He(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ao.length;d++)Ot(Ao[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Je(n,u),d=ve(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=q({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":de(n,u),d=A(n,u),Ot("invalid",n);break;default:d=u}Be(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?_t(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Re(n,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&_e(n,B):typeof B=="number"&&_e(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Ot("scroll",n):B!=null&&C(n,m,B,M))}switch(o){case"input":ot(n),Fe(n,u,!1);break;case"textarea":ot(n),Me(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?L(n,!!u.multiple,m,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)Yh(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ur(Uo.current),Ur(xi.current),Da(i)){if(u=i.stateNode,o=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==o)&&(n=Hn,n!==null))switch(n.tag){case 3:wa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wa(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return xn(i),null;case 13:if(zt(Xt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kd(),Ss(),i.flags|=98560,m=!1;else if(m=Da(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else oi!==null&&(yc(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?nn===0&&(nn=3):Ec())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ts(),uc(n,i),n===null&&Co(i.stateNode.containerInfo),xn(i),null;case 10:return Ou(i.type._context),xn(i),null;case 17:return Nn(i.type)&&Ca(),xn(i),null;case 19:if(zt(Xt),m=i.memoizedState,m===null)return xn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)ko(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=za(n),M!==null){for(i.flags|=128,ko(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Xt,Xt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xe()>bs&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304)}else{if(!u)if(n=za(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ko(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ht)return xn(i),null}else 2*Xe()-m.renderingStartTime>bs&&o!==1073741824&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xe(),i.sibling=null,o=Xt.current,Ft(Xt,u?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return Mc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function __(n,i){switch(Lu(i),i.tag){case 1:return Nn(i.type)&&Ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),zt(Dn),zt(vn),Wu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gu(i),null;case 13:if(zt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Xt),null;case 4:return Ts(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var Ya=!1,yn=!1,x_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Cs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){$t(n,i,u)}else o.current=null}function cc(n,i,o){try{o()}catch(u){$t(n,i,u)}}var qh=!1;function y_(n,i){if(Mu=ha,n=Ad(),pu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,I=-1,B=-1,oe=0,Se=0,Ee=n,ye=null;t:for(;;){for(var je;Ee!==o||d!==0&&Ee.nodeType!==3||(I=M+d),Ee!==m||u!==0&&Ee.nodeType!==3||(B=M+u),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(je=Ee.firstChild)!==null;)ye=Ee,Ee=je;for(;;){if(Ee===n)break t;if(ye===o&&++oe===d&&(I=M),ye===m&&++Se===u&&(B=M),(je=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=je}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eu={focusedElem:n,selectionRange:o},ha=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Qe=Ke.memoizedProps,Zt=Ke.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ai(i.type,Qe),Zt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){$t(i,i.return,be)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return Ke=qh,qh=!1,Ke}function Bo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&cc(i,o,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function fc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function $h(n){var i=n.alternate;i!==null&&(n.alternate=null,$h(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[bo],delete i[Cu],delete i[n_],delete i[i_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kh(n){return n.tag===5||n.tag===3||n.tag===4}function Zh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Kh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(n=n.child,n!==null))for(dc(n,i,o),n=n.sibling;n!==null;)dc(n,i,o),n=n.sibling}function hc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(hc(n,i,o),n=n.sibling;n!==null;)hc(n,i,o),n=n.sibling}var pn=null,li=!1;function or(n,i,o){for(o=o.child;o!==null;)Jh(n,i,o),o=o.sibling}function Jh(n,i,o){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Ge,o)}catch{}switch(o.tag){case 5:yn||Cs(o,i);case 6:var u=pn,d=li;pn=null,or(n,i,o),pn=u,li=d,pn!==null&&(li?(n=pn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):pn.removeChild(o.stateNode));break;case 18:pn!==null&&(li?(n=pn,o=o.stateNode,n.nodeType===8?Au(n.parentNode,o):n.nodeType===1&&Au(n,o),_o(n)):Au(pn,o.stateNode));break;case 4:u=pn,d=li,pn=o.stateNode.containerInfo,li=!0,or(n,i,o),pn=u,li=d;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&cc(o,i,M),d=d.next}while(d!==u)}or(n,i,o);break;case 1:if(!yn&&(Cs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){$t(o,i,I)}or(n,i,o);break;case 21:or(n,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,or(n,i,o),yn=u):or(n,i,o);break;default:or(n,i,o)}}function Qh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new x_),i.forEach(function(u){var d=b_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ui(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,li=!1;break e;case 3:pn=I.stateNode.containerInfo,li=!0;break e;case 4:pn=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(pn===null)throw Error(t(160));Jh(m,M,d),pn=null,li=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(oe){$t(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,n),i=i.sibling}function ep(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),Si(n),u&4){try{Bo(3,n,n.return),qa(3,n)}catch(Qe){$t(n,n.return,Qe)}try{Bo(5,n,n.return)}catch(Qe){$t(n,n.return,Qe)}}break;case 1:ui(i,n),Si(n),u&512&&o!==null&&Cs(o,o.return);break;case 5:if(ui(i,n),Si(n),u&512&&o!==null&&Cs(o,o.return),n.flags&32){var d=n.stateNode;try{_e(d,"")}catch(Qe){$t(n,n.return,Qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Pe(d,m),He(I,M);var oe=He(I,m);for(M=0;M<B.length;M+=2){var Se=B[M],Ee=B[M+1];Se==="style"?_t(d,Ee):Se==="dangerouslySetInnerHTML"?Re(d,Ee):Se==="children"?_e(d,Ee):C(d,Se,Ee,oe)}switch(I){case"input":ke(d,m);break;case"textarea":me(d,m);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var je=m.value;je!=null?L(d,!!m.multiple,je,!1):ye!==!!m.multiple&&(m.defaultValue!=null?L(d,!!m.multiple,m.defaultValue,!0):L(d,!!m.multiple,m.multiple?[]:"",!1))}d[bo]=m}catch(Qe){$t(n,n.return,Qe)}}break;case 6:if(ui(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){$t(n,n.return,Qe)}}break;case 3:if(ui(i,n),Si(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{_o(i.containerInfo)}catch(Qe){$t(n,n.return,Qe)}break;case 4:ui(i,n),Si(n);break;case 13:ui(i,n),Si(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(gc=Xe())),u&4&&Qh(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(oe=yn)||Se,ui(i,n),yn=oe):ui(i,n),Si(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Se&&(n.mode&1)!==0)for($e=n,Se=n.child;Se!==null;){for(Ee=$e=Se;$e!==null;){switch(ye=$e,je=ye.child,ye.tag){case 0:case 11:case 14:case 15:Bo(4,ye,ye.return);break;case 1:Cs(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=ye,o=ye.return;try{i=u,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Qe){$t(u,o,Qe)}}break;case 5:Cs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){ip(Ee);continue}}je!==null?(je.return=ye,$e=je):ip(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{d=Ee.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Ee.stateNode,B=Ee.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Ct("display",M))}catch(Qe){$t(n,n.return,Qe)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=oe?"":Ee.memoizedProps}catch(Qe){$t(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ui(i,n),Si(n),u&4&&Qh(n);break;case 21:break;default:ui(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Kh(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(_e(d,""),u.flags&=-33);var m=Zh(n);hc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,I=Zh(n);dc(n,I,M);break;default:throw Error(t(161))}}catch(B){$t(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function S_(n,i,o){$e=n,tp(n)}function tp(n,i,o){for(var u=(n.mode&1)!==0;$e!==null;){var d=$e,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Ya;if(!M){var I=d.alternate,B=I!==null&&I.memoizedState!==null||yn;I=Ya;var oe=yn;if(Ya=M,(yn=B)&&!oe)for($e=d;$e!==null;)M=$e,B=M.child,M.tag===22&&M.memoizedState!==null?rp(d):B!==null?(B.return=M,$e=B):rp(d);for(;m!==null;)$e=m,tp(m),m=m.sibling;$e=d,Ya=I,yn=oe}np(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,$e=m):np(n)}}function np(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ai(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ih(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ih(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Se=oe.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&_o(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&fc(i)}catch(ye){$t(i,i.return,ye)}}if(i===n){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function ip(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function rp(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(B){$t(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){$t(i,d,B)}}var m=i.return;try{fc(i)}catch(B){$t(i,m,B)}break;case 5:var M=i.return;try{fc(i)}catch(B){$t(i,M,B)}}}catch(B){$t(i,i.return,B)}if(i===n){$e=null;break}var I=i.sibling;if(I!==null){I.return=i.return,$e=I;break}$e=i.return}}var M_=Math.ceil,$a=b.ReactCurrentDispatcher,pc=b.ReactCurrentOwner,Qn=b.ReactCurrentBatchConfig,Rt=0,un=null,Jt=null,mn=0,Vn=0,Rs=tr(0),nn=0,Ho=null,Fr=0,Ka=0,mc=0,Go=null,In=null,gc=0,bs=1/0,zi=null,Za=!1,vc=null,ar=null,Ja=!1,lr=null,Qa=0,Vo=0,_c=null,el=-1,tl=0;function Tn(){return(Rt&6)!==0?Xe():el!==-1?el:el=Xe()}function ur(n){return(n.mode&1)===0?1:(Rt&2)!==0&&mn!==0?mn&-mn:s_.transition!==null?(tl===0&&(tl=ca()),tl):(n=Nt,n!==0||(n=window.event,n=n===void 0?16:od(n.type)),n)}function ci(n,i,o,u){if(50<Vo)throw Vo=0,_c=null,Error(t(185));ho(n,o,u),((Rt&2)===0||n!==un)&&(n===un&&((Rt&2)===0&&(Ka|=o),nn===4&&cr(n,mn)),Fn(n,u),o===1&&Rt===0&&(i.mode&1)===0&&(bs=Xe()+500,ba&&ir()))}function Fn(n,i){var o=n.callbackNode;Ln(n,i);var u=qn(n,n===un?mn:0);if(u===0)o!==null&&We(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&We(o),i===1)n.tag===0?r_(op.bind(null,n)):Xd(op.bind(null,n)),e_(function(){(Rt&6)===0&&ir()}),o=null;else{switch(Jf(u)){case 1:o=pt;break;case 4:o=mt;break;case 16:o=Dt;break;case 536870912:o=O;break;default:o=Dt}o=pp(o,sp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function sp(n,i){if(el=-1,tl=0,(Rt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ps()&&n.callbackNode!==o)return null;var u=qn(n,n===un?mn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=nl(n,u);else{i=u;var d=Rt;Rt|=2;var m=lp();(un!==n||mn!==i)&&(zi=null,bs=Xe()+500,zr(n,i));do try{T_();break}catch(I){ap(n,I)}while(!0);Fu(),$a.current=m,Rt=d,Jt!==null?i=0:(un=null,mn=0,i=nn)}if(i!==0){if(i===2&&(d=Rr(n),d!==0&&(u=d,i=xc(n,d))),i===1)throw o=Ho,zr(n,0),cr(n,u),Fn(n,Xe()),o;if(i===6)cr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!E_(d)&&(i=nl(n,u),i===2&&(m=Rr(n),m!==0&&(u=m,i=xc(n,m))),i===1))throw o=Ho,zr(n,0),cr(n,u),Fn(n,Xe()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,In,zi);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=gc+500-Xe(),10<i)){if(qn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Tu(kr.bind(null,n,In,zi),i);break}kr(n,In,zi);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-xt(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=Xe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*M_(u/1960))-u,10<u){n.timeoutHandle=Tu(kr.bind(null,n,In,zi),u);break}kr(n,In,zi);break;case 5:kr(n,In,zi);break;default:throw Error(t(329))}}}return Fn(n,Xe()),n.callbackNode===o?sp.bind(null,n):null}function xc(n,i){var o=Go;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=nl(n,i),n!==2&&(i=In,In=o,i!==null&&yc(i)),n}function yc(n){In===null?In=n:In.push.apply(In,n)}function E_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!si(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~mc,i&=~Ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-xt(i),u=1<<o;n[o]=-1,i&=~u}}function op(n){if((Rt&6)!==0)throw Error(t(327));Ps();var i=qn(n,0);if((i&1)===0)return Fn(n,Xe()),null;var o=nl(n,i);if(n.tag!==0&&o===2){var u=Rr(n);u!==0&&(i=u,o=xc(n,u))}if(o===1)throw o=Ho,zr(n,0),cr(n,i),Fn(n,Xe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,In,zi),Fn(n,Xe()),null}function Sc(n,i){var o=Rt;Rt|=1;try{return n(i)}finally{Rt=o,Rt===0&&(bs=Xe()+500,ba&&ir())}}function Or(n){lr!==null&&lr.tag===0&&(Rt&6)===0&&Ps();var i=Rt;Rt|=1;var o=Qn.transition,u=Nt;try{if(Qn.transition=null,Nt=1,n)return n()}finally{Nt=u,Qn.transition=o,Rt=i,(Rt&6)===0&&ir()}}function Mc(){Vn=Rs.current,zt(Rs)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),Jt!==null)for(o=Jt.return;o!==null;){var u=o;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ca();break;case 3:Ts(),zt(Dn),zt(vn),Wu();break;case 5:Gu(u);break;case 4:Ts();break;case 13:zt(Xt);break;case 19:zt(Xt);break;case 10:Ou(u.type._context);break;case 22:case 23:Mc()}o=o.return}if(un=n,Jt=n=fr(n.current,null),mn=Vn=i,nn=0,Ho=null,mc=Ka=Fr=0,In=Go=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Nr=null}return n}function ap(n,i){do{var o=Jt;try{if(Fu(),ka.current=Va,Ba){for(var u=jt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ba=!1}if(Ir=0,ln=tn=jt=null,Io=!1,Fo=0,pc.current=null,o===null||o.return===null){nn=1,Ho=i,Jt=null;break}e:{var m=n,M=o.return,I=o,B=i;if(i=mn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,Se=I,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var je=Dh(M);if(je!==null){je.flags&=-257,Nh(je,M,I,m,i),je.mode&1&&Lh(m,oe,i),i=je,B=oe;var Ke=i.updateQueue;if(Ke===null){var Qe=new Set;Qe.add(B),i.updateQueue=Qe}else Ke.add(B);break e}else{if((i&1)===0){Lh(m,oe,i),Ec();break e}B=Error(t(426))}}else if(Ht&&I.mode&1){var Zt=Dh(M);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Nh(Zt,M,I,m,i),Uu(As(B,I));break e}}m=B=As(B,I),nn!==4&&(nn=2),Go===null?Go=[m]:Go.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=bh(m,B,i);nh(m,Z);break e;case 1:I=B;var W=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(ar===null||!ar.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var be=Ph(m,I,i);nh(m,be);break e}}m=m.return}while(m!==null)}cp(o)}catch(nt){i=nt,Jt===o&&o!==null&&(Jt=o=o.return);continue}break}while(!0)}function lp(){var n=$a.current;return $a.current=Va,n===null?Va:n}function Ec(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||(Fr&268435455)===0&&(Ka&268435455)===0||cr(un,mn)}function nl(n,i){var o=Rt;Rt|=2;var u=lp();(un!==n||mn!==i)&&(zi=null,zr(n,i));do try{w_();break}catch(d){ap(n,d)}while(!0);if(Fu(),Rt=o,$a.current=u,Jt!==null)throw Error(t(261));return un=null,mn=0,nn}function w_(){for(;Jt!==null;)up(Jt)}function T_(){for(;Jt!==null&&!tt();)up(Jt)}function up(n){var i=hp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?cp(n):Jt=i,pc.current=null}function cp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=v_(o,i,Vn),o!==null){Jt=o;return}}else{if(o=__(o,i),o!==null){o.flags&=32767,Jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);nn===0&&(nn=5)}function kr(n,i,o){var u=Nt,d=Qn.transition;try{Qn.transition=null,Nt=1,A_(n,i,o,u)}finally{Qn.transition=d,Nt=u}return null}function A_(n,i,o,u){do Ps();while(lr!==null);if((Rt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ov(n,m),n===un&&(Jt=un=null,mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ja||(Ja=!0,pp(Dt,function(){return Ps(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var M=Nt;Nt=1;var I=Rt;Rt|=4,pc.current=null,y_(n,o),ep(o,n),jv(Eu),ha=!!Mu,Eu=Mu=null,n.current=o,S_(o),lt(),Rt=I,Nt=M,Qn.transition=m}else n.current=o;if(Ja&&(Ja=!1,lr=n,Qa=d),m=n.pendingLanes,m===0&&(ar=null),ht(o.stateNode),Fn(n,Xe()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,n=vc,vc=null,n;return(Qa&1)!==0&&n.tag!==0&&Ps(),m=n.pendingLanes,(m&1)!==0?n===_c?Vo++:(Vo=0,_c=n):Vo=0,ir(),null}function Ps(){if(lr!==null){var n=Jf(Qa),i=Qn.transition,o=Nt;try{if(Qn.transition=null,Nt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,Qa=0,(Rt&6)!==0)throw Error(t(331));var d=Rt;for(Rt|=4,$e=n.current;$e!==null;){var m=$e,M=m.child;if(($e.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var oe=I[B];for($e=oe;$e!==null;){var Se=$e;switch(Se.tag){case 0:case 11:case 15:Bo(8,Se,m)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,$e=Ee;else for(;$e!==null;){Se=$e;var ye=Se.sibling,je=Se.return;if($h(Se),Se===oe){$e=null;break}if(ye!==null){ye.return=je,$e=ye;break}$e=je}}}var Ke=m.alternate;if(Ke!==null){var Qe=Ke.child;if(Qe!==null){Ke.child=null;do{var Zt=Qe.sibling;Qe.sibling=null,Qe=Zt}while(Qe!==null)}}$e=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,$e=M;else e:for(;$e!==null;){if(m=$e,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bo(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,$e=Z;break e}$e=m.return}}var W=n.current;for($e=W;$e!==null;){M=$e;var ne=M.child;if((M.subtreeFlags&2064)!==0&&ne!==null)ne.return=M,$e=ne;else e:for(M=W;$e!==null;){if(I=$e,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:qa(9,I)}}catch(nt){$t(I,I.return,nt)}if(I===M){$e=null;break e}var be=I.sibling;if(be!==null){be.return=I.return,$e=be;break e}$e=I.return}}if(Rt=d,ir(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Ge,n)}catch{}u=!0}return u}finally{Nt=o,Qn.transition=i}}return!1}function fp(n,i,o){i=As(o,i),i=bh(n,i,1),n=sr(n,i,1),i=Tn(),n!==null&&(ho(n,1,i),Fn(n,i))}function $t(n,i,o){if(n.tag===3)fp(n,n,o);else for(;i!==null;){if(i.tag===3){fp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=As(o,n),n=Ph(i,n,1),i=sr(i,n,1),n=Tn(),i!==null&&(ho(i,1,n),Fn(i,n));break}}i=i.return}}function C_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&o,un===n&&(mn&o)===o&&(nn===4||nn===3&&(mn&130023424)===mn&&500>Xe()-gc?zr(n,0):mc|=o),Fn(n,i)}function dp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Yn,Yn<<=1,(Yn&130023424)===0&&(Yn=4194304)));var o=Tn();n=Ii(n,i),n!==null&&(ho(n,i,o),Fn(n,o))}function R_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),dp(n,o)}function b_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),dp(n,o)}var hp;hp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Un=!1,g_(n,i,o);Un=(n.flags&131072)!==0}else Un=!1,Ht&&(i.flags&1048576)!==0&&jd(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var d=_s(i,vn.current);ws(i,o),d=Yu(null,i,u,n,d,o);var m=qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bu(i),d.updater=Wa,i.stateNode=d,d._reactInternals=i,ec(i,u,n,o),i=rc(null,i,u,!0,m,o)):(i.tag=0,Ht&&m&&Pu(i),wn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=L_(u),n=ai(u,n),d){case 0:i=ic(null,i,u,n,o);break e;case 1:i=kh(null,i,u,n,o);break e;case 11:i=Uh(null,i,u,n,o);break e;case 14:i=Ih(null,i,u,ai(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ai(u,d),ic(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ai(u,d),kh(n,i,u,d,o);case 3:e:{if(Bh(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,th(n,i),Oa(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=Hh(n,i,u,o,d);break e}else if(u!==d){d=As(Error(t(424)),i),i=Hh(n,i,u,o,d);break e}else for(Gn=er(i.stateNode.containerInfo.firstChild),Hn=i,Ht=!0,oi=null,o=Qd(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=Oi(n,i,o);break e}wn(n,i,u,o)}i=i.child}return i;case 5:return rh(i),n===null&&Nu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,wu(u,d)?M=null:m!==null&&wu(u,m)&&(i.flags|=32),zh(n,i),wn(n,i,M,o),i.child;case 6:return n===null&&Nu(i),null;case 13:return Gh(n,i,o);case 4:return Hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):wn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ai(u,d),Uh(n,i,u,d,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Ft(Ua,u._currentValue),u._currentValue=M,m!==null)if(si(m.value,M)){if(m.children===d.children&&!Dn.current){i=Oi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){M=m.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(m.tag===1){B=Fi(-1,o&-o),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var Se=oe.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),oe.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),zu(m.return,o,i),I.lanes|=o;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),zu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}wn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,o),d=Zn(d),u=u(d),i.flags|=1,wn(n,i,u,o),i.child;case 14:return u=i.type,d=ai(u,i.pendingProps),d=ai(u.type,d),Ih(n,i,u,d,o);case 15:return Fh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ai(u,d),ja(n,i),i.tag=1,Nn(u)?(n=!0,Ra(i)):n=!1,ws(i,o),Ch(i,u,d),ec(i,u,d,o),rc(null,i,u,!0,n,o);case 19:return Wh(n,i,o);case 22:return Oh(n,i,o)}throw Error(t(156,i.tag))};function pp(n,i){return se(n,i)}function P_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,o,u){return new P_(n,i,o,u)}function wc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L_(n){if(typeof n=="function")return wc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pe)return 11;if(n===J)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function il(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")wc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case D:return Br(o.children,d,m,i);case X:M=8,d|=8;break;case ue:return n=ei(12,o,i,d|2),n.elementType=ue,n.lanes=m,n;case te:return n=ei(13,o,i,d),n.elementType=te,n.lanes=m,n;case k:return n=ei(19,o,i,d),n.elementType=k,n.lanes=m,n;case ce:return rl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:M=10;break e;case N:M=9;break e;case pe:M=11;break e;case J:M=14;break e;case ie:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Br(n,i,o,u){return n=ei(7,n,u,i),n.lanes=o,n}function rl(n,i,o,u){return n=ei(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Tc(n,i,o){return n=ei(6,n,null,i),n.lanes=o,n}function Ac(n,i,o){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function D_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cc(n,i,o,u,d,m,M,I,B){return n=new D_(n,i,o,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(m),n}function N_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function mp(n){if(!n)return nr;n=n._reactInternals;e:{if(ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Nn(o))return Vd(n,o,i)}return i}function gp(n,i,o,u,d,m,M,I,B){return n=Cc(o,u,!0,n,d,m,M,I,B),n.context=mp(null),o=n.current,u=Tn(),d=ur(o),m=Fi(u,d),m.callback=i??null,sr(o,m,d),n.current.lanes=d,ho(n,d,u),Fn(n,u),n}function sl(n,i,o,u){var d=i.current,m=Tn(),M=ur(d);return o=mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Fi(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(d,i,M),n!==null&&(ci(n,d,M,m),Fa(n,d,M)),M}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Rc(n,i){vp(n,i),(n=n.alternate)&&vp(n,i)}function U_(){return null}var _p=typeof reportError=="function"?reportError:function(n){console.error(n)};function bc(n){this._internalRoot=n}al.prototype.render=bc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));sl(n,i,null,null)},al.prototype.unmount=bc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){sl(null,n,null,null)}),i[Li]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=td();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,n),o===0&&rd(n)}};function Pc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xp(){}function I_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var oe=ol(M);m.call(oe)}}var M=gp(i,u,n,0,null,!1,!1,"",xp);return n._reactRootContainer=M,n[Li]=M.current,Co(n.nodeType===8?n.parentNode:n),Or(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var oe=ol(B);I.call(oe)}}var B=Cc(n,0,!1,null,null,!1,!1,"",xp);return n._reactRootContainer=B,n[Li]=B.current,Co(n.nodeType===8?n.parentNode:n),Or(function(){sl(i,B,o,u)}),B}function ul(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var I=d;d=function(){var B=ol(M);I.call(B)}}sl(i,M,n,d)}else M=I_(o,i,n,d,u);return ol(M)}Qf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(eu(i,o|1),Fn(i,Xe()),(Rt&6)===0&&(bs=Xe()+500,ir()))}break;case 13:Or(function(){var u=Ii(n,1);if(u!==null){var d=Tn();ci(u,n,1,d)}}),Rc(n,1)}},tu=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var o=Tn();ci(i,n,134217728,o)}Rc(n,134217728)}},ed=function(n){if(n.tag===13){var i=ur(n),o=Ii(n,i);if(o!==null){var u=Tn();ci(o,n,i,u)}Rc(n,i)}},td=function(){return Nt},nd=function(n,i){var o=Nt;try{return Nt=n,i()}finally{Nt=o}},st=function(n,i,o){switch(i){case"input":if(ke(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Aa(u);if(!d)throw Error(t(90));K(u),ke(u,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},ut=Sc,Lt=Or;var F_={usingClientEntryPoint:!1,Events:[Po,gs,Aa,Le,Oe,Sc]},Wo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O_={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=le(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Ge=cl.inject(O_),ze=cl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_,On.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(t(200));return N_(n,i,null,o)},On.createRoot=function(n,i){if(!Pc(n))throw Error(t(299));var o=!1,u="",d=_p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cc(n,1,!1,null,null,o,!1,u,d),n[Li]=i.current,Co(n.nodeType===8?n.parentNode:n),new bc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=le(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Or(n)},On.hydrate=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!0,o)},On.hydrateRoot=function(n,i,o){if(!Pc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=_p;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=gp(i,null,n,1,o??null,d,!1,m,M),n[Li]=i.current,Co(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},On.render=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!1,o)},On.unmountComponentAtNode=function(n){if(!ll(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},On.unstable_batchedUpdates=Sc,On.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ll(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Cp;function j_(){if(Cp)return Nc.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nc.exports=X_(),Nc.exports}var Rp;function Y_(){if(Rp)return fl;Rp=1;var s=j_();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var q_=Y_();const $_=yg(q_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="162",K_=0,bp=1,Z_=2,Sg=1,J_=2,Wi=3,Tr=0,kn=1,wi=2,Sr=0,no=1,Pp=2,Lp=3,Dp=4,Q_=5,Kr=100,e0=101,t0=102,Np=103,Up=104,n0=200,i0=201,r0=202,s0=203,Af=204,Cf=205,o0=206,a0=207,l0=208,u0=209,c0=210,f0=211,d0=212,h0=213,p0=214,m0=0,g0=1,v0=2,Gl=3,_0=4,x0=5,y0=6,S0=7,Mg=0,M0=1,E0=2,Mr=0,w0=1,T0=2,A0=3,C0=4,R0=5,b0=6,P0=7,Eg=300,ro=301,so=302,Rf=303,bf=304,$l=306,Pf=1e3,pi=1001,Lf=1002,Rn=1003,Ip=1004,jo=1005,zn=1006,Fc=1007,Jr=1008,Er=1009,L0=1010,D0=1011,Bf=1012,wg=1013,yr=1014,Xi=1015,sa=1016,Tg=1017,Ag=1018,Qr=1020,N0=1021,mi=1023,U0=1024,I0=1025,es=1026,oo=1027,F0=1028,Cg=1029,O0=1030,Rg=1031,bg=1033,Oc=33776,zc=33777,kc=33778,Bc=33779,Fp=35840,Op=35841,zp=35842,kp=35843,Pg=36196,Bp=37492,Hp=37496,Gp=37808,Vp=37809,Wp=37810,Xp=37811,jp=37812,Yp=37813,qp=37814,$p=37815,Kp=37816,Zp=37817,Jp=37818,Qp=37819,em=37820,tm=37821,Hc=36492,nm=36494,im=36495,z0=36283,rm=36284,sm=36285,om=36286,k0=3200,B0=3201,Lg=0,H0=1,xr="",Mi="srgb",Cr="srgb-linear",Hf="display-p3",Kl="display-p3-linear",Vl="linear",kt="srgb",Wl="rec709",Xl="p3",Ls=7680,am=519,G0=512,V0=513,W0=514,Dg=515,X0=516,j0=517,Y0=518,q0=519,Df=35044,lm="300 es",Nf=1035,ji=2e3,jl=2001;class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,Uf=180/Math.PI;function wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function En(s,e,t){return Math.max(e,Math.min(t,s))}function $0(s,e){return(s%e+e)%e}function Vc(s,e,t){return(1-t)*s+t*e}function um(s){return(s&s-1)===0&&s!==0}function If(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,r,a,l,f,c,h,p){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p)}set(e,t,r,a,l,f,c,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],p=r[1],g=r[4],v=r[7],y=r[2],S=r[5],E=r[8],w=a[0],_=a[3],x=a[6],P=a[1],C=a[4],b=a[7],z=a[2],F=a[5],D=a[8];return l[0]=f*w+c*P+h*z,l[3]=f*_+c*C+h*F,l[6]=f*x+c*b+h*D,l[1]=p*w+g*P+v*z,l[4]=p*_+g*C+v*F,l[7]=p*x+g*b+v*D,l[2]=y*w+S*P+E*z,l[5]=y*_+S*C+E*F,l[8]=y*x+S*b+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8];return t*f*g-t*c*p-r*l*g+r*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8],v=g*f-c*p,y=c*h-g*l,S=p*l-f*h,E=t*v+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*p-g*r)*w,e[2]=(c*r-a*f)*w,e[3]=y*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-c*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(f*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new Mt;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function K0(){const s=Yl("canvas");return s.style.display="block",s}const cm={};function Ug(s){s in cm||(cm[s]=!0,console.warn(s))}const fm=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dl={[Cr]:{transfer:Vl,primaries:Wl,toReference:s=>s,fromReference:s=>s},[Mi]:{transfer:kt,primaries:Wl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Kl]:{transfer:Vl,primaries:Xl,toReference:s=>s.applyMatrix3(dm),fromReference:s=>s.applyMatrix3(fm)},[Hf]:{transfer:kt,primaries:Xl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(dm),fromReference:s=>s.applyMatrix3(fm).convertLinearToSRGB()}},Z0=new Set([Cr,Kl]),It={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Z0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=dl[e].toReference,a=dl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return dl[s].primaries},getTransfer:function(s){return s===xr?Vl:dl[s].transfer}};function io(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class Ig{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Yl("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=io(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(io(t[r]/255)*255):t[r]=io(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J0=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(jc(a[f].image)):l.push(jc(a[f]))}else l=jc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ig.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class bn extends lo{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=pi,a=pi,l=zn,f=Jr,c=mi,h=Er,p=bn.DEFAULT_ANISOTROPY,g=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=wr(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pf:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pf:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Eg;bn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],v=h[8],y=h[1],S=h[5],E=h[9],w=h[2],_=h[6],x=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-w)<.01&&Math.abs(E-_)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+w)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,b=(S+1)/2,z=(x+1)/2,F=(g+y)/4,D=(v+w)/4,X=(E+_)/4;return C>b&&C>z?C<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(C),a=F/r,l=D/r):b>z?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=F/a,l=X/a):z<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),r=D/l,a=X/l),this.set(r,a,l,t),this}let P=Math.sqrt((_-E)*(_-E)+(v-w)*(v-w)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(_-E)/P,this.y=(v-w)/P,this.z=(y-g)/P,this.w=Math.acos((p+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends lo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends ex{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Og extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tx extends bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];const y=l[f+0],S=l[f+1],E=l[f+2],w=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(v!==w||h!==y||p!==S||g!==E){let _=1-c;const x=h*y+p*S+g*E+v*w,P=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const z=Math.sqrt(C),F=Math.atan2(z,x*P);_=Math.sin(_*F)/z,c=Math.sin(c*F)/z}const b=c*P;if(h=h*_+y*b,p=p*_+S*b,g=g*_+E*b,v=v*_+w*b,_===1-c){const z=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=z,p*=z,g*=z,v*=z}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],p=r[a+2],g=r[a+3],v=l[f],y=l[f+1],S=l[f+2],E=l[f+3];return e[t]=c*E+g*v+h*S-p*y,e[t+1]=h*E+g*y+p*v-c*S,e[t+2]=p*E+g*S+c*y-h*v,e[t+3]=g*E-c*v-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(r/2),g=c(a/2),v=c(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(f){case"XYZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"YZX":this._x=y*g*v+p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v-y*S*E;break;case"XZY":this._x=y*g*v-p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],g=t[6],v=t[10],y=r+c+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+f*c+a*p-l*h,this._y=a*g+f*h+l*c-r*p,this._z=l*g+f*p+r*h-a*c,this._w=f*g-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,c),v=Math.sin((1-t)*g)/p,y=Math.sin(t*g)/p;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*a-c*r),g=2*(c*t-l*a),v=2*(l*r-f*t);return this.x=t+h*p+f*v-c*g,this.y=r+h*g+c*p-l*v,this.z=a+h*v+l*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new H,hm=new aa;class la{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,fi):fi.fromBufferAttribute(l,f),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),pl.subVectors(this.max,Yo),Ns.subVectors(e.a,Yo),Us.subVectors(e.b,Yo),Is.subVectors(e.c,Yo),hr.subVectors(Us,Ns),pr.subVectors(Is,Us),Hr.subVectors(Ns,Is);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Hr.z,Hr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Hr.z,0,-Hr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Hr.y,Hr.x,0];return!qc(t,Ns,Us,Is,pl)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Ns,Us,Is,pl))?!1:(ml.crossVectors(hr,pr),t=[ml.x,ml.y,ml.z],qc(t,Ns,Us,Is,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new H,new H,new H,new H,new H,new H,new H,new H],fi=new H,hl=new la,Ns=new H,Us=new H,Is=new H,hr=new H,pr=new H,Hr=new H,Yo=new H,pl=new H,ml=new H,Gr=new H;function qc(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Gr.fromArray(s,l);const c=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),p=t.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>c)return!1}return!0}const nx=new la,qo=new H,$c=new H;class Zl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):nx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add($c)),this.expandByPoint(qo.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new H,Kc=new H,gl=new H,mr=new H,Zc=new H,vl=new H,Jc=new H;class zg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Kc.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Kc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(gl),c=mr.dot(this.direction),h=-mr.dot(gl),p=mr.lengthSq(),g=Math.abs(1-f*f);let v,y,S,E;if(g>0)if(v=f*h-c,y=f*c-h,E=l*g,v>=0)if(y>=-E)if(y<=E){const w=1/g;v*=w,y*=w,S=v*(v+f*y+2*c)+y*(f*v+y+2*h)+p}else y=l,v=Math.max(0,-(f*y+c)),S=-v*v+y*(y+2*h)+p;else y=-l,v=Math.max(0,-(f*y+c)),S=-v*v+y*(y+2*h)+p;else y<=-E?(v=Math.max(0,-(-f*l+c)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(v=Math.max(0,-(f*l+c)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+p);else y=f>0?-l:l,v=Math.max(0,-(f*y+c)),S=-v*v+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Kc).addScaledVector(gl,y),S}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),v>=0?(c=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(c=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,r,a,l){Zc.subVectors(t,e),vl.subVectors(r,e),Jc.crossVectors(Zc,vl);let f=this.direction.dot(Jc),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;mr.subVectors(this.origin,e);const h=c*this.direction.dot(vl.crossVectors(mr,vl));if(h<0)return null;const p=c*this.direction.dot(Zc.cross(mr));if(p<0||h+p>f)return null;const g=-c*mr.dot(Jc);return g<0?null:this.at(g/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,a,l,f,c,h,p,g,v,y,S,E,w,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p,g,v,y,S,E,w,_)}set(e,t,r,a,l,f,c,h,p,g,v,y,S,E,w,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=f,x[9]=c,x[13]=h,x[2]=p,x[6]=g,x[10]=v,x[14]=y,x[3]=S,x[7]=E,x[11]=w,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),f=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=f*g,S=f*v,E=c*g,w=c*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+E*p,t[5]=y-w*p,t[9]=-c*h,t[2]=w-y*p,t[6]=E+S*p,t[10]=f*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,E=p*g,w=p*v;t[0]=y+w*c,t[4]=E*c-S,t[8]=f*p,t[1]=f*v,t[5]=f*g,t[9]=-c,t[2]=S*c-E,t[6]=w+y*c,t[10]=f*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,E=p*g,w=p*v;t[0]=y-w*c,t[4]=-f*v,t[8]=E+S*c,t[1]=S+E*c,t[5]=f*g,t[9]=w-y*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const y=f*g,S=f*v,E=c*g,w=c*v;t[0]=h*g,t[4]=E*p-S,t[8]=y*p+w,t[1]=h*v,t[5]=w*p+y,t[9]=S*p-E,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const y=f*h,S=f*p,E=c*h,w=c*p;t[0]=h*g,t[4]=w-y*v,t[8]=E*v+S,t[1]=v,t[5]=f*g,t[9]=-c*g,t[2]=-p*g,t[6]=S*v+E,t[10]=y-w*v}else if(e.order==="XZY"){const y=f*h,S=f*p,E=c*h,w=c*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=y*v+w,t[5]=f*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=c*g,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,rx)}lookAt(e,t,r){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),gr.crossVectors(r,Wn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),gr.crossVectors(r,Wn)),gr.normalize(),_l.crossVectors(Wn,gr),a[0]=gr.x,a[4]=_l.x,a[8]=Wn.x,a[1]=gr.y,a[5]=_l.y,a[9]=Wn.y,a[2]=gr.z,a[6]=_l.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],p=r[12],g=r[1],v=r[5],y=r[9],S=r[13],E=r[2],w=r[6],_=r[10],x=r[14],P=r[3],C=r[7],b=r[11],z=r[15],F=a[0],D=a[4],X=a[8],ue=a[12],T=a[1],N=a[5],pe=a[9],te=a[13],k=a[2],J=a[6],ie=a[10],ce=a[14],G=a[3],Q=a[7],q=a[11],U=a[15];return l[0]=f*F+c*T+h*k+p*G,l[4]=f*D+c*N+h*J+p*Q,l[8]=f*X+c*pe+h*ie+p*q,l[12]=f*ue+c*te+h*ce+p*U,l[1]=g*F+v*T+y*k+S*G,l[5]=g*D+v*N+y*J+S*Q,l[9]=g*X+v*pe+y*ie+S*q,l[13]=g*ue+v*te+y*ce+S*U,l[2]=E*F+w*T+_*k+x*G,l[6]=E*D+w*N+_*J+x*Q,l[10]=E*X+w*pe+_*ie+x*q,l[14]=E*ue+w*te+_*ce+x*U,l[3]=P*F+C*T+b*k+z*G,l[7]=P*D+C*N+b*J+z*Q,l[11]=P*X+C*pe+b*ie+z*q,l[15]=P*ue+C*te+b*ce+z*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],g=e[2],v=e[6],y=e[10],S=e[14],E=e[3],w=e[7],_=e[11],x=e[15];return E*(+l*h*v-a*p*v-l*c*y+r*p*y+a*c*S-r*h*S)+w*(+t*h*S-t*p*y+l*f*y-a*f*S+a*p*g-l*h*g)+_*(+t*p*v-t*c*S-l*f*v+r*f*S+l*c*g-r*p*g)+x*(-a*c*g-t*h*v+t*c*y+a*f*v-r*f*y+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8],v=e[9],y=e[10],S=e[11],E=e[12],w=e[13],_=e[14],x=e[15],P=v*_*p-w*y*p+w*h*S-c*_*S-v*h*x+c*y*x,C=E*y*p-g*_*p-E*h*S+f*_*S+g*h*x-f*y*x,b=g*w*p-E*v*p+E*c*S-f*w*S-g*c*x+f*v*x,z=E*v*h-g*w*h-E*c*y+f*w*y+g*c*_-f*v*_,F=t*P+r*C+a*b+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/F;return e[0]=P*D,e[1]=(w*y*l-v*_*l-w*a*S+r*_*S+v*a*x-r*y*x)*D,e[2]=(c*_*l-w*h*l+w*a*p-r*_*p-c*a*x+r*h*x)*D,e[3]=(v*h*l-c*y*l-v*a*p+r*y*p+c*a*S-r*h*S)*D,e[4]=C*D,e[5]=(g*_*l-E*y*l+E*a*S-t*_*S-g*a*x+t*y*x)*D,e[6]=(E*h*l-f*_*l-E*a*p+t*_*p+f*a*x-t*h*x)*D,e[7]=(f*y*l-g*h*l+g*a*p-t*y*p-f*a*S+t*h*S)*D,e[8]=b*D,e[9]=(E*v*l-g*w*l-E*r*S+t*w*S+g*r*x-t*v*x)*D,e[10]=(f*w*l-E*c*l+E*r*p-t*w*p-f*r*x+t*c*x)*D,e[11]=(g*c*l-f*v*l-g*r*p+t*v*p+f*r*S-t*c*S)*D,e[12]=z*D,e[13]=(g*w*a-E*v*a+E*r*y-t*w*y-g*r*_+t*v*_)*D,e[14]=(E*c*a-f*w*a-E*r*h+t*w*h+f*r*_-t*c*_)*D,e[15]=(f*v*a-g*c*a+g*r*h-t*v*h-f*r*y+t*c*y)*D,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,p=l*f,g=l*c;return this.set(p*f+r,p*c-a*h,p*h+a*c,0,p*c+a*h,g*c+r,g*h-a*f,0,p*h-a*c,g*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,g=f+f,v=c+c,y=l*p,S=l*g,E=l*v,w=f*g,_=f*v,x=c*v,P=h*p,C=h*g,b=h*v,z=r.x,F=r.y,D=r.z;return a[0]=(1-(w+x))*z,a[1]=(S+b)*z,a[2]=(E-C)*z,a[3]=0,a[4]=(S-b)*F,a[5]=(1-(y+x))*F,a[6]=(_+P)*F,a[7]=0,a[8]=(E+C)*D,a[9]=(_-P)*D,a[10]=(1-(y+w))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const f=Fs.set(a[4],a[5],a[6]).length(),c=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],di.copy(this);const p=1/l,g=1/f,v=1/c;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,t.setFromRotationMatrix(di),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=ji){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),y=(r+a)/(r-a);let S,E;if(c===ji)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(c===jl)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=ji){const h=this.elements,p=1/(t-e),g=1/(r-a),v=1/(f-l),y=(t+e)*p,S=(r+a)*g;let E,w;if(c===ji)E=(f+l)*v,w=-2*v;else if(c===jl)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new H,di=new Bt,ix=new H(0,0,0),rx=new H(1,1,1),gr=new H,_l=new H,Wn=new H,pm=new Bt,mm=new aa;class Ci{constructor(e=0,t=0,r=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-En(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(En(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-En(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const gm=new H,Os=new aa,Hi=new Bt,xl=new H,$o=new H,ox=new H,ax=new aa,vm=new H(1,0,0),_m=new H(0,1,0),xm=new H(0,0,1),lx={type:"added"},ux={type:"removed"},Qc={type:"childadded",child:null},ef={type:"childremoved",child:null};class dn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new H,t=new Ci,r=new aa,a=new H(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Mt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt($o,xl,this.up):Hi.lookAt(xl,$o,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Hi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lx),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(c){const h=[];for(const p in c){const g=c[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}dn.DEFAULT_UP=new H(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new H,Gi=new H,tf=new H,Vi=new H,zs=new H,ks=new H,ym=new H,nf=new H,rf=new H,sf=new H;class gi{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),hi.subVectors(e,t),a.cross(hi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){hi.subVectors(a,t),Gi.subVectors(r,t),tf.subVectors(e,t);const f=hi.dot(hi),c=hi.dot(Gi),h=hi.dot(tf),p=Gi.dot(Gi),g=Gi.dot(tf),v=f*p-c*c;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(p*h-c*g)*y,E=(f*g-c*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Vi.x),h.addScaledVector(f,Vi.y),h.addScaledVector(c,Vi.z),h)}static isFrontFacing(e,t,r,a){return hi.subVectors(r,t),Gi.subVectors(e,t),hi.cross(Gi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),hi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;zs.subVectors(a,r),ks.subVectors(l,r),nf.subVectors(e,r);const h=zs.dot(nf),p=ks.dot(nf);if(h<=0&&p<=0)return t.copy(r);rf.subVectors(e,a);const g=zs.dot(rf),v=ks.dot(rf);if(g>=0&&v<=g)return t.copy(a);const y=h*v-g*p;if(y<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(r).addScaledVector(zs,f);sf.subVectors(e,l);const S=zs.dot(sf),E=ks.dot(sf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(r).addScaledVector(ks,c);const _=g*E-S*v;if(_<=0&&v-g>=0&&S-E>=0)return ym.subVectors(l,a),c=(v-g)/(v-g+(S-E)),t.copy(a).addScaledVector(ym,c);const x=1/(_+w+y);return f=w*x,c=y*x,t.copy(r).addScaledVector(zs,f).addScaledVector(ks,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function of(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=It.workingColorSpace){if(e=$0(e,1),t=En(t,0,1),r=En(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=of(f,l,e+1/3),this.g=of(f,l,e),this.b=of(f,l,e-1/3)}return It.toWorkingColorSpace(this,a),this}setStyle(e,t=Mi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const r=Bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return It.fromWorkingColorSpace(Mn.copy(this),e),Math.round(En(Mn.r*255,0,255))*65536+Math.round(En(Mn.g*255,0,255))*256+Math.round(En(Mn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Mn.copy(this),t);const r=Mn.r,a=Mn.g,l=Mn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const g=(c+f)/2;if(c===f)h=0,p=0;else{const v=f-c;switch(p=g<=.5?v/(f+c):v/(2-f-c),f){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Mi){It.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,a=Mn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(yl);const r=Vc(vr.h,yl.h,t),a=Vc(vr.s,yl.s,t),l=Vc(vr.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Tt;Tt.NAMES=Bg;let cx=0;class ns extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=no,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Cf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Af&&(r.blendSrc=this.blendSrc),this.blendDst!==Cf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gf extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new H,Sl=new et;class ni{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ug("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ut(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),a=Ut(a,this.array),l=Ut(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class Hg extends ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gg extends ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yt extends ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fx=0;const ti=new Bt,af=new dn,Bs=new H,Xn=new la,Ko=new la,fn=new H;class gn extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Gg:Hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];Ko.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Xn.min,Ko.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,Ko.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(Ko.min),Xn.expandByPoint(Ko.max))}Xn.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)fn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(fn));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)fn.fromBufferAttribute(c,p),h&&(Bs.fromBufferAttribute(e,p),fn.add(Bs)),a=Math.max(a,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let X=0;X<r.count;X++)c[X]=new H,h[X]=new H;const p=new H,g=new H,v=new H,y=new et,S=new et,E=new et,w=new H,_=new H;function x(X,ue,T){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,ue),v.fromBufferAttribute(r,T),y.fromBufferAttribute(l,X),S.fromBufferAttribute(l,ue),E.fromBufferAttribute(l,T),g.sub(p),v.sub(p),S.sub(y),E.sub(y);const N=1/(S.x*E.y-E.x*S.y);isFinite(N)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(N),_.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(N),c[X].add(w),c[ue].add(w),c[T].add(w),h[X].add(_),h[ue].add(_),h[T].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,ue=P.length;X<ue;++X){const T=P[X],N=T.start,pe=T.count;for(let te=N,k=N+pe;te<k;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const C=new H,b=new H,z=new H,F=new H;function D(X){z.fromBufferAttribute(a,X),F.copy(z);const ue=c[X];C.copy(ue),C.sub(z.multiplyScalar(z.dot(ue))).normalize(),b.crossVectors(F,ue);const N=b.dot(h[X])<0?-1:1;f.setXYZW(X,C.x,C.y,C.z,N)}for(let X=0,ue=P.length;X<ue;++X){const T=P[X],N=T.start,pe=T.count;for(let te=N,k=N+pe;te<k;te+=3)D(e.getX(te+0)),D(e.getX(te+1)),D(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new H,l=new H,f=new H,c=new H,h=new H,p=new H,g=new H,v=new H;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,_),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,_),c.add(g),h.add(g),p.add(g),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,h){const p=c.array,g=c.itemSize,v=c.normalized,y=new p.constructor(h.length*g);let S=0,E=0;for(let w=0,_=h.length;w<_;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*g;for(let x=0;x<g;x++)y[E++]=p[S++]}return new ni(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=e(y,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new Bt,Vr=new zg,Ml=new Zl,Mm=new H,Hs=new H,Gs=new H,Vs=new H,lf=new H,El=new H,wl=new et,Tl=new et,Al=new et,Em=new H,wm=new H,Tm=new H,Cl=new H,Rl=new H;class en extends dn{constructor(e=new gn,t=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){El.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=c[h],v=l[h];g!==0&&(lf.fromBufferAttribute(v,e),f?El.addScaledVector(lf,g):El.addScaledVector(lf.sub(t),g))}t.add(El)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Ml,Mm)===null||Vr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const _=y[E],x=f[_.materialIndex],P=Math.max(_.start,S.start),C=Math.min(c.count,Math.min(_.start+_.count,S.start+S.count));for(let b=P,z=C;b<z;b+=3){const F=c.getX(b),D=c.getX(b+1),X=c.getX(b+2);a=bl(this,x,e,r,p,g,v,F,D,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let _=E,x=w;_<x;_+=3){const P=c.getX(_),C=c.getX(_+1),b=c.getX(_+2);a=bl(this,f,e,r,p,g,v,P,C,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const _=y[E],x=f[_.materialIndex],P=Math.max(_.start,S.start),C=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let b=P,z=C;b<z;b+=3){const F=b,D=b+1,X=b+2;a=bl(this,x,e,r,p,g,v,F,D,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let _=E,x=w;_<x;_+=3){const P=_,C=_+1,b=_+2;a=bl(this,f,e,r,p,g,v,P,C,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function dx(s,e,t,r,a,l,f,c){let h;if(e.side===kn?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Tr,c),h===null)return null;Rl.copy(c),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function bl(s,e,t,r,a,l,f,c,h,p){s.getVertexPosition(c,Hs),s.getVertexPosition(h,Gs),s.getVertexPosition(p,Vs);const g=dx(s,e,t,r,Hs,Gs,Vs,Cl);if(g){a&&(wl.fromBufferAttribute(a,c),Tl.fromBufferAttribute(a,h),Al.fromBufferAttribute(a,p),g.uv=gi.getInterpolation(Cl,Hs,Gs,Vs,wl,Tl,Al,new et)),l&&(wl.fromBufferAttribute(l,c),Tl.fromBufferAttribute(l,h),Al.fromBufferAttribute(l,p),g.uv1=gi.getInterpolation(Cl,Hs,Gs,Vs,wl,Tl,Al,new et)),f&&(Em.fromBufferAttribute(f,c),wm.fromBufferAttribute(f,h),Tm.fromBufferAttribute(f,p),g.normal=gi.getInterpolation(Cl,Hs,Gs,Vs,Em,wm,Tm,new H),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:p,normal:new H,materialIndex:0};gi.getNormal(Hs,Gs,Vs,v.normal),g.face=v}return g}class Ai extends gn{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,a,f,2),E("x","z","y",1,-1,e,r,-t,a,f,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(v,2));function E(w,_,x,P,C,b,z,F,D,X,ue){const T=b/D,N=z/X,pe=b/2,te=z/2,k=F/2,J=D+1,ie=X+1;let ce=0,G=0;const Q=new H;for(let q=0;q<ie;q++){const U=q*N-te;for(let Y=0;Y<J;Y++){const Ce=Y*T-pe;Q[w]=Ce*P,Q[_]=U*C,Q[x]=k,p.push(Q.x,Q.y,Q.z),Q[w]=0,Q[_]=0,Q[x]=F>0?1:-1,g.push(Q.x,Q.y,Q.z),v.push(Y/D),v.push(1-q/X),ce+=1}}for(let q=0;q<X;q++)for(let U=0;U<D;U++){const Y=y+U+J*q,Ce=y+U+J*(q+1),j=y+(U+1)+J*(q+1),ee=y+(U+1)+J*q;h.push(Y,Ce,ee),h.push(Ce,j,ee),G+=6}c.addGroup(S,G,ue),S+=G,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=ao(s[t]);for(const a in r)e[a]=r[a]}return e}function hx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vg(s){return s.getRenderTarget()===null?s.outputColorSpace:It.workingColorSpace}const px={clone:ao,merge:Cn};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Wg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new H,Am=new et,Cm=new et;class jn extends Wg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,Am,Cm),t.subVectors(Cm,Am)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class vx extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new jn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const f=new jn(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const c=new jn(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const h=new jn(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const p=new jn(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const p of t)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Xg extends bn{constructor(e,t,r,a,l,f,c,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,r,a,l,f,c,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _x extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Xg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ai(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Sr});l.uniforms.tEquirect.value=t;const f=new en(a,l),c=t.minFilter;return t.minFilter===Jr&&(t.minFilter=zn),new vx(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const uf=new H,xx=new H,yx=new Mt;class qr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=uf.subVectors(r,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(uf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yx.getNormalMatrix(e),a=this.coplanarPoint(uf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Zl,Pl=new H;class Vf{constructor(e=new qr,t=new qr,r=new qr,a=new qr,l=new qr,f=new qr){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],p=a[4],g=a[5],v=a[6],y=a[7],S=a[8],E=a[9],w=a[10],_=a[11],x=a[12],P=a[13],C=a[14],b=a[15];if(r[0].setComponents(h-l,y-p,_-S,b-x).normalize(),r[1].setComponents(h+l,y+p,_+S,b+x).normalize(),r[2].setComponents(h+f,y+g,_+E,b+P).normalize(),r[3].setComponents(h-f,y-g,_-E,b-P).normalize(),r[4].setComponents(h-c,y-v,_-w,b-C).normalize(),t===ji)r[5].setComponents(h+c,y+v,_+w,b+C).normalize();else if(t===jl)r[5].setComponents(c,v,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jg(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Sx(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,g){const v=p.array,y=p.usage,S=v.byteLength,E=s.createBuffer();s.bindBuffer(g,E),s.bufferData(g,v,y),p.onUploadCallback();let w;if(v instanceof Float32Array)w=s.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=s.SHORT;else if(v instanceof Uint32Array)w=s.UNSIGNED_INT;else if(v instanceof Int32Array)w=s.INT;else if(v instanceof Int8Array)w=s.BYTE;else if(v instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,g,v){const y=g.array,S=g._updateRange,E=g.updateRanges;if(s.bindBuffer(v,p),S.count===-1&&E.length===0&&s.bufferSubData(v,0,y),E.length!==0){for(let w=0,_=E.length;w<_;w++){const x=E[w];t?s.bufferSubData(v,x.start*y.BYTES_PER_ELEMENT,y,x.start,x.count):s.bufferSubData(v,x.start*y.BYTES_PER_ELEMENT,y.subarray(x.start,x.start+x.count))}g.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(s.deleteBuffer(g.buffer),r.delete(p))}function h(p,g){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);if(v===void 0)r.set(p,a(p,g));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(v.buffer,p,g),v.version=p.version}}return{get:f,remove:c,update:h}}class ua extends gn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),p=c+1,g=h+1,v=e/c,y=t/h,S=[],E=[],w=[],_=[];for(let x=0;x<g;x++){const P=x*y-f;for(let C=0;C<p;C++){const b=C*v-l;E.push(b,-P,0),w.push(0,0,1),_.push(C/c),_.push(1-x/h)}}for(let x=0;x<h;x++)for(let P=0;P<c;P++){const C=P+p*x,b=P+p*(x+1),z=P+1+p*(x+1),F=P+1+p*x;S.push(C,b,F),S.push(b,z,F)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(w,3)),this.setAttribute("uv",new Yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
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
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ix=`#ifdef USE_IRIDESCENCE
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
#endif`,Fx=`#ifdef USE_BUMPMAP
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xx=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`
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
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#endif`,Sy=`struct PhysicalMaterial {
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
}`,My=`
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aS=`float getShadowMask() {
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
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
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
}`,bS=`#if DEPTH_PACKING == 3200
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
}`,PS=`#define DISTANCE
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
}`,LS=`#define DISTANCE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
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
}`,IS=`uniform vec3 diffuse;
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
}`,FS=`#include <common>
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
}`,OS=`uniform vec3 diffuse;
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
}`,zS=`#define LAMBERT
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
}`,kS=`#define LAMBERT
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
}`,BS=`#define MATCAP
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
}`,HS=`#define MATCAP
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
}`,GS=`#define NORMAL
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
}`,VS=`#define NORMAL
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
}`,WS=`#define PHONG
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
}`,XS=`#define PHONG
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
}`,jS=`#define STANDARD
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
}`,YS=`#define STANDARD
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
}`,qS=`#define TOON
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
}`,$S=`#define TOON
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
}`,KS=`uniform float size;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,QS=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Mx,alphahash_pars_fragment:Ex,alphamap_fragment:wx,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,alphatest_pars_fragment:Cx,aomap_fragment:Rx,aomap_pars_fragment:bx,batching_pars_vertex:Px,batching_vertex:Lx,begin_vertex:Dx,beginnormal_vertex:Nx,bsdfs:Ux,iridescence_fragment:Ix,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Bx,color_fragment:Hx,color_pars_fragment:Gx,color_pars_vertex:Vx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:jx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:qx,displacementmap_vertex:$x,emissivemap_fragment:Kx,emissivemap_pars_fragment:Zx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:uy,lightmap_fragment:cy,lightmap_pars_fragment:fy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:hy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:vy,lights_phong_fragment:_y,lights_phong_pars_fragment:xy,lights_physical_fragment:yy,lights_physical_pars_fragment:Sy,lights_fragment_begin:My,lights_fragment_maps:Ey,lights_fragment_end:wy,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Ry,map_fragment:by,map_pars_fragment:Py,map_particle_fragment:Ly,map_particle_pars_fragment:Dy,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Iy,morphcolor_vertex:Fy,morphnormal_vertex:Oy,morphtarget_pars_vertex:zy,morphtarget_vertex:ky,normal_fragment_begin:By,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Vy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:jy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:$y,opaque_fragment:Ky,packing:Zy,premultiplied_alpha_fragment:Jy,project_vertex:Qy,dithering_fragment:eS,dithering_pars_fragment:tS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:rS,shadowmap_pars_vertex:sS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:uS,skinning_vertex:cS,skinnormal_vertex:fS,specularmap_fragment:dS,specularmap_pars_fragment:hS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:vS,uv_pars_fragment:_S,uv_pars_vertex:xS,uv_vertex:yS,worldpos_vertex:SS,background_vert:MS,background_frag:ES,backgroundCube_vert:wS,backgroundCube_frag:TS,cube_vert:AS,cube_frag:CS,depth_vert:RS,depth_frag:bS,distanceRGBA_vert:PS,distanceRGBA_frag:LS,equirect_vert:DS,equirect_frag:NS,linedashed_vert:US,linedashed_frag:IS,meshbasic_vert:FS,meshbasic_frag:OS,meshlambert_vert:zS,meshlambert_frag:kS,meshmatcap_vert:BS,meshmatcap_frag:HS,meshnormal_vert:GS,meshnormal_frag:VS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:jS,meshphysical_frag:YS,meshtoon_vert:qS,meshtoon_frag:$S,points_vert:KS,points_frag:ZS,shadow_vert:JS,shadow_frag:QS,sprite_vert:eM,sprite_frag:tM},Ie={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Cn([Ie.points,Ie.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Cn([Ie.common,Ie.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Cn([Ie.sprite,Ie.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Cn([Ie.lights,Ie.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Ll={r:0,b:0,g:0},Xr=new Ci,nM=new Bt;function iM(s,e,t,r,a,l,f){const c=new Tt(0);let h=l===!0?0:1,p,g,v=null,y=0,S=null;function E(_,x){let P=!1,C=x.isScene===!0?x.background:null;C&&C.isTexture&&(C=(x.backgroundBlurriness>0?t:e).get(C)),C===null?w(c,h):C&&C.isColor&&(w(C,1),P=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,f):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),C&&(C.isCubeTexture||C.mapping===$l)?(g===void 0&&(g=new en(new Ai(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:ao(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Xr.copy(x.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Xr)),g.material.toneMapped=It.getTransfer(C.colorSpace)!==kt,(v!==C||y!==C.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=C,y=C.version,S=s.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new en(new ua(2,2),new Ar({name:"BackgroundMaterial",uniforms:ao(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=It.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||y!==C.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,y=C.version,S=s.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null))}function w(_,x){_.getRGB(Ll,Vg(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,f)}return{getClearColor:function(){return c},setClearColor:function(_,x=1){c.set(_),h=x,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,w(c,h)},render:E}}function rM(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=_(null);let p=h,g=!1;function v(k,J,ie,ce,G){let Q=!1;if(f){const q=w(ce,ie,J);p!==q&&(p=q,S(p.object)),Q=x(k,ce,ie,G),Q&&P(k,ce,ie,G)}else{const q=J.wireframe===!0;(p.geometry!==ce.id||p.program!==ie.id||p.wireframe!==q)&&(p.geometry=ce.id,p.program=ie.id,p.wireframe=q,Q=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Q||g)&&(g=!1,X(k,J,ie,ce),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(k){return r.isWebGL2?s.bindVertexArray(k):l.bindVertexArrayOES(k)}function E(k){return r.isWebGL2?s.deleteVertexArray(k):l.deleteVertexArrayOES(k)}function w(k,J,ie){const ce=ie.wireframe===!0;let G=c[k.id];G===void 0&&(G={},c[k.id]=G);let Q=G[J.id];Q===void 0&&(Q={},G[J.id]=Q);let q=Q[ce];return q===void 0&&(q=_(y()),Q[ce]=q),q}function _(k){const J=[],ie=[],ce=[];for(let G=0;G<a;G++)J[G]=0,ie[G]=0,ce[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ie,attributeDivisors:ce,object:k,attributes:{},index:null}}function x(k,J,ie,ce){const G=p.attributes,Q=J.attributes;let q=0;const U=ie.getAttributes();for(const Y in U)if(U[Y].location>=0){const j=G[Y];let ee=Q[Y];if(ee===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor)),j===void 0||j.attribute!==ee||ee&&j.data!==ee.data)return!0;q++}return p.attributesNum!==q||p.index!==ce}function P(k,J,ie,ce){const G={},Q=J.attributes;let q=0;const U=ie.getAttributes();for(const Y in U)if(U[Y].location>=0){let j=Q[Y];j===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(j=k.instanceColor));const ee={};ee.attribute=j,j&&j.data&&(ee.data=j.data),G[Y]=ee,q++}p.attributes=G,p.attributesNum=q,p.index=ce}function C(){const k=p.newAttributes;for(let J=0,ie=k.length;J<ie;J++)k[J]=0}function b(k){z(k,0)}function z(k,J){const ie=p.newAttributes,ce=p.enabledAttributes,G=p.attributeDivisors;ie[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),G[k]!==J&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),G[k]=J)}function F(){const k=p.newAttributes,J=p.enabledAttributes;for(let ie=0,ce=J.length;ie<ce;ie++)J[ie]!==k[ie]&&(s.disableVertexAttribArray(ie),J[ie]=0)}function D(k,J,ie,ce,G,Q,q){q===!0?s.vertexAttribIPointer(k,J,ie,G,Q):s.vertexAttribPointer(k,J,ie,ce,G,Q)}function X(k,J,ie,ce){if(r.isWebGL2===!1&&(k.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const G=ce.attributes,Q=ie.getAttributes(),q=J.defaultAttributeValues;for(const U in Q){const Y=Q[U];if(Y.location>=0){let Ce=G[U];if(Ce===void 0&&(U==="instanceMatrix"&&k.instanceMatrix&&(Ce=k.instanceMatrix),U==="instanceColor"&&k.instanceColor&&(Ce=k.instanceColor)),Ce!==void 0){const j=Ce.normalized,ee=Ce.itemSize,ge=t.get(Ce);if(ge===void 0)continue;const Ue=ge.buffer,Ae=ge.type,Te=ge.bytesPerElement,Ze=r.isWebGL2===!0&&(Ae===s.INT||Ae===s.UNSIGNED_INT||Ce.gpuType===wg);if(Ce.isInterleavedBufferAttribute){const ot=Ce.data,K=ot.stride,Pt=Ce.offset;if(ot.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)z(Y.location+ve,ot.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ve=0;ve<Y.locationSize;ve++)b(Y.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<Y.locationSize;ve++)D(Y.location+ve,ee/Y.locationSize,Ae,j,K*Te,(Pt+ee/Y.locationSize*ve)*Te,Ze)}else{if(Ce.isInstancedBufferAttribute){for(let ot=0;ot<Y.locationSize;ot++)z(Y.location+ot,Ce.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ot=0;ot<Y.locationSize;ot++)b(Y.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ot=0;ot<Y.locationSize;ot++)D(Y.location+ot,ee/Y.locationSize,Ae,j,ee*Te,ee/Y.locationSize*ot*Te,Ze)}}else if(q!==void 0){const j=q[U];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Y.location,j);break;case 3:s.vertexAttrib3fv(Y.location,j);break;case 4:s.vertexAttrib4fv(Y.location,j);break;default:s.vertexAttrib1fv(Y.location,j)}}}}F()}function ue(){pe();for(const k in c){const J=c[k];for(const ie in J){const ce=J[ie];for(const G in ce)E(ce[G].object),delete ce[G];delete J[ie]}delete c[k]}}function T(k){if(c[k.id]===void 0)return;const J=c[k.id];for(const ie in J){const ce=J[ie];for(const G in ce)E(ce[G].object),delete ce[G];delete J[ie]}delete c[k.id]}function N(k){for(const J in c){const ie=c[J];if(ie[k.id]===void 0)continue;const ce=ie[k.id];for(const G in ce)E(ce[G].object),delete ce[G];delete ie[k.id]}}function pe(){te(),g=!0,p!==h&&(p=h,S(p.object))}function te(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:pe,resetDefaultState:te,dispose:ue,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:b,disableUnusedAttributes:F}}function sM(s,e,t,r){const a=r.isWebGL2;let l;function f(g){l=g}function c(g,v){s.drawArrays(l,g,v),t.update(v,l,1)}function h(g,v,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,g,v,y),t.update(v,l,y)}function p(g,v,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(g[E],v[E]);else{S.multiDrawArraysWEBGL(l,g,0,v,0,y);let E=0;for(let w=0;w<y;w++)E+=v[w];t.update(E,l,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function oM(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,b=f||e.has("OES_texture_float"),z=C&&b,F=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:P,vertexTextures:C,floatFragmentTextures:b,floatVertexTextures:z,maxSamples:F}}function aM(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new qr,c=new Mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,x=s.get(v);if(!a||E===null||E.length===0||l&&!_)l?g(null):p();else{const P=l?0:r,C=P*4;let b=x.clippingState||null;h.value=b,b=g(E,y,C,S);for(let z=0;z!==C;++z)b[z]=t[z];x.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,E){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=h.value,E!==!0||_===null){const x=S+w*4,P=y.matrixWorldInverse;c.getNormalMatrix(P),(_===null||_.length<x)&&(_=new Float32Array(x));for(let C=0,b=S;C!==w;++C,b+=4)f.copy(v[C]).applyMatrix4(P,c),f.normal.toArray(_,b),_[b+3]=f.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}function lM(s){let e=new WeakMap;function t(f,c){return c===Rf?f.mapping=ro:c===bf&&(f.mapping=so),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Rf||c===bf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new _x(h.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Yg extends Wg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,Rm=[.125,.215,.35,.446,.526,.582],Zr=20,cf=new Yg,bm=new Tt;let ff=null,df=0,hf=0;const $r=(1+Math.sqrt(5))/2,js=1/$r,Pm=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,$r,js),new H(0,$r,-js),new H(js,0,$r),new H(-js,0,$r),new H($r,js,0),new H(-$r,js,0)];class Lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:sa,format:mi,colorSpace:Cr,depthBuffer:!1},a=Dm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(l)),this._blurMaterial=cM(l,e,t)}return a}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,cf)}_sceneToCubeUV(e,t,r,a){const c=new jn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(bm),g.toneMapping=Mr,g.autoClear=!1;const S=new Gf({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new en(new Ai,S);let w=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,w=!0):(S.color.copy(bm),w=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(c.up.set(0,h[x],0),c.lookAt(p[x],0,0)):P===1?(c.up.set(0,0,h[x]),c.lookAt(0,p[x],0)):(c.up.set(0,h[x],0),c.lookAt(0,0,p[x]));const C=this._cubeSize;Dl(a,P*C,x>2?C:0,C,C),g.setRenderTarget(a),w&&g.render(E,c),g.render(e,c)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ro||e.mapping===so;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new en(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Dl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,cf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Pm[(a-1)%Pm.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new en(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),w=l/E,_=isFinite(l)?1+Math.floor(g*w):Zr;_>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zr}`);const x=[];let P=0;for(let D=0;D<Zr;++D){const X=D/w,ue=Math.exp(-X*X/2);x.push(ue),D===0?P+=ue:D<_&&(P+=2*ue)}for(let D=0;D<x.length;D++)x[D]=x[D]/P;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=x,y.latitudinal.value=f==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-r;const b=this._sizeLods[a],z=3*b*(a>C-eo?a-C+eo:0),F=4*(this._cubeSize-b);Dl(t,z,F,3*b,2*b),h.setRenderTarget(t),h.render(v,cf)}}function uM(s){const e=[],t=[],r=[];let a=s;const l=s-eo+1+Rm.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-eo?h=Rm[f-s+eo-1]:f===0&&(h=0),r.push(h);const p=1/(c-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,w=3,_=2,x=1,P=new Float32Array(w*E*S),C=new Float32Array(_*E*S),b=new Float32Array(x*E*S);for(let F=0;F<S;F++){const D=F%3*2/3-1,X=F>2?0:-1,ue=[D,X,0,D+2/3,X,0,D+2/3,X+1,0,D,X,0,D+2/3,X+1,0,D,X+1,0];P.set(ue,w*E*F),C.set(y,_*E*F);const T=[F,F,F,F,F,F];b.set(T,x*E*F)}const z=new gn;z.setAttribute("position",new ni(P,w)),z.setAttribute("uv",new ni(C,_)),z.setAttribute("faceIndex",new ni(b,x)),e.push(z),a>eo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Dm(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function cM(s,e,t){const r=new Float32Array(Zr),a=new H(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Nm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Um(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function fM(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===Rf||h===bf,g=h===ro||h===so;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return t===null&&(t=new Lm(s)),v=p?t.fromEquirectangular(c,v):t.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(p&&v&&v.height>0||g&&v&&a(v)){t===null&&(t=new Lm(s));const y=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function dM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hM(s,e,t,r){const a={},l=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const w=y.morphAttributes[E];for(let _=0,x=w.length;_<x;_++)e.remove(w[_])}y.removeEventListener("dispose",f),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(v,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let _=0,x=w.length;_<x;_++)e.update(w[_],s.ARRAY_BUFFER)}}function p(v){const y=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const P=S.array;w=S.version;for(let C=0,b=P.length;C<b;C+=3){const z=P[C+0],F=P[C+1],D=P[C+2];y.push(z,F,F,D,D,z)}}else if(E!==void 0){const P=E.array;w=E.version;for(let C=0,b=P.length/3-1;C<b;C+=3){const z=C+0,F=C+1,D=C+2;y.push(z,F,F,D,D,z)}}else return;const _=new(Ng(y)?Gg:Hg)(y,1);_.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,_)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function pM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function g(S,E){s.drawElements(l,E,c,S*h),t.update(E,l,1)}function v(S,E,w){if(w===0)return;let _,x;if(a)_=s,x="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](l,E,c,S*h,w),t.update(E,l,w)}function y(S,E,w){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<w;x++)this.render(S[x]/h,E[x]);else{_.multiDrawElementsWEBGL(l,E,0,c,S,0,w);let x=0;for(let P=0;P<w;P++)x+=E[P];t.update(x,l,1)}}this.setMode=f,this.setIndex=p,this.render=g,this.renderInstances=v,this.renderMultiDraw=y}function mM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function gM(s,e){return s[0]-e[0]}function vM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function _M(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new Gt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,g,v){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=E!==void 0?E.length:0;let _=l.get(g);if(_===void 0||_.count!==w){let te=function(){N.dispose(),l.delete(g),g.removeEventListener("dispose",te)};var S=te;_!==void 0&&_.texture.dispose();const x=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,C=g.morphAttributes.color!==void 0,b=g.morphAttributes.position||[],z=g.morphAttributes.normal||[],F=g.morphAttributes.color||[];let D=0;x===!0&&(D=1),P===!0&&(D=2),C===!0&&(D=3);let X=g.attributes.position.count*D,ue=1;X>e.maxTextureSize&&(ue=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const T=new Float32Array(X*ue*4*w),N=new Og(T,X,ue,w);N.type=Xi,N.needsUpdate=!0;const pe=D*4;for(let k=0;k<w;k++){const J=b[k],ie=z[k],ce=F[k],G=X*ue*4*k;for(let Q=0;Q<J.count;Q++){const q=Q*pe;x===!0&&(f.fromBufferAttribute(J,Q),T[G+q+0]=f.x,T[G+q+1]=f.y,T[G+q+2]=f.z,T[G+q+3]=0),P===!0&&(f.fromBufferAttribute(ie,Q),T[G+q+4]=f.x,T[G+q+5]=f.y,T[G+q+6]=f.z,T[G+q+7]=0),C===!0&&(f.fromBufferAttribute(ce,Q),T[G+q+8]=f.x,T[G+q+9]=f.y,T[G+q+10]=f.z,T[G+q+11]=ce.itemSize===4?f.w:1)}}_={count:w,texture:N,size:new et(X,ue)},l.set(g,_),g.addEventListener("dispose",te)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)v.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let x=0;for(let C=0;C<y.length;C++)x+=y[C];const P=g.morphTargetsRelative?1:1-x;v.getUniforms().setValue(s,"morphTargetBaseInfluence",P),v.getUniforms().setValue(s,"morphTargetInfluences",y)}v.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const E=y===void 0?0:y.length;let w=r[g.id];if(w===void 0||w.length!==E){w=[];for(let b=0;b<E;b++)w[b]=[b,0];r[g.id]=w}for(let b=0;b<E;b++){const z=w[b];z[0]=b,z[1]=y[b]}w.sort(vM);for(let b=0;b<8;b++)b<E&&w[b][1]?(c[b][0]=w[b][0],c[b][1]=w[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(gM);const _=g.morphAttributes.position,x=g.morphAttributes.normal;let P=0;for(let b=0;b<8;b++){const z=c[b],F=z[0],D=z[1];F!==Number.MAX_SAFE_INTEGER&&D?(_&&g.getAttribute("morphTarget"+b)!==_[F]&&g.setAttribute("morphTarget"+b,_[F]),x&&g.getAttribute("morphNormal"+b)!==x[F]&&g.setAttribute("morphNormal"+b,x[F]),a[b]=D,P+=D):(_&&g.hasAttribute("morphTarget"+b)===!0&&g.deleteAttribute("morphTarget"+b),x&&g.hasAttribute("morphNormal"+b)===!0&&g.deleteAttribute("morphNormal"+b),a[b]=0)}const C=g.morphTargetsRelative?1:1-P;v.getUniforms().setValue(s,"morphTargetBaseInfluence",C),v.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function xM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return v}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class qg extends bn{constructor(e,t,r,a,l,f,c,h,p,g){if(g=g!==void 0?g:es,g!==es&&g!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===es&&(r=yr),r===void 0&&g===oo&&(r=Qr),super(null,a,l,f,c,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Rn,this.minFilter=h!==void 0?h:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $g=new bn,Kg=new qg(1,1);Kg.compareFunction=Dg;const Zg=new Og,Jg=new tx,Qg=new Xg,Im=[],Fm=[],Om=new Float32Array(16),zm=new Float32Array(9),km=new Float32Array(4);function uo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Im[a];if(l===void 0&&(l=new Float32Array(a),Im[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Jl(s,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function wM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),sn(t,r)}}function TM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;zm.set(r),s.uniformMatrix3fv(this.addr,!1,zm),sn(t,r)}}function AM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Om.set(r),s.uniformMatrix4fv(this.addr,!1,Om),sn(t,r)}}function CM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function LM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function IM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Kg:$g;t.setTexture2D(e||l,a)}function FM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Jg,a)}function OM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Qg,a)}function zM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Zg,a)}function kM(s){switch(s){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return EM;case 35674:return wM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return bM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return zM}}function BM(s,e){s.uniform1fv(this.addr,e)}function HM(s,e){const t=uo(e,this.size,2);s.uniform2fv(this.addr,t)}function GM(s,e){const t=uo(e,this.size,3);s.uniform3fv(this.addr,t)}function VM(s,e){const t=uo(e,this.size,4);s.uniform4fv(this.addr,t)}function WM(s,e){const t=uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function XM(s,e){const t=uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jM(s,e){const t=uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function YM(s,e){s.uniform1iv(this.addr,e)}function qM(s,e){s.uniform2iv(this.addr,e)}function $M(s,e){s.uniform3iv(this.addr,e)}function KM(s,e){s.uniform4iv(this.addr,e)}function ZM(s,e){s.uniform1uiv(this.addr,e)}function JM(s,e){s.uniform2uiv(this.addr,e)}function QM(s,e){s.uniform3uiv(this.addr,e)}function eE(s,e){s.uniform4uiv(this.addr,e)}function tE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||$g,l[f])}function nE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Jg,l[f])}function iE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Qg,l[f])}function rE(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Zg,l[f])}function sE(s){switch(s){case 5126:return BM;case 35664:return HM;case 35665:return GM;case 35666:return VM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return YM;case 35667:case 35671:return qM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return JM;case 36295:return QM;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}class oE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kM(t.type)}}class aE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sE(t.type)}}class lE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Bm(s,e){s.seq.push(e),s.map[e.id]=e}function uE(s,e,t){const r=s.name,a=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),f=pf.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){Bm(t,p===void 0?new oE(c,s,e):new aE(c,s,e));break}else{let v=t.map[c];v===void 0&&(v=new lE(c),Bm(t,v)),t=v}}}class kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);uE(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Hm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cE=37297;let fE=0;function dE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function hE(s){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(s);let r;switch(e===t?r="":e===Xl&&t===Wl?r="LinearDisplayP3ToLinearSRGB":e===Wl&&t===Xl&&(r="LinearSRGBToLinearDisplayP3"),s){case Cr:case Kl:return[r,"LinearTransferOETF"];case Mi:case Hf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Gm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+dE(s.getShaderSource(e),f)}else return a}function pE(s,e){const t=hE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mE(s,e){let t;switch(e){case w0:t="Linear";break;case T0:t="Reinhard";break;case A0:t="OptimizedCineon";break;case C0:t="ACESFilmic";break;case b0:t="AgX";break;case P0:t="Neutral";break;case R0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(to).join(`
`)}function vE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function _E(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function xE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function to(s){return s!==""}function Vm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(s){return s.replace(yE,ME)}const SE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ME(s,e){let t=St[e];if(t===void 0){const r=SE.get(e);if(r!==void 0)t=St[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ff(t)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(s){return s.replace(EE,wE)}function wE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function TE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function AE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mg:e="ENVMAP_BLENDING_MULTIPLY";break;case M0:e="ENVMAP_BLENDING_MIX";break;case E0:e="ENVMAP_BLENDING_ADD";break}return e}function bE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function PE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=TE(t),p=AE(t),g=CE(t),v=RE(t),y=bE(t),S=t.isWebGL2?"":gE(t),E=vE(t),w=_E(l),_=a.createProgram();let x,P,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(to).join(`
`),x.length>0&&(x+=`
`),P=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(to).join(`
`),P.length>0&&(P+=`
`)):(x=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),P=[S,jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?St.tonemapping_pars_fragment:"",t.toneMapping!==Mr?mE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,pE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),f=Ff(f),f=Vm(f,t),f=Wm(f,t),c=Ff(c),c=Vm(c,t),c=Wm(c,t),f=Xm(f),c=Xm(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const b=C+x+f,z=C+P+c,F=Hm(a,a.VERTEX_SHADER,b),D=Hm(a,a.FRAGMENT_SHADER,z);a.attachShader(_,F),a.attachShader(_,D),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function X(pe){if(s.debug.checkShaderErrors){const te=a.getProgramInfoLog(_).trim(),k=a.getShaderInfoLog(F).trim(),J=a.getShaderInfoLog(D).trim();let ie=!0,ce=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,_,F,D);else{const G=Gm(a,F,"vertex"),Q=Gm(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+pe.name+`
Material Type: `+pe.type+`

Program Info Log: `+te+`
`+G+`
`+Q)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(k===""||J==="")&&(ce=!1);ce&&(pe.diagnostics={runnable:ie,programLog:te,vertexShader:{log:k,prefix:x},fragmentShader:{log:J,prefix:P}})}a.deleteShader(F),a.deleteShader(D),ue=new kl(a,_),T=xE(a,_)}let ue;this.getUniforms=function(){return ue===void 0&&X(this),ue};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(_,cE)),N},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=D,this}let LE=0;class DE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new NE(e),t.set(e,r)),r}}class NE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function UE(s,e,t,r,a,l,f){const c=new kg,h=new DE,p=new Set,g=[],v=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return p.add(T),T===0?"uv":`uv${T}`}function x(T,N,pe,te,k){const J=te.fog,ie=k.geometry,ce=T.isMeshStandardMaterial?te.environment:null,G=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),Q=G&&G.mapping===$l?G.image.height:null,q=w[T.type];T.precision!==null&&(E=a.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const U=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Y=U!==void 0?U.length:0;let Ce=0;ie.morphAttributes.position!==void 0&&(Ce=1),ie.morphAttributes.normal!==void 0&&(Ce=2),ie.morphAttributes.color!==void 0&&(Ce=3);let j,ee,ge,Ue;if(q){const Lt=Ei[q];j=Lt.vertexShader,ee=Lt.fragmentShader}else j=T.vertexShader,ee=T.fragmentShader,h.update(T),ge=h.getVertexShaderID(T),Ue=h.getFragmentShaderID(T);const Ae=s.getRenderTarget(),Te=k.isInstancedMesh===!0,Ze=k.isBatchedMesh===!0,ot=!!T.map,K=!!T.matcap,Pt=!!G,ve=!!T.aoMap,Je=!!T.lightMap,Pe=!!T.bumpMap,ke=!!T.normalMap,Fe=!!T.displacementMap,qe=!!T.emissiveMap,Et=!!T.metalnessMap,L=!!T.roughnessMap,A=T.anisotropy>0,de=T.clearcoat>0,me=T.iridescence>0,Me=T.sheen>0,xe=T.transmission>0,dt=A&&!!T.anisotropyMap,rt=de&&!!T.clearcoatMap,Re=de&&!!T.clearcoatNormalMap,_e=de&&!!T.clearcoatRoughnessMap,it=me&&!!T.iridescenceMap,we=me&&!!T.iridescenceThicknessMap,Ct=Me&&!!T.sheenColorMap,_t=Me&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,Be=!!T.specularColorMap,He=!!T.specularIntensityMap,at=xe&&!!T.transmissionMap,Ve=xe&&!!T.thicknessMap,st=!!T.gradientMap,V=!!T.alphaMap,Ne=T.alphaTest>0,ae=!!T.alphaHash,Le=!!T.extensions;let Oe=Mr;T.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const ut={isWebGL2:v,shaderID:q,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:ee,defines:T.defines,customVertexShaderID:ge,customFragmentShaderID:Ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:Ze,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Cr,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:K,envMap:Pt,envMapMode:Pt&&G.mapping,envMapCubeUVHeight:Q,aoMap:ve,lightMap:Je,bumpMap:Pe,normalMap:ke,displacementMap:S&&Fe,emissiveMap:qe,normalMapObjectSpace:ke&&T.normalMapType===H0,normalMapTangentSpace:ke&&T.normalMapType===Lg,metalnessMap:Et,roughnessMap:L,anisotropy:A,anisotropyMap:dt,clearcoat:de,clearcoatMap:rt,clearcoatNormalMap:Re,clearcoatRoughnessMap:_e,iridescence:me,iridescenceMap:it,iridescenceThicknessMap:we,sheen:Me,sheenColorMap:Ct,sheenRoughnessMap:_t,specularMap:Ye,specularColorMap:Be,specularIntensityMap:He,transmission:xe,transmissionMap:at,thicknessMap:Ve,gradientMap:st,opaque:T.transparent===!1&&T.blending===no&&T.alphaToCoverage===!1,alphaMap:V,alphaTest:Ne,alphaHash:ae,combine:T.combine,mapUv:ot&&_(T.map.channel),aoMapUv:ve&&_(T.aoMap.channel),lightMapUv:Je&&_(T.lightMap.channel),bumpMapUv:Pe&&_(T.bumpMap.channel),normalMapUv:ke&&_(T.normalMap.channel),displacementMapUv:Fe&&_(T.displacementMap.channel),emissiveMapUv:qe&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:L&&_(T.roughnessMap.channel),anisotropyMapUv:dt&&_(T.anisotropyMap.channel),clearcoatMapUv:rt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(T.sheenRoughnessMap.channel),specularMapUv:Ye&&_(T.specularMap.channel),specularColorMapUv:Be&&_(T.specularColorMap.channel),specularIntensityMapUv:He&&_(T.specularIntensityMap.channel),transmissionMapUv:at&&_(T.transmissionMap.channel),thicknessMapUv:Ve&&_(T.thicknessMap.channel),alphaMapUv:V&&_(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ke||A),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ie.attributes.uv&&(ot||V),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:k.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Ce,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&pe.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wi,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Le&&T.extensions.derivatives===!0,extensionFragDepth:Le&&T.extensions.fragDepth===!0,extensionDrawBuffers:Le&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Le&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ut.vertexUv1s=p.has(1),ut.vertexUv2s=p.has(2),ut.vertexUv3s=p.has(3),p.clear(),ut}function P(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const pe in T.defines)N.push(pe),N.push(T.defines[pe]);return T.isRawShaderMaterial===!1&&(C(N,T),b(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function C(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function b(T,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.instancingMorph&&c.enable(4),N.matcap&&c.enable(5),N.envMap&&c.enable(6),N.normalMapObjectSpace&&c.enable(7),N.normalMapTangentSpace&&c.enable(8),N.clearcoat&&c.enable(9),N.iridescence&&c.enable(10),N.alphaTest&&c.enable(11),N.vertexColors&&c.enable(12),N.vertexAlphas&&c.enable(13),N.vertexUv1s&&c.enable(14),N.vertexUv2s&&c.enable(15),N.vertexUv3s&&c.enable(16),N.vertexTangents&&c.enable(17),N.anisotropy&&c.enable(18),N.alphaHash&&c.enable(19),N.batching&&c.enable(20),T.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.alphaToCoverage&&c.enable(20),T.push(c.mask)}function z(T){const N=w[T.type];let pe;if(N){const te=Ei[N];pe=px.clone(te.uniforms)}else pe=T.uniforms;return pe}function F(T,N){let pe;for(let te=0,k=g.length;te<k;te++){const J=g[te];if(J.cacheKey===N){pe=J,++pe.usedTimes;break}}return pe===void 0&&(pe=new PE(s,N,T,l),g.push(pe)),pe}function D(T){if(--T.usedTimes===0){const N=g.indexOf(T);g[N]=g[g.length-1],g.pop(),T.destroy()}}function X(T){h.remove(T)}function ue(){h.dispose()}return{getParameters:x,getProgramCacheKey:P,getUniforms:z,acquireProgram:F,releaseProgram:D,releaseShaderCache:X,programs:g,dispose:ue}}function IE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function FE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(v,y,S,E,w,_){let x=s[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:_},s[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=w,x.group=_),e++,x}function c(v,y,S,E,w,_){const x=f(v,y,S,E,w,_);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(v,y,S,E,w,_){const x=f(v,y,S,E,w,_);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,y){t.length>1&&t.sort(v||FE),r.length>1&&r.sort(y||Ym),a.length>1&&a.sort(y||Ym)}function g(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:p}}function OE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new qm,s.set(r,[f])):a>=l.length?(f=new qm,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function zE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Tt};break;case"SpotLight":t={position:new H,direction:new H,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function kE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let BE=0;function HE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GE(s,e){const t=new zE,r=kE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new H);const l=new H,f=new Bt,c=new Bt;function h(g,v){let y=0,S=0,E=0;for(let pe=0;pe<9;pe++)a.probe[pe].set(0,0,0);let w=0,_=0,x=0,P=0,C=0,b=0,z=0,F=0,D=0,X=0,ue=0;g.sort(HE);const T=v===!0?Math.PI:1;for(let pe=0,te=g.length;pe<te;pe++){const k=g[pe],J=k.color,ie=k.intensity,ce=k.distance,G=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=J.r*ie*T,S+=J.g*ie*T,E+=J.b*ie*T;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(k.sh.coefficients[Q],ie);ue++}else if(k.isDirectionalLight){const Q=t.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const q=k.shadow,U=r.get(k);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,a.directionalShadow[w]=U,a.directionalShadowMap[w]=G,a.directionalShadowMatrix[w]=k.shadow.matrix,b++}a.directional[w]=Q,w++}else if(k.isSpotLight){const Q=t.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(J).multiplyScalar(ie*T),Q.distance=ce,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,a.spot[x]=Q;const q=k.shadow;if(k.map&&(a.spotLightMap[D]=k.map,D++,q.updateMatrices(k),k.castShadow&&X++),a.spotLightMatrix[x]=q.matrix,k.castShadow){const U=r.get(k);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,a.spotShadow[x]=U,a.spotShadowMap[x]=G,F++}x++}else if(k.isRectAreaLight){const Q=t.get(k);Q.color.copy(J).multiplyScalar(ie),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),a.rectArea[P]=Q,P++}else if(k.isPointLight){const Q=t.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*T),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const q=k.shadow,U=r.get(k);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,a.pointShadow[_]=U,a.pointShadowMap[_]=G,a.pointShadowMatrix[_]=k.shadow.matrix,z++}a.point[_]=Q,_++}else if(k.isHemisphereLight){const Q=t.get(k);Q.skyColor.copy(k.color).multiplyScalar(ie*T),Q.groundColor.copy(k.groundColor).multiplyScalar(ie*T),a.hemi[C]=Q,C++}}P>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const N=a.hash;(N.directionalLength!==w||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==P||N.hemiLength!==C||N.numDirectionalShadows!==b||N.numPointShadows!==z||N.numSpotShadows!==F||N.numSpotMaps!==D||N.numLightProbes!==ue)&&(a.directional.length=w,a.spot.length=x,a.rectArea.length=P,a.point.length=_,a.hemi.length=C,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=F+D-X,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=X,a.numLightProbes=ue,N.directionalLength=w,N.pointLength=_,N.spotLength=x,N.rectAreaLength=P,N.hemiLength=C,N.numDirectionalShadows=b,N.numPointShadows=z,N.numSpotShadows=F,N.numSpotMaps=D,N.numLightProbes=ue,a.version=BE++)}function p(g,v){let y=0,S=0,E=0,w=0,_=0;const x=v.matrixWorldInverse;for(let P=0,C=g.length;P<C;P++){const b=g[P];if(b.isDirectionalLight){const z=a.directional[y];z.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(x),y++}else if(b.isSpotLight){const z=a.spot[E];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(x),z.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(x),E++}else if(b.isRectAreaLight){const z=a.rectArea[w];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(x),c.identity(),f.copy(b.matrixWorld),f.premultiply(x),c.extractRotation(f),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),w++}else if(b.isPointLight){const z=a.point[S];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(x),S++}else if(b.isHemisphereLight){const z=a.hemi[_];z.direction.setFromMatrixPosition(b.matrixWorld),z.direction.transformDirection(x),_++}}}return{setup:h,setupView:p,state:a}}function $m(s,e){const t=new GE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(v){r.push(v)}function c(v){a.push(v)}function h(v){t.setup(r,v)}function p(v){t.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function VE(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new $m(s,e),t.set(l,[h])):f>=c.length?(h=new $m(s,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class WE extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XE extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
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
}`;function qE(s,e,t){let r=new Vf;const a=new et,l=new et,f=new Gt,c=new WE({depthPacking:B0}),h=new XE,p={},g=t.maxTextureSize,v={[Tr]:kn,[kn]:Tr,[wi]:wi},y=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:jE,fragmentShader:YE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new gn;E.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new en(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let x=this.type;this.render=function(F,D,X){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const ue=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),pe=s.state;pe.setBlending(Sr),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const te=x!==Wi&&this.type===Wi,k=x===Wi&&this.type!==Wi;for(let J=0,ie=F.length;J<ie;J++){const ce=F[J],G=ce.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const Q=G.getFrameExtents();if(a.multiply(Q),l.copy(G.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/Q.x),a.x=l.x*Q.x,G.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/Q.y),a.y=l.y*Q.y,G.mapSize.y=l.y)),G.map===null||te===!0||k===!0){const U=this.type!==Wi?{minFilter:Rn,magFilter:Rn}:{};G.map!==null&&G.map.dispose(),G.map=new ts(a.x,a.y,U),G.map.texture.name=ce.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const q=G.getViewportCount();for(let U=0;U<q;U++){const Y=G.getViewport(U);f.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),pe.viewport(f),G.updateMatrices(ce,U),r=G.getFrustum(),b(D,X,G.camera,ce,this.type)}G.isPointLightShadow!==!0&&this.type===Wi&&P(G,X),G.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(ue,T,N)};function P(F,D){const X=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ts(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(D,null,X,y,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(D,null,X,S,w,null)}function C(F,D,X,ue){let T=null;const N=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(N!==void 0)T=N;else if(T=X.isPointLight===!0?h:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const pe=T.uuid,te=D.uuid;let k=p[pe];k===void 0&&(k={},p[pe]=k);let J=k[te];J===void 0&&(J=T.clone(),k[te]=J,D.addEventListener("dispose",z)),T=J}if(T.visible=D.visible,T.wireframe=D.wireframe,ue===Wi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:v[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const pe=s.properties.get(T);pe.light=X}return T}function b(F,D,X,ue,T){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Wi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const te=e.update(F),k=F.material;if(Array.isArray(k)){const J=te.groups;for(let ie=0,ce=J.length;ie<ce;ie++){const G=J[ie],Q=k[G.materialIndex];if(Q&&Q.visible){const q=C(F,Q,ue,T);F.onBeforeShadow(s,F,D,X,te,q,G),s.renderBufferDirect(X,null,te,q,F,G),F.onAfterShadow(s,F,D,X,te,q,G)}}}else if(k.visible){const J=C(F,k,ue,T);F.onBeforeShadow(s,F,D,X,te,J,null),s.renderBufferDirect(X,null,te,J,F,null),F.onAfterShadow(s,F,D,X,te,J,null)}}const pe=F.children;for(let te=0,k=pe.length;te<k;te++)b(pe[te],D,X,ue,T)}function z(F){F.target.removeEventListener("dispose",z);for(const X in p){const ue=p[X],T=F.target.uuid;T in ue&&(ue[T].dispose(),delete ue[T])}}}function $E(s,e,t){const r=t.isWebGL2;function a(){let V=!1;const Ne=new Gt;let ae=null;const Le=new Gt(0,0,0,0);return{setMask:function(Oe){ae!==Oe&&!V&&(s.colorMask(Oe,Oe,Oe,Oe),ae=Oe)},setLocked:function(Oe){V=Oe},setClear:function(Oe,ut,Lt,Vt,hn){hn===!0&&(Oe*=Vt,ut*=Vt,Lt*=Vt),Ne.set(Oe,ut,Lt,Vt),Le.equals(Ne)===!1&&(s.clearColor(Oe,ut,Lt,Vt),Le.copy(Ne))},reset:function(){V=!1,ae=null,Le.set(-1,0,0,0)}}}function l(){let V=!1,Ne=null,ae=null,Le=null;return{setTest:function(Oe){Oe?Te(s.DEPTH_TEST):Ze(s.DEPTH_TEST)},setMask:function(Oe){Ne!==Oe&&!V&&(s.depthMask(Oe),Ne=Oe)},setFunc:function(Oe){if(ae!==Oe){switch(Oe){case m0:s.depthFunc(s.NEVER);break;case g0:s.depthFunc(s.ALWAYS);break;case v0:s.depthFunc(s.LESS);break;case Gl:s.depthFunc(s.LEQUAL);break;case _0:s.depthFunc(s.EQUAL);break;case x0:s.depthFunc(s.GEQUAL);break;case y0:s.depthFunc(s.GREATER);break;case S0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=Oe}},setLocked:function(Oe){V=Oe},setClear:function(Oe){Le!==Oe&&(s.clearDepth(Oe),Le=Oe)},reset:function(){V=!1,Ne=null,ae=null,Le=null}}}function f(){let V=!1,Ne=null,ae=null,Le=null,Oe=null,ut=null,Lt=null,Vt=null,hn=null;return{setTest:function(At){V||(At?Te(s.STENCIL_TEST):Ze(s.STENCIL_TEST))},setMask:function(At){Ne!==At&&!V&&(s.stencilMask(At),Ne=At)},setFunc:function(At,Kt,on){(ae!==At||Le!==Kt||Oe!==on)&&(s.stencilFunc(At,Kt,on),ae=At,Le=Kt,Oe=on)},setOp:function(At,Kt,on){(ut!==At||Lt!==Kt||Vt!==on)&&(s.stencilOp(At,Kt,on),ut=At,Lt=Kt,Vt=on)},setLocked:function(At){V=At},setClear:function(At){hn!==At&&(s.clearStencil(At),hn=At)},reset:function(){V=!1,Ne=null,ae=null,Le=null,Oe=null,ut=null,Lt=null,Vt=null,hn=null}}}const c=new a,h=new l,p=new f,g=new WeakMap,v=new WeakMap;let y={},S={},E=new WeakMap,w=[],_=null,x=!1,P=null,C=null,b=null,z=null,F=null,D=null,X=null,ue=new Tt(0,0,0),T=0,N=!1,pe=null,te=null,k=null,J=null,ie=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=Q>=2);let U=null,Y={};const Ce=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ee=new Gt().fromArray(Ce),ge=new Gt().fromArray(j);function Ue(V,Ne,ae,Le){const Oe=new Uint8Array(4),ut=s.createTexture();s.bindTexture(V,ut),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<ae;Lt++)r&&(V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Ne+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return ut}const Ae={};Ae[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ae[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Te(s.DEPTH_TEST),h.setFunc(Gl),Fe(!1),qe(bp),Te(s.CULL_FACE),Pe(Sr);function Te(V){y[V]!==!0&&(s.enable(V),y[V]=!0)}function Ze(V){y[V]!==!1&&(s.disable(V),y[V]=!1)}function ot(V,Ne){return S[V]!==Ne?(s.bindFramebuffer(V,Ne),S[V]=Ne,r&&(V===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function K(V,Ne){let ae=w,Le=!1;if(V){ae=E.get(Ne),ae===void 0&&(ae=[],E.set(Ne,ae));const Oe=V.textures;if(ae.length!==Oe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Lt=Oe.length;ut<Lt;ut++)ae[ut]=s.COLOR_ATTACHMENT0+ut;ae.length=Oe.length,Le=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,Le=!0);if(Le)if(t.isWebGL2)s.drawBuffers(ae);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Pt(V){return _!==V?(s.useProgram(V),_=V,!0):!1}const ve={[Kr]:s.FUNC_ADD,[e0]:s.FUNC_SUBTRACT,[t0]:s.FUNC_REVERSE_SUBTRACT};if(r)ve[Np]=s.MIN,ve[Up]=s.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(ve[Np]=V.MIN_EXT,ve[Up]=V.MAX_EXT)}const Je={[n0]:s.ZERO,[i0]:s.ONE,[r0]:s.SRC_COLOR,[Af]:s.SRC_ALPHA,[c0]:s.SRC_ALPHA_SATURATE,[l0]:s.DST_COLOR,[o0]:s.DST_ALPHA,[s0]:s.ONE_MINUS_SRC_COLOR,[Cf]:s.ONE_MINUS_SRC_ALPHA,[u0]:s.ONE_MINUS_DST_COLOR,[a0]:s.ONE_MINUS_DST_ALPHA,[f0]:s.CONSTANT_COLOR,[d0]:s.ONE_MINUS_CONSTANT_COLOR,[h0]:s.CONSTANT_ALPHA,[p0]:s.ONE_MINUS_CONSTANT_ALPHA};function Pe(V,Ne,ae,Le,Oe,ut,Lt,Vt,hn,At){if(V===Sr){x===!0&&(Ze(s.BLEND),x=!1);return}if(x===!1&&(Te(s.BLEND),x=!0),V!==Q_){if(V!==P||At!==N){if((C!==Kr||F!==Kr)&&(s.blendEquation(s.FUNC_ADD),C=Kr,F=Kr),At)switch(V){case no:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.ONE,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case no:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,z=null,D=null,X=null,ue.set(0,0,0),T=0,P=V,N=At}return}Oe=Oe||Ne,ut=ut||ae,Lt=Lt||Le,(Ne!==C||Oe!==F)&&(s.blendEquationSeparate(ve[Ne],ve[Oe]),C=Ne,F=Oe),(ae!==b||Le!==z||ut!==D||Lt!==X)&&(s.blendFuncSeparate(Je[ae],Je[Le],Je[ut],Je[Lt]),b=ae,z=Le,D=ut,X=Lt),(Vt.equals(ue)===!1||hn!==T)&&(s.blendColor(Vt.r,Vt.g,Vt.b,hn),ue.copy(Vt),T=hn),P=V,N=!1}function ke(V,Ne){V.side===wi?Ze(s.CULL_FACE):Te(s.CULL_FACE);let ae=V.side===kn;Ne&&(ae=!ae),Fe(ae),V.blending===no&&V.transparent===!1?Pe(Sr):Pe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Le=V.stencilWrite;p.setTest(Le),Le&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),L(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Te(s.SAMPLE_ALPHA_TO_COVERAGE):Ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(V){pe!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),pe=V)}function qe(V){V!==K_?(Te(s.CULL_FACE),V!==te&&(V===bp?s.cullFace(s.BACK):V===Z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ze(s.CULL_FACE),te=V}function Et(V){V!==k&&(G&&s.lineWidth(V),k=V)}function L(V,Ne,ae){V?(Te(s.POLYGON_OFFSET_FILL),(J!==Ne||ie!==ae)&&(s.polygonOffset(Ne,ae),J=Ne,ie=ae)):Ze(s.POLYGON_OFFSET_FILL)}function A(V){V?Te(s.SCISSOR_TEST):Ze(s.SCISSOR_TEST)}function de(V){V===void 0&&(V=s.TEXTURE0+ce-1),U!==V&&(s.activeTexture(V),U=V)}function me(V,Ne,ae){ae===void 0&&(U===null?ae=s.TEXTURE0+ce-1:ae=U);let Le=Y[ae];Le===void 0&&(Le={type:void 0,texture:void 0},Y[ae]=Le),(Le.type!==V||Le.texture!==Ne)&&(U!==ae&&(s.activeTexture(ae),U=ae),s.bindTexture(V,Ne||Ae[V]),Le.type=V,Le.texture=Ne)}function Me(){const V=Y[U];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(V){ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function He(V){ge.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ge.copy(V))}function at(V,Ne){let ae=v.get(Ne);ae===void 0&&(ae=new WeakMap,v.set(Ne,ae));let Le=ae.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(Ne,V.name),ae.set(V,Le))}function Ve(V,Ne){const Le=v.get(Ne).get(V);g.get(Ne)!==Le&&(s.uniformBlockBinding(Ne,Le,V.__bindingPointIndex),g.set(Ne,Le))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},U=null,Y={},S={},E=new WeakMap,w=[],_=null,x=!1,P=null,C=null,b=null,z=null,F=null,D=null,X=null,ue=new Tt(0,0,0),T=0,N=!1,pe=null,te=null,k=null,J=null,ie=null,ee.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Te,disable:Ze,bindFramebuffer:ot,drawBuffers:K,useProgram:Pt,setBlending:Pe,setMaterial:ke,setFlipSided:Fe,setCullFace:qe,setLineWidth:Et,setPolygonOffset:L,setScissorTest:A,activeTexture:de,bindTexture:me,unbindTexture:Me,compressedTexImage2D:xe,compressedTexImage3D:dt,texImage2D:_t,texImage3D:Ye,updateUBOMapping:at,uniformBlockBinding:Ve,texStorage2D:we,texStorage3D:Ct,texSubImage2D:rt,texSubImage3D:Re,compressedTexSubImage2D:_e,compressedTexSubImage3D:it,scissor:Be,viewport:He,reset:st}}function KE(s,e,t,r,a,l,f){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new et,v=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,A){return E?new OffscreenCanvas(L,A):Yl("canvas")}function _(L,A,de,me){let Me=1;const xe=Et(L);if((xe.width>me||xe.height>me)&&(Me=me/Math.max(xe.width,xe.height)),Me<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=A?If:Math.floor,rt=dt(Me*xe.width),Re=dt(Me*xe.height);y===void 0&&(y=w(rt,Re));const _e=de?w(rt,Re):y;return _e.width=rt,_e.height=Re,_e.getContext("2d").drawImage(L,0,0,rt,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+rt+"x"+Re+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function x(L){const A=Et(L);return um(A.width)&&um(A.height)}function P(L){return c?!1:L.wrapS!==pi||L.wrapT!==pi||L.minFilter!==Rn&&L.minFilter!==zn}function C(L,A){return L.generateMipmaps&&A&&L.minFilter!==Rn&&L.minFilter!==zn}function b(L){s.generateMipmap(L)}function z(L,A,de,me,Me=!1){if(c===!1)return A;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe=A;if(A===s.RED&&(de===s.FLOAT&&(xe=s.R32F),de===s.HALF_FLOAT&&(xe=s.R16F),de===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&(de===s.UNSIGNED_BYTE&&(xe=s.R8UI),de===s.UNSIGNED_SHORT&&(xe=s.R16UI),de===s.UNSIGNED_INT&&(xe=s.R32UI),de===s.BYTE&&(xe=s.R8I),de===s.SHORT&&(xe=s.R16I),de===s.INT&&(xe=s.R32I)),A===s.RG&&(de===s.FLOAT&&(xe=s.RG32F),de===s.HALF_FLOAT&&(xe=s.RG16F),de===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RG_INTEGER&&(de===s.UNSIGNED_BYTE&&(xe=s.RG8UI),de===s.UNSIGNED_SHORT&&(xe=s.RG16UI),de===s.UNSIGNED_INT&&(xe=s.RG32UI),de===s.BYTE&&(xe=s.RG8I),de===s.SHORT&&(xe=s.RG16I),de===s.INT&&(xe=s.RG32I)),A===s.RGBA){const dt=Me?Vl:It.getTransfer(me);de===s.FLOAT&&(xe=s.RGBA32F),de===s.HALF_FLOAT&&(xe=s.RGBA16F),de===s.UNSIGNED_BYTE&&(xe=dt===kt?s.SRGB8_ALPHA8:s.RGBA8),de===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),de===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function F(L,A,de){return C(L,de)===!0||L.isFramebufferTexture&&L.minFilter!==Rn&&L.minFilter!==zn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function D(L){return L===Rn||L===Ip||L===jo?s.NEAREST:s.LINEAR}function X(L){const A=L.target;A.removeEventListener("dispose",X),T(A),A.isVideoTexture&&v.delete(A)}function ue(L){const A=L.target;A.removeEventListener("dispose",ue),pe(A)}function T(L){const A=r.get(L);if(A.__webglInit===void 0)return;const de=L.source,me=S.get(de);if(me){const Me=me[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&N(L),Object.keys(me).length===0&&S.delete(de)}r.remove(L)}function N(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const de=L.source,me=S.get(de);delete me[A.__cacheKey],f.memory.textures--}function pe(L){const A=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let Me=0;Me<A.__webglFramebuffer[me].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[me][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const de=L.textures;for(let me=0,Me=de.length;me<Me;me++){const xe=r.get(de[me]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),f.memory.textures--),r.remove(de[me])}r.remove(L)}let te=0;function k(){te=0}function J(){const L=te;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),te+=1,L}function ie(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ce(L,A){const de=r.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.version>0&&de.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(de,L,A);return}}t.bindTexture(s.TEXTURE_2D,de.__webglTexture,s.TEXTURE0+A)}function G(L,A){const de=r.get(L);if(L.version>0&&de.__version!==L.version){ge(de,L,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,de.__webglTexture,s.TEXTURE0+A)}function Q(L,A){const de=r.get(L);if(L.version>0&&de.__version!==L.version){ge(de,L,A);return}t.bindTexture(s.TEXTURE_3D,de.__webglTexture,s.TEXTURE0+A)}function q(L,A){const de=r.get(L);if(L.version>0&&de.__version!==L.version){Ue(de,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture,s.TEXTURE0+A)}const U={[Pf]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Lf]:s.MIRRORED_REPEAT},Y={[Rn]:s.NEAREST,[Ip]:s.NEAREST_MIPMAP_NEAREST,[jo]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Fc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},Ce={[G0]:s.NEVER,[q0]:s.ALWAYS,[V0]:s.LESS,[Dg]:s.LEQUAL,[W0]:s.EQUAL,[Y0]:s.GEQUAL,[X0]:s.GREATER,[j0]:s.NOTEQUAL};function j(L,A,de){if(A.type===Xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zn||A.magFilter===Fc||A.magFilter===jo||A.magFilter===Jr||A.minFilter===zn||A.minFilter===Fc||A.minFilter===jo||A.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),de?(s.texParameteri(L,s.TEXTURE_WRAP_S,U[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,U[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,U[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Y[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Y[A.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==pi||A.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,D(A.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,D(A.minFilter)),A.minFilter!==Rn&&A.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Rn||A.minFilter!==jo&&A.minFilter!==Jr||A.type===Xi&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const me=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ee(L,A){let de=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",X));const me=A.source;let Me=S.get(me);Me===void 0&&(Me={},S.set(me,Me));const xe=ie(A);if(xe!==L.__cacheKey){Me[xe]===void 0&&(Me[xe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,de=!0),Me[xe].usedTimes++;const dt=Me[L.__cacheKey];dt!==void 0&&(Me[L.__cacheKey].usedTimes--,dt.usedTimes===0&&N(A)),L.__cacheKey=xe,L.__webglTexture=Me[xe].texture}return de}function ge(L,A,de){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const Me=ee(L,A),xe=A.source;t.bindTexture(me,L.__webglTexture,s.TEXTURE0+de);const dt=r.get(xe);if(xe.version!==dt.__version||Me===!0){t.activeTexture(s.TEXTURE0+de);const rt=It.getPrimaries(It.workingColorSpace),Re=A.colorSpace===xr?null:It.getPrimaries(A.colorSpace),_e=A.colorSpace===xr||rt===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=P(A)&&x(A.image)===!1;let we=_(A.image,it,!1,a.maxTextureSize);we=qe(A,we);const Ct=x(we)||c,_t=l.convert(A.format,A.colorSpace);let Ye=l.convert(A.type),Be=z(A.internalFormat,_t,Ye,A.colorSpace,A.isVideoTexture);j(me,A,Ct);let He;const at=A.mipmaps,Ve=c&&A.isVideoTexture!==!0&&Be!==Pg,st=dt.__version===void 0||Me===!0,V=xe.dataReady,Ne=F(A,we,Ct);if(A.isDepthTexture)Be=s.DEPTH_COMPONENT,c?A.type===Xi?Be=s.DEPTH_COMPONENT32F:A.type===yr?Be=s.DEPTH_COMPONENT24:A.type===Qr?Be=s.DEPTH24_STENCIL8:Be=s.DEPTH_COMPONENT16:A.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===es&&Be===s.DEPTH_COMPONENT&&A.type!==Bf&&A.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yr,Ye=l.convert(A.type)),A.format===oo&&Be===s.DEPTH_COMPONENT&&(Be=s.DEPTH_STENCIL,A.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Qr,Ye=l.convert(A.type))),st&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,Be,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Be,we.width,we.height,0,_t,Ye,null));else if(A.isDataTexture)if(at.length>0&&Ct){Ve&&st&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,at[0].width,at[0].height);for(let ae=0,Le=at.length;ae<Le;ae++)He=at[ae],Ve?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,_t,Ye,He.data):t.texImage2D(s.TEXTURE_2D,ae,Be,He.width,He.height,0,_t,Ye,He.data);A.generateMipmaps=!1}else Ve?(st&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,we.width,we.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,_t,Ye,we.data)):t.texImage2D(s.TEXTURE_2D,0,Be,we.width,we.height,0,_t,Ye,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ve&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,at[0].width,at[0].height,we.depth);for(let ae=0,Le=at.length;ae<Le;ae++)He=at[ae],A.format!==mi?_t!==null?Ve?V&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,we.depth,_t,He.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Be,He.width,He.height,we.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,we.depth,_t,Ye,He.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Be,He.width,He.height,we.depth,0,_t,Ye,He.data)}else{Ve&&st&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,at[0].width,at[0].height);for(let ae=0,Le=at.length;ae<Le;ae++)He=at[ae],A.format!==mi?_t!==null?Ve?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,_t,He.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Be,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,_t,Ye,He.data):t.texImage2D(s.TEXTURE_2D,ae,Be,He.width,He.height,0,_t,Ye,He.data)}else if(A.isDataArrayTexture)Ve?(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,we.width,we.height,we.depth),V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,_t,Ye,we.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,we.width,we.height,we.depth,0,_t,Ye,we.data);else if(A.isData3DTexture)Ve?(st&&t.texStorage3D(s.TEXTURE_3D,Ne,Be,we.width,we.height,we.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,_t,Ye,we.data)):t.texImage3D(s.TEXTURE_3D,0,Be,we.width,we.height,we.depth,0,_t,Ye,we.data);else if(A.isFramebufferTexture){if(st)if(Ve)t.texStorage2D(s.TEXTURE_2D,Ne,Be,we.width,we.height);else{let ae=we.width,Le=we.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Be,ae,Le,0,_t,Ye,null),ae>>=1,Le>>=1}}else if(at.length>0&&Ct){if(Ve&&st){const ae=Et(at[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Be,ae.width,ae.height)}for(let ae=0,Le=at.length;ae<Le;ae++)He=at[ae],Ve?V&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,_t,Ye,He):t.texImage2D(s.TEXTURE_2D,ae,Be,_t,Ye,He);A.generateMipmaps=!1}else if(Ve){if(st){const ae=Et(we);t.texStorage2D(s.TEXTURE_2D,Ne,Be,ae.width,ae.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ye,we)}else t.texImage2D(s.TEXTURE_2D,0,Be,_t,Ye,we);C(A,Ct)&&b(me),dt.__version=xe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ue(L,A,de){if(A.image.length!==6)return;const me=ee(L,A),Me=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+de);const xe=r.get(Me);if(Me.version!==xe.__version||me===!0){t.activeTexture(s.TEXTURE0+de);const dt=It.getPrimaries(It.workingColorSpace),rt=A.colorSpace===xr?null:It.getPrimaries(A.colorSpace),Re=A.colorSpace===xr||dt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!_e&&!it?we[ae]=_(A.image[ae],!1,!0,a.maxCubemapSize):we[ae]=it?A.image[ae].image:A.image[ae],we[ae]=qe(A,we[ae]);const Ct=we[0],_t=x(Ct)||c,Ye=l.convert(A.format,A.colorSpace),Be=l.convert(A.type),He=z(A.internalFormat,Ye,Be,A.colorSpace),at=c&&A.isVideoTexture!==!0,Ve=xe.__version===void 0||me===!0,st=Me.dataReady;let V=F(A,Ct,_t);j(s.TEXTURE_CUBE_MAP,A,_t);let Ne;if(_e){at&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,V,He,Ct.width,Ct.height);for(let ae=0;ae<6;ae++){Ne=we[ae].mipmaps;for(let Le=0;Le<Ne.length;Le++){const Oe=Ne[Le];A.format!==mi?Ye!==null?at?st&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Oe.width,Oe.height,Ye,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,He,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Oe.width,Oe.height,Ye,Be,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,He,Oe.width,Oe.height,0,Ye,Be,Oe.data)}}}else{if(Ne=A.mipmaps,at&&Ve){Ne.length>0&&V++;const ae=Et(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,V,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(it){at?st&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,Ye,Be,we[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,we[ae].width,we[ae].height,0,Ye,Be,we[ae].data);for(let Le=0;Le<Ne.length;Le++){const ut=Ne[Le].image[ae].image;at?st&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,ut.width,ut.height,Ye,Be,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,He,ut.width,ut.height,0,Ye,Be,ut.data)}}else{at?st&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ye,Be,we[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,Ye,Be,we[ae]);for(let Le=0;Le<Ne.length;Le++){const Oe=Ne[Le];at?st&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Ye,Be,Oe.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,He,Ye,Be,Oe.image[ae])}}}C(A,_t)&&b(s.TEXTURE_CUBE_MAP),xe.__version=Me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ae(L,A,de,me,Me,xe){const dt=l.convert(de.format,de.colorSpace),rt=l.convert(de.type),Re=z(de.internalFormat,dt,rt,de.colorSpace);if(!r.get(A).__hasExternalTextures){const it=Math.max(1,A.width>>xe),we=Math.max(1,A.height>>xe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,xe,Re,it,we,A.depth,0,dt,rt,null):t.texImage2D(Me,xe,Re,it,we,0,dt,rt,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ke(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Me,r.get(de).__webglTexture,0,Pe(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Me,r.get(de).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(L,A,de){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let me=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(de||ke(A)){const Me=A.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Xi?me=s.DEPTH_COMPONENT32F:Me.type===yr&&(me=s.DEPTH_COMPONENT24));const xe=Pe(A);ke(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,me,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,me,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const me=Pe(A);de&&ke(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):ke(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const me=A.textures;for(let Me=0;Me<me.length;Me++){const xe=me[Me],dt=l.convert(xe.format,xe.colorSpace),rt=l.convert(xe.type),Re=z(xe.internalFormat,dt,rt,xe.colorSpace),_e=Pe(A);de&&ke(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Re,A.width,A.height):ke(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Re,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Re,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const me=r.get(A.depthTexture).__webglTexture,Me=Pe(A);if(A.depthTexture.format===es)ke(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(A.depthTexture.format===oo)ke(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ot(L){const A=r.get(L),de=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(de)throw new Error("target.depthTexture not supported in Cube render targets");Ze(A.__webglFramebuffer,L)}else if(de){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=s.createRenderbuffer(),Te(A.__webglDepthbuffer[me],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Te(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(L,A,de){const me=r.get(L);A!==void 0&&Ae(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),de!==void 0&&ot(L)}function Pt(L){const A=L.texture,de=r.get(L),me=r.get(A);L.addEventListener("dispose",ue);const Me=L.textures,xe=L.isWebGLCubeRenderTarget===!0,dt=Me.length>1,rt=x(L)||c;if(dt||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,f.memory.textures++),xe){de.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(c&&A.mipmaps&&A.mipmaps.length>0){de.__webglFramebuffer[Re]=[];for(let _e=0;_e<A.mipmaps.length;_e++)de.__webglFramebuffer[Re][_e]=s.createFramebuffer()}else de.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){de.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)de.__webglFramebuffer[Re]=s.createFramebuffer()}else de.__webglFramebuffer=s.createFramebuffer();if(dt)if(a.drawBuffers)for(let Re=0,_e=Me.length;Re<_e;Re++){const it=r.get(Me[Re]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&ke(L)===!1){de.__webglMultisampledFramebuffer=s.createFramebuffer(),de.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){const _e=Me[Re];de.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const it=l.convert(_e.format,_e.colorSpace),we=l.convert(_e.type),Ct=z(_e.internalFormat,it,we,_e.colorSpace,L.isXRRenderTarget===!0),_t=Pe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Ct,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,de.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(de.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(de.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),j(s.TEXTURE_CUBE_MAP,A,rt);for(let Re=0;Re<6;Re++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Ae(de.__webglFramebuffer[Re][_e],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,_e);else Ae(de.__webglFramebuffer[Re],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);C(A,rt)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(dt){for(let Re=0,_e=Me.length;Re<_e;Re++){const it=Me[Re],we=r.get(it);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),j(s.TEXTURE_2D,it,rt),Ae(de.__webglFramebuffer,L,it,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),C(it,rt)&&b(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,me.__webglTexture),j(Re,A,rt),c&&A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)Ae(de.__webglFramebuffer[_e],L,A,s.COLOR_ATTACHMENT0,Re,_e);else Ae(de.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,Re,0);C(A,rt)&&b(Re),t.unbindTexture()}L.depthBuffer&&ot(L)}function ve(L){const A=x(L)||c,de=L.textures;for(let me=0,Me=de.length;me<Me;me++){const xe=de[me];if(C(xe,A)){const dt=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,rt=r.get(xe).__webglTexture;t.bindTexture(dt,rt),b(dt),t.unbindTexture()}}}function Je(L){if(c&&L.samples>0&&ke(L)===!1){const A=L.textures,de=L.width,me=L.height;let Me=s.COLOR_BUFFER_BIT;const xe=[],dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=r.get(L),Re=A.length>1;if(Re)for(let _e=0;_e<A.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let _e=0;_e<A.length;_e++){xe.push(s.COLOR_ATTACHMENT0+_e),L.depthBuffer&&xe.push(dt);const it=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(it===!1&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Re&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,rt.__webglColorRenderbuffer[_e]),it===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[dt])),Re){const we=r.get(A[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,de,me,0,0,de,me,Me,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let _e=0;_e<A.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,rt.__webglColorRenderbuffer[_e]);const it=r.get(A[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Pe(L){return Math.min(a.maxSamples,L.samples)}function ke(L){const A=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Fe(L){const A=f.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function qe(L,A){const de=L.colorSpace,me=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Nf||de!==Cr&&de!==xr&&(It.getTransfer(de)===kt?c===!1?e.has("EXT_sRGB")===!0&&me===mi?(L.format=Nf,L.minFilter=zn,L.generateMipmaps=!1):A=Ig.sRGBToLinear(A):(me!==mi||Me!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",de)),A}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=ce,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=K,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ke}function ZE(s,e,t){const r=t.isWebGL2;function a(l,f=xr){let c;const h=It.getTransfer(f);if(l===Er)return s.UNSIGNED_BYTE;if(l===Tg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Ag)return s.UNSIGNED_SHORT_5_5_5_1;if(l===L0)return s.BYTE;if(l===D0)return s.SHORT;if(l===Bf)return s.UNSIGNED_SHORT;if(l===wg)return s.INT;if(l===yr)return s.UNSIGNED_INT;if(l===Xi)return s.FLOAT;if(l===sa)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===N0)return s.ALPHA;if(l===mi)return s.RGBA;if(l===U0)return s.LUMINANCE;if(l===I0)return s.LUMINANCE_ALPHA;if(l===es)return s.DEPTH_COMPONENT;if(l===oo)return s.DEPTH_STENCIL;if(l===Nf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===F0)return s.RED;if(l===Cg)return s.RED_INTEGER;if(l===O0)return s.RG;if(l===Rg)return s.RG_INTEGER;if(l===bg)return s.RGBA_INTEGER;if(l===Oc||l===zc||l===kc||l===Bc)if(h===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Fp||l===Op||l===zp||l===kp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Fp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Op)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===zp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===kp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Pg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Bp||l===Hp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Bp)return h===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Hp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===Yp||l===qp||l===$p||l===Kp||l===Zp||l===Jp||l===Qp||l===em||l===tm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Gp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Vp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Wp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Xp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===jp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Yp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===qp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===$p)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Kp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Zp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Jp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Qp)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===em)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===tm)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Hc||l===nm||l===im)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Hc)return h===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===nm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===im)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===z0||l===rm||l===sm||l===om)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Hc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===rm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===sm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===om)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Qr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class JE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ta extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,r),x=this._getHandJoint(p,w);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ta;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
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

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new Ar({extensions:{fragDepth:!0},vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new en(new ua(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class i1 extends lo{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,p=null,g=null,v=null,y=null,S=null,E=null;const w=new n1,_=t.getContextAttributes();let x=null,P=null;const C=[],b=[],z=new et;let F=null;const D=new jn;D.layers.enable(1),D.viewport=new Gt;const X=new jn;X.layers.enable(2),X.viewport=new Gt;const ue=[D,X],T=new JE;T.layers.enable(1),T.layers.enable(2);let N=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=C[j];return ee===void 0&&(ee=new mf,C[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=C[j];return ee===void 0&&(ee=new mf,C[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=C[j];return ee===void 0&&(ee=new mf,C[j]=ee),ee.getHandSpace()};function te(j){const ee=b.indexOf(j.inputSource);if(ee===-1)return;const ge=C[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,p||f),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",J);for(let j=0;j<C.length;j++){const ee=b[j];ee!==null&&(b[j]=null,C[j].disconnect(ee))}N=null,pe=null,w.reset(),e.setRenderTarget(x),S=null,y=null,v=null,a=null,P=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",k),a.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new ts(S.framebufferWidth,S.framebufferHeight,{format:mi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,ge=null,Ue=null;_.depth&&(Ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?oo:es,ge=_.stencil?Qr:yr);const Ae={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};v=new XRWebGLBinding(a,t),y=v.createProjectionLayer(Ae),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ts(y.textureWidth,y.textureHeight,{format:mi,type:Er,depthTexture:new qg(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(P);Te.__ignoreDepthValues=y.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(c),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function J(j){for(let ee=0;ee<j.removed.length;ee++){const ge=j.removed[ee],Ue=b.indexOf(ge);Ue>=0&&(b[Ue]=null,C[Ue].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){const ge=j.added[ee];let Ue=b.indexOf(ge);if(Ue===-1){for(let Te=0;Te<C.length;Te++)if(Te>=b.length){b.push(ge),Ue=Te;break}else if(b[Te]===null){b[Te]=ge,Ue=Te;break}if(Ue===-1)break}const Ae=C[Ue];Ae&&Ae.connect(ge)}}const ie=new H,ce=new H;function G(j,ee,ge){ie.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const Ue=ie.distanceTo(ce),Ae=ee.projectionMatrix.elements,Te=ge.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),ot=Ae[14]/(Ae[10]+1),K=(Ae[9]+1)/Ae[5],Pt=(Ae[9]-1)/Ae[5],ve=(Ae[8]-1)/Ae[0],Je=(Te[8]+1)/Te[0],Pe=Ze*ve,ke=Ze*Je,Fe=Ue/(-ve+Je),qe=Fe*-ve;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(Fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Et=Ze+Fe,L=ot+Fe,A=Pe-qe,de=ke+(Ue-qe),me=K*ot/L*Et,Me=Pt*ot/L*Et;j.projectionMatrix.makePerspective(A,de,me,Me,Et,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Q(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;w.texture!==null&&(j.near=w.depthNear,j.far=w.depthFar),T.near=X.near=D.near=j.near,T.far=X.far=D.far=j.far,(N!==T.near||pe!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,pe=T.far,D.near=N,D.far=pe,X.near=N,X.far=pe,D.updateProjectionMatrix(),X.updateProjectionMatrix(),j.updateProjectionMatrix());const ee=j.parent,ge=T.cameras;Q(T,ee);for(let Ue=0;Ue<ge.length;Ue++)Q(ge[Ue],ee);ge.length===2?G(T,D,X):T.projectionMatrix.copy(D.projectionMatrix),q(j,T,ee)};function q(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Uf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(j){h=j,y!==null&&(y.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null};let U=null;function Y(j,ee){if(g=ee.getViewerPose(p||f),E=ee,g!==null){const ge=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ue=!1;ge.length!==T.cameras.length&&(T.cameras.length=0,Ue=!0);for(let Te=0;Te<ge.length;Te++){const Ze=ge[Te];let ot=null;if(S!==null)ot=S.getViewport(Ze);else{const Pt=v.getViewSubImage(y,Ze);ot=Pt.viewport,Te===0&&(e.setRenderTargetTextures(P,Pt.colorTexture,y.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(P))}let K=ue[Te];K===void 0&&(K=new jn,K.layers.enable(Te),K.viewport=new Gt,ue[Te]=K),K.matrix.fromArray(Ze.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ze.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ot.x,ot.y,ot.width,ot.height),Te===0&&(T.matrix.copy(K.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ue===!0&&T.cameras.push(K)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=v.getDepthInformation(ge[0]);Te&&Te.isValid&&Te.texture&&w.init(e,Te,a.renderState)}}for(let ge=0;ge<C.length;ge++){const Ue=b[ge],Ae=C[ge];Ue!==null&&Ae!==void 0&&Ae.update(Ue,ee,p||f)}w.render(e,T),U&&U(j,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),E=null}const Ce=new jg;Ce.setAnimationLoop(Y),this.setAnimationLoop=function(j){U=j},this.dispose=function(){}}}const jr=new Ci,r1=new Bt;function s1(s,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,Vg(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,P,C,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(_,x):x.isMeshToonMaterial?(l(_,x),v(_,x)):x.isMeshPhongMaterial?(l(_,x),g(_,x)):x.isMeshStandardMaterial?(l(_,x),y(_,x),x.isMeshPhysicalMaterial&&S(_,x,b)):x.isMeshMatcapMaterial?(l(_,x),E(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),w(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(f(_,x),x.isLineDashedMaterial&&c(_,x)):x.isPointsMaterial?h(_,x,P,C):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===kn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===kn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const P=e.get(x),C=P.envMap,b=P.envMapRotation;if(C&&(_.envMap.value=C,jr.copy(b),jr.x*=-1,jr.y*=-1,jr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(jr)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap){_.lightMap.value=x.lightMap;const z=s._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=x.lightMapIntensity*z,t(x.lightMap,_.lightMapTransform)}x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function f(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function c(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function h(_,x,P,C){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*P,_.scale.value=C*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function g(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function y(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),e.get(x).envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,P){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&_.clearcoatNormalScale.value.negate())),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,x){x.matcap&&(_.matcap.value=x.matcap)}function w(_,x){const P=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function o1(s,e,t,r){let a={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(P,C){const b=C.program;r.uniformBlockBinding(P,b)}function p(P,C){let b=a[P.id];b===void 0&&(E(P),b=g(P),a[P.id]=b,P.addEventListener("dispose",_));const z=C.program;r.updateUBOMapping(P,z);const F=e.render.frame;l[P.id]!==F&&(y(P),l[P.id]=F)}function g(P){const C=v();P.__bindingPointIndex=C;const b=s.createBuffer(),z=P.__size,F=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,z,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,b),b}function v(){for(let P=0;P<c;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const C=a[P.id],b=P.uniforms,z=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let F=0,D=b.length;F<D;F++){const X=Array.isArray(b[F])?b[F]:[b[F]];for(let ue=0,T=X.length;ue<T;ue++){const N=X[ue];if(S(N,F,ue,z)===!0){const pe=N.__offset,te=Array.isArray(N.value)?N.value:[N.value];let k=0;for(let J=0;J<te.length;J++){const ie=te[J],ce=w(ie);typeof ie=="number"||typeof ie=="boolean"?(N.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,pe+k,N.__data)):ie.isMatrix3?(N.__data[0]=ie.elements[0],N.__data[1]=ie.elements[1],N.__data[2]=ie.elements[2],N.__data[3]=0,N.__data[4]=ie.elements[3],N.__data[5]=ie.elements[4],N.__data[6]=ie.elements[5],N.__data[7]=0,N.__data[8]=ie.elements[6],N.__data[9]=ie.elements[7],N.__data[10]=ie.elements[8],N.__data[11]=0):(ie.toArray(N.__data,k),k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,pe,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,C,b,z){const F=P.value,D=C+"_"+b;if(z[D]===void 0)return typeof F=="number"||typeof F=="boolean"?z[D]=F:z[D]=F.clone(),!0;{const X=z[D];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return z[D]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function E(P){const C=P.uniforms;let b=0;const z=16;for(let D=0,X=C.length;D<X;D++){const ue=Array.isArray(C[D])?C[D]:[C[D]];for(let T=0,N=ue.length;T<N;T++){const pe=ue[T],te=Array.isArray(pe.value)?pe.value:[pe.value];for(let k=0,J=te.length;k<J;k++){const ie=te[k],ce=w(ie),G=b%z;G!==0&&z-G<ce.boundary&&(b+=z-G),pe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=b,b+=ce.storage}}}const F=b%z;return F>0&&(b+=z-F),P.__size=b,P.__cache={},this}function w(P){const C={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(C.boundary=4,C.storage=4):P.isVector2?(C.boundary=8,C.storage=8):P.isVector3||P.isColor?(C.boundary=16,C.storage=12):P.isVector4?(C.boundary=16,C.storage=16):P.isMatrix3?(C.boundary=48,C.storage=48):P.isMatrix4?(C.boundary=64,C.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),C}function _(P){const C=P.target;C.removeEventListener("dispose",_);const b=f.indexOf(C.__bindingPointIndex);f.splice(b,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete l[C.id]}function x(){for(const P in a)s.deleteBuffer(a[P]);f=[],a={},l={}}return{bind:h,update:p,dispose:x}}class ev{constructor(e={}){const{canvas:t=K0(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=f;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,_=null;const x=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let b=!1,z=0,F=0,D=null,X=-1,ue=null;const T=new Gt,N=new Gt;let pe=null;const te=new Tt(0);let k=0,J=t.width,ie=t.height,ce=1,G=null,Q=null;const q=new Gt(0,0,J,ie),U=new Gt(0,0,J,ie);let Y=!1;const Ce=new Vf;let j=!1,ee=!1,ge=null;const Ue=new Bt,Ae=new et,Te=new H,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return D===null?ce:1}let K=r;function Pt(R,$){for(let le=0;le<R.length;le++){const fe=R[le],se=t.getContext(fe,$);if(se!==null)return se}return null}try{const R={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kf}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),K===null){const $=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&$.shift(),K=Pt($,R),K===null)throw Pt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,Je,Pe,ke,Fe,qe,Et,L,A,de,me,Me,xe,dt,rt,Re,_e,it,we,Ct,_t,Ye,Be,He;function at(){ve=new dM(K),Je=new oM(K,ve,e),ve.init(Je),Ye=new ZE(K,ve,Je),Pe=new $E(K,ve,Je),ke=new mM(K),Fe=new IE,qe=new KE(K,ve,Pe,Fe,Je,Ye,ke),Et=new lM(C),L=new fM(C),A=new Sx(K,Je),Be=new rM(K,ve,A,Je),de=new hM(K,A,ke,Be),me=new xM(K,de,A,ke),we=new _M(K,Je,qe),Re=new aM(Fe),Me=new UE(C,Et,L,ve,Je,Be,Re),xe=new s1(C,Fe),dt=new OE,rt=new VE(ve,Je),it=new iM(C,Et,L,Pe,me,y,h),_e=new qE(C,me,Je),He=new o1(K,ke,Je,Pe),Ct=new sM(K,ve,ke,Je),_t=new pM(K,ve,ke,Je),ke.programs=Me.programs,C.capabilities=Je,C.extensions=ve,C.properties=Fe,C.renderLists=dt,C.shadowMap=_e,C.state=Pe,C.info=ke}at();const Ve=new i1(C,K);this.xr=Ve,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(J,ie,!1))},this.getSize=function(R){return R.set(J,ie)},this.setSize=function(R,$,le=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,ie=$,t.width=Math.floor(R*ce),t.height=Math.floor($*ce),le===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(J*ce,ie*ce).floor()},this.setDrawingBufferSize=function(R,$,le){J=R,ie=$,ce=le,t.width=Math.floor(R*le),t.height=Math.floor($*le),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,$,le,fe){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,$,le,fe),Pe.viewport(T.copy(q).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,$,le,fe){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,$,le,fe),Pe.scissor(N.copy(U).multiplyScalar(ce).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){Pe.setScissorTest(Y=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(R=!0,$=!0,le=!0){let fe=0;if(R){let se=!1;if(D!==null){const We=D.texture.format;se=We===bg||We===Rg||We===Cg}if(se){const We=D.texture.type,tt=We===Er||We===yr||We===Bf||We===Qr||We===Tg||We===Ag,lt=it.getClearColor(),Xe=it.getClearAlpha(),vt=lt.r,pt=lt.g,mt=lt.b;tt?(S[0]=vt,S[1]=pt,S[2]=mt,S[3]=Xe,K.clearBufferuiv(K.COLOR,0,S)):(E[0]=vt,E[1]=pt,E[2]=mt,E[3]=Xe,K.clearBufferiv(K.COLOR,0,E))}else fe|=K.COLOR_BUFFER_BIT}$&&(fe|=K.DEPTH_BUFFER_BIT),le&&(fe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),dt.dispose(),rt.dispose(),Fe.dispose(),Et.dispose(),L.dispose(),me.dispose(),Be.dispose(),He.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",hn),Ve.removeEventListener("sessionend",At),ge&&(ge.dispose(),ge=null),Kt.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=ke.autoReset,$=_e.enabled,le=_e.autoUpdate,fe=_e.needsUpdate,se=_e.type;at(),ke.autoReset=R,_e.enabled=$,_e.autoUpdate=le,_e.needsUpdate=fe,_e.type=se}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const $=R.target;$.removeEventListener("dispose",ae),Le($)}function Le(R){Oe(R),Fe.remove(R)}function Oe(R){const $=Fe.get(R).programs;$!==void 0&&($.forEach(function(le){Me.releaseProgram(le)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,le,fe,se,We){$===null&&($=Ze);const tt=se.isMesh&&se.matrixWorld.determinant()<0,lt=co(R,$,le,fe,se);Pe.setMaterial(fe,tt);let Xe=le.index,vt=1;if(fe.wireframe===!0){if(Xe=de.getWireframeAttribute(le),Xe===void 0)return;vt=2}const pt=le.drawRange,mt=le.attributes.position;let Dt=pt.start*vt,an=(pt.start+pt.count)*vt;We!==null&&(Dt=Math.max(Dt,We.start*vt),an=Math.min(an,(We.start+We.count)*vt)),Xe!==null?(Dt=Math.max(Dt,0),an=Math.min(an,Xe.count)):mt!=null&&(Dt=Math.max(Dt,0),an=Math.min(an,mt.count));const O=an-Dt;if(O<0||O===1/0)return;Be.setup(se,fe,lt,le,Xe);let Ge,ze=Ct;if(Xe!==null&&(Ge=A.get(Xe),ze=_t,ze.setIndex(Ge)),se.isMesh)fe.wireframe===!0?(Pe.setLineWidth(fe.wireframeLinewidth*ot()),ze.setMode(K.LINES)):ze.setMode(K.TRIANGLES);else if(se.isLine){let ht=fe.linewidth;ht===void 0&&(ht=1),Pe.setLineWidth(ht*ot()),se.isLineSegments?ze.setMode(K.LINES):se.isLineLoop?ze.setMode(K.LINE_LOOP):ze.setMode(K.LINE_STRIP)}else se.isPoints?ze.setMode(K.POINTS):se.isSprite&&ze.setMode(K.TRIANGLES);if(se.isBatchedMesh)ze.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)ze.renderInstances(Dt,O,se.count);else if(le.isInstancedBufferGeometry){const ht=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,xt=Math.min(le.instanceCount,ht);ze.renderInstances(Dt,O,xt)}else ze.render(Dt,O)};function ut(R,$,le){R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,vi(R,$,le),R.side=Tr,R.needsUpdate=!0,vi(R,$,le),R.side=wi):vi(R,$,le)}this.compile=function(R,$,le=null){le===null&&(le=R),_=rt.get(le),_.init(),P.push(_),le.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(_.pushLight(se),se.castShadow&&_.pushShadow(se))}),R!==le&&R.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(_.pushLight(se),se.castShadow&&_.pushShadow(se))}),_.setupLights(C._useLegacyLights);const fe=new Set;return R.traverse(function(se){const We=se.material;if(We)if(Array.isArray(We))for(let tt=0;tt<We.length;tt++){const lt=We[tt];ut(lt,le,se),fe.add(lt)}else ut(We,le,se),fe.add(We)}),P.pop(),_=null,fe},this.compileAsync=function(R,$,le=null){const fe=this.compile(R,$,le);return new Promise(se=>{function We(){if(fe.forEach(function(tt){Fe.get(tt).currentProgram.isReady()&&fe.delete(tt)}),fe.size===0){se(R);return}setTimeout(We,10)}ve.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Lt=null;function Vt(R){Lt&&Lt(R)}function hn(){Kt.stop()}function At(){Kt.start()}const Kt=new jg;Kt.setAnimationLoop(Vt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(R){Lt=R,Ve.setAnimationLoop(R),R===null?Kt.stop():Kt.start()},Ve.addEventListener("sessionstart",hn),Ve.addEventListener("sessionend",At),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera($),$=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,$,D),_=rt.get(R,P.length),_.init(),P.push(_),Ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ce.setFromProjectionMatrix(Ue),ee=this.localClippingEnabled,j=Re.init(this.clippingPlanes,ee),w=dt.get(R,x.length),w.init(),x.push(w),on(R,$,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(G,Q),this.info.render.frame++,j===!0&&Re.beginShadows();const le=_.state.shadowsArray;if(_e.render(le,R,$),j===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&it.render(w,R),_.setupLights(C._useLegacyLights),$.isArrayCamera){const fe=$.cameras;for(let se=0,We=fe.length;se<We;se++){const tt=fe[se];rs(w,R,tt,tt.viewport)}}else rs(w,R,$);D!==null&&(qe.updateMultisampleRenderTarget(D),qe.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(C,R,$),Be.resetDefaultState(),X=-1,ue=null,P.pop(),P.length>0?_=P[P.length-1]:_=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function on(R,$,le,fe){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){fe&&Te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const tt=me.update(R),lt=R.material;lt.visible&&w.push(R,tt,lt,le,Te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){const tt=me.update(R),lt=R.material;if(fe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Te.copy(R.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),Te.copy(tt.boundingSphere.center)),Te.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(lt)){const Xe=tt.groups;for(let vt=0,pt=Xe.length;vt<pt;vt++){const mt=Xe[vt],Dt=lt[mt.materialIndex];Dt&&Dt.visible&&w.push(R,tt,Dt,le,Te.z,mt)}}else lt.visible&&w.push(R,tt,lt,le,Te.z,null)}}const We=R.children;for(let tt=0,lt=We.length;tt<lt;tt++)on(We[tt],$,le,fe)}function rs(R,$,le,fe){const se=R.opaque,We=R.transmissive,tt=R.transparent;_.setupLightsView(le),j===!0&&Re.setGlobalState(C.clippingPlanes,le),We.length>0&&Ri(se,We,$,le),fe&&Pe.viewport(T.copy(fe)),se.length>0&&ii(se,$,le),We.length>0&&ii(We,$,le),tt.length>0&&ii(tt,$,le),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ri(R,$,le,fe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;const We=Je.isWebGL2;ge===null&&(ge=new ts(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?sa:Er,minFilter:Jr,samples:We?4:0})),C.getDrawingBufferSize(Ae),We?ge.setSize(Ae.x,Ae.y):ge.setSize(If(Ae.x),If(Ae.y));const tt=C.getRenderTarget();C.setRenderTarget(ge),C.getClearColor(te),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear();const lt=C.toneMapping;C.toneMapping=Mr,ii(R,le,fe),qe.updateMultisampleRenderTarget(ge),qe.updateRenderTargetMipmap(ge);let Xe=!1;for(let vt=0,pt=$.length;vt<pt;vt++){const mt=$[vt],Dt=mt.object,an=mt.geometry,O=mt.material,Ge=mt.group;if(O.side===wi&&Dt.layers.test(fe.layers)){const ze=O.side;O.side=kn,O.needsUpdate=!0,bi(Dt,le,fe,an,O,Ge),O.side=ze,O.needsUpdate=!0,Xe=!0}}Xe===!0&&(qe.updateMultisampleRenderTarget(ge),qe.updateRenderTargetMipmap(ge)),C.setRenderTarget(tt),C.setClearColor(te,k),C.toneMapping=lt}function ii(R,$,le){const fe=$.isScene===!0?$.overrideMaterial:null;for(let se=0,We=R.length;se<We;se++){const tt=R[se],lt=tt.object,Xe=tt.geometry,vt=fe===null?tt.material:fe,pt=tt.group;lt.layers.test(le.layers)&&bi(lt,$,le,Xe,vt,pt)}}function bi(R,$,le,fe,se,We){R.onBeforeRender(C,$,le,fe,se,We),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(C,$,le,fe,R,We),se.transparent===!0&&se.side===wi&&se.forceSinglePass===!1?(se.side=kn,se.needsUpdate=!0,C.renderBufferDirect(le,$,fe,se,R,We),se.side=Tr,se.needsUpdate=!0,C.renderBufferDirect(le,$,fe,se,R,We),se.side=wi):C.renderBufferDirect(le,$,fe,se,R,We),R.onAfterRender(C,$,le,fe,se,We)}function vi(R,$,le){$.isScene!==!0&&($=Ze);const fe=Fe.get(R),se=_.state.lights,We=_.state.shadowsArray,tt=se.state.version,lt=Me.getParameters(R,se.state,We,$,le),Xe=Me.getProgramCacheKey(lt);let vt=fe.programs;fe.environment=R.isMeshStandardMaterial?$.environment:null,fe.fog=$.fog,fe.envMap=(R.isMeshStandardMaterial?L:Et).get(R.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,vt===void 0&&(R.addEventListener("dispose",ae),vt=new Map,fe.programs=vt);let pt=vt.get(Xe);if(pt!==void 0){if(fe.currentProgram===pt&&fe.lightsStateVersion===tt)return os(R,lt),pt}else lt.uniforms=Me.getUniforms(R),R.onBuild(le,lt,C),R.onBeforeCompile(lt,C),pt=Me.acquireProgram(lt,Xe),vt.set(Xe,pt),fe.uniforms=lt.uniforms;const mt=fe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(mt.clippingPlanes=Re.uniform),os(R,lt),fe.needsLights=as(R),fe.lightsStateVersion=tt,fe.needsLights&&(mt.ambientLightColor.value=se.state.ambient,mt.lightProbe.value=se.state.probe,mt.directionalLights.value=se.state.directional,mt.directionalLightShadows.value=se.state.directionalShadow,mt.spotLights.value=se.state.spot,mt.spotLightShadows.value=se.state.spotShadow,mt.rectAreaLights.value=se.state.rectArea,mt.ltc_1.value=se.state.rectAreaLTC1,mt.ltc_2.value=se.state.rectAreaLTC2,mt.pointLights.value=se.state.point,mt.pointLightShadows.value=se.state.pointShadow,mt.hemisphereLights.value=se.state.hemi,mt.directionalShadowMap.value=se.state.directionalShadowMap,mt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,mt.spotShadowMap.value=se.state.spotShadowMap,mt.spotLightMatrix.value=se.state.spotLightMatrix,mt.spotLightMap.value=se.state.spotLightMap,mt.pointShadowMap.value=se.state.pointShadowMap,mt.pointShadowMatrix.value=se.state.pointShadowMatrix),fe.currentProgram=pt,fe.uniformsList=null,pt}function ss(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=kl.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function os(R,$){const le=Fe.get(R);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function co(R,$,le,fe,se){$.isScene!==!0&&($=Ze),qe.resetTextureUnits();const We=$.fog,tt=fe.isMeshStandardMaterial?$.environment:null,lt=D===null?C.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Cr,Xe=(fe.isMeshStandardMaterial?L:Et).get(fe.envMap||tt),vt=fe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pt=!!le.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),mt=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,an=!!le.morphAttributes.color;let O=Mr;fe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(O=C.toneMapping);const Ge=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ze=Ge!==void 0?Ge.length:0,ht=Fe.get(fe),xt=_.state.lights;if(j===!0&&(ee===!0||R!==ue)){const Ln=R===ue&&fe.id===X;Re.setState(fe,R,Ln)}let yt=!1;fe.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==xt.state.version||ht.outputColorSpace!==lt||se.isBatchedMesh&&ht.batching===!1||!se.isBatchedMesh&&ht.batching===!0||se.isInstancedMesh&&ht.instancing===!1||!se.isInstancedMesh&&ht.instancing===!0||se.isSkinnedMesh&&ht.skinning===!1||!se.isSkinnedMesh&&ht.skinning===!0||se.isInstancedMesh&&ht.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ht.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ht.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ht.instancingMorph===!1&&se.morphTexture!==null||ht.envMap!==Xe||fe.fog===!0&&ht.fog!==We||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Re.numPlanes||ht.numIntersection!==Re.numIntersection)||ht.vertexAlphas!==vt||ht.vertexTangents!==pt||ht.morphTargets!==mt||ht.morphNormals!==Dt||ht.morphColors!==an||ht.toneMapping!==O||Je.isWebGL2===!0&&ht.morphTargetsCount!==ze)&&(yt=!0):(yt=!0,ht.__version=fe.version);let Pn=ht.currentProgram;yt===!0&&(Pn=vi(fe,$,se));let Pi=!1,Wt=!1,Yn=!1;const qt=Pn.getUniforms(),qn=ht.uniforms;if(Pe.useProgram(Pn.program)&&(Pi=!0,Wt=!0,Yn=!0),fe.id!==X&&(X=fe.id,Wt=!0),Pi||ue!==R){qt.setValue(K,"projectionMatrix",R.projectionMatrix),qt.setValue(K,"viewMatrix",R.matrixWorldInverse);const Ln=qt.map.cameraPosition;Ln!==void 0&&Ln.setValue(K,Te.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&qt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&qt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,Wt=!0,Yn=!0)}if(se.isSkinnedMesh){qt.setOptional(K,se,"bindMatrix"),qt.setOptional(K,se,"bindMatrixInverse");const Ln=se.skeleton;Ln&&(Je.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),qt.setValue(K,"boneTexture",Ln.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}se.isBatchedMesh&&(qt.setOptional(K,se,"batchingTexture"),qt.setValue(K,"batchingTexture",se._matricesTexture,qe));const fo=le.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&Je.isWebGL2===!0)&&we.update(se,le,Pn),(Wt||ht.receiveShadow!==se.receiveShadow)&&(ht.receiveShadow=se.receiveShadow,qt.setValue(K,"receiveShadow",se.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(qn.envMap.value=Xe,qn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Wt&&(qt.setValue(K,"toneMappingExposure",C.toneMappingExposure),ht.needsLights&&ri(qn,Yn),We&&fe.fog===!0&&xe.refreshFogUniforms(qn,We),xe.refreshMaterialUniforms(qn,fe,ce,ie,ge),kl.upload(K,ss(ht),qn,qe)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(kl.upload(K,ss(ht),qn,qe),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&qt.setValue(K,"center",se.center),qt.setValue(K,"modelViewMatrix",se.modelViewMatrix),qt.setValue(K,"normalMatrix",se.normalMatrix),qt.setValue(K,"modelMatrix",se.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Ln=fe.uniformsGroups;for(let Rr=0,ca=Ln.length;Rr<ca;Rr++)if(Je.isWebGL2){const ls=Ln[Rr];He.update(ls,Pn),He.bind(ls,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function ri(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function as(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,$,le){Fe.get(R.texture).__webglTexture=$,Fe.get(R.depthTexture).__webglTexture=le;const fe=Fe.get(R);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=le===void 0,fe.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const le=Fe.get(R);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,le=0){D=R,z=$,F=le;let fe=!0,se=null,We=!1,tt=!1;if(R){const Xe=Fe.get(R);Xe.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(K.FRAMEBUFFER,null),fe=!1):Xe.__webglFramebuffer===void 0?qe.setupRenderTarget(R):Xe.__hasExternalTextures&&qe.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);const vt=R.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(tt=!0);const pt=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(pt[$])?se=pt[$][le]:se=pt[$],We=!0):Je.isWebGL2&&R.samples>0&&qe.useMultisampledRTT(R)===!1?se=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(pt)?se=pt[le]:se=pt,T.copy(R.viewport),N.copy(R.scissor),pe=R.scissorTest}else T.copy(q).multiplyScalar(ce).floor(),N.copy(U).multiplyScalar(ce).floor(),pe=Y;if(Pe.bindFramebuffer(K.FRAMEBUFFER,se)&&Je.drawBuffers&&fe&&Pe.drawBuffers(R,se),Pe.viewport(T),Pe.scissor(N),Pe.setScissorTest(pe),We){const Xe=Fe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xe.__webglTexture,le)}else if(tt){const Xe=Fe.get(R.texture),vt=$||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Xe.__webglTexture,le||0,vt)}X=-1},this.readRenderTargetPixels=function(R,$,le,fe,se,We,tt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&tt!==void 0&&(lt=lt[tt]),lt){Pe.bindFramebuffer(K.FRAMEBUFFER,lt);try{const Xe=R.texture,vt=Xe.format,pt=Xe.type;if(vt!==mi&&Ye.convert(vt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mt=pt===sa&&(ve.has("EXT_color_buffer_half_float")||Je.isWebGL2&&ve.has("EXT_color_buffer_float"));if(pt!==Er&&Ye.convert(pt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pt===Xi&&(Je.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-fe&&le>=0&&le<=R.height-se&&K.readPixels($,le,fe,se,Ye.convert(vt),Ye.convert(pt),We)}finally{const Xe=D!==null?Fe.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(K.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(R,$,le=0){const fe=Math.pow(2,-le),se=Math.floor($.image.width*fe),We=Math.floor($.image.height*fe);qe.setTexture2D($,0),K.copyTexSubImage2D(K.TEXTURE_2D,le,0,0,R.x,R.y,se,We),Pe.unbindTexture()},this.copyTextureToTexture=function(R,$,le,fe=0){const se=$.image.width,We=$.image.height,tt=Ye.convert(le.format),lt=Ye.convert(le.type);qe.setTexture2D(le,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,le.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,le.unpackAlignment),$.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,fe,R.x,R.y,se,We,tt,lt,$.image.data):$.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,fe,R.x,R.y,$.mipmaps[0].width,$.mipmaps[0].height,tt,$.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,fe,R.x,R.y,tt,lt,$.image),fe===0&&le.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,$,le,fe,se=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const We=Math.round(R.max.x-R.min.x),tt=Math.round(R.max.y-R.min.y),lt=R.max.z-R.min.z+1,Xe=Ye.convert(fe.format),vt=Ye.convert(fe.type);let pt;if(fe.isData3DTexture)qe.setTexture3D(fe,0),pt=K.TEXTURE_3D;else if(fe.isDataArrayTexture||fe.isCompressedArrayTexture)qe.setTexture2DArray(fe,0),pt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,fe.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,fe.unpackAlignment);const mt=K.getParameter(K.UNPACK_ROW_LENGTH),Dt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),an=K.getParameter(K.UNPACK_SKIP_PIXELS),O=K.getParameter(K.UNPACK_SKIP_ROWS),Ge=K.getParameter(K.UNPACK_SKIP_IMAGES),ze=le.isCompressedTexture?le.mipmaps[se]:le.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,ze.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ze.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,R.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,R.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,R.min.z),le.isDataTexture||le.isData3DTexture?K.texSubImage3D(pt,se,$.x,$.y,$.z,We,tt,lt,Xe,vt,ze.data):fe.isCompressedArrayTexture?K.compressedTexSubImage3D(pt,se,$.x,$.y,$.z,We,tt,lt,Xe,ze.data):K.texSubImage3D(pt,se,$.x,$.y,$.z,We,tt,lt,Xe,vt,ze),K.pixelStorei(K.UNPACK_ROW_LENGTH,mt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Dt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,an),K.pixelStorei(K.UNPACK_SKIP_ROWS,O),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Ge),se===0&&fe.generateMipmaps&&K.generateMipmap(pt),Pe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?qe.setTextureCube(R,0):R.isData3DTexture?qe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?qe.setTexture2DArray(R,0):qe.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){z=0,F=0,D=null,Pe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Kl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class a1 extends ev{}a1.prototype.isWebGL1Renderer=!0;class Xf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=t}clone(){return new Xf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l1 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class u1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ug("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new H;class ql{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ut(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),a=Ut(a,this.array),l=Ut(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Of extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const Zo=new H,qs=new H,$s=new H,Ks=new et,Jo=new et,tv=new Bt,Nl=new H,Qo=new H,Ul=new H,Km=new et,gf=new et,Zm=new et;class Jm extends dn{constructor(e=new Of){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new u1(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ql(r,3,0,!1)),Ys.setAttribute("uv",new ql(r,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),tv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-$s.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Il(Nl.set(-.5,-.5,0),$s,f,qs,a,l),Il(Qo.set(.5,-.5,0),$s,f,qs,a,l),Il(Ul.set(.5,.5,0),$s,f,qs,a,l),Km.set(0,0),gf.set(1,0),Zm.set(1,1);let c=e.ray.intersectTriangle(Nl,Qo,Ul,!1,Zo);if(c===null&&(Il(Qo.set(-.5,.5,0),$s,f,qs,a,l),gf.set(0,1),c=e.ray.intersectTriangle(Nl,Ul,Qo,!1,Zo),c===null))return;const h=e.ray.origin.distanceTo(Zo);h<e.near||h>e.far||t.push({distance:h,point:Zo.clone(),uv:gi.getInterpolation(Zo,Nl,Qo,Ul,Km,gf,Zm,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Il(s,e,t,r,a,l){Ks.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Jo.x=l*Ks.x-a*Ks.y,Jo.y=a*Ks.x+l*Ks.y):Jo.copy(Ks),s.copy(e),s.x+=Jo.x,s.y+=Jo.y,s.applyMatrix4(tv)}class na extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qm=new H,eg=new H,tg=new Bt,vf=new zg,Fl=new Zl;class Bl extends dn{constructor(e=new gn,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Qm.fromBufferAttribute(t,a-1),eg.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Qm.distanceTo(eg);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(a),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;tg.copy(a).invert(),vf.copy(e.ray).applyMatrix4(tg);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new H,g=new H,v=new H,y=new H,S=this.isLineSegments?2:1,E=r.index,_=r.attributes.position;if(E!==null){const x=Math.max(0,f.start),P=Math.min(E.count,f.start+f.count);for(let C=x,b=P-1;C<b;C+=S){const z=E.getX(C),F=E.getX(C+1);if(p.fromBufferAttribute(_,z),g.fromBufferAttribute(_,F),vf.distanceSqToSegment(p,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(y);X<e.near||X>e.far||t.push({distance:X,point:v.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,f.start),P=Math.min(_.count,f.start+f.count);for(let C=x,b=P-1;C<b;C+=S){if(p.fromBufferAttribute(_,C),g.fromBufferAttribute(_,C+1),vf.distanceSqToSegment(p,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(y);F<e.near||F>e.far||t.push({distance:F,point:v.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}const ng=new H,ig=new H;class c1 extends Bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)ng.fromBufferAttribute(t,a),ig.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ng.distanceTo(ig);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rg extends bn{constructor(e,t,r,a,l,f,c,h,p){super(e,t,r,a,l,f,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,p;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),p=r[a]-f,p<0)c=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const g=r[a],y=r[a+1]-g,S=(f-g)/y;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new et:new H);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new H,a=[],l=[],f=[],c=new H,h=new Bt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new H)}l[0]=new H,f[0]=new H;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),y=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),y<=p&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(En(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,E))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(En(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),f[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nv extends Yi{constructor(e=0,t=0,r=1,a=1,l=0,f=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=f,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new et){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const f=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(f?l=0:l=a),this.aClockwise===!0&&!f&&(l===a?l=-a:l=l-a);const c=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(c),p=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=h-this.aX,S=p-this.aY;h=y*g-S*v+this.aX,p=y*v+S*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class f1 extends nv{constructor(e,t,r,a,l,f){super(e,t,r,r,a,l,f),this.isArcCurve=!0,this.type="ArcCurve"}}function jf(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,p){a(f,c,p*(c-l),p*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,p,g,v){let y=(f-l)/p-(c-l)/(p+g)+(c-f)/g,S=(c-f)/g-(h-f)/(g+v)+(h-c)/v;y*=g,S*=g,a(f,c,y,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const Ol=new H,_f=new jf,xf=new jf,yf=new jf;class iv extends Yi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new H){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let p,g;this.closed||c>0?p=a[(c-1)%l]:(Ol.subVectors(a[0],a[1]).add(a[0]),p=Ol);const v=a[c%l],y=a[(c+1)%l];if(this.closed||c+2<l?g=a[(c+2)%l]:(Ol.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Ol),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(y),S),_=Math.pow(y.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),_<1e-4&&(_=w),_f.initNonuniformCatmullRom(p.x,v.x,y.x,g.x,E,w,_),xf.initNonuniformCatmullRom(p.y,v.y,y.y,g.y,E,w,_),yf.initNonuniformCatmullRom(p.z,v.z,y.z,g.z,E,w,_)}else this.curveType==="catmullrom"&&(_f.initCatmullRom(p.x,v.x,y.x,g.x,this.tension),xf.initCatmullRom(p.y,v.y,y.y,g.y,this.tension),yf.initCatmullRom(p.z,v.z,y.z,g.z,this.tension));return r.set(_f.calc(h),xf.calc(h),yf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new H().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sg(s,e,t,r,a){const l=(r-e)*.5,f=(a-t)*.5,c=s*s,h=s*c;return(2*t-2*r+l+f)*h+(-3*t+3*r-2*l-f)*c+l*s+t}function d1(s,e){const t=1-s;return t*t*e}function h1(s,e){return 2*(1-s)*s*e}function p1(s,e){return s*s*e}function ia(s,e,t,r){return d1(s,e)+h1(s,t)+p1(s,r)}function m1(s,e){const t=1-s;return t*t*t*e}function g1(s,e){const t=1-s;return 3*t*t*s*e}function v1(s,e){return 3*(1-s)*s*s*e}function _1(s,e){return s*s*s*e}function ra(s,e,t,r,a){return m1(s,e)+g1(s,t)+v1(s,r)+_1(s,a)}class x1 extends Yi{constructor(e=new et,t=new et,r=new et,a=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new et){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(ra(e,a.x,l.x,f.x,c.x),ra(e,a.y,l.y,f.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y1 extends Yi{constructor(e=new H,t=new H,r=new H,a=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new H){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(ra(e,a.x,l.x,f.x,c.x),ra(e,a.y,l.y,f.y,c.y),ra(e,a.z,l.z,f.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S1 extends Yi{constructor(e=new et,t=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new et){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new et){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends Yi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E1 extends Yi{constructor(e=new et,t=new et,r=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new et){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(ia(e,a.x,l.x,f.x),ia(e,a.y,l.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rv extends Yi{constructor(e=new H,t=new H,r=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new H){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(ia(e,a.x,l.x,f.x),ia(e,a.y,l.y,f.y),ia(e,a.z,l.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new et){const r=t,a=this.points,l=(a.length-1)*e,f=Math.floor(l),c=l-f,h=a[f===0?f:f-1],p=a[f],g=a[f>a.length-2?a.length-1:f+1],v=a[f>a.length-3?a.length-1:f+2];return r.set(sg(c,h.x,p.x,g.x,v.x),sg(c,h.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new et().fromArray(a))}return this}}var T1=Object.freeze({__proto__:null,ArcCurve:f1,CatmullRomCurve3:iv,CubicBezierCurve:x1,CubicBezierCurve3:y1,EllipseCurve:nv,LineCurve:S1,LineCurve3:M1,QuadraticBezierCurve:E1,QuadraticBezierCurve3:rv,SplineCurve:w1});class Yf extends gn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],f=[],c=[],h=[],p=new H,g=new et;f.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let v=0,y=3;v<=t;v++,y+=3){const S=r+v/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(f[y]/e+1)/2,g.y=(f[y+1]/e+1)/2,h.push(g.x,g.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ql extends gn{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:c,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],v=[],y=[],S=[];let E=0;const w=[],_=r/2;let x=0;P(),f===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(S,2));function P(){const b=new H,z=new H;let F=0;const D=(t-e)/r;for(let X=0;X<=l;X++){const ue=[],T=X/l,N=T*(t-e)+e;for(let pe=0;pe<=a;pe++){const te=pe/a,k=te*h+c,J=Math.sin(k),ie=Math.cos(k);z.x=N*J,z.y=-T*r+_,z.z=N*ie,v.push(z.x,z.y,z.z),b.set(J,D,ie).normalize(),y.push(b.x,b.y,b.z),S.push(te,1-T),ue.push(E++)}w.push(ue)}for(let X=0;X<a;X++)for(let ue=0;ue<l;ue++){const T=w[ue][X],N=w[ue+1][X],pe=w[ue+1][X+1],te=w[ue][X+1];g.push(T,N,te),g.push(N,pe,te),F+=6}p.addGroup(x,F,0),x+=F}function C(b){const z=E,F=new et,D=new H;let X=0;const ue=b===!0?e:t,T=b===!0?1:-1;for(let pe=1;pe<=a;pe++)v.push(0,_*T,0),y.push(0,T,0),S.push(.5,.5),E++;const N=E;for(let pe=0;pe<=a;pe++){const k=pe/a*h+c,J=Math.cos(k),ie=Math.sin(k);D.x=ue*ie,D.y=_*T,D.z=ue*J,v.push(D.x,D.y,D.z),y.push(0,T,0),F.x=J*.5+.5,F.y=ie*.5*T+.5,S.push(F.x,F.y),E++}for(let pe=0;pe<a;pe++){const te=z+pe,k=N+pe;b===!0?g.push(k,k+1,te):g.push(k+1,k,te),X+=3}p.addGroup(x,X,b===!0?1:2),x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qf extends Ql{constructor(e=1,t=1,r=32,a=1,l=!1,f=0,c=Math.PI*2){super(0,e,t,r,a,l,f,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:f,thetaLength:c}}static fromJSON(e){return new qf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $f extends gn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const f=[],c=[],h=[],p=[],g=new H,v=new H,y=new H;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const w=E/a*l,_=S/r*Math.PI*2;v.x=(e+t*Math.cos(_))*Math.cos(w),v.y=(e+t*Math.cos(_))*Math.sin(w),v.z=t*Math.sin(_),c.push(v.x,v.y,v.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),y.subVectors(v,g).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const w=(a+1)*S+E-1,_=(a+1)*(S-1)+E-1,x=(a+1)*(S-1)+E,P=(a+1)*S+E;f.push(w,_,P),f.push(_,x,P)}this.setIndex(f),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kf extends gn{constructor(e=new rv(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const f=e.computeFrenetFrames(t,l);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const c=new H,h=new H,p=new et;let g=new H;const v=[],y=[],S=[],E=[];w(),this.setIndex(E),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(S,2));function w(){for(let C=0;C<t;C++)_(C);_(l===!1?t:0),P(),x()}function _(C){g=e.getPointAt(C/t,g);const b=f.normals[C],z=f.binormals[C];for(let F=0;F<=a;F++){const D=F/a*Math.PI*2,X=Math.sin(D),ue=-Math.cos(D);h.x=ue*b.x+X*z.x,h.y=ue*b.y+X*z.y,h.z=ue*b.z+X*z.z,h.normalize(),y.push(h.x,h.y,h.z),c.x=g.x+r*h.x,c.y=g.y+r*h.y,c.z=g.z+r*h.z,v.push(c.x,c.y,c.z)}}function x(){for(let C=1;C<=t;C++)for(let b=1;b<=a;b++){const z=(a+1)*(C-1)+(b-1),F=(a+1)*C+(b-1),D=(a+1)*C+b,X=(a+1)*(C-1)+b;E.push(z,F,X),E.push(F,D,X)}}function P(){for(let C=0;C<=t;C++)for(let b=0;b<=a;b++)p.x=C/t,p.y=b/a,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kf(new T1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Zs extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lg,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sf=new Bt,og=new H,ag=new H;class sv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;og.setFromMatrixPosition(e.matrixWorld),t.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ag),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lg=new Bt,ea=new H,Mf=new H;class A1 extends sv{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),Mf.copy(r.position),Mf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Mf),r.updateMatrixWorld(),a.makeTranslation(-ea.x,-ea.y,-ea.z),lg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg)}}class Ef extends Zf{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new A1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class C1 extends sv{constructor(){super(new Yg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends Zf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new C1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R1 extends Zf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class b1 extends c1{constructor(e=10,t=10,r=4473924,a=8947848){r=new Tt(r),a=new Tt(a);const l=t/2,f=e/t,c=e/2,h=[],p=[];for(let y=0,S=0,E=-c;y<=t;y++,E+=f){h.push(-c,0,E,c,0,E),h.push(E,0,-c,E,0,c);const w=y===l?r:a;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const g=new gn;g.setAttribute("position",new Yt(h,3)),g.setAttribute("color",new Yt(p,3));const v=new na({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);const P1="https://api.openf1.org/v1",he={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",fogColor:921110,groundColor:1118489,gridC1:1710634,gridC2:1315872,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},L1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},D1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},cg=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(D1))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},N1=[{label:"VER vs NOR — Monza 2024 Q",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"HAM vs VER — Bahrain 2024 R",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1},{label:"NOR vs PIA — Silverstone 2024 Q",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81},{label:"LEC vs SAI — Monaco 2024 Q",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55},{label:"VER vs NOR — Abu Dhabi 2024 Q",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"RUS vs HAM — Spa 2024 Q",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44}],zl=["orbit","follow1","follow2","top","cinematic"],U1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function is(s,e={},t=2){const r=new URL(`${P1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=t;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===t)throw l;await new Promise(f=>setTimeout(f,800*(a+1)))}}const fg=s=>is("/meetings",{year:s}),dg=s=>is("/sessions",{meeting_key:s}),hg=s=>is("/drivers",{session_key:s}),pg=(s,e)=>is("/laps",{session_key:s,driver_number:e}),mg=(s,e)=>is("/stints",{session_key:s,driver_number:e});function gg(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),is("/location",a)}function vg(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),is("/car_data",a)}function Hl(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),a=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function oa(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,a=-1/0,l=1/0,f=-1/0;for(const v of s)v.x<e&&(e=v.x),v.x>t&&(t=v.x),v.y<r&&(r=v.y),v.y>a&&(a=v.y),v.z<l&&(l=v.z),v.z>f&&(f=v.z);const c=Math.max(t-e,a-r)||1,h=(e+t)/2,p=(r+a)/2,g=(l+f)/2;return s.map(v=>({x:(v.x-h)/c*40,y:(v.z-g)/c*4,z:(v.y-p)/c*40}))}function _g(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function xg(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function I1(){const[s,e]=De.useState(typeof window<"u"&&window.innerWidth<768);return De.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function Js(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*t)]);return r}function Yr(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function F1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function Qs(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function O1(s,e,t,r,a,l,f,c,h,p){const g=De.useRef({}),v=De.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),y=De.useRef(c),S=De.useMemo(()=>t?oa(t):null,[t]),E=De.useMemo(()=>r?oa(r):null,[r]);De.useEffect(()=>{const w=s.current;if(!w||!e||e.length<10)return;g.current.ren&&(g.current.ren.dispose(),w.contains(g.current.ren.domElement)&&w.removeChild(g.current.ren.domElement)),g.current.fr&&cancelAnimationFrame(g.current.fr);const _=w.clientWidth,x=w.clientHeight,P=new l1;P.fog=new Xf(he.fogColor,.005);const C=new jn(50,_/x,.1,500),b=new ev({antialias:window.devicePixelRatio<2,alpha:!0});b.setSize(_,x),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.setClearColor(he.fogColor,1),b.shadowMap.enabled=!1,w.appendChild(b.domElement),P.add(new R1(2241348,.4));const z=new ug(16777215,.9);z.position.set(30,50,20),P.add(z);const F=new ug(4482730,.3);F.position.set(-20,30,-10),P.add(F);const D=new Ef(14747136,.3,80);D.position.set(0,20,0),P.add(D);const X=new en(new ua(200,200),new Zs({color:he.groundColor,roughness:.98,metalness:.02}));X.rotation.x=-Math.PI/2,X.position.y=-.5,P.add(X);const ue=new b1(200,80,he.gridC1,he.gridC2);ue.position.y=-.45,P.add(ue);const T=new iv(e.map(ve=>new H(ve.x,ve.y,ve.z)),!0),N=Math.min(e.length*2,600);P.add(new en(new Kf(T,N,.9,8,!0),new Zs({color:2763322,roughness:.6,metalness:.4,transparent:!0,opacity:.85})));const pe=new Bl(new gn().setFromPoints(T.getPoints(N)),new na({color:14747136,transparent:!0,opacity:.25}));pe.position.y+=.06,P.add(pe);const te=new Bl(new gn().setFromPoints(T.getPoints(N)),new na({color:16777215,transparent:!0,opacity:.08}));te.position.y+=.07,P.add(te);const k=[53866,16766720,14747136];[0,.33,.66].forEach((ve,Je)=>{const Pe=T.getPointAt(ve),ke=new en(new Ql(.08,.08,4,8),new Zs({color:k[Je],emissive:k[Je],emissiveIntensity:.8}));ke.position.set(Pe.x,Pe.y+2,Pe.z),P.add(ke);const Fe=new Ef(k[Je],.4,6);Fe.position.set(Pe.x,Pe.y+3,Pe.z),P.add(Fe)});const J=[],ie=200;for(let ve=0;ve<ie-2;ve++){const Je=ve/ie,Pe=(ve+1)/ie,ke=(ve+2)/ie,Fe=T.getPointAt(Je),qe=T.getPointAt(Pe),Et=T.getPointAt(ke);Math.abs((qe.x-Fe.x)*(Et.z-qe.z)-(qe.z-Fe.z)*(Et.x-qe.x))>.15&&(J.length===0||Math.abs(Pe-J[J.length-1].t)>.04)&&J.push({t:Pe,p:qe})}J.slice(0,20).forEach((ve,Je)=>{const Pe=document.createElement("canvas");Pe.width=56,Pe.height=56;const ke=Pe.getContext("2d");ke.fillStyle="rgba(225,6,0,0.7)",ke.beginPath(),ke.arc(28,28,24,0,Math.PI*2),ke.fill(),ke.fillStyle="#fff",ke.font="bold 24px sans-serif",ke.textAlign="center",ke.textBaseline="middle",ke.fillText(`${Je+1}`,28,29);const Fe=new rg(Pe),qe=new Jm(new Of({map:Fe,transparent:!0,depthWrite:!1}));qe.position.set(ve.p.x,ve.p.y+2.8,ve.p.z),qe.scale.set(1.4,1.4,1),P.add(qe)});const ce=T.getPointAt(0),G=new en(new Ai(4,.12,.4),new Zs({color:16777215,emissive:16777215,emissiveIntensity:.6}));G.position.set(ce.x,ce.y+.12,ce.z),P.add(G);function Q(ve,Je,Pe){const ke=new ta,Fe=new Tt(ve),qe=new Zs({color:Fe,emissive:Fe,emissiveIntensity:Pe?.6:.35,metalness:.7,roughness:.25,transparent:Pe,opacity:Pe?.55:1}),Et=new en(new Ai(.5,.2,1.6),qe);Et.position.y=.2,ke.add(Et);const L=new en(new Ai(.9,.06,.25),qe);L.position.set(0,.12,.85),ke.add(L);const A=new en(new Ai(.7,.18,.08),qe);A.position.set(0,.45,-.75),ke.add(A),[-.35,.35].forEach(Re=>{const _e=new en(new Ai(.03,.22,.15),qe);_e.position.set(Re,.42,-.75),ke.add(_e)});const de=new en(new qf(.12,.5,4),qe);de.geometry.rotateX(-Math.PI/2),de.position.set(0,.18,1.05),ke.add(de);const me=new Zs({color:3355443,metalness:.9,roughness:.1}),Me=new en(new $f(.18,.025,6,12,Math.PI),me);Me.rotation.z=Math.PI,Me.position.set(0,.35,.15),ke.add(Me);const xe=new Gf({color:Fe,transparent:!0,opacity:Pe?.1:.06,side:wi}),dt=new en(new Yf(1.2,16),xe);dt.rotation.x=-Math.PI/2,dt.position.y=.02,ke.add(dt);const rt=new Ef(Fe,Pe?.7:.4,10);if(rt.position.set(0,.5,0),ke.add(rt),Je){const Re=document.createElement("canvas");Re.width=160,Re.height=56;const _e=Re.getContext("2d");_e.fillStyle=ve,_e.globalAlpha=.9,_e.beginPath();const it=6;_e.moveTo(it,0),_e.lineTo(160-it,0),_e.quadraticCurveTo(160,0,160,it),_e.lineTo(160,56-it),_e.quadraticCurveTo(160,56,160-it,56),_e.lineTo(it,56),_e.quadraticCurveTo(0,56,0,56-it),_e.lineTo(0,it),_e.quadraticCurveTo(0,0,it,0),_e.fill(),_e.fillStyle="#fff",_e.globalAlpha=.15,_e.fillRect(0,0,6,56),_e.globalAlpha=1,_e.fillStyle="#fff",_e.font="bold 30px sans-serif",_e.textAlign="center",_e.textBaseline="middle",_e.fillText(Je,80,30);const we=new rg(Re),Ct=new Jm(new Of({map:we,transparent:!0,depthWrite:!1}));Ct.position.set(0,1.6,0),Ct.scale.set(2.8,1,1),ke.add(Ct)}return ke}const q=Q(l,h,!1),U=Q(f,p,!0);P.add(q),P.add(U);function Y(ve,Je){const ke=new Float32Array(240),Fe=new gn;Fe.setAttribute("position",new ni(ke,3)),Fe.setDrawRange(0,0);const qe=new Bl(Fe,new na({color:new Tt(ve),transparent:!0,opacity:Je?.35:.6,linewidth:2}));return P.add(qe),{line:qe,positions:ke,max:80,count:0}}const Ce=Y(l,!1),j=Y(f,!0);g.current={scene:P,camera:C,ren:b,car1:q,car2:U,tr1:Ce,tr2:j,n1:S,n2:E,curve:T,fr:null};const ee=v.current,ge=ve=>{var Je,Pe,ke,Fe;ee.drag=!0,ee.lx=ve.clientX??((Pe=(Je=ve.touches)==null?void 0:Je[0])==null?void 0:Pe.clientX)??0,ee.ly=ve.clientY??((Fe=(ke=ve.touches)==null?void 0:ke[0])==null?void 0:Fe.clientY)??0},Ue=ve=>{var ke,Fe,qe,Et;if(!ee.drag)return;const Je=ve.clientX??((Fe=(ke=ve.touches)==null?void 0:ke[0])==null?void 0:Fe.clientX)??0,Pe=ve.clientY??((Et=(qe=ve.touches)==null?void 0:qe[0])==null?void 0:Et.clientY)??0;ee.angle+=(Je-ee.lx)*.005,ee.pitch=Math.max(.1,Math.min(1.4,ee.pitch+(Pe-ee.ly)*.005)),ee.lx=Je,ee.ly=Pe},Ae=()=>{ee.drag=!1},Te=ve=>{ee.dist=Math.max(15,Math.min(120,ee.dist+ve.deltaY*.05))},Ze=b.domElement;Ze.addEventListener("mousedown",ge),Ze.addEventListener("mousemove",Ue),Ze.addEventListener("mouseup",Ae),Ze.addEventListener("mouseleave",Ae),Ze.addEventListener("wheel",Te,{passive:!0}),Ze.addEventListener("touchstart",ge,{passive:!0}),Ze.addEventListener("touchmove",Ue,{passive:!0}),Ze.addEventListener("touchend",Ae);function ot(){g.current.fr=requestAnimationFrame(ot),ee.cinT+=3e-4;const ve=y.current;ve==="orbit"?(ee.drag||(ee.angle+=8e-4),C.position.set(Math.cos(ee.angle)*ee.dist*Math.cos(ee.pitch),ee.dist*Math.sin(ee.pitch),Math.sin(ee.angle)*ee.dist*Math.cos(ee.pitch)),C.lookAt(0,0,0)):ve==="top"&&(C.position.set(0,65,.01),C.lookAt(0,0,0)),b.render(P,C)}ot();let K;const Pt=()=>{clearTimeout(K),K=setTimeout(()=>{w&&(C.aspect=w.clientWidth/w.clientHeight,C.updateProjectionMatrix(),b.setSize(w.clientWidth,w.clientHeight))},100)};return window.addEventListener("resize",Pt),()=>{window.removeEventListener("resize",Pt),Ze.removeEventListener("mousedown",ge),Ze.removeEventListener("mousemove",Ue),Ze.removeEventListener("mouseup",Ae),Ze.removeEventListener("mouseleave",Ae),Ze.removeEventListener("wheel",Te),Ze.removeEventListener("touchstart",ge),Ze.removeEventListener("touchmove",Ue),Ze.removeEventListener("touchend",Ae),cancelAnimationFrame(g.current.fr),b.dispose(),w.contains(b.domElement)&&w.removeChild(b.domElement)}},[e,l,f,h,p]),De.useEffect(()=>{g.current.n1=S},[S]),De.useEffect(()=>{g.current.n2=E},[E]),De.useEffect(()=>{y.current=c},[c]),De.useEffect(()=>{const{car1:w,car2:_,tr1:x,tr2:P,camera:C}=g.current;if(!w||!_||!e||e.length<2)return;const b=v.current;function z(X,ue,T,N){const pe=(T==null?void 0:T.length)>=2?T:e,te=Hl(pe,N);if(isNaN(te.x)||isNaN(te.y)||isNaN(te.z))return{x:0,y:0,z:0};X.position.set(te.x,te.y+.2,te.z);const k=Hl(pe,Math.min(1,N+.005));if(Math.abs(k.x-te.x)+Math.abs(k.z-te.z)>.001&&!isNaN(k.x)&&X.lookAt(k.x,te.y+.2,k.z),ue){const J=Math.min(ue.count+1,ue.max);for(let ie=(J-1)*3;ie>=3;ie-=3)ue.positions[ie]=ue.positions[ie-3],ue.positions[ie+1]=ue.positions[ie-2],ue.positions[ie+2]=ue.positions[ie-1];ue.positions[0]=te.x,ue.positions[1]=te.y+.2,ue.positions[2]=te.z,ue.count=J,ue.line.geometry.attributes.position.needsUpdate=!0,ue.line.geometry.setDrawRange(0,J)}return te}const F=z(w,x,g.current.n1,a),D=z(_,P,g.current.n2,a);if(C){const X=y.current;if(X==="follow1"||X==="follow2"){const ue=X==="follow1"?F:D,T=X==="follow1"?g.current.n1||e:g.current.n2||e,N=Hl(T,Math.min(1,a+.02)),pe=N.x-ue.x,te=N.z-ue.z,k=Math.sqrt(pe*pe+te*te)||1;C.position.set(ue.x-pe/k*8,ue.y+4.5,ue.z-te/k*8),C.lookAt(N.x,ue.y+.3,N.z)}else if(X==="cinematic"&&g.current.curve){const ue=(b.cinT+a*.3)%1,T=g.current.curve.getPointAt(ue);C.position.set(T.x+8,T.y+5,T.z+8),C.lookAt((F.x+D.x)/2,(F.y+D.y)/2,(F.z+D.z)/2)}}},[a,e,c])}const z1=De.memo(function({tp:e,l1:t,l2:r,prog:a,c1:l,c2:f}){const c=De.useRef(null),h=De.useMemo(()=>t?oa(t):null,[t]),p=De.useMemo(()=>r?oa(r):null,[r]);return De.useEffect(()=>{const g=c.current;if(!g||!(e!=null&&e.length))return;const v=g.getContext("2d"),y=g.width,S=14;v.clearRect(0,0,y,y),v.fillStyle=he.overlay,v.beginPath(),v.moveTo(8,0),v.lineTo(y-8,0),v.quadraticCurveTo(y,0,y,8),v.lineTo(y,y-8),v.quadraticCurveTo(y,y,y-8,y),v.lineTo(8,y),v.quadraticCurveTo(0,y,0,y-8),v.lineTo(0,8),v.quadraticCurveTo(0,0,8,0),v.fill();let E=1/0,w=-1/0,_=1/0,x=-1/0;for(const z of e)z.x<E&&(E=z.x),z.x>w&&(w=z.x),z.z<_&&(_=z.z),z.z>x&&(x=z.z);const P=Math.max(w-E,x-_)||1,C=z=>({x:S+(z.x-E)/P*(y-S*2),y:S+(z.z-_)/P*(y-S*2)});v.strokeStyle="rgba(225,6,0,0.3)",v.lineWidth=2.5,v.beginPath(),e.forEach((z,F)=>{const D=C(z);F===0?v.moveTo(D.x,D.y):v.lineTo(D.x,D.y)}),v.closePath(),v.stroke();function b(z,F){const D=(z==null?void 0:z.length)>=2?z:e,X=Hl(D,a),ue=C(X);v.fillStyle=F,v.shadowColor=F,v.shadowBlur=8,v.beginPath(),v.arc(ue.x,ue.y,5,0,Math.PI*2),v.fill(),v.shadowBlur=0}b(h,l),b(p,f)},[e,a,t,r,l,f]),re.jsx("canvas",{ref:c,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),wf=De.memo(function({data1:e,data2:t,color1:r,color2:a,maxVal:l,h:f}){const c=De.useRef(null);return De.useEffect(()=>{const h=c.current;if(!h)return;const p=h.getContext("2d"),g=h.width,v=h.height;p.clearRect(0,0,g,v);function y(S,E){if(!(S!=null&&S.length))return;const w=Math.max(1,Math.floor(S.length/g));p.strokeStyle=E,p.lineWidth=1.5,p.beginPath();let _=!0;for(let x=0;x<S.length;x+=w){const P=x/(S.length-1)*g,C=v-S[x]/l*v*.9-v*.05;_?p.moveTo(P,C):p.lineTo(P,C),_=!1}p.stroke()}y(e,r),y(t,a)},[e,t,r,a,l]),re.jsx("canvas",{ref:c,width:320,height:f||45,style:{width:"100%",height:f||45,borderRadius:3}})}),Tf=De.memo(function({s:e,t1:t,t2:r,c1:a,c2:l}){const f=t&&r?t-r:null,c=[he.green,he.yellow,he.red];return re.jsxs("div",{style:{flex:1,padding:"5px 8px",background:he.cardBg,borderRadius:4,borderTop:`2px solid ${c[e-1]}`},children:[re.jsxs("div",{style:{fontSize:9,color:he.textMuted,fontFamily:he.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),re.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[re.jsx("span",{style:{fontSize:12,color:a,fontFamily:he.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),re.jsx("span",{style:{fontSize:12,color:l,fontFamily:he.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&re.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?he.red:he.green,fontFamily:he.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function k1(){var fe,se,We,tt,lt,Xe,vt,pt,mt,Dt,an;const s=I1(),[e,t]=De.useState(2026),[r,a]=De.useState([]),[l,f]=De.useState(null),[c,h]=De.useState([]),[p,g]=De.useState(null),[v,y]=De.useState([]),[S,E]=De.useState(null),[w,_]=De.useState(null),[x,P]=De.useState(null),[C,b]=De.useState(null),[z,F]=De.useState([]),[D,X]=De.useState([]),[ue,T]=De.useState(null),[N,pe]=De.useState(null),[te,k]=De.useState(null),[J,ie]=De.useState(null),[ce,G]=De.useState(null),[Q,q]=De.useState([]),[U,Y]=De.useState([]),[Ce,j]=De.useState(0),[ee,ge]=De.useState(!1),[Ue,Ae]=De.useState(1),[Te,Ze]=De.useState(!1),[ot,K]=De.useState("orbit"),[Pt,ve]=De.useState(""),[Je,Pe]=De.useState(void 0),[ke,Fe]=De.useState(""),[qe,Et]=De.useState(!0),[L,A]=De.useState("3d"),[de,me]=De.useState(!1),[Me,xe]=De.useState(!1),[dt,rt]=De.useState(!1),[Re,_e]=De.useState(""),it=De.useRef(null),we=De.useRef(null),Ct=De.useRef(null),_t=De.useRef(!1),Ye=v.find(O=>O.driver_number===S),Be=v.find(O=>O.driver_number===w),He=Ye?cg(Ye.team_name):"#4488ff",at=Be?cg(Be.team_name):"#ff4488",Ve=z.find(O=>O.lap_number===x),st=D.find(O=>O.lap_number===C),V=Ve!=null&&Ve.lap_duration&&(st!=null&&st.lap_duration)?Ve.lap_duration-st.lap_duration:null,Ne=Ve!=null&&Ve.lap_duration?Ce*Ve.lap_duration:0,ae=st!=null&&st.lap_duration?Ce*st.lap_duration:0,Le=(se=(fe=Q.find(O=>x>=O.lap_start&&x<=O.lap_end))==null?void 0:fe.compound)==null?void 0:se.toUpperCase(),Oe=(tt=(We=U.find(O=>C>=O.lap_start&&C<=O.lap_end))==null?void 0:We.compound)==null?void 0:tt.toUpperCase(),ut=s?200:400,Lt=De.useMemo(()=>Js(te==null?void 0:te.map(O=>O.speed||0),ut),[te,ut]),Vt=De.useMemo(()=>Js(J==null?void 0:J.map(O=>O.speed||0),ut),[J,ut]),hn=De.useMemo(()=>Js(te==null?void 0:te.map(O=>O.throttle||0),ut),[te,ut]),At=De.useMemo(()=>Js(J==null?void 0:J.map(O=>O.throttle||0),ut),[J,ut]),Kt=De.useMemo(()=>Js(te==null?void 0:te.map(O=>O.brake>0?100:0),ut),[te,ut]),on=De.useMemo(()=>Js(J==null?void 0:J.map(O=>O.brake>0?100:0),ut),[J,ut]),rs=_g(te,Ce),Ri=_g(J,Ce),ii=De.useMemo(()=>te?Math.max(...te.map(O=>O.speed||0)):0,[te]),bi=De.useMemo(()=>J?Math.max(...J.map(O=>O.speed||0)):0,[J]),vi=De.useMemo(()=>te!=null&&te.length?te.reduce((O,Ge)=>O+(Ge.speed||0),0)/te.length:0,[te]),ss=De.useMemo(()=>J!=null&&J.length?J.reduce((O,Ge)=>O+(Ge.speed||0),0)/J.length:0,[J]);De.useEffect(()=>{ve("Loading..."),Fe(""),fg(e).then(O=>{a(O.filter(Ge=>Ge.meeting_name)),f(null),g(null),h([]),y([]),E(null),_(null),G(null),ve("")}).catch(O=>{Fe(O.message),ve("")})},[e]),De.useEffect(()=>{l&&(ve("Loading sessions..."),dg(l.meeting_key).then(O=>{h(O.filter(Ge=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Ge.session_name))),g(null),y([]),E(null),_(null),G(null),ve("")}).catch(O=>{Fe(O.message),ve("")}))},[l]),De.useEffect(()=>{p&&(ve("Loading drivers..."),hg(p.session_key).then(O=>{const Ge=new Set;y(O.filter(ze=>Ge.has(ze.driver_number)?!1:(Ge.add(ze.driver_number),!0))),E(null),_(null),G(null),ve("")}).catch(O=>{Fe(O.message),ve("")}))},[p]),De.useEffect(()=>{p&&S&&(pg(p.session_key,S).then(O=>{F(O),P(null)}).catch(()=>F([])),mg(p.session_key,S).then(q).catch(()=>q([])))},[p,S]),De.useEffect(()=>{p&&w&&(pg(p.session_key,w).then(O=>{X(O),b(null)}).catch(()=>X([])),mg(p.session_key,w).then(Y).catch(()=>Y([])))},[p,w]),De.useEffect(()=>{if(z.length&&!x){const O=xg(z);O&&P(O.lap_number)}},[z]),De.useEffect(()=>{if(D.length&&!C){const O=xg(D);O&&b(O.lap_number)}},[D]),De.useEffect(()=>{if(_t.current)return;const O=Qs();O.year&&O.mk&&(_t.current=!0,t(Number(O.year)))},[]),De.useEffect(()=>{const O=Qs();if(O.mk&&r.length&&!l){const Ge=r.find(ze=>String(ze.meeting_key)===O.mk);Ge&&f(Ge)}},[r]),De.useEffect(()=>{const O=Qs();if(O.sk&&c.length&&!p){const Ge=c.find(ze=>String(ze.session_key)===O.sk);Ge&&g(Ge)}},[c]),De.useEffect(()=>{const O=Qs();O.d1&&O.d2&&v.length&&!S&&!w&&(E(Number(O.d1)),_(Number(O.d2)))},[v]),De.useEffect(()=>{const O=Qs();O.l1&&z.length&&!x&&P(Number(O.l1))},[z]),De.useEffect(()=>{const O=Qs();O.l2&&D.length&&!C&&b(Number(O.l2))},[D]);const os=De.useCallback(async()=>{if(!(!p||!S||!w||!x||!C)){ve("Fetching telemetry..."),Fe(""),Pe(0);try{const O=p.session_key,Ge=z.find(Yn=>Yn.lap_number===x),ze=D.find(Yn=>Yn.lap_number===C);if(!(Ge!=null&&Ge.date_start)||!(ze!=null&&ze.date_start)){Fe("Lap timing unavailable."),ve("");return}const ht=new Date(new Date(Ge.date_start).getTime()+(Ge.lap_duration||120)*1e3).toISOString(),xt=new Date(new Date(ze.date_start).getTime()+(ze.lap_duration||120)*1e3).toISOString();Pe(20);const[yt,Pn]=await Promise.all([gg(O,S,Ge.date_start,ht),gg(O,w,ze.date_start,xt)]);Pe(60);const[Pi,Wt]=await Promise.all([vg(O,S,Ge.date_start,ht),vg(O,w,ze.date_start,xt)]);if(yt.length<5||Pn.length<5){Fe("Insufficient data."),ve(""),Pe(void 0);return}T(yt),pe(Pn),k(Pi),ie(Wt),G(oa(yt)),j(0),ge(!1),Pe(100),setTimeout(()=>{ve(""),Pe(void 0)},300)}catch(O){Fe(O.message),ve(""),Pe(void 0)}}},[p,S,w,x,C,z,D]),co=De.useCallback(async O=>{me(!1),ve("Loading preset..."),Fe("");try{t(O.year);const Ge=await fg(O.year);a(Ge.filter(Wt=>Wt.meeting_name));const ze=Ge.find(Wt=>Wt.meeting_name===O.meeting);if(!ze)throw new Error("Not found");f(ze);const xt=(await dg(ze.meeting_key)).filter(Wt=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Wt.session_name));h(xt);const yt=xt.find(Wt=>Wt.session_name===O.session);if(!yt)throw new Error("Not found");g(yt);const Pn=await hg(yt.session_key),Pi=new Set;y(Pn.filter(Wt=>Pi.has(Wt.driver_number)?!1:(Pi.add(Wt.driver_number),!0))),E(O.d1),_(O.d2),ve("")}catch(Ge){Fe(Ge.message),ve("")}},[]),ri=De.useCallback(()=>{var Ge;if(!l||!p)return;const O=F1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:w,l1:x,l2:C});(Ge=navigator.clipboard)==null||Ge.writeText(O).then(()=>{_e("Copied!"),setTimeout(()=>_e(""),2e3)}),window.history.replaceState(null,"",O.split(window.location.origin)[1])},[e,l,p,S,w,x,C]);O1(it,ce,ue,N,Ce,He,at,ot,(Ye==null?void 0:Ye.name_acronym)||"",(Be==null?void 0:Be.name_acronym)||""),De.useEffect(()=>{if(!ee){Ct.current=null,we.current&&cancelAnimationFrame(we.current);return}function O(Ge){Ct.current||(Ct.current=Ge);const ze=(Ge-Ct.current)/1e3;Ct.current=Ge,j(ht=>{const xt=ht+ze*.015*Ue;return xt>=1?Te?0:(ge(!1),1):xt}),we.current=requestAnimationFrame(O)}return we.current=requestAnimationFrame(O),()=>{we.current&&cancelAnimationFrame(we.current)}},[ee,Ue,Te]),De.useEffect(()=>{const O=Ge=>{Ge.target.tagName==="SELECT"||Ge.target.tagName==="INPUT"||(Ge.code==="Space"&&(Ge.preventDefault(),ce&&ge(ze=>!ze)),Ge.code==="KeyR"&&(j(0),ge(!1)),Ge.code==="KeyT"&&Et(ze=>!ze),Ge.code==="KeyC"&&K(ze=>zl[(zl.indexOf(ze)+1)%zl.length]),Ge.code==="KeyL"&&Ze(ze=>!ze),Ge.code==="ArrowRight"&&j(ze=>Math.min(1,ze+.01)),Ge.code==="ArrowLeft"&&j(ze=>Math.max(0,ze-.01)))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[ce]);const as=(de||Me||dt)&&re.jsx("div",{onClick:()=>{me(!1),xe(!1),rt(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),R=de&&re.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:he.carbon,border:`1px solid ${he.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":400,animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[re.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:he.sans,letterSpacing:"0.05em"},children:"QUICK PRESETS"}),re.jsx("button",{onClick:()=>me(!1),style:{marginLeft:"auto"},children:"✕"})]}),N1.map((O,Ge)=>re.jsx("button",{onClick:()=>co(O),style:{display:"block",width:"100%",textAlign:"left",padding:"12px 14px",marginBottom:6,fontSize:13,fontFamily:he.mono,borderLeft:`3px solid ${he.red}`},children:O.label},Ge))]}),$=Me&&ce&&re.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:he.carbon,border:`1px solid ${he.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":420,animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[re.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:he.sans,letterSpacing:"0.05em"},children:"COMPARISON"}),re.jsx("button",{onClick:()=>xe(!1),style:{marginLeft:"auto"},children:"✕"})]}),re.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:he.mono},children:[re.jsx("thead",{children:re.jsxs("tr",{style:{color:he.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[re.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:`1px solid ${he.red}22`},children:"METRIC"}),re.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:He,borderBottom:`1px solid ${He}33`},children:(Ye==null?void 0:Ye.name_acronym)||"D1"}),re.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:at,borderBottom:`1px solid ${at}33`},children:(Be==null?void 0:Be.name_acronym)||"D2"})]})}),re.jsx("tbody",{children:[{m:"LAP TIME",v1:Ve!=null&&Ve.lap_duration?Yr(Ve.lap_duration):"—",v2:st!=null&&st.lap_duration?Yr(st.lap_duration):"—"},{m:"TOP SPEED",v1:`${Math.round(ii)}`,v2:`${Math.round(bi)}`},{m:"AVG SPEED",v1:`${Math.round(vi)}`,v2:`${Math.round(ss)}`},{m:"SECTOR 1",v1:((lt=Ve==null?void 0:Ve.duration_sector_1)==null?void 0:lt.toFixed(3))||"—",v2:((Xe=st==null?void 0:st.duration_sector_1)==null?void 0:Xe.toFixed(3))||"—"},{m:"SECTOR 2",v1:((vt=Ve==null?void 0:Ve.duration_sector_2)==null?void 0:vt.toFixed(3))||"—",v2:((pt=st==null?void 0:st.duration_sector_2)==null?void 0:pt.toFixed(3))||"—"},{m:"SECTOR 3",v1:((mt=Ve==null?void 0:Ve.duration_sector_3)==null?void 0:mt.toFixed(3))||"—",v2:((Dt=st==null?void 0:st.duration_sector_3)==null?void 0:Dt.toFixed(3))||"—"},{m:"TYRE",v1:Le||"—",v2:Oe||"—"}].map(O=>re.jsxs("tr",{style:{borderBottom:`1px solid ${he.borderLight}`},children:[re.jsx("td",{style:{padding:"8px 8px",color:he.textDim,letterSpacing:"0.05em"},children:O.m}),re.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:He},children:O.v1}),re.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:at},children:O.v2})]},O.m))})]})]}),le=dt&&re.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:he.carbon,borderLeft:`1px solid ${he.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${he.borderLight}`},children:[re.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:he.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),re.jsx("button",{onClick:()=>rt(!1),style:{marginLeft:"auto"},children:"✕"})]}),re.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(Ye==null?void 0:Ye.name_acronym)||"D1",col:He,laps:z,sel:x,set:P},{lab:(Be==null?void 0:Be.name_acronym)||"D2",col:at,laps:D,sel:C,set:b}].map(O=>{const Ge=O.laps.filter(xt=>xt.lap_duration>10),ze=Ge.length?Math.min(...Ge.map(xt=>xt.lap_duration)):0,ht=Ge.length?Math.max(...Ge.map(xt=>xt.lap_duration)):0;return re.jsxs("div",{style:{marginBottom:18},children:[re.jsx("div",{style:{fontSize:12,fontWeight:700,color:O.col,marginBottom:8,fontFamily:he.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${O.col}`,paddingLeft:8},children:O.lab}),Ge.sort((xt,yt)=>xt.lap_duration-yt.lap_duration).map(xt=>{const yt=ht>ze?(xt.lap_duration-ze)/(ht-ze):0;return re.jsxs("div",{onClick:()=>O.set(xt.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:xt.lap_number===O.sel?`${O.col}18`:"transparent",borderLeft:xt.lap_number===O.sel?`2px solid ${O.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:he.mono},children:[re.jsxs("span",{style:{width:30,color:he.textMuted},children:["L",xt.lap_number]}),re.jsx("span",{style:{fontWeight:xt.lap_duration===ze?800:400,color:xt.lap_duration===ze?he.green:he.text},children:Yr(xt.lap_duration)}),xt.lap_duration===ze&&re.jsx("span",{style:{fontSize:9,color:he.green,fontWeight:700,background:`${he.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),re.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:he.borderLight,borderRadius:2,overflow:"hidden"},children:re.jsx("div",{style:{height:"100%",width:`${(1-yt)*100}%`,background:yt<.1?he.green:yt>.7?he.red:he.yellow,borderRadius:2}})})]},xt.lap_number)})]},O.lab)})})]});return re.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:he.carbon,color:he.text,fontFamily:he.sans,overflow:"hidden"},children:[re.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${he.red}44;border-radius:2px}
        select,button{font-family:${he.sans}}
        select{background:${he.inputBg};color:${he.text};border:1px solid ${he.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${he.red}88}
        button{background:${he.cardBg};color:${he.text};border:1px solid ${he.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${he.red}88;background:${he.carbonMid}}
        .f1-btn{background:${he.red};border-color:${he.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${he.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${he.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),as,R,$,le,re.jsxs("div",{style:{padding:s?"8px 10px":"0",display:"flex",alignItems:"stretch",borderBottom:`2px solid ${he.red}`,background:`linear-gradient(180deg, ${he.carbonLight} 0%, ${he.carbon} 100%)`,zIndex:10,position:"relative",overflow:"hidden"},children:[re.jsx("div",{style:{width:s?4:6,background:he.red,flexShrink:0}}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:14,padding:s?"0 8px":"10px 18px",flex:1,flexWrap:"wrap"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[re.jsx("span",{style:{fontSize:s?16:22,fontWeight:900,letterSpacing:"0.04em",color:"#fff",textTransform:"uppercase"},children:"Phantom"}),re.jsx("span",{style:{fontSize:s?16:22,fontWeight:300,color:he.red,letterSpacing:"0.04em"},children:"Cars"})]}),l&&re.jsxs("span",{style:{fontSize:11,color:he.textDim,fontWeight:600,letterSpacing:"0.05em"},children:[(an=l.meeting_name)==null?void 0:an.replace("Grand Prix","GP")," ",e]}),re.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6},children:[re.jsx("button",{onClick:()=>me(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&re.jsx("button",{onClick:ri,style:{fontSize:10,padding:"4px 10px"},children:Re||"SHARE"}),ce&&re.jsx("button",{onClick:()=>xe(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),ce&&re.jsx("button",{onClick:()=>rt(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${he.borderLight}`,background:he.carbonLight},children:[re.jsx("select",{value:e,onChange:O=>t(Number(O.target.value)),children:[2026,2025,2024,2023].map(O=>re.jsx("option",{value:O,children:O},O))}),re.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:O=>f(r.find(Ge=>Ge.meeting_key===Number(O.target.value))||null),style:{minWidth:s?110:155},children:[re.jsx("option",{value:"",children:"Grand Prix"}),r.map(O=>re.jsx("option",{value:O.meeting_key,children:O.meeting_name},O.meeting_key))]}),re.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:O=>g(c.find(Ge=>Ge.session_key===Number(O.target.value))||null),disabled:!c.length,style:{minWidth:s?85:115},children:[re.jsx("option",{value:"",children:"Session"}),c.map(O=>re.jsx("option",{value:O.session_key,children:O.session_name},O.session_key))]}),!s&&re.jsx("div",{style:{width:1,height:20,background:`${he.red}33`}}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:3,height:18,background:He,borderRadius:1}}),re.jsxs("select",{value:S||"",onChange:O=>{E(Number(O.target.value)),P(null),F([])},disabled:!v.length,style:{minWidth:s?68:100},children:[re.jsx("option",{value:"",children:"Driver 1"}),v.map(O=>re.jsx("option",{value:O.driver_number,children:O.name_acronym||`#${O.driver_number}`},O.driver_number))]}),z.length>0&&re.jsxs("select",{value:x||"",onChange:O=>P(Number(O.target.value)),style:{width:s?56:72},children:[re.jsx("option",{value:"",children:"Lap"}),z.filter(O=>O.lap_duration>10).map(O=>re.jsxs("option",{value:O.lap_number,children:["L",O.lap_number]},O.lap_number))]})]}),re.jsx("span",{style:{color:he.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:3,height:18,background:at,borderRadius:1}}),re.jsxs("select",{value:w||"",onChange:O=>{_(Number(O.target.value)),b(null),X([])},disabled:!v.length,style:{minWidth:s?68:100},children:[re.jsx("option",{value:"",children:"Driver 2"}),v.map(O=>re.jsx("option",{value:O.driver_number,children:O.name_acronym||`#${O.driver_number}`},O.driver_number))]}),D.length>0&&re.jsxs("select",{value:C||"",onChange:O=>b(Number(O.target.value)),style:{width:s?56:72},children:[re.jsx("option",{value:"",children:"Lap"}),D.filter(O=>O.lap_duration>10).map(O=>re.jsxs("option",{value:O.lap_number,children:["L",O.lap_number]},O.lap_number))]})]}),re.jsx("button",{className:"f1-btn",onClick:os,disabled:!S||!w||!x||!C||!!Pt,children:Pt?"...":"COMPARE"})]}),ke&&re.jsxs("div",{style:{padding:"8px 18px",background:`${he.red}11`,borderBottom:`1px solid ${he.red}22`,fontSize:12,color:he.red,display:"flex",alignItems:"center",gap:8},children:[re.jsx("span",{style:{flex:1},children:ke}),re.jsx("button",{onClick:()=>Fe(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),Pt&&re.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${he.borderLight}`},children:[re.jsx("div",{style:{fontSize:11,color:he.textDim,fontFamily:he.mono,marginBottom:4},children:Pt}),Je!==void 0&&re.jsx("div",{style:{height:2,background:he.borderLight,borderRadius:1,overflow:"hidden"},children:re.jsx("div",{style:{height:"100%",width:`${Je}%`,background:he.red,borderRadius:1,transition:"width .3s"}})})]}),s&&ce&&re.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${he.borderLight}`},children:["3d","telemetry"].map(O=>re.jsx("button",{onClick:()=>A(O),style:{flex:1,borderRadius:0,borderBottom:L===O?`2px solid ${he.red}`:"2px solid transparent",background:L===O?he.cardBg:"transparent",fontWeight:L===O?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:O==="3d"?"Track":"Telemetry"},O))}),re.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${ce?175:130}px)`},children:[(!s||L==="3d")&&re.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[re.jsx("div",{ref:it,style:{width:"100%",height:"100%",background:he.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),ce&&re.jsx("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:zl.map(O=>re.jsx("button",{onClick:()=>K(O),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:ot===O?he.red:he.overlay,color:ot===O?"#fff":he.textDim,borderColor:ot===O?he.red:he.borderLight,fontWeight:700},children:U1[O]},O))}),ce&&!s&&re.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:re.jsx(z1,{tp:ce,l1:ue,l2:N,prog:Ce,c1:He,c2:at})}),V!==null&&ce&&re.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:re.jsxs("div",{style:{background:he.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${he.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[re.jsx("div",{style:{fontSize:8,color:he.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),re.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:he.mono,color:V>0?he.red:he.green,lineHeight:1.1},children:[V>0?"+":"",V.toFixed(3),re.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),re.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[re.jsxs("span",{style:{fontSize:10,color:He,fontFamily:he.mono,fontWeight:700},children:[Ye==null?void 0:Ye.name_acronym," ",Yr(Ve==null?void 0:Ve.lap_duration)]}),re.jsxs("span",{style:{fontSize:10,color:at,fontFamily:he.mono,fontWeight:700},children:[Be==null?void 0:Be.name_acronym," ",Yr(st==null?void 0:st.lap_duration)]})]})]})}),ce&&Ve&&st&&re.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[re.jsx(Tf,{s:1,t1:Ve.duration_sector_1,t2:st.duration_sector_1,c1:He,c2:at}),re.jsx(Tf,{s:2,t1:Ve.duration_sector_2,t2:st.duration_sector_2,c1:He,c2:at}),re.jsx(Tf,{s:3,t1:Ve.duration_sector_3,t2:st.duration_sector_3,c1:He,c2:at})]}),!ce&&!Pt&&re.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[re.jsx("div",{style:{fontSize:72,fontWeight:900,color:he.red,opacity:.08,letterSpacing:"-0.03em",lineHeight:1},children:"F1"}),re.jsx("div",{style:{fontSize:s?14:17,fontWeight:700,color:he.textMuted,marginBottom:8,letterSpacing:"0.03em"},children:"GHOST CAR COMPARISON"}),re.jsx("div",{style:{fontSize:12,color:he.textMuted,maxWidth:340},children:"Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons."})]})]}),(!s&&qe&&ce||s&&L==="telemetry"&&ce)&&re.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${he.borderLight}`,background:he.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:re.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[re.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:[{di:Ye,co:He,ct:rs,tire:Le},{di:Be,co:at,ct:Ri,tire:Oe}].map((O,Ge)=>{var ze;return re.jsxs("div",{style:{flex:1,background:he.cardBg,borderRadius:6,padding:"8px 10px",borderTop:`3px solid ${O.co}`,position:"relative"},children:[re.jsx("div",{style:{fontSize:14,fontWeight:900,color:O.co,fontFamily:he.mono,letterSpacing:"0.05em"},children:((ze=O.di)==null?void 0:ze.name_acronym)||"—"}),re.jsxs("div",{style:{fontSize:22,fontWeight:900,color:"#fff",fontFamily:he.mono,lineHeight:1.1},children:[Math.round(O.ct.speed),re.jsx("span",{style:{fontSize:10,color:he.textMuted,fontWeight:400},children:" km/h"})]}),re.jsxs("div",{style:{display:"flex",gap:8,marginTop:4,fontSize:10,fontFamily:he.mono},children:[re.jsxs("span",{style:{color:O.ct.throttle>50?he.green:he.textMuted},children:["THR ",Math.round(O.ct.throttle),"%"]}),re.jsxs("span",{style:{color:O.ct.brake>0?he.red:he.textMuted},children:["BRK ",O.ct.brake>0?"ON":"OFF"]}),re.jsxs("span",{style:{color:he.textDim},children:["G",O.ct.n_gear??O.ct.gear??"—"]})]}),O.tire&&re.jsxs("div",{style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:L1[O.tire]||"#888"}}),re.jsx("span",{style:{fontSize:9,fontFamily:he.mono,color:he.textMuted},children:O.tire})]}),O.ct.drs>=10&&re.jsx("div",{style:{position:"absolute",bottom:8,right:8,fontSize:9,fontWeight:700,color:he.green,fontFamily:he.mono,background:`${he.green}15`,padding:"1px 5px",borderRadius:3,animation:"pulse 1s infinite"},children:"DRS"})]},Ge)})}),re.jsx("div",{style:{fontSize:10,color:he.textMuted,fontFamily:he.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED"}),re.jsx(wf,{data1:Lt,data2:Vt,color1:He,color2:at,maxVal:370}),re.jsx("div",{style:{fontSize:10,color:he.textMuted,fontFamily:he.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"THROTTLE"}),re.jsx(wf,{data1:hn,data2:At,color1:He,color2:at,maxVal:100}),re.jsx("div",{style:{fontSize:10,color:he.textMuted,fontFamily:he.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),re.jsx(wf,{data1:Kt,data2:on,color1:He,color2:at,maxVal:100,h:35})]})})]}),ce&&re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${he.carbonLight}, ${he.carbon})`,borderTop:`1px solid ${he.red}22`},children:[re.jsx("button",{onClick:()=>{j(0),ge(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),re.jsx("button",{onClick:()=>ge(!ee),style:{padding:"3px 9px",fontSize:13,background:ee?`${he.red}33`:he.cardBg,borderColor:ee?he.red:he.border},children:ee?"⏸":"▶"}),re.jsx("button",{onClick:()=>Ze(!Te),style:{padding:"3px 7px",opacity:Te?1:.35,fontSize:11},children:"🔁"}),re.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:Ce,onChange:O=>j(parseFloat(O.target.value)),style:{flex:1,height:4,accentColor:he.red}}),re.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[re.jsx("span",{style:{fontSize:10,color:He,fontFamily:he.mono,fontWeight:700,lineHeight:1.2},children:Yr(Ne)}),re.jsx("span",{style:{fontSize:10,color:at,fontFamily:he.mono,fontWeight:700,lineHeight:1.2},children:Yr(ae)})]}),re.jsxs("select",{value:Ue,onChange:O=>Ae(parseFloat(O.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[re.jsx("option",{value:.25,children:".25x"}),re.jsx("option",{value:.5,children:".5x"}),re.jsx("option",{value:1,children:"1x"}),re.jsx("option",{value:2,children:"2x"}),re.jsx("option",{value:4,children:"4x"})]}),!s&&re.jsx("button",{onClick:()=>Et(!qe),style:{padding:"3px 7px",fontSize:10,opacity:qe?1:.35},children:"📊"})]})]})}$_.createRoot(document.getElementById("root")).render(re.jsx(G_.StrictMode,{children:re.jsx(k1,{})}));
