(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function hg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bc={exports:{}},Xo={},Lc={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function R_(){if(vp)return Et;vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function x(P,$,xe){this.props=P,this.context=$,this.refs=A,this.updater=xe||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=x.prototype;function L(P,$,xe){this.props=P,this.context=$,this.refs=A,this.updater=xe||S}var R=L.prototype=new v;R.constructor=L,E(R,x.prototype),R.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,z={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function Z(P,$,xe){var Y,de={},ve=null,ke=null;if($!=null)for(Y in $.ref!==void 0&&(ke=$.ref),$.key!==void 0&&(ve=""+$.key),$)k.call($,Y)&&!D.hasOwnProperty(Y)&&(de[Y]=$[Y]);var Ue=arguments.length-2;if(Ue===1)de.children=xe;else if(1<Ue){for(var be=Array(Ue),ct=0;ct<Ue;ct++)be[ct]=arguments[ct+2];de.children=be}if(P&&P.defaultProps)for(Y in Ue=P.defaultProps,Ue)de[Y]===void 0&&(de[Y]=Ue[Y]);return{$$typeof:s,type:P,key:ve,ref:ke,props:de,_owner:z.current}}function pe(P,$){return{$$typeof:s,type:P.type,key:$,ref:P.ref,props:P.props,_owner:P._owner}}function w(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function U(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return $[xe]})}var me=/\/+/g;function ie(P,$){return typeof P=="object"&&P!==null&&P.key!=null?U(""+P.key):$.toString(36)}function B(P,$,xe,Y,de){var ve=typeof P;(ve==="undefined"||ve==="boolean")&&(P=null);var ke=!1;if(P===null)ke=!0;else switch(ve){case"string":case"number":ke=!0;break;case"object":switch(P.$$typeof){case s:case e:ke=!0}}if(ke)return ke=P,de=de(ke),P=Y===""?"."+ie(ke,0):Y,b(de)?(xe="",P!=null&&(xe=P.replace(me,"$&/")+"/"),B(de,$,xe,"",function(ct){return ct})):de!=null&&(w(de)&&(de=pe(de,xe+(!de.key||ke&&ke.key===de.key?"":(""+de.key).replace(me,"$&/")+"/")+P)),$.push(de)),1;if(ke=0,Y=Y===""?".":Y+":",b(P))for(var Ue=0;Ue<P.length;Ue++){ve=P[Ue];var be=Y+ie(ve,Ue);ke+=B(ve,$,xe,be,de)}else if(be=y(P),typeof be=="function")for(P=be.call(P),Ue=0;!(ve=P.next()).done;)ve=ve.value,be=Y+ie(ve,Ue++),ke+=B(ve,$,xe,be,de);else if(ve==="object")throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ke}function K(P,$,xe){if(P==null)return P;var Y=[],de=0;return B(P,Y,"","",function(ve){return $.call(xe,ve,de++)}),Y}function j(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var re={current:null},G={transition:null},ee={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:G,ReactCurrentOwner:z};function X(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:K,forEach:function(P,$,xe){K(P,function(){$.apply(this,arguments)},xe)},count:function(P){var $=0;return K(P,function(){$++}),$},toArray:function(P){return K(P,function($){return $})||[]},only:function(P){if(!w(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Et.Component=x,Et.Fragment=t,Et.Profiler=a,Et.PureComponent=L,Et.StrictMode=r,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,Et.act=X,Et.cloneElement=function(P,$,xe){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Y=E({},P.props),de=P.key,ve=P.ref,ke=P._owner;if($!=null){if($.ref!==void 0&&(ve=$.ref,ke=z.current),$.key!==void 0&&(de=""+$.key),P.type&&P.type.defaultProps)var Ue=P.type.defaultProps;for(be in $)k.call($,be)&&!D.hasOwnProperty(be)&&(Y[be]=$[be]===void 0&&Ue!==void 0?Ue[be]:$[be])}var be=arguments.length-2;if(be===1)Y.children=xe;else if(1<be){Ue=Array(be);for(var ct=0;ct<be;ct++)Ue[ct]=arguments[ct+2];Y.children=Ue}return{$$typeof:s,type:P.type,key:de,ref:ve,props:Y,_owner:ke}},Et.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Et.createElement=Z,Et.createFactory=function(P){var $=Z.bind(null,P);return $.type=P,$},Et.createRef=function(){return{current:null}},Et.forwardRef=function(P){return{$$typeof:c,render:P}},Et.isValidElement=w,Et.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:j}},Et.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},Et.startTransition=function(P){var $=G.transition;G.transition={};try{P()}finally{G.transition=$}},Et.unstable_act=X,Et.useCallback=function(P,$){return re.current.useCallback(P,$)},Et.useContext=function(P){return re.current.useContext(P)},Et.useDebugValue=function(){},Et.useDeferredValue=function(P){return re.current.useDeferredValue(P)},Et.useEffect=function(P,$){return re.current.useEffect(P,$)},Et.useId=function(){return re.current.useId()},Et.useImperativeHandle=function(P,$,xe){return re.current.useImperativeHandle(P,$,xe)},Et.useInsertionEffect=function(P,$){return re.current.useInsertionEffect(P,$)},Et.useLayoutEffect=function(P,$){return re.current.useLayoutEffect(P,$)},Et.useMemo=function(P,$){return re.current.useMemo(P,$)},Et.useReducer=function(P,$,xe){return re.current.useReducer(P,$,xe)},Et.useRef=function(P){return re.current.useRef(P)},Et.useState=function(P){return re.current.useState(P)},Et.useSyncExternalStore=function(P,$,xe){return re.current.useSyncExternalStore(P,$,xe)},Et.useTransition=function(){return re.current.useTransition()},Et.version="18.3.1",Et}var xp;function Uf(){return xp||(xp=1,Lc.exports=R_()),Lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function C_(){if(yp)return Xo;yp=1;var s=Uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var _,g={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:c,key:y,ref:S,props:g,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=f,Xo.jsxs=f,Xo}var Sp;function b_(){return Sp||(Sp=1,bc.exports=C_()),bc.exports}var q=b_(),Le=Uf();const L_=hg(Le);var cl={},Pc={exports:{}},Vn={},Dc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function P_(){return Mp||(Mp=1,(function(s){function e(G,ee){var X=G.length;G.push(ee);e:for(;0<X;){var P=X-1>>>1,$=G[P];if(0<a($,ee))G[P]=ee,G[X]=$,X=P;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ee=G[0],X=G.pop();if(X!==ee){G[0]=X;e:for(var P=0,$=G.length,xe=$>>>1;P<xe;){var Y=2*(P+1)-1,de=G[Y],ve=Y+1,ke=G[ve];if(0>a(de,X))ve<$&&0>a(ke,de)?(G[P]=ke,G[ve]=X,P=ve):(G[P]=de,G[Y]=X,P=Y);else if(ve<$&&0>a(ke,X))G[P]=ke,G[ve]=X,P=ve;else break e}}return ee}function a(G,ee){var X=G.sortIndex-ee.sortIndex;return X!==0?X:G.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],p=[],_=1,g=null,y=3,S=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(G){for(var ee=t(p);ee!==null;){if(ee.callback===null)r(p);else if(ee.startTime<=G)r(p),ee.sortIndex=ee.expirationTime,e(h,ee);else break;ee=t(p)}}function b(G){if(A=!1,R(G),!E)if(t(h)!==null)E=!0,j(k);else{var ee=t(p);ee!==null&&re(b,ee.startTime-G)}}function k(G,ee){E=!1,A&&(A=!1,v(Z),Z=-1),S=!0;var X=y;try{for(R(ee),g=t(h);g!==null&&(!(g.expirationTime>ee)||G&&!U());){var P=g.callback;if(typeof P=="function"){g.callback=null,y=g.priorityLevel;var $=P(g.expirationTime<=ee);ee=s.unstable_now(),typeof $=="function"?g.callback=$:g===t(h)&&r(h),R(ee)}else r(h);g=t(h)}if(g!==null)var xe=!0;else{var Y=t(p);Y!==null&&re(b,Y.startTime-ee),xe=!1}return xe}finally{g=null,y=X,S=!1}}var z=!1,D=null,Z=-1,pe=5,w=-1;function U(){return!(s.unstable_now()-w<pe)}function me(){if(D!==null){var G=s.unstable_now();w=G;var ee=!0;try{ee=D(!0,G)}finally{ee?ie():(z=!1,D=null)}}else z=!1}var ie;if(typeof L=="function")ie=function(){L(me)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,K=B.port2;B.port1.onmessage=me,ie=function(){K.postMessage(null)}}else ie=function(){x(me,0)};function j(G){D=G,z||(z=!0,ie())}function re(G,ee){Z=x(function(){G(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,j(k))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(G){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var X=y;y=ee;try{return G()}finally{y=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=y;y=G;try{return ee()}finally{y=X}},s.unstable_scheduleCallback=function(G,ee,X){var P=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,G){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,G={id:_++,callback:ee,priorityLevel:G,startTime:X,expirationTime:$,sortIndex:-1},X>P?(G.sortIndex=X,e(p,G),t(h)===null&&G===t(p)&&(A?(v(Z),Z=-1):A=!0,re(b,X-P))):(G.sortIndex=$,e(h,G),E||S||(E=!0,j(k))),G},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(G){var ee=y;return function(){var X=y;y=ee;try{return G.apply(this,arguments)}finally{y=X}}}})(Ic)),Ic}var Ep;function D_(){return Ep||(Ep=1,Dc.exports=P_()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function I_(){if(wp)return Vn;wp=1;var s=Uf(),e=D_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),z=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),U=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),G=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,P;function $(n){if(P===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+n}var xe=!1;function Y(n,i){if(!n||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var u=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){u=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,F=m.length-1;1<=M&&0<=F&&d[M]!==m[F];)F--;for(;1<=M&&0<=F;M--,F--)if(d[M]!==m[F]){if(M!==1||F!==1)do if(M--,F--,0>F||d[M]!==m[F]){var H=`
`+d[M].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=M&&0<=F);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function de(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case z:return"Portal";case pe:return"Profiler";case Z:return"StrictMode";case ie:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case me:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return i=n.displayName||null,i!==null?i:ve(n.type)||"Memo";case j:i=n._payload,n=n._init;try{return ve(n(i))}catch{}}return null}function ke(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(n){var i=be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=ct(n))}function J(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function et(n,i){var o=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ot(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ue(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function He(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function gt(n,i){He(n,i);var o=Ue(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&pt(n,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function nt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function pt(n,i,o){(i!=="number"||Pt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var xt=Array.isArray;function I(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ue(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fe(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(xt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ue(o)}}function ge(n,i){var o=Ue(i.value),u=Ue(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ae(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ye(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ye(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ze,Pe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ze.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function De(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Se=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(n){Se.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),at[i]=at[n]})});function Dt(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||at.hasOwnProperty(n)&&at[n]?(""+i).trim():i+"px"}function ut(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Dt(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var $e=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Me(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function Te(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ge=null,O=null,he=null;function ne(n){if(n=Lo(n)){if(typeof Ge!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ta(i),Ge(n.stateNode,n.type,i))}}function Re(n){O?he?he.push(n):he=[n]:O=n}function Ne(){if(O){var n=O,i=he;if(he=O=null,ne(n),i)for(n=0;n<i.length;n++)ne(i[n])}}function lt(n,i){return n(i)}function At(){}var Rt=!1;function en(n,i,o){if(Rt)return n(i,o);Rt=!0;try{return lt(n,i,o)}finally{Rt=!1,(O!==null||he!==null)&&(At(),Ne())}}function wt(n,i){var o=n.stateNode;if(o===null)return null;var u=Ta(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ft=!1;if(c)try{var _t={};Object.defineProperty(_t,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",_t,_t),window.removeEventListener("test",_t,_t)}catch{Ft=!1}function Sn(n,i,o,u,d,m,M,F,H){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(we){this.onError(we)}}var ai=!1,bn=null,Li=!1,Mi=null,as={onError:function(n){ai=!0,bn=n}};function ls(n,i,o,u,d,m,M,F,H){ai=!1,bn=null,Sn.apply(as,arguments)}function fo(n,i,o,u,d,m,M,F,H){if(ls.apply(this,arguments),ai){if(ai){var ae=bn;ai=!1,bn=null}else throw Error(t(198));Li||(Li=!0,Mi=ae)}}function li(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function us(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(li(n)!==n)throw Error(t(188))}function Q(n){var i=n.alternate;if(!i){if(i=li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return C(d),n;if(m===u)return C(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,F=d.child;F;){if(F===o){M=!0,o=d,u=m;break}if(F===u){M=!0,u=d,o=m;break}F=F.sibling}if(!M){for(F=m.child;F;){if(F===o){M=!0,o=m,u=d;break}if(F===u){M=!0,u=m,o=d;break}F=F.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ue(n){return n=Q(n),n!==null?ce(n):null}function ce(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ce(n);if(i!==null)return i;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,it=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,ft=e.unstable_ImmediatePriority,dt=e.unstable_UserBlockingPriority,It=e.unstable_NormalPriority,hn=e.unstable_LowPriority,Yt=e.unstable_IdlePriority,vn=null,Tt=null;function N(n){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(vn,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Ct,We=Math.log,qt=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(We(n)/qt|0)|0}var Ot=64,tn=4194304;function Ut(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var F=M&~d;F!==0?u=Ut(F):(m&=M,m!==0&&(u=Ut(m)))}else M=o&~d,M!==0?u=Ut(M):m!==0&&(u=Ut(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Oe(i),d=1<<o,u|=n[o],i&=~d;return u}function Pi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function On(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Oe(m),F=1<<M,H=d[M];H===-1?((F&o)===0||(F&u)!==0)&&(d[M]=Pi(F,i)):H<=i&&(n.expiredLanes|=F),m&=~F}}function Lr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ua(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function cs(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ho(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Oe(i),n[i]=o}function qg(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Oe(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Ql(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Oe(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Nt=0;function Kf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zf,Jl,Qf,Jf,ed,eu=!1,ca=[],$i=null,Ki=null,Zi=null,po=new Map,mo=new Map,Qi=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Lo(i),i!==null&&Jl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Kg(n,i,o,u,d){switch(i){case"focusin":return $i=go($i,n,i,o,u,d),!0;case"dragenter":return Ki=go(Ki,n,i,o,u,d),!0;case"mouseover":return Zi=go(Zi,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,u,d)),!0}return!1}function nd(n){var i=Pr(n.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=us(o),i!==null){n.blockedOn=i,ed(n.priority,function(){Qf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=nu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Fe=u,o.target.dispatchEvent(u),Fe=null}else return i=Lo(o),i!==null&&Jl(i),n.blockedOn=o,!1;i.shift()}return!0}function id(n,i,o){fa(n)&&o.delete(i)}function Zg(){eu=!1,$i!==null&&fa($i)&&($i=null),Ki!==null&&fa(Ki)&&(Ki=null),Zi!==null&&fa(Zi)&&(Zi=null),po.forEach(id),mo.forEach(id)}function _o(n,i){n.blockedOn===i&&(n.blockedOn=null,eu||(eu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function vo(n){function i(d){return _o(d,n)}if(0<ca.length){_o(ca[0],n);for(var o=1;o<ca.length;o++){var u=ca[o];u.blockedOn===n&&(u.blockedOn=null)}}for($i!==null&&_o($i,n),Ki!==null&&_o(Ki,n),Zi!==null&&_o(Zi,n),po.forEach(i),mo.forEach(i),o=0;o<Qi.length;o++)u=Qi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)nd(o),o.blockedOn===null&&Qi.shift()}var fs=b.ReactCurrentBatchConfig,da=!0;function Qg(n,i,o,u){var d=Nt,m=fs.transition;fs.transition=null;try{Nt=1,tu(n,i,o,u)}finally{Nt=d,fs.transition=m}}function Jg(n,i,o,u){var d=Nt,m=fs.transition;fs.transition=null;try{Nt=4,tu(n,i,o,u)}finally{Nt=d,fs.transition=m}}function tu(n,i,o,u){if(da){var d=nu(n,i,o,u);if(d===null)xu(n,i,u,ha,o),td(n,u);else if(Kg(d,n,i,o,u))u.stopPropagation();else if(td(n,u),i&4&&-1<$g.indexOf(n)){for(;d!==null;){var m=Lo(d);if(m!==null&&Zf(m),m=nu(n,i,o,u),m===null&&xu(n,i,u,ha,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else xu(n,i,u,null,o)}}var ha=null;function nu(n,i,o,u){if(ha=null,n=Te(u),n=Pr(n),n!==null)if(i=li(n),i===null)n=null;else if(o=i.tag,o===13){if(n=us(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function rd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case ft:return 1;case dt:return 4;case It:case hn:return 16;case Yt:return 536870912;default:return 16}default:return 16}}var Ji=null,iu=null,pa=null;function sd(){if(pa)return pa;var n,i=iu,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return pa=d.slice(n,1<u?1-u:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function od(){return!1}function jn(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ga:od,this.isPropagationStopped=od,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=jn(ds),xo=X({},ds,{view:0,detail:0}),e0=jn(xo),su,ou,yo,_a=X({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(su=n.screenX-yo.screenX,ou=n.screenY-yo.screenY):ou=su=0,yo=n),su)},movementY:function(n){return"movementY"in n?n.movementY:ou}}),ad=jn(_a),t0=X({},_a,{dataTransfer:0}),n0=jn(t0),i0=X({},xo,{relatedTarget:0}),au=jn(i0),r0=X({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=jn(r0),o0=X({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),a0=jn(o0),l0=X({},ds,{data:0}),ld=jn(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=f0[n])?!!i[n]:!1}function lu(){return d0}var h0=X({},xo,{key:function(n){if(n.key){var i=u0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?c0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p0=jn(h0),m0=X({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=jn(m0),g0=X({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),_0=jn(g0),v0=X({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=jn(v0),y0=X({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=jn(y0),M0=[9,13,27,32],uu=c&&"CompositionEvent"in window,So=null;c&&"documentMode"in document&&(So=document.documentMode);var E0=c&&"TextEvent"in window&&!So,cd=c&&(!uu||So&&8<So&&11>=So),fd=" ",dd=!1;function hd(n,i){switch(n){case"keyup":return M0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function w0(n,i){switch(n){case"compositionend":return pd(i);case"keypress":return i.which!==32?null:(dd=!0,fd);case"textInput":return n=i.data,n===fd&&dd?null:n;default:return null}}function T0(n,i){if(hs)return n==="compositionend"||!uu&&hd(n,i)?(n=sd(),pa=iu=Ji=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cd&&i.locale!=="ko"?null:i.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!A0[n.type]:i==="textarea"}function gd(n,i,o,u){Re(u),i=Ma(i,"onChange"),0<i.length&&(o=new ru("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Mo=null,Eo=null;function R0(n){Ud(n,0)}function va(n){var i=vs(n);if(J(i))return n}function C0(n,i){if(n==="change")return i}var _d=!1;if(c){var cu;if(c){var fu="oninput"in document;if(!fu){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),fu=typeof vd.oninput=="function"}cu=fu}else cu=!1;_d=cu&&(!document.documentMode||9<document.documentMode)}function xd(){Mo&&(Mo.detachEvent("onpropertychange",yd),Eo=Mo=null)}function yd(n){if(n.propertyName==="value"&&va(Eo)){var i=[];gd(i,Eo,n,Te(n)),en(R0,i)}}function b0(n,i,o){n==="focusin"?(xd(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",yd)):n==="focusout"&&xd()}function L0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return va(Eo)}function P0(n,i){if(n==="click")return va(i)}function D0(n,i){if(n==="input"||n==="change")return va(i)}function I0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:I0;function wo(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ui(n[d],i[d]))return!1}return!0}function Sd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Md(n,i){var o=Sd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sd(o)}}function Ed(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ed(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wd(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Pt(n.document)}return i}function du(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function U0(n){var i=wd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ed(o.ownerDocument.documentElement,o)){if(u!==null&&du(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Md(o,m);var M=Md(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N0=c&&"documentMode"in document&&11>=document.documentMode,ps=null,hu=null,To=null,pu=!1;function Td(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pu||ps==null||ps!==Pt(u)||(u=ps,"selectionStart"in u&&du(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),To&&wo(To,u)||(To=u,u=Ma(hu,"onSelect"),0<u.length&&(i=new ru("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ps)))}function xa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ms={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},mu={},Ad={};c&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function ya(n){if(mu[n])return mu[n];if(!ms[n])return n;var i=ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ad)return mu[n]=i[o];return n}var Rd=ya("animationend"),Cd=ya("animationiteration"),bd=ya("animationstart"),Ld=ya("transitionend"),Pd=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){Pd.set(n,i),l(i,[n])}for(var gu=0;gu<Dd.length;gu++){var _u=Dd[gu],F0=_u.toLowerCase(),O0=_u[0].toUpperCase()+_u.slice(1);er(F0,"on"+O0)}er(Rd,"onAnimationEnd"),er(Cd,"onAnimationIteration"),er(bd,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Ld,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Id(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,fo(u,i,void 0,n),n.currentTarget=null}function Ud(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var F=u[M],H=F.instance,ae=F.currentTarget;if(F=F.listener,H!==m&&d.isPropagationStopped())break e;Id(d,F,ae),m=H}else for(M=0;M<u.length;M++){if(F=u[M],H=F.instance,ae=F.currentTarget,F=F.listener,H!==m&&d.isPropagationStopped())break e;Id(d,F,ae),m=H}}}if(Li)throw n=Mi,Li=!1,Mi=null,n}function Gt(n,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=n+"__bubble";o.has(u)||(Nd(i,n,2,!1),o.add(u))}function vu(n,i,o){var u=0;i&&(u|=4),Nd(o,n,u,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Ro(n){if(!n[Sa]){n[Sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(z0.has(o)||vu(o,!1,n),vu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,vu("selectionchange",!1,i))}}function Nd(n,i,o,u){switch(rd(i)){case 1:var d=Qg;break;case 4:d=Jg;break;default:d=tu}o=d.bind(null,i,o,n),d=void 0,!Ft||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function xu(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var F=u.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var H=M.tag;if((H===3||H===4)&&(H=M.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;M=M.return}for(;F!==null;){if(M=Pr(F),M===null)return;if(H=M.tag,H===5||H===6){u=m=M;continue e}F=F.parentNode}}u=u.return}en(function(){var ae=m,we=Te(o),Ce=[];e:{var Ee=Pd.get(n);if(Ee!==void 0){var je=ru,qe=n;switch(n){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":je=p0;break;case"focusin":qe="focus",je=au;break;case"focusout":qe="blur",je=au;break;case"beforeblur":case"afterblur":je=au;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=_0;break;case Rd:case Cd:case bd:je=s0;break;case Ld:je=x0;break;case"scroll":je=e0;break;case"wheel":je=S0;break;case"copy":case"cut":case"paste":je=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=ud}var Ke=(i&4)!==0,nn=!Ke&&n==="scroll",te=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var W=ae,se;W!==null;){se=W;var Ie=se.stateNode;if(se.tag===5&&Ie!==null&&(se=Ie,te!==null&&(Ie=wt(W,te),Ie!=null&&Ke.push(Co(W,Ie,se)))),nn)break;W=W.return}0<Ke.length&&(Ee=new je(Ee,qe,null,o,we),Ce.push({event:Ee,listeners:Ke}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",Ee&&o!==Fe&&(qe=o.relatedTarget||o.fromElement)&&(Pr(qe)||qe[Di]))break e;if((je||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,je?(qe=o.relatedTarget||o.toElement,je=ae,qe=qe?Pr(qe):null,qe!==null&&(nn=li(qe),qe!==nn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(je=null,qe=ae),je!==qe)){if(Ke=ad,Ie="onMouseLeave",te="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=ud,Ie="onPointerLeave",te="onPointerEnter",W="pointer"),nn=je==null?Ee:vs(je),se=qe==null?Ee:vs(qe),Ee=new Ke(Ie,W+"leave",je,o,we),Ee.target=nn,Ee.relatedTarget=se,Ie=null,Pr(we)===ae&&(Ke=new Ke(te,W+"enter",qe,o,we),Ke.target=se,Ke.relatedTarget=nn,Ie=Ke),nn=Ie,je&&qe)t:{for(Ke=je,te=qe,W=0,se=Ke;se;se=gs(se))W++;for(se=0,Ie=te;Ie;Ie=gs(Ie))se++;for(;0<W-se;)Ke=gs(Ke),W--;for(;0<se-W;)te=gs(te),se--;for(;W--;){if(Ke===te||te!==null&&Ke===te.alternate)break t;Ke=gs(Ke),te=gs(te)}Ke=null}else Ke=null;je!==null&&Fd(Ce,Ee,je,Ke,!1),qe!==null&&nn!==null&&Fd(Ce,nn,qe,Ke,!0)}}e:{if(Ee=ae?vs(ae):window,je=Ee.nodeName&&Ee.nodeName.toLowerCase(),je==="select"||je==="input"&&Ee.type==="file")var Je=C0;else if(md(Ee))if(_d)Je=D0;else{Je=L0;var rt=b0}else(je=Ee.nodeName)&&je.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=P0);if(Je&&(Je=Je(n,ae))){gd(Ce,Je,o,we);break e}rt&&rt(n,Ee,ae),n==="focusout"&&(rt=Ee._wrapperState)&&rt.controlled&&Ee.type==="number"&&pt(Ee,"number",Ee.value)}switch(rt=ae?vs(ae):window,n){case"focusin":(md(rt)||rt.contentEditable==="true")&&(ps=rt,hu=ae,To=null);break;case"focusout":To=hu=ps=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Td(Ce,o,we);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":Td(Ce,o,we)}var st;if(uu)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else hs?hd(n,o)&&(ht="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ht="onCompositionStart");ht&&(cd&&o.locale!=="ko"&&(hs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&hs&&(st=sd()):(Ji=we,iu="value"in Ji?Ji.value:Ji.textContent,hs=!0)),rt=Ma(ae,ht),0<rt.length&&(ht=new ld(ht,n,null,o,we),Ce.push({event:ht,listeners:rt}),st?ht.data=st:(st=pd(o),st!==null&&(ht.data=st)))),(st=E0?w0(n,o):T0(n,o))&&(ae=Ma(ae,"onBeforeInput"),0<ae.length&&(we=new ld("onBeforeInput","beforeinput",null,o,we),Ce.push({event:we,listeners:ae}),we.data=st))}Ud(Ce,i)})}function Co(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=wt(n,o),m!=null&&u.unshift(Co(n,m,d)),m=wt(n,i),m!=null&&u.push(Co(n,m,d))),n=n.return}return u}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fd(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var F=o,H=F.alternate,ae=F.stateNode;if(H!==null&&H===u)break;F.tag===5&&ae!==null&&(F=ae,d?(H=wt(o,m),H!=null&&M.unshift(Co(o,H,F))):d||(H=wt(o,m),H!=null&&M.push(Co(o,H,F)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var k0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Od(n){return(typeof n=="string"?n:""+n).replace(k0,`
`).replace(B0,"")}function Ea(n,i,o){if(i=Od(i),Od(n)!==i&&o)throw Error(t(425))}function wa(){}var yu=null,Su=null;function Mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(n){return zd.resolve(null).then(n).catch(V0)}:Eu;function V0(n){setTimeout(function(){throw n})}function wu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),vo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);vo(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function kd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Ei="__reactFiber$"+_s,bo="__reactProps$"+_s,Di="__reactContainer$"+_s,Tu="__reactEvents$"+_s,W0="__reactListeners$"+_s,X0="__reactHandles$"+_s;function Pr(n){var i=n[Ei];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[Ei]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=kd(n);n!==null;){if(o=n[Ei])return o;n=kd(n)}return i}n=o,o=n.parentNode}return null}function Lo(n){return n=n[Ei]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ta(n){return n[bo]||null}var Au=[],xs=-1;function nr(n){return{current:n}}function Vt(n){0>xs||(n.current=Au[xs],Au[xs]=null,xs--)}function Ht(n,i){xs++,Au[xs]=n.current,n.current=i}var ir={},Mn=nr(ir),zn=nr(!1),Dr=ir;function ys(n,i){var o=n.type.contextTypes;if(!o)return ir;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Aa(){Vt(zn),Vt(Mn)}function Bd(n,i,o){if(Mn.current!==ir)throw Error(t(168));Ht(Mn,i),Ht(zn,o)}function Hd(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ke(n)||"Unknown",d));return X({},o,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Dr=Mn.current,Ht(Mn,n),Ht(zn,zn.current),!0}function Gd(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Hd(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Vt(zn),Vt(Mn),Ht(Mn,n)):Vt(zn),Ht(zn,o)}var Ii=null,Ca=!1,Ru=!1;function Vd(n){Ii===null?Ii=[n]:Ii.push(n)}function j0(n){Ca=!0,Vd(n)}function rr(){if(!Ru&&Ii!==null){Ru=!0;var n=0,i=Nt;try{var o=Ii;for(Nt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ii=null,Ca=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(n+1)),oe(ft,rr),d}finally{Nt=i,Ru=!1}}return null}var Ss=[],Ms=0,ba=null,La=0,Qn=[],Jn=0,Ir=null,Ui=1,Ni="";function Ur(n,i){Ss[Ms++]=La,Ss[Ms++]=ba,ba=n,La=i}function Wd(n,i,o){Qn[Jn++]=Ui,Qn[Jn++]=Ni,Qn[Jn++]=Ir,Ir=n;var u=Ui;n=Ni;var d=32-Oe(u)-1;u&=~(1<<d),o+=1;var m=32-Oe(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ui=1<<32-Oe(i)+d|o<<d|u,Ni=m+n}else Ui=1<<m|o<<d|u,Ni=n}function Cu(n){n.return!==null&&(Ur(n,1),Wd(n,1,0))}function bu(n){for(;n===ba;)ba=Ss[--Ms],Ss[Ms]=null,La=Ss[--Ms],Ss[Ms]=null;for(;n===Ir;)Ir=Qn[--Jn],Qn[Jn]=null,Ni=Qn[--Jn],Qn[Jn]=null,Ui=Qn[--Jn],Qn[Jn]=null}var Yn=null,qn=null,$t=!1,ci=null;function Xd(n,i){var o=ii(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function jd(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,qn=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ir!==null?{id:Ui,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ii(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Yn=n,qn=null,!0):!1;default:return!1}}function Lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if($t){var i=qn;if(i){var o=i;if(!jd(n,i)){if(Lu(n))throw Error(t(418));i=tr(o.nextSibling);var u=Yn;i&&jd(n,i)?Xd(u,o):(n.flags=n.flags&-4097|2,$t=!1,Yn=n)}}else{if(Lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Yn=n}}}function Yd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Pa(n){if(n!==Yn)return!1;if(!$t)return Yd(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mu(n.type,n.memoizedProps)),i&&(i=qn)){if(Lu(n))throw qd(),Error(t(418));for(;i;)Xd(n,i),i=tr(i.nextSibling)}if(Yd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){qn=tr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Yn?tr(n.stateNode.nextSibling):null;return!0}function qd(){for(var n=qn;n;)n=tr(n.nextSibling)}function Es(){qn=Yn=null,$t=!1}function Du(n){ci===null?ci=[n]:ci.push(n)}var Y0=b.ReactCurrentBatchConfig;function Po(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var F=d.refs;M===null?delete F[m]:F[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Da(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function $d(n){var i=n._init;return i(n._payload)}function Kd(n){function i(te,W){if(n){var se=te.deletions;se===null?(te.deletions=[W],te.flags|=16):se.push(W)}}function o(te,W){if(!n)return null;for(;W!==null;)i(te,W),W=W.sibling;return null}function u(te,W){for(te=new Map;W!==null;)W.key!==null?te.set(W.key,W):te.set(W.index,W),W=W.sibling;return te}function d(te,W){return te=dr(te,W),te.index=0,te.sibling=null,te}function m(te,W,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<W?(te.flags|=2,W):se):(te.flags|=2,W)):(te.flags|=1048576,W)}function M(te){return n&&te.alternate===null&&(te.flags|=2),te}function F(te,W,se,Ie){return W===null||W.tag!==6?(W=Ec(se,te.mode,Ie),W.return=te,W):(W=d(W,se),W.return=te,W)}function H(te,W,se,Ie){var Je=se.type;return Je===D?we(te,W,se.props.children,Ie,se.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&$d(Je)===W.type)?(Ie=d(W,se.props),Ie.ref=Po(te,W,se),Ie.return=te,Ie):(Ie=nl(se.type,se.key,se.props,null,te.mode,Ie),Ie.ref=Po(te,W,se),Ie.return=te,Ie)}function ae(te,W,se,Ie){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=wc(se,te.mode,Ie),W.return=te,W):(W=d(W,se.children||[]),W.return=te,W)}function we(te,W,se,Ie,Je){return W===null||W.tag!==7?(W=Gr(se,te.mode,Ie,Je),W.return=te,W):(W=d(W,se),W.return=te,W)}function Ce(te,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ec(""+W,te.mode,se),W.return=te,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return se=nl(W.type,W.key,W.props,null,te.mode,se),se.ref=Po(te,null,W),se.return=te,se;case z:return W=wc(W,te.mode,se),W.return=te,W;case j:var Ie=W._init;return Ce(te,Ie(W._payload),se)}if(xt(W)||ee(W))return W=Gr(W,te.mode,se,null),W.return=te,W;Da(te,W)}return null}function Ee(te,W,se,Ie){var Je=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:F(te,W,""+se,Ie);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return se.key===Je?H(te,W,se,Ie):null;case z:return se.key===Je?ae(te,W,se,Ie):null;case j:return Je=se._init,Ee(te,W,Je(se._payload),Ie)}if(xt(se)||ee(se))return Je!==null?null:we(te,W,se,Ie,null);Da(te,se)}return null}function je(te,W,se,Ie,Je){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return te=te.get(se)||null,F(W,te,""+Ie,Je);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case k:return te=te.get(Ie.key===null?se:Ie.key)||null,H(W,te,Ie,Je);case z:return te=te.get(Ie.key===null?se:Ie.key)||null,ae(W,te,Ie,Je);case j:var rt=Ie._init;return je(te,W,se,rt(Ie._payload),Je)}if(xt(Ie)||ee(Ie))return te=te.get(se)||null,we(W,te,Ie,Je,null);Da(W,Ie)}return null}function qe(te,W,se,Ie){for(var Je=null,rt=null,st=W,ht=W=0,gn=null;st!==null&&ht<se.length;ht++){st.index>ht?(gn=st,st=null):gn=st.sibling;var Lt=Ee(te,st,se[ht],Ie);if(Lt===null){st===null&&(st=gn);break}n&&st&&Lt.alternate===null&&i(te,st),W=m(Lt,W,ht),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt,st=gn}if(ht===se.length)return o(te,st),$t&&Ur(te,ht),Je;if(st===null){for(;ht<se.length;ht++)st=Ce(te,se[ht],Ie),st!==null&&(W=m(st,W,ht),rt===null?Je=st:rt.sibling=st,rt=st);return $t&&Ur(te,ht),Je}for(st=u(te,st);ht<se.length;ht++)gn=je(st,te,ht,se[ht],Ie),gn!==null&&(n&&gn.alternate!==null&&st.delete(gn.key===null?ht:gn.key),W=m(gn,W,ht),rt===null?Je=gn:rt.sibling=gn,rt=gn);return n&&st.forEach(function(hr){return i(te,hr)}),$t&&Ur(te,ht),Je}function Ke(te,W,se,Ie){var Je=ee(se);if(typeof Je!="function")throw Error(t(150));if(se=Je.call(se),se==null)throw Error(t(151));for(var rt=Je=null,st=W,ht=W=0,gn=null,Lt=se.next();st!==null&&!Lt.done;ht++,Lt=se.next()){st.index>ht?(gn=st,st=null):gn=st.sibling;var hr=Ee(te,st,Lt.value,Ie);if(hr===null){st===null&&(st=gn);break}n&&st&&hr.alternate===null&&i(te,st),W=m(hr,W,ht),rt===null?Je=hr:rt.sibling=hr,rt=hr,st=gn}if(Lt.done)return o(te,st),$t&&Ur(te,ht),Je;if(st===null){for(;!Lt.done;ht++,Lt=se.next())Lt=Ce(te,Lt.value,Ie),Lt!==null&&(W=m(Lt,W,ht),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return $t&&Ur(te,ht),Je}for(st=u(te,st);!Lt.done;ht++,Lt=se.next())Lt=je(st,te,ht,Lt.value,Ie),Lt!==null&&(n&&Lt.alternate!==null&&st.delete(Lt.key===null?ht:Lt.key),W=m(Lt,W,ht),rt===null?Je=Lt:rt.sibling=Lt,rt=Lt);return n&&st.forEach(function(A_){return i(te,A_)}),$t&&Ur(te,ht),Je}function nn(te,W,se,Ie){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case k:e:{for(var Je=se.key,rt=W;rt!==null;){if(rt.key===Je){if(Je=se.type,Je===D){if(rt.tag===7){o(te,rt.sibling),W=d(rt,se.props.children),W.return=te,te=W;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&$d(Je)===rt.type){o(te,rt.sibling),W=d(rt,se.props),W.ref=Po(te,rt,se),W.return=te,te=W;break e}o(te,rt);break}else i(te,rt);rt=rt.sibling}se.type===D?(W=Gr(se.props.children,te.mode,Ie,se.key),W.return=te,te=W):(Ie=nl(se.type,se.key,se.props,null,te.mode,Ie),Ie.ref=Po(te,W,se),Ie.return=te,te=Ie)}return M(te);case z:e:{for(rt=se.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){o(te,W.sibling),W=d(W,se.children||[]),W.return=te,te=W;break e}else{o(te,W);break}else i(te,W);W=W.sibling}W=wc(se,te.mode,Ie),W.return=te,te=W}return M(te);case j:return rt=se._init,nn(te,W,rt(se._payload),Ie)}if(xt(se))return qe(te,W,se,Ie);if(ee(se))return Ke(te,W,se,Ie);Da(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,W!==null&&W.tag===6?(o(te,W.sibling),W=d(W,se),W.return=te,te=W):(o(te,W),W=Ec(se,te.mode,Ie),W.return=te,te=W),M(te)):o(te,W)}return nn}var ws=Kd(!0),Zd=Kd(!1),Ia=nr(null),Ua=null,Ts=null,Iu=null;function Uu(){Iu=Ts=Ua=null}function Nu(n){var i=Ia.current;Vt(Ia),n._currentValue=i}function Fu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function As(n,i){Ua=n,Iu=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Ua===null)throw Error(t(308));Ts=n,Ua.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var Nr=null;function Ou(n){Nr===null?Nr=[n]:Nr.push(n)}function Qd(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Ou(i)):(o.next=d.next,d.next=o),i.interleaved=o,Fi(n,u)}function Fi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var sr=!1;function zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Fi(n,o)}return d=u.interleaved,d===null?(i.next=i,Ou(u)):(i.next=d.next,d.next=i),u.interleaved=i,Fi(n,o)}function Na(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ql(n,o)}}function eh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Fa(n,i,o,u){var d=n.updateQueue;sr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var H=F,ae=H.next;H.next=null,M===null?m=ae:M.next=ae,M=H;var we=n.alternate;we!==null&&(we=we.updateQueue,F=we.lastBaseUpdate,F!==M&&(F===null?we.firstBaseUpdate=ae:F.next=ae,we.lastBaseUpdate=H))}if(m!==null){var Ce=d.baseState;M=0,we=ae=H=null,F=m;do{var Ee=F.lane,je=F.eventTime;if((u&Ee)===Ee){we!==null&&(we=we.next={eventTime:je,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var qe=n,Ke=F;switch(Ee=i,je=o,Ke.tag){case 1:if(qe=Ke.payload,typeof qe=="function"){Ce=qe.call(je,Ce,Ee);break e}Ce=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ke.payload,Ee=typeof qe=="function"?qe.call(je,Ce,Ee):qe,Ee==null)break e;Ce=X({},Ce,Ee);break e;case 2:sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Ee=d.effects,Ee===null?d.effects=[F]:Ee.push(F))}else je={eventTime:je,lane:Ee,tag:F.tag,payload:F.payload,callback:F.callback,next:null},we===null?(ae=we=je,H=Ce):we=we.next=je,M|=Ee;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;Ee=F,F=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(we===null&&(H=Ce),d.baseState=H,d.firstBaseUpdate=ae,d.lastBaseUpdate=we,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);zr|=M,n.lanes=M,n.memoizedState=Ce}}function th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Do={},wi=nr(Do),Io=nr(Do),Uo=nr(Do);function Fr(n){if(n===Do)throw Error(t(174));return n}function ku(n,i){switch(Ht(Uo,i),Ht(Io,n),Ht(wi,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Be(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Be(i,n)}Vt(wi),Ht(wi,i)}function Rs(){Vt(wi),Vt(Io),Vt(Uo)}function nh(n){Fr(Uo.current);var i=Fr(wi.current),o=Be(i,n.type);i!==o&&(Ht(Io,n),Ht(wi,o))}function Bu(n){Io.current===n&&(Vt(wi),Vt(Io))}var Zt=nr(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function Gu(){for(var n=0;n<Hu.length;n++)Hu[n]._workInProgressVersionPrimary=null;Hu.length=0}var za=b.ReactCurrentDispatcher,Vu=b.ReactCurrentBatchConfig,Or=0,Qt=null,un=null,pn=null,ka=!1,No=!1,Fo=0,q0=0;function En(){throw Error(t(321))}function Wu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ui(n[o],i[o]))return!1;return!0}function Xu(n,i,o,u,d,m){if(Or=m,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?Q0:J0,n=o(u,d),No){m=0;do{if(No=!1,Fo=0,25<=m)throw Error(t(301));m+=1,pn=un=null,i.updateQueue=null,za.current=e_,n=o(u,d)}while(No)}if(za.current=Ga,i=un!==null&&un.next!==null,Or=0,pn=un=Qt=null,ka=!1,i)throw Error(t(300));return n}function ju(){var n=Fo!==0;return Fo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Qt.memoizedState=pn=n:pn=pn.next=n,pn}function ti(){if(un===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=pn===null?Qt.memoizedState:pn.next;if(i!==null)pn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Qt.memoizedState=pn=n:pn=pn.next=n}return pn}function Oo(n,i){return typeof i=="function"?i(n):i}function Yu(n){var i=ti(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=un,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var F=M=null,H=null,ae=m;do{var we=ae.lane;if((Or&we)===we)H!==null&&(H=H.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var Ce={lane:we,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};H===null?(F=H=Ce,M=u):H=H.next=Ce,Qt.lanes|=we,zr|=we}ae=ae.next}while(ae!==null&&ae!==m);H===null?M=u:H.next=F,ui(u,i.memoizedState)||(Bn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=H,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Qt.lanes|=m,zr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(n){var i=ti(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);ui(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function ih(){}function rh(n,i){var o=Qt,u=ti(),d=i(),m=!ui(u.memoizedState,d);if(m&&(u.memoizedState=d,Bn=!0),u=u.queue,$u(ah.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,zo(9,oh.bind(null,o,u,d,i),void 0,null),mn===null)throw Error(t(349));(Or&30)!==0||sh(o,i,d)}return d}function sh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function oh(n,i,o,u){i.value=o,i.getSnapshot=u,lh(i)&&uh(n)}function ah(n,i,o){return o(function(){lh(i)&&uh(n)})}function lh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ui(n,o)}catch{return!0}}function uh(n){var i=Fi(n,1);i!==null&&pi(i,n,1,-1)}function ch(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=Z0.bind(null,Qt,n),[i.memoizedState,n]}function zo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function fh(){return ti().memoizedState}function Ba(n,i,o,u){var d=Ti();Qt.flags|=n,d.memoizedState=zo(1|i,o,void 0,u===void 0?null:u)}function Ha(n,i,o,u){var d=ti();u=u===void 0?null:u;var m=void 0;if(un!==null){var M=un.memoizedState;if(m=M.destroy,u!==null&&Wu(u,M.deps)){d.memoizedState=zo(i,o,m,u);return}}Qt.flags|=n,d.memoizedState=zo(1|i,o,m,u)}function dh(n,i){return Ba(8390656,8,n,i)}function $u(n,i){return Ha(2048,8,n,i)}function hh(n,i){return Ha(4,2,n,i)}function ph(n,i){return Ha(4,4,n,i)}function mh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function gh(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4,4,mh.bind(null,i,n),o)}function Ku(){}function _h(n,i){var o=ti();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function vh(n,i){var o=ti();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function xh(n,i,o){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=o):(ui(o,i)||(o=ua(),Qt.lanes|=o,zr|=o,n.baseState=!0),i)}function $0(n,i){var o=Nt;Nt=o!==0&&4>o?o:4,n(!0);var u=Vu.transition;Vu.transition={};try{n(!1),i()}finally{Nt=o,Vu.transition=u}}function yh(){return ti().memoizedState}function K0(n,i,o){var u=cr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(n))Mh(i,o);else if(o=Qd(n,i,o,u),o!==null){var d=Pn();pi(o,n,u,d),Eh(o,i,u)}}function Z0(n,i,o){var u=cr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(n))Mh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,F=m(M,o);if(d.hasEagerState=!0,d.eagerState=F,ui(F,M)){var H=i.interleaved;H===null?(d.next=d,Ou(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=Qd(n,i,d,u),o!==null&&(d=Pn(),pi(o,n,u,d),Eh(o,i,u))}}function Sh(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function Mh(n,i){No=ka=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Eh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ql(n,o)}}var Ga={readContext:ei,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Q0={readContext:ei,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:dh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ba(4194308,4,mh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ba(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ba(4,2,n,i)},useMemo:function(n,i){var o=Ti();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ti();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=K0.bind(null,Qt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:ch,useDebugValue:Ku,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=ch(!1),i=n[0];return n=$0.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Qt,d=Ti();if($t){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),mn===null)throw Error(t(349));(Or&30)!==0||sh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,dh(ah.bind(null,u,m,n),[n]),u.flags|=2048,zo(9,oh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Ti(),i=mn.identifierPrefix;if($t){var o=Ni,u=Ui;o=(u&~(1<<32-Oe(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=q0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},J0={readContext:ei,useCallback:_h,useContext:ei,useEffect:$u,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:Yu,useRef:fh,useState:function(){return Yu(Oo)},useDebugValue:Ku,useDeferredValue:function(n){var i=ti();return xh(i,un.memoizedState,n)},useTransition:function(){var n=Yu(Oo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1},e_={readContext:ei,useCallback:_h,useContext:ei,useEffect:$u,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:vh,useReducer:qu,useRef:fh,useState:function(){return qu(Oo)},useDebugValue:Ku,useDeferredValue:function(n){var i=ti();return un===null?i.memoizedState=n:xh(i,un.memoizedState,n)},useTransition:function(){var n=qu(Oo)[0],i=ti().memoizedState;return[n,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1};function fi(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Zu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:X({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Va={isMounted:function(n){return(n=n._reactInternals)?li(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Pn(),d=cr(n),m=Oi(u,d);m.payload=i,o!=null&&(m.callback=o),i=or(n,m,d),i!==null&&(pi(i,n,d,u),Na(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Pn(),d=cr(n),m=Oi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=or(n,m,d),i!==null&&(pi(i,n,d,u),Na(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Pn(),u=cr(n),d=Oi(o,u);d.tag=2,i!=null&&(d.callback=i),i=or(n,d,u),i!==null&&(pi(i,n,u,o),Na(i,n,u))}};function wh(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!wo(o,u)||!wo(d,m):!0}function Th(n,i,o){var u=!1,d=ir,m=i.contextType;return typeof m=="object"&&m!==null?m=ei(m):(d=kn(i)?Dr:Mn.current,u=i.contextTypes,m=(u=u!=null)?ys(n,d):ir),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Va,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Ah(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Va.enqueueReplaceState(i,i.state,null)}function Qu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},zu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ei(m):(m=kn(i)?Dr:Mn.current,d.context=ys(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Zu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Va.enqueueReplaceState(d,d.state,null),Fa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Ju(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ec(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var t_=typeof WeakMap=="function"?WeakMap:Map;function Rh(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ka||(Ka=!0,mc=u),ec(n,i)},o}function Ch(n,i,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ec(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ec(n,i),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function bh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new t_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=m_.bind(null,n,i,o),i.then(n,n))}function Lh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ph(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var n_=b.ReactCurrentOwner,Bn=!1;function Ln(n,i,o,u){i.child=n===null?Zd(i,null,o,u):ws(i,n.child,o,u)}function Dh(n,i,o,u,d){o=o.render;var m=i.ref;return As(i,d),u=Xu(n,i,o,u,m,d),o=ju(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):($t&&o&&Cu(i),i.flags|=1,Ln(n,i,u,d),i.child)}function Ih(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Mc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Uh(n,i,m,u,d)):(n=nl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(M,u)&&n.ref===i.ref)return zi(n,i,d)}return i.flags|=1,n=dr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Uh(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(wo(m,u)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,zi(n,i,d)}return tc(n,i,o,u,d)}function Nh(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ls,$n),$n|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Ls,$n),$n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ht(Ls,$n),$n|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ht(Ls,$n),$n|=u;return Ln(n,i,d,o),i.child}function Fh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tc(n,i,o,u,d){var m=kn(o)?Dr:Mn.current;return m=ys(i,m),As(i,d),o=Xu(n,i,o,u,m,d),u=ju(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):($t&&u&&Cu(i),i.flags|=1,Ln(n,i,o,d),i.child)}function Oh(n,i,o,u,d){if(kn(o)){var m=!0;Ra(i)}else m=!1;if(As(i,d),i.stateNode===null)Xa(n,i),Th(i,o,u),Qu(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,F=i.memoizedProps;M.props=F;var H=M.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=ei(ae):(ae=kn(o)?Dr:Mn.current,ae=ys(i,ae));var we=o.getDerivedStateFromProps,Ce=typeof we=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ce||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==u||H!==ae)&&Ah(i,M,u,ae),sr=!1;var Ee=i.memoizedState;M.state=Ee,Fa(i,u,M,d),H=i.memoizedState,F!==u||Ee!==H||zn.current||sr?(typeof we=="function"&&(Zu(i,o,we,u),H=i.memoizedState),(F=sr||wh(i,o,F,u,Ee,H,ae))?(Ce||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),M.props=u,M.state=H,M.context=ae,u=F):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Jd(n,i),F=i.memoizedProps,ae=i.type===i.elementType?F:fi(i.type,F),M.props=ae,Ce=i.pendingProps,Ee=M.context,H=o.contextType,typeof H=="object"&&H!==null?H=ei(H):(H=kn(o)?Dr:Mn.current,H=ys(i,H));var je=o.getDerivedStateFromProps;(we=typeof je=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==Ce||Ee!==H)&&Ah(i,M,u,H),sr=!1,Ee=i.memoizedState,M.state=Ee,Fa(i,u,M,d);var qe=i.memoizedState;F!==Ce||Ee!==qe||zn.current||sr?(typeof je=="function"&&(Zu(i,o,je,u),qe=i.memoizedState),(ae=sr||wh(i,o,ae,u,Ee,qe,H)||!1)?(we||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,qe,H),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,qe,H)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),M.props=u,M.state=qe,M.context=H,u=ae):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return nc(n,i,o,u,m,d)}function nc(n,i,o,u,d,m){Fh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&Gd(i,o,!1),zi(n,i,m);u=i.stateNode,n_.current=i;var F=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ws(i,n.child,null,m),i.child=ws(i,null,F,m)):Ln(n,i,F,m),i.memoizedState=u.state,d&&Gd(i,o,!0),i.child}function zh(n){var i=n.stateNode;i.pendingContext?Bd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bd(n,i.context,!1),ku(n,i.containerInfo)}function kh(n,i,o,u,d){return Es(),Du(d),i.flags|=256,Ln(n,i,o,u),i.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bh(n,i,o){var u=i.pendingProps,d=Zt.current,m=!1,M=(i.flags&128)!==0,F;if((F=M)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ht(Zt,d&1),n===null)return Pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=il(M,u,0,null),n=Gr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=rc(o),i.memoizedState=ic,n):sc(i,M));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return i_(n,i,M,u,F,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,F=d.sibling;var H={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=dr(d,H),u.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=dr(F,m):(m=Gr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?rc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=ic,u}return m=n.child,n=m.sibling,u=dr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function sc(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wa(n,i,o,u){return u!==null&&Du(u),ws(i,n.child,null,o),n=sc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function i_(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=Ju(Error(t(422))),Wa(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=il({mode:"visible",children:u.children},d,0,null),m=Gr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ws(i,n.child,null,M),i.child.memoizedState=rc(M),i.memoizedState=ic,m);if((i.mode&1)===0)return Wa(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var F=u.dgst;return u=F,m=Error(t(419)),u=Ju(m,u,void 0),Wa(n,i,M,u)}if(F=(M&n.childLanes)!==0,Bn||F){if(u=mn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Fi(n,d),pi(u,n,d,-1))}return Sc(),u=Ju(Error(t(421))),Wa(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=g_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,qn=tr(d.nextSibling),Yn=i,$t=!0,ci=null,n!==null&&(Qn[Jn++]=Ui,Qn[Jn++]=Ni,Qn[Jn++]=Ir,Ui=n.id,Ni=n.overflow,Ir=i),i=sc(i,u.children),i.flags|=4096,i)}function Hh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Fu(n.return,i,o)}function oc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Gh(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Ln(n,i,u.children,o),u=Zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hh(n,o,i);else if(n.tag===19)Hh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht(Zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Oa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),oc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}oc(i,!0,o,null,m);break;case"together":oc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=dr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=dr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function r_(n,i,o){switch(i.tag){case 3:zh(i),Es();break;case 5:nh(i);break;case 1:kn(i.type)&&Ra(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ht(Ia,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ht(Zt,Zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Bh(n,i,o):(Ht(Zt,Zt.current&1),n=zi(n,i,o),n!==null?n.sibling:null);Ht(Zt,Zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Gh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Zt,Zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Nh(n,i,o)}return zi(n,i,o)}var Vh,ac,Wh,Xh;Vh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ac=function(){},Wh=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Fr(wi.current);var m=null;switch(o){case"input":d=et(n,d),u=et(n,u),m=[];break;case"select":d=X({},d,{value:void 0}),u=X({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=wa)}_e(o,u);var M;o=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var F=d[ae];for(M in F)F.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in u){var H=u[ae];if(F=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&H!==F&&(H!=null||F!=null))if(ae==="style")if(F){for(M in F)!F.hasOwnProperty(M)||H&&H.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in H)H.hasOwnProperty(M)&&F[M]!==H[M]&&(o||(o={}),o[M]=H[M])}else o||(m||(m=[]),m.push(ae,o)),o=H;else ae==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(m=m||[]).push(ae,H)):ae==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(ae,""+H):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(H!=null&&ae==="onScroll"&&Gt("scroll",n),m||F===H||(m=[])):(m=m||[]).push(ae,H))}o&&(m=m||[]).push("style",o);var ae=m;(i.updateQueue=ae)&&(i.flags|=4)}},Xh=function(n,i,o,u){o!==u&&(i.flags|=4)};function ko(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function s_(n,i,o){var u=i.pendingProps;switch(bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return kn(i.type)&&Aa(),wn(i),null;case 3:return u=i.stateNode,Rs(),Vt(zn),Vt(Mn),Gu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Pa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(vc(ci),ci=null))),ac(n,i),wn(i),null;case 5:Bu(i);var d=Fr(Uo.current);if(o=i.type,n!==null&&i.stateNode!=null)Wh(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=Fr(wi.current),Pa(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Ei]=i,u[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Gt("cancel",u),Gt("close",u);break;case"iframe":case"object":case"embed":Gt("load",u);break;case"video":case"audio":for(d=0;d<Ao.length;d++)Gt(Ao[d],u);break;case"source":Gt("error",u);break;case"img":case"image":case"link":Gt("error",u),Gt("load",u);break;case"details":Gt("toggle",u);break;case"input":ot(u,m),Gt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Gt("invalid",u);break;case"textarea":fe(u,m),Gt("invalid",u)}_e(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var F=m[M];M==="children"?typeof F=="string"?u.textContent!==F&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,F,n),d=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,F,n),d=["children",""+F]):a.hasOwnProperty(M)&&F!=null&&M==="onScroll"&&Gt("scroll",u)}switch(o){case"input":tt(u),nt(u,m,!0);break;case"textarea":tt(u),Ae(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=wa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ye(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[Ei]=i,n[bo]=u,Vh(n,i,!1,!1),i.stateNode=n;e:{switch(M=Me(o,u),o){case"dialog":Gt("cancel",n),Gt("close",n),d=u;break;case"iframe":case"object":case"embed":Gt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ao.length;d++)Gt(Ao[d],n);d=u;break;case"source":Gt("error",n),d=u;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),d=u;break;case"details":Gt("toggle",n),d=u;break;case"input":ot(n,u),d=et(n,u),Gt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=X({},u,{value:void 0}),Gt("invalid",n);break;case"textarea":fe(n,u),d=T(n,u),Gt("invalid",n);break;default:d=u}_e(o,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var H=F[m];m==="style"?ut(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(n,H)):m==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&De(n,H):typeof H=="number"&&De(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Gt("scroll",n):H!=null&&R(n,m,H,M))}switch(o){case"input":tt(n),nt(n,u,!1);break;case"textarea":tt(n),Ae(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ue(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?I(n,!!u.multiple,m,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Xh(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Fr(Uo.current),Fr(wi.current),Pa(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ei]=i,(m=u.nodeValue!==o)&&(n=Yn,n!==null))switch(n.tag){case 3:Ea(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ea(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ei]=i,i.stateNode=u}return wn(i),null;case 13:if(Vt(Zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qd(),Es(),i.flags|=98560,m=!1;else if(m=Pa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else ci!==null&&(vc(ci),ci=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?cn===0&&(cn=3):Sc())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Rs(),ac(n,i),n===null&&Ro(i.stateNode.containerInfo),wn(i),null;case 10:return Nu(i.type._context),wn(i),null;case 17:return kn(i.type)&&Aa(),wn(i),null;case 19:if(Vt(Zt),m=i.memoizedState,m===null)return wn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)ko(m,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Oa(n),M!==null){for(i.flags|=128,ko(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Zt,Zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xe()>Ps&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304)}else{if(!u)if(n=Oa(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ko(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!$t)return wn(i),null}else 2*Xe()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xe(),i.sibling=null,o=Zt.current,Ht(Zt,u?o&1|2:o&1),i):(wn(i),null);case 22:case 23:return yc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?($n&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function o_(n,i){switch(bu(i),i.tag){case 1:return kn(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),Vt(zn),Vt(Mn),Gu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Vt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Zt),null;case 4:return Rs(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var ja=!1,Tn=!1,a_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Jt(n,i,u)}else o.current=null}function lc(n,i,o){try{o()}catch(u){Jt(n,i,u)}}var jh=!1;function l_(n,i){if(yu=da,n=wd(),du(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,F=-1,H=-1,ae=0,we=0,Ce=n,Ee=null;t:for(;;){for(var je;Ce!==o||d!==0&&Ce.nodeType!==3||(F=M+d),Ce!==m||u!==0&&Ce.nodeType!==3||(H=M+u),Ce.nodeType===3&&(M+=Ce.nodeValue.length),(je=Ce.firstChild)!==null;)Ee=Ce,Ce=je;for(;;){if(Ce===n)break t;if(Ee===o&&++ae===d&&(F=M),Ee===m&&++we===u&&(H=M),(je=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=je}o=F===-1||H===-1?null:{start:F,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Su={focusedElem:n,selectionRange:o},da=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ke=qe.memoizedProps,nn=qe.memoizedState,te=i.stateNode,W=te.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:fi(i.type,Ke),nn);te.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){Jt(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return qe=jh,jh=!1,qe}function Bo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&lc(i,o,m)}d=d.next}while(d!==u)}}function Ya(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function uc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Yh(n){var i=n.alternate;i!==null&&(n.alternate=null,Yh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[bo],delete i[Tu],delete i[W0],delete i[X0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qh(n){return n.tag===5||n.tag===3||n.tag===4}function $h(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(u!==4&&(n=n.child,n!==null))for(cc(n,i,o),n=n.sibling;n!==null;)cc(n,i,o),n=n.sibling}function fc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(fc(n,i,o),n=n.sibling;n!==null;)fc(n,i,o),n=n.sibling}var xn=null,di=!1;function ar(n,i,o){for(o=o.child;o!==null;)Kh(n,i,o),o=o.sibling}function Kh(n,i,o){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(vn,o)}catch{}switch(o.tag){case 5:Tn||bs(o,i);case 6:var u=xn,d=di;xn=null,ar(n,i,o),xn=u,di=d,xn!==null&&(di?(n=xn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):xn.removeChild(o.stateNode));break;case 18:xn!==null&&(di?(n=xn,o=o.stateNode,n.nodeType===8?wu(n.parentNode,o):n.nodeType===1&&wu(n,o),vo(n)):wu(xn,o.stateNode));break;case 4:u=xn,d=di,xn=o.stateNode.containerInfo,di=!0,ar(n,i,o),xn=u,di=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&lc(o,i,M),d=d.next}while(d!==u)}ar(n,i,o);break;case 1:if(!Tn&&(bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(F){Jt(o,i,F)}ar(n,i,o);break;case 21:ar(n,i,o);break;case 22:o.mode&1?(Tn=(u=Tn)||o.memoizedState!==null,ar(n,i,o),Tn=u):ar(n,i,o);break;default:ar(n,i,o)}}function Zh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new a_),i.forEach(function(u){var d=__.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function hi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,F=M;e:for(;F!==null;){switch(F.tag){case 5:xn=F.stateNode,di=!1;break e;case 3:xn=F.stateNode.containerInfo,di=!0;break e;case 4:xn=F.stateNode.containerInfo,di=!0;break e}F=F.return}if(xn===null)throw Error(t(160));Kh(m,M,d),xn=null,di=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ae){Jt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qh(i,n),i=i.sibling}function Qh(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(i,n),Ai(n),u&4){try{Bo(3,n,n.return),Ya(3,n)}catch(Ke){Jt(n,n.return,Ke)}try{Bo(5,n,n.return)}catch(Ke){Jt(n,n.return,Ke)}}break;case 1:hi(i,n),Ai(n),u&512&&o!==null&&bs(o,o.return);break;case 5:if(hi(i,n),Ai(n),u&512&&o!==null&&bs(o,o.return),n.flags&32){var d=n.stateNode;try{De(d,"")}catch(Ke){Jt(n,n.return,Ke)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&He(d,m),Me(F,M);var ae=Me(F,m);for(M=0;M<H.length;M+=2){var we=H[M],Ce=H[M+1];we==="style"?ut(d,Ce):we==="dangerouslySetInnerHTML"?Pe(d,Ce):we==="children"?De(d,Ce):R(d,we,Ce,ae)}switch(F){case"input":gt(d,m);break;case"textarea":ge(d,m);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var je=m.value;je!=null?I(d,!!m.multiple,je,!1):Ee!==!!m.multiple&&(m.defaultValue!=null?I(d,!!m.multiple,m.defaultValue,!0):I(d,!!m.multiple,m.multiple?[]:"",!1))}d[bo]=m}catch(Ke){Jt(n,n.return,Ke)}}break;case 6:if(hi(i,n),Ai(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ke){Jt(n,n.return,Ke)}}break;case 3:if(hi(i,n),Ai(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(Ke){Jt(n,n.return,Ke)}break;case 4:hi(i,n),Ai(n);break;case 13:hi(i,n),Ai(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(pc=Xe())),u&4&&Zh(n);break;case 22:if(we=o!==null&&o.memoizedState!==null,n.mode&1?(Tn=(ae=Tn)||we,hi(i,n),Tn=ae):hi(i,n),Ai(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!we&&(n.mode&1)!==0)for(Ye=n,we=n.child;we!==null;){for(Ce=Ye=we;Ye!==null;){switch(Ee=Ye,je=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Bo(4,Ee,Ee.return);break;case 1:bs(Ee,Ee.return);var qe=Ee.stateNode;if(typeof qe.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ke){Jt(u,o,Ke)}}break;case 5:bs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){tp(Ce);continue}}je!==null?(je.return=Ee,Ye=je):tp(Ce)}we=we.sibling}e:for(we=null,Ce=n;;){if(Ce.tag===5){if(we===null){we=Ce;try{d=Ce.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Ce.stateNode,H=Ce.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Dt("display",M))}catch(Ke){Jt(n,n.return,Ke)}}}else if(Ce.tag===6){if(we===null)try{Ce.stateNode.nodeValue=ae?"":Ce.memoizedProps}catch(Ke){Jt(n,n.return,Ke)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;we===Ce&&(we=null),Ce=Ce.return}we===Ce&&(we=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:hi(i,n),Ai(n),u&4&&Zh(n);break;case 21:break;default:hi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(qh(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(De(d,""),u.flags&=-33);var m=$h(n);fc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,F=$h(n);cc(n,F,M);break;default:throw Error(t(161))}}catch(H){Jt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function u_(n,i,o){Ye=n,Jh(n)}function Jh(n,i,o){for(var u=(n.mode&1)!==0;Ye!==null;){var d=Ye,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||ja;if(!M){var F=d.alternate,H=F!==null&&F.memoizedState!==null||Tn;F=ja;var ae=Tn;if(ja=M,(Tn=H)&&!ae)for(Ye=d;Ye!==null;)M=Ye,H=M.child,M.tag===22&&M.memoizedState!==null?np(d):H!==null?(H.return=M,Ye=H):np(d);for(;m!==null;)Ye=m,Jh(m),m=m.sibling;Ye=d,ja=F,Tn=ae}ep(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ye=m):ep(n)}}function ep(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||Ya(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Tn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&th(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}th(i,M,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var we=ae.memoizedState;if(we!==null){var Ce=we.dehydrated;Ce!==null&&vo(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&uc(i)}catch(Ee){Jt(i,i.return,Ee)}}if(i===n){Ye=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function tp(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function np(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ya(4,i)}catch(H){Jt(i,o,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(H){Jt(i,d,H)}}var m=i.return;try{uc(i)}catch(H){Jt(i,m,H)}break;case 5:var M=i.return;try{uc(i)}catch(H){Jt(i,M,H)}}}catch(H){Jt(i,i.return,H)}if(i===n){Ye=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ye=F;break}Ye=i.return}}var c_=Math.ceil,qa=b.ReactCurrentDispatcher,dc=b.ReactCurrentOwner,ni=b.ReactCurrentBatchConfig,bt=0,mn=null,on=null,yn=0,$n=0,Ls=nr(0),cn=0,Ho=null,zr=0,$a=0,hc=0,Go=null,Hn=null,pc=0,Ps=1/0,ki=null,Ka=!1,mc=null,lr=null,Za=!1,ur=null,Qa=0,Vo=0,gc=null,Ja=-1,el=0;function Pn(){return(bt&6)!==0?Xe():Ja!==-1?Ja:Ja=Xe()}function cr(n){return(n.mode&1)===0?1:(bt&2)!==0&&yn!==0?yn&-yn:Y0.transition!==null?(el===0&&(el=ua()),el):(n=Nt,n!==0||(n=window.event,n=n===void 0?16:rd(n.type)),n)}function pi(n,i,o,u){if(50<Vo)throw Vo=0,gc=null,Error(t(185));ho(n,o,u),((bt&2)===0||n!==mn)&&(n===mn&&((bt&2)===0&&($a|=o),cn===4&&fr(n,yn)),Gn(n,u),o===1&&bt===0&&(i.mode&1)===0&&(Ps=Xe()+500,Ca&&rr()))}function Gn(n,i){var o=n.callbackNode;On(n,i);var u=Bt(n,n===mn?yn:0);if(u===0)o!==null&&Ve(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Ve(o),i===1)n.tag===0?j0(rp.bind(null,n)):Vd(rp.bind(null,n)),G0(function(){(bt&6)===0&&rr()}),o=null;else{switch(Kf(u)){case 1:o=ft;break;case 4:o=dt;break;case 16:o=It;break;case 536870912:o=Yt;break;default:o=It}o=dp(o,ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function ip(n,i){if(Ja=-1,el=0,(bt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ds()&&n.callbackNode!==o)return null;var u=Bt(n,n===mn?yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=tl(n,u);else{i=u;var d=bt;bt|=2;var m=op();(mn!==n||yn!==i)&&(ki=null,Ps=Xe()+500,Br(n,i));do try{h_();break}catch(F){sp(n,F)}while(!0);Uu(),qa.current=m,bt=d,on!==null?i=0:(mn=null,yn=0,i=cn)}if(i!==0){if(i===2&&(d=Lr(n),d!==0&&(u=d,i=_c(n,d))),i===1)throw o=Ho,Br(n,0),fr(n,u),Gn(n,Xe()),o;if(i===6)fr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!f_(d)&&(i=tl(n,u),i===2&&(m=Lr(n),m!==0&&(u=m,i=_c(n,m))),i===1))throw o=Ho,Br(n,0),fr(n,u),Gn(n,Xe()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Hn,ki);break;case 3:if(fr(n,u),(u&130023424)===u&&(i=pc+500-Xe(),10<i)){if(Bt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Eu(Hr.bind(null,n,Hn,ki),i);break}Hr(n,Hn,ki);break;case 4:if(fr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-Oe(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=Xe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*c_(u/1960))-u,10<u){n.timeoutHandle=Eu(Hr.bind(null,n,Hn,ki),u);break}Hr(n,Hn,ki);break;case 5:Hr(n,Hn,ki);break;default:throw Error(t(329))}}}return Gn(n,Xe()),n.callbackNode===o?ip.bind(null,n):null}function _c(n,i){var o=Go;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Hn,Hn=o,i!==null&&vc(i)),n}function vc(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function f_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ui(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~hc,i&=~$a,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Oe(i),u=1<<o;n[o]=-1,i&=~u}}function rp(n){if((bt&6)!==0)throw Error(t(327));Ds();var i=Bt(n,0);if((i&1)===0)return Gn(n,Xe()),null;var o=tl(n,i);if(n.tag!==0&&o===2){var u=Lr(n);u!==0&&(i=u,o=_c(n,u))}if(o===1)throw o=Ho,Br(n,0),fr(n,i),Gn(n,Xe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Hn,ki),Gn(n,Xe()),null}function xc(n,i){var o=bt;bt|=1;try{return n(i)}finally{bt=o,bt===0&&(Ps=Xe()+500,Ca&&rr())}}function kr(n){ur!==null&&ur.tag===0&&(bt&6)===0&&Ds();var i=bt;bt|=1;var o=ni.transition,u=Nt;try{if(ni.transition=null,Nt=1,n)return n()}finally{Nt=u,ni.transition=o,bt=i,(bt&6)===0&&rr()}}function yc(){$n=Ls.current,Vt(Ls)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,H0(o)),on!==null)for(o=on.return;o!==null;){var u=o;switch(bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:Rs(),Vt(zn),Vt(Mn),Gu();break;case 5:Bu(u);break;case 4:Rs();break;case 13:Vt(Zt);break;case 19:Vt(Zt);break;case 10:Nu(u.type._context);break;case 22:case 23:yc()}o=o.return}if(mn=n,on=n=dr(n.current,null),yn=$n=i,cn=0,Ho=null,hc=$a=zr=0,Hn=Go=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Nr=null}return n}function sp(n,i){do{var o=on;try{if(Uu(),za.current=Ga,ka){for(var u=Qt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}ka=!1}if(Or=0,pn=un=Qt=null,No=!1,Fo=0,dc.current=null,o===null||o.return===null){cn=1,Ho=i,on=null;break}e:{var m=n,M=o.return,F=o,H=i;if(i=yn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ae=H,we=F,Ce=we.tag;if((we.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var je=Lh(M);if(je!==null){je.flags&=-257,Ph(je,M,F,m,i),je.mode&1&&bh(m,ae,i),i=je,H=ae;var qe=i.updateQueue;if(qe===null){var Ke=new Set;Ke.add(H),i.updateQueue=Ke}else qe.add(H);break e}else{if((i&1)===0){bh(m,ae,i),Sc();break e}H=Error(t(426))}}else if($t&&F.mode&1){var nn=Lh(M);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Ph(nn,M,F,m,i),Du(Cs(H,F));break e}}m=H=Cs(H,F),cn!==4&&(cn=2),Go===null?Go=[m]:Go.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var te=Rh(m,H,i);eh(m,te);break e;case 1:F=H;var W=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(lr===null||!lr.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ie=Ch(m,F,i);eh(m,Ie);break e}}m=m.return}while(m!==null)}lp(o)}catch(Je){i=Je,on===o&&o!==null&&(on=o=o.return);continue}break}while(!0)}function op(){var n=qa.current;return qa.current=Ga,n===null?Ga:n}function Sc(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(zr&268435455)===0&&($a&268435455)===0||fr(mn,yn)}function tl(n,i){var o=bt;bt|=2;var u=op();(mn!==n||yn!==i)&&(ki=null,Br(n,i));do try{d_();break}catch(d){sp(n,d)}while(!0);if(Uu(),bt=o,qa.current=u,on!==null)throw Error(t(261));return mn=null,yn=0,cn}function d_(){for(;on!==null;)ap(on)}function h_(){for(;on!==null&&!Qe();)ap(on)}function ap(n){var i=fp(n.alternate,n,$n);n.memoizedProps=n.pendingProps,i===null?lp(n):on=i,dc.current=null}function lp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=s_(o,i,$n),o!==null){on=o;return}}else{if(o=o_(o,i),o!==null){o.flags&=32767,on=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);cn===0&&(cn=5)}function Hr(n,i,o){var u=Nt,d=ni.transition;try{ni.transition=null,Nt=1,p_(n,i,o,u)}finally{ni.transition=d,Nt=u}return null}function p_(n,i,o,u){do Ds();while(ur!==null);if((bt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(qg(n,m),n===mn&&(on=mn=null,yn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Za||(Za=!0,dp(It,function(){return Ds(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ni.transition,ni.transition=null;var M=Nt;Nt=1;var F=bt;bt|=4,dc.current=null,l_(n,o),Qh(o,n),U0(Su),da=!!yu,Su=yu=null,n.current=o,u_(o),it(),bt=F,Nt=M,ni.transition=m}else n.current=o;if(Za&&(Za=!1,ur=n,Qa=d),m=n.pendingLanes,m===0&&(lr=null),N(o.stateNode),Gn(n,Xe()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ka)throw Ka=!1,n=mc,mc=null,n;return(Qa&1)!==0&&n.tag!==0&&Ds(),m=n.pendingLanes,(m&1)!==0?n===gc?Vo++:(Vo=0,gc=n):Vo=0,rr(),null}function Ds(){if(ur!==null){var n=Kf(Qa),i=ni.transition,o=Nt;try{if(ni.transition=null,Nt=16>n?16:n,ur===null)var u=!1;else{if(n=ur,ur=null,Qa=0,(bt&6)!==0)throw Error(t(331));var d=bt;for(bt|=4,Ye=n.current;Ye!==null;){var m=Ye,M=m.child;if((Ye.flags&16)!==0){var F=m.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ae=F[H];for(Ye=ae;Ye!==null;){var we=Ye;switch(we.tag){case 0:case 11:case 15:Bo(8,we,m)}var Ce=we.child;if(Ce!==null)Ce.return=we,Ye=Ce;else for(;Ye!==null;){we=Ye;var Ee=we.sibling,je=we.return;if(Yh(we),we===ae){Ye=null;break}if(Ee!==null){Ee.return=je,Ye=Ee;break}Ye=je}}}var qe=m.alternate;if(qe!==null){var Ke=qe.child;if(Ke!==null){qe.child=null;do{var nn=Ke.sibling;Ke.sibling=null,Ke=nn}while(Ke!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Ye=M;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bo(9,m,m.return)}var te=m.sibling;if(te!==null){te.return=m.return,Ye=te;break e}Ye=m.return}}var W=n.current;for(Ye=W;Ye!==null;){M=Ye;var se=M.child;if((M.subtreeFlags&2064)!==0&&se!==null)se.return=M,Ye=se;else e:for(M=W;Ye!==null;){if(F=Ye,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ya(9,F)}}catch(Je){Jt(F,F.return,Je)}if(F===M){Ye=null;break e}var Ie=F.sibling;if(Ie!==null){Ie.return=F.return,Ye=Ie;break e}Ye=F.return}}if(bt=d,rr(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(vn,n)}catch{}u=!0}return u}finally{Nt=o,ni.transition=i}}return!1}function up(n,i,o){i=Cs(o,i),i=Rh(n,i,1),n=or(n,i,1),i=Pn(),n!==null&&(ho(n,1,i),Gn(n,i))}function Jt(n,i,o){if(n.tag===3)up(n,n,o);else for(;i!==null;){if(i.tag===3){up(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){n=Cs(o,n),n=Ch(i,n,1),i=or(i,n,1),n=Pn(),i!==null&&(ho(i,1,n),Gn(i,n));break}}i=i.return}}function m_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&o,mn===n&&(yn&o)===o&&(cn===4||cn===3&&(yn&130023424)===yn&&500>Xe()-pc?Br(n,0):hc|=o),Gn(n,i)}function cp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tn,tn<<=1,(tn&130023424)===0&&(tn=4194304)));var o=Pn();n=Fi(n,i),n!==null&&(ho(n,i,o),Gn(n,o))}function g_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),cp(n,o)}function __(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),cp(n,o)}var fp;fp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Bn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Bn=!1,r_(n,i,o);Bn=(n.flags&131072)!==0}else Bn=!1,$t&&(i.flags&1048576)!==0&&Wd(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xa(n,i),n=i.pendingProps;var d=ys(i,Mn.current);As(i,o),d=Xu(null,i,u,n,d,o);var m=ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zu(i),d.updater=Va,i.stateNode=d,d._reactInternals=i,Qu(i,u,n,o),i=nc(null,i,u,!0,m,o)):(i.tag=0,$t&&m&&Cu(i),Ln(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Xa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=x_(u),n=fi(u,n),d){case 0:i=tc(null,i,u,n,o);break e;case 1:i=Oh(null,i,u,n,o);break e;case 11:i=Dh(null,i,u,n,o);break e;case 14:i=Ih(null,i,u,fi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),tc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Oh(n,i,u,d,o);case 3:e:{if(zh(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Jd(n,i),Fa(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Cs(Error(t(423)),i),i=kh(n,i,u,o,d);break e}else if(u!==d){d=Cs(Error(t(424)),i),i=kh(n,i,u,o,d);break e}else for(qn=tr(i.stateNode.containerInfo.firstChild),Yn=i,$t=!0,ci=null,o=Zd(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),u===d){i=zi(n,i,o);break e}Ln(n,i,u,o)}i=i.child}return i;case 5:return nh(i),n===null&&Pu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Mu(u,d)?M=null:m!==null&&Mu(u,m)&&(i.flags|=32),Fh(n,i),Ln(n,i,M,o),i.child;case 6:return n===null&&Pu(i),null;case 13:return Bh(n,i,o);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ws(i,null,u,o):Ln(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Dh(n,i,u,d,o);case 7:return Ln(n,i,i.pendingProps,o),i.child;case 8:return Ln(n,i,i.pendingProps.children,o),i.child;case 12:return Ln(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Ht(Ia,u._currentValue),u._currentValue=M,m!==null)if(ui(m.value,M)){if(m.children===d.children&&!zn.current){i=zi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){M=m.child;for(var H=F.firstContext;H!==null;){if(H.context===u){if(m.tag===1){H=Oi(-1,o&-o),H.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var we=ae.pending;we===null?H.next=H:(H.next=we.next,we.next=H),ae.pending=H}}m.lanes|=o,H=m.alternate,H!==null&&(H.lanes|=o),Fu(m.return,o,i),F.lanes|=o;break}H=H.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,F=M.alternate,F!==null&&(F.lanes|=o),Fu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Ln(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,As(i,o),d=ei(d),u=u(d),i.flags|=1,Ln(n,i,u,o),i.child;case 14:return u=i.type,d=fi(u,i.pendingProps),d=fi(u.type,d),Ih(n,i,u,d,o);case 15:return Uh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Xa(n,i),i.tag=1,kn(u)?(n=!0,Ra(i)):n=!1,As(i,o),Th(i,u,d),Qu(i,u,d,o),nc(null,i,u,!0,n,o);case 19:return Gh(n,i,o);case 22:return Nh(n,i,o)}throw Error(t(156,i.tag))};function dp(n,i){return oe(n,i)}function v_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,o,u){return new v_(n,i,o,u)}function Mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x_(n){if(typeof n=="function")return Mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===me)return 11;if(n===K)return 14}return 2}function dr(n,i){var o=n.alternate;return o===null?(o=ii(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nl(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")Mc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case D:return Gr(o.children,d,m,i);case Z:M=8,d|=8;break;case pe:return n=ii(12,o,i,d|2),n.elementType=pe,n.lanes=m,n;case ie:return n=ii(13,o,i,d),n.elementType=ie,n.lanes=m,n;case B:return n=ii(19,o,i,d),n.elementType=B,n.lanes=m,n;case re:return il(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:M=10;break e;case U:M=9;break e;case me:M=11;break e;case K:M=14;break e;case j:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Gr(n,i,o,u){return n=ii(7,n,u,i),n.lanes=o,n}function il(n,i,o,u){return n=ii(22,n,u,i),n.elementType=re,n.lanes=o,n.stateNode={isHidden:!1},n}function Ec(n,i,o){return n=ii(6,n,null,i),n.lanes=o,n}function wc(n,i,o){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function y_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(n,i,o,u,d,m,M,F,H){return n=new y_(n,i,o,F,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ii(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(m),n}function S_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function hp(n){if(!n)return ir;n=n._reactInternals;e:{if(li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(kn(o))return Hd(n,o,i)}return i}function pp(n,i,o,u,d,m,M,F,H){return n=Tc(o,u,!0,n,d,m,M,F,H),n.context=hp(null),o=n.current,u=Pn(),d=cr(o),m=Oi(u,d),m.callback=i??null,or(o,m,d),n.current.lanes=d,ho(n,d,u),Gn(n,u),n}function rl(n,i,o,u){var d=i.current,m=Pn(),M=cr(d);return o=hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=or(d,i,M),n!==null&&(pi(n,d,M,m),Na(n,d,M)),M}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ac(n,i){mp(n,i),(n=n.alternate)&&mp(n,i)}function M_(){return null}var gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rc(n){this._internalRoot=n}ol.prototype.render=Rc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Rc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){rl(null,n,null,null)}),i[Di]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=Jf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,n),o===0&&nd(n)}};function Cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _p(){}function E_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ae=sl(M);m.call(ae)}}var M=pp(i,u,n,0,null,!1,!1,"",_p);return n._reactRootContainer=M,n[Di]=M.current,Ro(n.nodeType===8?n.parentNode:n),kr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var F=u;u=function(){var ae=sl(H);F.call(ae)}}var H=Tc(n,0,!1,null,null,!1,!1,"",_p);return n._reactRootContainer=H,n[Di]=H.current,Ro(n.nodeType===8?n.parentNode:n),kr(function(){rl(i,H,o,u)}),H}function ll(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var F=d;d=function(){var H=sl(M);F.call(H)}}rl(i,M,n,d)}else M=E_(o,i,n,d,u);return sl(M)}Zf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ut(i.pendingLanes);o!==0&&(Ql(i,o|1),Gn(i,Xe()),(bt&6)===0&&(Ps=Xe()+500,rr()))}break;case 13:kr(function(){var u=Fi(n,1);if(u!==null){var d=Pn();pi(u,n,1,d)}}),Ac(n,1)}},Jl=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var o=Pn();pi(i,n,134217728,o)}Ac(n,134217728)}},Qf=function(n){if(n.tag===13){var i=cr(n),o=Fi(n,i);if(o!==null){var u=Pn();pi(o,n,i,u)}Ac(n,i)}},Jf=function(){return Nt},ed=function(n,i){var o=Nt;try{return Nt=n,i()}finally{Nt=o}},Ge=function(n,i,o){switch(i){case"input":if(gt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ta(u);if(!d)throw Error(t(90));J(u),gt(u,d)}}}break;case"textarea":ge(n,o);break;case"select":i=o.value,i!=null&&I(n,!!o.multiple,i,!1)}},lt=xc,At=kr;var w_={usingClientEntryPoint:!1,Events:[Lo,vs,Ta,Re,Ne,xc]},Wo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T_={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ue(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||M_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{vn=ul.inject(T_),Tt=ul}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w_,Vn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(i))throw Error(t(200));return S_(n,i,null,o)},Vn.createRoot=function(n,i){if(!Cc(n))throw Error(t(299));var o=!1,u="",d=gp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tc(n,1,!1,null,null,o,!1,u,d),n[Di]=i.current,Ro(n.nodeType===8?n.parentNode:n),new Rc(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ue(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return kr(n)},Vn.hydrate=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,o)},Vn.hydrateRoot=function(n,i,o){if(!Cc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=gp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=pp(i,null,n,1,o??null,d,!1,m,M),n[Di]=i.current,Ro(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ol(i)},Vn.render=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,o)},Vn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},Vn.unstable_batchedUpdates=xc,Vn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,o,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Tp;function U_(){if(Tp)return Pc.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=I_(),Pc.exports}var Ap;function N_(){if(Ap)return cl;Ap=1;var s=U_();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var F_=N_();const O_=hg(F_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="162",z_=0,Rp=1,k_=2,pg=1,B_=2,Xi=3,Ar=0,Nn=1,si=2,Mr=0,io=1,Cp=2,bp=3,Lp=4,H_=5,es=100,G_=101,V_=102,Pp=103,Dp=104,W_=200,X_=201,j_=202,Y_=203,wf=204,Tf=205,q_=206,$_=207,K_=208,Z_=209,Q_=210,J_=211,ev=212,tv=213,nv=214,iv=0,rv=1,sv=2,Bl=3,ov=4,av=5,lv=6,uv=7,Ff=0,cv=1,fv=2,Er=0,dv=1,hv=2,pv=3,mv=4,gv=5,_v=6,vv=7,mg=300,so=301,oo=302,Af=303,Rf=304,ql=306,Cf=1e3,vi=1001,bf=1002,Un=1003,Ip=1004,jo=1005,Wn=1006,Uc=1007,ns=1008,wr=1009,xv=1010,yv=1011,Of=1012,gg=1013,Sr=1014,ji=1015,ia=1016,_g=1017,vg=1018,is=1020,Sv=1021,xi=1023,Mv=1024,Ev=1025,rs=1026,ao=1027,wv=1028,xg=1029,Tv=1030,yg=1031,Sg=1033,Nc=33776,Fc=33777,Oc=33778,zc=33779,Up=35840,Np=35841,Fp=35842,Op=35843,Mg=36196,zp=37492,kp=37496,Bp=37808,Hp=37809,Gp=37810,Vp=37811,Wp=37812,Xp=37813,jp=37814,Yp=37815,qp=37816,$p=37817,Kp=37818,Zp=37819,Qp=37820,Jp=37821,kc=36492,em=36494,tm=36495,Av=36283,nm=36284,im=36285,rm=36286,Rv=3200,Cv=3201,zf=0,bv=1,yr="",Ri="srgb",Cr="srgb-linear",kf="display-p3",$l="display-p3-linear",Hl="linear",Wt="srgb",Gl="rec709",Vl="p3",Is=7680,sm=519,Lv=512,Pv=513,Dv=514,Eg=515,Iv=516,Uv=517,Nv=518,Fv=519,Lf=35044,om="300 es",Pf=1035,Yi=2e3,Wl=2001;class uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Xl=180/Math.PI;function Tr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Cn(s,e,t){return Math.max(e,Math.min(t,s))}function Ov(s,e){return(s%e+e)%e}function Hc(s,e,t){return(1-t)*s+t*e}function am(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,r,a,l,f,c,h,p){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p)}set(e,t,r,a,l,f,c,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],A=a[0],x=a[3],v=a[6],L=a[1],R=a[4],b=a[7],k=a[2],z=a[5],D=a[8];return l[0]=f*A+c*L+h*k,l[3]=f*x+c*R+h*z,l[6]=f*v+c*b+h*D,l[1]=p*A+_*L+g*k,l[4]=p*x+_*R+g*z,l[7]=p*v+_*b+g*D,l[2]=y*A+S*L+E*k,l[5]=y*x+S*R+E*z,l[8]=y*v+S*b+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8];return t*f*_-t*c*p-r*l*_+r*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=_*f-c*p,y=c*h-_*l,S=p*l-f*h,E=t*g+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(a*p-_*r)*A,e[2]=(c*r-a*f)*A,e[3]=y*A,e[4]=(_*t-a*h)*A,e[5]=(a*l-c*t)*A,e[6]=S*A,e[7]=(r*h-p*t)*A,e[8]=(f*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Mt;function wg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zv(){const s=jl("canvas");return s.style.display="block",s}const lm={};function Tg(s){s in lm||(lm[s]=!0,console.warn(s))}const um=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cm=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Cr]:{transfer:Hl,primaries:Gl,toReference:s=>s,fromReference:s=>s},[Ri]:{transfer:Wt,primaries:Gl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[$l]:{transfer:Hl,primaries:Vl,toReference:s=>s.applyMatrix3(cm),fromReference:s=>s.applyMatrix3(um)},[kf]:{transfer:Wt,primaries:Vl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(cm),fromReference:s=>s.applyMatrix3(um).convertLinearToSRGB()}},kv=new Set([Cr,$l]),kt={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!kv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=fl[e].toReference,a=fl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return fl[s].primaries},getTransfer:function(s){return s===yr?Hl:fl[s].transfer}};function ro(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class Ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=jl("canvas")),Us.width=e.width,Us.height=e.height;const r=Us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ro(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ro(t[r]/255)*255):t[r]=ro(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bv=0;class Rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(Wc(a[f].image)):l.push(Wc(a[f]))}else l=Wc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ag.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hv=0;class Fn extends uo{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=vi,a=vi,l=Wn,f=ns,c=xi,h=wr,p=Fn.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Tr(),this.name="",this.source=new Rg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=mg;Fn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,a=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],y=h[1],S=h[5],E=h[9],A=h[2],x=h[6],v=h[10];if(Math.abs(_-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,b=(S+1)/2,k=(v+1)/2,z=(_+y)/4,D=(g+A)/4,Z=(E+x)/4;return R>b&&R>k?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=z/r,l=D/r):b>k?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=z/a,l=Z/a):k<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),r=D/l,a=Z/l),this.set(r,a,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(g-A)*(g-A)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(g-A)/L,this.z=(y-_)/L,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends uo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Gv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Cg extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vv extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const y=l[f+0],S=l[f+1],E=l[f+2],A=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(c===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=A;return}if(g!==A||h!==y||p!==S||_!==E){let x=1-c;const v=h*y+p*S+_*E+g*A,L=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const k=Math.sqrt(R),z=Math.atan2(k,v*L);x=Math.sin(x*z)/k,c=Math.sin(c*z)/k}const b=c*L;if(h=h*x+y*b,p=p*x+S*b,_=_*x+E*b,g=g*x+A*b,x===1-c){const k=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=k,p*=k,_*=k,g*=k}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[f],y=l[f+1],S=l[f+2],E=l[f+3];return e[t]=c*E+_*g+h*S-p*y,e[t+1]=h*E+_*y+p*g-c*S,e[t+2]=p*E+_*S+c*y-h*g,e[t+3]=_*E-c*g-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(r/2),_=c(a/2),g=c(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(f){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],_=t[6],g=t[10],y=r+c+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+f*c+a*p-l*h,this._y=a*_+f*h+l*c-r*p,this._z=l*_+f*p+r*h-a*c,this._w=f*_-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,c),g=Math.sin((1-t)*_)/p,y=Math.sin(t*_)/p;return this._w=f*g+this._w*y,this._x=r*g+this._x*y,this._y=a*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*a-c*r),_=2*(c*t-l*a),g=2*(l*r-f*t);return this.x=t+h*p+f*g-c*_,this.y=r+h*_+c*p-l*g,this.z=a+h*g+l*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new V,fm=new sa;class oa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,mi):mi.fromBufferAttribute(l,f),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),hl.subVectors(this.max,Yo),Ns.subVectors(e.a,Yo),Fs.subVectors(e.b,Yo),Os.subVectors(e.c,Yo),pr.subVectors(Fs,Ns),mr.subVectors(Os,Fs),Vr.subVectors(Ns,Os);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Vr.z,Vr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Vr.z,0,-Vr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Vr.y,Vr.x,0];return!jc(t,Ns,Fs,Os,hl)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Ns,Fs,Os,hl))?!1:(pl.crossVectors(pr,mr),t=[pl.x,pl.y,pl.z],jc(t,Ns,Fs,Os,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,dl=new oa,Ns=new V,Fs=new V,Os=new V,pr=new V,mr=new V,Vr=new V,Yo=new V,hl=new V,pl=new V,Wr=new V;function jc(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Wr.fromArray(s,l);const c=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),h=e.dot(Wr),p=t.dot(Wr),_=r.dot(Wr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>c)return!1}return!0}const Wv=new oa,qo=new V,Yc=new V;class Kl{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Wv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Yc)),this.expandByPoint(qo.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new V,qc=new V,ml=new V,gr=new V,$c=new V,gl=new V,Kc=new V;class bg{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){qc.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(qc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(ml),c=gr.dot(this.direction),h=-gr.dot(ml),p=gr.lengthSq(),_=Math.abs(1-f*f);let g,y,S,E;if(_>0)if(g=f*h-c,y=f*c-h,E=l*_,g>=0)if(y>=-E)if(y<=E){const A=1/_;g*=A,y*=A,S=g*(g+f*y+2*c)+y*(f*g+y+2*h)+p}else y=l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;else y=-l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;else y<=-E?(g=Math.max(0,-(-f*l+c)),y=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(g=Math.max(0,-(f*l+c)),y=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p);else y=f>0?-l:l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(qc).addScaledVector(ml,y),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),g>=0?(c=(e.min.z-y.z)*g,h=(e.max.z-y.z)*g):(c=(e.max.z-y.z)*g,h=(e.min.z-y.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){$c.subVectors(t,e),gl.subVectors(r,e),Kc.crossVectors($c,gl);let f=this.direction.dot(Kc),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;gr.subVectors(this.origin,e);const h=c*this.direction.dot(gl.crossVectors(gr,gl));if(h<0)return null;const p=c*this.direction.dot($c.cross(gr));if(p<0||h+p>f)return null;const _=-c*gr.dot(Kc);return _<0?null:this.at(_/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,a,l,f,c,h,p,_,g,y,S,E,A,x){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p,_,g,y,S,E,A,x)}set(e,t,r,a,l,f,c,h,p,_,g,y,S,E,A,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=f,v[9]=c,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=S,v[7]=E,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),f=1/zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=f*_,S=f*g,E=c*_,A=c*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+E*p,t[5]=y-A*p,t[9]=-c*h,t[2]=A-y*p,t[6]=E+S*p,t[10]=f*h}else if(e.order==="YXZ"){const y=h*_,S=h*g,E=p*_,A=p*g;t[0]=y+A*c,t[4]=E*c-S,t[8]=f*p,t[1]=f*g,t[5]=f*_,t[9]=-c,t[2]=S*c-E,t[6]=A+y*c,t[10]=f*h}else if(e.order==="ZXY"){const y=h*_,S=h*g,E=p*_,A=p*g;t[0]=y-A*c,t[4]=-f*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=f*_,t[9]=A-y*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const y=f*_,S=f*g,E=c*_,A=c*g;t[0]=h*_,t[4]=E*p-S,t[8]=y*p+A,t[1]=h*g,t[5]=A*p+y,t[9]=S*p-E,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const y=f*h,S=f*p,E=c*h,A=c*p;t[0]=h*_,t[4]=A-y*g,t[8]=E*g+S,t[1]=g,t[5]=f*_,t[9]=-c*_,t[2]=-p*_,t[6]=S*g+E,t[10]=y-A*g}else if(e.order==="XZY"){const y=f*h,S=f*p,E=c*h,A=c*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=y*g+A,t[5]=f*_,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*_,t[10]=A*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,jv)}lookAt(e,t,r){const a=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),_r.crossVectors(r,Kn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),_r.crossVectors(r,Kn)),_r.normalize(),_l.crossVectors(Kn,_r),a[0]=_r.x,a[4]=_l.x,a[8]=Kn.x,a[1]=_r.y,a[5]=_l.y,a[9]=Kn.y,a[2]=_r.z,a[6]=_l.z,a[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],A=r[6],x=r[10],v=r[14],L=r[3],R=r[7],b=r[11],k=r[15],z=a[0],D=a[4],Z=a[8],pe=a[12],w=a[1],U=a[5],me=a[9],ie=a[13],B=a[2],K=a[6],j=a[10],re=a[14],G=a[3],ee=a[7],X=a[11],P=a[15];return l[0]=f*z+c*w+h*B+p*G,l[4]=f*D+c*U+h*K+p*ee,l[8]=f*Z+c*me+h*j+p*X,l[12]=f*pe+c*ie+h*re+p*P,l[1]=_*z+g*w+y*B+S*G,l[5]=_*D+g*U+y*K+S*ee,l[9]=_*Z+g*me+y*j+S*X,l[13]=_*pe+g*ie+y*re+S*P,l[2]=E*z+A*w+x*B+v*G,l[6]=E*D+A*U+x*K+v*ee,l[10]=E*Z+A*me+x*j+v*X,l[14]=E*pe+A*ie+x*re+v*P,l[3]=L*z+R*w+b*B+k*G,l[7]=L*D+R*U+b*K+k*ee,l[11]=L*Z+R*me+b*j+k*X,l[15]=L*pe+R*ie+b*re+k*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],A=e[7],x=e[11],v=e[15];return E*(+l*h*g-a*p*g-l*c*y+r*p*y+a*c*S-r*h*S)+A*(+t*h*S-t*p*y+l*f*y-a*f*S+a*p*_-l*h*_)+x*(+t*p*g-t*c*S-l*f*g+r*f*S+l*c*_-r*p*_)+v*(-a*c*_-t*h*g+t*c*y+a*f*g-r*f*y+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],A=e[13],x=e[14],v=e[15],L=g*x*p-A*y*p+A*h*S-c*x*S-g*h*v+c*y*v,R=E*y*p-_*x*p-E*h*S+f*x*S+_*h*v-f*y*v,b=_*A*p-E*g*p+E*c*S-f*A*S-_*c*v+f*g*v,k=E*g*h-_*A*h-E*c*y+f*A*y+_*c*x-f*g*x,z=t*L+r*R+a*b+l*k;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/z;return e[0]=L*D,e[1]=(A*y*l-g*x*l-A*a*S+r*x*S+g*a*v-r*y*v)*D,e[2]=(c*x*l-A*h*l+A*a*p-r*x*p-c*a*v+r*h*v)*D,e[3]=(g*h*l-c*y*l-g*a*p+r*y*p+c*a*S-r*h*S)*D,e[4]=R*D,e[5]=(_*x*l-E*y*l+E*a*S-t*x*S-_*a*v+t*y*v)*D,e[6]=(E*h*l-f*x*l-E*a*p+t*x*p+f*a*v-t*h*v)*D,e[7]=(f*y*l-_*h*l+_*a*p-t*y*p-f*a*S+t*h*S)*D,e[8]=b*D,e[9]=(E*g*l-_*A*l-E*r*S+t*A*S+_*r*v-t*g*v)*D,e[10]=(f*A*l-E*c*l+E*r*p-t*A*p-f*r*v+t*c*v)*D,e[11]=(_*c*l-f*g*l-_*r*p+t*g*p+f*r*S-t*c*S)*D,e[12]=k*D,e[13]=(_*A*a-E*g*a+E*r*y-t*A*y-_*r*x+t*g*x)*D,e[14]=(E*c*a-f*A*a-E*r*h+t*A*h+f*r*x-t*c*x)*D,e[15]=(f*g*a-_*c*a+_*r*h-t*g*h-f*r*y+t*c*y)*D,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,p=l*f,_=l*c;return this.set(p*f+r,p*c-a*h,p*h+a*c,0,p*c+a*h,_*c+r,_*h-a*f,0,p*h-a*c,_*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,_=f+f,g=c+c,y=l*p,S=l*_,E=l*g,A=f*_,x=f*g,v=c*g,L=h*p,R=h*_,b=h*g,k=r.x,z=r.y,D=r.z;return a[0]=(1-(A+v))*k,a[1]=(S+b)*k,a[2]=(E-R)*k,a[3]=0,a[4]=(S-b)*z,a[5]=(1-(y+v))*z,a[6]=(x+L)*z,a[7]=0,a[8]=(E+R)*D,a[9]=(x-L)*D,a[10]=(1-(y+A))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=zs.set(a[0],a[1],a[2]).length();const f=zs.set(a[4],a[5],a[6]).length(),c=zs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],gi.copy(this);const p=1/l,_=1/f,g=1/c;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=Yi){const h=this.elements,p=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let S,E;if(c===Yi)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(c===Wl)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=Yi){const h=this.elements,p=1/(t-e),_=1/(r-a),g=1/(f-l),y=(t+e)*p,S=(r+a)*_;let E,A;if(c===Yi)E=(f+l)*g,A=-2*g;else if(c===Wl)E=l*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const zs=new V,gi=new jt,Xv=new V(0,0,0),jv=new V(1,1,1),_r=new V,_l=new V,Kn=new V,dm=new jt,hm=new sa;class Si{constructor(e=0,t=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],_=a[9],g=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Cn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const pm=new V,ks=new sa,Gi=new jt,vl=new V,$o=new V,qv=new V,$v=new sa,mm=new V(1,0,0),gm=new V(0,1,0),_m=new V(0,0,1),Kv={type:"added"},Zv={type:"removed"},Zc={type:"childadded",child:null},Qc={type:"childremoved",child:null};class sn extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new V,t=new Si,r=new sa,a=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new Mt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,t){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt($o,vl,this.up):Gi.lookAt(vl,$o,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),ks.setFromRotationMatrix(Gi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kv),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zv),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(c){const h=[];for(const p in c){const _=c[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new V(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new V,Vi=new V,Jc=new V,Wi=new V,Bs=new V,Hs=new V,vm=new V,ef=new V,tf=new V,nf=new V;class yi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){_i.subVectors(a,t),Vi.subVectors(r,t),Jc.subVectors(e,t);const f=_i.dot(_i),c=_i.dot(Vi),h=_i.dot(Jc),p=Vi.dot(Vi),_=Vi.dot(Jc),g=f*p-c*c;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*h-c*_)*y,E=(f*_-c*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(f,Wi.y),h.addScaledVector(c,Wi.z),h)}static isFrontFacing(e,t,r,a){return _i.subVectors(r,t),Vi.subVectors(e,t),_i.cross(Vi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),_i.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;Bs.subVectors(a,r),Hs.subVectors(l,r),ef.subVectors(e,r);const h=Bs.dot(ef),p=Hs.dot(ef);if(h<=0&&p<=0)return t.copy(r);tf.subVectors(e,a);const _=Bs.dot(tf),g=Hs.dot(tf);if(_>=0&&g<=_)return t.copy(a);const y=h*g-_*p;if(y<=0&&h>=0&&_<=0)return f=h/(h-_),t.copy(r).addScaledVector(Bs,f);nf.subVectors(e,l);const S=Bs.dot(nf),E=Hs.dot(nf);if(E>=0&&S<=E)return t.copy(l);const A=S*p-h*E;if(A<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(r).addScaledVector(Hs,c);const x=_*E-S*g;if(x<=0&&g-_>=0&&S-E>=0)return vm.subVectors(l,a),c=(g-_)/(g-_+(S-E)),t.copy(a).addScaledVector(vm,c);const v=1/(x+A+y);return f=A*v,c=y*v,t.copy(r).addScaledVector(Bs,f).addScaledVector(Hs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function rf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=kt.workingColorSpace){if(e=Ov(e,1),t=Cn(t,0,1),r=Cn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=rf(f,l,e+1/3),this.g=rf(f,l,e),this.b=rf(f,l,e-1/3)}return kt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ri){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const r=Pg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return kt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Cn(Rn.r*255,0,255))*65536+Math.round(Cn(Rn.g*255,0,255))*256+Math.round(Cn(Rn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(Rn.copy(this),t);const r=Rn.r,a=Rn.g,l=Rn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const _=(c+f)/2;if(c===f)h=0,p=0;else{const g=f-c;switch(p=_<=.5?g/(f+c):g/(2-f-c),f){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Ri){kt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,a=Rn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(xl);const r=Hc(vr.h,xl.h,t),a=Hc(vr.s,xl.s,t),l=Hc(vr.l,xl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new yt;yt.NAMES=Pg;let Qv=0;class br extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=io,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Tf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wf&&(r.blendSrc=this.blendSrc),this.blendDst!==Tf&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class na extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new V,yl=new mt;class oi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lf&&(e.usage=this.usage),e}}class Dg extends oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ig extends oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Xt extends oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Jv=0;const ri=new jt,sf=new sn,Gs=new V,Zn=new oa,Ko=new oa,_n=new V;class rn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Ig:Dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];Ko.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(Zn.min,Ko.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,Ko.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(Ko.min),Zn.expandByPoint(Ko.max))}Zn.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)_n.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(_n));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)_n.fromBufferAttribute(c,p),h&&(Gs.fromBufferAttribute(e,p),_n.add(Gs)),a=Math.max(a,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let Z=0;Z<r.count;Z++)c[Z]=new V,h[Z]=new V;const p=new V,_=new V,g=new V,y=new mt,S=new mt,E=new mt,A=new V,x=new V;function v(Z,pe,w){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,pe),g.fromBufferAttribute(r,w),y.fromBufferAttribute(l,Z),S.fromBufferAttribute(l,pe),E.fromBufferAttribute(l,w),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(U),x.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(U),c[Z].add(A),c[pe].add(A),c[w].add(A),h[Z].add(x),h[pe].add(x),h[w].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Z=0,pe=L.length;Z<pe;++Z){const w=L[Z],U=w.start,me=w.count;for(let ie=U,B=U+me;ie<B;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const R=new V,b=new V,k=new V,z=new V;function D(Z){k.fromBufferAttribute(a,Z),z.copy(k);const pe=c[Z];R.copy(pe),R.sub(k.multiplyScalar(k.dot(pe))).normalize(),b.crossVectors(z,pe);const U=b.dot(h[Z])<0?-1:1;f.setXYZW(Z,R.x,R.y,R.z,U)}for(let Z=0,pe=L.length;Z<pe;++Z){const w=L[Z],U=w.start,me=w.count;for(let ie=U,B=U+me;ie<B;ie+=3)D(e.getX(ie+0)),D(e.getX(ie+1)),D(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new V,l=new V,f=new V,c=new V,h=new V,p=new V,_=new V,g=new V;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),f.fromBufferAttribute(t,x),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),c.add(_),h.add(_),p.add(_),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(c,h){const p=c.array,_=c.itemSize,g=c.normalized,y=new p.constructor(h.length*_);let S=0,E=0;for(let A=0,x=h.length;A<x;A++){c.isInterleavedBufferAttribute?S=h[A]*c.data.stride+c.offset:S=h[A]*_;for(let v=0;v<_;v++)y[E++]=p[S++]}return new oi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xm=new jt,Xr=new bg,Sl=new Kl,ym=new V,Vs=new V,Ws=new V,Xs=new V,of=new V,Ml=new V,El=new mt,wl=new mt,Tl=new mt,Sm=new V,Mm=new V,Em=new V,Al=new V,Rl=new V;class ln extends sn{constructor(e=new rn,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Ml.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=c[h],g=l[h];_!==0&&(of.fromBufferAttribute(g,e),f?Ml.addScaledVector(of,_):Ml.addScaledVector(of.sub(t),_))}t.add(Ml)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Sl,ym)===null||Xr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(xm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(xm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const x=y[E],v=f[x.materialIndex],L=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let b=L,k=R;b<k;b+=3){const z=c.getX(b),D=c.getX(b+1),Z=c.getX(b+2);a=Cl(this,v,e,r,p,_,g,z,D,Z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(c.count,S.start+S.count);for(let x=E,v=A;x<v;x+=3){const L=c.getX(x),R=c.getX(x+1),b=c.getX(x+2);a=Cl(this,f,e,r,p,_,g,L,R,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,A=y.length;E<A;E++){const x=y[E],v=f[x.materialIndex],L=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let b=L,k=R;b<k;b+=3){const z=b,D=b+1,Z=b+2;a=Cl(this,v,e,r,p,_,g,z,D,Z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let x=E,v=A;x<v;x+=3){const L=x,R=x+1,b=x+2;a=Cl(this,f,e,r,p,_,g,L,R,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function ex(s,e,t,r,a,l,f,c){let h;if(e.side===Nn?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Ar,c),h===null)return null;Rl.copy(c),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function Cl(s,e,t,r,a,l,f,c,h,p){s.getVertexPosition(c,Vs),s.getVertexPosition(h,Ws),s.getVertexPosition(p,Xs);const _=ex(s,e,t,r,Vs,Ws,Xs,Al);if(_){a&&(El.fromBufferAttribute(a,c),wl.fromBufferAttribute(a,h),Tl.fromBufferAttribute(a,p),_.uv=yi.getInterpolation(Al,Vs,Ws,Xs,El,wl,Tl,new mt)),l&&(El.fromBufferAttribute(l,c),wl.fromBufferAttribute(l,h),Tl.fromBufferAttribute(l,p),_.uv1=yi.getInterpolation(Al,Vs,Ws,Xs,El,wl,Tl,new mt)),f&&(Sm.fromBufferAttribute(f,c),Mm.fromBufferAttribute(f,h),Em.fromBufferAttribute(f,p),_.normal=yi.getInterpolation(Al,Vs,Ws,Xs,Sm,Mm,Em,new V),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:c,b:h,c:p,normal:new V,materialIndex:0};yi.getNormal(Vs,Ws,Xs,g.normal),_.face=g}return _}class qi extends rn{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,a,f,2),E("x","z","y",1,-1,e,r,-t,a,f,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(g,2));function E(A,x,v,L,R,b,k,z,D,Z,pe){const w=b/D,U=k/Z,me=b/2,ie=k/2,B=z/2,K=D+1,j=Z+1;let re=0,G=0;const ee=new V;for(let X=0;X<j;X++){const P=X*U-ie;for(let $=0;$<K;$++){const xe=$*w-me;ee[A]=xe*L,ee[x]=P*R,ee[v]=B,p.push(ee.x,ee.y,ee.z),ee[A]=0,ee[x]=0,ee[v]=z>0?1:-1,_.push(ee.x,ee.y,ee.z),g.push($/D),g.push(1-X/Z),re+=1}}for(let X=0;X<Z;X++)for(let P=0;P<D;P++){const $=y+P+K*X,xe=y+P+K*(X+1),Y=y+(P+1)+K*(X+1),de=y+(P+1)+K*X;h.push($,xe,de),h.push(xe,Y,de),G+=6}c.addGroup(S,G,pe),S+=G,y+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=lo(s[t]);for(const a in r)e[a]=r[a]}return e}function tx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ug(s){return s.getRenderTarget()===null?s.outputColorSpace:kt.workingColorSpace}const nx={clone:lo,merge:In};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ng extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new V,wm=new mt,Tm=new mt;class Xn extends Ng{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,wm,Tm),t.subVectors(Tm,wm)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ys=1;class sx extends sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(js,Ys,e,t);a.layers=this.layers,this.add(a);const l=new Xn(js,Ys,e,t);l.layers=this.layers,this.add(l);const f=new Xn(js,Ys,e,t);f.layers=this.layers,this.add(f);const c=new Xn(js,Ys,e,t);c.layers=this.layers,this.add(c);const h=new Xn(js,Ys,e,t);h.layers=this.layers,this.add(h);const p=new Xn(js,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const p of t)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Fg extends Fn{constructor(e,t,r,a,l,f,c,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,r,a,l,f,c,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Fg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qi(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:Mr});l.uniforms.tEquirect.value=t;const f=new ln(a,l),c=t.minFilter;return t.minFilter===ns&&(t.minFilter=Wn),new sx(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const af=new V,ax=new V,lx=new Mt;class Zr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=af.subVectors(r,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(af),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||lx.getNormalMatrix(e),a=this.coplanarPoint(af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Kl,bl=new V;class Bf{constructor(e=new Zr,t=new Zr,r=new Zr,a=new Zr,l=new Zr,f=new Zr){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],p=a[4],_=a[5],g=a[6],y=a[7],S=a[8],E=a[9],A=a[10],x=a[11],v=a[12],L=a[13],R=a[14],b=a[15];if(r[0].setComponents(h-l,y-p,x-S,b-v).normalize(),r[1].setComponents(h+l,y+p,x+S,b+v).normalize(),r[2].setComponents(h+f,y+_,x+E,b+L).normalize(),r[3].setComponents(h-f,y-_,x-E,b-L).normalize(),r[4].setComponents(h-c,y-g,x-A,b-R).normalize(),t===Yi)r[5].setComponents(h+c,y+g,x+A,b+R).normalize();else if(t===Wl)r[5].setComponents(c,g,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ux(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,y=p.usage,S=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,y),p.onUploadCallback();let A;if(g instanceof Float32Array)A=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)A=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=s.SHORT;else if(g instanceof Uint32Array)A=s.UNSIGNED_INT;else if(g instanceof Int32Array)A=s.INT;else if(g instanceof Int8Array)A=s.BYTE;else if(g instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,_,g){const y=_.array,S=_._updateRange,E=_.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&E.length===0&&s.bufferSubData(g,0,y),E.length!==0){for(let A=0,x=E.length;A<x;A++){const v=E[A];t?s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,a(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,_),g.version=p.version}}return{get:f,remove:c,update:h}}class aa extends rn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),p=c+1,_=h+1,g=e/c,y=t/h,S=[],E=[],A=[],x=[];for(let v=0;v<_;v++){const L=v*y-f;for(let R=0;R<p;R++){const b=R*g-l;E.push(b,-L,0),A.push(0,0,1),x.push(R/c),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<c;L++){const R=L+p*v,b=L+p*(v+1),k=L+1+p*(v+1),z=L+1+p*v;S.push(R,b,z),S.push(b,k,z)}this.setIndex(S),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(A,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nx=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`
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
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
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
#endif`,uy=`struct PhysicalMaterial {
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
}`,cy=`
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
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
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$y=`float getShadowMask() {
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
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,xS=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,bS=`#define MATCAP
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
}`,LS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,DS=`#define PHONG
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
}`,IS=`#define PHONG
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
}`,US=`#define STANDARD
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
}`,NS=`#define STANDARD
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
}`,FS=`#define TOON
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
}`,OS=`#define TOON
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
}`,zS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:cx,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:Sx,bsdfs:Mx,iridescence_fragment:Ex,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:bx,color_pars_fragment:Lx,color_pars_vertex:Px,color_vertex:Dx,common:Ix,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:zx,emissivemap_pars_fragment:kx,colorspace_fragment:Bx,colorspace_pars_fragment:Hx,envmap_fragment:Gx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:iy,envmap_vertex:jx,fog_vertex:Yx,fog_pars_vertex:qx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_fragment:Qx,lightmap_pars_fragment:Jx,lights_lambert_fragment:ey,lights_lambert_pars_fragment:ty,lights_pars_begin:ny,lights_toon_fragment:ry,lights_toon_pars_fragment:sy,lights_phong_fragment:oy,lights_phong_pars_fragment:ay,lights_physical_fragment:ly,lights_physical_pars_fragment:uy,lights_fragment_begin:cy,lights_fragment_maps:fy,lights_fragment_end:dy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:vy,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:My,morphinstance_vertex:Ey,morphcolor_vertex:wy,morphnormal_vertex:Ty,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Cy,normal_fragment_maps:by,normal_pars_fragment:Ly,normal_pars_vertex:Py,normal_vertex:Dy,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Oy,opaque_fragment:zy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:Hy,dithering_fragment:Gy,dithering_pars_fragment:Vy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:$y,skinbase_vertex:Ky,skinning_pars_vertex:Zy,skinning_vertex:Qy,skinnormal_vertex:Jy,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:xS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:ES,meshbasic_vert:wS,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:CS,meshmatcap_frag:bS,meshnormal_vert:LS,meshnormal_frag:PS,meshphong_vert:DS,meshphong_frag:IS,meshphysical_vert:US,meshphysical_frag:NS,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:zS,points_frag:kS,shadow_vert:BS,shadow_frag:HS,sprite_vert:GS,sprite_frag:VS},ze={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Ci={basic:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new yt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:In([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:In([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:In([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new yt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:In([ze.points,ze.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:In([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:In([ze.common,ze.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:In([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:In([ze.sprite,ze.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:In([ze.common,ze.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:In([ze.lights,ze.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ci.physical={uniforms:In([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Ll={r:0,b:0,g:0},Yr=new Si,WS=new jt;function XS(s,e,t,r,a,l,f){const c=new yt(0);let h=l===!0?0:1,p,_,g=null,y=0,S=null;function E(x,v){let L=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?t:e).get(R)),R===null?A(c,h):R&&R.isColor&&(A(R,1),L=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,f):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ql)?(_===void 0&&(_=new ln(new qi(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:lo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,z,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Yr.copy(v.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Yr)),_.material.toneMapped=kt.getTransfer(R.colorSpace)!==Wt,(g!==R||y!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ln(new aa(2,2),new Rr({name:"BackgroundMaterial",uniforms:lo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=kt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,v){x.getRGB(Ll,Ug(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,v,f)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),h=v,A(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,A(c,h)},render:E}}function jS(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=x(null);let p=h,_=!1;function g(B,K,j,re,G){let ee=!1;if(f){const X=A(re,j,K);p!==X&&(p=X,S(p.object)),ee=v(B,re,j,G),ee&&L(B,re,j,G)}else{const X=K.wireframe===!0;(p.geometry!==re.id||p.program!==j.id||p.wireframe!==X)&&(p.geometry=re.id,p.program=j.id,p.wireframe=X,ee=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(ee||_)&&(_=!1,Z(B,K,j,re),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(B){return r.isWebGL2?s.bindVertexArray(B):l.bindVertexArrayOES(B)}function E(B){return r.isWebGL2?s.deleteVertexArray(B):l.deleteVertexArrayOES(B)}function A(B,K,j){const re=j.wireframe===!0;let G=c[B.id];G===void 0&&(G={},c[B.id]=G);let ee=G[K.id];ee===void 0&&(ee={},G[K.id]=ee);let X=ee[re];return X===void 0&&(X=x(y()),ee[re]=X),X}function x(B){const K=[],j=[],re=[];for(let G=0;G<a;G++)K[G]=0,j[G]=0,re[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:j,attributeDivisors:re,object:B,attributes:{},index:null}}function v(B,K,j,re){const G=p.attributes,ee=K.attributes;let X=0;const P=j.getAttributes();for(const $ in P)if(P[$].location>=0){const Y=G[$];let de=ee[$];if(de===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),Y===void 0||Y.attribute!==de||de&&Y.data!==de.data)return!0;X++}return p.attributesNum!==X||p.index!==re}function L(B,K,j,re){const G={},ee=K.attributes;let X=0;const P=j.getAttributes();for(const $ in P)if(P[$].location>=0){let Y=ee[$];Y===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor));const de={};de.attribute=Y,Y&&Y.data&&(de.data=Y.data),G[$]=de,X++}p.attributes=G,p.attributesNum=X,p.index=re}function R(){const B=p.newAttributes;for(let K=0,j=B.length;K<j;K++)B[K]=0}function b(B){k(B,0)}function k(B,K){const j=p.newAttributes,re=p.enabledAttributes,G=p.attributeDivisors;j[B]=1,re[B]===0&&(s.enableVertexAttribArray(B),re[B]=1),G[B]!==K&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),G[B]=K)}function z(){const B=p.newAttributes,K=p.enabledAttributes;for(let j=0,re=K.length;j<re;j++)K[j]!==B[j]&&(s.disableVertexAttribArray(j),K[j]=0)}function D(B,K,j,re,G,ee,X){X===!0?s.vertexAttribIPointer(B,K,j,G,ee):s.vertexAttribPointer(B,K,j,re,G,ee)}function Z(B,K,j,re){if(r.isWebGL2===!1&&(B.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const G=re.attributes,ee=j.getAttributes(),X=K.defaultAttributeValues;for(const P in ee){const $=ee[P];if($.location>=0){let xe=G[P];if(xe===void 0&&(P==="instanceMatrix"&&B.instanceMatrix&&(xe=B.instanceMatrix),P==="instanceColor"&&B.instanceColor&&(xe=B.instanceColor)),xe!==void 0){const Y=xe.normalized,de=xe.itemSize,ve=t.get(xe);if(ve===void 0)continue;const ke=ve.buffer,Ue=ve.type,be=ve.bytesPerElement,ct=r.isWebGL2===!0&&(Ue===s.INT||Ue===s.UNSIGNED_INT||xe.gpuType===gg);if(xe.isInterleavedBufferAttribute){const tt=xe.data,J=tt.stride,Pt=xe.offset;if(tt.isInstancedInterleavedBuffer){for(let et=0;et<$.locationSize;et++)k($.location+et,tt.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<$.locationSize;et++)b($.location+et);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let et=0;et<$.locationSize;et++)D($.location+et,de/$.locationSize,Ue,Y,J*be,(Pt+de/$.locationSize*et)*be,ct)}else{if(xe.isInstancedBufferAttribute){for(let tt=0;tt<$.locationSize;tt++)k($.location+tt,xe.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let tt=0;tt<$.locationSize;tt++)b($.location+tt);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let tt=0;tt<$.locationSize;tt++)D($.location+tt,de/$.locationSize,Ue,Y,de*be,de/$.locationSize*tt*be,ct)}}else if(X!==void 0){const Y=X[P];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv($.location,Y);break;case 3:s.vertexAttrib3fv($.location,Y);break;case 4:s.vertexAttrib4fv($.location,Y);break;default:s.vertexAttrib1fv($.location,Y)}}}}z()}function pe(){me();for(const B in c){const K=c[B];for(const j in K){const re=K[j];for(const G in re)E(re[G].object),delete re[G];delete K[j]}delete c[B]}}function w(B){if(c[B.id]===void 0)return;const K=c[B.id];for(const j in K){const re=K[j];for(const G in re)E(re[G].object),delete re[G];delete K[j]}delete c[B.id]}function U(B){for(const K in c){const j=c[K];if(j[B.id]===void 0)continue;const re=j[B.id];for(const G in re)E(re[G].object),delete re[G];delete j[B.id]}}function me(){ie(),_=!0,p!==h&&(p=h,S(p.object))}function ie(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:me,resetDefaultState:ie,dispose:pe,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:b,disableUnusedAttributes:z}}function YS(s,e,t,r){const a=r.isWebGL2;let l;function f(_){l=_}function c(_,g){s.drawArrays(l,_,g),t.update(g,l,1)}function h(_,g,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,_,g,y),t.update(g,l,y)}function p(_,g,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(_[E],g[E]);else{S.multiDrawArraysWEBGL(l,_,0,g,0,y);let E=0;for(let A=0;A<y;A++)E+=g[A];t.update(E,l,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function qS(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,b=f||e.has("OES_texture_float"),k=R&&b,z=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:L,vertexTextures:R,floatFragmentTextures:b,floatVertexTextures:k,maxSamples:z}}function $S(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new Zr,c=new Mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||a;return a=y,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,A=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!a||E===null||E.length===0||l&&!x)l?_(null):p();else{const L=l?0:r,R=L*4;let b=v.clippingState||null;h.value=b,b=_(E,y,R,S);for(let k=0;k!==R;++k)b[k]=t[k];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const A=g!==null?g.length:0;let x=null;if(A!==0){if(x=h.value,E!==!0||x===null){const v=S+A*4,L=y.matrixWorldInverse;c.getNormalMatrix(L),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,b=S;R!==A;++R,b+=4)f.copy(g[R]).applyMatrix4(L,c),f.normal.toArray(x,b),x[b+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function KS(s){let e=new WeakMap;function t(f,c){return c===Af?f.mapping=so:c===Rf&&(f.mapping=oo),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Af||c===Rf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new ox(h.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class zg extends Ng{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,Am=[.125,.215,.35,.446,.526,.582],ts=20,lf=new zg,Rm=new yt;let uf=null,cf=0,ff=0;const Qr=(1+Math.sqrt(5))/2,qs=1/Qr,Cm=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Qr,qs),new V(0,Qr,-qs),new V(qs,0,Qr),new V(-qs,0,Qr),new V(Qr,qs,0),new V(-Qr,qs,0)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){uf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,cf,ff),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ia,format:xi,colorSpace:Cr,depthBuffer:!1},a=Lm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(l)),this._blurMaterial=QS(l,e,t)}return a}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,lf)}_sceneToCubeUV(e,t,r,a){const c=new Xn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Rm),_.toneMapping=Er,_.autoClear=!1;const S=new na({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new ln(new qi,S);let A=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,A=!0):(S.color.copy(Rm),A=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(c.up.set(0,h[v],0),c.lookAt(p[v],0,0)):L===1?(c.up.set(0,0,h[v]),c.lookAt(0,p[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,p[v]));const R=this._cubeSize;Pl(a,L*R,v>2?R:0,R,R),_.setRenderTarget(a),A&&_.render(E,c),_.render(e,c)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===so||e.mapping===oo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new ln(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Pl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,lf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Cm[(a-1)%Cm.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ln(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ts-1),A=l/E,x=isFinite(l)?1+Math.floor(_*A):ts;x>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ts}`);const v=[];let L=0;for(let D=0;D<ts;++D){const Z=D/A,pe=Math.exp(-Z*Z/2);v.push(pe),D===0?L+=pe:D<x&&(L+=2*pe)}for(let D=0;D<v.length;D++)v[D]=v[D]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=f==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-r;const b=this._sizeLods[a],k=3*b*(a>R-to?a-R+to:0),z=4*(this._cubeSize-b);Pl(t,k,z,3*b,2*b),h.setRenderTarget(t),h.render(g,lf)}}function ZS(s){const e=[],t=[],r=[];let a=s;const l=s-to+1+Am.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-to?h=Am[f-s+to-1]:f===0&&(h=0),r.push(h);const p=1/(c-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,A=3,x=2,v=1,L=new Float32Array(A*E*S),R=new Float32Array(x*E*S),b=new Float32Array(v*E*S);for(let z=0;z<S;z++){const D=z%3*2/3-1,Z=z>2?0:-1,pe=[D,Z,0,D+2/3,Z,0,D+2/3,Z+1,0,D,Z,0,D+2/3,Z+1,0,D,Z+1,0];L.set(pe,A*E*z),R.set(y,x*E*z);const w=[z,z,z,z,z,z];b.set(w,v*E*z)}const k=new rn;k.setAttribute("position",new oi(L,A)),k.setAttribute("uv",new oi(R,x)),k.setAttribute("faceIndex",new oi(b,v)),e.push(k),a>to&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Lm(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function QS(s,e,t){const r=new Float32Array(ts),a=new V(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Pm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Dm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function JS(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===Af||h===Rf,_=h===so||h===oo;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new bm(s)),g=p?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&a(g)){t===null&&(t=new bm(s));const y=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function eM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function tM(s,e,t,r){const a={},l=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const A=y.morphAttributes[E];for(let x=0,v=A.length;x<v;x++)e.remove(A[x])}y.removeEventListener("dispose",f),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(g,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,t.memory.geometries++),y}function h(g){const y=g.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const A=S[E];for(let x=0,v=A.length;x<v;x++)e.update(A[x],s.ARRAY_BUFFER)}}function p(g){const y=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const L=S.array;A=S.version;for(let R=0,b=L.length;R<b;R+=3){const k=L[R+0],z=L[R+1],D=L[R+2];y.push(k,z,z,D,D,k)}}else if(E!==void 0){const L=E.array;A=E.version;for(let R=0,b=L.length/3-1;R<b;R+=3){const k=R+0,z=R+1,D=R+2;y.push(k,z,z,D,D,k)}}else return;const x=new(wg(y)?Ig:Dg)(y,1);x.version=A;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:c,update:h,getWireframeAttribute:_}}function nM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function _(S,E){s.drawElements(l,E,c,S*h),t.update(E,l,1)}function g(S,E,A){if(A===0)return;let x,v;if(a)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](l,E,c,S*h,A),t.update(E,l,A)}function y(S,E,A){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<A;v++)this.render(S[v]/h,E[v]);else{x.multiDrawElementsWEBGL(l,E,0,c,S,0,A);let v=0;for(let L=0;L<A;L++)v+=E[L];t.update(v,l,1)}}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=y}function iM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function rM(s,e){return s[0]-e[0]}function sM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function oM(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new Kt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,_,g){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,A=E!==void 0?E.length:0;let x=l.get(_);if(x===void 0||x.count!==A){let ie=function(){U.dispose(),l.delete(_),_.removeEventListener("dispose",ie)};var S=ie;x!==void 0&&x.texture.dispose();const v=_.morphAttributes.position!==void 0,L=_.morphAttributes.normal!==void 0,R=_.morphAttributes.color!==void 0,b=_.morphAttributes.position||[],k=_.morphAttributes.normal||[],z=_.morphAttributes.color||[];let D=0;v===!0&&(D=1),L===!0&&(D=2),R===!0&&(D=3);let Z=_.attributes.position.count*D,pe=1;Z>e.maxTextureSize&&(pe=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const w=new Float32Array(Z*pe*4*A),U=new Cg(w,Z,pe,A);U.type=ji,U.needsUpdate=!0;const me=D*4;for(let B=0;B<A;B++){const K=b[B],j=k[B],re=z[B],G=Z*pe*4*B;for(let ee=0;ee<K.count;ee++){const X=ee*me;v===!0&&(f.fromBufferAttribute(K,ee),w[G+X+0]=f.x,w[G+X+1]=f.y,w[G+X+2]=f.z,w[G+X+3]=0),L===!0&&(f.fromBufferAttribute(j,ee),w[G+X+4]=f.x,w[G+X+5]=f.y,w[G+X+6]=f.z,w[G+X+7]=0),R===!0&&(f.fromBufferAttribute(re,ee),w[G+X+8]=f.x,w[G+X+9]=f.y,w[G+X+10]=f.z,w[G+X+11]=re.itemSize===4?f.w:1)}}x={count:A,texture:U,size:new mt(Z,pe)},l.set(_,x),_.addEventListener("dispose",ie)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let v=0;for(let R=0;R<y.length;R++)v+=y[R];const L=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",L),g.getUniforms().setValue(s,"morphTargetInfluences",y)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let A=r[_.id];if(A===void 0||A.length!==E){A=[];for(let b=0;b<E;b++)A[b]=[b,0];r[_.id]=A}for(let b=0;b<E;b++){const k=A[b];k[0]=b,k[1]=y[b]}A.sort(sM);for(let b=0;b<8;b++)b<E&&A[b][1]?(c[b][0]=A[b][0],c[b][1]=A[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(rM);const x=_.morphAttributes.position,v=_.morphAttributes.normal;let L=0;for(let b=0;b<8;b++){const k=c[b],z=k[0],D=k[1];z!==Number.MAX_SAFE_INTEGER&&D?(x&&_.getAttribute("morphTarget"+b)!==x[z]&&_.setAttribute("morphTarget"+b,x[z]),v&&_.getAttribute("morphNormal"+b)!==v[z]&&_.setAttribute("morphNormal"+b,v[z]),a[b]=D,L+=D):(x&&_.hasAttribute("morphTarget"+b)===!0&&_.deleteAttribute("morphTarget"+b),v&&_.hasAttribute("morphNormal"+b)===!0&&_.deleteAttribute("morphNormal"+b),a[b]=0)}const R=_.morphTargetsRelative?1:1-L;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function aM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return g}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class kg extends Fn{constructor(e,t,r,a,l,f,c,h,p,_){if(_=_!==void 0?_:rs,_!==rs&&_!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===rs&&(r=Sr),r===void 0&&_===ao&&(r=is),super(null,a,l,f,c,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Un,this.minFilter=h!==void 0?h:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bg=new Fn,Hg=new kg(1,1);Hg.compareFunction=Eg;const Gg=new Cg,Vg=new Vv,Wg=new Fg,Im=[],Um=[],Nm=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Im[a];if(l===void 0&&(l=new Float32Array(a),Im[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zl(s,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function dM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),dn(t,r)}}function hM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Fm.set(r),s.uniformMatrix3fv(this.addr,!1,Fm),dn(t,r)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),dn(t,r)}}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function EM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Hg:Bg;t.setTexture2D(e||l,a)}function wM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Vg,a)}function TM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Wg,a)}function AM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Gg,a)}function RM(s){switch(s){case 5126:return lM;case 35664:return uM;case 35665:return cM;case 35666:return fM;case 35674:return dM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(s,e){s.uniform1fv(this.addr,e)}function bM(s,e){const t=co(e,this.size,2);s.uniform2fv(this.addr,t)}function LM(s,e){const t=co(e,this.size,3);s.uniform3fv(this.addr,t)}function PM(s,e){const t=co(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){const t=co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function IM(s,e){const t=co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function UM(s,e){const t=co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function NM(s,e){s.uniform1iv(this.addr,e)}function FM(s,e){s.uniform2iv(this.addr,e)}function OM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function kM(s,e){s.uniform1uiv(this.addr,e)}function BM(s,e){s.uniform2uiv(this.addr,e)}function HM(s,e){s.uniform3uiv(this.addr,e)}function GM(s,e){s.uniform4uiv(this.addr,e)}function VM(s,e,t){const r=this.cache,a=e.length,l=Zl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Bg,l[f])}function WM(s,e,t){const r=this.cache,a=e.length,l=Zl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Vg,l[f])}function XM(s,e,t){const r=this.cache,a=e.length,l=Zl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Wg,l[f])}function jM(s,e,t){const r=this.cache,a=e.length,l=Zl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Gg,l[f])}function YM(s){switch(s){case 5126:return CM;case 35664:return bM;case 35665:return LM;case 35666:return PM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return BM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}class qM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class $M{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}}class KM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const df=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){const r=s.name,a=r.length;for(df.lastIndex=0;;){const l=df.exec(r),f=df.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){zm(t,p===void 0?new qM(c,s,e):new $M(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new KM(c),zm(t,g)),t=g}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);ZM(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function km(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const QM=37297;let JM=0;function eE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function tE(s){const e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(s);let r;switch(e===t?r="":e===Vl&&t===Gl?r="LinearDisplayP3ToLinearSRGB":e===Gl&&t===Vl&&(r="LinearSRGBToLinearDisplayP3"),s){case Cr:case $l:return[r,"LinearTransferOETF"];case Ri:case kf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eE(s.getShaderSource(e),f)}else return a}function nE(s,e){const t=tE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iE(s,e){let t;switch(e){case dv:t="Linear";break;case hv:t="Reinhard";break;case pv:t="OptimizedCineon";break;case mv:t="ACESFilmic";break;case _v:t="AgX";break;case vv:t="Neutral";break;case gv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(no).join(`
`)}function sE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function oE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function no(s){return s!==""}function Hm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(lE,cE)}const uE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cE(s,e){let t=St[e];if(t===void 0){const r=uE.get(e);if(r!==void 0)t=St[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(fE,dE)}function dE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Wm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function hE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function pE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function gE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case cv:e="ENVMAP_BLENDING_MIX";break;case fv:e="ENVMAP_BLENDING_ADD";break}return e}function _E(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function vE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=hE(t),p=pE(t),_=mE(t),g=gE(t),y=_E(t),S=t.isWebGL2?"":rE(t),E=sE(t),A=oE(l),x=a.createProgram();let v,L,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(no).join(`
`),v.length>0&&(v+=`
`),L=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(no).join(`
`),L.length>0&&(L+=`
`)):(v=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),L=[S,Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?St.tonemapping_pars_fragment:"",t.toneMapping!==Er?iE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,nE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),f=If(f),f=Hm(f,t),f=Gm(f,t),c=If(c),c=Hm(c,t),c=Gm(c,t),f=Vm(f),c=Vm(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const b=R+v+f,k=R+L+c,z=km(a,a.VERTEX_SHADER,b),D=km(a,a.FRAGMENT_SHADER,k);a.attachShader(x,z),a.attachShader(x,D),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function Z(me){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(x).trim(),B=a.getShaderInfoLog(z).trim(),K=a.getShaderInfoLog(D).trim();let j=!0,re=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,z,D);else{const G=Bm(a,z,"vertex"),ee=Bm(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+me.name+`
Material Type: `+me.type+`

Program Info Log: `+ie+`
`+G+`
`+ee)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(B===""||K==="")&&(re=!1);re&&(me.diagnostics={runnable:j,programLog:ie,vertexShader:{log:B,prefix:v},fragmentShader:{log:K,prefix:L}})}a.deleteShader(z),a.deleteShader(D),pe=new zl(a,x),w=aE(a,x)}let pe;this.getUniforms=function(){return pe===void 0&&Z(this),pe};let w;this.getAttributes=function(){return w===void 0&&Z(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(x,QM)),U},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=D,this}let xE=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new SE(e),t.set(e,r)),r}}class SE{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function ME(s,e,t,r,a,l,f){const c=new Lg,h=new yE,p=new Set,_=[],g=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return p.add(w),w===0?"uv":`uv${w}`}function v(w,U,me,ie,B){const K=ie.fog,j=B.geometry,re=w.isMeshStandardMaterial?ie.environment:null,G=(w.isMeshStandardMaterial?t:e).get(w.envMap||re),ee=G&&G.mapping===ql?G.image.height:null,X=A[w.type];w.precision!==null&&(E=a.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$=P!==void 0?P.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let Y,de,ve,ke;if(X){const At=Ci[X];Y=At.vertexShader,de=At.fragmentShader}else Y=w.vertexShader,de=w.fragmentShader,h.update(w),ve=h.getVertexShaderID(w),ke=h.getFragmentShaderID(w);const Ue=s.getRenderTarget(),be=B.isInstancedMesh===!0,ct=B.isBatchedMesh===!0,tt=!!w.map,J=!!w.matcap,Pt=!!G,et=!!w.aoMap,ot=!!w.lightMap,He=!!w.bumpMap,gt=!!w.normalMap,nt=!!w.displacementMap,pt=!!w.emissiveMap,xt=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,fe=w.clearcoat>0,ge=w.iridescence>0,Ae=w.sheen>0,ye=w.transmission>0,Be=T&&!!w.anisotropyMap,Ze=fe&&!!w.clearcoatMap,Pe=fe&&!!w.clearcoatNormalMap,De=fe&&!!w.clearcoatRoughnessMap,at=ge&&!!w.iridescenceMap,Se=ge&&!!w.iridescenceThicknessMap,Dt=Ae&&!!w.sheenColorMap,ut=Ae&&!!w.sheenRoughnessMap,$e=!!w.specularMap,_e=!!w.specularColorMap,Me=!!w.specularIntensityMap,Fe=ye&&!!w.transmissionMap,Te=ye&&!!w.thicknessMap,Ge=!!w.gradientMap,O=!!w.alphaMap,he=w.alphaTest>0,ne=!!w.alphaHash,Re=!!w.extensions;let Ne=Er;w.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const lt={isWebGL2:g,shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:Y,fragmentShader:de,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:ke,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:ct,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:tt,matcap:J,envMap:Pt,envMapMode:Pt&&G.mapping,envMapCubeUVHeight:ee,aoMap:et,lightMap:ot,bumpMap:He,normalMap:gt,displacementMap:S&&nt,emissiveMap:pt,normalMapObjectSpace:gt&&w.normalMapType===bv,normalMapTangentSpace:gt&&w.normalMapType===zf,metalnessMap:xt,roughnessMap:I,anisotropy:T,anisotropyMap:Be,clearcoat:fe,clearcoatMap:Ze,clearcoatNormalMap:Pe,clearcoatRoughnessMap:De,iridescence:ge,iridescenceMap:at,iridescenceThicknessMap:Se,sheen:Ae,sheenColorMap:Dt,sheenRoughnessMap:ut,specularMap:$e,specularColorMap:_e,specularIntensityMap:Me,transmission:ye,transmissionMap:Fe,thicknessMap:Te,gradientMap:Ge,opaque:w.transparent===!1&&w.blending===io&&w.alphaToCoverage===!1,alphaMap:O,alphaTest:he,alphaHash:ne,combine:w.combine,mapUv:tt&&x(w.map.channel),aoMapUv:et&&x(w.aoMap.channel),lightMapUv:ot&&x(w.lightMap.channel),bumpMapUv:He&&x(w.bumpMap.channel),normalMapUv:gt&&x(w.normalMap.channel),displacementMapUv:nt&&x(w.displacementMap.channel),emissiveMapUv:pt&&x(w.emissiveMap.channel),metalnessMapUv:xt&&x(w.metalnessMap.channel),roughnessMapUv:I&&x(w.roughnessMap.channel),anisotropyMapUv:Be&&x(w.anisotropyMap.channel),clearcoatMapUv:Ze&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(w.sheenRoughnessMap.channel),specularMapUv:$e&&x(w.specularMap.channel),specularColorMapUv:_e&&x(w.specularColorMap.channel),specularIntensityMapUv:Me&&x(w.specularIntensityMap.channel),transmissionMapUv:Fe&&x(w.transmissionMap.channel),thicknessMapUv:Te&&x(w.thicknessMap.channel),alphaMapUv:O&&x(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(tt||O),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&me.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:tt&&w.map.isVideoTexture===!0&&kt.getTransfer(w.map.colorSpace)===Wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===Nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Re&&w.extensions.derivatives===!0,extensionFragDepth:Re&&w.extensions.fragDepth===!0,extensionDrawBuffers:Re&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&w.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return lt.vertexUv1s=p.has(1),lt.vertexUv2s=p.has(2),lt.vertexUv3s=p.has(3),p.clear(),lt}function L(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const me in w.defines)U.push(me),U.push(w.defines[me]);return w.isRawShaderMaterial===!1&&(R(U,w),b(U,w),U.push(s.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function R(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function b(w,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),w.push(c.mask)}function k(w){const U=A[w.type];let me;if(U){const ie=Ci[U];me=nx.clone(ie.uniforms)}else me=w.uniforms;return me}function z(w,U){let me;for(let ie=0,B=_.length;ie<B;ie++){const K=_[ie];if(K.cacheKey===U){me=K,++me.usedTimes;break}}return me===void 0&&(me=new vE(s,U,w,l),_.push(me)),me}function D(w){if(--w.usedTimes===0){const U=_.indexOf(w);_[U]=_[_.length-1],_.pop(),w.destroy()}}function Z(w){h.remove(w)}function pe(){h.dispose()}return{getParameters:v,getProgramCacheKey:L,getUniforms:k,acquireProgram:z,releaseProgram:D,releaseShaderCache:Z,programs:_,dispose:pe}}function EE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function wE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(g,y,S,E,A,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=A,v.group=x),e++,v}function c(g,y,S,E,A,x){const v=f(g,y,S,E,A,x);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,y,S,E,A,x){const v=f(g,y,S,E,A,x);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,y){t.length>1&&t.sort(g||wE),r.length>1&&r.sort(y||Xm),a.length>1&&a.sort(y||Xm)}function _(){for(let g=e,y=s.length;g<y;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:_,sort:p}}function TE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new jm,s.set(r,[f])):a>=l.length?(f=new jm,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new yt};break;case"SpotLight":t={position:new V,direction:new V,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function RE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let CE=0;function bE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LE(s,e){const t=new AE,r=RE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new V);const l=new V,f=new jt,c=new jt;function h(_,g){let y=0,S=0,E=0;for(let me=0;me<9;me++)a.probe[me].set(0,0,0);let A=0,x=0,v=0,L=0,R=0,b=0,k=0,z=0,D=0,Z=0,pe=0;_.sort(bE);const w=g===!0?Math.PI:1;for(let me=0,ie=_.length;me<ie;me++){const B=_[me],K=B.color,j=B.intensity,re=B.distance,G=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)y+=K.r*j*w,S+=K.g*j*w,E+=K.b*j*w;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)a.probe[ee].addScaledVector(B.sh.coefficients[ee],j);pe++}else if(B.isDirectionalLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*w),B.castShadow){const X=B.shadow,P=r.get(B);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.directionalShadow[A]=P,a.directionalShadowMap[A]=G,a.directionalShadowMatrix[A]=B.shadow.matrix,b++}a.directional[A]=ee,A++}else if(B.isSpotLight){const ee=t.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(K).multiplyScalar(j*w),ee.distance=re,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,a.spot[v]=ee;const X=B.shadow;if(B.map&&(a.spotLightMap[D]=B.map,D++,X.updateMatrices(B),B.castShadow&&Z++),a.spotLightMatrix[v]=X.matrix,B.castShadow){const P=r.get(B);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.spotShadow[v]=P,a.spotShadowMap[v]=G,z++}v++}else if(B.isRectAreaLight){const ee=t.get(B);ee.color.copy(K).multiplyScalar(j),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),a.rectArea[L]=ee,L++}else if(B.isPointLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*w),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const X=B.shadow,P=r.get(B);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,a.pointShadow[x]=P,a.pointShadowMap[x]=G,a.pointShadowMatrix[x]=B.shadow.matrix,k++}a.point[x]=ee,x++}else if(B.isHemisphereLight){const ee=t.get(B);ee.skyColor.copy(B.color).multiplyScalar(j*w),ee.groundColor.copy(B.groundColor).multiplyScalar(j*w),a.hemi[R]=ee,R++}}L>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const U=a.hash;(U.directionalLength!==A||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==L||U.hemiLength!==R||U.numDirectionalShadows!==b||U.numPointShadows!==k||U.numSpotShadows!==z||U.numSpotMaps!==D||U.numLightProbes!==pe)&&(a.directional.length=A,a.spot.length=v,a.rectArea.length=L,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=k,a.pointShadowMap.length=k,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=k,a.spotLightMatrix.length=z+D-Z,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=Z,a.numLightProbes=pe,U.directionalLength=A,U.pointLength=x,U.spotLength=v,U.rectAreaLength=L,U.hemiLength=R,U.numDirectionalShadows=b,U.numPointShadows=k,U.numSpotShadows=z,U.numSpotMaps=D,U.numLightProbes=pe,a.version=CE++)}function p(_,g){let y=0,S=0,E=0,A=0,x=0;const v=g.matrixWorldInverse;for(let L=0,R=_.length;L<R;L++){const b=_[L];if(b.isDirectionalLight){const k=a.directional[y];k.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(v),y++}else if(b.isSpotLight){const k=a.spot[E];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(v),k.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(v),E++}else if(b.isRectAreaLight){const k=a.rectArea[A];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(v),c.identity(),f.copy(b.matrixWorld),f.premultiply(v),c.extractRotation(f),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const k=a.point[S];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(v),S++}else if(b.isHemisphereLight){const k=a.hemi[x];k.direction.setFromMatrixPosition(b.matrixWorld),k.direction.transformDirection(v),x++}}}return{setup:h,setupView:p,state:a}}function Ym(s,e){const t=new LE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(g){r.push(g)}function c(g){a.push(g)}function h(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function PE(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new Ym(s,e),t.set(l,[h])):f>=c.length?(h=new Ym(s,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class DE extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
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
}`;function FE(s,e,t){let r=new Bf;const a=new mt,l=new mt,f=new Kt,c=new DE({depthPacking:Cv}),h=new IE,p={},_=t.maxTextureSize,g={[Ar]:Nn,[Nn]:Ar,[si]:si},y=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:UE,fragmentShader:NE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new rn;E.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ln(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let v=this.type;this.render=function(z,D,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const pe=s.getRenderTarget(),w=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),me=s.state;me.setBlending(Mr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const ie=v!==Xi&&this.type===Xi,B=v===Xi&&this.type!==Xi;for(let K=0,j=z.length;K<j;K++){const re=z[K],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const ee=G.getFrameExtents();if(a.multiply(ee),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ee.x),a.x=l.x*ee.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ee.y),a.y=l.y*ee.y,G.mapSize.y=l.y)),G.map===null||ie===!0||B===!0){const P=this.type!==Xi?{minFilter:Un,magFilter:Un}:{};G.map!==null&&G.map.dispose(),G.map=new ss(a.x,a.y,P),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const X=G.getViewportCount();for(let P=0;P<X;P++){const $=G.getViewport(P);f.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),me.viewport(f),G.updateMatrices(re,P),r=G.getFrustum(),b(D,Z,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===Xi&&L(G,Z),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(pe,w,U)};function L(z,D){const Z=e.update(A);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ss(a.x,a.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(D,null,Z,y,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(D,null,Z,S,A,null)}function R(z,D,Z,pe){let w=null;const U=Z.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)w=U;else if(w=Z.isPointLight===!0?h:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const me=w.uuid,ie=D.uuid;let B=p[me];B===void 0&&(B={},p[me]=B);let K=B[ie];K===void 0&&(K=w.clone(),B[ie]=K,D.addEventListener("dispose",k)),w=K}if(w.visible=D.visible,w.wireframe=D.wireframe,pe===Xi?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:g[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const me=s.properties.get(w);me.light=Z}return w}function b(z,D,Z,pe,w){if(z.visible===!1)return;if(z.layers.test(D.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===Xi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,z.matrixWorld);const ie=e.update(z),B=z.material;if(Array.isArray(B)){const K=ie.groups;for(let j=0,re=K.length;j<re;j++){const G=K[j],ee=B[G.materialIndex];if(ee&&ee.visible){const X=R(z,ee,pe,w);z.onBeforeShadow(s,z,D,Z,ie,X,G),s.renderBufferDirect(Z,null,ie,X,z,G),z.onAfterShadow(s,z,D,Z,ie,X,G)}}}else if(B.visible){const K=R(z,B,pe,w);z.onBeforeShadow(s,z,D,Z,ie,K,null),s.renderBufferDirect(Z,null,ie,K,z,null),z.onAfterShadow(s,z,D,Z,ie,K,null)}}const me=z.children;for(let ie=0,B=me.length;ie<B;ie++)b(me[ie],D,Z,pe,w)}function k(z){z.target.removeEventListener("dispose",k);for(const Z in p){const pe=p[Z],w=z.target.uuid;w in pe&&(pe[w].dispose(),delete pe[w])}}}function OE(s,e,t){const r=t.isWebGL2;function a(){let O=!1;const he=new Kt;let ne=null;const Re=new Kt(0,0,0,0);return{setMask:function(Ne){ne!==Ne&&!O&&(s.colorMask(Ne,Ne,Ne,Ne),ne=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,lt,At,Rt,en){en===!0&&(Ne*=Rt,lt*=Rt,At*=Rt),he.set(Ne,lt,At,Rt),Re.equals(he)===!1&&(s.clearColor(Ne,lt,At,Rt),Re.copy(he))},reset:function(){O=!1,ne=null,Re.set(-1,0,0,0)}}}function l(){let O=!1,he=null,ne=null,Re=null;return{setTest:function(Ne){Ne?be(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(Ne){he!==Ne&&!O&&(s.depthMask(Ne),he=Ne)},setFunc:function(Ne){if(ne!==Ne){switch(Ne){case iv:s.depthFunc(s.NEVER);break;case rv:s.depthFunc(s.ALWAYS);break;case sv:s.depthFunc(s.LESS);break;case Bl:s.depthFunc(s.LEQUAL);break;case ov:s.depthFunc(s.EQUAL);break;case av:s.depthFunc(s.GEQUAL);break;case lv:s.depthFunc(s.GREATER);break;case uv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){Re!==Ne&&(s.clearDepth(Ne),Re=Ne)},reset:function(){O=!1,he=null,ne=null,Re=null}}}function f(){let O=!1,he=null,ne=null,Re=null,Ne=null,lt=null,At=null,Rt=null,en=null;return{setTest:function(wt){O||(wt?be(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(wt){he!==wt&&!O&&(s.stencilMask(wt),he=wt)},setFunc:function(wt,Ft,_t){(ne!==wt||Re!==Ft||Ne!==_t)&&(s.stencilFunc(wt,Ft,_t),ne=wt,Re=Ft,Ne=_t)},setOp:function(wt,Ft,_t){(lt!==wt||At!==Ft||Rt!==_t)&&(s.stencilOp(wt,Ft,_t),lt=wt,At=Ft,Rt=_t)},setLocked:function(wt){O=wt},setClear:function(wt){en!==wt&&(s.clearStencil(wt),en=wt)},reset:function(){O=!1,he=null,ne=null,Re=null,Ne=null,lt=null,At=null,Rt=null,en=null}}}const c=new a,h=new l,p=new f,_=new WeakMap,g=new WeakMap;let y={},S={},E=new WeakMap,A=[],x=null,v=!1,L=null,R=null,b=null,k=null,z=null,D=null,Z=null,pe=new yt(0,0,0),w=0,U=!1,me=null,ie=null,B=null,K=null,j=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ee>=2);let P=null,$={};const xe=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),de=new Kt().fromArray(xe),ve=new Kt().fromArray(Y);function ke(O,he,ne,Re){const Ne=new Uint8Array(4),lt=s.createTexture();s.bindTexture(O,lt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<ne;At++)r&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(he+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return lt}const Ue={};Ue[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ue[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),be(s.DEPTH_TEST),h.setFunc(Bl),nt(!1),pt(Rp),be(s.CULL_FACE),He(Mr);function be(O){y[O]!==!0&&(s.enable(O),y[O]=!0)}function ct(O){y[O]!==!1&&(s.disable(O),y[O]=!1)}function tt(O,he){return S[O]!==he?(s.bindFramebuffer(O,he),S[O]=he,r&&(O===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=he),O===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function J(O,he){let ne=A,Re=!1;if(O){ne=E.get(he),ne===void 0&&(ne=[],E.set(he,ne));const Ne=O.textures;if(ne.length!==Ne.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,At=Ne.length;lt<At;lt++)ne[lt]=s.COLOR_ATTACHMENT0+lt;ne.length=Ne.length,Re=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Re=!0);if(Re)if(t.isWebGL2)s.drawBuffers(ne);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Pt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const et={[es]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[V_]:s.FUNC_REVERSE_SUBTRACT};if(r)et[Pp]=s.MIN,et[Dp]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(et[Pp]=O.MIN_EXT,et[Dp]=O.MAX_EXT)}const ot={[W_]:s.ZERO,[X_]:s.ONE,[j_]:s.SRC_COLOR,[wf]:s.SRC_ALPHA,[Q_]:s.SRC_ALPHA_SATURATE,[K_]:s.DST_COLOR,[q_]:s.DST_ALPHA,[Y_]:s.ONE_MINUS_SRC_COLOR,[Tf]:s.ONE_MINUS_SRC_ALPHA,[Z_]:s.ONE_MINUS_DST_COLOR,[$_]:s.ONE_MINUS_DST_ALPHA,[J_]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[tv]:s.CONSTANT_ALPHA,[nv]:s.ONE_MINUS_CONSTANT_ALPHA};function He(O,he,ne,Re,Ne,lt,At,Rt,en,wt){if(O===Mr){v===!0&&(ct(s.BLEND),v=!1);return}if(v===!1&&(be(s.BLEND),v=!0),O!==H_){if(O!==L||wt!==U){if((R!==es||z!==es)&&(s.blendEquation(s.FUNC_ADD),R=es,z=es),wt)switch(O){case io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cp:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,k=null,D=null,Z=null,pe.set(0,0,0),w=0,L=O,U=wt}return}Ne=Ne||he,lt=lt||ne,At=At||Re,(he!==R||Ne!==z)&&(s.blendEquationSeparate(et[he],et[Ne]),R=he,z=Ne),(ne!==b||Re!==k||lt!==D||At!==Z)&&(s.blendFuncSeparate(ot[ne],ot[Re],ot[lt],ot[At]),b=ne,k=Re,D=lt,Z=At),(Rt.equals(pe)===!1||en!==w)&&(s.blendColor(Rt.r,Rt.g,Rt.b,en),pe.copy(Rt),w=en),L=O,U=!1}function gt(O,he){O.side===si?ct(s.CULL_FACE):be(s.CULL_FACE);let ne=O.side===Nn;he&&(ne=!ne),nt(ne),O.blending===io&&O.transparent===!1?He(Mr):He(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),c.setMask(O.colorWrite);const Re=O.stencilWrite;p.setTest(Re),Re&&(p.setMask(O.stencilWriteMask),p.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),p.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),I(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(O){me!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),me=O)}function pt(O){O!==z_?(be(s.CULL_FACE),O!==ie&&(O===Rp?s.cullFace(s.BACK):O===k_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),ie=O}function xt(O){O!==B&&(G&&s.lineWidth(O),B=O)}function I(O,he,ne){O?(be(s.POLYGON_OFFSET_FILL),(K!==he||j!==ne)&&(s.polygonOffset(he,ne),K=he,j=ne)):ct(s.POLYGON_OFFSET_FILL)}function T(O){O?be(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function fe(O){O===void 0&&(O=s.TEXTURE0+re-1),P!==O&&(s.activeTexture(O),P=O)}function ge(O,he,ne){ne===void 0&&(P===null?ne=s.TEXTURE0+re-1:ne=P);let Re=$[ne];Re===void 0&&(Re={type:void 0,texture:void 0},$[ne]=Re),(Re.type!==O||Re.texture!==he)&&(P!==ne&&(s.activeTexture(ne),P=ne),s.bindTexture(O,he||Ue[O]),Re.type=O,Re.texture=he)}function Ae(){const O=$[P];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ye(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(O){de.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),de.copy(O))}function Me(O){ve.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ve.copy(O))}function Fe(O,he){let ne=g.get(he);ne===void 0&&(ne=new WeakMap,g.set(he,ne));let Re=ne.get(O);Re===void 0&&(Re=s.getUniformBlockIndex(he,O.name),ne.set(O,Re))}function Te(O,he){const Re=g.get(he).get(O);_.get(he)!==Re&&(s.uniformBlockBinding(he,Re,O.__bindingPointIndex),_.set(he,Re))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},P=null,$={},S={},E=new WeakMap,A=[],x=null,v=!1,L=null,R=null,b=null,k=null,z=null,D=null,Z=null,pe=new yt(0,0,0),w=0,U=!1,me=null,ie=null,B=null,K=null,j=null,de.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:be,disable:ct,bindFramebuffer:tt,drawBuffers:J,useProgram:Pt,setBlending:He,setMaterial:gt,setFlipSided:nt,setCullFace:pt,setLineWidth:xt,setPolygonOffset:I,setScissorTest:T,activeTexture:fe,bindTexture:ge,unbindTexture:Ae,compressedTexImage2D:ye,compressedTexImage3D:Be,texImage2D:ut,texImage3D:$e,updateUBOMapping:Fe,uniformBlockBinding:Te,texStorage2D:Se,texStorage3D:Dt,texSubImage2D:Ze,texSubImage3D:Pe,compressedTexSubImage2D:De,compressedTexSubImage3D:at,scissor:_e,viewport:Me,reset:Ge}}function zE(s,e,t,r,a,l,f){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new mt,g=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,T){return E?new OffscreenCanvas(I,T):jl("canvas")}function x(I,T,fe,ge){let Ae=1;const ye=xt(I);if((ye.width>ge||ye.height>ge)&&(Ae=ge/Math.max(ye.width,ye.height)),Ae<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Be=T?Df:Math.floor,Ze=Be(Ae*ye.width),Pe=Be(Ae*ye.height);y===void 0&&(y=A(Ze,Pe));const De=fe?A(Ze,Pe):y;return De.width=Ze,De.height=Pe,De.getContext("2d").drawImage(I,0,0,Ze,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ze+"x"+Pe+")."),De}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function v(I){const T=xt(I);return am(T.width)&&am(T.height)}function L(I){return c?!1:I.wrapS!==vi||I.wrapT!==vi||I.minFilter!==Un&&I.minFilter!==Wn}function R(I,T){return I.generateMipmaps&&T&&I.minFilter!==Un&&I.minFilter!==Wn}function b(I){s.generateMipmap(I)}function k(I,T,fe,ge,Ae=!1){if(c===!1)return T;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye=T;if(T===s.RED&&(fe===s.FLOAT&&(ye=s.R32F),fe===s.HALF_FLOAT&&(ye=s.R16F),fe===s.UNSIGNED_BYTE&&(ye=s.R8)),T===s.RED_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.R8UI),fe===s.UNSIGNED_SHORT&&(ye=s.R16UI),fe===s.UNSIGNED_INT&&(ye=s.R32UI),fe===s.BYTE&&(ye=s.R8I),fe===s.SHORT&&(ye=s.R16I),fe===s.INT&&(ye=s.R32I)),T===s.RG&&(fe===s.FLOAT&&(ye=s.RG32F),fe===s.HALF_FLOAT&&(ye=s.RG16F),fe===s.UNSIGNED_BYTE&&(ye=s.RG8)),T===s.RG_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.RG8UI),fe===s.UNSIGNED_SHORT&&(ye=s.RG16UI),fe===s.UNSIGNED_INT&&(ye=s.RG32UI),fe===s.BYTE&&(ye=s.RG8I),fe===s.SHORT&&(ye=s.RG16I),fe===s.INT&&(ye=s.RG32I)),T===s.RGBA){const Be=Ae?Hl:kt.getTransfer(ge);fe===s.FLOAT&&(ye=s.RGBA32F),fe===s.HALF_FLOAT&&(ye=s.RGBA16F),fe===s.UNSIGNED_BYTE&&(ye=Be===Wt?s.SRGB8_ALPHA8:s.RGBA8),fe===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),fe===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function z(I,T,fe){return R(I,fe)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Wn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){return I===Un||I===Ip||I===jo?s.NEAREST:s.LINEAR}function Z(I){const T=I.target;T.removeEventListener("dispose",Z),w(T),T.isVideoTexture&&g.delete(T)}function pe(I){const T=I.target;T.removeEventListener("dispose",pe),me(T)}function w(I){const T=r.get(I);if(T.__webglInit===void 0)return;const fe=I.source,ge=S.get(fe);if(ge){const Ae=ge[T.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&U(I),Object.keys(ge).length===0&&S.delete(fe)}r.remove(I)}function U(I){const T=r.get(I);s.deleteTexture(T.__webglTexture);const fe=I.source,ge=S.get(fe);delete ge[T.__cacheKey],f.memory.textures--}function me(I){const T=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let Ae=0;Ae<T.__webglFramebuffer[ge].length;Ae++)s.deleteFramebuffer(T.__webglFramebuffer[ge][Ae]);else s.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ge]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const fe=I.textures;for(let ge=0,Ae=fe.length;ge<Ae;ge++){const ye=r.get(fe[ge]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),f.memory.textures--),r.remove(fe[ge])}r.remove(I)}let ie=0;function B(){ie=0}function K(){const I=ie;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),ie+=1,I}function j(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function re(I,T){const fe=r.get(I);if(I.isVideoTexture&&nt(I),I.isRenderTargetTexture===!1&&I.version>0&&fe.__version!==I.version){const ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(fe,I,T);return}}t.bindTexture(s.TEXTURE_2D,fe.__webglTexture,s.TEXTURE0+T)}function G(I,T){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){ve(fe,I,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,fe.__webglTexture,s.TEXTURE0+T)}function ee(I,T){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){ve(fe,I,T);return}t.bindTexture(s.TEXTURE_3D,fe.__webglTexture,s.TEXTURE0+T)}function X(I,T){const fe=r.get(I);if(I.version>0&&fe.__version!==I.version){ke(fe,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture,s.TEXTURE0+T)}const P={[Cf]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[bf]:s.MIRRORED_REPEAT},$={[Un]:s.NEAREST,[Ip]:s.NEAREST_MIPMAP_NEAREST,[jo]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[Uc]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},xe={[Lv]:s.NEVER,[Fv]:s.ALWAYS,[Pv]:s.LESS,[Eg]:s.LEQUAL,[Dv]:s.EQUAL,[Nv]:s.GEQUAL,[Iv]:s.GREATER,[Uv]:s.NOTEQUAL};function Y(I,T,fe){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wn||T.magFilter===Uc||T.magFilter===jo||T.magFilter===ns||T.minFilter===Wn||T.minFilter===Uc||T.minFilter===jo||T.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),fe?(s.texParameteri(I,s.TEXTURE_WRAP_S,P[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,P[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,P[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,$[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,$[T.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==vi||T.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,D(T.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,D(T.minFilter)),T.minFilter!==Un&&T.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==jo&&T.minFilter!==ns||T.type===ji&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ge=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function de(I,T){let fe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",Z));const ge=T.source;let Ae=S.get(ge);Ae===void 0&&(Ae={},S.set(ge,Ae));const ye=j(T);if(ye!==I.__cacheKey){Ae[ye]===void 0&&(Ae[ye]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,fe=!0),Ae[ye].usedTimes++;const Be=Ae[I.__cacheKey];Be!==void 0&&(Ae[I.__cacheKey].usedTimes--,Be.usedTimes===0&&U(T)),I.__cacheKey=ye,I.__webglTexture=Ae[ye].texture}return fe}function ve(I,T,fe){let ge=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=s.TEXTURE_3D);const Ae=de(I,T),ye=T.source;t.bindTexture(ge,I.__webglTexture,s.TEXTURE0+fe);const Be=r.get(ye);if(ye.version!==Be.__version||Ae===!0){t.activeTexture(s.TEXTURE0+fe);const Ze=kt.getPrimaries(kt.workingColorSpace),Pe=T.colorSpace===yr?null:kt.getPrimaries(T.colorSpace),De=T.colorSpace===yr||Ze===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const at=L(T)&&v(T.image)===!1;let Se=x(T.image,at,!1,a.maxTextureSize);Se=pt(T,Se);const Dt=v(Se)||c,ut=l.convert(T.format,T.colorSpace);let $e=l.convert(T.type),_e=k(T.internalFormat,ut,$e,T.colorSpace,T.isVideoTexture);Y(ge,T,Dt);let Me;const Fe=T.mipmaps,Te=c&&T.isVideoTexture!==!0&&_e!==Mg,Ge=Be.__version===void 0||Ae===!0,O=ye.dataReady,he=z(T,Se,Dt);if(T.isDepthTexture)_e=s.DEPTH_COMPONENT,c?T.type===ji?_e=s.DEPTH_COMPONENT32F:T.type===Sr?_e=s.DEPTH_COMPONENT24:T.type===is?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:T.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===rs&&_e===s.DEPTH_COMPONENT&&T.type!==Of&&T.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Sr,$e=l.convert(T.type)),T.format===ao&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,T.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=is,$e=l.convert(T.type))),Ge&&(Te?t.texStorage2D(s.TEXTURE_2D,1,_e,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,_e,Se.width,Se.height,0,ut,$e,null));else if(T.isDataTexture)if(Fe.length>0&&Dt){Te&&Ge&&t.texStorage2D(s.TEXTURE_2D,he,_e,Fe[0].width,Fe[0].height);for(let ne=0,Re=Fe.length;ne<Re;ne++)Me=Fe[ne],Te?O&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Me.width,Me.height,ut,$e,Me.data):t.texImage2D(s.TEXTURE_2D,ne,_e,Me.width,Me.height,0,ut,$e,Me.data);T.generateMipmaps=!1}else Te?(Ge&&t.texStorage2D(s.TEXTURE_2D,he,_e,Se.width,Se.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ut,$e,Se.data)):t.texImage2D(s.TEXTURE_2D,0,_e,Se.width,Se.height,0,ut,$e,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,_e,Fe[0].width,Fe[0].height,Se.depth);for(let ne=0,Re=Fe.length;ne<Re;ne++)Me=Fe[ne],T.format!==xi?ut!==null?Te?O&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,Se.depth,ut,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,_e,Me.width,Me.height,Se.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,Se.depth,ut,$e,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,_e,Me.width,Me.height,Se.depth,0,ut,$e,Me.data)}else{Te&&Ge&&t.texStorage2D(s.TEXTURE_2D,he,_e,Fe[0].width,Fe[0].height);for(let ne=0,Re=Fe.length;ne<Re;ne++)Me=Fe[ne],T.format!==xi?ut!==null?Te?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,Me.width,Me.height,ut,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,_e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?O&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Me.width,Me.height,ut,$e,Me.data):t.texImage2D(s.TEXTURE_2D,ne,_e,Me.width,Me.height,0,ut,$e,Me.data)}else if(T.isDataArrayTexture)Te?(Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,_e,Se.width,Se.height,Se.depth),O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ut,$e,Se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Se.width,Se.height,Se.depth,0,ut,$e,Se.data);else if(T.isData3DTexture)Te?(Ge&&t.texStorage3D(s.TEXTURE_3D,he,_e,Se.width,Se.height,Se.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ut,$e,Se.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Se.width,Se.height,Se.depth,0,ut,$e,Se.data);else if(T.isFramebufferTexture){if(Ge)if(Te)t.texStorage2D(s.TEXTURE_2D,he,_e,Se.width,Se.height);else{let ne=Se.width,Re=Se.height;for(let Ne=0;Ne<he;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,_e,ne,Re,0,ut,$e,null),ne>>=1,Re>>=1}}else if(Fe.length>0&&Dt){if(Te&&Ge){const ne=xt(Fe[0]);t.texStorage2D(s.TEXTURE_2D,he,_e,ne.width,ne.height)}for(let ne=0,Re=Fe.length;ne<Re;ne++)Me=Fe[ne],Te?O&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ut,$e,Me):t.texImage2D(s.TEXTURE_2D,ne,_e,ut,$e,Me);T.generateMipmaps=!1}else if(Te){if(Ge){const ne=xt(Se);t.texStorage2D(s.TEXTURE_2D,he,_e,ne.width,ne.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,$e,Se)}else t.texImage2D(s.TEXTURE_2D,0,_e,ut,$e,Se);R(T,Dt)&&b(ge),Be.__version=ye.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ke(I,T,fe){if(T.image.length!==6)return;const ge=de(I,T),Ae=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+fe);const ye=r.get(Ae);if(Ae.version!==ye.__version||ge===!0){t.activeTexture(s.TEXTURE0+fe);const Be=kt.getPrimaries(kt.workingColorSpace),Ze=T.colorSpace===yr?null:kt.getPrimaries(T.colorSpace),Pe=T.colorSpace===yr||Be===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let ne=0;ne<6;ne++)!De&&!at?Se[ne]=x(T.image[ne],!1,!0,a.maxCubemapSize):Se[ne]=at?T.image[ne].image:T.image[ne],Se[ne]=pt(T,Se[ne]);const Dt=Se[0],ut=v(Dt)||c,$e=l.convert(T.format,T.colorSpace),_e=l.convert(T.type),Me=k(T.internalFormat,$e,_e,T.colorSpace),Fe=c&&T.isVideoTexture!==!0,Te=ye.__version===void 0||ge===!0,Ge=Ae.dataReady;let O=z(T,Dt,ut);Y(s.TEXTURE_CUBE_MAP,T,ut);let he;if(De){Fe&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Me,Dt.width,Dt.height);for(let ne=0;ne<6;ne++){he=Se[ne].mipmaps;for(let Re=0;Re<he.length;Re++){const Ne=he[Re];T.format!==xi?$e!==null?Fe?Ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ne.width,Ne.height,$e,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Me,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ne.width,Ne.height,$e,_e,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Me,Ne.width,Ne.height,0,$e,_e,Ne.data)}}}else{if(he=T.mipmaps,Fe&&Te){he.length>0&&O++;const ne=xt(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Me,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(at){Fe?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Se[ne].width,Se[ne].height,$e,_e,Se[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Me,Se[ne].width,Se[ne].height,0,$e,_e,Se[ne].data);for(let Re=0;Re<he.length;Re++){const lt=he[Re].image[ne].image;Fe?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,lt.width,lt.height,$e,_e,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Me,lt.width,lt.height,0,$e,_e,lt.data)}}else{Fe?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$e,_e,Se[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Me,$e,_e,Se[ne]);for(let Re=0;Re<he.length;Re++){const Ne=he[Re];Fe?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,$e,_e,Ne.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Me,$e,_e,Ne.image[ne])}}}R(T,ut)&&b(s.TEXTURE_CUBE_MAP),ye.__version=Ae.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ue(I,T,fe,ge,Ae,ye){const Be=l.convert(fe.format,fe.colorSpace),Ze=l.convert(fe.type),Pe=k(fe.internalFormat,Be,Ze,fe.colorSpace);if(!r.get(T).__hasExternalTextures){const at=Math.max(1,T.width>>ye),Se=Math.max(1,T.height>>ye);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,ye,Pe,at,Se,T.depth,0,Be,Ze,null):t.texImage2D(Ae,ye,Pe,at,Se,0,Be,Ze,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,Ae,r.get(fe).__webglTexture,0,He(T)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,Ae,r.get(fe).__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(I,T,fe){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let ge=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(fe||gt(T)){const Ae=T.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===ji?ge=s.DEPTH_COMPONENT32F:Ae.type===Sr&&(ge=s.DEPTH_COMPONENT24));const ye=He(T);gt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ge,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ge,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ge,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){const ge=He(T);fe&&gt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,s.DEPTH24_STENCIL8,T.width,T.height):gt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const ge=T.textures;for(let Ae=0;Ae<ge.length;Ae++){const ye=ge[Ae],Be=l.convert(ye.format,ye.colorSpace),Ze=l.convert(ye.type),Pe=k(ye.internalFormat,Be,Ze,ye.colorSpace),De=He(T);fe&&gt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Pe,T.width,T.height):gt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),re(T.depthTexture,0);const ge=r.get(T.depthTexture).__webglTexture,Ae=He(T);if(T.depthTexture.format===rs)gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===ao)gt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function tt(I){const T=r.get(I),fe=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,I)}else if(fe){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]=s.createRenderbuffer(),be(T.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),be(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(I,T,fe){const ge=r.get(I);T!==void 0&&Ue(ge.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),fe!==void 0&&tt(I)}function Pt(I){const T=I.texture,fe=r.get(I),ge=r.get(T);I.addEventListener("dispose",pe);const Ae=I.textures,ye=I.isWebGLCubeRenderTarget===!0,Be=Ae.length>1,Ze=v(I)||c;if(Be||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=T.version,f.memory.textures++),ye){fe.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(c&&T.mipmaps&&T.mipmaps.length>0){fe.__webglFramebuffer[Pe]=[];for(let De=0;De<T.mipmaps.length;De++)fe.__webglFramebuffer[Pe][De]=s.createFramebuffer()}else fe.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){fe.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)fe.__webglFramebuffer[Pe]=s.createFramebuffer()}else fe.__webglFramebuffer=s.createFramebuffer();if(Be)if(a.drawBuffers)for(let Pe=0,De=Ae.length;Pe<De;Pe++){const at=r.get(Ae[Pe]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&I.samples>0&&gt(I)===!1){fe.__webglMultisampledFramebuffer=s.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Ae.length;Pe++){const De=Ae[Pe];fe.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe]);const at=l.convert(De.format,De.colorSpace),Se=l.convert(De.type),Dt=k(De.internalFormat,at,Se,De.colorSpace,I.isXRRenderTarget===!0),ut=He(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Dt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(fe.__webglDepthRenderbuffer=s.createRenderbuffer(),be(fe.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,T,Ze);for(let Pe=0;Pe<6;Pe++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)Ue(fe.__webglFramebuffer[Pe][De],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,De);else Ue(fe.__webglFramebuffer[Pe],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);R(T,Ze)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Pe=0,De=Ae.length;Pe<De;Pe++){const at=Ae[Pe],Se=r.get(at);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),Y(s.TEXTURE_2D,at,Ze),Ue(fe.__webglFramebuffer,I,at,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),R(at,Ze)&&b(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(c?Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,ge.__webglTexture),Y(Pe,T,Ze),c&&T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)Ue(fe.__webglFramebuffer[De],I,T,s.COLOR_ATTACHMENT0,Pe,De);else Ue(fe.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Pe,0);R(T,Ze)&&b(Pe),t.unbindTexture()}I.depthBuffer&&tt(I)}function et(I){const T=v(I)||c,fe=I.textures;for(let ge=0,Ae=fe.length;ge<Ae;ge++){const ye=fe[ge];if(R(ye,T)){const Be=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ze=r.get(ye).__webglTexture;t.bindTexture(Be,Ze),b(Be),t.unbindTexture()}}}function ot(I){if(c&&I.samples>0&&gt(I)===!1){const T=I.textures,fe=I.width,ge=I.height;let Ae=s.COLOR_BUFFER_BIT;const ye=[],Be=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(I),Pe=T.length>1;if(Pe)for(let De=0;De<T.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let De=0;De<T.length;De++){ye.push(s.COLOR_ATTACHMENT0+De),I.depthBuffer&&ye.push(Be);const at=Ze.__ignoreDepthValues!==void 0?Ze.__ignoreDepthValues:!1;if(at===!1&&(I.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),Pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[De]),at===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Be]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Be])),Pe){const Se=r.get(T[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,fe,ge,0,0,fe,ge,Ae,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let De=0;De<T.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[De]);const at=r.get(T[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,at,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}}function He(I){return Math.min(a.maxSamples,I.samples)}function gt(I){const T=r.get(I);return c&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nt(I){const T=f.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function pt(I,T){const fe=I.colorSpace,ge=I.format,Ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Pf||fe!==Cr&&fe!==yr&&(kt.getTransfer(fe)===Wt?c===!1?e.has("EXT_sRGB")===!0&&ge===xi?(I.format=Pf,I.minFilter=Wn,I.generateMipmaps=!1):T=Ag.sRGBToLinear(T):(ge!==xi||Ae!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),T}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(_.width=I.naturalWidth||I.width,_.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(_.width=I.displayWidth,_.height=I.displayHeight):(_.width=I.width,_.height=I.height),_}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=J,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=gt}function kE(s,e,t){const r=t.isWebGL2;function a(l,f=yr){let c;const h=kt.getTransfer(f);if(l===wr)return s.UNSIGNED_BYTE;if(l===_g)return s.UNSIGNED_SHORT_4_4_4_4;if(l===vg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===xv)return s.BYTE;if(l===yv)return s.SHORT;if(l===Of)return s.UNSIGNED_SHORT;if(l===gg)return s.INT;if(l===Sr)return s.UNSIGNED_INT;if(l===ji)return s.FLOAT;if(l===ia)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===Sv)return s.ALPHA;if(l===xi)return s.RGBA;if(l===Mv)return s.LUMINANCE;if(l===Ev)return s.LUMINANCE_ALPHA;if(l===rs)return s.DEPTH_COMPONENT;if(l===ao)return s.DEPTH_STENCIL;if(l===Pf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===wv)return s.RED;if(l===xg)return s.RED_INTEGER;if(l===Tv)return s.RG;if(l===yg)return s.RG_INTEGER;if(l===Sg)return s.RGBA_INTEGER;if(l===Nc||l===Fc||l===Oc||l===zc)if(h===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Up||l===Np||l===Fp||l===Op)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Mg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===zp||l===kp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===zp)return h===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===kp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===Yp||l===qp||l===$p||l===Kp||l===Zp||l===Qp||l===Jp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Bp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Hp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Gp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Vp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Wp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Xp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===jp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Yp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===qp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===$p)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Kp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Zp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Qp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Jp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===kc||l===em||l===tm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===kc)return h===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Av||l===nm||l===im||l===rm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===kc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===nm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===im)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===rm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===is?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class BE extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ta extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,r),v=this._getHandJoint(p,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ta;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VE=`
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

}`;class WE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Fn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new Rr({extensions:{fragDepth:!0},vertexShader:GE,fragmentShader:VE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new ln(new aa(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class XE extends uo{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,p=null,_=null,g=null,y=null,S=null,E=null;const A=new WE,x=t.getContextAttributes();let v=null,L=null;const R=[],b=[],k=new mt;let z=null;const D=new Xn;D.layers.enable(1),D.viewport=new Kt;const Z=new Xn;Z.layers.enable(2),Z.viewport=new Kt;const pe=[D,Z],w=new BE;w.layers.enable(1),w.layers.enable(2);let U=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=R[Y];return de===void 0&&(de=new hf,R[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=R[Y];return de===void 0&&(de=new hf,R[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=R[Y];return de===void 0&&(de=new hf,R[Y]=de),de.getHandSpace()};function ie(Y){const de=b.indexOf(Y.inputSource);if(de===-1)return;const ve=R[de];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,p||f),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",K);for(let Y=0;Y<R.length;Y++){const de=b[Y];de!==null&&(b[Y]=null,R[Y].disconnect(de))}U=null,me=null,A.reset(),e.setRenderTarget(v),S=null,y=null,g=null,a=null,L=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",B),a.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(k),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ss(S.framebufferWidth,S.framebufferHeight,{format:xi,type:wr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let de=null,ve=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?ao:rs,ve=x.stencil?is:Sr);const Ue={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};g=new XRWebGLBinding(a,t),y=g.createProjectionLayer(Ue),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new ss(y.textureWidth,y.textureHeight,{format:xi,type:wr,depthTexture:new kg(y.textureWidth,y.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const be=e.properties.get(L);be.__ignoreDepthValues=y.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(c),xe.setContext(a),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function K(Y){for(let de=0;de<Y.removed.length;de++){const ve=Y.removed[de],ke=b.indexOf(ve);ke>=0&&(b[ke]=null,R[ke].disconnect(ve))}for(let de=0;de<Y.added.length;de++){const ve=Y.added[de];let ke=b.indexOf(ve);if(ke===-1){for(let be=0;be<R.length;be++)if(be>=b.length){b.push(ve),ke=be;break}else if(b[be]===null){b[be]=ve,ke=be;break}if(ke===-1)break}const Ue=R[ke];Ue&&Ue.connect(ve)}}const j=new V,re=new V;function G(Y,de,ve){j.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(ve.matrixWorld);const ke=j.distanceTo(re),Ue=de.projectionMatrix.elements,be=ve.projectionMatrix.elements,ct=Ue[14]/(Ue[10]-1),tt=Ue[14]/(Ue[10]+1),J=(Ue[9]+1)/Ue[5],Pt=(Ue[9]-1)/Ue[5],et=(Ue[8]-1)/Ue[0],ot=(be[8]+1)/be[0],He=ct*et,gt=ct*ot,nt=ke/(-et+ot),pt=nt*-et;de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const xt=ct+nt,I=tt+nt,T=He-pt,fe=gt+(ke-pt),ge=J*tt/I*xt,Ae=Pt*tt/I*xt;Y.projectionMatrix.makePerspective(T,fe,ge,Ae,xt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ee(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;A.texture!==null&&(Y.near=A.depthNear,Y.far=A.depthFar),w.near=Z.near=D.near=Y.near,w.far=Z.far=D.far=Y.far,(U!==w.near||me!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,me=w.far,D.near=U,D.far=me,Z.near=U,Z.far=me,D.updateProjectionMatrix(),Z.updateProjectionMatrix(),Y.updateProjectionMatrix());const de=Y.parent,ve=w.cameras;ee(w,de);for(let ke=0;ke<ve.length;ke++)ee(ve[ke],de);ve.length===2?G(w,D,Z):w.projectionMatrix.copy(D.projectionMatrix),X(Y,w,de)};function X(Y,de,ve){ve===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Y){h=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return A.texture!==null};let P=null;function $(Y,de){if(_=de.getViewerPose(p||f),E=de,_!==null){const ve=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ke=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,ke=!0);for(let be=0;be<ve.length;be++){const ct=ve[be];let tt=null;if(S!==null)tt=S.getViewport(ct);else{const Pt=g.getViewSubImage(y,ct);tt=Pt.viewport,be===0&&(e.setRenderTargetTextures(L,Pt.colorTexture,y.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(L))}let J=pe[be];J===void 0&&(J=new Xn,J.layers.enable(be),J.viewport=new Kt,pe[be]=J),J.matrix.fromArray(ct.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ct.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(tt.x,tt.y,tt.width,tt.height),be===0&&(w.matrix.copy(J.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ke===!0&&w.cameras.push(J)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const be=g.getDepthInformation(ve[0]);be&&be.isValid&&be.texture&&A.init(e,be,a.renderState)}}for(let ve=0;ve<R.length;ve++){const ke=b[ve],Ue=R[ve];ke!==null&&Ue!==void 0&&Ue.update(ke,de,p||f)}A.render(e,w),P&&P(Y,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const xe=new Og;xe.setAnimationLoop($),this.setAnimationLoop=function(Y){P=Y},this.dispose=function(){}}}const qr=new Si,jE=new jt;function YE(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Ug(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,L,R,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),A(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?h(x,v,L,R):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Nn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Nn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const L=e.get(v),R=L.envMap,b=L.envMapRotation;if(R&&(x.envMap.value=R,qr.copy(b),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),x.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(qr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const k=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*k,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,L,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*L,x.scale.value=R*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,L){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const L=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qE(s,e,t,r){let a={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(L,R){const b=R.program;r.uniformBlockBinding(L,b)}function p(L,R){let b=a[L.id];b===void 0&&(E(L),b=_(L),a[L.id]=b,L.addEventListener("dispose",x));const k=R.program;r.updateUBOMapping(L,k);const z=e.render.frame;l[L.id]!==z&&(y(L),l[L.id]=z)}function _(L){const R=g();L.__bindingPointIndex=R;const b=s.createBuffer(),k=L.__size,z=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,k,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function g(){for(let L=0;L<c;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const R=a[L.id],b=L.uniforms,k=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let z=0,D=b.length;z<D;z++){const Z=Array.isArray(b[z])?b[z]:[b[z]];for(let pe=0,w=Z.length;pe<w;pe++){const U=Z[pe];if(S(U,z,pe,k)===!0){const me=U.__offset,ie=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let K=0;K<ie.length;K++){const j=ie[K],re=A(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,me+B,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,B),B+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,me,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,R,b,k){const z=L.value,D=R+"_"+b;if(k[D]===void 0)return typeof z=="number"||typeof z=="boolean"?k[D]=z:k[D]=z.clone(),!0;{const Z=k[D];if(typeof z=="number"||typeof z=="boolean"){if(Z!==z)return k[D]=z,!0}else if(Z.equals(z)===!1)return Z.copy(z),!0}return!1}function E(L){const R=L.uniforms;let b=0;const k=16;for(let D=0,Z=R.length;D<Z;D++){const pe=Array.isArray(R[D])?R[D]:[R[D]];for(let w=0,U=pe.length;w<U;w++){const me=pe[w],ie=Array.isArray(me.value)?me.value:[me.value];for(let B=0,K=ie.length;B<K;B++){const j=ie[B],re=A(j),G=b%k;G!==0&&k-G<re.boundary&&(b+=k-G),me.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=b,b+=re.storage}}}const z=b%k;return z>0&&(b+=k-z),L.__size=b,L.__cache={},this}function A(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function x(L){const R=L.target;R.removeEventListener("dispose",x);const b=f.indexOf(R.__bindingPointIndex);f.splice(b,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const L in a)s.deleteBuffer(a[L]);f=[],a={},l={}}return{bind:h,update:p,dispose:v}}class Xg{constructor(e={}){const{canvas:t=zv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=f;const S=new Uint32Array(4),E=new Int32Array(4);let A=null,x=null;const v=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ri,this._useLegacyLights=!1,this.toneMapping=Er,this.toneMappingExposure=1;const R=this;let b=!1,k=0,z=0,D=null,Z=-1,pe=null;const w=new Kt,U=new Kt;let me=null;const ie=new yt(0);let B=0,K=t.width,j=t.height,re=1,G=null,ee=null;const X=new Kt(0,0,K,j),P=new Kt(0,0,K,j);let $=!1;const xe=new Bf;let Y=!1,de=!1,ve=null;const ke=new jt,Ue=new mt,be=new V,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return D===null?re:1}let J=r;function Pt(C,Q){for(let ue=0;ue<C.length;ue++){const ce=C[ue],oe=t.getContext(ce,Q);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nf}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",he,!1),J===null){const Q=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Q.shift(),J=Pt(Q,C),J===null)throw Pt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,ot,He,gt,nt,pt,xt,I,T,fe,ge,Ae,ye,Be,Ze,Pe,De,at,Se,Dt,ut,$e,_e,Me;function Fe(){et=new eM(J),ot=new qS(J,et,e),et.init(ot),$e=new kE(J,et,ot),He=new OE(J,et,ot),gt=new iM(J),nt=new EE,pt=new zE(J,et,He,nt,ot,$e,gt),xt=new KS(R),I=new JS(R),T=new ux(J,ot),_e=new jS(J,et,T,ot),fe=new tM(J,T,gt,_e),ge=new aM(J,fe,T,gt),Se=new oM(J,ot,pt),Pe=new $S(nt),Ae=new ME(R,xt,I,et,ot,_e,Pe),ye=new YE(R,nt),Be=new TE,Ze=new PE(et,ot),at=new XS(R,xt,I,He,ge,y,h),De=new FE(R,ge,ot),Me=new qE(J,gt,ot,He),Dt=new YS(J,et,gt,ot),ut=new nM(J,et,gt,ot),gt.programs=Ae.programs,R.capabilities=ot,R.extensions=et,R.properties=nt,R.renderLists=Be,R.shadowMap=De,R.state=He,R.info=gt}Fe();const Te=new XE(R,J);this.xr=Te,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(K,j,!1))},this.getSize=function(C){return C.set(K,j)},this.setSize=function(C,Q,ue=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,j=Q,t.width=Math.floor(C*re),t.height=Math.floor(Q*re),ue===!0&&(t.style.width=C+"px",t.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(K*re,j*re).floor()},this.setDrawingBufferSize=function(C,Q,ue){K=C,j=Q,re=ue,t.width=Math.floor(C*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,Q,ue,ce){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,Q,ue,ce),He.viewport(w.copy(X).multiplyScalar(re).round())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,Q,ue,ce){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,Q,ue,ce),He.scissor(U.copy(P).multiplyScalar(re).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){He.setScissorTest($=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(C=!0,Q=!0,ue=!0){let ce=0;if(C){let oe=!1;if(D!==null){const Ve=D.texture.format;oe=Ve===Sg||Ve===yg||Ve===xg}if(oe){const Ve=D.texture.type,Qe=Ve===wr||Ve===Sr||Ve===Of||Ve===is||Ve===_g||Ve===vg,it=at.getClearColor(),Xe=at.getClearAlpha(),vt=it.r,ft=it.g,dt=it.b;Qe?(S[0]=vt,S[1]=ft,S[2]=dt,S[3]=Xe,J.clearBufferuiv(J.COLOR,0,S)):(E[0]=vt,E[1]=ft,E[2]=dt,E[3]=Xe,J.clearBufferiv(J.COLOR,0,E))}else ce|=J.COLOR_BUFFER_BIT}Q&&(ce|=J.DEPTH_BUFFER_BIT),ue&&(ce|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Be.dispose(),Ze.dispose(),nt.dispose(),xt.dispose(),I.dispose(),ge.dispose(),_e.dispose(),Me.dispose(),Ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",en),Te.removeEventListener("sessionend",wt),ve&&(ve.dispose(),ve=null),Ft.stop()};function Ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=gt.autoReset,Q=De.enabled,ue=De.autoUpdate,ce=De.needsUpdate,oe=De.type;Fe(),gt.autoReset=C,De.enabled=Q,De.autoUpdate=ue,De.needsUpdate=ce,De.type=oe}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const Q=C.target;Q.removeEventListener("dispose",ne),Re(Q)}function Re(C){Ne(C),nt.remove(C)}function Ne(C){const Q=nt.get(C).programs;Q!==void 0&&(Q.forEach(function(ue){Ae.releaseProgram(ue)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ue,ce,oe,Ve){Q===null&&(Q=ct);const Qe=oe.isMesh&&oe.matrixWorld.determinant()<0,it=fo(C,Q,ue,ce,oe);He.setMaterial(ce,Qe);let Xe=ue.index,vt=1;if(ce.wireframe===!0){if(Xe=fe.getWireframeAttribute(ue),Xe===void 0)return;vt=2}const ft=ue.drawRange,dt=ue.attributes.position;let It=ft.start*vt,hn=(ft.start+ft.count)*vt;Ve!==null&&(It=Math.max(It,Ve.start*vt),hn=Math.min(hn,(Ve.start+Ve.count)*vt)),Xe!==null?(It=Math.max(It,0),hn=Math.min(hn,Xe.count)):dt!=null&&(It=Math.max(It,0),hn=Math.min(hn,dt.count));const Yt=hn-It;if(Yt<0||Yt===1/0)return;_e.setup(oe,ce,it,ue,Xe);let vn,Tt=Dt;if(Xe!==null&&(vn=T.get(Xe),Tt=ut,Tt.setIndex(vn)),oe.isMesh)ce.wireframe===!0?(He.setLineWidth(ce.wireframeLinewidth*tt()),Tt.setMode(J.LINES)):Tt.setMode(J.TRIANGLES);else if(oe.isLine){let N=ce.linewidth;N===void 0&&(N=1),He.setLineWidth(N*tt()),oe.isLineSegments?Tt.setMode(J.LINES):oe.isLineLoop?Tt.setMode(J.LINE_LOOP):Tt.setMode(J.LINE_STRIP)}else oe.isPoints?Tt.setMode(J.POINTS):oe.isSprite&&Tt.setMode(J.TRIANGLES);if(oe.isBatchedMesh)Tt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)Tt.renderInstances(It,Yt,oe.count);else if(ue.isInstancedBufferGeometry){const N=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Oe=Math.min(ue.instanceCount,N);Tt.renderInstances(It,Yt,Oe)}else Tt.render(It,Yt)};function lt(C,Q,ue){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=Nn,C.needsUpdate=!0,Mi(C,Q,ue),C.side=Ar,C.needsUpdate=!0,Mi(C,Q,ue),C.side=si):Mi(C,Q,ue)}this.compile=function(C,Q,ue=null){ue===null&&(ue=C),x=Ze.get(ue),x.init(),L.push(x),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),C!==ue&&C.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),x.setupLights(R._useLegacyLights);const ce=new Set;return C.traverse(function(oe){const Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let Qe=0;Qe<Ve.length;Qe++){const it=Ve[Qe];lt(it,ue,oe),ce.add(it)}else lt(Ve,ue,oe),ce.add(Ve)}),L.pop(),x=null,ce},this.compileAsync=function(C,Q,ue=null){const ce=this.compile(C,Q,ue);return new Promise(oe=>{function Ve(){if(ce.forEach(function(Qe){nt.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){oe(C);return}setTimeout(Ve,10)}et.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let At=null;function Rt(C){At&&At(C)}function en(){Ft.stop()}function wt(){Ft.start()}const Ft=new Og;Ft.setAnimationLoop(Rt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){At=C,Te.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},Te.addEventListener("sessionstart",en),Te.addEventListener("sessionend",wt),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Q),Q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Q,D),x=Ze.get(C,L.length),x.init(),L.push(x),ke.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),xe.setFromProjectionMatrix(ke),de=this.localClippingEnabled,Y=Pe.init(this.clippingPlanes,de),A=Be.get(C,v.length),A.init(),v.push(A),_t(C,Q,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(G,ee),this.info.render.frame++,Y===!0&&Pe.beginShadows();const ue=x.state.shadowsArray;if(De.render(ue,C,Q),Y===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&at.render(A,C),x.setupLights(R._useLegacyLights),Q.isArrayCamera){const ce=Q.cameras;for(let oe=0,Ve=ce.length;oe<Ve;oe++){const Qe=ce[oe];Sn(A,C,Qe,Qe.viewport)}}else Sn(A,C,Q);D!==null&&(pt.updateMultisampleRenderTarget(D),pt.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(R,C,Q),_e.resetDefaultState(),Z=-1,pe=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,v.pop(),v.length>0?A=v[v.length-1]:A=null};function _t(C,Q,ue,ce){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){ce&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ke);const Qe=ge.update(C),it=C.material;it.visible&&A.push(C,Qe,it,ue,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const Qe=ge.update(C),it=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),be.copy(Qe.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(ke)),Array.isArray(it)){const Xe=Qe.groups;for(let vt=0,ft=Xe.length;vt<ft;vt++){const dt=Xe[vt],It=it[dt.materialIndex];It&&It.visible&&A.push(C,Qe,It,ue,be.z,dt)}}else it.visible&&A.push(C,Qe,it,ue,be.z,null)}}const Ve=C.children;for(let Qe=0,it=Ve.length;Qe<it;Qe++)_t(Ve[Qe],Q,ue,ce)}function Sn(C,Q,ue,ce){const oe=C.opaque,Ve=C.transmissive,Qe=C.transparent;x.setupLightsView(ue),Y===!0&&Pe.setGlobalState(R.clippingPlanes,ue),Ve.length>0&&ai(oe,Ve,Q,ue),ce&&He.viewport(w.copy(ce)),oe.length>0&&bn(oe,Q,ue),Ve.length>0&&bn(Ve,Q,ue),Qe.length>0&&bn(Qe,Q,ue),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ai(C,Q,ue,ce){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const Ve=ot.isWebGL2;ve===null&&(ve=new ss(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?ia:wr,minFilter:ns,samples:Ve?4:0})),R.getDrawingBufferSize(Ue),Ve?ve.setSize(Ue.x,Ue.y):ve.setSize(Df(Ue.x),Df(Ue.y));const Qe=R.getRenderTarget();R.setRenderTarget(ve),R.getClearColor(ie),B=R.getClearAlpha(),B<1&&R.setClearColor(16777215,.5),R.clear();const it=R.toneMapping;R.toneMapping=Er,bn(C,ue,ce),pt.updateMultisampleRenderTarget(ve),pt.updateRenderTargetMipmap(ve);let Xe=!1;for(let vt=0,ft=Q.length;vt<ft;vt++){const dt=Q[vt],It=dt.object,hn=dt.geometry,Yt=dt.material,vn=dt.group;if(Yt.side===si&&It.layers.test(ce.layers)){const Tt=Yt.side;Yt.side=Nn,Yt.needsUpdate=!0,Li(It,ue,ce,hn,Yt,vn),Yt.side=Tt,Yt.needsUpdate=!0,Xe=!0}}Xe===!0&&(pt.updateMultisampleRenderTarget(ve),pt.updateRenderTargetMipmap(ve)),R.setRenderTarget(Qe),R.setClearColor(ie,B),R.toneMapping=it}function bn(C,Q,ue){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,Ve=C.length;oe<Ve;oe++){const Qe=C[oe],it=Qe.object,Xe=Qe.geometry,vt=ce===null?Qe.material:ce,ft=Qe.group;it.layers.test(ue.layers)&&Li(it,Q,ue,Xe,vt,ft)}}function Li(C,Q,ue,ce,oe,Ve){C.onBeforeRender(R,Q,ue,ce,oe,Ve),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(R,Q,ue,ce,C,Ve),oe.transparent===!0&&oe.side===si&&oe.forceSinglePass===!1?(oe.side=Nn,oe.needsUpdate=!0,R.renderBufferDirect(ue,Q,ce,oe,C,Ve),oe.side=Ar,oe.needsUpdate=!0,R.renderBufferDirect(ue,Q,ce,oe,C,Ve),oe.side=si):R.renderBufferDirect(ue,Q,ce,oe,C,Ve),C.onAfterRender(R,Q,ue,ce,oe,Ve)}function Mi(C,Q,ue){Q.isScene!==!0&&(Q=ct);const ce=nt.get(C),oe=x.state.lights,Ve=x.state.shadowsArray,Qe=oe.state.version,it=Ae.getParameters(C,oe.state,Ve,Q,ue),Xe=Ae.getProgramCacheKey(it);let vt=ce.programs;ce.environment=C.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(C.isMeshStandardMaterial?I:xt).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,vt===void 0&&(C.addEventListener("dispose",ne),vt=new Map,ce.programs=vt);let ft=vt.get(Xe);if(ft!==void 0){if(ce.currentProgram===ft&&ce.lightsStateVersion===Qe)return ls(C,it),ft}else it.uniforms=Ae.getUniforms(C),C.onBuild(ue,it,R),C.onBeforeCompile(it,R),ft=Ae.acquireProgram(it,Xe),vt.set(Xe,ft),ce.uniforms=it.uniforms;const dt=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(dt.clippingPlanes=Pe.uniform),ls(C,it),ce.needsLights=us(C),ce.lightsStateVersion=Qe,ce.needsLights&&(dt.ambientLightColor.value=oe.state.ambient,dt.lightProbe.value=oe.state.probe,dt.directionalLights.value=oe.state.directional,dt.directionalLightShadows.value=oe.state.directionalShadow,dt.spotLights.value=oe.state.spot,dt.spotLightShadows.value=oe.state.spotShadow,dt.rectAreaLights.value=oe.state.rectArea,dt.ltc_1.value=oe.state.rectAreaLTC1,dt.ltc_2.value=oe.state.rectAreaLTC2,dt.pointLights.value=oe.state.point,dt.pointLightShadows.value=oe.state.pointShadow,dt.hemisphereLights.value=oe.state.hemi,dt.directionalShadowMap.value=oe.state.directionalShadowMap,dt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,dt.spotShadowMap.value=oe.state.spotShadowMap,dt.spotLightMatrix.value=oe.state.spotLightMatrix,dt.spotLightMap.value=oe.state.spotLightMap,dt.pointShadowMap.value=oe.state.pointShadowMap,dt.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.currentProgram=ft,ce.uniformsList=null,ft}function as(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=zl.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function ls(C,Q){const ue=nt.get(C);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function fo(C,Q,ue,ce,oe){Q.isScene!==!0&&(Q=ct),pt.resetTextureUnits();const Ve=Q.fog,Qe=ce.isMeshStandardMaterial?Q.environment:null,it=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Cr,Xe=(ce.isMeshStandardMaterial?I:xt).get(ce.envMap||Qe),vt=ce.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),dt=!!ue.morphAttributes.position,It=!!ue.morphAttributes.normal,hn=!!ue.morphAttributes.color;let Yt=Er;ce.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const vn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Tt=vn!==void 0?vn.length:0,N=nt.get(ce),Oe=x.state.lights;if(Y===!0&&(de===!0||C!==pe)){const On=C===pe&&ce.id===Z;Pe.setState(ce,C,On)}let We=!1;ce.version===N.__version?(N.needsLights&&N.lightsStateVersion!==Oe.state.version||N.outputColorSpace!==it||oe.isBatchedMesh&&N.batching===!1||!oe.isBatchedMesh&&N.batching===!0||oe.isInstancedMesh&&N.instancing===!1||!oe.isInstancedMesh&&N.instancing===!0||oe.isSkinnedMesh&&N.skinning===!1||!oe.isSkinnedMesh&&N.skinning===!0||oe.isInstancedMesh&&N.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&N.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&N.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&N.instancingMorph===!1&&oe.morphTexture!==null||N.envMap!==Xe||ce.fog===!0&&N.fog!==Ve||N.numClippingPlanes!==void 0&&(N.numClippingPlanes!==Pe.numPlanes||N.numIntersection!==Pe.numIntersection)||N.vertexAlphas!==vt||N.vertexTangents!==ft||N.morphTargets!==dt||N.morphNormals!==It||N.morphColors!==hn||N.toneMapping!==Yt||ot.isWebGL2===!0&&N.morphTargetsCount!==Tt)&&(We=!0):(We=!0,N.__version=ce.version);let qt=N.currentProgram;We===!0&&(qt=Mi(ce,Q,oe));let Ct=!1,Ot=!1,tn=!1;const Ut=qt.getUniforms(),Bt=N.uniforms;if(He.useProgram(qt.program)&&(Ct=!0,Ot=!0,tn=!0),ce.id!==Z&&(Z=ce.id,Ot=!0),Ct||pe!==C){Ut.setValue(J,"projectionMatrix",C.projectionMatrix),Ut.setValue(J,"viewMatrix",C.matrixWorldInverse);const On=Ut.map.cameraPosition;On!==void 0&&On.setValue(J,be.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Ut.setValue(J,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ut.setValue(J,"isOrthographic",C.isOrthographicCamera===!0),pe!==C&&(pe=C,Ot=!0,tn=!0)}if(oe.isSkinnedMesh){Ut.setOptional(J,oe,"bindMatrix"),Ut.setOptional(J,oe,"bindMatrixInverse");const On=oe.skeleton;On&&(ot.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),Ut.setValue(J,"boneTexture",On.boneTexture,pt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(Ut.setOptional(J,oe,"batchingTexture"),Ut.setValue(J,"batchingTexture",oe._matricesTexture,pt));const Pi=ue.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0&&ot.isWebGL2===!0)&&Se.update(oe,ue,qt),(Ot||N.receiveShadow!==oe.receiveShadow)&&(N.receiveShadow=oe.receiveShadow,Ut.setValue(J,"receiveShadow",oe.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Bt.envMap.value=Xe,Bt.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Ot&&(Ut.setValue(J,"toneMappingExposure",R.toneMappingExposure),N.needsLights&&li(Bt,tn),Ve&&ce.fog===!0&&ye.refreshFogUniforms(Bt,Ve),ye.refreshMaterialUniforms(Bt,ce,re,j,ve),zl.upload(J,as(N),Bt,pt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(zl.upload(J,as(N),Bt,pt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ut.setValue(J,"center",oe.center),Ut.setValue(J,"modelViewMatrix",oe.modelViewMatrix),Ut.setValue(J,"normalMatrix",oe.normalMatrix),Ut.setValue(J,"modelMatrix",oe.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const On=ce.uniformsGroups;for(let Lr=0,ua=On.length;Lr<ua;Lr++)if(ot.isWebGL2){const cs=On[Lr];Me.update(cs,qt),Me.bind(cs,qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qt}function li(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function us(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,Q,ue){nt.get(C.texture).__webglTexture=Q,nt.get(C.depthTexture).__webglTexture=ue;const ce=nt.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ue===void 0,ce.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Q){const ue=nt.get(C);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,ue=0){D=C,k=Q,z=ue;let ce=!0,oe=null,Ve=!1,Qe=!1;if(C){const Xe=nt.get(C);Xe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(J.FRAMEBUFFER,null),ce=!1):Xe.__webglFramebuffer===void 0?pt.setupRenderTarget(C):Xe.__hasExternalTextures&&pt.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const vt=C.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Qe=!0);const ft=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ft[Q])?oe=ft[Q][ue]:oe=ft[Q],Ve=!0):ot.isWebGL2&&C.samples>0&&pt.useMultisampledRTT(C)===!1?oe=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(ft)?oe=ft[ue]:oe=ft,w.copy(C.viewport),U.copy(C.scissor),me=C.scissorTest}else w.copy(X).multiplyScalar(re).floor(),U.copy(P).multiplyScalar(re).floor(),me=$;if(He.bindFramebuffer(J.FRAMEBUFFER,oe)&&ot.drawBuffers&&ce&&He.drawBuffers(C,oe),He.viewport(w),He.scissor(U),He.setScissorTest(me),Ve){const Xe=nt.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xe.__webglTexture,ue)}else if(Qe){const Xe=nt.get(C.texture),vt=Q||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Xe.__webglTexture,ue||0,vt)}Z=-1},this.readRenderTargetPixels=function(C,Q,ue,ce,oe,Ve,Qe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Qe!==void 0&&(it=it[Qe]),it){He.bindFramebuffer(J.FRAMEBUFFER,it);try{const Xe=C.texture,vt=Xe.format,ft=Xe.type;if(vt!==xi&&$e.convert(vt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const dt=ft===ia&&(et.has("EXT_color_buffer_half_float")||ot.isWebGL2&&et.has("EXT_color_buffer_float"));if(ft!==wr&&$e.convert(ft)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===ji&&(ot.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ce&&ue>=0&&ue<=C.height-oe&&J.readPixels(Q,ue,ce,oe,$e.convert(vt),$e.convert(ft),Ve)}finally{const Xe=D!==null?nt.get(D).__webglFramebuffer:null;He.bindFramebuffer(J.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,Q,ue=0){const ce=Math.pow(2,-ue),oe=Math.floor(Q.image.width*ce),Ve=Math.floor(Q.image.height*ce);pt.setTexture2D(Q,0),J.copyTexSubImage2D(J.TEXTURE_2D,ue,0,0,C.x,C.y,oe,Ve),He.unbindTexture()},this.copyTextureToTexture=function(C,Q,ue,ce=0){const oe=Q.image.width,Ve=Q.image.height,Qe=$e.convert(ue.format),it=$e.convert(ue.type);pt.setTexture2D(ue,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ue.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ue.unpackAlignment),Q.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ce,C.x,C.y,oe,Ve,Qe,it,Q.image.data):Q.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ce,C.x,C.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Qe,Q.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ce,C.x,C.y,Qe,it,Q.image),ce===0&&ue.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,ue,ce,oe=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=Math.round(C.max.x-C.min.x),Qe=Math.round(C.max.y-C.min.y),it=C.max.z-C.min.z+1,Xe=$e.convert(ce.format),vt=$e.convert(ce.type);let ft;if(ce.isData3DTexture)pt.setTexture3D(ce,0),ft=J.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)pt.setTexture2DArray(ce,0),ft=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ce.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ce.unpackAlignment);const dt=J.getParameter(J.UNPACK_ROW_LENGTH),It=J.getParameter(J.UNPACK_IMAGE_HEIGHT),hn=J.getParameter(J.UNPACK_SKIP_PIXELS),Yt=J.getParameter(J.UNPACK_SKIP_ROWS),vn=J.getParameter(J.UNPACK_SKIP_IMAGES),Tt=ue.isCompressedTexture?ue.mipmaps[oe]:ue.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Tt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Tt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,C.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,C.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,C.min.z),ue.isDataTexture||ue.isData3DTexture?J.texSubImage3D(ft,oe,Q.x,Q.y,Q.z,Ve,Qe,it,Xe,vt,Tt.data):ce.isCompressedArrayTexture?J.compressedTexSubImage3D(ft,oe,Q.x,Q.y,Q.z,Ve,Qe,it,Xe,Tt.data):J.texSubImage3D(ft,oe,Q.x,Q.y,Q.z,Ve,Qe,it,Xe,vt,Tt),J.pixelStorei(J.UNPACK_ROW_LENGTH,dt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,It),J.pixelStorei(J.UNPACK_SKIP_PIXELS,hn),J.pixelStorei(J.UNPACK_SKIP_ROWS,Yt),J.pixelStorei(J.UNPACK_SKIP_IMAGES,vn),oe===0&&ce.generateMipmaps&&J.generateMipmap(ft),He.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?pt.setTextureCube(C,0):C.isData3DTexture?pt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pt.setTexture2DArray(C,0):pt.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){k=0,z=0,D=null,He.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kf?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===$l?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $E extends Xg{}$E.prototype.isWebGL1Renderer=!0;class Gf{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=r}clone(){return new Gf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class KE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ZE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new V;class Yl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jg extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $s;const Zo=new V,Ks=new V,Zs=new V,Qs=new mt,Qo=new mt,Yg=new jt,Dl=new V,Jo=new V,Il=new V,qm=new mt,pf=new mt,$m=new mt;class QE extends sn{constructor(e=new jg){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ZE(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Yl(r,3,0,!1)),$s.setAttribute("uv",new Yl(r,2,3,!1))}this.geometry=$s,this.material=e,this.center=new mt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Yg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Zs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Ul(Dl.set(-.5,-.5,0),Zs,f,Ks,a,l),Ul(Jo.set(.5,-.5,0),Zs,f,Ks,a,l),Ul(Il.set(.5,.5,0),Zs,f,Ks,a,l),qm.set(0,0),pf.set(1,0),$m.set(1,1);let c=e.ray.intersectTriangle(Dl,Jo,Il,!1,Zo);if(c===null&&(Ul(Jo.set(-.5,.5,0),Zs,f,Ks,a,l),pf.set(0,1),c=e.ray.intersectTriangle(Dl,Il,Jo,!1,Zo),c===null))return;const h=e.ray.origin.distanceTo(Zo);h<e.near||h>e.far||t.push({distance:h,point:Zo.clone(),uv:yi.getInterpolation(Zo,Dl,Jo,Il,qm,pf,$m,new mt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ul(s,e,t,r,a,l){Qs.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Qo.x=l*Qs.x-a*Qs.y,Qo.y=a*Qs.x+l*Qs.y):Qo.copy(Qs),s.copy(e),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(Yg)}class Jr extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Km=new V,Zm=new V,Qm=new jt,mf=new bg,Nl=new Kl;class $r extends sn{constructor(e=new rn,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Km.fromBufferAttribute(t,a-1),Zm.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Km.distanceTo(Zm);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=l,e.ray.intersectsSphere(Nl)===!1)return;Qm.copy(a).invert(),mf.copy(e.ray).applyMatrix4(Qm);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new V,_=new V,g=new V,y=new V,S=this.isLineSegments?2:1,E=r.index,x=r.attributes.position;if(E!==null){const v=Math.max(0,f.start),L=Math.min(E.count,f.start+f.count);for(let R=v,b=L-1;R<b;R+=S){const k=E.getX(R),z=E.getX(R+1);if(p.fromBufferAttribute(x,k),_.fromBufferAttribute(x,z),mf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(y);Z<e.near||Z>e.far||t.push({distance:Z,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,f.start),L=Math.min(x.count,f.start+f.count);for(let R=v,b=L-1;R<b;R+=S){if(p.fromBufferAttribute(x,R),_.fromBufferAttribute(x,R+1),mf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(y);z<e.near||z>e.far||t.push({distance:z,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class JE extends Fn{constructor(e,t,r,a,l,f,c,h,p){super(e,t,r,a,l,f,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class e1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,p;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),p=r[a]-f,p<0)c=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const _=r[a],y=r[a+1]-_,S=(f-_)/y;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new mt:new V);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,a=[],l=[],f=[],c=new V,h=new jt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new V)}l[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const _=Math.abs(a[0].x),g=Math.abs(a[0].y),y=Math.abs(a[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),y<=p&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(Cn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,E))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(Cn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),f[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Vf(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,p){a(f,c,p*(c-l),p*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,p,_,g){let y=(f-l)/p-(c-l)/(p+_)+(c-f)/_,S=(c-f)/_-(h-f)/(_+g)+(h-c)/g;y*=_,S*=_,a(f,c,y,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const Fl=new V,gf=new Vf,_f=new Vf,vf=new Vf;class t1 extends e1{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new V){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let p,_;this.closed||c>0?p=a[(c-1)%l]:(Fl.subVectors(a[0],a[1]).add(a[0]),p=Fl);const g=a[c%l],y=a[(c+1)%l];if(this.closed||c+2<l?_=a[(c+2)%l]:(Fl.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(y),S),x=Math.pow(y.distanceToSquared(_),S);A<1e-4&&(A=1),E<1e-4&&(E=A),x<1e-4&&(x=A),gf.initNonuniformCatmullRom(p.x,g.x,y.x,_.x,E,A,x),_f.initNonuniformCatmullRom(p.y,g.y,y.y,_.y,E,A,x),vf.initNonuniformCatmullRom(p.z,g.z,y.z,_.z,E,A,x)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(p.x,g.x,y.x,_.x,this.tension),_f.initCatmullRom(p.y,g.y,y.y,_.y,this.tension),vf.initCatmullRom(p.z,g.z,y.z,_.z,this.tension));return r.set(gf.calc(h),_f.calc(h),vf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new V().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Wf extends rn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],f=[],c=[],h=[],p=new V,_=new mt;f.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let g=0,y=3;g<=t;g++,y+=3){const S=r+g/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(f[y]/e+1)/2,_.y=(f[y+1]/e+1)/2,h.push(_.x,_.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xf extends rn{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:c,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],g=[],y=[],S=[];let E=0;const A=[],x=r/2;let v=0;L(),f===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(S,2));function L(){const b=new V,k=new V;let z=0;const D=(t-e)/r;for(let Z=0;Z<=l;Z++){const pe=[],w=Z/l,U=w*(t-e)+e;for(let me=0;me<=a;me++){const ie=me/a,B=ie*h+c,K=Math.sin(B),j=Math.cos(B);k.x=U*K,k.y=-w*r+x,k.z=U*j,g.push(k.x,k.y,k.z),b.set(K,D,j).normalize(),y.push(b.x,b.y,b.z),S.push(ie,1-w),pe.push(E++)}A.push(pe)}for(let Z=0;Z<a;Z++)for(let pe=0;pe<l;pe++){const w=A[pe][Z],U=A[pe+1][Z],me=A[pe+1][Z+1],ie=A[pe][Z+1];_.push(w,U,ie),_.push(U,me,ie),z+=6}p.addGroup(v,z,0),v+=z}function R(b){const k=E,z=new mt,D=new V;let Z=0;const pe=b===!0?e:t,w=b===!0?1:-1;for(let me=1;me<=a;me++)g.push(0,x*w,0),y.push(0,w,0),S.push(.5,.5),E++;const U=E;for(let me=0;me<=a;me++){const B=me/a*h+c,K=Math.cos(B),j=Math.sin(B);D.x=pe*j,D.y=x*w,D.z=pe*K,g.push(D.x,D.y,D.z),y.push(0,w,0),z.x=K*.5+.5,z.y=j*.5*w+.5,S.push(z.x,z.y),E++}for(let me=0;me<a;me++){const ie=k+me,B=U+me;b===!0?_.push(B,B+1,ie):_.push(B+1,B,ie),Z+=3}p.addGroup(v,Z,b===!0?1:2),v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jf extends Xf{constructor(e=1,t=1,r=32,a=1,l=!1,f=0,c=Math.PI*2){super(0,e,t,r,a,l,f,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:f,thetaLength:c}}static fromJSON(e){return new jf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yf extends rn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+c,Math.PI);let p=0;const _=[],g=new V,y=new V,S=[],E=[],A=[],x=[];for(let v=0;v<=r;v++){const L=[],R=v/r;let b=0;v===0&&f===0?b=.5/t:v===r&&h===Math.PI&&(b=-.5/t);for(let k=0;k<=t;k++){const z=k/t;g.x=-e*Math.cos(a+z*l)*Math.sin(f+R*c),g.y=e*Math.cos(f+R*c),g.z=e*Math.sin(a+z*l)*Math.sin(f+R*c),E.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),x.push(z+b,1-R),L.push(p++)}_.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const R=_[v][L+1],b=_[v][L],k=_[v+1][L],z=_[v+1][L+1];(v!==0||f>0)&&S.push(R,b,z),(v!==r-1||h<Math.PI)&&S.push(b,k,z)}this.setIndex(S),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(A,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qf extends rn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const f=[],c=[],h=[],p=[],_=new V,g=new V,y=new V;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const A=E/a*l,x=S/r*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(A),g.y=(e+t*Math.cos(x))*Math.sin(A),g.z=t*Math.sin(x),c.push(g.x,g.y,g.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),y.subVectors(g,_).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const A=(a+1)*S+E-1,x=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,L=(a+1)*S+E;f.push(A,x,L),f.push(x,v,L)}this.setIndex(f),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xf extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n1 extends br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class la extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class i1 extends la{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yf=new jt,Jm=new V,eg=new V;class $f{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jm),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r1 extends $f{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Xl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tg extends la{constructor(e,t,r=0,a=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new r1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ng=new jt,ea=new V,Sf=new V;class s1 extends $f{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),Sf.copy(r.position),Sf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Sf),r.updateMatrixWorld(),a.makeTranslation(-ea.x,-ea.y,-ea.z),ng.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng)}}class o1 extends la{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a1 extends $f{constructor(){super(new zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l1 extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new a1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class u1 extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const c1="https://api.openf1.org/v1",le={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},f1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},d1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},ig=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(d1))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},h1=[{label:"VER vs NOR — Monza 2024 Q",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"HAM vs VER — Bahrain 2024 R",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1},{label:"NOR vs PIA — Silverstone 2024 Q",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81},{label:"LEC vs SAI — Monaco 2024 Q",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55},{label:"VER vs NOR — Abu Dhabi 2024 Q",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"RUS vs HAM — Spa 2024 Q",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44}],Ol=["orbit","follow1","follow2","top","cinematic"],p1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function os(s,e={},t=2){const r=new URL(`${c1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=t;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===t)throw l;await new Promise(f=>setTimeout(f,800*(a+1)))}}const rg=s=>os("/meetings",{year:s}),sg=s=>os("/sessions",{meeting_key:s}),og=s=>os("/drivers",{session_key:s}),ag=(s,e)=>os("/laps",{session_key:s,driver_number:e}),lg=(s,e)=>os("/stints",{session_key:s,driver_number:e});function ug(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),os("/location",a)}function cg(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),os("/car_data",a)}function kl(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),a=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function ra(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,a=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>a&&(a=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const c=Math.max(t-e,a-r)||1,h=(e+t)/2,p=(r+a)/2,_=(l+f)/2;return s.map(g=>({x:(g.x-h)/c*40,y:(g.z-_)/c*4,z:(g.y-p)/c*40}))}function fg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function dg(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function m1(){const[s,e]=Le.useState(typeof window<"u"&&window.innerWidth<768);return Le.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function Js(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*t)]);return r}function Kr(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function g1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function eo(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function _1(s,e,t,r,a,l,f,c,h,p,_,g){const y=Le.useRef({}),S=Le.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),E=Le.useRef(c),A=Le.useMemo(()=>t?ra(t):null,[t]),x=Le.useMemo(()=>r?ra(r):null,[r]),v=Le.useMemo(()=>(_==null?void 0:_.map(L=>L.speed||0))||[],[_]);Le.useEffect(()=>{const L=s.current;if(!L||!e||e.length<10)return;y.current.ren&&(y.current.ren.dispose(),L.contains(y.current.ren.domElement)&&L.removeChild(y.current.ren.domElement)),y.current.fr&&cancelAnimationFrame(y.current.fr);const R=L.clientWidth,b=L.clientHeight,k=new KE;k.background=new yt(1184280),k.fog=new Gf(1184280,80,200);const z=new Xn(50,R/b,.1,500),D=new Xg({antialias:!0});D.setSize(R,b),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.appendChild(D.domElement),k.add(new u1(14540264,.7));const Z=new l1(16777215,1);Z.position.set(40,80,30),k.add(Z),k.add(new i1(12305629,3355456,.4));const pe=new ln(new aa(400,400),new n1({color:1579039}));pe.rotation.x=-Math.PI/2,pe.position.y=-.2,k.add(pe);const w=new Yf(180,32,16),U=new Float32Array(w.attributes.position.count*3);for(let _e=0;_e<w.attributes.position.count;_e++){const Me=w.attributes.position.getY(_e),Fe=Math.max(0,Math.min(1,(Me+10)/190));U[_e*3]=.06+Fe*.04,U[_e*3+1]=.06+Fe*.07,U[_e*3+2]=.1+Fe*.12}w.setAttribute("color",new Xt(U,3));const me=new ln(w,new na({vertexColors:!0,side:Nn,fog:!1}));k.add(me);const ie=new t1(e.map(_e=>new V(_e.x,_e.y,_e.z)),!0),B=Math.min(e.length*3,800),K=2,j=ie.getPoints(B),re=[],G=[],ee=[],X=[],P=[],$=j.map((_e,Me)=>{const Fe=j[(Me+1)%j.length],Te=j[(Me-1+j.length)%j.length];return new V(Fe.x-Te.x,0,Fe.z-Te.z).normalize()});for(let _e=0;_e<j.length;_e++){const Me=j[_e],Fe=$[_e],Te=new V(-Fe.z,0,Fe.x),Ge=new V(Me.x+Te.x*K/2,Me.y,Me.z+Te.z*K/2),O=new V(Me.x-Te.x*K/2,Me.y,Me.z-Te.z*K/2);if(re.push(Ge.x,Ge.y,Ge.z,O.x,O.y,O.z),G.push(0,1,0,0,1,0),X.push(new V(Ge.x,Ge.y+.02,Ge.z)),P.push(new V(O.x,O.y+.02,O.z)),_e<j.length-1){const he=_e*2;ee.push(he,he+2,he+1,he+1,he+2,he+3)}}const xe=new rn;xe.setAttribute("position",new Xt(re,3)),xe.setAttribute("normal",new Xt(G,3)),xe.setIndex(ee);const Y=new ln(xe,new xf({color:3816008,roughness:.8,metalness:.1,side:si}));if(k.add(Y),g==="heatmap"&&v.length>10){const _e=new Float32Array(j.length*2*3);for(let Te=0;Te<j.length;Te++){const Ge=Te/(j.length-1),O=Math.min(Math.floor(Ge*(v.length-1)),v.length-1),he=Math.max(0,Math.min(1,(v[O]-50)/300));let ne,Re,Ne;he<.25?(ne=0,Re=he*4,Ne=1):he<.5?(ne=0,Re=1,Ne=1-(he-.25)*4):he<.75?(ne=(he-.5)*4,Re=1,Ne=0):(ne=1,Re=1-(he-.75)*4,Ne=0);const lt=Te*2;_e[lt*3]=ne,_e[lt*3+1]=Re,_e[lt*3+2]=Ne,_e[(lt+1)*3]=ne,_e[(lt+1)*3+1]=Re,_e[(lt+1)*3+2]=Ne}const Me=xe.clone();Me.setAttribute("color",new Xt(_e,3));const Fe=new ln(Me,new na({vertexColors:!0,transparent:!0,opacity:.55,side:si,depthWrite:!1}));Fe.position.y+=.01,k.add(Fe)}const de=new Jr({color:16777215,transparent:!0,opacity:.55});k.add(new $r(new rn().setFromPoints(X),de)),k.add(new $r(new rn().setFromPoints(P),de));const ve=[53866,16766720,14747136];[0,.33,.66].forEach((_e,Me)=>{const Fe=ie.getPointAt(_e),Te=ie.getTangentAt(_e),Ge=new V(-Te.z,0,Te.x).normalize(),O=Fe.clone().add(Ge.clone().multiplyScalar(K/2+.3)),he=Fe.clone().sub(Ge.clone().multiplyScalar(K/2+.3));O.y+=.03,he.y+=.03;const ne=new $r(new rn().setFromPoints([O,he]),new Jr({color:ve[Me],linewidth:2}));k.add(ne)});const ke=ie.getPointAt(0),Ue=ie.getTangentAt(0),be=new V(-Ue.z,0,Ue.x).normalize(),ct=ke.clone().add(be.clone().multiplyScalar(K/2));ct.y+=.03;const tt=ke.clone().sub(be.clone().multiplyScalar(K/2));tt.y+=.03,k.add(new $r(new rn().setFromPoints([ct,tt]),new Jr({color:16777215})));function J(_e,Me,Fe){const Te=new ta,Ge=new yt(_e),O=new xf({color:Ge,emissive:Ge,emissiveIntensity:Fe?.6:.35,metalness:.7,roughness:.25,transparent:Fe,opacity:Fe?.55:1}),he=new ln(new qi(.5,.2,1.6),O);he.position.y=.2,Te.add(he);const ne=new ln(new qi(.9,.06,.25),O);ne.position.set(0,.12,.85),Te.add(ne);const Re=new ln(new qi(.7,.18,.08),O);Re.position.set(0,.45,-.75),Te.add(Re),[-.35,.35].forEach(Ft=>{const _t=new ln(new qi(.03,.22,.15),O);_t.position.set(Ft,.42,-.75),Te.add(_t)});const Ne=new ln(new jf(.12,.5,4),O);Ne.geometry.rotateX(-Math.PI/2),Ne.position.set(0,.18,1.05),Te.add(Ne);const lt=new xf({color:3355443,metalness:.9,roughness:.1}),At=new ln(new qf(.18,.025,6,12,Math.PI),lt);At.rotation.z=Math.PI,At.position.set(0,.35,.15),Te.add(At);const Rt=new na({color:Ge,transparent:!0,opacity:Fe?.1:.06,side:si}),en=new ln(new Wf(1.2,16),Rt);en.rotation.x=-Math.PI/2,en.position.y=.02,Te.add(en);const wt=new o1(Ge,Fe?.7:.4,10);if(wt.position.set(0,.5,0),Te.add(wt),Me){const Ft=document.createElement("canvas");Ft.width=160,Ft.height=56;const _t=Ft.getContext("2d");_t.fillStyle=_e,_t.globalAlpha=.9,_t.beginPath();const Sn=6;_t.moveTo(Sn,0),_t.lineTo(160-Sn,0),_t.quadraticCurveTo(160,0,160,Sn),_t.lineTo(160,56-Sn),_t.quadraticCurveTo(160,56,160-Sn,56),_t.lineTo(Sn,56),_t.quadraticCurveTo(0,56,0,56-Sn),_t.lineTo(0,Sn),_t.quadraticCurveTo(0,0,Sn,0),_t.fill(),_t.fillStyle="#fff",_t.globalAlpha=.15,_t.fillRect(0,0,6,56),_t.globalAlpha=1,_t.fillStyle="#fff",_t.font="bold 30px sans-serif",_t.textAlign="center",_t.textBaseline="middle",_t.fillText(Me,80,30);const ai=new JE(Ft),bn=new QE(new jg({map:ai,transparent:!0,depthWrite:!1}));bn.position.set(0,1.6,0),bn.scale.set(2.8,1,1),Te.add(bn)}return Te}const Pt=J(l,h,!1),et=J(f,p,!0);k.add(Pt),k.add(et);const ot=new tg(new yt(l),.6,25,Math.PI/6,.5,1);ot.position.set(0,12,0),k.add(ot);const He=new tg(new yt(f),.4,25,Math.PI/6,.5,1);He.position.set(0,12,0),k.add(He);const gt=new rn,nt=new Float32Array(6);gt.setAttribute("position",new Xt(nt,3));const pt=new Jr({color:16777215,transparent:!0,opacity:.5}),xt=new $r(gt,pt);xt.frustumCulled=!1,k.add(xt);const I=ie.getPoints(B),T=new rn().setFromPoints(I),fe=new $r(T,new Jr({color:4500223,transparent:!0,opacity:.12}));fe.position.y+=.015,k.add(fe);function ge(_e,Me){const Te=new Float32Array(240),Ge=new rn;Ge.setAttribute("position",new oi(Te,3)),Ge.setDrawRange(0,0);const O=new $r(Ge,new Jr({color:new yt(_e),transparent:!0,opacity:Me?.35:.6,linewidth:2}));return k.add(O),{line:O,positions:Te,max:80,count:0}}const Ae=ge(l,!1),ye=ge(f,!0);y.current={scene:k,camera:z,ren:D,car1:Pt,car2:et,tr1:Ae,tr2:ye,n1:A,n2:x,curve:ie,spot1:ot,spot2:He,deltaLine:xt,deltaPos:nt,fr:null};const Be=S.current,Ze=_e=>{var Me,Fe,Te,Ge;Be.drag=!0,Be.lx=_e.clientX??((Fe=(Me=_e.touches)==null?void 0:Me[0])==null?void 0:Fe.clientX)??0,Be.ly=_e.clientY??((Ge=(Te=_e.touches)==null?void 0:Te[0])==null?void 0:Ge.clientY)??0},Pe=_e=>{var Te,Ge,O,he;if(!Be.drag)return;const Me=_e.clientX??((Ge=(Te=_e.touches)==null?void 0:Te[0])==null?void 0:Ge.clientX)??0,Fe=_e.clientY??((he=(O=_e.touches)==null?void 0:O[0])==null?void 0:he.clientY)??0;Be.angle+=(Me-Be.lx)*.005,Be.pitch=Math.max(.1,Math.min(1.4,Be.pitch+(Fe-Be.ly)*.005)),Be.lx=Me,Be.ly=Fe},De=()=>{Be.drag=!1},at=_e=>{Be.dist=Math.max(15,Math.min(120,Be.dist+_e.deltaY*.05))},Se=D.domElement;Se.addEventListener("mousedown",Ze),Se.addEventListener("mousemove",Pe),Se.addEventListener("mouseup",De),Se.addEventListener("mouseleave",De),Se.addEventListener("wheel",at,{passive:!0}),Se.addEventListener("touchstart",Ze,{passive:!0}),Se.addEventListener("touchmove",Pe,{passive:!0}),Se.addEventListener("touchend",De);function Dt(){y.current.fr=requestAnimationFrame(Dt),Be.cinT+=3e-4;const _e=E.current;_e==="orbit"?(Be.drag||(Be.angle+=8e-4),z.position.set(Math.cos(Be.angle)*Be.dist*Math.cos(Be.pitch),Be.dist*Math.sin(Be.pitch),Math.sin(Be.angle)*Be.dist*Math.cos(Be.pitch)),z.lookAt(0,0,0)):_e==="top"&&(z.position.set(0,65,.01),z.lookAt(0,0,0)),D.render(k,z)}Dt();let ut;const $e=()=>{clearTimeout(ut),ut=setTimeout(()=>{L&&(z.aspect=L.clientWidth/L.clientHeight,z.updateProjectionMatrix(),D.setSize(L.clientWidth,L.clientHeight))},100)};return window.addEventListener("resize",$e),()=>{window.removeEventListener("resize",$e),Se.removeEventListener("mousedown",Ze),Se.removeEventListener("mousemove",Pe),Se.removeEventListener("mouseup",De),Se.removeEventListener("mouseleave",De),Se.removeEventListener("wheel",at),Se.removeEventListener("touchstart",Ze),Se.removeEventListener("touchmove",Pe),Se.removeEventListener("touchend",De),cancelAnimationFrame(y.current.fr),D.dispose(),L.contains(D.domElement)&&L.removeChild(D.domElement)}},[e,l,f,h,p,g,v]),Le.useEffect(()=>{y.current.n1=A},[A]),Le.useEffect(()=>{y.current.n2=x},[x]),Le.useEffect(()=>{E.current=c},[c]),Le.useEffect(()=>{const{car1:L,car2:R,tr1:b,tr2:k,camera:z,spot1:D,spot2:Z,deltaLine:pe,deltaPos:w}=y.current;if(!L||!R||!e||e.length<2)return;const U=S.current;function me(K,j,re,G){const ee=(re==null?void 0:re.length)>=2?re:e,X=kl(ee,G);if(isNaN(X.x)||isNaN(X.y)||isNaN(X.z))return{x:0,y:0,z:0};K.position.set(X.x,X.y+.2,X.z);const P=kl(ee,Math.min(1,G+.005));if(Math.abs(P.x-X.x)+Math.abs(P.z-X.z)>.001&&!isNaN(P.x)&&K.lookAt(P.x,X.y+.2,P.z),j){const $=Math.min(j.count+1,j.max);for(let xe=($-1)*3;xe>=3;xe-=3)j.positions[xe]=j.positions[xe-3],j.positions[xe+1]=j.positions[xe-2],j.positions[xe+2]=j.positions[xe-1];j.positions[0]=X.x,j.positions[1]=X.y+.2,j.positions[2]=X.z,j.count=$,j.line.geometry.attributes.position.needsUpdate=!0,j.line.geometry.setDrawRange(0,$)}return X}const ie=me(L,b,y.current.n1,a),B=me(R,k,y.current.n2,a);if(D&&(D.position.set(ie.x,ie.y+12,ie.z),D.target=L),Z&&(Z.position.set(B.x,B.y+12,B.z),Z.target=R),pe&&w){w[0]=ie.x,w[1]=ie.y+.5,w[2]=ie.z,w[3]=B.x,w[4]=B.y+.5,w[5]=B.z,pe.geometry.attributes.position.needsUpdate=!0;const K=Math.sqrt((ie.x-B.x)**2+(ie.z-B.z)**2);pe.material.opacity=Math.min(.6,K*.08)}if(z){const K=E.current;if(K==="follow1"||K==="follow2"){const j=K==="follow1"?ie:B,re=K==="follow1"?y.current.n1||e:y.current.n2||e,G=kl(re,Math.min(1,a+.02)),ee=G.x-j.x,X=G.z-j.z,P=Math.sqrt(ee*ee+X*X)||1;z.position.set(j.x-ee/P*8,j.y+4.5,j.z-X/P*8),z.lookAt(G.x,j.y+.3,G.z)}else if(K==="cinematic"&&y.current.curve){const j=(U.cinT+a*.3)%1,re=y.current.curve.getPointAt(j);z.position.set(re.x+8,re.y+5,re.z+8),z.lookAt((ie.x+B.x)/2,(ie.y+B.y)/2,(ie.z+B.z)/2)}}},[a,e,c])}const v1=Le.memo(function({tp:e,l1:t,l2:r,prog:a,c1:l,c2:f}){const c=Le.useRef(null),h=Le.useMemo(()=>t?ra(t):null,[t]),p=Le.useMemo(()=>r?ra(r):null,[r]);return Le.useEffect(()=>{const _=c.current;if(!_||!(e!=null&&e.length))return;const g=_.getContext("2d"),y=_.width,S=14;g.clearRect(0,0,y,y),g.fillStyle=le.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(y-8,0),g.quadraticCurveTo(y,0,y,8),g.lineTo(y,y-8),g.quadraticCurveTo(y,y,y-8,y),g.lineTo(8,y),g.quadraticCurveTo(0,y,0,y-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let E=1/0,A=-1/0,x=1/0,v=-1/0;for(const k of e)k.x<E&&(E=k.x),k.x>A&&(A=k.x),k.z<x&&(x=k.z),k.z>v&&(v=k.z);const L=Math.max(A-E,v-x)||1,R=k=>({x:S+(k.x-E)/L*(y-S*2),y:S+(k.z-x)/L*(y-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((k,z)=>{const D=R(k);z===0?g.moveTo(D.x,D.y):g.lineTo(D.x,D.y)}),g.closePath(),g.stroke();function b(k,z){const D=(k==null?void 0:k.length)>=2?k:e,Z=kl(D,a),pe=R(Z);g.fillStyle=z,g.shadowColor=z,g.shadowBlur=8,g.beginPath(),g.arc(pe.x,pe.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}b(h,l),b(p,f)},[e,a,t,r,l,f]),q.jsx("canvas",{ref:c,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),Mf=Le.memo(function({data1:e,data2:t,color1:r,color2:a,maxVal:l,h:f}){const c=Le.useRef(null);return Le.useEffect(()=>{const h=c.current;if(!h)return;const p=h.getContext("2d"),_=h.width,g=h.height;p.clearRect(0,0,_,g);function y(S,E){if(!(S!=null&&S.length))return;const A=Math.max(1,Math.floor(S.length/_));p.strokeStyle=E,p.lineWidth=1.5,p.beginPath();let x=!0;for(let v=0;v<S.length;v+=A){const L=v/(S.length-1)*_,R=g-S[v]/l*g*.9-g*.05;x?p.moveTo(L,R):p.lineTo(L,R),x=!1}p.stroke()}y(e,r),y(t,a)},[e,t,r,a,l]),q.jsx("canvas",{ref:c,width:320,height:f||45,style:{width:"100%",height:f||45,borderRadius:3}})}),Ef=Le.memo(function({s:e,t1:t,t2:r,c1:a,c2:l}){const f=t&&r?t-r:null,c=[le.green,le.yellow,le.red];return q.jsxs("div",{style:{flex:1,padding:"5px 8px",background:le.cardBg,borderRadius:4,borderTop:`2px solid ${c[e-1]}`},children:[q.jsxs("div",{style:{fontSize:9,color:le.textMuted,fontFamily:le.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),q.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[q.jsx("span",{style:{fontSize:12,color:a,fontFamily:le.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),q.jsx("span",{style:{fontSize:12,color:l,fontFamily:le.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&q.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?le.red:le.green,fontFamily:le.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function x1(){var Qe,it,Xe,vt,ft,dt,It,hn,Yt,vn,Tt;const s=m1(),[e,t]=Le.useState(2026),[r,a]=Le.useState([]),[l,f]=Le.useState(null),[c,h]=Le.useState([]),[p,_]=Le.useState(null),[g,y]=Le.useState([]),[S,E]=Le.useState(null),[A,x]=Le.useState(null),[v,L]=Le.useState(null),[R,b]=Le.useState(null),[k,z]=Le.useState([]),[D,Z]=Le.useState([]),[pe,w]=Le.useState(null),[U,me]=Le.useState(null),[ie,B]=Le.useState(null),[K,j]=Le.useState(null),[re,G]=Le.useState(null),[ee,X]=Le.useState([]),[P,$]=Le.useState([]),[xe,Y]=Le.useState(0),[de,ve]=Le.useState(!1),[ke,Ue]=Le.useState(1),[be,ct]=Le.useState(!1),[tt,J]=Le.useState("orbit"),[Pt,et]=Le.useState("normal"),[ot,He]=Le.useState(""),[gt,nt]=Le.useState(void 0),[pt,xt]=Le.useState(""),[I,T]=Le.useState(!0),[fe,ge]=Le.useState("3d"),[Ae,ye]=Le.useState(!1),[Be,Ze]=Le.useState(!1),[Pe,De]=Le.useState(!1),[at,Se]=Le.useState(""),Dt=Le.useRef(null),ut=Le.useRef(null),$e=Le.useRef(null),_e=Le.useRef(!1),Me=g.find(N=>N.driver_number===S),Fe=g.find(N=>N.driver_number===A),Te=Me?ig(Me.team_name):"#4488ff",Ge=Fe?ig(Fe.team_name):"#ff4488",O=k.find(N=>N.lap_number===v),he=D.find(N=>N.lap_number===R),ne=O!=null&&O.lap_duration&&(he!=null&&he.lap_duration)?O.lap_duration-he.lap_duration:null,Re=O!=null&&O.lap_duration?xe*O.lap_duration:0,Ne=he!=null&&he.lap_duration?xe*he.lap_duration:0,lt=(it=(Qe=ee.find(N=>v>=N.lap_start&&v<=N.lap_end))==null?void 0:Qe.compound)==null?void 0:it.toUpperCase(),At=(vt=(Xe=P.find(N=>R>=N.lap_start&&R<=N.lap_end))==null?void 0:Xe.compound)==null?void 0:vt.toUpperCase(),Rt=s?200:400,en=Le.useMemo(()=>Js(ie==null?void 0:ie.map(N=>N.speed||0),Rt),[ie,Rt]),wt=Le.useMemo(()=>Js(K==null?void 0:K.map(N=>N.speed||0),Rt),[K,Rt]),Ft=Le.useMemo(()=>Js(ie==null?void 0:ie.map(N=>N.throttle||0),Rt),[ie,Rt]),_t=Le.useMemo(()=>Js(K==null?void 0:K.map(N=>N.throttle||0),Rt),[K,Rt]),Sn=Le.useMemo(()=>Js(ie==null?void 0:ie.map(N=>N.brake>0?100:0),Rt),[ie,Rt]),ai=Le.useMemo(()=>Js(K==null?void 0:K.map(N=>N.brake>0?100:0),Rt),[K,Rt]),bn=fg(ie,xe),Li=fg(K,xe),Mi=Le.useMemo(()=>ie?Math.max(...ie.map(N=>N.speed||0)):0,[ie]),as=Le.useMemo(()=>K?Math.max(...K.map(N=>N.speed||0)):0,[K]),ls=Le.useMemo(()=>ie!=null&&ie.length?ie.reduce((N,Oe)=>N+(Oe.speed||0),0)/ie.length:0,[ie]),fo=Le.useMemo(()=>K!=null&&K.length?K.reduce((N,Oe)=>N+(Oe.speed||0),0)/K.length:0,[K]);Le.useEffect(()=>{He("Loading..."),xt(""),rg(e).then(N=>{a(N.filter(Oe=>Oe.meeting_name)),f(null),_(null),h([]),y([]),E(null),x(null),G(null),He("")}).catch(N=>{xt(N.message),He("")})},[e]),Le.useEffect(()=>{l&&(He("Loading sessions..."),sg(l.meeting_key).then(N=>{h(N.filter(Oe=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Oe.session_name))),_(null),y([]),E(null),x(null),G(null),He("")}).catch(N=>{xt(N.message),He("")}))},[l]),Le.useEffect(()=>{p&&(He("Loading drivers..."),og(p.session_key).then(N=>{const Oe=new Set;y(N.filter(We=>Oe.has(We.driver_number)?!1:(Oe.add(We.driver_number),!0))),E(null),x(null),G(null),He("")}).catch(N=>{xt(N.message),He("")}))},[p]),Le.useEffect(()=>{p&&S&&(ag(p.session_key,S).then(N=>{z(N),L(null)}).catch(()=>z([])),lg(p.session_key,S).then(X).catch(()=>X([])))},[p,S]),Le.useEffect(()=>{p&&A&&(ag(p.session_key,A).then(N=>{Z(N),b(null)}).catch(()=>Z([])),lg(p.session_key,A).then($).catch(()=>$([])))},[p,A]),Le.useEffect(()=>{if(k.length&&!v){const N=dg(k);N&&L(N.lap_number)}},[k]),Le.useEffect(()=>{if(D.length&&!R){const N=dg(D);N&&b(N.lap_number)}},[D]),Le.useEffect(()=>{if(_e.current)return;const N=eo();N.year&&N.mk&&(_e.current=!0,t(Number(N.year)))},[]),Le.useEffect(()=>{const N=eo();if(N.mk&&r.length&&!l){const Oe=r.find(We=>String(We.meeting_key)===N.mk);Oe&&f(Oe)}},[r]),Le.useEffect(()=>{const N=eo();if(N.sk&&c.length&&!p){const Oe=c.find(We=>String(We.session_key)===N.sk);Oe&&_(Oe)}},[c]),Le.useEffect(()=>{const N=eo();N.d1&&N.d2&&g.length&&!S&&!A&&(E(Number(N.d1)),x(Number(N.d2)))},[g]),Le.useEffect(()=>{const N=eo();N.l1&&k.length&&!v&&L(Number(N.l1))},[k]),Le.useEffect(()=>{const N=eo();N.l2&&D.length&&!R&&b(Number(N.l2))},[D]);const li=Le.useCallback(async()=>{if(!(!p||!S||!A||!v||!R)){He("Fetching telemetry..."),xt(""),nt(0);try{const N=p.session_key,Oe=k.find(Pi=>Pi.lap_number===v),We=D.find(Pi=>Pi.lap_number===R);if(!(Oe!=null&&Oe.date_start)||!(We!=null&&We.date_start)){xt("Lap timing unavailable."),He("");return}const qt=new Date(new Date(Oe.date_start).getTime()+(Oe.lap_duration||120)*1e3).toISOString(),Ct=new Date(new Date(We.date_start).getTime()+(We.lap_duration||120)*1e3).toISOString();nt(20);const[Ot,tn]=await Promise.all([ug(N,S,Oe.date_start,qt),ug(N,A,We.date_start,Ct)]);nt(60);const[Ut,Bt]=await Promise.all([cg(N,S,Oe.date_start,qt),cg(N,A,We.date_start,Ct)]);if(Ot.length<5||tn.length<5){xt("Insufficient data."),He(""),nt(void 0);return}w(Ot),me(tn),B(Ut),j(Bt),G(ra(Ot)),Y(0),ve(!1),nt(100),setTimeout(()=>{He(""),nt(void 0)},300)}catch(N){xt(N.message),He(""),nt(void 0)}}},[p,S,A,v,R,k,D]),us=Le.useCallback(async N=>{ye(!1),He("Loading preset..."),xt("");try{t(N.year);const Oe=await rg(N.year);a(Oe.filter(Bt=>Bt.meeting_name));const We=Oe.find(Bt=>Bt.meeting_name===N.meeting);if(!We)throw new Error("Not found");f(We);const Ct=(await sg(We.meeting_key)).filter(Bt=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Bt.session_name));h(Ct);const Ot=Ct.find(Bt=>Bt.session_name===N.session);if(!Ot)throw new Error("Not found");_(Ot);const tn=await og(Ot.session_key),Ut=new Set;y(tn.filter(Bt=>Ut.has(Bt.driver_number)?!1:(Ut.add(Bt.driver_number),!0))),E(N.d1),x(N.d2),He("")}catch(Oe){xt(Oe.message),He("")}},[]),C=Le.useCallback(()=>{var Oe;if(!l||!p)return;const N=g1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:A,l1:v,l2:R});(Oe=navigator.clipboard)==null||Oe.writeText(N).then(()=>{Se("Copied!"),setTimeout(()=>Se(""),2e3)}),window.history.replaceState(null,"",N.split(window.location.origin)[1])},[e,l,p,S,A,v,R]);_1(Dt,re,pe,U,xe,Te,Ge,tt,(Me==null?void 0:Me.name_acronym)||"",(Fe==null?void 0:Fe.name_acronym)||"",ie,Pt),Le.useEffect(()=>{if(!de){$e.current=null,ut.current&&cancelAnimationFrame(ut.current);return}function N(Oe){$e.current||($e.current=Oe);const We=(Oe-$e.current)/1e3;$e.current=Oe,Y(qt=>{const Ct=qt+We*.015*ke;return Ct>=1?be?0:(ve(!1),1):Ct}),ut.current=requestAnimationFrame(N)}return ut.current=requestAnimationFrame(N),()=>{ut.current&&cancelAnimationFrame(ut.current)}},[de,ke,be]);const Q=Le.useRef(0);Le.useEffect(()=>{const N=Oe=>{if(!(Oe.target.tagName==="SELECT"||Oe.target.tagName==="INPUT")&&(Oe.code==="Space"&&(Oe.preventDefault(),re&&ve(We=>!We)),Oe.code==="KeyR"&&(Y(0),ve(!1)),Oe.code==="KeyT"&&T(We=>!We),Oe.code==="KeyC"&&J(We=>Ol[(Ol.indexOf(We)+1)%Ol.length]),Oe.code==="KeyL"&&ct(We=>!We),Oe.code==="ArrowRight"&&Y(We=>Math.min(1,We+.01)),Oe.code==="ArrowLeft")){const We=Date.now();We-Q.current<300?Y(qt=>Math.max(0,qt-.05)):Y(qt=>Math.max(0,qt-.01)),Q.current=We}};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[re]);const ue=(Ae||Be||Pe)&&q.jsx("div",{onClick:()=>{ye(!1),Ze(!1),De(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),ce=Ae&&q.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:le.carbon,border:`1px solid ${le.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":400,animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[q.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:le.sans,letterSpacing:"0.05em"},children:"QUICK PRESETS"}),q.jsx("button",{onClick:()=>ye(!1),style:{marginLeft:"auto"},children:"✕"})]}),h1.map((N,Oe)=>q.jsx("button",{onClick:()=>us(N),style:{display:"block",width:"100%",textAlign:"left",padding:"12px 14px",marginBottom:6,fontSize:13,fontFamily:le.mono,borderLeft:`3px solid ${le.red}`},children:N.label},Oe))]}),oe=Be&&re&&q.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:le.carbon,border:`1px solid ${le.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":420,animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[q.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:le.sans,letterSpacing:"0.05em"},children:"COMPARISON"}),q.jsx("button",{onClick:()=>Ze(!1),style:{marginLeft:"auto"},children:"✕"})]}),q.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:le.mono},children:[q.jsx("thead",{children:q.jsxs("tr",{style:{color:le.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[q.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:`1px solid ${le.red}22`},children:"METRIC"}),q.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:Te,borderBottom:`1px solid ${Te}33`},children:(Me==null?void 0:Me.name_acronym)||"D1"}),q.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:Ge,borderBottom:`1px solid ${Ge}33`},children:(Fe==null?void 0:Fe.name_acronym)||"D2"})]})}),q.jsx("tbody",{children:[{m:"LAP TIME",v1:O!=null&&O.lap_duration?Kr(O.lap_duration):"—",v2:he!=null&&he.lap_duration?Kr(he.lap_duration):"—"},{m:"TOP SPEED",v1:`${Math.round(Mi)}`,v2:`${Math.round(as)}`},{m:"AVG SPEED",v1:`${Math.round(ls)}`,v2:`${Math.round(fo)}`},{m:"SECTOR 1",v1:((ft=O==null?void 0:O.duration_sector_1)==null?void 0:ft.toFixed(3))||"—",v2:((dt=he==null?void 0:he.duration_sector_1)==null?void 0:dt.toFixed(3))||"—"},{m:"SECTOR 2",v1:((It=O==null?void 0:O.duration_sector_2)==null?void 0:It.toFixed(3))||"—",v2:((hn=he==null?void 0:he.duration_sector_2)==null?void 0:hn.toFixed(3))||"—"},{m:"SECTOR 3",v1:((Yt=O==null?void 0:O.duration_sector_3)==null?void 0:Yt.toFixed(3))||"—",v2:((vn=he==null?void 0:he.duration_sector_3)==null?void 0:vn.toFixed(3))||"—"},{m:"TYRE",v1:lt||"—",v2:At||"—"}].map(N=>q.jsxs("tr",{style:{borderBottom:`1px solid ${le.borderLight}`},children:[q.jsx("td",{style:{padding:"8px 8px",color:le.textDim,letterSpacing:"0.05em"},children:N.m}),q.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:Te},children:N.v1}),q.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:Ge},children:N.v2})]},N.m))})]})]}),Ve=Pe&&q.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:le.carbon,borderLeft:`1px solid ${le.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${le.borderLight}`},children:[q.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:le.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),q.jsx("button",{onClick:()=>De(!1),style:{marginLeft:"auto"},children:"✕"})]}),q.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(Me==null?void 0:Me.name_acronym)||"D1",col:Te,laps:k,sel:v,set:L},{lab:(Fe==null?void 0:Fe.name_acronym)||"D2",col:Ge,laps:D,sel:R,set:b}].map(N=>{const Oe=N.laps.filter(Ct=>Ct.lap_duration>10),We=Oe.length?Math.min(...Oe.map(Ct=>Ct.lap_duration)):0,qt=Oe.length?Math.max(...Oe.map(Ct=>Ct.lap_duration)):0;return q.jsxs("div",{style:{marginBottom:18},children:[q.jsx("div",{style:{fontSize:12,fontWeight:700,color:N.col,marginBottom:8,fontFamily:le.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${N.col}`,paddingLeft:8},children:N.lab}),Oe.sort((Ct,Ot)=>Ct.lap_duration-Ot.lap_duration).map(Ct=>{const Ot=qt>We?(Ct.lap_duration-We)/(qt-We):0;return q.jsxs("div",{onClick:()=>N.set(Ct.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Ct.lap_number===N.sel?`${N.col}18`:"transparent",borderLeft:Ct.lap_number===N.sel?`2px solid ${N.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:le.mono},children:[q.jsxs("span",{style:{width:30,color:le.textMuted},children:["L",Ct.lap_number]}),q.jsx("span",{style:{fontWeight:Ct.lap_duration===We?800:400,color:Ct.lap_duration===We?le.green:le.text},children:Kr(Ct.lap_duration)}),Ct.lap_duration===We&&q.jsx("span",{style:{fontSize:9,color:le.green,fontWeight:700,background:`${le.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),q.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:le.borderLight,borderRadius:2,overflow:"hidden"},children:q.jsx("div",{style:{height:"100%",width:`${(1-Ot)*100}%`,background:Ot<.1?le.green:Ot>.7?le.red:le.yellow,borderRadius:2}})})]},Ct.lap_number)})]},N.lab)})})]});return q.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:le.carbon,color:le.text,fontFamily:le.sans,overflow:"hidden"},children:[q.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${le.red}44;border-radius:2px}
        select,button{font-family:${le.sans}}
        select{background:${le.inputBg};color:${le.text};border:1px solid ${le.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${le.red}88}
        button{background:${le.cardBg};color:${le.text};border:1px solid ${le.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${le.red}88;background:${le.carbonMid}}
        .f1-btn{background:${le.red};border-color:${le.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${le.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${le.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),ue,ce,oe,Ve,q.jsxs("div",{style:{padding:s?"8px 10px":"0",display:"flex",alignItems:"stretch",borderBottom:`2px solid ${le.red}`,background:`linear-gradient(180deg, ${le.carbonLight} 0%, ${le.carbon} 100%)`,zIndex:10,position:"relative",overflow:"hidden"},children:[q.jsx("div",{style:{width:s?4:6,background:le.red,flexShrink:0}}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:14,padding:s?"0 8px":"10px 18px",flex:1,flexWrap:"wrap"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[q.jsx("span",{style:{fontSize:s?16:22,fontWeight:900,letterSpacing:"0.04em",color:"#fff",textTransform:"uppercase"},children:"Phantom"}),q.jsx("span",{style:{fontSize:s?16:22,fontWeight:300,color:le.red,letterSpacing:"0.04em"},children:"Cars"})]}),l&&q.jsxs("span",{style:{fontSize:11,color:le.textDim,fontWeight:600,letterSpacing:"0.05em"},children:[(Tt=l.meeting_name)==null?void 0:Tt.replace("Grand Prix","GP")," ",e]}),q.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6},children:[q.jsx("button",{onClick:()=>ye(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&q.jsx("button",{onClick:C,style:{fontSize:10,padding:"4px 10px"},children:at||"SHARE"}),re&&q.jsx("button",{onClick:()=>Ze(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),re&&q.jsx("button",{onClick:()=>De(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),q.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${le.borderLight}`,background:le.carbonLight},children:[q.jsx("select",{value:e,onChange:N=>t(Number(N.target.value)),children:[2026,2025,2024,2023].map(N=>q.jsx("option",{value:N,children:N},N))}),q.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:N=>f(r.find(Oe=>Oe.meeting_key===Number(N.target.value))||null),style:{minWidth:s?110:155},children:[q.jsx("option",{value:"",children:"Grand Prix"}),r.map(N=>q.jsx("option",{value:N.meeting_key,children:N.meeting_name},N.meeting_key))]}),q.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:N=>_(c.find(Oe=>Oe.session_key===Number(N.target.value))||null),disabled:!c.length,style:{minWidth:s?85:115},children:[q.jsx("option",{value:"",children:"Session"}),c.map(N=>q.jsx("option",{value:N.session_key,children:N.session_name},N.session_key))]}),!s&&q.jsx("div",{style:{width:1,height:20,background:`${le.red}33`}}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[q.jsx("div",{style:{width:3,height:18,background:Te,borderRadius:1}}),q.jsxs("select",{value:S||"",onChange:N=>{E(Number(N.target.value)),L(null),z([])},disabled:!g.length,style:{minWidth:s?68:100},children:[q.jsx("option",{value:"",children:"Driver 1"}),g.map(N=>q.jsx("option",{value:N.driver_number,children:N.name_acronym||`#${N.driver_number}`},N.driver_number))]}),k.length>0&&q.jsxs("select",{value:v||"",onChange:N=>L(Number(N.target.value)),style:{width:s?56:72},children:[q.jsx("option",{value:"",children:"Lap"}),k.filter(N=>N.lap_duration>10).map(N=>q.jsxs("option",{value:N.lap_number,children:["L",N.lap_number]},N.lap_number))]})]}),q.jsx("span",{style:{color:le.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[q.jsx("div",{style:{width:3,height:18,background:Ge,borderRadius:1}}),q.jsxs("select",{value:A||"",onChange:N=>{x(Number(N.target.value)),b(null),Z([])},disabled:!g.length,style:{minWidth:s?68:100},children:[q.jsx("option",{value:"",children:"Driver 2"}),g.map(N=>q.jsx("option",{value:N.driver_number,children:N.name_acronym||`#${N.driver_number}`},N.driver_number))]}),D.length>0&&q.jsxs("select",{value:R||"",onChange:N=>b(Number(N.target.value)),style:{width:s?56:72},children:[q.jsx("option",{value:"",children:"Lap"}),D.filter(N=>N.lap_duration>10).map(N=>q.jsxs("option",{value:N.lap_number,children:["L",N.lap_number]},N.lap_number))]})]}),q.jsx("button",{className:"f1-btn",onClick:li,disabled:!S||!A||!v||!R||!!ot,children:ot?"...":"COMPARE"})]}),pt&&q.jsxs("div",{style:{padding:"8px 18px",background:`${le.red}11`,borderBottom:`1px solid ${le.red}22`,fontSize:12,color:le.red,display:"flex",alignItems:"center",gap:8},children:[q.jsx("span",{style:{flex:1},children:pt}),q.jsx("button",{onClick:()=>xt(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),ot&&q.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${le.borderLight}`},children:[q.jsx("div",{style:{fontSize:11,color:le.textDim,fontFamily:le.mono,marginBottom:4},children:ot}),gt!==void 0&&q.jsx("div",{style:{height:2,background:le.borderLight,borderRadius:1,overflow:"hidden"},children:q.jsx("div",{style:{height:"100%",width:`${gt}%`,background:le.red,borderRadius:1,transition:"width .3s"}})})]}),s&&re&&q.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${le.borderLight}`},children:["3d","telemetry"].map(N=>q.jsx("button",{onClick:()=>ge(N),style:{flex:1,borderRadius:0,borderBottom:fe===N?`2px solid ${le.red}`:"2px solid transparent",background:fe===N?le.cardBg:"transparent",fontWeight:fe===N?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:N==="3d"?"Track":"Telemetry"},N))}),q.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${re?175:130}px)`},children:[(!s||fe==="3d")&&q.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[q.jsx("div",{ref:Dt,style:{width:"100%",height:"100%",background:le.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),re&&q.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[Ol.map(N=>q.jsx("button",{onClick:()=>J(N),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:tt===N?le.red:le.overlay,color:tt===N?"#fff":le.textDim,borderColor:tt===N?le.red:le.borderLight,fontWeight:700},children:p1[N]},N)),q.jsx("div",{style:{width:1,height:16,background:le.borderLight}}),q.jsx("button",{onClick:()=>et(N=>N==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:Pt==="heatmap"?"#0088ff":le.overlay,color:Pt==="heatmap"?"#fff":le.textDim,borderColor:Pt==="heatmap"?"#0088ff":le.borderLight,fontWeight:700},children:"🌡 Speed"})]}),re&&!s&&q.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:q.jsx(v1,{tp:re,l1:pe,l2:U,prog:xe,c1:Te,c2:Ge})}),ne!==null&&re&&q.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:q.jsxs("div",{style:{background:le.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${le.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[q.jsx("div",{style:{fontSize:8,color:le.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),q.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:le.mono,color:ne>0?le.red:le.green,lineHeight:1.1},children:[ne>0?"+":"",ne.toFixed(3),q.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),q.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[q.jsxs("span",{style:{fontSize:10,color:Te,fontFamily:le.mono,fontWeight:700},children:[Me==null?void 0:Me.name_acronym," ",Kr(O==null?void 0:O.lap_duration)]}),q.jsxs("span",{style:{fontSize:10,color:Ge,fontFamily:le.mono,fontWeight:700},children:[Fe==null?void 0:Fe.name_acronym," ",Kr(he==null?void 0:he.lap_duration)]})]})]})}),re&&O&&he&&q.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[q.jsx(Ef,{s:1,t1:O.duration_sector_1,t2:he.duration_sector_1,c1:Te,c2:Ge}),q.jsx(Ef,{s:2,t1:O.duration_sector_2,t2:he.duration_sector_2,c1:Te,c2:Ge}),q.jsx(Ef,{s:3,t1:O.duration_sector_3,t2:he.duration_sector_3,c1:Te,c2:Ge})]}),!re&&!ot&&q.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[q.jsx("div",{style:{fontSize:72,fontWeight:900,color:le.red,opacity:.08,letterSpacing:"-0.03em",lineHeight:1},children:"F1"}),q.jsx("div",{style:{fontSize:s?14:17,fontWeight:700,color:le.textMuted,marginBottom:8,letterSpacing:"0.03em"},children:"GHOST CAR COMPARISON"}),q.jsx("div",{style:{fontSize:12,color:le.textMuted,maxWidth:340},children:"Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons."})]})]}),(!s&&I&&re||s&&fe==="telemetry"&&re)&&q.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${le.borderLight}`,background:le.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:q.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[q.jsx("div",{style:{display:"flex",gap:6,marginBottom:10},children:[{di:Me,co:Te,ct:bn,tire:lt},{di:Fe,co:Ge,ct:Li,tire:At}].map((N,Oe)=>{var We;return q.jsxs("div",{style:{flex:1,background:le.cardBg,borderRadius:6,padding:"8px 8px 6px",borderTop:`3px solid ${N.co}`,position:"relative",textAlign:"center"},children:[q.jsx("div",{style:{fontSize:12,fontWeight:900,color:N.co,fontFamily:le.mono,letterSpacing:"0.05em"},children:((We=N.di)==null?void 0:We.name_acronym)||"—"}),q.jsxs("svg",{width:"90",height:"55",viewBox:"0 0 90 55",style:{margin:"4px auto 2px"},children:[q.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:le.border,strokeWidth:"4",strokeLinecap:"round"}),q.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:N.co,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:`${Math.min(N.ct.speed,360)/360*110} 110`}),q.jsx("text",{x:"45",y:"42",textAnchor:"middle",fill:"#fff",fontSize:"18",fontWeight:"900",fontFamily:le.mono,children:Math.round(N.ct.speed)}),q.jsx("text",{x:"45",y:"52",textAnchor:"middle",fill:le.textMuted,fontSize:"7",fontFamily:le.mono,children:"KM/H"})]}),q.jsxs("div",{style:{display:"flex",gap:3,justifyContent:"center",marginTop:2},children:[q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:le.border,borderRadius:2,position:"relative",overflow:"hidden"},children:q.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:`${N.ct.throttle}%`,background:le.green,borderRadius:2,transition:"height 0.1s"}})}),q.jsx("div",{style:{fontSize:7,color:le.textMuted,fontFamily:le.mono,marginTop:1},children:"THR"})]}),q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:le.border,borderRadius:2,position:"relative",overflow:"hidden"},children:q.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:N.ct.brake>0?"100%":"0%",background:le.red,borderRadius:2,transition:"height 0.1s"}})}),q.jsx("div",{style:{fontSize:7,color:le.textMuted,fontFamily:le.mono,marginTop:1},children:"BRK"})]}),q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#fff",fontFamily:le.mono,lineHeight:"20px"},children:N.ct.n_gear??N.ct.gear??"—"}),q.jsx("div",{style:{fontSize:7,color:le.textMuted,fontFamily:le.mono,marginTop:1},children:"GEAR"})]})]}),N.tire&&q.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",alignItems:"center",gap:2},children:[q.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:f1[N.tire]||"#888"}}),q.jsx("span",{style:{fontSize:8,fontFamily:le.mono,color:le.textMuted},children:N.tire})]}),N.ct.drs>=10&&q.jsx("div",{style:{position:"absolute",bottom:4,right:6,fontSize:8,fontWeight:700,color:le.green,fontFamily:le.mono,background:`${le.green}15`,padding:"1px 4px",borderRadius:2,animation:"pulse 1s infinite"},children:"DRS"})]},Oe)})}),re&&q.jsxs("div",{style:{marginBottom:10},children:[q.jsx("div",{style:{fontSize:10,color:le.textMuted,fontFamily:le.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"ELEVATION"}),q.jsx("svg",{width:"100%",height:"40",viewBox:"0 0 300 40",preserveAspectRatio:"none",style:{borderRadius:3,background:le.cardBg},children:(()=>{const N=re.map(tn=>tn.y),Oe=Math.min(...N),qt=Math.max(...N)-Oe||1,Ct=Math.max(1,Math.floor(re.length/150));let Ot="";for(let tn=0;tn<re.length;tn+=Ct){const Ut=tn/(re.length-1)*300,Bt=38-(N[tn]-Oe)/qt*34;Ot+=(tn===0?"M":"L")+`${Ut},${Bt}`}return q.jsxs(q.Fragment,{children:[q.jsx("path",{d:Ot+"L300,40L0,40Z",fill:`${le.red}15`}),q.jsx("path",{d:Ot,fill:"none",stroke:le.red,strokeWidth:"1.5",opacity:"0.6"}),q.jsx("line",{x1:xe*300,y1:"0",x2:xe*300,y2:"40",stroke:"#fff",strokeWidth:"1",opacity:"0.5"})]})})()})]}),q.jsx("div",{style:{fontSize:10,color:le.textMuted,fontFamily:le.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED"}),q.jsx(Mf,{data1:en,data2:wt,color1:Te,color2:Ge,maxVal:370}),q.jsx("div",{style:{fontSize:10,color:le.textMuted,fontFamily:le.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"THROTTLE"}),q.jsx(Mf,{data1:Ft,data2:_t,color1:Te,color2:Ge,maxVal:100}),q.jsx("div",{style:{fontSize:10,color:le.textMuted,fontFamily:le.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),q.jsx(Mf,{data1:Sn,data2:ai,color1:Te,color2:Ge,maxVal:100,h:35})]})})]}),re&&q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${le.carbonLight}, ${le.carbon})`,borderTop:`1px solid ${le.red}22`},children:[q.jsx("button",{onClick:()=>{Y(0),ve(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),q.jsx("button",{onClick:()=>ve(!de),style:{padding:"3px 9px",fontSize:13,background:de?`${le.red}33`:le.cardBg,borderColor:de?le.red:le.border},children:de?"⏸":"▶"}),q.jsx("button",{onClick:()=>ct(!be),style:{padding:"3px 7px",opacity:be?1:.35,fontSize:11},children:"🔁"}),q.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:xe,onChange:N=>Y(parseFloat(N.target.value)),style:{flex:1,height:4,accentColor:le.red}}),q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[q.jsx("span",{style:{fontSize:10,color:Te,fontFamily:le.mono,fontWeight:700,lineHeight:1.2},children:Kr(Re)}),q.jsx("span",{style:{fontSize:10,color:Ge,fontFamily:le.mono,fontWeight:700,lineHeight:1.2},children:Kr(Ne)})]}),q.jsxs("select",{value:ke,onChange:N=>Ue(parseFloat(N.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[q.jsx("option",{value:.25,children:".25x"}),q.jsx("option",{value:.5,children:".5x"}),q.jsx("option",{value:1,children:"1x"}),q.jsx("option",{value:2,children:"2x"}),q.jsx("option",{value:4,children:"4x"})]}),!s&&q.jsx("button",{onClick:()=>T(!I),style:{padding:"3px 7px",fontSize:10,opacity:I?1:.35},children:"📊"})]})]})}O_.createRoot(document.getElementById("root")).render(q.jsx(L_.StrictMode,{children:q.jsx(x1,{})}));
