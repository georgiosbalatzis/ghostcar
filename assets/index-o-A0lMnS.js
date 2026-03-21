(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function wg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dc={exports:{}},Xo={},Ic={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function B_(){if(Ep)return At;Ep=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(N,Y,Ie){this.props=N,this.context=Y,this.refs=w,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,Y){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Y,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function b(N,Y,Ie){this.props=N,this.context=Y,this.refs=w,this.updater=Ie||S}var R=b.prototype=new v;R.constructor=b,M(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,O={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function q(N,Y,Ie){var j,de={},Me=null,Ge=null;if(Y!=null)for(j in Y.ref!==void 0&&(Ge=Y.ref),Y.key!==void 0&&(Me=""+Y.key),Y)F.call(Y,j)&&!L.hasOwnProperty(j)&&(de[j]=Y[j]);var ze=arguments.length-2;if(ze===1)de.children=Ie;else if(1<ze){for(var Le=Array(ze),ct=0;ct<ze;ct++)Le[ct]=arguments[ct+2];de.children=Le}if(N&&N.defaultProps)for(j in ze=N.defaultProps,ze)de[j]===void 0&&(de[j]=ze[j]);return{$$typeof:s,type:N,key:Me,ref:Ge,props:de,_owner:O.current}}function _e(N,Y){return{$$typeof:s,type:N.type,key:Y,ref:N.ref,props:N.props,_owner:N._owner}}function T(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function D(N){var Y={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return Y[Ie]})}var le=/\/+/g;function re(N,Y){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):Y.toString(36)}function B(N,Y,Ie,j,de){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var Ge=!1;if(N===null)Ge=!0;else switch(Me){case"string":case"number":Ge=!0;break;case"object":switch(N.$$typeof){case s:case e:Ge=!0}}if(Ge)return Ge=N,de=de(Ge),N=j===""?"."+re(Ge,0):j,P(de)?(Ie="",N!=null&&(Ie=N.replace(le,"$&/")+"/"),B(de,Y,Ie,"",function(ct){return ct})):de!=null&&(T(de)&&(de=_e(de,Ie+(!de.key||Ge&&Ge.key===de.key?"":(""+de.key).replace(le,"$&/")+"/")+N)),Y.push(de)),1;if(Ge=0,j=j===""?".":j+":",P(N))for(var ze=0;ze<N.length;ze++){Me=N[ze];var Le=j+re(Me,ze);Ge+=B(Me,Y,Ie,Le,de)}else if(Le=x(N),typeof Le=="function")for(N=Le.call(N),ze=0;!(Me=N.next()).done;)Me=Me.value,Le=j+re(Me,ze++),Ge+=B(Me,Y,Ie,Le,de);else if(Me==="object")throw Y=String(N),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ge}function ee(N,Y,Ie){if(N==null)return N;var j=[],de=0;return B(N,j,"","",function(Me){return Y.call(Ie,Me,de++)}),j}function X(N){if(N._status===-1){var Y=N._result;Y=Y(),Y.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=Y)}if(N._status===1)return N._result.default;throw N._result}var se={current:null},H={transition:null},$={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function Z(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:ee,forEach:function(N,Y,Ie){ee(N,function(){Y.apply(this,arguments)},Ie)},count:function(N){var Y=0;return ee(N,function(){Y++}),Y},toArray:function(N){return ee(N,function(Y){return Y})||[]},only:function(N){if(!T(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},At.Component=y,At.Fragment=t,At.Profiler=a,At.PureComponent=b,At.StrictMode=r,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,At.act=Z,At.cloneElement=function(N,Y,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var j=M({},N.props),de=N.key,Me=N.ref,Ge=N._owner;if(Y!=null){if(Y.ref!==void 0&&(Me=Y.ref,Ge=O.current),Y.key!==void 0&&(de=""+Y.key),N.type&&N.type.defaultProps)var ze=N.type.defaultProps;for(Le in Y)F.call(Y,Le)&&!L.hasOwnProperty(Le)&&(j[Le]=Y[Le]===void 0&&ze!==void 0?ze[Le]:Y[Le])}var Le=arguments.length-2;if(Le===1)j.children=Ie;else if(1<Le){ze=Array(Le);for(var ct=0;ct<Le;ct++)ze[ct]=arguments[ct+2];j.children=ze}return{$$typeof:s,type:N.type,key:de,ref:Me,props:j,_owner:Ge}},At.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},At.createElement=q,At.createFactory=function(N){var Y=q.bind(null,N);return Y.type=N,Y},At.createRef=function(){return{current:null}},At.forwardRef=function(N){return{$$typeof:c,render:N}},At.isValidElement=T,At.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:X}},At.memo=function(N,Y){return{$$typeof:p,type:N,compare:Y===void 0?null:Y}},At.startTransition=function(N){var Y=H.transition;H.transition={};try{N()}finally{H.transition=Y}},At.unstable_act=Z,At.useCallback=function(N,Y){return se.current.useCallback(N,Y)},At.useContext=function(N){return se.current.useContext(N)},At.useDebugValue=function(){},At.useDeferredValue=function(N){return se.current.useDeferredValue(N)},At.useEffect=function(N,Y){return se.current.useEffect(N,Y)},At.useId=function(){return se.current.useId()},At.useImperativeHandle=function(N,Y,Ie){return se.current.useImperativeHandle(N,Y,Ie)},At.useInsertionEffect=function(N,Y){return se.current.useInsertionEffect(N,Y)},At.useLayoutEffect=function(N,Y){return se.current.useLayoutEffect(N,Y)},At.useMemo=function(N,Y){return se.current.useMemo(N,Y)},At.useReducer=function(N,Y,Ie){return se.current.useReducer(N,Y,Ie)},At.useRef=function(N){return se.current.useRef(N)},At.useState=function(N){return se.current.useState(N)},At.useSyncExternalStore=function(N,Y,Ie){return se.current.useSyncExternalStore(N,Y,Ie)},At.useTransition=function(){return se.current.useTransition()},At.version="18.3.1",At}var wp;function Gf(){return wp||(wp=1,Ic.exports=B_()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function H_(){if(Tp)return Xo;Tp=1;var s=Gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:c,key:x,ref:S,props:g,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=f,Xo.jsxs=f,Xo}var Ap;function G_(){return Ap||(Ap=1,Dc.exports=H_()),Dc.exports}var ie=G_(),Oe=Gf();const V_=wg(Oe);var cl={},Nc={exports:{}},kn={},Uc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function W_(){return Rp||(Rp=1,(function(s){function e(H,$){var Z=H.length;H.push($);e:for(;0<Z;){var N=Z-1>>>1,Y=H[N];if(0<a(Y,$))H[N]=$,H[Z]=Y,Z=N;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var $=H[0],Z=H.pop();if(Z!==$){H[0]=Z;e:for(var N=0,Y=H.length,Ie=Y>>>1;N<Ie;){var j=2*(N+1)-1,de=H[j],Me=j+1,Ge=H[Me];if(0>a(de,Z))Me<Y&&0>a(Ge,de)?(H[N]=Ge,H[Me]=Z,N=Me):(H[N]=de,H[j]=Z,N=j);else if(Me<Y&&0>a(Ge,Z))H[N]=Ge,H[Me]=Z,N=Me;else break e}}return $}function a(H,$){var Z=H.sortIndex-$.sortIndex;return Z!==0?Z:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],p=[],_=1,g=null,x=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var $=t(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=H)r(p),$.sortIndex=$.expirationTime,e(h,$);else break;$=t(p)}}function P(H){if(w=!1,R(H),!M)if(t(h)!==null)M=!0,X(F);else{var $=t(p);$!==null&&se(P,$.startTime-H)}}function F(H,$){M=!1,w&&(w=!1,v(q),q=-1),S=!0;var Z=x;try{for(R($),g=t(h);g!==null&&(!(g.expirationTime>$)||H&&!D());){var N=g.callback;if(typeof N=="function"){g.callback=null,x=g.priorityLevel;var Y=N(g.expirationTime<=$);$=s.unstable_now(),typeof Y=="function"?g.callback=Y:g===t(h)&&r(h),R($)}else r(h);g=t(h)}if(g!==null)var Ie=!0;else{var j=t(p);j!==null&&se(P,j.startTime-$),Ie=!1}return Ie}finally{g=null,x=Z,S=!1}}var O=!1,L=null,q=-1,_e=5,T=-1;function D(){return!(s.unstable_now()-T<_e)}function le(){if(L!==null){var H=s.unstable_now();T=H;var $=!0;try{$=L(!0,H)}finally{$?re():(O=!1,L=null)}}else O=!1}var re;if(typeof b=="function")re=function(){b(le)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ee=B.port2;B.port1.onmessage=le,re=function(){ee.postMessage(null)}}else re=function(){y(le,0)};function X(H){L=H,O||(O=!0,re())}function se(H,$){q=y(function(){H(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,X(F))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var Z=x;x=$;try{return H()}finally{x=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=x;x=H;try{return $()}finally{x=Z}},s.unstable_scheduleCallback=function(H,$,Z){var N=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?N+Z:N):Z=N,H){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=Z+Y,H={id:_++,callback:$,priorityLevel:H,startTime:Z,expirationTime:Y,sortIndex:-1},Z>N?(H.sortIndex=Z,e(p,H),t(h)===null&&H===t(p)&&(w?(v(q),q=-1):w=!0,se(P,Z-N))):(H.sortIndex=Y,e(h,H),M||S||(M=!0,X(F))),H},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(H){var $=x;return function(){var Z=x;x=$;try{return H.apply(this,arguments)}finally{x=Z}}}})(Fc)),Fc}var Cp;function X_(){return Cp||(Cp=1,Uc.exports=W_()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function j_(){if(bp)return kn;bp=1;var s=Gf(),e=X_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),D=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),H=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,N;function Y(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ie=!1;function j(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var u=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){u=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var G=`
`+d[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=U);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Y(n):""}function de(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case O:return"Portal";case _e:return"Profiler";case q:return"StrictMode";case re:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ze(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=ct(n))}function Q(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Je(n,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ot(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ze(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function We(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function xt(n,i){We(n,i);var o=ze(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&pt(n,i.type,ze(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function pt(n,i,o){(i!=="number"||It(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Mt=Array.isArray;function I(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ze(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function he(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Mt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ze(o)}}function ce(n,i){var o=ze(i.value),u=ze(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Pe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ee(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function it(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ee(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var et,Ce=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(et=et||document.createElement("div"),et.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=et.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ke(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(ut).forEach(function(n){Ue.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ut[i]=ut[n]})});function Se(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ut.hasOwnProperty(n)&&ut[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Se(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var xe=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(n,i){if(i){if(xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function Te(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qe=null,k=null,me=null;function te(n){if(n=Po(n)){if(typeof qe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ta(i),qe(n.stateNode,n.type,i))}}function Ne(n){k?me?me.push(n):me=[n]:k=n}function Be(){if(k){var n=k,i=me;if(me=k=null,te(n),i)for(n=0;n<i.length;n++)te(i[n])}}function dt(n,i){return n(i)}function Rt(){}var _t=!1;function ht(n,i,o){if(_t)return n(i,o);_t=!0;try{return dt(n,i,o)}finally{_t=!1,(k!==null||me!==null)&&(Rt(),Be())}}function yt(n,i){var o=n.stateNode;if(o===null)return null;var u=Ta(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Yt=!1;if(c)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){Yt=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Yt=!1}function rs(n,i,o,u,d,m,E,U,G){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(be){this.onError(be)}}var Pi=!1,ai=null,Li=!1,Si=null,ss={onError:function(n){Pi=!0,ai=n}};function os(n,i,o,u,d,m,E,U,G){Pi=!1,ai=null,rs.apply(ss,arguments)}function co(n,i,o,u,d,m,E,U,G){if(os.apply(this,arguments),Pi){if(Pi){var ae=ai;Pi=!1,ai=null}else throw Error(t(198));Li||(Li=!0,Si=ae)}}function li(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function as(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(li(n)!==n)throw Error(t(188))}function K(n){var i=n.alternate;if(!i){if(i=li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return C(d),n;if(m===u)return C(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===o){E=!0,o=d,u=m;break}if(U===u){E=!0,u=d,o=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===o){E=!0,o=m,u=d;break}if(U===u){E=!0,u=m,o=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ue(n){return n=K(n),n!==null?fe(n):null}function fe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fe(n);if(i!==null)return i;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,Ze=e.unstable_shouldYield,st=e.unstable_requestPaint,Xe=e.unstable_now,St=e.unstable_getCurrentPriorityLevel,ft=e.unstable_ImmediatePriority,mt=e.unstable_UserBlockingPriority,Nt=e.unstable_NormalPriority,un=e.unstable_LowPriority,Xt=e.unstable_IdlePriority,mn=null,z=null;function Ae(n){if(z&&typeof z.onCommitFiberRoot=="function")try{z.onCommitFiberRoot(mn,n,void 0,(n.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:cn,bt=Math.log,Ct=Math.LN2;function cn(n){return n>>>=0,n===0?32:31-(bt(n)/Ct|0)|0}var An=64,Vn=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var U=E&~d;U!==0?u=Pt(U):(m&=E,m!==0&&(u=Pt(m)))}else E=o&~d,E!==0?u=Pt(E):m!==0&&(u=Pt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-tt(i),d=1<<o,u|=n[o],i&=~d;return u}function fo(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function In(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-tt(m),U=1<<E,G=d[E];G===-1?((U&o)===0||(U&u)!==0)&&(d[E]=fo(U,i)):G<=i&&(n.expiredLanes|=U),m&=~U}}function br(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ua(){var n=An;return An<<=1,(An&4194240)===0&&(An=64),n}function ls(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ho(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tt(i),n[i]=o}function a0(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-tt(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function tu(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-tt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Ut=0;function td(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nd,nu,id,rd,sd,iu=!1,ca=[],Yi=null,$i=null,Ki=null,po=new Map,mo=new Map,Zi=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Po(i),i!==null&&nu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function u0(n,i,o,u,d){switch(i){case"focusin":return Yi=go(Yi,n,i,o,u,d),!0;case"dragenter":return $i=go($i,n,i,o,u,d),!0;case"mouseover":return Ki=go(Ki,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,u,d)),!0}return!1}function ad(n){var i=Pr(n.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=as(o),i!==null){n.blockedOn=i,sd(n.priority,function(){id(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=su(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);we=u,o.target.dispatchEvent(u),we=null}else return i=Po(o),i!==null&&nu(i),n.blockedOn=o,!1;i.shift()}return!0}function ld(n,i,o){fa(n)&&o.delete(i)}function c0(){iu=!1,Yi!==null&&fa(Yi)&&(Yi=null),$i!==null&&fa($i)&&($i=null),Ki!==null&&fa(Ki)&&(Ki=null),po.forEach(ld),mo.forEach(ld)}function _o(n,i){n.blockedOn===i&&(n.blockedOn=null,iu||(iu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,c0)))}function vo(n){function i(d){return _o(d,n)}if(0<ca.length){_o(ca[0],n);for(var o=1;o<ca.length;o++){var u=ca[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&_o(Yi,n),$i!==null&&_o($i,n),Ki!==null&&_o(Ki,n),po.forEach(i),mo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)ad(o),o.blockedOn===null&&Zi.shift()}var us=P.ReactCurrentBatchConfig,da=!0;function f0(n,i,o,u){var d=Ut,m=us.transition;us.transition=null;try{Ut=1,ru(n,i,o,u)}finally{Ut=d,us.transition=m}}function d0(n,i,o,u){var d=Ut,m=us.transition;us.transition=null;try{Ut=4,ru(n,i,o,u)}finally{Ut=d,us.transition=m}}function ru(n,i,o,u){if(da){var d=su(n,i,o,u);if(d===null)Mu(n,i,u,ha,o),od(n,u);else if(u0(d,n,i,o,u))u.stopPropagation();else if(od(n,u),i&4&&-1<l0.indexOf(n)){for(;d!==null;){var m=Po(d);if(m!==null&&nd(m),m=su(n,i,o,u),m===null&&Mu(n,i,u,ha,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Mu(n,i,u,null,o)}}var ha=null;function su(n,i,o,u){if(ha=null,n=Te(u),n=Pr(n),n!==null)if(i=li(n),i===null)n=null;else if(o=i.tag,o===13){if(n=as(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function ud(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(St()){case ft:return 1;case mt:return 4;case Nt:case un:return 16;case Xt:return 536870912;default:return 16}default:return 16}}var Qi=null,ou=null,pa=null;function cd(){if(pa)return pa;var n,i=ou,o=i.length,u,d="value"in Qi?Qi.value:Qi.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return pa=d.slice(n,1<u?1-u:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function fd(){return!1}function Wn(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ga:fd,this.isPropagationStopped=fd,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Wn(cs),xo=Z({},cs,{view:0,detail:0}),h0=Wn(xo),lu,uu,yo,_a=Z({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(lu=n.screenX-yo.screenX,uu=n.screenY-yo.screenY):uu=lu=0,yo=n),lu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),dd=Wn(_a),p0=Z({},_a,{dataTransfer:0}),m0=Wn(p0),g0=Z({},xo,{relatedTarget:0}),cu=Wn(g0),_0=Z({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=Wn(_0),x0=Z({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y0=Wn(x0),S0=Z({},cs,{data:0}),hd=Wn(S0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=w0[n])?!!i[n]:!1}function fu(){return T0}var A0=Z({},xo,{key:function(n){if(n.key){var i=M0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?E0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),R0=Wn(A0),C0=Z({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=Wn(C0),b0=Z({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),P0=Wn(b0),L0=Z({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=Wn(L0),I0=Z({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=Wn(I0),U0=[9,13,27,32],du=c&&"CompositionEvent"in window,So=null;c&&"documentMode"in document&&(So=document.documentMode);var F0=c&&"TextEvent"in window&&!So,md=c&&(!du||So&&8<So&&11>=So),gd=" ",_d=!1;function vd(n,i){switch(n){case"keyup":return U0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function O0(n,i){switch(n){case"compositionend":return xd(i);case"keypress":return i.which!==32?null:(_d=!0,gd);case"textInput":return n=i.data,n===gd&&_d?null:n;default:return null}}function z0(n,i){if(fs)return n==="compositionend"||!du&&vd(n,i)?(n=cd(),pa=ou=Qi=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return md&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!k0[n.type]:i==="textarea"}function Sd(n,i,o,u){Ne(u),i=Ma(i,"onChange"),0<i.length&&(o=new au("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Mo=null,Eo=null;function B0(n){kd(n,0)}function va(n){var i=gs(n);if(Q(i))return n}function H0(n,i){if(n==="change")return i}var Md=!1;if(c){var hu;if(c){var pu="oninput"in document;if(!pu){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),pu=typeof Ed.oninput=="function"}hu=pu}else hu=!1;Md=hu&&(!document.documentMode||9<document.documentMode)}function wd(){Mo&&(Mo.detachEvent("onpropertychange",Td),Eo=Mo=null)}function Td(n){if(n.propertyName==="value"&&va(Eo)){var i=[];Sd(i,Eo,n,Te(n)),ht(B0,i)}}function G0(n,i,o){n==="focusin"?(wd(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Td)):n==="focusout"&&wd()}function V0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return va(Eo)}function W0(n,i){if(n==="click")return va(i)}function X0(n,i){if(n==="input"||n==="change")return va(i)}function j0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:j0;function wo(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ui(n[d],i[d]))return!1}return!0}function Ad(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rd(n,i){var o=Ad(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ad(o)}}function Cd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Cd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function bd(){for(var n=window,i=It();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=It(n.document)}return i}function mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function q0(n){var i=bd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Cd(o.ownerDocument.documentElement,o)){if(u!==null&&mu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Rd(o,m);var E=Rd(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y0=c&&"documentMode"in document&&11>=document.documentMode,ds=null,gu=null,To=null,_u=!1;function Pd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_u||ds==null||ds!==It(u)||(u=ds,"selectionStart"in u&&mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),To&&wo(To,u)||(To=u,u=Ma(gu,"onSelect"),0<u.length&&(i=new au("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ds)))}function xa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},vu={},Ld={};c&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function ya(n){if(vu[n])return vu[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ld)return vu[n]=i[o];return n}var Dd=ya("animationend"),Id=ya("animationiteration"),Nd=ya("animationstart"),Ud=ya("transitionend"),Fd=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Fd.set(n,i),l(i,[n])}for(var xu=0;xu<Od.length;xu++){var yu=Od[xu],$0=yu.toLowerCase(),K0=yu[0].toUpperCase()+yu.slice(1);Ji($0,"on"+K0)}Ji(Dd,"onAnimationEnd"),Ji(Id,"onAnimationIteration"),Ji(Nd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Ud,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function zd(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,co(u,i,void 0,n),n.currentTarget=null}function kd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],G=U.instance,ae=U.currentTarget;if(U=U.listener,G!==m&&d.isPropagationStopped())break e;zd(d,U,ae),m=G}else for(E=0;E<u.length;E++){if(U=u[E],G=U.instance,ae=U.currentTarget,U=U.listener,G!==m&&d.isPropagationStopped())break e;zd(d,U,ae),m=G}}}if(Li)throw n=Si,Li=!1,Si=null,n}function Gt(n,i){var o=i[Cu];o===void 0&&(o=i[Cu]=new Set);var u=n+"__bubble";o.has(u)||(Bd(i,n,2,!1),o.add(u))}function Su(n,i,o){var u=0;i&&(u|=4),Bd(o,n,u,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Ro(n){if(!n[Sa]){n[Sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Z0.has(o)||Su(o,!1,n),Su(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,Su("selectionchange",!1,i))}}function Bd(n,i,o,u){switch(ud(i)){case 1:var d=f0;break;case 4:d=d0;break;default:d=ru}o=d.bind(null,i,o,n),d=void 0,!Yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Mu(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Pr(U),E===null)return;if(G=E.tag,G===5||G===6){u=m=E;continue e}U=U.parentNode}}u=u.return}ht(function(){var ae=m,be=Te(o),De=[];e:{var Re=Fd.get(n);if(Re!==void 0){var je=au,$e=n;switch(n){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":je=R0;break;case"focusin":$e="focus",je=cu;break;case"focusout":$e="blur",je=cu;break;case"beforeblur":case"afterblur":je=cu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=P0;break;case Dd:case Id:case Nd:je=v0;break;case Ud:je=D0;break;case"scroll":je=h0;break;case"wheel":je=N0;break;case"copy":case"cut":case"paste":je=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=pd}var Ke=(i&4)!==0,Jt=!Ke&&n==="scroll",J=Ke?Re!==null?Re+"Capture":null:Re;Ke=[];for(var W=ae,ne;W!==null;){ne=W;var Fe=ne.stateNode;if(ne.tag===5&&Fe!==null&&(ne=Fe,J!==null&&(Fe=yt(W,J),Fe!=null&&Ke.push(Co(W,Fe,ne)))),Jt)break;W=W.return}0<Ke.length&&(Re=new je(Re,$e,null,o,be),De.push({event:Re,listeners:Ke}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",Re&&o!==we&&($e=o.relatedTarget||o.fromElement)&&(Pr($e)||$e[Di]))break e;if((je||Re)&&(Re=be.window===be?be:(Re=be.ownerDocument)?Re.defaultView||Re.parentWindow:window,je?($e=o.relatedTarget||o.toElement,je=ae,$e=$e?Pr($e):null,$e!==null&&(Jt=li($e),$e!==Jt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(je=null,$e=ae),je!==$e)){if(Ke=dd,Fe="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=pd,Fe="onPointerLeave",J="onPointerEnter",W="pointer"),Jt=je==null?Re:gs(je),ne=$e==null?Re:gs($e),Re=new Ke(Fe,W+"leave",je,o,be),Re.target=Jt,Re.relatedTarget=ne,Fe=null,Pr(be)===ae&&(Ke=new Ke(J,W+"enter",$e,o,be),Ke.target=ne,Ke.relatedTarget=Jt,Fe=Ke),Jt=Fe,je&&$e)t:{for(Ke=je,J=$e,W=0,ne=Ke;ne;ne=ps(ne))W++;for(ne=0,Fe=J;Fe;Fe=ps(Fe))ne++;for(;0<W-ne;)Ke=ps(Ke),W--;for(;0<ne-W;)J=ps(J),ne--;for(;W--;){if(Ke===J||J!==null&&Ke===J.alternate)break t;Ke=ps(Ke),J=ps(J)}Ke=null}else Ke=null;je!==null&&Hd(De,Re,je,Ke,!1),$e!==null&&Jt!==null&&Hd(De,Jt,$e,Ke,!0)}}e:{if(Re=ae?gs(ae):window,je=Re.nodeName&&Re.nodeName.toLowerCase(),je==="select"||je==="input"&&Re.type==="file")var Qe=H0;else if(yd(Re))if(Md)Qe=X0;else{Qe=V0;var at=G0}else(je=Re.nodeName)&&je.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(Qe=W0);if(Qe&&(Qe=Qe(n,ae))){Sd(De,Qe,o,be);break e}at&&at(n,Re,ae),n==="focusout"&&(at=Re._wrapperState)&&at.controlled&&Re.type==="number"&&pt(Re,"number",Re.value)}switch(at=ae?gs(ae):window,n){case"focusin":(yd(at)||at.contentEditable==="true")&&(ds=at,gu=ae,To=null);break;case"focusout":To=gu=ds=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Pd(De,o,be);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Pd(De,o,be)}var lt;if(du)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else fs?vd(n,o)&&(gt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(md&&o.locale!=="ko"&&(fs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&fs&&(lt=cd()):(Qi=be,ou="value"in Qi?Qi.value:Qi.textContent,fs=!0)),at=Ma(ae,gt),0<at.length&&(gt=new hd(gt,n,null,o,be),De.push({event:gt,listeners:at}),lt?gt.data=lt:(lt=xd(o),lt!==null&&(gt.data=lt)))),(lt=F0?O0(n,o):z0(n,o))&&(ae=Ma(ae,"onBeforeInput"),0<ae.length&&(be=new hd("onBeforeInput","beforeinput",null,o,be),De.push({event:be,listeners:ae}),be.data=lt))}kd(De,i)})}function Co(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yt(n,o),m!=null&&u.unshift(Co(n,m,d)),m=yt(n,i),m!=null&&u.push(Co(n,m,d))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hd(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var U=o,G=U.alternate,ae=U.stateNode;if(G!==null&&G===u)break;U.tag===5&&ae!==null&&(U=ae,d?(G=yt(o,m),G!=null&&E.unshift(Co(o,G,U))):d||(G=yt(o,m),G!=null&&E.push(Co(o,G,U)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Q0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function Gd(n){return(typeof n=="string"?n:""+n).replace(Q0,`
`).replace(J0,"")}function Ea(n,i,o){if(i=Gd(i),Gd(n)!==i&&o)throw Error(t(425))}function wa(){}var Eu=null,wu=null;function Tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Au=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(n){return Vd.resolve(null).then(n).catch(n_)}:Au;function n_(n){setTimeout(function(){throw n})}function Ru(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),vo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);vo(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Wd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ms,bo="__reactProps$"+ms,Di="__reactContainer$"+ms,Cu="__reactEvents$"+ms,i_="__reactListeners$"+ms,r_="__reactHandles$"+ms;function Pr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Wd(n);n!==null;){if(o=n[Mi])return o;n=Wd(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[Mi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ta(n){return n[bo]||null}var bu=[],_s=-1;function tr(n){return{current:n}}function Vt(n){0>_s||(n.current=bu[_s],bu[_s]=null,_s--)}function Bt(n,i){_s++,bu[_s]=n.current,n.current=i}var nr={},xn=tr(nr),Nn=tr(!1),Lr=nr;function vs(n,i){var o=n.type.contextTypes;if(!o)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Un(n){return n=n.childContextTypes,n!=null}function Aa(){Vt(Nn),Vt(xn)}function Xd(n,i,o){if(xn.current!==nr)throw Error(t(168));Bt(xn,i),Bt(Nn,o)}function jd(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ge(n)||"Unknown",d));return Z({},o,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Lr=xn.current,Bt(xn,n),Bt(Nn,Nn.current),!0}function qd(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=jd(n,i,Lr),u.__reactInternalMemoizedMergedChildContext=n,Vt(Nn),Vt(xn),Bt(xn,n)):Vt(Nn),Bt(Nn,o)}var Ii=null,Ca=!1,Pu=!1;function Yd(n){Ii===null?Ii=[n]:Ii.push(n)}function s_(n){Ca=!0,Yd(n)}function ir(){if(!Pu&&Ii!==null){Pu=!0;var n=0,i=Ut;try{var o=Ii;for(Ut=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ii=null,Ca=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(n+1)),oe(ft,ir),d}finally{Ut=i,Pu=!1}}return null}var xs=[],ys=0,ba=null,Pa=0,Qn=[],Jn=0,Dr=null,Ni=1,Ui="";function Ir(n,i){xs[ys++]=Pa,xs[ys++]=ba,ba=n,Pa=i}function $d(n,i,o){Qn[Jn++]=Ni,Qn[Jn++]=Ui,Qn[Jn++]=Dr,Dr=n;var u=Ni;n=Ui;var d=32-tt(u)-1;u&=~(1<<d),o+=1;var m=32-tt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ni=1<<32-tt(i)+d|o<<d|u,Ui=m+n}else Ni=1<<m|o<<d|u,Ui=n}function Lu(n){n.return!==null&&(Ir(n,1),$d(n,1,0))}function Du(n){for(;n===ba;)ba=xs[--ys],xs[ys]=null,Pa=xs[--ys],xs[ys]=null;for(;n===Dr;)Dr=Qn[--Jn],Qn[Jn]=null,Ui=Qn[--Jn],Qn[Jn]=null,Ni=Qn[--Jn],Qn[Jn]=null}var Xn=null,jn=null,jt=!1,ci=null;function Kd(n,i){var o=ii(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Zd(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,jn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:Ni,overflow:Ui}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ii(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Xn=n,jn=null,!0):!1;default:return!1}}function Iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nu(n){if(jt){var i=jn;if(i){var o=i;if(!Zd(n,i)){if(Iu(n))throw Error(t(418));i=er(o.nextSibling);var u=Xn;i&&Zd(n,i)?Kd(u,o):(n.flags=n.flags&-4097|2,jt=!1,Xn=n)}}else{if(Iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Xn=n}}}function Qd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function La(n){if(n!==Xn)return!1;if(!jt)return Qd(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tu(n.type,n.memoizedProps)),i&&(i=jn)){if(Iu(n))throw Jd(),Error(t(418));for(;i;)Kd(n,i),i=er(i.nextSibling)}if(Qd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){jn=er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Xn?er(n.stateNode.nextSibling):null;return!0}function Jd(){for(var n=jn;n;)n=er(n.nextSibling)}function Ss(){jn=Xn=null,jt=!1}function Uu(n){ci===null?ci=[n]:ci.push(n)}var o_=P.ReactCurrentBatchConfig;function Lo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Da(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function eh(n){var i=n._init;return i(n._payload)}function th(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function o(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function u(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function d(J,W){return J=fr(J,W),J.index=0,J.sibling=null,J}function m(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,W,ne,Fe){return W===null||W.tag!==6?(W=Ac(ne,J.mode,Fe),W.return=J,W):(W=d(W,ne),W.return=J,W)}function G(J,W,ne,Fe){var Qe=ne.type;return Qe===L?be(J,W,ne.props.children,Fe,ne.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===X&&eh(Qe)===W.type)?(Fe=d(W,ne.props),Fe.ref=Lo(J,W,ne),Fe.return=J,Fe):(Fe=nl(ne.type,ne.key,ne.props,null,J.mode,Fe),Fe.ref=Lo(J,W,ne),Fe.return=J,Fe)}function ae(J,W,ne,Fe){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Rc(ne,J.mode,Fe),W.return=J,W):(W=d(W,ne.children||[]),W.return=J,W)}function be(J,W,ne,Fe,Qe){return W===null||W.tag!==7?(W=Hr(ne,J.mode,Fe,Qe),W.return=J,W):(W=d(W,ne),W.return=J,W)}function De(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ac(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return ne=nl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=Lo(J,null,W),ne.return=J,ne;case O:return W=Rc(W,J.mode,ne),W.return=J,W;case X:var Fe=W._init;return De(J,Fe(W._payload),ne)}if(Mt(W)||$(W))return W=Hr(W,J.mode,ne,null),W.return=J,W;Da(J,W)}return null}function Re(J,W,ne,Fe){var Qe=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Qe!==null?null:U(J,W,""+ne,Fe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case F:return ne.key===Qe?G(J,W,ne,Fe):null;case O:return ne.key===Qe?ae(J,W,ne,Fe):null;case X:return Qe=ne._init,Re(J,W,Qe(ne._payload),Fe)}if(Mt(ne)||$(ne))return Qe!==null?null:be(J,W,ne,Fe,null);Da(J,ne)}return null}function je(J,W,ne,Fe,Qe){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return J=J.get(ne)||null,U(W,J,""+Fe,Qe);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case F:return J=J.get(Fe.key===null?ne:Fe.key)||null,G(W,J,Fe,Qe);case O:return J=J.get(Fe.key===null?ne:Fe.key)||null,ae(W,J,Fe,Qe);case X:var at=Fe._init;return je(J,W,ne,at(Fe._payload),Qe)}if(Mt(Fe)||$(Fe))return J=J.get(ne)||null,be(W,J,Fe,Qe,null);Da(W,Fe)}return null}function $e(J,W,ne,Fe){for(var Qe=null,at=null,lt=W,gt=W=0,hn=null;lt!==null&&gt<ne.length;gt++){lt.index>gt?(hn=lt,lt=null):hn=lt.sibling;var Dt=Re(J,lt,ne[gt],Fe);if(Dt===null){lt===null&&(lt=hn);break}n&&lt&&Dt.alternate===null&&i(J,lt),W=m(Dt,W,gt),at===null?Qe=Dt:at.sibling=Dt,at=Dt,lt=hn}if(gt===ne.length)return o(J,lt),jt&&Ir(J,gt),Qe;if(lt===null){for(;gt<ne.length;gt++)lt=De(J,ne[gt],Fe),lt!==null&&(W=m(lt,W,gt),at===null?Qe=lt:at.sibling=lt,at=lt);return jt&&Ir(J,gt),Qe}for(lt=u(J,lt);gt<ne.length;gt++)hn=je(lt,J,gt,ne[gt],Fe),hn!==null&&(n&&hn.alternate!==null&&lt.delete(hn.key===null?gt:hn.key),W=m(hn,W,gt),at===null?Qe=hn:at.sibling=hn,at=hn);return n&&lt.forEach(function(dr){return i(J,dr)}),jt&&Ir(J,gt),Qe}function Ke(J,W,ne,Fe){var Qe=$(ne);if(typeof Qe!="function")throw Error(t(150));if(ne=Qe.call(ne),ne==null)throw Error(t(151));for(var at=Qe=null,lt=W,gt=W=0,hn=null,Dt=ne.next();lt!==null&&!Dt.done;gt++,Dt=ne.next()){lt.index>gt?(hn=lt,lt=null):hn=lt.sibling;var dr=Re(J,lt,Dt.value,Fe);if(dr===null){lt===null&&(lt=hn);break}n&&lt&&dr.alternate===null&&i(J,lt),W=m(dr,W,gt),at===null?Qe=dr:at.sibling=dr,at=dr,lt=hn}if(Dt.done)return o(J,lt),jt&&Ir(J,gt),Qe;if(lt===null){for(;!Dt.done;gt++,Dt=ne.next())Dt=De(J,Dt.value,Fe),Dt!==null&&(W=m(Dt,W,gt),at===null?Qe=Dt:at.sibling=Dt,at=Dt);return jt&&Ir(J,gt),Qe}for(lt=u(J,lt);!Dt.done;gt++,Dt=ne.next())Dt=je(lt,J,gt,Dt.value,Fe),Dt!==null&&(n&&Dt.alternate!==null&&lt.delete(Dt.key===null?gt:Dt.key),W=m(Dt,W,gt),at===null?Qe=Dt:at.sibling=Dt,at=Dt);return n&&lt.forEach(function(k_){return i(J,k_)}),jt&&Ir(J,gt),Qe}function Jt(J,W,ne,Fe){if(typeof ne=="object"&&ne!==null&&ne.type===L&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case F:e:{for(var Qe=ne.key,at=W;at!==null;){if(at.key===Qe){if(Qe=ne.type,Qe===L){if(at.tag===7){o(J,at.sibling),W=d(at,ne.props.children),W.return=J,J=W;break e}}else if(at.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===X&&eh(Qe)===at.type){o(J,at.sibling),W=d(at,ne.props),W.ref=Lo(J,at,ne),W.return=J,J=W;break e}o(J,at);break}else i(J,at);at=at.sibling}ne.type===L?(W=Hr(ne.props.children,J.mode,Fe,ne.key),W.return=J,J=W):(Fe=nl(ne.type,ne.key,ne.props,null,J.mode,Fe),Fe.ref=Lo(J,W,ne),Fe.return=J,J=Fe)}return E(J);case O:e:{for(at=ne.key;W!==null;){if(W.key===at)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){o(J,W.sibling),W=d(W,ne.children||[]),W.return=J,J=W;break e}else{o(J,W);break}else i(J,W);W=W.sibling}W=Rc(ne,J.mode,Fe),W.return=J,J=W}return E(J);case X:return at=ne._init,Jt(J,W,at(ne._payload),Fe)}if(Mt(ne))return $e(J,W,ne,Fe);if($(ne))return Ke(J,W,ne,Fe);Da(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(o(J,W.sibling),W=d(W,ne),W.return=J,J=W):(o(J,W),W=Ac(ne,J.mode,Fe),W.return=J,J=W),E(J)):o(J,W)}return Jt}var Ms=th(!0),nh=th(!1),Ia=tr(null),Na=null,Es=null,Fu=null;function Ou(){Fu=Es=Na=null}function zu(n){var i=Ia.current;Vt(Ia),n._currentValue=i}function ku(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Na=n,Fu=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Fn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(Fu!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Na===null)throw Error(t(308));Es=n,Na.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Nr=null;function Bu(n){Nr===null?Nr=[n]:Nr.push(n)}function ih(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Bu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Fi(n,u)}function Fi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var rr=!1;function Hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Fi(n,o)}return d=u.interleaved,d===null?(i.next=i,Bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Fi(n,o)}function Ua(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tu(n,o)}}function sh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Fa(n,i,o,u){var d=n.updateQueue;rr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var G=U,ae=G.next;G.next=null,E===null?m=ae:E.next=ae,E=G;var be=n.alternate;be!==null&&(be=be.updateQueue,U=be.lastBaseUpdate,U!==E&&(U===null?be.firstBaseUpdate=ae:U.next=ae,be.lastBaseUpdate=G))}if(m!==null){var De=d.baseState;E=0,be=ae=G=null,U=m;do{var Re=U.lane,je=U.eventTime;if((u&Re)===Re){be!==null&&(be=be.next={eventTime:je,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=n,Ke=U;switch(Re=i,je=o,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){De=$e.call(je,De,Re);break e}De=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,Re=typeof $e=="function"?$e.call(je,De,Re):$e,Re==null)break e;De=Z({},De,Re);break e;case 2:rr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,Re=d.effects,Re===null?d.effects=[U]:Re.push(U))}else je={eventTime:je,lane:Re,tag:U.tag,payload:U.payload,callback:U.callback,next:null},be===null?(ae=be=je,G=De):be=be.next=je,E|=Re;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;Re=U,U=Re.next,Re.next=null,d.lastBaseUpdate=Re,d.shared.pending=null}}while(!0);if(be===null&&(G=De),d.baseState=G,d.firstBaseUpdate=ae,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=E,n.lanes=E,n.memoizedState=De}}function oh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Do={},Ei=tr(Do),Io=tr(Do),No=tr(Do);function Ur(n){if(n===Do)throw Error(t(174));return n}function Gu(n,i){switch(Bt(No,i),Bt(Io,n),Bt(Ei,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:it(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=it(i,n)}Vt(Ei),Bt(Ei,i)}function Ts(){Vt(Ei),Vt(Io),Vt(No)}function ah(n){Ur(No.current);var i=Ur(Ei.current),o=it(i,n.type);i!==o&&(Bt(Io,n),Bt(Ei,o))}function Vu(n){Io.current===n&&(Vt(Ei),Vt(Io))}var $t=tr(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wu=[];function Xu(){for(var n=0;n<Wu.length;n++)Wu[n]._workInProgressVersionPrimary=null;Wu.length=0}var za=P.ReactCurrentDispatcher,ju=P.ReactCurrentBatchConfig,Fr=0,Kt=null,sn=null,fn=null,ka=!1,Uo=!1,Fo=0,a_=0;function yn(){throw Error(t(321))}function qu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ui(n[o],i[o]))return!1;return!0}function Yu(n,i,o,u,d,m){if(Fr=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?f_:d_,n=o(u,d),Uo){m=0;do{if(Uo=!1,Fo=0,25<=m)throw Error(t(301));m+=1,fn=sn=null,i.updateQueue=null,za.current=h_,n=o(u,d)}while(Uo)}if(za.current=Ga,i=sn!==null&&sn.next!==null,Fr=0,fn=sn=Kt=null,ka=!1,i)throw Error(t(300));return n}function $u(){var n=Fo!==0;return Fo=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Kt.memoizedState=fn=n:fn=fn.next=n,fn}function ti(){if(sn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=fn===null?Kt.memoizedState:fn.next;if(i!==null)fn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},fn===null?Kt.memoizedState=fn=n:fn=fn.next=n}return fn}function Oo(n,i){return typeof i=="function"?i(n):i}function Ku(n){var i=ti(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=sn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,G=null,ae=m;do{var be=ae.lane;if((Fr&be)===be)G!==null&&(G=G.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var De={lane:be,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};G===null?(U=G=De,E=u):G=G.next=De,Kt.lanes|=be,Or|=be}ae=ae.next}while(ae!==null&&ae!==m);G===null?E=u:G.next=U,ui(u,i.memoizedState)||(Fn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=G,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Kt.lanes|=m,Or|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Zu(n){var i=ti(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ui(m,i.memoizedState)||(Fn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function lh(){}function uh(n,i){var o=Kt,u=ti(),d=i(),m=!ui(u.memoizedState,d);if(m&&(u.memoizedState=d,Fn=!0),u=u.queue,Qu(dh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,zo(9,fh.bind(null,o,u,d,i),void 0,null),dn===null)throw Error(t(349));(Fr&30)!==0||ch(o,i,d)}return d}function ch(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function fh(n,i,o,u){i.value=o,i.getSnapshot=u,hh(i)&&ph(n)}function dh(n,i,o){return o(function(){hh(i)&&ph(n)})}function hh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ui(n,o)}catch{return!0}}function ph(n){var i=Fi(n,1);i!==null&&pi(i,n,1,-1)}function mh(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=c_.bind(null,Kt,n),[i.memoizedState,n]}function zo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function gh(){return ti().memoizedState}function Ba(n,i,o,u){var d=wi();Kt.flags|=n,d.memoizedState=zo(1|i,o,void 0,u===void 0?null:u)}function Ha(n,i,o,u){var d=ti();u=u===void 0?null:u;var m=void 0;if(sn!==null){var E=sn.memoizedState;if(m=E.destroy,u!==null&&qu(u,E.deps)){d.memoizedState=zo(i,o,m,u);return}}Kt.flags|=n,d.memoizedState=zo(1|i,o,m,u)}function _h(n,i){return Ba(8390656,8,n,i)}function Qu(n,i){return Ha(2048,8,n,i)}function vh(n,i){return Ha(4,2,n,i)}function xh(n,i){return Ha(4,4,n,i)}function yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sh(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4,4,yh.bind(null,i,n),o)}function Ju(){}function Mh(n,i){var o=ti();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Eh(n,i){var o=ti();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function wh(n,i,o){return(Fr&21)===0?(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=o):(ui(o,i)||(o=ua(),Kt.lanes|=o,Or|=o,n.baseState=!0),i)}function l_(n,i){var o=Ut;Ut=o!==0&&4>o?o:4,n(!0);var u=ju.transition;ju.transition={};try{n(!1),i()}finally{Ut=o,ju.transition=u}}function Th(){return ti().memoizedState}function u_(n,i,o){var u=ur(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ah(n))Rh(i,o);else if(o=ih(n,i,o,u),o!==null){var d=Cn();pi(o,n,u,d),Ch(o,i,u)}}function c_(n,i,o){var u=ur(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ah(n))Rh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,o);if(d.hasEagerState=!0,d.eagerState=U,ui(U,E)){var G=i.interleaved;G===null?(d.next=d,Bu(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}o=ih(n,i,d,u),o!==null&&(d=Cn(),pi(o,n,u,d),Ch(o,i,u))}}function Ah(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function Rh(n,i){Uo=ka=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ch(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tu(n,o)}}var Ga={readContext:ei,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},f_={readContext:ei,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:_h,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ba(4194308,4,yh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ba(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ba(4,2,n,i)},useMemo:function(n,i){var o=wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=wi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=u_.bind(null,Kt,n),[u.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:mh,useDebugValue:Ju,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=mh(!1),i=n[0];return n=l_.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Kt,d=wi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),dn===null)throw Error(t(349));(Fr&30)!==0||ch(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,_h(dh.bind(null,u,m,n),[n]),u.flags|=2048,zo(9,fh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=wi(),i=dn.identifierPrefix;if(jt){var o=Ui,u=Ni;o=(u&~(1<<32-tt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=a_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},d_={readContext:ei,useCallback:Mh,useContext:ei,useEffect:Qu,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:Eh,useReducer:Ku,useRef:gh,useState:function(){return Ku(Oo)},useDebugValue:Ju,useDeferredValue:function(n){var i=ti();return wh(i,sn.memoizedState,n)},useTransition:function(){var n=Ku(Oo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:lh,useSyncExternalStore:uh,useId:Th,unstable_isNewReconciler:!1},h_={readContext:ei,useCallback:Mh,useContext:ei,useEffect:Qu,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:xh,useMemo:Eh,useReducer:Zu,useRef:gh,useState:function(){return Zu(Oo)},useDebugValue:Ju,useDeferredValue:function(n){var i=ti();return sn===null?i.memoizedState=n:wh(i,sn.memoizedState,n)},useTransition:function(){var n=Zu(Oo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:lh,useSyncExternalStore:uh,useId:Th,unstable_isNewReconciler:!1};function fi(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function ec(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Z({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Va={isMounted:function(n){return(n=n._reactInternals)?li(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Cn(),d=ur(n),m=Oi(u,d);m.payload=i,o!=null&&(m.callback=o),i=sr(n,m,d),i!==null&&(pi(i,n,d,u),Ua(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Cn(),d=ur(n),m=Oi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=sr(n,m,d),i!==null&&(pi(i,n,d,u),Ua(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Cn(),u=ur(n),d=Oi(o,u);d.tag=2,i!=null&&(d.callback=i),i=sr(n,d,u),i!==null&&(pi(i,n,u,o),Ua(i,n,u))}};function bh(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!wo(o,u)||!wo(d,m):!0}function Ph(n,i,o){var u=!1,d=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=ei(m):(d=Un(i)?Lr:xn.current,u=i.contextTypes,m=(u=u!=null)?vs(n,d):nr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Va,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Lh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Va.enqueueReplaceState(i,i.state,null)}function tc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Hu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ei(m):(m=Un(i)?Lr:xn.current,d.context=vs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ec(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Va.enqueueReplaceState(d,d.state,null),Fa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function nc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ic(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function Dh(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ka||(Ka=!0,vc=u),ic(n,i)},o}function Ih(n,i,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ic(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ic(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Nh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new p_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=C_.bind(null,n,i,o),i.then(n,n))}function Uh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Fh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var m_=P.ReactCurrentOwner,Fn=!1;function Rn(n,i,o,u){i.child=n===null?nh(i,null,o,u):Ms(i,n.child,o,u)}function Oh(n,i,o,u,d){o=o.render;var m=i.ref;return ws(i,d),u=Yu(n,i,o,u,m,d),o=$u(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(jt&&o&&Lu(i),i.flags|=1,Rn(n,i,u,d),i.child)}function zh(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Tc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,kh(n,i,m,u,d)):(n=nl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(E,u)&&n.ref===i.ref)return zi(n,i,d)}return i.flags|=1,n=fr(m,u),n.ref=i.ref,n.return=i,i.child=n}function kh(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(wo(m,u)&&n.ref===i.ref)if(Fn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Fn=!0);else return i.lanes=n.lanes,zi(n,i,d)}return rc(n,i,o,u,d)}function Bh(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Cs,qn),qn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Cs,qn),qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Bt(Cs,qn),qn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Bt(Cs,qn),qn|=u;return Rn(n,i,d,o),i.child}function Hh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function rc(n,i,o,u,d){var m=Un(o)?Lr:xn.current;return m=vs(i,m),ws(i,d),o=Yu(n,i,o,u,m,d),u=$u(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(jt&&u&&Lu(i),i.flags|=1,Rn(n,i,o,d),i.child)}function Gh(n,i,o,u,d){if(Un(o)){var m=!0;Ra(i)}else m=!1;if(ws(i,d),i.stateNode===null)Xa(n,i),Ph(i,o,u),tc(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var G=E.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=ei(ae):(ae=Un(o)?Lr:xn.current,ae=vs(i,ae));var be=o.getDerivedStateFromProps,De=typeof be=="function"||typeof E.getSnapshotBeforeUpdate=="function";De||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||G!==ae)&&Lh(i,E,u,ae),rr=!1;var Re=i.memoizedState;E.state=Re,Fa(i,u,E,d),G=i.memoizedState,U!==u||Re!==G||Nn.current||rr?(typeof be=="function"&&(ec(i,o,be,u),G=i.memoizedState),(U=rr||bh(i,o,U,u,Re,G,ae))?(De||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=G),E.props=u,E.state=G,E.context=ae,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,rh(n,i),U=i.memoizedProps,ae=i.type===i.elementType?U:fi(i.type,U),E.props=ae,De=i.pendingProps,Re=E.context,G=o.contextType,typeof G=="object"&&G!==null?G=ei(G):(G=Un(o)?Lr:xn.current,G=vs(i,G));var je=o.getDerivedStateFromProps;(be=typeof je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==De||Re!==G)&&Lh(i,E,u,G),rr=!1,Re=i.memoizedState,E.state=Re,Fa(i,u,E,d);var $e=i.memoizedState;U!==De||Re!==$e||Nn.current||rr?(typeof je=="function"&&(ec(i,o,je,u),$e=i.memoizedState),(ae=rr||bh(i,o,ae,u,Re,$e,G)||!1)?(be||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,$e,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,$e,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),E.props=u,E.state=$e,E.context=G,u=ae):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),u=!1)}return sc(n,i,o,u,m,d)}function sc(n,i,o,u,d,m){Hh(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&qd(i,o,!1),zi(n,i,m);u=i.stateNode,m_.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,U,m)):Rn(n,i,U,m),i.memoizedState=u.state,d&&qd(i,o,!0),i.child}function Vh(n){var i=n.stateNode;i.pendingContext?Xd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Xd(n,i.context,!1),Gu(n,i.containerInfo)}function Wh(n,i,o,u,d){return Ss(),Uu(d),i.flags|=256,Rn(n,i,o,u),i.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xh(n,i,o){var u=i.pendingProps,d=$t.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Bt($t,d&1),n===null)return Nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=il(E,u,0,null),n=Hr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ac(o),i.memoizedState=oc,n):lc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return g_(n,i,E,u,U,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var G={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=G,i.deletions=null):(u=fr(d,G),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=fr(U,m):(m=Hr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?ac(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=oc,u}return m=n.child,n=m.sibling,u=fr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function lc(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wa(n,i,o,u){return u!==null&&Uu(u),Ms(i,n.child,null,o),n=lc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function g_(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=nc(Error(t(422))),Wa(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=il({mode:"visible",children:u.children},d,0,null),m=Hr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ms(i,n.child,null,E),i.child.memoizedState=ac(E),i.memoizedState=oc,m);if((i.mode&1)===0)return Wa(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=nc(m,u,void 0),Wa(n,i,E,u)}if(U=(E&n.childLanes)!==0,Fn||U){if(u=dn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Fi(n,d),pi(u,n,d,-1))}return wc(),u=nc(Error(t(421))),Wa(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=b_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,jn=er(d.nextSibling),Xn=i,jt=!0,ci=null,n!==null&&(Qn[Jn++]=Ni,Qn[Jn++]=Ui,Qn[Jn++]=Dr,Ni=n.id,Ui=n.overflow,Dr=i),i=lc(i,u.children),i.flags|=4096,i)}function jh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ku(n.return,i,o)}function uc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function qh(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Rn(n,i,u.children,o),u=$t.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jh(n,o,i);else if(n.tag===19)jh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt($t,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Oa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),uc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}uc(i,!0,o,null,m);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function __(n,i,o){switch(i.tag){case 3:Vh(i),Ss();break;case 5:ah(i);break;case 1:Un(i.type)&&Ra(i);break;case 4:Gu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Bt(Ia,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt($t,$t.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Xh(n,i,o):(Bt($t,$t.current&1),n=zi(n,i,o),n!==null?n.sibling:null);Bt($t,$t.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return qh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Bt($t,$t.current),u)break;return null;case 22:case 23:return i.lanes=0,Bh(n,i,o)}return zi(n,i,o)}var Yh,cc,$h,Kh;Yh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},cc=function(){},$h=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(Ei.current);var m=null;switch(o){case"input":d=Je(n,d),u=Je(n,u),m=[];break;case"select":d=Z({},d,{value:void 0}),u=Z({},u,{value:void 0}),m=[];break;case"textarea":d=A(n,d),u=A(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=wa)}ye(o,u);var E;o=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var U=d[ae];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in u){var G=u[ae];if(U=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&G!==U&&(G!=null||U!=null))if(ae==="style")if(U){for(E in U)!U.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in G)G.hasOwnProperty(E)&&U[E]!==G[E]&&(o||(o={}),o[E]=G[E])}else o||(m||(m=[]),m.push(ae,o)),o=G;else ae==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(m=m||[]).push(ae,G)):ae==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ae,""+G):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(G!=null&&ae==="onScroll"&&Gt("scroll",n),m||U===G||(m=[])):(m=m||[]).push(ae,G))}o&&(m=m||[]).push("style",o);var ae=m;(i.updateQueue=ae)&&(i.flags|=4)}},Kh=function(n,i,o,u){o!==u&&(i.flags|=4)};function ko(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function v_(n,i,o){var u=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Un(i.type)&&Aa(),Sn(i),null;case 3:return u=i.stateNode,Ts(),Vt(Nn),Vt(xn),Xu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(La(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(Sc(ci),ci=null))),cc(n,i),Sn(i),null;case 5:Vu(i);var d=Ur(No.current);if(o=i.type,n!==null&&i.stateNode!=null)$h(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Sn(i),null}if(n=Ur(Ei.current),La(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Mi]=i,u[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Gt("cancel",u),Gt("close",u);break;case"iframe":case"object":case"embed":Gt("load",u);break;case"video":case"audio":for(d=0;d<Ao.length;d++)Gt(Ao[d],u);break;case"source":Gt("error",u);break;case"img":case"image":case"link":Gt("error",u),Gt("load",u);break;case"details":Gt("toggle",u);break;case"input":ot(u,m),Gt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Gt("invalid",u);break;case"textarea":he(u,m),Gt("invalid",u)}ye(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Gt("scroll",u)}switch(o){case"input":nt(u),rt(u,m,!0);break;case"textarea":nt(u),Pe(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=wa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ee(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[Mi]=i,n[bo]=u,Yh(n,i,!1,!1),i.stateNode=n;e:{switch(E=ge(o,u),o){case"dialog":Gt("cancel",n),Gt("close",n),d=u;break;case"iframe":case"object":case"embed":Gt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ao.length;d++)Gt(Ao[d],n);d=u;break;case"source":Gt("error",n),d=u;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),d=u;break;case"details":Gt("toggle",n),d=u;break;case"input":ot(n,u),d=Je(n,u),Gt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Z({},u,{value:void 0}),Gt("invalid",n);break;case"textarea":he(n,u),d=A(n,u),Gt("invalid",n);break;default:d=u}ye(o,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var G=U[m];m==="style"?ve(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ce(n,G)):m==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&ke(n,G):typeof G=="number"&&ke(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?G!=null&&m==="onScroll"&&Gt("scroll",n):G!=null&&R(n,m,G,E))}switch(o){case"input":nt(n),rt(n,u,!1);break;case"textarea":nt(n),Pe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ze(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?I(n,!!u.multiple,m,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(n&&i.stateNode!=null)Kh(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ur(No.current),Ur(Ei.current),La(i)){if(u=i.stateNode,o=i.memoizedProps,u[Mi]=i,(m=u.nodeValue!==o)&&(n=Xn,n!==null))switch(n.tag){case 3:Ea(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ea(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return Sn(i),null;case 13:if(Vt($t),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Jd(),Ss(),i.flags|=98560,m=!1;else if(m=La(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),m=!1}else ci!==null&&(Sc(ci),ci=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?on===0&&(on=3):wc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return Ts(),cc(n,i),n===null&&Ro(i.stateNode.containerInfo),Sn(i),null;case 10:return zu(i.type._context),Sn(i),null;case 17:return Un(i.type)&&Aa(),Sn(i),null;case 19:if(Vt($t),m=i.memoizedState,m===null)return Sn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)ko(m,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Oa(n),E!==null){for(i.flags|=128,ko(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Bt($t,$t.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xe()>bs&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304)}else{if(!u)if(n=Oa(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ko(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!jt)return Sn(i),null}else 2*Xe()-m.renderingStartTime>bs&&o!==1073741824&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xe(),i.sibling=null,o=$t.current,Bt($t,u?o&1|2:o&1),i):(Sn(i),null);case 22:case 23:return Ec(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(qn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function x_(n,i){switch(Du(i),i.tag){case 1:return Un(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),Vt(Nn),Vt(xn),Xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Vt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt($t),null;case 4:return Ts(),null;case 10:return zu(i.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var ja=!1,Mn=!1,y_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Qt(n,i,u)}else o.current=null}function fc(n,i,o){try{o()}catch(u){Qt(n,i,u)}}var Zh=!1;function S_(n,i){if(Eu=da,n=bd(),mu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,U=-1,G=-1,ae=0,be=0,De=n,Re=null;t:for(;;){for(var je;De!==o||d!==0&&De.nodeType!==3||(U=E+d),De!==m||u!==0&&De.nodeType!==3||(G=E+u),De.nodeType===3&&(E+=De.nodeValue.length),(je=De.firstChild)!==null;)Re=De,De=je;for(;;){if(De===n)break t;if(Re===o&&++ae===d&&(U=E),Re===m&&++be===u&&(G=E),(je=De.nextSibling)!==null)break;De=Re,Re=De.parentNode}De=je}o=U===-1||G===-1?null:{start:U,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(wu={focusedElem:n,selectionRange:o},da=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,Jt=$e.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:fi(i.type,Ke),Jt);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){Qt(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return $e=Zh,Zh=!1,$e}function Bo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&fc(i,o,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function dc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Qh(n){var i=n.alternate;i!==null&&(n.alternate=null,Qh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[bo],delete i[Cu],delete i[i_],delete i[r_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jh(n){return n.tag===5||n.tag===3||n.tag===4}function ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(u!==4&&(n=n.child,n!==null))for(hc(n,i,o),n=n.sibling;n!==null;)hc(n,i,o),n=n.sibling}function pc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(pc(n,i,o),n=n.sibling;n!==null;)pc(n,i,o),n=n.sibling}var gn=null,di=!1;function or(n,i,o){for(o=o.child;o!==null;)tp(n,i,o),o=o.sibling}function tp(n,i,o){if(z&&typeof z.onCommitFiberUnmount=="function")try{z.onCommitFiberUnmount(mn,o)}catch{}switch(o.tag){case 5:Mn||Rs(o,i);case 6:var u=gn,d=di;gn=null,or(n,i,o),gn=u,di=d,gn!==null&&(di?(n=gn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):gn.removeChild(o.stateNode));break;case 18:gn!==null&&(di?(n=gn,o=o.stateNode,n.nodeType===8?Ru(n.parentNode,o):n.nodeType===1&&Ru(n,o),vo(n)):Ru(gn,o.stateNode));break;case 4:u=gn,d=di,gn=o.stateNode.containerInfo,di=!0,or(n,i,o),gn=u,di=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&fc(o,i,E),d=d.next}while(d!==u)}or(n,i,o);break;case 1:if(!Mn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Qt(o,i,U)}or(n,i,o);break;case 21:or(n,i,o);break;case 22:o.mode&1?(Mn=(u=Mn)||o.memoizedState!==null,or(n,i,o),Mn=u):or(n,i,o);break;default:or(n,i,o)}}function np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new y_),i.forEach(function(u){var d=P_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function hi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:gn=U.stateNode,di=!1;break e;case 3:gn=U.stateNode.containerInfo,di=!0;break e;case 4:gn=U.stateNode.containerInfo,di=!0;break e}U=U.return}if(gn===null)throw Error(t(160));tp(m,E,d),gn=null,di=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(ae){Qt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ip(i,n),i=i.sibling}function ip(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(i,n),Ti(n),u&4){try{Bo(3,n,n.return),qa(3,n)}catch(Ke){Qt(n,n.return,Ke)}try{Bo(5,n,n.return)}catch(Ke){Qt(n,n.return,Ke)}}break;case 1:hi(i,n),Ti(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(hi(i,n),Ti(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var d=n.stateNode;try{ke(d,"")}catch(Ke){Qt(n,n.return,Ke)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,U=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&We(d,m),ge(U,E);var ae=ge(U,m);for(E=0;E<G.length;E+=2){var be=G[E],De=G[E+1];be==="style"?ve(d,De):be==="dangerouslySetInnerHTML"?Ce(d,De):be==="children"?ke(d,De):R(d,be,De,ae)}switch(U){case"input":xt(d,m);break;case"textarea":ce(d,m);break;case"select":var Re=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var je=m.value;je!=null?I(d,!!m.multiple,je,!1):Re!==!!m.multiple&&(m.defaultValue!=null?I(d,!!m.multiple,m.defaultValue,!0):I(d,!!m.multiple,m.multiple?[]:"",!1))}d[bo]=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 6:if(hi(i,n),Ti(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 3:if(hi(i,n),Ti(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(Ke){Qt(n,n.return,Ke)}break;case 4:hi(i,n),Ti(n);break;case 13:hi(i,n),Ti(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(_c=Xe())),u&4&&np(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Mn=(ae=Mn)||be,hi(i,n),Mn=ae):hi(i,n),Ti(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!be&&(n.mode&1)!==0)for(Ye=n,be=n.child;be!==null;){for(De=Ye=be;Ye!==null;){switch(Re=Ye,je=Re.child,Re.tag){case 0:case 11:case 14:case 15:Bo(4,Re,Re.return);break;case 1:Rs(Re,Re.return);var $e=Re.stateNode;if(typeof $e.componentWillUnmount=="function"){u=Re,o=Re.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ke){Qt(u,o,Ke)}}break;case 5:Rs(Re,Re.return);break;case 22:if(Re.memoizedState!==null){op(De);continue}}je!==null?(je.return=Re,Ye=je):op(De)}be=be.sibling}e:for(be=null,De=n;;){if(De.tag===5){if(be===null){be=De;try{d=De.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=De.stateNode,G=De.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=Se("display",E))}catch(Ke){Qt(n,n.return,Ke)}}}else if(De.tag===6){if(be===null)try{De.stateNode.nodeValue=ae?"":De.memoizedProps}catch(Ke){Qt(n,n.return,Ke)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;be===De&&(be=null),De=De.return}be===De&&(be=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:hi(i,n),Ti(n),u&4&&np(n);break;case 21:break;default:hi(i,n),Ti(n)}}function Ti(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Jh(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ke(d,""),u.flags&=-33);var m=ep(n);pc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=ep(n);hc(n,U,E);break;default:throw Error(t(161))}}catch(G){Qt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function M_(n,i,o){Ye=n,rp(n)}function rp(n,i,o){for(var u=(n.mode&1)!==0;Ye!==null;){var d=Ye,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||ja;if(!E){var U=d.alternate,G=U!==null&&U.memoizedState!==null||Mn;U=ja;var ae=Mn;if(ja=E,(Mn=G)&&!ae)for(Ye=d;Ye!==null;)E=Ye,G=E.child,E.tag===22&&E.memoizedState!==null?ap(d):G!==null?(G.return=E,Ye=G):ap(d);for(;m!==null;)Ye=m,rp(m),m=m.sibling;Ye=d,ja=U,Mn=ae}sp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ye=m):sp(n)}}function sp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&oh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}oh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var be=ae.memoizedState;if(be!==null){var De=be.dehydrated;De!==null&&vo(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&dc(i)}catch(Re){Qt(i,i.return,Re)}}if(i===n){Ye=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function op(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function ap(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(G){Qt(i,o,G)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(G){Qt(i,d,G)}}var m=i.return;try{dc(i)}catch(G){Qt(i,m,G)}break;case 5:var E=i.return;try{dc(i)}catch(G){Qt(i,E,G)}}}catch(G){Qt(i,i.return,G)}if(i===n){Ye=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ye=U;break}Ye=i.return}}var E_=Math.ceil,Ya=P.ReactCurrentDispatcher,mc=P.ReactCurrentOwner,ni=P.ReactCurrentBatchConfig,Lt=0,dn=null,en=null,_n=0,qn=0,Cs=tr(0),on=0,Ho=null,Or=0,$a=0,gc=0,Go=null,On=null,_c=0,bs=1/0,ki=null,Ka=!1,vc=null,ar=null,Za=!1,lr=null,Qa=0,Vo=0,xc=null,Ja=-1,el=0;function Cn(){return(Lt&6)!==0?Xe():Ja!==-1?Ja:Ja=Xe()}function ur(n){return(n.mode&1)===0?1:(Lt&2)!==0&&_n!==0?_n&-_n:o_.transition!==null?(el===0&&(el=ua()),el):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:ud(n.type)),n)}function pi(n,i,o,u){if(50<Vo)throw Vo=0,xc=null,Error(t(185));ho(n,o,u),((Lt&2)===0||n!==dn)&&(n===dn&&((Lt&2)===0&&($a|=o),on===4&&cr(n,_n)),zn(n,u),o===1&&Lt===0&&(i.mode&1)===0&&(bs=Xe()+500,Ca&&ir()))}function zn(n,i){var o=n.callbackNode;In(n,i);var u=vn(n,n===dn?_n:0);if(u===0)o!==null&&Ve(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Ve(o),i===1)n.tag===0?s_(up.bind(null,n)):Yd(up.bind(null,n)),t_(function(){(Lt&6)===0&&ir()}),o=null;else{switch(td(u)){case 1:o=ft;break;case 4:o=mt;break;case 16:o=Nt;break;case 536870912:o=Xt;break;default:o=Nt}o=_p(o,lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function lp(n,i){if(Ja=-1,el=0,(Lt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ps()&&n.callbackNode!==o)return null;var u=vn(n,n===dn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=tl(n,u);else{i=u;var d=Lt;Lt|=2;var m=fp();(dn!==n||_n!==i)&&(ki=null,bs=Xe()+500,kr(n,i));do try{A_();break}catch(U){cp(n,U)}while(!0);Ou(),Ya.current=m,Lt=d,en!==null?i=0:(dn=null,_n=0,i=on)}if(i!==0){if(i===2&&(d=br(n),d!==0&&(u=d,i=yc(n,d))),i===1)throw o=Ho,kr(n,0),cr(n,u),zn(n,Xe()),o;if(i===6)cr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!w_(d)&&(i=tl(n,u),i===2&&(m=br(n),m!==0&&(u=m,i=yc(n,m))),i===1))throw o=Ho,kr(n,0),cr(n,u),zn(n,Xe()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Br(n,On,ki);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=_c+500-Xe(),10<i)){if(vn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Au(Br.bind(null,n,On,ki),i);break}Br(n,On,ki);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-tt(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=Xe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*E_(u/1960))-u,10<u){n.timeoutHandle=Au(Br.bind(null,n,On,ki),u);break}Br(n,On,ki);break;case 5:Br(n,On,ki);break;default:throw Error(t(329))}}}return zn(n,Xe()),n.callbackNode===o?lp.bind(null,n):null}function yc(n,i){var o=Go;return n.current.memoizedState.isDehydrated&&(kr(n,i).flags|=256),n=tl(n,i),n!==2&&(i=On,On=o,i!==null&&Sc(i)),n}function Sc(n){On===null?On=n:On.push.apply(On,n)}function w_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ui(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~gc,i&=~$a,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-tt(i),u=1<<o;n[o]=-1,i&=~u}}function up(n){if((Lt&6)!==0)throw Error(t(327));Ps();var i=vn(n,0);if((i&1)===0)return zn(n,Xe()),null;var o=tl(n,i);if(n.tag!==0&&o===2){var u=br(n);u!==0&&(i=u,o=yc(n,u))}if(o===1)throw o=Ho,kr(n,0),cr(n,i),zn(n,Xe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,On,ki),zn(n,Xe()),null}function Mc(n,i){var o=Lt;Lt|=1;try{return n(i)}finally{Lt=o,Lt===0&&(bs=Xe()+500,Ca&&ir())}}function zr(n){lr!==null&&lr.tag===0&&(Lt&6)===0&&Ps();var i=Lt;Lt|=1;var o=ni.transition,u=Ut;try{if(ni.transition=null,Ut=1,n)return n()}finally{Ut=u,ni.transition=o,Lt=i,(Lt&6)===0&&ir()}}function Ec(){qn=Cs.current,Vt(Cs)}function kr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,e_(o)),en!==null)for(o=en.return;o!==null;){var u=o;switch(Du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:Ts(),Vt(Nn),Vt(xn),Xu();break;case 5:Vu(u);break;case 4:Ts();break;case 13:Vt($t);break;case 19:Vt($t);break;case 10:zu(u.type._context);break;case 22:case 23:Ec()}o=o.return}if(dn=n,en=n=fr(n.current,null),_n=qn=i,on=0,Ho=null,gc=$a=Or=0,On=Go=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}Nr=null}return n}function cp(n,i){do{var o=en;try{if(Ou(),za.current=Ga,ka){for(var u=Kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}ka=!1}if(Fr=0,fn=sn=Kt=null,Uo=!1,Fo=0,mc.current=null,o===null||o.return===null){on=1,Ho=i,en=null;break}e:{var m=n,E=o.return,U=o,G=i;if(i=_n,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ae=G,be=U,De=be.tag;if((be.mode&1)===0&&(De===0||De===11||De===15)){var Re=be.alternate;Re?(be.updateQueue=Re.updateQueue,be.memoizedState=Re.memoizedState,be.lanes=Re.lanes):(be.updateQueue=null,be.memoizedState=null)}var je=Uh(E);if(je!==null){je.flags&=-257,Fh(je,E,U,m,i),je.mode&1&&Nh(m,ae,i),i=je,G=ae;var $e=i.updateQueue;if($e===null){var Ke=new Set;Ke.add(G),i.updateQueue=Ke}else $e.add(G);break e}else{if((i&1)===0){Nh(m,ae,i),wc();break e}G=Error(t(426))}}else if(jt&&U.mode&1){var Jt=Uh(E);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Fh(Jt,E,U,m,i),Uu(As(G,U));break e}}m=G=As(G,U),on!==4&&(on=2),Go===null?Go=[m]:Go.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Dh(m,G,i);sh(m,J);break e;case 1:U=G;var W=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(ar===null||!ar.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Fe=Ih(m,U,i);sh(m,Fe);break e}}m=m.return}while(m!==null)}hp(o)}catch(Qe){i=Qe,en===o&&o!==null&&(en=o=o.return);continue}break}while(!0)}function fp(){var n=Ya.current;return Ya.current=Ga,n===null?Ga:n}function wc(){(on===0||on===3||on===2)&&(on=4),dn===null||(Or&268435455)===0&&($a&268435455)===0||cr(dn,_n)}function tl(n,i){var o=Lt;Lt|=2;var u=fp();(dn!==n||_n!==i)&&(ki=null,kr(n,i));do try{T_();break}catch(d){cp(n,d)}while(!0);if(Ou(),Lt=o,Ya.current=u,en!==null)throw Error(t(261));return dn=null,_n=0,on}function T_(){for(;en!==null;)dp(en)}function A_(){for(;en!==null&&!Ze();)dp(en)}function dp(n){var i=gp(n.alternate,n,qn);n.memoizedProps=n.pendingProps,i===null?hp(n):en=i,mc.current=null}function hp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=v_(o,i,qn),o!==null){en=o;return}}else{if(o=x_(o,i),o!==null){o.flags&=32767,en=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);on===0&&(on=5)}function Br(n,i,o){var u=Ut,d=ni.transition;try{ni.transition=null,Ut=1,R_(n,i,o,u)}finally{ni.transition=d,Ut=u}return null}function R_(n,i,o,u){do Ps();while(lr!==null);if((Lt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(a0(n,m),n===dn&&(en=dn=null,_n=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Za||(Za=!0,_p(Nt,function(){return Ps(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ni.transition,ni.transition=null;var E=Ut;Ut=1;var U=Lt;Lt|=4,mc.current=null,S_(n,o),ip(o,n),q0(wu),da=!!Eu,wu=Eu=null,n.current=o,M_(o),st(),Lt=U,Ut=E,ni.transition=m}else n.current=o;if(Za&&(Za=!1,lr=n,Qa=d),m=n.pendingLanes,m===0&&(ar=null),Ae(o.stateNode),zn(n,Xe()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ka)throw Ka=!1,n=vc,vc=null,n;return(Qa&1)!==0&&n.tag!==0&&Ps(),m=n.pendingLanes,(m&1)!==0?n===xc?Vo++:(Vo=0,xc=n):Vo=0,ir(),null}function Ps(){if(lr!==null){var n=td(Qa),i=ni.transition,o=Ut;try{if(ni.transition=null,Ut=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,Qa=0,(Lt&6)!==0)throw Error(t(331));var d=Lt;for(Lt|=4,Ye=n.current;Ye!==null;){var m=Ye,E=m.child;if((Ye.flags&16)!==0){var U=m.deletions;if(U!==null){for(var G=0;G<U.length;G++){var ae=U[G];for(Ye=ae;Ye!==null;){var be=Ye;switch(be.tag){case 0:case 11:case 15:Bo(8,be,m)}var De=be.child;if(De!==null)De.return=be,Ye=De;else for(;Ye!==null;){be=Ye;var Re=be.sibling,je=be.return;if(Qh(be),be===ae){Ye=null;break}if(Re!==null){Re.return=je,Ye=Re;break}Ye=je}}}var $e=m.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var Jt=Ke.sibling;Ke.sibling=null,Ke=Jt}while(Ke!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ye=E;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bo(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,Ye=J;break e}Ye=m.return}}var W=n.current;for(Ye=W;Ye!==null;){E=Ye;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,Ye=ne;else e:for(E=W;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:qa(9,U)}}catch(Qe){Qt(U,U.return,Qe)}if(U===E){Ye=null;break e}var Fe=U.sibling;if(Fe!==null){Fe.return=U.return,Ye=Fe;break e}Ye=U.return}}if(Lt=d,ir(),z&&typeof z.onPostCommitFiberRoot=="function")try{z.onPostCommitFiberRoot(mn,n)}catch{}u=!0}return u}finally{Ut=o,ni.transition=i}}return!1}function pp(n,i,o){i=As(o,i),i=Dh(n,i,1),n=sr(n,i,1),i=Cn(),n!==null&&(ho(n,1,i),zn(n,i))}function Qt(n,i,o){if(n.tag===3)pp(n,n,o);else for(;i!==null;){if(i.tag===3){pp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=As(o,n),n=Ih(i,n,1),i=sr(i,n,1),n=Cn(),i!==null&&(ho(i,1,n),zn(i,n));break}}i=i.return}}function C_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&o,dn===n&&(_n&o)===o&&(on===4||on===3&&(_n&130023424)===_n&&500>Xe()-_c?kr(n,0):gc|=o),zn(n,i)}function mp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vn,Vn<<=1,(Vn&130023424)===0&&(Vn=4194304)));var o=Cn();n=Fi(n,i),n!==null&&(ho(n,i,o),zn(n,o))}function b_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),mp(n,o)}function P_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),mp(n,o)}var gp;gp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Fn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Fn=!1,__(n,i,o);Fn=(n.flags&131072)!==0}else Fn=!1,jt&&(i.flags&1048576)!==0&&$d(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xa(n,i),n=i.pendingProps;var d=vs(i,xn.current);ws(i,o),d=Yu(null,i,u,n,d,o);var m=$u();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hu(i),d.updater=Va,i.stateNode=d,d._reactInternals=i,tc(i,u,n,o),i=sc(null,i,u,!0,m,o)):(i.tag=0,jt&&m&&Lu(i),Rn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Xa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=D_(u),n=fi(u,n),d){case 0:i=rc(null,i,u,n,o);break e;case 1:i=Gh(null,i,u,n,o);break e;case 11:i=Oh(null,i,u,n,o);break e;case 14:i=zh(null,i,u,fi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),rc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Gh(n,i,u,d,o);case 3:e:{if(Vh(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,rh(n,i),Fa(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=Wh(n,i,u,o,d);break e}else if(u!==d){d=As(Error(t(424)),i),i=Wh(n,i,u,o,d);break e}else for(jn=er(i.stateNode.containerInfo.firstChild),Xn=i,jt=!0,ci=null,o=nh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=zi(n,i,o);break e}Rn(n,i,u,o)}i=i.child}return i;case 5:return ah(i),n===null&&Nu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Tu(u,d)?E=null:m!==null&&Tu(u,m)&&(i.flags|=32),Hh(n,i),Rn(n,i,E,o),i.child;case 6:return n===null&&Nu(i),null;case 13:return Xh(n,i,o);case 4:return Gu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):Rn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Oh(n,i,u,d,o);case 7:return Rn(n,i,i.pendingProps,o),i.child;case 8:return Rn(n,i,i.pendingProps.children,o),i.child;case 12:return Rn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Bt(Ia,u._currentValue),u._currentValue=E,m!==null)if(ui(m.value,E)){if(m.children===d.children&&!Nn.current){i=zi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var G=U.firstContext;G!==null;){if(G.context===u){if(m.tag===1){G=Oi(-1,o&-o),G.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var be=ae.pending;be===null?G.next=G:(G.next=be.next,be.next=G),ae.pending=G}}m.lanes|=o,G=m.alternate,G!==null&&(G.lanes|=o),ku(m.return,o,i),U.lanes|=o;break}G=G.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),ku(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Rn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,o),d=ei(d),u=u(d),i.flags|=1,Rn(n,i,u,o),i.child;case 14:return u=i.type,d=fi(u,i.pendingProps),d=fi(u.type,d),zh(n,i,u,d,o);case 15:return kh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Xa(n,i),i.tag=1,Un(u)?(n=!0,Ra(i)):n=!1,ws(i,o),Ph(i,u,d),tc(i,u,d,o),sc(null,i,u,!0,n,o);case 19:return qh(n,i,o);case 22:return Bh(n,i,o)}throw Error(t(156,i.tag))};function _p(n,i){return oe(n,i)}function L_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,o,u){return new L_(n,i,o,u)}function Tc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function D_(n){if(typeof n=="function")return Tc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ee)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=ii(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nl(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")Tc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case L:return Hr(o.children,d,m,i);case q:E=8,d|=8;break;case _e:return n=ii(12,o,i,d|2),n.elementType=_e,n.lanes=m,n;case re:return n=ii(13,o,i,d),n.elementType=re,n.lanes=m,n;case B:return n=ii(19,o,i,d),n.elementType=B,n.lanes=m,n;case se:return il(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:E=10;break e;case D:E=9;break e;case le:E=11;break e;case ee:E=14;break e;case X:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Hr(n,i,o,u){return n=ii(7,n,u,i),n.lanes=o,n}function il(n,i,o,u){return n=ii(22,n,u,i),n.elementType=se,n.lanes=o,n.stateNode={isHidden:!1},n}function Ac(n,i,o){return n=ii(6,n,null,i),n.lanes=o,n}function Rc(n,i,o){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function I_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cc(n,i,o,u,d,m,E,U,G){return n=new I_(n,i,o,U,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ii(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hu(m),n}function N_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function vp(n){if(!n)return nr;n=n._reactInternals;e:{if(li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Un(o))return jd(n,o,i)}return i}function xp(n,i,o,u,d,m,E,U,G){return n=Cc(o,u,!0,n,d,m,E,U,G),n.context=vp(null),o=n.current,u=Cn(),d=ur(o),m=Oi(u,d),m.callback=i??null,sr(o,m,d),n.current.lanes=d,ho(n,d,u),zn(n,u),n}function rl(n,i,o,u){var d=i.current,m=Cn(),E=ur(d);return o=vp(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(d,i,E),n!==null&&(pi(n,d,E,m),Ua(n,d,E)),E}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function bc(n,i){yp(n,i),(n=n.alternate)&&yp(n,i)}function U_(){return null}var Sp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pc(n){this._internalRoot=n}ol.prototype.render=Pc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Pc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){rl(null,n,null,null)}),i[Di]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=rd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,n),o===0&&ad(n)}};function Lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function F_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ae=sl(E);m.call(ae)}}var E=xp(i,u,n,0,null,!1,!1,"",Mp);return n._reactRootContainer=E,n[Di]=E.current,Ro(n.nodeType===8?n.parentNode:n),zr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ae=sl(G);U.call(ae)}}var G=Cc(n,0,!1,null,null,!1,!1,"",Mp);return n._reactRootContainer=G,n[Di]=G.current,Ro(n.nodeType===8?n.parentNode:n),zr(function(){rl(i,G,o,u)}),G}function ll(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var G=sl(E);U.call(G)}}rl(i,E,n,d)}else E=F_(o,i,n,d,u);return sl(E)}nd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Pt(i.pendingLanes);o!==0&&(tu(i,o|1),zn(i,Xe()),(Lt&6)===0&&(bs=Xe()+500,ir()))}break;case 13:zr(function(){var u=Fi(n,1);if(u!==null){var d=Cn();pi(u,n,1,d)}}),bc(n,1)}},nu=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var o=Cn();pi(i,n,134217728,o)}bc(n,134217728)}},id=function(n){if(n.tag===13){var i=ur(n),o=Fi(n,i);if(o!==null){var u=Cn();pi(o,n,i,u)}bc(n,i)}},rd=function(){return Ut},sd=function(n,i){var o=Ut;try{return Ut=n,i()}finally{Ut=o}},qe=function(n,i,o){switch(i){case"input":if(xt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ta(u);if(!d)throw Error(t(90));Q(u),xt(u,d)}}}break;case"textarea":ce(n,o);break;case"select":i=o.value,i!=null&&I(n,!!o.multiple,i,!1)}},dt=Mc,Rt=zr;var O_={usingClientEntryPoint:!1,Events:[Po,gs,Ta,Ne,Be,Mc]},Wo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z_={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ue(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{mn=ul.inject(z_),z=ul}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,kn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(i))throw Error(t(200));return N_(n,i,null,o)},kn.createRoot=function(n,i){if(!Lc(n))throw Error(t(299));var o=!1,u="",d=Sp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cc(n,1,!1,null,null,o,!1,u,d),n[Di]=i.current,Ro(n.nodeType===8?n.parentNode:n),new Pc(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ue(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return zr(n)},kn.hydrate=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,o)},kn.hydrateRoot=function(n,i,o){if(!Lc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=Sp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=xp(i,null,n,1,o??null,d,!1,m,E),n[Di]=i.current,Ro(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ol(i)},kn.render=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,o)},kn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},kn.unstable_batchedUpdates=Mc,kn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,o,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Pp;function q_(){if(Pp)return Nc.exports;Pp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nc.exports=j_(),Nc.exports}var Lp;function Y_(){if(Lp)return cl;Lp=1;var s=q_();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var $_=Y_();const K_=wg($_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="162",Z_=0,Dp=1,Q_=2,Tg=1,J_=2,Xi=3,Tr=0,Gn=1,Zn=2,Sr=0,to=1,Ip=2,Np=3,Up=4,ev=5,Zr=100,tv=101,nv=102,Fp=103,Op=104,iv=200,rv=201,sv=202,ov=203,bf=204,Pf=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,gv=0,_v=1,vv=2,Vl=3,xv=4,yv=5,Sv=6,Mv=7,Ag=0,Ev=1,wv=2,Mr=0,Tv=1,Av=2,Rv=3,Cv=4,bv=5,Pv=6,Lv=7,Rg=300,io=301,ro=302,Lf=303,Df=304,Kl=306,If=1e3,vi=1001,Nf=1002,Ln=1003,zp=1004,jo=1005,Bn=1006,Oc=1007,Jr=1008,Er=1009,Dv=1010,Iv=1011,Wf=1012,Cg=1013,yr=1014,ji=1015,ra=1016,bg=1017,Pg=1018,es=1020,Nv=1021,xi=1023,Uv=1024,Fv=1025,ts=1026,so=1027,Ov=1028,Lg=1029,zv=1030,Dg=1031,Ig=1033,zc=33776,kc=33777,Bc=33778,Hc=33779,kp=35840,Bp=35841,Hp=35842,Gp=35843,Ng=36196,Vp=37492,Wp=37496,Xp=37808,jp=37809,qp=37810,Yp=37811,$p=37812,Kp=37813,Zp=37814,Qp=37815,Jp=37816,em=37817,tm=37818,nm=37819,im=37820,rm=37821,Gc=36492,sm=36494,om=36495,kv=36283,am=36284,lm=36285,um=36286,Bv=3200,Hv=3201,Ug=0,Gv=1,xr="",Ai="srgb",Rr="srgb-linear",Xf="display-p3",Zl="display-p3-linear",Wl="linear",Wt="srgb",Xl="rec709",jl="p3",Ls=7680,cm=519,Vv=512,Wv=513,Xv=514,Fg=515,jv=516,qv=517,Yv=518,$v=519,Uf=35044,fm="300 es",Ff=1035,qi=2e3,ql=2001;class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,Of=180/Math.PI;function wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function Kv(s,e){return(s%e+e)%e}function Wc(s,e,t){return(1-t)*s+t*e}function dm(s){return(s&s-1)===0&&s!==0}function zf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,r,a,l,f,c,h,p){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p)}set(e,t,r,a,l,f,c,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],p=r[1],_=r[4],g=r[7],x=r[2],S=r[5],M=r[8],w=a[0],y=a[3],v=a[6],b=a[1],R=a[4],P=a[7],F=a[2],O=a[5],L=a[8];return l[0]=f*w+c*b+h*F,l[3]=f*y+c*R+h*O,l[6]=f*v+c*P+h*L,l[1]=p*w+_*b+g*F,l[4]=p*y+_*R+g*O,l[7]=p*v+_*P+g*L,l[2]=x*w+S*b+M*F,l[5]=x*y+S*R+M*O,l[8]=x*v+S*P+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8];return t*f*_-t*c*p-r*l*_+r*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=_*f-c*p,x=c*h-_*l,S=p*l-f*h,M=t*g+r*x+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*p-_*r)*w,e[2]=(c*r-a*f)*w,e[3]=x*w,e[4]=(_*t-a*h)*w,e[5]=(a*l-c*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(f*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new wt;function Og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zv(){const s=Yl("canvas");return s.style.display="block",s}const hm={};function zg(s){s in hm||(hm[s]=!0,console.warn(s))}const pm=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Rr]:{transfer:Wl,primaries:Xl,toReference:s=>s,fromReference:s=>s},[Ai]:{transfer:Wt,primaries:Xl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zl]:{transfer:Wl,primaries:jl,toReference:s=>s.applyMatrix3(mm),fromReference:s=>s.applyMatrix3(pm)},[Xf]:{transfer:Wt,primaries:jl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(mm),fromReference:s=>s.applyMatrix3(pm).convertLinearToSRGB()}},Qv=new Set([Rr,Zl]),kt={enabled:!0,_workingColorSpace:Rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Qv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=fl[e].toReference,a=fl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return fl[s].primaries},getTransfer:function(s){return s===xr?Wl:fl[s].transfer}};function no(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Yl("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=no(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(no(t[r]/255)*255):t[r]=no(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(qc(a[f].image)):l.push(qc(a[f]))}else l=qc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ex=0;class Dn extends lo{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=vi,a=vi,l=Bn,f=Jr,c=xi,h=Er,p=Dn.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=wr(),this.name="",this.source=new Bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Rg;Dn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,r=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],x=h[1],S=h[5],M=h[9],w=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(S+1)/2,F=(v+1)/2,O=(_+x)/4,L=(g+w)/4,q=(M+y)/4;return R>P&&R>F?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=O/r,l=L/r):P>F?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=O/a,l=q/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=L/l,a=q/l),this.set(r,a,l,t),this}let b=Math.sqrt((y-M)*(y-M)+(g-w)*(g-w)+(x-_)*(x-_));return Math.abs(b)<.001&&(b=1),this.x=(y-M)/b,this.y=(g-w)/b,this.z=(x-_)/b,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends lo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends tx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hg extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nx extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const x=l[f+0],S=l[f+1],M=l[f+2],w=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(c===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(g!==w||h!==x||p!==S||_!==M){let y=1-c;const v=h*x+p*S+_*M+g*w,b=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const F=Math.sqrt(R),O=Math.atan2(F,v*b);y=Math.sin(y*O)/F,c=Math.sin(c*O)/F}const P=c*b;if(h=h*y+x*P,p=p*y+S*P,_=_*y+M*P,g=g*y+w*P,y===1-c){const F=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=F,p*=F,_*=F,g*=F}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[f],x=l[f+1],S=l[f+2],M=l[f+3];return e[t]=c*M+_*g+h*S-p*x,e[t+1]=h*M+_*x+p*g-c*S,e[t+2]=p*M+_*S+c*x-h*g,e[t+3]=_*M-c*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(r/2),_=c(a/2),g=c(l/2),x=h(r/2),S=h(a/2),M=h(l/2);switch(f){case"XYZ":this._x=x*_*g+p*S*M,this._y=p*S*g-x*_*M,this._z=p*_*M+x*S*g,this._w=p*_*g-x*S*M;break;case"YXZ":this._x=x*_*g+p*S*M,this._y=p*S*g-x*_*M,this._z=p*_*M-x*S*g,this._w=p*_*g+x*S*M;break;case"ZXY":this._x=x*_*g-p*S*M,this._y=p*S*g+x*_*M,this._z=p*_*M+x*S*g,this._w=p*_*g-x*S*M;break;case"ZYX":this._x=x*_*g-p*S*M,this._y=p*S*g+x*_*M,this._z=p*_*M-x*S*g,this._w=p*_*g+x*S*M;break;case"YZX":this._x=x*_*g+p*S*M,this._y=p*S*g+x*_*M,this._z=p*_*M-x*S*g,this._w=p*_*g-x*S*M;break;case"XZY":this._x=x*_*g-p*S*M,this._y=p*S*g-x*_*M,this._z=p*_*M+x*S*g,this._w=p*_*g+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],_=t[6],g=t[10],x=r+c+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+f*c+a*p-l*h,this._y=a*_+f*h+l*c-r*p,this._z=l*_+f*p+r*h-a*c,this._w=f*_-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,c),g=Math.sin((1-t)*_)/p,x=Math.sin(t*_)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*a-c*r),_=2*(c*t-l*a),g=2*(l*r-f*t);return this.x=t+h*p+f*g-c*_,this.y=r+h*_+c*p-l*g,this.z=a+h*g+l*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new V,gm=new oa;class aa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,mi):mi.fromBufferAttribute(l,f),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),hl.subVectors(this.max,qo),Is.subVectors(e.a,qo),Ns.subVectors(e.b,qo),Us.subVectors(e.c,qo),hr.subVectors(Ns,Is),pr.subVectors(Us,Ns),Gr.subVectors(Is,Us);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!$c(t,Is,Ns,Us,hl)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Is,Ns,Us,hl))?!1:(pl.crossVectors(hr,pr),t=[pl.x,pl.y,pl.z],$c(t,Is,Ns,Us,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,dl=new aa,Is=new V,Ns=new V,Us=new V,hr=new V,pr=new V,Gr=new V,qo=new V,hl=new V,pl=new V,Vr=new V;function $c(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Vr.fromArray(s,l);const c=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),_=r.dot(Vr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>c)return!1}return!0}const ix=new aa,Yo=new V,Kc=new V;class la{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ix.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Yo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Kc)),this.expandByPoint(Yo.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new V,Zc=new V,ml=new V,mr=new V,Qc=new V,gl=new V,Jc=new V;class jf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Zc.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Zc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(ml),c=mr.dot(this.direction),h=-mr.dot(ml),p=mr.lengthSq(),_=Math.abs(1-f*f);let g,x,S,M;if(_>0)if(g=f*h-c,x=f*c-h,M=l*_,g>=0)if(x>=-M)if(x<=M){const w=1/_;g*=w,x*=w,S=g*(g+f*x+2*c)+x*(f*g+x+2*h)+p}else x=l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;else x<=-M?(g=Math.max(0,-(-f*l+c)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=M?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(f*l+c)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=f>0?-l:l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Zc).addScaledVector(ml,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),g>=0?(c=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(c=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){Qc.subVectors(t,e),gl.subVectors(r,e),Jc.crossVectors(Qc,gl);let f=this.direction.dot(Jc),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;mr.subVectors(this.origin,e);const h=c*this.direction.dot(gl.crossVectors(mr,gl));if(h<0)return null;const p=c*this.direction.dot(Qc.cross(mr));if(p<0||h+p>f)return null;const _=-c*mr.dot(Jc);return _<0?null:this.at(_/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,f,c,h,p,_,g,x,S,M,w,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p,_,g,x,S,M,w,y)}set(e,t,r,a,l,f,c,h,p,_,g,x,S,M,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=f,v[9]=c,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=M,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),f=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=f*_,S=f*g,M=c*_,w=c*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+M*p,t[5]=x-w*p,t[9]=-c*h,t[2]=w-x*p,t[6]=M+S*p,t[10]=f*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,M=p*_,w=p*g;t[0]=x+w*c,t[4]=M*c-S,t[8]=f*p,t[1]=f*g,t[5]=f*_,t[9]=-c,t[2]=S*c-M,t[6]=w+x*c,t[10]=f*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,M=p*_,w=p*g;t[0]=x-w*c,t[4]=-f*g,t[8]=M+S*c,t[1]=S+M*c,t[5]=f*_,t[9]=w-x*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const x=f*_,S=f*g,M=c*_,w=c*g;t[0]=h*_,t[4]=M*p-S,t[8]=x*p+w,t[1]=h*g,t[5]=w*p+x,t[9]=S*p-M,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*p,M=c*h,w=c*p;t[0]=h*_,t[4]=w-x*g,t[8]=M*g+S,t[1]=g,t[5]=f*_,t[9]=-c*_,t[2]=-p*_,t[6]=S*g+M,t[10]=x-w*g}else if(e.order==="XZY"){const x=f*h,S=f*p,M=c*h,w=c*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=x*g+w,t[5]=f*_,t[9]=S*g-M,t[2]=M*g-S,t[6]=c*_,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,sx)}lookAt(e,t,r){const a=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),gr.crossVectors(r,Yn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),gr.crossVectors(r,Yn)),gr.normalize(),_l.crossVectors(Yn,gr),a[0]=gr.x,a[4]=_l.x,a[8]=Yn.x,a[1]=gr.y,a[5]=_l.y,a[9]=Yn.y,a[2]=gr.z,a[6]=_l.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],p=r[12],_=r[1],g=r[5],x=r[9],S=r[13],M=r[2],w=r[6],y=r[10],v=r[14],b=r[3],R=r[7],P=r[11],F=r[15],O=a[0],L=a[4],q=a[8],_e=a[12],T=a[1],D=a[5],le=a[9],re=a[13],B=a[2],ee=a[6],X=a[10],se=a[14],H=a[3],$=a[7],Z=a[11],N=a[15];return l[0]=f*O+c*T+h*B+p*H,l[4]=f*L+c*D+h*ee+p*$,l[8]=f*q+c*le+h*X+p*Z,l[12]=f*_e+c*re+h*se+p*N,l[1]=_*O+g*T+x*B+S*H,l[5]=_*L+g*D+x*ee+S*$,l[9]=_*q+g*le+x*X+S*Z,l[13]=_*_e+g*re+x*se+S*N,l[2]=M*O+w*T+y*B+v*H,l[6]=M*L+w*D+y*ee+v*$,l[10]=M*q+w*le+y*X+v*Z,l[14]=M*_e+w*re+y*se+v*N,l[3]=b*O+R*T+P*B+F*H,l[7]=b*L+R*D+P*ee+F*$,l[11]=b*q+R*le+P*X+F*Z,l[15]=b*_e+R*re+P*se+F*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],M=e[3],w=e[7],y=e[11],v=e[15];return M*(+l*h*g-a*p*g-l*c*x+r*p*x+a*c*S-r*h*S)+w*(+t*h*S-t*p*x+l*f*x-a*f*S+a*p*_-l*h*_)+y*(+t*p*g-t*c*S-l*f*g+r*f*S+l*c*_-r*p*_)+v*(-a*c*_-t*h*g+t*c*x+a*f*g-r*f*x+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],M=e[12],w=e[13],y=e[14],v=e[15],b=g*y*p-w*x*p+w*h*S-c*y*S-g*h*v+c*x*v,R=M*x*p-_*y*p-M*h*S+f*y*S+_*h*v-f*x*v,P=_*w*p-M*g*p+M*c*S-f*w*S-_*c*v+f*g*v,F=M*g*h-_*w*h-M*c*x+f*w*x+_*c*y-f*g*y,O=t*b+r*R+a*P+l*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=b*L,e[1]=(w*x*l-g*y*l-w*a*S+r*y*S+g*a*v-r*x*v)*L,e[2]=(c*y*l-w*h*l+w*a*p-r*y*p-c*a*v+r*h*v)*L,e[3]=(g*h*l-c*x*l-g*a*p+r*x*p+c*a*S-r*h*S)*L,e[4]=R*L,e[5]=(_*y*l-M*x*l+M*a*S-t*y*S-_*a*v+t*x*v)*L,e[6]=(M*h*l-f*y*l-M*a*p+t*y*p+f*a*v-t*h*v)*L,e[7]=(f*x*l-_*h*l+_*a*p-t*x*p-f*a*S+t*h*S)*L,e[8]=P*L,e[9]=(M*g*l-_*w*l-M*r*S+t*w*S+_*r*v-t*g*v)*L,e[10]=(f*w*l-M*c*l+M*r*p-t*w*p-f*r*v+t*c*v)*L,e[11]=(_*c*l-f*g*l-_*r*p+t*g*p+f*r*S-t*c*S)*L,e[12]=F*L,e[13]=(_*w*a-M*g*a+M*r*x-t*w*x-_*r*y+t*g*y)*L,e[14]=(M*c*a-f*w*a-M*r*h+t*w*h+f*r*y-t*c*y)*L,e[15]=(f*g*a-_*c*a+_*r*h-t*g*h-f*r*x+t*c*x)*L,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,p=l*f,_=l*c;return this.set(p*f+r,p*c-a*h,p*h+a*c,0,p*c+a*h,_*c+r,_*h-a*f,0,p*h-a*c,_*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,_=f+f,g=c+c,x=l*p,S=l*_,M=l*g,w=f*_,y=f*g,v=c*g,b=h*p,R=h*_,P=h*g,F=r.x,O=r.y,L=r.z;return a[0]=(1-(w+v))*F,a[1]=(S+P)*F,a[2]=(M-R)*F,a[3]=0,a[4]=(S-P)*O,a[5]=(1-(x+v))*O,a[6]=(y+b)*O,a[7]=0,a[8]=(M+R)*L,a[9]=(y-b)*L,a[10]=(1-(x+w))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const f=Fs.set(a[4],a[5],a[6]).length(),c=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],gi.copy(this);const p=1/l,_=1/f,g=1/c;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=qi){const h=this.elements,p=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),x=(r+a)/(r-a);let S,M;if(c===qi)S=-(f+l)/(f-l),M=-2*f*l/(f-l);else if(c===ql)S=-f/(f-l),M=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=qi){const h=this.elements,p=1/(t-e),_=1/(r-a),g=1/(f-l),x=(t+e)*p,S=(r+a)*_;let M,w;if(c===qi)M=(f+l)*g,w=-2*g;else if(c===ql)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new V,gi=new Ht,rx=new V(0,0,0),sx=new V(1,1,1),gr=new V,_l=new V,Yn=new V,_m=new Ht,vm=new oa;class bi{constructor(e=0,t=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ox=0;const xm=new V,Os=new oa,Gi=new Ht,vl=new V,$o=new V,ax=new V,lx=new oa,ym=new V(1,0,0),Sm=new V(0,1,0),Mm=new V(0,0,1),ux={type:"added"},cx={type:"removed"},ef={type:"childadded",child:null},tf={type:"childremoved",child:null};class rn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new V,t=new bi,r=new oa,a=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new wt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt($o,vl,this.up):Gi.lookAt(vl,$o,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Gi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ux),ef.child=e,this.dispatchEvent(ef),ef.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cx),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),M=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=a,r;function f(c){const h=[];for(const p in c){const _=c[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new V,Vi=new V,nf=new V,Wi=new V,zs=new V,ks=new V,Em=new V,rf=new V,sf=new V,of=new V;class yi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){_i.subVectors(a,t),Vi.subVectors(r,t),nf.subVectors(e,t);const f=_i.dot(_i),c=_i.dot(Vi),h=_i.dot(nf),p=Vi.dot(Vi),_=Vi.dot(nf),g=f*p-c*c;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-c*_)*x,M=(f*_-c*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(f,Wi.y),h.addScaledVector(c,Wi.z),h)}static isFrontFacing(e,t,r,a){return _i.subVectors(r,t),Vi.subVectors(e,t),_i.cross(Vi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),_i.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;zs.subVectors(a,r),ks.subVectors(l,r),rf.subVectors(e,r);const h=zs.dot(rf),p=ks.dot(rf);if(h<=0&&p<=0)return t.copy(r);sf.subVectors(e,a);const _=zs.dot(sf),g=ks.dot(sf);if(_>=0&&g<=_)return t.copy(a);const x=h*g-_*p;if(x<=0&&h>=0&&_<=0)return f=h/(h-_),t.copy(r).addScaledVector(zs,f);of.subVectors(e,l);const S=zs.dot(of),M=ks.dot(of);if(M>=0&&S<=M)return t.copy(l);const w=S*p-h*M;if(w<=0&&p>=0&&M<=0)return c=p/(p-M),t.copy(r).addScaledVector(ks,c);const y=_*M-S*g;if(y<=0&&g-_>=0&&S-M>=0)return Em.subVectors(l,a),c=(g-_)/(g-_+(S-M)),t.copy(a).addScaledVector(Em,c);const v=1/(y+w+x);return f=w*v,c=x*v,t.copy(r).addScaledVector(zs,f).addScaledVector(ks,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},xl={h:0,s:0,l:0};function af(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=kt.workingColorSpace){if(e=Kv(e,1),t=Tn(t,0,1),r=Tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=af(f,l,e+1/3),this.g=af(f,l,e),this.b=af(f,l,e-1/3)}return kt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ai){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return kt.fromWorkingColorSpace(wn.copy(this),e),Math.round(Tn(wn.r*255,0,255))*65536+Math.round(Tn(wn.g*255,0,255))*256+Math.round(Tn(wn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(wn.copy(this),t);const r=wn.r,a=wn.g,l=wn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const _=(c+f)/2;if(c===f)h=0,p=0;else{const g=f-c;switch(p=_<=.5?g/(f+c):g/(2-f-c),f){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Ai){kt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,a=wn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(xl);const r=Wc(_r.h,xl.h,t),a=Wc(_r.s,xl.s,t),l=Wc(_r.l,xl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Tt;Tt.NAMES=Vg;let fx=0;class Cr extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=to,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Pf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bf&&(r.blendSrc=this.blendSrc),this.blendDst!==Pf&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class na extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new V,yl=new vt;class oi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Uf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ci(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uf&&(e.usage=this.usage),e}}class Wg extends oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Xg extends oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ft extends oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let dx=0;const ri=new Ht,lf=new rn,Bs=new V,$n=new aa,Ko=new aa,pn=new V;class nn extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Xg:Wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];Ko.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors($n.min,Ko.min),$n.expandByPoint(pn),pn.addVectors($n.max,Ko.max),$n.expandByPoint(pn)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(pn));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)pn.fromBufferAttribute(c,p),h&&(Bs.fromBufferAttribute(e,p),pn.add(Bs)),a=Math.max(a,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let q=0;q<r.count;q++)c[q]=new V,h[q]=new V;const p=new V,_=new V,g=new V,x=new vt,S=new vt,M=new vt,w=new V,y=new V;function v(q,_e,T){p.fromBufferAttribute(r,q),_.fromBufferAttribute(r,_e),g.fromBufferAttribute(r,T),x.fromBufferAttribute(l,q),S.fromBufferAttribute(l,_e),M.fromBufferAttribute(l,T),_.sub(p),g.sub(p),S.sub(x),M.sub(x);const D=1/(S.x*M.y-M.x*S.y);isFinite(D)&&(w.copy(_).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(D),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-M.x).multiplyScalar(D),c[q].add(w),c[_e].add(w),c[T].add(w),h[q].add(y),h[_e].add(y),h[T].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let q=0,_e=b.length;q<_e;++q){const T=b[q],D=T.start,le=T.count;for(let re=D,B=D+le;re<B;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const R=new V,P=new V,F=new V,O=new V;function L(q){F.fromBufferAttribute(a,q),O.copy(F);const _e=c[q];R.copy(_e),R.sub(F.multiplyScalar(F.dot(_e))).normalize(),P.crossVectors(O,_e);const D=P.dot(h[q])<0?-1:1;f.setXYZW(q,R.x,R.y,R.z,D)}for(let q=0,_e=b.length;q<_e;++q){const T=b[q],D=T.start,le=T.count;for(let re=D,B=D+le;re<B;re+=3)L(e.getX(re+0)),L(e.getX(re+1)),L(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new V,l=new V,f=new V,c=new V,h=new V,p=new V,_=new V,g=new V;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,y),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),c.fromBufferAttribute(r,M),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),c.add(_),h.add(_),p.add(_),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),f.fromBufferAttribute(t,x+2),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(c,h){const p=c.array,_=c.itemSize,g=c.normalized,x=new p.constructor(h.length*_);let S=0,M=0;for(let w=0,y=h.length;w<y;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*_;for(let v=0;v<_;v++)x[M++]=p[S++]}return new oi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Ht,Wr=new jf,Sl=new la,Tm=new V,Hs=new V,Gs=new V,Vs=new V,uf=new V,Ml=new V,El=new vt,wl=new vt,Tl=new vt,Am=new V,Rm=new V,Cm=new V,Al=new V,Rl=new V;class Ot extends rn{constructor(e=new nn,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Ml.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=c[h],g=l[h];_!==0&&(uf.fromBufferAttribute(g,e),f?Ml.addScaledVector(uf,_):Ml.addScaledVector(uf.sub(t),_))}t.add(Ml)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Sl,Tm)===null||Wr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let M=0,w=x.length;M<w;M++){const y=x[M],v=f[y.materialIndex],b=Math.max(y.start,S.start),R=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,F=R;P<F;P+=3){const O=c.getX(P),L=c.getX(P+1),q=c.getX(P+2);a=Cl(this,v,e,r,p,_,g,O,L,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let y=M,v=w;y<v;y+=3){const b=c.getX(y),R=c.getX(y+1),P=c.getX(y+2);a=Cl(this,f,e,r,p,_,g,b,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let M=0,w=x.length;M<w;M++){const y=x[M],v=f[y.materialIndex],b=Math.max(y.start,S.start),R=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,F=R;P<F;P+=3){const O=P,L=P+1,q=P+2;a=Cl(this,v,e,r,p,_,g,O,L,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=M,v=w;y<v;y+=3){const b=y,R=y+1,P=y+2;a=Cl(this,f,e,r,p,_,g,b,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function hx(s,e,t,r,a,l,f,c){let h;if(e.side===Gn?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Tr,c),h===null)return null;Rl.copy(c),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function Cl(s,e,t,r,a,l,f,c,h,p){s.getVertexPosition(c,Hs),s.getVertexPosition(h,Gs),s.getVertexPosition(p,Vs);const _=hx(s,e,t,r,Hs,Gs,Vs,Al);if(_){a&&(El.fromBufferAttribute(a,c),wl.fromBufferAttribute(a,h),Tl.fromBufferAttribute(a,p),_.uv=yi.getInterpolation(Al,Hs,Gs,Vs,El,wl,Tl,new vt)),l&&(El.fromBufferAttribute(l,c),wl.fromBufferAttribute(l,h),Tl.fromBufferAttribute(l,p),_.uv1=yi.getInterpolation(Al,Hs,Gs,Vs,El,wl,Tl,new vt)),f&&(Am.fromBufferAttribute(f,c),Rm.fromBufferAttribute(f,h),Cm.fromBufferAttribute(f,p),_.normal=yi.getInterpolation(Al,Hs,Gs,Vs,Am,Rm,Cm,new V),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:c,b:h,c:p,normal:new V,materialIndex:0};yi.getNormal(Hs,Gs,Vs,g.normal),_.face=g}return _}class Hn extends nn{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],_=[],g=[];let x=0,S=0;M("z","y","x",-1,-1,r,t,e,f,l,0),M("z","y","x",1,-1,r,t,-e,f,l,1),M("x","z","y",1,1,e,r,t,a,f,2),M("x","z","y",1,-1,e,r,-t,a,f,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2));function M(w,y,v,b,R,P,F,O,L,q,_e){const T=P/L,D=F/q,le=P/2,re=F/2,B=O/2,ee=L+1,X=q+1;let se=0,H=0;const $=new V;for(let Z=0;Z<X;Z++){const N=Z*D-re;for(let Y=0;Y<ee;Y++){const Ie=Y*T-le;$[w]=Ie*b,$[y]=N*R,$[v]=B,p.push($.x,$.y,$.z),$[w]=0,$[y]=0,$[v]=O>0?1:-1,_.push($.x,$.y,$.z),g.push(Y/L),g.push(1-Z/q),se+=1}}for(let Z=0;Z<q;Z++)for(let N=0;N<L;N++){const Y=x+N+ee*Z,Ie=x+N+ee*(Z+1),j=x+(N+1)+ee*(Z+1),de=x+(N+1)+ee*Z;h.push(Y,Ie,de),h.push(Ie,j,de),H+=6}c.addGroup(S,H,_e),S+=H,x+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=oo(s[t]);for(const a in r)e[a]=r[a]}return e}function px(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jg(s){return s.getRenderTarget()===null?s.outputColorSpace:kt.workingColorSpace}const mx={clone:oo,merge:Pn};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class qg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new V,bm=new vt,Pm=new vt;class Kn extends qg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Pm),t.subVectors(Pm,bm)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class vx extends rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const f=new Kn(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const c=new Kn(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const h=new Kn(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const p=new Kn(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const p of t)this.remove(p);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ql)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(g,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Yg extends Dn{constructor(e,t,r,a,l,f,c,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:io,super(e,t,r,a,l,f,c,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xx extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Yg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Hn(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Sr});l.uniforms.tEquirect.value=t;const f=new Ot(a,l),c=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Bn),new vx(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const cf=new V,yx=new V,Sx=new wt;class $r{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=cf.subVectors(r,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(cf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Sx.getNormalMatrix(e),a=this.coplanarPoint(cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new la,bl=new V;class qf{constructor(e=new $r,t=new $r,r=new $r,a=new $r,l=new $r,f=new $r){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],p=a[4],_=a[5],g=a[6],x=a[7],S=a[8],M=a[9],w=a[10],y=a[11],v=a[12],b=a[13],R=a[14],P=a[15];if(r[0].setComponents(h-l,x-p,y-S,P-v).normalize(),r[1].setComponents(h+l,x+p,y+S,P+v).normalize(),r[2].setComponents(h+f,x+_,y+M,P+b).normalize(),r[3].setComponents(h-f,x-_,y-M,P-b).normalize(),r[4].setComponents(h-c,x-g,y-w,P-R).normalize(),t===qi)r[5].setComponents(h+c,x+g,y+w,P+R).normalize();else if(t===ql)r[5].setComponents(c,g,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $g(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Mx(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,x=p.usage,S=g.byteLength,M=s.createBuffer();s.bindBuffer(_,M),s.bufferData(_,g,x),p.onUploadCallback();let w;if(g instanceof Float32Array)w=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)w=s.SHORT;else if(g instanceof Uint32Array)w=s.UNSIGNED_INT;else if(g instanceof Int32Array)w=s.INT;else if(g instanceof Int8Array)w=s.BYTE;else if(g instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:w,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,_,g){const x=_.array,S=_._updateRange,M=_.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&M.length===0&&s.bufferSubData(g,0,x),M.length!==0){for(let w=0,y=M.length;w<y;w++){const v=M[w];t?s.bufferSubData(g,v.start*x.BYTES_PER_ELEMENT,x,v.start,v.count):s.bufferSubData(g,v.start*x.BYTES_PER_ELEMENT,x.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):s.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,a(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,_),g.version=p.version}}return{get:f,remove:c,update:h}}class ao extends nn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),p=c+1,_=h+1,g=e/c,x=t/h,S=[],M=[],w=[],y=[];for(let v=0;v<_;v++){const b=v*x-f;for(let R=0;R<p;R++){const P=R*g-l;M.push(P,-b,0),w.push(0,0,1),y.push(R/c),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let b=0;b<c;b++){const R=b+p*v,P=b+p*(v+1),F=b+1+p*(v+1),O=b+1+p*v;S.push(R,P,O),S.push(P,F,O)}this.setIndex(S),this.setAttribute("position",new Ft(M,3)),this.setAttribute("normal",new Ft(w,3)),this.setAttribute("uv",new Ft(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ix=`vec3 transformed = vec3( position );
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`
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
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,fy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
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
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
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
#endif`,My=`struct PhysicalMaterial {
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
}`,Ey=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iy=`#if defined( USE_POINTS_UV )
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
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lS=`float getShadowMask() {
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
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
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
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wS=`uniform sampler2D t2D;
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RS=`varying vec3 vWorldDirection;
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
}`,bS=`#include <common>
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
}`,PS=`#if DEPTH_PACKING == 3200
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
}`,LS=`#define DISTANCE
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
}`,DS=`#define DISTANCE
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
}`,IS=`varying vec3 vWorldDirection;
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
}`,FS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,zS=`uniform vec3 diffuse;
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
}`,kS=`#define LAMBERT
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
}`,BS=`#define LAMBERT
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
}`,HS=`#define MATCAP
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
}`,GS=`#define MATCAP
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
}`,VS=`#define NORMAL
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
}`,WS=`#define NORMAL
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
}`,XS=`#define PHONG
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
}`,jS=`#define PHONG
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
}`,qS=`#define STANDARD
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
}`,$S=`#define TOON
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
}`,KS=`#define TOON
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
}`,ZS=`uniform float size;
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
}`,QS=`uniform vec3 diffuse;
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
}`,eM=`uniform vec3 color;
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
}`,tM=`uniform float rotation;
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
}`,nM=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Ex,alphahash_pars_fragment:wx,alphamap_fragment:Tx,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:bx,aomap_pars_fragment:Px,batching_pars_vertex:Lx,batching_vertex:Dx,begin_vertex:Ix,beginnormal_vertex:Nx,bsdfs:Ux,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:zx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Wx,color_vertex:Xx,common:jx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:$x,displacementmap_vertex:Kx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Qx,colorspace_fragment:Jx,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:gy,envmap_vertex:sy,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:ly,fog_pars_fragment:uy,gradientmap_pars_fragment:cy,lightmap_fragment:fy,lightmap_pars_fragment:dy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:xy,lights_phong_pars_fragment:yy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:Ey,lights_fragment_maps:wy,lights_fragment_end:Ty,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:by,map_fragment:Py,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Iy,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Fy,morphcolor_vertex:Oy,morphnormal_vertex:zy,morphtarget_pars_vertex:ky,morphtarget_vertex:By,normal_fragment_begin:Hy,normal_fragment_maps:Gy,normal_pars_fragment:Vy,normal_pars_vertex:Wy,normal_vertex:Xy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Ky,opaque_fragment:Zy,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:uS,skinning_pars_vertex:cS,skinning_vertex:fS,skinnormal_vertex:dS,specularmap_fragment:hS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:yS,uv_vertex:SS,worldpos_vertex:MS,background_vert:ES,background_frag:wS,backgroundCube_vert:TS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:CS,depth_vert:bS,depth_frag:PS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:IS,equirect_frag:NS,linedashed_vert:US,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:zS,meshlambert_vert:kS,meshlambert_frag:BS,meshmatcap_vert:HS,meshmatcap_frag:GS,meshnormal_vert:VS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:jS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},He={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Ri={basic:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Pn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Pn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Pn([He.points,He.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Pn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Pn([He.common,He.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Pn([He.sprite,He.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Pn([He.common,He.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Pn([He.lights,He.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Ri.physical={uniforms:Pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Pl={r:0,b:0,g:0},jr=new bi,iM=new Ht;function rM(s,e,t,r,a,l,f){const c=new Tt(0);let h=l===!0?0:1,p,_,g=null,x=0,S=null;function M(y,v){let b=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?t:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),b=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Kl)?(_===void 0&&(_=new Ot(new Hn(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:oo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),jr.copy(v.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(jr)),_.material.toneMapped=kt.getTransfer(R.colorSpace)!==Wt,(g!==R||x!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,x=R.version,S=s.toneMapping),_.layers.enableAll(),y.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Ot(new ao(2,2),new Ar({name:"BackgroundMaterial",uniforms:oo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=kt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,x=R.version,S=s.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function w(y,v){y.getRGB(Pl,jg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,v,f)}return{getClearColor:function(){return c},setClearColor:function(y,v=1){c.set(y),h=v,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,w(c,h)},render:M}}function sM(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=y(null);let p=h,_=!1;function g(B,ee,X,se,H){let $=!1;if(f){const Z=w(se,X,ee);p!==Z&&(p=Z,S(p.object)),$=v(B,se,X,H),$&&b(B,se,X,H)}else{const Z=ee.wireframe===!0;(p.geometry!==se.id||p.program!==X.id||p.wireframe!==Z)&&(p.geometry=se.id,p.program=X.id,p.wireframe=Z,$=!0)}H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),($||_)&&(_=!1,q(B,ee,X,se),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function x(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(B){return r.isWebGL2?s.bindVertexArray(B):l.bindVertexArrayOES(B)}function M(B){return r.isWebGL2?s.deleteVertexArray(B):l.deleteVertexArrayOES(B)}function w(B,ee,X){const se=X.wireframe===!0;let H=c[B.id];H===void 0&&(H={},c[B.id]=H);let $=H[ee.id];$===void 0&&($={},H[ee.id]=$);let Z=$[se];return Z===void 0&&(Z=y(x()),$[se]=Z),Z}function y(B){const ee=[],X=[],se=[];for(let H=0;H<a;H++)ee[H]=0,X[H]=0,se[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:X,attributeDivisors:se,object:B,attributes:{},index:null}}function v(B,ee,X,se){const H=p.attributes,$=ee.attributes;let Z=0;const N=X.getAttributes();for(const Y in N)if(N[Y].location>=0){const j=H[Y];let de=$[Y];if(de===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),j===void 0||j.attribute!==de||de&&j.data!==de.data)return!0;Z++}return p.attributesNum!==Z||p.index!==se}function b(B,ee,X,se){const H={},$=ee.attributes;let Z=0;const N=X.getAttributes();for(const Y in N)if(N[Y].location>=0){let j=$[Y];j===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(j=B.instanceColor));const de={};de.attribute=j,j&&j.data&&(de.data=j.data),H[Y]=de,Z++}p.attributes=H,p.attributesNum=Z,p.index=se}function R(){const B=p.newAttributes;for(let ee=0,X=B.length;ee<X;ee++)B[ee]=0}function P(B){F(B,0)}function F(B,ee){const X=p.newAttributes,se=p.enabledAttributes,H=p.attributeDivisors;X[B]=1,se[B]===0&&(s.enableVertexAttribArray(B),se[B]=1),H[B]!==ee&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ee),H[B]=ee)}function O(){const B=p.newAttributes,ee=p.enabledAttributes;for(let X=0,se=ee.length;X<se;X++)ee[X]!==B[X]&&(s.disableVertexAttribArray(X),ee[X]=0)}function L(B,ee,X,se,H,$,Z){Z===!0?s.vertexAttribIPointer(B,ee,X,H,$):s.vertexAttribPointer(B,ee,X,se,H,$)}function q(B,ee,X,se){if(r.isWebGL2===!1&&(B.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const H=se.attributes,$=X.getAttributes(),Z=ee.defaultAttributeValues;for(const N in $){const Y=$[N];if(Y.location>=0){let Ie=H[N];if(Ie===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(Ie=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(Ie=B.instanceColor)),Ie!==void 0){const j=Ie.normalized,de=Ie.itemSize,Me=t.get(Ie);if(Me===void 0)continue;const Ge=Me.buffer,ze=Me.type,Le=Me.bytesPerElement,ct=r.isWebGL2===!0&&(ze===s.INT||ze===s.UNSIGNED_INT||Ie.gpuType===Cg);if(Ie.isInterleavedBufferAttribute){const nt=Ie.data,Q=nt.stride,It=Ie.offset;if(nt.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)F(Y.location+Je,nt.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Je=0;Je<Y.locationSize;Je++)P(Y.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Je=0;Je<Y.locationSize;Je++)L(Y.location+Je,de/Y.locationSize,ze,j,Q*Le,(It+de/Y.locationSize*Je)*Le,ct)}else{if(Ie.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)F(Y.location+nt,Ie.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let nt=0;nt<Y.locationSize;nt++)P(Y.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let nt=0;nt<Y.locationSize;nt++)L(Y.location+nt,de/Y.locationSize,ze,j,de*Le,de/Y.locationSize*nt*Le,ct)}}else if(Z!==void 0){const j=Z[N];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Y.location,j);break;case 3:s.vertexAttrib3fv(Y.location,j);break;case 4:s.vertexAttrib4fv(Y.location,j);break;default:s.vertexAttrib1fv(Y.location,j)}}}}O()}function _e(){le();for(const B in c){const ee=c[B];for(const X in ee){const se=ee[X];for(const H in se)M(se[H].object),delete se[H];delete ee[X]}delete c[B]}}function T(B){if(c[B.id]===void 0)return;const ee=c[B.id];for(const X in ee){const se=ee[X];for(const H in se)M(se[H].object),delete se[H];delete ee[X]}delete c[B.id]}function D(B){for(const ee in c){const X=c[ee];if(X[B.id]===void 0)continue;const se=X[B.id];for(const H in se)M(se[H].object),delete se[H];delete X[B.id]}}function le(){re(),_=!0,p!==h&&(p=h,S(p.object))}function re(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:le,resetDefaultState:re,dispose:_e,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:R,enableAttribute:P,disableUnusedAttributes:O}}function oM(s,e,t,r){const a=r.isWebGL2;let l;function f(_){l=_}function c(_,g){s.drawArrays(l,_,g),t.update(g,l,1)}function h(_,g,x){if(x===0)return;let S,M;if(a)S=s,M="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](l,_,g,x),t.update(g,l,x)}function p(_,g,x){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<x;M++)this.render(_[M],g[M]);else{S.multiDrawArraysWEBGL(l,_,0,g,0,x);let M=0;for(let w=0;w<x;w++)M+=g[w];t.update(M,l,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function aM(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,P=f||e.has("OES_texture_float"),F=R&&P,O=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:M,maxAttributes:w,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:R,floatFragmentTextures:P,floatVertexTextures:F,maxSamples:O}}function lM(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new $r,c=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,S){const M=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!a||M===null||M.length===0||l&&!y)l?_(null):p();else{const b=l?0:r,R=b*4;let P=v.clippingState||null;h.value=P,P=_(M,x,R,S);for(let F=0;F!==R;++F)P[F]=t[F];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,S,M){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,M!==!0||y===null){const v=S+w*4,b=x.matrixWorldInverse;c.getNormalMatrix(b),(y===null||y.length<v)&&(y=new Float32Array(v));for(let R=0,P=S;R!==w;++R,P+=4)f.copy(g[R]).applyMatrix4(b,c),f.normal.toArray(y,P),y[P+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function uM(s){let e=new WeakMap;function t(f,c){return c===Lf?f.mapping=io:c===Df&&(f.mapping=ro),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Lf||c===Df)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new xx(h.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Kg extends qg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Js=4,Lm=[.125,.215,.35,.446,.526,.582],Qr=20,ff=new Kg,Dm=new Tt;let df=null,hf=0,pf=0;const Kr=(1+Math.sqrt(5))/2,js=1/Kr,Im=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Kr,js),new V(0,Kr,-js),new V(js,0,Kr),new V(-js,0,Kr),new V(Kr,js,0),new V(-Kr,js,0)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,hf,pf),e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ra,format:xi,colorSpace:Rr,depthBuffer:!1},a=Um(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(l)),this._blurMaterial=fM(l,e,t)}return a}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,ff)}_sceneToCubeUV(e,t,r,a){const c=new Kn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Dm),_.toneMapping=Mr,_.autoClear=!1;const S=new na({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new Ot(new Hn,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Dm),w=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(c.up.set(0,h[v],0),c.lookAt(p[v],0,0)):b===1?(c.up.set(0,0,h[v]),c.lookAt(0,p[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,p[v]));const R=this._cubeSize;Ll(a,b*R,v>2?R:0,R,R),_.setRenderTarget(a),w&&_.render(M,c),_.render(e,c)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===io||e.mapping===ro;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Ot(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,ff)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Im[(a-1)%Im.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ot(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),w=l/M,y=isFinite(l)?1+Math.floor(_*w):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const v=[];let b=0;for(let L=0;L<Qr;++L){const q=L/w,_e=Math.exp(-q*q/2);v.push(_e),L===0?b+=_e:L<y&&(b+=2*_e)}for(let L=0;L<v.length;L++)v[L]=v[L]/b;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:R}=this;x.dTheta.value=M,x.mipInt.value=R-r;const P=this._sizeLods[a],F=3*P*(a>R-Js?a-R+Js:0),O=4*(this._cubeSize-P);Ll(t,F,O,3*P,2*P),h.setRenderTarget(t),h.render(g,ff)}}function cM(s){const e=[],t=[],r=[];let a=s;const l=s-Js+1+Lm.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-Js?h=Lm[f-s+Js-1]:f===0&&(h=0),r.push(h);const p=1/(c-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,M=6,w=3,y=2,v=1,b=new Float32Array(w*M*S),R=new Float32Array(y*M*S),P=new Float32Array(v*M*S);for(let O=0;O<S;O++){const L=O%3*2/3-1,q=O>2?0:-1,_e=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];b.set(_e,w*M*O),R.set(x,y*M*O);const T=[O,O,O,O,O,O];P.set(T,v*M*O)}const F=new nn;F.setAttribute("position",new oi(b,w)),F.setAttribute("uv",new oi(R,y)),F.setAttribute("faceIndex",new oi(P,v)),e.push(F),a>Js&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Um(s,e,t){const r=new ns(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function fM(s,e,t){const r=new Float32Array(Qr),a=new V(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Fm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Om(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Yf(){return`

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
	`}function dM(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===Lf||h===Df,_=h===io||h===ro;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new Nm(s)),g=p?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&a(g)){t===null&&(t=new Nm(s));const x=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",l),x.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function hM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function pM(s,e,t,r){const a={},l=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const w=x.morphAttributes[M];for(let y=0,v=w.length;y<v;y++)e.remove(w[y])}x.removeEventListener("dispose",f),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const w=S[M];for(let y=0,v=w.length;y<v;y++)e.update(w[y],s.ARRAY_BUFFER)}}function p(g){const x=[],S=g.index,M=g.attributes.position;let w=0;if(S!==null){const b=S.array;w=S.version;for(let R=0,P=b.length;R<P;R+=3){const F=b[R+0],O=b[R+1],L=b[R+2];x.push(F,O,O,L,L,F)}}else if(M!==void 0){const b=M.array;w=M.version;for(let R=0,P=b.length/3-1;R<P;R+=3){const F=R+0,O=R+1,L=R+2;x.push(F,O,O,L,L,F)}}else return;const y=new(Og(x)?Xg:Wg)(x,1);y.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:c,update:h,getWireframeAttribute:_}}function mM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function _(S,M){s.drawElements(l,M,c,S*h),t.update(M,l,1)}function g(S,M,w){if(w===0)return;let y,v;if(a)y=s,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](l,M,c,S*h,w),t.update(M,l,w)}function x(S,M,w){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<w;v++)this.render(S[v]/h,M[v]);else{y.multiDrawElementsWEBGL(l,M,0,c,S,0,w);let v=0;for(let b=0;b<w;b++)v+=M[b];t.update(v,l,1)}}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=x}function gM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function _M(s,e){return s[0]-e[0]}function vM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function xM(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new qt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,_,g){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=M!==void 0?M.length:0;let y=l.get(_);if(y===void 0||y.count!==w){let re=function(){D.dispose(),l.delete(_),_.removeEventListener("dispose",re)};var S=re;y!==void 0&&y.texture.dispose();const v=_.morphAttributes.position!==void 0,b=_.morphAttributes.normal!==void 0,R=_.morphAttributes.color!==void 0,P=_.morphAttributes.position||[],F=_.morphAttributes.normal||[],O=_.morphAttributes.color||[];let L=0;v===!0&&(L=1),b===!0&&(L=2),R===!0&&(L=3);let q=_.attributes.position.count*L,_e=1;q>e.maxTextureSize&&(_e=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const T=new Float32Array(q*_e*4*w),D=new Hg(T,q,_e,w);D.type=ji,D.needsUpdate=!0;const le=L*4;for(let B=0;B<w;B++){const ee=P[B],X=F[B],se=O[B],H=q*_e*4*B;for(let $=0;$<ee.count;$++){const Z=$*le;v===!0&&(f.fromBufferAttribute(ee,$),T[H+Z+0]=f.x,T[H+Z+1]=f.y,T[H+Z+2]=f.z,T[H+Z+3]=0),b===!0&&(f.fromBufferAttribute(X,$),T[H+Z+4]=f.x,T[H+Z+5]=f.y,T[H+Z+6]=f.z,T[H+Z+7]=0),R===!0&&(f.fromBufferAttribute(se,$),T[H+Z+8]=f.x,T[H+Z+9]=f.y,T[H+Z+10]=f.z,T[H+Z+11]=se.itemSize===4?f.w:1)}}y={count:w,texture:D,size:new vt(q,_e)},l.set(_,y),_.addEventListener("dispose",re)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let v=0;for(let R=0;R<x.length;R++)v+=x[R];const b=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",b),g.getUniforms().setValue(s,"morphTargetInfluences",x)}g.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{const M=x===void 0?0:x.length;let w=r[_.id];if(w===void 0||w.length!==M){w=[];for(let P=0;P<M;P++)w[P]=[P,0];r[_.id]=w}for(let P=0;P<M;P++){const F=w[P];F[0]=P,F[1]=x[P]}w.sort(vM);for(let P=0;P<8;P++)P<M&&w[P][1]?(c[P][0]=w[P][0],c[P][1]=w[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(_M);const y=_.morphAttributes.position,v=_.morphAttributes.normal;let b=0;for(let P=0;P<8;P++){const F=c[P],O=F[0],L=F[1];O!==Number.MAX_SAFE_INTEGER&&L?(y&&_.getAttribute("morphTarget"+P)!==y[O]&&_.setAttribute("morphTarget"+P,y[O]),v&&_.getAttribute("morphNormal"+P)!==v[O]&&_.setAttribute("morphNormal"+P,v[O]),a[P]=L,b+=L):(y&&_.hasAttribute("morphTarget"+P)===!0&&_.deleteAttribute("morphTarget"+P),v&&_.hasAttribute("morphNormal"+P)===!0&&_.deleteAttribute("morphNormal"+P),a[P]=0)}const R=_.morphTargetsRelative?1:1-b;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function yM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class Zg extends Dn{constructor(e,t,r,a,l,f,c,h,p,_){if(_=_!==void 0?_:ts,_!==ts&&_!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ts&&(r=yr),r===void 0&&_===so&&(r=es),super(null,a,l,f,c,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ln,this.minFilter=h!==void 0?h:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qg=new Dn,Jg=new Zg(1,1);Jg.compareFunction=Fg;const e0=new Hg,t0=new nx,n0=new Yg,zm=[],km=[],Bm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function uo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=zm[a];if(l===void 0&&(l=new Float32Array(a),zm[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ql(s,e){let t=km[e];t===void 0&&(t=new Int32Array(e),km[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function TM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Gm.set(r),s.uniformMatrix2fv(this.addr,!1,Gm),ln(t,r)}}function AM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Hm.set(r),s.uniformMatrix3fv(this.addr,!1,Hm),ln(t,r)}}function RM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),ln(t,r)}}function CM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function FM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Jg:Qg;t.setTexture2D(e||l,a)}function OM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||t0,a)}function zM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||n0,a)}function kM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||e0,a)}function BM(s){switch(s){case 5126:return SM;case 35664:return MM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return bM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return IM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}function HM(s,e){s.uniform1fv(this.addr,e)}function GM(s,e){const t=uo(e,this.size,2);s.uniform2fv(this.addr,t)}function VM(s,e){const t=uo(e,this.size,3);s.uniform3fv(this.addr,t)}function WM(s,e){const t=uo(e,this.size,4);s.uniform4fv(this.addr,t)}function XM(s,e){const t=uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jM(s,e){const t=uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qM(s,e){const t=uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function YM(s,e){s.uniform1iv(this.addr,e)}function $M(s,e){s.uniform2iv(this.addr,e)}function KM(s,e){s.uniform3iv(this.addr,e)}function ZM(s,e){s.uniform4iv(this.addr,e)}function QM(s,e){s.uniform1uiv(this.addr,e)}function JM(s,e){s.uniform2uiv(this.addr,e)}function eE(s,e){s.uniform3uiv(this.addr,e)}function tE(s,e){s.uniform4uiv(this.addr,e)}function nE(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Qg,l[f])}function iE(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||t0,l[f])}function rE(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||n0,l[f])}function sE(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||e0,l[f])}function oE(s){switch(s){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return jM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return QM;case 36294:return JM;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class aE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class lE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oE(t.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function cE(s,e,t){const r=s.name,a=r.length;for(mf.lastIndex=0;;){const l=mf.exec(r),f=mf.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){Vm(t,p===void 0?new aE(c,s,e):new lE(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new uE(c),Vm(t,g)),t=g}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);cE(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Wm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const fE=37297;let dE=0;function hE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function pE(s){const e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(s);let r;switch(e===t?r="":e===jl&&t===Xl?r="LinearDisplayP3ToLinearSRGB":e===Xl&&t===jl&&(r="LinearSRGBToLinearDisplayP3"),s){case Rr:case Zl:return[r,"LinearTransferOETF"];case Ai:case Xf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Xm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+hE(s.getShaderSource(e),f)}else return a}function mE(s,e){const t=pE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gE(s,e){let t;switch(e){case Tv:t="Linear";break;case Av:t="Reinhard";break;case Rv:t="OptimizedCineon";break;case Cv:t="ACESFilmic";break;case Pv:t="AgX";break;case Lv:t="Neutral";break;case bv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _E(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function vE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function xE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function yE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function eo(s){return s!==""}function jm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(s){return s.replace(SE,EE)}const ME=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function EE(s,e){let t=Et[e];if(t===void 0){const r=ME.get(e);if(r!==void 0)t=Et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kf(t)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(s){return s.replace(wE,TE)}function TE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function $m(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function AE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function RE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function bE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function PE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function LE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=AE(t),p=RE(t),_=CE(t),g=bE(t),x=PE(t),S=t.isWebGL2?"":_E(t),M=vE(t),w=xE(l),y=a.createProgram();let v,b,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(eo).join(`
`),v.length>0&&(v+=`
`),b=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(eo).join(`
`),b.length>0&&(b+=`
`)):(v=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),b=[S,$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?Et.tonemapping_pars_fragment:"",t.toneMapping!==Mr?gE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,mE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),f=kf(f),f=jm(f,t),f=qm(f,t),c=kf(c),c=jm(c,t),c=qm(c,t),f=Ym(f),c=Ym(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const P=R+v+f,F=R+b+c,O=Wm(a,a.VERTEX_SHADER,P),L=Wm(a,a.FRAGMENT_SHADER,F);a.attachShader(y,O),a.attachShader(y,L),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function q(le){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(y).trim(),B=a.getShaderInfoLog(O).trim(),ee=a.getShaderInfoLog(L).trim();let X=!0,se=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,y,O,L);else{const H=Xm(a,O,"vertex"),$=Xm(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+re+`
`+H+`
`+$)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(B===""||ee==="")&&(se=!1);se&&(le.diagnostics={runnable:X,programLog:re,vertexShader:{log:B,prefix:v},fragmentShader:{log:ee,prefix:b}})}a.deleteShader(O),a.deleteShader(L),_e=new Bl(a,y),T=yE(a,y)}let _e;this.getUniforms=function(){return _e===void 0&&q(this),_e};let T;this.getAttributes=function(){return T===void 0&&q(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(y,fE)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=L,this}let DE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new NE(e),t.set(e,r)),r}}class NE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function UE(s,e,t,r,a,l,f){const c=new Gg,h=new IE,p=new Set,_=[],g=a.isWebGL2,x=a.logarithmicDepthBuffer,S=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return p.add(T),T===0?"uv":`uv${T}`}function v(T,D,le,re,B){const ee=re.fog,X=B.geometry,se=T.isMeshStandardMaterial?re.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||se),$=H&&H.mapping===Kl?H.image.height:null,Z=w[T.type];T.precision!==null&&(M=a.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Y=N!==void 0?N.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let j,de,Me,Ge;if(Z){const Rt=Ri[Z];j=Rt.vertexShader,de=Rt.fragmentShader}else j=T.vertexShader,de=T.fragmentShader,h.update(T),Me=h.getVertexShaderID(T),Ge=h.getFragmentShaderID(T);const ze=s.getRenderTarget(),Le=B.isInstancedMesh===!0,ct=B.isBatchedMesh===!0,nt=!!T.map,Q=!!T.matcap,It=!!H,Je=!!T.aoMap,ot=!!T.lightMap,We=!!T.bumpMap,xt=!!T.normalMap,rt=!!T.displacementMap,pt=!!T.emissiveMap,Mt=!!T.metalnessMap,I=!!T.roughnessMap,A=T.anisotropy>0,he=T.clearcoat>0,ce=T.iridescence>0,Pe=T.sheen>0,Ee=T.transmission>0,it=A&&!!T.anisotropyMap,et=he&&!!T.clearcoatMap,Ce=he&&!!T.clearcoatNormalMap,ke=he&&!!T.clearcoatRoughnessMap,ut=ce&&!!T.iridescenceMap,Ue=ce&&!!T.iridescenceThicknessMap,Se=Pe&&!!T.sheenColorMap,ve=Pe&&!!T.sheenRoughnessMap,xe=!!T.specularMap,ye=!!T.specularColorMap,ge=!!T.specularIntensityMap,we=Ee&&!!T.transmissionMap,Te=Ee&&!!T.thicknessMap,qe=!!T.gradientMap,k=!!T.alphaMap,me=T.alphaTest>0,te=!!T.alphaHash,Ne=!!T.extensions;let Be=Mr;T.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Be=s.toneMapping);const dt={isWebGL2:g,shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:de,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:Ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:ct,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ze===null?s.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Rr,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Q,envMap:It,envMapMode:It&&H.mapping,envMapCubeUVHeight:$,aoMap:Je,lightMap:ot,bumpMap:We,normalMap:xt,displacementMap:S&&rt,emissiveMap:pt,normalMapObjectSpace:xt&&T.normalMapType===Gv,normalMapTangentSpace:xt&&T.normalMapType===Ug,metalnessMap:Mt,roughnessMap:I,anisotropy:A,anisotropyMap:it,clearcoat:he,clearcoatMap:et,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,iridescence:ce,iridescenceMap:ut,iridescenceThicknessMap:Ue,sheen:Pe,sheenColorMap:Se,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:ye,specularIntensityMap:ge,transmission:Ee,transmissionMap:we,thicknessMap:Te,gradientMap:qe,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:k,alphaTest:me,alphaHash:te,combine:T.combine,mapUv:nt&&y(T.map.channel),aoMapUv:Je&&y(T.aoMap.channel),lightMapUv:ot&&y(T.lightMap.channel),bumpMapUv:We&&y(T.bumpMap.channel),normalMapUv:xt&&y(T.normalMap.channel),displacementMapUv:rt&&y(T.displacementMap.channel),emissiveMapUv:pt&&y(T.emissiveMap.channel),metalnessMapUv:Mt&&y(T.metalnessMap.channel),roughnessMapUv:I&&y(T.roughnessMap.channel),anisotropyMapUv:it&&y(T.anisotropyMap.channel),clearcoatMapUv:et&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(T.sheenRoughnessMap.channel),specularMapUv:xe&&y(T.specularMap.channel),specularColorMapUv:ye&&y(T.specularColorMap.channel),specularIntensityMapUv:ge&&y(T.specularIntensityMap.channel),transmissionMapUv:we&&y(T.transmissionMap.channel),thicknessMapUv:Te&&y(T.thicknessMap.channel),alphaMapUv:k&&y(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||A),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(nt||k),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&le.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,useLegacyLights:s._useLegacyLights,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&kt.getTransfer(T.map.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zn,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ne&&T.extensions.derivatives===!0,extensionFragDepth:Ne&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=p.has(1),dt.vertexUv2s=p.has(2),dt.vertexUv3s=p.has(3),p.clear(),dt}function b(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const le in T.defines)D.push(le),D.push(T.defines[le]);return T.isRawShaderMaterial===!1&&(R(D,T),P(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function R(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function P(T,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.instancingMorph&&c.enable(4),D.matcap&&c.enable(5),D.envMap&&c.enable(6),D.normalMapObjectSpace&&c.enable(7),D.normalMapTangentSpace&&c.enable(8),D.clearcoat&&c.enable(9),D.iridescence&&c.enable(10),D.alphaTest&&c.enable(11),D.vertexColors&&c.enable(12),D.vertexAlphas&&c.enable(13),D.vertexUv1s&&c.enable(14),D.vertexUv2s&&c.enable(15),D.vertexUv3s&&c.enable(16),D.vertexTangents&&c.enable(17),D.anisotropy&&c.enable(18),D.alphaHash&&c.enable(19),D.batching&&c.enable(20),T.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.alphaToCoverage&&c.enable(20),T.push(c.mask)}function F(T){const D=w[T.type];let le;if(D){const re=Ri[D];le=mx.clone(re.uniforms)}else le=T.uniforms;return le}function O(T,D){let le;for(let re=0,B=_.length;re<B;re++){const ee=_[re];if(ee.cacheKey===D){le=ee,++le.usedTimes;break}}return le===void 0&&(le=new LE(s,D,T,l),_.push(le)),le}function L(T){if(--T.usedTimes===0){const D=_.indexOf(T);_[D]=_[_.length-1],_.pop(),T.destroy()}}function q(T){h.remove(T)}function _e(){h.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:F,acquireProgram:O,releaseProgram:L,releaseShaderCache:q,programs:_,dispose:_e}}function FE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function OE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(g,x,S,M,w,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:M,renderOrder:g.renderOrder,z:w,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=w,v.group=y),e++,v}function c(g,x,S,M,w,y){const v=f(g,x,S,M,w,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,x,S,M,w,y){const v=f(g,x,S,M,w,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||OE),r.length>1&&r.sort(x||Km),a.length>1&&a.sort(x||Km)}function _(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:_,sort:p}}function zE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new Zm,s.set(r,[f])):a>=l.length?(f=new Zm,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function kE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Tt};break;case"SpotLight":t={position:new V,direction:new V,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function BE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HE=0;function GE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VE(s,e){const t=new kE,r=BE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new V);const l=new V,f=new Ht,c=new Ht;function h(_,g){let x=0,S=0,M=0;for(let le=0;le<9;le++)a.probe[le].set(0,0,0);let w=0,y=0,v=0,b=0,R=0,P=0,F=0,O=0,L=0,q=0,_e=0;_.sort(GE);const T=g===!0?Math.PI:1;for(let le=0,re=_.length;le<re;le++){const B=_[le],ee=B.color,X=B.intensity,se=B.distance,H=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=ee.r*X*T,S+=ee.g*X*T,M+=ee.b*X*T;else if(B.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(B.sh.coefficients[$],X);_e++}else if(B.isDirectionalLight){const $=t.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){const Z=B.shadow,N=r.get(B);N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,a.directionalShadow[w]=N,a.directionalShadowMap[w]=H,a.directionalShadowMatrix[w]=B.shadow.matrix,P++}a.directional[w]=$,w++}else if(B.isSpotLight){const $=t.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(ee).multiplyScalar(X*T),$.distance=se,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,a.spot[v]=$;const Z=B.shadow;if(B.map&&(a.spotLightMap[L]=B.map,L++,Z.updateMatrices(B),B.castShadow&&q++),a.spotLightMatrix[v]=Z.matrix,B.castShadow){const N=r.get(B);N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,a.spotShadow[v]=N,a.spotShadowMap[v]=H,O++}v++}else if(B.isRectAreaLight){const $=t.get(B);$.color.copy(ee).multiplyScalar(X),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),a.rectArea[b]=$,b++}else if(B.isPointLight){const $=t.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity*T),$.distance=B.distance,$.decay=B.decay,B.castShadow){const Z=B.shadow,N=r.get(B);N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,a.pointShadow[y]=N,a.pointShadowMap[y]=H,a.pointShadowMatrix[y]=B.shadow.matrix,F++}a.point[y]=$,y++}else if(B.isHemisphereLight){const $=t.get(B);$.skyColor.copy(B.color).multiplyScalar(X*T),$.groundColor.copy(B.groundColor).multiplyScalar(X*T),a.hemi[R]=$,R++}}b>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=x,a.ambient[1]=S,a.ambient[2]=M;const D=a.hash;(D.directionalLength!==w||D.pointLength!==y||D.spotLength!==v||D.rectAreaLength!==b||D.hemiLength!==R||D.numDirectionalShadows!==P||D.numPointShadows!==F||D.numSpotShadows!==O||D.numSpotMaps!==L||D.numLightProbes!==_e)&&(a.directional.length=w,a.spot.length=v,a.rectArea.length=b,a.point.length=y,a.hemi.length=R,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=O+L-q,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=q,a.numLightProbes=_e,D.directionalLength=w,D.pointLength=y,D.spotLength=v,D.rectAreaLength=b,D.hemiLength=R,D.numDirectionalShadows=P,D.numPointShadows=F,D.numSpotShadows=O,D.numSpotMaps=L,D.numLightProbes=_e,a.version=HE++)}function p(_,g){let x=0,S=0,M=0,w=0,y=0;const v=g.matrixWorldInverse;for(let b=0,R=_.length;b<R;b++){const P=_[b];if(P.isDirectionalLight){const F=a.directional[x];F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(v),x++}else if(P.isSpotLight){const F=a.spot[M];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const F=a.rectArea[w];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),c.identity(),f.copy(P.matrixWorld),f.premultiply(v),c.extractRotation(f),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),w++}else if(P.isPointLight){const F=a.point[S];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),S++}else if(P.isHemisphereLight){const F=a.hemi[y];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(v),y++}}}return{setup:h,setupView:p,state:a}}function Qm(s,e){const t=new VE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(g){r.push(g)}function c(g){a.push(g)}function h(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function WE(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new Qm(s,e),t.set(l,[h])):f>=c.length?(h=new Qm(s,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class XE extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qE=`void main() {
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
}`;function $E(s,e,t){let r=new qf;const a=new vt,l=new vt,f=new qt,c=new XE({depthPacking:Hv}),h=new jE,p={},_=t.maxTextureSize,g={[Tr]:Gn,[Gn]:Tr,[Zn]:Zn},x=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:qE,fragmentShader:YE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new nn;M.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ot(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tg;let v=this.type;this.render=function(O,L,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const _e=s.getRenderTarget(),T=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Sr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=v!==Xi&&this.type===Xi,B=v===Xi&&this.type!==Xi;for(let ee=0,X=O.length;ee<X;ee++){const se=O[ee],H=se.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const $=H.getFrameExtents();if(a.multiply($),l.copy(H.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/$.x),a.x=l.x*$.x,H.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/$.y),a.y=l.y*$.y,H.mapSize.y=l.y)),H.map===null||re===!0||B===!0){const N=this.type!==Xi?{minFilter:Ln,magFilter:Ln}:{};H.map!==null&&H.map.dispose(),H.map=new ns(a.x,a.y,N),H.map.texture.name=se.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Z=H.getViewportCount();for(let N=0;N<Z;N++){const Y=H.getViewport(N);f.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),le.viewport(f),H.updateMatrices(se,N),r=H.getFrustum(),P(L,q,H.camera,se,this.type)}H.isPointLightShadow!==!0&&this.type===Xi&&b(H,q),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(_e,T,D)};function b(O,L){const q=e.update(w);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ns(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(L,null,q,x,w,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(L,null,q,S,w,null)}function R(O,L,q,_e){let T=null;const D=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(D!==void 0)T=D;else if(T=q.isPointLight===!0?h:c,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const le=T.uuid,re=L.uuid;let B=p[le];B===void 0&&(B={},p[le]=B);let ee=B[re];ee===void 0&&(ee=T.clone(),B[re]=ee,L.addEventListener("dispose",F)),T=ee}if(T.visible=L.visible,T.wireframe=L.wireframe,_e===Xi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:g[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const le=s.properties.get(T);le.light=q}return T}function P(O,L,q,_e,T){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Xi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const re=e.update(O),B=O.material;if(Array.isArray(B)){const ee=re.groups;for(let X=0,se=ee.length;X<se;X++){const H=ee[X],$=B[H.materialIndex];if($&&$.visible){const Z=R(O,$,_e,T);O.onBeforeShadow(s,O,L,q,re,Z,H),s.renderBufferDirect(q,null,re,Z,O,H),O.onAfterShadow(s,O,L,q,re,Z,H)}}}else if(B.visible){const ee=R(O,B,_e,T);O.onBeforeShadow(s,O,L,q,re,ee,null),s.renderBufferDirect(q,null,re,ee,O,null),O.onAfterShadow(s,O,L,q,re,ee,null)}}const le=O.children;for(let re=0,B=le.length;re<B;re++)P(le[re],L,q,_e,T)}function F(O){O.target.removeEventListener("dispose",F);for(const q in p){const _e=p[q],T=O.target.uuid;T in _e&&(_e[T].dispose(),delete _e[T])}}}function KE(s,e,t){const r=t.isWebGL2;function a(){let k=!1;const me=new qt;let te=null;const Ne=new qt(0,0,0,0);return{setMask:function(Be){te!==Be&&!k&&(s.colorMask(Be,Be,Be,Be),te=Be)},setLocked:function(Be){k=Be},setClear:function(Be,dt,Rt,_t,ht){ht===!0&&(Be*=_t,dt*=_t,Rt*=_t),me.set(Be,dt,Rt,_t),Ne.equals(me)===!1&&(s.clearColor(Be,dt,Rt,_t),Ne.copy(me))},reset:function(){k=!1,te=null,Ne.set(-1,0,0,0)}}}function l(){let k=!1,me=null,te=null,Ne=null;return{setTest:function(Be){Be?Le(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(Be){me!==Be&&!k&&(s.depthMask(Be),me=Be)},setFunc:function(Be){if(te!==Be){switch(Be){case gv:s.depthFunc(s.NEVER);break;case _v:s.depthFunc(s.ALWAYS);break;case vv:s.depthFunc(s.LESS);break;case Vl:s.depthFunc(s.LEQUAL);break;case xv:s.depthFunc(s.EQUAL);break;case yv:s.depthFunc(s.GEQUAL);break;case Sv:s.depthFunc(s.GREATER);break;case Mv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Be}},setLocked:function(Be){k=Be},setClear:function(Be){Ne!==Be&&(s.clearDepth(Be),Ne=Be)},reset:function(){k=!1,me=null,te=null,Ne=null}}}function f(){let k=!1,me=null,te=null,Ne=null,Be=null,dt=null,Rt=null,_t=null,ht=null;return{setTest:function(yt){k||(yt?Le(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(yt){me!==yt&&!k&&(s.stencilMask(yt),me=yt)},setFunc:function(yt,Yt,Zt){(te!==yt||Ne!==Yt||Be!==Zt)&&(s.stencilFunc(yt,Yt,Zt),te=yt,Ne=Yt,Be=Zt)},setOp:function(yt,Yt,Zt){(dt!==yt||Rt!==Yt||_t!==Zt)&&(s.stencilOp(yt,Yt,Zt),dt=yt,Rt=Yt,_t=Zt)},setLocked:function(yt){k=yt},setClear:function(yt){ht!==yt&&(s.clearStencil(yt),ht=yt)},reset:function(){k=!1,me=null,te=null,Ne=null,Be=null,dt=null,Rt=null,_t=null,ht=null}}}const c=new a,h=new l,p=new f,_=new WeakMap,g=new WeakMap;let x={},S={},M=new WeakMap,w=[],y=null,v=!1,b=null,R=null,P=null,F=null,O=null,L=null,q=null,_e=new Tt(0,0,0),T=0,D=!1,le=null,re=null,B=null,ee=null,X=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=$>=2);let N=null,Y={};const Ie=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),de=new qt().fromArray(Ie),Me=new qt().fromArray(j);function Ge(k,me,te,Ne){const Be=new Uint8Array(4),dt=s.createTexture();s.bindTexture(k,dt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<te;Rt++)r&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(me,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(me+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return dt}const ze={};ze[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ze[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ze[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ze[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Le(s.DEPTH_TEST),h.setFunc(Vl),rt(!1),pt(Dp),Le(s.CULL_FACE),We(Sr);function Le(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function ct(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function nt(k,me){return S[k]!==me?(s.bindFramebuffer(k,me),S[k]=me,r&&(k===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=me),k===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=me)),!0):!1}function Q(k,me){let te=w,Ne=!1;if(k){te=M.get(me),te===void 0&&(te=[],M.set(me,te));const Be=k.textures;if(te.length!==Be.length||te[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Rt=Be.length;dt<Rt;dt++)te[dt]=s.COLOR_ATTACHMENT0+dt;te.length=Be.length,Ne=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,Ne=!0);if(Ne)if(t.isWebGL2)s.drawBuffers(te);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function It(k){return y!==k?(s.useProgram(k),y=k,!0):!1}const Je={[Zr]:s.FUNC_ADD,[tv]:s.FUNC_SUBTRACT,[nv]:s.FUNC_REVERSE_SUBTRACT};if(r)Je[Fp]=s.MIN,Je[Op]=s.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Je[Fp]=k.MIN_EXT,Je[Op]=k.MAX_EXT)}const ot={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[bf]:s.SRC_ALPHA,[fv]:s.SRC_ALPHA_SATURATE,[uv]:s.DST_COLOR,[av]:s.DST_ALPHA,[ov]:s.ONE_MINUS_SRC_COLOR,[Pf]:s.ONE_MINUS_SRC_ALPHA,[cv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[dv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function We(k,me,te,Ne,Be,dt,Rt,_t,ht,yt){if(k===Sr){v===!0&&(ct(s.BLEND),v=!1);return}if(v===!1&&(Le(s.BLEND),v=!0),k!==ev){if(k!==b||yt!==D){if((R!==Zr||O!==Zr)&&(s.blendEquation(s.FUNC_ADD),R=Zr,O=Zr),yt)switch(k){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.ONE,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,F=null,L=null,q=null,_e.set(0,0,0),T=0,b=k,D=yt}return}Be=Be||me,dt=dt||te,Rt=Rt||Ne,(me!==R||Be!==O)&&(s.blendEquationSeparate(Je[me],Je[Be]),R=me,O=Be),(te!==P||Ne!==F||dt!==L||Rt!==q)&&(s.blendFuncSeparate(ot[te],ot[Ne],ot[dt],ot[Rt]),P=te,F=Ne,L=dt,q=Rt),(_t.equals(_e)===!1||ht!==T)&&(s.blendColor(_t.r,_t.g,_t.b,ht),_e.copy(_t),T=ht),b=k,D=!1}function xt(k,me){k.side===Zn?ct(s.CULL_FACE):Le(s.CULL_FACE);let te=k.side===Gn;me&&(te=!te),rt(te),k.blending===to&&k.transparent===!1?We(Sr):We(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ne=k.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),I(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){le!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),le=k)}function pt(k){k!==Z_?(Le(s.CULL_FACE),k!==re&&(k===Dp?s.cullFace(s.BACK):k===Q_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),re=k}function Mt(k){k!==B&&(H&&s.lineWidth(k),B=k)}function I(k,me,te){k?(Le(s.POLYGON_OFFSET_FILL),(ee!==me||X!==te)&&(s.polygonOffset(me,te),ee=me,X=te)):ct(s.POLYGON_OFFSET_FILL)}function A(k){k?Le(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function he(k){k===void 0&&(k=s.TEXTURE0+se-1),N!==k&&(s.activeTexture(k),N=k)}function ce(k,me,te){te===void 0&&(N===null?te=s.TEXTURE0+se-1:te=N);let Ne=Y[te];Ne===void 0&&(Ne={type:void 0,texture:void 0},Y[te]=Ne),(Ne.type!==k||Ne.texture!==me)&&(N!==te&&(s.activeTexture(te),N=te),s.bindTexture(k,me||ze[k]),Ne.type=k,Ne.texture=me)}function Pe(){const k=Y[N];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(k){de.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),de.copy(k))}function ge(k){Me.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function we(k,me){let te=g.get(me);te===void 0&&(te=new WeakMap,g.set(me,te));let Ne=te.get(k);Ne===void 0&&(Ne=s.getUniformBlockIndex(me,k.name),te.set(k,Ne))}function Te(k,me){const Ne=g.get(me).get(k);_.get(me)!==Ne&&(s.uniformBlockBinding(me,Ne,k.__bindingPointIndex),_.set(me,Ne))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},N=null,Y={},S={},M=new WeakMap,w=[],y=null,v=!1,b=null,R=null,P=null,F=null,O=null,L=null,q=null,_e=new Tt(0,0,0),T=0,D=!1,le=null,re=null,B=null,ee=null,X=null,de.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Le,disable:ct,bindFramebuffer:nt,drawBuffers:Q,useProgram:It,setBlending:We,setMaterial:xt,setFlipSided:rt,setCullFace:pt,setLineWidth:Mt,setPolygonOffset:I,setScissorTest:A,activeTexture:he,bindTexture:ce,unbindTexture:Pe,compressedTexImage2D:Ee,compressedTexImage3D:it,texImage2D:ve,texImage3D:xe,updateUBOMapping:we,uniformBlockBinding:Te,texStorage2D:Ue,texStorage3D:Se,texSubImage2D:et,texSubImage3D:Ce,compressedTexSubImage2D:ke,compressedTexSubImage3D:ut,scissor:ye,viewport:ge,reset:qe}}function ZE(s,e,t,r,a,l,f){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new vt,g=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,A){return M?new OffscreenCanvas(I,A):Yl("canvas")}function y(I,A,he,ce){let Pe=1;const Ee=Mt(I);if((Ee.width>ce||Ee.height>ce)&&(Pe=ce/Math.max(Ee.width,Ee.height)),Pe<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const it=A?zf:Math.floor,et=it(Pe*Ee.width),Ce=it(Pe*Ee.height);x===void 0&&(x=w(et,Ce));const ke=he?w(et,Ce):x;return ke.width=et,ke.height=Ce,ke.getContext("2d").drawImage(I,0,0,et,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+et+"x"+Ce+")."),ke}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),I;return I}function v(I){const A=Mt(I);return dm(A.width)&&dm(A.height)}function b(I){return c?!1:I.wrapS!==vi||I.wrapT!==vi||I.minFilter!==Ln&&I.minFilter!==Bn}function R(I,A){return I.generateMipmaps&&A&&I.minFilter!==Ln&&I.minFilter!==Bn}function P(I){s.generateMipmap(I)}function F(I,A,he,ce,Pe=!1){if(c===!1)return A;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ee=A;if(A===s.RED&&(he===s.FLOAT&&(Ee=s.R32F),he===s.HALF_FLOAT&&(Ee=s.R16F),he===s.UNSIGNED_BYTE&&(Ee=s.R8)),A===s.RED_INTEGER&&(he===s.UNSIGNED_BYTE&&(Ee=s.R8UI),he===s.UNSIGNED_SHORT&&(Ee=s.R16UI),he===s.UNSIGNED_INT&&(Ee=s.R32UI),he===s.BYTE&&(Ee=s.R8I),he===s.SHORT&&(Ee=s.R16I),he===s.INT&&(Ee=s.R32I)),A===s.RG&&(he===s.FLOAT&&(Ee=s.RG32F),he===s.HALF_FLOAT&&(Ee=s.RG16F),he===s.UNSIGNED_BYTE&&(Ee=s.RG8)),A===s.RG_INTEGER&&(he===s.UNSIGNED_BYTE&&(Ee=s.RG8UI),he===s.UNSIGNED_SHORT&&(Ee=s.RG16UI),he===s.UNSIGNED_INT&&(Ee=s.RG32UI),he===s.BYTE&&(Ee=s.RG8I),he===s.SHORT&&(Ee=s.RG16I),he===s.INT&&(Ee=s.RG32I)),A===s.RGBA){const it=Pe?Wl:kt.getTransfer(ce);he===s.FLOAT&&(Ee=s.RGBA32F),he===s.HALF_FLOAT&&(Ee=s.RGBA16F),he===s.UNSIGNED_BYTE&&(Ee=it===Wt?s.SRGB8_ALPHA8:s.RGBA8),he===s.UNSIGNED_SHORT_4_4_4_4&&(Ee=s.RGBA4),he===s.UNSIGNED_SHORT_5_5_5_1&&(Ee=s.RGB5_A1)}return(Ee===s.R16F||Ee===s.R32F||Ee===s.RG16F||Ee===s.RG32F||Ee===s.RGBA16F||Ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function O(I,A,he){return R(I,he)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==Bn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function L(I){return I===Ln||I===zp||I===jo?s.NEAREST:s.LINEAR}function q(I){const A=I.target;A.removeEventListener("dispose",q),T(A),A.isVideoTexture&&g.delete(A)}function _e(I){const A=I.target;A.removeEventListener("dispose",_e),le(A)}function T(I){const A=r.get(I);if(A.__webglInit===void 0)return;const he=I.source,ce=S.get(he);if(ce){const Pe=ce[A.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&D(I),Object.keys(ce).length===0&&S.delete(he)}r.remove(I)}function D(I){const A=r.get(I);s.deleteTexture(A.__webglTexture);const he=I.source,ce=S.get(he);delete ce[A.__cacheKey],f.memory.textures--}function le(I){const A=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(A.__webglFramebuffer[ce]))for(let Pe=0;Pe<A.__webglFramebuffer[ce].length;Pe++)s.deleteFramebuffer(A.__webglFramebuffer[ce][Pe]);else s.deleteFramebuffer(A.__webglFramebuffer[ce]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ce])}else{if(Array.isArray(A.__webglFramebuffer))for(let ce=0;ce<A.__webglFramebuffer.length;ce++)s.deleteFramebuffer(A.__webglFramebuffer[ce]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ce=0;ce<A.__webglColorRenderbuffer.length;ce++)A.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ce]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const he=I.textures;for(let ce=0,Pe=he.length;ce<Pe;ce++){const Ee=r.get(he[ce]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),f.memory.textures--),r.remove(he[ce])}r.remove(I)}let re=0;function B(){re=0}function ee(){const I=re;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),re+=1,I}function X(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function se(I,A){const he=r.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.version>0&&he.__version!==I.version){const ce=I.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(he,I,A);return}}t.bindTexture(s.TEXTURE_2D,he.__webglTexture,s.TEXTURE0+A)}function H(I,A){const he=r.get(I);if(I.version>0&&he.__version!==I.version){Me(he,I,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,he.__webglTexture,s.TEXTURE0+A)}function $(I,A){const he=r.get(I);if(I.version>0&&he.__version!==I.version){Me(he,I,A);return}t.bindTexture(s.TEXTURE_3D,he.__webglTexture,s.TEXTURE0+A)}function Z(I,A){const he=r.get(I);if(I.version>0&&he.__version!==I.version){Ge(he,I,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture,s.TEXTURE0+A)}const N={[If]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[Nf]:s.MIRRORED_REPEAT},Y={[Ln]:s.NEAREST,[zp]:s.NEAREST_MIPMAP_NEAREST,[jo]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},Ie={[Vv]:s.NEVER,[$v]:s.ALWAYS,[Wv]:s.LESS,[Fg]:s.LEQUAL,[Xv]:s.EQUAL,[Yv]:s.GEQUAL,[jv]:s.GREATER,[qv]:s.NOTEQUAL};function j(I,A,he){if(A.type===ji&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Bn||A.magFilter===Oc||A.magFilter===jo||A.magFilter===Jr||A.minFilter===Bn||A.minFilter===Oc||A.minFilter===jo||A.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),he?(s.texParameteri(I,s.TEXTURE_WRAP_S,N[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,N[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,N[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Y[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Y[A.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==vi||A.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,L(A.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,L(A.minFilter)),A.minFilter!==Ln&&A.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ln||A.minFilter!==jo&&A.minFilter!==Jr||A.type===ji&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function de(I,A){let he=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",q));const ce=A.source;let Pe=S.get(ce);Pe===void 0&&(Pe={},S.set(ce,Pe));const Ee=X(A);if(Ee!==I.__cacheKey){Pe[Ee]===void 0&&(Pe[Ee]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,he=!0),Pe[Ee].usedTimes++;const it=Pe[I.__cacheKey];it!==void 0&&(Pe[I.__cacheKey].usedTimes--,it.usedTimes===0&&D(A)),I.__cacheKey=Ee,I.__webglTexture=Pe[Ee].texture}return he}function Me(I,A,he){let ce=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ce=s.TEXTURE_3D);const Pe=de(I,A),Ee=A.source;t.bindTexture(ce,I.__webglTexture,s.TEXTURE0+he);const it=r.get(Ee);if(Ee.version!==it.__version||Pe===!0){t.activeTexture(s.TEXTURE0+he);const et=kt.getPrimaries(kt.workingColorSpace),Ce=A.colorSpace===xr?null:kt.getPrimaries(A.colorSpace),ke=A.colorSpace===xr||et===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ut=b(A)&&v(A.image)===!1;let Ue=y(A.image,ut,!1,a.maxTextureSize);Ue=pt(A,Ue);const Se=v(Ue)||c,ve=l.convert(A.format,A.colorSpace);let xe=l.convert(A.type),ye=F(A.internalFormat,ve,xe,A.colorSpace,A.isVideoTexture);j(ce,A,Se);let ge;const we=A.mipmaps,Te=c&&A.isVideoTexture!==!0&&ye!==Ng,qe=it.__version===void 0||Pe===!0,k=Ee.dataReady,me=O(A,Ue,Se);if(A.isDepthTexture)ye=s.DEPTH_COMPONENT,c?A.type===ji?ye=s.DEPTH_COMPONENT32F:A.type===yr?ye=s.DEPTH_COMPONENT24:A.type===es?ye=s.DEPTH24_STENCIL8:ye=s.DEPTH_COMPONENT16:A.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ts&&ye===s.DEPTH_COMPONENT&&A.type!==Wf&&A.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yr,xe=l.convert(A.type)),A.format===so&&ye===s.DEPTH_COMPONENT&&(ye=s.DEPTH_STENCIL,A.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=es,xe=l.convert(A.type))),qe&&(Te?t.texStorage2D(s.TEXTURE_2D,1,ye,Ue.width,Ue.height):t.texImage2D(s.TEXTURE_2D,0,ye,Ue.width,Ue.height,0,ve,xe,null));else if(A.isDataTexture)if(we.length>0&&Se){Te&&qe&&t.texStorage2D(s.TEXTURE_2D,me,ye,we[0].width,we[0].height);for(let te=0,Ne=we.length;te<Ne;te++)ge=we[te],Te?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ye,ge.width,ge.height,0,ve,xe,ge.data);A.generateMipmaps=!1}else Te?(qe&&t.texStorage2D(s.TEXTURE_2D,me,ye,Ue.width,Ue.height),k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue.width,Ue.height,ve,xe,Ue.data)):t.texImage2D(s.TEXTURE_2D,0,ye,Ue.width,Ue.height,0,ve,xe,Ue.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Te&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,ye,we[0].width,we[0].height,Ue.depth);for(let te=0,Ne=we.length;te<Ne;te++)ge=we[te],A.format!==xi?ve!==null?Te?k&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,Ue.depth,ve,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ye,ge.width,ge.height,Ue.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,Ue.depth,ve,xe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ye,ge.width,ge.height,Ue.depth,0,ve,xe,ge.data)}else{Te&&qe&&t.texStorage2D(s.TEXTURE_2D,me,ye,we[0].width,we[0].height);for(let te=0,Ne=we.length;te<Ne;te++)ge=we[te],A.format!==xi?ve!==null?Te?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,xe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ye,ge.width,ge.height,0,ve,xe,ge.data)}else if(A.isDataArrayTexture)Te?(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,ye,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,ve,xe,Ue.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,Ue.width,Ue.height,Ue.depth,0,ve,xe,Ue.data);else if(A.isData3DTexture)Te?(qe&&t.texStorage3D(s.TEXTURE_3D,me,ye,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,ve,xe,Ue.data)):t.texImage3D(s.TEXTURE_3D,0,ye,Ue.width,Ue.height,Ue.depth,0,ve,xe,Ue.data);else if(A.isFramebufferTexture){if(qe)if(Te)t.texStorage2D(s.TEXTURE_2D,me,ye,Ue.width,Ue.height);else{let te=Ue.width,Ne=Ue.height;for(let Be=0;Be<me;Be++)t.texImage2D(s.TEXTURE_2D,Be,ye,te,Ne,0,ve,xe,null),te>>=1,Ne>>=1}}else if(we.length>0&&Se){if(Te&&qe){const te=Mt(we[0]);t.texStorage2D(s.TEXTURE_2D,me,ye,te.width,te.height)}for(let te=0,Ne=we.length;te<Ne;te++)ge=we[te],Te?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ve,xe,ge):t.texImage2D(s.TEXTURE_2D,te,ye,ve,xe,ge);A.generateMipmaps=!1}else if(Te){if(qe){const te=Mt(Ue);t.texStorage2D(s.TEXTURE_2D,me,ye,te.width,te.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,xe,Ue)}else t.texImage2D(s.TEXTURE_2D,0,ye,ve,xe,Ue);R(A,Se)&&P(ce),it.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ge(I,A,he){if(A.image.length!==6)return;const ce=de(I,A),Pe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+he);const Ee=r.get(Pe);if(Pe.version!==Ee.__version||ce===!0){t.activeTexture(s.TEXTURE0+he);const it=kt.getPrimaries(kt.workingColorSpace),et=A.colorSpace===xr?null:kt.getPrimaries(A.colorSpace),Ce=A.colorSpace===xr||it===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let te=0;te<6;te++)!ke&&!ut?Ue[te]=y(A.image[te],!1,!0,a.maxCubemapSize):Ue[te]=ut?A.image[te].image:A.image[te],Ue[te]=pt(A,Ue[te]);const Se=Ue[0],ve=v(Se)||c,xe=l.convert(A.format,A.colorSpace),ye=l.convert(A.type),ge=F(A.internalFormat,xe,ye,A.colorSpace),we=c&&A.isVideoTexture!==!0,Te=Ee.__version===void 0||ce===!0,qe=Pe.dataReady;let k=O(A,Se,ve);j(s.TEXTURE_CUBE_MAP,A,ve);let me;if(ke){we&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,k,ge,Se.width,Se.height);for(let te=0;te<6;te++){me=Ue[te].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const Be=me[Ne];A.format!==xi?xe!==null?we?qe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Be.width,Be.height,xe,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,ge,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?qe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Be.width,Be.height,xe,ye,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,ge,Be.width,Be.height,0,xe,ye,Be.data)}}}else{if(me=A.mipmaps,we&&Te){me.length>0&&k++;const te=Mt(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,k,ge,te.width,te.height)}for(let te=0;te<6;te++)if(ut){we?qe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue[te].width,Ue[te].height,xe,ye,Ue[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ge,Ue[te].width,Ue[te].height,0,xe,ye,Ue[te].data);for(let Ne=0;Ne<me.length;Ne++){const dt=me[Ne].image[te].image;we?qe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,dt.width,dt.height,xe,ye,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,ge,dt.width,dt.height,0,xe,ye,dt.data)}}else{we?qe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe,ye,Ue[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ge,xe,ye,Ue[te]);for(let Ne=0;Ne<me.length;Ne++){const Be=me[Ne];we?qe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,xe,ye,Be.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,ge,xe,ye,Be.image[te])}}}R(A,ve)&&P(s.TEXTURE_CUBE_MAP),Ee.__version=Pe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ze(I,A,he,ce,Pe,Ee){const it=l.convert(he.format,he.colorSpace),et=l.convert(he.type),Ce=F(he.internalFormat,it,et,he.colorSpace);if(!r.get(A).__hasExternalTextures){const ut=Math.max(1,A.width>>Ee),Ue=Math.max(1,A.height>>Ee);Pe===s.TEXTURE_3D||Pe===s.TEXTURE_2D_ARRAY?t.texImage3D(Pe,Ee,Ce,ut,Ue,A.depth,0,it,et,null):t.texImage2D(Pe,Ee,Ce,ut,Ue,0,it,et,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),xt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,Pe,r.get(he).__webglTexture,0,We(A)):(Pe===s.TEXTURE_2D||Pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,Pe,r.get(he).__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(I,A,he){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let ce=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(he||xt(A)){const Pe=A.depthTexture;Pe&&Pe.isDepthTexture&&(Pe.type===ji?ce=s.DEPTH_COMPONENT32F:Pe.type===yr&&(ce=s.DEPTH_COMPONENT24));const Ee=We(A);xt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,ce,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ce,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ce,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){const ce=We(A);he&&xt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,A.width,A.height):xt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const ce=A.textures;for(let Pe=0;Pe<ce.length;Pe++){const Ee=ce[Pe],it=l.convert(Ee.format,Ee.colorSpace),et=l.convert(Ee.type),Ce=F(Ee.internalFormat,it,et,Ee.colorSpace),ke=We(A);he&&xt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ce,A.width,A.height):xt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),se(A.depthTexture,0);const ce=r.get(A.depthTexture).__webglTexture,Pe=We(A);if(A.depthTexture.format===ts)xt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(A.depthTexture.format===so)xt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function nt(I){const A=r.get(I),he=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(he)throw new Error("target.depthTexture not supported in Cube render targets");ct(A.__webglFramebuffer,I)}else if(he){A.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ce]),A.__webglDepthbuffer[ce]=s.createRenderbuffer(),Le(A.__webglDepthbuffer[ce],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Le(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(I,A,he){const ce=r.get(I);A!==void 0&&ze(ce.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),he!==void 0&&nt(I)}function It(I){const A=I.texture,he=r.get(I),ce=r.get(A);I.addEventListener("dispose",_e);const Pe=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,it=Pe.length>1,et=v(I)||c;if(it||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=A.version,f.memory.textures++),Ee){he.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(c&&A.mipmaps&&A.mipmaps.length>0){he.__webglFramebuffer[Ce]=[];for(let ke=0;ke<A.mipmaps.length;ke++)he.__webglFramebuffer[Ce][ke]=s.createFramebuffer()}else he.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){he.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)he.__webglFramebuffer[Ce]=s.createFramebuffer()}else he.__webglFramebuffer=s.createFramebuffer();if(it)if(a.drawBuffers)for(let Ce=0,ke=Pe.length;Ce<ke;Ce++){const ut=r.get(Pe[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&I.samples>0&&xt(I)===!1){he.__webglMultisampledFramebuffer=s.createFramebuffer(),he.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Pe.length;Ce++){const ke=Pe[Ce];he.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const ut=l.convert(ke.format,ke.colorSpace),Ue=l.convert(ke.type),Se=F(ke.internalFormat,ut,Ue,ke.colorSpace,I.isXRRenderTarget===!0),ve=We(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Se,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(he.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(he.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),j(s.TEXTURE_CUBE_MAP,A,et);for(let Ce=0;Ce<6;Ce++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)ze(he.__webglFramebuffer[Ce][ke],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else ze(he.__webglFramebuffer[Ce],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);R(A,et)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(it){for(let Ce=0,ke=Pe.length;Ce<ke;Ce++){const ut=Pe[Ce],Ue=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ue.__webglTexture),j(s.TEXTURE_2D,ut,et),ze(he.__webglFramebuffer,I,ut,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),R(ut,et)&&P(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(c?Ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,ce.__webglTexture),j(Ce,A,et),c&&A.mipmaps&&A.mipmaps.length>0)for(let ke=0;ke<A.mipmaps.length;ke++)ze(he.__webglFramebuffer[ke],I,A,s.COLOR_ATTACHMENT0,Ce,ke);else ze(he.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,Ce,0);R(A,et)&&P(Ce),t.unbindTexture()}I.depthBuffer&&nt(I)}function Je(I){const A=v(I)||c,he=I.textures;for(let ce=0,Pe=he.length;ce<Pe;ce++){const Ee=he[ce];if(R(Ee,A)){const it=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,et=r.get(Ee).__webglTexture;t.bindTexture(it,et),P(it),t.unbindTexture()}}}function ot(I){if(c&&I.samples>0&&xt(I)===!1){const A=I.textures,he=I.width,ce=I.height;let Pe=s.COLOR_BUFFER_BIT;const Ee=[],it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=r.get(I),Ce=A.length>1;if(Ce)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){Ee.push(s.COLOR_ATTACHMENT0+ke),I.depthBuffer&&Ee.push(it);const ut=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(ut===!1&&(I.depthBuffer&&(Pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Pe|=s.STENCIL_BUFFER_BIT)),Ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,et.__webglColorRenderbuffer[ke]),ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[it]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[it])),Ce){const Ue=r.get(A[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,he,ce,0,0,he,ce,Pe,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,et.__webglColorRenderbuffer[ke]);const ut=r.get(A[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function We(I){return Math.min(a.maxSamples,I.samples)}function xt(I){const A=r.get(I);return c&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(I){const A=f.render.frame;g.get(I)!==A&&(g.set(I,A),I.update())}function pt(I,A){const he=I.colorSpace,ce=I.format,Pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Ff||he!==Rr&&he!==xr&&(kt.getTransfer(he)===Wt?c===!1?e.has("EXT_sRGB")===!0&&ce===xi?(I.format=Ff,I.minFilter=Bn,I.generateMipmaps=!1):A=kg.sRGBToLinear(A):(ce!==xi||Pe!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",he)),A}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(_.width=I.naturalWidth||I.width,_.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(_.width=I.displayWidth,_.height=I.displayHeight):(_.width=I.width,_.height=I.height),_}this.allocateTextureUnit=ee,this.resetTextureUnits=B,this.setTexture2D=se,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=Q,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=xt}function QE(s,e,t){const r=t.isWebGL2;function a(l,f=xr){let c;const h=kt.getTransfer(f);if(l===Er)return s.UNSIGNED_BYTE;if(l===bg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Pg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===Dv)return s.BYTE;if(l===Iv)return s.SHORT;if(l===Wf)return s.UNSIGNED_SHORT;if(l===Cg)return s.INT;if(l===yr)return s.UNSIGNED_INT;if(l===ji)return s.FLOAT;if(l===ra)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===Nv)return s.ALPHA;if(l===xi)return s.RGBA;if(l===Uv)return s.LUMINANCE;if(l===Fv)return s.LUMINANCE_ALPHA;if(l===ts)return s.DEPTH_COMPONENT;if(l===so)return s.DEPTH_STENCIL;if(l===Ff)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Ov)return s.RED;if(l===Lg)return s.RED_INTEGER;if(l===zv)return s.RG;if(l===Dg)return s.RG_INTEGER;if(l===Ig)return s.RGBA_INTEGER;if(l===zc||l===kc||l===Bc||l===Hc)if(h===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===kp||l===Bp||l===Hp||l===Gp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===kp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Bp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Hp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Gp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ng)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Vp||l===Wp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Vp)return h===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Wp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Xp||l===jp||l===qp||l===Yp||l===$p||l===Kp||l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm||l===im||l===rm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Xp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===jp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===qp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Yp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===$p)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Kp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Zp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Qp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Jp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===em)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===tm)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===nm)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===im)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===rm)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Gc||l===sm||l===om)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Gc)return h===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===sm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===om)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===kv||l===am||l===lm||l===um)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Gc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===am)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===lm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===um)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===es?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class JE extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ta extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ta;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Dn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new Ar({extensions:{fragDepth:!0},vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Ot(new ao(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class r1 extends lo{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,p=null,_=null,g=null,x=null,S=null,M=null;const w=new i1,y=t.getContextAttributes();let v=null,b=null;const R=[],P=[],F=new vt;let O=null;const L=new Kn;L.layers.enable(1),L.viewport=new qt;const q=new Kn;q.layers.enable(2),q.viewport=new qt;const _e=[L,q],T=new JE;T.layers.enable(1),T.layers.enable(2);let D=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=R[j];return de===void 0&&(de=new gf,R[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=R[j];return de===void 0&&(de=new gf,R[j]=de),de.getGripSpace()},this.getHand=function(j){let de=R[j];return de===void 0&&(de=new gf,R[j]=de),de.getHandSpace()};function re(j){const de=P.indexOf(j.inputSource);if(de===-1)return;const Me=R[de];Me!==void 0&&(Me.update(j.inputSource,j.frame,p||f),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",ee);for(let j=0;j<R.length;j++){const de=P[j];de!==null&&(P[j]=null,R[j].disconnect(de))}D=null,le=null,w.reset(),e.setRenderTarget(v),S=null,x=null,g=null,a=null,b=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",B),a.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(F),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:a.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new ns(S.framebufferWidth,S.framebufferHeight,{format:xi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Me=null,Ge=null;y.depth&&(Ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?so:ts,Me=y.stencil?es:yr);const ze={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new ns(x.textureWidth,x.textureHeight,{format:xi,type:Er,depthTexture:new Zg(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Le=e.properties.get(b);Le.__ignoreDepthValues=x.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(c),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ee(j){for(let de=0;de<j.removed.length;de++){const Me=j.removed[de],Ge=P.indexOf(Me);Ge>=0&&(P[Ge]=null,R[Ge].disconnect(Me))}for(let de=0;de<j.added.length;de++){const Me=j.added[de];let Ge=P.indexOf(Me);if(Ge===-1){for(let Le=0;Le<R.length;Le++)if(Le>=P.length){P.push(Me),Ge=Le;break}else if(P[Le]===null){P[Le]=Me,Ge=Le;break}if(Ge===-1)break}const ze=R[Ge];ze&&ze.connect(Me)}}const X=new V,se=new V;function H(j,de,Me){X.setFromMatrixPosition(de.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const Ge=X.distanceTo(se),ze=de.projectionMatrix.elements,Le=Me.projectionMatrix.elements,ct=ze[14]/(ze[10]-1),nt=ze[14]/(ze[10]+1),Q=(ze[9]+1)/ze[5],It=(ze[9]-1)/ze[5],Je=(ze[8]-1)/ze[0],ot=(Le[8]+1)/Le[0],We=ct*Je,xt=ct*ot,rt=Ge/(-Je+ot),pt=rt*-Je;de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pt),j.translateZ(rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Mt=ct+rt,I=nt+rt,A=We-pt,he=xt+(Ge-pt),ce=Q*nt/I*Mt,Pe=It*nt/I*Mt;j.projectionMatrix.makePerspective(A,he,ce,Pe,Mt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function $(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;w.texture!==null&&(j.near=w.depthNear,j.far=w.depthFar),T.near=q.near=L.near=j.near,T.far=q.far=L.far=j.far,(D!==T.near||le!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,le=T.far,L.near=D,L.far=le,q.near=D,q.far=le,L.updateProjectionMatrix(),q.updateProjectionMatrix(),j.updateProjectionMatrix());const de=j.parent,Me=T.cameras;$(T,de);for(let Ge=0;Ge<Me.length;Ge++)$(Me[Ge],de);Me.length===2?H(T,L,q):T.projectionMatrix.copy(L.projectionMatrix),Z(j,T,de)};function Z(j,de,Me){Me===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Of*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(j){h=j,x!==null&&(x.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null};let N=null;function Y(j,de){if(_=de.getViewerPose(p||f),M=de,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Ge=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,Ge=!0);for(let Le=0;Le<Me.length;Le++){const ct=Me[Le];let nt=null;if(S!==null)nt=S.getViewport(ct);else{const It=g.getViewSubImage(x,ct);nt=It.viewport,Le===0&&(e.setRenderTargetTextures(b,It.colorTexture,x.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(b))}let Q=_e[Le];Q===void 0&&(Q=new Kn,Q.layers.enable(Le),Q.viewport=new qt,_e[Le]=Q),Q.matrix.fromArray(ct.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ct.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(T.matrix.copy(Q.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ge===!0&&T.cameras.push(Q)}const ze=a.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Le=g.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,a.renderState)}}for(let Me=0;Me<R.length;Me++){const Ge=P[Me],ze=R[Me];Ge!==null&&ze!==void 0&&ze.update(Ge,de,p||f)}w.render(e,T),N&&N(j,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ie=new $g;Ie.setAnimationLoop(Y),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const qr=new bi,s1=new Ht;function o1(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,jg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,b,R,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,P)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?h(y,v,b,R):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const b=e.get(v),R=b.envMap,P=b.envMapRotation;if(R&&(y.envMap.value=R,qr.copy(P),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(qr)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const F=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*F,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,b,R){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*b,y.scale.value=R*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,b){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const b=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function a1(s,e,t,r){let a={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(b,R){const P=R.program;r.uniformBlockBinding(b,P)}function p(b,R){let P=a[b.id];P===void 0&&(M(b),P=_(b),a[b.id]=P,b.addEventListener("dispose",y));const F=R.program;r.updateUBOMapping(b,F);const O=e.render.frame;l[b.id]!==O&&(x(b),l[b.id]=O)}function _(b){const R=g();b.__bindingPointIndex=R;const P=s.createBuffer(),F=b.__size,O=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function g(){for(let b=0;b<c;b++)if(f.indexOf(b)===-1)return f.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const R=a[b.id],P=b.uniforms,F=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,L=P.length;O<L;O++){const q=Array.isArray(P[O])?P[O]:[P[O]];for(let _e=0,T=q.length;_e<T;_e++){const D=q[_e];if(S(D,O,_e,F)===!0){const le=D.__offset,re=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let ee=0;ee<re.length;ee++){const X=re[ee],se=w(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,le+B,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,B),B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,R,P,F){const O=b.value,L=R+"_"+P;if(F[L]===void 0)return typeof O=="number"||typeof O=="boolean"?F[L]=O:F[L]=O.clone(),!0;{const q=F[L];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return F[L]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function M(b){const R=b.uniforms;let P=0;const F=16;for(let L=0,q=R.length;L<q;L++){const _e=Array.isArray(R[L])?R[L]:[R[L]];for(let T=0,D=_e.length;T<D;T++){const le=_e[T],re=Array.isArray(le.value)?le.value:[le.value];for(let B=0,ee=re.length;B<ee;B++){const X=re[B],se=w(X),H=P%F;H!==0&&F-H<se.boundary&&(P+=F-H),le.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=P,P+=se.storage}}}const O=P%F;return O>0&&(P+=F-O),b.__size=P,b.__cache={},this}function w(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function y(b){const R=b.target;R.removeEventListener("dispose",y);const P=f.indexOf(R.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const b in a)s.deleteBuffer(a[b]);f=[],a={},l={}}return{bind:h,update:p,dispose:v}}class i0{constructor(e={}){const{canvas:t=Zv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=f;const S=new Uint32Array(4),M=new Int32Array(4);let w=null,y=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let P=!1,F=0,O=0,L=null,q=-1,_e=null;const T=new qt,D=new qt;let le=null;const re=new Tt(0);let B=0,ee=t.width,X=t.height,se=1,H=null,$=null;const Z=new qt(0,0,ee,X),N=new qt(0,0,ee,X);let Y=!1;const Ie=new qf;let j=!1,de=!1,Me=null;const Ge=new Ht,ze=new vt,Le=new V,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return L===null?se:1}let Q=r;function It(C,K){for(let ue=0;ue<C.length;ue++){const fe=C[ue],oe=t.getContext(fe,K);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vf}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",me,!1),Q===null){const K=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&K.shift(),Q=It(K,C),Q===null)throw It(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Je,ot,We,xt,rt,pt,Mt,I,A,he,ce,Pe,Ee,it,et,Ce,ke,ut,Ue,Se,ve,xe,ye,ge;function we(){Je=new hM(Q),ot=new aM(Q,Je,e),Je.init(ot),xe=new QE(Q,Je,ot),We=new KE(Q,Je,ot),xt=new gM(Q),rt=new FE,pt=new ZE(Q,Je,We,rt,ot,xe,xt),Mt=new uM(R),I=new dM(R),A=new Mx(Q,ot),ye=new sM(Q,Je,A,ot),he=new pM(Q,A,xt,ye),ce=new yM(Q,he,A,xt),Ue=new xM(Q,ot,pt),Ce=new lM(rt),Pe=new UE(R,Mt,I,Je,ot,ye,Ce),Ee=new o1(R,rt),it=new zE,et=new WE(Je,ot),ut=new rM(R,Mt,I,We,ce,x,h),ke=new $E(R,ce,ot),ge=new a1(Q,xt,ot,We),Se=new oM(Q,Je,xt,ot),ve=new mM(Q,Je,xt,ot),xt.programs=Pe.programs,R.capabilities=ot,R.extensions=Je,R.properties=rt,R.renderLists=it,R.shadowMap=ke,R.state=We,R.info=xt}we();const Te=new r1(R,Q);this.xr=Te,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(ee,X,!1))},this.getSize=function(C){return C.set(ee,X)},this.setSize=function(C,K,ue=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,X=K,t.width=Math.floor(C*se),t.height=Math.floor(K*se),ue===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ee*se,X*se).floor()},this.setDrawingBufferSize=function(C,K,ue){ee=C,X=K,se=ue,t.width=Math.floor(C*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,K,ue,fe){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,K,ue,fe),We.viewport(T.copy(Z).multiplyScalar(se).round())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,K,ue,fe){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,K,ue,fe),We.scissor(D.copy(N).multiplyScalar(se).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){We.setScissorTest(Y=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(C=!0,K=!0,ue=!0){let fe=0;if(C){let oe=!1;if(L!==null){const Ve=L.texture.format;oe=Ve===Ig||Ve===Dg||Ve===Lg}if(oe){const Ve=L.texture.type,Ze=Ve===Er||Ve===yr||Ve===Wf||Ve===es||Ve===bg||Ve===Pg,st=ut.getClearColor(),Xe=ut.getClearAlpha(),St=st.r,ft=st.g,mt=st.b;Ze?(S[0]=St,S[1]=ft,S[2]=mt,S[3]=Xe,Q.clearBufferuiv(Q.COLOR,0,S)):(M[0]=St,M[1]=ft,M[2]=mt,M[3]=Xe,Q.clearBufferiv(Q.COLOR,0,M))}else fe|=Q.COLOR_BUFFER_BIT}K&&(fe|=Q.DEPTH_BUFFER_BIT),ue&&(fe|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",me,!1),it.dispose(),et.dispose(),rt.dispose(),Mt.dispose(),I.dispose(),ce.dispose(),ye.dispose(),ge.dispose(),Pe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ht),Te.removeEventListener("sessionend",yt),Me&&(Me.dispose(),Me=null),Yt.stop()};function qe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=xt.autoReset,K=ke.enabled,ue=ke.autoUpdate,fe=ke.needsUpdate,oe=ke.type;we(),xt.autoReset=C,ke.enabled=K,ke.autoUpdate=ue,ke.needsUpdate=fe,ke.type=oe}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const K=C.target;K.removeEventListener("dispose",te),Ne(K)}function Ne(C){Be(C),rt.remove(C)}function Be(C){const K=rt.get(C).programs;K!==void 0&&(K.forEach(function(ue){Pe.releaseProgram(ue)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ue,fe,oe,Ve){K===null&&(K=ct);const Ze=oe.isMesh&&oe.matrixWorld.determinant()<0,st=co(C,K,ue,fe,oe);We.setMaterial(fe,Ze);let Xe=ue.index,St=1;if(fe.wireframe===!0){if(Xe=he.getWireframeAttribute(ue),Xe===void 0)return;St=2}const ft=ue.drawRange,mt=ue.attributes.position;let Nt=ft.start*St,un=(ft.start+ft.count)*St;Ve!==null&&(Nt=Math.max(Nt,Ve.start*St),un=Math.min(un,(Ve.start+Ve.count)*St)),Xe!==null?(Nt=Math.max(Nt,0),un=Math.min(un,Xe.count)):mt!=null&&(Nt=Math.max(Nt,0),un=Math.min(un,mt.count));const Xt=un-Nt;if(Xt<0||Xt===1/0)return;ye.setup(oe,fe,st,ue,Xe);let mn,z=Se;if(Xe!==null&&(mn=A.get(Xe),z=ve,z.setIndex(mn)),oe.isMesh)fe.wireframe===!0?(We.setLineWidth(fe.wireframeLinewidth*nt()),z.setMode(Q.LINES)):z.setMode(Q.TRIANGLES);else if(oe.isLine){let Ae=fe.linewidth;Ae===void 0&&(Ae=1),We.setLineWidth(Ae*nt()),oe.isLineSegments?z.setMode(Q.LINES):oe.isLineLoop?z.setMode(Q.LINE_LOOP):z.setMode(Q.LINE_STRIP)}else oe.isPoints?z.setMode(Q.POINTS):oe.isSprite&&z.setMode(Q.TRIANGLES);if(oe.isBatchedMesh)z.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)z.renderInstances(Nt,Xt,oe.count);else if(ue.isInstancedBufferGeometry){const Ae=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,tt=Math.min(ue.instanceCount,Ae);z.renderInstances(Nt,Xt,tt)}else z.render(Nt,Xt)};function dt(C,K,ue){C.transparent===!0&&C.side===Zn&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Si(C,K,ue),C.side=Tr,C.needsUpdate=!0,Si(C,K,ue),C.side=Zn):Si(C,K,ue)}this.compile=function(C,K,ue=null){ue===null&&(ue=C),y=et.get(ue),y.init(),b.push(y),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(y.pushLight(oe),oe.castShadow&&y.pushShadow(oe))}),C!==ue&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(y.pushLight(oe),oe.castShadow&&y.pushShadow(oe))}),y.setupLights(R._useLegacyLights);const fe=new Set;return C.traverse(function(oe){const Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let Ze=0;Ze<Ve.length;Ze++){const st=Ve[Ze];dt(st,ue,oe),fe.add(st)}else dt(Ve,ue,oe),fe.add(Ve)}),b.pop(),y=null,fe},this.compileAsync=function(C,K,ue=null){const fe=this.compile(C,K,ue);return new Promise(oe=>{function Ve(){if(fe.forEach(function(Ze){rt.get(Ze).currentProgram.isReady()&&fe.delete(Ze)}),fe.size===0){oe(C);return}setTimeout(Ve,10)}Je.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Rt=null;function _t(C){Rt&&Rt(C)}function ht(){Yt.stop()}function yt(){Yt.start()}const Yt=new $g;Yt.setAnimationLoop(_t),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(C){Rt=C,Te.setAnimationLoop(C),C===null?Yt.stop():Yt.start()},Te.addEventListener("sessionstart",ht),Te.addEventListener("sessionend",yt),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,K,L),y=et.get(C,b.length),y.init(),b.push(y),Ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ie.setFromProjectionMatrix(Ge),de=this.localClippingEnabled,j=Ce.init(this.clippingPlanes,de),w=it.get(C,v.length),w.init(),v.push(w),Zt(C,K,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(H,$),this.info.render.frame++,j===!0&&Ce.beginShadows();const ue=y.state.shadowsArray;if(ke.render(ue,C,K),j===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&ut.render(w,C),y.setupLights(R._useLegacyLights),K.isArrayCamera){const fe=K.cameras;for(let oe=0,Ve=fe.length;oe<Ve;oe++){const Ze=fe[oe];rs(w,C,Ze,Ze.viewport)}}else rs(w,C,K);L!==null&&(pt.updateMultisampleRenderTarget(L),pt.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(R,C,K),ye.resetDefaultState(),q=-1,_e=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function Zt(C,K,ue,fe){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ie.intersectsSprite(C)){fe&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const Ze=ce.update(C),st=C.material;st.visible&&w.push(C,Ze,st,ue,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ie.intersectsObject(C))){const Ze=ce.update(C),st=C.material;if(fe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Le.copy(Ze.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(st)){const Xe=Ze.groups;for(let St=0,ft=Xe.length;St<ft;St++){const mt=Xe[St],Nt=st[mt.materialIndex];Nt&&Nt.visible&&w.push(C,Ze,Nt,ue,Le.z,mt)}}else st.visible&&w.push(C,Ze,st,ue,Le.z,null)}}const Ve=C.children;for(let Ze=0,st=Ve.length;Ze<st;Ze++)Zt(Ve[Ze],K,ue,fe)}function rs(C,K,ue,fe){const oe=C.opaque,Ve=C.transmissive,Ze=C.transparent;y.setupLightsView(ue),j===!0&&Ce.setGlobalState(R.clippingPlanes,ue),Ve.length>0&&Pi(oe,Ve,K,ue),fe&&We.viewport(T.copy(fe)),oe.length>0&&ai(oe,K,ue),Ve.length>0&&ai(Ve,K,ue),Ze.length>0&&ai(Ze,K,ue),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Pi(C,K,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const Ve=ot.isWebGL2;Me===null&&(Me=new ns(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")?ra:Er,minFilter:Jr,samples:Ve?4:0})),R.getDrawingBufferSize(ze),Ve?Me.setSize(ze.x,ze.y):Me.setSize(zf(ze.x),zf(ze.y));const Ze=R.getRenderTarget();R.setRenderTarget(Me),R.getClearColor(re),B=R.getClearAlpha(),B<1&&R.setClearColor(16777215,.5),R.clear();const st=R.toneMapping;R.toneMapping=Mr,ai(C,ue,fe),pt.updateMultisampleRenderTarget(Me),pt.updateRenderTargetMipmap(Me);let Xe=!1;for(let St=0,ft=K.length;St<ft;St++){const mt=K[St],Nt=mt.object,un=mt.geometry,Xt=mt.material,mn=mt.group;if(Xt.side===Zn&&Nt.layers.test(fe.layers)){const z=Xt.side;Xt.side=Gn,Xt.needsUpdate=!0,Li(Nt,ue,fe,un,Xt,mn),Xt.side=z,Xt.needsUpdate=!0,Xe=!0}}Xe===!0&&(pt.updateMultisampleRenderTarget(Me),pt.updateRenderTargetMipmap(Me)),R.setRenderTarget(Ze),R.setClearColor(re,B),R.toneMapping=st}function ai(C,K,ue){const fe=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ve=C.length;oe<Ve;oe++){const Ze=C[oe],st=Ze.object,Xe=Ze.geometry,St=fe===null?Ze.material:fe,ft=Ze.group;st.layers.test(ue.layers)&&Li(st,K,ue,Xe,St,ft)}}function Li(C,K,ue,fe,oe,Ve){C.onBeforeRender(R,K,ue,fe,oe,Ve),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(R,K,ue,fe,C,Ve),oe.transparent===!0&&oe.side===Zn&&oe.forceSinglePass===!1?(oe.side=Gn,oe.needsUpdate=!0,R.renderBufferDirect(ue,K,fe,oe,C,Ve),oe.side=Tr,oe.needsUpdate=!0,R.renderBufferDirect(ue,K,fe,oe,C,Ve),oe.side=Zn):R.renderBufferDirect(ue,K,fe,oe,C,Ve),C.onAfterRender(R,K,ue,fe,oe,Ve)}function Si(C,K,ue){K.isScene!==!0&&(K=ct);const fe=rt.get(C),oe=y.state.lights,Ve=y.state.shadowsArray,Ze=oe.state.version,st=Pe.getParameters(C,oe.state,Ve,K,ue),Xe=Pe.getProgramCacheKey(st);let St=fe.programs;fe.environment=C.isMeshStandardMaterial?K.environment:null,fe.fog=K.fog,fe.envMap=(C.isMeshStandardMaterial?I:Mt).get(C.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,St===void 0&&(C.addEventListener("dispose",te),St=new Map,fe.programs=St);let ft=St.get(Xe);if(ft!==void 0){if(fe.currentProgram===ft&&fe.lightsStateVersion===Ze)return os(C,st),ft}else st.uniforms=Pe.getUniforms(C),C.onBuild(ue,st,R),C.onBeforeCompile(st,R),ft=Pe.acquireProgram(st,Xe),St.set(Xe,ft),fe.uniforms=st.uniforms;const mt=fe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(mt.clippingPlanes=Ce.uniform),os(C,st),fe.needsLights=as(C),fe.lightsStateVersion=Ze,fe.needsLights&&(mt.ambientLightColor.value=oe.state.ambient,mt.lightProbe.value=oe.state.probe,mt.directionalLights.value=oe.state.directional,mt.directionalLightShadows.value=oe.state.directionalShadow,mt.spotLights.value=oe.state.spot,mt.spotLightShadows.value=oe.state.spotShadow,mt.rectAreaLights.value=oe.state.rectArea,mt.ltc_1.value=oe.state.rectAreaLTC1,mt.ltc_2.value=oe.state.rectAreaLTC2,mt.pointLights.value=oe.state.point,mt.pointLightShadows.value=oe.state.pointShadow,mt.hemisphereLights.value=oe.state.hemi,mt.directionalShadowMap.value=oe.state.directionalShadowMap,mt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,mt.spotShadowMap.value=oe.state.spotShadowMap,mt.spotLightMatrix.value=oe.state.spotLightMatrix,mt.spotLightMap.value=oe.state.spotLightMap,mt.pointShadowMap.value=oe.state.pointShadowMap,mt.pointShadowMatrix.value=oe.state.pointShadowMatrix),fe.currentProgram=ft,fe.uniformsList=null,ft}function ss(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Bl.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function os(C,K){const ue=rt.get(C);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function co(C,K,ue,fe,oe){K.isScene!==!0&&(K=ct),pt.resetTextureUnits();const Ve=K.fog,Ze=fe.isMeshStandardMaterial?K.environment:null,st=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Rr,Xe=(fe.isMeshStandardMaterial?I:Mt).get(fe.envMap||Ze),St=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),mt=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,un=!!ue.morphAttributes.color;let Xt=Mr;fe.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Xt=R.toneMapping);const mn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,z=mn!==void 0?mn.length:0,Ae=rt.get(fe),tt=y.state.lights;if(j===!0&&(de===!0||C!==_e)){const In=C===_e&&fe.id===q;Ce.setState(fe,C,In)}let bt=!1;fe.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==tt.state.version||Ae.outputColorSpace!==st||oe.isBatchedMesh&&Ae.batching===!1||!oe.isBatchedMesh&&Ae.batching===!0||oe.isInstancedMesh&&Ae.instancing===!1||!oe.isInstancedMesh&&Ae.instancing===!0||oe.isSkinnedMesh&&Ae.skinning===!1||!oe.isSkinnedMesh&&Ae.skinning===!0||oe.isInstancedMesh&&Ae.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ae.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ae.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ae.instancingMorph===!1&&oe.morphTexture!==null||Ae.envMap!==Xe||fe.fog===!0&&Ae.fog!==Ve||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ce.numPlanes||Ae.numIntersection!==Ce.numIntersection)||Ae.vertexAlphas!==St||Ae.vertexTangents!==ft||Ae.morphTargets!==mt||Ae.morphNormals!==Nt||Ae.morphColors!==un||Ae.toneMapping!==Xt||ot.isWebGL2===!0&&Ae.morphTargetsCount!==z)&&(bt=!0):(bt=!0,Ae.__version=fe.version);let Ct=Ae.currentProgram;bt===!0&&(Ct=Si(fe,K,oe));let cn=!1,An=!1,Vn=!1;const Pt=Ct.getUniforms(),vn=Ae.uniforms;if(We.useProgram(Ct.program)&&(cn=!0,An=!0,Vn=!0),fe.id!==q&&(q=fe.id,An=!0),cn||_e!==C){Pt.setValue(Q,"projectionMatrix",C.projectionMatrix),Pt.setValue(Q,"viewMatrix",C.matrixWorldInverse);const In=Pt.map.cameraPosition;In!==void 0&&In.setValue(Q,Le.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Pt.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Pt.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),_e!==C&&(_e=C,An=!0,Vn=!0)}if(oe.isSkinnedMesh){Pt.setOptional(Q,oe,"bindMatrix"),Pt.setOptional(Q,oe,"bindMatrixInverse");const In=oe.skeleton;In&&(ot.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Pt.setValue(Q,"boneTexture",In.boneTexture,pt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(Pt.setOptional(Q,oe,"batchingTexture"),Pt.setValue(Q,"batchingTexture",oe._matricesTexture,pt));const fo=ue.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&ot.isWebGL2===!0)&&Ue.update(oe,ue,Ct),(An||Ae.receiveShadow!==oe.receiveShadow)&&(Ae.receiveShadow=oe.receiveShadow,Pt.setValue(Q,"receiveShadow",oe.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(vn.envMap.value=Xe,vn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),An&&(Pt.setValue(Q,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&li(vn,Vn),Ve&&fe.fog===!0&&Ee.refreshFogUniforms(vn,Ve),Ee.refreshMaterialUniforms(vn,fe,se,X,Me),Bl.upload(Q,ss(Ae),vn,pt)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Bl.upload(Q,ss(Ae),vn,pt),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Pt.setValue(Q,"center",oe.center),Pt.setValue(Q,"modelViewMatrix",oe.modelViewMatrix),Pt.setValue(Q,"normalMatrix",oe.normalMatrix),Pt.setValue(Q,"modelMatrix",oe.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const In=fe.uniformsGroups;for(let br=0,ua=In.length;br<ua;br++)if(ot.isWebGL2){const ls=In[br];ge.update(ls,Ct),ge.bind(ls,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function li(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function as(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,K,ue){rt.get(C.texture).__webglTexture=K,rt.get(C.depthTexture).__webglTexture=ue;const fe=rt.get(C);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ue===void 0,fe.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){const ue=rt.get(C);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ue=0){L=C,F=K,O=ue;let fe=!0,oe=null,Ve=!1,Ze=!1;if(C){const Xe=rt.get(C);Xe.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(Q.FRAMEBUFFER,null),fe=!1):Xe.__webglFramebuffer===void 0?pt.setupRenderTarget(C):Xe.__hasExternalTextures&&pt.rebindTextures(C,rt.get(C.texture).__webglTexture,rt.get(C.depthTexture).__webglTexture);const St=C.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(Ze=!0);const ft=rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ft[K])?oe=ft[K][ue]:oe=ft[K],Ve=!0):ot.isWebGL2&&C.samples>0&&pt.useMultisampledRTT(C)===!1?oe=rt.get(C).__webglMultisampledFramebuffer:Array.isArray(ft)?oe=ft[ue]:oe=ft,T.copy(C.viewport),D.copy(C.scissor),le=C.scissorTest}else T.copy(Z).multiplyScalar(se).floor(),D.copy(N).multiplyScalar(se).floor(),le=Y;if(We.bindFramebuffer(Q.FRAMEBUFFER,oe)&&ot.drawBuffers&&fe&&We.drawBuffers(C,oe),We.viewport(T),We.scissor(D),We.setScissorTest(le),Ve){const Xe=rt.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xe.__webglTexture,ue)}else if(Ze){const Xe=rt.get(C.texture),St=K||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Xe.__webglTexture,ue||0,St)}q=-1},this.readRenderTargetPixels=function(C,K,ue,fe,oe,Ve,Ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(st=st[Ze]),st){We.bindFramebuffer(Q.FRAMEBUFFER,st);try{const Xe=C.texture,St=Xe.format,ft=Xe.type;if(St!==xi&&xe.convert(St)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mt=ft===ra&&(Je.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Je.has("EXT_color_buffer_float"));if(ft!==Er&&xe.convert(ft)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===ji&&(ot.isWebGL2||Je.has("OES_texture_float")||Je.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-fe&&ue>=0&&ue<=C.height-oe&&Q.readPixels(K,ue,fe,oe,xe.convert(St),xe.convert(ft),Ve)}finally{const Xe=L!==null?rt.get(L).__webglFramebuffer:null;We.bindFramebuffer(Q.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,K,ue=0){const fe=Math.pow(2,-ue),oe=Math.floor(K.image.width*fe),Ve=Math.floor(K.image.height*fe);pt.setTexture2D(K,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,C.x,C.y,oe,Ve),We.unbindTexture()},this.copyTextureToTexture=function(C,K,ue,fe=0){const oe=K.image.width,Ve=K.image.height,Ze=xe.convert(ue.format),st=xe.convert(ue.type);pt.setTexture2D(ue,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ue.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ue.unpackAlignment),K.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,fe,C.x,C.y,oe,Ve,Ze,st,K.image.data):K.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,fe,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Ze,K.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,fe,C.x,C.y,Ze,st,K.image),fe===0&&ue.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ue,fe,oe=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=Math.round(C.max.x-C.min.x),Ze=Math.round(C.max.y-C.min.y),st=C.max.z-C.min.z+1,Xe=xe.convert(fe.format),St=xe.convert(fe.type);let ft;if(fe.isData3DTexture)pt.setTexture3D(fe,0),ft=Q.TEXTURE_3D;else if(fe.isDataArrayTexture||fe.isCompressedArrayTexture)pt.setTexture2DArray(fe,0),ft=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,fe.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,fe.unpackAlignment);const mt=Q.getParameter(Q.UNPACK_ROW_LENGTH),Nt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),un=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Xt=Q.getParameter(Q.UNPACK_SKIP_ROWS),mn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),z=ue.isCompressedTexture?ue.mipmaps[oe]:ue.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,z.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,z.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,C.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,C.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,C.min.z),ue.isDataTexture||ue.isData3DTexture?Q.texSubImage3D(ft,oe,K.x,K.y,K.z,Ve,Ze,st,Xe,St,z.data):fe.isCompressedArrayTexture?Q.compressedTexSubImage3D(ft,oe,K.x,K.y,K.z,Ve,Ze,st,Xe,z.data):Q.texSubImage3D(ft,oe,K.x,K.y,K.z,Ve,Ze,st,Xe,St,z),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,mt),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Nt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,un),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Xt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,mn),oe===0&&fe.generateMipmaps&&Q.generateMipmap(ft),We.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?pt.setTextureCube(C,0):C.isData3DTexture?pt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pt.setTexture2DArray(C,0):pt.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){F=0,O=0,L=null,We.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xf?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===Zl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class l1 extends i0{}l1.prototype.isWebGL1Renderer=!0;class $f{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=t}clone(){return new $f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class u1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class c1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new V;class $l{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ci(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bf extends Cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qs;const Zo=new V,Ys=new V,$s=new V,Ks=new vt,Qo=new vt,r0=new Ht,Dl=new V,Jo=new V,Il=new V,Jm=new vt,_f=new vt,eg=new vt;class tg extends rn{constructor(e=new Bf){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new c1(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new $l(r,3,0,!1)),qs.setAttribute("uv",new $l(r,2,3,!1))}this.geometry=qs,this.material=e,this.center=new vt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),r0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-$s.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Nl(Dl.set(-.5,-.5,0),$s,f,Ys,a,l),Nl(Jo.set(.5,-.5,0),$s,f,Ys,a,l),Nl(Il.set(.5,.5,0),$s,f,Ys,a,l),Jm.set(0,0),_f.set(1,0),eg.set(1,1);let c=e.ray.intersectTriangle(Dl,Jo,Il,!1,Zo);if(c===null&&(Nl(Jo.set(-.5,.5,0),$s,f,Ys,a,l),_f.set(0,1),c=e.ray.intersectTriangle(Dl,Il,Jo,!1,Zo),c===null))return;const h=e.ray.origin.distanceTo(Zo);h<e.near||h>e.far||t.push({distance:h,point:Zo.clone(),uv:yi.getInterpolation(Zo,Dl,Jo,Il,Jm,_f,eg,new vt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Nl(s,e,t,r,a,l){Ks.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Qo.x=l*Ks.x-a*Ks.y,Qo.y=a*Ks.x+l*Ks.y):Qo.copy(Ks),s.copy(e),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(r0)}class ia extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ng=new V,ig=new V,rg=new Ht,vf=new jf,Ul=new la;class Hl extends rn{constructor(e=new nn,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)ng.fromBufferAttribute(t,a-1),ig.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=ng.distanceTo(ig);e.setAttribute("lineDistance",new Ft(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(a),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;rg.copy(a).invert(),vf.copy(e.ray).applyMatrix4(rg);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new V,_=new V,g=new V,x=new V,S=this.isLineSegments?2:1,M=r.index,y=r.attributes.position;if(M!==null){const v=Math.max(0,f.start),b=Math.min(M.count,f.start+f.count);for(let R=v,P=b-1;R<P;R+=S){const F=M.getX(R),O=M.getX(R+1);if(p.fromBufferAttribute(y,F),_.fromBufferAttribute(y,O),vf.distanceSqToSegment(p,_,x,g)>h)continue;x.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(x);q<e.near||q>e.far||t.push({distance:q,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let R=v,P=b-1;R<P;R+=S){if(p.fromBufferAttribute(y,R),_.fromBufferAttribute(y,R+1),vf.distanceSqToSegment(p,_,x,g)>h)continue;x.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(x);O<e.near||O>e.far||t.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}const sg=new V,og=new V;class f1 extends Hl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)sg.fromBufferAttribute(t,a),og.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+sg.distanceTo(og);e.setAttribute("lineDistance",new Ft(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s0 extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ag=new Ht,Hf=new jf,Fl=new la,Ol=new V;class d1 extends rn{constructor(e=new nn,t=new s0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(a),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;ag.copy(a).invert(),Hf.copy(e.ray).applyMatrix4(ag);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let M=x,w=S;M<w;M++){const y=p.getX(M);Ol.fromBufferAttribute(g,y),lg(Ol,y,h,a,e,t,this)}}else{const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let M=x,w=S;M<w;M++)Ol.fromBufferAttribute(g,M),lg(Ol,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function lg(s,e,t,r,a,l,f){const c=Hf.distanceSqToPoint(s);if(c<t){const h=new V;Hf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:f})}}class ug extends Dn{constructor(e,t,r,a,l,f,c,h,p){super(e,t,r,a,l,f,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class h1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,p;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),p=r[a]-f,p<0)c=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const _=r[a],x=r[a+1]-_,S=(f-_)/x;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new vt:new V);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,a=[],l=[],f=[],c=new V,h=new Ht;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new V)}l[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const _=Math.abs(a[0].x),g=Math.abs(a[0].y),x=Math.abs(a[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),x<=p&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const M=Math.acos(Tn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,M))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(Tn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],S*M)),f[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Kf(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,p){a(f,c,p*(c-l),p*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,p,_,g){let x=(f-l)/p-(c-l)/(p+_)+(c-f)/_,S=(c-f)/_-(h-f)/(_+g)+(h-c)/g;x*=_,S*=_,a(f,c,x,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const zl=new V,xf=new Kf,yf=new Kf,Sf=new Kf;class Mf extends h1{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new V){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let p,_;this.closed||c>0?p=a[(c-1)%l]:(zl.subVectors(a[0],a[1]).add(a[0]),p=zl);const g=a[c%l],x=a[(c+1)%l];if(this.closed||c+2<l?_=a[(c+2)%l]:(zl.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(_),S);w<1e-4&&(w=1),M<1e-4&&(M=w),y<1e-4&&(y=w),xf.initNonuniformCatmullRom(p.x,g.x,x.x,_.x,M,w,y),yf.initNonuniformCatmullRom(p.y,g.y,x.y,_.y,M,w,y),Sf.initNonuniformCatmullRom(p.z,g.z,x.z,_.z,M,w,y)}else this.curveType==="catmullrom"&&(xf.initCatmullRom(p.x,g.x,x.x,_.x,this.tension),yf.initCatmullRom(p.y,g.y,x.y,_.y,this.tension),Sf.initCatmullRom(p.z,g.z,x.z,_.z,this.tension));return r.set(xf.calc(h),yf.calc(h),Sf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new V().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Zf extends nn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],f=[],c=[],h=[],p=new V,_=new vt;f.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let g=0,x=3;g<=t;g++,x+=3){const S=r+g/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(f[x]/e+1)/2,_.y=(f[x+1]/e+1)/2,h.push(_.x,_.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jl extends nn{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:c,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],g=[],x=[],S=[];let M=0;const w=[],y=r/2;let v=0;b(),f===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(S,2));function b(){const P=new V,F=new V;let O=0;const L=(t-e)/r;for(let q=0;q<=l;q++){const _e=[],T=q/l,D=T*(t-e)+e;for(let le=0;le<=a;le++){const re=le/a,B=re*h+c,ee=Math.sin(B),X=Math.cos(B);F.x=D*ee,F.y=-T*r+y,F.z=D*X,g.push(F.x,F.y,F.z),P.set(ee,L,X).normalize(),x.push(P.x,P.y,P.z),S.push(re,1-T),_e.push(M++)}w.push(_e)}for(let q=0;q<a;q++)for(let _e=0;_e<l;_e++){const T=w[_e][q],D=w[_e+1][q],le=w[_e+1][q+1],re=w[_e][q+1];_.push(T,D,re),_.push(D,le,re),O+=6}p.addGroup(v,O,0),v+=O}function R(P){const F=M,O=new vt,L=new V;let q=0;const _e=P===!0?e:t,T=P===!0?1:-1;for(let le=1;le<=a;le++)g.push(0,y*T,0),x.push(0,T,0),S.push(.5,.5),M++;const D=M;for(let le=0;le<=a;le++){const B=le/a*h+c,ee=Math.cos(B),X=Math.sin(B);L.x=_e*X,L.y=y*T,L.z=_e*ee,g.push(L.x,L.y,L.z),x.push(0,T,0),O.x=ee*.5+.5,O.y=X*.5*T+.5,S.push(O.x,O.y),M++}for(let le=0;le<a;le++){const re=F+le,B=D+le;P===!0?_.push(B,B+1,re):_.push(B+1,B,re),q+=3}p.addGroup(v,q,P===!0?1:2),v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qf extends Jl{constructor(e=1,t=1,r=32,a=1,l=!1,f=0,c=Math.PI*2){super(0,e,t,r,a,l,f,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:f,thetaLength:c}}static fromJSON(e){return new Qf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jf extends nn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+c,Math.PI);let p=0;const _=[],g=new V,x=new V,S=[],M=[],w=[],y=[];for(let v=0;v<=r;v++){const b=[],R=v/r;let P=0;v===0&&f===0?P=.5/t:v===r&&h===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){const O=F/t;g.x=-e*Math.cos(a+O*l)*Math.sin(f+R*c),g.y=e*Math.cos(f+R*c),g.z=e*Math.sin(a+O*l)*Math.sin(f+R*c),M.push(g.x,g.y,g.z),x.copy(g).normalize(),w.push(x.x,x.y,x.z),y.push(O+P,1-R),b.push(p++)}_.push(b)}for(let v=0;v<r;v++)for(let b=0;b<t;b++){const R=_[v][b+1],P=_[v][b],F=_[v+1][b],O=_[v+1][b+1];(v!==0||f>0)&&S.push(R,P,O),(v!==r-1||h<Math.PI)&&S.push(P,F,O)}this.setIndex(S),this.setAttribute("position",new Ft(M,3)),this.setAttribute("normal",new Ft(w,3)),this.setAttribute("uv",new Ft(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ed extends nn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const f=[],c=[],h=[],p=[],_=new V,g=new V,x=new V;for(let S=0;S<=r;S++)for(let M=0;M<=a;M++){const w=M/a*l,y=S/r*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(w),g.y=(e+t*Math.cos(y))*Math.sin(w),g.z=t*Math.sin(y),c.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),x.subVectors(g,_).normalize(),h.push(x.x,x.y,x.z),p.push(M/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=a;M++){const w=(a+1)*S+M-1,y=(a+1)*(S-1)+M-1,v=(a+1)*(S-1)+M,b=(a+1)*S+M;f.push(w,y,b),f.push(y,v,b)}this.setIndex(f),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class si extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eu extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class p1 extends eu{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ef=new Ht,cg=new V,fg=new V;class o0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(cg),fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fg),t.updateMatrixWorld(),Ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dg=new Ht,ea=new V,wf=new V;class m1 extends o0{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),wf.copy(r.position),wf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(wf),r.updateMatrixWorld(),a.makeTranslation(-ea.x,-ea.y,-ea.z),dg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dg)}}class Tf extends eu{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new m1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g1 extends o0{constructor(){super(new Kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new g1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _1 extends eu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class v1 extends f1{constructor(e=10,t=10,r=4473924,a=8947848){r=new Tt(r),a=new Tt(a);const l=t/2,f=e/t,c=e/2,h=[],p=[];for(let x=0,S=0,M=-c;x<=t;x++,M+=f){h.push(-c,0,M,c,0,M),h.push(M,0,-c,M,0,c);const w=x===l?r:a;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const _=new nn;_.setAttribute("position",new Ft(h,3)),_.setAttribute("color",new Ft(p,3));const g=new ia({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);const x1="https://api.openf1.org/v1",pe={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",fogColor:921110,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},y1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},S1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},pg=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(S1))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},M1=[{label:"VER vs NOR — Monza 2024 Q",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"HAM vs VER — Bahrain 2024 R",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1},{label:"NOR vs PIA — Silverstone 2024 Q",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81},{label:"LEC vs SAI — Monaco 2024 Q",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55},{label:"VER vs NOR — Abu Dhabi 2024 Q",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"RUS vs HAM — Spa 2024 Q",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44}],kl=["orbit","follow1","follow2","top","cinematic"],E1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function is(s,e={},t=2){const r=new URL(`${x1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=t;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===t)throw l;await new Promise(f=>setTimeout(f,800*(a+1)))}}const mg=s=>is("/meetings",{year:s}),gg=s=>is("/sessions",{meeting_key:s}),_g=s=>is("/drivers",{session_key:s}),vg=(s,e)=>is("/laps",{session_key:s,driver_number:e}),xg=(s,e)=>is("/stints",{session_key:s,driver_number:e});function yg(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),is("/location",a)}function Sg(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),is("/car_data",a)}function Gl(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),a=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function sa(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,a=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>a&&(a=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const c=Math.max(t-e,a-r)||1,h=(e+t)/2,p=(r+a)/2,_=(l+f)/2;return s.map(g=>({x:(g.x-h)/c*40,y:(g.z-_)/c*4,z:(g.y-p)/c*40}))}function Mg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function Eg(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function w1(){const[s,e]=Oe.useState(typeof window<"u"&&window.innerWidth<768);return Oe.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function Zs(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*t)]);return r}function Yr(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function T1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function Qs(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function Af(s,e,t,r,a){const l=s.getPoints(e),f=[],c=[],h=[],p=[],_=[];for(let x=0;x<l.length;x++){const S=l[x],M=x/(l.length-1),w=s.getTangentAt(Math.min(M,.9999)),y=new V(-w.z,0,w.x).normalize(),v=S.clone().add(y.clone().multiplyScalar(t/2)),b=S.clone().sub(y.clone().multiplyScalar(t/2));if(f.push(v.x,v.y,v.z,b.x,b.y,b.z),c.push(0,1,0,0,1,0),h.push(0,M*20,1,M*20),a!=null&&a.length){const R=Math.min(Math.floor(M*(a.length-1)),a.length-1),P=a[R]||0,F=360,O=40,L=Math.max(0,Math.min(1,(P-O)/(F-O)));let q,_e,T;if(L<.33){const D=L/.33;q=0,_e=D*.5,T=1-D*.5}else if(L<.66){const D=(L-.33)/.33;q=D,_e=.5+D*.5,T=.5-D*.5}else{const D=(L-.66)/.34;q=1,_e=1-D*.6,T=0}p.push(q,_e,T,q,_e,T)}else p.push(.16,.16,.22,.16,.16,.22);if(x<l.length-1){const R=x*2;_.push(R,R+1,R+2,R+1,R+3,R+2)}}const g=new nn;return g.setAttribute("position",new Ft(f,3)),g.setAttribute("normal",new Ft(c,3)),g.setAttribute("uv",new Ft(h,2)),g.setAttribute("color",new Ft(p,3)),g.setIndex(_),g}function A1(s,e,t,r){e.forEach(f=>{const c=s.getPointAt(f.t),h=s.getTangentAt(f.t),p=new V(-h.z,0,h.x).normalize();[-1,1].forEach(_=>{const g=new Hn(.25,.04,1.5),x=new si({color:14747136,emissive:14747136,emissiveIntensity:.15}),S=new Ot(g,x),M=p.clone().multiplyScalar(_*(t/2+.25/2));S.position.set(c.x+M.x,c.y+.04/2,c.z+M.z),S.lookAt(c.x+M.x+h.x,c.y+.04/2,c.z+M.z+h.z),r.add(S);const w=new Hn(.25,.04+.005,.7),y=new si({color:16777215,emissive:16777215,emissiveIntensity:.1}),v=new Ot(w,y);v.position.copy(S.position),v.position.y+=.005,v.quaternion.copy(S.quaternion),r.add(v)})})}function R1(s,e,t,r,a,l,f,c,h,p,_,g){const x=Oe.useRef({}),S=Oe.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),M=Oe.useRef(c),w=Oe.useMemo(()=>t?sa(t):null,[t]),y=Oe.useMemo(()=>r?sa(r):null,[r]),v=Oe.useMemo(()=>(_==null?void 0:_.map(b=>b.speed||0))||[],[_]);Oe.useEffect(()=>{const b=s.current;if(!b||!e||e.length<10)return;x.current.ren&&(x.current.ren.dispose(),b.contains(x.current.ren.domElement)&&b.removeChild(x.current.ren.domElement)),x.current.fr&&cancelAnimationFrame(x.current.fr);const R=b.clientWidth,P=b.clientHeight,F=new u1;F.fog=new $f(pe.fogColor,.004);const O=new Kn(50,R/P,.1,500),L=new i0({antialias:window.devicePixelRatio<2,alpha:!0});L.setSize(R,P),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setClearColor(pe.fogColor,1),b.appendChild(L.domElement),F.add(new _1(2241348,.5));const q=new hg(16777215,1);q.position.set(30,60,20),F.add(q);const _e=new hg(4482730,.25);_e.position.set(-20,30,-10),F.add(_e);const T=new Tf(14747136,.25,100);T.position.set(0,25,0),F.add(T),F.add(new p1(8952251,2241314,.3));const D=new ao(300,300,60,60),le=D.attributes.position,re=new Float32Array(le.count*3);for(let Se=0;Se<le.count;Se++){const ve=le.getX(Se),xe=le.getY(Se),ye=Math.sqrt(ve*ve+xe*xe),ge=Math.max(0,Math.min(1,(ye-30)/60)),we=.08+ge*.06,Te=.18-ge*.1,qe=.05+ge*.04;re[Se*3]=we,re[Se*3+1]=Te,re[Se*3+2]=qe,le.setZ(Se,Math.sin(ve*.05)*.3+Math.cos(xe*.07)*.2)}D.setAttribute("color",new Ft(re,3)),D.computeVertexNormals();const B=new Ot(D,new si({vertexColors:!0,roughness:.95,metalness:.02}));B.rotation.x=-Math.PI/2,B.position.y=-.15,F.add(B);const ee=new v1(300,100,1714714,1318420);ee.position.y=-.12,ee.material.transparent=!0,ee.material.opacity=.15,F.add(ee);const X=new Mf(e.map(Se=>new V(Se.x,Se.y,Se.z)),!0),se=Math.min(e.length*3,800),H=1.8,$=g==="heatmap",Z=Af(X,se,H,$,$?v:null),N=new si({vertexColors:!0,roughness:.7,metalness:.2,side:Zn}),Y=new Ot(Z,N);Y.position.y+=.01,F.add(Y);const Ie=X.getPoints(se);[-1,1].forEach(Se=>{const ve=[];for(let ye=0;ye<Ie.length;ye++){const ge=ye/(Ie.length-1),we=X.getTangentAt(Math.min(ge,.9999)),Te=new V(-we.z,0,we.x).normalize(),qe=Ie[ye].clone().add(Te.multiplyScalar(Se*H/2));ve.push(qe)}const xe=new Hl(new nn().setFromPoints(ve),new ia({color:16777215,transparent:!0,opacity:.35}));xe.position.y+=.03,F.add(xe)});const j=new Hl(new nn().setFromPoints(X.getPoints(se)),new ia({color:14747136,transparent:!0,opacity:.15}));j.position.y+=.04,F.add(j);const de=[],Me=250;for(let Se=0;Se<Me-2;Se++){const ve=Se/Me,xe=(Se+1)/Me,ye=(Se+2)/Me,ge=X.getPointAt(ve),we=X.getPointAt(xe),Te=X.getPointAt(ye);Math.abs((we.x-ge.x)*(Te.z-we.z)-(we.z-ge.z)*(Te.x-we.x))>.12&&(de.length===0||Math.abs(xe-de[de.length-1].t)>.035)&&de.push({t:xe,p:we})}A1(X,de,H,F),de.slice(0,20).forEach(Se=>{const ve=X.getTangentAt(Se.t),xe=new V(-ve.z,0,ve.x).normalize(),ye=new ao(3,4),ge=new si({color:12887386,roughness:1,metalness:0,transparent:!0,opacity:.5}),we=new Ot(ye,ge),Te=xe.clone().multiplyScalar(H/2+2);we.rotation.x=-Math.PI/2,we.position.set(Se.p.x+Te.x,Se.p.y+.005,Se.p.z+Te.z),F.add(we)});const Ge=80;for(let Se=0;Se<Ge;Se++){const ve=Se/Ge,xe=ve,ye=Math.min(1,ve+.01),ge=Math.min(1,ve+.02),we=X.getPointAt(xe),Te=X.getPointAt(ye),qe=X.getPointAt(ge);if(Math.abs((Te.x-we.x)*(qe.z-Te.z)-(Te.z-we.z)*(qe.x-Te.x))<.04){const me=X.getPointAt(ve),te=X.getTangentAt(ve),Ne=new V(-te.z,0,te.x).normalize();[-1,1].forEach(Be=>{const dt=new Hn(.12,.6,1.5),Rt=new si({color:8947865,roughness:.6,metalness:.5}),_t=new Ot(dt,Rt),ht=Ne.clone().multiplyScalar(Be*(H/2+.5));_t.position.set(me.x+ht.x,me.y+.3,me.z+ht.z),_t.lookAt(me.x+ht.x+te.x,me.y+.3,me.z+ht.z+te.z),F.add(_t)})}}[.1,.45,.75].forEach(Se=>{const ve=X.getPointAt(Se),xe=X.getTangentAt(Se),ye=new V(-xe.z,0,xe.x).normalize(),ge=ye.clone().multiplyScalar(H/2+8);for(let we=0;we<4;we++){const Te=ye.clone().multiplyScalar(we*1.2),qe=new Hn(.8,.5+we*.4,6),k=new si({color:3816010,roughness:.8,metalness:.3}),me=new Ot(qe,k);me.position.set(ve.x+ge.x+Te.x,ve.y+(.5+we*.4)/2,ve.z+ge.z+Te.z),me.lookAt(ve.x,ve.y,ve.z),F.add(me)}});const ze=[53866,16766720,14747136];[0,.33,.66].forEach((Se,ve)=>{const xe=X.getPointAt(Se),ye=new Ot(new Jl(.06,.06,5,8),new si({color:ze[ve],emissive:ze[ve],emissiveIntensity:.9}));ye.position.set(xe.x,xe.y+2.5,xe.z),F.add(ye);const ge=new Tf(ze[ve],.5,8);ge.position.set(xe.x,xe.y+4,xe.z),F.add(ge)});const Le=[];for(let Se=0;Se<100;Se++){const ve=Se/100,xe=Math.min(1,ve+.01),ye=Math.min(1,ve+.02),ge=X.getPointAt(ve),we=X.getPointAt(xe),Te=X.getPointAt(ye);Math.abs((we.x-ge.x)*(Te.z-we.z)-(we.z-ge.z)*(Te.x-we.x))<.02&&(Le.length===0||ve-Le[Le.length-1].end>.05?Le.push({start:ve,end:ve+.01}):Le[Le.length-1].end=ve+.01)}Le.sort((Se,ve)=>ve.end-ve.start-(Se.end-Se.start)),Le.slice(0,3).forEach(Se=>{const ve=[],xe=Math.ceil((Se.end-Se.start)*se);for(let ye=0;ye<=xe;ye++){const ge=Se.start+ye/xe*(Se.end-Se.start);ve.push(X.getPointAt(Math.min(ge,.9999)))}if(ve.length>1){const ye=new Mf(ve),ge=Af(ye,ve.length-1,H*.9,!1,null),we=ge.attributes.color;for(let k=0;k<we.count;k++)we.setXYZ(k,0,.5,.2);const Te=new na({vertexColors:!0,transparent:!0,opacity:.2,side:Zn,depthWrite:!1}),qe=new Ot(ge,Te);qe.position.y+=.06,F.add(qe)}}),de.slice(0,15).forEach(Se=>{const ve=Math.max(0,Se.t-.025),xe=Se.t,ye=[];for(let ge=0;ge<=10;ge++)ye.push(X.getPointAt(ve+ge/10*(xe-ve)));if(ye.length>1){const ge=new Mf(ye),we=Af(ge,10,H*.85,!1,null),Te=we.attributes.color;for(let me=0;me<Te.count;me++){const te=me/Te.count;Te.setXYZ(me,.8*te,.05,.05)}const qe=new na({vertexColors:!0,transparent:!0,opacity:.2,side:Zn,depthWrite:!1}),k=new Ot(we,qe);k.position.y+=.05,F.add(k)}}),de.slice(0,20).forEach((Se,ve)=>{const xe=new Jf(.12,8,8),ye=new si({color:14747136,emissive:14747136,emissiveIntensity:.5}),ge=new Ot(xe,ye);ge.position.set(Se.p.x,Se.p.y+.15,Se.p.z),F.add(ge);const we=document.createElement("canvas");we.width=56,we.height=56;const Te=we.getContext("2d");Te.fillStyle="rgba(225,6,0,0.8)",Te.beginPath(),Te.arc(28,28,24,0,Math.PI*2),Te.fill(),Te.fillStyle="#fff",Te.font="bold 24px sans-serif",Te.textAlign="center",Te.textBaseline="middle",Te.fillText(`${ve+1}`,28,29);const qe=new ug(we),k=new tg(new Bf({map:qe,transparent:!0,depthWrite:!1}));k.position.set(Se.p.x,Se.p.y+3.5,Se.p.z),k.scale.set(1.4,1.4,1),F.add(k)});const ct=X.getPointAt(0),nt=X.getTangentAt(0),Q=new V(-nt.z,0,nt.x).normalize();for(let Se=0;Se<6;Se++){const ve=Se%2===0,xe=new Ot(new Hn(H/6,.05,.3),new si({color:ve?16777215:1118481,emissive:ve?16777215:0,emissiveIntensity:ve?.4:0})),ye=Q.clone().multiplyScalar((Se-2.5)*(H/6));xe.position.set(ct.x+ye.x,ct.y+.03,ct.z+ye.z),F.add(xe)}const It=300,Je=new nn,ot=new Float32Array(It*3);for(let Se=0;Se<It;Se++)ot[Se*3]=(Math.random()-.5)*120,ot[Se*3+1]=Math.random()*15+1,ot[Se*3+2]=(Math.random()-.5)*120;Je.setAttribute("position",new Ft(ot,3));const We=new s0({color:11189196,size:.08,transparent:!0,opacity:.3,depthWrite:!1}),xt=new d1(Je,We);F.add(xt);function rt(Se,ve,xe){const ye=new ta,ge=new Tt(Se),we=new si({color:ge,emissive:ge,emissiveIntensity:xe?.6:.35,metalness:.7,roughness:.25,transparent:xe,opacity:xe?.55:1}),Te=new Ot(new Hn(.5,.2,1.6),we);Te.position.y=.2,ye.add(Te);const qe=new Ot(new Hn(.9,.06,.25),we);qe.position.set(0,.12,.85),ye.add(qe);const k=new Ot(new Hn(.7,.18,.08),we);k.position.set(0,.45,-.75),ye.add(k),[-.35,.35].forEach(_t=>{const ht=new Ot(new Hn(.03,.22,.15),we);ht.position.set(_t,.42,-.75),ye.add(ht)});const me=new Ot(new Qf(.12,.5,4),we);me.geometry.rotateX(-Math.PI/2),me.position.set(0,.18,1.05),ye.add(me);const te=new si({color:3355443,metalness:.9,roughness:.1}),Ne=new Ot(new ed(.18,.025,6,12,Math.PI),te);Ne.rotation.z=Math.PI,Ne.position.set(0,.35,.15),ye.add(Ne);const Be=new na({color:ge,transparent:!0,opacity:xe?.1:.06,side:Zn}),dt=new Ot(new Zf(1.2,16),Be);dt.rotation.x=-Math.PI/2,dt.position.y=.02,ye.add(dt);const Rt=new Tf(ge,xe?.7:.4,10);if(Rt.position.set(0,.5,0),ye.add(Rt),ve){const _t=document.createElement("canvas");_t.width=160,_t.height=56;const ht=_t.getContext("2d");ht.fillStyle=Se,ht.globalAlpha=.9,ht.beginPath();const yt=6;ht.moveTo(yt,0),ht.lineTo(160-yt,0),ht.quadraticCurveTo(160,0,160,yt),ht.lineTo(160,56-yt),ht.quadraticCurveTo(160,56,160-yt,56),ht.lineTo(yt,56),ht.quadraticCurveTo(0,56,0,56-yt),ht.lineTo(0,yt),ht.quadraticCurveTo(0,0,yt,0),ht.fill(),ht.fillStyle="#fff",ht.globalAlpha=.15,ht.fillRect(0,0,6,56),ht.globalAlpha=1,ht.fillStyle="#fff",ht.font="bold 30px sans-serif",ht.textAlign="center",ht.textBaseline="middle",ht.fillText(ve,80,30);const Yt=new ug(_t),Zt=new tg(new Bf({map:Yt,transparent:!0,depthWrite:!1}));Zt.position.set(0,1.6,0),Zt.scale.set(2.8,1,1),ye.add(Zt)}return ye}const pt=rt(l,h,!1),Mt=rt(f,p,!0);F.add(pt),F.add(Mt);function I(Se,ve){const ye=new Float32Array(240),ge=new nn;ge.setAttribute("position",new oi(ye,3)),ge.setDrawRange(0,0);const we=new Hl(ge,new ia({color:new Tt(Se),transparent:!0,opacity:ve?.35:.6,linewidth:2}));return F.add(we),{line:we,positions:ye,max:80,count:0}}const A=I(l,!1),he=I(f,!0);x.current={scene:F,camera:O,ren:L,car1:pt,car2:Mt,tr1:A,tr2:he,n1:w,n2:y,curve:X,fr:null};const ce=S.current,Pe=Se=>{var ve,xe,ye,ge;ce.drag=!0,ce.lx=Se.clientX??((xe=(ve=Se.touches)==null?void 0:ve[0])==null?void 0:xe.clientX)??0,ce.ly=Se.clientY??((ge=(ye=Se.touches)==null?void 0:ye[0])==null?void 0:ge.clientY)??0},Ee=Se=>{var ye,ge,we,Te;if(!ce.drag)return;const ve=Se.clientX??((ge=(ye=Se.touches)==null?void 0:ye[0])==null?void 0:ge.clientX)??0,xe=Se.clientY??((Te=(we=Se.touches)==null?void 0:we[0])==null?void 0:Te.clientY)??0;ce.angle+=(ve-ce.lx)*.005,ce.pitch=Math.max(.1,Math.min(1.4,ce.pitch+(xe-ce.ly)*.005)),ce.lx=ve,ce.ly=xe},it=()=>{ce.drag=!1},et=Se=>{ce.dist=Math.max(15,Math.min(120,ce.dist+Se.deltaY*.05))},Ce=L.domElement;Ce.addEventListener("mousedown",Pe),Ce.addEventListener("mousemove",Ee),Ce.addEventListener("mouseup",it),Ce.addEventListener("mouseleave",it),Ce.addEventListener("wheel",et,{passive:!0}),Ce.addEventListener("touchstart",Pe,{passive:!0}),Ce.addEventListener("touchmove",Ee,{passive:!0}),Ce.addEventListener("touchend",it);function ke(){x.current.fr=requestAnimationFrame(ke),ce.cinT+=3e-4;const Se=M.current;Se==="orbit"?(ce.drag||(ce.angle+=8e-4),O.position.set(Math.cos(ce.angle)*ce.dist*Math.cos(ce.pitch),ce.dist*Math.sin(ce.pitch),Math.sin(ce.angle)*ce.dist*Math.cos(ce.pitch)),O.lookAt(0,0,0)):Se==="top"&&(O.position.set(0,65,.01),O.lookAt(0,0,0));const ve=xt.geometry.attributes.position;for(let xe=0;xe<It;xe++)ve.setY(xe,ve.getY(xe)+.003),ve.getY(xe)>16&&ve.setY(xe,1),ve.setX(xe,ve.getX(xe)+Math.sin(xe*.1+ce.cinT*100)*.002);ve.needsUpdate=!0,L.render(F,O)}ke();let ut;const Ue=()=>{clearTimeout(ut),ut=setTimeout(()=>{b&&(O.aspect=b.clientWidth/b.clientHeight,O.updateProjectionMatrix(),L.setSize(b.clientWidth,b.clientHeight))},100)};return window.addEventListener("resize",Ue),()=>{window.removeEventListener("resize",Ue),Ce.removeEventListener("mousedown",Pe),Ce.removeEventListener("mousemove",Ee),Ce.removeEventListener("mouseup",it),Ce.removeEventListener("mouseleave",it),Ce.removeEventListener("wheel",et),Ce.removeEventListener("touchstart",Pe),Ce.removeEventListener("touchmove",Ee),Ce.removeEventListener("touchend",it),cancelAnimationFrame(x.current.fr),L.dispose(),b.contains(L.domElement)&&b.removeChild(L.domElement)}},[e,l,f,h,p,g,v]),Oe.useEffect(()=>{x.current.n1=w},[w]),Oe.useEffect(()=>{x.current.n2=y},[y]),Oe.useEffect(()=>{M.current=c},[c]),Oe.useEffect(()=>{const{car1:b,car2:R,tr1:P,tr2:F,camera:O}=x.current;if(!b||!R||!e||e.length<2)return;const L=S.current;function q(D,le,re,B){const ee=(re==null?void 0:re.length)>=2?re:e,X=Gl(ee,B);if(isNaN(X.x)||isNaN(X.y)||isNaN(X.z))return{x:0,y:0,z:0};D.position.set(X.x,X.y+.2,X.z);const se=Gl(ee,Math.min(1,B+.005));if(Math.abs(se.x-X.x)+Math.abs(se.z-X.z)>.001&&!isNaN(se.x)&&D.lookAt(se.x,X.y+.2,se.z),le){const H=Math.min(le.count+1,le.max);for(let $=(H-1)*3;$>=3;$-=3)le.positions[$]=le.positions[$-3],le.positions[$+1]=le.positions[$-2],le.positions[$+2]=le.positions[$-1];le.positions[0]=X.x,le.positions[1]=X.y+.2,le.positions[2]=X.z,le.count=H,le.line.geometry.attributes.position.needsUpdate=!0,le.line.geometry.setDrawRange(0,H)}return X}const _e=q(b,P,x.current.n1,a),T=q(R,F,x.current.n2,a);if(O){const D=M.current;if(D==="follow1"||D==="follow2"){const le=D==="follow1"?_e:T,re=D==="follow1"?x.current.n1||e:x.current.n2||e,B=Gl(re,Math.min(1,a+.02)),ee=B.x-le.x,X=B.z-le.z,se=Math.sqrt(ee*ee+X*X)||1;O.position.set(le.x-ee/se*8,le.y+4.5,le.z-X/se*8),O.lookAt(B.x,le.y+.3,B.z)}else if(D==="cinematic"&&x.current.curve){const le=(L.cinT+a*.3)%1,re=x.current.curve.getPointAt(le);O.position.set(re.x+8,re.y+5,re.z+8),O.lookAt((_e.x+T.x)/2,(_e.y+T.y)/2,(_e.z+T.z)/2)}}},[a,e,c])}const C1=Oe.memo(function({tp:e,l1:t,l2:r,prog:a,c1:l,c2:f}){const c=Oe.useRef(null),h=Oe.useMemo(()=>t?sa(t):null,[t]),p=Oe.useMemo(()=>r?sa(r):null,[r]);return Oe.useEffect(()=>{const _=c.current;if(!_||!(e!=null&&e.length))return;const g=_.getContext("2d"),x=_.width,S=14;g.clearRect(0,0,x,x),g.fillStyle=pe.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(x-8,0),g.quadraticCurveTo(x,0,x,8),g.lineTo(x,x-8),g.quadraticCurveTo(x,x,x-8,x),g.lineTo(8,x),g.quadraticCurveTo(0,x,0,x-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let M=1/0,w=-1/0,y=1/0,v=-1/0;for(const F of e)F.x<M&&(M=F.x),F.x>w&&(w=F.x),F.z<y&&(y=F.z),F.z>v&&(v=F.z);const b=Math.max(w-M,v-y)||1,R=F=>({x:S+(F.x-M)/b*(x-S*2),y:S+(F.z-y)/b*(x-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((F,O)=>{const L=R(F);O===0?g.moveTo(L.x,L.y):g.lineTo(L.x,L.y)}),g.closePath(),g.stroke();function P(F,O){const L=(F==null?void 0:F.length)>=2?F:e,q=Gl(L,a),_e=R(q);g.fillStyle=O,g.shadowColor=O,g.shadowBlur=8,g.beginPath(),g.arc(_e.x,_e.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}P(h,l),P(p,f)},[e,a,t,r,l,f]),ie.jsx("canvas",{ref:c,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),Rf=Oe.memo(function({data1:e,data2:t,color1:r,color2:a,maxVal:l,h:f}){const c=Oe.useRef(null);return Oe.useEffect(()=>{const h=c.current;if(!h)return;const p=h.getContext("2d"),_=h.width,g=h.height;p.clearRect(0,0,_,g);function x(S,M){if(!(S!=null&&S.length))return;const w=Math.max(1,Math.floor(S.length/_));p.strokeStyle=M,p.lineWidth=1.5,p.beginPath();let y=!0;for(let v=0;v<S.length;v+=w){const b=v/(S.length-1)*_,R=g-S[v]/l*g*.9-g*.05;y?p.moveTo(b,R):p.lineTo(b,R),y=!1}p.stroke()}x(e,r),x(t,a)},[e,t,r,a,l]),ie.jsx("canvas",{ref:c,width:320,height:f||45,style:{width:"100%",height:f||45,borderRadius:3}})}),Cf=Oe.memo(function({s:e,t1:t,t2:r,c1:a,c2:l}){const f=t&&r?t-r:null,c=[pe.green,pe.yellow,pe.red];return ie.jsxs("div",{style:{flex:1,padding:"5px 8px",background:pe.cardBg,borderRadius:4,borderTop:`2px solid ${c[e-1]}`},children:[ie.jsxs("div",{style:{fontSize:9,color:pe.textMuted,fontFamily:pe.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),ie.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[ie.jsx("span",{style:{fontSize:12,color:a,fontFamily:pe.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),ie.jsx("span",{style:{fontSize:12,color:l,fontFamily:pe.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&ie.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?pe.red:pe.green,fontFamily:pe.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function b1(){var Ve,Ze,st,Xe,St,ft,mt,Nt,un,Xt,mn;const s=w1(),[e,t]=Oe.useState(2026),[r,a]=Oe.useState([]),[l,f]=Oe.useState(null),[c,h]=Oe.useState([]),[p,_]=Oe.useState(null),[g,x]=Oe.useState([]),[S,M]=Oe.useState(null),[w,y]=Oe.useState(null),[v,b]=Oe.useState(null),[R,P]=Oe.useState(null),[F,O]=Oe.useState([]),[L,q]=Oe.useState([]),[_e,T]=Oe.useState(null),[D,le]=Oe.useState(null),[re,B]=Oe.useState(null),[ee,X]=Oe.useState(null),[se,H]=Oe.useState(null),[$,Z]=Oe.useState([]),[N,Y]=Oe.useState([]),[Ie,j]=Oe.useState(0),[de,Me]=Oe.useState(!1),[Ge,ze]=Oe.useState(1),[Le,ct]=Oe.useState(!1),[nt,Q]=Oe.useState("orbit"),[It,Je]=Oe.useState("normal"),[ot,We]=Oe.useState(""),[xt,rt]=Oe.useState(void 0),[pt,Mt]=Oe.useState(""),[I,A]=Oe.useState(!0),[he,ce]=Oe.useState("3d"),[Pe,Ee]=Oe.useState(!1),[it,et]=Oe.useState(!1),[Ce,ke]=Oe.useState(!1),[ut,Ue]=Oe.useState(""),Se=Oe.useRef(null),ve=Oe.useRef(null),xe=Oe.useRef(null),ye=Oe.useRef(!1),ge=g.find(z=>z.driver_number===S),we=g.find(z=>z.driver_number===w),Te=ge?pg(ge.team_name):"#4488ff",qe=we?pg(we.team_name):"#ff4488",k=F.find(z=>z.lap_number===v),me=L.find(z=>z.lap_number===R),te=k!=null&&k.lap_duration&&(me!=null&&me.lap_duration)?k.lap_duration-me.lap_duration:null,Ne=k!=null&&k.lap_duration?Ie*k.lap_duration:0,Be=me!=null&&me.lap_duration?Ie*me.lap_duration:0,dt=(Ze=(Ve=$.find(z=>v>=z.lap_start&&v<=z.lap_end))==null?void 0:Ve.compound)==null?void 0:Ze.toUpperCase(),Rt=(Xe=(st=N.find(z=>R>=z.lap_start&&R<=z.lap_end))==null?void 0:st.compound)==null?void 0:Xe.toUpperCase(),_t=s?200:400,ht=Oe.useMemo(()=>Zs(re==null?void 0:re.map(z=>z.speed||0),_t),[re,_t]),yt=Oe.useMemo(()=>Zs(ee==null?void 0:ee.map(z=>z.speed||0),_t),[ee,_t]),Yt=Oe.useMemo(()=>Zs(re==null?void 0:re.map(z=>z.throttle||0),_t),[re,_t]),Zt=Oe.useMemo(()=>Zs(ee==null?void 0:ee.map(z=>z.throttle||0),_t),[ee,_t]),rs=Oe.useMemo(()=>Zs(re==null?void 0:re.map(z=>z.brake>0?100:0),_t),[re,_t]),Pi=Oe.useMemo(()=>Zs(ee==null?void 0:ee.map(z=>z.brake>0?100:0),_t),[ee,_t]),ai=Mg(re,Ie),Li=Mg(ee,Ie),Si=Oe.useMemo(()=>re?Math.max(...re.map(z=>z.speed||0)):0,[re]),ss=Oe.useMemo(()=>ee?Math.max(...ee.map(z=>z.speed||0)):0,[ee]),os=Oe.useMemo(()=>re!=null&&re.length?re.reduce((z,Ae)=>z+(Ae.speed||0),0)/re.length:0,[re]),co=Oe.useMemo(()=>ee!=null&&ee.length?ee.reduce((z,Ae)=>z+(Ae.speed||0),0)/ee.length:0,[ee]);Oe.useEffect(()=>{We("Loading..."),Mt(""),mg(e).then(z=>{a(z.filter(Ae=>Ae.meeting_name)),f(null),_(null),h([]),x([]),M(null),y(null),H(null),We("")}).catch(z=>{Mt(z.message),We("")})},[e]),Oe.useEffect(()=>{l&&(We("Loading sessions..."),gg(l.meeting_key).then(z=>{h(z.filter(Ae=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Ae.session_name))),_(null),x([]),M(null),y(null),H(null),We("")}).catch(z=>{Mt(z.message),We("")}))},[l]),Oe.useEffect(()=>{p&&(We("Loading drivers..."),_g(p.session_key).then(z=>{const Ae=new Set;x(z.filter(tt=>Ae.has(tt.driver_number)?!1:(Ae.add(tt.driver_number),!0))),M(null),y(null),H(null),We("")}).catch(z=>{Mt(z.message),We("")}))},[p]),Oe.useEffect(()=>{p&&S&&(vg(p.session_key,S).then(z=>{O(z),b(null)}).catch(()=>O([])),xg(p.session_key,S).then(Z).catch(()=>Z([])))},[p,S]),Oe.useEffect(()=>{p&&w&&(vg(p.session_key,w).then(z=>{q(z),P(null)}).catch(()=>q([])),xg(p.session_key,w).then(Y).catch(()=>Y([])))},[p,w]),Oe.useEffect(()=>{if(F.length&&!v){const z=Eg(F);z&&b(z.lap_number)}},[F]),Oe.useEffect(()=>{if(L.length&&!R){const z=Eg(L);z&&P(z.lap_number)}},[L]),Oe.useEffect(()=>{if(ye.current)return;const z=Qs();z.year&&z.mk&&(ye.current=!0,t(Number(z.year)))},[]),Oe.useEffect(()=>{const z=Qs();if(z.mk&&r.length&&!l){const Ae=r.find(tt=>String(tt.meeting_key)===z.mk);Ae&&f(Ae)}},[r]),Oe.useEffect(()=>{const z=Qs();if(z.sk&&c.length&&!p){const Ae=c.find(tt=>String(tt.session_key)===z.sk);Ae&&_(Ae)}},[c]),Oe.useEffect(()=>{const z=Qs();z.d1&&z.d2&&g.length&&!S&&!w&&(M(Number(z.d1)),y(Number(z.d2)))},[g]),Oe.useEffect(()=>{const z=Qs();z.l1&&F.length&&!v&&b(Number(z.l1))},[F]),Oe.useEffect(()=>{const z=Qs();z.l2&&L.length&&!R&&P(Number(z.l2))},[L]);const li=Oe.useCallback(async()=>{if(!(!p||!S||!w||!v||!R)){We("Fetching telemetry..."),Mt(""),rt(0);try{const z=p.session_key,Ae=F.find(vn=>vn.lap_number===v),tt=L.find(vn=>vn.lap_number===R);if(!(Ae!=null&&Ae.date_start)||!(tt!=null&&tt.date_start)){Mt("Lap timing unavailable."),We("");return}const bt=new Date(new Date(Ae.date_start).getTime()+(Ae.lap_duration||120)*1e3).toISOString(),Ct=new Date(new Date(tt.date_start).getTime()+(tt.lap_duration||120)*1e3).toISOString();rt(20);const[cn,An]=await Promise.all([yg(z,S,Ae.date_start,bt),yg(z,w,tt.date_start,Ct)]);rt(60);const[Vn,Pt]=await Promise.all([Sg(z,S,Ae.date_start,bt),Sg(z,w,tt.date_start,Ct)]);if(cn.length<5||An.length<5){Mt("Insufficient data."),We(""),rt(void 0);return}T(cn),le(An),B(Vn),X(Pt),H(sa(cn)),j(0),Me(!1),rt(100),setTimeout(()=>{We(""),rt(void 0)},300)}catch(z){Mt(z.message),We(""),rt(void 0)}}},[p,S,w,v,R,F,L]),as=Oe.useCallback(async z=>{Ee(!1),We("Loading preset..."),Mt("");try{t(z.year);const Ae=await mg(z.year);a(Ae.filter(Pt=>Pt.meeting_name));const tt=Ae.find(Pt=>Pt.meeting_name===z.meeting);if(!tt)throw new Error("Not found");f(tt);const Ct=(await gg(tt.meeting_key)).filter(Pt=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Pt.session_name));h(Ct);const cn=Ct.find(Pt=>Pt.session_name===z.session);if(!cn)throw new Error("Not found");_(cn);const An=await _g(cn.session_key),Vn=new Set;x(An.filter(Pt=>Vn.has(Pt.driver_number)?!1:(Vn.add(Pt.driver_number),!0))),M(z.d1),y(z.d2),We("")}catch(Ae){Mt(Ae.message),We("")}},[]),C=Oe.useCallback(()=>{var Ae;if(!l||!p)return;const z=T1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:w,l1:v,l2:R});(Ae=navigator.clipboard)==null||Ae.writeText(z).then(()=>{Ue("Copied!"),setTimeout(()=>Ue(""),2e3)}),window.history.replaceState(null,"",z.split(window.location.origin)[1])},[e,l,p,S,w,v,R]);R1(Se,se,_e,D,Ie,Te,qe,nt,(ge==null?void 0:ge.name_acronym)||"",(we==null?void 0:we.name_acronym)||"",re,It),Oe.useEffect(()=>{if(!de){xe.current=null,ve.current&&cancelAnimationFrame(ve.current);return}function z(Ae){xe.current||(xe.current=Ae);const tt=(Ae-xe.current)/1e3;xe.current=Ae,j(bt=>{const Ct=bt+tt*.015*Ge;return Ct>=1?Le?0:(Me(!1),1):Ct}),ve.current=requestAnimationFrame(z)}return ve.current=requestAnimationFrame(z),()=>{ve.current&&cancelAnimationFrame(ve.current)}},[de,Ge,Le]),Oe.useEffect(()=>{const z=Ae=>{Ae.target.tagName==="SELECT"||Ae.target.tagName==="INPUT"||(Ae.code==="Space"&&(Ae.preventDefault(),se&&Me(tt=>!tt)),Ae.code==="KeyR"&&(j(0),Me(!1)),Ae.code==="KeyT"&&A(tt=>!tt),Ae.code==="KeyC"&&Q(tt=>kl[(kl.indexOf(tt)+1)%kl.length]),Ae.code==="KeyL"&&ct(tt=>!tt),Ae.code==="ArrowRight"&&j(tt=>Math.min(1,tt+.01)),Ae.code==="ArrowLeft"&&j(tt=>Math.max(0,tt-.01)))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[se]);const K=(Pe||it||Ce)&&ie.jsx("div",{onClick:()=>{Ee(!1),et(!1),ke(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),ue=Pe&&ie.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:pe.carbon,border:`1px solid ${pe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":400,animation:"fadeIn .2s"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[ie.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"QUICK PRESETS"}),ie.jsx("button",{onClick:()=>Ee(!1),style:{marginLeft:"auto"},children:"✕"})]}),M1.map((z,Ae)=>ie.jsx("button",{onClick:()=>as(z),style:{display:"block",width:"100%",textAlign:"left",padding:"12px 14px",marginBottom:6,fontSize:13,fontFamily:pe.mono,borderLeft:`3px solid ${pe.red}`},children:z.label},Ae))]}),fe=it&&se&&ie.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:pe.carbon,border:`1px solid ${pe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":420,animation:"fadeIn .2s"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[ie.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"COMPARISON"}),ie.jsx("button",{onClick:()=>et(!1),style:{marginLeft:"auto"},children:"✕"})]}),ie.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:pe.mono},children:[ie.jsx("thead",{children:ie.jsxs("tr",{style:{color:pe.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[ie.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:`1px solid ${pe.red}22`},children:"METRIC"}),ie.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:Te,borderBottom:`1px solid ${Te}33`},children:(ge==null?void 0:ge.name_acronym)||"D1"}),ie.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:qe,borderBottom:`1px solid ${qe}33`},children:(we==null?void 0:we.name_acronym)||"D2"})]})}),ie.jsx("tbody",{children:[{m:"LAP TIME",v1:k!=null&&k.lap_duration?Yr(k.lap_duration):"—",v2:me!=null&&me.lap_duration?Yr(me.lap_duration):"—"},{m:"TOP SPEED",v1:`${Math.round(Si)}`,v2:`${Math.round(ss)}`},{m:"AVG SPEED",v1:`${Math.round(os)}`,v2:`${Math.round(co)}`},{m:"SECTOR 1",v1:((St=k==null?void 0:k.duration_sector_1)==null?void 0:St.toFixed(3))||"—",v2:((ft=me==null?void 0:me.duration_sector_1)==null?void 0:ft.toFixed(3))||"—"},{m:"SECTOR 2",v1:((mt=k==null?void 0:k.duration_sector_2)==null?void 0:mt.toFixed(3))||"—",v2:((Nt=me==null?void 0:me.duration_sector_2)==null?void 0:Nt.toFixed(3))||"—"},{m:"SECTOR 3",v1:((un=k==null?void 0:k.duration_sector_3)==null?void 0:un.toFixed(3))||"—",v2:((Xt=me==null?void 0:me.duration_sector_3)==null?void 0:Xt.toFixed(3))||"—"},{m:"TYRE",v1:dt||"—",v2:Rt||"—"}].map(z=>ie.jsxs("tr",{style:{borderBottom:`1px solid ${pe.borderLight}`},children:[ie.jsx("td",{style:{padding:"8px 8px",color:pe.textDim,letterSpacing:"0.05em"},children:z.m}),ie.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:Te},children:z.v1}),ie.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:qe},children:z.v2})]},z.m))})]})]}),oe=Ce&&ie.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:pe.carbon,borderLeft:`1px solid ${pe.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${pe.borderLight}`},children:[ie.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),ie.jsx("button",{onClick:()=>ke(!1),style:{marginLeft:"auto"},children:"✕"})]}),ie.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(ge==null?void 0:ge.name_acronym)||"D1",col:Te,laps:F,sel:v,set:b},{lab:(we==null?void 0:we.name_acronym)||"D2",col:qe,laps:L,sel:R,set:P}].map(z=>{const Ae=z.laps.filter(Ct=>Ct.lap_duration>10),tt=Ae.length?Math.min(...Ae.map(Ct=>Ct.lap_duration)):0,bt=Ae.length?Math.max(...Ae.map(Ct=>Ct.lap_duration)):0;return ie.jsxs("div",{style:{marginBottom:18},children:[ie.jsx("div",{style:{fontSize:12,fontWeight:700,color:z.col,marginBottom:8,fontFamily:pe.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${z.col}`,paddingLeft:8},children:z.lab}),Ae.sort((Ct,cn)=>Ct.lap_duration-cn.lap_duration).map(Ct=>{const cn=bt>tt?(Ct.lap_duration-tt)/(bt-tt):0;return ie.jsxs("div",{onClick:()=>z.set(Ct.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Ct.lap_number===z.sel?`${z.col}18`:"transparent",borderLeft:Ct.lap_number===z.sel?`2px solid ${z.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:pe.mono},children:[ie.jsxs("span",{style:{width:30,color:pe.textMuted},children:["L",Ct.lap_number]}),ie.jsx("span",{style:{fontWeight:Ct.lap_duration===tt?800:400,color:Ct.lap_duration===tt?pe.green:pe.text},children:Yr(Ct.lap_duration)}),Ct.lap_duration===tt&&ie.jsx("span",{style:{fontSize:9,color:pe.green,fontWeight:700,background:`${pe.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),ie.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:pe.borderLight,borderRadius:2,overflow:"hidden"},children:ie.jsx("div",{style:{height:"100%",width:`${(1-cn)*100}%`,background:cn<.1?pe.green:cn>.7?pe.red:pe.yellow,borderRadius:2}})})]},Ct.lap_number)})]},z.lab)})})]});return ie.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:pe.carbon,color:pe.text,fontFamily:pe.sans,overflow:"hidden"},children:[ie.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${pe.red}44;border-radius:2px}
        select,button{font-family:${pe.sans}}
        select{background:${pe.inputBg};color:${pe.text};border:1px solid ${pe.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${pe.red}88}
        button{background:${pe.cardBg};color:${pe.text};border:1px solid ${pe.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${pe.red}88;background:${pe.carbonMid}}
        .f1-btn{background:${pe.red};border-color:${pe.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${pe.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${pe.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),K,ue,fe,oe,ie.jsxs("div",{style:{padding:s?"8px 10px":"0",display:"flex",alignItems:"stretch",borderBottom:`2px solid ${pe.red}`,background:`linear-gradient(180deg, ${pe.carbonLight} 0%, ${pe.carbon} 100%)`,zIndex:10,position:"relative",overflow:"hidden"},children:[ie.jsx("div",{style:{width:s?4:6,background:pe.red,flexShrink:0}}),ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:14,padding:s?"0 8px":"10px 18px",flex:1,flexWrap:"wrap"},children:[ie.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[ie.jsx("span",{style:{fontSize:s?16:22,fontWeight:900,letterSpacing:"0.04em",color:"#fff",textTransform:"uppercase"},children:"Phantom"}),ie.jsx("span",{style:{fontSize:s?16:22,fontWeight:300,color:pe.red,letterSpacing:"0.04em"},children:"Cars"})]}),l&&ie.jsxs("span",{style:{fontSize:11,color:pe.textDim,fontWeight:600,letterSpacing:"0.05em"},children:[(mn=l.meeting_name)==null?void 0:mn.replace("Grand Prix","GP")," ",e]}),ie.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6},children:[ie.jsx("button",{onClick:()=>Ee(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&ie.jsx("button",{onClick:C,style:{fontSize:10,padding:"4px 10px"},children:ut||"SHARE"}),se&&ie.jsx("button",{onClick:()=>et(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),se&&ie.jsx("button",{onClick:()=>ke(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),ie.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${pe.borderLight}`,background:pe.carbonLight},children:[ie.jsx("select",{value:e,onChange:z=>t(Number(z.target.value)),children:[2026,2025,2024,2023].map(z=>ie.jsx("option",{value:z,children:z},z))}),ie.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:z=>f(r.find(Ae=>Ae.meeting_key===Number(z.target.value))||null),style:{minWidth:s?110:155},children:[ie.jsx("option",{value:"",children:"Grand Prix"}),r.map(z=>ie.jsx("option",{value:z.meeting_key,children:z.meeting_name},z.meeting_key))]}),ie.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:z=>_(c.find(Ae=>Ae.session_key===Number(z.target.value))||null),disabled:!c.length,style:{minWidth:s?85:115},children:[ie.jsx("option",{value:"",children:"Session"}),c.map(z=>ie.jsx("option",{value:z.session_key,children:z.session_name},z.session_key))]}),!s&&ie.jsx("div",{style:{width:1,height:20,background:`${pe.red}33`}}),ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[ie.jsx("div",{style:{width:3,height:18,background:Te,borderRadius:1}}),ie.jsxs("select",{value:S||"",onChange:z=>{M(Number(z.target.value)),b(null),O([])},disabled:!g.length,style:{minWidth:s?68:100},children:[ie.jsx("option",{value:"",children:"Driver 1"}),g.map(z=>ie.jsx("option",{value:z.driver_number,children:z.name_acronym||`#${z.driver_number}`},z.driver_number))]}),F.length>0&&ie.jsxs("select",{value:v||"",onChange:z=>b(Number(z.target.value)),style:{width:s?56:72},children:[ie.jsx("option",{value:"",children:"Lap"}),F.filter(z=>z.lap_duration>10).map(z=>ie.jsxs("option",{value:z.lap_number,children:["L",z.lap_number]},z.lap_number))]})]}),ie.jsx("span",{style:{color:pe.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[ie.jsx("div",{style:{width:3,height:18,background:qe,borderRadius:1}}),ie.jsxs("select",{value:w||"",onChange:z=>{y(Number(z.target.value)),P(null),q([])},disabled:!g.length,style:{minWidth:s?68:100},children:[ie.jsx("option",{value:"",children:"Driver 2"}),g.map(z=>ie.jsx("option",{value:z.driver_number,children:z.name_acronym||`#${z.driver_number}`},z.driver_number))]}),L.length>0&&ie.jsxs("select",{value:R||"",onChange:z=>P(Number(z.target.value)),style:{width:s?56:72},children:[ie.jsx("option",{value:"",children:"Lap"}),L.filter(z=>z.lap_duration>10).map(z=>ie.jsxs("option",{value:z.lap_number,children:["L",z.lap_number]},z.lap_number))]})]}),ie.jsx("button",{className:"f1-btn",onClick:li,disabled:!S||!w||!v||!R||!!ot,children:ot?"...":"COMPARE"})]}),pt&&ie.jsxs("div",{style:{padding:"8px 18px",background:`${pe.red}11`,borderBottom:`1px solid ${pe.red}22`,fontSize:12,color:pe.red,display:"flex",alignItems:"center",gap:8},children:[ie.jsx("span",{style:{flex:1},children:pt}),ie.jsx("button",{onClick:()=>Mt(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),ot&&ie.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${pe.borderLight}`},children:[ie.jsx("div",{style:{fontSize:11,color:pe.textDim,fontFamily:pe.mono,marginBottom:4},children:ot}),xt!==void 0&&ie.jsx("div",{style:{height:2,background:pe.borderLight,borderRadius:1,overflow:"hidden"},children:ie.jsx("div",{style:{height:"100%",width:`${xt}%`,background:pe.red,borderRadius:1,transition:"width .3s"}})})]}),s&&se&&ie.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${pe.borderLight}`},children:["3d","telemetry"].map(z=>ie.jsx("button",{onClick:()=>ce(z),style:{flex:1,borderRadius:0,borderBottom:he===z?`2px solid ${pe.red}`:"2px solid transparent",background:he===z?pe.cardBg:"transparent",fontWeight:he===z?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:z==="3d"?"Track":"Telemetry"},z))}),ie.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${se?175:130}px)`},children:[(!s||he==="3d")&&ie.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[ie.jsx("div",{ref:Se,style:{width:"100%",height:"100%",background:pe.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),se&&ie.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[kl.map(z=>ie.jsx("button",{onClick:()=>Q(z),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:nt===z?pe.red:pe.overlay,color:nt===z?"#fff":pe.textDim,borderColor:nt===z?pe.red:pe.borderLight,fontWeight:700},children:E1[z]},z)),ie.jsx("div",{style:{width:1,height:16,background:pe.borderLight}}),ie.jsx("button",{onClick:()=>Je(z=>z==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:It==="heatmap"?"#0088ff":pe.overlay,color:It==="heatmap"?"#fff":pe.textDim,borderColor:It==="heatmap"?"#0088ff":pe.borderLight,fontWeight:700},children:"🌡 Speed"})]}),se&&!s&&ie.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:ie.jsx(C1,{tp:se,l1:_e,l2:D,prog:Ie,c1:Te,c2:qe})}),te!==null&&se&&ie.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:ie.jsxs("div",{style:{background:pe.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${pe.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[ie.jsx("div",{style:{fontSize:8,color:pe.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),ie.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:pe.mono,color:te>0?pe.red:pe.green,lineHeight:1.1},children:[te>0?"+":"",te.toFixed(3),ie.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),ie.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[ie.jsxs("span",{style:{fontSize:10,color:Te,fontFamily:pe.mono,fontWeight:700},children:[ge==null?void 0:ge.name_acronym," ",Yr(k==null?void 0:k.lap_duration)]}),ie.jsxs("span",{style:{fontSize:10,color:qe,fontFamily:pe.mono,fontWeight:700},children:[we==null?void 0:we.name_acronym," ",Yr(me==null?void 0:me.lap_duration)]})]})]})}),se&&k&&me&&ie.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[ie.jsx(Cf,{s:1,t1:k.duration_sector_1,t2:me.duration_sector_1,c1:Te,c2:qe}),ie.jsx(Cf,{s:2,t1:k.duration_sector_2,t2:me.duration_sector_2,c1:Te,c2:qe}),ie.jsx(Cf,{s:3,t1:k.duration_sector_3,t2:me.duration_sector_3,c1:Te,c2:qe})]}),!se&&!ot&&ie.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[ie.jsx("div",{style:{fontSize:72,fontWeight:900,color:pe.red,opacity:.08,letterSpacing:"-0.03em",lineHeight:1},children:"F1"}),ie.jsx("div",{style:{fontSize:s?14:17,fontWeight:700,color:pe.textMuted,marginBottom:8,letterSpacing:"0.03em"},children:"GHOST CAR COMPARISON"}),ie.jsx("div",{style:{fontSize:12,color:pe.textMuted,maxWidth:340},children:"Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons."})]})]}),(!s&&I&&se||s&&he==="telemetry"&&se)&&ie.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${pe.borderLight}`,background:pe.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:ie.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[ie.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:[{di:ge,co:Te,ct:ai,tire:dt},{di:we,co:qe,ct:Li,tire:Rt}].map((z,Ae)=>{var tt;return ie.jsxs("div",{style:{flex:1,background:pe.cardBg,borderRadius:6,padding:"8px 10px",borderTop:`3px solid ${z.co}`,position:"relative"},children:[ie.jsx("div",{style:{fontSize:14,fontWeight:900,color:z.co,fontFamily:pe.mono,letterSpacing:"0.05em"},children:((tt=z.di)==null?void 0:tt.name_acronym)||"—"}),ie.jsxs("div",{style:{fontSize:22,fontWeight:900,color:"#fff",fontFamily:pe.mono,lineHeight:1.1},children:[Math.round(z.ct.speed),ie.jsx("span",{style:{fontSize:10,color:pe.textMuted,fontWeight:400},children:" km/h"})]}),ie.jsxs("div",{style:{display:"flex",gap:8,marginTop:4,fontSize:10,fontFamily:pe.mono},children:[ie.jsxs("span",{style:{color:z.ct.throttle>50?pe.green:pe.textMuted},children:["THR ",Math.round(z.ct.throttle),"%"]}),ie.jsxs("span",{style:{color:z.ct.brake>0?pe.red:pe.textMuted},children:["BRK ",z.ct.brake>0?"ON":"OFF"]}),ie.jsxs("span",{style:{color:pe.textDim},children:["G",z.ct.n_gear??z.ct.gear??"—"]})]}),z.tire&&ie.jsxs("div",{style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:3},children:[ie.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:y1[z.tire]||"#888"}}),ie.jsx("span",{style:{fontSize:9,fontFamily:pe.mono,color:pe.textMuted},children:z.tire})]}),z.ct.drs>=10&&ie.jsx("div",{style:{position:"absolute",bottom:8,right:8,fontSize:9,fontWeight:700,color:pe.green,fontFamily:pe.mono,background:`${pe.green}15`,padding:"1px 5px",borderRadius:3,animation:"pulse 1s infinite"},children:"DRS"})]},Ae)})}),ie.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED"}),ie.jsx(Rf,{data1:ht,data2:yt,color1:Te,color2:qe,maxVal:370}),ie.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"THROTTLE"}),ie.jsx(Rf,{data1:Yt,data2:Zt,color1:Te,color2:qe,maxVal:100}),ie.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),ie.jsx(Rf,{data1:rs,data2:Pi,color1:Te,color2:qe,maxVal:100,h:35})]})})]}),se&&ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${pe.carbonLight}, ${pe.carbon})`,borderTop:`1px solid ${pe.red}22`},children:[ie.jsx("button",{onClick:()=>{j(0),Me(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),ie.jsx("button",{onClick:()=>Me(!de),style:{padding:"3px 9px",fontSize:13,background:de?`${pe.red}33`:pe.cardBg,borderColor:de?pe.red:pe.border},children:de?"⏸":"▶"}),ie.jsx("button",{onClick:()=>ct(!Le),style:{padding:"3px 7px",opacity:Le?1:.35,fontSize:11},children:"🔁"}),ie.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:Ie,onChange:z=>j(parseFloat(z.target.value)),style:{flex:1,height:4,accentColor:pe.red}}),ie.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[ie.jsx("span",{style:{fontSize:10,color:Te,fontFamily:pe.mono,fontWeight:700,lineHeight:1.2},children:Yr(Ne)}),ie.jsx("span",{style:{fontSize:10,color:qe,fontFamily:pe.mono,fontWeight:700,lineHeight:1.2},children:Yr(Be)})]}),ie.jsxs("select",{value:Ge,onChange:z=>ze(parseFloat(z.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[ie.jsx("option",{value:.25,children:".25x"}),ie.jsx("option",{value:.5,children:".5x"}),ie.jsx("option",{value:1,children:"1x"}),ie.jsx("option",{value:2,children:"2x"}),ie.jsx("option",{value:4,children:"4x"})]}),!s&&ie.jsx("button",{onClick:()=>A(!I),style:{padding:"3px 7px",fontSize:10,opacity:I?1:.35},children:"📊"})]})]})}K_.createRoot(document.getElementById("root")).render(ie.jsx(V_.StrictMode,{children:ie.jsx(b1,{})}));
