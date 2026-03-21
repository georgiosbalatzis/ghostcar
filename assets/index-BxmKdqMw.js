(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function e0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _f={exports:{}},_a={},xf={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function v_(){if(em)return Nt;em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function x(I,ee,Ae){this.props=I,this.context=ee,this.refs=A,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,ee){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ee,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=x.prototype;function D(I,ee,Ae){this.props=I,this.context=ee,this.refs=A,this.updater=Ae||S}var w=D.prototype=new y;w.constructor=D,M(w,x.prototype),w.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ee,Ae){var Q,pe={},me=null,De=null;if(ee!=null)for(Q in ee.ref!==void 0&&(De=ee.ref),ee.key!==void 0&&(me=""+ee.key),ee)k.call(ee,Q)&&!F.hasOwnProperty(Q)&&(pe[Q]=ee[Q]);var Ne=arguments.length-2;if(Ne===1)pe.children=Ae;else if(1<Ne){for(var Le=Array(Ne),it=0;it<Ne;it++)Le[it]=arguments[it+2];pe.children=Le}if(I&&I.defaultProps)for(Q in Ne=I.defaultProps,Ne)pe[Q]===void 0&&(pe[Q]=Ne[Q]);return{$$typeof:s,type:I,key:me,ref:De,props:pe,_owner:O.current}}function _e(I,ee){return{$$typeof:s,type:I.type,key:ee,ref:I.ref,props:I.props,_owner:I._owner}}function T(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function N(I){var ee={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ae){return ee[Ae]})}var Se=/\/+/g;function ge(I,ee){return typeof I=="object"&&I!==null&&I.key!=null?N(""+I.key):ee.toString(36)}function W(I,ee,Ae,Q,pe){var me=typeof I;(me==="undefined"||me==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(me){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case s:case e:De=!0}}if(De)return De=I,pe=pe(De),I=Q===""?"."+ge(De,0):Q,R(pe)?(Ae="",I!=null&&(Ae=I.replace(Se,"$&/")+"/"),W(pe,ee,Ae,"",function(it){return it})):pe!=null&&(T(pe)&&(pe=_e(pe,Ae+(!pe.key||De&&De.key===pe.key?"":(""+pe.key).replace(Se,"$&/")+"/")+I)),ee.push(pe)),1;if(De=0,Q=Q===""?".":Q+":",R(I))for(var Ne=0;Ne<I.length;Ne++){me=I[Ne];var Le=Q+ge(me,Ne);De+=W(me,ee,Ae,Le,pe)}else if(Le=_(I),typeof Le=="function")for(I=Le.call(I),Ne=0;!(me=I.next()).done;)me=me.value,Le=Q+ge(me,Ne++),De+=W(me,ee,Ae,Le,pe);else if(me==="object")throw ee=String(I),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return De}function he(I,ee,Ae){if(I==null)return I;var Q=[],pe=0;return W(I,Q,"","",function(me){return ee.call(Ae,me,pe++)}),Q}function V(I){if(I._status===-1){var ee=I._result;ee=ee(),ee.then(function(Ae){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ae)},function(Ae){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ae)}),I._status===-1&&(I._status=0,I._result=ee)}if(I._status===1)return I._result.default;throw I._result}var oe={current:null},U={transition:null},$={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:U,ReactCurrentOwner:O};function j(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:he,forEach:function(I,ee,Ae){he(I,function(){ee.apply(this,arguments)},Ae)},count:function(I){var ee=0;return he(I,function(){ee++}),ee},toArray:function(I){return he(I,function(ee){return ee})||[]},only:function(I){if(!T(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Nt.Component=x,Nt.Fragment=t,Nt.Profiler=o,Nt.PureComponent=D,Nt.StrictMode=r,Nt.Suspense=d,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,Nt.act=j,Nt.cloneElement=function(I,ee,Ae){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=M({},I.props),pe=I.key,me=I.ref,De=I._owner;if(ee!=null){if(ee.ref!==void 0&&(me=ee.ref,De=O.current),ee.key!==void 0&&(pe=""+ee.key),I.type&&I.type.defaultProps)var Ne=I.type.defaultProps;for(Le in ee)k.call(ee,Le)&&!F.hasOwnProperty(Le)&&(Q[Le]=ee[Le]===void 0&&Ne!==void 0?Ne[Le]:ee[Le])}var Le=arguments.length-2;if(Le===1)Q.children=Ae;else if(1<Le){Ne=Array(Le);for(var it=0;it<Le;it++)Ne[it]=arguments[it+2];Q.children=Ne}return{$$typeof:s,type:I.type,key:pe,ref:me,props:Q,_owner:De}},Nt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Nt.createElement=X,Nt.createFactory=function(I){var ee=X.bind(null,I);return ee.type=I,ee},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(I){return{$$typeof:u,render:I}},Nt.isValidElement=T,Nt.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:V}},Nt.memo=function(I,ee){return{$$typeof:p,type:I,compare:ee===void 0?null:ee}},Nt.startTransition=function(I){var ee=U.transition;U.transition={};try{I()}finally{U.transition=ee}},Nt.unstable_act=j,Nt.useCallback=function(I,ee){return oe.current.useCallback(I,ee)},Nt.useContext=function(I){return oe.current.useContext(I)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(I){return oe.current.useDeferredValue(I)},Nt.useEffect=function(I,ee){return oe.current.useEffect(I,ee)},Nt.useId=function(){return oe.current.useId()},Nt.useImperativeHandle=function(I,ee,Ae){return oe.current.useImperativeHandle(I,ee,Ae)},Nt.useInsertionEffect=function(I,ee){return oe.current.useInsertionEffect(I,ee)},Nt.useLayoutEffect=function(I,ee){return oe.current.useLayoutEffect(I,ee)},Nt.useMemo=function(I,ee){return oe.current.useMemo(I,ee)},Nt.useReducer=function(I,ee,Ae){return oe.current.useReducer(I,ee,Ae)},Nt.useRef=function(I){return oe.current.useRef(I)},Nt.useState=function(I){return oe.current.useState(I)},Nt.useSyncExternalStore=function(I,ee,Ae){return oe.current.useSyncExternalStore(I,ee,Ae)},Nt.useTransition=function(){return oe.current.useTransition()},Nt.version="18.3.1",Nt}var tm;function Td(){return tm||(tm=1,xf.exports=v_()),xf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function __(){if(nm)return _a;nm=1;var s=Td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,d,p){var m,g={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:S,props:g,_owner:o.current}}return _a.Fragment=t,_a.jsx=f,_a.jsxs=f,_a}var im;function x_(){return im||(im=1,_f.exports=__()),_f.exports}var H=x_(),Ce=Td();const y_=e0(Ce);var kl={},yf={exports:{}},ni={},Sf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function S_(){return rm||(rm=1,(function(s){function e(U,$){var j=U.length;U.push($);e:for(;0<j;){var I=j-1>>>1,ee=U[I];if(0<o(ee,$))U[I]=$,U[j]=ee,j=I;else break e}}function t(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var $=U[0],j=U.pop();if(j!==$){U[0]=j;e:for(var I=0,ee=U.length,Ae=ee>>>1;I<Ae;){var Q=2*(I+1)-1,pe=U[Q],me=Q+1,De=U[me];if(0>o(pe,j))me<ee&&0>o(De,pe)?(U[I]=De,U[me]=j,I=me):(U[I]=pe,U[Q]=j,I=Q);else if(me<ee&&0>o(De,j))U[I]=De,U[me]=j,I=me;else break e}}return $}function o(U,$){var j=U.sortIndex-$.sortIndex;return j!==0?j:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();s.unstable_now=function(){return f.now()-u}}var d=[],p=[],m=1,g=null,_=3,S=!1,M=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(U){for(var $=t(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=U)r(p),$.sortIndex=$.expirationTime,e(d,$);else break;$=t(p)}}function R(U){if(A=!1,w(U),!M)if(t(d)!==null)M=!0,V(k);else{var $=t(p);$!==null&&oe(R,$.startTime-U)}}function k(U,$){M=!1,A&&(A=!1,y(X),X=-1),S=!0;var j=_;try{for(w($),g=t(d);g!==null&&(!(g.expirationTime>$)||U&&!N());){var I=g.callback;if(typeof I=="function"){g.callback=null,_=g.priorityLevel;var ee=I(g.expirationTime<=$);$=s.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(d)&&r(d),w($)}else r(d);g=t(d)}if(g!==null)var Ae=!0;else{var Q=t(p);Q!==null&&oe(R,Q.startTime-$),Ae=!1}return Ae}finally{g=null,_=j,S=!1}}var O=!1,F=null,X=-1,_e=5,T=-1;function N(){return!(s.unstable_now()-T<_e)}function Se(){if(F!==null){var U=s.unstable_now();T=U;var $=!0;try{$=F(!0,U)}finally{$?ge():(O=!1,F=null)}}else O=!1}var ge;if(typeof D=="function")ge=function(){D(Se)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,he=W.port2;W.port1.onmessage=Se,ge=function(){he.postMessage(null)}}else ge=function(){x(Se,0)};function V(U){F=U,O||(O=!0,ge())}function oe(U,$){X=x(function(){U(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,V(k))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(U){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var j=_;_=$;try{return U()}finally{_=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=_;_=U;try{return $()}finally{_=j}},s.unstable_scheduleCallback=function(U,$,j){var I=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,U){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,U={id:m++,callback:$,priorityLevel:U,startTime:j,expirationTime:ee,sortIndex:-1},j>I?(U.sortIndex=j,e(p,U),t(d)===null&&U===t(p)&&(A?(y(X),X=-1):A=!0,oe(R,j-I))):(U.sortIndex=ee,e(d,U),M||S||(M=!0,V(k))),U},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(U){var $=_;return function(){var j=_;_=$;try{return U.apply(this,arguments)}finally{_=j}}}})(Mf)),Mf}var sm;function M_(){return sm||(sm=1,Sf.exports=S_()),Sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function E_(){if(om)return ni;om=1;var s=Td(),e=M_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,v,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,i,a,c){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),N=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),U=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=U&&n[U]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,I;function ee(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ae=!1;function Q(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var h=fe.stack.split(`
`),v=c.stack.split(`
`),E=h.length-1,z=v.length-1;1<=E&&0<=z&&h[E]!==v[z];)z--;for(;1<=E&&0<=z;E--,z--)if(h[E]!==v[z]){if(E!==1||z!==1)do if(E--,z--,0>z||h[E]!==v[z]){var Y=`
`+h[E].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=E&&0<=z);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function pe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case _e:return"Profiler";case X:return"StrictMode";case ge:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case Se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case V:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,v.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=it(n))}function B(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ue(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xe(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ne(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function we(n,i){i=i.checked,i!=null&&w(n,"checked",i,!1)}function Xe(n,i){we(n,i);var a=Ne(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ge(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ge(n,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ve(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ge(n,i,a){(i!=="number"||Ue(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var xt=Array.isArray;function P(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ne(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function C(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ce(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(xt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ne(a)}}function ve(n,i){var a=Ne(i.value),c=Ne(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Pe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Te(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Te(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lt,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lt=lt||document.createElement("div"),lt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function He(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(ct).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ct[i]=ct[n]})});function dt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ct.hasOwnProperty(n)&&ct[n]?(""+i).trim():i+"px"}function Mt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=dt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var rt=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ze(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function gt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bt=null,q=null,re=null;function K(n){if(n=ia(n)){if(typeof bt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=el(i),bt(n.stateNode,n.type,i))}}function le(n){q?re?re.push(n):re=[n]:q=n}function te(){if(q){var n=q,i=re;if(re=q=null,K(n),i)for(n=0;n<i.length;n++)K(i[n])}}function Me(n,i){return n(i)}function $e(){}var ft=!1;function Rt(n,i,a){if(ft)return n(i,a);ft=!0;try{return Me(n,i,a)}finally{ft=!1,(q!==null||re!==null)&&($e(),te())}}function yt(n,i){var a=n.stateNode;if(a===null)return null;var c=el(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ut=!1;if(u)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{Ut=!1}function Ri(n,i,a,c,h,v,E,z,Y){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(be){this.onError(be)}}var ye=!1,si=null,bi=!1,_i=null,ir={onError:function(n){ye=!0,si=n}};function Vi(n,i,a,c,h,v,E,z,Y){ye=!1,si=null,Ri.apply(ir,arguments)}function Rr(n,i,a,c,h,v,E,z,Y){if(Vi.apply(this,arguments),ye){if(ye){var fe=si;ye=!1,si=null}else throw Error(t(198));bi||(bi=!0,_i=fe)}}function zn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function rr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function b(n){if(zn(n)!==n)throw Error(t(188))}function ne(n){var i=n.alternate;if(!i){if(i=zn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return b(h),n;if(v===c)return b(h),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=v;else{for(var E=!1,z=h.child;z;){if(z===a){E=!0,a=h,c=v;break}if(z===c){E=!0,c=h,a=v;break}z=z.sibling}if(!E){for(z=v.child;z;){if(z===a){E=!0,a=v,c=h;break}if(z===c){E=!0,c=v,a=h;break}z=z.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ue(n){return n=ne(n),n!==null?de(n):null}function de(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=de(n);if(i!==null)return i;n=n.sibling}return null}var ae=e.unstable_scheduleCallback,We=e.unstable_cancelCallback,ot=e.unstable_shouldYield,ut=e.unstable_requestPaint,qe=e.unstable_now,Et=e.unstable_getCurrentPriorityLevel,vt=e.unstable_ImmediatePriority,_t=e.unstable_UserBlockingPriority,Ht=e.unstable_NormalPriority,hn=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,mn=null,Dt=null;function St(n){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(mn,n,void 0,(n.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:Yt,Ft=Math.log,qn=Math.LN2;function Yt(n){return n>>>=0,n===0?32:31-(Ft(n)/qn|0)|0}var wt=64,It=4194304;function Vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ln(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,v=n.pingedLanes,E=a&268435455;if(E!==0){var z=E&~h;z!==0?c=Vt(z):(v&=E,v!==0&&(c=Vt(v)))}else E=a&~h,E!==0?c=Vt(E):v!==0&&(c=Vt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,v=i&-i,h>=v||h===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-gn(i),h=1<<a,c|=n[a],i&=~h;return c}function br(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-gn(v),z=1<<E,Y=h[E];Y===-1?((z&a)===0||(z&c)!==0)&&(h[E]=br(z,i)):Y<=i&&(n.expiredLanes|=z),v&=~z}}function Wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function as(){var n=wt;return wt<<=1,(wt&4194240)===0&&(wt=64),n}function sr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Pr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-gn(i),n[i]=a}function Ha(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-gn(a),v=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~v}}function L(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-gn(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Ee=0;function tt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jt,Ot,cn,rn,ji,oi=!1,kn=[],Yn=null,ai=null,Rn=null,$n=new Map,or=new Map,Pi=[],ar="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kn(n,i){switch(n){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":$n.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(i.pointerId)}}function li(n,i,a,c,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[h]},i!==null&&(i=ia(i),i!==null&&Ot(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Xi(n,i,a,c,h){switch(i){case"focusin":return Yn=li(Yn,n,i,a,c,h),!0;case"dragenter":return ai=li(ai,n,i,a,c,h),!0;case"mouseover":return Rn=li(Rn,n,i,a,c,h),!0;case"pointerover":var v=h.pointerId;return $n.set(v,li($n.get(v)||null,n,i,a,c,h)),!0;case"gotpointercapture":return v=h.pointerId,or.set(v,li(or.get(v)||null,n,i,a,c,h)),!0}return!1}function lr(n){var i=cs(n.target);if(i!==null){var a=zn(i);if(a!==null){if(i=a.tag,i===13){if(i=rr(a),i!==null){n.blockedOn=i,ji(n.priority,function(){cn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Wc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);st=c,a.target.dispatchEvent(c),st=null}else return i=ia(a),i!==null&&Ot(i),n.blockedOn=a,!1;i.shift()}return!0}function ci(n,i,a){cr(n)&&a.delete(i)}function un(){oi=!1,Yn!==null&&cr(Yn)&&(Yn=null),ai!==null&&cr(ai)&&(ai=null),Rn!==null&&cr(Rn)&&(Rn=null),$n.forEach(ci),or.forEach(ci)}function qi(n,i){n.blockedOn===i&&(n.blockedOn=null,oi||(oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,un)))}function ls(n){function i(h){return qi(h,n)}if(0<kn.length){qi(kn[0],n);for(var a=1;a<kn.length;a++){var c=kn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Yn!==null&&qi(Yn,n),ai!==null&&qi(ai,n),Rn!==null&&qi(Rn,n),$n.forEach(i),or.forEach(i),a=0;a<Pi.length;a++)c=Pi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pi.length&&(a=Pi[0],a.blockedOn===null);)lr(a),a.blockedOn===null&&Pi.shift()}var Lr=R.ReactCurrentBatchConfig,jo=!0;function Gc(n,i,a,c){var h=Ee,v=Lr.transition;Lr.transition=null;try{Ee=1,Vc(n,i,a,c)}finally{Ee=h,Lr.transition=v}}function V0(n,i,a,c){var h=Ee,v=Lr.transition;Lr.transition=null;try{Ee=4,Vc(n,i,a,c)}finally{Ee=h,Lr.transition=v}}function Vc(n,i,a,c){if(jo){var h=Wc(n,i,a,c);if(h===null)au(n,i,c,Ga,a),Kn(n,c);else if(Xi(h,n,i,a,c))c.stopPropagation();else if(Kn(n,c),i&4&&-1<ar.indexOf(n)){for(;h!==null;){var v=ia(h);if(v!==null&&jt(v),v=Wc(n,i,a,c),v===null&&au(n,i,c,Ga,a),v===h)break;h=v}h!==null&&c.stopPropagation()}else au(n,i,c,null,a)}}var Ga=null;function Wc(n,i,a,c){if(Ga=null,n=gt(c),n=cs(n),n!==null)if(i=zn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=rr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ga=n,null}function Bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Et()){case vt:return 1;case _t:return 4;case Ht:case hn:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var Dr=null,jc=null,Va=null;function Hd(){if(Va)return Va;var n,i=jc,a=i.length,c,h="value"in Dr?Dr.value:Dr.textContent,v=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[v-c];c++);return Va=h.slice(n,1<c?1-c:void 0)}function Wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ja(){return!0}function Gd(){return!1}function ui(n){function i(a,c,h,v,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(v):v[z]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ja:Gd,this.isPropagationStopped=Gd,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=ui(Hs),Xo=j({},Hs,{view:0,detail:0}),W0=ui(Xo),qc,Yc,qo,Xa=j({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(qc=n.screenX-qo.screenX,Yc=n.screenY-qo.screenY):Yc=qc=0,qo=n),qc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),Vd=ui(Xa),j0=j({},Xa,{dataTransfer:0}),X0=ui(j0),q0=j({},Xo,{relatedTarget:0}),$c=ui(q0),Y0=j({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=ui(Y0),K0=j({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=ui(K0),J0=j({},Hs,{data:0}),Wd=ui(J0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=tv[n])?!!i[n]:!1}function Kc(){return nv}var iv=j({},Xo,{key:function(n){if(n.key){var i=Q0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(n){return n.type==="keypress"?Wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rv=ui(iv),sv=j({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=ui(sv),ov=j({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),av=ui(ov),lv=j({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=ui(lv),uv=j({},Xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=ui(uv),dv=[9,13,27,32],Zc=u&&"CompositionEvent"in window,Yo=null;u&&"documentMode"in document&&(Yo=document.documentMode);var hv=u&&"TextEvent"in window&&!Yo,Xd=u&&(!Zc||Yo&&8<Yo&&11>=Yo),qd=" ",Yd=!1;function $d(n,i){switch(n){case"keyup":return dv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function pv(n,i){switch(n){case"compositionend":return Kd(i);case"keypress":return i.which!==32?null:(Yd=!0,qd);case"textInput":return n=i.data,n===qd&&Yd?null:n;default:return null}}function mv(n,i){if(Gs)return n==="compositionend"||!Zc&&$d(n,i)?(n=Hd(),Va=jc=Dr=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xd&&i.locale!=="ko"?null:i.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!gv[n.type]:i==="textarea"}function Jd(n,i,a,c){le(c),i=Za(i,"onChange"),0<i.length&&(a=new Xc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var $o=null,Ko=null;function vv(n){gh(n,0)}function qa(n){var i=qs(n);if(B(i))return n}function _v(n,i){if(n==="change")return i}var Qd=!1;if(u){var Jc;if(u){var Qc="oninput"in document;if(!Qc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Qc=typeof eh.oninput=="function"}Jc=Qc}else Jc=!1;Qd=Jc&&(!document.documentMode||9<document.documentMode)}function th(){$o&&($o.detachEvent("onpropertychange",nh),Ko=$o=null)}function nh(n){if(n.propertyName==="value"&&qa(Ko)){var i=[];Jd(i,Ko,n,gt(n)),Rt(vv,i)}}function xv(n,i,a){n==="focusin"?(th(),$o=i,Ko=a,$o.attachEvent("onpropertychange",nh)):n==="focusout"&&th()}function yv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qa(Ko)}function Sv(n,i){if(n==="click")return qa(i)}function Mv(n,i){if(n==="input"||n==="change")return qa(i)}function Ev(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Li=typeof Object.is=="function"?Object.is:Ev;function Zo(n,i){if(Li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(i,h)||!Li(n[h],i[h]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,i){var a=ih(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ih(a)}}function sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Ue();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ue(n.document)}return i}function eu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function wv(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sh(a.ownerDocument.documentElement,a)){if(c!==null&&eu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(c.start,h);c=c.end===void 0?v:Math.min(c.end,h),!n.extend&&v>c&&(h=c,c=v,v=h),h=rh(a,v);var E=rh(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tv=u&&"documentMode"in document&&11>=document.documentMode,Vs=null,tu=null,Jo=null,nu=!1;function ah(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Vs==null||Vs!==Ue(c)||(c=Vs,"selectionStart"in c&&eu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jo&&Zo(Jo,c)||(Jo=c,c=Za(tu,"onSelect"),0<c.length&&(i=new Xc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Vs)))}function Ya(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ws={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},iu={},lh={};u&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function $a(n){if(iu[n])return iu[n];if(!Ws[n])return n;var i=Ws[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lh)return iu[n]=i[a];return n}var ch=$a("animationend"),uh=$a("animationiteration"),fh=$a("animationstart"),dh=$a("transitionend"),hh=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,i){hh.set(n,i),l(i,[n])}for(var ru=0;ru<ph.length;ru++){var su=ph[ru],Av=su.toLowerCase(),Cv=su[0].toUpperCase()+su.slice(1);Nr(Av,"on"+Cv)}Nr(ch,"onAnimationEnd"),Nr(uh,"onAnimationIteration"),Nr(fh,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(dh,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function mh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Rr(c,i,void 0,n),n.currentTarget=null}function gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var E=c.length-1;0<=E;E--){var z=c[E],Y=z.instance,fe=z.currentTarget;if(z=z.listener,Y!==v&&h.isPropagationStopped())break e;mh(h,z,fe),v=Y}else for(E=0;E<c.length;E++){if(z=c[E],Y=z.instance,fe=z.currentTarget,z=z.listener,Y!==v&&h.isPropagationStopped())break e;mh(h,z,fe),v=Y}}}if(bi)throw n=_i,bi=!1,_i=null,n}function Zt(n,i){var a=i[hu];a===void 0&&(a=i[hu]=new Set);var c=n+"__bubble";a.has(c)||(vh(i,n,2,!1),a.add(c))}function ou(n,i,a){var c=0;i&&(c|=4),vh(a,n,c,i)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ea(n){if(!n[Ka]){n[Ka]=!0,r.forEach(function(a){a!=="selectionchange"&&(Rv.has(a)||ou(a,!1,n),ou(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ka]||(i[Ka]=!0,ou("selectionchange",!1,i))}}function vh(n,i,a,c){switch(Bd(i)){case 1:var h=Gc;break;case 4:h=V0;break;default:h=Vc}a=h.bind(null,i,a,n),h=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function au(n,i,a,c,h){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&(Y=E.stateNode.containerInfo,Y===h||Y.nodeType===8&&Y.parentNode===h))return;E=E.return}for(;z!==null;){if(E=cs(z),E===null)return;if(Y=E.tag,Y===5||Y===6){c=v=E;continue e}z=z.parentNode}}c=c.return}Rt(function(){var fe=v,be=gt(a),Ie=[];e:{var Re=hh.get(n);if(Re!==void 0){var Ke=Xc,et=n;switch(n){case"keypress":if(Wa(a)===0)break e;case"keydown":case"keyup":Ke=rv;break;case"focusin":et="focus",Ke=$c;break;case"focusout":et="blur",Ke=$c;break;case"beforeblur":case"afterblur":Ke=$c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=av;break;case ch:case uh:case fh:Ke=$0;break;case dh:Ke=cv;break;case"scroll":Ke=W0;break;case"wheel":Ke=fv;break;case"copy":case"cut":case"paste":Ke=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=jd}var nt=(i&4)!==0,pn=!nt&&n==="scroll",ie=nt?Re!==null?Re+"Capture":null:Re;nt=[];for(var Z=fe,se;Z!==null;){se=Z;var ke=se.stateNode;if(se.tag===5&&ke!==null&&(se=ke,ie!==null&&(ke=yt(Z,ie),ke!=null&&nt.push(ta(Z,ke,se)))),pn)break;Z=Z.return}0<nt.length&&(Re=new Ke(Re,et,null,a,be),Ie.push({event:Re,listeners:nt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Re&&a!==st&&(et=a.relatedTarget||a.fromElement)&&(cs(et)||et[ur]))break e;if((Ke||Re)&&(Re=be.window===be?be:(Re=be.ownerDocument)?Re.defaultView||Re.parentWindow:window,Ke?(et=a.relatedTarget||a.toElement,Ke=fe,et=et?cs(et):null,et!==null&&(pn=zn(et),et!==pn||et.tag!==5&&et.tag!==6)&&(et=null)):(Ke=null,et=fe),Ke!==et)){if(nt=Vd,ke="onMouseLeave",ie="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(nt=jd,ke="onPointerLeave",ie="onPointerEnter",Z="pointer"),pn=Ke==null?Re:qs(Ke),se=et==null?Re:qs(et),Re=new nt(ke,Z+"leave",Ke,a,be),Re.target=pn,Re.relatedTarget=se,ke=null,cs(be)===fe&&(nt=new nt(ie,Z+"enter",et,a,be),nt.target=se,nt.relatedTarget=pn,ke=nt),pn=ke,Ke&&et)t:{for(nt=Ke,ie=et,Z=0,se=nt;se;se=js(se))Z++;for(se=0,ke=ie;ke;ke=js(ke))se++;for(;0<Z-se;)nt=js(nt),Z--;for(;0<se-Z;)ie=js(ie),se--;for(;Z--;){if(nt===ie||ie!==null&&nt===ie.alternate)break t;nt=js(nt),ie=js(ie)}nt=null}else nt=null;Ke!==null&&_h(Ie,Re,Ke,nt,!1),et!==null&&pn!==null&&_h(Ie,pn,et,nt,!0)}}e:{if(Re=fe?qs(fe):window,Ke=Re.nodeName&&Re.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Re.type==="file")var at=_v;else if(Zd(Re))if(Qd)at=Mv;else{at=yv;var ht=xv}else(Ke=Re.nodeName)&&Ke.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(at=Sv);if(at&&(at=at(n,fe))){Jd(Ie,at,a,be);break e}ht&&ht(n,Re,fe),n==="focusout"&&(ht=Re._wrapperState)&&ht.controlled&&Re.type==="number"&&Ge(Re,"number",Re.value)}switch(ht=fe?qs(fe):window,n){case"focusin":(Zd(ht)||ht.contentEditable==="true")&&(Vs=ht,tu=fe,Jo=null);break;case"focusout":Jo=tu=Vs=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,ah(Ie,a,be);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":ah(Ie,a,be)}var pt;if(Zc)e:{switch(n){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Gs?$d(n,a)&&(Tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Xd&&a.locale!=="ko"&&(Gs||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Gs&&(pt=Hd()):(Dr=be,jc="value"in Dr?Dr.value:Dr.textContent,Gs=!0)),ht=Za(fe,Tt),0<ht.length&&(Tt=new Wd(Tt,n,null,a,be),Ie.push({event:Tt,listeners:ht}),pt?Tt.data=pt:(pt=Kd(a),pt!==null&&(Tt.data=pt)))),(pt=hv?pv(n,a):mv(n,a))&&(fe=Za(fe,"onBeforeInput"),0<fe.length&&(be=new Wd("onBeforeInput","beforeinput",null,a,be),Ie.push({event:be,listeners:fe}),be.data=pt))}gh(Ie,i)})}function ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Za(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=yt(n,a),v!=null&&c.unshift(ta(n,v,h)),v=yt(n,i),v!=null&&c.push(ta(n,v,h))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,a,c,h){for(var v=i._reactName,E=[];a!==null&&a!==c;){var z=a,Y=z.alternate,fe=z.stateNode;if(Y!==null&&Y===c)break;z.tag===5&&fe!==null&&(z=fe,h?(Y=yt(a,v),Y!=null&&E.unshift(ta(a,Y,z))):h||(Y=yt(a,v),Y!=null&&E.push(ta(a,Y,z)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var bv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(bv,`
`).replace(Pv,"")}function Ja(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Qa(){}var lu=null,cu=null;function uu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(Nv)}:fu;function Nv(n){setTimeout(function(){throw n})}function du(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ls(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ls(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Xs,na="__reactProps$"+Xs,ur="__reactContainer$"+Xs,hu="__reactEvents$"+Xs,Iv="__reactListeners$"+Xs,Uv="__reactHandles$"+Xs;function cs(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ur]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Sh(n);n!==null;){if(a=n[Yi])return a;n=Sh(n)}return i}n=a,a=n.parentNode}return null}function ia(n){return n=n[Yi]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function el(n){return n[na]||null}var pu=[],Ys=-1;function Ur(n){return{current:n}}function Jt(n){0>Ys||(n.current=pu[Ys],pu[Ys]=null,Ys--)}function $t(n,i){Ys++,pu[Ys]=n.current,n.current=i}var Fr={},Ln=Ur(Fr),Zn=Ur(!1),us=Fr;function $s(n,i){var a=n.type.contextTypes;if(!a)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Jn(n){return n=n.childContextTypes,n!=null}function tl(){Jt(Zn),Jt(Ln)}function Mh(n,i,a){if(Ln.current!==Fr)throw Error(t(168));$t(Ln,i),$t(Zn,a)}function Eh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,De(n)||"Unknown",h));return j({},a,c)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,us=Ln.current,$t(Ln,n),$t(Zn,Zn.current),!0}function wh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Eh(n,i,us),c.__reactInternalMemoizedMergedChildContext=n,Jt(Zn),Jt(Ln),$t(Ln,n)):Jt(Zn),$t(Zn,a)}var fr=null,il=!1,mu=!1;function Th(n){fr===null?fr=[n]:fr.push(n)}function Fv(n){il=!0,Th(n)}function Or(){if(!mu&&fr!==null){mu=!0;var n=0,i=Ee;try{var a=fr;for(Ee=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,il=!1}catch(h){throw fr!==null&&(fr=fr.slice(n+1)),ae(vt,Or),h}finally{Ee=i,mu=!1}}return null}var Ks=[],Zs=0,rl=null,sl=0,xi=[],yi=0,fs=null,dr=1,hr="";function ds(n,i){Ks[Zs++]=sl,Ks[Zs++]=rl,rl=n,sl=i}function Ah(n,i,a){xi[yi++]=dr,xi[yi++]=hr,xi[yi++]=fs,fs=n;var c=dr;n=hr;var h=32-gn(c)-1;c&=~(1<<h),a+=1;var v=32-gn(i)+h;if(30<v){var E=h-h%5;v=(c&(1<<E)-1).toString(32),c>>=E,h-=E,dr=1<<32-gn(i)+h|a<<h|c,hr=v+n}else dr=1<<v|a<<h|c,hr=n}function gu(n){n.return!==null&&(ds(n,1),Ah(n,1,0))}function vu(n){for(;n===rl;)rl=Ks[--Zs],Ks[Zs]=null,sl=Ks[--Zs],Ks[Zs]=null;for(;n===fs;)fs=xi[--yi],xi[yi]=null,hr=xi[--yi],xi[yi]=null,dr=xi[--yi],xi[yi]=null}var fi=null,di=null,en=!1,Di=null;function Ch(n,i){var a=wi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Rh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,di=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=fs!==null?{id:dr,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,di=null,!0):!1;default:return!1}}function _u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xu(n){if(en){var i=di;if(i){var a=i;if(!Rh(n,i)){if(_u(n))throw Error(t(418));i=Ir(a.nextSibling);var c=fi;i&&Rh(n,i)?Ch(c,a):(n.flags=n.flags&-4097|2,en=!1,fi=n)}}else{if(_u(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,fi=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function ol(n){if(n!==fi)return!1;if(!en)return bh(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!uu(n.type,n.memoizedProps)),i&&(i=di)){if(_u(n))throw Ph(),Error(t(418));for(;i;)Ch(n,i),i=Ir(i.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){di=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}di=null}}else di=fi?Ir(n.stateNode.nextSibling):null;return!0}function Ph(){for(var n=di;n;)n=Ir(n.nextSibling)}function Js(){di=fi=null,en=!1}function yu(n){Di===null?Di=[n]:Di.push(n)}var Ov=R.ReactCurrentBatchConfig;function ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(E){var z=h.refs;E===null?delete z[v]:z[v]=E},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function al(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Lh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(ie,Z){if(n){var se=ie.deletions;se===null?(ie.deletions=[Z],ie.flags|=16):se.push(Z)}}function a(ie,Z){if(!n)return null;for(;Z!==null;)i(ie,Z),Z=Z.sibling;return null}function c(ie,Z){for(ie=new Map;Z!==null;)Z.key!==null?ie.set(Z.key,Z):ie.set(Z.index,Z),Z=Z.sibling;return ie}function h(ie,Z){return ie=jr(ie,Z),ie.index=0,ie.sibling=null,ie}function v(ie,Z,se){return ie.index=se,n?(se=ie.alternate,se!==null?(se=se.index,se<Z?(ie.flags|=2,Z):se):(ie.flags|=2,Z)):(ie.flags|=1048576,Z)}function E(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function z(ie,Z,se,ke){return Z===null||Z.tag!==6?(Z=df(se,ie.mode,ke),Z.return=ie,Z):(Z=h(Z,se),Z.return=ie,Z)}function Y(ie,Z,se,ke){var at=se.type;return at===F?be(ie,Z,se.props.children,ke,se.key):Z!==null&&(Z.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===V&&Lh(at)===Z.type)?(ke=h(Z,se.props),ke.ref=ra(ie,Z,se),ke.return=ie,ke):(ke=Ll(se.type,se.key,se.props,null,ie.mode,ke),ke.ref=ra(ie,Z,se),ke.return=ie,ke)}function fe(ie,Z,se,ke){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==se.containerInfo||Z.stateNode.implementation!==se.implementation?(Z=hf(se,ie.mode,ke),Z.return=ie,Z):(Z=h(Z,se.children||[]),Z.return=ie,Z)}function be(ie,Z,se,ke,at){return Z===null||Z.tag!==7?(Z=ys(se,ie.mode,ke,at),Z.return=ie,Z):(Z=h(Z,se),Z.return=ie,Z)}function Ie(ie,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=df(""+Z,ie.mode,se),Z.return=ie,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:return se=Ll(Z.type,Z.key,Z.props,null,ie.mode,se),se.ref=ra(ie,null,Z),se.return=ie,se;case O:return Z=hf(Z,ie.mode,se),Z.return=ie,Z;case V:var ke=Z._init;return Ie(ie,ke(Z._payload),se)}if(xt(Z)||$(Z))return Z=ys(Z,ie.mode,se,null),Z.return=ie,Z;al(ie,Z)}return null}function Re(ie,Z,se,ke){var at=Z!==null?Z.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return at!==null?null:z(ie,Z,""+se,ke);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return se.key===at?Y(ie,Z,se,ke):null;case O:return se.key===at?fe(ie,Z,se,ke):null;case V:return at=se._init,Re(ie,Z,at(se._payload),ke)}if(xt(se)||$(se))return at!==null?null:be(ie,Z,se,ke,null);al(ie,se)}return null}function Ke(ie,Z,se,ke,at){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return ie=ie.get(se)||null,z(Z,ie,""+ke,at);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case k:return ie=ie.get(ke.key===null?se:ke.key)||null,Y(Z,ie,ke,at);case O:return ie=ie.get(ke.key===null?se:ke.key)||null,fe(Z,ie,ke,at);case V:var ht=ke._init;return Ke(ie,Z,se,ht(ke._payload),at)}if(xt(ke)||$(ke))return ie=ie.get(se)||null,be(Z,ie,ke,at,null);al(Z,ke)}return null}function et(ie,Z,se,ke){for(var at=null,ht=null,pt=Z,Tt=Z=0,Tn=null;pt!==null&&Tt<se.length;Tt++){pt.index>Tt?(Tn=pt,pt=null):Tn=pt.sibling;var Bt=Re(ie,pt,se[Tt],ke);if(Bt===null){pt===null&&(pt=Tn);break}n&&pt&&Bt.alternate===null&&i(ie,pt),Z=v(Bt,Z,Tt),ht===null?at=Bt:ht.sibling=Bt,ht=Bt,pt=Tn}if(Tt===se.length)return a(ie,pt),en&&ds(ie,Tt),at;if(pt===null){for(;Tt<se.length;Tt++)pt=Ie(ie,se[Tt],ke),pt!==null&&(Z=v(pt,Z,Tt),ht===null?at=pt:ht.sibling=pt,ht=pt);return en&&ds(ie,Tt),at}for(pt=c(ie,pt);Tt<se.length;Tt++)Tn=Ke(pt,ie,Tt,se[Tt],ke),Tn!==null&&(n&&Tn.alternate!==null&&pt.delete(Tn.key===null?Tt:Tn.key),Z=v(Tn,Z,Tt),ht===null?at=Tn:ht.sibling=Tn,ht=Tn);return n&&pt.forEach(function(Xr){return i(ie,Xr)}),en&&ds(ie,Tt),at}function nt(ie,Z,se,ke){var at=$(se);if(typeof at!="function")throw Error(t(150));if(se=at.call(se),se==null)throw Error(t(151));for(var ht=at=null,pt=Z,Tt=Z=0,Tn=null,Bt=se.next();pt!==null&&!Bt.done;Tt++,Bt=se.next()){pt.index>Tt?(Tn=pt,pt=null):Tn=pt.sibling;var Xr=Re(ie,pt,Bt.value,ke);if(Xr===null){pt===null&&(pt=Tn);break}n&&pt&&Xr.alternate===null&&i(ie,pt),Z=v(Xr,Z,Tt),ht===null?at=Xr:ht.sibling=Xr,ht=Xr,pt=Tn}if(Bt.done)return a(ie,pt),en&&ds(ie,Tt),at;if(pt===null){for(;!Bt.done;Tt++,Bt=se.next())Bt=Ie(ie,Bt.value,ke),Bt!==null&&(Z=v(Bt,Z,Tt),ht===null?at=Bt:ht.sibling=Bt,ht=Bt);return en&&ds(ie,Tt),at}for(pt=c(ie,pt);!Bt.done;Tt++,Bt=se.next())Bt=Ke(pt,ie,Tt,Bt.value,ke),Bt!==null&&(n&&Bt.alternate!==null&&pt.delete(Bt.key===null?Tt:Bt.key),Z=v(Bt,Z,Tt),ht===null?at=Bt:ht.sibling=Bt,ht=Bt);return n&&pt.forEach(function(g_){return i(ie,g_)}),en&&ds(ie,Tt),at}function pn(ie,Z,se,ke){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case k:e:{for(var at=se.key,ht=Z;ht!==null;){if(ht.key===at){if(at=se.type,at===F){if(ht.tag===7){a(ie,ht.sibling),Z=h(ht,se.props.children),Z.return=ie,ie=Z;break e}}else if(ht.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===V&&Lh(at)===ht.type){a(ie,ht.sibling),Z=h(ht,se.props),Z.ref=ra(ie,ht,se),Z.return=ie,ie=Z;break e}a(ie,ht);break}else i(ie,ht);ht=ht.sibling}se.type===F?(Z=ys(se.props.children,ie.mode,ke,se.key),Z.return=ie,ie=Z):(ke=Ll(se.type,se.key,se.props,null,ie.mode,ke),ke.ref=ra(ie,Z,se),ke.return=ie,ie=ke)}return E(ie);case O:e:{for(ht=se.key;Z!==null;){if(Z.key===ht)if(Z.tag===4&&Z.stateNode.containerInfo===se.containerInfo&&Z.stateNode.implementation===se.implementation){a(ie,Z.sibling),Z=h(Z,se.children||[]),Z.return=ie,ie=Z;break e}else{a(ie,Z);break}else i(ie,Z);Z=Z.sibling}Z=hf(se,ie.mode,ke),Z.return=ie,ie=Z}return E(ie);case V:return ht=se._init,pn(ie,Z,ht(se._payload),ke)}if(xt(se))return et(ie,Z,se,ke);if($(se))return nt(ie,Z,se,ke);al(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Z!==null&&Z.tag===6?(a(ie,Z.sibling),Z=h(Z,se),Z.return=ie,ie=Z):(a(ie,Z),Z=df(se,ie.mode,ke),Z.return=ie,ie=Z),E(ie)):a(ie,Z)}return pn}var Qs=Dh(!0),Nh=Dh(!1),ll=Ur(null),cl=null,eo=null,Su=null;function Mu(){Su=eo=cl=null}function Eu(n){var i=ll.current;Jt(ll),n._currentValue=i}function wu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){cl=n,Su=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qn=!0),n.firstContext=null)}function Si(n){var i=n._currentValue;if(Su!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(cl===null)throw Error(t(308));eo=n,cl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var hs=null;function Tu(n){hs===null?hs=[n]:hs.push(n)}function Ih(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Tu(i)):(a.next=h.next,h.next=a),i.interleaved=a,pr(n,c)}function pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var zr=!1;function Au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(zt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,pr(n,a)}return h=c.interleaved,h===null?(i.next=i,Tu(c)):(i.next=h.next,h.next=i),c.interleaved=i,pr(n,a)}function ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,L(n,a)}}function Fh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=E:v=v.next=E,a=a.next}while(a!==null);v===null?h=v=i:v=v.next=i}else h=v=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function fl(n,i,a,c){var h=n.updateQueue;zr=!1;var v=h.firstBaseUpdate,E=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var Y=z,fe=Y.next;Y.next=null,E===null?v=fe:E.next=fe,E=Y;var be=n.alternate;be!==null&&(be=be.updateQueue,z=be.lastBaseUpdate,z!==E&&(z===null?be.firstBaseUpdate=fe:z.next=fe,be.lastBaseUpdate=Y))}if(v!==null){var Ie=h.baseState;E=0,be=fe=Y=null,z=v;do{var Re=z.lane,Ke=z.eventTime;if((c&Re)===Re){be!==null&&(be=be.next={eventTime:Ke,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var et=n,nt=z;switch(Re=i,Ke=a,nt.tag){case 1:if(et=nt.payload,typeof et=="function"){Ie=et.call(Ke,Ie,Re);break e}Ie=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=nt.payload,Re=typeof et=="function"?et.call(Ke,Ie,Re):et,Re==null)break e;Ie=j({},Ie,Re);break e;case 2:zr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Re=h.effects,Re===null?h.effects=[z]:Re.push(z))}else Ke={eventTime:Ke,lane:Re,tag:z.tag,payload:z.payload,callback:z.callback,next:null},be===null?(fe=be=Ke,Y=Ie):be=be.next=Ke,E|=Re;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;Re=z,z=Re.next,Re.next=null,h.lastBaseUpdate=Re,h.shared.pending=null}}while(!0);if(be===null&&(Y=Ie),h.baseState=Y,h.firstBaseUpdate=fe,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else v===null&&(h.shared.lanes=0);gs|=E,n.lanes=E,n.memoizedState=Ie}}function Oh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var sa={},$i=Ur(sa),oa=Ur(sa),aa=Ur(sa);function ps(n){if(n===sa)throw Error(t(174));return n}function Cu(n,i){switch($t(aa,i),$t(oa,n),$t($i,sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:mt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=mt(i,n)}Jt($i),$t($i,i)}function no(){Jt($i),Jt(oa),Jt(aa)}function zh(n){ps(aa.current);var i=ps($i.current),a=mt(i,n.type);i!==a&&($t(oa,n),$t($i,a))}function Ru(n){oa.current===n&&(Jt($i),Jt(oa))}var sn=Ur(0);function dl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Pu(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var hl=R.ReactCurrentDispatcher,Lu=R.ReactCurrentBatchConfig,ms=0,on=null,xn=null,En=null,pl=!1,la=!1,ca=0,zv=0;function Dn(){throw Error(t(321))}function Du(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Li(n[a],i[a]))return!1;return!0}function Nu(n,i,a,c,h,v){if(ms=v,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hl.current=n===null||n.memoizedState===null?Gv:Vv,n=a(c,h),la){v=0;do{if(la=!1,ca=0,25<=v)throw Error(t(301));v+=1,En=xn=null,i.updateQueue=null,hl.current=Wv,n=a(c,h)}while(la)}if(hl.current=vl,i=xn!==null&&xn.next!==null,ms=0,En=xn=on=null,pl=!1,i)throw Error(t(300));return n}function Iu(){var n=ca!==0;return ca=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?on.memoizedState=En=n:En=En.next=n,En}function Mi(){if(xn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var i=En===null?on.memoizedState:En.next;if(i!==null)En=i,xn=n;else{if(n===null)throw Error(t(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},En===null?on.memoizedState=En=n:En=En.next=n}return En}function ua(n,i){return typeof i=="function"?i(n):i}function Uu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=xn,h=c.baseQueue,v=a.pending;if(v!==null){if(h!==null){var E=h.next;h.next=v.next,v.next=E}c.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,c=c.baseState;var z=E=null,Y=null,fe=v;do{var be=fe.lane;if((ms&be)===be)Y!==null&&(Y=Y.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Ie={lane:be,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Y===null?(z=Y=Ie,E=c):Y=Y.next=Ie,on.lanes|=be,gs|=be}fe=fe.next}while(fe!==null&&fe!==v);Y===null?E=c:Y.next=z,Li(c,i.memoizedState)||(Qn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=Y,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do v=h.lane,on.lanes|=v,gs|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Fu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,v=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do v=n(v,E.action),E=E.next;while(E!==h);Li(v,i.memoizedState)||(Qn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function kh(){}function Bh(n,i){var a=on,c=Mi(),h=i(),v=!Li(c.memoizedState,h);if(v&&(c.memoizedState=h,Qn=!0),c=c.queue,Ou(Vh.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,fa(9,Gh.bind(null,a,c,h,i),void 0,null),wn===null)throw Error(t(349));(ms&30)!==0||Hh(a,i,h)}return h}function Hh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,c){i.value=a,i.getSnapshot=c,Wh(i)&&jh(n)}function Vh(n,i,a){return a(function(){Wh(i)&&jh(n)})}function Wh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Li(n,a)}catch{return!0}}function jh(n){var i=pr(n,1);i!==null&&Fi(i,n,1,-1)}function Xh(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},i.queue=n,n=n.dispatch=Hv.bind(null,on,n),[i.memoizedState,n]}function fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function qh(){return Mi().memoizedState}function ml(n,i,a,c){var h=Ki();on.flags|=n,h.memoizedState=fa(1|i,a,void 0,c===void 0?null:c)}function gl(n,i,a,c){var h=Mi();c=c===void 0?null:c;var v=void 0;if(xn!==null){var E=xn.memoizedState;if(v=E.destroy,c!==null&&Du(c,E.deps)){h.memoizedState=fa(i,a,v,c);return}}on.flags|=n,h.memoizedState=fa(1|i,a,v,c)}function Yh(n,i){return ml(8390656,8,n,i)}function Ou(n,i){return gl(2048,8,n,i)}function $h(n,i){return gl(4,2,n,i)}function Kh(n,i){return gl(4,4,n,i)}function Zh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jh(n,i,a){return a=a!=null?a.concat([n]):null,gl(4,4,Zh.bind(null,i,n),a)}function zu(){}function Qh(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Du(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ep(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Du(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tp(n,i,a){return(ms&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=a):(Li(a,i)||(a=as(),on.lanes|=a,gs|=a,n.baseState=!0),i)}function kv(n,i){var a=Ee;Ee=a!==0&&4>a?a:4,n(!0);var c=Lu.transition;Lu.transition={};try{n(!1),i()}finally{Ee=a,Lu.transition=c}}function np(){return Mi().memoizedState}function Bv(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,a);else if(a=Ih(n,i,a,c),a!==null){var h=Hn();Fi(a,n,c,h),sp(a,i,c)}}function Hv(n,i,a){var c=Vr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var E=i.lastRenderedState,z=v(E,a);if(h.hasEagerState=!0,h.eagerState=z,Li(z,E)){var Y=i.interleaved;Y===null?(h.next=h,Tu(i)):(h.next=Y.next,Y.next=h),i.interleaved=h;return}}catch{}finally{}a=Ih(n,i,h,c),a!==null&&(h=Hn(),Fi(a,n,c,h),sp(a,i,c))}}function ip(n){var i=n.alternate;return n===on||i!==null&&i===on}function rp(n,i){la=pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,L(n,a)}}var vl={readContext:Si,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Gv={readContext:Si,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Si,useEffect:Yh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ml(4194308,4,Zh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ml(4194308,4,n,i)},useInsertionEffect:function(n,i){return ml(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Bv.bind(null,on,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:zu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=kv.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=on,h=Ki();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wn===null)throw Error(t(349));(ms&30)!==0||Hh(c,i,a)}h.memoizedState=a;var v={value:a,getSnapshot:i};return h.queue=v,Yh(Vh.bind(null,c,v,n),[n]),c.flags|=2048,fa(9,Gh.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=Ki(),i=wn.identifierPrefix;if(en){var a=hr,c=dr;a=(c&~(1<<32-gn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=zv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Vv={readContext:Si,useCallback:Qh,useContext:Si,useEffect:Ou,useImperativeHandle:Jh,useInsertionEffect:$h,useLayoutEffect:Kh,useMemo:ep,useReducer:Uu,useRef:qh,useState:function(){return Uu(ua)},useDebugValue:zu,useDeferredValue:function(n){var i=Mi();return tp(i,xn.memoizedState,n)},useTransition:function(){var n=Uu(ua)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1},Wv={readContext:Si,useCallback:Qh,useContext:Si,useEffect:Ou,useImperativeHandle:Jh,useInsertionEffect:$h,useLayoutEffect:Kh,useMemo:ep,useReducer:Fu,useRef:qh,useState:function(){return Fu(ua)},useDebugValue:zu,useDeferredValue:function(n){var i=Mi();return xn===null?i.memoizedState=n:tp(i,xn.memoizedState,n)},useTransition:function(){var n=Fu(ua)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1};function Ni(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ku(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var _l={isMounted:function(n){return(n=n._reactInternals)?zn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Hn(),h=Vr(n),v=mr(c,h);v.payload=i,a!=null&&(v.callback=a),i=kr(n,v,h),i!==null&&(Fi(i,n,h,c),ul(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Hn(),h=Vr(n),v=mr(c,h);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=kr(n,v,h),i!==null&&(Fi(i,n,h,c),ul(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Hn(),c=Vr(n),h=mr(a,c);h.tag=2,i!=null&&(h.callback=i),i=kr(n,h,c),i!==null&&(Fi(i,n,c,a),ul(i,n,c))}};function op(n,i,a,c,h,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,E):i.prototype&&i.prototype.isPureReactComponent?!Zo(a,c)||!Zo(h,v):!0}function ap(n,i,a){var c=!1,h=Fr,v=i.contextType;return typeof v=="object"&&v!==null?v=Si(v):(h=Jn(i)?us:Ln.current,c=i.contextTypes,v=(c=c!=null)?$s(n,h):Fr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=_l,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),i}function lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&_l.enqueueReplaceState(i,i.state,null)}function Bu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Au(n);var v=i.contextType;typeof v=="object"&&v!==null?h.context=Si(v):(v=Jn(i)?us:Ln.current,h.context=$s(n,v)),h.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(ku(n,i,v,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&_l.enqueueReplaceState(h,h.state,null),fl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,i){try{var a="",c=i;do a+=pe(c),c=c.return;while(c);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:h,digest:null}}function Hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Gu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Tl||(Tl=!0,rf=c),Gu(n,i)},a}function up(n,i,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Gu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Gu(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new jv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=s_.bind(null,n,i,a),i.then(n,n))}function dp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=mr(-1,1),i.tag=2,kr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Xv=R.ReactCurrentOwner,Qn=!1;function Bn(n,i,a,c){i.child=n===null?Nh(i,null,a,c):Qs(i,n.child,a,c)}function pp(n,i,a,c,h){a=a.render;var v=i.ref;return to(i,h),c=Nu(n,i,a,c,v,h),a=Iu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,gr(n,i,h)):(en&&a&&gu(i),i.flags|=1,Bn(n,i,c,h),i.child)}function mp(n,i,a,c,h){if(n===null){var v=a.type;return typeof v=="function"&&!ff(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,gp(n,i,v,c,h)):(n=Ll(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&h)===0){var E=v.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(E,c)&&n.ref===i.ref)return gr(n,i,h)}return i.flags|=1,n=jr(v,c),n.ref=i.ref,n.return=i,i.child=n}function gp(n,i,a,c,h){if(n!==null){var v=n.memoizedProps;if(Zo(v,c)&&n.ref===i.ref)if(Qn=!1,i.pendingProps=c=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Qn=!0);else return i.lanes=n.lanes,gr(n,i,h)}return Vu(n,i,a,c,h)}function vp(n,i,a){var c=i.pendingProps,h=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(so,hi),hi|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t(so,hi),hi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,$t(so,hi),hi|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,$t(so,hi),hi|=c;return Bn(n,i,h,a),i.child}function _p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Vu(n,i,a,c,h){var v=Jn(a)?us:Ln.current;return v=$s(i,v),to(i,h),a=Nu(n,i,a,c,v,h),c=Iu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,gr(n,i,h)):(en&&c&&gu(i),i.flags|=1,Bn(n,i,a,h),i.child)}function xp(n,i,a,c,h){if(Jn(a)){var v=!0;nl(i)}else v=!1;if(to(i,h),i.stateNode===null)yl(n,i),ap(i,a,c),Bu(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,z=i.memoizedProps;E.props=z;var Y=E.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=Si(fe):(fe=Jn(a)?us:Ln.current,fe=$s(i,fe));var be=a.getDerivedStateFromProps,Ie=typeof be=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ie||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(z!==c||Y!==fe)&&lp(i,E,c,fe),zr=!1;var Re=i.memoizedState;E.state=Re,fl(i,c,E,h),Y=i.memoizedState,z!==c||Re!==Y||Zn.current||zr?(typeof be=="function"&&(ku(i,a,be,c),Y=i.memoizedState),(z=zr||op(i,a,z,c,Re,Y,fe))?(Ie||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),E.props=c,E.state=Y,E.context=fe,c=z):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Uh(n,i),z=i.memoizedProps,fe=i.type===i.elementType?z:Ni(i.type,z),E.props=fe,Ie=i.pendingProps,Re=E.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=Si(Y):(Y=Jn(a)?us:Ln.current,Y=$s(i,Y));var Ke=a.getDerivedStateFromProps;(be=typeof Ke=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(z!==Ie||Re!==Y)&&lp(i,E,c,Y),zr=!1,Re=i.memoizedState,E.state=Re,fl(i,c,E,h);var et=i.memoizedState;z!==Ie||Re!==et||Zn.current||zr?(typeof Ke=="function"&&(ku(i,a,Ke,c),et=i.memoizedState),(fe=zr||op(i,a,fe,c,Re,et,Y)||!1)?(be||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,et,Y),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,et,Y)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=et),E.props=c,E.state=et,E.context=Y,c=fe):(typeof E.componentDidUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return Wu(n,i,a,c,v,h)}function Wu(n,i,a,c,h,v){_p(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&wh(i,a,!1),gr(n,i,v);c=i.stateNode,Xv.current=i;var z=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Qs(i,n.child,null,v),i.child=Qs(i,null,z,v)):Bn(n,i,z,v),i.memoizedState=c.state,h&&wh(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mh(n,i.context,!1),Cu(n,i.containerInfo)}function Sp(n,i,a,c,h){return Js(),yu(h),i.flags|=256,Bn(n,i,a,c),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Xu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mp(n,i,a){var c=i.pendingProps,h=sn.current,v=!1,E=(i.flags&128)!==0,z;if((z=E)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),$t(sn,h&1),n===null)return xu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,v?(c=i.mode,v=i.child,E={mode:"hidden",children:E},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Dl(E,c,0,null),n=ys(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Xu(a),i.memoizedState=ju,n):qu(i,E));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return qv(n,i,E,c,z,h,a);if(v){v=c.fallback,E=i.mode,h=n.child,z=h.sibling;var Y={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=jr(h,Y),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?v=jr(z,v):(v=ys(v,E,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,E=n.child.memoizedState,E=E===null?Xu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~a,i.memoizedState=ju,c}return v=n.child,n=v.sibling,c=jr(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function qu(n,i){return i=Dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function xl(n,i,a,c){return c!==null&&yu(c),Qs(i,n.child,null,a),n=qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function qv(n,i,a,c,h,v,E){if(a)return i.flags&256?(i.flags&=-257,c=Hu(Error(t(422))),xl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,h=i.mode,c=Dl({mode:"visible",children:c.children},h,0,null),v=ys(v,h,E,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&Qs(i,n.child,null,E),i.child.memoizedState=Xu(E),i.memoizedState=ju,v);if((i.mode&1)===0)return xl(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,v=Error(t(419)),c=Hu(v,c,void 0),xl(n,i,E,c)}if(z=(E&n.childLanes)!==0,Qn||z){if(c=wn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,pr(n,h),Fi(c,n,h,-1))}return uf(),c=Hu(Error(t(421))),xl(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=o_.bind(null,n),h._reactRetry=i,null):(n=v.treeContext,di=Ir(h.nextSibling),fi=i,en=!0,Di=null,n!==null&&(xi[yi++]=dr,xi[yi++]=hr,xi[yi++]=fs,dr=n.id,hr=n.overflow,fs=i),i=qu(i,c.children),i.flags|=4096,i)}function Ep(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),wu(n.return,i,a)}function Yu(n,i,a,c,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=h)}function wp(n,i,a){var c=i.pendingProps,h=c.revealOrder,v=c.tail;if(Bn(n,i,c.children,a),c=sn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ep(n,a,i);else if(n.tag===19)Ep(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($t(sn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&dl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Yu(i,!1,h,a,v);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&dl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Yu(i,!0,a,null,v);break;case"together":Yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function gr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),gs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Yv(n,i,a){switch(i.tag){case 3:yp(i),Js();break;case 5:zh(i);break;case 1:Jn(i.type)&&nl(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;$t(ll,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($t(sn,sn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mp(n,i,a):($t(sn,sn.current&1),n=gr(n,i,a),n!==null?n.sibling:null);$t(sn,sn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$t(sn,sn.current),c)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,a)}return gr(n,i,a)}var Tp,$u,Ap,Cp;Tp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$u=function(){},Ap=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,ps($i.current);var v=null;switch(a){case"input":h=xe(n,h),c=xe(n,c),v=[];break;case"select":h=j({},h,{value:void 0}),c=j({},c,{value:void 0}),v=[];break;case"textarea":h=C(n,h),c=C(n,c),v=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Qa)}Ye(a,c);var E;a=null;for(fe in h)if(!c.hasOwnProperty(fe)&&h.hasOwnProperty(fe)&&h[fe]!=null)if(fe==="style"){var z=h[fe];for(E in z)z.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?v||(v=[]):(v=v||[]).push(fe,null));for(fe in c){var Y=c[fe];if(z=h!=null?h[fe]:void 0,c.hasOwnProperty(fe)&&Y!==z&&(Y!=null||z!=null))if(fe==="style")if(z){for(E in z)!z.hasOwnProperty(E)||Y&&Y.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in Y)Y.hasOwnProperty(E)&&z[E]!==Y[E]&&(a||(a={}),a[E]=Y[E])}else a||(v||(v=[]),v.push(fe,a)),a=Y;else fe==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,z=z?z.__html:void 0,Y!=null&&z!==Y&&(v=v||[]).push(fe,Y)):fe==="children"?typeof Y!="string"&&typeof Y!="number"||(v=v||[]).push(fe,""+Y):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(Y!=null&&fe==="onScroll"&&Zt("scroll",n),v||z===Y||(v=[])):(v=v||[]).push(fe,Y))}a&&(v=v||[]).push("style",a);var fe=v;(i.updateQueue=fe)&&(i.flags|=4)}},Cp=function(n,i,a,c){a!==c&&(i.flags|=4)};function da(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $v(n,i,a){var c=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Jn(i.type)&&tl(),Nn(i),null;case 3:return c=i.stateNode,no(),Jt(Zn),Jt(Ln),Pu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ol(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(af(Di),Di=null))),$u(n,i),Nn(i),null;case 5:Ru(i);var h=ps(aa.current);if(a=i.type,n!==null&&i.stateNode!=null)Ap(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=ps($i.current),ol(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[Yi]=i,c[na]=v,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(h=0;h<Qo.length;h++)Zt(Qo[h],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":Fe(c,v),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Zt("invalid",c);break;case"textarea":ce(c,v),Zt("invalid",c)}Ye(a,v),h=null;for(var E in v)if(v.hasOwnProperty(E)){var z=v[E];E==="children"?typeof z=="string"?c.textContent!==z&&(v.suppressHydrationWarning!==!0&&Ja(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(v.suppressHydrationWarning!==!0&&Ja(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(E)&&z!=null&&E==="onScroll"&&Zt("scroll",c)}switch(a){case"input":Je(c),Ve(c,v,!0);break;case"textarea":Je(c),Pe(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Qa)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Te(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Yi]=i,n[na]=c,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ze(a,c),a){case"dialog":Zt("cancel",n),Zt("close",n),h=c;break;case"iframe":case"object":case"embed":Zt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Qo.length;h++)Zt(Qo[h],n);h=c;break;case"source":Zt("error",n),h=c;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),h=c;break;case"details":Zt("toggle",n),h=c;break;case"input":Fe(n,c),h=xe(n,c),Zt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=j({},c,{value:void 0}),Zt("invalid",n);break;case"textarea":ce(n,c),h=C(n,c),Zt("invalid",n);break;default:h=c}Ye(a,h),z=h;for(v in z)if(z.hasOwnProperty(v)){var Y=z[v];v==="style"?Mt(n,Y):v==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&Oe(n,Y)):v==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&He(n,Y):typeof Y=="number"&&He(n,""+Y):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?Y!=null&&v==="onScroll"&&Zt("scroll",n):Y!=null&&w(n,v,Y,E))}switch(a){case"input":Je(n),Ve(n,c,!1);break;case"textarea":Je(n),Pe(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ne(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?P(n,!!c.multiple,v,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Qa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ps(aa.current),ps($i.current),ol(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yi]=i,(v=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Ja(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ja(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return Nn(i),null;case 13:if(Jt(sn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ph(),Js(),i.flags|=98560,v=!1;else if(v=ol(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Yi]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),v=!1}else Di!==null&&(af(Di),Di=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(sn.current&1)!==0?yn===0&&(yn=3):uf())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return no(),$u(n,i),n===null&&ea(i.stateNode.containerInfo),Nn(i),null;case 10:return Eu(i.type._context),Nn(i),null;case 17:return Jn(i.type)&&tl(),Nn(i),null;case 19:if(Jt(sn),v=i.memoizedState,v===null)return Nn(i),null;if(c=(i.flags&128)!==0,E=v.rendering,E===null)if(c)da(v,!1);else{if(yn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=dl(n),E!==null){for(i.flags|=128,da(v,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $t(sn,sn.current&1|2),i.child}n=n.sibling}v.tail!==null&&qe()>oo&&(i.flags|=128,c=!0,da(v,!1),i.lanes=4194304)}else{if(!c)if(n=dl(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),da(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!en)return Nn(i),null}else 2*qe()-v.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,da(v,!1),i.lanes=4194304);v.isBackwards?(E.sibling=i.child,i.child=E):(a=v.last,a!==null?a.sibling=E:i.child=E,v.last=E)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=qe(),i.sibling=null,a=sn.current,$t(sn,c?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return cf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(hi&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Kv(n,i){switch(vu(i),i.tag){case 1:return Jn(i.type)&&tl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Jt(Zn),Jt(Ln),Pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ru(i),null;case 13:if(Jt(sn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(sn),null;case 4:return no(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var Sl=!1,In=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function ro(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){fn(n,i,c)}else a.current=null}function Ku(n,i,a){try{a()}catch(c){fn(n,i,c)}}var Rp=!1;function Jv(n,i){if(lu=jo,n=oh(),eu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var E=0,z=-1,Y=-1,fe=0,be=0,Ie=n,Re=null;t:for(;;){for(var Ke;Ie!==a||h!==0&&Ie.nodeType!==3||(z=E+h),Ie!==v||c!==0&&Ie.nodeType!==3||(Y=E+c),Ie.nodeType===3&&(E+=Ie.nodeValue.length),(Ke=Ie.firstChild)!==null;)Re=Ie,Ie=Ke;for(;;){if(Ie===n)break t;if(Re===a&&++fe===h&&(z=E),Re===v&&++be===c&&(Y=E),(Ke=Ie.nextSibling)!==null)break;Ie=Re,Re=Ie.parentNode}Ie=Ke}a=z===-1||Y===-1?null:{start:z,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(cu={focusedElem:n,selectionRange:a},jo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var et=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var nt=et.memoizedProps,pn=et.memoizedState,ie=i.stateNode,Z=ie.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Ni(i.type,nt),pn);ie.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){fn(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return et=Rp,Rp=!1,et}function ha(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&Ku(i,a,v)}h=h.next}while(h!==c)}}function Ml(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Zu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bp(n){var i=n.alternate;i!==null&&(n.alternate=null,bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[na],delete i[hu],delete i[Iv],delete i[Uv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pp(n){return n.tag===5||n.tag===3||n.tag===4}function Lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ju(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qa));else if(c!==4&&(n=n.child,n!==null))for(Ju(n,i,a),n=n.sibling;n!==null;)Ju(n,i,a),n=n.sibling}function Qu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Qu(n,i,a),n=n.sibling;n!==null;)Qu(n,i,a),n=n.sibling}var bn=null,Ii=!1;function Br(n,i,a){for(a=a.child;a!==null;)Dp(n,i,a),a=a.sibling}function Dp(n,i,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(mn,a)}catch{}switch(a.tag){case 5:In||ro(a,i);case 6:var c=bn,h=Ii;bn=null,Br(n,i,a),bn=c,Ii=h,bn!==null&&(Ii?(n=bn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):bn.removeChild(a.stateNode));break;case 18:bn!==null&&(Ii?(n=bn,a=a.stateNode,n.nodeType===8?du(n.parentNode,a):n.nodeType===1&&du(n,a),ls(n)):du(bn,a.stateNode));break;case 4:c=bn,h=Ii,bn=a.stateNode.containerInfo,Ii=!0,Br(n,i,a),bn=c,Ii=h;break;case 0:case 11:case 14:case 15:if(!In&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var v=h,E=v.destroy;v=v.tag,E!==void 0&&((v&2)!==0||(v&4)!==0)&&Ku(a,i,E),h=h.next}while(h!==c)}Br(n,i,a);break;case 1:if(!In&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){fn(a,i,z)}Br(n,i,a);break;case 21:Br(n,i,a);break;case 22:a.mode&1?(In=(c=In)||a.memoizedState!==null,Br(n,i,a),In=c):Br(n,i,a);break;default:Br(n,i,a)}}function Np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Zv),i.forEach(function(c){var h=a_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Ui(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var v=n,E=i,z=E;e:for(;z!==null;){switch(z.tag){case 5:bn=z.stateNode,Ii=!1;break e;case 3:bn=z.stateNode.containerInfo,Ii=!0;break e;case 4:bn=z.stateNode.containerInfo,Ii=!0;break e}z=z.return}if(bn===null)throw Error(t(160));Dp(v,E,h),bn=null,Ii=!1;var Y=h.alternate;Y!==null&&(Y.return=null),h.return=null}catch(fe){fn(h,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(i,n),Zi(n),c&4){try{ha(3,n,n.return),Ml(3,n)}catch(nt){fn(n,n.return,nt)}try{ha(5,n,n.return)}catch(nt){fn(n,n.return,nt)}}break;case 1:Ui(i,n),Zi(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Ui(i,n),Zi(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var h=n.stateNode;try{He(h,"")}catch(nt){fn(n,n.return,nt)}}if(c&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,E=a!==null?a.memoizedProps:v,z=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{z==="input"&&v.type==="radio"&&v.name!=null&&we(h,v),Ze(z,E);var fe=Ze(z,v);for(E=0;E<Y.length;E+=2){var be=Y[E],Ie=Y[E+1];be==="style"?Mt(h,Ie):be==="dangerouslySetInnerHTML"?Oe(h,Ie):be==="children"?He(h,Ie):w(h,be,Ie,fe)}switch(z){case"input":Xe(h,v);break;case"textarea":ve(h,v);break;case"select":var Re=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Ke=v.value;Ke!=null?P(h,!!v.multiple,Ke,!1):Re!==!!v.multiple&&(v.defaultValue!=null?P(h,!!v.multiple,v.defaultValue,!0):P(h,!!v.multiple,v.multiple?[]:"",!1))}h[na]=v}catch(nt){fn(n,n.return,nt)}}break;case 6:if(Ui(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(nt){fn(n,n.return,nt)}}break;case 3:if(Ui(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ls(i.containerInfo)}catch(nt){fn(n,n.return,nt)}break;case 4:Ui(i,n),Zi(n);break;case 13:Ui(i,n),Zi(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(nf=qe())),c&4&&Np(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(In=(fe=In)||be,Ui(i,n),In=fe):Ui(i,n),Zi(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!be&&(n.mode&1)!==0)for(Qe=n,be=n.child;be!==null;){for(Ie=Qe=be;Qe!==null;){switch(Re=Qe,Ke=Re.child,Re.tag){case 0:case 11:case 14:case 15:ha(4,Re,Re.return);break;case 1:ro(Re,Re.return);var et=Re.stateNode;if(typeof et.componentWillUnmount=="function"){c=Re,a=Re.return;try{i=c,et.props=i.memoizedProps,et.state=i.memoizedState,et.componentWillUnmount()}catch(nt){fn(c,a,nt)}}break;case 5:ro(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Op(Ie);continue}}Ke!==null?(Ke.return=Re,Qe=Ke):Op(Ie)}be=be.sibling}e:for(be=null,Ie=n;;){if(Ie.tag===5){if(be===null){be=Ie;try{h=Ie.stateNode,fe?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(z=Ie.stateNode,Y=Ie.memoizedProps.style,E=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,z.style.display=dt("display",E))}catch(nt){fn(n,n.return,nt)}}}else if(Ie.tag===6){if(be===null)try{Ie.stateNode.nodeValue=fe?"":Ie.memoizedProps}catch(nt){fn(n,n.return,nt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;be===Ie&&(be=null),Ie=Ie.return}be===Ie&&(be=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:Ui(i,n),Zi(n),c&4&&Np(n);break;case 21:break;default:Ui(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(He(h,""),c.flags&=-33);var v=Lp(n);Qu(n,v,h);break;case 3:case 4:var E=c.stateNode.containerInfo,z=Lp(n);Ju(n,z,E);break;default:throw Error(t(161))}}catch(Y){fn(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Qv(n,i,a){Qe=n,Up(n)}function Up(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var h=Qe,v=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Sl;if(!E){var z=h.alternate,Y=z!==null&&z.memoizedState!==null||In;z=Sl;var fe=In;if(Sl=E,(In=Y)&&!fe)for(Qe=h;Qe!==null;)E=Qe,Y=E.child,E.tag===22&&E.memoizedState!==null?zp(h):Y!==null?(Y.return=E,Qe=Y):zp(h);for(;v!==null;)Qe=v,Up(v),v=v.sibling;Qe=h,Sl=z,In=fe}Fp(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Qe=v):Fp(n)}}function Fp(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||Ml(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!In)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ni(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Oh(i,v,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Oh(i,E,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var be=fe.memoizedState;if(be!==null){var Ie=be.dehydrated;Ie!==null&&ls(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Zu(i)}catch(Re){fn(i,i.return,Re)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Op(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function zp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ml(4,i)}catch(Y){fn(i,a,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(Y){fn(i,h,Y)}}var v=i.return;try{Zu(i)}catch(Y){fn(i,v,Y)}break;case 5:var E=i.return;try{Zu(i)}catch(Y){fn(i,E,Y)}}}catch(Y){fn(i,i.return,Y)}if(i===n){Qe=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Qe=z;break}Qe=i.return}}var e_=Math.ceil,El=R.ReactCurrentDispatcher,ef=R.ReactCurrentOwner,Ei=R.ReactCurrentBatchConfig,zt=0,wn=null,vn=null,Pn=0,hi=0,so=Ur(0),yn=0,pa=null,gs=0,wl=0,tf=0,ma=null,ei=null,nf=0,oo=1/0,vr=null,Tl=!1,rf=null,Hr=null,Al=!1,Gr=null,Cl=0,ga=0,sf=null,Rl=-1,bl=0;function Hn(){return(zt&6)!==0?qe():Rl!==-1?Rl:Rl=qe()}function Vr(n){return(n.mode&1)===0?1:(zt&2)!==0&&Pn!==0?Pn&-Pn:Ov.transition!==null?(bl===0&&(bl=as()),bl):(n=Ee,n!==0||(n=window.event,n=n===void 0?16:Bd(n.type)),n)}function Fi(n,i,a,c){if(50<ga)throw ga=0,sf=null,Error(t(185));Pr(n,a,c),((zt&2)===0||n!==wn)&&(n===wn&&((zt&2)===0&&(wl|=a),yn===4&&Wr(n,Pn)),ti(n,c),a===1&&zt===0&&(i.mode&1)===0&&(oo=qe()+500,il&&Or()))}function ti(n,i){var a=n.callbackNode;Cn(n,i);var c=ln(n,n===wn?Pn:0);if(c===0)a!==null&&We(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&We(a),i===1)n.tag===0?Fv(Bp.bind(null,n)):Th(Bp.bind(null,n)),Dv(function(){(zt&6)===0&&Or()}),a=null;else{switch(tt(c)){case 1:a=vt;break;case 4:a=_t;break;case 16:a=Ht;break;case 536870912:a=Gt;break;default:a=Ht}a=Yp(a,kp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function kp(n,i){if(Rl=-1,bl=0,(zt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=ln(n,n===wn?Pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Pl(n,c);else{i=c;var h=zt;zt|=2;var v=Gp();(wn!==n||Pn!==i)&&(vr=null,oo=qe()+500,_s(n,i));do try{i_();break}catch(z){Hp(n,z)}while(!0);Mu(),El.current=v,zt=h,vn!==null?i=0:(wn=null,Pn=0,i=yn)}if(i!==0){if(i===2&&(h=Wi(n),h!==0&&(c=h,i=of(n,h))),i===1)throw a=pa,_s(n,0),Wr(n,c),ti(n,qe()),a;if(i===6)Wr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!t_(h)&&(i=Pl(n,c),i===2&&(v=Wi(n),v!==0&&(c=v,i=of(n,v))),i===1))throw a=pa,_s(n,0),Wr(n,c),ti(n,qe()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:xs(n,ei,vr);break;case 3:if(Wr(n,c),(c&130023424)===c&&(i=nf+500-qe(),10<i)){if(ln(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=fu(xs.bind(null,n,ei,vr),i);break}xs(n,ei,vr);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-gn(c);v=1<<E,E=i[E],E>h&&(h=E),c&=~v}if(c=h,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*e_(c/1960))-c,10<c){n.timeoutHandle=fu(xs.bind(null,n,ei,vr),c);break}xs(n,ei,vr);break;case 5:xs(n,ei,vr);break;default:throw Error(t(329))}}}return ti(n,qe()),n.callbackNode===a?kp.bind(null,n):null}function of(n,i){var a=ma;return n.current.memoizedState.isDehydrated&&(_s(n,i).flags|=256),n=Pl(n,i),n!==2&&(i=ei,ei=a,i!==null&&af(i)),n}function af(n){ei===null?ei=n:ei.push.apply(ei,n)}function t_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],v=h.getSnapshot;h=h.value;try{if(!Li(v(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wr(n,i){for(i&=~tf,i&=~wl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-gn(i),c=1<<a;n[a]=-1,i&=~c}}function Bp(n){if((zt&6)!==0)throw Error(t(327));ao();var i=ln(n,0);if((i&1)===0)return ti(n,qe()),null;var a=Pl(n,i);if(n.tag!==0&&a===2){var c=Wi(n);c!==0&&(i=c,a=of(n,c))}if(a===1)throw a=pa,_s(n,0),Wr(n,i),ti(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,xs(n,ei,vr),ti(n,qe()),null}function lf(n,i){var a=zt;zt|=1;try{return n(i)}finally{zt=a,zt===0&&(oo=qe()+500,il&&Or())}}function vs(n){Gr!==null&&Gr.tag===0&&(zt&6)===0&&ao();var i=zt;zt|=1;var a=Ei.transition,c=Ee;try{if(Ei.transition=null,Ee=1,n)return n()}finally{Ee=c,Ei.transition=a,zt=i,(zt&6)===0&&Or()}}function cf(){hi=so.current,Jt(so)}function _s(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Lv(a)),vn!==null)for(a=vn.return;a!==null;){var c=a;switch(vu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&tl();break;case 3:no(),Jt(Zn),Jt(Ln),Pu();break;case 5:Ru(c);break;case 4:no();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Eu(c.type._context);break;case 22:case 23:cf()}a=a.return}if(wn=n,vn=n=jr(n.current,null),Pn=hi=i,yn=0,pa=null,tf=wl=gs=0,ei=ma=null,hs!==null){for(i=0;i<hs.length;i++)if(a=hs[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,v=a.pending;if(v!==null){var E=v.next;v.next=h,c.next=E}a.pending=c}hs=null}return n}function Hp(n,i){do{var a=vn;try{if(Mu(),hl.current=vl,pl){for(var c=on.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}pl=!1}if(ms=0,En=xn=on=null,la=!1,ca=0,ef.current=null,a===null||a.return===null){yn=1,pa=i,vn=null;break}e:{var v=n,E=a.return,z=a,Y=i;if(i=Pn,z.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var fe=Y,be=z,Ie=be.tag;if((be.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Re=be.alternate;Re?(be.updateQueue=Re.updateQueue,be.memoizedState=Re.memoizedState,be.lanes=Re.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ke=dp(E);if(Ke!==null){Ke.flags&=-257,hp(Ke,E,z,v,i),Ke.mode&1&&fp(v,fe,i),i=Ke,Y=fe;var et=i.updateQueue;if(et===null){var nt=new Set;nt.add(Y),i.updateQueue=nt}else et.add(Y);break e}else{if((i&1)===0){fp(v,fe,i),uf();break e}Y=Error(t(426))}}else if(en&&z.mode&1){var pn=dp(E);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),hp(pn,E,z,v,i),yu(io(Y,z));break e}}v=Y=io(Y,z),yn!==4&&(yn=2),ma===null?ma=[v]:ma.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ie=cp(v,Y,i);Fh(v,ie);break e;case 1:z=Y;var Z=v.type,se=v.stateNode;if((v.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Hr===null||!Hr.has(se)))){v.flags|=65536,i&=-i,v.lanes|=i;var ke=up(v,z,i);Fh(v,ke);break e}}v=v.return}while(v!==null)}Wp(a)}catch(at){i=at,vn===a&&a!==null&&(vn=a=a.return);continue}break}while(!0)}function Gp(){var n=El.current;return El.current=vl,n===null?vl:n}function uf(){(yn===0||yn===3||yn===2)&&(yn=4),wn===null||(gs&268435455)===0&&(wl&268435455)===0||Wr(wn,Pn)}function Pl(n,i){var a=zt;zt|=2;var c=Gp();(wn!==n||Pn!==i)&&(vr=null,_s(n,i));do try{n_();break}catch(h){Hp(n,h)}while(!0);if(Mu(),zt=a,El.current=c,vn!==null)throw Error(t(261));return wn=null,Pn=0,yn}function n_(){for(;vn!==null;)Vp(vn)}function i_(){for(;vn!==null&&!ot();)Vp(vn)}function Vp(n){var i=qp(n.alternate,n,hi);n.memoizedProps=n.pendingProps,i===null?Wp(n):vn=i,ef.current=null}function Wp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$v(a,i,hi),a!==null){vn=a;return}}else{if(a=Kv(a,i),a!==null){a.flags&=32767,vn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yn=6,vn=null;return}}if(i=i.sibling,i!==null){vn=i;return}vn=i=n}while(i!==null);yn===0&&(yn=5)}function xs(n,i,a){var c=Ee,h=Ei.transition;try{Ei.transition=null,Ee=1,r_(n,i,a,c)}finally{Ei.transition=h,Ee=c}return null}function r_(n,i,a,c){do ao();while(Gr!==null);if((zt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Ha(n,v),n===wn&&(vn=wn=null,Pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Al||(Al=!0,Yp(Ht,function(){return ao(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Ei.transition,Ei.transition=null;var E=Ee;Ee=1;var z=zt;zt|=4,ef.current=null,Jv(n,a),Ip(a,n),wv(cu),jo=!!lu,cu=lu=null,n.current=a,Qv(a),ut(),zt=z,Ee=E,Ei.transition=v}else n.current=a;if(Al&&(Al=!1,Gr=n,Cl=h),v=n.pendingLanes,v===0&&(Hr=null),St(a.stateNode),ti(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Tl)throw Tl=!1,n=rf,rf=null,n;return(Cl&1)!==0&&n.tag!==0&&ao(),v=n.pendingLanes,(v&1)!==0?n===sf?ga++:(ga=0,sf=n):ga=0,Or(),null}function ao(){if(Gr!==null){var n=tt(Cl),i=Ei.transition,a=Ee;try{if(Ei.transition=null,Ee=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,Cl=0,(zt&6)!==0)throw Error(t(331));var h=zt;for(zt|=4,Qe=n.current;Qe!==null;){var v=Qe,E=v.child;if((Qe.flags&16)!==0){var z=v.deletions;if(z!==null){for(var Y=0;Y<z.length;Y++){var fe=z[Y];for(Qe=fe;Qe!==null;){var be=Qe;switch(be.tag){case 0:case 11:case 15:ha(8,be,v)}var Ie=be.child;if(Ie!==null)Ie.return=be,Qe=Ie;else for(;Qe!==null;){be=Qe;var Re=be.sibling,Ke=be.return;if(bp(be),be===fe){Qe=null;break}if(Re!==null){Re.return=Ke,Qe=Re;break}Qe=Ke}}}var et=v.alternate;if(et!==null){var nt=et.child;if(nt!==null){et.child=null;do{var pn=nt.sibling;nt.sibling=null,nt=pn}while(nt!==null)}}Qe=v}}if((v.subtreeFlags&2064)!==0&&E!==null)E.return=v,Qe=E;else e:for(;Qe!==null;){if(v=Qe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ha(9,v,v.return)}var ie=v.sibling;if(ie!==null){ie.return=v.return,Qe=ie;break e}Qe=v.return}}var Z=n.current;for(Qe=Z;Qe!==null;){E=Qe;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,Qe=se;else e:for(E=Z;Qe!==null;){if(z=Qe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ml(9,z)}}catch(at){fn(z,z.return,at)}if(z===E){Qe=null;break e}var ke=z.sibling;if(ke!==null){ke.return=z.return,Qe=ke;break e}Qe=z.return}}if(zt=h,Or(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(mn,n)}catch{}c=!0}return c}finally{Ee=a,Ei.transition=i}}return!1}function jp(n,i,a){i=io(a,i),i=cp(n,i,1),n=kr(n,i,1),i=Hn(),n!==null&&(Pr(n,1,i),ti(n,i))}function fn(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=io(a,n),n=up(i,n,1),i=kr(i,n,1),n=Hn(),i!==null&&(Pr(i,1,n),ti(i,n));break}}i=i.return}}function s_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&a,wn===n&&(Pn&a)===a&&(yn===4||yn===3&&(Pn&130023424)===Pn&&500>qe()-nf?_s(n,0):tf|=a),ti(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=It,It<<=1,(It&130023424)===0&&(It=4194304)));var a=Hn();n=pr(n,i),n!==null&&(Pr(n,i,a),ti(n,a))}function o_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function a_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var qp;qp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zn.current)Qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qn=!1,Yv(n,i,a);Qn=(n.flags&131072)!==0}else Qn=!1,en&&(i.flags&1048576)!==0&&Ah(i,sl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;yl(n,i),n=i.pendingProps;var h=$s(i,Ln.current);to(i,a),h=Nu(null,i,c,n,h,a);var v=Iu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jn(c)?(v=!0,nl(i)):v=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Au(i),h.updater=_l,i.stateNode=h,h._reactInternals=i,Bu(i,c,n,a),i=Wu(null,i,c,!0,v,a)):(i.tag=0,en&&v&&gu(i),Bn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(yl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=c_(c),n=Ni(c,n),h){case 0:i=Vu(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=pp(null,i,c,n,a);break e;case 14:i=mp(null,i,c,Ni(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ni(c,h),Vu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ni(c,h),xp(n,i,c,h,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,h=v.element,Uh(n,i),fl(i,c,null,a);var E=i.memoizedState;if(c=E.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){h=io(Error(t(423)),i),i=Sp(n,i,c,a,h);break e}else if(c!==h){h=io(Error(t(424)),i),i=Sp(n,i,c,a,h);break e}else for(di=Ir(i.stateNode.containerInfo.firstChild),fi=i,en=!0,Di=null,a=Nh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===h){i=gr(n,i,a);break e}Bn(n,i,c,a)}i=i.child}return i;case 5:return zh(i),n===null&&xu(i),c=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,E=h.children,uu(c,h)?E=null:v!==null&&uu(c,v)&&(i.flags|=32),_p(n,i),Bn(n,i,E,a),i.child;case 6:return n===null&&xu(i),null;case 13:return Mp(n,i,a);case 4:return Cu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Qs(i,null,c,a):Bn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ni(c,h),pp(n,i,c,h,a);case 7:return Bn(n,i,i.pendingProps,a),i.child;case 8:return Bn(n,i,i.pendingProps.children,a),i.child;case 12:return Bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,v=i.memoizedProps,E=h.value,$t(ll,c._currentValue),c._currentValue=E,v!==null)if(Li(v.value,E)){if(v.children===h.children&&!Zn.current){i=gr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var z=v.dependencies;if(z!==null){E=v.child;for(var Y=z.firstContext;Y!==null;){if(Y.context===c){if(v.tag===1){Y=mr(-1,a&-a),Y.tag=2;var fe=v.updateQueue;if(fe!==null){fe=fe.shared;var be=fe.pending;be===null?Y.next=Y:(Y.next=be.next,be.next=Y),fe.pending=Y}}v.lanes|=a,Y=v.alternate,Y!==null&&(Y.lanes|=a),wu(v.return,a,i),z.lanes|=a;break}Y=Y.next}}else if(v.tag===10)E=v.type===i.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=a,z=E.alternate,z!==null&&(z.lanes|=a),wu(E,a,i),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===i){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Bn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,to(i,a),h=Si(h),c=c(h),i.flags|=1,Bn(n,i,c,a),i.child;case 14:return c=i.type,h=Ni(c,i.pendingProps),h=Ni(c.type,h),mp(n,i,c,h,a);case 15:return gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ni(c,h),yl(n,i),i.tag=1,Jn(c)?(n=!0,nl(i)):n=!1,to(i,a),ap(i,c,h),Bu(i,c,h,a),Wu(null,i,c,!0,n,a);case 19:return wp(n,i,a);case 22:return vp(n,i,a)}throw Error(t(156,i.tag))};function Yp(n,i){return ae(n,i)}function l_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,i,a,c){return new l_(n,i,a,c)}function ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function c_(n){if(typeof n=="function")return ff(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Se)return 11;if(n===he)return 14}return 2}function jr(n,i){var a=n.alternate;return a===null?(a=wi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ll(n,i,a,c,h,v){var E=2;if(c=n,typeof n=="function")ff(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case F:return ys(a.children,h,v,i);case X:E=8,h|=8;break;case _e:return n=wi(12,a,i,h|2),n.elementType=_e,n.lanes=v,n;case ge:return n=wi(13,a,i,h),n.elementType=ge,n.lanes=v,n;case W:return n=wi(19,a,i,h),n.elementType=W,n.lanes=v,n;case oe:return Dl(a,h,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:E=10;break e;case N:E=9;break e;case Se:E=11;break e;case he:E=14;break e;case V:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wi(E,a,i,h),i.elementType=n,i.type=c,i.lanes=v,i}function ys(n,i,a,c){return n=wi(7,n,c,i),n.lanes=a,n}function Dl(n,i,a,c){return n=wi(22,n,c,i),n.elementType=oe,n.lanes=a,n.stateNode={isHidden:!1},n}function df(n,i,a){return n=wi(6,n,null,i),n.lanes=a,n}function hf(n,i,a){return i=wi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function u_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sr(0),this.expirationTimes=sr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function pf(n,i,a,c,h,v,E,z,Y){return n=new u_(n,i,a,z,Y),i===1?(i=1,v===!0&&(i|=8)):i=0,v=wi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(v),n}function f_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $p(n){if(!n)return Fr;n=n._reactInternals;e:{if(zn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Jn(a))return Eh(n,a,i)}return i}function Kp(n,i,a,c,h,v,E,z,Y){return n=pf(a,c,!0,n,h,v,E,z,Y),n.context=$p(null),a=n.current,c=Hn(),h=Vr(a),v=mr(c,h),v.callback=i??null,kr(a,v,h),n.current.lanes=h,Pr(n,h,c),ti(n,c),n}function Nl(n,i,a,c){var h=i.current,v=Hn(),E=Vr(h);return a=$p(a),i.context===null?i.context=a:i.pendingContext=a,i=mr(v,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(h,i,E),n!==null&&(Fi(n,h,E,v),ul(n,h,E)),E}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function mf(n,i){Zp(n,i),(n=n.alternate)&&Zp(n,i)}function d_(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function gf(n){this._internalRoot=n}Ul.prototype.render=gf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Nl(n,i,null,null)},Ul.prototype.unmount=gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;vs(function(){Nl(null,n,null,null)}),i[ur]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=rn();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Pi.length&&i!==0&&i<Pi[a].priority;a++);Pi.splice(a,0,n),a===0&&lr(n)}};function vf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function h_(n,i,a,c,h){if(h){if(typeof c=="function"){var v=c;c=function(){var fe=Il(E);v.call(fe)}}var E=Kp(i,c,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=E,n[ur]=E.current,ea(n.nodeType===8?n.parentNode:n),vs(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var fe=Il(Y);z.call(fe)}}var Y=pf(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=Y,n[ur]=Y.current,ea(n.nodeType===8?n.parentNode:n),vs(function(){Nl(i,Y,a,c)}),Y}function Ol(n,i,a,c,h){var v=a._reactRootContainer;if(v){var E=v;if(typeof h=="function"){var z=h;h=function(){var Y=Il(E);z.call(Y)}}Nl(i,E,n,h)}else E=h_(a,i,n,h,c);return Il(E)}jt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Vt(i.pendingLanes);a!==0&&(L(i,a|1),ti(i,qe()),(zt&6)===0&&(oo=qe()+500,Or()))}break;case 13:vs(function(){var c=pr(n,1);if(c!==null){var h=Hn();Fi(c,n,1,h)}}),mf(n,1)}},Ot=function(n){if(n.tag===13){var i=pr(n,134217728);if(i!==null){var a=Hn();Fi(i,n,134217728,a)}mf(n,134217728)}},cn=function(n){if(n.tag===13){var i=Vr(n),a=pr(n,i);if(a!==null){var c=Hn();Fi(a,n,i,c)}mf(n,i)}},rn=function(){return Ee},ji=function(n,i){var a=Ee;try{return Ee=n,i()}finally{Ee=a}},bt=function(n,i,a){switch(i){case"input":if(Xe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=el(c);if(!h)throw Error(t(90));B(c),Xe(c,h)}}}break;case"textarea":ve(n,a);break;case"select":i=a.value,i!=null&&P(n,!!a.multiple,i,!1)}},Me=lf,$e=vs;var p_={usingClientEntryPoint:!1,Events:[ia,qs,el,le,te,lf]},va={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m_={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ue(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{mn=zl.inject(m_),Dt=zl}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_,ni.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(i))throw Error(t(200));return f_(n,i,null,a)},ni.createRoot=function(n,i){if(!vf(n))throw Error(t(299));var a=!1,c="",h=Jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=pf(n,1,!1,null,null,a,!1,c,h),n[ur]=i.current,ea(n.nodeType===8?n.parentNode:n),new gf(i)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ue(i),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return vs(n)},ni.hydrate=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ol(null,n,i,!0,a)},ni.hydrateRoot=function(n,i,a){if(!vf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,v="",E=Jp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Kp(i,null,n,1,a??null,h,!1,v,E),n[ur]=i.current,ea(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ul(i)},ni.render=function(n,i,a){if(!Fl(i))throw Error(t(200));return Ol(null,n,i,!1,a)},ni.unmountComponentAtNode=function(n){if(!Fl(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){Ol(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},ni.unstable_batchedUpdates=lf,ni.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ol(n,i,a,!1,c)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var am;function w_(){if(am)return yf.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yf.exports=E_(),yf.exports}var lm;function T_(){if(lm)return kl;lm=1;var s=w_();return kl.createRoot=s.createRoot,kl.hydrateRoot=s.hydrateRoot,kl}var A_=T_();const C_=e0(A_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="162",R_=0,cm=1,b_=2,t0=1,P_=2,Er=3,ss=0,jn=1,gi=2,ns=0,Oo=1,um=2,fm=3,dm=4,L_=5,Ps=100,D_=101,N_=102,hm=103,pm=104,I_=200,U_=201,F_=202,O_=203,fd=204,dd=205,z_=206,k_=207,B_=208,H_=209,G_=210,V_=211,W_=212,j_=213,X_=214,q_=0,Y_=1,$_=2,wc=3,K_=4,Z_=5,J_=6,Q_=7,Fc=0,ex=1,tx=2,is=0,nx=1,ix=2,rx=3,sx=4,ox=5,ax=6,lx=7,n0=300,ko=301,Bo=302,hd=303,pd=304,Oc=306,md=1e3,Bi=1001,gd=1002,Wn=1003,mm=1004,xa=1005,ii=1006,Ef=1007,Ns=1008,rs=1009,cx=1010,ux=1011,Cd=1012,i0=1013,ts=1014,wr=1015,Da=1016,r0=1017,s0=1018,Is=1020,fx=1021,Hi=1023,dx=1024,hx=1025,Us=1026,Ho=1027,px=1028,o0=1029,mx=1030,a0=1031,l0=1033,wf=33776,Tf=33777,Af=33778,Cf=33779,gm=35840,vm=35841,_m=35842,xm=35843,c0=36196,ym=37492,Sm=37496,Mm=37808,Em=37809,wm=37810,Tm=37811,Am=37812,Cm=37813,Rm=37814,bm=37815,Pm=37816,Lm=37817,Dm=37818,Nm=37819,Im=37820,Um=37821,Rf=36492,Fm=36494,Om=36495,gx=36283,zm=36284,km=36285,Bm=36286,vx=3200,_x=3201,zc=0,xx=1,Qr="",Ji="srgb",os="srgb-linear",Rd="display-p3",kc="display-p3-linear",Tc="linear",Qt="srgb",Ac="rec709",Cc="p3",lo=7680,Hm=519,yx=512,Sx=513,Mx=514,u0=515,Ex=516,wx=517,Tx=518,Ax=519,vd=35044,Gm="300 es",_d=1035,Tr=2e3,Rc=2001;class Vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=Math.PI/180,bc=180/Math.PI;function Ar(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function On(s,e,t){return Math.max(e,Math.min(t,s))}function Cx(s,e){return(s%e+e)%e}function Pf(s,e,t){return(1-t)*s+t*e}function Vm(s){return(s&s-1)===0&&s!==0}function xd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function er(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*o+e.x,this.y=l*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(e,t,r,o,l,f,u,d,p){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,u,d,p)}set(e,t,r,o,l,f,u,d,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],u=r[3],d=r[6],p=r[1],m=r[4],g=r[7],_=r[2],S=r[5],M=r[8],A=o[0],x=o[3],y=o[6],D=o[1],w=o[4],R=o[7],k=o[2],O=o[5],F=o[8];return l[0]=f*A+u*D+d*k,l[3]=f*x+u*w+d*O,l[6]=f*y+u*R+d*F,l[1]=p*A+m*D+g*k,l[4]=p*x+m*w+g*O,l[7]=p*y+m*R+g*F,l[2]=_*A+S*D+M*k,l[5]=_*x+S*w+M*O,l[8]=_*y+S*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8];return t*f*m-t*u*p-r*l*m+r*u*d+o*l*p-o*f*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],g=m*f-u*p,_=u*d-m*l,S=p*l-f*d,M=t*g+r*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(o*p-m*r)*A,e[2]=(u*r-o*f)*A,e[3]=_*A,e[4]=(m*t-o*d)*A,e[5]=(o*l-u*t)*A,e[6]=S*A,e[7]=(r*d-p*t)*A,e[8]=(f*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,f,u){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*f+p*u)+f+e,-o*p,o*d,-o*(-p*f+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Lf.makeScale(e,t)),this}rotate(e){return this.premultiply(Lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lf=new Lt;function f0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rx(){const s=Pc("canvas");return s.style.display="block",s}const Wm={};function d0(s){s in Wm||(Wm[s]=!0,console.warn(s))}const jm=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xm=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bl={[os]:{transfer:Tc,primaries:Ac,toReference:s=>s,fromReference:s=>s},[Ji]:{transfer:Qt,primaries:Ac,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[kc]:{transfer:Tc,primaries:Cc,toReference:s=>s.applyMatrix3(Xm),fromReference:s=>s.applyMatrix3(jm)},[Rd]:{transfer:Qt,primaries:Cc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Xm),fromReference:s=>s.applyMatrix3(jm).convertLinearToSRGB()}},bx=new Set([os,kc]),qt={enabled:!0,_workingColorSpace:os,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=Bl[e].toReference,o=Bl[t].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Bl[s].primaries},getTransfer:function(s){return s===Qr?Tc:Bl[s].transfer}};function zo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Df(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let co;class h0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{co===void 0&&(co=Pc("canvas")),co.width=e.width,co.height=e.height;const r=co.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=zo(l[f]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(zo(t[r]/255)*255):t[r]=zo(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Px=0;class p0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,u=o.length;f<u;f++)o[f].isDataTexture?l.push(Nf(o[f].image)):l.push(Nf(o[f]))}else l=Nf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?h0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lx=0;class Xn extends Vo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=Bi,o=Bi,l=ii,f=Ns,u=Hi,d=rs,p=Xn.DEFAULT_ANISOTROPY,m=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ar(),this.name="",this.source=new p0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=n0;Xn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*o+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],m=d[4],g=d[8],_=d[1],S=d[5],M=d[9],A=d[2],x=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(p+1)/2,R=(S+1)/2,k=(y+1)/2,O=(m+_)/4,F=(g+A)/4,X=(M+x)/4;return w>R&&w>k?w<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(w),o=O/r,l=F/r):R>k?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=O/o,l=X/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=F/l,o=X/l),this.set(r,o,l,t),this}let D=Math.sqrt((x-M)*(x-M)+(g-A)*(g-A)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(x-M)/D,this.y=(g-A)/D,this.z=(_-m)/D,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dx extends Vo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Xn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let u=0;u<f;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new p0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends Dx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class m0 extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nx extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,f,u){let d=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];const _=l[f+0],S=l[f+1],M=l[f+2],A=l[f+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=A;return}if(g!==A||d!==_||p!==S||m!==M){let x=1-u;const y=d*_+p*S+m*M+g*A,D=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const k=Math.sqrt(w),O=Math.atan2(k,y*D);x=Math.sin(x*O)/k,u=Math.sin(u*O)/k}const R=u*D;if(d=d*x+_*R,p=p*x+S*R,m=m*x+M*R,g=g*x+A*R,x===1-u){const k=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=k,p*=k,m*=k,g*=k}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,f){const u=r[o],d=r[o+1],p=r[o+2],m=r[o+3],g=l[f],_=l[f+1],S=l[f+2],M=l[f+3];return e[t]=u*M+m*g+d*S-p*_,e[t+1]=d*M+m*_+p*g-u*S,e[t+2]=p*M+m*S+u*_-d*g,e[t+3]=m*M-u*g-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,f=e._order,u=Math.cos,d=Math.sin,p=u(r/2),m=u(o/2),g=u(l/2),_=d(r/2),S=d(o/2),M=d(l/2);switch(f){case"XYZ":this._x=_*m*g+p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g-_*S*M;break;case"YXZ":this._x=_*m*g+p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g+_*S*M;break;case"ZXY":this._x=_*m*g-p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g-_*S*M;break;case"ZYX":this._x=_*m*g-p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g+_*S*M;break;case"YZX":this._x=_*m*g+p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g-_*S*M;break;case"XZY":this._x=_*m*g-p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],f=t[1],u=t[5],d=t[9],p=t[2],m=t[6],g=t[10],_=r+u+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(f-o)*S}else if(r>u&&r>g){const S=2*Math.sqrt(1+r-u-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(l+p)/S}else if(u>g){const S=2*Math.sqrt(1+u-r-g);this._w=(l-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-r-u);this._w=(f-o)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,f=e._w,u=t._x,d=t._y,p=t._z,m=t._w;return this._x=r*m+f*u+o*p-l*d,this._y=o*m+f*d+l*u-r*p,this._z=l*m+f*p+r*d-o*u,this._w=f*m-r*u-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,f=this._w;let u=f*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=o,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,u),g=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=f*g+this._w*_,this._x=r*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,f=e.y,u=e.z,d=e.w,p=2*(f*o-u*r),m=2*(u*t-l*o),g=2*(l*r-f*t);return this.x=t+d*p+f*g-u*m,this.y=r+d*m+u*p-l*g,this.z=o+d*g+l*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,f=t.x,u=t.y,d=t.z;return this.x=o*d-l*u,this.y=l*f-r*d,this.z=r*u-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new G,qm=new Fa;class Oa{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=l.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,Oi):Oi.fromBufferAttribute(l,f),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hl.copy(r.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const o=e.children;for(let l=0,f=o.length;l<f;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Gl.subVectors(this.max,ya),uo.subVectors(e.a,ya),fo.subVectors(e.b,ya),ho.subVectors(e.c,ya),qr.subVectors(fo,uo),Yr.subVectors(ho,fo),Ss.subVectors(uo,ho);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Ss.z,Ss.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Ss.z,0,-Ss.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Ss.y,Ss.x,0];return!Uf(t,uo,fo,ho,Gl)||(t=[1,0,0,0,1,0,0,0,1],!Uf(t,uo,fo,ho,Gl))?!1:(Vl.crossVectors(qr,Yr),t=[Vl.x,Vl.y,Vl.z],Uf(t,uo,fo,ho,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _r=[new G,new G,new G,new G,new G,new G,new G,new G],Oi=new G,Hl=new Oa,uo=new G,fo=new G,ho=new G,qr=new G,Yr=new G,Ss=new G,ya=new G,Gl=new G,Vl=new G,Ms=new G;function Uf(s,e,t,r,o){for(let l=0,f=s.length-3;l<=f;l+=3){Ms.fromArray(s,l);const u=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),d=e.dot(Ms),p=t.dot(Ms),m=r.dot(Ms);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>u)return!1}return!0}const Ix=new Oa,Sa=new G,Ff=new G;class za{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ix.setFromPoints(e).getCenter(r);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Sa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Ff)),this.expandByPoint(Sa.copy(e.center).sub(Ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xr=new G,Of=new G,Wl=new G,$r=new G,zf=new G,jl=new G,kf=new G;class bd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Of.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Of);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Wl),u=$r.dot(this.direction),d=-$r.dot(Wl),p=$r.lengthSq(),m=Math.abs(1-f*f);let g,_,S,M;if(m>0)if(g=f*d-u,_=f*u-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const A=1/m;g*=A,_*=A,S=g*(g+f*_+2*u)+_*(f*g+_+2*d)+p}else _=l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;else _=-l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;else _<=-M?(g=Math.max(0,-(-f*l+u)),_=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+p):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(g=Math.max(0,-(f*l+u)),_=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+p);else _=f>0?-l:l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Of).addScaledVector(Wl,_),S}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),o=xr.dot(xr)-r*r,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),u=r-f,d=r+f;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,f,u,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,f=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,f=(e.min.y-_.y)*m),r>f||l>o||((l>r||isNaN(r))&&(r=l),(f<o||isNaN(o))&&(o=f),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,o,l){zf.subVectors(t,e),jl.subVectors(r,e),kf.crossVectors(zf,jl);let f=this.direction.dot(kf),u;if(f>0){if(o)return null;u=1}else if(f<0)u=-1,f=-f;else return null;$r.subVectors(this.origin,e);const d=u*this.direction.dot(jl.crossVectors($r,jl));if(d<0)return null;const p=u*this.direction.dot(zf.cross($r));if(p<0||d+p>f)return null;const m=-u*$r.dot(kf);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x)}set(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=f,y[9]=u,y[13]=d,y[2]=p,y[6]=m,y[10]=g,y[14]=_,y[3]=S,y[7]=M,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/po.setFromMatrixColumn(e,0).length(),l=1/po.setFromMatrixColumn(e,1).length(),f=1/po.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,f=Math.cos(r),u=Math.sin(r),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=f*m,S=f*g,M=u*m,A=u*g;t[0]=d*m,t[4]=-d*g,t[8]=p,t[1]=S+M*p,t[5]=_-A*p,t[9]=-u*d,t[2]=A-_*p,t[6]=M+S*p,t[10]=f*d}else if(e.order==="YXZ"){const _=d*m,S=d*g,M=p*m,A=p*g;t[0]=_+A*u,t[4]=M*u-S,t[8]=f*p,t[1]=f*g,t[5]=f*m,t[9]=-u,t[2]=S*u-M,t[6]=A+_*u,t[10]=f*d}else if(e.order==="ZXY"){const _=d*m,S=d*g,M=p*m,A=p*g;t[0]=_-A*u,t[4]=-f*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=f*m,t[9]=A-_*u,t[2]=-f*p,t[6]=u,t[10]=f*d}else if(e.order==="ZYX"){const _=f*m,S=f*g,M=u*m,A=u*g;t[0]=d*m,t[4]=M*p-S,t[8]=_*p+A,t[1]=d*g,t[5]=A*p+_,t[9]=S*p-M,t[2]=-p,t[6]=u*d,t[10]=f*d}else if(e.order==="YZX"){const _=f*d,S=f*p,M=u*d,A=u*p;t[0]=d*m,t[4]=A-_*g,t[8]=M*g+S,t[1]=g,t[5]=f*m,t[9]=-u*m,t[2]=-p*m,t[6]=S*g+M,t[10]=_-A*g}else if(e.order==="XZY"){const _=f*d,S=f*p,M=u*d,A=u*p;t[0]=d*m,t[4]=-g,t[8]=p*m,t[1]=_*g+A,t[5]=f*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=A*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ux,e,Fx)}lookAt(e,t,r){const o=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Kr.crossVectors(r,pi),Kr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Kr.crossVectors(r,pi)),Kr.normalize(),Xl.crossVectors(pi,Kr),o[0]=Kr.x,o[4]=Xl.x,o[8]=pi.x,o[1]=Kr.y,o[5]=Xl.y,o[9]=pi.y,o[2]=Kr.z,o[6]=Xl.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],u=r[4],d=r[8],p=r[12],m=r[1],g=r[5],_=r[9],S=r[13],M=r[2],A=r[6],x=r[10],y=r[14],D=r[3],w=r[7],R=r[11],k=r[15],O=o[0],F=o[4],X=o[8],_e=o[12],T=o[1],N=o[5],Se=o[9],ge=o[13],W=o[2],he=o[6],V=o[10],oe=o[14],U=o[3],$=o[7],j=o[11],I=o[15];return l[0]=f*O+u*T+d*W+p*U,l[4]=f*F+u*N+d*he+p*$,l[8]=f*X+u*Se+d*V+p*j,l[12]=f*_e+u*ge+d*oe+p*I,l[1]=m*O+g*T+_*W+S*U,l[5]=m*F+g*N+_*he+S*$,l[9]=m*X+g*Se+_*V+S*j,l[13]=m*_e+g*ge+_*oe+S*I,l[2]=M*O+A*T+x*W+y*U,l[6]=M*F+A*N+x*he+y*$,l[10]=M*X+A*Se+x*V+y*j,l[14]=M*_e+A*ge+x*oe+y*I,l[3]=D*O+w*T+R*W+k*U,l[7]=D*F+w*N+R*he+k*$,l[11]=D*X+w*Se+R*V+k*j,l[15]=D*_e+w*ge+R*oe+k*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],f=e[1],u=e[5],d=e[9],p=e[13],m=e[2],g=e[6],_=e[10],S=e[14],M=e[3],A=e[7],x=e[11],y=e[15];return M*(+l*d*g-o*p*g-l*u*_+r*p*_+o*u*S-r*d*S)+A*(+t*d*S-t*p*_+l*f*_-o*f*S+o*p*m-l*d*m)+x*(+t*p*g-t*u*S-l*f*g+r*f*S+l*u*m-r*p*m)+y*(-o*u*m-t*d*g+t*u*_+o*f*g-r*f*_+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],g=e[9],_=e[10],S=e[11],M=e[12],A=e[13],x=e[14],y=e[15],D=g*x*p-A*_*p+A*d*S-u*x*S-g*d*y+u*_*y,w=M*_*p-m*x*p-M*d*S+f*x*S+m*d*y-f*_*y,R=m*A*p-M*g*p+M*u*S-f*A*S-m*u*y+f*g*y,k=M*g*d-m*A*d-M*u*_+f*A*_+m*u*x-f*g*x,O=t*D+r*w+o*R+l*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=D*F,e[1]=(A*_*l-g*x*l-A*o*S+r*x*S+g*o*y-r*_*y)*F,e[2]=(u*x*l-A*d*l+A*o*p-r*x*p-u*o*y+r*d*y)*F,e[3]=(g*d*l-u*_*l-g*o*p+r*_*p+u*o*S-r*d*S)*F,e[4]=w*F,e[5]=(m*x*l-M*_*l+M*o*S-t*x*S-m*o*y+t*_*y)*F,e[6]=(M*d*l-f*x*l-M*o*p+t*x*p+f*o*y-t*d*y)*F,e[7]=(f*_*l-m*d*l+m*o*p-t*_*p-f*o*S+t*d*S)*F,e[8]=R*F,e[9]=(M*g*l-m*A*l-M*r*S+t*A*S+m*r*y-t*g*y)*F,e[10]=(f*A*l-M*u*l+M*r*p-t*A*p-f*r*y+t*u*y)*F,e[11]=(m*u*l-f*g*l-m*r*p+t*g*p+f*r*S-t*u*S)*F,e[12]=k*F,e[13]=(m*A*o-M*g*o+M*r*_-t*A*_-m*r*x+t*g*x)*F,e[14]=(M*u*o-f*A*o-M*r*d+t*A*d+f*r*x-t*u*x)*F,e[15]=(f*g*o-m*u*o+m*r*d-t*g*d-f*r*_+t*u*_)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,f=e.x,u=e.y,d=e.z,p=l*f,m=l*u;return this.set(p*f+r,p*u-o*d,p*d+o*u,0,p*u+o*d,m*u+r,m*d-o*f,0,p*d-o*u,m*d+o*f,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,f){return this.set(1,r,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,f=t._y,u=t._z,d=t._w,p=l+l,m=f+f,g=u+u,_=l*p,S=l*m,M=l*g,A=f*m,x=f*g,y=u*g,D=d*p,w=d*m,R=d*g,k=r.x,O=r.y,F=r.z;return o[0]=(1-(A+y))*k,o[1]=(S+R)*k,o[2]=(M-w)*k,o[3]=0,o[4]=(S-R)*O,o[5]=(1-(_+y))*O,o[6]=(x+D)*O,o[7]=0,o[8]=(M+w)*F,o[9]=(x-D)*F,o[10]=(1-(_+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=po.set(o[0],o[1],o[2]).length();const f=po.set(o[4],o[5],o[6]).length(),u=po.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],zi.copy(this);const p=1/l,m=1/f,g=1/u;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=m,zi.elements[5]*=m,zi.elements[6]*=m,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,t.setFromRotationMatrix(zi),r.x=l,r.y=f,r.z=u,this}makePerspective(e,t,r,o,l,f,u=Tr){const d=this.elements,p=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let S,M;if(u===Tr)S=-(f+l)/(f-l),M=-2*f*l/(f-l);else if(u===Rc)S=-f/(f-l),M=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,f,u=Tr){const d=this.elements,p=1/(t-e),m=1/(r-o),g=1/(f-l),_=(t+e)*p,S=(r+o)*m;let M,A;if(u===Tr)M=(f+l)*g,A=-2*g;else if(u===Rc)M=l*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=A,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const po=new G,zi=new Kt,Ux=new G(0,0,0),Fx=new G(1,1,1),Kr=new G,Xl=new G,pi=new G,Ym=new Kt,$m=new Fa;class Ci{constructor(e=0,t=0,r=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],f=o[4],u=o[8],d=o[1],p=o[5],m=o[9],g=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(On(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(On(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-On(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ox=0;const Km=new G,mo=new Fa,yr=new Kt,ql=new G,Ma=new G,zx=new G,kx=new Fa,Zm=new G(1,0,0),Jm=new G(0,1,0),Qm=new G(0,0,1),Bx={type:"added"},Hx={type:"removed"},Bf={type:"childadded",child:null},Hf={type:"childremoved",child:null};class dn extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new G,t=new Ci,r=new Fa,o=new G(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Lt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ql.copy(e):ql.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Ma,ql,this.up):yr.lookAt(ql,Ma,this.up),this.quaternion.setFromRotationMatrix(yr),o&&(yr.extractRotation(o.matrixWorld),mo.setFromRotationMatrix(yr),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bx),Bf.child=e,this.dispatchEvent(Bf),Bf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hx),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,f=o.length;l<f;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++){const u=o[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(l(e.materials,this.material[d]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(l(e.animations,d))}}if(t){const u=f(e.geometries),d=f(e.materials),p=f(e.textures),m=f(e.images),g=f(e.shapes),_=f(e.skeletons),S=f(e.animations),M=f(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function f(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new G(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new G,Sr=new G,Gf=new G,Mr=new G,go=new G,vo=new G,eg=new G,Vf=new G,Wf=new G,jf=new G;class Gi{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ki.subVectors(e,t),o.cross(ki);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ki.subVectors(o,t),Sr.subVectors(r,t),Gf.subVectors(e,t);const f=ki.dot(ki),u=ki.dot(Sr),d=ki.dot(Gf),p=Sr.dot(Sr),m=Sr.dot(Gf),g=f*p-u*u;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(p*d-u*m)*_,M=(f*m-u*d)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,r,o,l,f,u,d){return this.getBarycoord(e,t,r,o,Mr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Mr.x),d.addScaledVector(f,Mr.y),d.addScaledVector(u,Mr.z),d)}static isFrontFacing(e,t,r,o){return ki.subVectors(r,t),Sr.subVectors(e,t),ki.cross(Sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),ki.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let f,u;go.subVectors(o,r),vo.subVectors(l,r),Vf.subVectors(e,r);const d=go.dot(Vf),p=vo.dot(Vf);if(d<=0&&p<=0)return t.copy(r);Wf.subVectors(e,o);const m=go.dot(Wf),g=vo.dot(Wf);if(m>=0&&g<=m)return t.copy(o);const _=d*g-m*p;if(_<=0&&d>=0&&m<=0)return f=d/(d-m),t.copy(r).addScaledVector(go,f);jf.subVectors(e,l);const S=go.dot(jf),M=vo.dot(jf);if(M>=0&&S<=M)return t.copy(l);const A=S*p-d*M;if(A<=0&&p>=0&&M<=0)return u=p/(p-M),t.copy(r).addScaledVector(vo,u);const x=m*M-S*g;if(x<=0&&g-m>=0&&S-M>=0)return eg.subVectors(l,o),u=(g-m)/(g-m+(S-M)),t.copy(o).addScaledVector(eg,u);const y=1/(x+A+_);return f=A*y,u=_*y,t.copy(r).addScaledVector(go,f).addScaledVector(vo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ji){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=qt.workingColorSpace){return this.r=e,this.g=t,this.b=r,qt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=qt.workingColorSpace){if(e=Cx(e,1),t=On(t,0,1),r=On(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Xf(f,l,e+1/3),this.g=Xf(f,l,e),this.b=Xf(f,l,e-1/3)}return qt.toWorkingColorSpace(this,o),this}setStyle(e,t=Ji){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],u=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ji){const r=v0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Df(e.r),this.g=Df(e.g),this.b=Df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ji){return qt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(On(Fn.r*255,0,255))*65536+Math.round(On(Fn.g*255,0,255))*256+Math.round(On(Fn.b*255,0,255))}getHexString(e=Ji){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Fn.copy(this),t);const r=Fn.r,o=Fn.g,l=Fn.b,f=Math.max(r,o,l),u=Math.min(r,o,l);let d,p;const m=(u+f)/2;if(u===f)d=0,p=0;else{const g=f-u;switch(p=m<=.5?g/(f+u):g/(2-f-u),f){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ji){qt.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,o=Fn.b;return e!==Ji?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Yl);const r=Pf(Zr.h,Yl.h,t),o=Pf(Zr.s,Yl.s,t),l=Pf(Zr.l,Yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new At;At.NAMES=v0;let Gx=0;class tr extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=Oo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=dd,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(r.blending=this.blending),this.side!==ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fd&&(r.blendSrc=this.blendSrc),this.blendDst!==dd&&(r.blendDst=this.blendDst),this.blendEquation!==Ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const f=[];for(const u in l){const d=l[u];delete d.metadata,f.push(d)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ls extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new G,$l=new Be;class vi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return d0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=er(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array),o=Xt(o,this.array),l=Xt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vd&&(e.usage=this.usage),e}}class _0 extends vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class x0 extends vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wt extends vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Vx=0;const Ti=new Kt,qf=new dn,_o=new G,mi=new Oa,Ea=new Oa,An=new G;class tn extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?x0:_0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,r){return Ti.makeTranslation(e,t,r),this.applyMatrix4(Ti),this}scale(e,t,r){return Ti.makeScale(e,t,r),this.applyMatrix4(Ti),this}lookAt(e){return qf.lookAt(e),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];Ea.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(mi.min,Ea.min),mi.expandByPoint(An),An.addVectors(mi.max,Ea.max),mi.expandByPoint(An)):(mi.expandByPoint(Ea.min),mi.expandByPoint(Ea.max))}mi.getCenter(r);let o=0;for(let l=0,f=e.count;l<f;l++)An.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(An));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],d=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)An.fromBufferAttribute(u,p),d&&(_o.fromBufferAttribute(e,p),An.add(_o)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),u=[],d=[];for(let X=0;X<r.count;X++)u[X]=new G,d[X]=new G;const p=new G,m=new G,g=new G,_=new Be,S=new Be,M=new Be,A=new G,x=new G;function y(X,_e,T){p.fromBufferAttribute(r,X),m.fromBufferAttribute(r,_e),g.fromBufferAttribute(r,T),_.fromBufferAttribute(l,X),S.fromBufferAttribute(l,_e),M.fromBufferAttribute(l,T),m.sub(p),g.sub(p),S.sub(_),M.sub(_);const N=1/(S.x*M.y-M.x*S.y);isFinite(N)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(N),x.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(N),u[X].add(A),u[_e].add(A),u[T].add(A),d[X].add(x),d[_e].add(x),d[T].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,_e=D.length;X<_e;++X){const T=D[X],N=T.start,Se=T.count;for(let ge=N,W=N+Se;ge<W;ge+=3)y(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const w=new G,R=new G,k=new G,O=new G;function F(X){k.fromBufferAttribute(o,X),O.copy(k);const _e=u[X];w.copy(_e),w.sub(k.multiplyScalar(k.dot(_e))).normalize(),R.crossVectors(O,_e);const N=R.dot(d[X])<0?-1:1;f.setXYZW(X,w.x,w.y,w.z,N)}for(let X=0,_e=D.length;X<_e;++X){const T=D[X],N=T.start,Se=T.count;for(let ge=N,W=N+Se;ge<W;ge+=3)F(e.getX(ge+0)),F(e.getX(ge+1)),F(e.getX(ge+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new G,l=new G,f=new G,u=new G,d=new G,p=new G,m=new G,g=new G;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),A=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),f.fromBufferAttribute(t,x),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),u.add(m),d.add(m),p.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,d){const p=u.array,m=u.itemSize,g=u.normalized,_=new p.constructor(d.length*m);let S=0,M=0;for(let A=0,x=d.length;A<x;A++){u.isInterleavedBufferAttribute?S=d[A]*u.data.stride+u.offset:S=d[A]*m;for(let y=0;y<m;y++)_[M++]=p[S++]}return new vi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],p=e(d,r);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const d=[],p=l[u];for(let m=0,g=p.length;m<g;m++){const _=p[m],S=e(_,r);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,d=f.length;u<d;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new Kt,Es=new bd,Kl=new za,ng=new G,xo=new G,yo=new G,So=new G,Yf=new G,Zl=new G,Jl=new Be,Ql=new Be,ec=new Be,ig=new G,rg=new G,sg=new G,tc=new G,nc=new G;class kt extends dn{constructor(e=new tn,t=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){Zl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=u[d],g=l[d];m!==0&&(Yf.fromBufferAttribute(g,e),f?Zl.addScaledVector(Yf,m):Zl.addScaledVector(Yf.sub(t),m))}t.add(Zl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Es.copy(e.ray).recast(e.near),!(Kl.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Kl,ng)===null||Es.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),Es.copy(e.ray).applyMatrix4(tg),!(r.boundingBox!==null&&Es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,f=this.material,u=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const x=_[M],y=f[x.materialIndex],D=Math.max(x.start,S.start),w=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,k=w;R<k;R+=3){const O=u.getX(R),F=u.getX(R+1),X=u.getX(R+2);o=ic(this,y,e,r,p,m,g,O,F,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(u.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const D=u.getX(x),w=u.getX(x+1),R=u.getX(x+2);o=ic(this,f,e,r,p,m,g,D,w,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const x=_[M],y=f[x.materialIndex],D=Math.max(x.start,S.start),w=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,k=w;R<k;R+=3){const O=R,F=R+1,X=R+2;o=ic(this,y,e,r,p,m,g,O,F,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const D=x,w=x+1,R=x+2;o=ic(this,f,e,r,p,m,g,D,w,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Wx(s,e,t,r,o,l,f,u){let d;if(e.side===jn?d=r.intersectTriangle(f,l,o,!0,u):d=r.intersectTriangle(o,l,f,e.side===ss,u),d===null)return null;nc.copy(u),nc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(nc);return p<t.near||p>t.far?null:{distance:p,point:nc.clone(),object:s}}function ic(s,e,t,r,o,l,f,u,d,p){s.getVertexPosition(u,xo),s.getVertexPosition(d,yo),s.getVertexPosition(p,So);const m=Wx(s,e,t,r,xo,yo,So,tc);if(m){o&&(Jl.fromBufferAttribute(o,u),Ql.fromBufferAttribute(o,d),ec.fromBufferAttribute(o,p),m.uv=Gi.getInterpolation(tc,xo,yo,So,Jl,Ql,ec,new Be)),l&&(Jl.fromBufferAttribute(l,u),Ql.fromBufferAttribute(l,d),ec.fromBufferAttribute(l,p),m.uv1=Gi.getInterpolation(tc,xo,yo,So,Jl,Ql,ec,new Be)),f&&(ig.fromBufferAttribute(f,u),rg.fromBufferAttribute(f,d),sg.fromBufferAttribute(f,p),m.normal=Gi.getInterpolation(tc,xo,yo,So,ig,rg,sg,new G),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:d,c:p,normal:new G,materialIndex:0};Gi.getNormal(xo,yo,So,g.normal),m.face=g}return m}class Ai extends tn{constructor(e=1,t=1,r=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:f};const u=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const d=[],p=[],m=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,r,t,e,f,l,0),M("z","y","x",1,-1,r,t,-e,f,l,1),M("x","z","y",1,1,e,r,t,o,f,2),M("x","z","y",1,-1,e,r,-t,o,f,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(g,2));function M(A,x,y,D,w,R,k,O,F,X,_e){const T=R/F,N=k/X,Se=R/2,ge=k/2,W=O/2,he=F+1,V=X+1;let oe=0,U=0;const $=new G;for(let j=0;j<V;j++){const I=j*N-ge;for(let ee=0;ee<he;ee++){const Ae=ee*T-Se;$[A]=Ae*D,$[x]=I*w,$[y]=W,p.push($.x,$.y,$.z),$[A]=0,$[x]=0,$[y]=O>0?1:-1,m.push($.x,$.y,$.z),g.push(ee/F),g.push(1-j/X),oe+=1}}for(let j=0;j<X;j++)for(let I=0;I<F;I++){const ee=_+I+he*j,Ae=_+I+he*(j+1),Q=_+(I+1)+he*(j+1),pe=_+(I+1)+he*j;d.push(ee,Ae,pe),d.push(Ae,Q,pe),U+=6}u.addGroup(S,U,_e),S+=U,_+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=Go(s[t]);for(const o in r)e[o]=r[o]}return e}function jx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function y0(s){return s.getRenderTarget()===null?s.outputColorSpace:qt.workingColorSpace}const Xx={clone:Go,merge:Vn};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class S0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new G,og=new Be,ag=new Be;class ri extends S0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,og,ag),t.subVectors(ag,og)}setViewOffset(e,t,r,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;l+=f.offsetX*o/d,t-=f.offsetY*r/p,o*=f.width/d,r*=f.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,Eo=1;class $x extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(Mo,Eo,e,t);o.layers=this.layers,this.add(o);const l=new ri(Mo,Eo,e,t);l.layers=this.layers,this.add(l);const f=new ri(Mo,Eo,e,t);f.layers=this.layers,this.add(f);const u=new ri(Mo,Eo,e,t);u.layers=this.layers,this.add(u);const d=new ri(Mo,Eo,e,t);d.layers=this.layers,this.add(d);const p=new ri(Mo,Eo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,f,u,d]=t;for(const p of t)this.remove(p);if(e===Tr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,u,d,p,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,f),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class M0 extends Xn{constructor(e,t,r,o,l,f,u,d,p,m){e=e!==void 0?e:[],t=t!==void 0?t:ko,super(e,t,r,o,l,f,u,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new M0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ai(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:Go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ns});l.uniforms.tEquirect.value=t;const f=new kt(o,l),u=t.minFilter;return t.minFilter===Ns&&(t.minFilter=ii),new $x(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,o);e.setRenderTarget(l)}}const $f=new G,Zx=new G,Jx=new Lt;class Rs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=$f.subVectors(r,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta($f),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Jx.getNormalMatrix(e),o=this.coplanarPoint($f).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new za,rc=new G;class Pd{constructor(e=new Rs,t=new Rs,r=new Rs,o=new Rs,l=new Rs,f=new Rs){this.planes=[e,t,r,o,l,f]}set(e,t,r,o,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Tr){const r=this.planes,o=e.elements,l=o[0],f=o[1],u=o[2],d=o[3],p=o[4],m=o[5],g=o[6],_=o[7],S=o[8],M=o[9],A=o[10],x=o[11],y=o[12],D=o[13],w=o[14],R=o[15];if(r[0].setComponents(d-l,_-p,x-S,R-y).normalize(),r[1].setComponents(d+l,_+p,x+S,R+y).normalize(),r[2].setComponents(d+f,_+m,x+M,R+D).normalize(),r[3].setComponents(d-f,_-m,x-M,R-D).normalize(),r[4].setComponents(d-u,_-g,x-A,R-w).normalize(),t===Tr)r[5].setComponents(d+u,_+g,x+A,R+w).normalize();else if(t===Rc)r[5].setComponents(u,g,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(rc.x=o.normal.x>0?e.max.x:e.min.x,rc.y=o.normal.y>0?e.max.y:e.min.y,rc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E0(){let s=null,e=!1,t=null,r=null;function o(l,f){t(l,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Qx(s,e){const t=e.isWebGL2,r=new WeakMap;function o(p,m){const g=p.array,_=p.usage,S=g.byteLength,M=s.createBuffer();s.bindBuffer(m,M),s.bufferData(m,g,_),p.onUploadCallback();let A;if(g instanceof Float32Array)A=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)A=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=s.SHORT;else if(g instanceof Uint32Array)A=s.UNSIGNED_INT;else if(g instanceof Int32Array)A=s.INT;else if(g instanceof Int8Array)A=s.BYTE;else if(g instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,m,g){const _=m.array,S=m._updateRange,M=m.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&M.length===0&&s.bufferSubData(g,0,_),M.length!==0){for(let A=0,x=M.length;A<x;A++){const y=M[A];t?s.bufferSubData(g,y.start*_.BYTES_PER_ELEMENT,_,y.start,y.count):s.bufferSubData(g,y.start*_.BYTES_PER_ELEMENT,_.subarray(y.start,y.start+y.count))}m.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=r.get(p);m&&(s.deleteBuffer(m.buffer),r.delete(p))}function d(p,m){if(p.isGLBufferAttribute){const _=r.get(p);(!_||_.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,o(p,m));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,m),g.version=p.version}}return{get:f,remove:u,update:d}}class ka extends tn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,f=t/2,u=Math.floor(r),d=Math.floor(o),p=u+1,m=d+1,g=e/u,_=t/d,S=[],M=[],A=[],x=[];for(let y=0;y<m;y++){const D=y*_-f;for(let w=0;w<p;w++){const R=w*g-l;M.push(R,-D,0),A.push(0,0,1),x.push(w/u),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<u;D++){const w=D+p*y,R=D+p*(y+1),k=D+1+p*(y+1),O=D+1+p*y;S.push(w,R,O),S.push(R,k,O)}this.setIndex(S),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
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
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
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
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hy=`#ifdef USE_IRIDESCENCE
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
#endif`,py=`#ifdef USE_BUMPMAP
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
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
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ty=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`
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
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,Qy=`struct PhysicalMaterial {
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,TM=`#define STANDARD
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
}`,AM=`#define TOON
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
}`,CM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:fy,bsdfs:dy,iridescence_fragment:hy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:vy,clipping_planes_vertex:_y,color_fragment:xy,color_pars_fragment:yy,color_pars_vertex:Sy,color_vertex:My,common:Ey,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Ty,displacementmap_pars_vertex:Ay,displacementmap_vertex:Cy,emissivemap_fragment:Ry,emissivemap_pars_fragment:by,colorspace_fragment:Py,colorspace_pars_fragment:Ly,envmap_fragment:Dy,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Iy,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:qy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:zy,fog_fragment:ky,fog_pars_fragment:By,gradientmap_pars_fragment:Hy,lightmap_fragment:Gy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:jy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:Ky,lights_phong_pars_fragment:Zy,lights_physical_fragment:Jy,lights_physical_pars_fragment:Qy,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:dS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:xS,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:RS,packing:bS,premultiplied_alpha_fragment:PS,project_vertex:LS,dithering_fragment:DS,dithering_pars_fragment:NS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:zS,shadowmask_pars_fragment:kS,skinbase_vertex:BS,skinning_pars_vertex:HS,skinning_vertex:GS,skinnormal_vertex:VS,specularmap_fragment:WS,specularmap_pars_fragment:jS,tonemapping_fragment:XS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:QS,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:fM,linedashed_vert:dM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:_M,meshmatcap_frag:xM,meshnormal_vert:yM,meshnormal_frag:SM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:CM,points_vert:RM,points_frag:bM,shadow_vert:PM,shadow_frag:LM,sprite_vert:DM,sprite_frag:NM},je={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Qi={basic:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new At(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Vn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Vn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Vn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new At(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Vn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Vn([je.points,je.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Vn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Vn([je.common,je.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Vn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Vn([je.sprite,je.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Vn([je.common,je.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Vn([je.lights,je.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Qi.physical={uniforms:Vn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const sc={r:0,b:0,g:0},Ts=new Ci,IM=new Kt;function UM(s,e,t,r,o,l,f){const u=new At(0);let d=l===!0?0:1,p,m,g=null,_=0,S=null;function M(x,y){let D=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w)),w===null?A(u,d):w&&w.isColor&&(A(w,1),D=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,f):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Oc)?(m===void 0&&(m=new kt(new Ai(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Go(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Ts.copy(y.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(Ts)),m.material.toneMapped=qt.getTransfer(w.colorSpace)!==Qt,(g!==w||_!==w.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=w,_=w.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new kt(new ka(2,2),new Cr({name:"BackgroundMaterial",uniforms:Go(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=qt.getTransfer(w.colorSpace)!==Qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,_=w.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,y){x.getRGB(sc,y0(s)),r.buffers.color.setClear(sc.r,sc.g,sc.b,y,f)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),d=y,A(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,A(u,d)},render:M}}function FM(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,u={},d=x(null);let p=d,m=!1;function g(W,he,V,oe,U){let $=!1;if(f){const j=A(oe,V,he);p!==j&&(p=j,S(p.object)),$=y(W,oe,V,U),$&&D(W,oe,V,U)}else{const j=he.wireframe===!0;(p.geometry!==oe.id||p.program!==V.id||p.wireframe!==j)&&(p.geometry=oe.id,p.program=V.id,p.wireframe=j,$=!0)}U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),($||m)&&(m=!1,X(W,he,V,oe),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function _(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(W){return r.isWebGL2?s.bindVertexArray(W):l.bindVertexArrayOES(W)}function M(W){return r.isWebGL2?s.deleteVertexArray(W):l.deleteVertexArrayOES(W)}function A(W,he,V){const oe=V.wireframe===!0;let U=u[W.id];U===void 0&&(U={},u[W.id]=U);let $=U[he.id];$===void 0&&($={},U[he.id]=$);let j=$[oe];return j===void 0&&(j=x(_()),$[oe]=j),j}function x(W){const he=[],V=[],oe=[];for(let U=0;U<o;U++)he[U]=0,V[U]=0,oe[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:V,attributeDivisors:oe,object:W,attributes:{},index:null}}function y(W,he,V,oe){const U=p.attributes,$=he.attributes;let j=0;const I=V.getAttributes();for(const ee in I)if(I[ee].location>=0){const Q=U[ee];let pe=$[ee];if(pe===void 0&&(ee==="instanceMatrix"&&W.instanceMatrix&&(pe=W.instanceMatrix),ee==="instanceColor"&&W.instanceColor&&(pe=W.instanceColor)),Q===void 0||Q.attribute!==pe||pe&&Q.data!==pe.data)return!0;j++}return p.attributesNum!==j||p.index!==oe}function D(W,he,V,oe){const U={},$=he.attributes;let j=0;const I=V.getAttributes();for(const ee in I)if(I[ee].location>=0){let Q=$[ee];Q===void 0&&(ee==="instanceMatrix"&&W.instanceMatrix&&(Q=W.instanceMatrix),ee==="instanceColor"&&W.instanceColor&&(Q=W.instanceColor));const pe={};pe.attribute=Q,Q&&Q.data&&(pe.data=Q.data),U[ee]=pe,j++}p.attributes=U,p.attributesNum=j,p.index=oe}function w(){const W=p.newAttributes;for(let he=0,V=W.length;he<V;he++)W[he]=0}function R(W){k(W,0)}function k(W,he){const V=p.newAttributes,oe=p.enabledAttributes,U=p.attributeDivisors;V[W]=1,oe[W]===0&&(s.enableVertexAttribArray(W),oe[W]=1),U[W]!==he&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,he),U[W]=he)}function O(){const W=p.newAttributes,he=p.enabledAttributes;for(let V=0,oe=he.length;V<oe;V++)he[V]!==W[V]&&(s.disableVertexAttribArray(V),he[V]=0)}function F(W,he,V,oe,U,$,j){j===!0?s.vertexAttribIPointer(W,he,V,U,$):s.vertexAttribPointer(W,he,V,oe,U,$)}function X(W,he,V,oe){if(r.isWebGL2===!1&&(W.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const U=oe.attributes,$=V.getAttributes(),j=he.defaultAttributeValues;for(const I in $){const ee=$[I];if(ee.location>=0){let Ae=U[I];if(Ae===void 0&&(I==="instanceMatrix"&&W.instanceMatrix&&(Ae=W.instanceMatrix),I==="instanceColor"&&W.instanceColor&&(Ae=W.instanceColor)),Ae!==void 0){const Q=Ae.normalized,pe=Ae.itemSize,me=t.get(Ae);if(me===void 0)continue;const De=me.buffer,Ne=me.type,Le=me.bytesPerElement,it=r.isWebGL2===!0&&(Ne===s.INT||Ne===s.UNSIGNED_INT||Ae.gpuType===i0);if(Ae.isInterleavedBufferAttribute){const Je=Ae.data,B=Je.stride,Ue=Ae.offset;if(Je.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)k(ee.location+xe,Je.meshPerAttribute);W.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let xe=0;xe<ee.locationSize;xe++)R(ee.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<ee.locationSize;xe++)F(ee.location+xe,pe/ee.locationSize,Ne,Q,B*Le,(Ue+pe/ee.locationSize*xe)*Le,it)}else{if(Ae.isInstancedBufferAttribute){for(let Je=0;Je<ee.locationSize;Je++)k(ee.location+Je,Ae.meshPerAttribute);W.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Je=0;Je<ee.locationSize;Je++)R(ee.location+Je);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Je=0;Je<ee.locationSize;Je++)F(ee.location+Je,pe/ee.locationSize,Ne,Q,pe*Le,pe/ee.locationSize*Je*Le,it)}}else if(j!==void 0){const Q=j[I];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(ee.location,Q);break;case 3:s.vertexAttrib3fv(ee.location,Q);break;case 4:s.vertexAttrib4fv(ee.location,Q);break;default:s.vertexAttrib1fv(ee.location,Q)}}}}O()}function _e(){Se();for(const W in u){const he=u[W];for(const V in he){const oe=he[V];for(const U in oe)M(oe[U].object),delete oe[U];delete he[V]}delete u[W]}}function T(W){if(u[W.id]===void 0)return;const he=u[W.id];for(const V in he){const oe=he[V];for(const U in oe)M(oe[U].object),delete oe[U];delete he[V]}delete u[W.id]}function N(W){for(const he in u){const V=u[he];if(V[W.id]===void 0)continue;const oe=V[W.id];for(const U in oe)M(oe[U].object),delete oe[U];delete V[W.id]}}function Se(){ge(),m=!0,p!==d&&(p=d,S(p.object))}function ge(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:Se,resetDefaultState:ge,dispose:_e,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:R,disableUnusedAttributes:O}}function OM(s,e,t,r){const o=r.isWebGL2;let l;function f(m){l=m}function u(m,g){s.drawArrays(l,m,g),t.update(g,l,1)}function d(m,g,_){if(_===0)return;let S,M;if(o)S=s,M="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](l,m,g,_),t.update(g,l,_)}function p(m,g,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_;M++)this.render(m[M],g[M]);else{S.multiDrawArraysWEBGL(l,m,0,g,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A];t.update(M,l,1)}}this.setMode=f,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function zM(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=f||e.has("OES_texture_float"),k=w&&R,O=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:A,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:D,vertexTextures:w,floatFragmentTextures:R,floatVertexTextures:k,maxSamples:O}}function kM(s){const e=this;let t=null,r=0,o=!1,l=!1;const f=new Rs,u=new Lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||o;return o=_,r=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,A=g.clipIntersection,x=g.clipShadows,y=s.get(g);if(!o||M===null||M.length===0||l&&!x)l?m(null):p();else{const D=l?0:r,w=D*4;let R=y.clippingState||null;d.value=R,R=m(M,_,w,S);for(let k=0;k!==w;++k)R[k]=t[k];y.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,S,M){const A=g!==null?g.length:0;let x=null;if(A!==0){if(x=d.value,M!==!0||x===null){const y=S+A*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(x===null||x.length<y)&&(x=new Float32Array(y));for(let w=0,R=S;w!==A;++w,R+=4)f.copy(g[w]).applyMatrix4(D,u),f.normal.toArray(x,R),x[R+3]=f.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function BM(s){let e=new WeakMap;function t(f,u){return u===hd?f.mapping=ko:u===pd&&(f.mapping=Bo),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===hd||u===pd)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new Kx(d.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",o),t(p.texture,f.mapping)}else return null}}return f}function o(f){const u=f.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class w0 extends S0{constructor(e=-1,t=1,r=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,f=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Io=4,lg=[.125,.215,.35,.446,.526,.582],Ds=20,Kf=new w0,cg=new At;let Zf=null,Jf=0,Qf=0;const bs=(1+Math.sqrt(5))/2,wo=1/bs,ug=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,bs,wo),new G(0,bs,-wo),new G(wo,0,bs),new G(-wo,0,bs),new G(bs,wo,0),new G(-bs,wo,0)];class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Qf),e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ko||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Da,format:Hi,colorSpace:os,depthBuffer:!1},o=dg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(l)),this._blurMaterial=GM(l,e,t)}return o}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Kf)}_sceneToCubeUV(e,t,r,o){const u=new ri(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(cg),m.toneMapping=is,m.autoClear=!1;const S=new Ls({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),M=new kt(new Ai,S);let A=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,A=!0):(S.color.copy(cg),A=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(u.up.set(0,d[y],0),u.lookAt(p[y],0,0)):D===1?(u.up.set(0,0,d[y]),u.lookAt(0,p[y],0)):(u.up.set(0,d[y],0),u.lookAt(0,0,p[y]));const w=this._cubeSize;oc(o,D*w,y>2?w:0,w,w),m.setRenderTarget(o),A&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ko||e.mapping===Bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new kt(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const d=this._cubeSize;oc(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(f,Kf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=ug[(o-1)%ug.length];this._blur(e,o-1,o,l,f)}t.autoClear=r}_blur(e,t,r,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,o,"latitudinal",l),this._halfBlur(f,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,f,u){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new kt(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Ds-1),A=l/M,x=isFinite(l)?1+Math.floor(m*A):Ds;x>Ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ds}`);const y=[];let D=0;for(let F=0;F<Ds;++F){const X=F/A,_e=Math.exp(-X*X/2);y.push(_e),F===0?D+=_e:F<x&&(D+=2*_e)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=f==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:w}=this;_.dTheta.value=M,_.mipInt.value=w-r;const R=this._sizeLods[o],k=3*R*(o>w-Io?o-w+Io:0),O=4*(this._cubeSize-R);oc(t,k,O,3*R,2*R),d.setRenderTarget(t),d.render(g,Kf)}}function HM(s){const e=[],t=[],r=[];let o=s;const l=s-Io+1+lg.length;for(let f=0;f<l;f++){const u=Math.pow(2,o);t.push(u);let d=1/u;f>s-Io?d=lg[f-s+Io-1]:f===0&&(d=0),r.push(d);const p=1/(u-2),m=-p,g=1+p,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,A=3,x=2,y=1,D=new Float32Array(A*M*S),w=new Float32Array(x*M*S),R=new Float32Array(y*M*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,X=O>2?0:-1,_e=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];D.set(_e,A*M*O),w.set(_,x*M*O);const T=[O,O,O,O,O,O];R.set(T,y*M*O)}const k=new tn;k.setAttribute("position",new vi(D,A)),k.setAttribute("uv",new vi(w,x)),k.setAttribute("faceIndex",new vi(R,y)),e.push(k),o>Io&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function dg(s,e,t){const r=new zs(s,e,t);return r.texture.mapping=Oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function oc(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function GM(s,e,t){const r=new Float32Array(Ds),o=new G(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function hg(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function pg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function VM(s){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const d=u.mapping,p=d===hd||d===pd,m=d===ko||d===Bo;if(p||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new fg(s)),g=p?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(p&&g&&g.height>0||m&&g&&o(g)){t===null&&(t=new fg(s));const _=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",l),_.texture}else return null}}}return u}function o(u){let d=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p}function l(u){const d=u.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function WM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,t,r){const o={},l=new WeakMap;function f(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const A=_.morphAttributes[M];for(let x=0,y=A.length;x<y;x++)e.remove(A[x])}_.removeEventListener("dispose",f),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const A=S[M];for(let x=0,y=A.length;x<y;x++)e.update(A[x],s.ARRAY_BUFFER)}}function p(g){const _=[],S=g.index,M=g.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let w=0,R=D.length;w<R;w+=3){const k=D[w+0],O=D[w+1],F=D[w+2];_.push(k,O,O,F,F,k)}}else if(M!==void 0){const D=M.array;A=M.version;for(let w=0,R=D.length/3-1;w<R;w+=3){const k=w+0,O=w+1,F=w+2;_.push(k,O,O,F,F,k)}}else return;const x=new(f0(_)?x0:_0)(_,1);x.version=A;const y=l.get(g);y&&e.remove(y),l.set(g,x)}function m(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function XM(s,e,t,r){const o=r.isWebGL2;let l;function f(S){l=S}let u,d;function p(S){u=S.type,d=S.bytesPerElement}function m(S,M){s.drawElements(l,M,u,S*d),t.update(M,l,1)}function g(S,M,A){if(A===0)return;let x,y;if(o)x=s,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](l,M,u,S*d,A),t.update(M,l,A)}function _(S,M,A){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<A;y++)this.render(S[y]/d,M[y]);else{x.multiDrawElementsWEBGL(l,M,0,u,S,0,A);let y=0;for(let D=0;D<A;D++)y+=M[D];t.update(y,l,1)}}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=g,this.renderMultiDraw=_}function qM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,u){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e){return s[0]-e[0]}function $M(s,e){return Math.abs(e[1])-Math.abs(s[1])}function KM(s,e,t){const r={},o=new Float32Array(8),l=new WeakMap,f=new nn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function d(p,m,g){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,A=M!==void 0?M.length:0;let x=l.get(m);if(x===void 0||x.count!==A){let ge=function(){N.dispose(),l.delete(m),m.removeEventListener("dispose",ge)};var S=ge;x!==void 0&&x.texture.dispose();const y=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,w=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],k=m.morphAttributes.normal||[],O=m.morphAttributes.color||[];let F=0;y===!0&&(F=1),D===!0&&(F=2),w===!0&&(F=3);let X=m.attributes.position.count*F,_e=1;X>e.maxTextureSize&&(_e=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const T=new Float32Array(X*_e*4*A),N=new m0(T,X,_e,A);N.type=wr,N.needsUpdate=!0;const Se=F*4;for(let W=0;W<A;W++){const he=R[W],V=k[W],oe=O[W],U=X*_e*4*W;for(let $=0;$<he.count;$++){const j=$*Se;y===!0&&(f.fromBufferAttribute(he,$),T[U+j+0]=f.x,T[U+j+1]=f.y,T[U+j+2]=f.z,T[U+j+3]=0),D===!0&&(f.fromBufferAttribute(V,$),T[U+j+4]=f.x,T[U+j+5]=f.y,T[U+j+6]=f.z,T[U+j+7]=0),w===!0&&(f.fromBufferAttribute(oe,$),T[U+j+8]=f.x,T[U+j+9]=f.y,T[U+j+10]=f.z,T[U+j+11]=oe.itemSize===4?f.w:1)}}x={count:A,texture:N,size:new Be(X,_e)},l.set(m,x),m.addEventListener("dispose",ge)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let y=0;for(let w=0;w<_.length;w++)y+=_[w];const D=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(s,"morphTargetBaseInfluence",D),g.getUniforms().setValue(s,"morphTargetInfluences",_)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const M=_===void 0?0:_.length;let A=r[m.id];if(A===void 0||A.length!==M){A=[];for(let R=0;R<M;R++)A[R]=[R,0];r[m.id]=A}for(let R=0;R<M;R++){const k=A[R];k[0]=R,k[1]=_[R]}A.sort($M);for(let R=0;R<8;R++)R<M&&A[R][1]?(u[R][0]=A[R][0],u[R][1]=A[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(YM);const x=m.morphAttributes.position,y=m.morphAttributes.normal;let D=0;for(let R=0;R<8;R++){const k=u[R],O=k[0],F=k[1];O!==Number.MAX_SAFE_INTEGER&&F?(x&&m.getAttribute("morphTarget"+R)!==x[O]&&m.setAttribute("morphTarget"+R,x[O]),y&&m.getAttribute("morphNormal"+R)!==y[O]&&m.setAttribute("morphNormal"+R,y[O]),o[R]=F,D+=F):(x&&m.hasAttribute("morphTarget"+R)===!0&&m.deleteAttribute("morphTarget"+R),y&&m.hasAttribute("morphNormal"+R)===!0&&m.deleteAttribute("morphNormal"+R),o[R]=0)}const w=m.morphTargetsRelative?1:1-D;g.getUniforms().setValue(s,"morphTargetBaseInfluence",w),g.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:d}}function ZM(s,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function f(){o=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class T0 extends Xn{constructor(e,t,r,o,l,f,u,d,p,m){if(m=m!==void 0?m:Us,m!==Us&&m!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Us&&(r=ts),r===void 0&&m===Ho&&(r=Is),super(null,o,l,f,u,d,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Wn,this.minFilter=d!==void 0?d:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const A0=new Xn,C0=new T0(1,1);C0.compareFunction=u0;const R0=new m0,b0=new Nx,P0=new M0,mg=[],gg=[],vg=new Float32Array(16),_g=new Float32Array(9),xg=new Float32Array(4);function Wo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=mg[o];if(l===void 0&&(l=new Float32Array(o),mg[o]=l),e!==0){r.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,s[f].toArray(l,u)}return l}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Bc(s,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function JM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function n1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;xg.set(r),s.uniformMatrix2fv(this.addr,!1,xg),Mn(t,r)}}function i1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;_g.set(r),s.uniformMatrix3fv(this.addr,!1,_g),Mn(t,r)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;vg.set(r),s.uniformMatrix4fv(this.addr,!1,vg),Mn(t,r)}}function s1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function c1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function h1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);const l=this.type===s.SAMPLER_2D_SHADOW?C0:A0;t.setTexture2D(e||l,o)}function p1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||b0,o)}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||P0,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||R0,o)}function v1(s){switch(s){case 5126:return JM;case 35664:return QM;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function _1(s,e){s.uniform1fv(this.addr,e)}function x1(s,e){const t=Wo(e,this.size,2);s.uniform2fv(this.addr,t)}function y1(s,e){const t=Wo(e,this.size,3);s.uniform3fv(this.addr,t)}function S1(s,e){const t=Wo(e,this.size,4);s.uniform4fv(this.addr,t)}function M1(s,e){const t=Wo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E1(s,e){const t=Wo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function w1(s,e){const t=Wo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function T1(s,e){s.uniform1iv(this.addr,e)}function A1(s,e){s.uniform2iv(this.addr,e)}function C1(s,e){s.uniform3iv(this.addr,e)}function R1(s,e){s.uniform4iv(this.addr,e)}function b1(s,e){s.uniform1uiv(this.addr,e)}function P1(s,e){s.uniform2uiv(this.addr,e)}function L1(s,e){s.uniform3uiv(this.addr,e)}function D1(s,e){s.uniform4uiv(this.addr,e)}function N1(s,e,t){const r=this.cache,o=e.length,l=Bc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||A0,l[f])}function I1(s,e,t){const r=this.cache,o=e.length,l=Bc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||b0,l[f])}function U1(s,e,t){const r=this.cache,o=e.length,l=Bc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||P0,l[f])}function F1(s,e,t){const r=this.cache,o=e.length,l=Bc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||R0,l[f])}function O1(s){switch(s){case 5126:return _1;case 35664:return x1;case 35665:return y1;case 35666:return S1;case 35674:return M1;case 35675:return E1;case 35676:return w1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return b1;case 36294:return P1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}class z1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class k1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O1(t.type)}}class B1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function yg(s,e){s.seq.push(e),s.map[e.id]=e}function H1(s,e,t){const r=s.name,o=r.length;for(ed.lastIndex=0;;){const l=ed.exec(r),f=ed.lastIndex;let u=l[1];const d=l[2]==="]",p=l[3];if(d&&(u=u|0),p===void 0||p==="["&&f+2===o){yg(t,p===void 0?new z1(u,s,e):new k1(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new B1(u),yg(t,g)),t=g}}}class Mc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);H1(l,f,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,f=t.length;l!==f;++l){const u=t[l],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&r.push(f)}return r}}function Sg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const G1=37297;let V1=0;function W1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return r.join(`
`)}function j1(s){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(s);let r;switch(e===t?r="":e===Cc&&t===Ac?r="LinearDisplayP3ToLinearSRGB":e===Ac&&t===Cc&&(r="LinearSRGBToLinearDisplayP3"),s){case os:case kc:return[r,"LinearTransferOETF"];case Ji:case Rd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+W1(s.getShaderSource(e),f)}else return o}function X1(s,e){const t=j1(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function q1(s,e){let t;switch(e){case nx:t="Linear";break;case ix:t="Reinhard";break;case rx:t="OptimizedCineon";break;case sx:t="ACESFilmic";break;case ax:t="AgX";break;case lx:t="Neutral";break;case ox:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Uo).join(`
`)}function $1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function K1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Z1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),f=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:u}}return t}function Uo(s){return s!==""}function Eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(s){return s.replace(J1,eE)}const Q1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eE(s,e){let t=Pt[e];if(t===void 0){const r=Q1.get(e);if(r!==void 0)t=Pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yd(t)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(s){return s.replace(tE,nE)}function nE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ag(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function iE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ko:case Bo:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fc:e="ENVMAP_BLENDING_MULTIPLY";break;case ex:e="ENVMAP_BLENDING_MIX";break;case tx:e="ENVMAP_BLENDING_ADD";break}return e}function aE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function lE(s,e,t,r){const o=s.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const d=iE(t),p=rE(t),m=sE(t),g=oE(t),_=aE(t),S=t.isWebGL2?"":Y1(t),M=$1(t),A=K1(l),x=o.createProgram();let y,D,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Uo).join(`
`),y.length>0&&(y+=`
`),D=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Uo).join(`
`),D.length>0&&(D+=`
`)):(y=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),D=[S,Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Pt.tonemapping_pars_fragment:"",t.toneMapping!==is?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,X1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),f=yd(f),f=Eg(f,t),f=wg(f,t),u=yd(u),u=Eg(u,t),u=wg(u,t),f=Tg(f),u=Tg(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const R=w+y+f,k=w+D+u,O=Sg(o,o.VERTEX_SHADER,R),F=Sg(o,o.FRAGMENT_SHADER,k);o.attachShader(x,O),o.attachShader(x,F),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function X(Se){if(s.debug.checkShaderErrors){const ge=o.getProgramInfoLog(x).trim(),W=o.getShaderInfoLog(O).trim(),he=o.getShaderInfoLog(F).trim();let V=!0,oe=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,x,O,F);else{const U=Mg(o,O,"vertex"),$=Mg(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+Se.name+`
Material Type: `+Se.type+`

Program Info Log: `+ge+`
`+U+`
`+$)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(W===""||he==="")&&(oe=!1);oe&&(Se.diagnostics={runnable:V,programLog:ge,vertexShader:{log:W,prefix:y},fragmentShader:{log:he,prefix:D}})}o.deleteShader(O),o.deleteShader(F),_e=new Mc(o,x),T=Z1(o,x)}let _e;this.getUniforms=function(){return _e===void 0&&X(this),_e};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(x,G1)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=F,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new fE(e),t.set(e,r)),r}}class fE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function dE(s,e,t,r,o,l,f){const u=new g0,d=new uE,p=new Set,m=[],g=o.isWebGL2,_=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,N,Se,ge,W){const he=ge.fog,V=W.geometry,oe=T.isMeshStandardMaterial?ge.environment:null,U=(T.isMeshStandardMaterial?t:e).get(T.envMap||oe),$=U&&U.mapping===Oc?U.image.height:null,j=A[T.type];T.precision!==null&&(M=o.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const I=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=I!==void 0?I.length:0;let Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Q,pe,me,De;if(j){const $e=Qi[j];Q=$e.vertexShader,pe=$e.fragmentShader}else Q=T.vertexShader,pe=T.fragmentShader,d.update(T),me=d.getVertexShaderID(T),De=d.getFragmentShaderID(T);const Ne=s.getRenderTarget(),Le=W.isInstancedMesh===!0,it=W.isBatchedMesh===!0,Je=!!T.map,B=!!T.matcap,Ue=!!U,xe=!!T.aoMap,Fe=!!T.lightMap,we=!!T.bumpMap,Xe=!!T.normalMap,Ve=!!T.displacementMap,Ge=!!T.emissiveMap,xt=!!T.metalnessMap,P=!!T.roughnessMap,C=T.anisotropy>0,ce=T.clearcoat>0,ve=T.iridescence>0,Pe=T.sheen>0,Te=T.transmission>0,mt=C&&!!T.anisotropyMap,lt=ce&&!!T.clearcoatMap,Oe=ce&&!!T.clearcoatNormalMap,He=ce&&!!T.clearcoatRoughnessMap,ct=ve&&!!T.iridescenceMap,ze=ve&&!!T.iridescenceThicknessMap,dt=Pe&&!!T.sheenColorMap,Mt=Pe&&!!T.sheenRoughnessMap,rt=!!T.specularMap,Ye=!!T.specularColorMap,Ze=!!T.specularIntensityMap,st=Te&&!!T.transmissionMap,gt=Te&&!!T.thicknessMap,bt=!!T.gradientMap,q=!!T.alphaMap,re=T.alphaTest>0,K=!!T.alphaHash,le=!!T.extensions;let te=is;T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(te=s.toneMapping);const Me={isWebGL2:g,shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:pe,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:De,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:it,instancing:Le,instancingColor:Le&&W.instanceColor!==null,instancingMorph:Le&&W.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:os,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:B,envMap:Ue,envMapMode:Ue&&U.mapping,envMapCubeUVHeight:$,aoMap:xe,lightMap:Fe,bumpMap:we,normalMap:Xe,displacementMap:S&&Ve,emissiveMap:Ge,normalMapObjectSpace:Xe&&T.normalMapType===xx,normalMapTangentSpace:Xe&&T.normalMapType===zc,metalnessMap:xt,roughnessMap:P,anisotropy:C,anisotropyMap:mt,clearcoat:ce,clearcoatMap:lt,clearcoatNormalMap:Oe,clearcoatRoughnessMap:He,iridescence:ve,iridescenceMap:ct,iridescenceThicknessMap:ze,sheen:Pe,sheenColorMap:dt,sheenRoughnessMap:Mt,specularMap:rt,specularColorMap:Ye,specularIntensityMap:Ze,transmission:Te,transmissionMap:st,thicknessMap:gt,gradientMap:bt,opaque:T.transparent===!1&&T.blending===Oo&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:re,alphaHash:K,combine:T.combine,mapUv:Je&&x(T.map.channel),aoMapUv:xe&&x(T.aoMap.channel),lightMapUv:Fe&&x(T.lightMap.channel),bumpMapUv:we&&x(T.bumpMap.channel),normalMapUv:Xe&&x(T.normalMap.channel),displacementMapUv:Ve&&x(T.displacementMap.channel),emissiveMapUv:Ge&&x(T.emissiveMap.channel),metalnessMapUv:xt&&x(T.metalnessMap.channel),roughnessMapUv:P&&x(T.roughnessMap.channel),anisotropyMapUv:mt&&x(T.anisotropyMap.channel),clearcoatMapUv:lt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(T.sheenRoughnessMap.channel),specularMapUv:rt&&x(T.specularMap.channel),specularColorMapUv:Ye&&x(T.specularColorMap.channel),specularIntensityMapUv:Ze&&x(T.specularIntensityMap.channel),transmissionMapUv:st&&x(T.transmissionMap.channel),thicknessMapUv:gt&&x(T.thicknessMap.channel),alphaMapUv:q&&x(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Xe||C),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(Je||q),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ae,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Se.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===gi,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:le&&T.extensions.derivatives===!0,extensionFragDepth:le&&T.extensions.fragDepth===!0,extensionDrawBuffers:le&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=p.has(1),Me.vertexUv2s=p.has(2),Me.vertexUv3s=p.has(3),p.clear(),Me}function D(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Se in T.defines)N.push(Se),N.push(T.defines[Se]);return T.isRawShaderMaterial===!1&&(w(N,T),R(N,T),N.push(s.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function w(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function R(T,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.instancingMorph&&u.enable(4),N.matcap&&u.enable(5),N.envMap&&u.enable(6),N.normalMapObjectSpace&&u.enable(7),N.normalMapTangentSpace&&u.enable(8),N.clearcoat&&u.enable(9),N.iridescence&&u.enable(10),N.alphaTest&&u.enable(11),N.vertexColors&&u.enable(12),N.vertexAlphas&&u.enable(13),N.vertexUv1s&&u.enable(14),N.vertexUv2s&&u.enable(15),N.vertexUv3s&&u.enable(16),N.vertexTangents&&u.enable(17),N.anisotropy&&u.enable(18),N.alphaHash&&u.enable(19),N.batching&&u.enable(20),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.alphaToCoverage&&u.enable(20),T.push(u.mask)}function k(T){const N=A[T.type];let Se;if(N){const ge=Qi[N];Se=Xx.clone(ge.uniforms)}else Se=T.uniforms;return Se}function O(T,N){let Se;for(let ge=0,W=m.length;ge<W;ge++){const he=m[ge];if(he.cacheKey===N){Se=he,++Se.usedTimes;break}}return Se===void 0&&(Se=new lE(s,N,T,l),m.push(Se)),Se}function F(T){if(--T.usedTimes===0){const N=m.indexOf(T);m[N]=m[m.length-1],m.pop(),T.destroy()}}function X(T){d.remove(T)}function _e(){d.dispose()}return{getParameters:y,getProgramCacheKey:D,getUniforms:k,acquireProgram:O,releaseProgram:F,releaseShaderCache:X,programs:m,dispose:_e}}function hE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,u){s.get(l)[f]=u}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function pE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function f(g,_,S,M,A,x){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:A,group:x},s[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=S,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=A,y.group=x),e++,y}function u(g,_,S,M,A,x){const y=f(g,_,S,M,A,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,_,S,M,A,x){const y=f(g,_,S,M,A,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(g,_){t.length>1&&t.sort(g||pE),r.length>1&&r.sort(_||Cg),o.length>1&&o.sort(_||Cg)}function m(){for(let g=e,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:d,finish:m,sort:p}}function mE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let f;return l===void 0?(f=new Rg,s.set(r,[f])):o>=l.length?(f=new Rg,l.push(f)):f=l[o],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new At};break;case"SpotLight":t={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _E=0;function xE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yE(s,e){const t=new gE,r=vE(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)o.probe.push(new G);const l=new G,f=new Kt,u=new Kt;function d(m,g){let _=0,S=0,M=0;for(let Se=0;Se<9;Se++)o.probe[Se].set(0,0,0);let A=0,x=0,y=0,D=0,w=0,R=0,k=0,O=0,F=0,X=0,_e=0;m.sort(xE);const T=g===!0?Math.PI:1;for(let Se=0,ge=m.length;Se<ge;Se++){const W=m[Se],he=W.color,V=W.intensity,oe=W.distance,U=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)_+=he.r*V*T,S+=he.g*V*T,M+=he.b*V*T;else if(W.isLightProbe){for(let $=0;$<9;$++)o.probe[$].addScaledVector(W.sh.coefficients[$],V);_e++}else if(W.isDirectionalLight){const $=t.get(W);if($.color.copy(W.color).multiplyScalar(W.intensity*T),W.castShadow){const j=W.shadow,I=r.get(W);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,o.directionalShadow[A]=I,o.directionalShadowMap[A]=U,o.directionalShadowMatrix[A]=W.shadow.matrix,R++}o.directional[A]=$,A++}else if(W.isSpotLight){const $=t.get(W);$.position.setFromMatrixPosition(W.matrixWorld),$.color.copy(he).multiplyScalar(V*T),$.distance=oe,$.coneCos=Math.cos(W.angle),$.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),$.decay=W.decay,o.spot[y]=$;const j=W.shadow;if(W.map&&(o.spotLightMap[F]=W.map,F++,j.updateMatrices(W),W.castShadow&&X++),o.spotLightMatrix[y]=j.matrix,W.castShadow){const I=r.get(W);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,o.spotShadow[y]=I,o.spotShadowMap[y]=U,O++}y++}else if(W.isRectAreaLight){const $=t.get(W);$.color.copy(he).multiplyScalar(V),$.halfWidth.set(W.width*.5,0,0),$.halfHeight.set(0,W.height*.5,0),o.rectArea[D]=$,D++}else if(W.isPointLight){const $=t.get(W);if($.color.copy(W.color).multiplyScalar(W.intensity*T),$.distance=W.distance,$.decay=W.decay,W.castShadow){const j=W.shadow,I=r.get(W);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,o.pointShadow[x]=I,o.pointShadowMap[x]=U,o.pointShadowMatrix[x]=W.shadow.matrix,k++}o.point[x]=$,x++}else if(W.isHemisphereLight){const $=t.get(W);$.skyColor.copy(W.color).multiplyScalar(V*T),$.groundColor.copy(W.groundColor).multiplyScalar(V*T),o.hemi[w]=$,w++}}D>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=je.LTC_FLOAT_1,o.rectAreaLTC2=je.LTC_FLOAT_2):(o.rectAreaLTC1=je.LTC_HALF_1,o.rectAreaLTC2=je.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=je.LTC_FLOAT_1,o.rectAreaLTC2=je.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=je.LTC_HALF_1,o.rectAreaLTC2=je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=M;const N=o.hash;(N.directionalLength!==A||N.pointLength!==x||N.spotLength!==y||N.rectAreaLength!==D||N.hemiLength!==w||N.numDirectionalShadows!==R||N.numPointShadows!==k||N.numSpotShadows!==O||N.numSpotMaps!==F||N.numLightProbes!==_e)&&(o.directional.length=A,o.spot.length=y,o.rectArea.length=D,o.point.length=x,o.hemi.length=w,o.directionalShadow.length=R,o.directionalShadowMap.length=R,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=R,o.pointShadowMatrix.length=k,o.spotLightMatrix.length=O+F-X,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=X,o.numLightProbes=_e,N.directionalLength=A,N.pointLength=x,N.spotLength=y,N.rectAreaLength=D,N.hemiLength=w,N.numDirectionalShadows=R,N.numPointShadows=k,N.numSpotShadows=O,N.numSpotMaps=F,N.numLightProbes=_e,o.version=_E++)}function p(m,g){let _=0,S=0,M=0,A=0,x=0;const y=g.matrixWorldInverse;for(let D=0,w=m.length;D<w;D++){const R=m[D];if(R.isDirectionalLight){const k=o.directional[_];k.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),_++}else if(R.isSpotLight){const k=o.spot[M];k.position.setFromMatrixPosition(R.matrixWorld),k.position.applyMatrix4(y),k.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const k=o.rectArea[A];k.position.setFromMatrixPosition(R.matrixWorld),k.position.applyMatrix4(y),u.identity(),f.copy(R.matrixWorld),f.premultiply(y),u.extractRotation(f),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),k.halfWidth.applyMatrix4(u),k.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const k=o.point[S];k.position.setFromMatrixPosition(R.matrixWorld),k.position.applyMatrix4(y),S++}else if(R.isHemisphereLight){const k=o.hemi[x];k.direction.setFromMatrixPosition(R.matrixWorld),k.direction.transformDirection(y),x++}}}return{setup:d,setupView:p,state:o}}function bg(s,e){const t=new yE(s,e),r=[],o=[];function l(){r.length=0,o.length=0}function f(g){r.push(g)}function u(g){o.push(g)}function d(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:d,setupLightsView:p,pushLight:f,pushShadow:u}}function SE(s,e){let t=new WeakMap;function r(l,f=0){const u=t.get(l);let d;return u===void 0?(d=new bg(s,e),t.set(l,[d])):f>=u.length?(d=new bg(s,e),u.push(d)):d=u[f],d}function o(){t=new WeakMap}return{get:r,dispose:o}}class ME extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EE extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`;function AE(s,e,t){let r=new Pd;const o=new Be,l=new Be,f=new nn,u=new ME({depthPacking:_x}),d=new EE,p={},m=t.maxTextureSize,g={[ss]:jn,[jn]:ss,[gi]:gi},_=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:wE,fragmentShader:TE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new tn;M.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new kt(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t0;let y=this.type;this.render=function(O,F,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const _e=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),Se=s.state;Se.setBlending(ns),Se.buffers.color.setClear(1,1,1,1),Se.buffers.depth.setTest(!0),Se.setScissorTest(!1);const ge=y!==Er&&this.type===Er,W=y===Er&&this.type!==Er;for(let he=0,V=O.length;he<V;he++){const oe=O[he],U=oe.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;o.copy(U.mapSize);const $=U.getFrameExtents();if(o.multiply($),l.copy(U.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/$.x),o.x=l.x*$.x,U.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/$.y),o.y=l.y*$.y,U.mapSize.y=l.y)),U.map===null||ge===!0||W===!0){const I=this.type!==Er?{minFilter:Wn,magFilter:Wn}:{};U.map!==null&&U.map.dispose(),U.map=new zs(o.x,o.y,I),U.map.texture.name=oe.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const j=U.getViewportCount();for(let I=0;I<j;I++){const ee=U.getViewport(I);f.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Se.viewport(f),U.updateMatrices(oe,I),r=U.getFrustum(),R(F,X,U.camera,oe,this.type)}U.isPointLightShadow!==!0&&this.type===Er&&D(U,X),U.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(_e,T,N)};function D(O,F){const X=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new zs(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,X,_,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,X,S,A,null)}function w(O,F,X,_e){let T=null;const N=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)T=N;else if(T=X.isPointLight===!0?d:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Se=T.uuid,ge=F.uuid;let W=p[Se];W===void 0&&(W={},p[Se]=W);let he=W[ge];he===void 0&&(he=T.clone(),W[ge]=he,F.addEventListener("dispose",k)),T=he}if(T.visible=F.visible,T.wireframe=F.wireframe,_e===Er?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:g[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Se=s.properties.get(T);Se.light=X}return T}function R(O,F,X,_e,T){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Er)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ge=e.update(O),W=O.material;if(Array.isArray(W)){const he=ge.groups;for(let V=0,oe=he.length;V<oe;V++){const U=he[V],$=W[U.materialIndex];if($&&$.visible){const j=w(O,$,_e,T);O.onBeforeShadow(s,O,F,X,ge,j,U),s.renderBufferDirect(X,null,ge,j,O,U),O.onAfterShadow(s,O,F,X,ge,j,U)}}}else if(W.visible){const he=w(O,W,_e,T);O.onBeforeShadow(s,O,F,X,ge,he,null),s.renderBufferDirect(X,null,ge,he,O,null),O.onAfterShadow(s,O,F,X,ge,he,null)}}const Se=O.children;for(let ge=0,W=Se.length;ge<W;ge++)R(Se[ge],F,X,_e,T)}function k(O){O.target.removeEventListener("dispose",k);for(const X in p){const _e=p[X],T=O.target.uuid;T in _e&&(_e[T].dispose(),delete _e[T])}}}function CE(s,e,t){const r=t.isWebGL2;function o(){let q=!1;const re=new nn;let K=null;const le=new nn(0,0,0,0);return{setMask:function(te){K!==te&&!q&&(s.colorMask(te,te,te,te),K=te)},setLocked:function(te){q=te},setClear:function(te,Me,$e,ft,Rt){Rt===!0&&(te*=ft,Me*=ft,$e*=ft),re.set(te,Me,$e,ft),le.equals(re)===!1&&(s.clearColor(te,Me,$e,ft),le.copy(re))},reset:function(){q=!1,K=null,le.set(-1,0,0,0)}}}function l(){let q=!1,re=null,K=null,le=null;return{setTest:function(te){te?Le(s.DEPTH_TEST):it(s.DEPTH_TEST)},setMask:function(te){re!==te&&!q&&(s.depthMask(te),re=te)},setFunc:function(te){if(K!==te){switch(te){case q_:s.depthFunc(s.NEVER);break;case Y_:s.depthFunc(s.ALWAYS);break;case $_:s.depthFunc(s.LESS);break;case wc:s.depthFunc(s.LEQUAL);break;case K_:s.depthFunc(s.EQUAL);break;case Z_:s.depthFunc(s.GEQUAL);break;case J_:s.depthFunc(s.GREATER);break;case Q_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=te}},setLocked:function(te){q=te},setClear:function(te){le!==te&&(s.clearDepth(te),le=te)},reset:function(){q=!1,re=null,K=null,le=null}}}function f(){let q=!1,re=null,K=null,le=null,te=null,Me=null,$e=null,ft=null,Rt=null;return{setTest:function(yt){q||(yt?Le(s.STENCIL_TEST):it(s.STENCIL_TEST))},setMask:function(yt){re!==yt&&!q&&(s.stencilMask(yt),re=yt)},setFunc:function(yt,Ut,Ct){(K!==yt||le!==Ut||te!==Ct)&&(s.stencilFunc(yt,Ut,Ct),K=yt,le=Ut,te=Ct)},setOp:function(yt,Ut,Ct){(Me!==yt||$e!==Ut||ft!==Ct)&&(s.stencilOp(yt,Ut,Ct),Me=yt,$e=Ut,ft=Ct)},setLocked:function(yt){q=yt},setClear:function(yt){Rt!==yt&&(s.clearStencil(yt),Rt=yt)},reset:function(){q=!1,re=null,K=null,le=null,te=null,Me=null,$e=null,ft=null,Rt=null}}}const u=new o,d=new l,p=new f,m=new WeakMap,g=new WeakMap;let _={},S={},M=new WeakMap,A=[],x=null,y=!1,D=null,w=null,R=null,k=null,O=null,F=null,X=null,_e=new At(0,0,0),T=0,N=!1,Se=null,ge=null,W=null,he=null,V=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,$=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=$>=2);let I=null,ee={};const Ae=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),pe=new nn().fromArray(Ae),me=new nn().fromArray(Q);function De(q,re,K,le){const te=new Uint8Array(4),Me=s.createTexture();s.bindTexture(q,Me),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<K;$e++)r&&(q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(re+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Me}const Ne={};Ne[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ne[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Le(s.DEPTH_TEST),d.setFunc(wc),Ve(!1),Ge(cm),Le(s.CULL_FACE),we(ns);function Le(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function it(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function Je(q,re){return S[q]!==re?(s.bindFramebuffer(q,re),S[q]=re,r&&(q===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=re),q===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function B(q,re){let K=A,le=!1;if(q){K=M.get(re),K===void 0&&(K=[],M.set(re,K));const te=q.textures;if(K.length!==te.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,$e=te.length;Me<$e;Me++)K[Me]=s.COLOR_ATTACHMENT0+Me;K.length=te.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);if(le)if(t.isWebGL2)s.drawBuffers(K);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ue(q){return x!==q?(s.useProgram(q),x=q,!0):!1}const xe={[Ps]:s.FUNC_ADD,[D_]:s.FUNC_SUBTRACT,[N_]:s.FUNC_REVERSE_SUBTRACT};if(r)xe[hm]=s.MIN,xe[pm]=s.MAX;else{const q=e.get("EXT_blend_minmax");q!==null&&(xe[hm]=q.MIN_EXT,xe[pm]=q.MAX_EXT)}const Fe={[I_]:s.ZERO,[U_]:s.ONE,[F_]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[G_]:s.SRC_ALPHA_SATURATE,[B_]:s.DST_COLOR,[z_]:s.DST_ALPHA,[O_]:s.ONE_MINUS_SRC_COLOR,[dd]:s.ONE_MINUS_SRC_ALPHA,[H_]:s.ONE_MINUS_DST_COLOR,[k_]:s.ONE_MINUS_DST_ALPHA,[V_]:s.CONSTANT_COLOR,[W_]:s.ONE_MINUS_CONSTANT_COLOR,[j_]:s.CONSTANT_ALPHA,[X_]:s.ONE_MINUS_CONSTANT_ALPHA};function we(q,re,K,le,te,Me,$e,ft,Rt,yt){if(q===ns){y===!0&&(it(s.BLEND),y=!1);return}if(y===!1&&(Le(s.BLEND),y=!0),q!==L_){if(q!==D||yt!==N){if((w!==Ps||O!==Ps)&&(s.blendEquation(s.FUNC_ADD),w=Ps,O=Ps),yt)switch(q){case Oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFunc(s.ONE,s.ONE);break;case fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}R=null,k=null,F=null,X=null,_e.set(0,0,0),T=0,D=q,N=yt}return}te=te||re,Me=Me||K,$e=$e||le,(re!==w||te!==O)&&(s.blendEquationSeparate(xe[re],xe[te]),w=re,O=te),(K!==R||le!==k||Me!==F||$e!==X)&&(s.blendFuncSeparate(Fe[K],Fe[le],Fe[Me],Fe[$e]),R=K,k=le,F=Me,X=$e),(ft.equals(_e)===!1||Rt!==T)&&(s.blendColor(ft.r,ft.g,ft.b,Rt),_e.copy(ft),T=Rt),D=q,N=!1}function Xe(q,re){q.side===gi?it(s.CULL_FACE):Le(s.CULL_FACE);let K=q.side===jn;re&&(K=!K),Ve(K),q.blending===Oo&&q.transparent===!1?we(ns):we(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const le=q.stencilWrite;p.setTest(le),le&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),P(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):it(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(q){Se!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),Se=q)}function Ge(q){q!==R_?(Le(s.CULL_FACE),q!==ge&&(q===cm?s.cullFace(s.BACK):q===b_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):it(s.CULL_FACE),ge=q}function xt(q){q!==W&&(U&&s.lineWidth(q),W=q)}function P(q,re,K){q?(Le(s.POLYGON_OFFSET_FILL),(he!==re||V!==K)&&(s.polygonOffset(re,K),he=re,V=K)):it(s.POLYGON_OFFSET_FILL)}function C(q){q?Le(s.SCISSOR_TEST):it(s.SCISSOR_TEST)}function ce(q){q===void 0&&(q=s.TEXTURE0+oe-1),I!==q&&(s.activeTexture(q),I=q)}function ve(q,re,K){K===void 0&&(I===null?K=s.TEXTURE0+oe-1:K=I);let le=ee[K];le===void 0&&(le={type:void 0,texture:void 0},ee[K]=le),(le.type!==q||le.texture!==re)&&(I!==K&&(s.activeTexture(K),I=K),s.bindTexture(q,re||Ne[q]),le.type=q,le.texture=re)}function Pe(){const q=ee[I];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function He(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ye(q){pe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),pe.copy(q))}function Ze(q){me.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function st(q,re){let K=g.get(re);K===void 0&&(K=new WeakMap,g.set(re,K));let le=K.get(q);le===void 0&&(le=s.getUniformBlockIndex(re,q.name),K.set(q,le))}function gt(q,re){const le=g.get(re).get(q);m.get(re)!==le&&(s.uniformBlockBinding(re,le,q.__bindingPointIndex),m.set(re,le))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},I=null,ee={},S={},M=new WeakMap,A=[],x=null,y=!1,D=null,w=null,R=null,k=null,O=null,F=null,X=null,_e=new At(0,0,0),T=0,N=!1,Se=null,ge=null,W=null,he=null,V=null,pe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Le,disable:it,bindFramebuffer:Je,drawBuffers:B,useProgram:Ue,setBlending:we,setMaterial:Xe,setFlipSided:Ve,setCullFace:Ge,setLineWidth:xt,setPolygonOffset:P,setScissorTest:C,activeTexture:ce,bindTexture:ve,unbindTexture:Pe,compressedTexImage2D:Te,compressedTexImage3D:mt,texImage2D:Mt,texImage3D:rt,updateUBOMapping:st,uniformBlockBinding:gt,texStorage2D:ze,texStorage3D:dt,texSubImage2D:lt,texSubImage3D:Oe,compressedTexSubImage2D:He,compressedTexSubImage3D:ct,scissor:Ye,viewport:Ze,reset:bt}}function RE(s,e,t,r,o,l,f){const u=o.isWebGL2,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Be,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,C){return M?new OffscreenCanvas(P,C):Pc("canvas")}function x(P,C,ce,ve){let Pe=1;const Te=xt(P);if((Te.width>ve||Te.height>ve)&&(Pe=ve/Math.max(Te.width,Te.height)),Pe<1||C===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const mt=C?xd:Math.floor,lt=mt(Pe*Te.width),Oe=mt(Pe*Te.height);_===void 0&&(_=A(lt,Oe));const He=ce?A(lt,Oe):_;return He.width=lt,He.height=Oe,He.getContext("2d").drawImage(P,0,0,lt,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+lt+"x"+Oe+")."),He}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),P;return P}function y(P){const C=xt(P);return Vm(C.width)&&Vm(C.height)}function D(P){return u?!1:P.wrapS!==Bi||P.wrapT!==Bi||P.minFilter!==Wn&&P.minFilter!==ii}function w(P,C){return P.generateMipmaps&&C&&P.minFilter!==Wn&&P.minFilter!==ii}function R(P){s.generateMipmap(P)}function k(P,C,ce,ve,Pe=!1){if(u===!1)return C;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Te=C;if(C===s.RED&&(ce===s.FLOAT&&(Te=s.R32F),ce===s.HALF_FLOAT&&(Te=s.R16F),ce===s.UNSIGNED_BYTE&&(Te=s.R8)),C===s.RED_INTEGER&&(ce===s.UNSIGNED_BYTE&&(Te=s.R8UI),ce===s.UNSIGNED_SHORT&&(Te=s.R16UI),ce===s.UNSIGNED_INT&&(Te=s.R32UI),ce===s.BYTE&&(Te=s.R8I),ce===s.SHORT&&(Te=s.R16I),ce===s.INT&&(Te=s.R32I)),C===s.RG&&(ce===s.FLOAT&&(Te=s.RG32F),ce===s.HALF_FLOAT&&(Te=s.RG16F),ce===s.UNSIGNED_BYTE&&(Te=s.RG8)),C===s.RG_INTEGER&&(ce===s.UNSIGNED_BYTE&&(Te=s.RG8UI),ce===s.UNSIGNED_SHORT&&(Te=s.RG16UI),ce===s.UNSIGNED_INT&&(Te=s.RG32UI),ce===s.BYTE&&(Te=s.RG8I),ce===s.SHORT&&(Te=s.RG16I),ce===s.INT&&(Te=s.RG32I)),C===s.RGBA){const mt=Pe?Tc:qt.getTransfer(ve);ce===s.FLOAT&&(Te=s.RGBA32F),ce===s.HALF_FLOAT&&(Te=s.RGBA16F),ce===s.UNSIGNED_BYTE&&(Te=mt===Qt?s.SRGB8_ALPHA8:s.RGBA8),ce===s.UNSIGNED_SHORT_4_4_4_4&&(Te=s.RGBA4),ce===s.UNSIGNED_SHORT_5_5_5_1&&(Te=s.RGB5_A1)}return(Te===s.R16F||Te===s.R32F||Te===s.RG16F||Te===s.RG32F||Te===s.RGBA16F||Te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function O(P,C,ce){return w(P,ce)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==ii?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function F(P){return P===Wn||P===mm||P===xa?s.NEAREST:s.LINEAR}function X(P){const C=P.target;C.removeEventListener("dispose",X),T(C),C.isVideoTexture&&g.delete(C)}function _e(P){const C=P.target;C.removeEventListener("dispose",_e),Se(C)}function T(P){const C=r.get(P);if(C.__webglInit===void 0)return;const ce=P.source,ve=S.get(ce);if(ve){const Pe=ve[C.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&N(P),Object.keys(ve).length===0&&S.delete(ce)}r.remove(P)}function N(P){const C=r.get(P);s.deleteTexture(C.__webglTexture);const ce=P.source,ve=S.get(ce);delete ve[C.__cacheKey],f.memory.textures--}function Se(P){const C=r.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(C.__webglFramebuffer[ve]))for(let Pe=0;Pe<C.__webglFramebuffer[ve].length;Pe++)s.deleteFramebuffer(C.__webglFramebuffer[ve][Pe]);else s.deleteFramebuffer(C.__webglFramebuffer[ve]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ve])}else{if(Array.isArray(C.__webglFramebuffer))for(let ve=0;ve<C.__webglFramebuffer.length;ve++)s.deleteFramebuffer(C.__webglFramebuffer[ve]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ve=0;ve<C.__webglColorRenderbuffer.length;ve++)C.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ve]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ce=P.textures;for(let ve=0,Pe=ce.length;ve<Pe;ve++){const Te=r.get(ce[ve]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),f.memory.textures--),r.remove(ce[ve])}r.remove(P)}let ge=0;function W(){ge=0}function he(){const P=ge;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),ge+=1,P}function V(P){const C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function oe(P,C){const ce=r.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.version>0&&ce.__version!==P.version){const ve=P.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(ce,P,C);return}}t.bindTexture(s.TEXTURE_2D,ce.__webglTexture,s.TEXTURE0+C)}function U(P,C){const ce=r.get(P);if(P.version>0&&ce.__version!==P.version){me(ce,P,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ce.__webglTexture,s.TEXTURE0+C)}function $(P,C){const ce=r.get(P);if(P.version>0&&ce.__version!==P.version){me(ce,P,C);return}t.bindTexture(s.TEXTURE_3D,ce.__webglTexture,s.TEXTURE0+C)}function j(P,C){const ce=r.get(P);if(P.version>0&&ce.__version!==P.version){De(ce,P,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture,s.TEXTURE0+C)}const I={[md]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},ee={[Wn]:s.NEAREST,[mm]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[Ef]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},Ae={[yx]:s.NEVER,[Ax]:s.ALWAYS,[Sx]:s.LESS,[u0]:s.LEQUAL,[Mx]:s.EQUAL,[Tx]:s.GEQUAL,[Ex]:s.GREATER,[wx]:s.NOTEQUAL};function Q(P,C,ce){if(C.type===wr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ii||C.magFilter===Ef||C.magFilter===xa||C.magFilter===Ns||C.minFilter===ii||C.minFilter===Ef||C.minFilter===xa||C.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ce?(s.texParameteri(P,s.TEXTURE_WRAP_S,I[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,I[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,I[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ee[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ee[C.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==Bi||C.wrapT!==Bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,F(C.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,F(C.minFilter)),C.minFilter!==Wn&&C.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ae[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Wn||C.minFilter!==xa&&C.minFilter!==Ns||C.type===wr&&e.has("OES_texture_float_linear")===!1||u===!1&&C.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const ve=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function pe(P,C){let ce=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",X));const ve=C.source;let Pe=S.get(ve);Pe===void 0&&(Pe={},S.set(ve,Pe));const Te=V(C);if(Te!==P.__cacheKey){Pe[Te]===void 0&&(Pe[Te]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ce=!0),Pe[Te].usedTimes++;const mt=Pe[P.__cacheKey];mt!==void 0&&(Pe[P.__cacheKey].usedTimes--,mt.usedTimes===0&&N(C)),P.__cacheKey=Te,P.__webglTexture=Pe[Te].texture}return ce}function me(P,C,ce){let ve=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=s.TEXTURE_3D);const Pe=pe(P,C),Te=C.source;t.bindTexture(ve,P.__webglTexture,s.TEXTURE0+ce);const mt=r.get(Te);if(Te.version!==mt.__version||Pe===!0){t.activeTexture(s.TEXTURE0+ce);const lt=qt.getPrimaries(qt.workingColorSpace),Oe=C.colorSpace===Qr?null:qt.getPrimaries(C.colorSpace),He=C.colorSpace===Qr||lt===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ct=D(C)&&y(C.image)===!1;let ze=x(C.image,ct,!1,o.maxTextureSize);ze=Ge(C,ze);const dt=y(ze)||u,Mt=l.convert(C.format,C.colorSpace);let rt=l.convert(C.type),Ye=k(C.internalFormat,Mt,rt,C.colorSpace,C.isVideoTexture);Q(ve,C,dt);let Ze;const st=C.mipmaps,gt=u&&C.isVideoTexture!==!0&&Ye!==c0,bt=mt.__version===void 0||Pe===!0,q=Te.dataReady,re=O(C,ze,dt);if(C.isDepthTexture)Ye=s.DEPTH_COMPONENT,u?C.type===wr?Ye=s.DEPTH_COMPONENT32F:C.type===ts?Ye=s.DEPTH_COMPONENT24:C.type===Is?Ye=s.DEPTH24_STENCIL8:Ye=s.DEPTH_COMPONENT16:C.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Us&&Ye===s.DEPTH_COMPONENT&&C.type!==Cd&&C.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=ts,rt=l.convert(C.type)),C.format===Ho&&Ye===s.DEPTH_COMPONENT&&(Ye=s.DEPTH_STENCIL,C.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Is,rt=l.convert(C.type))),bt&&(gt?t.texStorage2D(s.TEXTURE_2D,1,Ye,ze.width,ze.height):t.texImage2D(s.TEXTURE_2D,0,Ye,ze.width,ze.height,0,Mt,rt,null));else if(C.isDataTexture)if(st.length>0&&dt){gt&&bt&&t.texStorage2D(s.TEXTURE_2D,re,Ye,st[0].width,st[0].height);for(let K=0,le=st.length;K<le;K++)Ze=st[K],gt?q&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ze.width,Ze.height,Mt,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,K,Ye,Ze.width,Ze.height,0,Mt,rt,Ze.data);C.generateMipmaps=!1}else gt?(bt&&t.texStorage2D(s.TEXTURE_2D,re,Ye,ze.width,ze.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze.width,ze.height,Mt,rt,ze.data)):t.texImage2D(s.TEXTURE_2D,0,Ye,ze.width,ze.height,0,Mt,rt,ze.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){gt&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ye,st[0].width,st[0].height,ze.depth);for(let K=0,le=st.length;K<le;K++)Ze=st[K],C.format!==Hi?Mt!==null?gt?q&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ze.width,Ze.height,ze.depth,Mt,Ze.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Ye,Ze.width,Ze.height,ze.depth,0,Ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ze.width,Ze.height,ze.depth,Mt,rt,Ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Ye,Ze.width,Ze.height,ze.depth,0,Mt,rt,Ze.data)}else{gt&&bt&&t.texStorage2D(s.TEXTURE_2D,re,Ye,st[0].width,st[0].height);for(let K=0,le=st.length;K<le;K++)Ze=st[K],C.format!==Hi?Mt!==null?gt?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Ze.width,Ze.height,Mt,Ze.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Ye,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?q&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ze.width,Ze.height,Mt,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,K,Ye,Ze.width,Ze.height,0,Mt,rt,Ze.data)}else if(C.isDataArrayTexture)gt?(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ye,ze.width,ze.height,ze.depth),q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ze.width,ze.height,ze.depth,Mt,rt,ze.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,ze.width,ze.height,ze.depth,0,Mt,rt,ze.data);else if(C.isData3DTexture)gt?(bt&&t.texStorage3D(s.TEXTURE_3D,re,Ye,ze.width,ze.height,ze.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ze.width,ze.height,ze.depth,Mt,rt,ze.data)):t.texImage3D(s.TEXTURE_3D,0,Ye,ze.width,ze.height,ze.depth,0,Mt,rt,ze.data);else if(C.isFramebufferTexture){if(bt)if(gt)t.texStorage2D(s.TEXTURE_2D,re,Ye,ze.width,ze.height);else{let K=ze.width,le=ze.height;for(let te=0;te<re;te++)t.texImage2D(s.TEXTURE_2D,te,Ye,K,le,0,Mt,rt,null),K>>=1,le>>=1}}else if(st.length>0&&dt){if(gt&&bt){const K=xt(st[0]);t.texStorage2D(s.TEXTURE_2D,re,Ye,K.width,K.height)}for(let K=0,le=st.length;K<le;K++)Ze=st[K],gt?q&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Mt,rt,Ze):t.texImage2D(s.TEXTURE_2D,K,Ye,Mt,rt,Ze);C.generateMipmaps=!1}else if(gt){if(bt){const K=xt(ze);t.texStorage2D(s.TEXTURE_2D,re,Ye,K.width,K.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,rt,ze)}else t.texImage2D(s.TEXTURE_2D,0,Ye,Mt,rt,ze);w(C,dt)&&R(ve),mt.__version=Te.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function De(P,C,ce){if(C.image.length!==6)return;const ve=pe(P,C),Pe=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ce);const Te=r.get(Pe);if(Pe.version!==Te.__version||ve===!0){t.activeTexture(s.TEXTURE0+ce);const mt=qt.getPrimaries(qt.workingColorSpace),lt=C.colorSpace===Qr?null:qt.getPrimaries(C.colorSpace),Oe=C.colorSpace===Qr||mt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const He=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,ze=[];for(let K=0;K<6;K++)!He&&!ct?ze[K]=x(C.image[K],!1,!0,o.maxCubemapSize):ze[K]=ct?C.image[K].image:C.image[K],ze[K]=Ge(C,ze[K]);const dt=ze[0],Mt=y(dt)||u,rt=l.convert(C.format,C.colorSpace),Ye=l.convert(C.type),Ze=k(C.internalFormat,rt,Ye,C.colorSpace),st=u&&C.isVideoTexture!==!0,gt=Te.__version===void 0||ve===!0,bt=Pe.dataReady;let q=O(C,dt,Mt);Q(s.TEXTURE_CUBE_MAP,C,Mt);let re;if(He){st&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,q,Ze,dt.width,dt.height);for(let K=0;K<6;K++){re=ze[K].mipmaps;for(let le=0;le<re.length;le++){const te=re[le];C.format!==Hi?rt!==null?st?bt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,te.width,te.height,rt,te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ze,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?bt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,te.width,te.height,rt,Ye,te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ze,te.width,te.height,0,rt,Ye,te.data)}}}else{if(re=C.mipmaps,st&&gt){re.length>0&&q++;const K=xt(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,q,Ze,K.width,K.height)}for(let K=0;K<6;K++)if(ct){st?bt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ze[K].width,ze[K].height,rt,Ye,ze[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ze,ze[K].width,ze[K].height,0,rt,Ye,ze[K].data);for(let le=0;le<re.length;le++){const Me=re[le].image[K].image;st?bt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Me.width,Me.height,rt,Ye,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ze,Me.width,Me.height,0,rt,Ye,Me.data)}}else{st?bt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,rt,Ye,ze[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ze,rt,Ye,ze[K]);for(let le=0;le<re.length;le++){const te=re[le];st?bt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,rt,Ye,te.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ze,rt,Ye,te.image[K])}}}w(C,Mt)&&R(s.TEXTURE_CUBE_MAP),Te.__version=Pe.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function Ne(P,C,ce,ve,Pe,Te){const mt=l.convert(ce.format,ce.colorSpace),lt=l.convert(ce.type),Oe=k(ce.internalFormat,mt,lt,ce.colorSpace);if(!r.get(C).__hasExternalTextures){const ct=Math.max(1,C.width>>Te),ze=Math.max(1,C.height>>Te);Pe===s.TEXTURE_3D||Pe===s.TEXTURE_2D_ARRAY?t.texImage3D(Pe,Te,Oe,ct,ze,C.depth,0,mt,lt,null):t.texImage2D(Pe,Te,Oe,ct,ze,0,mt,lt,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Xe(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Pe,r.get(ce).__webglTexture,0,we(C)):(Pe===s.TEXTURE_2D||Pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Pe,r.get(ce).__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(P,C,ce){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer&&!C.stencilBuffer){let ve=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ce||Xe(C)){const Pe=C.depthTexture;Pe&&Pe.isDepthTexture&&(Pe.type===wr?ve=s.DEPTH_COMPONENT32F:Pe.type===ts&&(ve=s.DEPTH_COMPONENT24));const Te=we(C);Xe(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ve,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ve,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(C.depthBuffer&&C.stencilBuffer){const ve=we(C);ce&&Xe(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,C.width,C.height):Xe(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ve=C.textures;for(let Pe=0;Pe<ve.length;Pe++){const Te=ve[Pe],mt=l.convert(Te.format,Te.colorSpace),lt=l.convert(Te.type),Oe=k(Te.internalFormat,mt,lt,Te.colorSpace),He=we(C);ce&&Xe(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Oe,C.width,C.height):Xe(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,Oe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),oe(C.depthTexture,0);const ve=r.get(C.depthTexture).__webglTexture,Pe=we(C);if(C.depthTexture.format===Us)Xe(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(C.depthTexture.format===Ho)Xe(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Je(P){const C=r.get(P),ce=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");it(C.__webglFramebuffer,P)}else if(ce){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]=s.createRenderbuffer(),Le(C.__webglDepthbuffer[ve],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Le(C.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function B(P,C,ce){const ve=r.get(P);C!==void 0&&Ne(ve.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ce!==void 0&&Je(P)}function Ue(P){const C=P.texture,ce=r.get(P),ve=r.get(C);P.addEventListener("dispose",_e);const Pe=P.textures,Te=P.isWebGLCubeRenderTarget===!0,mt=Pe.length>1,lt=y(P)||u;if(mt||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=C.version,f.memory.textures++),Te){ce.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(u&&C.mipmaps&&C.mipmaps.length>0){ce.__webglFramebuffer[Oe]=[];for(let He=0;He<C.mipmaps.length;He++)ce.__webglFramebuffer[Oe][He]=s.createFramebuffer()}else ce.__webglFramebuffer[Oe]=s.createFramebuffer()}else{if(u&&C.mipmaps&&C.mipmaps.length>0){ce.__webglFramebuffer=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)ce.__webglFramebuffer[Oe]=s.createFramebuffer()}else ce.__webglFramebuffer=s.createFramebuffer();if(mt)if(o.drawBuffers)for(let Oe=0,He=Pe.length;Oe<He;Oe++){const ct=r.get(Pe[Oe]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&P.samples>0&&Xe(P)===!1){ce.__webglMultisampledFramebuffer=s.createFramebuffer(),ce.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Pe.length;Oe++){const He=Pe[Oe];ce.__webglColorRenderbuffer[Oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ce.__webglColorRenderbuffer[Oe]);const ct=l.convert(He.format,He.colorSpace),ze=l.convert(He.type),dt=k(He.internalFormat,ct,ze,He.colorSpace,P.isXRRenderTarget===!0),Mt=we(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,dt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ce.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(ce.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C,lt);for(let Oe=0;Oe<6;Oe++)if(u&&C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)Ne(ce.__webglFramebuffer[Oe][He],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,He);else Ne(ce.__webglFramebuffer[Oe],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);w(C,lt)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(mt){for(let Oe=0,He=Pe.length;Oe<He;Oe++){const ct=Pe[Oe],ze=r.get(ct);t.bindTexture(s.TEXTURE_2D,ze.__webglTexture),Q(s.TEXTURE_2D,ct,lt),Ne(ce.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,0),w(ct,lt)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let Oe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(u?Oe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Oe,ve.__webglTexture),Q(Oe,C,lt),u&&C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)Ne(ce.__webglFramebuffer[He],P,C,s.COLOR_ATTACHMENT0,Oe,He);else Ne(ce.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,Oe,0);w(C,lt)&&R(Oe),t.unbindTexture()}P.depthBuffer&&Je(P)}function xe(P){const C=y(P)||u,ce=P.textures;for(let ve=0,Pe=ce.length;ve<Pe;ve++){const Te=ce[ve];if(w(Te,C)){const mt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=r.get(Te).__webglTexture;t.bindTexture(mt,lt),R(mt),t.unbindTexture()}}}function Fe(P){if(u&&P.samples>0&&Xe(P)===!1){const C=P.textures,ce=P.width,ve=P.height;let Pe=s.COLOR_BUFFER_BIT;const Te=[],mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=r.get(P),Oe=C.length>1;if(Oe)for(let He=0;He<C.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let He=0;He<C.length;He++){Te.push(s.COLOR_ATTACHMENT0+He),P.depthBuffer&&Te.push(mt);const ct=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(ct===!1&&(P.depthBuffer&&(Pe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(Pe|=s.STENCIL_BUFFER_BIT)),Oe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[He]),ct===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[mt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[mt])),Oe){const ze=r.get(C[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,ce,ve,0,0,ce,ve,Pe,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Oe)for(let He=0;He<C.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,lt.__webglColorRenderbuffer[He]);const ct=r.get(C[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function we(P){return Math.min(o.maxSamples,P.samples)}function Xe(P){const C=r.get(P);return u&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ve(P){const C=f.render.frame;g.get(P)!==C&&(g.set(P,C),P.update())}function Ge(P,C){const ce=P.colorSpace,ve=P.format,Pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===_d||ce!==os&&ce!==Qr&&(qt.getTransfer(ce)===Qt?u===!1?e.has("EXT_sRGB")===!0&&ve===Hi?(P.format=_d,P.minFilter=ii,P.generateMipmaps=!1):C=h0.sRGBToLinear(C):(ve!==Hi||Pe!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ce)),C}function xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=he,this.resetTextureUnits=W,this.setTexture2D=oe,this.setTexture2DArray=U,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=B,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Xe}function bE(s,e,t){const r=t.isWebGL2;function o(l,f=Qr){let u;const d=qt.getTransfer(f);if(l===rs)return s.UNSIGNED_BYTE;if(l===r0)return s.UNSIGNED_SHORT_4_4_4_4;if(l===s0)return s.UNSIGNED_SHORT_5_5_5_1;if(l===cx)return s.BYTE;if(l===ux)return s.SHORT;if(l===Cd)return s.UNSIGNED_SHORT;if(l===i0)return s.INT;if(l===ts)return s.UNSIGNED_INT;if(l===wr)return s.FLOAT;if(l===Da)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===fx)return s.ALPHA;if(l===Hi)return s.RGBA;if(l===dx)return s.LUMINANCE;if(l===hx)return s.LUMINANCE_ALPHA;if(l===Us)return s.DEPTH_COMPONENT;if(l===Ho)return s.DEPTH_STENCIL;if(l===_d)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===px)return s.RED;if(l===o0)return s.RED_INTEGER;if(l===mx)return s.RG;if(l===a0)return s.RG_INTEGER;if(l===l0)return s.RGBA_INTEGER;if(l===wf||l===Tf||l===Af||l===Cf)if(d===Qt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===wf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Tf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Af)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Cf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===wf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Tf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Af)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Cf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===gm||l===vm||l===_m||l===xm)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===gm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===vm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===_m)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===xm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===c0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===ym||l===Sm)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===ym)return d===Qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Sm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Mm||l===Em||l===wm||l===Tm||l===Am||l===Cm||l===Rm||l===bm||l===Pm||l===Lm||l===Dm||l===Nm||l===Im||l===Um)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Mm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Em)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===wm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Tm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Am)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Cm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Rm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===bm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Pm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Lm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Dm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Nm)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Im)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Um)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Rf||l===Fm||l===Om)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===Rf)return d===Qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Fm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Om)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===gx||l===zm||l===km||l===Bm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===Rf)return u.COMPRESSED_RED_RGTC1_EXT;if(l===zm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===km)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Bm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Is?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:o}}class PE extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,f=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,r),y=this._getHandJoint(p,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NE=`
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

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Xn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,o=new Cr({extensions:{fragDepth:!0},vertexShader:DE,fragmentShader:NE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new kt(new ka(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class UE extends Vo{constructor(e,t){super();const r=this;let o=null,l=1,f=null,u="local-floor",d=1,p=null,m=null,g=null,_=null,S=null,M=null;const A=new IE,x=t.getContextAttributes();let y=null,D=null;const w=[],R=[],k=new Be;let O=null;const F=new ri;F.layers.enable(1),F.viewport=new nn;const X=new ri;X.layers.enable(2),X.viewport=new nn;const _e=[F,X],T=new PE;T.layers.enable(1),T.layers.enable(2);let N=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=w[Q];return pe===void 0&&(pe=new td,w[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=w[Q];return pe===void 0&&(pe=new td,w[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=w[Q];return pe===void 0&&(pe=new td,w[Q]=pe),pe.getHandSpace()};function ge(Q){const pe=R.indexOf(Q.inputSource);if(pe===-1)return;const me=w[pe];me!==void 0&&(me.update(Q.inputSource,Q.frame,p||f),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){o.removeEventListener("select",ge),o.removeEventListener("selectstart",ge),o.removeEventListener("selectend",ge),o.removeEventListener("squeeze",ge),o.removeEventListener("squeezestart",ge),o.removeEventListener("squeezeend",ge),o.removeEventListener("end",W),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<w.length;Q++){const pe=R[Q];pe!==null&&(R[Q]=null,w[Q].disconnect(pe))}N=null,Se=null,A.reset(),e.setRenderTarget(y),S=null,_=null,g=null,o=null,D=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",ge),o.addEventListener("selectstart",ge),o.addEventListener("selectend",ge),o.addEventListener("squeeze",ge),o.addEventListener("squeezestart",ge),o.addEventListener("squeezeend",ge),o.addEventListener("end",W),o.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:o.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new zs(S.framebufferWidth,S.framebufferHeight,{format:Hi,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let pe=null,me=null,De=null;x.depth&&(De=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?Ho:Us,me=x.stencil?Is:ts);const Ne={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(Ne),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new zs(_.textureWidth,_.textureHeight,{format:Hi,type:rs,depthTexture:new T0(_.textureWidth,_.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(D);Le.__ignoreDepthValues=_.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await o.requestReferenceSpace(u),Ae.setContext(o),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function he(Q){for(let pe=0;pe<Q.removed.length;pe++){const me=Q.removed[pe],De=R.indexOf(me);De>=0&&(R[De]=null,w[De].disconnect(me))}for(let pe=0;pe<Q.added.length;pe++){const me=Q.added[pe];let De=R.indexOf(me);if(De===-1){for(let Le=0;Le<w.length;Le++)if(Le>=R.length){R.push(me),De=Le;break}else if(R[Le]===null){R[Le]=me,De=Le;break}if(De===-1)break}const Ne=w[De];Ne&&Ne.connect(me)}}const V=new G,oe=new G;function U(Q,pe,me){V.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const De=V.distanceTo(oe),Ne=pe.projectionMatrix.elements,Le=me.projectionMatrix.elements,it=Ne[14]/(Ne[10]-1),Je=Ne[14]/(Ne[10]+1),B=(Ne[9]+1)/Ne[5],Ue=(Ne[9]-1)/Ne[5],xe=(Ne[8]-1)/Ne[0],Fe=(Le[8]+1)/Le[0],we=it*xe,Xe=it*Fe,Ve=De/(-xe+Fe),Ge=Ve*-xe;pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ(Ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const xt=it+Ve,P=Je+Ve,C=we-Ge,ce=Xe+(De-Ge),ve=B*Je/P*xt,Pe=Ue*Je/P*xt;Q.projectionMatrix.makePerspective(C,ce,ve,Pe,xt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function $(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;A.texture!==null&&(Q.near=A.depthNear,Q.far=A.depthFar),T.near=X.near=F.near=Q.near,T.far=X.far=F.far=Q.far,(N!==T.near||Se!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,Se=T.far,F.near=N,F.far=Se,X.near=N,X.far=Se,F.updateProjectionMatrix(),X.updateProjectionMatrix(),Q.updateProjectionMatrix());const pe=Q.parent,me=T.cameras;$(T,pe);for(let De=0;De<me.length;De++)$(me[De],pe);me.length===2?U(T,F,X):T.projectionMatrix.copy(F.projectionMatrix),j(Q,T,pe)};function j(Q,pe,me){me===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=bc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null};let I=null;function ee(Q,pe){if(m=pe.getViewerPose(p||f),M=pe,m!==null){const me=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let De=!1;me.length!==T.cameras.length&&(T.cameras.length=0,De=!0);for(let Le=0;Le<me.length;Le++){const it=me[Le];let Je=null;if(S!==null)Je=S.getViewport(it);else{const Ue=g.getViewSubImage(_,it);Je=Ue.viewport,Le===0&&(e.setRenderTargetTextures(D,Ue.colorTexture,_.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(D))}let B=_e[Le];B===void 0&&(B=new ri,B.layers.enable(Le),B.viewport=new nn,_e[Le]=B),B.matrix.fromArray(it.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(it.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Je.x,Je.y,Je.width,Je.height),Le===0&&(T.matrix.copy(B.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),De===!0&&T.cameras.push(B)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Le=g.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,o.renderState)}}for(let me=0;me<w.length;me++){const De=R[me],Ne=w[me];De!==null&&Ne!==void 0&&Ne.update(De,pe,p||f)}A.render(e,T),I&&I(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Ae=new E0;Ae.setAnimationLoop(ee),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const As=new Ci,FE=new Kt;function OE(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,y0(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,D,w,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),A(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?d(x,y,D,w):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===jn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===jn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const D=e.get(y),w=D.envMap,R=D.envMapRotation;if(w&&(x.envMap.value=w,As.copy(R),As.x*=-1,As.y*=-1,As.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),x.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(As)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const k=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*k,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,D,w){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*D,x.scale.value=w*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,D){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const D=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function zE(s,e,t,r){let o={},l={},f=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(D,w){const R=w.program;r.uniformBlockBinding(D,R)}function p(D,w){let R=o[D.id];R===void 0&&(M(D),R=m(D),o[D.id]=R,D.addEventListener("dispose",x));const k=w.program;r.updateUBOMapping(D,k);const O=e.render.frame;l[D.id]!==O&&(_(D),l[D.id]=O)}function m(D){const w=g();D.__bindingPointIndex=w;const R=s.createBuffer(),k=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,k,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,R),R}function g(){for(let D=0;D<u;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const w=o[D.id],R=D.uniforms,k=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let O=0,F=R.length;O<F;O++){const X=Array.isArray(R[O])?R[O]:[R[O]];for(let _e=0,T=X.length;_e<T;_e++){const N=X[_e];if(S(N,O,_e,k)===!0){const Se=N.__offset,ge=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let he=0;he<ge.length;he++){const V=ge[he],oe=A(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,Se+W,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Se,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,w,R,k){const O=D.value,F=w+"_"+R;if(k[F]===void 0)return typeof O=="number"||typeof O=="boolean"?k[F]=O:k[F]=O.clone(),!0;{const X=k[F];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return k[F]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function M(D){const w=D.uniforms;let R=0;const k=16;for(let F=0,X=w.length;F<X;F++){const _e=Array.isArray(w[F])?w[F]:[w[F]];for(let T=0,N=_e.length;T<N;T++){const Se=_e[T],ge=Array.isArray(Se.value)?Se.value:[Se.value];for(let W=0,he=ge.length;W<he;W++){const V=ge[W],oe=A(V),U=R%k;U!==0&&k-U<oe.boundary&&(R+=k-U),Se.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Se.__offset=R,R+=oe.storage}}}const O=R%k;return O>0&&(R+=k-O),D.__size=R,D.__cache={},this}function A(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),w}function x(D){const w=D.target;w.removeEventListener("dispose",x);const R=f.indexOf(w.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function y(){for(const D in o)s.deleteBuffer(o[D]);f=[],o={},l={}}return{bind:d,update:p,dispose:y}}class L0{constructor(e={}){const{canvas:t=Rx(),context:r=null,depth:o=!0,stencil:l=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=f;const S=new Uint32Array(4),M=new Int32Array(4);let A=null,x=null;const y=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ji,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;const w=this;let R=!1,k=0,O=0,F=null,X=-1,_e=null;const T=new nn,N=new nn;let Se=null;const ge=new At(0);let W=0,he=t.width,V=t.height,oe=1,U=null,$=null;const j=new nn(0,0,he,V),I=new nn(0,0,he,V);let ee=!1;const Ae=new Pd;let Q=!1,pe=!1,me=null;const De=new Kt,Ne=new Be,Le=new G,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return F===null?oe:1}let B=r;function Ue(b,ne){for(let ue=0;ue<b.length;ue++){const de=b[ue],ae=t.getContext(de,ne);if(ae!==null)return ae}return null}try{const b={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ad}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",re,!1),B===null){const ne=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&ne.shift(),B=Ue(ne,b),B===null)throw Ue(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,Fe,we,Xe,Ve,Ge,xt,P,C,ce,ve,Pe,Te,mt,lt,Oe,He,ct,ze,dt,Mt,rt,Ye,Ze;function st(){xe=new WM(B),Fe=new zM(B,xe,e),xe.init(Fe),rt=new bE(B,xe,Fe),we=new CE(B,xe,Fe),Xe=new qM(B),Ve=new hE,Ge=new RE(B,xe,we,Ve,Fe,rt,Xe),xt=new BM(w),P=new VM(w),C=new Qx(B,Fe),Ye=new FM(B,xe,C,Fe),ce=new jM(B,C,Xe,Ye),ve=new ZM(B,ce,C,Xe),ze=new KM(B,Fe,Ge),Oe=new kM(Ve),Pe=new dE(w,xt,P,xe,Fe,Ye,Oe),Te=new OE(w,Ve),mt=new mE,lt=new SE(xe,Fe),ct=new UM(w,xt,P,we,ve,_,d),He=new AE(w,ve,Fe),Ze=new zE(B,Xe,Fe,we),dt=new OM(B,xe,Xe,Fe),Mt=new XM(B,xe,Xe,Fe),Xe.programs=Pe.programs,w.capabilities=Fe,w.extensions=xe,w.properties=Ve,w.renderLists=mt,w.shadowMap=He,w.state=we,w.info=Xe}st();const gt=new UE(w,B);this.xr=gt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(b){b!==void 0&&(oe=b,this.setSize(he,V,!1))},this.getSize=function(b){return b.set(he,V)},this.setSize=function(b,ne,ue=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,V=ne,t.width=Math.floor(b*oe),t.height=Math.floor(ne*oe),ue===!0&&(t.style.width=b+"px",t.style.height=ne+"px"),this.setViewport(0,0,b,ne)},this.getDrawingBufferSize=function(b){return b.set(he*oe,V*oe).floor()},this.setDrawingBufferSize=function(b,ne,ue){he=b,V=ne,oe=ue,t.width=Math.floor(b*ue),t.height=Math.floor(ne*ue),this.setViewport(0,0,b,ne)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,ne,ue,de){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,ne,ue,de),we.viewport(T.copy(j).multiplyScalar(oe).round())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,ne,ue,de){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,ne,ue,de),we.scissor(N.copy(I).multiplyScalar(oe).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){we.setScissorTest(ee=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(b=!0,ne=!0,ue=!0){let de=0;if(b){let ae=!1;if(F!==null){const We=F.texture.format;ae=We===l0||We===a0||We===o0}if(ae){const We=F.texture.type,ot=We===rs||We===ts||We===Cd||We===Is||We===r0||We===s0,ut=ct.getClearColor(),qe=ct.getClearAlpha(),Et=ut.r,vt=ut.g,_t=ut.b;ot?(S[0]=Et,S[1]=vt,S[2]=_t,S[3]=qe,B.clearBufferuiv(B.COLOR,0,S)):(M[0]=Et,M[1]=vt,M[2]=_t,M[3]=qe,B.clearBufferiv(B.COLOR,0,M))}else de|=B.COLOR_BUFFER_BIT}ne&&(de|=B.DEPTH_BUFFER_BIT),ue&&(de|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",re,!1),mt.dispose(),lt.dispose(),Ve.dispose(),xt.dispose(),P.dispose(),ve.dispose(),Ye.dispose(),Ze.dispose(),Pe.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Rt),gt.removeEventListener("sessionend",yt),me&&(me.dispose(),me=null),Ut.stop()};function bt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Xe.autoReset,ne=He.enabled,ue=He.autoUpdate,de=He.needsUpdate,ae=He.type;st(),Xe.autoReset=b,He.enabled=ne,He.autoUpdate=ue,He.needsUpdate=de,He.type=ae}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const ne=b.target;ne.removeEventListener("dispose",K),le(ne)}function le(b){te(b),Ve.remove(b)}function te(b){const ne=Ve.get(b).programs;ne!==void 0&&(ne.forEach(function(ue){Pe.releaseProgram(ue)}),b.isShaderMaterial&&Pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,ne,ue,de,ae,We){ne===null&&(ne=it);const ot=ae.isMesh&&ae.matrixWorld.determinant()<0,ut=Rr(b,ne,ue,de,ae);we.setMaterial(de,ot);let qe=ue.index,Et=1;if(de.wireframe===!0){if(qe=ce.getWireframeAttribute(ue),qe===void 0)return;Et=2}const vt=ue.drawRange,_t=ue.attributes.position;let Ht=vt.start*Et,hn=(vt.start+vt.count)*Et;We!==null&&(Ht=Math.max(Ht,We.start*Et),hn=Math.min(hn,(We.start+We.count)*Et)),qe!==null?(Ht=Math.max(Ht,0),hn=Math.min(hn,qe.count)):_t!=null&&(Ht=Math.max(Ht,0),hn=Math.min(hn,_t.count));const Gt=hn-Ht;if(Gt<0||Gt===1/0)return;Ye.setup(ae,de,ut,ue,qe);let mn,Dt=dt;if(qe!==null&&(mn=C.get(qe),Dt=Mt,Dt.setIndex(mn)),ae.isMesh)de.wireframe===!0?(we.setLineWidth(de.wireframeLinewidth*Je()),Dt.setMode(B.LINES)):Dt.setMode(B.TRIANGLES);else if(ae.isLine){let St=de.linewidth;St===void 0&&(St=1),we.setLineWidth(St*Je()),ae.isLineSegments?Dt.setMode(B.LINES):ae.isLineLoop?Dt.setMode(B.LINE_LOOP):Dt.setMode(B.LINE_STRIP)}else ae.isPoints?Dt.setMode(B.POINTS):ae.isSprite&&Dt.setMode(B.TRIANGLES);if(ae.isBatchedMesh)Dt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)Dt.renderInstances(Ht,Gt,ae.count);else if(ue.isInstancedBufferGeometry){const St=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,gn=Math.min(ue.instanceCount,St);Dt.renderInstances(Ht,Gt,gn)}else Dt.render(Ht,Gt)};function Me(b,ne,ue){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=jn,b.needsUpdate=!0,_i(b,ne,ue),b.side=ss,b.needsUpdate=!0,_i(b,ne,ue),b.side=gi):_i(b,ne,ue)}this.compile=function(b,ne,ue=null){ue===null&&(ue=b),x=lt.get(ue),x.init(),D.push(x),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(x.pushLight(ae),ae.castShadow&&x.pushShadow(ae))}),b!==ue&&b.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(x.pushLight(ae),ae.castShadow&&x.pushShadow(ae))}),x.setupLights(w._useLegacyLights);const de=new Set;return b.traverse(function(ae){const We=ae.material;if(We)if(Array.isArray(We))for(let ot=0;ot<We.length;ot++){const ut=We[ot];Me(ut,ue,ae),de.add(ut)}else Me(We,ue,ae),de.add(We)}),D.pop(),x=null,de},this.compileAsync=function(b,ne,ue=null){const de=this.compile(b,ne,ue);return new Promise(ae=>{function We(){if(de.forEach(function(ot){Ve.get(ot).currentProgram.isReady()&&de.delete(ot)}),de.size===0){ae(b);return}setTimeout(We,10)}xe.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let $e=null;function ft(b){$e&&$e(b)}function Rt(){Ut.stop()}function yt(){Ut.start()}const Ut=new E0;Ut.setAnimationLoop(ft),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){$e=b,gt.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},gt.addEventListener("sessionstart",Rt),gt.addEventListener("sessionend",yt),this.render=function(b,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(ne),ne=gt.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,ne,F),x=lt.get(b,D.length),x.init(),D.push(x),De.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Ae.setFromProjectionMatrix(De),pe=this.localClippingEnabled,Q=Oe.init(this.clippingPlanes,pe),A=mt.get(b,y.length),A.init(),y.push(A),Ct(b,ne,0,w.sortObjects),A.finish(),w.sortObjects===!0&&A.sort(U,$),this.info.render.frame++,Q===!0&&Oe.beginShadows();const ue=x.state.shadowsArray;if(He.render(ue,b,ne),Q===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1)&&ct.render(A,b),x.setupLights(w._useLegacyLights),ne.isArrayCamera){const de=ne.cameras;for(let ae=0,We=de.length;ae<We;ae++){const ot=de[ae];Ri(A,b,ot,ot.viewport)}}else Ri(A,b,ne);F!==null&&(Ge.updateMultisampleRenderTarget(F),Ge.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(w,b,ne),Ye.resetDefaultState(),X=-1,_e=null,D.pop(),D.length>0?x=D[D.length-1]:x=null,y.pop(),y.length>0?A=y[y.length-1]:A=null};function Ct(b,ne,ue,de){if(b.visible===!1)return;if(b.layers.test(ne.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(ne);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ae.intersectsSprite(b)){de&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);const ot=ve.update(b),ut=b.material;ut.visible&&A.push(b,ot,ut,ue,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ae.intersectsObject(b))){const ot=ve.update(b),ut=b.material;if(de&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Le.copy(ot.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(ut)){const qe=ot.groups;for(let Et=0,vt=qe.length;Et<vt;Et++){const _t=qe[Et],Ht=ut[_t.materialIndex];Ht&&Ht.visible&&A.push(b,ot,Ht,ue,Le.z,_t)}}else ut.visible&&A.push(b,ot,ut,ue,Le.z,null)}}const We=b.children;for(let ot=0,ut=We.length;ot<ut;ot++)Ct(We[ot],ne,ue,de)}function Ri(b,ne,ue,de){const ae=b.opaque,We=b.transmissive,ot=b.transparent;x.setupLightsView(ue),Q===!0&&Oe.setGlobalState(w.clippingPlanes,ue),We.length>0&&ye(ae,We,ne,ue),de&&we.viewport(T.copy(de)),ae.length>0&&si(ae,ne,ue),We.length>0&&si(We,ne,ue),ot.length>0&&si(ot,ne,ue),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ye(b,ne,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const We=Fe.isWebGL2;me===null&&(me=new zs(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Da:rs,minFilter:Ns,samples:We?4:0})),w.getDrawingBufferSize(Ne),We?me.setSize(Ne.x,Ne.y):me.setSize(xd(Ne.x),xd(Ne.y));const ot=w.getRenderTarget();w.setRenderTarget(me),w.getClearColor(ge),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear();const ut=w.toneMapping;w.toneMapping=is,si(b,ue,de),Ge.updateMultisampleRenderTarget(me),Ge.updateRenderTargetMipmap(me);let qe=!1;for(let Et=0,vt=ne.length;Et<vt;Et++){const _t=ne[Et],Ht=_t.object,hn=_t.geometry,Gt=_t.material,mn=_t.group;if(Gt.side===gi&&Ht.layers.test(de.layers)){const Dt=Gt.side;Gt.side=jn,Gt.needsUpdate=!0,bi(Ht,ue,de,hn,Gt,mn),Gt.side=Dt,Gt.needsUpdate=!0,qe=!0}}qe===!0&&(Ge.updateMultisampleRenderTarget(me),Ge.updateRenderTargetMipmap(me)),w.setRenderTarget(ot),w.setClearColor(ge,W),w.toneMapping=ut}function si(b,ne,ue){const de=ne.isScene===!0?ne.overrideMaterial:null;for(let ae=0,We=b.length;ae<We;ae++){const ot=b[ae],ut=ot.object,qe=ot.geometry,Et=de===null?ot.material:de,vt=ot.group;ut.layers.test(ue.layers)&&bi(ut,ne,ue,qe,Et,vt)}}function bi(b,ne,ue,de,ae,We){b.onBeforeRender(w,ne,ue,de,ae,We),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ae.onBeforeRender(w,ne,ue,de,b,We),ae.transparent===!0&&ae.side===gi&&ae.forceSinglePass===!1?(ae.side=jn,ae.needsUpdate=!0,w.renderBufferDirect(ue,ne,de,ae,b,We),ae.side=ss,ae.needsUpdate=!0,w.renderBufferDirect(ue,ne,de,ae,b,We),ae.side=gi):w.renderBufferDirect(ue,ne,de,ae,b,We),b.onAfterRender(w,ne,ue,de,ae,We)}function _i(b,ne,ue){ne.isScene!==!0&&(ne=it);const de=Ve.get(b),ae=x.state.lights,We=x.state.shadowsArray,ot=ae.state.version,ut=Pe.getParameters(b,ae.state,We,ne,ue),qe=Pe.getProgramCacheKey(ut);let Et=de.programs;de.environment=b.isMeshStandardMaterial?ne.environment:null,de.fog=ne.fog,de.envMap=(b.isMeshStandardMaterial?P:xt).get(b.envMap||de.environment),de.envMapRotation=de.environment!==null&&b.envMap===null?ne.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",K),Et=new Map,de.programs=Et);let vt=Et.get(qe);if(vt!==void 0){if(de.currentProgram===vt&&de.lightsStateVersion===ot)return Vi(b,ut),vt}else ut.uniforms=Pe.getUniforms(b),b.onBuild(ue,ut,w),b.onBeforeCompile(ut,w),vt=Pe.acquireProgram(ut,qe),Et.set(qe,vt),de.uniforms=ut.uniforms;const _t=de.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(_t.clippingPlanes=Oe.uniform),Vi(b,ut),de.needsLights=rr(b),de.lightsStateVersion=ot,de.needsLights&&(_t.ambientLightColor.value=ae.state.ambient,_t.lightProbe.value=ae.state.probe,_t.directionalLights.value=ae.state.directional,_t.directionalLightShadows.value=ae.state.directionalShadow,_t.spotLights.value=ae.state.spot,_t.spotLightShadows.value=ae.state.spotShadow,_t.rectAreaLights.value=ae.state.rectArea,_t.ltc_1.value=ae.state.rectAreaLTC1,_t.ltc_2.value=ae.state.rectAreaLTC2,_t.pointLights.value=ae.state.point,_t.pointLightShadows.value=ae.state.pointShadow,_t.hemisphereLights.value=ae.state.hemi,_t.directionalShadowMap.value=ae.state.directionalShadowMap,_t.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,_t.spotShadowMap.value=ae.state.spotShadowMap,_t.spotLightMatrix.value=ae.state.spotLightMatrix,_t.spotLightMap.value=ae.state.spotLightMap,_t.pointShadowMap.value=ae.state.pointShadowMap,_t.pointShadowMatrix.value=ae.state.pointShadowMatrix),de.currentProgram=vt,de.uniformsList=null,vt}function ir(b){if(b.uniformsList===null){const ne=b.currentProgram.getUniforms();b.uniformsList=Mc.seqWithValue(ne.seq,b.uniforms)}return b.uniformsList}function Vi(b,ne){const ue=Ve.get(b);ue.outputColorSpace=ne.outputColorSpace,ue.batching=ne.batching,ue.instancing=ne.instancing,ue.instancingColor=ne.instancingColor,ue.instancingMorph=ne.instancingMorph,ue.skinning=ne.skinning,ue.morphTargets=ne.morphTargets,ue.morphNormals=ne.morphNormals,ue.morphColors=ne.morphColors,ue.morphTargetsCount=ne.morphTargetsCount,ue.numClippingPlanes=ne.numClippingPlanes,ue.numIntersection=ne.numClipIntersection,ue.vertexAlphas=ne.vertexAlphas,ue.vertexTangents=ne.vertexTangents,ue.toneMapping=ne.toneMapping}function Rr(b,ne,ue,de,ae){ne.isScene!==!0&&(ne=it),Ge.resetTextureUnits();const We=ne.fog,ot=de.isMeshStandardMaterial?ne.environment:null,ut=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:os,qe=(de.isMeshStandardMaterial?P:xt).get(de.envMap||ot),Et=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,vt=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),_t=!!ue.morphAttributes.position,Ht=!!ue.morphAttributes.normal,hn=!!ue.morphAttributes.color;let Gt=is;de.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Gt=w.toneMapping);const mn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Dt=mn!==void 0?mn.length:0,St=Ve.get(de),gn=x.state.lights;if(Q===!0&&(pe===!0||b!==_e)){const Cn=b===_e&&de.id===X;Oe.setState(de,b,Cn)}let Ft=!1;de.version===St.__version?(St.needsLights&&St.lightsStateVersion!==gn.state.version||St.outputColorSpace!==ut||ae.isBatchedMesh&&St.batching===!1||!ae.isBatchedMesh&&St.batching===!0||ae.isInstancedMesh&&St.instancing===!1||!ae.isInstancedMesh&&St.instancing===!0||ae.isSkinnedMesh&&St.skinning===!1||!ae.isSkinnedMesh&&St.skinning===!0||ae.isInstancedMesh&&St.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&St.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&St.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&St.instancingMorph===!1&&ae.morphTexture!==null||St.envMap!==qe||de.fog===!0&&St.fog!==We||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Oe.numPlanes||St.numIntersection!==Oe.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==vt||St.morphTargets!==_t||St.morphNormals!==Ht||St.morphColors!==hn||St.toneMapping!==Gt||Fe.isWebGL2===!0&&St.morphTargetsCount!==Dt)&&(Ft=!0):(Ft=!0,St.__version=de.version);let qn=St.currentProgram;Ft===!0&&(qn=_i(de,ne,ae));let Yt=!1,wt=!1,It=!1;const Vt=qn.getUniforms(),ln=St.uniforms;if(we.useProgram(qn.program)&&(Yt=!0,wt=!0,It=!0),de.id!==X&&(X=de.id,wt=!0),Yt||_e!==b){Vt.setValue(B,"projectionMatrix",b.projectionMatrix),Vt.setValue(B,"viewMatrix",b.matrixWorldInverse);const Cn=Vt.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,Le.setFromMatrixPosition(b.matrixWorld)),Fe.logarithmicDepthBuffer&&Vt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Vt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),_e!==b&&(_e=b,wt=!0,It=!0)}if(ae.isSkinnedMesh){Vt.setOptional(B,ae,"bindMatrix"),Vt.setOptional(B,ae,"bindMatrixInverse");const Cn=ae.skeleton;Cn&&(Fe.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Vt.setValue(B,"boneTexture",Cn.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(Vt.setOptional(B,ae,"batchingTexture"),Vt.setValue(B,"batchingTexture",ae._matricesTexture,Ge));const br=ue.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0&&Fe.isWebGL2===!0)&&ze.update(ae,ue,qn),(wt||St.receiveShadow!==ae.receiveShadow)&&(St.receiveShadow=ae.receiveShadow,Vt.setValue(B,"receiveShadow",ae.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(ln.envMap.value=qe,ln.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),wt&&(Vt.setValue(B,"toneMappingExposure",w.toneMappingExposure),St.needsLights&&zn(ln,It),We&&de.fog===!0&&Te.refreshFogUniforms(ln,We),Te.refreshMaterialUniforms(ln,de,oe,V,me),Mc.upload(B,ir(St),ln,Ge)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Mc.upload(B,ir(St),ln,Ge),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Vt.setValue(B,"center",ae.center),Vt.setValue(B,"modelViewMatrix",ae.modelViewMatrix),Vt.setValue(B,"normalMatrix",ae.normalMatrix),Vt.setValue(B,"modelMatrix",ae.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Cn=de.uniformsGroups;for(let Wi=0,as=Cn.length;Wi<as;Wi++)if(Fe.isWebGL2){const sr=Cn[Wi];Ze.update(sr,qn),Ze.bind(sr,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function zn(b,ne){b.ambientLightColor.needsUpdate=ne,b.lightProbe.needsUpdate=ne,b.directionalLights.needsUpdate=ne,b.directionalLightShadows.needsUpdate=ne,b.pointLights.needsUpdate=ne,b.pointLightShadows.needsUpdate=ne,b.spotLights.needsUpdate=ne,b.spotLightShadows.needsUpdate=ne,b.rectAreaLights.needsUpdate=ne,b.hemisphereLights.needsUpdate=ne}function rr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,ne,ue){Ve.get(b.texture).__webglTexture=ne,Ve.get(b.depthTexture).__webglTexture=ue;const de=Ve.get(b);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,ne){const ue=Ve.get(b);ue.__webglFramebuffer=ne,ue.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(b,ne=0,ue=0){F=b,k=ne,O=ue;let de=!0,ae=null,We=!1,ot=!1;if(b){const qe=Ve.get(b);qe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(B.FRAMEBUFFER,null),de=!1):qe.__webglFramebuffer===void 0?Ge.setupRenderTarget(b):qe.__hasExternalTextures&&Ge.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);const Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);const vt=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(vt[ne])?ae=vt[ne][ue]:ae=vt[ne],We=!0):Fe.isWebGL2&&b.samples>0&&Ge.useMultisampledRTT(b)===!1?ae=Ve.get(b).__webglMultisampledFramebuffer:Array.isArray(vt)?ae=vt[ue]:ae=vt,T.copy(b.viewport),N.copy(b.scissor),Se=b.scissorTest}else T.copy(j).multiplyScalar(oe).floor(),N.copy(I).multiplyScalar(oe).floor(),Se=ee;if(we.bindFramebuffer(B.FRAMEBUFFER,ae)&&Fe.drawBuffers&&de&&we.drawBuffers(b,ae),we.viewport(T),we.scissor(N),we.setScissorTest(Se),We){const qe=Ve.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ne,qe.__webglTexture,ue)}else if(ot){const qe=Ve.get(b.texture),Et=ne||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,ue||0,Et)}X=-1},this.readRenderTargetPixels=function(b,ne,ue,de,ae,We,ot){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ot!==void 0&&(ut=ut[ot]),ut){we.bindFramebuffer(B.FRAMEBUFFER,ut);try{const qe=b.texture,Et=qe.format,vt=qe.type;if(Et!==Hi&&rt.convert(Et)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _t=vt===Da&&(xe.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(vt!==rs&&rt.convert(vt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(vt===wr&&(Fe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=b.width-de&&ue>=0&&ue<=b.height-ae&&B.readPixels(ne,ue,de,ae,rt.convert(Et),rt.convert(vt),We)}finally{const qe=F!==null?Ve.get(F).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(b,ne,ue=0){const de=Math.pow(2,-ue),ae=Math.floor(ne.image.width*de),We=Math.floor(ne.image.height*de);Ge.setTexture2D(ne,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,b.x,b.y,ae,We),we.unbindTexture()},this.copyTextureToTexture=function(b,ne,ue,de=0){const ae=ne.image.width,We=ne.image.height,ot=rt.convert(ue.format),ut=rt.convert(ue.type);Ge.setTexture2D(ue,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ue.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ue.unpackAlignment),ne.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,de,b.x,b.y,ae,We,ot,ut,ne.image.data):ne.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,de,b.x,b.y,ne.mipmaps[0].width,ne.mipmaps[0].height,ot,ne.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,de,b.x,b.y,ot,ut,ne.image),de===0&&ue.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(b,ne,ue,de,ae=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const We=Math.round(b.max.x-b.min.x),ot=Math.round(b.max.y-b.min.y),ut=b.max.z-b.min.z+1,qe=rt.convert(de.format),Et=rt.convert(de.type);let vt;if(de.isData3DTexture)Ge.setTexture3D(de,0),vt=B.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)Ge.setTexture2DArray(de,0),vt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,de.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,de.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),Ht=B.getParameter(B.UNPACK_IMAGE_HEIGHT),hn=B.getParameter(B.UNPACK_SKIP_PIXELS),Gt=B.getParameter(B.UNPACK_SKIP_ROWS),mn=B.getParameter(B.UNPACK_SKIP_IMAGES),Dt=ue.isCompressedTexture?ue.mipmaps[ae]:ue.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),ue.isDataTexture||ue.isData3DTexture?B.texSubImage3D(vt,ae,ne.x,ne.y,ne.z,We,ot,ut,qe,Et,Dt.data):de.isCompressedArrayTexture?B.compressedTexSubImage3D(vt,ae,ne.x,ne.y,ne.z,We,ot,ut,qe,Dt.data):B.texSubImage3D(vt,ae,ne.x,ne.y,ne.z,We,ot,ut,qe,Et,Dt),B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht),B.pixelStorei(B.UNPACK_SKIP_PIXELS,hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mn),ae===0&&de.generateMipmaps&&B.generateMipmap(vt),we.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ge.setTextureCube(b,0):b.isData3DTexture?Ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ge.setTexture2DArray(b,0):Ge.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){k=0,O=0,F=null,we.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rd?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===kc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kE extends L0{}kE.prototype.isWebGL1Renderer=!0;class Dd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=t,this.far=r}clone(){return new Dd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BE extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class HE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return d0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new G;class Lc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=er(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Xt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=er(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=er(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=er(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=er(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),r=Xt(r,this.array),o=Xt(o,this.array),l=Xt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sd extends tr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const wa=new G,Ao=new G,Co=new G,Ro=new Be,Ta=new Be,D0=new Kt,ac=new G,Aa=new G,lc=new G,Pg=new Be,nd=new Be,Lg=new Be;class Dg extends dn{constructor(e=new Sd){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new HE(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new Lc(r,3,0,!1)),To.setAttribute("uv",new Lc(r,2,3,!1))}this.geometry=To,this.material=e,this.center=new Be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),D0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Co.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const f=this.center;cc(ac.set(-.5,-.5,0),Co,f,Ao,o,l),cc(Aa.set(.5,-.5,0),Co,f,Ao,o,l),cc(lc.set(.5,.5,0),Co,f,Ao,o,l),Pg.set(0,0),nd.set(1,0),Lg.set(1,1);let u=e.ray.intersectTriangle(ac,Aa,lc,!1,wa);if(u===null&&(cc(Aa.set(-.5,.5,0),Co,f,Ao,o,l),nd.set(0,1),u=e.ray.intersectTriangle(ac,lc,Aa,!1,wa),u===null))return;const d=e.ray.origin.distanceTo(wa);d<e.near||d>e.far||t.push({distance:d,point:wa.clone(),uv:Gi.getInterpolation(wa,ac,Aa,lc,Pg,nd,Lg,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cc(s,e,t,r,o,l){Ro.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Ta.x=l*Ro.x-o*Ro.y,Ta.y=o*Ro.x+l*Ro.y):Ta.copy(Ro),s.copy(e),s.x+=Ta.x,s.y+=Ta.y,s.applyMatrix4(D0)}class No extends tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ng=new G,Ig=new G,Ug=new Kt,id=new bd,uc=new za;class bo extends dn{constructor(e=new tn,t=new No){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Ng.fromBufferAttribute(t,o-1),Ig.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Ng.distanceTo(Ig);e.setAttribute("lineDistance",new Wt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(o),uc.radius+=l,e.ray.intersectsSphere(uc)===!1)return;Ug.copy(o).invert(),id.copy(e.ray).applyMatrix4(Ug);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new G,m=new G,g=new G,_=new G,S=this.isLineSegments?2:1,M=r.index,x=r.attributes.position;if(M!==null){const y=Math.max(0,f.start),D=Math.min(M.count,f.start+f.count);for(let w=y,R=D-1;w<R;w+=S){const k=M.getX(w),O=M.getX(w+1);if(p.fromBufferAttribute(x,k),m.fromBufferAttribute(x,O),id.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(_);X<e.near||X>e.far||t.push({distance:X,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,f.start),D=Math.min(x.count,f.start+f.count);for(let w=y,R=D-1;w<R;w+=S){if(p.fromBufferAttribute(x,w),m.fromBufferAttribute(x,w+1),id.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(_);O<e.near||O>e.far||t.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}class GE extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fg=new Kt,Md=new bd,fc=new za,dc=new G;class VE extends dn{constructor(e=new tn,t=new GE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(o),fc.radius+=l,e.ray.intersectsSphere(fc)===!1)return;Fg.copy(o).invert(),Md.copy(e.ray).applyMatrix4(Fg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let M=_,A=S;M<A;M++){const x=p.getX(M);dc.fromBufferAttribute(g,x),Og(dc,x,d,o,e,t,this)}}else{const _=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let M=_,A=S;M<A;M++)dc.fromBufferAttribute(g,M),Og(dc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Og(s,e,t,r,o,l,f){const u=Md.distanceSqToPoint(s);if(u<t){const d=new G;Md.closestPointToPoint(s,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:f})}}class zg extends Xn{constructor(e,t,r,o,l,f,u,d,p){super(e,t,r,o,l,f,u,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let u=0,d=l-1,p;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),p=r[o]-f,p<0)u=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,r[o]===f)return o/(l-1);const m=r[o],_=r[o+1]-m,S=(f-m)/_;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const f=this.getPoint(o),u=this.getPoint(l),d=t||(f.isVector2?new Be:new G);return d.copy(u).sub(f).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new G,o=[],l=[],f=[],u=new G,d=new Kt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new G)}l[0]=new G,f[0]=new G;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);m<=p&&(p=m,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),u.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],u),f[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),u.crossVectors(o[S-1],o[S]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(On(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(d.makeRotationAxis(u,M))}f[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(On(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(u.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(o[M],S*M)),f[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nd extends nr{constructor(e=0,t=0,r=1,o=1,l=0,f=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=f,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new Be){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const f=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(f?l=0:l=o),this.aClockwise===!0&&!f&&(l===o?l=-o:l=l-o);const u=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(u),p=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=d-this.aX,S=p-this.aY;d=_*m-S*g+this.aX,p=_*g+S*m+this.aY}return r.set(d,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WE extends Nd{constructor(e,t,r,o,l,f){super(e,t,r,r,o,l,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Id(){let s=0,e=0,t=0,r=0;function o(l,f,u,d){s=l,e=u,t=-3*l+3*f-2*u-d,r=2*l-2*f+u+d}return{initCatmullRom:function(l,f,u,d,p){o(f,u,p*(u-l),p*(d-f))},initNonuniformCatmullRom:function(l,f,u,d,p,m,g){let _=(f-l)/p-(u-l)/(p+m)+(u-f)/m,S=(u-f)/m-(d-f)/(m+g)+(d-u)/g;_*=m,S*=m,o(f,u,_,S)},calc:function(l){const f=l*l,u=f*l;return s+e*l+t*f+r*u}}}const hc=new G,rd=new Id,sd=new Id,od=new Id;class Ec extends nr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new G){const r=t,o=this.points,l=o.length,f=(l-(this.closed?0:1))*e;let u=Math.floor(f),d=f-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:d===0&&u===l-1&&(u=l-2,d=1);let p,m;this.closed||u>0?p=o[(u-1)%l]:(hc.subVectors(o[0],o[1]).add(o[0]),p=hc);const g=o[u%l],_=o[(u+1)%l];if(this.closed||u+2<l?m=o[(u+2)%l]:(hc.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(_),S),x=Math.pow(_.distanceToSquared(m),S);A<1e-4&&(A=1),M<1e-4&&(M=A),x<1e-4&&(x=A),rd.initNonuniformCatmullRom(p.x,g.x,_.x,m.x,M,A,x),sd.initNonuniformCatmullRom(p.y,g.y,_.y,m.y,M,A,x),od.initNonuniformCatmullRom(p.z,g.z,_.z,m.z,M,A,x)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(p.x,g.x,_.x,m.x,this.tension),sd.initCatmullRom(p.y,g.y,_.y,m.y,this.tension),od.initCatmullRom(p.z,g.z,_.z,m.z,this.tension));return r.set(rd.calc(d),sd.calc(d),od.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new G().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kg(s,e,t,r,o){const l=(r-e)*.5,f=(o-t)*.5,u=s*s,d=s*u;return(2*t-2*r+l+f)*d+(-3*t+3*r-2*l-f)*u+l*s+t}function jE(s,e){const t=1-s;return t*t*e}function XE(s,e){return 2*(1-s)*s*e}function qE(s,e){return s*s*e}function ba(s,e,t,r){return jE(s,e)+XE(s,t)+qE(s,r)}function YE(s,e){const t=1-s;return t*t*t*e}function $E(s,e){const t=1-s;return 3*t*t*s*e}function KE(s,e){return 3*(1-s)*s*s*e}function ZE(s,e){return s*s*s*e}function Pa(s,e,t,r,o){return YE(s,e)+$E(s,t)+KE(s,r)+ZE(s,o)}class N0 extends nr{constructor(e=new Be,t=new Be,r=new Be,o=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,f=this.v2,u=this.v3;return r.set(Pa(e,o.x,l.x,f.x,u.x),Pa(e,o.y,l.y,f.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JE extends nr{constructor(e=new G,t=new G,r=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new G){const r=t,o=this.v0,l=this.v1,f=this.v2,u=this.v3;return r.set(Pa(e,o.x,l.x,f.x,u.x),Pa(e,o.y,l.y,f.y,u.y),Pa(e,o.z,l.z,f.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I0 extends nr{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QE extends nr{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends nr{constructor(e=new Be,t=new Be,r=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,f=this.v2;return r.set(ba(e,o.x,l.x,f.x),ba(e,o.y,l.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends nr{constructor(e=new G,t=new G,r=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new G){const r=t,o=this.v0,l=this.v1,f=this.v2;return r.set(ba(e,o.x,l.x,f.x),ba(e,o.y,l.y,f.y),ba(e,o.z,l.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends nr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const r=t,o=this.points,l=(o.length-1)*e,f=Math.floor(l),u=l-f,d=o[f===0?f:f-1],p=o[f],m=o[f>o.length-2?o.length-1:f+1],g=o[f>o.length-3?o.length-1:f+2];return r.set(kg(u,d.x,p.x,m.x,g.x),kg(u,d.y,p.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Be().fromArray(o))}return this}}var Dc=Object.freeze({__proto__:null,ArcCurve:WE,CatmullRomCurve3:Ec,CubicBezierCurve:N0,CubicBezierCurve3:JE,EllipseCurve:Nd,LineCurve:I0,LineCurve3:QE,QuadraticBezierCurve:U0,QuadraticBezierCurve3:F0,SplineCurve:O0});class ew extends nr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const f=o[l]-r,u=this.curves[l],d=u.getLength(),p=d===0?0:1-f/d;return u.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const f=l[o],u=f.isEllipseCurve?e*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?e*f.points.length:e,d=f.getPoints(u);for(let p=0;p<d.length;p++){const m=d[p];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Dc[o.type]().fromJSON(o))}return this}}class Bg extends ew{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new I0(this.currentPoint.clone(),new Be(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new U0(this.currentPoint.clone(),new Be(e,t),new Be(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,f){const u=new N0(this.currentPoint.clone(),new Be(e,t),new Be(r,o),new Be(l,f));return this.curves.push(u),this.currentPoint.set(l,f),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new O0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,f){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,r,o,l,f),this}absarc(e,t,r,o,l,f){return this.absellipse(e,t,r,r,o,l,f),this}ellipse(e,t,r,o,l,f,u,d){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,r,o,l,f,u,d),this}absellipse(e,t,r,o,l,f,u,d){const p=new Nd(e,t,r,o,l,f,u,d);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nc extends tn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],f=[],u=[],d=[],p=new G,m=new Be;f.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let g=0,_=3;g<=t;g++,_+=3){const S=r+g/t*o;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),u.push(0,0,1),m.x=(f[_]/e+1)/2,m.y=(f[_+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class es extends tn{constructor(e=1,t=1,r=1,o=32,l=1,f=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:f,thetaStart:u,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const m=[],g=[],_=[],S=[];let M=0;const A=[],x=r/2;let y=0;D(),f===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(S,2));function D(){const R=new G,k=new G;let O=0;const F=(t-e)/r;for(let X=0;X<=l;X++){const _e=[],T=X/l,N=T*(t-e)+e;for(let Se=0;Se<=o;Se++){const ge=Se/o,W=ge*d+u,he=Math.sin(W),V=Math.cos(W);k.x=N*he,k.y=-T*r+x,k.z=N*V,g.push(k.x,k.y,k.z),R.set(he,F,V).normalize(),_.push(R.x,R.y,R.z),S.push(ge,1-T),_e.push(M++)}A.push(_e)}for(let X=0;X<o;X++)for(let _e=0;_e<l;_e++){const T=A[_e][X],N=A[_e+1][X],Se=A[_e+1][X+1],ge=A[_e][X+1];m.push(T,N,ge),m.push(N,Se,ge),O+=6}p.addGroup(y,O,0),y+=O}function w(R){const k=M,O=new Be,F=new G;let X=0;const _e=R===!0?e:t,T=R===!0?1:-1;for(let Se=1;Se<=o;Se++)g.push(0,x*T,0),_.push(0,T,0),S.push(.5,.5),M++;const N=M;for(let Se=0;Se<=o;Se++){const W=Se/o*d+u,he=Math.cos(W),V=Math.sin(W);F.x=_e*V,F.y=x*T,F.z=_e*he,g.push(F.x,F.y,F.z),_.push(0,T,0),O.x=he*.5+.5,O.y=V*.5*T+.5,S.push(O.x,O.y),M++}for(let Se=0;Se<o;Se++){const ge=k+Se,W=N+Se;R===!0?m.push(W,W+1,ge):m.push(W+1,W,ge),X+=3}p.addGroup(y,X,R===!0?1:2),y+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends es{constructor(e=1,t=1,r=32,o=1,l=!1,f=0,u=Math.PI*2){super(0,e,t,r,o,l,f,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:f,thetaLength:u}}static fromJSON(e){return new Ud(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class z0 extends Bg{constructor(e){super(e),this.uuid=Ar(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Bg().fromJSON(o))}return this}}const tw={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=k0(s,0,o,t,!0);const f=[];if(!l||l.next===l.prev)return f;let u,d,p,m,g,_,S;if(r&&(l=ow(s,e,l,t)),s.length>80*t){u=p=s[0],d=m=s[1];for(let M=t;M<o;M+=t)g=s[M],_=s[M+1],g<u&&(u=g),_<d&&(d=_),g>p&&(p=g),_>m&&(m=_);S=Math.max(p-u,m-d),S=S!==0?32767/S:0}return Na(l,f,t,u,d,S,0),f}};function k0(s,e,t,r,o){let l,f;if(o===vw(s,e,t,r)>0)for(l=e;l<t;l+=r)f=Hg(l,s[l],s[l+1],f);else for(l=t-r;l>=e;l-=r)f=Hg(l,s[l],s[l+1],f);return f&&Hc(f,f.next)&&(Ua(f),f=f.next),f}function ks(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Hc(t,t.next)||an(t.prev,t,t.next)===0)){if(Ua(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Na(s,e,t,r,o,l,f){if(!s)return;!f&&l&&fw(s,r,o,l);let u=s,d,p;for(;s.prev!==s.next;){if(d=s.prev,p=s.next,l?iw(s,r,o,l):nw(s)){e.push(d.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),Ua(s),s=p.next,u=p.next;continue}if(s=p,s===u){f?f===1?(s=rw(ks(s),e,t),Na(s,e,t,r,o,l,2)):f===2&&sw(s,e,t,r,o,l):Na(ks(s),e,t,r,o,l,1);break}}}function nw(s){const e=s.prev,t=s,r=s.next;if(an(e,t,r)>=0)return!1;const o=e.x,l=t.x,f=r.x,u=e.y,d=t.y,p=r.y,m=o<l?o<f?o:f:l<f?l:f,g=u<d?u<p?u:p:d<p?d:p,_=o>l?o>f?o:f:l>f?l:f,S=u>d?u>p?u:p:d>p?d:p;let M=r.next;for(;M!==e;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=S&&Fo(o,u,l,d,f,p,M.x,M.y)&&an(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function iw(s,e,t,r){const o=s.prev,l=s,f=s.next;if(an(o,l,f)>=0)return!1;const u=o.x,d=l.x,p=f.x,m=o.y,g=l.y,_=f.y,S=u<d?u<p?u:p:d<p?d:p,M=m<g?m<_?m:_:g<_?g:_,A=u>d?u>p?u:p:d>p?d:p,x=m>g?m>_?m:_:g>_?g:_,y=Ed(S,M,e,t,r),D=Ed(A,x,e,t,r);let w=s.prevZ,R=s.nextZ;for(;w&&w.z>=y&&R&&R.z<=D;){if(w.x>=S&&w.x<=A&&w.y>=M&&w.y<=x&&w!==o&&w!==f&&Fo(u,m,d,g,p,_,w.x,w.y)&&an(w.prev,w,w.next)>=0||(w=w.prevZ,R.x>=S&&R.x<=A&&R.y>=M&&R.y<=x&&R!==o&&R!==f&&Fo(u,m,d,g,p,_,R.x,R.y)&&an(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;w&&w.z>=y;){if(w.x>=S&&w.x<=A&&w.y>=M&&w.y<=x&&w!==o&&w!==f&&Fo(u,m,d,g,p,_,w.x,w.y)&&an(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;R&&R.z<=D;){if(R.x>=S&&R.x<=A&&R.y>=M&&R.y<=x&&R!==o&&R!==f&&Fo(u,m,d,g,p,_,R.x,R.y)&&an(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function rw(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!Hc(o,l)&&B0(o,r,r.next,l)&&Ia(o,l)&&Ia(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ua(r),Ua(r.next),r=s=l),r=r.next}while(r!==s);return ks(r)}function sw(s,e,t,r,o,l){let f=s;do{let u=f.next.next;for(;u!==f.prev;){if(f.i!==u.i&&pw(f,u)){let d=H0(f,u);f=ks(f,f.next),d=ks(d,d.next),Na(f,e,t,r,o,l,0),Na(d,e,t,r,o,l,0);return}u=u.next}f=f.next}while(f!==s)}function ow(s,e,t,r){const o=[];let l,f,u,d,p;for(l=0,f=e.length;l<f;l++)u=e[l]*r,d=l<f-1?e[l+1]*r:s.length,p=k0(s,u,d,r,!1),p===p.next&&(p.steiner=!0),o.push(hw(p));for(o.sort(aw),l=0;l<o.length;l++)t=lw(o[l],t);return t}function aw(s,e){return s.x-e.x}function lw(s,e){const t=cw(s,e);if(!t)return e;const r=H0(t,s);return ks(r,r.next),ks(t,t.next)}function cw(s,e){let t=e,r=-1/0,o;const l=s.x,f=s.y;do{if(f<=t.y&&f>=t.next.y&&t.next.y!==t.y){const _=t.x+(f-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=l&&_>r&&(r=_,o=t.x<t.next.x?t:t.next,_===l))return o}t=t.next}while(t!==e);if(!o)return null;const u=o,d=o.x,p=o.y;let m=1/0,g;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&Fo(f<p?l:r,f,d,p,f<p?r:l,f,t.x,t.y)&&(g=Math.abs(f-t.y)/(l-t.x),Ia(t,s)&&(g<m||g===m&&(t.x>o.x||t.x===o.x&&uw(o,t)))&&(o=t,m=g)),t=t.next;while(t!==u);return o}function uw(s,e){return an(s.prev,s,e.prev)<0&&an(e.next,s,s.next)<0}function fw(s,e,t,r){let o=s;do o.z===0&&(o.z=Ed(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,dw(o)}function dw(s){let e,t,r,o,l,f,u,d,p=1;do{for(t=s,s=null,l=null,f=0;t;){for(f++,r=t,u=0,e=0;e<p&&(u++,r=r.nextZ,!!r);e++);for(d=p;u>0||d>0&&r;)u!==0&&(d===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,u--):(o=r,r=r.nextZ,d--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(f>1);return s}function Ed(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hw(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Fo(s,e,t,r,o,l,f,u){return(o-f)*(e-u)>=(s-f)*(l-u)&&(s-f)*(r-u)>=(t-f)*(e-u)&&(t-f)*(l-u)>=(o-f)*(r-u)}function pw(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!mw(s,e)&&(Ia(s,e)&&Ia(e,s)&&gw(s,e)&&(an(s.prev,s,e.prev)||an(s,e.prev,e))||Hc(s,e)&&an(s.prev,s,s.next)>0&&an(e.prev,e,e.next)>0)}function an(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Hc(s,e){return s.x===e.x&&s.y===e.y}function B0(s,e,t,r){const o=mc(an(s,e,t)),l=mc(an(s,e,r)),f=mc(an(t,r,s)),u=mc(an(t,r,e));return!!(o!==l&&f!==u||o===0&&pc(s,t,e)||l===0&&pc(s,r,e)||f===0&&pc(t,s,r)||u===0&&pc(t,e,r))}function pc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function mc(s){return s>0?1:s<0?-1:0}function mw(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&B0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ia(s,e){return an(s.prev,s,s.next)<0?an(s,e,s.next)>=0&&an(s,s.prev,e)>=0:an(s,e,s.prev)<0||an(s,s.next,e)<0}function gw(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function H0(s,e){const t=new wd(s.i,s.x,s.y),r=new wd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Hg(s,e,t,r){const o=new wd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Ua(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wd(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vw(s,e,t,r){let o=0;for(let l=e,f=t-r;l<t;l+=r)o+=(s[f]-s[l])*(s[l+1]+s[f+1]),f=l;return o}class La{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return La.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Gg(e),Vg(r,e);let f=e.length;t.forEach(Gg);for(let d=0;d<t.length;d++)o.push(f),f+=t[d].length,Vg(r,t[d]);const u=tw.triangulate(r,o);for(let d=0;d<u.length;d+=3)l.push(u.slice(d,d+3));return l}}function Gg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fd extends tn{constructor(e=new z0([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let u=0,d=e.length;u<d;u++){const p=e[u];f(p)}this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2)),this.computeVertexNormals();function f(u){const d=[],p=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,D=t.UVGenerator!==void 0?t.UVGenerator:_w;let w,R=!1,k,O,F,X;y&&(w=y.getSpacedPoints(m),R=!0,_=!1,k=y.computeFrenetFrames(m,!1),O=new G,F=new G,X=new G),_||(x=0,S=0,M=0,A=0);const _e=u.extractPoints(p);let T=_e.shape;const N=_e.holes;if(!La.isClockWise(T)){T=T.reverse();for(let B=0,Ue=N.length;B<Ue;B++){const xe=N[B];La.isClockWise(xe)&&(N[B]=xe.reverse())}}const ge=La.triangulateShape(T,N),W=T;for(let B=0,Ue=N.length;B<Ue;B++){const xe=N[B];T=T.concat(xe)}function he(B,Ue,xe){return Ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Ue,xe)}const V=T.length,oe=ge.length;function U(B,Ue,xe){let Fe,we,Xe;const Ve=B.x-Ue.x,Ge=B.y-Ue.y,xt=xe.x-B.x,P=xe.y-B.y,C=Ve*Ve+Ge*Ge,ce=Ve*P-Ge*xt;if(Math.abs(ce)>Number.EPSILON){const ve=Math.sqrt(C),Pe=Math.sqrt(xt*xt+P*P),Te=Ue.x-Ge/ve,mt=Ue.y+Ve/ve,lt=xe.x-P/Pe,Oe=xe.y+xt/Pe,He=((lt-Te)*P-(Oe-mt)*xt)/(Ve*P-Ge*xt);Fe=Te+Ve*He-B.x,we=mt+Ge*He-B.y;const ct=Fe*Fe+we*we;if(ct<=2)return new Be(Fe,we);Xe=Math.sqrt(ct/2)}else{let ve=!1;Ve>Number.EPSILON?xt>Number.EPSILON&&(ve=!0):Ve<-Number.EPSILON?xt<-Number.EPSILON&&(ve=!0):Math.sign(Ge)===Math.sign(P)&&(ve=!0),ve?(Fe=-Ge,we=Ve,Xe=Math.sqrt(C)):(Fe=Ve,we=Ge,Xe=Math.sqrt(C/2))}return new Be(Fe/Xe,we/Xe)}const $=[];for(let B=0,Ue=W.length,xe=Ue-1,Fe=B+1;B<Ue;B++,xe++,Fe++)xe===Ue&&(xe=0),Fe===Ue&&(Fe=0),$[B]=U(W[B],W[xe],W[Fe]);const j=[];let I,ee=$.concat();for(let B=0,Ue=N.length;B<Ue;B++){const xe=N[B];I=[];for(let Fe=0,we=xe.length,Xe=we-1,Ve=Fe+1;Fe<we;Fe++,Xe++,Ve++)Xe===we&&(Xe=0),Ve===we&&(Ve=0),I[Fe]=U(xe[Fe],xe[Xe],xe[Ve]);j.push(I),ee=ee.concat(I)}for(let B=0;B<x;B++){const Ue=B/x,xe=S*Math.cos(Ue*Math.PI/2),Fe=M*Math.sin(Ue*Math.PI/2)+A;for(let we=0,Xe=W.length;we<Xe;we++){const Ve=he(W[we],$[we],Fe);De(Ve.x,Ve.y,-xe)}for(let we=0,Xe=N.length;we<Xe;we++){const Ve=N[we];I=j[we];for(let Ge=0,xt=Ve.length;Ge<xt;Ge++){const P=he(Ve[Ge],I[Ge],Fe);De(P.x,P.y,-xe)}}}const Ae=M+A;for(let B=0;B<V;B++){const Ue=_?he(T[B],ee[B],Ae):T[B];R?(F.copy(k.normals[0]).multiplyScalar(Ue.x),O.copy(k.binormals[0]).multiplyScalar(Ue.y),X.copy(w[0]).add(F).add(O),De(X.x,X.y,X.z)):De(Ue.x,Ue.y,0)}for(let B=1;B<=m;B++)for(let Ue=0;Ue<V;Ue++){const xe=_?he(T[Ue],ee[Ue],Ae):T[Ue];R?(F.copy(k.normals[B]).multiplyScalar(xe.x),O.copy(k.binormals[B]).multiplyScalar(xe.y),X.copy(w[B]).add(F).add(O),De(X.x,X.y,X.z)):De(xe.x,xe.y,g/m*B)}for(let B=x-1;B>=0;B--){const Ue=B/x,xe=S*Math.cos(Ue*Math.PI/2),Fe=M*Math.sin(Ue*Math.PI/2)+A;for(let we=0,Xe=W.length;we<Xe;we++){const Ve=he(W[we],$[we],Fe);De(Ve.x,Ve.y,g+xe)}for(let we=0,Xe=N.length;we<Xe;we++){const Ve=N[we];I=j[we];for(let Ge=0,xt=Ve.length;Ge<xt;Ge++){const P=he(Ve[Ge],I[Ge],Fe);R?De(P.x,P.y+w[m-1].y,w[m-1].x+xe):De(P.x,P.y,g+xe)}}}Q(),pe();function Q(){const B=o.length/3;if(_){let Ue=0,xe=V*Ue;for(let Fe=0;Fe<oe;Fe++){const we=ge[Fe];Ne(we[2]+xe,we[1]+xe,we[0]+xe)}Ue=m+x*2,xe=V*Ue;for(let Fe=0;Fe<oe;Fe++){const we=ge[Fe];Ne(we[0]+xe,we[1]+xe,we[2]+xe)}}else{for(let Ue=0;Ue<oe;Ue++){const xe=ge[Ue];Ne(xe[2],xe[1],xe[0])}for(let Ue=0;Ue<oe;Ue++){const xe=ge[Ue];Ne(xe[0]+V*m,xe[1]+V*m,xe[2]+V*m)}}r.addGroup(B,o.length/3-B,0)}function pe(){const B=o.length/3;let Ue=0;me(W,Ue),Ue+=W.length;for(let xe=0,Fe=N.length;xe<Fe;xe++){const we=N[xe];me(we,Ue),Ue+=we.length}r.addGroup(B,o.length/3-B,1)}function me(B,Ue){let xe=B.length;for(;--xe>=0;){const Fe=xe;let we=xe-1;we<0&&(we=B.length-1);for(let Xe=0,Ve=m+x*2;Xe<Ve;Xe++){const Ge=V*Xe,xt=V*(Xe+1),P=Ue+Fe+Ge,C=Ue+we+Ge,ce=Ue+we+xt,ve=Ue+Fe+xt;Le(P,C,ce,ve)}}}function De(B,Ue,xe){d.push(B),d.push(Ue),d.push(xe)}function Ne(B,Ue,xe){it(B),it(Ue),it(xe);const Fe=o.length/3,we=D.generateTopUV(r,o,Fe-3,Fe-2,Fe-1);Je(we[0]),Je(we[1]),Je(we[2])}function Le(B,Ue,xe,Fe){it(B),it(Ue),it(Fe),it(Ue),it(xe),it(Fe);const we=o.length/3,Xe=D.generateSideWallUV(r,o,we-6,we-3,we-2,we-1);Je(Xe[0]),Je(Xe[1]),Je(Xe[3]),Je(Xe[1]),Je(Xe[2]),Je(Xe[3])}function it(B){o.push(d[B*3+0]),o.push(d[B*3+1]),o.push(d[B*3+2])}function Je(B){l.push(B.x),l.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return xw(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,f=e.shapes.length;l<f;l++){const u=t[e.shapes[l]];r.push(u)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Dc[o.type]().fromJSON(o)),new Fd(r,e.options)}}const _w={generateTopUV:function(s,e,t,r,o){const l=e[t*3],f=e[t*3+1],u=e[r*3],d=e[r*3+1],p=e[o*3],m=e[o*3+1];return[new Be(l,f),new Be(u,d),new Be(p,m)]},generateSideWallUV:function(s,e,t,r,o,l){const f=e[t*3],u=e[t*3+1],d=e[t*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[o*3],S=e[o*3+1],M=e[o*3+2],A=e[l*3],x=e[l*3+1],y=e[l*3+2];return Math.abs(u-m)<Math.abs(f-p)?[new Be(f,1-d),new Be(p,1-g),new Be(_,1-M),new Be(A,1-y)]:[new Be(u,1-d),new Be(m,1-g),new Be(S,1-M),new Be(x,1-y)]}};function xw(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ic extends tn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:f,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(f+u,Math.PI);let p=0;const m=[],g=new G,_=new G,S=[],M=[],A=[],x=[];for(let y=0;y<=r;y++){const D=[],w=y/r;let R=0;y===0&&f===0?R=.5/t:y===r&&d===Math.PI&&(R=-.5/t);for(let k=0;k<=t;k++){const O=k/t;g.x=-e*Math.cos(o+O*l)*Math.sin(f+w*u),g.y=e*Math.cos(f+w*u),g.z=e*Math.sin(o+O*l)*Math.sin(f+w*u),M.push(g.x,g.y,g.z),_.copy(g).normalize(),A.push(_.x,_.y,_.z),x.push(O+R,1-w),D.push(p++)}m.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const w=m[y][D+1],R=m[y][D],k=m[y+1][D],O=m[y+1][D+1];(y!==0||f>0)&&S.push(w,R,O),(y!==r-1||d<Math.PI)&&S.push(R,k,O)}this.setIndex(S),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Od extends tn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const f=[],u=[],d=[],p=[],m=new G,g=new G,_=new G;for(let S=0;S<=r;S++)for(let M=0;M<=o;M++){const A=M/o*l,x=S/r*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(A),g.y=(e+t*Math.cos(x))*Math.sin(A),g.z=t*Math.sin(x),u.push(g.x,g.y,g.z),m.x=e*Math.cos(A),m.y=e*Math.sin(A),_.subVectors(g,m).normalize(),d.push(_.x,_.y,_.z),p.push(M/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=o;M++){const A=(o+1)*S+M-1,x=(o+1)*(S-1)+M-1,y=(o+1)*(S-1)+M,D=(o+1)*S+M;f.push(A,x,D),f.push(x,y,D)}this.setIndex(f),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Uc extends tn{constructor(e=new F0(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const f=e.computeFrenetFrames(t,l);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const u=new G,d=new G,p=new Be;let m=new G;const g=[],_=[],S=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(S,2));function A(){for(let w=0;w<t;w++)x(w);x(l===!1?t:0),D(),y()}function x(w){m=e.getPointAt(w/t,m);const R=f.normals[w],k=f.binormals[w];for(let O=0;O<=o;O++){const F=O/o*Math.PI*2,X=Math.sin(F),_e=-Math.cos(F);d.x=_e*R.x+X*k.x,d.y=_e*R.y+X*k.y,d.z=_e*R.z+X*k.z,d.normalize(),_.push(d.x,d.y,d.z),u.x=m.x+r*d.x,u.y=m.y+r*d.y,u.z=m.z+r*d.z,g.push(u.x,u.y,u.z)}}function y(){for(let w=1;w<=t;w++)for(let R=1;R<=o;R++){const k=(o+1)*(w-1)+(R-1),O=(o+1)*w+(R-1),F=(o+1)*w+R,X=(o+1)*(w-1)+R;M.push(k,O,X),M.push(O,F,X)}}function D(){for(let w=0;w<=t;w++)for(let R=0;R<=o;R++)p.x=w/t,p.y=R/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Uc(new Dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wg extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Po extends tr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yw extends tr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ba extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Sw extends Ba{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ad=new Kt,jg=new G,Xg=new G;class zd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(jg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mw extends zd{constructor(){super(new ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=bc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qg extends Ba{constructor(e,t,r=0,o=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new Mw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yg=new Kt,Ca=new G,ld=new G;class Ew extends zd{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new nn(2,1,1,1),new nn(0,1,1,1),new nn(3,1,1,1),new nn(1,1,1,1),new nn(3,0,1,1),new nn(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ca),ld.copy(r.position),ld.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ld),r.updateMatrixWorld(),o.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Yg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yg)}}class ww extends Ba{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Ew}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tw extends zd{constructor(){super(new w0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aw extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Tw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cw extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);const Rw="https://api.openf1.org/v1",kd={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",greenDim:"#00a854",yellow:"#ffd700",purple:"#9b59b6",white:"#ffffff",fogColor:1184280,groundColor:1579039,trackColor:3816008,lineColor:14747136,sceneBg:1184280,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},G0={red:"#E10600",redDark:"#B30500",carbon:"#f4f5f7",carbonLight:"#eaebef",carbonMid:"#dddee4",panelBg:"rgba(255,255,255,0.97)",overlay:"rgba(245,246,250,0.95)",cardBg:"rgba(235,236,244,0.85)",inputBg:"rgba(255,255,255,0.95)",text:"#1a1a2e",textDim:"#5a5a7a",textMuted:"#8888a0",border:"rgba(80,85,120,0.2)",borderLight:"rgba(80,85,120,0.1)",green:"#00a854",greenDim:"#008844",yellow:"#cc9900",purple:"#8844aa",white:"#ffffff",fogColor:15264496,groundColor:14211808,trackColor:8947864,lineColor:14747136,sceneBg:15264496,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"};let J=kd;const bw={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},Pw={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},$g=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(Pw))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},Lw=[{label:"🏆 NOR vs PIA — Australia 2025 Q • McLaren 1-2 pole battle",year:2025,meeting:"Australian Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2025"},{label:"🔥 HAM vs LEC — China 2025 Q • Ferrari teammates debut",year:2025,meeting:"Chinese Grand Prix",session:"Qualifying",d1:44,d2:16,cat:"2025"},{label:"⚔️ VER vs NOR — Monza 2024 Q • 0.025s gap",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🎭 LEC vs SAI — Monaco 2024 Q • Ferrari home pole fight",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2024"},{label:"🇬🇧 NOR vs PIA — Silverstone 2024 Q • McLaren supremacy",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2024"},{label:"💥 VER vs NOR — Austria 2024 R • The crash race",year:2024,meeting:"Austrian Grand Prix",session:"Race",d1:1,d2:4,cat:"2024"},{label:"🏁 RUS vs VER — Canada 2024 Q • Identical lap times",year:2024,meeting:"Canadian Grand Prix",session:"Qualifying",d1:63,d2:1,cat:"2024"},{label:"🌙 VER vs NOR — Abu Dhabi 2024 Q • Season finale",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🇧🇪 RUS vs HAM — Spa 2024 Q • Mercedes 1-2",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44,cat:"2024"},{label:"🎰 LEC vs PIA — Las Vegas 2024 Q • Night fight",year:2024,meeting:"Las Vegas Grand Prix",session:"Qualifying",d1:16,d2:81,cat:"2024"},{label:"🇺🇸 NOR vs VER — Miami 2024 Q • Sprint weekend",year:2024,meeting:"Miami Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"🏎️ HAM vs VER — Bahrain 2024 R • Season opener",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1,cat:"2024"},{label:"🇯🇵 VER vs PIA — Japan 2024 Q • Suzuka showdown",year:2024,meeting:"Japanese Grand Prix",session:"Qualifying",d1:1,d2:81,cat:"2024"},{label:"🇪🇸 NOR vs VER — Spain 2024 Q • Barcelona battle",year:2024,meeting:"Spanish Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"👑 VER vs LEC — Bahrain 2023 Q • Season opener",year:2023,meeting:"Bahrain Grand Prix",session:"Qualifying",d1:1,d2:16,cat:"2023"},{label:"🦁 VER vs HAM — Jeddah 2023 Q • Old rivals",year:2023,meeting:"Saudi Arabian Grand Prix",session:"Qualifying",d1:1,d2:44,cat:"2023"},{label:"🌧️ VER vs ALO — Monaco 2023 Q • Wet-dry thriller",year:2023,meeting:"Monaco Grand Prix",session:"Qualifying",d1:1,d2:14,cat:"2023"},{label:"🇸🇬 SAI vs NOR — Singapore 2023 Q • Street circuit pole",year:2023,meeting:"Singapore Grand Prix",session:"Qualifying",d1:55,d2:4,cat:"2023"},{label:"🏆 VER vs NOR — Zandvoort 2023 Q • Dutch home race",year:2023,meeting:"Dutch Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2023"},{label:"🇲🇽 LEC vs SAI — Mexico 2023 Q • Ferrari lockout",year:2023,meeting:"Mexico City Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2023"}],gc=["orbit","follow1","follow2","top","cinematic"],Dw={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function Bs(s,e={},t=2){const r=new URL(`${Rw}${s}`);Object.entries(e).forEach(([o,l])=>{l!=null&&l!==""&&r.searchParams.append(o,l)});for(let o=0;o<=t;o++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(o+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(o===t)throw l;await new Promise(f=>setTimeout(f,800*(o+1)))}}const Kg=s=>Bs("/meetings",{year:s}),Zg=s=>Bs("/sessions",{meeting_key:s}),Jg=s=>Bs("/drivers",{session_key:s}),vc=(s,e)=>Bs("/laps",{session_key:s,driver_number:e}),_c=(s,e)=>Bs("/stints",{session_key:s,driver_number:e});function xc(s,e,t,r){const o={session_key:s,driver_number:e};return t&&(o["date>"]=t),r&&(o["date<"]=r),Bs("/location",o)}function yc(s,e,t,r){const o={session_key:s,driver_number:e};return t&&(o["date>"]=t),r&&(o["date<"]=r),Bs("/car_data",o)}function Fs(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),o=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[o].x-s[r].x)*l,y:s[r].y+(s[o].y-s[r].y)*l,z:s[r].z+(s[o].z-s[r].z)*l}}function Os(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,o=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>o&&(o=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const u=Math.max(t-e,o-r)||1,d=(e+t)/2,p=(r+o)/2,m=(l+f)/2;return s.map(g=>({x:(g.x-d)/u*40,y:(g.z-m)/u*4,z:(g.y-p)/u*40}))}function Qg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function Sc(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function Nw(){const[s,e]=Ce.useState(typeof window<"u"&&window.innerWidth<768);return Ce.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function Lo(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let o=0;o<e;o++)r.push(s[Math.floor(o*t)]);return r}function Cs(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function Iw(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function Do(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function Uw(s,e,t,r,o,l,f,u,d,p,m,g,_){const S=Ce.useRef({}),M=Ce.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),A=Ce.useRef(u),x=Ce.useRef(new G(40,30,40)),y=Ce.useRef(new G(0,0,0)),D=Ce.useMemo(()=>t?Os(t):null,[t]),w=Ce.useMemo(()=>r?Os(r):null,[r]),R=Ce.useMemo(()=>(m==null?void 0:m.map(k=>k.speed||0))||[],[m]);Ce.useEffect(()=>{const k=s.current;if(!k||!e||e.length<10)return;S.current.ren&&(S.current.ren.dispose(),k.contains(S.current.ren.domElement)&&k.removeChild(S.current.ren.domElement)),S.current.fr&&cancelAnimationFrame(S.current.fr);const O=k.clientWidth,F=k.clientHeight,X=new BE,_e=_?kd:G0;X.background=new At(_e.sceneBg),X.fog=new Dd(_e.sceneBg,120,350);const T=new ri(50,O/F,.1,500),N=new L0({antialias:!0});N.setSize(O,F),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.appendChild(N.domElement),X.add(new Cw(14540264,_?.7:1.2));const Se=new Aw(16777215,_?1:1.4);Se.position.set(40,80,30),X.add(Se),X.add(new Sw(_?12305629:15658751,_?3355456:8952200,_?.4:.6));const ge=new kt(new ka(400,400),new yw({color:_e.groundColor}));ge.rotation.x=-Math.PI/2,ge.position.y=-.2,X.add(ge);const W=new Ic(180,32,16),he=new Float32Array(W.attributes.position.count*3);for(let re=0;re<W.attributes.position.count;re++){const K=W.attributes.position.getY(re),le=Math.max(0,Math.min(1,(K+10)/190));he[re*3]=.06+le*.04,he[re*3+1]=.06+le*.07,he[re*3+2]=.1+le*.12}W.setAttribute("color",new Wt(he,3));const V=new kt(W,new Ls({vertexColors:!0,side:jn,fog:!1}));X.add(V);const oe=new Ec(e.map(re=>new G(re.x,re.y,re.z)),!0),U=Math.min(e.length*3,800),$=2,j=oe.getPoints(U),I=[],ee=[],Ae=[],Q=[],pe=[],me=j.map((re,K)=>{const le=j[(K+1)%j.length],te=j[(K-1+j.length)%j.length];return new G(le.x-te.x,0,le.z-te.z).normalize()});for(let re=0;re<j.length;re++){const K=j[re],le=me[re],te=new G(-le.z,0,le.x),Me=new G(K.x+te.x*$/2,K.y,K.z+te.z*$/2),$e=new G(K.x-te.x*$/2,K.y,K.z-te.z*$/2);if(I.push(Me.x,Me.y,Me.z,$e.x,$e.y,$e.z),ee.push(0,1,0,0,1,0),Q.push(new G(Me.x,Me.y+.02,Me.z)),pe.push(new G($e.x,$e.y+.02,$e.z)),re<j.length-1){const ft=re*2;Ae.push(ft,ft+2,ft+1,ft+1,ft+2,ft+3)}}const De=new tn;De.setAttribute("position",new Wt(I,3)),De.setAttribute("normal",new Wt(ee,3)),De.setIndex(Ae);const Ne=new kt(De,new Wg({color:_e.trackColor,roughness:.8,metalness:.1,side:gi}));if(X.add(Ne),g==="heatmap"&&R.length>10){const re=new Float32Array(j.length*2*3);for(let te=0;te<j.length;te++){const Me=te/(j.length-1),$e=Math.min(Math.floor(Me*(R.length-1)),R.length-1),ft=Math.max(0,Math.min(1,(R[$e]-50)/300));let Rt,yt,Ut;ft<.25?(Rt=0,yt=ft*4,Ut=1):ft<.5?(Rt=0,yt=1,Ut=1-(ft-.25)*4):ft<.75?(Rt=(ft-.5)*4,yt=1,Ut=0):(Rt=1,yt=1-(ft-.75)*4,Ut=0);const Ct=te*2;re[Ct*3]=Rt,re[Ct*3+1]=yt,re[Ct*3+2]=Ut,re[(Ct+1)*3]=Rt,re[(Ct+1)*3+1]=yt,re[(Ct+1)*3+2]=Ut}const K=De.clone();K.setAttribute("color",new Wt(re,3));const le=new kt(K,new Ls({vertexColors:!0,transparent:!0,opacity:.55,side:gi,depthWrite:!1}));le.position.y+=.01,X.add(le)}const Le=new No({color:16777215,transparent:!0,opacity:.55});X.add(new bo(new tn().setFromPoints(Q),Le)),X.add(new bo(new tn().setFromPoints(pe),Le));const it=[53866,16766720,14747136];[0,.33,.66].forEach((re,K)=>{const le=oe.getPointAt(re),te=oe.getTangentAt(re),Me=new G(-te.z,0,te.x).normalize(),$e=le.clone().add(Me.clone().multiplyScalar($/2+.3)),ft=le.clone().sub(Me.clone().multiplyScalar($/2+.3));$e.y+=.03,ft.y+=.03,X.add(new bo(new tn().setFromPoints([$e,ft]),new No({color:it[K],linewidth:2}))),[-1,1].forEach(Rt=>{const yt=new Ai(.15,1.2,2),Ut=new Wg({color:it[K],emissive:it[K],emissiveIntensity:.5,transparent:!0,opacity:.7}),Ct=new kt(yt,Ut),Ri=Me.clone().multiplyScalar(Rt*($/2+.8));Ct.position.set(le.x+Ri.x,le.y+.6,le.z+Ri.z),Ct.lookAt(le.x,le.y+.6,le.z),X.add(Ct)})});const Je=[],B=250;for(let re=0;re<B-2;re++){const K=re/B,le=(re+1)/B,te=(re+2)/B,Me=oe.getPointAt(K),$e=oe.getPointAt(le),ft=oe.getPointAt(te);Math.abs(($e.x-Me.x)*(ft.z-$e.z)-($e.z-Me.z)*(ft.x-$e.x))>.12&&(Je.length===0||Math.abs(le-Je[Je.length-1].t)>.035)&&Je.push({t:le,p:$e})}Je.slice(0,20).forEach((re,K)=>{const le=document.createElement("canvas");le.width=48,le.height=48;const te=le.getContext("2d");te.fillStyle="rgba(225,6,0,0.75)",te.beginPath(),te.arc(24,24,20,0,Math.PI*2),te.fill(),te.fillStyle="#fff",te.font="bold 22px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText(`${K+1}`,24,25);const Me=new zg(le),$e=new Dg(new Sd({map:Me,transparent:!0,depthWrite:!1})),ft=oe.getTangentAt(re.t),yt=new G(-ft.z,0,ft.x).normalize().clone().multiplyScalar($/2+1.5);$e.position.set(re.p.x+yt.x,re.p.y+1.5,re.p.z+yt.z),$e.scale.set(1.3,1.3,1),X.add($e)});const Ue=oe.getPointAt(0),xe=oe.getTangentAt(0),Fe=new G(-xe.z,0,xe.x).normalize(),we=Ue.clone().add(Fe.clone().multiplyScalar($/2));we.y+=.03;const Xe=Ue.clone().sub(Fe.clone().multiplyScalar($/2));Xe.y+=.03,X.add(new bo(new tn().setFromPoints([we,Xe]),new No({color:16777215})));function Ve(re,K,le){const te=new Ra,Me=new At(re),$e=le?.5:1,ft=le?.45:.2,Rt=new Po({color:Me,emissive:Me,emissiveIntensity:ft,specular:4473924,shininess:80,transparent:le,opacity:$e}),yt=new Po({color:1118481,shininess:30,transparent:le,opacity:$e}),Ut=new Po({color:1710618,shininess:50,transparent:le,opacity:$e}),Ct=new Po({color:1381653,shininess:10,transparent:le,opacity:$e}),Ri=new Po({color:Me,emissive:Me,emissiveIntensity:.15,specular:16777215,shininess:120,transparent:le,opacity:$e}),ye=.55,si=new Ec([new G(0,.12*ye,2*ye),new G(0,.13*ye,1.5*ye),new G(0,.15*ye,1*ye),new G(0,.18*ye,.5*ye),new G(0,.22*ye,.1*ye),new G(0,.28*ye,-.1*ye),new G(0,.24*ye,-.5*ye),new G(0,.2*ye,-.9*ye),new G(0,.18*ye,-1.1*ye)]),bi=new Uc(si,32,.12*ye,8,!1),_i=new kt(bi,Rt);te.add(_i);const ir=new Ud(.08*ye,.6*ye,12);ir.rotateX(-Math.PI/2);const Vi=new kt(ir,Rt);Vi.position.set(0,.12*ye,2.3*ye),te.add(Vi);const Rr=new es(.08*ye,.1*ye,.22*ye,8),zn=new kt(Rr,Rt);zn.position.set(0,.38*ye,0),te.add(zn);const rr=new Ic(.1*ye,12,8,0,Math.PI*2,0,Math.PI*.5),b=new kt(rr,yt);b.position.set(0,.22*ye,.2*ye),b.scale.set(1.2,.6,2),te.add(b);const ne=new Po({color:5592405,specular:16777215,shininess:200,transparent:le,opacity:$e}),ue=new kt(new Od(.16*ye,.016*ye,8,24,Math.PI),ne);ue.rotation.z=Math.PI,ue.position.set(0,.32*ye,.22*ye),te.add(ue);const de=new kt(new es(.012*ye,.015*ye,.32*ye,8),ne);de.rotation.x=-.18,de.position.set(0,.3*ye,.42*ye),te.add(de),[-1,1].forEach(Yt=>{const wt=new Ec([new G(Yt*.28*ye,.14*ye,.4*ye),new G(Yt*.34*ye,.16*ye,.1*ye),new G(Yt*.33*ye,.14*ye,-.3*ye),new G(Yt*.25*ye,.12*ye,-.6*ye)]),It=new Uc(wt,16,.07*ye,8,!1);te.add(new kt(It,Rt))});const ae=new Ai(.85*ye,.015*ye,2.8*ye);ae.translate(0,.04*ye,.3*ye),te.add(new kt(ae,Ut));const We=new z0;We.moveTo(-.48*ye,0),We.quadraticCurveTo(0,-.015*ye,.48*ye,0),We.lineTo(.48*ye,.008*ye),We.quadraticCurveTo(0,.02*ye,-.48*ye,.008*ye),We.closePath();const ot=new Fd(We,{depth:.16*ye,bevelEnabled:!0,bevelThickness:.005*ye,bevelSize:.005*ye,bevelSegments:3}),ut=new kt(ot,Rt);ut.position.set(0,.06*ye,2*ye),te.add(ut),[-1,1].forEach(Yt=>{const wt=new Ai(.008*ye,.07*ye,.2*ye),It=new kt(wt,Rt);It.position.set(Yt*.48*ye,.065*ye,2.08*ye),te.add(It)});const qe=new Ai(.5*ye,.012*ye,.1*ye),Et=new kt(qe,Rt);Et.position.set(0,.47*ye,-1*ye),te.add(Et);const vt=new Ai(.44*ye,.01*ye,.05*ye),_t=new kt(vt,Rt);_t.position.set(0,.51*ye,-1.02*ye),_t.rotation.x=-.2,te.add(_t),[-1,1].forEach(Yt=>{const wt=new Ai(.008*ye,.16*ye,.14*ye),It=new kt(wt,Rt);It.position.set(Yt*.25*ye,.43*ye,-1*ye),te.add(It)}),[-1,1].forEach(Yt=>{const wt=new es(.006*ye,.008*ye,.16*ye,6),It=new kt(wt,Ut);It.position.set(Yt*.1*ye,.34*ye,-.96*ye),te.add(It)});const Ht=new Ls({color:16720384,transparent:!0,opacity:.8}),hn=new kt(new Ai(.2*ye,.025*ye,.01*ye),Ht);hn.position.set(0,.19*ye,-1.12*ye),te.add(hn);const Gt=.16*ye,mn=.08*ye;[{x:.38,z:1.5},{x:-.38,z:1.5},{x:.42,z:-.65},{x:-.42,z:-.65}].forEach(Yt=>{const wt=new es(Gt,Gt,mn,24);wt.rotateZ(Math.PI/2);const It=new kt(wt,Ct);It.position.set(Yt.x*ye,Gt,Yt.z*ye),te.add(It);const Vt=new es(Gt*.5,Gt*.5,mn+.008*ye,16);Vt.rotateZ(Math.PI/2);const ln=new kt(Vt,Ri);ln.position.set(Yt.x*ye,Gt,Yt.z*ye),te.add(ln)});const Dt=new Ls({color:0,transparent:!0,opacity:.2,side:gi,depthWrite:!1}),St=new kt(new Nc(1.2*ye,24),Dt);St.rotation.x=-Math.PI/2,St.position.y=.01,te.add(St);const gn=new Ls({color:Me,transparent:!0,opacity:le?.05:.025,side:gi,depthWrite:!1}),Ft=new kt(new Nc(1.4*ye,16),gn);Ft.rotation.x=-Math.PI/2,Ft.position.set(0,.005,0),te.add(Ft);const qn=new ww(Me,le?.5:.25,8);if(qn.position.set(0,.35*ye,0),te.add(qn),K){const Yt=document.createElement("canvas");Yt.width=160,Yt.height=56;const wt=Yt.getContext("2d");wt.fillStyle=re,wt.globalAlpha=.9,wt.beginPath();const It=6;wt.moveTo(It,0),wt.lineTo(160-It,0),wt.quadraticCurveTo(160,0,160,It),wt.lineTo(160,56-It),wt.quadraticCurveTo(160,56,160-It,56),wt.lineTo(It,56),wt.quadraticCurveTo(0,56,0,56-It),wt.lineTo(0,It),wt.quadraticCurveTo(0,0,It,0),wt.fill(),wt.fillStyle="#fff",wt.globalAlpha=.15,wt.fillRect(0,0,6,56),wt.globalAlpha=1,wt.fillStyle="#fff",wt.font="bold 30px sans-serif",wt.textAlign="center",wt.textBaseline="middle",wt.fillText(K,80,30);const Vt=new zg(Yt),ln=new Dg(new Sd({map:Vt,transparent:!0,depthWrite:!1}));ln.position.set(0,.85*ye,0),ln.scale.set(2.2,.8,1),te.add(ln)}return te}const Ge=Ve(l,d,!1),xt=Ve(f,p,!0);X.add(Ge),X.add(xt);const P=new qg(new At(l),.6,25,Math.PI/6,.5,1);P.position.set(0,12,0),X.add(P);const C=new qg(new At(f),.4,25,Math.PI/6,.5,1);C.position.set(0,12,0),X.add(C);const ce=new tn,ve=new Float32Array(6);ce.setAttribute("position",new Wt(ve,3));const Pe=new No({color:16777215,transparent:!0,opacity:.5}),Te=new bo(ce,Pe);Te.frustumCulled=!1,X.add(Te);const mt=oe.getPoints(U),lt=new tn().setFromPoints(mt),Oe=new bo(lt,new No({color:4500223,transparent:!0,opacity:.12}));Oe.position.y+=.015,X.add(Oe);function He(re,K){const te=new Float32Array(360),Me=new tn;Me.setAttribute("position",new vi(te,3));const $e=new Float32Array(120);$e.fill(0),Me.setAttribute("alpha",new vi($e,1)),Me.setDrawRange(0,0);const ft=new Cr({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new At(re)}},vertexShader:"attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }",fragmentShader:`uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${K?"0.3":"0.55"}); }`}),Rt=new VE(Me,ft);return X.add(Rt),{mesh:Rt,positions:te,alphas:$e,max:120,count:0}}const ct=He(l,!1),ze=He(f,!0);S.current={scene:X,camera:T,ren:N,car1:Ge,car2:xt,tr1:ct,tr2:ze,n1:D,n2:w,curve:oe,spot1:P,spot2:C,deltaLine:Te,deltaPos:ve,fr:null};const dt=M.current,Mt=re=>{var K,le,te,Me;dt.drag=!0,dt.lx=re.clientX??((le=(K=re.touches)==null?void 0:K[0])==null?void 0:le.clientX)??0,dt.ly=re.clientY??((Me=(te=re.touches)==null?void 0:te[0])==null?void 0:Me.clientY)??0},rt=re=>{var te,Me,$e,ft;if(!dt.drag)return;const K=re.clientX??((Me=(te=re.touches)==null?void 0:te[0])==null?void 0:Me.clientX)??0,le=re.clientY??((ft=($e=re.touches)==null?void 0:$e[0])==null?void 0:ft.clientY)??0;dt.angle+=(K-dt.lx)*.005,dt.pitch=Math.max(.1,Math.min(1.4,dt.pitch+(le-dt.ly)*.005)),dt.lx=K,dt.ly=le},Ye=()=>{dt.drag=!1},Ze=re=>{dt.dist=Math.max(15,Math.min(200,dt.dist+re.deltaY*.05))},st=N.domElement;st.addEventListener("mousedown",Mt),st.addEventListener("mousemove",rt),st.addEventListener("mouseup",Ye),st.addEventListener("mouseleave",Ye),st.addEventListener("wheel",Ze,{passive:!0}),st.addEventListener("touchstart",Mt,{passive:!0}),st.addEventListener("touchmove",rt,{passive:!0}),st.addEventListener("touchend",Ye);function gt(){S.current.fr=requestAnimationFrame(gt),dt.cinT+=3e-4;const re=A.current;re==="orbit"?(dt.drag||(dt.angle+=8e-4),x.current.set(Math.cos(dt.angle)*dt.dist*Math.cos(dt.pitch),dt.dist*Math.sin(dt.pitch),Math.sin(dt.angle)*dt.dist*Math.cos(dt.pitch)),y.current.set(0,0,0)):re==="top"&&(x.current.set(0,65,.01),y.current.set(0,0,0)),T.position.lerp(x.current,.08),T.lookAt(y.current),N.render(X,T)}gt();let bt;const q=()=>{clearTimeout(bt),bt=setTimeout(()=>{k&&(T.aspect=k.clientWidth/k.clientHeight,T.updateProjectionMatrix(),N.setSize(k.clientWidth,k.clientHeight))},100)};return window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q),st.removeEventListener("mousedown",Mt),st.removeEventListener("mousemove",rt),st.removeEventListener("mouseup",Ye),st.removeEventListener("mouseleave",Ye),st.removeEventListener("wheel",Ze),st.removeEventListener("touchstart",Mt),st.removeEventListener("touchmove",rt),st.removeEventListener("touchend",Ye),cancelAnimationFrame(S.current.fr),N.dispose(),k.contains(N.domElement)&&k.removeChild(N.domElement)}},[e,l,f,d,p,g,R,_]),Ce.useEffect(()=>{S.current.n1=D},[D]),Ce.useEffect(()=>{S.current.n2=w},[w]),Ce.useEffect(()=>{A.current=u},[u]),Ce.useEffect(()=>{const{car1:k,car2:O,tr1:F,tr2:X,camera:_e,spot1:T,spot2:N,deltaLine:Se,deltaPos:ge}=S.current;if(!k||!O||!e||e.length<2)return;const W=M.current;function he(U,$,j,I){const ee=(j==null?void 0:j.length)>=2?j:e,Ae=Fs(ee,I);if(isNaN(Ae.x)||isNaN(Ae.y)||isNaN(Ae.z))return{x:0,y:0,z:0};U.position.set(Ae.x,Ae.y+.2,Ae.z);const Q=Fs(ee,Math.min(1,I+.005));if(Math.abs(Q.x-Ae.x)+Math.abs(Q.z-Ae.z)>.001&&!isNaN(Q.x)&&U.lookAt(Q.x,Ae.y+.2,Q.z),$){const pe=Math.min($.count+1,$.max);for(let me=(pe-1)*3;me>=3;me-=3)$.positions[me]=$.positions[me-3],$.positions[me+1]=$.positions[me-2],$.positions[me+2]=$.positions[me-1];$.positions[0]=Ae.x,$.positions[1]=Ae.y+.05,$.positions[2]=Ae.z;for(let me=pe-1;me>=1;me--)$.alphas[me]=$.alphas[me-1]*.97;$.alphas[0]=1,$.count=pe,$.mesh.geometry.attributes.position.needsUpdate=!0,$.mesh.geometry.attributes.alpha.needsUpdate=!0,$.mesh.geometry.setDrawRange(0,pe)}return Ae}const V=he(k,F,S.current.n1,o),oe=he(O,X,S.current.n2,o);if(T&&(T.position.set(V.x,V.y+12,V.z),T.target=k),N&&(N.position.set(oe.x,oe.y+12,oe.z),N.target=O),Se&&ge){ge[0]=V.x,ge[1]=V.y+.5,ge[2]=V.z,ge[3]=oe.x,ge[4]=oe.y+.5,ge[5]=oe.z,Se.geometry.attributes.position.needsUpdate=!0;const U=Math.sqrt((V.x-oe.x)**2+(V.z-oe.z)**2);Se.material.opacity=Math.min(.6,U*.08)}if(_e){const U=A.current;if(U==="follow1"||U==="follow2"){const $=U==="follow1"?V:oe,j=U==="follow1"?S.current.n1||e:S.current.n2||e,I=Fs(j,Math.min(1,o+.02)),ee=I.x-$.x,Ae=I.z-$.z,Q=Math.sqrt(ee*ee+Ae*Ae)||1;x.current.set($.x-ee/Q*8,$.y+4.5,$.z-Ae/Q*8),y.current.set(I.x,$.y+.3,I.z)}else if(U==="cinematic"&&S.current.curve){const $=(W.cinT+o*.3)%1,j=S.current.curve.getPointAt($);x.current.set(j.x+8,j.y+5,j.z+8),y.current.set((V.x+oe.x)/2,(V.y+oe.y)/2,(V.z+oe.z)/2)}}},[o,e,u])}const Fw=Ce.memo(function({tp:e,l1:t,l2:r,prog:o,c1:l,c2:f}){const u=Ce.useRef(null),d=Ce.useMemo(()=>t?Os(t):null,[t]),p=Ce.useMemo(()=>r?Os(r):null,[r]);return Ce.useEffect(()=>{const m=u.current;if(!m||!(e!=null&&e.length))return;const g=m.getContext("2d"),_=m.width,S=14;g.clearRect(0,0,_,_),g.fillStyle=J.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(_-8,0),g.quadraticCurveTo(_,0,_,8),g.lineTo(_,_-8),g.quadraticCurveTo(_,_,_-8,_),g.lineTo(8,_),g.quadraticCurveTo(0,_,0,_-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let M=1/0,A=-1/0,x=1/0,y=-1/0;for(const k of e)k.x<M&&(M=k.x),k.x>A&&(A=k.x),k.z<x&&(x=k.z),k.z>y&&(y=k.z);const D=Math.max(A-M,y-x)||1,w=k=>({x:S+(k.x-M)/D*(_-S*2),y:S+(k.z-x)/D*(_-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((k,O)=>{const F=w(k);O===0?g.moveTo(F.x,F.y):g.lineTo(F.x,F.y)}),g.closePath(),g.stroke();function R(k,O){const F=(k==null?void 0:k.length)>=2?k:e,X=Fs(F,o),_e=w(X);g.fillStyle=O,g.shadowColor=O,g.shadowBlur=8,g.beginPath(),g.arc(_e.x,_e.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}R(d,l),R(p,f)},[e,o,t,r,l,f]),H.jsx("canvas",{ref:u,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),cd=Ce.memo(function({data1:e,data2:t,color1:r,color2:o,maxVal:l,h:f,prog:u,label:d,fillColor:p}){if(!(e!=null&&e.length)&&!(t!=null&&t.length))return null;const m=f||45,g=300;function _(A){if(!(A!=null&&A.length))return"";const x=Math.max(1,Math.floor(A.length/150));let y="";for(let D=0;D<A.length;D+=x){const w=D/(A.length-1)*g,R=m-2-(A[D]||0)/l*(m-4);y+=(D===0?"M":"L")+`${w},${R}`}return y}const S=_(e),M=_(t);return H.jsxs("svg",{width:"100%",height:m,viewBox:`0 0 ${g} ${m}`,preserveAspectRatio:"none",style:{borderRadius:3,background:J.cardBg,display:"block",marginBottom:2},children:[S&&H.jsxs(H.Fragment,{children:[H.jsx("path",{d:S+`L${g},${m}L0,${m}Z`,fill:p||`${r}10`}),H.jsx("path",{d:S,fill:"none",stroke:r,strokeWidth:"1.5",opacity:"0.7"})]}),M&&H.jsxs(H.Fragment,{children:[H.jsx("path",{d:M+`L${g},${m}L0,${m}Z`,fill:`${o}08`}),H.jsx("path",{d:M,fill:"none",stroke:o,strokeWidth:"1.2",opacity:"0.5",strokeDasharray:"3,2"})]}),u!==void 0&&H.jsx("line",{x1:u*g,y1:"0",x2:u*g,y2:m,stroke:"#fff",strokeWidth:"1",opacity:"0.5"}),u!==void 0&&(e==null?void 0:e.length)&&(()=>{const A=Math.floor(u*(e.length-1)),x=e[A]||0,y=m-2-x/l*(m-4);return H.jsx("circle",{cx:u*g,cy:y,r:"2.5",fill:r,opacity:"0.9"})})(),u!==void 0&&(t==null?void 0:t.length)&&(()=>{const A=Math.floor(u*(t.length-1)),x=t[A]||0,y=m-2-x/l*(m-4);return H.jsx("circle",{cx:u*g,cy:y,r:"2",fill:o,opacity:"0.7"})})()]})}),ud=Ce.memo(function({s:e,t1:t,t2:r,c1:o,c2:l}){const f=t&&r?t-r:null,u=[J.green,J.yellow,J.red];return H.jsxs("div",{style:{flex:1,padding:"5px 8px",background:J.cardBg,borderRadius:4,borderTop:`2px solid ${u[e-1]}`},children:[H.jsxs("div",{style:{fontSize:9,color:J.textMuted,fontFamily:J.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[H.jsx("span",{style:{fontSize:12,color:o,fontFamily:J.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),H.jsx("span",{style:{fontSize:12,color:l,fontFamily:J.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&H.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?J.red:J.green,fontFamily:J.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function Ow(){var wt,It,Vt,ln,br,Cn,Wi,as,sr,Pr,Ha;const s=Nw(),[e,t]=Ce.useState(()=>{try{return localStorage.getItem("f1s-theme")!=="light"}catch{return!0}});J=e?kd:G0;const r=Ce.useCallback(()=>{t(L=>{const Ee=!L;try{localStorage.setItem("f1s-theme",Ee?"dark":"light")}catch{}return Ee})},[]),[o,l]=Ce.useState(2026),[f,u]=Ce.useState([]),[d,p]=Ce.useState(null),[m,g]=Ce.useState([]),[_,S]=Ce.useState(null),[M,A]=Ce.useState([]),[x,y]=Ce.useState(null),[D,w]=Ce.useState(null),[R,k]=Ce.useState(null),[O,F]=Ce.useState(null),[X,_e]=Ce.useState([]),[T,N]=Ce.useState([]),[Se,ge]=Ce.useState(null),[W,he]=Ce.useState(null),[V,oe]=Ce.useState(null),[U,$]=Ce.useState(null),[j,I]=Ce.useState(null),[ee,Ae]=Ce.useState([]),[Q,pe]=Ce.useState([]),[me,De]=Ce.useState(0),[Ne,Le]=Ce.useState(!1),[it,Je]=Ce.useState(1),[B,Ue]=Ce.useState(!1),[xe,Fe]=Ce.useState("orbit"),[we,Xe]=Ce.useState("normal"),[Ve,Ge]=Ce.useState(""),[xt,P]=Ce.useState(void 0),[C,ce]=Ce.useState(""),[ve,Pe]=Ce.useState(!0),[Te,mt]=Ce.useState("3d"),[lt,Oe]=Ce.useState(!1),[He,ct]=Ce.useState(!1),[ze,dt]=Ce.useState(!1),[Mt,rt]=Ce.useState(""),Ye=Ce.useRef(null),Ze=Ce.useRef(null),st=Ce.useRef(null),gt=Ce.useRef(!1);Ce.useRef(!1);const bt=Ce.useRef(!1),q=M.find(L=>L.driver_number===x),re=M.find(L=>L.driver_number===D),K=q?$g(q.team_name):"#4488ff",le=re?$g(re.team_name):"#ff4488",te=X.find(L=>L.lap_number===R),Me=T.find(L=>L.lap_number===O),$e=te!=null&&te.lap_duration&&(Me!=null&&Me.lap_duration)?te.lap_duration-Me.lap_duration:null,ft=te!=null&&te.lap_duration?me*te.lap_duration:0,Rt=Me!=null&&Me.lap_duration?me*Me.lap_duration:0,yt=(It=(wt=ee.find(L=>R>=L.lap_start&&R<=L.lap_end))==null?void 0:wt.compound)==null?void 0:It.toUpperCase(),Ut=(ln=(Vt=Q.find(L=>O>=L.lap_start&&O<=L.lap_end))==null?void 0:Vt.compound)==null?void 0:ln.toUpperCase(),Ct=s?200:400,Ri=Ce.useMemo(()=>Lo(V==null?void 0:V.map(L=>L.speed||0),Ct),[V,Ct]),ye=Ce.useMemo(()=>Lo(U==null?void 0:U.map(L=>L.speed||0),Ct),[U,Ct]),si=Ce.useMemo(()=>Lo(V==null?void 0:V.map(L=>L.throttle||0),Ct),[V,Ct]),bi=Ce.useMemo(()=>Lo(U==null?void 0:U.map(L=>L.throttle||0),Ct),[U,Ct]),_i=Ce.useMemo(()=>Lo(V==null?void 0:V.map(L=>L.brake>0?100:0),Ct),[V,Ct]),ir=Ce.useMemo(()=>Lo(U==null?void 0:U.map(L=>L.brake>0?100:0),Ct),[U,Ct]),Vi=Qg(V,me),Rr=Qg(U,me),zn=Ce.useMemo(()=>V?Math.max(...V.map(L=>L.speed||0)):0,[V]),rr=Ce.useMemo(()=>U?Math.max(...U.map(L=>L.speed||0)):0,[U]),b=Ce.useMemo(()=>V!=null&&V.length?V.reduce((L,Ee)=>L+(Ee.speed||0),0)/V.length:0,[V]),ne=Ce.useMemo(()=>U!=null&&U.length?U.reduce((L,Ee)=>L+(Ee.speed||0),0)/U.length:0,[U]);Ce.useEffect(()=>{bt.current||(Ge("Loading..."),ce(""),Kg(o).then(L=>{u(L.filter(Ee=>Ee.meeting_name)),p(null),S(null),g([]),A([]),y(null),w(null),I(null),Ge("")}).catch(L=>{ce(L.message),Ge("")}))},[o]),Ce.useEffect(()=>{!d||bt.current||(Ge("Loading sessions..."),Zg(d.meeting_key).then(L=>{g(L.filter(Ee=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Ee.session_name))),S(null),A([]),y(null),w(null),I(null),Ge("")}).catch(L=>{ce(L.message),Ge("")}))},[d]),Ce.useEffect(()=>{!_||bt.current||(Ge("Loading drivers..."),Jg(_.session_key).then(L=>{const Ee=new Set;A(L.filter(tt=>Ee.has(tt.driver_number)?!1:(Ee.add(tt.driver_number),!0))),y(null),w(null),I(null),Ge("")}).catch(L=>{ce(L.message),Ge("")}))},[_]),Ce.useEffect(()=>{bt.current||_&&x&&(vc(_.session_key,x).then(L=>{_e(L),k(null)}).catch(()=>_e([])),_c(_.session_key,x).then(Ae).catch(()=>Ae([])))},[_,x]),Ce.useEffect(()=>{bt.current||_&&D&&(vc(_.session_key,D).then(L=>{N(L),F(null)}).catch(()=>N([])),_c(_.session_key,D).then(pe).catch(()=>pe([])))},[_,D]),Ce.useEffect(()=>{if(X.length&&!R){const L=Sc(X);L&&k(L.lap_number)}},[X]),Ce.useEffect(()=>{if(T.length&&!O){const L=Sc(T);L&&F(L.lap_number)}},[T]),Ce.useEffect(()=>{if(gt.current)return;const L=Do();L.year&&L.mk&&(gt.current=!0,l(Number(L.year)))},[]),Ce.useEffect(()=>{const L=Do();if(L.mk&&f.length&&!d){const Ee=f.find(tt=>String(tt.meeting_key)===L.mk);Ee&&p(Ee)}},[f]),Ce.useEffect(()=>{const L=Do();if(L.sk&&m.length&&!_){const Ee=m.find(tt=>String(tt.session_key)===L.sk);Ee&&S(Ee)}},[m]),Ce.useEffect(()=>{const L=Do();L.d1&&L.d2&&M.length&&!x&&!D&&(y(Number(L.d1)),w(Number(L.d2)))},[M]),Ce.useEffect(()=>{const L=Do();L.l1&&X.length&&!R&&k(Number(L.l1))},[X]),Ce.useEffect(()=>{const L=Do();L.l2&&T.length&&!O&&F(Number(L.l2))},[T]);const ue=Ce.useCallback(async()=>{if(!(!_||!x||!D||!R||!O)){Ge("Fetching telemetry..."),ce(""),P(0);try{const L=_.session_key,Ee=X.find(kn=>kn.lap_number===R),tt=T.find(kn=>kn.lap_number===O);if(!(Ee!=null&&Ee.date_start)||!(tt!=null&&tt.date_start)){ce("Lap timing unavailable."),Ge("");return}const jt=new Date(new Date(Ee.date_start).getTime()+(Ee.lap_duration||120)*1e3).toISOString(),Ot=new Date(new Date(tt.date_start).getTime()+(tt.lap_duration||120)*1e3).toISOString();P(20);const[cn,rn]=await Promise.all([xc(L,x,Ee.date_start,jt),xc(L,D,tt.date_start,Ot)]);P(60);const[ji,oi]=await Promise.all([yc(L,x,Ee.date_start,jt),yc(L,D,tt.date_start,Ot)]);if(cn.length<5||rn.length<5){ce("Insufficient data."),Ge(""),P(void 0);return}ge(cn),he(rn),oe(ji),$(oi),I(Os(cn)),De(0),Le(!1),P(100),setTimeout(()=>{Ge(""),P(void 0)},300)}catch(L){ce(L.message),Ge(""),P(void 0)}}},[_,x,D,R,O,X,T]),de=Ce.useCallback(async L=>{Oe(!1),Ge("Loading preset..."),ce(""),P(0),bt.current=!0;try{const tt=(await Kg(L.year)).filter(un=>un.meeting_name),jt=tt.find(un=>un.meeting_name&&un.meeting_name.toLowerCase().includes(L.meeting.toLowerCase().replace(" grand prix","").trim()));if(!jt)throw new Error(`Meeting "${L.meeting}" not found for ${L.year}`);P(10);const cn=(await Zg(jt.meeting_key)).filter(un=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(un.session_name)),rn=cn.find(un=>un.session_name===L.session);if(!rn)throw new Error(`Session "${L.session}" not found`);P(20);const ji=await Jg(rn.session_key),oi=new Set,kn=ji.filter(un=>oi.has(un.driver_number)?!1:(oi.add(un.driver_number),!0));P(30);const[Yn,ai]=await Promise.all([vc(rn.session_key,L.d1),vc(rn.session_key,L.d2)]),Rn=Sc(Yn),$n=Sc(ai);if(!Rn||!$n)throw new Error("No valid laps found for these drivers");P(45);const[or,Pi]=await Promise.all([_c(rn.session_key,L.d1).catch(()=>[]),_c(rn.session_key,L.d2).catch(()=>[])]);l(L.year),u(tt),p(jt),g(cn),S(rn),A(kn),y(L.d1),w(L.d2),_e(Yn),N(ai),k(Rn.lap_number),F($n.lap_number),Ae(or),pe(Pi),P(50),Ge("Fetching telemetry...");const ar=rn.session_key,Kn=new Date(new Date(Rn.date_start).getTime()+(Rn.lap_duration||120)*1e3).toISOString(),li=new Date(new Date($n.date_start).getTime()+($n.lap_duration||120)*1e3).toISOString();P(60);const[Xi,lr]=await Promise.all([xc(ar,L.d1,Rn.date_start,Kn),xc(ar,L.d2,$n.date_start,li)]);P(80);const[cr,ci]=await Promise.all([yc(ar,L.d1,Rn.date_start,Kn),yc(ar,L.d2,$n.date_start,li)]);if(Xi.length<5||lr.length<5)throw new Error("Insufficient location data for these laps");ge(Xi),he(lr),oe(cr),$(ci),I(Os(Xi)),De(0),Le(!1),P(100),setTimeout(()=>{Ge(""),P(void 0),bt.current=!1},300)}catch(Ee){ce(Ee.message),Ge(""),P(void 0),bt.current=!1}},[]),ae=Ce.useCallback(()=>{var Ee;if(!d||!_)return;const L=Iw({year:o,mk:d.meeting_key,sk:_.session_key,d1:x,d2:D,l1:R,l2:O});(Ee=navigator.clipboard)==null||Ee.writeText(L).then(()=>{rt("Copied!"),setTimeout(()=>rt(""),2e3)}),window.history.replaceState(null,"",L.split(window.location.origin)[1])},[o,d,_,x,D,R,O]);Uw(Ye,j,Se,W,me,K,le,xe,(q==null?void 0:q.name_acronym)||"",(re==null?void 0:re.name_acronym)||"",V,we,e),Ce.useEffect(()=>{if(!Ne){st.current=null,Ze.current&&cancelAnimationFrame(Ze.current);return}function L(Ee){st.current||(st.current=Ee);const tt=(Ee-st.current)/1e3;st.current=Ee,De(jt=>{const Ot=jt+tt*.015*it;return Ot>=1?B?0:(Le(!1),1):Ot}),Ze.current=requestAnimationFrame(L)}return Ze.current=requestAnimationFrame(L),()=>{Ze.current&&cancelAnimationFrame(Ze.current)}},[Ne,it,B]);const We=Ce.useRef(0);Ce.useEffect(()=>{const L=Ee=>{if(!(Ee.target.tagName==="SELECT"||Ee.target.tagName==="INPUT")&&(Ee.code==="Space"&&(Ee.preventDefault(),j&&Le(tt=>!tt)),Ee.code==="KeyR"&&(De(0),Le(!1)),Ee.code==="KeyT"&&Pe(tt=>!tt),Ee.code==="KeyC"&&Fe(tt=>gc[(gc.indexOf(tt)+1)%gc.length]),Ee.code==="KeyL"&&Ue(tt=>!tt),Ee.code==="ArrowRight"&&De(tt=>Math.min(1,tt+.01)),Ee.code==="ArrowLeft")){const tt=Date.now();tt-We.current<300?De(jt=>Math.max(0,jt-.05)):De(jt=>Math.max(0,jt-.01)),We.current=tt}};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[j]);const ot=(lt||He||ze)&&H.jsx("div",{onClick:()=>{Oe(!1),ct(!1),dt(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),ut=lt&&H.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:J.carbon,border:`1px solid ${J.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":460,maxHeight:"80vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${J.borderLight}`},children:[H.jsxs("div",{children:[H.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:J.sans,letterSpacing:"0.05em"},children:"MEMORABLE BATTLES"}),H.jsx("div",{style:{fontSize:10,color:J.textMuted,marginTop:2},children:"20 iconic qualifying & race comparisons"})]}),H.jsx("button",{onClick:()=>Oe(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),H.jsx("div",{style:{overflowY:"auto",padding:"12px 20px 20px",flex:1},children:["2025","2024","2023"].map(L=>{const Ee=Lw.filter(tt=>tt.cat===L);return Ee.length?H.jsxs("div",{style:{marginBottom:16},children:[H.jsxs("div",{style:{fontSize:11,fontWeight:900,color:J.red,letterSpacing:"0.12em",marginBottom:8,fontFamily:J.mono,borderBottom:`1px solid ${J.red}22`,paddingBottom:4},children:[L," SEASON"]}),Ee.map((tt,jt)=>H.jsx("button",{onClick:()=>de(tt),style:{display:"block",width:"100%",textAlign:"left",padding:"10px 12px",marginBottom:4,fontSize:12,fontFamily:J.mono,borderLeft:`3px solid ${J.red}`,lineHeight:1.4},children:tt.label},jt))]},L):null})})]}),qe=Ce.useMemo(()=>V!=null&&V.length?Math.min(...V.filter(L=>L.speed>5).map(L=>L.speed)):0,[V]),Et=Ce.useMemo(()=>U!=null&&U.length?Math.min(...U.filter(L=>L.speed>5).map(L=>L.speed)):0,[U]),vt=Ce.useMemo(()=>V!=null&&V.length?V.filter(L=>L.throttle>=95).length/V.length*100:0,[V]),_t=Ce.useMemo(()=>U!=null&&U.length?U.filter(L=>L.throttle>=95).length/U.length*100:0,[U]),Ht=Ce.useMemo(()=>V!=null&&V.length?V.filter(L=>L.brake>0).length/V.length*100:0,[V]),hn=Ce.useMemo(()=>U!=null&&U.length?U.filter(L=>L.brake>0).length/U.length*100:0,[U]),Gt=Ce.useMemo(()=>V!=null&&V.length?V.filter(L=>L.throttle<5&&L.brake===0).length/V.length*100:0,[V]),mn=Ce.useMemo(()=>U!=null&&U.length?U.filter(L=>L.throttle<5&&L.brake===0).length/U.length*100:0,[U]),Dt=Ce.useMemo(()=>{if(!(V!=null&&V.length))return 0;let L=0;for(let Ee=1;Ee<V.length;Ee++)V[Ee].drs>=10&&V[Ee-1].drs<10&&L++;return L},[V]),St=Ce.useMemo(()=>{if(!(U!=null&&U.length))return 0;let L=0;for(let Ee=1;Ee<U.length;Ee++)U[Ee].drs>=10&&U[Ee-1].drs<10&&L++;return L},[U]),gn=Ce.useMemo(()=>V!=null&&V.length?Math.max(...V.map(L=>L.rpm||0)):0,[V]),Ft=Ce.useMemo(()=>U!=null&&U.length?Math.max(...U.map(L=>L.rpm||0)):0,[U]),qn=He&&j&&H.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:J.carbon,border:`1px solid ${J.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":480,maxHeight:"85vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${J.borderLight}`},children:[H.jsxs("div",{children:[H.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:J.sans,letterSpacing:"0.05em"},children:"LAP ANALYSIS"}),H.jsx("div",{style:{fontSize:10,color:J.textMuted,marginTop:2},children:"Detailed telemetry comparison"})]}),H.jsx("button",{onClick:()=>ct(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),H.jsx("div",{style:{overflowY:"auto",padding:"0 20px 20px"},children:H.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:J.mono},children:[H.jsx("thead",{children:H.jsxs("tr",{style:{color:J.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[H.jsx("th",{style:{textAlign:"left",padding:"10px 8px 6px",borderBottom:`1px solid ${J.red}22`},children:"METRIC"}),H.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:K,borderBottom:`2px solid ${K}44`},children:(q==null?void 0:q.name_acronym)||"D1"}),H.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:le,borderBottom:`2px solid ${le}44`},children:(re==null?void 0:re.name_acronym)||"D2"}),H.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:J.textMuted,borderBottom:`1px solid ${J.borderLight}`,width:50},children:"Δ"})]})}),H.jsx("tbody",{children:[{m:"LAP TIME",v1:te!=null&&te.lap_duration?Cs(te.lap_duration):"—",v2:Me!=null&&Me.lap_duration?Cs(Me.lap_duration):"—",d:te!=null&&te.lap_duration&&(Me!=null&&Me.lap_duration)?te.lap_duration-Me.lap_duration:null,unit:"s"},{m:"TOP SPEED",v1:Math.round(zn),v2:Math.round(rr),d:zn-rr,unit:"",inv:!0},{m:"AVG SPEED",v1:Math.round(b),v2:Math.round(ne),d:b-ne,unit:"",inv:!0},{m:"MIN SPEED",v1:Math.round(qe),v2:Math.round(Et),d:qe-Et,unit:"",inv:!0},{m:"SECTOR 1",v1:((br=te==null?void 0:te.duration_sector_1)==null?void 0:br.toFixed(3))||"—",v2:((Cn=Me==null?void 0:Me.duration_sector_1)==null?void 0:Cn.toFixed(3))||"—",d:te!=null&&te.duration_sector_1&&(Me!=null&&Me.duration_sector_1)?te.duration_sector_1-Me.duration_sector_1:null,unit:"s"},{m:"SECTOR 2",v1:((Wi=te==null?void 0:te.duration_sector_2)==null?void 0:Wi.toFixed(3))||"—",v2:((as=Me==null?void 0:Me.duration_sector_2)==null?void 0:as.toFixed(3))||"—",d:te!=null&&te.duration_sector_2&&(Me!=null&&Me.duration_sector_2)?te.duration_sector_2-Me.duration_sector_2:null,unit:"s"},{m:"SECTOR 3",v1:((sr=te==null?void 0:te.duration_sector_3)==null?void 0:sr.toFixed(3))||"—",v2:((Pr=Me==null?void 0:Me.duration_sector_3)==null?void 0:Pr.toFixed(3))||"—",d:te!=null&&te.duration_sector_3&&(Me!=null&&Me.duration_sector_3)?te.duration_sector_3-Me.duration_sector_3:null,unit:"s"},{m:"FULL THROTTLE",v1:`${vt.toFixed(1)}%`,v2:`${_t.toFixed(1)}%`,d:vt-_t,unit:"%",inv:!0},{m:"BRAKING",v1:`${Ht.toFixed(1)}%`,v2:`${hn.toFixed(1)}%`,d:Ht-hn,unit:"%"},{m:"COASTING",v1:`${Gt.toFixed(1)}%`,v2:`${mn.toFixed(1)}%`,d:Gt-mn,unit:"%"},{m:"DRS OPENS",v1:Dt,v2:St,d:null,unit:""},{m:"MAX RPM",v1:gn?Math.round(gn).toLocaleString():"—",v2:Ft?Math.round(Ft).toLocaleString():"—",d:null,unit:""},{m:"TYRE",v1:yt||"—",v2:Ut||"—",d:null,unit:""}].map(L=>{const Ee=L.d!==null?L.inv?L.d>0?1:L.d<0?2:0:L.d<0?1:L.d>0?2:0:0;return H.jsxs("tr",{style:{borderBottom:`1px solid ${J.borderLight}`},children:[H.jsx("td",{style:{padding:"7px 8px",color:J.textDim,letterSpacing:"0.04em",fontSize:10},children:L.m}),H.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Ee===1?K:J.text,background:Ee===1?`${K}08`:"transparent"},children:L.v1}),H.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Ee===2?le:J.text,background:Ee===2?`${le}08`:"transparent"},children:L.v2}),H.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontSize:10,color:L.d!==null?L.d>0?L.inv?J.green:J.red:L.d<0?L.inv?J.red:J.green:J.textMuted:J.textMuted},children:L.d!==null?`${L.d>0?"+":""}${typeof L.d=="number"?Math.abs(L.d)<1?L.d.toFixed(3):Math.round(L.d):L.d}`:"—"})]},L.m)})})]})})]}),Yt=ze&&H.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:J.carbon,borderLeft:`1px solid ${J.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${J.borderLight}`},children:[H.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:J.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),H.jsx("button",{onClick:()=>dt(!1),style:{marginLeft:"auto"},children:"✕"})]}),H.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(q==null?void 0:q.name_acronym)||"D1",col:K,laps:X,sel:R,set:k},{lab:(re==null?void 0:re.name_acronym)||"D2",col:le,laps:T,sel:O,set:F}].map(L=>{const Ee=L.laps.filter(Ot=>Ot.lap_duration>10),tt=Ee.length?Math.min(...Ee.map(Ot=>Ot.lap_duration)):0,jt=Ee.length?Math.max(...Ee.map(Ot=>Ot.lap_duration)):0;return H.jsxs("div",{style:{marginBottom:18},children:[H.jsx("div",{style:{fontSize:12,fontWeight:700,color:L.col,marginBottom:8,fontFamily:J.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${L.col}`,paddingLeft:8},children:L.lab}),Ee.sort((Ot,cn)=>Ot.lap_duration-cn.lap_duration).map(Ot=>{const cn=jt>tt?(Ot.lap_duration-tt)/(jt-tt):0;return H.jsxs("div",{onClick:()=>L.set(Ot.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Ot.lap_number===L.sel?`${L.col}18`:"transparent",borderLeft:Ot.lap_number===L.sel?`2px solid ${L.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:J.mono},children:[H.jsxs("span",{style:{width:30,color:J.textMuted},children:["L",Ot.lap_number]}),H.jsx("span",{style:{fontWeight:Ot.lap_duration===tt?800:400,color:Ot.lap_duration===tt?J.green:J.text},children:Cs(Ot.lap_duration)}),Ot.lap_duration===tt&&H.jsx("span",{style:{fontSize:9,color:J.green,fontWeight:700,background:`${J.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),H.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:J.borderLight,borderRadius:2,overflow:"hidden"},children:H.jsx("div",{style:{height:"100%",width:`${(1-cn)*100}%`,background:cn<.1?J.green:cn>.7?J.red:J.yellow,borderRadius:2}})})]},Ot.lap_number)})]},L.lab)})})]});return H.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:J.carbon,color:J.text,fontFamily:J.sans,overflow:"hidden"},children:[H.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${J.red}44;border-radius:2px}
        select,button{font-family:${J.sans}}
        select{background:${J.inputBg};color:${J.text};border:1px solid ${J.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${J.red}88}
        button{background:${J.cardBg};color:${J.text};border:1px solid ${J.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${J.red}88;background:${J.carbonMid}}
        .f1-btn{background:${J.red};border-color:${J.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${J.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${J.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),ot,ut,qn,Yt,H.jsxs("div",{style:{display:"flex",alignItems:"stretch",borderBottom:`2px solid ${J.red}`,background:`linear-gradient(180deg, #111118 0%, ${J.carbon} 100%)`,zIndex:10,position:"relative"},children:[H.jsx("div",{style:{width:s?4:5,background:J.red,flexShrink:0}}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:16,padding:s?"8px 10px":"0 20px",flex:1,flexWrap:"wrap",minHeight:s?"auto":48},children:[H.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:8,textDecoration:"none"},children:[H.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"F1 Stories",style:{height:s?28:34,width:"auto"},onError:L=>{L.target.style.display="none"}}),H.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1},children:[H.jsx("span",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",letterSpacing:"0.03em"},children:"F1 STORIES"}),H.jsx("span",{style:{fontSize:s?8:9,fontWeight:400,color:J.textMuted,letterSpacing:"0.12em",textTransform:"uppercase"},children:"Ghost Car Lab"})]})]}),!s&&H.jsx("div",{style:{display:"flex",gap:4,marginLeft:8},children:[{label:"Blog",href:"https://f1stories.gr/blog-module/blog/index.html"},{label:"YouTube",href:"https://www.youtube.com/@F1_Stories_Original"},{label:"Standings",href:"https://f1stories.gr/standings/"}].map(L=>H.jsx("a",{href:L.href,target:"_blank",rel:"noopener noreferrer",style:{fontSize:10,color:J.textDim,textDecoration:"none",padding:"3px 8px",borderRadius:3,fontWeight:600,letterSpacing:"0.05em",transition:"color 0.15s"},onMouseEnter:Ee=>Ee.target.style.color="#fff",onMouseLeave:Ee=>Ee.target.style.color=J.textDim,children:L.label.toUpperCase()},L.label))}),d&&H.jsxs("span",{style:{fontSize:11,color:J.textDim,fontWeight:600,letterSpacing:"0.05em",marginLeft:s?0:8},children:[(Ha=d.meeting_name)==null?void 0:Ha.replace("Grand Prix","GP")," ",o]}),H.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5},children:[H.jsx("button",{onClick:()=>Oe(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),_&&H.jsx("button",{onClick:ae,style:{fontSize:10,padding:"4px 10px"},children:Mt||"SHARE"}),j&&H.jsx("button",{onClick:()=>ct(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),j&&H.jsx("button",{onClick:()=>dt(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"}),H.jsx("button",{onClick:r,style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:e?"☀️":"🌙"})]})]})]}),H.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${J.borderLight}`,background:J.carbonLight},children:[H.jsx("select",{value:o,onChange:L=>l(Number(L.target.value)),children:[2026,2025,2024,2023].map(L=>H.jsx("option",{value:L,children:L},L))}),H.jsxs("select",{value:(d==null?void 0:d.meeting_key)||"",onChange:L=>p(f.find(Ee=>Ee.meeting_key===Number(L.target.value))||null),style:{minWidth:s?110:155},children:[H.jsx("option",{value:"",children:"Grand Prix"}),f.map(L=>H.jsx("option",{value:L.meeting_key,children:L.meeting_name},L.meeting_key))]}),H.jsxs("select",{value:(_==null?void 0:_.session_key)||"",onChange:L=>S(m.find(Ee=>Ee.session_key===Number(L.target.value))||null),disabled:!m.length,style:{minWidth:s?85:115},children:[H.jsx("option",{value:"",children:"Session"}),m.map(L=>H.jsx("option",{value:L.session_key,children:L.session_name},L.session_key))]}),!s&&H.jsx("div",{style:{width:1,height:20,background:`${J.red}33`}}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[H.jsx("div",{style:{width:3,height:18,background:K,borderRadius:1}}),H.jsxs("select",{value:x||"",onChange:L=>{y(Number(L.target.value)),k(null),_e([])},disabled:!M.length,style:{minWidth:s?68:100},children:[H.jsx("option",{value:"",children:"Driver 1"}),M.map(L=>H.jsx("option",{value:L.driver_number,children:L.name_acronym||`#${L.driver_number}`},L.driver_number))]}),X.length>0&&H.jsxs("select",{value:R||"",onChange:L=>k(Number(L.target.value)),style:{width:s?56:72},children:[H.jsx("option",{value:"",children:"Lap"}),X.filter(L=>L.lap_duration>10).map(L=>H.jsxs("option",{value:L.lap_number,children:["L",L.lap_number]},L.lap_number))]})]}),H.jsx("span",{style:{color:J.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[H.jsx("div",{style:{width:3,height:18,background:le,borderRadius:1}}),H.jsxs("select",{value:D||"",onChange:L=>{w(Number(L.target.value)),F(null),N([])},disabled:!M.length,style:{minWidth:s?68:100},children:[H.jsx("option",{value:"",children:"Driver 2"}),M.map(L=>H.jsx("option",{value:L.driver_number,children:L.name_acronym||`#${L.driver_number}`},L.driver_number))]}),T.length>0&&H.jsxs("select",{value:O||"",onChange:L=>F(Number(L.target.value)),style:{width:s?56:72},children:[H.jsx("option",{value:"",children:"Lap"}),T.filter(L=>L.lap_duration>10).map(L=>H.jsxs("option",{value:L.lap_number,children:["L",L.lap_number]},L.lap_number))]})]}),H.jsx("button",{className:"f1-btn",onClick:ue,disabled:!x||!D||!R||!O||!!Ve,children:Ve?"...":"COMPARE"})]}),C&&H.jsxs("div",{style:{padding:"8px 18px",background:`${J.red}11`,borderBottom:`1px solid ${J.red}22`,fontSize:12,color:J.red,display:"flex",alignItems:"center",gap:8},children:[H.jsx("span",{style:{flex:1},children:C}),H.jsx("button",{onClick:()=>ce(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),Ve&&H.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${J.borderLight}`},children:[H.jsx("div",{style:{fontSize:11,color:J.textDim,fontFamily:J.mono,marginBottom:4},children:Ve}),xt!==void 0&&H.jsx("div",{style:{height:2,background:J.borderLight,borderRadius:1,overflow:"hidden"},children:H.jsx("div",{style:{height:"100%",width:`${xt}%`,background:J.red,borderRadius:1,transition:"width .3s"}})})]}),s&&j&&H.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${J.borderLight}`},children:["3d","telemetry"].map(L=>H.jsx("button",{onClick:()=>mt(L),style:{flex:1,borderRadius:0,borderBottom:Te===L?`2px solid ${J.red}`:"2px solid transparent",background:Te===L?J.cardBg:"transparent",fontWeight:Te===L?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:L==="3d"?"Track":"Telemetry"},L))}),H.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${j?175:130}px)`},children:[(!s||Te==="3d")&&H.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[H.jsx("div",{ref:Ye,style:{width:"100%",height:"100%",background:J.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),j&&H.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[gc.map(L=>H.jsx("button",{onClick:()=>Fe(L),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:xe===L?J.red:J.overlay,color:xe===L?"#fff":J.textDim,borderColor:xe===L?J.red:J.borderLight,fontWeight:700},children:Dw[L]},L)),H.jsx("div",{style:{width:1,height:16,background:J.borderLight}}),H.jsx("button",{onClick:()=>Xe(L=>L==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:we==="heatmap"?"#0088ff":J.overlay,color:we==="heatmap"?"#fff":J.textDim,borderColor:we==="heatmap"?"#0088ff":J.borderLight,fontWeight:700},children:"🌡 Speed"})]}),j&&!s&&H.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:H.jsx(Fw,{tp:j,l1:Se,l2:W,prog:me,c1:K,c2:le})}),$e!==null&&j&&H.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:H.jsxs("div",{style:{background:J.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${J.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[H.jsx("div",{style:{fontSize:8,color:J.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),H.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:J.mono,color:$e>0?J.red:J.green,lineHeight:1.1},children:[$e>0?"+":"",$e.toFixed(3),H.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),H.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[H.jsxs("span",{style:{fontSize:10,color:K,fontFamily:J.mono,fontWeight:700},children:[q==null?void 0:q.name_acronym," ",Cs(te==null?void 0:te.lap_duration)]}),H.jsxs("span",{style:{fontSize:10,color:le,fontFamily:J.mono,fontWeight:700},children:[re==null?void 0:re.name_acronym," ",Cs(Me==null?void 0:Me.lap_duration)]})]})]})}),j&&te&&Me&&H.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[H.jsx(ud,{s:1,t1:te.duration_sector_1,t2:Me.duration_sector_1,c1:K,c2:le}),H.jsx(ud,{s:2,t1:te.duration_sector_2,t2:Me.duration_sector_2,c1:K,c2:le}),H.jsx(ud,{s:3,t1:te.duration_sector_3,t2:Me.duration_sector_3,c1:K,c2:le})]}),!j&&!Ve&&H.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[H.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:60,marginBottom:16,opacity:.6},onError:L=>{L.target.style.display="none"}}),H.jsx("div",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",marginBottom:4,letterSpacing:"0.04em"},children:"GHOST CAR LAB"}),H.jsx("div",{style:{fontSize:11,color:J.red,fontWeight:600,marginBottom:14,letterSpacing:"0.1em"},children:"by F1 STORIES"}),H.jsx("div",{style:{fontSize:12,color:J.textDim,maxWidth:360,lineHeight:1.6},children:"Compare qualifying laps in 3D with real telemetry data. Select a Grand Prix, session & two drivers — or try ⚡ Presets."}),H.jsxs("div",{style:{marginTop:18,display:"flex",gap:8,justifyContent:"center"},children:[H.jsx("button",{onClick:()=>Oe(!0),className:"f1-btn",style:{padding:"8px 20px",fontSize:12},children:"⚡ QUICK START"}),H.jsx("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,color:J.textDim,textDecoration:"none",padding:"8px 14px",border:`1px solid ${J.border}`,borderRadius:4,fontWeight:600},children:"f1stories.gr →"})]})]})]}),(!s&&ve&&j||s&&Te==="telemetry"&&j)&&H.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${J.borderLight}`,background:J.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:H.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[H.jsx("div",{style:{display:"flex",gap:6,marginBottom:10},children:[{di:q,co:K,ct:Vi,tire:yt},{di:re,co:le,ct:Rr,tire:Ut}].map((L,Ee)=>{var tt;return H.jsxs("div",{style:{flex:1,background:J.cardBg,borderRadius:6,padding:"8px 8px 6px",borderTop:`3px solid ${L.co}`,position:"relative",textAlign:"center"},children:[H.jsx("div",{style:{fontSize:12,fontWeight:900,color:L.co,fontFamily:J.mono,letterSpacing:"0.05em"},children:((tt=L.di)==null?void 0:tt.name_acronym)||"—"}),H.jsxs("svg",{width:"90",height:"55",viewBox:"0 0 90 55",style:{margin:"4px auto 2px"},children:[H.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:J.border,strokeWidth:"4",strokeLinecap:"round"}),H.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:L.co,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:`${Math.min(L.ct.speed,360)/360*110} 110`}),H.jsx("text",{x:"45",y:"42",textAnchor:"middle",fill:"#fff",fontSize:"18",fontWeight:"900",fontFamily:J.mono,children:Math.round(L.ct.speed)}),H.jsx("text",{x:"45",y:"52",textAnchor:"middle",fill:J.textMuted,fontSize:"7",fontFamily:J.mono,children:"KM/H"})]}),H.jsxs("div",{style:{display:"flex",gap:3,justifyContent:"center",marginTop:2},children:[H.jsxs("div",{style:{width:28,textAlign:"center"},children:[H.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:J.border,borderRadius:2,position:"relative",overflow:"hidden"},children:H.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:`${L.ct.throttle}%`,background:J.green,borderRadius:2,transition:"height 0.1s"}})}),H.jsx("div",{style:{fontSize:7,color:J.textMuted,fontFamily:J.mono,marginTop:1},children:"THR"})]}),H.jsxs("div",{style:{width:28,textAlign:"center"},children:[H.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:J.border,borderRadius:2,position:"relative",overflow:"hidden"},children:H.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:L.ct.brake>0?"100%":"0%",background:J.red,borderRadius:2,transition:"height 0.1s"}})}),H.jsx("div",{style:{fontSize:7,color:J.textMuted,fontFamily:J.mono,marginTop:1},children:"BRK"})]}),H.jsxs("div",{style:{width:28,textAlign:"center"},children:[H.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#fff",fontFamily:J.mono,lineHeight:"20px"},children:L.ct.n_gear??L.ct.gear??"—"}),H.jsx("div",{style:{fontSize:7,color:J.textMuted,fontFamily:J.mono,marginTop:1},children:"GEAR"})]})]}),L.tire&&H.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",alignItems:"center",gap:2},children:[H.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:bw[L.tire]||"#888"}}),H.jsx("span",{style:{fontSize:8,fontFamily:J.mono,color:J.textMuted},children:L.tire})]}),L.ct.drs>=10&&H.jsx("div",{style:{position:"absolute",bottom:4,right:6,fontSize:8,fontWeight:700,color:J.green,fontFamily:J.mono,background:`${J.green}15`,padding:"1px 4px",borderRadius:2,animation:"pulse 1s infinite"},children:"DRS"})]},Ee)})}),j&&H.jsxs("div",{style:{marginBottom:10},children:[H.jsx("div",{style:{fontSize:10,color:J.textMuted,fontFamily:J.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"ELEVATION"}),H.jsx("svg",{width:"100%",height:"40",viewBox:"0 0 300 40",preserveAspectRatio:"none",style:{borderRadius:3,background:J.cardBg},children:(()=>{const L=j.map(rn=>rn.y),Ee=Math.min(...L),jt=Math.max(...L)-Ee||1,Ot=Math.max(1,Math.floor(j.length/150));let cn="";for(let rn=0;rn<j.length;rn+=Ot){const ji=rn/(j.length-1)*300,oi=38-(L[rn]-Ee)/jt*34;cn+=(rn===0?"M":"L")+`${ji},${oi}`}return H.jsxs(H.Fragment,{children:[H.jsx("path",{d:cn+"L300,40L0,40Z",fill:`${J.red}15`}),H.jsx("path",{d:cn,fill:"none",stroke:J.red,strokeWidth:"1.5",opacity:"0.6"}),H.jsx("line",{x1:me*300,y1:"0",x2:me*300,y2:"40",stroke:"#fff",strokeWidth:"1",opacity:"0.5"})]})})()})]}),j&&H.jsxs("div",{style:{marginBottom:10},children:[H.jsx("div",{style:{fontSize:10,color:J.textMuted,fontFamily:J.mono,letterSpacing:"0.1em",marginBottom:4,fontWeight:700},children:"G-FORCE"}),H.jsx("div",{style:{display:"flex",gap:6},children:[{di:q,co:K,ct:Vi,tel:V},{di:re,co:le,ct:Rr,tel:U}].map((L,Ee)=>{var cr;const tt=L.tel||[],jt=Math.min(Math.floor(me*(tt.length-1)),tt.length-1),Ot=tt[Math.max(0,jt-2)]||{};tt[Math.max(0,jt-1)];const cn=tt[jt]||{};tt[Math.min(jt+1,tt.length-1)];const ji=((cn.speed||0)-(Ot.speed||0))/3.6/(.54*9.81),oi=jt>2?Fs(L.tel?Os(tt.map((ci,un)=>({x:un,y:0,z:0}))):j,Math.max(0,me-.01)):{x:0,z:0},kn=Fs(j,me),Yn=Fs(j,Math.min(1,me+.01)),ai=kn.x-oi.x,Rn=kn.z-oi.z,$n=Yn.x-kn.x,or=Yn.z-kn.z,ar=(ai*or-Rn*$n)*(cn.speed||0)*4e-4,Kn=(ci,un,qi)=>Math.max(un,Math.min(qi,ci)),li=Kn(ar,-5,5),Xi=Kn(ji,-5,5),lr=Math.sqrt(li*li+Xi*Xi);return H.jsxs("div",{style:{flex:1,background:J.cardBg,borderRadius:6,padding:"6px 4px 4px",textAlign:"center"},children:[H.jsxs("svg",{width:"100%",height:"90",viewBox:"-6 -6 12 12",style:{display:"block"},children:[H.jsx("defs",{children:H.jsxs("radialGradient",{id:`gGrad${Ee}`,children:[H.jsx("stop",{offset:"0%",stopColor:L.co,stopOpacity:"0.06"}),H.jsx("stop",{offset:"100%",stopColor:L.co,stopOpacity:"0"})]})}),H.jsx("circle",{cx:"0",cy:"0",r:"5.5",fill:`url(#gGrad${Ee})`}),[1,2,3,4,5].map(ci=>H.jsx("circle",{cx:"0",cy:"0",r:ci,fill:"none",stroke:ci<=2?`${J.textMuted}33`:`${J.textMuted}18`,strokeWidth:"0.06"},ci)),H.jsx("line",{x1:"-5.5",y1:"0",x2:"5.5",y2:"0",stroke:J.textMuted,strokeWidth:"0.04",opacity:"0.4"}),H.jsx("line",{x1:"0",y1:"-5.5",x2:"0",y2:"5.5",stroke:J.textMuted,strokeWidth:"0.04",opacity:"0.4"}),H.jsx("text",{x:"5.3",y:"-0.3",textAnchor:"end",fill:J.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"LAT"}),H.jsx("text",{x:"0.3",y:"-5",textAnchor:"start",fill:J.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"ACC"}),H.jsx("text",{x:"0.3",y:"5.5",textAnchor:"start",fill:J.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"BRK"}),lr>.2&&H.jsx("circle",{cx:"0",cy:"0",r:Math.min(lr,5),fill:"none",stroke:L.co,strokeWidth:"0.08",opacity:"0.25"}),[.92,.84,.76,.68].map((ci,un)=>{const qi=Math.max(0,Math.floor((me-(un+1)*.003)*(tt.length-1))),ls=tt[qi]||{},Lr=tt[Math.max(0,qi-2)]||{},Gc=((ls.speed||0)-(Lr.speed||0))/3.6/(.54*9.81);return H.jsx("circle",{cx:Kn(ar*ci,-5,5),cy:Kn(-Gc,-5,5),r:.25-un*.04,fill:L.co,opacity:.15+un*-.03},un)}),H.jsx("circle",{cx:Kn(li,-5,5),cy:Kn(-Xi,-5,5),r:"0.4",fill:L.co,opacity:"0.9"}),H.jsx("circle",{cx:Kn(li,-5,5),cy:Kn(-Xi,-5,5),r:"0.6",fill:"none",stroke:L.co,strokeWidth:"0.08",opacity:"0.4"})]}),H.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:2},children:[H.jsxs("span",{style:{fontSize:13,fontWeight:900,color:L.co,fontFamily:J.mono},children:[lr.toFixed(1),H.jsx("span",{style:{fontSize:8,fontWeight:400,color:J.textMuted},children:"G"})]}),H.jsx("span",{style:{fontSize:9,color:J.textDim,fontFamily:J.mono,alignSelf:"center"},children:((cr=L.di)==null?void 0:cr.name_acronym)||"—"})]})]},Ee)})})]}),H.jsxs("div",{style:{fontSize:10,color:J.textMuted,fontFamily:J.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:["SPEED ",H.jsx("span",{style:{color:J.textMuted,fontWeight:400},children:"(km/h)"})]}),H.jsx(cd,{data1:Ri,data2:ye,color1:K,color2:le,maxVal:370,prog:me}),H.jsxs("div",{style:{fontSize:10,color:J.textMuted,fontFamily:J.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:["THROTTLE ",H.jsx("span",{style:{color:J.textMuted,fontWeight:400},children:"(%)"})]}),H.jsx(cd,{data1:si,data2:bi,color1:K,color2:le,maxVal:100,prog:me,fillColor:`${J.green}10`}),H.jsx("div",{style:{fontSize:10,color:J.textMuted,fontFamily:J.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),H.jsx(cd,{data1:_i,data2:ir,color1:K,color2:le,maxVal:100,h:35,prog:me,fillColor:`${J.red}10`})]})})]}),j&&H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${J.carbonLight}, ${J.carbon})`,borderTop:`1px solid ${J.red}22`},children:[H.jsx("button",{onClick:()=>{De(0),Le(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),H.jsx("button",{onClick:()=>Le(!Ne),style:{padding:"3px 9px",fontSize:13,background:Ne?`${J.red}33`:J.cardBg,borderColor:Ne?J.red:J.border},children:Ne?"⏸":"▶"}),H.jsx("button",{onClick:()=>Ue(!B),style:{padding:"3px 7px",opacity:B?1:.35,fontSize:11},children:"🔁"}),H.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:me,onChange:L=>De(parseFloat(L.target.value)),style:{flex:1,height:4,accentColor:J.red}}),H.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[H.jsx("span",{style:{fontSize:10,color:K,fontFamily:J.mono,fontWeight:700,lineHeight:1.2},children:Cs(ft)}),H.jsx("span",{style:{fontSize:10,color:le,fontFamily:J.mono,fontWeight:700,lineHeight:1.2},children:Cs(Rt)})]}),H.jsxs("select",{value:it,onChange:L=>Je(parseFloat(L.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[H.jsx("option",{value:.25,children:".25x"}),H.jsx("option",{value:.5,children:".5x"}),H.jsx("option",{value:1,children:"1x"}),H.jsx("option",{value:2,children:"2x"}),H.jsx("option",{value:4,children:"4x"})]}),!s&&H.jsx("button",{onClick:()=>Pe(!ve),style:{padding:"3px 7px",fontSize:10,opacity:ve?1:.35},children:"📊"})]}),H.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:s?8:16,padding:"8px 18px",background:J.carbon,borderTop:`1px solid ${J.borderLight}`,flexWrap:"wrap"},children:[H.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:6,textDecoration:"none"},children:[H.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:18},onError:L=>{L.target.style.display="none"}}),H.jsx("span",{style:{fontSize:10,color:J.textDim,fontWeight:600},children:"f1stories.gr"})]}),H.jsx("span",{style:{fontSize:9,color:J.textMuted},children:"•"}),H.jsx("span",{style:{fontSize:9,color:J.textMuted,fontFamily:J.mono},children:"Data by OpenF1 API"}),H.jsx("span",{style:{fontSize:9,color:J.textMuted},children:"•"}),H.jsxs("span",{style:{fontSize:9,color:J.textMuted},children:["© ",new Date().getFullYear()," F1 Stories"]})]})]})}C_.createRoot(document.getElementById("root")).render(H.jsx(y_.StrictMode,{children:H.jsx(Ow,{})}));
