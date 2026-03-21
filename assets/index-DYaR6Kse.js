(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function cg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cc={exports:{}},Vo={},bc={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function w0(){if(gp)return Mt;gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function x(I,q,Ce){this.props=I,this.context=q,this.refs=A,this.updater=Ce||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function P(I,q,Ce){this.props=I,this.context=q,this.refs=A,this.updater=Ce||S}var R=P.prototype=new v;R.constructor=P,E(R,x.prototype),R.isPureReactComponent=!0;var b=Array.isArray,z=Object.prototype.hasOwnProperty,O={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function Y(I,q,Ce){var X,he={},ye=null,Oe=null;if(q!=null)for(X in q.ref!==void 0&&(Oe=q.ref),q.key!==void 0&&(ye=""+q.key),q)z.call(q,X)&&!D.hasOwnProperty(X)&&(he[X]=q[X]);var Pe=arguments.length-2;if(Pe===1)he.children=Ce;else if(1<Pe){for(var Re=Array(Pe),ct=0;ct<Pe;ct++)Re[ct]=arguments[ct+2];he.children=Re}if(I&&I.defaultProps)for(X in Pe=I.defaultProps,Pe)he[X]===void 0&&(he[X]=Pe[X]);return{$$typeof:s,type:I,key:ye,ref:Oe,props:he,_owner:O.current}}function _e(I,q){return{$$typeof:s,type:I.type,key:q,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function U(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ce){return q[Ce]})}var le=/\/+/g;function ee(I,q){return typeof I=="object"&&I!==null&&I.key!=null?U(""+I.key):q.toString(36)}function B(I,q,Ce,X,he){var ye=typeof I;(ye==="undefined"||ye==="boolean")&&(I=null);var Oe=!1;if(I===null)Oe=!0;else switch(ye){case"string":case"number":Oe=!0;break;case"object":switch(I.$$typeof){case s:case e:Oe=!0}}if(Oe)return Oe=I,he=he(Oe),I=X===""?"."+ee(Oe,0):X,b(he)?(Ce="",I!=null&&(Ce=I.replace(le,"$&/")+"/"),B(he,q,Ce,"",function(ct){return ct})):he!=null&&(w(he)&&(he=_e(he,Ce+(!he.key||Oe&&Oe.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+I)),q.push(he)),1;if(Oe=0,X=X===""?".":X+":",b(I))for(var Pe=0;Pe<I.length;Pe++){ye=I[Pe];var Re=X+ee(ye,Pe);Oe+=B(ye,q,Ce,Re,he)}else if(Re=y(I),typeof Re=="function")for(I=Re.call(I),Pe=0;!(ye=I.next()).done;)ye=ye.value,Re=X+ee(ye,Pe++),Oe+=B(ye,q,Ce,Re,he);else if(ye==="object")throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Oe}function te(I,q,Ce){if(I==null)return I;var X=[],he=0;return B(I,X,"","",function(ye){return q.call(Ce,ye,he++)}),X}function J(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(Ce){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ce)},function(Ce){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ce)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var oe={current:null},G={transition:null},K={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:G,ReactCurrentOwner:O};function j(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:te,forEach:function(I,q,Ce){te(I,function(){q.apply(this,arguments)},Ce)},count:function(I){var q=0;return te(I,function(){q++}),q},toArray:function(I){return te(I,function(q){return q})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Mt.Component=x,Mt.Fragment=n,Mt.Profiler=a,Mt.PureComponent=P,Mt.StrictMode=r,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Mt.act=j,Mt.cloneElement=function(I,q,Ce){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var X=E({},I.props),he=I.key,ye=I.ref,Oe=I._owner;if(q!=null){if(q.ref!==void 0&&(ye=q.ref,Oe=O.current),q.key!==void 0&&(he=""+q.key),I.type&&I.type.defaultProps)var Pe=I.type.defaultProps;for(Re in q)z.call(q,Re)&&!D.hasOwnProperty(Re)&&(X[Re]=q[Re]===void 0&&Pe!==void 0?Pe[Re]:q[Re])}var Re=arguments.length-2;if(Re===1)X.children=Ce;else if(1<Re){Pe=Array(Re);for(var ct=0;ct<Re;ct++)Pe[ct]=arguments[ct+2];X.children=Pe}return{$$typeof:s,type:I.type,key:he,ref:ye,props:X,_owner:Oe}},Mt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Mt.createElement=Y,Mt.createFactory=function(I){var q=Y.bind(null,I);return q.type=I,q},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(I){return{$$typeof:c,render:I}},Mt.isValidElement=w,Mt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},Mt.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},Mt.startTransition=function(I){var q=G.transition;G.transition={};try{I()}finally{G.transition=q}},Mt.unstable_act=j,Mt.useCallback=function(I,q){return oe.current.useCallback(I,q)},Mt.useContext=function(I){return oe.current.useContext(I)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(I){return oe.current.useDeferredValue(I)},Mt.useEffect=function(I,q){return oe.current.useEffect(I,q)},Mt.useId=function(){return oe.current.useId()},Mt.useImperativeHandle=function(I,q,Ce){return oe.current.useImperativeHandle(I,q,Ce)},Mt.useInsertionEffect=function(I,q){return oe.current.useInsertionEffect(I,q)},Mt.useLayoutEffect=function(I,q){return oe.current.useLayoutEffect(I,q)},Mt.useMemo=function(I,q){return oe.current.useMemo(I,q)},Mt.useReducer=function(I,q,Ce){return oe.current.useReducer(I,q,Ce)},Mt.useRef=function(I){return oe.current.useRef(I)},Mt.useState=function(I){return oe.current.useState(I)},Mt.useSyncExternalStore=function(I,q,Ce){return oe.current.useSyncExternalStore(I,q,Ce)},Mt.useTransition=function(){return oe.current.useTransition()},Mt.version="18.3.1",Mt}var _p;function If(){return _p||(_p=1,bc.exports=w0()),bc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function A0(){if(vp)return Vo;vp=1;var s=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,p){var _,g={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:c,key:y,ref:S,props:g,_owner:a.current}}return Vo.Fragment=n,Vo.jsx=d,Vo.jsxs=d,Vo}var xp;function R0(){return xp||(xp=1,Cc.exports=A0()),Cc.exports}var re=R0(),Le=If();const C0=cg(Le);var ll={},Lc={exports:{}},kn={},Pc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function b0(){return yp||(yp=1,(function(s){function e(G,K){var j=G.length;G.push(K);e:for(;0<j;){var I=j-1>>>1,q=G[I];if(0<a(q,K))G[I]=K,G[j]=q,j=I;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var K=G[0],j=G.pop();if(j!==K){G[0]=j;e:for(var I=0,q=G.length,Ce=q>>>1;I<Ce;){var X=2*(I+1)-1,he=G[X],ye=X+1,Oe=G[ye];if(0>a(he,j))ye<q&&0>a(Oe,he)?(G[I]=Oe,G[ye]=j,I=ye):(G[I]=he,G[X]=j,I=X);else if(ye<q&&0>a(Oe,j))G[I]=Oe,G[ye]=j,I=ye;else break e}}return K}function a(G,K){var j=G.sortIndex-K.sortIndex;return j!==0?j:G.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();s.unstable_now=function(){return d.now()-c}}var h=[],p=[],_=1,g=null,y=3,S=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(G){for(var K=n(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=G)r(p),K.sortIndex=K.expirationTime,e(h,K);else break;K=n(p)}}function b(G){if(A=!1,R(G),!E)if(n(h)!==null)E=!0,J(z);else{var K=n(p);K!==null&&oe(b,K.startTime-G)}}function z(G,K){E=!1,A&&(A=!1,v(Y),Y=-1),S=!0;var j=y;try{for(R(K),g=n(h);g!==null&&(!(g.expirationTime>K)||G&&!U());){var I=g.callback;if(typeof I=="function"){g.callback=null,y=g.priorityLevel;var q=I(g.expirationTime<=K);K=s.unstable_now(),typeof q=="function"?g.callback=q:g===n(h)&&r(h),R(K)}else r(h);g=n(h)}if(g!==null)var Ce=!0;else{var X=n(p);X!==null&&oe(b,X.startTime-K),Ce=!1}return Ce}finally{g=null,y=j,S=!1}}var O=!1,D=null,Y=-1,_e=5,w=-1;function U(){return!(s.unstable_now()-w<_e)}function le(){if(D!==null){var G=s.unstable_now();w=G;var K=!0;try{K=D(!0,G)}finally{K?ee():(O=!1,D=null)}}else O=!1}var ee;if(typeof P=="function")ee=function(){P(le)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,te=B.port2;B.port1.onmessage=le,ee=function(){te.postMessage(null)}}else ee=function(){x(le,0)};function J(G){D=G,O||(O=!0,ee())}function oe(G,K){Y=x(function(){G(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,J(z))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(G){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var j=y;y=K;try{return G()}finally{y=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,K){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var j=y;y=G;try{return K()}finally{y=j}},s.unstable_scheduleCallback=function(G,K,j){var I=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,G){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=j+q,G={id:_++,callback:K,priorityLevel:G,startTime:j,expirationTime:q,sortIndex:-1},j>I?(G.sortIndex=j,e(p,G),n(h)===null&&G===n(p)&&(A?(v(Y),Y=-1):A=!0,oe(b,j-I))):(G.sortIndex=q,e(h,G),E||S||(E=!0,J(z))),G},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(G){var K=y;return function(){var j=y;y=K;try{return G.apply(this,arguments)}finally{y=j}}}})(Dc)),Dc}var Sp;function L0(){return Sp||(Sp=1,Pc.exports=b0()),Pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function P0(){if(Mp)return kn;Mp=1;var s=If(),e=L0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(t){return h.call(g,t)?!0:h.call(_,t)?!1:p.test(t)?g[t]=!0:(_[t]=!0,!1)}function S(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,u){if(i===null||typeof i>"u"||S(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,u,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,P);x[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,P);x[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,P);x[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,o,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),O=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),U=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,I;function q(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ce=!1;function X(t,i){if(!t||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){u=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}t()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),m=u.stack.split(`
`),M=f.length-1,N=m.length-1;1<=M&&0<=N&&f[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(f[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||f[M]!==m[N]){var H=`
`+f[M].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=M&&0<=N);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?q(t):""}function he(t){switch(t.tag){case 5:return q(t.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case O:return"Portal";case _e:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case J:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function Oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function rt(t){t._valueTracker||(t._valueTracker=ct(t))}function Z(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Re(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function et(t,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ke(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function mt(t,i){Be(t,i);var o=Pe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?dt(t,i.type,o):i.hasOwnProperty("defaultValue")&&dt(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function nt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function dt(t,i,o){(i!=="number"||Dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var st=Array.isArray;function L(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(st(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function ne(t,i){var o=Pe(i.value),u=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,xe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Se(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(Ze).forEach(function(t){we.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ze[i]=Ze[t]})});function Et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ze.hasOwnProperty(t)&&Ze[t]?(""+i).trim():i+"px"}function ot(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Et(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var $e=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if($e[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var it=null;function Xe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ge=null,k=null,ve=null;function se(t){if(t=Co(t)){if(typeof Ge!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ea(i),Ge(t.stateNode,t.type,i))}}function De(t){k?ve?ve.push(t):ve=[t]:k=t}function ze(){if(k){var t=k,i=ve;if(ve=k=null,se(t),i)for(t=0;t<i.length;t++)se(i[t])}}function vt(t,i){return t(i)}function Lt(){}var Rt=!1;function pn(t,i,o){if(Rt)return t(i,o);Rt=!0;try{return vt(t,i,o)}finally{Rt=!1,(k!==null||ve!==null)&&(Lt(),ze())}}function Ct(t,i){var o=t.stateNode;if(o===null)return null;var u=Ea(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Yt=!1;if(c)try{var on={};Object.defineProperty(on,"passive",{get:function(){Yt=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Yt=!1}function is(t,i,o,u,f,m,M,N,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(Te){this.onError(Te)}}var Ci=!1,si=null,bi=!1,yi=null,rs={onError:function(t){Ci=!0,si=t}};function ss(t,i,o,u,f,m,M,N,H){Ci=!1,si=null,is.apply(rs,arguments)}function lo(t,i,o,u,f,m,M,N,H){if(ss.apply(this,arguments),Ci){if(Ci){var ue=si;Ci=!1,si=null}else throw Error(n(198));bi||(bi=!0,yi=ue)}}function oi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function os(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(oi(t)!==t)throw Error(n(188))}function $(t){var i=t.alternate;if(!i){if(i=oi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return C(f),t;if(m===u)return C(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=m;else{for(var M=!1,N=f.child;N;){if(N===o){M=!0,o=f,u=m;break}if(N===u){M=!0,u=f,o=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===o){M=!0,o=m,u=f;break}if(N===u){M=!0,u=m,o=f;break}N=N.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ce(t){return t=$(t),t!==null?fe(t):null}function fe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fe(t);if(i!==null)return i;t=t.sibling}return null}var ae=e.unstable_scheduleCallback,He=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,at=e.unstable_requestPaint,Ve=e.unstable_now,_t=e.unstable_getCurrentPriorityLevel,ft=e.unstable_ImmediatePriority,ht=e.unstable_UserBlockingPriority,Ut=e.unstable_NormalPriority,an=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,mn=null,F=null;function Me(t){if(F&&typeof F.onCommitFiberRoot=="function")try{F.onCommitFiberRoot(mn,t,void 0,(t.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:ln,wt=Math.log,Tt=Math.LN2;function ln(t){return t>>>=0,t===0?32:31-(wt(t)/Tt|0)|0}var An=64,Gn=4194304;function At(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,m=t.pingedLanes,M=o&268435455;if(M!==0){var N=M&~f;N!==0?u=At(N):(m&=M,m!==0&&(u=At(m)))}else M=o&~f,M!==0?u=At(M):m!==0&&(u=At(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-tt(i),f=1<<o,u|=t[o],i&=~f;return u}function uo(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Un(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var M=31-tt(m),N=1<<M,H=f[M];H===-1?((N&o)===0||(N&u)!==0)&&(f[M]=uo(N,i)):H<=i&&(t.expiredLanes|=N),m&=~N}}function Cr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aa(){var t=An;return An<<=1,(An&4194240)===0&&(An=64),t}function as(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function co(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-tt(i),t[i]=o}function jg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-tt(o),m=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~m}}function Zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-tt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var It=0;function Yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $f,Ql,Kf,Zf,Qf,Jl=!1,la=[],qi=null,Yi=null,$i=null,fo=new Map,ho=new Map,Ki=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(t,i,o,u,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Co(i),i!==null&&Ql(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Yg(t,i,o,u,f){switch(i){case"focusin":return qi=po(qi,t,i,o,u,f),!0;case"dragenter":return Yi=po(Yi,t,i,o,u,f),!0;case"mouseover":return $i=po($i,t,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return fo.set(m,po(fo.get(m)||null,t,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,ho.set(m,po(ho.get(m)||null,t,i,o,u,f)),!0}return!1}function ed(t){var i=br(t.target);if(i!==null){var o=oi(i);if(o!==null){if(i=o.tag,i===13){if(i=os(o),i!==null){t.blockedOn=i,Qf(t.priority,function(){Kf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ua(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);it=u,o.target.dispatchEvent(u),it=null}else return i=Co(o),i!==null&&Ql(i),t.blockedOn=o,!1;i.shift()}return!0}function td(t,i,o){ua(t)&&o.delete(i)}function $g(){Jl=!1,qi!==null&&ua(qi)&&(qi=null),Yi!==null&&ua(Yi)&&(Yi=null),$i!==null&&ua($i)&&($i=null),fo.forEach(td),ho.forEach(td)}function mo(t,i){t.blockedOn===i&&(t.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function go(t){function i(f){return mo(f,t)}if(0<la.length){mo(la[0],t);for(var o=1;o<la.length;o++){var u=la[o];u.blockedOn===t&&(u.blockedOn=null)}}for(qi!==null&&mo(qi,t),Yi!==null&&mo(Yi,t),$i!==null&&mo($i,t),fo.forEach(i),ho.forEach(i),o=0;o<Ki.length;o++)u=Ki[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)ed(o),o.blockedOn===null&&Ki.shift()}var ls=b.ReactCurrentBatchConfig,ca=!0;function Kg(t,i,o,u){var f=It,m=ls.transition;ls.transition=null;try{It=1,eu(t,i,o,u)}finally{It=f,ls.transition=m}}function Zg(t,i,o,u){var f=It,m=ls.transition;ls.transition=null;try{It=4,eu(t,i,o,u)}finally{It=f,ls.transition=m}}function eu(t,i,o,u){if(ca){var f=tu(t,i,o,u);if(f===null)vu(t,i,u,fa,o),Jf(t,u);else if(Yg(f,t,i,o,u))u.stopPropagation();else if(Jf(t,u),i&4&&-1<qg.indexOf(t)){for(;f!==null;){var m=Co(f);if(m!==null&&$f(m),m=tu(t,i,o,u),m===null&&vu(t,i,u,fa,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else vu(t,i,u,null,o)}}var fa=null;function tu(t,i,o,u){if(fa=null,t=Xe(u),t=br(t),t!==null)if(i=oi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=os(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return fa=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_t()){case ft:return 1;case ht:return 4;case Ut:case an:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var Zi=null,nu=null,da=null;function id(){if(da)return da;var t,i=nu,o=i.length,u,f="value"in Zi?Zi.value:Zi.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(u=1;u<=M&&i[o-u]===f[m-u];u++);return da=f.slice(t,1<u?1-u:void 0)}function ha(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function rd(){return!1}function Vn(t){function i(o,u,f,m,M){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?pa:rd,this.isPropagationStopped=rd,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Vn(us),_o=j({},us,{view:0,detail:0}),Qg=Vn(_o),ru,su,vo,ma=j({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(ru=t.screenX-vo.screenX,su=t.screenY-vo.screenY):su=ru=0,vo=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),sd=Vn(ma),Jg=j({},ma,{dataTransfer:0}),e_=Vn(Jg),t_=j({},_o,{relatedTarget:0}),ou=Vn(t_),n_=j({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=Vn(n_),r_=j({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s_=Vn(r_),o_=j({},us,{data:0}),od=Vn(o_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=u_[t])?!!i[t]:!1}function au(){return c_}var f_=j({},_o,{key:function(t){if(t.key){var i=a_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d_=Vn(f_),h_=j({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Vn(h_),p_=j({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),m_=Vn(p_),g_=j({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Vn(g_),v_=j({},ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Vn(v_),y_=[9,13,27,32],lu=c&&"CompositionEvent"in window,xo=null;c&&"documentMode"in document&&(xo=document.documentMode);var S_=c&&"TextEvent"in window&&!xo,ld=c&&(!lu||xo&&8<xo&&11>=xo),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return y_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function M_(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function E_(t,i){if(cs)return t==="compositionend"||!lu&&fd(t,i)?(t=id(),da=nu=Zi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T_[t.type]:i==="textarea"}function pd(t,i,o,u){De(u),i=ya(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var yo=null,So=null;function w_(t){Dd(t,0)}function ga(t){var i=ms(t);if(Z(i))return t}function A_(t,i){if(t==="change")return i}var md=!1;if(c){var uu;if(c){var cu="oninput"in document;if(!cu){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),cu=typeof gd.oninput=="function"}uu=cu}else uu=!1;md=uu&&(!document.documentMode||9<document.documentMode)}function _d(){yo&&(yo.detachEvent("onpropertychange",vd),So=yo=null)}function vd(t){if(t.propertyName==="value"&&ga(So)){var i=[];pd(i,So,t,Xe(t)),pn(w_,i)}}function R_(t,i,o){t==="focusin"?(_d(),yo=i,So=o,yo.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function C_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ga(So)}function b_(t,i){if(t==="click")return ga(i)}function L_(t,i){if(t==="input"||t==="change")return ga(i)}function P_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ai=typeof Object.is=="function"?Object.is:P_;function Mo(t,i){if(ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!ai(t[f],i[f]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,i){var o=xd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xd(o)}}function Sd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=Dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dt(t.document)}return i}function fu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function D_(t){var i=Md(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!t.extend&&m>u&&(f=u,u=m,m=f),f=yd(o,m);var M=yd(o,u);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U_=c&&"documentMode"in document&&11>=document.documentMode,fs=null,du=null,Eo=null,hu=!1;function Ed(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||fs==null||fs!==Dt(u)||(u=fs,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Eo&&Mo(Eo,u)||(Eo=u,u=ya(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=fs)))}function _a(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ds={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},pu={},Td={};c&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function va(t){if(pu[t])return pu[t];if(!ds[t])return t;var i=ds[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Td)return pu[t]=i[o];return t}var wd=va("animationend"),Ad=va("animationiteration"),Rd=va("animationstart"),Cd=va("transitionend"),bd=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){bd.set(t,i),l(i,[t])}for(var mu=0;mu<Ld.length;mu++){var gu=Ld[mu],I_=gu.toLowerCase(),N_=gu[0].toUpperCase()+gu.slice(1);Qi(I_,"on"+N_)}Qi(wd,"onAnimationEnd"),Qi(Ad,"onAnimationIteration"),Qi(Rd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Pd(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,lo(u,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var N=u[M],H=N.instance,ue=N.currentTarget;if(N=N.listener,H!==m&&f.isPropagationStopped())break e;Pd(f,N,ue),m=H}else for(M=0;M<u.length;M++){if(N=u[M],H=N.instance,ue=N.currentTarget,N=N.listener,H!==m&&f.isPropagationStopped())break e;Pd(f,N,ue),m=H}}}if(bi)throw t=yi,bi=!1,yi=null,t}function zt(t,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=t+"__bubble";o.has(u)||(Ud(i,t,2,!1),o.add(u))}function _u(t,i,o){var u=0;i&&(u|=4),Ud(o,t,u,i)}var xa="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[xa]){t[xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(F_.has(o)||_u(o,!1,t),_u(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xa]||(i[xa]=!0,_u("selectionchange",!1,i))}}function Ud(t,i,o,u){switch(nd(i)){case 1:var f=Kg;break;case 4:f=Zg;break;default:f=eu}o=f.bind(null,i,o,t),f=void 0,!Yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function vu(t,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var H=M.tag;if((H===3||H===4)&&(H=M.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;M=M.return}for(;N!==null;){if(M=br(N),M===null)return;if(H=M.tag,H===5||H===6){u=m=M;continue e}N=N.parentNode}}u=u.return}pn(function(){var ue=m,Te=Xe(o),Ae=[];e:{var Ee=bd.get(t);if(Ee!==void 0){var We=iu,Ye=t;switch(t){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":We=d_;break;case"focusin":Ye="focus",We=ou;break;case"focusout":Ye="blur",We=ou;break;case"beforeblur":case"afterblur":We=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=m_;break;case wd:case Ad:case Rd:We=i_;break;case Cd:We=__;break;case"scroll":We=Qg;break;case"wheel":We=x_;break;case"copy":case"cut":case"paste":We=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=ad}var Ke=(i&4)!==0,$t=!Ke&&t==="scroll",Q=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var V=ue,ie;V!==null;){ie=V;var be=ie.stateNode;if(ie.tag===5&&be!==null&&(ie=be,Q!==null&&(be=Ct(V,Q),be!=null&&Ke.push(Ao(V,be,ie)))),$t)break;V=V.return}0<Ke.length&&(Ee=new We(Ee,Ye,null,o,Te),Ae.push({event:Ee,listeners:Ke}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Ee&&o!==it&&(Ye=o.relatedTarget||o.fromElement)&&(br(Ye)||Ye[Li]))break e;if((We||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,We?(Ye=o.relatedTarget||o.toElement,We=ue,Ye=Ye?br(Ye):null,Ye!==null&&($t=oi(Ye),Ye!==$t||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=ue),We!==Ye)){if(Ke=sd,be="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ke=ad,be="onPointerLeave",Q="onPointerEnter",V="pointer"),$t=We==null?Ee:ms(We),ie=Ye==null?Ee:ms(Ye),Ee=new Ke(be,V+"leave",We,o,Te),Ee.target=$t,Ee.relatedTarget=ie,be=null,br(Te)===ue&&(Ke=new Ke(Q,V+"enter",Ye,o,Te),Ke.target=ie,Ke.relatedTarget=$t,be=Ke),$t=be,We&&Ye)t:{for(Ke=We,Q=Ye,V=0,ie=Ke;ie;ie=hs(ie))V++;for(ie=0,be=Q;be;be=hs(be))ie++;for(;0<V-ie;)Ke=hs(Ke),V--;for(;0<ie-V;)Q=hs(Q),ie--;for(;V--;){if(Ke===Q||Q!==null&&Ke===Q.alternate)break t;Ke=hs(Ke),Q=hs(Q)}Ke=null}else Ke=null;We!==null&&Id(Ae,Ee,We,Ke,!1),Ye!==null&&$t!==null&&Id(Ae,$t,Ye,Ke,!0)}}e:{if(Ee=ue?ms(ue):window,We=Ee.nodeName&&Ee.nodeName.toLowerCase(),We==="select"||We==="input"&&Ee.type==="file")var Je=A_;else if(hd(Ee))if(md)Je=L_;else{Je=C_;var lt=R_}else(We=Ee.nodeName)&&We.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=b_);if(Je&&(Je=Je(t,ue))){pd(Ae,Je,o,Te);break e}lt&&lt(t,Ee,ue),t==="focusout"&&(lt=Ee._wrapperState)&&lt.controlled&&Ee.type==="number"&&dt(Ee,"number",Ee.value)}switch(lt=ue?ms(ue):window,t){case"focusin":(hd(lt)||lt.contentEditable==="true")&&(fs=lt,du=ue,Eo=null);break;case"focusout":Eo=du=fs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Ed(Ae,o,Te);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":Ed(Ae,o,Te)}var ut;if(lu)e:{switch(t){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else cs?fd(t,o)&&(pt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(pt="onCompositionStart");pt&&(ld&&o.locale!=="ko"&&(cs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&cs&&(ut=id()):(Zi=Te,nu="value"in Zi?Zi.value:Zi.textContent,cs=!0)),lt=ya(ue,pt),0<lt.length&&(pt=new od(pt,t,null,o,Te),Ae.push({event:pt,listeners:lt}),ut?pt.data=ut:(ut=dd(o),ut!==null&&(pt.data=ut)))),(ut=S_?M_(t,o):E_(t,o))&&(ue=ya(ue,"onBeforeInput"),0<ue.length&&(Te=new od("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:ue}),Te.data=ut))}Dd(Ae,i)})}function Ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ya(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Ct(t,o),m!=null&&u.unshift(Ao(t,m,f)),m=Ct(t,i),m!=null&&u.push(Ao(t,m,f))),t=t.return}return u}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Id(t,i,o,u,f){for(var m=i._reactName,M=[];o!==null&&o!==u;){var N=o,H=N.alternate,ue=N.stateNode;if(H!==null&&H===u)break;N.tag===5&&ue!==null&&(N=ue,f?(H=Ct(o,m),H!=null&&M.unshift(Ao(o,H,N))):f||(H=Ct(o,m),H!=null&&M.push(Ao(o,H,N)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var O_=/\r\n?/g,z_=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(O_,`
`).replace(z_,"")}function Sa(t,i,o){if(i=Nd(i),Nd(t)!==i&&o)throw Error(n(425))}function Ma(){}var xu=null,yu=null;function Su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(H_)}:Mu;function H_(t){setTimeout(function(){throw t})}function Eu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),go(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);go(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Si="__reactFiber$"+ps,Ro="__reactProps$"+ps,Li="__reactContainer$"+ps,Tu="__reactEvents$"+ps,G_="__reactListeners$"+ps,V_="__reactHandles$"+ps;function br(t){var i=t[Si];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Li]||o[Si]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Od(t);t!==null;){if(o=t[Si])return o;t=Od(t)}return i}t=o,o=t.parentNode}return null}function Co(t){return t=t[Si]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ea(t){return t[Ro]||null}var wu=[],gs=-1;function er(t){return{current:t}}function kt(t){0>gs||(t.current=wu[gs],wu[gs]=null,gs--)}function Ot(t,i){gs++,wu[gs]=t.current,t.current=i}var tr={},xn=er(tr),In=er(!1),Lr=tr;function _s(t,i){var o=t.type.contextTypes;if(!o)return tr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function Ta(){kt(In),kt(xn)}function zd(t,i,o){if(xn.current!==tr)throw Error(n(168));Ot(xn,i),Ot(In,o)}function kd(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,Oe(t)||"Unknown",f));return j({},o,u)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Lr=xn.current,Ot(xn,t),Ot(In,In.current),!0}function Bd(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=kd(t,i,Lr),u.__reactInternalMemoizedMergedChildContext=t,kt(In),kt(xn),Ot(xn,t)):kt(In),Ot(In,o)}var Pi=null,Aa=!1,Au=!1;function Hd(t){Pi===null?Pi=[t]:Pi.push(t)}function W_(t){Aa=!0,Hd(t)}function nr(){if(!Au&&Pi!==null){Au=!0;var t=0,i=It;try{var o=Pi;for(It=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Pi=null,Aa=!1}catch(f){throw Pi!==null&&(Pi=Pi.slice(t+1)),ae(ft,nr),f}finally{It=i,Au=!1}}return null}var vs=[],xs=0,Ra=null,Ca=0,Kn=[],Zn=0,Pr=null,Di=1,Ui="";function Dr(t,i){vs[xs++]=Ca,vs[xs++]=Ra,Ra=t,Ca=i}function Gd(t,i,o){Kn[Zn++]=Di,Kn[Zn++]=Ui,Kn[Zn++]=Pr,Pr=t;var u=Di;t=Ui;var f=32-tt(u)-1;u&=~(1<<f),o+=1;var m=32-tt(i)+f;if(30<m){var M=f-f%5;m=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Di=1<<32-tt(i)+f|o<<f|u,Ui=m+t}else Di=1<<m|o<<f|u,Ui=t}function Ru(t){t.return!==null&&(Dr(t,1),Gd(t,1,0))}function Cu(t){for(;t===Ra;)Ra=vs[--xs],vs[xs]=null,Ca=vs[--xs],vs[xs]=null;for(;t===Pr;)Pr=Kn[--Zn],Kn[Zn]=null,Ui=Kn[--Zn],Kn[Zn]=null,Di=Kn[--Zn],Kn[Zn]=null}var Wn=null,Xn=null,Vt=!1,li=null;function Vd(t,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Wd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Wn=t,Xn=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(Vt){var i=Xn;if(i){var o=i;if(!Wd(t,i)){if(bu(t))throw Error(n(418));i=Ji(o.nextSibling);var u=Wn;i&&Wd(t,i)?Vd(u,o):(t.flags=t.flags&-4097|2,Vt=!1,Wn=t)}}else{if(bu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Wn=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function ba(t){if(t!==Wn)return!1;if(!Vt)return Xd(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Su(t.type,t.memoizedProps)),i&&(i=Xn)){if(bu(t))throw jd(),Error(n(418));for(;i;)Vd(t,i),i=Ji(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Xn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Xn=null}}else Xn=Wn?Ji(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Xn;t;)t=Ji(t.nextSibling)}function ys(){Xn=Wn=null,Vt=!1}function Pu(t){li===null?li=[t]:li.push(t)}var X_=b.ReactCurrentBatchConfig;function bo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=f.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function La(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function qd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(Q,V){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[V],Q.flags|=16):ie.push(V)}}function o(Q,V){if(!t)return null;for(;V!==null;)i(Q,V),V=V.sibling;return null}function u(Q,V){for(Q=new Map;V!==null;)V.key!==null?Q.set(V.key,V):Q.set(V.index,V),V=V.sibling;return Q}function f(Q,V){return Q=cr(Q,V),Q.index=0,Q.sibling=null,Q}function m(Q,V,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<V?(Q.flags|=2,V):ie):(Q.flags|=2,V)):(Q.flags|=1048576,V)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,V,ie,be){return V===null||V.tag!==6?(V=Mc(ie,Q.mode,be),V.return=Q,V):(V=f(V,ie),V.return=Q,V)}function H(Q,V,ie,be){var Je=ie.type;return Je===D?Te(Q,V,ie.props.children,be,ie.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&qd(Je)===V.type)?(be=f(V,ie.props),be.ref=bo(Q,V,ie),be.return=Q,be):(be=el(ie.type,ie.key,ie.props,null,Q.mode,be),be.ref=bo(Q,V,ie),be.return=Q,be)}function ue(Q,V,ie,be){return V===null||V.tag!==4||V.stateNode.containerInfo!==ie.containerInfo||V.stateNode.implementation!==ie.implementation?(V=Ec(ie,Q.mode,be),V.return=Q,V):(V=f(V,ie.children||[]),V.return=Q,V)}function Te(Q,V,ie,be,Je){return V===null||V.tag!==7?(V=Br(ie,Q.mode,be,Je),V.return=Q,V):(V=f(V,ie),V.return=Q,V)}function Ae(Q,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Mc(""+V,Q.mode,ie),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case z:return ie=el(V.type,V.key,V.props,null,Q.mode,ie),ie.ref=bo(Q,null,V),ie.return=Q,ie;case O:return V=Ec(V,Q.mode,ie),V.return=Q,V;case J:var be=V._init;return Ae(Q,be(V._payload),ie)}if(st(V)||K(V))return V=Br(V,Q.mode,ie,null),V.return=Q,V;La(Q,V)}return null}function Ee(Q,V,ie,be){var Je=V!==null?V.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:N(Q,V,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:return ie.key===Je?H(Q,V,ie,be):null;case O:return ie.key===Je?ue(Q,V,ie,be):null;case J:return Je=ie._init,Ee(Q,V,Je(ie._payload),be)}if(st(ie)||K(ie))return Je!==null?null:Te(Q,V,ie,be,null);La(Q,ie)}return null}function We(Q,V,ie,be,Je){if(typeof be=="string"&&be!==""||typeof be=="number")return Q=Q.get(ie)||null,N(V,Q,""+be,Je);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case z:return Q=Q.get(be.key===null?ie:be.key)||null,H(V,Q,be,Je);case O:return Q=Q.get(be.key===null?ie:be.key)||null,ue(V,Q,be,Je);case J:var lt=be._init;return We(Q,V,ie,lt(be._payload),Je)}if(st(be)||K(be))return Q=Q.get(ie)||null,Te(V,Q,be,Je,null);La(V,be)}return null}function Ye(Q,V,ie,be){for(var Je=null,lt=null,ut=V,pt=V=0,fn=null;ut!==null&&pt<ie.length;pt++){ut.index>pt?(fn=ut,ut=null):fn=ut.sibling;var Pt=Ee(Q,ut,ie[pt],be);if(Pt===null){ut===null&&(ut=fn);break}t&&ut&&Pt.alternate===null&&i(Q,ut),V=m(Pt,V,pt),lt===null?Je=Pt:lt.sibling=Pt,lt=Pt,ut=fn}if(pt===ie.length)return o(Q,ut),Vt&&Dr(Q,pt),Je;if(ut===null){for(;pt<ie.length;pt++)ut=Ae(Q,ie[pt],be),ut!==null&&(V=m(ut,V,pt),lt===null?Je=ut:lt.sibling=ut,lt=ut);return Vt&&Dr(Q,pt),Je}for(ut=u(Q,ut);pt<ie.length;pt++)fn=We(ut,Q,pt,ie[pt],be),fn!==null&&(t&&fn.alternate!==null&&ut.delete(fn.key===null?pt:fn.key),V=m(fn,V,pt),lt===null?Je=fn:lt.sibling=fn,lt=fn);return t&&ut.forEach(function(fr){return i(Q,fr)}),Vt&&Dr(Q,pt),Je}function Ke(Q,V,ie,be){var Je=K(ie);if(typeof Je!="function")throw Error(n(150));if(ie=Je.call(ie),ie==null)throw Error(n(151));for(var lt=Je=null,ut=V,pt=V=0,fn=null,Pt=ie.next();ut!==null&&!Pt.done;pt++,Pt=ie.next()){ut.index>pt?(fn=ut,ut=null):fn=ut.sibling;var fr=Ee(Q,ut,Pt.value,be);if(fr===null){ut===null&&(ut=fn);break}t&&ut&&fr.alternate===null&&i(Q,ut),V=m(fr,V,pt),lt===null?Je=fr:lt.sibling=fr,lt=fr,ut=fn}if(Pt.done)return o(Q,ut),Vt&&Dr(Q,pt),Je;if(ut===null){for(;!Pt.done;pt++,Pt=ie.next())Pt=Ae(Q,Pt.value,be),Pt!==null&&(V=m(Pt,V,pt),lt===null?Je=Pt:lt.sibling=Pt,lt=Pt);return Vt&&Dr(Q,pt),Je}for(ut=u(Q,ut);!Pt.done;pt++,Pt=ie.next())Pt=We(ut,Q,pt,Pt.value,be),Pt!==null&&(t&&Pt.alternate!==null&&ut.delete(Pt.key===null?pt:Pt.key),V=m(Pt,V,pt),lt===null?Je=Pt:lt.sibling=Pt,lt=Pt);return t&&ut.forEach(function(T0){return i(Q,T0)}),Vt&&Dr(Q,pt),Je}function $t(Q,V,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:e:{for(var Je=ie.key,lt=V;lt!==null;){if(lt.key===Je){if(Je=ie.type,Je===D){if(lt.tag===7){o(Q,lt.sibling),V=f(lt,ie.props.children),V.return=Q,Q=V;break e}}else if(lt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&qd(Je)===lt.type){o(Q,lt.sibling),V=f(lt,ie.props),V.ref=bo(Q,lt,ie),V.return=Q,Q=V;break e}o(Q,lt);break}else i(Q,lt);lt=lt.sibling}ie.type===D?(V=Br(ie.props.children,Q.mode,be,ie.key),V.return=Q,Q=V):(be=el(ie.type,ie.key,ie.props,null,Q.mode,be),be.ref=bo(Q,V,ie),be.return=Q,Q=be)}return M(Q);case O:e:{for(lt=ie.key;V!==null;){if(V.key===lt)if(V.tag===4&&V.stateNode.containerInfo===ie.containerInfo&&V.stateNode.implementation===ie.implementation){o(Q,V.sibling),V=f(V,ie.children||[]),V.return=Q,Q=V;break e}else{o(Q,V);break}else i(Q,V);V=V.sibling}V=Ec(ie,Q.mode,be),V.return=Q,Q=V}return M(Q);case J:return lt=ie._init,$t(Q,V,lt(ie._payload),be)}if(st(ie))return Ye(Q,V,ie,be);if(K(ie))return Ke(Q,V,ie,be);La(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,V!==null&&V.tag===6?(o(Q,V.sibling),V=f(V,ie),V.return=Q,Q=V):(o(Q,V),V=Mc(ie,Q.mode,be),V.return=Q,Q=V),M(Q)):o(Q,V)}return $t}var Ss=Yd(!0),$d=Yd(!1),Pa=er(null),Da=null,Ms=null,Du=null;function Uu(){Du=Ms=Da=null}function Iu(t){var i=Pa.current;kt(Pa),t._currentValue=i}function Nu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Es(t,i){Da=t,Du=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Fn=!0),t.firstContext=null)}function Qn(t){var i=t._currentValue;if(Du!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(Da===null)throw Error(n(308));Ms=t,Da.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var Ur=null;function Fu(t){Ur===null?Ur=[t]:Ur.push(t)}function Kd(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Fu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ii(t,u)}function Ii(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Ii(t,o)}return f=u.interleaved,f===null?(i.next=i,Fu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Ii(t,o)}function Ua(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Zl(t,o)}}function Qd(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ia(t,i,o,u){var f=t.updateQueue;ir=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var H=N,ue=H.next;H.next=null,M===null?m=ue:M.next=ue,M=H;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,N=Te.lastBaseUpdate,N!==M&&(N===null?Te.firstBaseUpdate=ue:N.next=ue,Te.lastBaseUpdate=H))}if(m!==null){var Ae=f.baseState;M=0,Te=ue=H=null,N=m;do{var Ee=N.lane,We=N.eventTime;if((u&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:We,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ye=t,Ke=N;switch(Ee=i,We=o,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Ae=Ye.call(We,Ae,Ee);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Ee=typeof Ye=="function"?Ye.call(We,Ae,Ee):Ye,Ee==null)break e;Ae=j({},Ae,Ee);break e;case 2:ir=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Ee=f.effects,Ee===null?f.effects=[N]:Ee.push(N))}else We={eventTime:We,lane:Ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Te===null?(ue=Te=We,H=Ae):Te=Te.next=We,M|=Ee;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(Te===null&&(H=Ae),f.baseState=H,f.firstBaseUpdate=ue,f.lastBaseUpdate=Te,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Fr|=M,t.lanes=M,t.memoizedState=Ae}}function Jd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Lo={},Mi=er(Lo),Po=er(Lo),Do=er(Lo);function Ir(t){if(t===Lo)throw Error(n(174));return t}function zu(t,i){switch(Ot(Do,i),Ot(Po,t),Ot(Mi,Lo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ue(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ue(i,t)}kt(Mi),Ot(Mi,i)}function Ts(){kt(Mi),kt(Po),kt(Do)}function eh(t){Ir(Do.current);var i=Ir(Mi.current),o=Ue(i,t.type);i!==o&&(Ot(Po,t),Ot(Mi,o))}function ku(t){Po.current===t&&(kt(Mi),kt(Po))}var Xt=er(0);function Na(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bu=[];function Hu(){for(var t=0;t<Bu.length;t++)Bu[t]._workInProgressVersionPrimary=null;Bu.length=0}var Fa=b.ReactCurrentDispatcher,Gu=b.ReactCurrentBatchConfig,Nr=0,jt=null,Jt=null,un=null,Oa=!1,Uo=!1,Io=0,j_=0;function yn(){throw Error(n(321))}function Vu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ai(t[o],i[o]))return!1;return!0}function Wu(t,i,o,u,f,m){if(Nr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=t===null||t.memoizedState===null?K_:Z_,t=o(u,f),Uo){m=0;do{if(Uo=!1,Io=0,25<=m)throw Error(n(301));m+=1,un=Jt=null,i.updateQueue=null,Fa.current=Q_,t=o(u,f)}while(Uo)}if(Fa.current=Ba,i=Jt!==null&&Jt.next!==null,Nr=0,un=Jt=jt=null,Oa=!1,i)throw Error(n(300));return t}function Xu(){var t=Io!==0;return Io=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?jt.memoizedState=un=t:un=un.next=t,un}function Jn(){if(Jt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=un===null?jt.memoizedState:un.next;if(i!==null)un=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},un===null?jt.memoizedState=un=t:un=un.next=t}return un}function No(t,i){return typeof i=="function"?i(t):i}function ju(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Jt,f=u.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}u.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,u=u.baseState;var N=M=null,H=null,ue=m;do{var Te=ue.lane;if((Nr&Te)===Te)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:t(u,ue.action);else{var Ae={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(N=H=Ae,M=u):H=H.next=Ae,jt.lanes|=Te,Fr|=Te}ue=ue.next}while(ue!==null&&ue!==m);H===null?M=u:H.next=N,ai(u,i.memoizedState)||(Fn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=H,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do m=f.lane,jt.lanes|=m,Fr|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);ai(m,i.memoizedState)||(Fn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function th(){}function nh(t,i){var o=jt,u=Jn(),f=i(),m=!ai(u.memoizedState,f);if(m&&(u.memoizedState=f,Fn=!0),u=u.queue,Yu(sh.bind(null,o,u,t),[t]),u.getSnapshot!==i||m||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Fo(9,rh.bind(null,o,u,f,i),void 0,null),cn===null)throw Error(n(349));(Nr&30)!==0||ih(o,i,f)}return f}function ih(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function rh(t,i,o,u){i.value=o,i.getSnapshot=u,oh(i)&&ah(t)}function sh(t,i,o){return o(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ai(t,o)}catch{return!0}}function ah(t){var i=Ii(t,1);i!==null&&di(i,t,1,-1)}function lh(t){var i=Ei();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},i.queue=t,t=t.dispatch=$_.bind(null,jt,t),[i.memoizedState,t]}function Fo(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function uh(){return Jn().memoizedState}function za(t,i,o,u){var f=Ei();jt.flags|=t,f.memoizedState=Fo(1|i,o,void 0,u===void 0?null:u)}function ka(t,i,o,u){var f=Jn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,u!==null&&Vu(u,M.deps)){f.memoizedState=Fo(i,o,m,u);return}}jt.flags|=t,f.memoizedState=Fo(1|i,o,m,u)}function ch(t,i){return za(8390656,8,t,i)}function Yu(t,i){return ka(2048,8,t,i)}function fh(t,i){return ka(4,2,t,i)}function dh(t,i){return ka(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,o){return o=o!=null?o.concat([t]):null,ka(4,4,hh.bind(null,i,t),o)}function $u(){}function mh(t,i){var o=Jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function gh(t,i){var o=Jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function _h(t,i,o){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=o):(ai(o,i)||(o=aa(),jt.lanes|=o,Fr|=o,t.baseState=!0),i)}function q_(t,i){var o=It;It=o!==0&&4>o?o:4,t(!0);var u=Gu.transition;Gu.transition={};try{t(!1),i()}finally{It=o,Gu.transition=u}}function vh(){return Jn().memoizedState}function Y_(t,i,o){var u=lr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},xh(t))yh(i,o);else if(o=Kd(t,i,o,u),o!==null){var f=Cn();di(o,t,u,f),Sh(o,i,u)}}function $_(t,i,o){var u=lr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(xh(t))yh(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,o);if(f.hasEagerState=!0,f.eagerState=N,ai(N,M)){var H=i.interleaved;H===null?(f.next=f,Fu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=Kd(t,i,f,u),o!==null&&(f=Cn(),di(o,t,u,f),Sh(o,i,u))}}function xh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function yh(t,i){Uo=Oa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Sh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Zl(t,o)}}var Ba={readContext:Qn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},K_={readContext:Qn,useCallback:function(t,i){return Ei().memoizedState=[t,i===void 0?null:i],t},useContext:Qn,useEffect:ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,za(4194308,4,hh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return za(4194308,4,t,i)},useInsertionEffect:function(t,i){return za(4,2,t,i)},useMemo:function(t,i){var o=Ei();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Ei();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Y_.bind(null,jt,t),[u.memoizedState,t]},useRef:function(t){var i=Ei();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:$u,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=q_.bind(null,t[1]),Ei().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=jt,f=Ei();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),cn===null)throw Error(n(349));(Nr&30)!==0||ih(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,ch(sh.bind(null,u,m,t),[t]),u.flags|=2048,Fo(9,rh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var t=Ei(),i=cn.identifierPrefix;if(Vt){var o=Ui,u=Di;o=(u&~(1<<32-tt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Io++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=j_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Z_={readContext:Qn,useCallback:mh,useContext:Qn,useEffect:Yu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:ju,useRef:uh,useState:function(){return ju(No)},useDebugValue:$u,useDeferredValue:function(t){var i=Jn();return _h(i,Jt.memoizedState,t)},useTransition:function(){var t=ju(No)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},Q_={readContext:Qn,useCallback:mh,useContext:Qn,useEffect:Yu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:qu,useRef:uh,useState:function(){return qu(No)},useDebugValue:$u,useDeferredValue:function(t){var i=Jn();return Jt===null?i.memoizedState=t:_h(i,Jt.memoizedState,t)},useTransition:function(){var t=qu(No)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function ui(t,i){if(t&&t.defaultProps){i=j({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ku(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:j({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ha={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Cn(),f=lr(t),m=Ni(u,f);m.payload=i,o!=null&&(m.callback=o),i=rr(t,m,f),i!==null&&(di(i,t,f,u),Ua(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Cn(),f=lr(t),m=Ni(u,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=rr(t,m,f),i!==null&&(di(i,t,f,u),Ua(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Cn(),u=lr(t),f=Ni(o,u);f.tag=2,i!=null&&(f.callback=i),i=rr(t,f,u),i!==null&&(di(i,t,u,o),Ua(i,t,u))}};function Mh(t,i,o,u,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!Mo(o,u)||!Mo(f,m):!0}function Eh(t,i,o){var u=!1,f=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(f=Nn(i)?Lr:xn.current,u=i.contextTypes,m=(u=u!=null)?_s(t,f):tr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Th(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ha.enqueueReplaceState(i,i.state,null)}function Zu(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Ou(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Qn(m):(m=Nn(i)?Lr:xn.current,f.context=_s(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ku(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Ia(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function Qu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ju(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ya||(Ya=!0,pc=u),Ju(t,i)},o}function Ah(t,i,o){o=Ni(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Ju(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Ju(t,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Rh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new J_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=h0.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var e0=b.ReactCurrentOwner,Fn=!1;function Rn(t,i,o,u){i.child=t===null?$d(i,null,o,u):Ss(i,t.child,o,u)}function Lh(t,i,o,u,f){o=o.render;var m=i.ref;return Es(i,f),u=Wu(t,i,o,u,m,f),o=Xu(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Fi(t,i,f)):(Vt&&o&&Ru(i),i.flags|=1,Rn(t,i,u,f),i.child)}function Ph(t,i,o,u,f){if(t===null){var m=o.type;return typeof m=="function"&&!Sc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Dh(t,i,m,u,f)):(t=el(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Mo,o(M,u)&&t.ref===i.ref)return Fi(t,i,f)}return i.flags|=1,t=cr(m,u),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,o,u,f){if(t!==null){var m=t.memoizedProps;if(Mo(m,u)&&t.ref===i.ref)if(Fn=!1,i.pendingProps=u=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Fn=!0);else return i.lanes=t.lanes,Fi(t,i,f)}return ec(t,i,o,u,f)}function Uh(t,i,o){var u=i.pendingProps,f=u.children,m=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Rs,jn),jn|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Rs,jn),jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ot(Rs,jn),jn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ot(Rs,jn),jn|=u;return Rn(t,i,f,o),i.child}function Ih(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(t,i,o,u,f){var m=Nn(o)?Lr:xn.current;return m=_s(i,m),Es(i,f),o=Wu(t,i,o,u,m,f),u=Xu(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Fi(t,i,f)):(Vt&&u&&Ru(i),i.flags|=1,Rn(t,i,o,f),i.child)}function Nh(t,i,o,u,f){if(Nn(o)){var m=!0;wa(i)}else m=!1;if(Es(i,f),i.stateNode===null)Va(t,i),Eh(i,o,u),Zu(i,o,u,f),u=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var H=M.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=Qn(ue):(ue=Nn(o)?Lr:xn.current,ue=_s(i,ue));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ae||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==u||H!==ue)&&Th(i,M,u,ue),ir=!1;var Ee=i.memoizedState;M.state=Ee,Ia(i,u,M,f),H=i.memoizedState,N!==u||Ee!==H||In.current||ir?(typeof Te=="function"&&(Ku(i,o,Te,u),H=i.memoizedState),(N=ir||Mh(i,o,N,u,Ee,H,ue))?(Ae||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),M.props=u,M.state=H,M.context=ue,u=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Zd(t,i),N=i.memoizedProps,ue=i.type===i.elementType?N:ui(i.type,N),M.props=ue,Ae=i.pendingProps,Ee=M.context,H=o.contextType,typeof H=="object"&&H!==null?H=Qn(H):(H=Nn(o)?Lr:xn.current,H=_s(i,H));var We=o.getDerivedStateFromProps;(Te=typeof We=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==Ae||Ee!==H)&&Th(i,M,u,H),ir=!1,Ee=i.memoizedState,M.state=Ee,Ia(i,u,M,f);var Ye=i.memoizedState;N!==Ae||Ee!==Ye||In.current||ir?(typeof We=="function"&&(Ku(i,o,We,u),Ye=i.memoizedState),(ue=ir||Mh(i,o,ue,u,Ee,Ye,H)||!1)?(Te||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ye,H),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ye,H)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),M.props=u,M.state=Ye,M.context=H,u=ue):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),u=!1)}return tc(t,i,o,u,m,f)}function tc(t,i,o,u,f,m){Ih(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&Bd(i,o,!1),Fi(t,i,m);u=i.stateNode,e0.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=Ss(i,t.child,null,m),i.child=Ss(i,null,N,m)):Rn(t,i,N,m),i.memoizedState=u.state,f&&Bd(i,o,!0),i.child}function Fh(t){var i=t.stateNode;i.pendingContext?zd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&zd(t,i.context,!1),zu(t,i.containerInfo)}function Oh(t,i,o,u,f){return ys(),Pu(f),i.flags|=256,Rn(t,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,i,o){var u=i.pendingProps,f=Xt.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ot(Xt,f&1),t===null)return Lu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=tl(M,u,0,null),t=Br(t,u,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=ic(o),i.memoizedState=nc,t):rc(i,M));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return t0(t,i,M,u,N,f,o);if(m){m=u.fallback,M=i.mode,f=t.child,N=f.sibling;var H={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=cr(f,H),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=cr(N,m):(m=Br(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=t.child.memoizedState,M=M===null?ic(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=t.childLanes&~o,i.memoizedState=nc,u}return m=t.child,t=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function rc(t,i){return i=tl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ga(t,i,o,u){return u!==null&&Pu(u),Ss(i,t.child,null,o),t=rc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function t0(t,i,o,u,f,m,M){if(o)return i.flags&256?(i.flags&=-257,u=Qu(Error(n(422))),Ga(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=tl({mode:"visible",children:u.children},f,0,null),m=Br(m,f,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ss(i,t.child,null,M),i.child.memoizedState=ic(M),i.memoizedState=nc,m);if((i.mode&1)===0)return Ga(t,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,m=Error(n(419)),u=Qu(m,u,void 0),Ga(t,i,M,u)}if(N=(M&t.childLanes)!==0,Fn||N){if(u=cn,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ii(t,f),di(u,t,f,-1))}return yc(),u=Qu(Error(n(421))),Ga(t,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=p0.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,Xn=Ji(f.nextSibling),Wn=i,Vt=!0,li=null,t!==null&&(Kn[Zn++]=Di,Kn[Zn++]=Ui,Kn[Zn++]=Pr,Di=t.id,Ui=t.overflow,Pr=i),i=rc(i,u.children),i.flags|=4096,i)}function kh(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Nu(t.return,i,o)}function sc(t,i,o,u,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Bh(t,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(Rn(t,i,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,o,i);else if(t.tag===19)kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ot(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Na(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),sc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Na(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}sc(i,!0,o,null,m);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Fi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function n0(t,i,o){switch(i.tag){case 3:Fh(i),ys();break;case 5:eh(i);break;case 1:Nn(i.type)&&wa(i);break;case 4:zu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Ot(Pa,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ot(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?zh(t,i,o):(Ot(Xt,Xt.current&1),t=Fi(t,i,o),t!==null?t.sibling:null);Ot(Xt,Xt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Bh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,Uh(t,i,o)}return Fi(t,i,o)}var Hh,oc,Gh,Vh;Hh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},Gh=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Ir(Mi.current);var m=null;switch(o){case"input":f=et(t,f),u=et(t,u),m=[];break;case"select":f=j({},f,{value:void 0}),u=j({},u,{value:void 0}),m=[];break;case"textarea":f=T(t,f),u=T(t,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ma)}qe(o,u);var M;o=null;for(ue in f)if(!u.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var N=f[ue];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in u){var H=u[ue];if(N=f!=null?f[ue]:void 0,u.hasOwnProperty(ue)&&H!==N&&(H!=null||N!=null))if(ue==="style")if(N){for(M in N)!N.hasOwnProperty(M)||H&&H.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in H)H.hasOwnProperty(M)&&N[M]!==H[M]&&(o||(o={}),o[M]=H[M])}else o||(m||(m=[]),m.push(ue,o)),o=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(m=m||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&zt("scroll",t),m||N===H||(m=[])):(m=m||[]).push(ue,H))}o&&(m=m||[]).push("style",o);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Vh=function(t,i,o,u){o!==u&&(i.flags|=4)};function Oo(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function i0(t,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Nn(i.type)&&Ta(),Sn(i),null;case 3:return u=i.stateNode,Ts(),kt(In),kt(xn),Hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ba(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(_c(li),li=null))),oc(t,i),Sn(i),null;case 5:ku(i);var f=Ir(Do.current);if(o=i.type,t!==null&&i.stateNode!=null)Gh(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Sn(i),null}if(t=Ir(Mi.current),ba(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Si]=i,u[Ro]=m,t=(i.mode&1)!==0,o){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(f=0;f<To.length;f++)zt(To[f],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":ke(u,m),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},zt("invalid",u);break;case"textarea":de(u,m),zt("invalid",u)}qe(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?u.textContent!==N&&(m.suppressHydrationWarning!==!0&&Sa(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&Sa(u.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&zt("scroll",u)}switch(o){case"input":rt(u),nt(u,m,!0);break;case"textarea":rt(u),ge(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ma)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(o,{is:u.is}):(t=M.createElement(o),o==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,o),t[Si]=i,t[Ro]=u,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ne(o,u),o){case"dialog":zt("cancel",t),zt("close",t),f=u;break;case"iframe":case"object":case"embed":zt("load",t),f=u;break;case"video":case"audio":for(f=0;f<To.length;f++)zt(To[f],t);f=u;break;case"source":zt("error",t),f=u;break;case"img":case"image":case"link":zt("error",t),zt("load",t),f=u;break;case"details":zt("toggle",t),f=u;break;case"input":ke(t,u),f=et(t,u),zt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=j({},u,{value:void 0}),zt("invalid",t);break;case"textarea":de(t,u),f=T(t,u),zt("invalid",t);break;default:f=u}qe(o,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var H=N[m];m==="style"?ot(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&xe(t,H)):m==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Se(t,H):typeof H=="number"&&Se(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?H!=null&&m==="onScroll"&&zt("scroll",t):H!=null&&R(t,m,H,M))}switch(o){case"input":rt(t),nt(t,u,!1);break;case"textarea":rt(t),ge(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Pe(u.value));break;case"select":t.multiple=!!u.multiple,m=u.value,m!=null?L(t,!!u.multiple,m,!1):u.defaultValue!=null&&L(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ma)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ir(Do.current),Ir(Mi.current),ba(i)){if(u=i.stateNode,o=i.memoizedProps,u[Si]=i,(m=u.nodeValue!==o)&&(t=Wn,t!==null))switch(t.tag){case 3:Sa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(u.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Si]=i,i.stateNode=u}return Sn(i),null;case 13:if(kt(Xt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),ys(),i.flags|=98560,m=!1;else if(m=ba(i),u!==null&&u.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[Si]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),m=!1}else li!==null&&(_c(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?en===0&&(en=3):yc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return Ts(),oc(t,i),t===null&&wo(i.stateNode.containerInfo),Sn(i),null;case 10:return Iu(i.type._context),Sn(i),null;case 17:return Nn(i.type)&&Ta(),Sn(i),null;case 19:if(kt(Xt),m=i.memoizedState,m===null)return Sn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Oo(m,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Na(t),M!==null){for(i.flags|=128,Oo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,t=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,t=M.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ot(Xt,Xt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Ve()>Cs&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304)}else{if(!u)if(t=Na(M),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Oo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Vt)return Sn(i),null}else 2*Ve()-m.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ve(),i.sibling=null,o=Xt.current,Ot(Xt,u?o&1|2:o&1),i):(Sn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(jn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function r0(t,i){switch(Cu(i),i.tag){case 1:return Nn(i.type)&&Ta(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),kt(In),kt(xn),Hu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ku(i),null;case 13:if(kt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Xt),null;case 4:return Ts(),null;case 10:return Iu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Wa=!1,Mn=!1,s0=typeof WeakSet=="function"?WeakSet:Set,je=null;function As(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){qt(t,i,u)}else o.current=null}function ac(t,i,o){try{o()}catch(u){qt(t,i,u)}}var Wh=!1;function o0(t,i){if(xu=ca,t=Md(),fu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,N=-1,H=-1,ue=0,Te=0,Ae=t,Ee=null;t:for(;;){for(var We;Ae!==o||f!==0&&Ae.nodeType!==3||(N=M+f),Ae!==m||u!==0&&Ae.nodeType!==3||(H=M+u),Ae.nodeType===3&&(M+=Ae.nodeValue.length),(We=Ae.firstChild)!==null;)Ee=Ae,Ae=We;for(;;){if(Ae===t)break t;if(Ee===o&&++ue===f&&(N=M),Ee===m&&++Te===u&&(H=M),(We=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=We}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(yu={focusedElem:t,selectionRange:o},ca=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,$t=Ye.memoizedState,Q=i.stateNode,V=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:ui(i.type,Ke),$t);Q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){qt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return Ye=Wh,Wh=!1,Ye}function zo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&ac(i,o,m)}f=f.next}while(f!==u)}}function Xa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Si],delete i[Ro],delete i[Tu],delete i[G_],delete i[V_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ma));else if(u!==4&&(t=t.child,t!==null))for(uc(t,i,o),t=t.sibling;t!==null;)uc(t,i,o),t=t.sibling}function cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(cc(t,i,o),t=t.sibling;t!==null;)cc(t,i,o),t=t.sibling}var gn=null,ci=!1;function sr(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(F&&typeof F.onCommitFiberUnmount=="function")try{F.onCommitFiberUnmount(mn,o)}catch{}switch(o.tag){case 5:Mn||As(o,i);case 6:var u=gn,f=ci;gn=null,sr(t,i,o),gn=u,ci=f,gn!==null&&(ci?(t=gn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):gn.removeChild(o.stateNode));break;case 18:gn!==null&&(ci?(t=gn,o=o.stateNode,t.nodeType===8?Eu(t.parentNode,o):t.nodeType===1&&Eu(t,o),go(t)):Eu(gn,o.stateNode));break;case 4:u=gn,f=ci,gn=o.stateNode.containerInfo,ci=!0,sr(t,i,o),gn=u,ci=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&ac(o,i,M),f=f.next}while(f!==u)}sr(t,i,o);break;case 1:if(!Mn&&(As(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){qt(o,i,N)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(Mn=(u=Mn)||o.memoizedState!==null,sr(t,i,o),Mn=u):sr(t,i,o);break;default:sr(t,i,o)}}function $h(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new s0),i.forEach(function(u){var f=m0.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function fi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var m=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:gn=N.stateNode,ci=!1;break e;case 3:gn=N.stateNode.containerInfo,ci=!0;break e;case 4:gn=N.stateNode.containerInfo,ci=!0;break e}N=N.return}if(gn===null)throw Error(n(160));Yh(m,M,f),gn=null,ci=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ue){qt(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,t),i=i.sibling}function Kh(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(i,t),Ti(t),u&4){try{zo(3,t,t.return),Xa(3,t)}catch(Ke){qt(t,t.return,Ke)}try{zo(5,t,t.return)}catch(Ke){qt(t,t.return,Ke)}}break;case 1:fi(i,t),Ti(t),u&512&&o!==null&&As(o,o.return);break;case 5:if(fi(i,t),Ti(t),u&512&&o!==null&&As(o,o.return),t.flags&32){var f=t.stateNode;try{Se(f,"")}catch(Ke){qt(t,t.return,Ke)}}if(u&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,M=o!==null?o.memoizedProps:m,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&Be(f,m),Ne(N,M);var ue=Ne(N,m);for(M=0;M<H.length;M+=2){var Te=H[M],Ae=H[M+1];Te==="style"?ot(f,Ae):Te==="dangerouslySetInnerHTML"?xe(f,Ae):Te==="children"?Se(f,Ae):R(f,Te,Ae,ue)}switch(N){case"input":mt(f,m);break;case"textarea":ne(f,m);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?L(f,!!m.multiple,We,!1):Ee!==!!m.multiple&&(m.defaultValue!=null?L(f,!!m.multiple,m.defaultValue,!0):L(f,!!m.multiple,m.multiple?[]:"",!1))}f[Ro]=m}catch(Ke){qt(t,t.return,Ke)}}break;case 6:if(fi(i,t),Ti(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(Ke){qt(t,t.return,Ke)}}break;case 3:if(fi(i,t),Ti(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Ke){qt(t,t.return,Ke)}break;case 4:fi(i,t),Ti(t);break;case 13:fi(i,t),Ti(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(hc=Ve())),u&4&&$h(t);break;case 22:if(Te=o!==null&&o.memoizedState!==null,t.mode&1?(Mn=(ue=Mn)||Te,fi(i,t),Mn=ue):fi(i,t),Ti(t),u&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!Te&&(t.mode&1)!==0)for(je=t,Te=t.child;Te!==null;){for(Ae=je=Te;je!==null;){switch(Ee=je,We=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:zo(4,Ee,Ee.return);break;case 1:As(Ee,Ee.return);var Ye=Ee.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ke){qt(u,o,Ke)}}break;case 5:As(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Jh(Ae);continue}}We!==null?(We.return=Ee,je=We):Jh(Ae)}Te=Te.sibling}e:for(Te=null,Ae=t;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{f=Ae.stateNode,ue?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=Ae.stateNode,H=Ae.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=Et("display",M))}catch(Ke){qt(t,t.return,Ke)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(Ke){qt(t,t.return,Ke)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===t)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===t)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===t)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:fi(i,t),Ti(t),u&4&&$h(t);break;case 21:break;default:fi(i,t),Ti(t)}}function Ti(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(jh(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Se(f,""),u.flags&=-33);var m=qh(t);cc(t,m,f);break;case 3:case 4:var M=u.stateNode.containerInfo,N=qh(t);uc(t,N,M);break;default:throw Error(n(161))}}catch(H){qt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function a0(t,i,o){je=t,Zh(t)}function Zh(t,i,o){for(var u=(t.mode&1)!==0;je!==null;){var f=je,m=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Wa;if(!M){var N=f.alternate,H=N!==null&&N.memoizedState!==null||Mn;N=Wa;var ue=Mn;if(Wa=M,(Mn=H)&&!ue)for(je=f;je!==null;)M=je,H=M.child,M.tag===22&&M.memoizedState!==null?ep(f):H!==null?(H.return=M,je=H):ep(f);for(;m!==null;)je=m,Zh(m),m=m.sibling;je=f,Wa=N,Mn=ue}Qh(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,je=m):Qh(t)}}function Qh(t){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Xa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ui(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Jd(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Jd(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&go(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&lc(i)}catch(Ee){qt(i,i.return,Ee)}}if(i===t){je=null;break}if(o=i.sibling,o!==null){o.return=i.return,je=o;break}je=i.return}}function Jh(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,je=o;break}je=i.return}}function ep(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xa(4,i)}catch(H){qt(i,o,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(H){qt(i,f,H)}}var m=i.return;try{lc(i)}catch(H){qt(i,m,H)}break;case 5:var M=i.return;try{lc(i)}catch(H){qt(i,M,H)}}}catch(H){qt(i,i.return,H)}if(i===t){je=null;break}var N=i.sibling;if(N!==null){N.return=i.return,je=N;break}je=i.return}}var l0=Math.ceil,ja=b.ReactCurrentDispatcher,fc=b.ReactCurrentOwner,ei=b.ReactCurrentBatchConfig,bt=0,cn=null,Kt=null,_n=0,jn=0,Rs=er(0),en=0,ko=null,Fr=0,qa=0,dc=0,Bo=null,On=null,hc=0,Cs=1/0,Oi=null,Ya=!1,pc=null,or=null,$a=!1,ar=null,Ka=0,Ho=0,mc=null,Za=-1,Qa=0;function Cn(){return(bt&6)!==0?Ve():Za!==-1?Za:Za=Ve()}function lr(t){return(t.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:X_.transition!==null?(Qa===0&&(Qa=aa()),Qa):(t=It,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function di(t,i,o,u){if(50<Ho)throw Ho=0,mc=null,Error(n(185));co(t,o,u),((bt&2)===0||t!==cn)&&(t===cn&&((bt&2)===0&&(qa|=o),en===4&&ur(t,_n)),zn(t,u),o===1&&bt===0&&(i.mode&1)===0&&(Cs=Ve()+500,Aa&&nr()))}function zn(t,i){var o=t.callbackNode;Un(t,i);var u=vn(t,t===cn?_n:0);if(u===0)o!==null&&He(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&He(o),i===1)t.tag===0?W_(np.bind(null,t)):Hd(np.bind(null,t)),B_(function(){(bt&6)===0&&nr()}),o=null;else{switch(Yf(u)){case 1:o=ft;break;case 4:o=ht;break;case 16:o=Ut;break;case 536870912:o=Gt;break;default:o=Ut}o=cp(o,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function tp(t,i){if(Za=-1,Qa=0,(bt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(bs()&&t.callbackNode!==o)return null;var u=vn(t,t===cn?_n:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Ja(t,u);else{i=u;var f=bt;bt|=2;var m=rp();(cn!==t||_n!==i)&&(Oi=null,Cs=Ve()+500,zr(t,i));do try{f0();break}catch(N){ip(t,N)}while(!0);Uu(),ja.current=m,bt=f,Kt!==null?i=0:(cn=null,_n=0,i=en)}if(i!==0){if(i===2&&(f=Cr(t),f!==0&&(u=f,i=gc(t,f))),i===1)throw o=ko,zr(t,0),ur(t,u),zn(t,Ve()),o;if(i===6)ur(t,u);else{if(f=t.current.alternate,(u&30)===0&&!u0(f)&&(i=Ja(t,u),i===2&&(m=Cr(t),m!==0&&(u=m,i=gc(t,m))),i===1))throw o=ko,zr(t,0),ur(t,u),zn(t,Ve()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:kr(t,On,Oi);break;case 3:if(ur(t,u),(u&130023424)===u&&(i=hc+500-Ve(),10<i)){if(vn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Mu(kr.bind(null,t,On,Oi),i);break}kr(t,On,Oi);break;case 4:if(ur(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var M=31-tt(u);m=1<<M,M=i[M],M>f&&(f=M),u&=~m}if(u=f,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*l0(u/1960))-u,10<u){t.timeoutHandle=Mu(kr.bind(null,t,On,Oi),u);break}kr(t,On,Oi);break;case 5:kr(t,On,Oi);break;default:throw Error(n(329))}}}return zn(t,Ve()),t.callbackNode===o?tp.bind(null,t):null}function gc(t,i){var o=Bo;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Ja(t,i),t!==2&&(i=On,On=o,i!==null&&_c(i)),t}function _c(t){On===null?On=t:On.push.apply(On,t)}function u0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!ai(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~dc,i&=~qa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-tt(i),u=1<<o;t[o]=-1,i&=~u}}function np(t){if((bt&6)!==0)throw Error(n(327));bs();var i=vn(t,0);if((i&1)===0)return zn(t,Ve()),null;var o=Ja(t,i);if(t.tag!==0&&o===2){var u=Cr(t);u!==0&&(i=u,o=gc(t,u))}if(o===1)throw o=ko,zr(t,0),ur(t,i),zn(t,Ve()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,On,Oi),zn(t,Ve()),null}function vc(t,i){var o=bt;bt|=1;try{return t(i)}finally{bt=o,bt===0&&(Cs=Ve()+500,Aa&&nr())}}function Or(t){ar!==null&&ar.tag===0&&(bt&6)===0&&bs();var i=bt;bt|=1;var o=ei.transition,u=It;try{if(ei.transition=null,It=1,t)return t()}finally{It=u,ei.transition=o,bt=i,(bt&6)===0&&nr()}}function xc(){jn=Rs.current,kt(Rs)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,k_(o)),Kt!==null)for(o=Kt.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ta();break;case 3:Ts(),kt(In),kt(xn),Hu();break;case 5:ku(u);break;case 4:Ts();break;case 13:kt(Xt);break;case 19:kt(Xt);break;case 10:Iu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(cn=t,Kt=t=cr(t.current,null),_n=jn=i,en=0,ko=null,dc=qa=Fr=0,On=Bo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,u.next=M}o.pending=u}Ur=null}return t}function ip(t,i){do{var o=Kt;try{if(Uu(),Fa.current=Ba,Oa){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Oa=!1}if(Nr=0,un=Jt=jt=null,Uo=!1,Io=0,fc.current=null,o===null||o.return===null){en=1,ko=i,Kt=null;break}e:{var m=t,M=o.return,N=o,H=i;if(i=_n,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,Te=N,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var We=Ch(M);if(We!==null){We.flags&=-257,bh(We,M,N,m,i),We.mode&1&&Rh(m,ue,i),i=We,H=ue;var Ye=i.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(H),i.updateQueue=Ke}else Ye.add(H);break e}else{if((i&1)===0){Rh(m,ue,i),yc();break e}H=Error(n(426))}}else if(Vt&&N.mode&1){var $t=Ch(M);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),bh($t,M,N,m,i),Pu(ws(H,N));break e}}m=H=ws(H,N),en!==4&&(en=2),Bo===null?Bo=[m]:Bo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Q=wh(m,H,i);Qd(m,Q);break e;case 1:N=H;var V=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(or===null||!or.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var be=Ah(m,N,i);Qd(m,be);break e}}m=m.return}while(m!==null)}op(o)}catch(Je){i=Je,Kt===o&&o!==null&&(Kt=o=o.return);continue}break}while(!0)}function rp(){var t=ja.current;return ja.current=Ba,t===null?Ba:t}function yc(){(en===0||en===3||en===2)&&(en=4),cn===null||(Fr&268435455)===0&&(qa&268435455)===0||ur(cn,_n)}function Ja(t,i){var o=bt;bt|=2;var u=rp();(cn!==t||_n!==i)&&(Oi=null,zr(t,i));do try{c0();break}catch(f){ip(t,f)}while(!0);if(Uu(),bt=o,ja.current=u,Kt!==null)throw Error(n(261));return cn=null,_n=0,en}function c0(){for(;Kt!==null;)sp(Kt)}function f0(){for(;Kt!==null&&!Qe();)sp(Kt)}function sp(t){var i=up(t.alternate,t,jn);t.memoizedProps=t.pendingProps,i===null?op(t):Kt=i,fc.current=null}function op(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=i0(o,i,jn),o!==null){Kt=o;return}}else{if(o=r0(o,i),o!==null){o.flags&=32767,Kt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);en===0&&(en=5)}function kr(t,i,o){var u=It,f=ei.transition;try{ei.transition=null,It=1,d0(t,i,o,u)}finally{ei.transition=f,It=u}return null}function d0(t,i,o,u){do bs();while(ar!==null);if((bt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(jg(t,m),t===cn&&(Kt=cn=null,_n=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||$a||($a=!0,cp(Ut,function(){return bs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var M=It;It=1;var N=bt;bt|=4,fc.current=null,o0(t,o),Kh(o,t),D_(yu),ca=!!xu,yu=xu=null,t.current=o,a0(o),at(),bt=N,It=M,ei.transition=m}else t.current=o;if($a&&($a=!1,ar=t,Ka=f),m=t.pendingLanes,m===0&&(or=null),Me(o.stateNode),zn(t,Ve()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Ya)throw Ya=!1,t=pc,pc=null,t;return(Ka&1)!==0&&t.tag!==0&&bs(),m=t.pendingLanes,(m&1)!==0?t===mc?Ho++:(Ho=0,mc=t):Ho=0,nr(),null}function bs(){if(ar!==null){var t=Yf(Ka),i=ei.transition,o=It;try{if(ei.transition=null,It=16>t?16:t,ar===null)var u=!1;else{if(t=ar,ar=null,Ka=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,je=t.current;je!==null;){var m=je,M=m.child;if((je.flags&16)!==0){var N=m.deletions;if(N!==null){for(var H=0;H<N.length;H++){var ue=N[H];for(je=ue;je!==null;){var Te=je;switch(Te.tag){case 0:case 11:case 15:zo(8,Te,m)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,je=Ae;else for(;je!==null;){Te=je;var Ee=Te.sibling,We=Te.return;if(Xh(Te),Te===ue){je=null;break}if(Ee!==null){Ee.return=We,je=Ee;break}je=We}}}var Ye=m.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var $t=Ke.sibling;Ke.sibling=null,Ke=$t}while(Ke!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,je=M;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:zo(9,m,m.return)}var Q=m.sibling;if(Q!==null){Q.return=m.return,je=Q;break e}je=m.return}}var V=t.current;for(je=V;je!==null;){M=je;var ie=M.child;if((M.subtreeFlags&2064)!==0&&ie!==null)ie.return=M,je=ie;else e:for(M=V;je!==null;){if(N=je,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Xa(9,N)}}catch(Je){qt(N,N.return,Je)}if(N===M){je=null;break e}var be=N.sibling;if(be!==null){be.return=N.return,je=be;break e}je=N.return}}if(bt=f,nr(),F&&typeof F.onPostCommitFiberRoot=="function")try{F.onPostCommitFiberRoot(mn,t)}catch{}u=!0}return u}finally{It=o,ei.transition=i}}return!1}function ap(t,i,o){i=ws(o,i),i=wh(t,i,1),t=rr(t,i,1),i=Cn(),t!==null&&(co(t,1,i),zn(t,i))}function qt(t,i,o){if(t.tag===3)ap(t,t,o);else for(;i!==null;){if(i.tag===3){ap(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){t=ws(o,t),t=Ah(i,t,1),i=rr(i,t,1),t=Cn(),i!==null&&(co(i,1,t),zn(i,t));break}}i=i.return}}function h0(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&o,cn===t&&(_n&o)===o&&(en===4||en===3&&(_n&130023424)===_n&&500>Ve()-hc?zr(t,0):dc|=o),zn(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gn,Gn<<=1,(Gn&130023424)===0&&(Gn=4194304)));var o=Cn();t=Ii(t,i),t!==null&&(co(t,i,o),zn(t,o))}function p0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),lp(t,o)}function m0(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),lp(t,o)}var up;up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Fn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Fn=!1,n0(t,i,o);Fn=(t.flags&131072)!==0}else Fn=!1,Vt&&(i.flags&1048576)!==0&&Gd(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(t,i),t=i.pendingProps;var f=_s(i,xn.current);Es(i,o),f=Wu(null,i,u,t,f,o);var m=Xu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(m=!0,wa(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ou(i),f.updater=Ha,i.stateNode=f,f._reactInternals=i,Zu(i,u,t,o),i=tc(null,i,u,!0,m,o)):(i.tag=0,Vt&&m&&Ru(i),Rn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=_0(u),t=ui(u,t),f){case 0:i=ec(null,i,u,t,o);break e;case 1:i=Nh(null,i,u,t,o);break e;case 11:i=Lh(null,i,u,t,o);break e;case 14:i=Ph(null,i,u,ui(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),ec(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),Nh(t,i,u,f,o);case 3:e:{if(Fh(i),t===null)throw Error(n(387));u=i.pendingProps,m=i.memoizedState,f=m.element,Zd(t,i),Ia(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ws(Error(n(423)),i),i=Oh(t,i,u,o,f);break e}else if(u!==f){f=ws(Error(n(424)),i),i=Oh(t,i,u,o,f);break e}else for(Xn=Ji(i.stateNode.containerInfo.firstChild),Wn=i,Vt=!0,li=null,o=$d(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ys(),u===f){i=Fi(t,i,o);break e}Rn(t,i,u,o)}i=i.child}return i;case 5:return eh(i),t===null&&Lu(i),u=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,M=f.children,Su(u,f)?M=null:m!==null&&Su(u,m)&&(i.flags|=32),Ih(t,i),Rn(t,i,M,o),i.child;case 6:return t===null&&Lu(i),null;case 13:return zh(t,i,o);case 4:return zu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Ss(i,null,u,o):Rn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),Lh(t,i,u,f,o);case 7:return Rn(t,i,i.pendingProps,o),i.child;case 8:return Rn(t,i,i.pendingProps.children,o),i.child;case 12:return Rn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,Ot(Pa,u._currentValue),u._currentValue=M,m!==null)if(ai(m.value,M)){if(m.children===f.children&&!In.current){i=Fi(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var H=N.firstContext;H!==null;){if(H.context===u){if(m.tag===1){H=Ni(-1,o&-o),H.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?H.next=H:(H.next=Te.next,Te.next=H),ue.pending=H}}m.lanes|=o,H=m.alternate,H!==null&&(H.lanes|=o),Nu(m.return,o,i),N.lanes|=o;break}H=H.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(n(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),Nu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Rn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Es(i,o),f=Qn(f),u=u(f),i.flags|=1,Rn(t,i,u,o),i.child;case 14:return u=i.type,f=ui(u,i.pendingProps),f=ui(u.type,f),Ph(t,i,u,f,o);case 15:return Dh(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),Va(t,i),i.tag=1,Nn(u)?(t=!0,wa(i)):t=!1,Es(i,o),Eh(i,u,f),Zu(i,u,f,o),tc(null,i,u,!0,t,o);case 19:return Bh(t,i,o);case 22:return Uh(t,i,o)}throw Error(n(156,i.tag))};function cp(t,i){return ae(t,i)}function g0(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,o,u){return new g0(t,i,o,u)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _0(t){if(typeof t=="function")return Sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===te)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=ti(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function el(t,i,o,u,f,m){var M=2;if(u=t,typeof t=="function")Sc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case D:return Br(o.children,f,m,i);case Y:M=8,f|=8;break;case _e:return t=ti(12,o,i,f|2),t.elementType=_e,t.lanes=m,t;case ee:return t=ti(13,o,i,f),t.elementType=ee,t.lanes=m,t;case B:return t=ti(19,o,i,f),t.elementType=B,t.lanes=m,t;case oe:return tl(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case U:M=9;break e;case le:M=11;break e;case te:M=14;break e;case J:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ti(M,o,i,f),i.elementType=t,i.type=u,i.lanes=m,i}function Br(t,i,o,u){return t=ti(7,t,u,i),t.lanes=o,t}function tl(t,i,o,u){return t=ti(22,t,u,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function Mc(t,i,o){return t=ti(6,t,null,i),t.lanes=o,t}function Ec(t,i,o){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function v0(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=as(0),this.expirationTimes=as(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tc(t,i,o,u,f,m,M,N,H){return t=new v0(t,i,o,N,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(m),t}function x0(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function fp(t){if(!t)return tr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Nn(o))return kd(t,o,i)}return i}function dp(t,i,o,u,f,m,M,N,H){return t=Tc(o,u,!0,t,f,m,M,N,H),t.context=fp(null),o=t.current,u=Cn(),f=lr(o),m=Ni(u,f),m.callback=i??null,rr(o,m,f),t.current.lanes=f,co(t,f,u),zn(t,u),t}function nl(t,i,o,u){var f=i.current,m=Cn(),M=lr(f);return o=fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(m,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=rr(f,i,M),t!==null&&(di(t,f,M,m),Ua(t,f,M)),M}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function wc(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function y0(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ac(t){this._internalRoot=t}rl.prototype.render=Ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));nl(t,i,null,null)},rl.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){nl(null,t,null,null)}),i[Li]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&ed(t)}};function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function S0(t,i,o,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var ue=il(M);m.call(ue)}}var M=dp(i,u,t,0,null,!1,!1,"",mp);return t._reactRootContainer=M,t[Li]=M.current,wo(t.nodeType===8?t.parentNode:t),Or(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var ue=il(H);N.call(ue)}}var H=Tc(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=H,t[Li]=H.current,wo(t.nodeType===8?t.parentNode:t),Or(function(){nl(i,H,o,u)}),H}function ol(t,i,o,u,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var N=f;f=function(){var H=il(M);N.call(H)}}nl(i,M,t,f)}else M=S0(o,i,t,f,u);return il(M)}$f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=At(i.pendingLanes);o!==0&&(Zl(i,o|1),zn(i,Ve()),(bt&6)===0&&(Cs=Ve()+500,nr()))}break;case 13:Or(function(){var u=Ii(t,1);if(u!==null){var f=Cn();di(u,t,1,f)}}),wc(t,1)}},Ql=function(t){if(t.tag===13){var i=Ii(t,134217728);if(i!==null){var o=Cn();di(i,t,134217728,o)}wc(t,134217728)}},Kf=function(t){if(t.tag===13){var i=lr(t),o=Ii(t,i);if(o!==null){var u=Cn();di(o,t,i,u)}wc(t,i)}},Zf=function(){return It},Qf=function(t,i){var o=It;try{return It=t,i()}finally{It=o}},Ge=function(t,i,o){switch(i){case"input":if(mt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=Ea(u);if(!f)throw Error(n(90));Z(u),mt(u,f)}}}break;case"textarea":ne(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},vt=vc,Lt=Or;var M0={usingClientEntryPoint:!1,Events:[Co,ms,Ea,De,ze,vc]},Go={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E0={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ce(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{mn=al.inject(E0),F=al}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0,kn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(i))throw Error(n(200));return x0(t,i,null,o)},kn.createRoot=function(t,i){if(!Rc(t))throw Error(n(299));var o=!1,u="",f=pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Tc(t,1,!1,null,null,o,!1,u,f),t[Li]=i.current,wo(t.nodeType===8?t.parentNode:t),new Ac(i)},kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ce(i),t=t===null?null:t.stateNode,t},kn.flushSync=function(t){return Or(t)},kn.hydrate=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!0,o)},kn.hydrateRoot=function(t,i,o){if(!Rc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,m="",M=pp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=dp(i,null,t,1,o??null,f,!1,m,M),t[Li]=i.current,wo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new rl(i)},kn.render=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!1,o)},kn.unmountComponentAtNode=function(t){if(!sl(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1},kn.unstable_batchedUpdates=vc,kn.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!sl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ol(t,i,o,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Ep;function D0(){if(Ep)return Lc.exports;Ep=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lc.exports=P0(),Lc.exports}var Tp;function U0(){if(Tp)return ll;Tp=1;var s=D0();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var I0=U0();const N0=cg(I0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="162",F0=0,wp=1,O0=2,fg=1,z0=2,Vi=3,Tr=0,Hn=1,ii=2,yr=0,eo=1,Ap=2,Rp=3,Cp=4,k0=5,Kr=100,B0=101,H0=102,bp=103,Lp=104,G0=200,V0=201,W0=202,X0=203,Ef=204,Tf=205,j0=206,q0=207,Y0=208,$0=209,K0=210,Z0=211,Q0=212,J0=213,ev=214,tv=0,nv=1,iv=2,zl=3,rv=4,sv=5,ov=6,av=7,Ff=0,lv=1,uv=2,Sr=0,cv=1,fv=2,dv=3,hv=4,pv=5,mv=6,gv=7,dg=300,no=301,io=302,wf=303,Af=304,jl=306,Rf=1e3,gi=1001,Cf=1002,Pn=1003,Pp=1004,Wo=1005,Bn=1006,Uc=1007,Qr=1008,Mr=1009,_v=1010,vv=1011,Of=1012,hg=1013,xr=1014,Wi=1015,na=1016,pg=1017,mg=1018,Jr=1020,xv=1021,_i=1023,yv=1024,Sv=1025,es=1026,ro=1027,Mv=1028,gg=1029,Ev=1030,_g=1031,vg=1033,Ic=33776,Nc=33777,Fc=33778,Oc=33779,Dp=35840,Up=35841,Ip=35842,Np=35843,xg=36196,Fp=37492,Op=37496,zp=37808,kp=37809,Bp=37810,Hp=37811,Gp=37812,Vp=37813,Wp=37814,Xp=37815,jp=37816,qp=37817,Yp=37818,$p=37819,Kp=37820,Zp=37821,zc=36492,Qp=36494,Jp=36495,Tv=36283,em=36284,tm=36285,nm=36286,wv=3200,Av=3201,zf=0,Rv=1,vr="",wi="srgb",Ar="srgb-linear",kf="display-p3",ql="display-p3-linear",kl="linear",Bt="srgb",Bl="rec709",Hl="p3",Ls=7680,im=519,Cv=512,bv=513,Lv=514,yg=515,Pv=516,Dv=517,Uv=518,Iv=519,bf=35044,rm="300 es",Lf=1035,Xi=2e3,Gl=2001;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Pf=180/Math.PI;function Er(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function wn(s,e,n){return Math.max(e,Math.min(n,s))}function Nv(s,e){return(s%e+e)%e}function Bc(s,e,n){return(1-n)*s+n*e}function sm(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,n,r,a,l,d,c,h,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,p)}set(e,n,r,a,l,d,c,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[3],h=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],A=a[0],x=a[3],v=a[6],P=a[1],R=a[4],b=a[7],z=a[2],O=a[5],D=a[8];return l[0]=d*A+c*P+h*z,l[3]=d*x+c*R+h*O,l[6]=d*v+c*b+h*D,l[1]=p*A+_*P+g*z,l[4]=p*x+_*R+g*O,l[7]=p*v+_*b+g*D,l[2]=y*A+S*P+E*z,l[5]=y*x+S*R+E*O,l[8]=y*v+S*b+E*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],p=e[7],_=e[8];return n*d*_-n*c*p-r*l*_+r*c*h+a*l*p-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=_*d-c*p,y=c*h-_*l,S=p*l-d*h,E=n*g+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(a*p-_*r)*A,e[2]=(c*r-a*d)*A,e[3]=y*A,e[4]=(_*n-a*h)*A,e[5]=(a*l-c*n)*A,e[6]=S*A,e[7]=(r*h-p*n)*A,e[8]=(d*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*d+p*c)+d+e,-a*p,a*h,-a*(-p*d+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new yt;function Sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fv(){const s=Vl("canvas");return s.style.display="block",s}const om={};function Mg(s){s in om||(om[s]=!0,console.warn(s))}const am=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lm=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Ar]:{transfer:kl,primaries:Bl,toReference:s=>s,fromReference:s=>s},[wi]:{transfer:Bt,primaries:Bl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ql]:{transfer:kl,primaries:Hl,toReference:s=>s.applyMatrix3(lm),fromReference:s=>s.applyMatrix3(am)},[kf]:{transfer:Bt,primaries:Hl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(lm),fromReference:s=>s.applyMatrix3(am).convertLinearToSRGB()}},Ov=new Set([Ar,ql]),Ft={enabled:!0,_workingColorSpace:Ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ov.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=ul[e].toReference,a=ul[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ul[s].primaries},getTransfer:function(s){return s===vr?kl:ul[s].transfer}};function to(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class Eg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Vl("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=to(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(to(n[r]/255)*255):n[r]=to(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zv=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?l.push(Vc(a[d].image)):l.push(Vc(a[d]))}else l=Vc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kv=0;class Dn extends oo{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=gi,a=gi,l=Bn,d=Qr,c=_i,h=Mr,p=Dn.DEFAULT_ANISOTROPY,_=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Er(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=dg;Dn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],y=h[1],S=h[5],E=h[9],A=h[2],x=h[6],v=h[10];if(Math.abs(_-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(p+1)/2,b=(S+1)/2,z=(v+1)/2,O=(_+y)/4,D=(g+A)/4,Y=(E+x)/4;return R>b&&R>z?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=O/r,l=D/r):b>z?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=O/a,l=Y/a):z<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),r=D/l,a=Y/l),this.set(r,a,l,n),this}let P=Math.sqrt((x-E)*(x-E)+(g-A)*(g-A)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(g-A)/P,this.z=(y-_)/P,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bv extends oo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let c=0;c<d;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Bv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class wg extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hv extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,c){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const y=l[d+0],S=l[d+1],E=l[d+2],A=l[d+3];if(c===0){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(c===1){e[n+0]=y,e[n+1]=S,e[n+2]=E,e[n+3]=A;return}if(g!==A||h!==y||p!==S||_!==E){let x=1-c;const v=h*y+p*S+_*E+g*A,P=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const z=Math.sqrt(R),O=Math.atan2(z,v*P);x=Math.sin(x*O)/z,c=Math.sin(c*O)/z}const b=c*P;if(h=h*x+y*b,p=p*x+S*b,_=_*x+E*b,g=g*x+A*b,x===1-c){const z=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=z,p*=z,_*=z,g*=z}}e[n]=h,e[n+1]=p,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,l,d){const c=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[d],y=l[d+1],S=l[d+2],E=l[d+3];return e[n]=c*E+_*g+h*S-p*y,e[n+1]=h*E+_*y+p*g-c*S,e[n+2]=p*E+_*S+c*y-h*g,e[n+3]=_*E-c*g-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,c=Math.cos,h=Math.sin,p=c(r/2),_=c(a/2),g=c(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(d){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],c=n[5],h=n[9],p=n[2],_=n[6],g=n[10],y=r+c+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(d-a)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+p)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-p)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(d-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,c=n._x,h=n._y,p=n._z,_=n._w;return this._x=r*_+d*c+a*p-l*h,this._y=a*_+d*h+l*c-r*p,this._z=l*_+d*p+r*h-a*c,this._w=d*_-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,c),g=Math.sin((1-n)*_)/p,y=Math.sin(n*_)/p;return this._w=d*g+this._w*y,this._x=r*g+this._x*y,this._y=a*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,c=e.z,h=e.w,p=2*(d*a-c*r),_=2*(c*n-l*a),g=2*(l*r-d*n);return this.x=n+h*p+d*g-c*_,this.y=r+h*_+c*p-l*g,this.z=a+h*g+l*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,c=n.y,h=n.z;return this.x=a*h-l*c,this.y=l*d-r*h,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new W,um=new ra;class sa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=l.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,hi):hi.fromBufferAttribute(l,d),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),fl.subVectors(this.max,Xo),Ds.subVectors(e.a,Xo),Us.subVectors(e.b,Xo),Is.subVectors(e.c,Xo),dr.subVectors(Us,Ds),hr.subVectors(Is,Us),Hr.subVectors(Ds,Is);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Hr.z,Hr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Hr.z,0,-Hr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Hr.y,Hr.x,0];return!Xc(n,Ds,Us,Is,fl)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,Ds,Us,Is,fl))?!1:(dl.crossVectors(dr,hr),n=[dl.x,dl.y,dl.z],Xc(n,Ds,Us,Is,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new W,new W,new W,new W,new W,new W,new W,new W],hi=new W,cl=new sa,Ds=new W,Us=new W,Is=new W,dr=new W,hr=new W,Hr=new W,Xo=new W,fl=new W,dl=new W,Gr=new W;function Xc(s,e,n,r,a){for(let l=0,d=s.length-3;l<=d;l+=3){Gr.fromArray(s,l);const c=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),p=n.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>c)return!1}return!0}const Gv=new sa,jo=new W,jc=new W;class Yl{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Gv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(jo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(jc)),this.expandByPoint(jo.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new W,qc=new W,hl=new W,pr=new W,Yc=new W,pl=new W,$c=new W;class Ag{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){qc.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(qc);const l=e.distanceTo(n)*.5,d=-this.direction.dot(hl),c=pr.dot(this.direction),h=-pr.dot(hl),p=pr.lengthSq(),_=Math.abs(1-d*d);let g,y,S,E;if(_>0)if(g=d*h-c,y=d*c-h,E=l*_,g>=0)if(y>=-E)if(y<=E){const A=1/_;g*=A,y*=A,S=g*(g+d*y+2*c)+y*(d*g+y+2*h)+p}else y=l,g=Math.max(0,-(d*y+c)),S=-g*g+y*(y+2*h)+p;else y=-l,g=Math.max(0,-(d*y+c)),S=-g*g+y*(y+2*h)+p;else y<=-E?(g=Math.max(0,-(-d*l+c)),y=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(g=Math.max(0,-(d*l+c)),y=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p);else y=d>0?-l:l,g=Math.max(0,-(d*y+c)),S=-g*g+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(qc).addScaledVector(hl,y),S}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),c=r-d,h=r+d;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,c,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),g>=0?(c=(e.min.z-y.z)*g,h=(e.max.z-y.z)*g):(c=(e.max.z-y.z)*g,h=(e.min.z-y.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,l){Yc.subVectors(n,e),pl.subVectors(r,e),$c.crossVectors(Yc,pl);let d=this.direction.dot($c),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;pr.subVectors(this.origin,e);const h=c*this.direction.dot(pl.crossVectors(pr,pl));if(h<0)return null;const p=c*this.direction.dot(Yc.cross(pr));if(p<0||h+p>d)return null;const _=-c*pr.dot($c);return _<0?null:this.at(_/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,l,d,c,h,p,_,g,y,S,E,A,x){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,p,_,g,y,S,E,A,x)}set(e,n,r,a,l,d,c,h,p,_,g,y,S,E,A,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=l,v[5]=d,v[9]=c,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=S,v[7]=E,v[11]=A,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),d=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=d*_,S=d*g,E=c*_,A=c*g;n[0]=h*_,n[4]=-h*g,n[8]=p,n[1]=S+E*p,n[5]=y-A*p,n[9]=-c*h,n[2]=A-y*p,n[6]=E+S*p,n[10]=d*h}else if(e.order==="YXZ"){const y=h*_,S=h*g,E=p*_,A=p*g;n[0]=y+A*c,n[4]=E*c-S,n[8]=d*p,n[1]=d*g,n[5]=d*_,n[9]=-c,n[2]=S*c-E,n[6]=A+y*c,n[10]=d*h}else if(e.order==="ZXY"){const y=h*_,S=h*g,E=p*_,A=p*g;n[0]=y-A*c,n[4]=-d*g,n[8]=E+S*c,n[1]=S+E*c,n[5]=d*_,n[9]=A-y*c,n[2]=-d*p,n[6]=c,n[10]=d*h}else if(e.order==="ZYX"){const y=d*_,S=d*g,E=c*_,A=c*g;n[0]=h*_,n[4]=E*p-S,n[8]=y*p+A,n[1]=h*g,n[5]=A*p+y,n[9]=S*p-E,n[2]=-p,n[6]=c*h,n[10]=d*h}else if(e.order==="YZX"){const y=d*h,S=d*p,E=c*h,A=c*p;n[0]=h*_,n[4]=A-y*g,n[8]=E*g+S,n[1]=g,n[5]=d*_,n[9]=-c*_,n[2]=-p*_,n[6]=S*g+E,n[10]=y-A*g}else if(e.order==="XZY"){const y=d*h,S=d*p,E=c*h,A=c*p;n[0]=h*_,n[4]=-g,n[8]=p*_,n[1]=y*g+A,n[5]=d*_,n[9]=S*g-E,n[2]=E*g-S,n[6]=c*_,n[10]=A*g+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vv,e,Wv)}lookAt(e,n,r){const a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),mr.crossVectors(r,qn),mr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),mr.crossVectors(r,qn)),mr.normalize(),ml.crossVectors(qn,mr),a[0]=mr.x,a[4]=ml.x,a[8]=qn.x,a[1]=mr.y,a[5]=ml.y,a[9]=qn.y,a[2]=mr.z,a[6]=ml.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[4],h=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],A=r[6],x=r[10],v=r[14],P=r[3],R=r[7],b=r[11],z=r[15],O=a[0],D=a[4],Y=a[8],_e=a[12],w=a[1],U=a[5],le=a[9],ee=a[13],B=a[2],te=a[6],J=a[10],oe=a[14],G=a[3],K=a[7],j=a[11],I=a[15];return l[0]=d*O+c*w+h*B+p*G,l[4]=d*D+c*U+h*te+p*K,l[8]=d*Y+c*le+h*J+p*j,l[12]=d*_e+c*ee+h*oe+p*I,l[1]=_*O+g*w+y*B+S*G,l[5]=_*D+g*U+y*te+S*K,l[9]=_*Y+g*le+y*J+S*j,l[13]=_*_e+g*ee+y*oe+S*I,l[2]=E*O+A*w+x*B+v*G,l[6]=E*D+A*U+x*te+v*K,l[10]=E*Y+A*le+x*J+v*j,l[14]=E*_e+A*ee+x*oe+v*I,l[3]=P*O+R*w+b*B+z*G,l[7]=P*D+R*U+b*te+z*K,l[11]=P*Y+R*le+b*J+z*j,l[15]=P*_e+R*ee+b*oe+z*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],c=e[5],h=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],A=e[7],x=e[11],v=e[15];return E*(+l*h*g-a*p*g-l*c*y+r*p*y+a*c*S-r*h*S)+A*(+n*h*S-n*p*y+l*d*y-a*d*S+a*p*_-l*h*_)+x*(+n*p*g-n*c*S-l*d*g+r*d*S+l*c*_-r*p*_)+v*(-a*c*_-n*h*g+n*c*y+a*d*g-r*d*y+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],A=e[13],x=e[14],v=e[15],P=g*x*p-A*y*p+A*h*S-c*x*S-g*h*v+c*y*v,R=E*y*p-_*x*p-E*h*S+d*x*S+_*h*v-d*y*v,b=_*A*p-E*g*p+E*c*S-d*A*S-_*c*v+d*g*v,z=E*g*h-_*A*h-E*c*y+d*A*y+_*c*x-d*g*x,O=n*P+r*R+a*b+l*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/O;return e[0]=P*D,e[1]=(A*y*l-g*x*l-A*a*S+r*x*S+g*a*v-r*y*v)*D,e[2]=(c*x*l-A*h*l+A*a*p-r*x*p-c*a*v+r*h*v)*D,e[3]=(g*h*l-c*y*l-g*a*p+r*y*p+c*a*S-r*h*S)*D,e[4]=R*D,e[5]=(_*x*l-E*y*l+E*a*S-n*x*S-_*a*v+n*y*v)*D,e[6]=(E*h*l-d*x*l-E*a*p+n*x*p+d*a*v-n*h*v)*D,e[7]=(d*y*l-_*h*l+_*a*p-n*y*p-d*a*S+n*h*S)*D,e[8]=b*D,e[9]=(E*g*l-_*A*l-E*r*S+n*A*S+_*r*v-n*g*v)*D,e[10]=(d*A*l-E*c*l+E*r*p-n*A*p-d*r*v+n*c*v)*D,e[11]=(_*c*l-d*g*l-_*r*p+n*g*p+d*r*S-n*c*S)*D,e[12]=z*D,e[13]=(_*A*a-E*g*a+E*r*y-n*A*y-_*r*x+n*g*x)*D,e[14]=(E*c*a-d*A*a-E*r*h+n*A*h+d*r*x-n*c*x)*D,e[15]=(d*g*a-_*c*a+_*r*h-n*g*h-d*r*y+n*c*y)*D,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,c=e.y,h=e.z,p=l*d,_=l*c;return this.set(p*d+r,p*c-a*h,p*h+a*c,0,p*c+a*h,_*c+r,_*h-a*d,0,p*h-a*c,_*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,c=n._z,h=n._w,p=l+l,_=d+d,g=c+c,y=l*p,S=l*_,E=l*g,A=d*_,x=d*g,v=c*g,P=h*p,R=h*_,b=h*g,z=r.x,O=r.y,D=r.z;return a[0]=(1-(A+v))*z,a[1]=(S+b)*z,a[2]=(E-R)*z,a[3]=0,a[4]=(S-b)*O,a[5]=(1-(y+v))*O,a[6]=(x+P)*O,a[7]=0,a[8]=(E+R)*D,a[9]=(x-P)*D,a[10]=(1-(y+A))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const d=Ns.set(a[4],a[5],a[6]).length(),c=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],pi.copy(this);const p=1/l,_=1/d,g=1/c;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,n.setFromRotationMatrix(pi),r.x=l,r.y=d,r.z=c,this}makePerspective(e,n,r,a,l,d,c=Xi){const h=this.elements,p=2*l/(n-e),_=2*l/(r-a),g=(n+e)/(n-e),y=(r+a)/(r-a);let S,E;if(c===Xi)S=-(d+l)/(d-l),E=-2*d*l/(d-l);else if(c===Gl)S=-d/(d-l),E=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,c=Xi){const h=this.elements,p=1/(n-e),_=1/(r-a),g=1/(d-l),y=(n+e)*p,S=(r+a)*_;let E,A;if(c===Xi)E=(d+l)*g,A=-2*g;else if(c===Gl)E=l*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new W,pi=new Ht,Vv=new W(0,0,0),Wv=new W(1,1,1),mr=new W,ml=new W,qn=new W,cm=new Ht,fm=new ra;class xi{constructor(e=0,n=0,r=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],c=a[8],h=a[1],p=a[5],_=a[9],g=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xv=0;const dm=new W,Fs=new ra,Bi=new Ht,gl=new W,qo=new W,jv=new W,qv=new ra,hm=new W(1,0,0),pm=new W(0,1,0),mm=new W(0,0,1),Yv={type:"added"},$v={type:"removed"},Kc={type:"childadded",child:null},Zc={type:"childremoved",child:null};class nn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new W,n=new xi,r=new ra,a=new W(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new yt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gl.copy(e):gl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(qo,gl,this.up):Bi.lookAt(gl,qo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yv),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($v),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const l=n[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(n){const c=d(e.geometries),h=d(e.materials),p=d(e.textures),_=d(e.images),g=d(e.shapes),y=d(e.skeletons),S=d(e.animations),E=d(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function d(c){const h=[];for(const p in c){const _=c[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}nn.DEFAULT_UP=new W(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new W,Hi=new W,Qc=new W,Gi=new W,Os=new W,zs=new W,gm=new W,Jc=new W,ef=new W,tf=new W;class vi{constructor(e=new W,n=new W,r=new W){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),mi.subVectors(e,n),a.cross(mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){mi.subVectors(a,n),Hi.subVectors(r,n),Qc.subVectors(e,n);const d=mi.dot(mi),c=mi.dot(Hi),h=mi.dot(Qc),p=Hi.dot(Hi),_=Hi.dot(Qc),g=d*p-c*c;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*h-c*_)*y,E=(d*_-c*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,r,a,l,d,c,h){return this.getBarycoord(e,n,r,a,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Gi.x),h.addScaledVector(d,Gi.y),h.addScaledVector(c,Gi.z),h)}static isFrontFacing(e,n,r,a){return mi.subVectors(r,n),Hi.subVectors(e,n),mi.cross(Hi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return vi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,c;Os.subVectors(a,r),zs.subVectors(l,r),Jc.subVectors(e,r);const h=Os.dot(Jc),p=zs.dot(Jc);if(h<=0&&p<=0)return n.copy(r);ef.subVectors(e,a);const _=Os.dot(ef),g=zs.dot(ef);if(_>=0&&g<=_)return n.copy(a);const y=h*g-_*p;if(y<=0&&h>=0&&_<=0)return d=h/(h-_),n.copy(r).addScaledVector(Os,d);tf.subVectors(e,l);const S=Os.dot(tf),E=zs.dot(tf);if(E>=0&&S<=E)return n.copy(l);const A=S*p-h*E;if(A<=0&&p>=0&&E<=0)return c=p/(p-E),n.copy(r).addScaledVector(zs,c);const x=_*E-S*g;if(x<=0&&g-_>=0&&S-E>=0)return gm.subVectors(l,a),c=(g-_)/(g-_+(S-E)),n.copy(a).addScaledVector(gm,c);const v=1/(x+A+y);return d=A*v,c=y*v,n.copy(r).addScaledVector(Os,d).addScaledVector(zs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function nf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ft.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ft.workingColorSpace){if(e=Nv(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=nf(d,l,e+1/3),this.g=nf(d,l,e),this.b=nf(d,l,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,n=wi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wi){const r=Cg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Ft.fromWorkingColorSpace(Tn.copy(this),e),Math.round(wn(Tn.r*255,0,255))*65536+Math.round(wn(Tn.g*255,0,255))*256+Math.round(wn(Tn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Tn.copy(this),n);const r=Tn.r,a=Tn.g,l=Tn.b,d=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const _=(c+d)/2;if(c===d)h=0,p=0;else{const g=d-c;switch(p=_<=.5?g/(d+c):g/(2-d-c),d){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=wi){Ft.fromWorkingColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,a=Tn.b;return e!==wi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(_l);const r=Bc(gr.h,_l.h,n),a=Bc(gr.s,_l.s,n),l=Bc(gr.l,_l.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new St;St.NAMES=Cg;let Kv=0;class Rr extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=eo,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ef&&(r.blendSrc=this.blendSrc),this.blendDst!==Tf&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const c in l){const h=l[c];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wl extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new W,vl=new gt;class ri{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ri(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bf&&(e.usage=this.usage),e}}class bg extends ri{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Lg extends ri{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Qt extends ri{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Zv=0;const ni=new Ht,rf=new nn,ks=new W,Yn=new sa,Yo=new sa,dn=new W;class hn extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Lg:bg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,r){return ni.makeTranslation(e,n,r),this.applyMatrix4(ni),this}scale(e,n,r){return ni.makeScale(e,n,r),this.applyMatrix4(ni),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];Yo.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Yn.min,Yo.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Yo.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Yo.min),Yn.expandByPoint(Yo.max))}Yn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)dn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(dn));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],h=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)dn.fromBufferAttribute(c,p),h&&(ks.fromBufferAttribute(e,p),dn.add(ks)),a=Math.max(a,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),c=[],h=[];for(let Y=0;Y<r.count;Y++)c[Y]=new W,h[Y]=new W;const p=new W,_=new W,g=new W,y=new gt,S=new gt,E=new gt,A=new W,x=new W;function v(Y,_e,w){p.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,_e),g.fromBufferAttribute(r,w),y.fromBufferAttribute(l,Y),S.fromBufferAttribute(l,_e),E.fromBufferAttribute(l,w),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(U),x.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(U),c[Y].add(A),c[_e].add(A),c[w].add(A),h[Y].add(x),h[_e].add(x),h[w].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Y=0,_e=P.length;Y<_e;++Y){const w=P[Y],U=w.start,le=w.count;for(let ee=U,B=U+le;ee<B;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new W,b=new W,z=new W,O=new W;function D(Y){z.fromBufferAttribute(a,Y),O.copy(z);const _e=c[Y];R.copy(_e),R.sub(z.multiplyScalar(z.dot(_e))).normalize(),b.crossVectors(O,_e);const U=b.dot(h[Y])<0?-1:1;d.setXYZW(Y,R.x,R.y,R.z,U)}for(let Y=0,_e=P.length;Y<_e;++Y){const w=P[Y],U=w.start,le=w.count;for(let ee=U,B=U+le;ee<B;ee+=3)D(e.getX(ee+0)),D(e.getX(ee+1)),D(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new W,l=new W,d=new W,c=new W,h=new W,p=new W,_=new W,g=new W;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,A),d.fromBufferAttribute(n,x),_.subVectors(d,l),g.subVectors(a,l),_.cross(g),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),c.add(_),h.add(_),p.add(_),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),_.subVectors(d,l),g.subVectors(a,l),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)dn.fromBufferAttribute(e,n),dn.normalize(),e.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,h){const p=c.array,_=c.itemSize,g=c.normalized,y=new p.constructor(h.length*_);let S=0,E=0;for(let A=0,x=h.length;A<x;A++){c.isInterleavedBufferAttribute?S=h[A]*c.data.stride+c.offset:S=h[A]*_;for(let v=0;v<_;v++)y[E++]=p[S++]}return new ri(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);n.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);h.push(S)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,h=d.length;c<h;c++){const p=d[c];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(n))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Ht,Vr=new Ag,xl=new Yl,vm=new W,Bs=new W,Hs=new W,Gs=new W,sf=new W,yl=new W,Sl=new gt,Ml=new gt,El=new gt,xm=new W,ym=new W,Sm=new W,Tl=new W,wl=new W;class tn extends nn{constructor(e=new hn,n=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){yl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=c[h],g=l[h];_!==0&&(sf.fromBufferAttribute(g,e),d?yl.addScaledVector(sf,_):yl.addScaledVector(sf.sub(n),_))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(xl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(xl,vm)===null||Vr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(_m.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const x=y[E],v=d[x.materialIndex],P=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let b=P,z=R;b<z;b+=3){const O=c.getX(b),D=c.getX(b+1),Y=c.getX(b+2);a=Al(this,v,e,r,p,_,g,O,D,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(c.count,S.start+S.count);for(let x=E,v=A;x<v;x+=3){const P=c.getX(x),R=c.getX(x+1),b=c.getX(x+2);a=Al(this,d,e,r,p,_,g,P,R,b),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const x=y[E],v=d[x.materialIndex],P=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let b=P,z=R;b<z;b+=3){const O=b,D=b+1,Y=b+2;a=Al(this,v,e,r,p,_,g,O,D,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let x=E,v=A;x<v;x+=3){const P=x,R=x+1,b=x+2;a=Al(this,d,e,r,p,_,g,P,R,b),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function Qv(s,e,n,r,a,l,d,c){let h;if(e.side===Hn?h=r.intersectTriangle(d,l,a,!0,c):h=r.intersectTriangle(a,l,d,e.side===Tr,c),h===null)return null;wl.copy(c),wl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(wl);return p<n.near||p>n.far?null:{distance:p,point:wl.clone(),object:s}}function Al(s,e,n,r,a,l,d,c,h,p){s.getVertexPosition(c,Bs),s.getVertexPosition(h,Hs),s.getVertexPosition(p,Gs);const _=Qv(s,e,n,r,Bs,Hs,Gs,Tl);if(_){a&&(Sl.fromBufferAttribute(a,c),Ml.fromBufferAttribute(a,h),El.fromBufferAttribute(a,p),_.uv=vi.getInterpolation(Tl,Bs,Hs,Gs,Sl,Ml,El,new gt)),l&&(Sl.fromBufferAttribute(l,c),Ml.fromBufferAttribute(l,h),El.fromBufferAttribute(l,p),_.uv1=vi.getInterpolation(Tl,Bs,Hs,Gs,Sl,Ml,El,new gt)),d&&(xm.fromBufferAttribute(d,c),ym.fromBufferAttribute(d,h),Sm.fromBufferAttribute(d,p),_.normal=vi.getInterpolation(Tl,Bs,Hs,Gs,xm,ym,Sm,new W),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:c,b:h,c:p,normal:new W,materialIndex:0};vi.getNormal(Bs,Hs,Gs,g.normal),_.face=g}return _}class ji extends hn{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const c=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,n,e,d,l,0),E("z","y","x",1,-1,r,n,-e,d,l,1),E("x","z","y",1,1,e,r,n,a,d,2),E("x","z","y",1,-1,e,r,-n,a,d,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2));function E(A,x,v,P,R,b,z,O,D,Y,_e){const w=b/D,U=z/Y,le=b/2,ee=z/2,B=O/2,te=D+1,J=Y+1;let oe=0,G=0;const K=new W;for(let j=0;j<J;j++){const I=j*U-ee;for(let q=0;q<te;q++){const Ce=q*w-le;K[A]=Ce*P,K[x]=I*R,K[v]=B,p.push(K.x,K.y,K.z),K[A]=0,K[x]=0,K[v]=O>0?1:-1,_.push(K.x,K.y,K.z),g.push(q/D),g.push(1-j/Y),oe+=1}}for(let j=0;j<Y;j++)for(let I=0;I<D;I++){const q=y+I+te*j,Ce=y+I+te*(j+1),X=y+(I+1)+te*(j+1),he=y+(I+1)+te*j;h.push(q,Ce,he),h.push(Ce,X,he),G+=6}c.addGroup(S,G,_e),S+=G,y+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=so(s[n]);for(const a in r)e[a]=r[a]}return e}function Jv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Pg(s){return s.getRenderTarget()===null?s.outputColorSpace:Ft.workingColorSpace}const ex={clone:so,merge:Ln};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Dg extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new W,Mm=new gt,Em=new gt;class $n extends Dg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,Em),n.subVectors(Em,Mm)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,p=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/p,a*=d.width/h,r*=d.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=-90,Ws=1;class ix extends nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Vs,Ws,e,n);a.layers=this.layers,this.add(a);const l=new $n(Vs,Ws,e,n);l.layers=this.layers,this.add(l);const d=new $n(Vs,Ws,e,n);d.layers=this.layers,this.add(d);const c=new $n(Vs,Ws,e,n);c.layers=this.layers,this.add(c);const h=new $n(Vs,Ws,e,n);h.layers=this.layers,this.add(h);const p=new $n(Vs,Ws,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,c,h]=n;for(const p of n)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,c,h,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,c),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ug extends Dn{constructor(e,n,r,a,l,d,c,h,p,_){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,r,a,l,d,c,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rx extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ug(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ji(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:yr});l.uniforms.tEquirect.value=n;const d=new tn(a,l),c=n.minFilter;return n.minFilter===Qr&&(n.minFilter=Bn),new ix(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}const of=new W,sx=new W,ox=new yt;class Yr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=of.subVectors(r,n).cross(sx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(of),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ox.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Yl,Rl=new W;class Bf{constructor(e=new Yr,n=new Yr,r=new Yr,a=new Yr,l=new Yr,d=new Yr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi){const r=this.planes,a=e.elements,l=a[0],d=a[1],c=a[2],h=a[3],p=a[4],_=a[5],g=a[6],y=a[7],S=a[8],E=a[9],A=a[10],x=a[11],v=a[12],P=a[13],R=a[14],b=a[15];if(r[0].setComponents(h-l,y-p,x-S,b-v).normalize(),r[1].setComponents(h+l,y+p,x+S,b+v).normalize(),r[2].setComponents(h+d,y+_,x+E,b+P).normalize(),r[3].setComponents(h-d,y-_,x-E,b-P).normalize(),r[4].setComponents(h-c,y-g,x-A,b-R).normalize(),n===Xi)r[5].setComponents(h+c,y+g,x+A,b+R).normalize();else if(n===Gl)r[5].setComponents(c,g,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ig(){let s=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function ax(s,e){const n=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,y=p.usage,S=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,y),p.onUploadCallback();let A;if(g instanceof Float32Array)A=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)A=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=s.SHORT;else if(g instanceof Uint32Array)A=s.UNSIGNED_INT;else if(g instanceof Int32Array)A=s.INT;else if(g instanceof Int8Array)A=s.BYTE;else if(g instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,_,g){const y=_.array,S=_._updateRange,E=_.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&E.length===0&&s.bufferSubData(g,0,y),E.length!==0){for(let A=0,x=E.length;A<x;A++){const v=E[A];n?s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}S.count!==-1&&(n?s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,a(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,_),g.version=p.version}}return{get:d,remove:c,update:h}}class oa extends hn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,c=Math.floor(r),h=Math.floor(a),p=c+1,_=h+1,g=e/c,y=n/h,S=[],E=[],A=[],x=[];for(let v=0;v<_;v++){const P=v*y-d;for(let R=0;R<p;R++){const b=R*g-l;E.push(b,-P,0),A.push(0,0,1),x.push(R/c),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let P=0;P<c;P++){const R=P+p*v,b=P+p*(v+1),z=P+1+p*(v+1),O=P+1+p*v;S.push(R,b,O),S.push(b,z,O)}this.setIndex(S),this.setAttribute("position",new Qt(E,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`
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
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ay=`struct PhysicalMaterial {
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
}`,ly=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vy=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qy=`float getShadowMask() {
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
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
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
}`,mS=`#if DEPTH_PACKING == 3200
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
}`,gS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,SS=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,PS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,NS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,kS=`uniform vec3 color;
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
}`,BS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:lx,alphahash_pars_fragment:ux,alphamap_fragment:cx,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:hx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Sx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Ax,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:bx,color_vertex:Lx,common:Px,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Ix,displacementmap_vertex:Nx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:zx,colorspace_pars_fragment:kx,envmap_fragment:Bx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:ty,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:jx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:$x,lightmap_fragment:Kx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:Jx,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:uy,lights_fragment_end:cy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:_y,map_particle_pars_fragment:vy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:by,normal_vertex:Ly,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Ny,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:zy,project_vertex:ky,dithering_fragment:By,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:jy,shadowmask_pars_fragment:qy,skinbase_vertex:Yy,skinning_pars_vertex:$y,skinning_vertex:Ky,skinnormal_vertex:Zy,specularmap_fragment:Qy,specularmap_pars_fragment:Jy,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:uS,backgroundCube_vert:cS,backgroundCube_frag:fS,cube_vert:dS,cube_frag:hS,depth_vert:pS,depth_frag:mS,distanceRGBA_vert:gS,distanceRGBA_frag:_S,equirect_vert:vS,equirect_frag:xS,linedashed_vert:yS,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:wS,meshmatcap_vert:AS,meshmatcap_frag:RS,meshnormal_vert:CS,meshnormal_frag:bS,meshphong_vert:LS,meshphong_frag:PS,meshphysical_vert:DS,meshphysical_frag:US,meshtoon_vert:IS,meshtoon_frag:NS,points_vert:FS,points_frag:OS,shadow_vert:zS,shadow_frag:kS,sprite_vert:BS,sprite_frag:HS},Fe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Ln([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Ln([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Ln([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Ln([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Ln([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Ln([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Ln([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Ln([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Ln([Fe.common,Fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Ln([Fe.lights,Fe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Cl={r:0,b:0,g:0},Xr=new xi,GS=new Ht;function VS(s,e,n,r,a,l,d){const c=new St(0);let h=l===!0?0:1,p,_,g=null,y=0,S=null;function E(x,v){let P=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?n:e).get(R)),R===null?A(c,h):R&&R.isColor&&(A(R,1),P=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,d):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===jl)?(_===void 0&&(_=new tn(new ji(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:so(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Xr.copy(v.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Xr)),_.material.toneMapped=Ft.getTransfer(R.colorSpace)!==Bt,(g!==R||y!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new tn(new oa(2,2),new wr({name:"BackgroundMaterial",uniforms:so(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Ft.getTransfer(R.colorSpace)!==Bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,v){x.getRGB(Cl,Pg(s)),r.buffers.color.setClear(Cl.r,Cl.g,Cl.b,v,d)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),h=v,A(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,A(c,h)},render:E}}function WS(s,e,n,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||l!==null,c={},h=x(null);let p=h,_=!1;function g(B,te,J,oe,G){let K=!1;if(d){const j=A(oe,J,te);p!==j&&(p=j,S(p.object)),K=v(B,oe,J,G),K&&P(B,oe,J,G)}else{const j=te.wireframe===!0;(p.geometry!==oe.id||p.program!==J.id||p.wireframe!==j)&&(p.geometry=oe.id,p.program=J.id,p.wireframe=j,K=!0)}G!==null&&n.update(G,s.ELEMENT_ARRAY_BUFFER),(K||_)&&(_=!1,Y(B,te,J,oe),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(G).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(B){return r.isWebGL2?s.bindVertexArray(B):l.bindVertexArrayOES(B)}function E(B){return r.isWebGL2?s.deleteVertexArray(B):l.deleteVertexArrayOES(B)}function A(B,te,J){const oe=J.wireframe===!0;let G=c[B.id];G===void 0&&(G={},c[B.id]=G);let K=G[te.id];K===void 0&&(K={},G[te.id]=K);let j=K[oe];return j===void 0&&(j=x(y()),K[oe]=j),j}function x(B){const te=[],J=[],oe=[];for(let G=0;G<a;G++)te[G]=0,J[G]=0,oe[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:J,attributeDivisors:oe,object:B,attributes:{},index:null}}function v(B,te,J,oe){const G=p.attributes,K=te.attributes;let j=0;const I=J.getAttributes();for(const q in I)if(I[q].location>=0){const X=G[q];let he=K[q];if(he===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),X===void 0||X.attribute!==he||he&&X.data!==he.data)return!0;j++}return p.attributesNum!==j||p.index!==oe}function P(B,te,J,oe){const G={},K=te.attributes;let j=0;const I=J.getAttributes();for(const q in I)if(I[q].location>=0){let X=K[q];X===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(X=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(X=B.instanceColor));const he={};he.attribute=X,X&&X.data&&(he.data=X.data),G[q]=he,j++}p.attributes=G,p.attributesNum=j,p.index=oe}function R(){const B=p.newAttributes;for(let te=0,J=B.length;te<J;te++)B[te]=0}function b(B){z(B,0)}function z(B,te){const J=p.newAttributes,oe=p.enabledAttributes,G=p.attributeDivisors;J[B]=1,oe[B]===0&&(s.enableVertexAttribArray(B),oe[B]=1),G[B]!==te&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,te),G[B]=te)}function O(){const B=p.newAttributes,te=p.enabledAttributes;for(let J=0,oe=te.length;J<oe;J++)te[J]!==B[J]&&(s.disableVertexAttribArray(J),te[J]=0)}function D(B,te,J,oe,G,K,j){j===!0?s.vertexAttribIPointer(B,te,J,G,K):s.vertexAttribPointer(B,te,J,oe,G,K)}function Y(B,te,J,oe){if(r.isWebGL2===!1&&(B.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const G=oe.attributes,K=J.getAttributes(),j=te.defaultAttributeValues;for(const I in K){const q=K[I];if(q.location>=0){let Ce=G[I];if(Ce===void 0&&(I==="instanceMatrix"&&B.instanceMatrix&&(Ce=B.instanceMatrix),I==="instanceColor"&&B.instanceColor&&(Ce=B.instanceColor)),Ce!==void 0){const X=Ce.normalized,he=Ce.itemSize,ye=n.get(Ce);if(ye===void 0)continue;const Oe=ye.buffer,Pe=ye.type,Re=ye.bytesPerElement,ct=r.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||Ce.gpuType===hg);if(Ce.isInterleavedBufferAttribute){const rt=Ce.data,Z=rt.stride,Dt=Ce.offset;if(rt.isInstancedInterleavedBuffer){for(let et=0;et<q.locationSize;et++)z(q.location+et,rt.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<q.locationSize;et++)b(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let et=0;et<q.locationSize;et++)D(q.location+et,he/q.locationSize,Pe,X,Z*Re,(Dt+he/q.locationSize*et)*Re,ct)}else{if(Ce.isInstancedBufferAttribute){for(let rt=0;rt<q.locationSize;rt++)z(q.location+rt,Ce.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let rt=0;rt<q.locationSize;rt++)b(q.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let rt=0;rt<q.locationSize;rt++)D(q.location+rt,he/q.locationSize,Pe,X,he*Re,he/q.locationSize*rt*Re,ct)}}else if(j!==void 0){const X=j[I];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(q.location,X);break;case 3:s.vertexAttrib3fv(q.location,X);break;case 4:s.vertexAttrib4fv(q.location,X);break;default:s.vertexAttrib1fv(q.location,X)}}}}O()}function _e(){le();for(const B in c){const te=c[B];for(const J in te){const oe=te[J];for(const G in oe)E(oe[G].object),delete oe[G];delete te[J]}delete c[B]}}function w(B){if(c[B.id]===void 0)return;const te=c[B.id];for(const J in te){const oe=te[J];for(const G in oe)E(oe[G].object),delete oe[G];delete te[J]}delete c[B.id]}function U(B){for(const te in c){const J=c[te];if(J[B.id]===void 0)continue;const oe=J[B.id];for(const G in oe)E(oe[G].object),delete oe[G];delete J[B.id]}}function le(){ee(),_=!0,p!==h&&(p=h,S(p.object))}function ee(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:le,resetDefaultState:ee,dispose:_e,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:b,disableUnusedAttributes:O}}function XS(s,e,n,r){const a=r.isWebGL2;let l;function d(_){l=_}function c(_,g){s.drawArrays(l,_,g),n.update(g,l,1)}function h(_,g,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,_,g,y),n.update(g,l,y)}function p(_,g,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(_[E],g[E]);else{S.multiDrawArraysWEBGL(l,_,0,g,0,y);let E=0;for(let A=0;A<y;A++)E+=g[A];n.update(E,l,1)}}this.setMode=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function jS(s,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=d||e.has("WEBGL_draw_buffers"),_=n.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,b=d||e.has("OES_texture_float"),z=R&&b,O=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:P,vertexTextures:R,floatFragmentTextures:b,floatVertexTextures:z,maxSamples:O}}function qS(s){const e=this;let n=null,r=0,a=!1,l=!1;const d=new Yr,c=new yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||a;return a=y,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){n=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,A=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!a||E===null||E.length===0||l&&!x)l?_(null):p();else{const P=l?0:r,R=P*4;let b=v.clippingState||null;h.value=b,b=_(E,y,R,S);for(let z=0;z!==R;++z)b[z]=n[z];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const A=g!==null?g.length:0;let x=null;if(A!==0){if(x=h.value,E!==!0||x===null){const v=S+A*4,P=y.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,b=S;R!==A;++R,b+=4)d.copy(g[R]).applyMatrix4(P,c),d.normal.toArray(x,b),x[b+3]=d.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function YS(s){let e=new WeakMap;function n(d,c){return c===wf?d.mapping=no:c===Af&&(d.mapping=io),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===wf||c===Af)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const p=new rx(h.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",a),n(p.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Ng extends Dg{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,c=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,Tm=[.125,.215,.35,.446,.526,.582],Zr=20,af=new Ng,wm=new St;let lf=null,uf=0,cf=0;const $r=(1+Math.sqrt(5))/2,Xs=1/$r,Am=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,$r,Xs),new W(0,$r,-Xs),new W(Xs,0,$r),new W(-Xs,0,$r),new W($r,Xs,0),new W(-$r,Xs,0)];class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:na,format:_i,colorSpace:Ar,depthBuffer:!1},a=Cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$S(l)),this._blurMaterial=KS(l,e,n)}return a}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,af)}_sceneToCubeUV(e,n,r,a){const c=new $n(90,1,n,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(wm),_.toneMapping=Sr,_.autoClear=!1;const S=new Wl({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),E=new tn(new ji,S);let A=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,A=!0):(S.color.copy(wm),A=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(c.up.set(0,h[v],0),c.lookAt(p[v],0,0)):P===1?(c.up.set(0,0,h[v]),c.lookAt(0,p[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,p[v]));const R=this._cubeSize;bl(a,P*R,v>2?R:0,R,R),_.setRenderTarget(a),A&&_.render(E,c),_.render(e,c)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===no||e.mapping===io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new tn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;bl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,af)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Am[(a-1)%Am.length];this._blur(e,a-1,a,l,d)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,c){const h=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new tn(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),A=l/E,x=isFinite(l)?1+Math.floor(_*A):Zr;x>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zr}`);const v=[];let P=0;for(let D=0;D<Zr;++D){const Y=D/A,_e=Math.exp(-Y*Y/2);v.push(_e),D===0?P+=_e:D<x&&(P+=2*_e)}for(let D=0;D<v.length;D++)v[D]=v[D]/P;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=d==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-r;const b=this._sizeLods[a],z=3*b*(a>R-Qs?a-R+Qs:0),O=4*(this._cubeSize-b);bl(n,z,O,3*b,2*b),h.setRenderTarget(n),h.render(g,af)}}function $S(s){const e=[],n=[],r=[];let a=s;const l=s-Qs+1+Tm.length;for(let d=0;d<l;d++){const c=Math.pow(2,a);n.push(c);let h=1/c;d>s-Qs?h=Tm[d-s+Qs-1]:d===0&&(h=0),r.push(h);const p=1/(c-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,A=3,x=2,v=1,P=new Float32Array(A*E*S),R=new Float32Array(x*E*S),b=new Float32Array(v*E*S);for(let O=0;O<S;O++){const D=O%3*2/3-1,Y=O>2?0:-1,_e=[D,Y,0,D+2/3,Y,0,D+2/3,Y+1,0,D,Y,0,D+2/3,Y+1,0,D,Y+1,0];P.set(_e,A*E*O),R.set(y,x*E*O);const w=[O,O,O,O,O,O];b.set(w,v*E*O)}const z=new hn;z.setAttribute("position",new ri(P,A)),z.setAttribute("uv",new ri(R,x)),z.setAttribute("faceIndex",new ri(b,v)),e.push(z),a>Qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Cm(s,e,n){const r=new ts(s,e,n);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function KS(s,e,n){const r=new Float32Array(Zr),a=new W(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Lm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function ZS(s){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===wf||h===Af,_=h===no||h===io;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return n===null&&(n=new Rm(s)),g=p?n.fromEquirectangular(c,g):n.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&a(g)){n===null&&(n=new Rm(s));const y=p?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function QS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function JS(s,e,n,r){const a={},l=new WeakMap;function d(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const A=y.morphAttributes[E];for(let x=0,v=A.length;x<v;x++)e.remove(A[x])}y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function c(g,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function h(g){const y=g.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const A=S[E];for(let x=0,v=A.length;x<v;x++)e.update(A[x],s.ARRAY_BUFFER)}}function p(g){const y=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let R=0,b=P.length;R<b;R+=3){const z=P[R+0],O=P[R+1],D=P[R+2];y.push(z,O,O,D,D,z)}}else if(E!==void 0){const P=E.array;A=E.version;for(let R=0,b=P.length/3-1;R<b;R+=3){const z=R+0,O=R+1,D=R+2;y.push(z,O,O,D,D,z)}}else return;const x=new(Sg(y)?Lg:bg)(y,1);x.version=A;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:c,update:h,getWireframeAttribute:_}}function eM(s,e,n,r){const a=r.isWebGL2;let l;function d(S){l=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function _(S,E){s.drawElements(l,E,c,S*h),n.update(E,l,1)}function g(S,E,A){if(A===0)return;let x,v;if(a)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](l,E,c,S*h,A),n.update(E,l,A)}function y(S,E,A){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<A;v++)this.render(S[v]/h,E[v]);else{x.multiDrawElementsWEBGL(l,E,0,c,S,0,A);let v=0;for(let P=0;P<A;P++)v+=E[P];n.update(v,l,1)}}this.setMode=d,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=y}function tM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,c){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=c*(l/3);break;case s.LINES:n.lines+=c*(l/2);break;case s.LINE_STRIP:n.lines+=c*(l-1);break;case s.LINE_LOOP:n.lines+=c*l;break;case s.POINTS:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function nM(s,e){return s[0]-e[0]}function iM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function rM(s,e,n){const r={},a=new Float32Array(8),l=new WeakMap,d=new Wt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,_,g){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,A=E!==void 0?E.length:0;let x=l.get(_);if(x===void 0||x.count!==A){let ee=function(){U.dispose(),l.delete(_),_.removeEventListener("dispose",ee)};var S=ee;x!==void 0&&x.texture.dispose();const v=_.morphAttributes.position!==void 0,P=_.morphAttributes.normal!==void 0,R=_.morphAttributes.color!==void 0,b=_.morphAttributes.position||[],z=_.morphAttributes.normal||[],O=_.morphAttributes.color||[];let D=0;v===!0&&(D=1),P===!0&&(D=2),R===!0&&(D=3);let Y=_.attributes.position.count*D,_e=1;Y>e.maxTextureSize&&(_e=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const w=new Float32Array(Y*_e*4*A),U=new wg(w,Y,_e,A);U.type=Wi,U.needsUpdate=!0;const le=D*4;for(let B=0;B<A;B++){const te=b[B],J=z[B],oe=O[B],G=Y*_e*4*B;for(let K=0;K<te.count;K++){const j=K*le;v===!0&&(d.fromBufferAttribute(te,K),w[G+j+0]=d.x,w[G+j+1]=d.y,w[G+j+2]=d.z,w[G+j+3]=0),P===!0&&(d.fromBufferAttribute(J,K),w[G+j+4]=d.x,w[G+j+5]=d.y,w[G+j+6]=d.z,w[G+j+7]=0),R===!0&&(d.fromBufferAttribute(oe,K),w[G+j+8]=d.x,w[G+j+9]=d.y,w[G+j+10]=d.z,w[G+j+11]=oe.itemSize===4?d.w:1)}}x={count:A,texture:U,size:new gt(Y,_e)},l.set(_,x),_.addEventListener("dispose",ee)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,n);else{let v=0;for(let R=0;R<y.length;R++)v+=y[R];const P=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",P),g.getUniforms().setValue(s,"morphTargetInfluences",y)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let A=r[_.id];if(A===void 0||A.length!==E){A=[];for(let b=0;b<E;b++)A[b]=[b,0];r[_.id]=A}for(let b=0;b<E;b++){const z=A[b];z[0]=b,z[1]=y[b]}A.sort(iM);for(let b=0;b<8;b++)b<E&&A[b][1]?(c[b][0]=A[b][0],c[b][1]=A[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(nM);const x=_.morphAttributes.position,v=_.morphAttributes.normal;let P=0;for(let b=0;b<8;b++){const z=c[b],O=z[0],D=z[1];O!==Number.MAX_SAFE_INTEGER&&D?(x&&_.getAttribute("morphTarget"+b)!==x[O]&&_.setAttribute("morphTarget"+b,x[O]),v&&_.getAttribute("morphNormal"+b)!==v[O]&&_.setAttribute("morphNormal"+b,v[O]),a[b]=D,P+=D):(x&&_.hasAttribute("morphTarget"+b)===!0&&_.deleteAttribute("morphTarget"+b),v&&_.hasAttribute("morphNormal"+b)===!0&&_.deleteAttribute("morphNormal"+b),a[b]=0)}const R=_.morphTargetsRelative?1:1-P;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function sM(s,e,n,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return g}function d(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:d}}class Fg extends Dn{constructor(e,n,r,a,l,d,c,h,p,_){if(_=_!==void 0?_:es,_!==es&&_!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===es&&(r=xr),r===void 0&&_===ro&&(r=Jr),super(null,a,l,d,c,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Pn,this.minFilter=h!==void 0?h:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Og=new Dn,zg=new Fg(1,1);zg.compareFunction=yg;const kg=new wg,Bg=new Hv,Hg=new Ug,Pm=[],Dm=[],Um=new Float32Array(16),Im=new Float32Array(9),Nm=new Float32Array(4);function ao(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Pm[a];if(l===void 0&&(l=new Float32Array(a),Pm[a]=l),e!==0){r.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,s[d].toArray(l,c)}return l}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function $l(s,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function cM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),sn(n,r)}}function fM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),sn(n,r)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),sn(n,r)}}function hM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function _M(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function SM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?zg:Og;n.setTexture2D(e||l,a)}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Bg,a)}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Hg,a)}function TM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||kg,a)}function wM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return uM;case 35674:return cM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return hM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}function AM(s,e){s.uniform1fv(this.addr,e)}function RM(s,e){const n=ao(e,this.size,2);s.uniform2fv(this.addr,n)}function CM(s,e){const n=ao(e,this.size,3);s.uniform3fv(this.addr,n)}function bM(s,e){const n=ao(e,this.size,4);s.uniform4fv(this.addr,n)}function LM(s,e){const n=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function PM(s,e){const n=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function DM(s,e){const n=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function UM(s,e){s.uniform1iv(this.addr,e)}function IM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function FM(s,e){s.uniform4iv(this.addr,e)}function OM(s,e){s.uniform1uiv(this.addr,e)}function zM(s,e){s.uniform2uiv(this.addr,e)}function kM(s,e){s.uniform3uiv(this.addr,e)}function BM(s,e){s.uniform4uiv(this.addr,e)}function HM(s,e,n){const r=this.cache,a=e.length,l=$l(n,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Og,l[d])}function GM(s,e,n){const r=this.cache,a=e.length,l=$l(n,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Bg,l[d])}function VM(s,e,n){const r=this.cache,a=e.length,l=$l(n,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Hg,l[d])}function WM(s,e,n){const r=this.cache,a=e.length,l=$l(n,a);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||kg,l[d])}function XM(s){switch(s){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return bM;case 35674:return LM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return UM;case 35667:case 35671:return IM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return zM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}class jM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wM(n.type)}}class qM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XM(n.type)}}class YM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const c=a[l];c.setValue(e,n[c.id],r)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function $M(s,e,n){const r=s.name,a=r.length;for(ff.lastIndex=0;;){const l=ff.exec(r),d=ff.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&d+2===a){Fm(n,p===void 0?new jM(c,s,e):new qM(c,s,e));break}else{let g=n.map[c];g===void 0&&(g=new YM(c),Fm(n,g)),n=g}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);$M(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const c=n[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Om(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const KM=37297;let ZM=0;function QM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function JM(s){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(s);let r;switch(e===n?r="":e===Hl&&n===Bl?r="LinearDisplayP3ToLinearSRGB":e===Bl&&n===Hl&&(r="LinearSRGBToLinearDisplayP3"),s){case Ar:case ql:return[r,"LinearTransferOETF"];case wi:case kf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function zm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+QM(s.getShaderSource(e),d)}else return a}function eE(s,e){const n=JM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tE(s,e){let n;switch(e){case cv:n="Linear";break;case fv:n="Reinhard";break;case dv:n="OptimizedCineon";break;case hv:n="ACESFilmic";break;case mv:n="AgX";break;case gv:n="Neutral";break;case pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function iE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function rE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),d=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:c}}return n}function Js(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(s){return s.replace(oE,lE)}const aE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lE(s,e){let n=xt[e];if(n===void 0){const r=aE.get(e);if(r!==void 0)n=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uf(n)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(uE,cE)}function cE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function fE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function dE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function pE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case uv:e="ENVMAP_BLENDING_ADD";break}return e}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gE(s,e,n,r){const a=s.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const h=fE(n),p=dE(n),_=hE(n),g=pE(n),y=mE(n),S=n.isWebGL2?"":nE(n),E=iE(n),A=rE(l),x=a.createProgram();let v,P,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Js).join(`
`),v.length>0&&(v+=`
`),P=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Js).join(`
`),P.length>0&&(P+=`
`)):(v=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),P=[S,Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?xt.tonemapping_pars_fragment:"",n.toneMapping!==Sr?tE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,eE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),d=Uf(d),d=km(d,n),d=Bm(d,n),c=Uf(c),c=km(c,n),c=Bm(c,n),d=Hm(d),c=Hm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,P=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const b=R+v+d,z=R+P+c,O=Om(a,a.VERTEX_SHADER,b),D=Om(a,a.FRAGMENT_SHADER,z);a.attachShader(x,O),a.attachShader(x,D),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function Y(le){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(x).trim(),B=a.getShaderInfoLog(O).trim(),te=a.getShaderInfoLog(D).trim();let J=!0,oe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,O,D);else{const G=zm(a,O,"vertex"),K=zm(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+ee+`
`+G+`
`+K)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(B===""||te==="")&&(oe=!1);oe&&(le.diagnostics={runnable:J,programLog:ee,vertexShader:{log:B,prefix:v},fragmentShader:{log:te,prefix:P}})}a.deleteShader(O),a.deleteShader(D),_e=new Fl(a,x),w=sE(a,x)}let _e;this.getUniforms=function(){return _e===void 0&&Y(this),_e};let w;this.getAttributes=function(){return w===void 0&&Y(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(x,KM)),U},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=D,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xE(e),n.set(e,r)),r}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function yE(s,e,n,r,a,l,d){const c=new Rg,h=new vE,p=new Set,_=[],g=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return p.add(w),w===0?"uv":`uv${w}`}function v(w,U,le,ee,B){const te=ee.fog,J=B.geometry,oe=w.isMeshStandardMaterial?ee.environment:null,G=(w.isMeshStandardMaterial?n:e).get(w.envMap||oe),K=G&&G.mapping===jl?G.image.height:null,j=A[w.type];w.precision!==null&&(E=a.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const I=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,q=I!==void 0?I.length:0;let Ce=0;J.morphAttributes.position!==void 0&&(Ce=1),J.morphAttributes.normal!==void 0&&(Ce=2),J.morphAttributes.color!==void 0&&(Ce=3);let X,he,ye,Oe;if(j){const Lt=Ai[j];X=Lt.vertexShader,he=Lt.fragmentShader}else X=w.vertexShader,he=w.fragmentShader,h.update(w),ye=h.getVertexShaderID(w),Oe=h.getFragmentShaderID(w);const Pe=s.getRenderTarget(),Re=B.isInstancedMesh===!0,ct=B.isBatchedMesh===!0,rt=!!w.map,Z=!!w.matcap,Dt=!!G,et=!!w.aoMap,ke=!!w.lightMap,Be=!!w.bumpMap,mt=!!w.normalMap,nt=!!w.displacementMap,dt=!!w.emissiveMap,st=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,de=w.clearcoat>0,ne=w.iridescence>0,ge=w.sheen>0,me=w.transmission>0,Ue=T&&!!w.anisotropyMap,Ie=de&&!!w.clearcoatMap,xe=de&&!!w.clearcoatNormalMap,Se=de&&!!w.clearcoatRoughnessMap,Ze=ne&&!!w.iridescenceMap,we=ne&&!!w.iridescenceThicknessMap,Et=ge&&!!w.sheenColorMap,ot=ge&&!!w.sheenRoughnessMap,$e=!!w.specularMap,qe=!!w.specularColorMap,Ne=!!w.specularIntensityMap,it=me&&!!w.transmissionMap,Xe=me&&!!w.thicknessMap,Ge=!!w.gradientMap,k=!!w.alphaMap,ve=w.alphaTest>0,se=!!w.alphaHash,De=!!w.extensions;let ze=Sr;w.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ze=s.toneMapping);const vt={isWebGL2:g,shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:X,fragmentShader:he,defines:w.defines,customVertexShaderID:ye,customFragmentShaderID:Oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:ct,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Z,envMap:Dt,envMapMode:Dt&&G.mapping,envMapCubeUVHeight:K,aoMap:et,lightMap:ke,bumpMap:Be,normalMap:mt,displacementMap:S&&nt,emissiveMap:dt,normalMapObjectSpace:mt&&w.normalMapType===Rv,normalMapTangentSpace:mt&&w.normalMapType===zf,metalnessMap:st,roughnessMap:L,anisotropy:T,anisotropyMap:Ue,clearcoat:de,clearcoatMap:Ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,iridescence:ne,iridescenceMap:Ze,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Et,sheenRoughnessMap:ot,specularMap:$e,specularColorMap:qe,specularIntensityMap:Ne,transmission:me,transmissionMap:it,thicknessMap:Xe,gradientMap:Ge,opaque:w.transparent===!1&&w.blending===eo&&w.alphaToCoverage===!1,alphaMap:k,alphaTest:ve,alphaHash:se,combine:w.combine,mapUv:rt&&x(w.map.channel),aoMapUv:et&&x(w.aoMap.channel),lightMapUv:ke&&x(w.lightMap.channel),bumpMapUv:Be&&x(w.bumpMap.channel),normalMapUv:mt&&x(w.normalMap.channel),displacementMapUv:nt&&x(w.displacementMap.channel),emissiveMapUv:dt&&x(w.emissiveMap.channel),metalnessMapUv:st&&x(w.metalnessMap.channel),roughnessMapUv:L&&x(w.roughnessMap.channel),anisotropyMapUv:Ue&&x(w.anisotropyMap.channel),clearcoatMapUv:Ie&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:we&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ot&&x(w.sheenRoughnessMap.channel),specularMapUv:$e&&x(w.specularMap.channel),specularColorMapUv:qe&&x(w.specularColorMap.channel),specularIntensityMapUv:Ne&&x(w.specularIntensityMap.channel),transmissionMapUv:it&&x(w.transmissionMap.channel),thicknessMapUv:Xe&&x(w.thicknessMap.channel),alphaMapUv:k&&x(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(mt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(rt||k),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Ce,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&le.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Ft.getTransfer(w.map.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ii,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:De&&w.extensions.derivatives===!0,extensionFragDepth:De&&w.extensions.fragDepth===!0,extensionDrawBuffers:De&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:De&&w.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=p.has(1),vt.vertexUv2s=p.has(2),vt.vertexUv3s=p.has(3),p.clear(),vt}function P(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const le in w.defines)U.push(le),U.push(w.defines[le]);return w.isRawShaderMaterial===!1&&(R(U,w),b(U,w),U.push(s.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function R(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function b(w,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),w.push(c.mask)}function z(w){const U=A[w.type];let le;if(U){const ee=Ai[U];le=ex.clone(ee.uniforms)}else le=w.uniforms;return le}function O(w,U){let le;for(let ee=0,B=_.length;ee<B;ee++){const te=_[ee];if(te.cacheKey===U){le=te,++le.usedTimes;break}}return le===void 0&&(le=new gE(s,U,w,l),_.push(le)),le}function D(w){if(--w.usedTimes===0){const U=_.indexOf(w);_[U]=_[_.length-1],_.pop(),w.destroy()}}function Y(w){h.remove(w)}function _e(){h.dispose()}return{getParameters:v,getProgramCacheKey:P,getUniforms:z,acquireProgram:O,releaseProgram:D,releaseShaderCache:Y,programs:_,dispose:_e}}function SE(){let s=new WeakMap;function e(l){let d=s.get(l);return d===void 0&&(d={},s.set(l,d)),d}function n(l){s.delete(l)}function r(l,d,c){s.get(l)[d]=c}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(g,y,S,E,A,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=A,v.group=x),e++,v}function c(g,y,S,E,A,x){const v=d(g,y,S,E,A,x);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function h(g,y,S,E,A,x){const v=d(g,y,S,E,A,x);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function p(g,y){n.length>1&&n.sort(g||ME),r.length>1&&r.sort(y||Vm),a.length>1&&a.sort(y||Vm)}function _(){for(let g=e,y=s.length;g<y;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:_,sort:p}}function EE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let d;return l===void 0?(d=new Wm,s.set(r,[d])):a>=l.length?(d=new Wm,l.push(d)):d=l[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new St};break;case"SpotLight":n={position:new W,direction:new W,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=n,n}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AE=0;function RE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s,e){const n=new TE,r=wE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new W);const l=new W,d=new Ht,c=new Ht;function h(_,g){let y=0,S=0,E=0;for(let le=0;le<9;le++)a.probe[le].set(0,0,0);let A=0,x=0,v=0,P=0,R=0,b=0,z=0,O=0,D=0,Y=0,_e=0;_.sort(RE);const w=g===!0?Math.PI:1;for(let le=0,ee=_.length;le<ee;le++){const B=_[le],te=B.color,J=B.intensity,oe=B.distance,G=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)y+=te.r*J*w,S+=te.g*J*w,E+=te.b*J*w;else if(B.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(B.sh.coefficients[K],J);_e++}else if(B.isDirectionalLight){const K=n.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity*w),B.castShadow){const j=B.shadow,I=r.get(B);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,a.directionalShadow[A]=I,a.directionalShadowMap[A]=G,a.directionalShadowMatrix[A]=B.shadow.matrix,b++}a.directional[A]=K,A++}else if(B.isSpotLight){const K=n.get(B);K.position.setFromMatrixPosition(B.matrixWorld),K.color.copy(te).multiplyScalar(J*w),K.distance=oe,K.coneCos=Math.cos(B.angle),K.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),K.decay=B.decay,a.spot[v]=K;const j=B.shadow;if(B.map&&(a.spotLightMap[D]=B.map,D++,j.updateMatrices(B),B.castShadow&&Y++),a.spotLightMatrix[v]=j.matrix,B.castShadow){const I=r.get(B);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,a.spotShadow[v]=I,a.spotShadowMap[v]=G,O++}v++}else if(B.isRectAreaLight){const K=n.get(B);K.color.copy(te).multiplyScalar(J),K.halfWidth.set(B.width*.5,0,0),K.halfHeight.set(0,B.height*.5,0),a.rectArea[P]=K,P++}else if(B.isPointLight){const K=n.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity*w),K.distance=B.distance,K.decay=B.decay,B.castShadow){const j=B.shadow,I=r.get(B);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,a.pointShadow[x]=I,a.pointShadowMap[x]=G,a.pointShadowMatrix[x]=B.shadow.matrix,z++}a.point[x]=K,x++}else if(B.isHemisphereLight){const K=n.get(B);K.skyColor.copy(B.color).multiplyScalar(J*w),K.groundColor.copy(B.groundColor).multiplyScalar(J*w),a.hemi[R]=K,R++}}P>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const U=a.hash;(U.directionalLength!==A||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==P||U.hemiLength!==R||U.numDirectionalShadows!==b||U.numPointShadows!==z||U.numSpotShadows!==O||U.numSpotMaps!==D||U.numLightProbes!==_e)&&(a.directional.length=A,a.spot.length=v,a.rectArea.length=P,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=O+D-Y,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=Y,a.numLightProbes=_e,U.directionalLength=A,U.pointLength=x,U.spotLength=v,U.rectAreaLength=P,U.hemiLength=R,U.numDirectionalShadows=b,U.numPointShadows=z,U.numSpotShadows=O,U.numSpotMaps=D,U.numLightProbes=_e,a.version=AE++)}function p(_,g){let y=0,S=0,E=0,A=0,x=0;const v=g.matrixWorldInverse;for(let P=0,R=_.length;P<R;P++){const b=_[P];if(b.isDirectionalLight){const z=a.directional[y];z.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(v),y++}else if(b.isSpotLight){const z=a.spot[E];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(v),z.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(v),E++}else if(b.isRectAreaLight){const z=a.rectArea[A];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(v),c.identity(),d.copy(b.matrixWorld),d.premultiply(v),c.extractRotation(d),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const z=a.point[S];z.position.setFromMatrixPosition(b.matrixWorld),z.position.applyMatrix4(v),S++}else if(b.isHemisphereLight){const z=a.hemi[x];z.direction.setFromMatrixPosition(b.matrixWorld),z.direction.transformDirection(v),x++}}}return{setup:h,setupView:p,state:a}}function Xm(s,e){const n=new CE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function d(g){r.push(g)}function c(g){a.push(g)}function h(g){n.setup(r,g)}function p(g){n.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:p,pushLight:d,pushShadow:c}}function bE(s,e){let n=new WeakMap;function r(l,d=0){const c=n.get(l);let h;return c===void 0?(h=new Xm(s,e),n.set(l,[h])):d>=c.length?(h=new Xm(s,e),c.push(h)):h=c[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class LE extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PE extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
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
}`;function IE(s,e,n){let r=new Bf;const a=new gt,l=new gt,d=new Wt,c=new LE({depthPacking:Av}),h=new PE,p={},_=n.maxTextureSize,g={[Tr]:Hn,[Hn]:Tr,[ii]:ii},y=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:DE,fragmentShader:UE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new hn;E.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new tn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let v=this.type;this.render=function(O,D,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const _e=s.getRenderTarget(),w=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),le=s.state;le.setBlending(yr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=v!==Vi&&this.type===Vi,B=v===Vi&&this.type!==Vi;for(let te=0,J=O.length;te<J;te++){const oe=O[te],G=oe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const K=G.getFrameExtents();if(a.multiply(K),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/K.x),a.x=l.x*K.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/K.y),a.y=l.y*K.y,G.mapSize.y=l.y)),G.map===null||ee===!0||B===!0){const I=this.type!==Vi?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new ts(a.x,a.y,I),G.map.texture.name=oe.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const j=G.getViewportCount();for(let I=0;I<j;I++){const q=G.getViewport(I);d.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),le.viewport(d),G.updateMatrices(oe,I),r=G.getFrustum(),b(D,Y,G.camera,oe,this.type)}G.isPointLightShadow!==!0&&this.type===Vi&&P(G,Y),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(_e,w,U)};function P(O,D){const Y=e.update(A);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ts(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(D,null,Y,y,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(D,null,Y,S,A,null)}function R(O,D,Y,_e){let w=null;const U=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(U!==void 0)w=U;else if(w=Y.isPointLight===!0?h:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const le=w.uuid,ee=D.uuid;let B=p[le];B===void 0&&(B={},p[le]=B);let te=B[ee];te===void 0&&(te=w.clone(),B[ee]=te,D.addEventListener("dispose",z)),w=te}if(w.visible=D.visible,w.wireframe=D.wireframe,_e===Vi?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:g[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=s.properties.get(w);le.light=Y}return w}function b(O,D,Y,_e,w){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Vi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),B=O.material;if(Array.isArray(B)){const te=ee.groups;for(let J=0,oe=te.length;J<oe;J++){const G=te[J],K=B[G.materialIndex];if(K&&K.visible){const j=R(O,K,_e,w);O.onBeforeShadow(s,O,D,Y,ee,j,G),s.renderBufferDirect(Y,null,ee,j,O,G),O.onAfterShadow(s,O,D,Y,ee,j,G)}}}else if(B.visible){const te=R(O,B,_e,w);O.onBeforeShadow(s,O,D,Y,ee,te,null),s.renderBufferDirect(Y,null,ee,te,O,null),O.onAfterShadow(s,O,D,Y,ee,te,null)}}const le=O.children;for(let ee=0,B=le.length;ee<B;ee++)b(le[ee],D,Y,_e,w)}function z(O){O.target.removeEventListener("dispose",z);for(const Y in p){const _e=p[Y],w=O.target.uuid;w in _e&&(_e[w].dispose(),delete _e[w])}}}function NE(s,e,n){const r=n.isWebGL2;function a(){let k=!1;const ve=new Wt;let se=null;const De=new Wt(0,0,0,0);return{setMask:function(ze){se!==ze&&!k&&(s.colorMask(ze,ze,ze,ze),se=ze)},setLocked:function(ze){k=ze},setClear:function(ze,vt,Lt,Rt,pn){pn===!0&&(ze*=Rt,vt*=Rt,Lt*=Rt),ve.set(ze,vt,Lt,Rt),De.equals(ve)===!1&&(s.clearColor(ze,vt,Lt,Rt),De.copy(ve))},reset:function(){k=!1,se=null,De.set(-1,0,0,0)}}}function l(){let k=!1,ve=null,se=null,De=null;return{setTest:function(ze){ze?Re(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(ze){ve!==ze&&!k&&(s.depthMask(ze),ve=ze)},setFunc:function(ze){if(se!==ze){switch(ze){case tv:s.depthFunc(s.NEVER);break;case nv:s.depthFunc(s.ALWAYS);break;case iv:s.depthFunc(s.LESS);break;case zl:s.depthFunc(s.LEQUAL);break;case rv:s.depthFunc(s.EQUAL);break;case sv:s.depthFunc(s.GEQUAL);break;case ov:s.depthFunc(s.GREATER);break;case av:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ze}},setLocked:function(ze){k=ze},setClear:function(ze){De!==ze&&(s.clearDepth(ze),De=ze)},reset:function(){k=!1,ve=null,se=null,De=null}}}function d(){let k=!1,ve=null,se=null,De=null,ze=null,vt=null,Lt=null,Rt=null,pn=null;return{setTest:function(Ct){k||(Ct?Re(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(Ct){ve!==Ct&&!k&&(s.stencilMask(Ct),ve=Ct)},setFunc:function(Ct,Yt,on){(se!==Ct||De!==Yt||ze!==on)&&(s.stencilFunc(Ct,Yt,on),se=Ct,De=Yt,ze=on)},setOp:function(Ct,Yt,on){(vt!==Ct||Lt!==Yt||Rt!==on)&&(s.stencilOp(Ct,Yt,on),vt=Ct,Lt=Yt,Rt=on)},setLocked:function(Ct){k=Ct},setClear:function(Ct){pn!==Ct&&(s.clearStencil(Ct),pn=Ct)},reset:function(){k=!1,ve=null,se=null,De=null,ze=null,vt=null,Lt=null,Rt=null,pn=null}}}const c=new a,h=new l,p=new d,_=new WeakMap,g=new WeakMap;let y={},S={},E=new WeakMap,A=[],x=null,v=!1,P=null,R=null,b=null,z=null,O=null,D=null,Y=null,_e=new St(0,0,0),w=0,U=!1,le=null,ee=null,B=null,te=null,J=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=K>=2);let I=null,q={};const Ce=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),he=new Wt().fromArray(Ce),ye=new Wt().fromArray(X);function Oe(k,ve,se,De){const ze=new Uint8Array(4),vt=s.createTexture();s.bindTexture(k,vt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<se;Lt++)r&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(ve,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(ve+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return vt}const Pe={};Pe[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Pe[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Re(s.DEPTH_TEST),h.setFunc(zl),nt(!1),dt(wp),Re(s.CULL_FACE),Be(yr);function Re(k){y[k]!==!0&&(s.enable(k),y[k]=!0)}function ct(k){y[k]!==!1&&(s.disable(k),y[k]=!1)}function rt(k,ve){return S[k]!==ve?(s.bindFramebuffer(k,ve),S[k]=ve,r&&(k===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=ve),k===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=ve)),!0):!1}function Z(k,ve){let se=A,De=!1;if(k){se=E.get(ve),se===void 0&&(se=[],E.set(ve,se));const ze=k.textures;if(se.length!==ze.length||se[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Lt=ze.length;vt<Lt;vt++)se[vt]=s.COLOR_ATTACHMENT0+vt;se.length=ze.length,De=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,De=!0);if(De)if(n.isWebGL2)s.drawBuffers(se);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Dt(k){return x!==k?(s.useProgram(k),x=k,!0):!1}const et={[Kr]:s.FUNC_ADD,[B0]:s.FUNC_SUBTRACT,[H0]:s.FUNC_REVERSE_SUBTRACT};if(r)et[bp]=s.MIN,et[Lp]=s.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(et[bp]=k.MIN_EXT,et[Lp]=k.MAX_EXT)}const ke={[G0]:s.ZERO,[V0]:s.ONE,[W0]:s.SRC_COLOR,[Ef]:s.SRC_ALPHA,[K0]:s.SRC_ALPHA_SATURATE,[Y0]:s.DST_COLOR,[j0]:s.DST_ALPHA,[X0]:s.ONE_MINUS_SRC_COLOR,[Tf]:s.ONE_MINUS_SRC_ALPHA,[$0]:s.ONE_MINUS_DST_COLOR,[q0]:s.ONE_MINUS_DST_ALPHA,[Z0]:s.CONSTANT_COLOR,[Q0]:s.ONE_MINUS_CONSTANT_COLOR,[J0]:s.CONSTANT_ALPHA,[ev]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(k,ve,se,De,ze,vt,Lt,Rt,pn,Ct){if(k===yr){v===!0&&(ct(s.BLEND),v=!1);return}if(v===!1&&(Re(s.BLEND),v=!0),k!==k0){if(k!==P||Ct!==U){if((R!==Kr||O!==Kr)&&(s.blendEquation(s.FUNC_ADD),R=Kr,O=Kr),Ct)switch(k){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.ONE,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,z=null,D=null,Y=null,_e.set(0,0,0),w=0,P=k,U=Ct}return}ze=ze||ve,vt=vt||se,Lt=Lt||De,(ve!==R||ze!==O)&&(s.blendEquationSeparate(et[ve],et[ze]),R=ve,O=ze),(se!==b||De!==z||vt!==D||Lt!==Y)&&(s.blendFuncSeparate(ke[se],ke[De],ke[vt],ke[Lt]),b=se,z=De,D=vt,Y=Lt),(Rt.equals(_e)===!1||pn!==w)&&(s.blendColor(Rt.r,Rt.g,Rt.b,pn),_e.copy(Rt),w=pn),P=k,U=!1}function mt(k,ve){k.side===ii?ct(s.CULL_FACE):Re(s.CULL_FACE);let se=k.side===Hn;ve&&(se=!se),nt(se),k.blending===eo&&k.transparent===!1?Be(yr):Be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;p.setTest(De),De&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),L(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){le!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),le=k)}function dt(k){k!==F0?(Re(s.CULL_FACE),k!==ee&&(k===wp?s.cullFace(s.BACK):k===O0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),ee=k}function st(k){k!==B&&(G&&s.lineWidth(k),B=k)}function L(k,ve,se){k?(Re(s.POLYGON_OFFSET_FILL),(te!==ve||J!==se)&&(s.polygonOffset(ve,se),te=ve,J=se)):ct(s.POLYGON_OFFSET_FILL)}function T(k){k?Re(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function de(k){k===void 0&&(k=s.TEXTURE0+oe-1),I!==k&&(s.activeTexture(k),I=k)}function ne(k,ve,se){se===void 0&&(I===null?se=s.TEXTURE0+oe-1:se=I);let De=q[se];De===void 0&&(De={type:void 0,texture:void 0},q[se]=De),(De.type!==k||De.texture!==ve)&&(I!==se&&(s.activeTexture(se),I=se),s.bindTexture(k,ve||Pe[k]),De.type=k,De.texture=ve)}function ge(){const k=q[I];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(k){he.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),he.copy(k))}function Ne(k){ye.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),ye.copy(k))}function it(k,ve){let se=g.get(ve);se===void 0&&(se=new WeakMap,g.set(ve,se));let De=se.get(k);De===void 0&&(De=s.getUniformBlockIndex(ve,k.name),se.set(k,De))}function Xe(k,ve){const De=g.get(ve).get(k);_.get(ve)!==De&&(s.uniformBlockBinding(ve,De,k.__bindingPointIndex),_.set(ve,De))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},I=null,q={},S={},E=new WeakMap,A=[],x=null,v=!1,P=null,R=null,b=null,z=null,O=null,D=null,Y=null,_e=new St(0,0,0),w=0,U=!1,le=null,ee=null,B=null,te=null,J=null,he.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Re,disable:ct,bindFramebuffer:rt,drawBuffers:Z,useProgram:Dt,setBlending:Be,setMaterial:mt,setFlipSided:nt,setCullFace:dt,setLineWidth:st,setPolygonOffset:L,setScissorTest:T,activeTexture:de,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:me,compressedTexImage3D:Ue,texImage2D:ot,texImage3D:$e,updateUBOMapping:it,uniformBlockBinding:Xe,texStorage2D:we,texStorage3D:Et,texSubImage2D:Ie,texSubImage3D:xe,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ze,scissor:qe,viewport:Ne,reset:Ge}}function FE(s,e,n,r,a,l,d){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new gt,g=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return E?new OffscreenCanvas(L,T):Vl("canvas")}function x(L,T,de,ne){let ge=1;const me=st(L);if((me.width>ne||me.height>ne)&&(ge=ne/Math.max(me.width,me.height)),ge<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ue=T?Df:Math.floor,Ie=Ue(ge*me.width),xe=Ue(ge*me.height);y===void 0&&(y=A(Ie,xe));const Se=de?A(Ie,xe):y;return Se.width=Ie,Se.height=xe,Se.getContext("2d").drawImage(L,0,0,Ie,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ie+"x"+xe+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function v(L){const T=st(L);return sm(T.width)&&sm(T.height)}function P(L){return c?!1:L.wrapS!==gi||L.wrapT!==gi||L.minFilter!==Pn&&L.minFilter!==Bn}function R(L,T){return L.generateMipmaps&&T&&L.minFilter!==Pn&&L.minFilter!==Bn}function b(L){s.generateMipmap(L)}function z(L,T,de,ne,ge=!1){if(c===!1)return T;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=T;if(T===s.RED&&(de===s.FLOAT&&(me=s.R32F),de===s.HALF_FLOAT&&(me=s.R16F),de===s.UNSIGNED_BYTE&&(me=s.R8)),T===s.RED_INTEGER&&(de===s.UNSIGNED_BYTE&&(me=s.R8UI),de===s.UNSIGNED_SHORT&&(me=s.R16UI),de===s.UNSIGNED_INT&&(me=s.R32UI),de===s.BYTE&&(me=s.R8I),de===s.SHORT&&(me=s.R16I),de===s.INT&&(me=s.R32I)),T===s.RG&&(de===s.FLOAT&&(me=s.RG32F),de===s.HALF_FLOAT&&(me=s.RG16F),de===s.UNSIGNED_BYTE&&(me=s.RG8)),T===s.RG_INTEGER&&(de===s.UNSIGNED_BYTE&&(me=s.RG8UI),de===s.UNSIGNED_SHORT&&(me=s.RG16UI),de===s.UNSIGNED_INT&&(me=s.RG32UI),de===s.BYTE&&(me=s.RG8I),de===s.SHORT&&(me=s.RG16I),de===s.INT&&(me=s.RG32I)),T===s.RGBA){const Ue=ge?kl:Ft.getTransfer(ne);de===s.FLOAT&&(me=s.RGBA32F),de===s.HALF_FLOAT&&(me=s.RGBA16F),de===s.UNSIGNED_BYTE&&(me=Ue===Bt?s.SRGB8_ALPHA8:s.RGBA8),de===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),de===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(L,T,de){return R(L,de)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function D(L){return L===Pn||L===Pp||L===Wo?s.NEAREST:s.LINEAR}function Y(L){const T=L.target;T.removeEventListener("dispose",Y),w(T),T.isVideoTexture&&g.delete(T)}function _e(L){const T=L.target;T.removeEventListener("dispose",_e),le(T)}function w(L){const T=r.get(L);if(T.__webglInit===void 0)return;const de=L.source,ne=S.get(de);if(ne){const ge=ne[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&U(L),Object.keys(ne).length===0&&S.delete(de)}r.remove(L)}function U(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const de=L.source,ne=S.get(de);delete ne[T.__cacheKey],d.memory.textures--}function le(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let ge=0;ge<T.__webglFramebuffer[ne].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ne][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)s.deleteFramebuffer(T.__webglFramebuffer[ne]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const de=L.textures;for(let ne=0,ge=de.length;ne<ge;ne++){const me=r.get(de[ne]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),d.memory.textures--),r.remove(de[ne])}r.remove(L)}let ee=0;function B(){ee=0}function te(){const L=ee;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),ee+=1,L}function J(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function oe(L,T){const de=r.get(L);if(L.isVideoTexture&&nt(L),L.isRenderTargetTexture===!1&&L.version>0&&de.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(de,L,T);return}}n.bindTexture(s.TEXTURE_2D,de.__webglTexture,s.TEXTURE0+T)}function G(L,T){const de=r.get(L);if(L.version>0&&de.__version!==L.version){ye(de,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,de.__webglTexture,s.TEXTURE0+T)}function K(L,T){const de=r.get(L);if(L.version>0&&de.__version!==L.version){ye(de,L,T);return}n.bindTexture(s.TEXTURE_3D,de.__webglTexture,s.TEXTURE0+T)}function j(L,T){const de=r.get(L);if(L.version>0&&de.__version!==L.version){Oe(de,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture,s.TEXTURE0+T)}const I={[Rf]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Cf]:s.MIRRORED_REPEAT},q={[Pn]:s.NEAREST,[Pp]:s.NEAREST_MIPMAP_NEAREST,[Wo]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Uc]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},Ce={[Cv]:s.NEVER,[Iv]:s.ALWAYS,[bv]:s.LESS,[yg]:s.LEQUAL,[Lv]:s.EQUAL,[Uv]:s.GEQUAL,[Pv]:s.GREATER,[Dv]:s.NOTEQUAL};function X(L,T,de){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Uc||T.magFilter===Wo||T.magFilter===Qr||T.minFilter===Bn||T.minFilter===Uc||T.minFilter===Wo||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),de?(s.texParameteri(L,s.TEXTURE_WRAP_S,I[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,I[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,I[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,q[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,q[T.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==gi||T.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,D(T.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,D(T.minFilter)),T.minFilter!==Pn&&T.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==Wo&&T.minFilter!==Qr||T.type===Wi&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===na&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function he(L,T){let de=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",Y));const ne=T.source;let ge=S.get(ne);ge===void 0&&(ge={},S.set(ne,ge));const me=J(T);if(me!==L.__cacheKey){ge[me]===void 0&&(ge[me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,de=!0),ge[me].usedTimes++;const Ue=ge[L.__cacheKey];Ue!==void 0&&(ge[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&U(T)),L.__cacheKey=me,L.__webglTexture=ge[me].texture}return de}function ye(L,T,de){let ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=s.TEXTURE_3D);const ge=he(L,T),me=T.source;n.bindTexture(ne,L.__webglTexture,s.TEXTURE0+de);const Ue=r.get(me);if(me.version!==Ue.__version||ge===!0){n.activeTexture(s.TEXTURE0+de);const Ie=Ft.getPrimaries(Ft.workingColorSpace),xe=T.colorSpace===vr?null:Ft.getPrimaries(T.colorSpace),Se=T.colorSpace===vr||Ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ze=P(T)&&v(T.image)===!1;let we=x(T.image,Ze,!1,a.maxTextureSize);we=dt(T,we);const Et=v(we)||c,ot=l.convert(T.format,T.colorSpace);let $e=l.convert(T.type),qe=z(T.internalFormat,ot,$e,T.colorSpace,T.isVideoTexture);X(ne,T,Et);let Ne;const it=T.mipmaps,Xe=c&&T.isVideoTexture!==!0&&qe!==xg,Ge=Ue.__version===void 0||ge===!0,k=me.dataReady,ve=O(T,we,Et);if(T.isDepthTexture)qe=s.DEPTH_COMPONENT,c?T.type===Wi?qe=s.DEPTH_COMPONENT32F:T.type===xr?qe=s.DEPTH_COMPONENT24:T.type===Jr?qe=s.DEPTH24_STENCIL8:qe=s.DEPTH_COMPONENT16:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===es&&qe===s.DEPTH_COMPONENT&&T.type!==Of&&T.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xr,$e=l.convert(T.type)),T.format===ro&&qe===s.DEPTH_COMPONENT&&(qe=s.DEPTH_STENCIL,T.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Jr,$e=l.convert(T.type))),Ge&&(Xe?n.texStorage2D(s.TEXTURE_2D,1,qe,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,qe,we.width,we.height,0,ot,$e,null));else if(T.isDataTexture)if(it.length>0&&Et){Xe&&Ge&&n.texStorage2D(s.TEXTURE_2D,ve,qe,it[0].width,it[0].height);for(let se=0,De=it.length;se<De;se++)Ne=it[se],Xe?k&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Ne.width,Ne.height,ot,$e,Ne.data):n.texImage2D(s.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,ot,$e,Ne.data);T.generateMipmaps=!1}else Xe?(Ge&&n.texStorage2D(s.TEXTURE_2D,ve,qe,we.width,we.height),k&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,ot,$e,we.data)):n.texImage2D(s.TEXTURE_2D,0,qe,we.width,we.height,0,ot,$e,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&Ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ve,qe,it[0].width,it[0].height,we.depth);for(let se=0,De=it.length;se<De;se++)Ne=it[se],T.format!==_i?ot!==null?Xe?k&&n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Ne.width,Ne.height,we.depth,ot,Ne.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,qe,Ne.width,Ne.height,we.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?k&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Ne.width,Ne.height,we.depth,ot,$e,Ne.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,qe,Ne.width,Ne.height,we.depth,0,ot,$e,Ne.data)}else{Xe&&Ge&&n.texStorage2D(s.TEXTURE_2D,ve,qe,it[0].width,it[0].height);for(let se=0,De=it.length;se<De;se++)Ne=it[se],T.format!==_i?ot!==null?Xe?k&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Ne.width,Ne.height,ot,Ne.data):n.compressedTexImage2D(s.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?k&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Ne.width,Ne.height,ot,$e,Ne.data):n.texImage2D(s.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,ot,$e,Ne.data)}else if(T.isDataArrayTexture)Xe?(Ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ve,qe,we.width,we.height,we.depth),k&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ot,$e,we.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,we.width,we.height,we.depth,0,ot,$e,we.data);else if(T.isData3DTexture)Xe?(Ge&&n.texStorage3D(s.TEXTURE_3D,ve,qe,we.width,we.height,we.depth),k&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ot,$e,we.data)):n.texImage3D(s.TEXTURE_3D,0,qe,we.width,we.height,we.depth,0,ot,$e,we.data);else if(T.isFramebufferTexture){if(Ge)if(Xe)n.texStorage2D(s.TEXTURE_2D,ve,qe,we.width,we.height);else{let se=we.width,De=we.height;for(let ze=0;ze<ve;ze++)n.texImage2D(s.TEXTURE_2D,ze,qe,se,De,0,ot,$e,null),se>>=1,De>>=1}}else if(it.length>0&&Et){if(Xe&&Ge){const se=st(it[0]);n.texStorage2D(s.TEXTURE_2D,ve,qe,se.width,se.height)}for(let se=0,De=it.length;se<De;se++)Ne=it[se],Xe?k&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ot,$e,Ne):n.texImage2D(s.TEXTURE_2D,se,qe,ot,$e,Ne);T.generateMipmaps=!1}else if(Xe){if(Ge){const se=st(we);n.texStorage2D(s.TEXTURE_2D,ve,qe,se.width,se.height)}k&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,$e,we)}else n.texImage2D(s.TEXTURE_2D,0,qe,ot,$e,we);R(T,Et)&&b(ne),Ue.__version=me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Oe(L,T,de){if(T.image.length!==6)return;const ne=he(L,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+de);const me=r.get(ge);if(ge.version!==me.__version||ne===!0){n.activeTexture(s.TEXTURE0+de);const Ue=Ft.getPrimaries(Ft.workingColorSpace),Ie=T.colorSpace===vr?null:Ft.getPrimaries(T.colorSpace),xe=T.colorSpace===vr||Ue===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,Ze=T.image[0]&&T.image[0].isDataTexture,we=[];for(let se=0;se<6;se++)!Se&&!Ze?we[se]=x(T.image[se],!1,!0,a.maxCubemapSize):we[se]=Ze?T.image[se].image:T.image[se],we[se]=dt(T,we[se]);const Et=we[0],ot=v(Et)||c,$e=l.convert(T.format,T.colorSpace),qe=l.convert(T.type),Ne=z(T.internalFormat,$e,qe,T.colorSpace),it=c&&T.isVideoTexture!==!0,Xe=me.__version===void 0||ne===!0,Ge=ge.dataReady;let k=O(T,Et,ot);X(s.TEXTURE_CUBE_MAP,T,ot);let ve;if(Se){it&&Xe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,k,Ne,Et.width,Et.height);for(let se=0;se<6;se++){ve=we[se].mipmaps;for(let De=0;De<ve.length;De++){const ze=ve[De];T.format!==_i?$e!==null?it?Ge&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,ze.width,ze.height,$e,ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Ne,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,ze.width,ze.height,$e,qe,ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Ne,ze.width,ze.height,0,$e,qe,ze.data)}}}else{if(ve=T.mipmaps,it&&Xe){ve.length>0&&k++;const se=st(we[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,k,Ne,se.width,se.height)}for(let se=0;se<6;se++)if(Ze){it?Ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we[se].width,we[se].height,$e,qe,we[se].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,we[se].width,we[se].height,0,$e,qe,we[se].data);for(let De=0;De<ve.length;De++){const vt=ve[De].image[se].image;it?Ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,vt.width,vt.height,$e,qe,vt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Ne,vt.width,vt.height,0,$e,qe,vt.data)}}else{it?Ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$e,qe,we[se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,$e,qe,we[se]);for(let De=0;De<ve.length;De++){const ze=ve[De];it?Ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,$e,qe,ze.image[se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Ne,$e,qe,ze.image[se])}}}R(T,ot)&&b(s.TEXTURE_CUBE_MAP),me.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Pe(L,T,de,ne,ge,me){const Ue=l.convert(de.format,de.colorSpace),Ie=l.convert(de.type),xe=z(de.internalFormat,Ue,Ie,de.colorSpace);if(!r.get(T).__hasExternalTextures){const Ze=Math.max(1,T.width>>me),we=Math.max(1,T.height>>me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,me,xe,Ze,we,T.depth,0,Ue,Ie,null):n.texImage2D(ge,me,xe,Ze,we,0,Ue,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ge,r.get(de).__webglTexture,0,Be(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ge,r.get(de).__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(L,T,de){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let ne=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(de||mt(T)){const ge=T.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Wi?ne=s.DEPTH_COMPONENT32F:ge.type===xr&&(ne=s.DEPTH_COMPONENT24));const me=Be(T);mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,ne,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,me,ne,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const ne=Be(T);de&&mt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,T.width,T.height):mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const ne=T.textures;for(let ge=0;ge<ne.length;ge++){const me=ne[ge],Ue=l.convert(me.format,me.colorSpace),Ie=l.convert(me.type),xe=z(me.internalFormat,Ue,Ie,me.colorSpace),Se=Be(T);de&&mt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,xe,T.width,T.height):mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const ne=r.get(T.depthTexture).__webglTexture,ge=Be(T);if(T.depthTexture.format===es)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(T.depthTexture.format===ro)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function rt(L){const T=r.get(L),de=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(de)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,L)}else if(de){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=s.createRenderbuffer(),Re(T.__webglDepthbuffer[ne],L,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Re(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(L,T,de){const ne=r.get(L);T!==void 0&&Pe(ne.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),de!==void 0&&rt(L)}function Dt(L){const T=L.texture,de=r.get(L),ne=r.get(T);L.addEventListener("dispose",_e);const ge=L.textures,me=L.isWebGLCubeRenderTarget===!0,Ue=ge.length>1,Ie=v(L)||c;if(Ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=T.version,d.memory.textures++),me){de.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(c&&T.mipmaps&&T.mipmaps.length>0){de.__webglFramebuffer[xe]=[];for(let Se=0;Se<T.mipmaps.length;Se++)de.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else de.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){de.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)de.__webglFramebuffer[xe]=s.createFramebuffer()}else de.__webglFramebuffer=s.createFramebuffer();if(Ue)if(a.drawBuffers)for(let xe=0,Se=ge.length;xe<Se;xe++){const Ze=r.get(ge[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),d.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&mt(L)===!1){de.__webglMultisampledFramebuffer=s.createFramebuffer(),de.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const Se=ge[xe];de.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const Ze=l.convert(Se.format,Se.colorSpace),we=l.convert(Se.type),Et=z(Se.internalFormat,Ze,we,Se.colorSpace,L.isXRRenderTarget===!0),ot=Be(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Et,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,de.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(de.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(de.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),X(s.TEXTURE_CUBE_MAP,T,Ie);for(let xe=0;xe<6;xe++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Pe(de.__webglFramebuffer[xe][Se],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else Pe(de.__webglFramebuffer[xe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);R(T,Ie)&&b(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let xe=0,Se=ge.length;xe<Se;xe++){const Ze=ge[xe],we=r.get(Ze);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),X(s.TEXTURE_2D,Ze,Ie),Pe(de.__webglFramebuffer,L,Ze,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),R(Ze,Ie)&&b(s.TEXTURE_2D)}n.unbindTexture()}else{let xe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?xe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,ne.__webglTexture),X(xe,T,Ie),c&&T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Pe(de.__webglFramebuffer[Se],L,T,s.COLOR_ATTACHMENT0,xe,Se);else Pe(de.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,xe,0);R(T,Ie)&&b(xe),n.unbindTexture()}L.depthBuffer&&rt(L)}function et(L){const T=v(L)||c,de=L.textures;for(let ne=0,ge=de.length;ne<ge;ne++){const me=de[ne];if(R(me,T)){const Ue=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ie=r.get(me).__webglTexture;n.bindTexture(Ue,Ie),b(Ue),n.unbindTexture()}}}function ke(L){if(c&&L.samples>0&&mt(L)===!1){const T=L.textures,de=L.width,ne=L.height;let ge=s.COLOR_BUFFER_BIT;const me=[],Ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(L),xe=T.length>1;if(xe)for(let Se=0;Se<T.length;Se++)n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){me.push(s.COLOR_ATTACHMENT0+Se),L.depthBuffer&&me.push(Ue);const Ze=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Ze===!1&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]),Ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),xe){const we=r.get(T[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,de,ne,0,0,de,ne,ge,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Se=0;Se<T.length;Se++){n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);const Ze=r.get(T[Se]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,Ze,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Be(L){return Math.min(a.maxSamples,L.samples)}function mt(L){const T=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nt(L){const T=d.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function dt(L,T){const de=L.colorSpace,ne=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Lf||de!==Ar&&de!==vr&&(Ft.getTransfer(de)===Bt?c===!1?e.has("EXT_sRGB")===!0&&ne===_i?(L.format=Lf,L.minFilter=Bn,L.generateMipmaps=!1):T=Eg.sRGBToLinear(T):(ne!==_i||ge!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",de)),T}function st(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(_.width=L.naturalWidth||L.width,_.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(_.width=L.displayWidth,_.height=L.displayHeight):(_.width=L.width,_.height=L.height),_}this.allocateTextureUnit=te,this.resetTextureUnits=B,this.setTexture2D=oe,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Z,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=mt}function OE(s,e,n){const r=n.isWebGL2;function a(l,d=vr){let c;const h=Ft.getTransfer(d);if(l===Mr)return s.UNSIGNED_BYTE;if(l===pg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===mg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===_v)return s.BYTE;if(l===vv)return s.SHORT;if(l===Of)return s.UNSIGNED_SHORT;if(l===hg)return s.INT;if(l===xr)return s.UNSIGNED_INT;if(l===Wi)return s.FLOAT;if(l===na)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===xv)return s.ALPHA;if(l===_i)return s.RGBA;if(l===yv)return s.LUMINANCE;if(l===Sv)return s.LUMINANCE_ALPHA;if(l===es)return s.DEPTH_COMPONENT;if(l===ro)return s.DEPTH_STENCIL;if(l===Lf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Mv)return s.RED;if(l===gg)return s.RED_INTEGER;if(l===Ev)return s.RG;if(l===_g)return s.RG_INTEGER;if(l===vg)return s.RGBA_INTEGER;if(l===Ic||l===Nc||l===Fc||l===Oc)if(h===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Oc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Dp||l===Up||l===Ip||l===Np)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Dp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Up)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===xg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Fp||l===Op)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Fp)return h===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Op)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===zp||l===kp||l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===qp||l===Yp||l===$p||l===Kp||l===Zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===zp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===kp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Bp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Hp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Gp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Vp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Wp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Xp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===jp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===qp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Yp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===$p)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Kp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Zp)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===zc||l===Qp||l===Jp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===zc)return h===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Qp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Jp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Tv||l===em||l===tm||l===nm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===em)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===tm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===nm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Jr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class zE extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,r),v=this._getHandJoint(p,A);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ea;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
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

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Dn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,a=new wr({extensions:{fragDepth:!0},vertexShader:BE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new tn(new oa(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class VE extends oo{constructor(e,n){super();const r=this;let a=null,l=1,d=null,c="local-floor",h=1,p=null,_=null,g=null,y=null,S=null,E=null;const A=new GE,x=n.getContextAttributes();let v=null,P=null;const R=[],b=[],z=new gt;let O=null;const D=new $n;D.layers.enable(1),D.viewport=new Wt;const Y=new $n;Y.layers.enable(2),Y.viewport=new Wt;const _e=[D,Y],w=new zE;w.layers.enable(1),w.layers.enable(2);let U=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let he=R[X];return he===void 0&&(he=new df,R[X]=he),he.getTargetRaySpace()},this.getControllerGrip=function(X){let he=R[X];return he===void 0&&(he=new df,R[X]=he),he.getGripSpace()},this.getHand=function(X){let he=R[X];return he===void 0&&(he=new df,R[X]=he),he.getHandSpace()};function ee(X){const he=b.indexOf(X.inputSource);if(he===-1)return;const ye=R[he];ye!==void 0&&(ye.update(X.inputSource,X.frame,p||d),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",te);for(let X=0;X<R.length;X++){const he=b[X];he!==null&&(b[X]=null,R[X].disconnect(he))}U=null,le=null,A.reset(),e.setRenderTarget(v),S=null,y=null,g=null,a=null,P=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",B),a.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,he),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new ts(S.framebufferWidth,S.framebufferHeight,{format:_i,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let he=null,ye=null,Oe=null;x.depth&&(Oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=x.stencil?ro:es,ye=x.stencil?Jr:xr);const Pe={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:l};g=new XRWebGLBinding(a,n),y=g.createProjectionLayer(Pe),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ts(y.textureWidth,y.textureHeight,{format:_i,type:Mr,depthTexture:new Fg(y.textureWidth,y.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(P);Re.__ignoreDepthValues=y.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,d=await a.requestReferenceSpace(c),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function te(X){for(let he=0;he<X.removed.length;he++){const ye=X.removed[he],Oe=b.indexOf(ye);Oe>=0&&(b[Oe]=null,R[Oe].disconnect(ye))}for(let he=0;he<X.added.length;he++){const ye=X.added[he];let Oe=b.indexOf(ye);if(Oe===-1){for(let Re=0;Re<R.length;Re++)if(Re>=b.length){b.push(ye),Oe=Re;break}else if(b[Re]===null){b[Re]=ye,Oe=Re;break}if(Oe===-1)break}const Pe=R[Oe];Pe&&Pe.connect(ye)}}const J=new W,oe=new W;function G(X,he,ye){J.setFromMatrixPosition(he.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const Oe=J.distanceTo(oe),Pe=he.projectionMatrix.elements,Re=ye.projectionMatrix.elements,ct=Pe[14]/(Pe[10]-1),rt=Pe[14]/(Pe[10]+1),Z=(Pe[9]+1)/Pe[5],Dt=(Pe[9]-1)/Pe[5],et=(Pe[8]-1)/Pe[0],ke=(Re[8]+1)/Re[0],Be=ct*et,mt=ct*ke,nt=Oe/(-et+ke),dt=nt*-et;he.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(dt),X.translateZ(nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const st=ct+nt,L=rt+nt,T=Be-dt,de=mt+(Oe-dt),ne=Z*rt/L*st,ge=Dt*rt/L*st;X.projectionMatrix.makePerspective(T,de,ne,ge,st,L),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,he){he===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(he.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;A.texture!==null&&(X.near=A.depthNear,X.far=A.depthFar),w.near=Y.near=D.near=X.near,w.far=Y.far=D.far=X.far,(U!==w.near||le!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,le=w.far,D.near=U,D.far=le,Y.near=U,Y.far=le,D.updateProjectionMatrix(),Y.updateProjectionMatrix(),X.updateProjectionMatrix());const he=X.parent,ye=w.cameras;K(w,he);for(let Oe=0;Oe<ye.length;Oe++)K(ye[Oe],he);ye.length===2?G(w,D,Y):w.projectionMatrix.copy(D.projectionMatrix),j(X,w,he)};function j(X,he,ye){ye===null?X.matrix.copy(he.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(he.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Pf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(X){h=X,y!==null&&(y.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null};let I=null;function q(X,he){if(_=he.getViewerPose(p||d),E=he,_!==null){const ye=_.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Oe=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,Oe=!0);for(let Re=0;Re<ye.length;Re++){const ct=ye[Re];let rt=null;if(S!==null)rt=S.getViewport(ct);else{const Dt=g.getViewSubImage(y,ct);rt=Dt.viewport,Re===0&&(e.setRenderTargetTextures(P,Dt.colorTexture,y.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(P))}let Z=_e[Re];Z===void 0&&(Z=new $n,Z.layers.enable(Re),Z.viewport=new Wt,_e[Re]=Z),Z.matrix.fromArray(ct.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ct.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(rt.x,rt.y,rt.width,rt.height),Re===0&&(w.matrix.copy(Z.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Oe===!0&&w.cameras.push(Z)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Re=g.getDepthInformation(ye[0]);Re&&Re.isValid&&Re.texture&&A.init(e,Re,a.renderState)}}for(let ye=0;ye<R.length;ye++){const Oe=b[ye],Pe=R[ye];Oe!==null&&Pe!==void 0&&Pe.update(Oe,he,p||d)}A.render(e,w),I&&I(X,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ce=new Ig;Ce.setAnimationLoop(q),this.setAnimationLoop=function(X){I=X},this.dispose=function(){}}}const jr=new xi,WE=new Ht;function XE(s,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Pg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,P,R,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),A(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?h(x,v,P,R):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Hn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Hn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const P=e.get(v),R=P.envMap,b=P.envMapRotation;if(R&&(x.envMap.value=R,jr.copy(b),jr.x*=-1,jr.y*=-1,jr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),x.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(jr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const z=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*z,n(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,P,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*P,x.scale.value=R*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,P){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function A(x,v){const P=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jE(s,e,n,r){let a={},l={},d=[];const c=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(P,R){const b=R.program;r.uniformBlockBinding(P,b)}function p(P,R){let b=a[P.id];b===void 0&&(E(P),b=_(P),a[P.id]=b,P.addEventListener("dispose",x));const z=R.program;r.updateUBOMapping(P,z);const O=e.render.frame;l[P.id]!==O&&(y(P),l[P.id]=O)}function _(P){const R=g();P.__bindingPointIndex=R;const b=s.createBuffer(),z=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,z,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function g(){for(let P=0;P<c;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const R=a[P.id],b=P.uniforms,z=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,D=b.length;O<D;O++){const Y=Array.isArray(b[O])?b[O]:[b[O]];for(let _e=0,w=Y.length;_e<w;_e++){const U=Y[_e];if(S(U,O,_e,z)===!0){const le=U.__offset,ee=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let te=0;te<ee.length;te++){const J=ee[te],oe=A(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,le+B,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,B),B+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,R,b,z){const O=P.value,D=R+"_"+b;if(z[D]===void 0)return typeof O=="number"||typeof O=="boolean"?z[D]=O:z[D]=O.clone(),!0;{const Y=z[D];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return z[D]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function E(P){const R=P.uniforms;let b=0;const z=16;for(let D=0,Y=R.length;D<Y;D++){const _e=Array.isArray(R[D])?R[D]:[R[D]];for(let w=0,U=_e.length;w<U;w++){const le=_e[w],ee=Array.isArray(le.value)?le.value:[le.value];for(let B=0,te=ee.length;B<te;B++){const J=ee[B],oe=A(J),G=b%z;G!==0&&z-G<oe.boundary&&(b+=z-G),le.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=b,b+=oe.storage}}}const O=b%z;return O>0&&(b+=z-O),P.__size=b,P.__cache={},this}function A(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function x(P){const R=P.target;R.removeEventListener("dispose",x);const b=d.indexOf(R.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const P in a)s.deleteBuffer(a[P]);d=[],a={},l={}}return{bind:h,update:p,dispose:v}}class Gg{constructor(e={}){const{canvas:n=Fv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),E=new Int32Array(4);let A=null,x=null;const v=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wi,this._useLegacyLights=!1,this.toneMapping=Sr,this.toneMappingExposure=1;const R=this;let b=!1,z=0,O=0,D=null,Y=-1,_e=null;const w=new Wt,U=new Wt;let le=null;const ee=new St(0);let B=0,te=n.width,J=n.height,oe=1,G=null,K=null;const j=new Wt(0,0,te,J),I=new Wt(0,0,te,J);let q=!1;const Ce=new Bf;let X=!1,he=!1,ye=null;const Oe=new Ht,Pe=new gt,Re=new W,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return D===null?oe:1}let Z=r;function Dt(C,$){for(let ce=0;ce<C.length;ce++){const fe=C[ce],ae=n.getContext(fe,$);if(ae!==null)return ae}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",Ge,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",ve,!1),Z===null){const $=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&$.shift(),Z=Dt($,C),Z===null)throw Dt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,ke,Be,mt,nt,dt,st,L,T,de,ne,ge,me,Ue,Ie,xe,Se,Ze,we,Et,ot,$e,qe,Ne;function it(){et=new QS(Z),ke=new jS(Z,et,e),et.init(ke),$e=new OE(Z,et,ke),Be=new NE(Z,et,ke),mt=new tM(Z),nt=new SE,dt=new FE(Z,et,Be,nt,ke,$e,mt),st=new YS(R),L=new ZS(R),T=new ax(Z,ke),qe=new WS(Z,et,T,ke),de=new JS(Z,T,mt,qe),ne=new sM(Z,de,T,mt),we=new rM(Z,ke,dt),xe=new qS(nt),ge=new yE(R,st,L,et,ke,qe,xe),me=new XE(R,nt),Ue=new EE,Ie=new bE(et,ke),Ze=new VS(R,st,L,Be,ne,y,h),Se=new IE(R,ne,ke),Ne=new jE(Z,mt,ke,Be),Et=new XS(Z,et,mt,ke),ot=new eM(Z,et,mt,ke),mt.programs=ge.programs,R.capabilities=ke,R.extensions=et,R.properties=nt,R.renderLists=Ue,R.shadowMap=Se,R.state=Be,R.info=mt}it();const Xe=new VE(R,Z);this.xr=Xe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(te,J,!1))},this.getSize=function(C){return C.set(te,J)},this.setSize=function(C,$,ce=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,J=$,n.width=Math.floor(C*oe),n.height=Math.floor($*oe),ce===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(te*oe,J*oe).floor()},this.setDrawingBufferSize=function(C,$,ce){te=C,J=$,oe=ce,n.width=Math.floor(C*ce),n.height=Math.floor($*ce),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,$,ce,fe){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,$,ce,fe),Be.viewport(w.copy(j).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(I)},this.setScissor=function(C,$,ce,fe){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,$,ce,fe),Be.scissor(U.copy(I).multiplyScalar(oe).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(C){Be.setScissorTest(q=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,$=!0,ce=!0){let fe=0;if(C){let ae=!1;if(D!==null){const He=D.texture.format;ae=He===vg||He===_g||He===gg}if(ae){const He=D.texture.type,Qe=He===Mr||He===xr||He===Of||He===Jr||He===pg||He===mg,at=Ze.getClearColor(),Ve=Ze.getClearAlpha(),_t=at.r,ft=at.g,ht=at.b;Qe?(S[0]=_t,S[1]=ft,S[2]=ht,S[3]=Ve,Z.clearBufferuiv(Z.COLOR,0,S)):(E[0]=_t,E[1]=ft,E[2]=ht,E[3]=Ve,Z.clearBufferiv(Z.COLOR,0,E))}else fe|=Z.COLOR_BUFFER_BIT}$&&(fe|=Z.DEPTH_BUFFER_BIT),ce&&(fe|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Ue.dispose(),Ie.dispose(),nt.dispose(),st.dispose(),L.dispose(),ne.dispose(),qe.dispose(),Ne.dispose(),ge.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",pn),Xe.removeEventListener("sessionend",Ct),ye&&(ye.dispose(),ye=null),Yt.stop()};function Ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=mt.autoReset,$=Se.enabled,ce=Se.autoUpdate,fe=Se.needsUpdate,ae=Se.type;it(),mt.autoReset=C,Se.enabled=$,Se.autoUpdate=ce,Se.needsUpdate=fe,Se.type=ae}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const $=C.target;$.removeEventListener("dispose",se),De($)}function De(C){ze(C),nt.remove(C)}function ze(C){const $=nt.get(C).programs;$!==void 0&&($.forEach(function(ce){ge.releaseProgram(ce)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ce,fe,ae,He){$===null&&($=ct);const Qe=ae.isMesh&&ae.matrixWorld.determinant()<0,at=lo(C,$,ce,fe,ae);Be.setMaterial(fe,Qe);let Ve=ce.index,_t=1;if(fe.wireframe===!0){if(Ve=de.getWireframeAttribute(ce),Ve===void 0)return;_t=2}const ft=ce.drawRange,ht=ce.attributes.position;let Ut=ft.start*_t,an=(ft.start+ft.count)*_t;He!==null&&(Ut=Math.max(Ut,He.start*_t),an=Math.min(an,(He.start+He.count)*_t)),Ve!==null?(Ut=Math.max(Ut,0),an=Math.min(an,Ve.count)):ht!=null&&(Ut=Math.max(Ut,0),an=Math.min(an,ht.count));const Gt=an-Ut;if(Gt<0||Gt===1/0)return;qe.setup(ae,fe,at,ce,Ve);let mn,F=Et;if(Ve!==null&&(mn=T.get(Ve),F=ot,F.setIndex(mn)),ae.isMesh)fe.wireframe===!0?(Be.setLineWidth(fe.wireframeLinewidth*rt()),F.setMode(Z.LINES)):F.setMode(Z.TRIANGLES);else if(ae.isLine){let Me=fe.linewidth;Me===void 0&&(Me=1),Be.setLineWidth(Me*rt()),ae.isLineSegments?F.setMode(Z.LINES):ae.isLineLoop?F.setMode(Z.LINE_LOOP):F.setMode(Z.LINE_STRIP)}else ae.isPoints?F.setMode(Z.POINTS):ae.isSprite&&F.setMode(Z.TRIANGLES);if(ae.isBatchedMesh)F.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)F.renderInstances(Ut,Gt,ae.count);else if(ce.isInstancedBufferGeometry){const Me=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,tt=Math.min(ce.instanceCount,Me);F.renderInstances(Ut,Gt,tt)}else F.render(Ut,Gt)};function vt(C,$,ce){C.transparent===!0&&C.side===ii&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,yi(C,$,ce),C.side=Tr,C.needsUpdate=!0,yi(C,$,ce),C.side=ii):yi(C,$,ce)}this.compile=function(C,$,ce=null){ce===null&&(ce=C),x=Ie.get(ce),x.init(),P.push(x),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(x.pushLight(ae),ae.castShadow&&x.pushShadow(ae))}),C!==ce&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(x.pushLight(ae),ae.castShadow&&x.pushShadow(ae))}),x.setupLights(R._useLegacyLights);const fe=new Set;return C.traverse(function(ae){const He=ae.material;if(He)if(Array.isArray(He))for(let Qe=0;Qe<He.length;Qe++){const at=He[Qe];vt(at,ce,ae),fe.add(at)}else vt(He,ce,ae),fe.add(He)}),P.pop(),x=null,fe},this.compileAsync=function(C,$,ce=null){const fe=this.compile(C,$,ce);return new Promise(ae=>{function He(){if(fe.forEach(function(Qe){nt.get(Qe).currentProgram.isReady()&&fe.delete(Qe)}),fe.size===0){ae(C);return}setTimeout(He,10)}et.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Lt=null;function Rt(C){Lt&&Lt(C)}function pn(){Yt.stop()}function Ct(){Yt.start()}const Yt=new Ig;Yt.setAnimationLoop(Rt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(C){Lt=C,Xe.setAnimationLoop(C),C===null?Yt.stop():Yt.start()},Xe.addEventListener("sessionstart",pn),Xe.addEventListener("sessionend",Ct),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera($),$=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,$,D),x=Ie.get(C,P.length),x.init(),P.push(x),Oe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ce.setFromProjectionMatrix(Oe),he=this.localClippingEnabled,X=xe.init(this.clippingPlanes,he),A=Ue.get(C,v.length),A.init(),v.push(A),on(C,$,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(G,K),this.info.render.frame++,X===!0&&xe.beginShadows();const ce=x.state.shadowsArray;if(Se.render(ce,C,$),X===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1)&&Ze.render(A,C),x.setupLights(R._useLegacyLights),$.isArrayCamera){const fe=$.cameras;for(let ae=0,He=fe.length;ae<He;ae++){const Qe=fe[ae];is(A,C,Qe,Qe.viewport)}}else is(A,C,$);D!==null&&(dt.updateMultisampleRenderTarget(D),dt.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(R,C,$),qe.resetDefaultState(),Y=-1,_e=null,P.pop(),P.length>0?x=P[P.length-1]:x=null,v.pop(),v.length>0?A=v[v.length-1]:A=null};function on(C,$,ce,fe){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){fe&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const Qe=ne.update(C),at=C.material;at.visible&&A.push(C,Qe,at,ce,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const Qe=ne.update(C),at=C.material;if(fe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Re.copy(Qe.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(at)){const Ve=Qe.groups;for(let _t=0,ft=Ve.length;_t<ft;_t++){const ht=Ve[_t],Ut=at[ht.materialIndex];Ut&&Ut.visible&&A.push(C,Qe,Ut,ce,Re.z,ht)}}else at.visible&&A.push(C,Qe,at,ce,Re.z,null)}}const He=C.children;for(let Qe=0,at=He.length;Qe<at;Qe++)on(He[Qe],$,ce,fe)}function is(C,$,ce,fe){const ae=C.opaque,He=C.transmissive,Qe=C.transparent;x.setupLightsView(ce),X===!0&&xe.setGlobalState(R.clippingPlanes,ce),He.length>0&&Ci(ae,He,$,ce),fe&&Be.viewport(w.copy(fe)),ae.length>0&&si(ae,$,ce),He.length>0&&si(He,$,ce),Qe.length>0&&si(Qe,$,ce),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Ci(C,$,ce,fe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;const He=ke.isWebGL2;ye===null&&(ye=new ts(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?na:Mr,minFilter:Qr,samples:He?4:0})),R.getDrawingBufferSize(Pe),He?ye.setSize(Pe.x,Pe.y):ye.setSize(Df(Pe.x),Df(Pe.y));const Qe=R.getRenderTarget();R.setRenderTarget(ye),R.getClearColor(ee),B=R.getClearAlpha(),B<1&&R.setClearColor(16777215,.5),R.clear();const at=R.toneMapping;R.toneMapping=Sr,si(C,ce,fe),dt.updateMultisampleRenderTarget(ye),dt.updateRenderTargetMipmap(ye);let Ve=!1;for(let _t=0,ft=$.length;_t<ft;_t++){const ht=$[_t],Ut=ht.object,an=ht.geometry,Gt=ht.material,mn=ht.group;if(Gt.side===ii&&Ut.layers.test(fe.layers)){const F=Gt.side;Gt.side=Hn,Gt.needsUpdate=!0,bi(Ut,ce,fe,an,Gt,mn),Gt.side=F,Gt.needsUpdate=!0,Ve=!0}}Ve===!0&&(dt.updateMultisampleRenderTarget(ye),dt.updateRenderTargetMipmap(ye)),R.setRenderTarget(Qe),R.setClearColor(ee,B),R.toneMapping=at}function si(C,$,ce){const fe=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,He=C.length;ae<He;ae++){const Qe=C[ae],at=Qe.object,Ve=Qe.geometry,_t=fe===null?Qe.material:fe,ft=Qe.group;at.layers.test(ce.layers)&&bi(at,$,ce,Ve,_t,ft)}}function bi(C,$,ce,fe,ae,He){C.onBeforeRender(R,$,ce,fe,ae,He),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(R,$,ce,fe,C,He),ae.transparent===!0&&ae.side===ii&&ae.forceSinglePass===!1?(ae.side=Hn,ae.needsUpdate=!0,R.renderBufferDirect(ce,$,fe,ae,C,He),ae.side=Tr,ae.needsUpdate=!0,R.renderBufferDirect(ce,$,fe,ae,C,He),ae.side=ii):R.renderBufferDirect(ce,$,fe,ae,C,He),C.onAfterRender(R,$,ce,fe,ae,He)}function yi(C,$,ce){$.isScene!==!0&&($=ct);const fe=nt.get(C),ae=x.state.lights,He=x.state.shadowsArray,Qe=ae.state.version,at=ge.getParameters(C,ae.state,He,$,ce),Ve=ge.getProgramCacheKey(at);let _t=fe.programs;fe.environment=C.isMeshStandardMaterial?$.environment:null,fe.fog=$.fog,fe.envMap=(C.isMeshStandardMaterial?L:st).get(C.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,_t===void 0&&(C.addEventListener("dispose",se),_t=new Map,fe.programs=_t);let ft=_t.get(Ve);if(ft!==void 0){if(fe.currentProgram===ft&&fe.lightsStateVersion===Qe)return ss(C,at),ft}else at.uniforms=ge.getUniforms(C),C.onBuild(ce,at,R),C.onBeforeCompile(at,R),ft=ge.acquireProgram(at,Ve),_t.set(Ve,ft),fe.uniforms=at.uniforms;const ht=fe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ht.clippingPlanes=xe.uniform),ss(C,at),fe.needsLights=os(C),fe.lightsStateVersion=Qe,fe.needsLights&&(ht.ambientLightColor.value=ae.state.ambient,ht.lightProbe.value=ae.state.probe,ht.directionalLights.value=ae.state.directional,ht.directionalLightShadows.value=ae.state.directionalShadow,ht.spotLights.value=ae.state.spot,ht.spotLightShadows.value=ae.state.spotShadow,ht.rectAreaLights.value=ae.state.rectArea,ht.ltc_1.value=ae.state.rectAreaLTC1,ht.ltc_2.value=ae.state.rectAreaLTC2,ht.pointLights.value=ae.state.point,ht.pointLightShadows.value=ae.state.pointShadow,ht.hemisphereLights.value=ae.state.hemi,ht.directionalShadowMap.value=ae.state.directionalShadowMap,ht.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ht.spotShadowMap.value=ae.state.spotShadowMap,ht.spotLightMatrix.value=ae.state.spotLightMatrix,ht.spotLightMap.value=ae.state.spotLightMap,ht.pointShadowMap.value=ae.state.pointShadowMap,ht.pointShadowMatrix.value=ae.state.pointShadowMatrix),fe.currentProgram=ft,fe.uniformsList=null,ft}function rs(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Fl.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function ss(C,$){const ce=nt.get(C);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function lo(C,$,ce,fe,ae){$.isScene!==!0&&($=ct),dt.resetTextureUnits();const He=$.fog,Qe=fe.isMeshStandardMaterial?$.environment:null,at=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ar,Ve=(fe.isMeshStandardMaterial?L:st).get(fe.envMap||Qe),_t=fe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ft=!!ce.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),ht=!!ce.morphAttributes.position,Ut=!!ce.morphAttributes.normal,an=!!ce.morphAttributes.color;let Gt=Sr;fe.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const mn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,F=mn!==void 0?mn.length:0,Me=nt.get(fe),tt=x.state.lights;if(X===!0&&(he===!0||C!==_e)){const Un=C===_e&&fe.id===Y;xe.setState(fe,C,Un)}let wt=!1;fe.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==tt.state.version||Me.outputColorSpace!==at||ae.isBatchedMesh&&Me.batching===!1||!ae.isBatchedMesh&&Me.batching===!0||ae.isInstancedMesh&&Me.instancing===!1||!ae.isInstancedMesh&&Me.instancing===!0||ae.isSkinnedMesh&&Me.skinning===!1||!ae.isSkinnedMesh&&Me.skinning===!0||ae.isInstancedMesh&&Me.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Me.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Me.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Me.instancingMorph===!1&&ae.morphTexture!==null||Me.envMap!==Ve||fe.fog===!0&&Me.fog!==He||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==xe.numPlanes||Me.numIntersection!==xe.numIntersection)||Me.vertexAlphas!==_t||Me.vertexTangents!==ft||Me.morphTargets!==ht||Me.morphNormals!==Ut||Me.morphColors!==an||Me.toneMapping!==Gt||ke.isWebGL2===!0&&Me.morphTargetsCount!==F)&&(wt=!0):(wt=!0,Me.__version=fe.version);let Tt=Me.currentProgram;wt===!0&&(Tt=yi(fe,$,ae));let ln=!1,An=!1,Gn=!1;const At=Tt.getUniforms(),vn=Me.uniforms;if(Be.useProgram(Tt.program)&&(ln=!0,An=!0,Gn=!0),fe.id!==Y&&(Y=fe.id,An=!0),ln||_e!==C){At.setValue(Z,"projectionMatrix",C.projectionMatrix),At.setValue(Z,"viewMatrix",C.matrixWorldInverse);const Un=At.map.cameraPosition;Un!==void 0&&Un.setValue(Z,Re.setFromMatrixPosition(C.matrixWorld)),ke.logarithmicDepthBuffer&&At.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&At.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),_e!==C&&(_e=C,An=!0,Gn=!0)}if(ae.isSkinnedMesh){At.setOptional(Z,ae,"bindMatrix"),At.setOptional(Z,ae,"bindMatrixInverse");const Un=ae.skeleton;Un&&(ke.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),At.setValue(Z,"boneTexture",Un.boneTexture,dt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(At.setOptional(Z,ae,"batchingTexture"),At.setValue(Z,"batchingTexture",ae._matricesTexture,dt));const uo=ce.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0&&ke.isWebGL2===!0)&&we.update(ae,ce,Tt),(An||Me.receiveShadow!==ae.receiveShadow)&&(Me.receiveShadow=ae.receiveShadow,At.setValue(Z,"receiveShadow",ae.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(vn.envMap.value=Ve,vn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),An&&(At.setValue(Z,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&oi(vn,Gn),He&&fe.fog===!0&&me.refreshFogUniforms(vn,He),me.refreshMaterialUniforms(vn,fe,oe,J,ye),Fl.upload(Z,rs(Me),vn,dt)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Fl.upload(Z,rs(Me),vn,dt),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&At.setValue(Z,"center",ae.center),At.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),At.setValue(Z,"normalMatrix",ae.normalMatrix),At.setValue(Z,"modelMatrix",ae.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Un=fe.uniformsGroups;for(let Cr=0,aa=Un.length;Cr<aa;Cr++)if(ke.isWebGL2){const as=Un[Cr];Ne.update(as,Tt),Ne.bind(as,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function oi(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function os(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,$,ce){nt.get(C.texture).__webglTexture=$,nt.get(C.depthTexture).__webglTexture=ce;const fe=nt.get(C);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ce===void 0,fe.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,$){const ce=nt.get(C);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,ce=0){D=C,z=$,O=ce;let fe=!0,ae=null,He=!1,Qe=!1;if(C){const Ve=nt.get(C);Ve.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(Z.FRAMEBUFFER,null),fe=!1):Ve.__webglFramebuffer===void 0?dt.setupRenderTarget(C):Ve.__hasExternalTextures&&dt.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const _t=C.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(Qe=!0);const ft=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ft[$])?ae=ft[$][ce]:ae=ft[$],He=!0):ke.isWebGL2&&C.samples>0&&dt.useMultisampledRTT(C)===!1?ae=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(ft)?ae=ft[ce]:ae=ft,w.copy(C.viewport),U.copy(C.scissor),le=C.scissorTest}else w.copy(j).multiplyScalar(oe).floor(),U.copy(I).multiplyScalar(oe).floor(),le=q;if(Be.bindFramebuffer(Z.FRAMEBUFFER,ae)&&ke.drawBuffers&&fe&&Be.drawBuffers(C,ae),Be.viewport(w),Be.scissor(U),Be.setScissorTest(le),He){const Ve=nt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,ce)}else if(Qe){const Ve=nt.get(C.texture),_t=$||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ve.__webglTexture,ce||0,_t)}Y=-1},this.readRenderTargetPixels=function(C,$,ce,fe,ae,He,Qe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Qe!==void 0&&(at=at[Qe]),at){Be.bindFramebuffer(Z.FRAMEBUFFER,at);try{const Ve=C.texture,_t=Ve.format,ft=Ve.type;if(_t!==_i&&$e.convert(_t)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ft===na&&(et.has("EXT_color_buffer_half_float")||ke.isWebGL2&&et.has("EXT_color_buffer_float"));if(ft!==Mr&&$e.convert(ft)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===Wi&&(ke.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-fe&&ce>=0&&ce<=C.height-ae&&Z.readPixels($,ce,fe,ae,$e.convert(_t),$e.convert(ft),He)}finally{const Ve=D!==null?nt.get(D).__webglFramebuffer:null;Be.bindFramebuffer(Z.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,$,ce=0){const fe=Math.pow(2,-ce),ae=Math.floor($.image.width*fe),He=Math.floor($.image.height*fe);dt.setTexture2D($,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,C.x,C.y,ae,He),Be.unbindTexture()},this.copyTextureToTexture=function(C,$,ce,fe=0){const ae=$.image.width,He=$.image.height,Qe=$e.convert(ce.format),at=$e.convert(ce.type);dt.setTexture2D(ce,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ce.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ce.unpackAlignment),$.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,fe,C.x,C.y,ae,He,Qe,at,$.image.data):$.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,fe,C.x,C.y,$.mipmaps[0].width,$.mipmaps[0].height,Qe,$.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,fe,C.x,C.y,Qe,at,$.image),fe===0&&ce.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(C,$,ce,fe,ae=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=Math.round(C.max.x-C.min.x),Qe=Math.round(C.max.y-C.min.y),at=C.max.z-C.min.z+1,Ve=$e.convert(fe.format),_t=$e.convert(fe.type);let ft;if(fe.isData3DTexture)dt.setTexture3D(fe,0),ft=Z.TEXTURE_3D;else if(fe.isDataArrayTexture||fe.isCompressedArrayTexture)dt.setTexture2DArray(fe,0),ft=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,fe.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,fe.unpackAlignment);const ht=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ut=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),an=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Gt=Z.getParameter(Z.UNPACK_SKIP_ROWS),mn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),F=ce.isCompressedTexture?ce.mipmaps[ae]:ce.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,F.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,F.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,C.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,C.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,C.min.z),ce.isDataTexture||ce.isData3DTexture?Z.texSubImage3D(ft,ae,$.x,$.y,$.z,He,Qe,at,Ve,_t,F.data):fe.isCompressedArrayTexture?Z.compressedTexSubImage3D(ft,ae,$.x,$.y,$.z,He,Qe,at,Ve,F.data):Z.texSubImage3D(ft,ae,$.x,$.y,$.z,He,Qe,at,Ve,_t,F),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ht),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ut),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,an),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Gt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,mn),ae===0&&fe.generateMipmaps&&Z.generateMipmap(ft),Be.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?dt.setTextureCube(C,0):C.isData3DTexture?dt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?dt.setTexture2DArray(C,0):dt.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){z=0,O=0,D=null,Be.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===ql?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qE extends Gg{}qE.prototype.isWebGL1Renderer=!0;class Gf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new St(e),this.near=n,this.far=r}clone(){return new Gf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class YE extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $E{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=bf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new W;class Xl{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Ri(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ri(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ri(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ri(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ri(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return new ri(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vg extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let js;const $o=new W,qs=new W,Ys=new W,$s=new gt,Ko=new gt,Wg=new Ht,Ll=new W,Zo=new W,Pl=new W,jm=new gt,hf=new gt,qm=new gt;class KE extends nn{constructor(e=new Vg){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new hn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new $E(n,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Xl(r,3,0,!1)),js.setAttribute("uv",new Xl(r,2,3,!1))}this.geometry=js,this.material=e,this.center=new gt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Wg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const d=this.center;Dl(Ll.set(-.5,-.5,0),Ys,d,qs,a,l),Dl(Zo.set(.5,-.5,0),Ys,d,qs,a,l),Dl(Pl.set(.5,.5,0),Ys,d,qs,a,l),jm.set(0,0),hf.set(1,0),qm.set(1,1);let c=e.ray.intersectTriangle(Ll,Zo,Pl,!1,$o);if(c===null&&(Dl(Zo.set(-.5,.5,0),Ys,d,qs,a,l),hf.set(0,1),c=e.ray.intersectTriangle(Ll,Pl,Zo,!1,$o),c===null))return;const h=e.ray.origin.distanceTo($o);h<e.near||h>e.far||n.push({distance:h,point:$o.clone(),uv:vi.getInterpolation($o,Ll,Zo,Pl,jm,hf,qm,new gt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dl(s,e,n,r,a,l){$s.subVectors(s,n).addScalar(.5).multiply(r),a!==void 0?(Ko.x=l*$s.x-a*$s.y,Ko.y=a*$s.x+l*$s.y):Ko.copy($s),s.copy(e),s.x+=Ko.x,s.y+=Ko.y,s.applyMatrix4(Wg)}class ta extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ym=new W,$m=new W,Km=new Ht,pf=new Ag,Ul=new Yl;class Qo extends nn{constructor(e=new hn,n=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Ym.fromBufferAttribute(n,a-1),$m.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ym.distanceTo($m);e.setAttribute("lineDistance",new Qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(a),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;Km.copy(a).invert(),pf.copy(e.ray).applyMatrix4(Km);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new W,_=new W,g=new W,y=new W,S=this.isLineSegments?2:1,E=r.index,x=r.attributes.position;if(E!==null){const v=Math.max(0,d.start),P=Math.min(E.count,d.start+d.count);for(let R=v,b=P-1;R<b;R+=S){const z=E.getX(R),O=E.getX(R+1);if(p.fromBufferAttribute(x,z),_.fromBufferAttribute(x,O),pf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const Y=e.ray.origin.distanceTo(y);Y<e.near||Y>e.far||n.push({distance:Y,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,d.start),P=Math.min(x.count,d.start+d.count);for(let R=v,b=P-1;R<b;R+=S){if(p.fromBufferAttribute(x,R),_.fromBufferAttribute(x,R+1),pf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(y);O<e.near||O>e.far||n.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class ZE extends Dn{constructor(e,n,r,a,l,d,c,h,p){super(e,n,r,a,l,d,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class QE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,a=this.getPoint(0),l=0;n.push(0);for(let d=1;d<=e;d++)r=this.getPoint(d/e),l+=r.distanceTo(a),n.push(l),a=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let a=0;const l=r.length;let d;n?d=n:d=e*r[l-1];let c=0,h=l-1,p;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),p=r[a]-d,p<0)c=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===d)return a/(l-1);const _=r[a],y=r[a+1]-_,S=(d-_)/y;return(a+S)/(l-1)}getTangent(e,n){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const d=this.getPoint(a),c=this.getPoint(l),h=n||(d.isVector2?new gt:new W);return h.copy(c).sub(d).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new W,a=[],l=[],d=[],c=new W,h=new Ht;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new W)}l[0]=new W,d[0]=new W;let p=Number.MAX_VALUE;const _=Math.abs(a[0].x),g=Math.abs(a[0].y),y=Math.abs(a[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),y<=p&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),d[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),d[S]=d[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(wn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,E))}d[S].crossVectors(a[S],l[S])}if(n===!0){let S=Math.acos(wn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),d[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Vf(){let s=0,e=0,n=0,r=0;function a(l,d,c,h){s=l,e=c,n=-3*l+3*d-2*c-h,r=2*l-2*d+c+h}return{initCatmullRom:function(l,d,c,h,p){a(d,c,p*(c-l),p*(h-d))},initNonuniformCatmullRom:function(l,d,c,h,p,_,g){let y=(d-l)/p-(c-l)/(p+_)+(c-d)/_,S=(c-d)/_-(h-d)/(_+g)+(h-c)/g;y*=_,S*=_,a(d,c,y,S)},calc:function(l){const d=l*l,c=d*l;return s+e*l+n*d+r*c}}}const Il=new W,mf=new Vf,gf=new Vf,_f=new Vf;class JE extends QE{constructor(e=[],n=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=a}getPoint(e,n=new W){const r=n,a=this.points,l=a.length,d=(l-(this.closed?0:1))*e;let c=Math.floor(d),h=d-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let p,_;this.closed||c>0?p=a[(c-1)%l]:(Il.subVectors(a[0],a[1]).add(a[0]),p=Il);const g=a[c%l],y=a[(c+1)%l];if(this.closed||c+2<l?_=a[(c+2)%l]:(Il.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(y),S),x=Math.pow(y.distanceToSquared(_),S);A<1e-4&&(A=1),E<1e-4&&(E=A),x<1e-4&&(x=A),mf.initNonuniformCatmullRom(p.x,g.x,y.x,_.x,E,A,x),gf.initNonuniformCatmullRom(p.y,g.y,y.y,_.y,E,A,x),_f.initNonuniformCatmullRom(p.z,g.z,y.z,_.z,E,A,x)}else this.curveType==="catmullrom"&&(mf.initCatmullRom(p.x,g.x,y.x,_.x,this.tension),gf.initCatmullRom(p.y,g.y,y.y,_.y,this.tension),_f.initCatmullRom(p.z,g.z,y.z,_.z,this.tension));return r.set(mf.calc(h),gf.calc(h),_f.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new W().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Wf extends hn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],d=[],c=[],h=[],p=new W,_=new gt;d.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let g=0,y=3;g<=n;g++,y+=3){const S=r+g/n*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),d.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(d[y]/e+1)/2,_.y=(d[y+1]/e+1)/2,h.push(_.x,_.y)}for(let g=1;g<=n;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xf extends hn{constructor(e=1,n=1,r=1,a=32,l=1,d=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:d,thetaStart:c,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],g=[],y=[],S=[];let E=0;const A=[],x=r/2;let v=0;P(),d===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(S,2));function P(){const b=new W,z=new W;let O=0;const D=(n-e)/r;for(let Y=0;Y<=l;Y++){const _e=[],w=Y/l,U=w*(n-e)+e;for(let le=0;le<=a;le++){const ee=le/a,B=ee*h+c,te=Math.sin(B),J=Math.cos(B);z.x=U*te,z.y=-w*r+x,z.z=U*J,g.push(z.x,z.y,z.z),b.set(te,D,J).normalize(),y.push(b.x,b.y,b.z),S.push(ee,1-w),_e.push(E++)}A.push(_e)}for(let Y=0;Y<a;Y++)for(let _e=0;_e<l;_e++){const w=A[_e][Y],U=A[_e+1][Y],le=A[_e+1][Y+1],ee=A[_e][Y+1];_.push(w,U,ee),_.push(U,le,ee),O+=6}p.addGroup(v,O,0),v+=O}function R(b){const z=E,O=new gt,D=new W;let Y=0;const _e=b===!0?e:n,w=b===!0?1:-1;for(let le=1;le<=a;le++)g.push(0,x*w,0),y.push(0,w,0),S.push(.5,.5),E++;const U=E;for(let le=0;le<=a;le++){const B=le/a*h+c,te=Math.cos(B),J=Math.sin(B);D.x=_e*J,D.y=x*w,D.z=_e*te,g.push(D.x,D.y,D.z),y.push(0,w,0),O.x=te*.5+.5,O.y=J*.5*w+.5,S.push(O.x,O.y),E++}for(let le=0;le<a;le++){const ee=z+le,B=U+le;b===!0?_.push(B,B+1,ee):_.push(B+1,B,ee),Y+=3}p.addGroup(v,Y,b===!0?1:2),v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jf extends Xf{constructor(e=1,n=1,r=32,a=1,l=!1,d=0,c=Math.PI*2){super(0,e,n,r,a,l,d,c),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:d,thetaLength:c}}static fromJSON(e){return new jf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qf extends hn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const d=[],c=[],h=[],p=[],_=new W,g=new W,y=new W;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const A=E/a*l,x=S/r*Math.PI*2;g.x=(e+n*Math.cos(x))*Math.cos(A),g.y=(e+n*Math.cos(x))*Math.sin(A),g.z=n*Math.sin(x),c.push(g.x,g.y,g.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),y.subVectors(g,_).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const A=(a+1)*S+E-1,x=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,P=(a+1)*S+E;d.push(A,x,P),d.push(x,v,P)}this.setIndex(d),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vf extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e1 extends Rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kl extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class t1 extends Kl{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const xf=new Ht,Zm=new W,Qm=new W;class Xg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zm),Qm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qm),n.updateMatrixWorld(),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jm=new Ht,Jo=new W,yf=new W;class n1 extends Xg{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Jo),yf.copy(r.position),yf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(yf),r.updateMatrixWorld(),a.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm)}}class i1 extends Kl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new n1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class r1 extends Xg{constructor(){super(new Ng(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s1 extends Kl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new r1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o1 extends Kl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const a1="https://api.openf1.org/v1",pe={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},l1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},u1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},eg=s=>{if(!s)return"#888";for(const[e,n]of Object.entries(u1))if(s.toLowerCase().includes(e.toLowerCase()))return n;return"#888"},c1=[{label:"VER vs NOR — Monza 2024 Q",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"HAM vs VER — Bahrain 2024 R",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1},{label:"NOR vs PIA — Silverstone 2024 Q",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81},{label:"LEC vs SAI — Monaco 2024 Q",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55},{label:"VER vs NOR — Abu Dhabi 2024 Q",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"RUS vs HAM — Spa 2024 Q",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44}],Nl=["orbit","follow1","follow2","top","cinematic"],f1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function ns(s,e={},n=2){const r=new URL(`${a1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=n;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(d=>setTimeout(d,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===n)throw l;await new Promise(d=>setTimeout(d,800*(a+1)))}}const tg=s=>ns("/meetings",{year:s}),ng=s=>ns("/sessions",{meeting_key:s}),ig=s=>ns("/drivers",{session_key:s}),rg=(s,e)=>ns("/laps",{session_key:s,driver_number:e}),sg=(s,e)=>ns("/stints",{session_key:s,driver_number:e});function og(s,e,n,r){const a={session_key:s,driver_number:e};return n&&(a["date>"]=n),r&&(a["date<"]=r),ns("/location",a)}function ag(s,e,n,r){const a={session_key:s,driver_number:e};return n&&(a["date>"]=n),r&&(a["date<"]=r),ns("/car_data",a)}function Ol(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const n=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(n),a=Math.min(r+1,s.length-1),l=n-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function ia(s){if(!(s!=null&&s.length))return[];let e=1/0,n=-1/0,r=1/0,a=-1/0,l=1/0,d=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>n&&(n=g.x),g.y<r&&(r=g.y),g.y>a&&(a=g.y),g.z<l&&(l=g.z),g.z>d&&(d=g.z);const c=Math.max(n-e,a-r)||1,h=(e+n)/2,p=(r+a)/2,_=(l+d)/2;return s.map(g=>({x:(g.x-h)/c*40,y:(g.z-_)/c*4,z:(g.y-p)/c*40}))}function lg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function ug(s){const e=s.filter(n=>n.lap_duration>10&&n.date_start);return e.length?e.reduce((n,r)=>n.lap_duration<r.lap_duration?n:r):null}function d1(){const[s,e]=Le.useState(typeof window<"u"&&window.innerWidth<768);return Le.useEffect(()=>{const n=()=>e(window.innerWidth<768);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),s}function Ks(s,e){if(!s||s.length<=e)return s||[];const n=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*n)]);return r}function qr(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),n=s-e*60;return`${e}:${n<10?"0":""}${n.toFixed(3)}`}function h1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function Zs(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function p1(s,e,n,r,a,l,d,c,h,p,_,g){const y=Le.useRef({}),S=Le.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),E=Le.useRef(c),A=Le.useMemo(()=>n?ia(n):null,[n]),x=Le.useMemo(()=>r?ia(r):null,[r]),v=Le.useMemo(()=>(_==null?void 0:_.map(P=>P.speed||0))||[],[_]);Le.useEffect(()=>{const P=s.current;if(!P||!e||e.length<10)return;y.current.ren&&(y.current.ren.dispose(),P.contains(y.current.ren.domElement)&&P.removeChild(y.current.ren.domElement)),y.current.fr&&cancelAnimationFrame(y.current.fr);const R=P.clientWidth,b=P.clientHeight,z=new YE;z.background=new St(1184280),z.fog=new Gf(1184280,80,200);const O=new $n(50,R/b,.1,500),D=new Gg({antialias:!0});D.setSize(R,b),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.appendChild(D.domElement),z.add(new o1(14540264,.7));const Y=new s1(16777215,1);Y.position.set(40,80,30),z.add(Y),z.add(new t1(12305629,3355456,.4));const _e=new tn(new oa(400,400),new e1({color:1579039}));_e.rotation.x=-Math.PI/2,_e.position.y=-.2,z.add(_e);const w=new JE(e.map(ne=>new W(ne.x,ne.y,ne.z)),!0),U=Math.min(e.length*3,800),le=2,ee=w.getPoints(U),B=[],te=[],J=[],oe=[],G=[],K=ee.map((ne,ge)=>{const me=ee[(ge+1)%ee.length],Ue=ee[(ge-1+ee.length)%ee.length];return new W(me.x-Ue.x,0,me.z-Ue.z).normalize()});for(let ne=0;ne<ee.length;ne++){const ge=ee[ne],me=K[ne],Ue=new W(-me.z,0,me.x),Ie=new W(ge.x+Ue.x*le/2,ge.y,ge.z+Ue.z*le/2),xe=new W(ge.x-Ue.x*le/2,ge.y,ge.z-Ue.z*le/2);if(B.push(Ie.x,Ie.y,Ie.z,xe.x,xe.y,xe.z),te.push(0,1,0,0,1,0),oe.push(new W(Ie.x,Ie.y+.02,Ie.z)),G.push(new W(xe.x,xe.y+.02,xe.z)),ne<ee.length-1){const Se=ne*2;J.push(Se,Se+2,Se+1,Se+1,Se+2,Se+3)}}const j=new hn;j.setAttribute("position",new Qt(B,3)),j.setAttribute("normal",new Qt(te,3)),j.setIndex(J);const I=new tn(j,new vf({color:3816008,roughness:.8,metalness:.1,side:ii}));if(z.add(I),g==="heatmap"&&v.length>10){const ne=new Float32Array(ee.length*2*3);for(let Ue=0;Ue<ee.length;Ue++){const Ie=Ue/(ee.length-1),xe=Math.min(Math.floor(Ie*(v.length-1)),v.length-1),Se=Math.max(0,Math.min(1,(v[xe]-50)/300));let Ze,we,Et;Se<.25?(Ze=0,we=Se*4,Et=1):Se<.5?(Ze=0,we=1,Et=1-(Se-.25)*4):Se<.75?(Ze=(Se-.5)*4,we=1,Et=0):(Ze=1,we=1-(Se-.75)*4,Et=0);const ot=Ue*2;ne[ot*3]=Ze,ne[ot*3+1]=we,ne[ot*3+2]=Et,ne[(ot+1)*3]=Ze,ne[(ot+1)*3+1]=we,ne[(ot+1)*3+2]=Et}const ge=j.clone();ge.setAttribute("color",new Qt(ne,3));const me=new tn(ge,new Wl({vertexColors:!0,transparent:!0,opacity:.55,side:ii,depthWrite:!1}));me.position.y+=.01,z.add(me)}const q=new ta({color:16777215,transparent:!0,opacity:.55});z.add(new Qo(new hn().setFromPoints(oe),q)),z.add(new Qo(new hn().setFromPoints(G),q));const Ce=[53866,16766720,14747136];[0,.33,.66].forEach((ne,ge)=>{const me=w.getPointAt(ne),Ue=w.getTangentAt(ne),Ie=new W(-Ue.z,0,Ue.x).normalize(),xe=me.clone().add(Ie.clone().multiplyScalar(le/2+.3)),Se=me.clone().sub(Ie.clone().multiplyScalar(le/2+.3));xe.y+=.03,Se.y+=.03;const Ze=new Qo(new hn().setFromPoints([xe,Se]),new ta({color:Ce[ge],linewidth:2}));z.add(Ze)});const X=w.getPointAt(0),he=w.getTangentAt(0),ye=new W(-he.z,0,he.x).normalize(),Oe=X.clone().add(ye.clone().multiplyScalar(le/2));Oe.y+=.03;const Pe=X.clone().sub(ye.clone().multiplyScalar(le/2));Pe.y+=.03,z.add(new Qo(new hn().setFromPoints([Oe,Pe]),new ta({color:16777215})));function Re(ne,ge,me){const Ue=new ea,Ie=new St(ne),xe=new vf({color:Ie,emissive:Ie,emissiveIntensity:me?.6:.35,metalness:.7,roughness:.25,transparent:me,opacity:me?.55:1}),Se=new tn(new ji(.5,.2,1.6),xe);Se.position.y=.2,Ue.add(Se);const Ze=new tn(new ji(.9,.06,.25),xe);Ze.position.set(0,.12,.85),Ue.add(Ze);const we=new tn(new ji(.7,.18,.08),xe);we.position.set(0,.45,-.75),Ue.add(we),[-.35,.35].forEach(Xe=>{const Ge=new tn(new ji(.03,.22,.15),xe);Ge.position.set(Xe,.42,-.75),Ue.add(Ge)});const Et=new tn(new jf(.12,.5,4),xe);Et.geometry.rotateX(-Math.PI/2),Et.position.set(0,.18,1.05),Ue.add(Et);const ot=new vf({color:3355443,metalness:.9,roughness:.1}),$e=new tn(new qf(.18,.025,6,12,Math.PI),ot);$e.rotation.z=Math.PI,$e.position.set(0,.35,.15),Ue.add($e);const qe=new Wl({color:Ie,transparent:!0,opacity:me?.1:.06,side:ii}),Ne=new tn(new Wf(1.2,16),qe);Ne.rotation.x=-Math.PI/2,Ne.position.y=.02,Ue.add(Ne);const it=new i1(Ie,me?.7:.4,10);if(it.position.set(0,.5,0),Ue.add(it),ge){const Xe=document.createElement("canvas");Xe.width=160,Xe.height=56;const Ge=Xe.getContext("2d");Ge.fillStyle=ne,Ge.globalAlpha=.9,Ge.beginPath();const k=6;Ge.moveTo(k,0),Ge.lineTo(160-k,0),Ge.quadraticCurveTo(160,0,160,k),Ge.lineTo(160,56-k),Ge.quadraticCurveTo(160,56,160-k,56),Ge.lineTo(k,56),Ge.quadraticCurveTo(0,56,0,56-k),Ge.lineTo(0,k),Ge.quadraticCurveTo(0,0,k,0),Ge.fill(),Ge.fillStyle="#fff",Ge.globalAlpha=.15,Ge.fillRect(0,0,6,56),Ge.globalAlpha=1,Ge.fillStyle="#fff",Ge.font="bold 30px sans-serif",Ge.textAlign="center",Ge.textBaseline="middle",Ge.fillText(ge,80,30);const ve=new ZE(Xe),se=new KE(new Vg({map:ve,transparent:!0,depthWrite:!1}));se.position.set(0,1.6,0),se.scale.set(2.8,1,1),Ue.add(se)}return Ue}const ct=Re(l,h,!1),rt=Re(d,p,!0);z.add(ct),z.add(rt);function Z(ne,ge){const Ue=new Float32Array(240),Ie=new hn;Ie.setAttribute("position",new ri(Ue,3)),Ie.setDrawRange(0,0);const xe=new Qo(Ie,new ta({color:new St(ne),transparent:!0,opacity:ge?.35:.6,linewidth:2}));return z.add(xe),{line:xe,positions:Ue,max:80,count:0}}const Dt=Z(l,!1),et=Z(d,!0);y.current={scene:z,camera:O,ren:D,car1:ct,car2:rt,tr1:Dt,tr2:et,n1:A,n2:x,curve:w,fr:null};const ke=S.current,Be=ne=>{var ge,me,Ue,Ie;ke.drag=!0,ke.lx=ne.clientX??((me=(ge=ne.touches)==null?void 0:ge[0])==null?void 0:me.clientX)??0,ke.ly=ne.clientY??((Ie=(Ue=ne.touches)==null?void 0:Ue[0])==null?void 0:Ie.clientY)??0},mt=ne=>{var Ue,Ie,xe,Se;if(!ke.drag)return;const ge=ne.clientX??((Ie=(Ue=ne.touches)==null?void 0:Ue[0])==null?void 0:Ie.clientX)??0,me=ne.clientY??((Se=(xe=ne.touches)==null?void 0:xe[0])==null?void 0:Se.clientY)??0;ke.angle+=(ge-ke.lx)*.005,ke.pitch=Math.max(.1,Math.min(1.4,ke.pitch+(me-ke.ly)*.005)),ke.lx=ge,ke.ly=me},nt=()=>{ke.drag=!1},dt=ne=>{ke.dist=Math.max(15,Math.min(120,ke.dist+ne.deltaY*.05))},st=D.domElement;st.addEventListener("mousedown",Be),st.addEventListener("mousemove",mt),st.addEventListener("mouseup",nt),st.addEventListener("mouseleave",nt),st.addEventListener("wheel",dt,{passive:!0}),st.addEventListener("touchstart",Be,{passive:!0}),st.addEventListener("touchmove",mt,{passive:!0}),st.addEventListener("touchend",nt);function L(){y.current.fr=requestAnimationFrame(L),ke.cinT+=3e-4;const ne=E.current;ne==="orbit"?(ke.drag||(ke.angle+=8e-4),O.position.set(Math.cos(ke.angle)*ke.dist*Math.cos(ke.pitch),ke.dist*Math.sin(ke.pitch),Math.sin(ke.angle)*ke.dist*Math.cos(ke.pitch)),O.lookAt(0,0,0)):ne==="top"&&(O.position.set(0,65,.01),O.lookAt(0,0,0)),D.render(z,O)}L();let T;const de=()=>{clearTimeout(T),T=setTimeout(()=>{P&&(O.aspect=P.clientWidth/P.clientHeight,O.updateProjectionMatrix(),D.setSize(P.clientWidth,P.clientHeight))},100)};return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),st.removeEventListener("mousedown",Be),st.removeEventListener("mousemove",mt),st.removeEventListener("mouseup",nt),st.removeEventListener("mouseleave",nt),st.removeEventListener("wheel",dt),st.removeEventListener("touchstart",Be),st.removeEventListener("touchmove",mt),st.removeEventListener("touchend",nt),cancelAnimationFrame(y.current.fr),D.dispose(),P.contains(D.domElement)&&P.removeChild(D.domElement)}},[e,l,d,h,p,g,v]),Le.useEffect(()=>{y.current.n1=A},[A]),Le.useEffect(()=>{y.current.n2=x},[x]),Le.useEffect(()=>{E.current=c},[c]),Le.useEffect(()=>{const{car1:P,car2:R,tr1:b,tr2:z,camera:O}=y.current;if(!P||!R||!e||e.length<2)return;const D=S.current;function Y(U,le,ee,B){const te=(ee==null?void 0:ee.length)>=2?ee:e,J=Ol(te,B);if(isNaN(J.x)||isNaN(J.y)||isNaN(J.z))return{x:0,y:0,z:0};U.position.set(J.x,J.y+.2,J.z);const oe=Ol(te,Math.min(1,B+.005));if(Math.abs(oe.x-J.x)+Math.abs(oe.z-J.z)>.001&&!isNaN(oe.x)&&U.lookAt(oe.x,J.y+.2,oe.z),le){const G=Math.min(le.count+1,le.max);for(let K=(G-1)*3;K>=3;K-=3)le.positions[K]=le.positions[K-3],le.positions[K+1]=le.positions[K-2],le.positions[K+2]=le.positions[K-1];le.positions[0]=J.x,le.positions[1]=J.y+.2,le.positions[2]=J.z,le.count=G,le.line.geometry.attributes.position.needsUpdate=!0,le.line.geometry.setDrawRange(0,G)}return J}const _e=Y(P,b,y.current.n1,a),w=Y(R,z,y.current.n2,a);if(O){const U=E.current;if(U==="follow1"||U==="follow2"){const le=U==="follow1"?_e:w,ee=U==="follow1"?y.current.n1||e:y.current.n2||e,B=Ol(ee,Math.min(1,a+.02)),te=B.x-le.x,J=B.z-le.z,oe=Math.sqrt(te*te+J*J)||1;O.position.set(le.x-te/oe*8,le.y+4.5,le.z-J/oe*8),O.lookAt(B.x,le.y+.3,B.z)}else if(U==="cinematic"&&y.current.curve){const le=(D.cinT+a*.3)%1,ee=y.current.curve.getPointAt(le);O.position.set(ee.x+8,ee.y+5,ee.z+8),O.lookAt((_e.x+w.x)/2,(_e.y+w.y)/2,(_e.z+w.z)/2)}}},[a,e,c])}const m1=Le.memo(function({tp:e,l1:n,l2:r,prog:a,c1:l,c2:d}){const c=Le.useRef(null),h=Le.useMemo(()=>n?ia(n):null,[n]),p=Le.useMemo(()=>r?ia(r):null,[r]);return Le.useEffect(()=>{const _=c.current;if(!_||!(e!=null&&e.length))return;const g=_.getContext("2d"),y=_.width,S=14;g.clearRect(0,0,y,y),g.fillStyle=pe.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(y-8,0),g.quadraticCurveTo(y,0,y,8),g.lineTo(y,y-8),g.quadraticCurveTo(y,y,y-8,y),g.lineTo(8,y),g.quadraticCurveTo(0,y,0,y-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let E=1/0,A=-1/0,x=1/0,v=-1/0;for(const z of e)z.x<E&&(E=z.x),z.x>A&&(A=z.x),z.z<x&&(x=z.z),z.z>v&&(v=z.z);const P=Math.max(A-E,v-x)||1,R=z=>({x:S+(z.x-E)/P*(y-S*2),y:S+(z.z-x)/P*(y-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((z,O)=>{const D=R(z);O===0?g.moveTo(D.x,D.y):g.lineTo(D.x,D.y)}),g.closePath(),g.stroke();function b(z,O){const D=(z==null?void 0:z.length)>=2?z:e,Y=Ol(D,a),_e=R(Y);g.fillStyle=O,g.shadowColor=O,g.shadowBlur=8,g.beginPath(),g.arc(_e.x,_e.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}b(h,l),b(p,d)},[e,a,n,r,l,d]),re.jsx("canvas",{ref:c,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),Sf=Le.memo(function({data1:e,data2:n,color1:r,color2:a,maxVal:l,h:d}){const c=Le.useRef(null);return Le.useEffect(()=>{const h=c.current;if(!h)return;const p=h.getContext("2d"),_=h.width,g=h.height;p.clearRect(0,0,_,g);function y(S,E){if(!(S!=null&&S.length))return;const A=Math.max(1,Math.floor(S.length/_));p.strokeStyle=E,p.lineWidth=1.5,p.beginPath();let x=!0;for(let v=0;v<S.length;v+=A){const P=v/(S.length-1)*_,R=g-S[v]/l*g*.9-g*.05;x?p.moveTo(P,R):p.lineTo(P,R),x=!1}p.stroke()}y(e,r),y(n,a)},[e,n,r,a,l]),re.jsx("canvas",{ref:c,width:320,height:d||45,style:{width:"100%",height:d||45,borderRadius:3}})}),Mf=Le.memo(function({s:e,t1:n,t2:r,c1:a,c2:l}){const d=n&&r?n-r:null,c=[pe.green,pe.yellow,pe.red];return re.jsxs("div",{style:{flex:1,padding:"5px 8px",background:pe.cardBg,borderRadius:4,borderTop:`2px solid ${c[e-1]}`},children:[re.jsxs("div",{style:{fontSize:9,color:pe.textMuted,fontFamily:pe.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),re.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[re.jsx("span",{style:{fontSize:12,color:a,fontFamily:pe.mono,fontWeight:600},children:n?n.toFixed(3):"—"}),re.jsx("span",{style:{fontSize:12,color:l,fontFamily:pe.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),d!==null&&re.jsxs("div",{style:{fontSize:11,fontWeight:700,color:d>0?pe.red:pe.green,fontFamily:pe.mono,textAlign:"center",marginTop:2},children:[d>0?"+":"",d.toFixed(3)]})]})});function g1(){var He,Qe,at,Ve,_t,ft,ht,Ut,an,Gt,mn;const s=d1(),[e,n]=Le.useState(2026),[r,a]=Le.useState([]),[l,d]=Le.useState(null),[c,h]=Le.useState([]),[p,_]=Le.useState(null),[g,y]=Le.useState([]),[S,E]=Le.useState(null),[A,x]=Le.useState(null),[v,P]=Le.useState(null),[R,b]=Le.useState(null),[z,O]=Le.useState([]),[D,Y]=Le.useState([]),[_e,w]=Le.useState(null),[U,le]=Le.useState(null),[ee,B]=Le.useState(null),[te,J]=Le.useState(null),[oe,G]=Le.useState(null),[K,j]=Le.useState([]),[I,q]=Le.useState([]),[Ce,X]=Le.useState(0),[he,ye]=Le.useState(!1),[Oe,Pe]=Le.useState(1),[Re,ct]=Le.useState(!1),[rt,Z]=Le.useState("orbit"),[Dt,et]=Le.useState("normal"),[ke,Be]=Le.useState(""),[mt,nt]=Le.useState(void 0),[dt,st]=Le.useState(""),[L,T]=Le.useState(!0),[de,ne]=Le.useState("3d"),[ge,me]=Le.useState(!1),[Ue,Ie]=Le.useState(!1),[xe,Se]=Le.useState(!1),[Ze,we]=Le.useState(""),Et=Le.useRef(null),ot=Le.useRef(null),$e=Le.useRef(null),qe=Le.useRef(!1),Ne=g.find(F=>F.driver_number===S),it=g.find(F=>F.driver_number===A),Xe=Ne?eg(Ne.team_name):"#4488ff",Ge=it?eg(it.team_name):"#ff4488",k=z.find(F=>F.lap_number===v),ve=D.find(F=>F.lap_number===R),se=k!=null&&k.lap_duration&&(ve!=null&&ve.lap_duration)?k.lap_duration-ve.lap_duration:null,De=k!=null&&k.lap_duration?Ce*k.lap_duration:0,ze=ve!=null&&ve.lap_duration?Ce*ve.lap_duration:0,vt=(Qe=(He=K.find(F=>v>=F.lap_start&&v<=F.lap_end))==null?void 0:He.compound)==null?void 0:Qe.toUpperCase(),Lt=(Ve=(at=I.find(F=>R>=F.lap_start&&R<=F.lap_end))==null?void 0:at.compound)==null?void 0:Ve.toUpperCase(),Rt=s?200:400,pn=Le.useMemo(()=>Ks(ee==null?void 0:ee.map(F=>F.speed||0),Rt),[ee,Rt]),Ct=Le.useMemo(()=>Ks(te==null?void 0:te.map(F=>F.speed||0),Rt),[te,Rt]),Yt=Le.useMemo(()=>Ks(ee==null?void 0:ee.map(F=>F.throttle||0),Rt),[ee,Rt]),on=Le.useMemo(()=>Ks(te==null?void 0:te.map(F=>F.throttle||0),Rt),[te,Rt]),is=Le.useMemo(()=>Ks(ee==null?void 0:ee.map(F=>F.brake>0?100:0),Rt),[ee,Rt]),Ci=Le.useMemo(()=>Ks(te==null?void 0:te.map(F=>F.brake>0?100:0),Rt),[te,Rt]),si=lg(ee,Ce),bi=lg(te,Ce),yi=Le.useMemo(()=>ee?Math.max(...ee.map(F=>F.speed||0)):0,[ee]),rs=Le.useMemo(()=>te?Math.max(...te.map(F=>F.speed||0)):0,[te]),ss=Le.useMemo(()=>ee!=null&&ee.length?ee.reduce((F,Me)=>F+(Me.speed||0),0)/ee.length:0,[ee]),lo=Le.useMemo(()=>te!=null&&te.length?te.reduce((F,Me)=>F+(Me.speed||0),0)/te.length:0,[te]);Le.useEffect(()=>{Be("Loading..."),st(""),tg(e).then(F=>{a(F.filter(Me=>Me.meeting_name)),d(null),_(null),h([]),y([]),E(null),x(null),G(null),Be("")}).catch(F=>{st(F.message),Be("")})},[e]),Le.useEffect(()=>{l&&(Be("Loading sessions..."),ng(l.meeting_key).then(F=>{h(F.filter(Me=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Me.session_name))),_(null),y([]),E(null),x(null),G(null),Be("")}).catch(F=>{st(F.message),Be("")}))},[l]),Le.useEffect(()=>{p&&(Be("Loading drivers..."),ig(p.session_key).then(F=>{const Me=new Set;y(F.filter(tt=>Me.has(tt.driver_number)?!1:(Me.add(tt.driver_number),!0))),E(null),x(null),G(null),Be("")}).catch(F=>{st(F.message),Be("")}))},[p]),Le.useEffect(()=>{p&&S&&(rg(p.session_key,S).then(F=>{O(F),P(null)}).catch(()=>O([])),sg(p.session_key,S).then(j).catch(()=>j([])))},[p,S]),Le.useEffect(()=>{p&&A&&(rg(p.session_key,A).then(F=>{Y(F),b(null)}).catch(()=>Y([])),sg(p.session_key,A).then(q).catch(()=>q([])))},[p,A]),Le.useEffect(()=>{if(z.length&&!v){const F=ug(z);F&&P(F.lap_number)}},[z]),Le.useEffect(()=>{if(D.length&&!R){const F=ug(D);F&&b(F.lap_number)}},[D]),Le.useEffect(()=>{if(qe.current)return;const F=Zs();F.year&&F.mk&&(qe.current=!0,n(Number(F.year)))},[]),Le.useEffect(()=>{const F=Zs();if(F.mk&&r.length&&!l){const Me=r.find(tt=>String(tt.meeting_key)===F.mk);Me&&d(Me)}},[r]),Le.useEffect(()=>{const F=Zs();if(F.sk&&c.length&&!p){const Me=c.find(tt=>String(tt.session_key)===F.sk);Me&&_(Me)}},[c]),Le.useEffect(()=>{const F=Zs();F.d1&&F.d2&&g.length&&!S&&!A&&(E(Number(F.d1)),x(Number(F.d2)))},[g]),Le.useEffect(()=>{const F=Zs();F.l1&&z.length&&!v&&P(Number(F.l1))},[z]),Le.useEffect(()=>{const F=Zs();F.l2&&D.length&&!R&&b(Number(F.l2))},[D]);const oi=Le.useCallback(async()=>{if(!(!p||!S||!A||!v||!R)){Be("Fetching telemetry..."),st(""),nt(0);try{const F=p.session_key,Me=z.find(vn=>vn.lap_number===v),tt=D.find(vn=>vn.lap_number===R);if(!(Me!=null&&Me.date_start)||!(tt!=null&&tt.date_start)){st("Lap timing unavailable."),Be("");return}const wt=new Date(new Date(Me.date_start).getTime()+(Me.lap_duration||120)*1e3).toISOString(),Tt=new Date(new Date(tt.date_start).getTime()+(tt.lap_duration||120)*1e3).toISOString();nt(20);const[ln,An]=await Promise.all([og(F,S,Me.date_start,wt),og(F,A,tt.date_start,Tt)]);nt(60);const[Gn,At]=await Promise.all([ag(F,S,Me.date_start,wt),ag(F,A,tt.date_start,Tt)]);if(ln.length<5||An.length<5){st("Insufficient data."),Be(""),nt(void 0);return}w(ln),le(An),B(Gn),J(At),G(ia(ln)),X(0),ye(!1),nt(100),setTimeout(()=>{Be(""),nt(void 0)},300)}catch(F){st(F.message),Be(""),nt(void 0)}}},[p,S,A,v,R,z,D]),os=Le.useCallback(async F=>{me(!1),Be("Loading preset..."),st("");try{n(F.year);const Me=await tg(F.year);a(Me.filter(At=>At.meeting_name));const tt=Me.find(At=>At.meeting_name===F.meeting);if(!tt)throw new Error("Not found");d(tt);const Tt=(await ng(tt.meeting_key)).filter(At=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(At.session_name));h(Tt);const ln=Tt.find(At=>At.session_name===F.session);if(!ln)throw new Error("Not found");_(ln);const An=await ig(ln.session_key),Gn=new Set;y(An.filter(At=>Gn.has(At.driver_number)?!1:(Gn.add(At.driver_number),!0))),E(F.d1),x(F.d2),Be("")}catch(Me){st(Me.message),Be("")}},[]),C=Le.useCallback(()=>{var Me;if(!l||!p)return;const F=h1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:A,l1:v,l2:R});(Me=navigator.clipboard)==null||Me.writeText(F).then(()=>{we("Copied!"),setTimeout(()=>we(""),2e3)}),window.history.replaceState(null,"",F.split(window.location.origin)[1])},[e,l,p,S,A,v,R]);p1(Et,oe,_e,U,Ce,Xe,Ge,rt,(Ne==null?void 0:Ne.name_acronym)||"",(it==null?void 0:it.name_acronym)||"",ee,Dt),Le.useEffect(()=>{if(!he){$e.current=null,ot.current&&cancelAnimationFrame(ot.current);return}function F(Me){$e.current||($e.current=Me);const tt=(Me-$e.current)/1e3;$e.current=Me,X(wt=>{const Tt=wt+tt*.015*Oe;return Tt>=1?Re?0:(ye(!1),1):Tt}),ot.current=requestAnimationFrame(F)}return ot.current=requestAnimationFrame(F),()=>{ot.current&&cancelAnimationFrame(ot.current)}},[he,Oe,Re]),Le.useEffect(()=>{const F=Me=>{Me.target.tagName==="SELECT"||Me.target.tagName==="INPUT"||(Me.code==="Space"&&(Me.preventDefault(),oe&&ye(tt=>!tt)),Me.code==="KeyR"&&(X(0),ye(!1)),Me.code==="KeyT"&&T(tt=>!tt),Me.code==="KeyC"&&Z(tt=>Nl[(Nl.indexOf(tt)+1)%Nl.length]),Me.code==="KeyL"&&ct(tt=>!tt),Me.code==="ArrowRight"&&X(tt=>Math.min(1,tt+.01)),Me.code==="ArrowLeft"&&X(tt=>Math.max(0,tt-.01)))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[oe]);const $=(ge||Ue||xe)&&re.jsx("div",{onClick:()=>{me(!1),Ie(!1),Se(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),ce=ge&&re.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:pe.carbon,border:`1px solid ${pe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":400,animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[re.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"QUICK PRESETS"}),re.jsx("button",{onClick:()=>me(!1),style:{marginLeft:"auto"},children:"✕"})]}),c1.map((F,Me)=>re.jsx("button",{onClick:()=>os(F),style:{display:"block",width:"100%",textAlign:"left",padding:"12px 14px",marginBottom:6,fontSize:13,fontFamily:pe.mono,borderLeft:`3px solid ${pe.red}`},children:F.label},Me))]}),fe=Ue&&oe&&re.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:pe.carbon,border:`1px solid ${pe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":420,animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[re.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"COMPARISON"}),re.jsx("button",{onClick:()=>Ie(!1),style:{marginLeft:"auto"},children:"✕"})]}),re.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:pe.mono},children:[re.jsx("thead",{children:re.jsxs("tr",{style:{color:pe.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[re.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:`1px solid ${pe.red}22`},children:"METRIC"}),re.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:Xe,borderBottom:`1px solid ${Xe}33`},children:(Ne==null?void 0:Ne.name_acronym)||"D1"}),re.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:Ge,borderBottom:`1px solid ${Ge}33`},children:(it==null?void 0:it.name_acronym)||"D2"})]})}),re.jsx("tbody",{children:[{m:"LAP TIME",v1:k!=null&&k.lap_duration?qr(k.lap_duration):"—",v2:ve!=null&&ve.lap_duration?qr(ve.lap_duration):"—"},{m:"TOP SPEED",v1:`${Math.round(yi)}`,v2:`${Math.round(rs)}`},{m:"AVG SPEED",v1:`${Math.round(ss)}`,v2:`${Math.round(lo)}`},{m:"SECTOR 1",v1:((_t=k==null?void 0:k.duration_sector_1)==null?void 0:_t.toFixed(3))||"—",v2:((ft=ve==null?void 0:ve.duration_sector_1)==null?void 0:ft.toFixed(3))||"—"},{m:"SECTOR 2",v1:((ht=k==null?void 0:k.duration_sector_2)==null?void 0:ht.toFixed(3))||"—",v2:((Ut=ve==null?void 0:ve.duration_sector_2)==null?void 0:Ut.toFixed(3))||"—"},{m:"SECTOR 3",v1:((an=k==null?void 0:k.duration_sector_3)==null?void 0:an.toFixed(3))||"—",v2:((Gt=ve==null?void 0:ve.duration_sector_3)==null?void 0:Gt.toFixed(3))||"—"},{m:"TYRE",v1:vt||"—",v2:Lt||"—"}].map(F=>re.jsxs("tr",{style:{borderBottom:`1px solid ${pe.borderLight}`},children:[re.jsx("td",{style:{padding:"8px 8px",color:pe.textDim,letterSpacing:"0.05em"},children:F.m}),re.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:Xe},children:F.v1}),re.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:Ge},children:F.v2})]},F.m))})]})]}),ae=xe&&re.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:pe.carbon,borderLeft:`1px solid ${pe.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${pe.borderLight}`},children:[re.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:pe.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),re.jsx("button",{onClick:()=>Se(!1),style:{marginLeft:"auto"},children:"✕"})]}),re.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(Ne==null?void 0:Ne.name_acronym)||"D1",col:Xe,laps:z,sel:v,set:P},{lab:(it==null?void 0:it.name_acronym)||"D2",col:Ge,laps:D,sel:R,set:b}].map(F=>{const Me=F.laps.filter(Tt=>Tt.lap_duration>10),tt=Me.length?Math.min(...Me.map(Tt=>Tt.lap_duration)):0,wt=Me.length?Math.max(...Me.map(Tt=>Tt.lap_duration)):0;return re.jsxs("div",{style:{marginBottom:18},children:[re.jsx("div",{style:{fontSize:12,fontWeight:700,color:F.col,marginBottom:8,fontFamily:pe.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${F.col}`,paddingLeft:8},children:F.lab}),Me.sort((Tt,ln)=>Tt.lap_duration-ln.lap_duration).map(Tt=>{const ln=wt>tt?(Tt.lap_duration-tt)/(wt-tt):0;return re.jsxs("div",{onClick:()=>F.set(Tt.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Tt.lap_number===F.sel?`${F.col}18`:"transparent",borderLeft:Tt.lap_number===F.sel?`2px solid ${F.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:pe.mono},children:[re.jsxs("span",{style:{width:30,color:pe.textMuted},children:["L",Tt.lap_number]}),re.jsx("span",{style:{fontWeight:Tt.lap_duration===tt?800:400,color:Tt.lap_duration===tt?pe.green:pe.text},children:qr(Tt.lap_duration)}),Tt.lap_duration===tt&&re.jsx("span",{style:{fontSize:9,color:pe.green,fontWeight:700,background:`${pe.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),re.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:pe.borderLight,borderRadius:2,overflow:"hidden"},children:re.jsx("div",{style:{height:"100%",width:`${(1-ln)*100}%`,background:ln<.1?pe.green:ln>.7?pe.red:pe.yellow,borderRadius:2}})})]},Tt.lap_number)})]},F.lab)})})]});return re.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:pe.carbon,color:pe.text,fontFamily:pe.sans,overflow:"hidden"},children:[re.jsx("style",{children:`
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
      `}),$,ce,fe,ae,re.jsxs("div",{style:{padding:s?"8px 10px":"0",display:"flex",alignItems:"stretch",borderBottom:`2px solid ${pe.red}`,background:`linear-gradient(180deg, ${pe.carbonLight} 0%, ${pe.carbon} 100%)`,zIndex:10,position:"relative",overflow:"hidden"},children:[re.jsx("div",{style:{width:s?4:6,background:pe.red,flexShrink:0}}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:14,padding:s?"0 8px":"10px 18px",flex:1,flexWrap:"wrap"},children:[re.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[re.jsx("span",{style:{fontSize:s?16:22,fontWeight:900,letterSpacing:"0.04em",color:"#fff",textTransform:"uppercase"},children:"Phantom"}),re.jsx("span",{style:{fontSize:s?16:22,fontWeight:300,color:pe.red,letterSpacing:"0.04em"},children:"Cars"})]}),l&&re.jsxs("span",{style:{fontSize:11,color:pe.textDim,fontWeight:600,letterSpacing:"0.05em"},children:[(mn=l.meeting_name)==null?void 0:mn.replace("Grand Prix","GP")," ",e]}),re.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6},children:[re.jsx("button",{onClick:()=>me(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&re.jsx("button",{onClick:C,style:{fontSize:10,padding:"4px 10px"},children:Ze||"SHARE"}),oe&&re.jsx("button",{onClick:()=>Ie(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),oe&&re.jsx("button",{onClick:()=>Se(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${pe.borderLight}`,background:pe.carbonLight},children:[re.jsx("select",{value:e,onChange:F=>n(Number(F.target.value)),children:[2026,2025,2024,2023].map(F=>re.jsx("option",{value:F,children:F},F))}),re.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:F=>d(r.find(Me=>Me.meeting_key===Number(F.target.value))||null),style:{minWidth:s?110:155},children:[re.jsx("option",{value:"",children:"Grand Prix"}),r.map(F=>re.jsx("option",{value:F.meeting_key,children:F.meeting_name},F.meeting_key))]}),re.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:F=>_(c.find(Me=>Me.session_key===Number(F.target.value))||null),disabled:!c.length,style:{minWidth:s?85:115},children:[re.jsx("option",{value:"",children:"Session"}),c.map(F=>re.jsx("option",{value:F.session_key,children:F.session_name},F.session_key))]}),!s&&re.jsx("div",{style:{width:1,height:20,background:`${pe.red}33`}}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:3,height:18,background:Xe,borderRadius:1}}),re.jsxs("select",{value:S||"",onChange:F=>{E(Number(F.target.value)),P(null),O([])},disabled:!g.length,style:{minWidth:s?68:100},children:[re.jsx("option",{value:"",children:"Driver 1"}),g.map(F=>re.jsx("option",{value:F.driver_number,children:F.name_acronym||`#${F.driver_number}`},F.driver_number))]}),z.length>0&&re.jsxs("select",{value:v||"",onChange:F=>P(Number(F.target.value)),style:{width:s?56:72},children:[re.jsx("option",{value:"",children:"Lap"}),z.filter(F=>F.lap_duration>10).map(F=>re.jsxs("option",{value:F.lap_number,children:["L",F.lap_number]},F.lap_number))]})]}),re.jsx("span",{style:{color:pe.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:3,height:18,background:Ge,borderRadius:1}}),re.jsxs("select",{value:A||"",onChange:F=>{x(Number(F.target.value)),b(null),Y([])},disabled:!g.length,style:{minWidth:s?68:100},children:[re.jsx("option",{value:"",children:"Driver 2"}),g.map(F=>re.jsx("option",{value:F.driver_number,children:F.name_acronym||`#${F.driver_number}`},F.driver_number))]}),D.length>0&&re.jsxs("select",{value:R||"",onChange:F=>b(Number(F.target.value)),style:{width:s?56:72},children:[re.jsx("option",{value:"",children:"Lap"}),D.filter(F=>F.lap_duration>10).map(F=>re.jsxs("option",{value:F.lap_number,children:["L",F.lap_number]},F.lap_number))]})]}),re.jsx("button",{className:"f1-btn",onClick:oi,disabled:!S||!A||!v||!R||!!ke,children:ke?"...":"COMPARE"})]}),dt&&re.jsxs("div",{style:{padding:"8px 18px",background:`${pe.red}11`,borderBottom:`1px solid ${pe.red}22`,fontSize:12,color:pe.red,display:"flex",alignItems:"center",gap:8},children:[re.jsx("span",{style:{flex:1},children:dt}),re.jsx("button",{onClick:()=>st(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),ke&&re.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${pe.borderLight}`},children:[re.jsx("div",{style:{fontSize:11,color:pe.textDim,fontFamily:pe.mono,marginBottom:4},children:ke}),mt!==void 0&&re.jsx("div",{style:{height:2,background:pe.borderLight,borderRadius:1,overflow:"hidden"},children:re.jsx("div",{style:{height:"100%",width:`${mt}%`,background:pe.red,borderRadius:1,transition:"width .3s"}})})]}),s&&oe&&re.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${pe.borderLight}`},children:["3d","telemetry"].map(F=>re.jsx("button",{onClick:()=>ne(F),style:{flex:1,borderRadius:0,borderBottom:de===F?`2px solid ${pe.red}`:"2px solid transparent",background:de===F?pe.cardBg:"transparent",fontWeight:de===F?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:F==="3d"?"Track":"Telemetry"},F))}),re.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${oe?175:130}px)`},children:[(!s||de==="3d")&&re.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[re.jsx("div",{ref:Et,style:{width:"100%",height:"100%",background:pe.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),oe&&re.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[Nl.map(F=>re.jsx("button",{onClick:()=>Z(F),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:rt===F?pe.red:pe.overlay,color:rt===F?"#fff":pe.textDim,borderColor:rt===F?pe.red:pe.borderLight,fontWeight:700},children:f1[F]},F)),re.jsx("div",{style:{width:1,height:16,background:pe.borderLight}}),re.jsx("button",{onClick:()=>et(F=>F==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:Dt==="heatmap"?"#0088ff":pe.overlay,color:Dt==="heatmap"?"#fff":pe.textDim,borderColor:Dt==="heatmap"?"#0088ff":pe.borderLight,fontWeight:700},children:"🌡 Speed"})]}),oe&&!s&&re.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:re.jsx(m1,{tp:oe,l1:_e,l2:U,prog:Ce,c1:Xe,c2:Ge})}),se!==null&&oe&&re.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:re.jsxs("div",{style:{background:pe.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${pe.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[re.jsx("div",{style:{fontSize:8,color:pe.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),re.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:pe.mono,color:se>0?pe.red:pe.green,lineHeight:1.1},children:[se>0?"+":"",se.toFixed(3),re.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),re.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[re.jsxs("span",{style:{fontSize:10,color:Xe,fontFamily:pe.mono,fontWeight:700},children:[Ne==null?void 0:Ne.name_acronym," ",qr(k==null?void 0:k.lap_duration)]}),re.jsxs("span",{style:{fontSize:10,color:Ge,fontFamily:pe.mono,fontWeight:700},children:[it==null?void 0:it.name_acronym," ",qr(ve==null?void 0:ve.lap_duration)]})]})]})}),oe&&k&&ve&&re.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[re.jsx(Mf,{s:1,t1:k.duration_sector_1,t2:ve.duration_sector_1,c1:Xe,c2:Ge}),re.jsx(Mf,{s:2,t1:k.duration_sector_2,t2:ve.duration_sector_2,c1:Xe,c2:Ge}),re.jsx(Mf,{s:3,t1:k.duration_sector_3,t2:ve.duration_sector_3,c1:Xe,c2:Ge})]}),!oe&&!ke&&re.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[re.jsx("div",{style:{fontSize:72,fontWeight:900,color:pe.red,opacity:.08,letterSpacing:"-0.03em",lineHeight:1},children:"F1"}),re.jsx("div",{style:{fontSize:s?14:17,fontWeight:700,color:pe.textMuted,marginBottom:8,letterSpacing:"0.03em"},children:"GHOST CAR COMPARISON"}),re.jsx("div",{style:{fontSize:12,color:pe.textMuted,maxWidth:340},children:"Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons."})]})]}),(!s&&L&&oe||s&&de==="telemetry"&&oe)&&re.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${pe.borderLight}`,background:pe.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:re.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[re.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:[{di:Ne,co:Xe,ct:si,tire:vt},{di:it,co:Ge,ct:bi,tire:Lt}].map((F,Me)=>{var tt;return re.jsxs("div",{style:{flex:1,background:pe.cardBg,borderRadius:6,padding:"8px 10px",borderTop:`3px solid ${F.co}`,position:"relative"},children:[re.jsx("div",{style:{fontSize:14,fontWeight:900,color:F.co,fontFamily:pe.mono,letterSpacing:"0.05em"},children:((tt=F.di)==null?void 0:tt.name_acronym)||"—"}),re.jsxs("div",{style:{fontSize:22,fontWeight:900,color:"#fff",fontFamily:pe.mono,lineHeight:1.1},children:[Math.round(F.ct.speed),re.jsx("span",{style:{fontSize:10,color:pe.textMuted,fontWeight:400},children:" km/h"})]}),re.jsxs("div",{style:{display:"flex",gap:8,marginTop:4,fontSize:10,fontFamily:pe.mono},children:[re.jsxs("span",{style:{color:F.ct.throttle>50?pe.green:pe.textMuted},children:["THR ",Math.round(F.ct.throttle),"%"]}),re.jsxs("span",{style:{color:F.ct.brake>0?pe.red:pe.textMuted},children:["BRK ",F.ct.brake>0?"ON":"OFF"]}),re.jsxs("span",{style:{color:pe.textDim},children:["G",F.ct.n_gear??F.ct.gear??"—"]})]}),F.tire&&re.jsxs("div",{style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:3},children:[re.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:l1[F.tire]||"#888"}}),re.jsx("span",{style:{fontSize:9,fontFamily:pe.mono,color:pe.textMuted},children:F.tire})]}),F.ct.drs>=10&&re.jsx("div",{style:{position:"absolute",bottom:8,right:8,fontSize:9,fontWeight:700,color:pe.green,fontFamily:pe.mono,background:`${pe.green}15`,padding:"1px 5px",borderRadius:3,animation:"pulse 1s infinite"},children:"DRS"})]},Me)})}),re.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED"}),re.jsx(Sf,{data1:pn,data2:Ct,color1:Xe,color2:Ge,maxVal:370}),re.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"THROTTLE"}),re.jsx(Sf,{data1:Yt,data2:on,color1:Xe,color2:Ge,maxVal:100}),re.jsx("div",{style:{fontSize:10,color:pe.textMuted,fontFamily:pe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),re.jsx(Sf,{data1:is,data2:Ci,color1:Xe,color2:Ge,maxVal:100,h:35})]})})]}),oe&&re.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${pe.carbonLight}, ${pe.carbon})`,borderTop:`1px solid ${pe.red}22`},children:[re.jsx("button",{onClick:()=>{X(0),ye(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),re.jsx("button",{onClick:()=>ye(!he),style:{padding:"3px 9px",fontSize:13,background:he?`${pe.red}33`:pe.cardBg,borderColor:he?pe.red:pe.border},children:he?"⏸":"▶"}),re.jsx("button",{onClick:()=>ct(!Re),style:{padding:"3px 7px",opacity:Re?1:.35,fontSize:11},children:"🔁"}),re.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:Ce,onChange:F=>X(parseFloat(F.target.value)),style:{flex:1,height:4,accentColor:pe.red}}),re.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[re.jsx("span",{style:{fontSize:10,color:Xe,fontFamily:pe.mono,fontWeight:700,lineHeight:1.2},children:qr(De)}),re.jsx("span",{style:{fontSize:10,color:Ge,fontFamily:pe.mono,fontWeight:700,lineHeight:1.2},children:qr(ze)})]}),re.jsxs("select",{value:Oe,onChange:F=>Pe(parseFloat(F.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[re.jsx("option",{value:.25,children:".25x"}),re.jsx("option",{value:.5,children:".5x"}),re.jsx("option",{value:1,children:"1x"}),re.jsx("option",{value:2,children:"2x"}),re.jsx("option",{value:4,children:"4x"})]}),!s&&re.jsx("button",{onClick:()=>T(!L),style:{padding:"3px 7px",fontSize:10,opacity:L?1:.35},children:"📊"})]})]})}N0.createRoot(document.getElementById("root")).render(re.jsx(C0.StrictMode,{children:re.jsx(g1,{})}));
