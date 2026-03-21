(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function i0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ef={exports:{}},ba={},wf={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function __(){if(sm)return zt;sm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function x(U,Q,Ae){this.props=U,this.context=Q,this.refs=A,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function N(U,Q,Ae){this.props=U,this.context=Q,this.refs=A,this.updater=Ae||S}var w=N.prototype=new y;w.constructor=N,M(w,x.prototype),w.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(U,Q,Ae){var J,he={},ge=null,De=null;if(Q!=null)for(J in Q.ref!==void 0&&(De=Q.ref),Q.key!==void 0&&(ge=""+Q.key),Q)B.call(Q,J)&&!O.hasOwnProperty(J)&&(he[J]=Q[J]);var Ne=arguments.length-2;if(Ne===1)he.children=Ae;else if(1<Ne){for(var Le=Array(Ne),ot=0;ot<Ne;ot++)Le[ot]=arguments[ot+2];he.children=Le}if(U&&U.defaultProps)for(J in Ne=U.defaultProps,Ne)he[J]===void 0&&(he[J]=Ne[J]);return{$$typeof:s,type:U,key:ge,ref:De,props:he,_owner:z.current}}function xe(U,Q){return{$$typeof:s,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function T(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function I(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return Q[Ae]})}var Se=/\/+/g;function ve(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?I(""+U.key):Q.toString(36)}function j(U,Q,Ae,J,he){var ge=typeof U;(ge==="undefined"||ge==="boolean")&&(U=null);var De=!1;if(U===null)De=!0;else switch(ge){case"string":case"number":De=!0;break;case"object":switch(U.$$typeof){case s:case e:De=!0}}if(De)return De=U,he=he(De),U=J===""?"."+ve(De,0):J,R(he)?(Ae="",U!=null&&(Ae=U.replace(Se,"$&/")+"/"),j(he,Q,Ae,"",function(ot){return ot})):he!=null&&(T(he)&&(he=xe(he,Ae+(!he.key||De&&De.key===he.key?"":(""+he.key).replace(Se,"$&/")+"/")+U)),Q.push(he)),1;if(De=0,J=J===""?".":J+":",R(U))for(var Ne=0;Ne<U.length;Ne++){ge=U[Ne];var Le=J+ve(ge,Ne);De+=j(ge,Q,Ae,Le,he)}else if(Le=_(U),typeof Le=="function")for(U=Le.call(U),Ne=0;!(ge=U.next()).done;)ge=ge.value,Le=J+ve(ge,Ne++),De+=j(ge,Q,Ae,Le,he);else if(ge==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return De}function fe(U,Q,Ae){if(U==null)return U;var J=[],he=0;return j(U,J,"","",function(ge){return Q.call(Ae,ge,he++)}),J}function W(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var ae={current:null},F={transition:null},Y={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:F,ReactCurrentOwner:z};function X(){throw Error("act(...) is not supported in production builds of React.")}return zt.Children={map:fe,forEach:function(U,Q,Ae){fe(U,function(){Q.apply(this,arguments)},Ae)},count:function(U){var Q=0;return fe(U,function(){Q++}),Q},toArray:function(U){return fe(U,function(Q){return Q})||[]},only:function(U){if(!T(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},zt.Component=x,zt.Fragment=t,zt.Profiler=o,zt.PureComponent=N,zt.StrictMode=r,zt.Suspense=d,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,zt.act=X,zt.cloneElement=function(U,Q,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=M({},U.props),he=U.key,ge=U.ref,De=U._owner;if(Q!=null){if(Q.ref!==void 0&&(ge=Q.ref,De=z.current),Q.key!==void 0&&(he=""+Q.key),U.type&&U.type.defaultProps)var Ne=U.type.defaultProps;for(Le in Q)B.call(Q,Le)&&!O.hasOwnProperty(Le)&&(J[Le]=Q[Le]===void 0&&Ne!==void 0?Ne[Le]:Q[Le])}var Le=arguments.length-2;if(Le===1)J.children=Ae;else if(1<Le){Ne=Array(Le);for(var ot=0;ot<Le;ot++)Ne[ot]=arguments[ot+2];J.children=Ne}return{$$typeof:s,type:U.type,key:he,ref:ge,props:J,_owner:De}},zt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},zt.createElement=$,zt.createFactory=function(U){var Q=$.bind(null,U);return Q.type=U,Q},zt.createRef=function(){return{current:null}},zt.forwardRef=function(U){return{$$typeof:u,render:U}},zt.isValidElement=T,zt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:W}},zt.memo=function(U,Q){return{$$typeof:p,type:U,compare:Q===void 0?null:Q}},zt.startTransition=function(U){var Q=F.transition;F.transition={};try{U()}finally{F.transition=Q}},zt.unstable_act=X,zt.useCallback=function(U,Q){return ae.current.useCallback(U,Q)},zt.useContext=function(U){return ae.current.useContext(U)},zt.useDebugValue=function(){},zt.useDeferredValue=function(U){return ae.current.useDeferredValue(U)},zt.useEffect=function(U,Q){return ae.current.useEffect(U,Q)},zt.useId=function(){return ae.current.useId()},zt.useImperativeHandle=function(U,Q,Ae){return ae.current.useImperativeHandle(U,Q,Ae)},zt.useInsertionEffect=function(U,Q){return ae.current.useInsertionEffect(U,Q)},zt.useLayoutEffect=function(U,Q){return ae.current.useLayoutEffect(U,Q)},zt.useMemo=function(U,Q){return ae.current.useMemo(U,Q)},zt.useReducer=function(U,Q,Ae){return ae.current.useReducer(U,Q,Ae)},zt.useRef=function(U){return ae.current.useRef(U)},zt.useState=function(U){return ae.current.useState(U)},zt.useSyncExternalStore=function(U,Q,Ae){return ae.current.useSyncExternalStore(U,Q,Ae)},zt.useTransition=function(){return ae.current.useTransition()},zt.version="18.3.1",zt}var om;function Nd(){return om||(om=1,wf.exports=__()),wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function x_(){if(am)return ba;am=1;var s=Nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,d,p){var m,g={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:S,props:g,_owner:o.current}}return ba.Fragment=t,ba.jsx=f,ba.jsxs=f,ba}var lm;function y_(){return lm||(lm=1,Ef.exports=x_()),Ef.exports}var L=y_(),we=Nd();const S_=i0(we);var Jl={},Tf={exports:{}},di={},Af={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function M_(){return cm||(cm=1,(function(s){function e(F,Y){var X=F.length;F.push(Y);e:for(;0<X;){var U=X-1>>>1,Q=F[U];if(0<o(Q,Y))F[U]=Y,F[X]=Q,X=U;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],X=F.pop();if(X!==Y){F[0]=X;e:for(var U=0,Q=F.length,Ae=Q>>>1;U<Ae;){var J=2*(U+1)-1,he=F[J],ge=J+1,De=F[ge];if(0>o(he,X))ge<Q&&0>o(De,he)?(F[U]=De,F[ge]=X,U=ge):(F[U]=he,F[J]=X,U=J);else if(ge<Q&&0>o(De,X))F[U]=De,F[ge]=X,U=ge;else break e}}return Y}function o(F,Y){var X=F.sortIndex-Y.sortIndex;return X!==0?X:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();s.unstable_now=function(){return f.now()-u}}var d=[],p=[],m=1,g=null,_=3,S=!1,M=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var Y=t(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=F)r(p),Y.sortIndex=Y.expirationTime,e(d,Y);else break;Y=t(p)}}function R(F){if(A=!1,w(F),!M)if(t(d)!==null)M=!0,W(B);else{var Y=t(p);Y!==null&&ae(R,Y.startTime-F)}}function B(F,Y){M=!1,A&&(A=!1,y($),$=-1),S=!0;var X=_;try{for(w(Y),g=t(d);g!==null&&(!(g.expirationTime>Y)||F&&!I());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var Q=U(g.expirationTime<=Y);Y=s.unstable_now(),typeof Q=="function"?g.callback=Q:g===t(d)&&r(d),w(Y)}else r(d);g=t(d)}if(g!==null)var Ae=!0;else{var J=t(p);J!==null&&ae(R,J.startTime-Y),Ae=!1}return Ae}finally{g=null,_=X,S=!1}}var z=!1,O=null,$=-1,xe=5,T=-1;function I(){return!(s.unstable_now()-T<xe)}function Se(){if(O!==null){var F=s.unstable_now();T=F;var Y=!0;try{Y=O(!0,F)}finally{Y?ve():(z=!1,O=null)}}else z=!1}var ve;if(typeof N=="function")ve=function(){N(Se)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,fe=j.port2;j.port1.onmessage=Se,ve=function(){fe.postMessage(null)}}else ve=function(){x(Se,0)};function W(F){O=F,z||(z=!0,ve())}function ae(F,Y){$=x(function(){F(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,W(B))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var X=_;_=Y;try{return F()}finally{_=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=_;_=F;try{return Y()}finally{_=X}},s.unstable_scheduleCallback=function(F,Y,X){var U=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?U+X:U):X=U,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=X+Q,F={id:m++,callback:Y,priorityLevel:F,startTime:X,expirationTime:Q,sortIndex:-1},X>U?(F.sortIndex=X,e(p,F),t(d)===null&&F===t(p)&&(A?(y($),$=-1):A=!0,ae(R,X-U))):(F.sortIndex=Q,e(d,F),M||S||(M=!0,W(B))),F},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(F){var Y=_;return function(){var X=_;_=Y;try{return F.apply(this,arguments)}finally{_=X}}}})(Cf)),Cf}var um;function E_(){return um||(um=1,Af.exports=M_()),Af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function w_(){if(fm)return di;fm=1;var s=Nd(),e=E_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:p.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,v,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,N);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,N);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,N);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,i,a,c){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),I=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),F=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,U;function Q(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ae=!1;function J(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var h=ue.stack.split(`
`),v=c.stack.split(`
`),E=h.length-1,k=v.length-1;1<=E&&0<=k&&h[E]!==v[k];)k--;for(;1<=E&&0<=k;E--,k--)if(h[E]!==v[k]){if(E!==1||k!==1)do if(E--,k--,0>k||h[E]!==v[k]){var q=`
`+h[E].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=E&&0<=k);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function he(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case z:return"Portal";case xe:return"Profiler";case $:return"StrictMode";case ve:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case Se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,v.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=ot(n))}function H(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ue(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ye(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ne(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Me(n,i){i=i.checked,i!=null&&w(n,"checked",i,!1)}function Ye(n,i){Me(n,i);var a=Ne(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ke(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ke(n,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ke(n,i,a){(i!=="number"||Ue(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Et=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ne(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function C(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function de(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Et(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ne(a)}}function _e(n,i){var a=Ne(i.value),c=Ne(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function be(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Te(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Te(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var at,ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(at=at||document.createElement("div"),at.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=at.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Oe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(dt).forEach(function(n){Ce.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),dt[i]=dt[n]})});function _t(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||dt.hasOwnProperty(n)&&dt[n]?(""+i).trim():i+"px"}function it(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_t(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var lt=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(lt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function tt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function mt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vt=null,K=null,ce=null;function ee(n){if(n=pa(n)){if(typeof Vt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=hl(i),Vt(n.stateNode,n.type,i))}}function pe(n){K?ce?ce.push(n):ce=[n]:K=n}function me(){if(K){var n=K,i=ce;if(ce=K=null,ee(n),i)for(n=0;n<i.length;n++)ee(i[n])}}function Ve(n,i){return n(i)}function Qe(){}var ht=!1;function Lt(n,i,a){if(ht)return n(i,a);ht=!0;try{return Ve(n,i,a)}finally{ht=!1,(K!==null||ce!==null)&&(Qe(),me())}}function vt(n,i){var a=n.stateNode;if(a===null)return null;var c=hl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var kt=!1;if(u)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){kt=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{kt=!1}function In(n,i,a,c,h,v,E,k,q){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Pe){this.onError(Pe)}}var oe=!1,Dt=null,Gt=!1,Bt=null,$e={onError:function(n){oe=!0,Dt=n}};function qe(n,i,a,c,h,v,E,k,q){oe=!1,Dt=null,In.apply($e,arguments)}function er(n,i,a,c,h,v,E,k,q){if(qe.apply(this,arguments),oe){if(oe){var ue=Dt;oe=!1,Dt=null}else throw Error(t(198));Gt||(Gt=!0,Bt=ue)}}function si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Lr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function P(n){if(si(n)!==n)throw Error(t(188))}function te(n){var i=n.alternate;if(!i){if(i=si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return P(h),n;if(v===c)return P(h),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=v;else{for(var E=!1,k=h.child;k;){if(k===a){E=!0,a=h,c=v;break}if(k===c){E=!0,c=h,a=v;break}k=k.sibling}if(!E){for(k=v.child;k;){if(k===a){E=!0,a=v,c=h;break}if(k===c){E=!0,c=v,a=h;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ie(n){return n=te(n),n!==null?le(n):null}function le(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=le(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,We=e.unstable_cancelCallback,ct=e.unstable_shouldYield,pt=e.unstable_requestPaint,Ze=e.unstable_now,Tt=e.unstable_getCurrentPriorityLevel,Mt=e.unstable_ImmediatePriority,xt=e.unstable_UserBlockingPriority,$t=e.unstable_NormalPriority,_n=e.unstable_LowPriority,qt=e.unstable_IdlePriority,Rn=null,Ut=null;function wt(n){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rn,n,void 0,(n.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:en,Yt=Math.log,oi=Math.LN2;function en(n){return n>>>=0,n===0?32:31-(Yt(n)/oi|0)|0}var At=64,Ht=4194304;function Zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,v=n.pingedLanes,E=a&268435455;if(E!==0){var k=E&~h;k!==0?c=Zt(k):(v&=E,v!==0&&(c=Zt(v)))}else E=a&~h,E!==0?c=Zt(E):v!==0&&(c=Zt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,v=i&-i,h>=v||h===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Tn(i),h=1<<a,c|=n[a],i&=~h;return c}function fr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Un(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-Tn(v),k=1<<E,q=h[E];q===-1?((k&a)===0||(k&c)!==0)&&(h[E]=fr(k,i)):q<=i&&(n.expiredLanes|=k),v&=~k}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xs(){var n=At;return At<<=1,(At&4194240)===0&&(At=64),n}function Dr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Nr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tn(i),n[i]=a}function Ja(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Tn(a),v=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~v}}function ea(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Tn(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Jt=0;function Qa(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var el,ta,$s,tl,nl,qs=!1,ds=[],Ui=null,Fi=null,Oi=null,Ir=new Map,Ur=new Map,zi=[],il="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(n,i){switch(n){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Ir.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(i.pointerId)}}function Fr(n,i,a,c,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[h]},i!==null&&(i=pa(i),i!==null&&ta(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function b(n,i,a,c,h){switch(i){case"focusin":return Ui=Fr(Ui,n,i,a,c,h),!0;case"dragenter":return Fi=Fr(Fi,n,i,a,c,h),!0;case"mouseover":return Oi=Fr(Oi,n,i,a,c,h),!0;case"pointerover":var v=h.pointerId;return Ir.set(v,Fr(Ir.get(v)||null,n,i,a,c,h)),!0;case"gotpointercapture":return v=h.pointerId,Ur.set(v,Fr(Ur.get(v)||null,n,i,a,c,h)),!0}return!1}function Ee(n){var i=ms(n.target);if(i!==null){var a=si(i);if(a!==null){if(i=a.tag,i===13){if(i=Lr(a),i!==null){n.blockedOn=i,nl(n.priority,function(){$s(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ke(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vn(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ft=c,a.target.dispatchEvent(c),ft=null}else return i=pa(a),i!==null&&ta(i),n.blockedOn=a,!1;i.shift()}return!0}function Pt(n,i,a){ke(n)&&a.delete(i)}function Ct(){qs=!1,Ui!==null&&ke(Ui)&&(Ui=null),Fi!==null&&ke(Fi)&&(Fi=null),Oi!==null&&ke(Oi)&&(Oi=null),Ir.forEach(Pt),Ur.forEach(Pt)}function Nt(n,i){n.blockedOn===i&&(n.blockedOn=null,qs||(qs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ct)))}function It(n){function i(h){return Nt(h,n)}if(0<ds.length){Nt(ds[0],n);for(var a=1;a<ds.length;a++){var c=ds[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ui!==null&&Nt(Ui,n),Fi!==null&&Nt(Fi,n),Oi!==null&&Nt(Oi,n),Ir.forEach(i),Ur.forEach(i),a=0;a<zi.length;a++)c=zi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zi.length&&(a=zi[0],a.blockedOn===null);)Ee(a),a.blockedOn===null&&zi.shift()}var xn=R.ReactCurrentBatchConfig,yn=!0;function bn(n,i,a,c){var h=Jt,v=xn.transition;xn.transition=null;try{Jt=1,Fn(n,i,a,c)}finally{Jt=h,xn.transition=v}}function Ei(n,i,a,c){var h=Jt,v=xn.transition;xn.transition=null;try{Jt=4,Fn(n,i,a,c)}finally{Jt=h,xn.transition=v}}function Fn(n,i,a,c){if(yn){var h=Vn(n,i,a,c);if(h===null)du(n,i,c,Sn,a),na(n,c);else if(b(h,n,i,a,c))c.stopPropagation();else if(na(n,c),i&4&&-1<il.indexOf(n)){for(;h!==null;){var v=pa(h);if(v!==null&&el(v),v=Vn(n,i,a,c),v===null&&du(n,i,c,Sn,a),v===h)break;h=v}h!==null&&c.stopPropagation()}else du(n,i,c,null,a)}}var Sn=null;function Vn(n,i,a,c){if(Sn=null,n=mt(c),n=ms(n),n!==null)if(i=si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Lr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Sn=n,null}function wi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tt()){case Mt:return 1;case xt:return 4;case $t:case _n:return 16;case qt:return 536870912;default:return 16}default:return 16}}var ki=null,Bi=null,Wn=null;function tr(){if(Wn)return Wn;var n,i=Bi,a=i.length,c,h="value"in ki?ki.value:ki.textContent,v=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[v-c];c++);return Wn=h.slice(n,1<c?1-c:void 0)}function mi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hi(){return!0}function hs(){return!1}function un(n){function i(a,c,h,v,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Hi:hs,this.isPropagationStopped=hs,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),i}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Or=un(rn),ps=X({},rn,{view:0,detail:0}),Qc=un(ps),rl,ia,ra,sl=X({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(rl=n.screenX-ra.screenX,ia=n.screenY-ra.screenY):ia=rl=0,ra=n),rl)},movementY:function(n){return"movementY"in n?n.movementY:ia}}),qd=un(sl),X0=X({},sl,{dataTransfer:0}),$0=un(X0),q0=X({},ps,{relatedTarget:0}),eu=un(q0),Y0=X({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=un(Y0),Z0=X({},rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),J0=un(Z0),Q0=X({},rn,{data:0}),Yd=un(Q0),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=nv[n])?!!i[n]:!1}function tu(){return iv}var rv=X({},ps,{key:function(n){if(n.key){var i=ev[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=mi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?mi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sv=un(rv),ov=X({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=un(ov),av=X({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),lv=un(av),cv=X({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=un(cv),fv=X({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=un(fv),hv=[9,13,27,32],nu=u&&"CompositionEvent"in window,sa=null;u&&"documentMode"in document&&(sa=document.documentMode);var pv=u&&"TextEvent"in window&&!sa,Zd=u&&(!nu||sa&&8<sa&&11>=sa),Jd=" ",Qd=!1;function eh(n,i){switch(n){case"keyup":return hv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function mv(n,i){switch(n){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Qd=!0,Jd);case"textInput":return n=i.data,n===Jd&&Qd?null:n;default:return null}}function gv(n,i){if(Ys)return n==="compositionend"||!nu&&eh(n,i)?(n=tr(),Wn=Bi=ki=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zd&&i.locale!=="ko"?null:i.data;default:return null}}var vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!vv[n.type]:i==="textarea"}function ih(n,i,a,c){pe(c),i=ul(i,"onChange"),0<i.length&&(a=new Or("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var oa=null,aa=null;function _v(n){Sh(n,0)}function ol(n){var i=eo(n);if(H(i))return n}function xv(n,i){if(n==="change")return i}var rh=!1;if(u){var iu;if(u){var ru="oninput"in document;if(!ru){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),ru=typeof sh.oninput=="function"}iu=ru}else iu=!1;rh=iu&&(!document.documentMode||9<document.documentMode)}function oh(){oa&&(oa.detachEvent("onpropertychange",ah),aa=oa=null)}function ah(n){if(n.propertyName==="value"&&ol(aa)){var i=[];ih(i,aa,n,mt(n)),Lt(_v,i)}}function yv(n,i,a){n==="focusin"?(oh(),oa=i,aa=a,oa.attachEvent("onpropertychange",ah)):n==="focusout"&&oh()}function Sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(aa)}function Mv(n,i){if(n==="click")return ol(i)}function Ev(n,i){if(n==="input"||n==="change")return ol(i)}function wv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Gi=typeof Object.is=="function"?Object.is:wv;function la(n,i){if(Gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(i,h)||!Gi(n[h],i[h]))return!1}return!0}function lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ch(n,i){var a=lh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function uh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?uh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var n=window,i=Ue();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ue(n.document)}return i}function su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Tv(n){var i=fh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&uh(a.ownerDocument.documentElement,a)){if(c!==null&&su(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(c.start,h);c=c.end===void 0?v:Math.min(c.end,h),!n.extend&&v>c&&(h=c,c=v,v=h),h=ch(a,v);var E=ch(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Av=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,ou=null,ca=null,au=!1;function dh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Ks==null||Ks!==Ue(c)||(c=Ks,"selectionStart"in c&&su(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ca&&la(ca,c)||(ca=c,c=ul(ou,"onSelect"),0<c.length&&(i=new Or("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ks)))}function al(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Zs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},lu={},hh={};u&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ll(n){if(lu[n])return lu[n];if(!Zs[n])return n;var i=Zs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in hh)return lu[n]=i[a];return n}var ph=ll("animationend"),mh=ll("animationiteration"),gh=ll("animationstart"),vh=ll("transitionend"),_h=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,i){_h.set(n,i),l(i,[n])}for(var cu=0;cu<xh.length;cu++){var uu=xh[cu],Cv=uu.toLowerCase(),Rv=uu[0].toUpperCase()+uu.slice(1);zr(Cv,"on"+Rv)}zr(ph,"onAnimationEnd"),zr(mh,"onAnimationIteration"),zr(gh,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(vh,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function yh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,er(c,i,void 0,n),n.currentTarget=null}function Sh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var E=c.length-1;0<=E;E--){var k=c[E],q=k.instance,ue=k.currentTarget;if(k=k.listener,q!==v&&h.isPropagationStopped())break e;yh(h,k,ue),v=q}else for(E=0;E<c.length;E++){if(k=c[E],q=k.instance,ue=k.currentTarget,k=k.listener,q!==v&&h.isPropagationStopped())break e;yh(h,k,ue),v=q}}}if(Gt)throw n=Bt,Gt=!1,Bt=null,n}function an(n,i){var a=i[_u];a===void 0&&(a=i[_u]=new Set);var c=n+"__bubble";a.has(c)||(Mh(i,n,2,!1),a.add(c))}function fu(n,i,a){var c=0;i&&(c|=4),Mh(a,n,c,i)}var cl="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[cl]){n[cl]=!0,r.forEach(function(a){a!=="selectionchange"&&(bv.has(a)||fu(a,!1,n),fu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[cl]||(i[cl]=!0,fu("selectionchange",!1,i))}}function Mh(n,i,a,c){switch(wi(i)){case 1:var h=bn;break;case 4:h=Ei;break;default:h=Fn}a=h.bind(null,i,a,n),h=void 0,!kt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function du(n,i,a,c,h){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var q=E.tag;if((q===3||q===4)&&(q=E.stateNode.containerInfo,q===h||q.nodeType===8&&q.parentNode===h))return;E=E.return}for(;k!==null;){if(E=ms(k),E===null)return;if(q=E.tag,q===5||q===6){c=v=E;continue e}k=k.parentNode}}c=c.return}Lt(function(){var ue=v,Pe=mt(a),Ie=[];e:{var Re=_h.get(n);if(Re!==void 0){var Je=Or,rt=n;switch(n){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":Je=sv;break;case"focusin":rt="focus",Je=eu;break;case"focusout":rt="blur",Je=eu;break;case"beforeblur":case"afterblur":Je=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=lv;break;case ph:case mh:case gh:Je=K0;break;case vh:Je=uv;break;case"scroll":Je=Qc;break;case"wheel":Je=dv;break;case"copy":case"cut":case"paste":Je=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Kd}var st=(i&4)!==0,wn=!st&&n==="scroll",ne=st?Re!==null?Re+"Capture":null:Re;st=[];for(var Z=ue,se;Z!==null;){se=Z;var Be=se.stateNode;if(se.tag===5&&Be!==null&&(se=Be,ne!==null&&(Be=vt(Z,ne),Be!=null&&st.push(da(Z,Be,se)))),wn)break;Z=Z.return}0<st.length&&(Re=new Je(Re,rt,null,a,Pe),Ie.push({event:Re,listeners:st}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Re&&a!==ft&&(rt=a.relatedTarget||a.fromElement)&&(ms(rt)||rt[dr]))break e;if((Je||Re)&&(Re=Pe.window===Pe?Pe:(Re=Pe.ownerDocument)?Re.defaultView||Re.parentWindow:window,Je?(rt=a.relatedTarget||a.toElement,Je=ue,rt=rt?ms(rt):null,rt!==null&&(wn=si(rt),rt!==wn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Je=null,rt=ue),Je!==rt)){if(st=qd,Be="onMouseLeave",ne="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(st=Kd,Be="onPointerLeave",ne="onPointerEnter",Z="pointer"),wn=Je==null?Re:eo(Je),se=rt==null?Re:eo(rt),Re=new st(Be,Z+"leave",Je,a,Pe),Re.target=wn,Re.relatedTarget=se,Be=null,ms(Pe)===ue&&(st=new st(ne,Z+"enter",rt,a,Pe),st.target=se,st.relatedTarget=wn,Be=st),wn=Be,Je&&rt)t:{for(st=Je,ne=rt,Z=0,se=st;se;se=Js(se))Z++;for(se=0,Be=ne;Be;Be=Js(Be))se++;for(;0<Z-se;)st=Js(st),Z--;for(;0<se-Z;)ne=Js(ne),se--;for(;Z--;){if(st===ne||ne!==null&&st===ne.alternate)break t;st=Js(st),ne=Js(ne)}st=null}else st=null;Je!==null&&Eh(Ie,Re,Je,st,!1),rt!==null&&wn!==null&&Eh(Ie,wn,rt,st,!0)}}e:{if(Re=ue?eo(ue):window,Je=Re.nodeName&&Re.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Re.type==="file")var ut=xv;else if(nh(Re))if(rh)ut=Ev;else{ut=Sv;var yt=yv}else(Je=Re.nodeName)&&Je.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ut=Mv);if(ut&&(ut=ut(n,ue))){ih(Ie,ut,a,Pe);break e}yt&&yt(n,Re,ue),n==="focusout"&&(yt=Re._wrapperState)&&yt.controlled&&Re.type==="number"&&Ke(Re,"number",Re.value)}switch(yt=ue?eo(ue):window,n){case"focusin":(nh(yt)||yt.contentEditable==="true")&&(Ks=yt,ou=ue,ca=null);break;case"focusout":ca=ou=Ks=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,dh(Ie,a,Pe);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":dh(Ie,a,Pe)}var St;if(nu)e:{switch(n){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Ys?eh(n,a)&&(Rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(Zd&&a.locale!=="ko"&&(Ys||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Ys&&(St=tr()):(ki=Pe,Bi="value"in ki?ki.value:ki.textContent,Ys=!0)),yt=ul(ue,Rt),0<yt.length&&(Rt=new Yd(Rt,n,null,a,Pe),Ie.push({event:Rt,listeners:yt}),St?Rt.data=St:(St=th(a),St!==null&&(Rt.data=St)))),(St=pv?mv(n,a):gv(n,a))&&(ue=ul(ue,"onBeforeInput"),0<ue.length&&(Pe=new Yd("onBeforeInput","beforeinput",null,a,Pe),Ie.push({event:Pe,listeners:ue}),Pe.data=St))}Sh(Ie,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ul(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=vt(n,a),v!=null&&c.unshift(da(n,v,h)),v=vt(n,i),v!=null&&c.push(da(n,v,h))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Eh(n,i,a,c,h){for(var v=i._reactName,E=[];a!==null&&a!==c;){var k=a,q=k.alternate,ue=k.stateNode;if(q!==null&&q===c)break;k.tag===5&&ue!==null&&(k=ue,h?(q=vt(a,v),q!=null&&E.unshift(da(a,q,k))):h||(q=vt(a,v),q!=null&&E.push(da(a,q,k)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var Pv=/\r\n?/g,Lv=/\u0000|\uFFFD/g;function wh(n){return(typeof n=="string"?n:""+n).replace(Pv,`
`).replace(Lv,"")}function fl(n,i,a){if(i=wh(i),wh(n)!==i&&a)throw Error(t(425))}function dl(){}var hu=null,pu=null;function mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(n){return Th.resolve(null).then(n).catch(Iv)}:gu;function Iv(n){setTimeout(function(){throw n})}function vu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),It(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);It(i)}function kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),nr="__reactFiber$"+Qs,ha="__reactProps$"+Qs,dr="__reactContainer$"+Qs,_u="__reactEvents$"+Qs,Uv="__reactListeners$"+Qs,Fv="__reactHandles$"+Qs;function ms(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[dr]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[nr])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function pa(n){return n=n[nr]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function eo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[ha]||null}var xu=[],to=-1;function Br(n){return{current:n}}function ln(n){0>to||(n.current=xu[to],xu[to]=null,to--)}function sn(n,i){to++,xu[to]=n.current,n.current=i}var Hr={},jn=Br(Hr),ai=Br(!1),gs=Hr;function no(n,i){var a=n.type.contextTypes;if(!a)return Hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function li(n){return n=n.childContextTypes,n!=null}function pl(){ln(ai),ln(jn)}function Ch(n,i,a){if(jn.current!==Hr)throw Error(t(168));sn(jn,i),sn(ai,a)}function Rh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,De(n)||"Unknown",h));return X({},a,c)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,gs=jn.current,sn(jn,n),sn(ai,ai.current),!0}function bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Rh(n,i,gs),c.__reactInternalMemoizedMergedChildContext=n,ln(ai),ln(jn),sn(jn,n)):ln(ai),sn(ai,a)}var hr=null,gl=!1,yu=!1;function Ph(n){hr===null?hr=[n]:hr.push(n)}function Ov(n){gl=!0,Ph(n)}function Gr(){if(!yu&&hr!==null){yu=!0;var n=0,i=Jt;try{var a=hr;for(Jt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,gl=!1}catch(h){throw hr!==null&&(hr=hr.slice(n+1)),re(Mt,Gr),h}finally{Jt=i,yu=!1}}return null}var io=[],ro=0,vl=null,_l=0,Ti=[],Ai=0,vs=null,pr=1,mr="";function _s(n,i){io[ro++]=_l,io[ro++]=vl,vl=n,_l=i}function Lh(n,i,a){Ti[Ai++]=pr,Ti[Ai++]=mr,Ti[Ai++]=vs,vs=n;var c=pr;n=mr;var h=32-Tn(c)-1;c&=~(1<<h),a+=1;var v=32-Tn(i)+h;if(30<v){var E=h-h%5;v=(c&(1<<E)-1).toString(32),c>>=E,h-=E,pr=1<<32-Tn(i)+h|a<<h|c,mr=v+n}else pr=1<<v|a<<h|c,mr=n}function Su(n){n.return!==null&&(_s(n,1),Lh(n,1,0))}function Mu(n){for(;n===vl;)vl=io[--ro],io[ro]=null,_l=io[--ro],io[ro]=null;for(;n===vs;)vs=Ti[--Ai],Ti[Ai]=null,mr=Ti[--Ai],Ti[Ai]=null,pr=Ti[--Ai],Ti[Ai]=null}var gi=null,vi=null,fn=!1,Vi=null;function Dh(n,i){var a=Pi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Nh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,gi=n,vi=kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,gi=n,vi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=vs!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Pi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,gi=n,vi=null,!0):!1;default:return!1}}function Eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wu(n){if(fn){var i=vi;if(i){var a=i;if(!Nh(n,i)){if(Eu(n))throw Error(t(418));i=kr(a.nextSibling);var c=gi;i&&Nh(n,i)?Dh(c,a):(n.flags=n.flags&-4097|2,fn=!1,gi=n)}}else{if(Eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,fn=!1,gi=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gi=n}function xl(n){if(n!==gi)return!1;if(!fn)return Ih(n),fn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mu(n.type,n.memoizedProps)),i&&(i=vi)){if(Eu(n))throw Uh(),Error(t(418));for(;i;)Dh(n,i),i=kr(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){vi=kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}vi=null}}else vi=gi?kr(n.stateNode.nextSibling):null;return!0}function Uh(){for(var n=vi;n;)n=kr(n.nextSibling)}function so(){vi=gi=null,fn=!1}function Tu(n){Vi===null?Vi=[n]:Vi.push(n)}var zv=R.ReactCurrentBatchConfig;function ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(E){var k=h.refs;E===null?delete k[v]:k[v]=E},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function yl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fh(n){var i=n._init;return i(n._payload)}function Oh(n){function i(ne,Z){if(n){var se=ne.deletions;se===null?(ne.deletions=[Z],ne.flags|=16):se.push(Z)}}function a(ne,Z){if(!n)return null;for(;Z!==null;)i(ne,Z),Z=Z.sibling;return null}function c(ne,Z){for(ne=new Map;Z!==null;)Z.key!==null?ne.set(Z.key,Z):ne.set(Z.index,Z),Z=Z.sibling;return ne}function h(ne,Z){return ne=Kr(ne,Z),ne.index=0,ne.sibling=null,ne}function v(ne,Z,se){return ne.index=se,n?(se=ne.alternate,se!==null?(se=se.index,se<Z?(ne.flags|=2,Z):se):(ne.flags|=2,Z)):(ne.flags|=1048576,Z)}function E(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function k(ne,Z,se,Be){return Z===null||Z.tag!==6?(Z=vf(se,ne.mode,Be),Z.return=ne,Z):(Z=h(Z,se),Z.return=ne,Z)}function q(ne,Z,se,Be){var ut=se.type;return ut===O?Pe(ne,Z,se.props.children,Be,se.key):Z!==null&&(Z.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===W&&Fh(ut)===Z.type)?(Be=h(Z,se.props),Be.ref=ma(ne,Z,se),Be.return=ne,Be):(Be=Wl(se.type,se.key,se.props,null,ne.mode,Be),Be.ref=ma(ne,Z,se),Be.return=ne,Be)}function ue(ne,Z,se,Be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==se.containerInfo||Z.stateNode.implementation!==se.implementation?(Z=_f(se,ne.mode,Be),Z.return=ne,Z):(Z=h(Z,se.children||[]),Z.return=ne,Z)}function Pe(ne,Z,se,Be,ut){return Z===null||Z.tag!==7?(Z=As(se,ne.mode,Be,ut),Z.return=ne,Z):(Z=h(Z,se),Z.return=ne,Z)}function Ie(ne,Z,se){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=vf(""+Z,ne.mode,se),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case B:return se=Wl(Z.type,Z.key,Z.props,null,ne.mode,se),se.ref=ma(ne,null,Z),se.return=ne,se;case z:return Z=_f(Z,ne.mode,se),Z.return=ne,Z;case W:var Be=Z._init;return Ie(ne,Be(Z._payload),se)}if(Et(Z)||Y(Z))return Z=As(Z,ne.mode,se,null),Z.return=ne,Z;yl(ne,Z)}return null}function Re(ne,Z,se,Be){var ut=Z!==null?Z.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return ut!==null?null:k(ne,Z,""+se,Be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case B:return se.key===ut?q(ne,Z,se,Be):null;case z:return se.key===ut?ue(ne,Z,se,Be):null;case W:return ut=se._init,Re(ne,Z,ut(se._payload),Be)}if(Et(se)||Y(se))return ut!==null?null:Pe(ne,Z,se,Be,null);yl(ne,se)}return null}function Je(ne,Z,se,Be,ut){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return ne=ne.get(se)||null,k(Z,ne,""+Be,ut);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case B:return ne=ne.get(Be.key===null?se:Be.key)||null,q(Z,ne,Be,ut);case z:return ne=ne.get(Be.key===null?se:Be.key)||null,ue(Z,ne,Be,ut);case W:var yt=Be._init;return Je(ne,Z,se,yt(Be._payload),ut)}if(Et(Be)||Y(Be))return ne=ne.get(se)||null,Pe(Z,ne,Be,ut,null);yl(Z,Be)}return null}function rt(ne,Z,se,Be){for(var ut=null,yt=null,St=Z,Rt=Z=0,kn=null;St!==null&&Rt<se.length;Rt++){St.index>Rt?(kn=St,St=null):kn=St.sibling;var Kt=Re(ne,St,se[Rt],Be);if(Kt===null){St===null&&(St=kn);break}n&&St&&Kt.alternate===null&&i(ne,St),Z=v(Kt,Z,Rt),yt===null?ut=Kt:yt.sibling=Kt,yt=Kt,St=kn}if(Rt===se.length)return a(ne,St),fn&&_s(ne,Rt),ut;if(St===null){for(;Rt<se.length;Rt++)St=Ie(ne,se[Rt],Be),St!==null&&(Z=v(St,Z,Rt),yt===null?ut=St:yt.sibling=St,yt=St);return fn&&_s(ne,Rt),ut}for(St=c(ne,St);Rt<se.length;Rt++)kn=Je(St,ne,Rt,se[Rt],Be),kn!==null&&(n&&kn.alternate!==null&&St.delete(kn.key===null?Rt:kn.key),Z=v(kn,Z,Rt),yt===null?ut=kn:yt.sibling=kn,yt=kn);return n&&St.forEach(function(Zr){return i(ne,Zr)}),fn&&_s(ne,Rt),ut}function st(ne,Z,se,Be){var ut=Y(se);if(typeof ut!="function")throw Error(t(150));if(se=ut.call(se),se==null)throw Error(t(151));for(var yt=ut=null,St=Z,Rt=Z=0,kn=null,Kt=se.next();St!==null&&!Kt.done;Rt++,Kt=se.next()){St.index>Rt?(kn=St,St=null):kn=St.sibling;var Zr=Re(ne,St,Kt.value,Be);if(Zr===null){St===null&&(St=kn);break}n&&St&&Zr.alternate===null&&i(ne,St),Z=v(Zr,Z,Rt),yt===null?ut=Zr:yt.sibling=Zr,yt=Zr,St=kn}if(Kt.done)return a(ne,St),fn&&_s(ne,Rt),ut;if(St===null){for(;!Kt.done;Rt++,Kt=se.next())Kt=Ie(ne,Kt.value,Be),Kt!==null&&(Z=v(Kt,Z,Rt),yt===null?ut=Kt:yt.sibling=Kt,yt=Kt);return fn&&_s(ne,Rt),ut}for(St=c(ne,St);!Kt.done;Rt++,Kt=se.next())Kt=Je(St,ne,Rt,Kt.value,Be),Kt!==null&&(n&&Kt.alternate!==null&&St.delete(Kt.key===null?Rt:Kt.key),Z=v(Kt,Z,Rt),yt===null?ut=Kt:yt.sibling=Kt,yt=Kt);return n&&St.forEach(function(v_){return i(ne,v_)}),fn&&_s(ne,Rt),ut}function wn(ne,Z,se,Be){if(typeof se=="object"&&se!==null&&se.type===O&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case B:e:{for(var ut=se.key,yt=Z;yt!==null;){if(yt.key===ut){if(ut=se.type,ut===O){if(yt.tag===7){a(ne,yt.sibling),Z=h(yt,se.props.children),Z.return=ne,ne=Z;break e}}else if(yt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===W&&Fh(ut)===yt.type){a(ne,yt.sibling),Z=h(yt,se.props),Z.ref=ma(ne,yt,se),Z.return=ne,ne=Z;break e}a(ne,yt);break}else i(ne,yt);yt=yt.sibling}se.type===O?(Z=As(se.props.children,ne.mode,Be,se.key),Z.return=ne,ne=Z):(Be=Wl(se.type,se.key,se.props,null,ne.mode,Be),Be.ref=ma(ne,Z,se),Be.return=ne,ne=Be)}return E(ne);case z:e:{for(yt=se.key;Z!==null;){if(Z.key===yt)if(Z.tag===4&&Z.stateNode.containerInfo===se.containerInfo&&Z.stateNode.implementation===se.implementation){a(ne,Z.sibling),Z=h(Z,se.children||[]),Z.return=ne,ne=Z;break e}else{a(ne,Z);break}else i(ne,Z);Z=Z.sibling}Z=_f(se,ne.mode,Be),Z.return=ne,ne=Z}return E(ne);case W:return yt=se._init,wn(ne,Z,yt(se._payload),Be)}if(Et(se))return rt(ne,Z,se,Be);if(Y(se))return st(ne,Z,se,Be);yl(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Z!==null&&Z.tag===6?(a(ne,Z.sibling),Z=h(Z,se),Z.return=ne,ne=Z):(a(ne,Z),Z=vf(se,ne.mode,Be),Z.return=ne,ne=Z),E(ne)):a(ne,Z)}return wn}var oo=Oh(!0),zh=Oh(!1),Sl=Br(null),Ml=null,ao=null,Au=null;function Cu(){Au=ao=Ml=null}function Ru(n){var i=Sl.current;ln(Sl),n._currentValue=i}function bu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function lo(n,i){Ml=n,Au=ao=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ci=!0),n.firstContext=null)}function Ci(n){var i=n._currentValue;if(Au!==n)if(n={context:n,memoizedValue:i,next:null},ao===null){if(Ml===null)throw Error(t(308));ao=n,Ml.dependencies={lanes:0,firstContext:n}}else ao=ao.next=n;return i}var xs=null;function Pu(n){xs===null?xs=[n]:xs.push(n)}function kh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Pu(i)):(a.next=h.next,h.next=a),i.interleaved=a,gr(n,c)}function gr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Vr=!1;function Lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Wr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Wt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,gr(n,a)}return h=c.interleaved,h===null?(i.next=i,Pu(c)):(i.next=h.next,h.next=i),c.interleaved=i,gr(n,a)}function El(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ea(n,a)}}function Hh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=E:v=v.next=E,a=a.next}while(a!==null);v===null?h=v=i:v=v.next=i}else h=v=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function wl(n,i,a,c){var h=n.updateQueue;Vr=!1;var v=h.firstBaseUpdate,E=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var q=k,ue=q.next;q.next=null,E===null?v=ue:E.next=ue,E=q;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,k=Pe.lastBaseUpdate,k!==E&&(k===null?Pe.firstBaseUpdate=ue:k.next=ue,Pe.lastBaseUpdate=q))}if(v!==null){var Ie=h.baseState;E=0,Pe=ue=q=null,k=v;do{var Re=k.lane,Je=k.eventTime;if((c&Re)===Re){Pe!==null&&(Pe=Pe.next={eventTime:Je,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var rt=n,st=k;switch(Re=i,Je=a,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Ie=rt.call(Je,Ie,Re);break e}Ie=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Re=typeof rt=="function"?rt.call(Je,Ie,Re):rt,Re==null)break e;Ie=X({},Ie,Re);break e;case 2:Vr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Re=h.effects,Re===null?h.effects=[k]:Re.push(k))}else Je={eventTime:Je,lane:Re,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Pe===null?(ue=Pe=Je,q=Ie):Pe=Pe.next=Je,E|=Re;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Re=k,k=Re.next,Re.next=null,h.lastBaseUpdate=Re,h.shared.pending=null}}while(!0);if(Pe===null&&(q=Ie),h.baseState=q,h.firstBaseUpdate=ue,h.lastBaseUpdate=Pe,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else v===null&&(h.shared.lanes=0);Ms|=E,n.lanes=E,n.memoizedState=Ie}}function Gh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ga={},ir=Br(ga),va=Br(ga),_a=Br(ga);function ys(n){if(n===ga)throw Error(t(174));return n}function Du(n,i){switch(sn(_a,i),sn(va,n),sn(ir,ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:gt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=gt(i,n)}ln(ir),sn(ir,i)}function co(){ln(ir),ln(va),ln(_a)}function Vh(n){ys(_a.current);var i=ys(ir.current),a=gt(i,n.type);i!==a&&(sn(va,n),sn(ir,a))}function Nu(n){va.current===n&&(ln(ir),ln(va))}var mn=Br(0);function Tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Uu(){for(var n=0;n<Iu.length;n++)Iu[n]._workInProgressVersionPrimary=null;Iu.length=0}var Al=R.ReactCurrentDispatcher,Fu=R.ReactCurrentBatchConfig,Ss=0,gn=null,Pn=null,On=null,Cl=!1,xa=!1,ya=0,kv=0;function Xn(){throw Error(t(321))}function Ou(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Gi(n[a],i[a]))return!1;return!0}function zu(n,i,a,c,h,v){if(Ss=v,gn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Al.current=n===null||n.memoizedState===null?Vv:Wv,n=a(c,h),xa){v=0;do{if(xa=!1,ya=0,25<=v)throw Error(t(301));v+=1,On=Pn=null,i.updateQueue=null,Al.current=jv,n=a(c,h)}while(xa)}if(Al.current=Pl,i=Pn!==null&&Pn.next!==null,Ss=0,On=Pn=gn=null,Cl=!1,i)throw Error(t(300));return n}function ku(){var n=ya!==0;return ya=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?gn.memoizedState=On=n:On=On.next=n,On}function Ri(){if(Pn===null){var n=gn.alternate;n=n!==null?n.memoizedState:null}else n=Pn.next;var i=On===null?gn.memoizedState:On.next;if(i!==null)On=i,Pn=n;else{if(n===null)throw Error(t(310));Pn=n,n={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},On===null?gn.memoizedState=On=n:On=On.next=n}return On}function Sa(n,i){return typeof i=="function"?i(n):i}function Bu(n){var i=Ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Pn,h=c.baseQueue,v=a.pending;if(v!==null){if(h!==null){var E=h.next;h.next=v.next,v.next=E}c.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,c=c.baseState;var k=E=null,q=null,ue=v;do{var Pe=ue.lane;if((Ss&Pe)===Pe)q!==null&&(q=q.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Ie={lane:Pe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};q===null?(k=q=Ie,E=c):q=q.next=Ie,gn.lanes|=Pe,Ms|=Pe}ue=ue.next}while(ue!==null&&ue!==v);q===null?E=c:q.next=k,Gi(c,i.memoizedState)||(ci=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do v=h.lane,gn.lanes|=v,Ms|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hu(n){var i=Ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,v=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do v=n(v,E.action),E=E.next;while(E!==h);Gi(v,i.memoizedState)||(ci=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function Wh(){}function jh(n,i){var a=gn,c=Ri(),h=i(),v=!Gi(c.memoizedState,h);if(v&&(c.memoizedState=h,ci=!0),c=c.queue,Gu(qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||On!==null&&On.memoizedState.tag&1){if(a.flags|=2048,Ma(9,$h.bind(null,a,c,h,i),void 0,null),zn===null)throw Error(t(349));(Ss&30)!==0||Xh(a,i,h)}return h}function Xh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function $h(n,i,a,c){i.value=a,i.getSnapshot=c,Yh(i)&&Kh(n)}function qh(n,i,a){return a(function(){Yh(i)&&Kh(n)})}function Yh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Gi(n,a)}catch{return!0}}function Kh(n){var i=gr(n,1);i!==null&&$i(i,n,1,-1)}function Zh(n){var i=rr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=Gv.bind(null,gn,n),[i.memoizedState,n]}function Ma(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Jh(){return Ri().memoizedState}function Rl(n,i,a,c){var h=rr();gn.flags|=n,h.memoizedState=Ma(1|i,a,void 0,c===void 0?null:c)}function bl(n,i,a,c){var h=Ri();c=c===void 0?null:c;var v=void 0;if(Pn!==null){var E=Pn.memoizedState;if(v=E.destroy,c!==null&&Ou(c,E.deps)){h.memoizedState=Ma(i,a,v,c);return}}gn.flags|=n,h.memoizedState=Ma(1|i,a,v,c)}function Qh(n,i){return Rl(8390656,8,n,i)}function Gu(n,i){return bl(2048,8,n,i)}function ep(n,i){return bl(4,2,n,i)}function tp(n,i){return bl(4,4,n,i)}function np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ip(n,i,a){return a=a!=null?a.concat([n]):null,bl(4,4,np.bind(null,i,n),a)}function Vu(){}function rp(n,i){var a=Ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ou(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function sp(n,i){var a=Ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ou(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function op(n,i,a){return(Ss&21)===0?(n.baseState&&(n.baseState=!1,ci=!0),n.memoizedState=a):(Gi(a,i)||(a=Xs(),gn.lanes|=a,Ms|=a,n.baseState=!0),i)}function Bv(n,i){var a=Jt;Jt=a!==0&&4>a?a:4,n(!0);var c=Fu.transition;Fu.transition={};try{n(!1),i()}finally{Jt=a,Fu.transition=c}}function ap(){return Ri().memoizedState}function Hv(n,i,a){var c=qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},lp(n))cp(i,a);else if(a=kh(n,i,a,c),a!==null){var h=Qn();$i(a,n,c,h),up(a,i,c)}}function Gv(n,i,a){var c=qr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(lp(n))cp(i,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var E=i.lastRenderedState,k=v(E,a);if(h.hasEagerState=!0,h.eagerState=k,Gi(k,E)){var q=i.interleaved;q===null?(h.next=h,Pu(i)):(h.next=q.next,q.next=h),i.interleaved=h;return}}catch{}finally{}a=kh(n,i,h,c),a!==null&&(h=Qn(),$i(a,n,c,h),up(a,i,c))}}function lp(n){var i=n.alternate;return n===gn||i!==null&&i===gn}function cp(n,i){xa=Cl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function up(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ea(n,a)}}var Pl={readContext:Ci,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},Vv={readContext:Ci,useCallback:function(n,i){return rr().memoizedState=[n,i===void 0?null:i],n},useContext:Ci,useEffect:Qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Rl(4194308,4,np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Rl(4,2,n,i)},useMemo:function(n,i){var a=rr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=rr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Hv.bind(null,gn,n),[c.memoizedState,n]},useRef:function(n){var i=rr();return n={current:n},i.memoizedState=n},useState:Zh,useDebugValue:Vu,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=Zh(!1),i=n[0];return n=Bv.bind(null,n[1]),rr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=gn,h=rr();if(fn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),zn===null)throw Error(t(349));(Ss&30)!==0||Xh(c,i,a)}h.memoizedState=a;var v={value:a,getSnapshot:i};return h.queue=v,Qh(qh.bind(null,c,v,n),[n]),c.flags|=2048,Ma(9,$h.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=rr(),i=zn.identifierPrefix;if(fn){var a=mr,c=pr;a=(c&~(1<<32-Tn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Wv={readContext:Ci,useCallback:rp,useContext:Ci,useEffect:Gu,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Bu,useRef:Jh,useState:function(){return Bu(Sa)},useDebugValue:Vu,useDeferredValue:function(n){var i=Ri();return op(i,Pn.memoizedState,n)},useTransition:function(){var n=Bu(Sa)[0],i=Ri().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:jh,useId:ap,unstable_isNewReconciler:!1},jv={readContext:Ci,useCallback:rp,useContext:Ci,useEffect:Gu,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:Hu,useRef:Jh,useState:function(){return Hu(Sa)},useDebugValue:Vu,useDeferredValue:function(n){var i=Ri();return Pn===null?i.memoizedState=n:op(i,Pn.memoizedState,n)},useTransition:function(){var n=Hu(Sa)[0],i=Ri().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:jh,useId:ap,unstable_isNewReconciler:!1};function Wi(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Wu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Qn(),h=qr(n),v=vr(c,h);v.payload=i,a!=null&&(v.callback=a),i=Wr(n,v,h),i!==null&&($i(i,n,h,c),El(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Qn(),h=qr(n),v=vr(c,h);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Wr(n,v,h),i!==null&&($i(i,n,h,c),El(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qn(),c=qr(n),h=vr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Wr(n,h,c),i!==null&&($i(i,n,c,a),El(i,n,c))}};function fp(n,i,a,c,h,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,E):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(h,v):!0}function dp(n,i,a){var c=!1,h=Hr,v=i.contextType;return typeof v=="object"&&v!==null?v=Ci(v):(h=li(i)?gs:jn.current,c=i.contextTypes,v=(c=c!=null)?no(n,h):Hr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ll,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),i}function hp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ll.enqueueReplaceState(i,i.state,null)}function ju(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Lu(n);var v=i.contextType;typeof v=="object"&&v!==null?h.context=Ci(v):(v=li(i)?gs:jn.current,h.context=no(n,v)),h.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,i,v,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ll.enqueueReplaceState(h,h.state,null),wl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:h,digest:null}}function Xu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function $u(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Xv=typeof WeakMap=="function"?WeakMap:Map;function pp(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){zl||(zl=!0,cf=c),$u(n,i)},a}function mp(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){$u(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){$u(n,i),typeof c!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function gp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Xv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=o_.bind(null,n,i,a),i.then(n,n))}function vp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function _p(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Wr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var $v=R.ReactCurrentOwner,ci=!1;function Jn(n,i,a,c){i.child=n===null?zh(i,null,a,c):oo(i,n.child,a,c)}function xp(n,i,a,c,h){a=a.render;var v=i.ref;return lo(i,h),c=zu(n,i,a,c,v,h),a=ku(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,_r(n,i,h)):(fn&&a&&Su(i),i.flags|=1,Jn(n,i,c,h),i.child)}function yp(n,i,a,c,h){if(n===null){var v=a.type;return typeof v=="function"&&!gf(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Sp(n,i,v,c,h)):(n=Wl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&h)===0){var E=v.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(E,c)&&n.ref===i.ref)return _r(n,i,h)}return i.flags|=1,n=Kr(v,c),n.ref=i.ref,n.return=i,i.child=n}function Sp(n,i,a,c,h){if(n!==null){var v=n.memoizedProps;if(la(v,c)&&n.ref===i.ref)if(ci=!1,i.pendingProps=c=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ci=!0);else return i.lanes=n.lanes,_r(n,i,h)}return qu(n,i,a,c,h)}function Mp(n,i,a){var c=i.pendingProps,h=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},sn(ho,_i),_i|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,sn(ho,_i),_i|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,sn(ho,_i),_i|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,sn(ho,_i),_i|=c;return Jn(n,i,h,a),i.child}function Ep(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qu(n,i,a,c,h){var v=li(a)?gs:jn.current;return v=no(i,v),lo(i,h),a=zu(n,i,a,c,v,h),c=ku(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,_r(n,i,h)):(fn&&c&&Su(i),i.flags|=1,Jn(n,i,a,h),i.child)}function wp(n,i,a,c,h){if(li(a)){var v=!0;ml(i)}else v=!1;if(lo(i,h),i.stateNode===null)Nl(n,i),dp(i,a,c),ju(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,k=i.memoizedProps;E.props=k;var q=E.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=Ci(ue):(ue=li(a)?gs:jn.current,ue=no(i,ue));var Pe=a.getDerivedStateFromProps,Ie=typeof Pe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ie||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==c||q!==ue)&&hp(i,E,c,ue),Vr=!1;var Re=i.memoizedState;E.state=Re,wl(i,c,E,h),q=i.memoizedState,k!==c||Re!==q||ai.current||Vr?(typeof Pe=="function"&&(Wu(i,a,Pe,c),q=i.memoizedState),(k=Vr||fp(i,a,k,c,Re,q,ue))?(Ie||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),E.props=c,E.state=q,E.context=ue,c=k):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Bh(n,i),k=i.memoizedProps,ue=i.type===i.elementType?k:Wi(i.type,k),E.props=ue,Ie=i.pendingProps,Re=E.context,q=a.contextType,typeof q=="object"&&q!==null?q=Ci(q):(q=li(a)?gs:jn.current,q=no(i,q));var Je=a.getDerivedStateFromProps;(Pe=typeof Je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==Ie||Re!==q)&&hp(i,E,c,q),Vr=!1,Re=i.memoizedState,E.state=Re,wl(i,c,E,h);var rt=i.memoizedState;k!==Ie||Re!==rt||ai.current||Vr?(typeof Je=="function"&&(Wu(i,a,Je,c),rt=i.memoizedState),(ue=Vr||fp(i,a,ue,c,Re,rt,q)||!1)?(Pe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,rt,q),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,rt,q)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=rt),E.props=c,E.state=rt,E.context=q,c=ue):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return Yu(n,i,a,c,v,h)}function Yu(n,i,a,c,h,v){Ep(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&bh(i,a,!1),_r(n,i,v);c=i.stateNode,$v.current=i;var k=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=oo(i,n.child,null,v),i.child=oo(i,null,k,v)):Jn(n,i,k,v),i.memoizedState=c.state,h&&bh(i,a,!0),i.child}function Tp(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),Du(n,i.containerInfo)}function Ap(n,i,a,c,h){return so(),Tu(h),i.flags|=256,Jn(n,i,a,c),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,a){var c=i.pendingProps,h=mn.current,v=!1,E=(i.flags&128)!==0,k;if((k=E)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),sn(mn,h&1),n===null)return wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,v?(c=i.mode,v=i.child,E={mode:"hidden",children:E},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=E):v=jl(E,c,0,null),n=As(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Zu(a),i.memoizedState=Ku,n):Ju(i,E));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return qv(n,i,E,c,k,h,a);if(v){v=c.fallback,E=i.mode,h=n.child,k=h.sibling;var q={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=Kr(h,q),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?v=Kr(k,v):(v=As(v,E,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,E=n.child.memoizedState,E=E===null?Zu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~a,i.memoizedState=Ku,c}return v=n.child,n=v.sibling,c=Kr(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ju(n,i){return i=jl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Dl(n,i,a,c){return c!==null&&Tu(c),oo(i,n.child,null,a),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function qv(n,i,a,c,h,v,E){if(a)return i.flags&256?(i.flags&=-257,c=Xu(Error(t(422))),Dl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,h=i.mode,c=jl({mode:"visible",children:c.children},h,0,null),v=As(v,h,E,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&oo(i,n.child,null,E),i.child.memoizedState=Zu(E),i.memoizedState=Ku,v);if((i.mode&1)===0)return Dl(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,v=Error(t(419)),c=Xu(v,c,void 0),Dl(n,i,E,c)}if(k=(E&n.childLanes)!==0,ci||k){if(c=zn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,gr(n,h),$i(c,n,h,-1))}return mf(),c=Xu(Error(t(421))),Dl(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=a_.bind(null,n),h._reactRetry=i,null):(n=v.treeContext,vi=kr(h.nextSibling),gi=i,fn=!0,Vi=null,n!==null&&(Ti[Ai++]=pr,Ti[Ai++]=mr,Ti[Ai++]=vs,pr=n.id,mr=n.overflow,vs=i),i=Ju(i,c.children),i.flags|=4096,i)}function Rp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),bu(n.return,i,a)}function Qu(n,i,a,c,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=h)}function bp(n,i,a){var c=i.pendingProps,h=c.revealOrder,v=c.tail;if(Jn(n,i,c.children,a),c=mn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,a,i);else if(n.tag===19)Rp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(sn(mn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Tl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Qu(i,!1,h,a,v);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Tl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Qu(i,!0,a,null,v);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _r(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Yv(n,i,a){switch(i.tag){case 3:Tp(i),so();break;case 5:Vh(i);break;case 1:li(i.type)&&ml(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;sn(Sl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(sn(mn,mn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cp(n,i,a):(sn(mn,mn.current&1),n=_r(n,i,a),n!==null?n.sibling:null);sn(mn,mn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),sn(mn,mn.current),c)break;return null;case 22:case 23:return i.lanes=0,Mp(n,i,a)}return _r(n,i,a)}var Pp,ef,Lp,Dp;Pp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ef=function(){},Lp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,ys(ir.current);var v=null;switch(a){case"input":h=ye(n,h),c=ye(n,c),v=[];break;case"select":h=X({},h,{value:void 0}),c=X({},c,{value:void 0}),v=[];break;case"textarea":h=C(n,h),c=C(n,c),v=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=dl)}Ge(a,c);var E;a=null;for(ue in h)if(!c.hasOwnProperty(ue)&&h.hasOwnProperty(ue)&&h[ue]!=null)if(ue==="style"){var k=h[ue];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?v||(v=[]):(v=v||[]).push(ue,null));for(ue in c){var q=c[ue];if(k=h!=null?h[ue]:void 0,c.hasOwnProperty(ue)&&q!==k&&(q!=null||k!=null))if(ue==="style")if(k){for(E in k)!k.hasOwnProperty(E)||q&&q.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in q)q.hasOwnProperty(E)&&k[E]!==q[E]&&(a||(a={}),a[E]=q[E])}else a||(v||(v=[]),v.push(ue,a)),a=q;else ue==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,k=k?k.__html:void 0,q!=null&&k!==q&&(v=v||[]).push(ue,q)):ue==="children"?typeof q!="string"&&typeof q!="number"||(v=v||[]).push(ue,""+q):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(q!=null&&ue==="onScroll"&&an("scroll",n),v||k===q||(v=[])):(v=v||[]).push(ue,q))}a&&(v=v||[]).push("style",a);var ue=v;(i.updateQueue=ue)&&(i.flags|=4)}},Dp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ea(n,i){if(!fn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Kv(n,i,a){var c=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(i),null;case 1:return li(i.type)&&pl(),$n(i),null;case 3:return c=i.stateNode,co(),ln(ai),ln(jn),Uu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vi!==null&&(df(Vi),Vi=null))),ef(n,i),$n(i),null;case 5:Nu(i);var h=ys(_a.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return $n(i),null}if(n=ys(ir.current),xl(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[nr]=i,c[ha]=v,n=(i.mode&1)!==0,a){case"dialog":an("cancel",c),an("close",c);break;case"iframe":case"object":case"embed":an("load",c);break;case"video":case"audio":for(h=0;h<ua.length;h++)an(ua[h],c);break;case"source":an("error",c);break;case"img":case"image":case"link":an("error",c),an("load",c);break;case"details":an("toggle",c);break;case"input":Fe(c,v),an("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},an("invalid",c);break;case"textarea":de(c,v),an("invalid",c)}Ge(a,v),h=null;for(var E in v)if(v.hasOwnProperty(E)){var k=v[E];E==="children"?typeof k=="string"?c.textContent!==k&&(v.suppressHydrationWarning!==!0&&fl(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&fl(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&an("scroll",c)}switch(a){case"input":et(c),Xe(c,v,!0);break;case"textarea":et(c),be(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=dl)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Te(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[nr]=i,n[ha]=c,Pp(n,i,!1,!1),i.stateNode=n;e:{switch(E=tt(a,c),a){case"dialog":an("cancel",n),an("close",n),h=c;break;case"iframe":case"object":case"embed":an("load",n),h=c;break;case"video":case"audio":for(h=0;h<ua.length;h++)an(ua[h],n);h=c;break;case"source":an("error",n),h=c;break;case"img":case"image":case"link":an("error",n),an("load",n),h=c;break;case"details":an("toggle",n),h=c;break;case"input":Fe(n,c),h=ye(n,c),an("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=X({},c,{value:void 0}),an("invalid",n);break;case"textarea":de(n,c),h=C(n,c),an("invalid",n);break;default:h=c}Ge(a,h),k=h;for(v in k)if(k.hasOwnProperty(v)){var q=k[v];v==="style"?it(n,q):v==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&ze(n,q)):v==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&Oe(n,q):typeof q=="number"&&Oe(n,""+q):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?q!=null&&v==="onScroll"&&an("scroll",n):q!=null&&w(n,v,q,E))}switch(a){case"input":et(n),Xe(n,c,!1);break;case"textarea":et(n),be(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ne(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?D(n,!!c.multiple,v,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return $n(i),null;case 6:if(n&&i.stateNode!=null)Dp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ys(_a.current),ys(ir.current),xl(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(v=c.nodeValue!==a)&&(n=gi,n!==null))switch(n.tag){case 3:fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return $n(i),null;case 13:if(ln(mn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(fn&&vi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),so(),i.flags|=98560,v=!1;else if(v=xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[nr]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$n(i),v=!1}else Vi!==null&&(df(Vi),Vi=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(mn.current&1)!==0?Ln===0&&(Ln=3):mf())),i.updateQueue!==null&&(i.flags|=4),$n(i),null);case 4:return co(),ef(n,i),n===null&&fa(i.stateNode.containerInfo),$n(i),null;case 10:return Ru(i.type._context),$n(i),null;case 17:return li(i.type)&&pl(),$n(i),null;case 19:if(ln(mn),v=i.memoizedState,v===null)return $n(i),null;if(c=(i.flags&128)!==0,E=v.rendering,E===null)if(c)Ea(v,!1);else{if(Ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Tl(n),E!==null){for(i.flags|=128,Ea(v,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return sn(mn,mn.current&1|2),i.child}n=n.sibling}v.tail!==null&&Ze()>po&&(i.flags|=128,c=!0,Ea(v,!1),i.lanes=4194304)}else{if(!c)if(n=Tl(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!fn)return $n(i),null}else 2*Ze()-v.renderingStartTime>po&&a!==1073741824&&(i.flags|=128,c=!0,Ea(v,!1),i.lanes=4194304);v.isBackwards?(E.sibling=i.child,i.child=E):(a=v.last,a!==null?a.sibling=E:i.child=E,v.last=E)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Ze(),i.sibling=null,a=mn.current,sn(mn,c?a&1|2:a&1),i):($n(i),null);case 22:case 23:return pf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(_i&1073741824)!==0&&($n(i),i.subtreeFlags&6&&(i.flags|=8192)):$n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Zv(n,i){switch(Mu(i),i.tag){case 1:return li(i.type)&&pl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return co(),ln(ai),ln(jn),Uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Nu(i),null;case 13:if(ln(mn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));so()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ln(mn),null;case 4:return co(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Il=!1,qn=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,nt=null;function fo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Mn(n,i,c)}else a.current=null}function tf(n,i,a){try{a()}catch(c){Mn(n,i,c)}}var Np=!1;function Qv(n,i){if(hu=yn,n=fh(),su(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var E=0,k=-1,q=-1,ue=0,Pe=0,Ie=n,Re=null;t:for(;;){for(var Je;Ie!==a||h!==0&&Ie.nodeType!==3||(k=E+h),Ie!==v||c!==0&&Ie.nodeType!==3||(q=E+c),Ie.nodeType===3&&(E+=Ie.nodeValue.length),(Je=Ie.firstChild)!==null;)Re=Ie,Ie=Je;for(;;){if(Ie===n)break t;if(Re===a&&++ue===h&&(k=E),Re===v&&++Pe===c&&(q=E),(Je=Ie.nextSibling)!==null)break;Ie=Re,Re=Ie.parentNode}Ie=Je}a=k===-1||q===-1?null:{start:k,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(pu={focusedElem:n,selectionRange:a},yn=!1,nt=i;nt!==null;)if(i=nt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,nt=n;else for(;nt!==null;){i=nt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,wn=rt.memoizedState,ne=i.stateNode,Z=ne.getSnapshotBeforeUpdate(i.elementType===i.type?st:Wi(i.type,st),wn);ne.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Be){Mn(i,i.return,Be)}if(n=i.sibling,n!==null){n.return=i.return,nt=n;break}nt=i.return}return rt=Np,Np=!1,rt}function wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&tf(i,a,v)}h=h.next}while(h!==c)}}function Ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function nf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[ha],delete i[_u],delete i[Uv],delete i[Fv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Up(n){return n.tag===5||n.tag===3||n.tag===4}function Fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dl));else if(c!==4&&(n=n.child,n!==null))for(rf(n,i,a),n=n.sibling;n!==null;)rf(n,i,a),n=n.sibling}function sf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(sf(n,i,a),n=n.sibling;n!==null;)sf(n,i,a),n=n.sibling}var Hn=null,ji=!1;function jr(n,i,a){for(a=a.child;a!==null;)Op(n,i,a),a=a.sibling}function Op(n,i,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rn,a)}catch{}switch(a.tag){case 5:qn||fo(a,i);case 6:var c=Hn,h=ji;Hn=null,jr(n,i,a),Hn=c,ji=h,Hn!==null&&(ji?(n=Hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Hn.removeChild(a.stateNode));break;case 18:Hn!==null&&(ji?(n=Hn,a=a.stateNode,n.nodeType===8?vu(n.parentNode,a):n.nodeType===1&&vu(n,a),It(n)):vu(Hn,a.stateNode));break;case 4:c=Hn,h=ji,Hn=a.stateNode.containerInfo,ji=!0,jr(n,i,a),Hn=c,ji=h;break;case 0:case 11:case 14:case 15:if(!qn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var v=h,E=v.destroy;v=v.tag,E!==void 0&&((v&2)!==0||(v&4)!==0)&&tf(a,i,E),h=h.next}while(h!==c)}jr(n,i,a);break;case 1:if(!qn&&(fo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Mn(a,i,k)}jr(n,i,a);break;case 21:jr(n,i,a);break;case 22:a.mode&1?(qn=(c=qn)||a.memoizedState!==null,jr(n,i,a),qn=c):jr(n,i,a);break;default:jr(n,i,a)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Jv),i.forEach(function(c){var h=l_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Xi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var v=n,E=i,k=E;e:for(;k!==null;){switch(k.tag){case 5:Hn=k.stateNode,ji=!1;break e;case 3:Hn=k.stateNode.containerInfo,ji=!0;break e;case 4:Hn=k.stateNode.containerInfo,ji=!0;break e}k=k.return}if(Hn===null)throw Error(t(160));Op(v,E,h),Hn=null,ji=!1;var q=h.alternate;q!==null&&(q.return=null),h.return=null}catch(ue){Mn(h,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(i,n),sr(n),c&4){try{wa(3,n,n.return),Ul(3,n)}catch(st){Mn(n,n.return,st)}try{wa(5,n,n.return)}catch(st){Mn(n,n.return,st)}}break;case 1:Xi(i,n),sr(n),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Xi(i,n),sr(n),c&512&&a!==null&&fo(a,a.return),n.flags&32){var h=n.stateNode;try{Oe(h,"")}catch(st){Mn(n,n.return,st)}}if(c&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,E=a!==null?a.memoizedProps:v,k=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&Me(h,v),tt(k,E);var ue=tt(k,v);for(E=0;E<q.length;E+=2){var Pe=q[E],Ie=q[E+1];Pe==="style"?it(h,Ie):Pe==="dangerouslySetInnerHTML"?ze(h,Ie):Pe==="children"?Oe(h,Ie):w(h,Pe,Ie,ue)}switch(k){case"input":Ye(h,v);break;case"textarea":_e(h,v);break;case"select":var Re=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Je=v.value;Je!=null?D(h,!!v.multiple,Je,!1):Re!==!!v.multiple&&(v.defaultValue!=null?D(h,!!v.multiple,v.defaultValue,!0):D(h,!!v.multiple,v.multiple?[]:"",!1))}h[ha]=v}catch(st){Mn(n,n.return,st)}}break;case 6:if(Xi(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(st){Mn(n,n.return,st)}}break;case 3:if(Xi(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{It(i.containerInfo)}catch(st){Mn(n,n.return,st)}break;case 4:Xi(i,n),sr(n);break;case 13:Xi(i,n),sr(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(lf=Ze())),c&4&&zp(n);break;case 22:if(Pe=a!==null&&a.memoizedState!==null,n.mode&1?(qn=(ue=qn)||Pe,Xi(i,n),qn=ue):Xi(i,n),sr(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Pe&&(n.mode&1)!==0)for(nt=n,Pe=n.child;Pe!==null;){for(Ie=nt=Pe;nt!==null;){switch(Re=nt,Je=Re.child,Re.tag){case 0:case 11:case 14:case 15:wa(4,Re,Re.return);break;case 1:fo(Re,Re.return);var rt=Re.stateNode;if(typeof rt.componentWillUnmount=="function"){c=Re,a=Re.return;try{i=c,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){Mn(c,a,st)}}break;case 5:fo(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Gp(Ie);continue}}Je!==null?(Je.return=Re,nt=Je):Gp(Ie)}Pe=Pe.sibling}e:for(Pe=null,Ie=n;;){if(Ie.tag===5){if(Pe===null){Pe=Ie;try{h=Ie.stateNode,ue?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=Ie.stateNode,q=Ie.memoizedProps.style,E=q!=null&&q.hasOwnProperty("display")?q.display:null,k.style.display=_t("display",E))}catch(st){Mn(n,n.return,st)}}}else if(Ie.tag===6){if(Pe===null)try{Ie.stateNode.nodeValue=ue?"":Ie.memoizedProps}catch(st){Mn(n,n.return,st)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Pe===Ie&&(Pe=null),Ie=Ie.return}Pe===Ie&&(Pe=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:Xi(i,n),sr(n),c&4&&zp(n);break;case 21:break;default:Xi(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Up(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Oe(h,""),c.flags&=-33);var v=Fp(n);sf(n,v,h);break;case 3:case 4:var E=c.stateNode.containerInfo,k=Fp(n);rf(n,k,E);break;default:throw Error(t(161))}}catch(q){Mn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function e_(n,i,a){nt=n,Bp(n)}function Bp(n,i,a){for(var c=(n.mode&1)!==0;nt!==null;){var h=nt,v=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Il;if(!E){var k=h.alternate,q=k!==null&&k.memoizedState!==null||qn;k=Il;var ue=qn;if(Il=E,(qn=q)&&!ue)for(nt=h;nt!==null;)E=nt,q=E.child,E.tag===22&&E.memoizedState!==null?Vp(h):q!==null?(q.return=E,nt=q):Vp(h);for(;v!==null;)nt=v,Bp(v),v=v.sibling;nt=h,Il=k,qn=ue}Hp(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,nt=v):Hp(n)}}function Hp(n){for(;nt!==null;){var i=nt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:qn||Ul(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!qn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Wi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Gh(i,v,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gh(i,E,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Pe=ue.memoizedState;if(Pe!==null){var Ie=Pe.dehydrated;Ie!==null&&It(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qn||i.flags&512&&nf(i)}catch(Re){Mn(i,i.return,Re)}}if(i===n){nt=null;break}if(a=i.sibling,a!==null){a.return=i.return,nt=a;break}nt=i.return}}function Gp(n){for(;nt!==null;){var i=nt;if(i===n){nt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,nt=a;break}nt=i.return}}function Vp(n){for(;nt!==null;){var i=nt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ul(4,i)}catch(q){Mn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(q){Mn(i,h,q)}}var v=i.return;try{nf(i)}catch(q){Mn(i,v,q)}break;case 5:var E=i.return;try{nf(i)}catch(q){Mn(i,E,q)}}}catch(q){Mn(i,i.return,q)}if(i===n){nt=null;break}var k=i.sibling;if(k!==null){k.return=i.return,nt=k;break}nt=i.return}}var t_=Math.ceil,Fl=R.ReactCurrentDispatcher,of=R.ReactCurrentOwner,bi=R.ReactCurrentBatchConfig,Wt=0,zn=null,An=null,Gn=0,_i=0,ho=Br(0),Ln=0,Ta=null,Ms=0,Ol=0,af=0,Aa=null,ui=null,lf=0,po=1/0,xr=null,zl=!1,cf=null,Xr=null,kl=!1,$r=null,Bl=0,Ca=0,uf=null,Hl=-1,Gl=0;function Qn(){return(Wt&6)!==0?Ze():Hl!==-1?Hl:Hl=Ze()}function qr(n){return(n.mode&1)===0?1:(Wt&2)!==0&&Gn!==0?Gn&-Gn:zv.transition!==null?(Gl===0&&(Gl=Xs()),Gl):(n=Jt,n!==0||(n=window.event,n=n===void 0?16:wi(n.type)),n)}function $i(n,i,a,c){if(50<Ca)throw Ca=0,uf=null,Error(t(185));Nr(n,a,c),((Wt&2)===0||n!==zn)&&(n===zn&&((Wt&2)===0&&(Ol|=a),Ln===4&&Yr(n,Gn)),fi(n,c),a===1&&Wt===0&&(i.mode&1)===0&&(po=Ze()+500,gl&&Gr()))}function fi(n,i){var a=n.callbackNode;Un(n,i);var c=pn(n,n===zn?Gn:0);if(c===0)a!==null&&We(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&We(a),i===1)n.tag===0?Ov(jp.bind(null,n)):Ph(jp.bind(null,n)),Nv(function(){(Wt&6)===0&&Gr()}),a=null;else{switch(Qa(c)){case 1:a=Mt;break;case 4:a=xt;break;case 16:a=$t;break;case 536870912:a=qt;break;default:a=$t}a=Qp(a,Wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Wp(n,i){if(Hl=-1,Gl=0,(Wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(mo()&&n.callbackNode!==a)return null;var c=pn(n,n===zn?Gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Vl(n,c);else{i=c;var h=Wt;Wt|=2;var v=$p();(zn!==n||Gn!==i)&&(xr=null,po=Ze()+500,ws(n,i));do try{r_();break}catch(k){Xp(n,k)}while(!0);Cu(),Fl.current=v,Wt=h,An!==null?i=0:(zn=null,Gn=0,i=Ln)}if(i!==0){if(i===2&&(h=Ii(n),h!==0&&(c=h,i=ff(n,h))),i===1)throw a=Ta,ws(n,0),Yr(n,c),fi(n,Ze()),a;if(i===6)Yr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!n_(h)&&(i=Vl(n,c),i===2&&(v=Ii(n),v!==0&&(c=v,i=ff(n,v))),i===1))throw a=Ta,ws(n,0),Yr(n,c),fi(n,Ze()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ts(n,ui,xr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(i=lf+500-Ze(),10<i)){if(pn(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Qn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=gu(Ts.bind(null,n,ui,xr),i);break}Ts(n,ui,xr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-Tn(c);v=1<<E,E=i[E],E>h&&(h=E),c&=~v}if(c=h,c=Ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*t_(c/1960))-c,10<c){n.timeoutHandle=gu(Ts.bind(null,n,ui,xr),c);break}Ts(n,ui,xr);break;case 5:Ts(n,ui,xr);break;default:throw Error(t(329))}}}return fi(n,Ze()),n.callbackNode===a?Wp.bind(null,n):null}function ff(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(ws(n,i).flags|=256),n=Vl(n,i),n!==2&&(i=ui,ui=a,i!==null&&df(i)),n}function df(n){ui===null?ui=n:ui.push.apply(ui,n)}function n_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],v=h.getSnapshot;h=h.value;try{if(!Gi(v(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yr(n,i){for(i&=~af,i&=~Ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tn(i),c=1<<a;n[a]=-1,i&=~c}}function jp(n){if((Wt&6)!==0)throw Error(t(327));mo();var i=pn(n,0);if((i&1)===0)return fi(n,Ze()),null;var a=Vl(n,i);if(n.tag!==0&&a===2){var c=Ii(n);c!==0&&(i=c,a=ff(n,c))}if(a===1)throw a=Ta,ws(n,0),Yr(n,i),fi(n,Ze()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ts(n,ui,xr),fi(n,Ze()),null}function hf(n,i){var a=Wt;Wt|=1;try{return n(i)}finally{Wt=a,Wt===0&&(po=Ze()+500,gl&&Gr())}}function Es(n){$r!==null&&$r.tag===0&&(Wt&6)===0&&mo();var i=Wt;Wt|=1;var a=bi.transition,c=Jt;try{if(bi.transition=null,Jt=1,n)return n()}finally{Jt=c,bi.transition=a,Wt=i,(Wt&6)===0&&Gr()}}function pf(){_i=ho.current,ln(ho)}function ws(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Dv(a)),An!==null)for(a=An.return;a!==null;){var c=a;switch(Mu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&pl();break;case 3:co(),ln(ai),ln(jn),Uu();break;case 5:Nu(c);break;case 4:co();break;case 13:ln(mn);break;case 19:ln(mn);break;case 10:Ru(c.type._context);break;case 22:case 23:pf()}a=a.return}if(zn=n,An=n=Kr(n.current,null),Gn=_i=i,Ln=0,Ta=null,af=Ol=Ms=0,ui=Aa=null,xs!==null){for(i=0;i<xs.length;i++)if(a=xs[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,v=a.pending;if(v!==null){var E=v.next;v.next=h,c.next=E}a.pending=c}xs=null}return n}function Xp(n,i){do{var a=An;try{if(Cu(),Al.current=Pl,Cl){for(var c=gn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Cl=!1}if(Ss=0,On=Pn=gn=null,xa=!1,ya=0,of.current=null,a===null||a.return===null){Ln=1,Ta=i,An=null;break}e:{var v=n,E=a.return,k=a,q=i;if(i=Gn,k.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ue=q,Pe=k,Ie=Pe.tag;if((Pe.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Re=Pe.alternate;Re?(Pe.updateQueue=Re.updateQueue,Pe.memoizedState=Re.memoizedState,Pe.lanes=Re.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Je=vp(E);if(Je!==null){Je.flags&=-257,_p(Je,E,k,v,i),Je.mode&1&&gp(v,ue,i),i=Je,q=ue;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(q),i.updateQueue=st}else rt.add(q);break e}else{if((i&1)===0){gp(v,ue,i),mf();break e}q=Error(t(426))}}else if(fn&&k.mode&1){var wn=vp(E);if(wn!==null){(wn.flags&65536)===0&&(wn.flags|=256),_p(wn,E,k,v,i),Tu(uo(q,k));break e}}v=q=uo(q,k),Ln!==4&&(Ln=2),Aa===null?Aa=[v]:Aa.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ne=pp(v,q,i);Hh(v,ne);break e;case 1:k=q;var Z=v.type,se=v.stateNode;if((v.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Xr===null||!Xr.has(se)))){v.flags|=65536,i&=-i,v.lanes|=i;var Be=mp(v,k,i);Hh(v,Be);break e}}v=v.return}while(v!==null)}Yp(a)}catch(ut){i=ut,An===a&&a!==null&&(An=a=a.return);continue}break}while(!0)}function $p(){var n=Fl.current;return Fl.current=Pl,n===null?Pl:n}function mf(){(Ln===0||Ln===3||Ln===2)&&(Ln=4),zn===null||(Ms&268435455)===0&&(Ol&268435455)===0||Yr(zn,Gn)}function Vl(n,i){var a=Wt;Wt|=2;var c=$p();(zn!==n||Gn!==i)&&(xr=null,ws(n,i));do try{i_();break}catch(h){Xp(n,h)}while(!0);if(Cu(),Wt=a,Fl.current=c,An!==null)throw Error(t(261));return zn=null,Gn=0,Ln}function i_(){for(;An!==null;)qp(An)}function r_(){for(;An!==null&&!ct();)qp(An)}function qp(n){var i=Jp(n.alternate,n,_i);n.memoizedProps=n.pendingProps,i===null?Yp(n):An=i,of.current=null}function Yp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Kv(a,i,_i),a!==null){An=a;return}}else{if(a=Zv(a,i),a!==null){a.flags&=32767,An=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ln=6,An=null;return}}if(i=i.sibling,i!==null){An=i;return}An=i=n}while(i!==null);Ln===0&&(Ln=5)}function Ts(n,i,a){var c=Jt,h=bi.transition;try{bi.transition=null,Jt=1,s_(n,i,a,c)}finally{bi.transition=h,Jt=c}return null}function s_(n,i,a,c){do mo();while($r!==null);if((Wt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Ja(n,v),n===zn&&(An=zn=null,Gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||kl||(kl=!0,Qp($t,function(){return mo(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=bi.transition,bi.transition=null;var E=Jt;Jt=1;var k=Wt;Wt|=4,of.current=null,Qv(n,a),kp(a,n),Tv(pu),yn=!!hu,pu=hu=null,n.current=a,e_(a),pt(),Wt=k,Jt=E,bi.transition=v}else n.current=a;if(kl&&(kl=!1,$r=n,Bl=h),v=n.pendingLanes,v===0&&(Xr=null),wt(a.stateNode),fi(n,Ze()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(zl)throw zl=!1,n=cf,cf=null,n;return(Bl&1)!==0&&n.tag!==0&&mo(),v=n.pendingLanes,(v&1)!==0?n===uf?Ca++:(Ca=0,uf=n):Ca=0,Gr(),null}function mo(){if($r!==null){var n=Qa(Bl),i=bi.transition,a=Jt;try{if(bi.transition=null,Jt=16>n?16:n,$r===null)var c=!1;else{if(n=$r,$r=null,Bl=0,(Wt&6)!==0)throw Error(t(331));var h=Wt;for(Wt|=4,nt=n.current;nt!==null;){var v=nt,E=v.child;if((nt.flags&16)!==0){var k=v.deletions;if(k!==null){for(var q=0;q<k.length;q++){var ue=k[q];for(nt=ue;nt!==null;){var Pe=nt;switch(Pe.tag){case 0:case 11:case 15:wa(8,Pe,v)}var Ie=Pe.child;if(Ie!==null)Ie.return=Pe,nt=Ie;else for(;nt!==null;){Pe=nt;var Re=Pe.sibling,Je=Pe.return;if(Ip(Pe),Pe===ue){nt=null;break}if(Re!==null){Re.return=Je,nt=Re;break}nt=Je}}}var rt=v.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var wn=st.sibling;st.sibling=null,st=wn}while(st!==null)}}nt=v}}if((v.subtreeFlags&2064)!==0&&E!==null)E.return=v,nt=E;else e:for(;nt!==null;){if(v=nt,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:wa(9,v,v.return)}var ne=v.sibling;if(ne!==null){ne.return=v.return,nt=ne;break e}nt=v.return}}var Z=n.current;for(nt=Z;nt!==null;){E=nt;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,nt=se;else e:for(E=Z;nt!==null;){if(k=nt,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Ul(9,k)}}catch(ut){Mn(k,k.return,ut)}if(k===E){nt=null;break e}var Be=k.sibling;if(Be!==null){Be.return=k.return,nt=Be;break e}nt=k.return}}if(Wt=h,Gr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rn,n)}catch{}c=!0}return c}finally{Jt=a,bi.transition=i}}return!1}function Kp(n,i,a){i=uo(a,i),i=pp(n,i,1),n=Wr(n,i,1),i=Qn(),n!==null&&(Nr(n,1,i),fi(n,i))}function Mn(n,i,a){if(n.tag===3)Kp(n,n,a);else for(;i!==null;){if(i.tag===3){Kp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xr===null||!Xr.has(c))){n=uo(a,n),n=mp(i,n,1),i=Wr(i,n,1),n=Qn(),i!==null&&(Nr(i,1,n),fi(i,n));break}}i=i.return}}function o_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&a,zn===n&&(Gn&a)===a&&(Ln===4||Ln===3&&(Gn&130023424)===Gn&&500>Ze()-lf?ws(n,0):af|=a),fi(n,i)}function Zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var a=Qn();n=gr(n,i),n!==null&&(Nr(n,i,a),fi(n,a))}function a_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zp(n,a)}function l_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zp(n,a)}var Jp;Jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ai.current)ci=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ci=!1,Yv(n,i,a);ci=(n.flags&131072)!==0}else ci=!1,fn&&(i.flags&1048576)!==0&&Lh(i,_l,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Nl(n,i),n=i.pendingProps;var h=no(i,jn.current);lo(i,a),h=zu(null,i,c,n,h,a);var v=ku();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,li(c)?(v=!0,ml(i)):v=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Lu(i),h.updater=Ll,i.stateNode=h,h._reactInternals=i,ju(i,c,n,a),i=Yu(null,i,c,!0,v,a)):(i.tag=0,fn&&v&&Su(i),Jn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Nl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=u_(c),n=Wi(c,n),h){case 0:i=qu(null,i,c,n,a);break e;case 1:i=wp(null,i,c,n,a);break e;case 11:i=xp(null,i,c,n,a);break e;case 14:i=yp(null,i,c,Wi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Wi(c,h),qu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Wi(c,h),wp(n,i,c,h,a);case 3:e:{if(Tp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,h=v.element,Bh(n,i),wl(i,c,null,a);var E=i.memoizedState;if(c=E.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){h=uo(Error(t(423)),i),i=Ap(n,i,c,a,h);break e}else if(c!==h){h=uo(Error(t(424)),i),i=Ap(n,i,c,a,h);break e}else for(vi=kr(i.stateNode.containerInfo.firstChild),gi=i,fn=!0,Vi=null,a=zh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(so(),c===h){i=_r(n,i,a);break e}Jn(n,i,c,a)}i=i.child}return i;case 5:return Vh(i),n===null&&wu(i),c=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,E=h.children,mu(c,h)?E=null:v!==null&&mu(c,v)&&(i.flags|=32),Ep(n,i),Jn(n,i,E,a),i.child;case 6:return n===null&&wu(i),null;case 13:return Cp(n,i,a);case 4:return Du(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=oo(i,null,c,a):Jn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Wi(c,h),xp(n,i,c,h,a);case 7:return Jn(n,i,i.pendingProps,a),i.child;case 8:return Jn(n,i,i.pendingProps.children,a),i.child;case 12:return Jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,v=i.memoizedProps,E=h.value,sn(Sl,c._currentValue),c._currentValue=E,v!==null)if(Gi(v.value,E)){if(v.children===h.children&&!ai.current){i=_r(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var k=v.dependencies;if(k!==null){E=v.child;for(var q=k.firstContext;q!==null;){if(q.context===c){if(v.tag===1){q=vr(-1,a&-a),q.tag=2;var ue=v.updateQueue;if(ue!==null){ue=ue.shared;var Pe=ue.pending;Pe===null?q.next=q:(q.next=Pe.next,Pe.next=q),ue.pending=q}}v.lanes|=a,q=v.alternate,q!==null&&(q.lanes|=a),bu(v.return,a,i),k.lanes|=a;break}q=q.next}}else if(v.tag===10)E=v.type===i.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),bu(E,a,i),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===i){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Jn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,lo(i,a),h=Ci(h),c=c(h),i.flags|=1,Jn(n,i,c,a),i.child;case 14:return c=i.type,h=Wi(c,i.pendingProps),h=Wi(c.type,h),yp(n,i,c,h,a);case 15:return Sp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Wi(c,h),Nl(n,i),i.tag=1,li(c)?(n=!0,ml(i)):n=!1,lo(i,a),dp(i,c,h),ju(i,c,h,a),Yu(null,i,c,!0,n,a);case 19:return bp(n,i,a);case 22:return Mp(n,i,a)}throw Error(t(156,i.tag))};function Qp(n,i){return re(n,i)}function c_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(n,i,a,c){return new c_(n,i,a,c)}function gf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function u_(n){if(typeof n=="function")return gf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Se)return 11;if(n===fe)return 14}return 2}function Kr(n,i){var a=n.alternate;return a===null?(a=Pi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wl(n,i,a,c,h,v){var E=2;if(c=n,typeof n=="function")gf(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return As(a.children,h,v,i);case $:E=8,h|=8;break;case xe:return n=Pi(12,a,i,h|2),n.elementType=xe,n.lanes=v,n;case ve:return n=Pi(13,a,i,h),n.elementType=ve,n.lanes=v,n;case j:return n=Pi(19,a,i,h),n.elementType=j,n.lanes=v,n;case ae:return jl(a,h,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:E=10;break e;case I:E=9;break e;case Se:E=11;break e;case fe:E=14;break e;case W:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Pi(E,a,i,h),i.elementType=n,i.type=c,i.lanes=v,i}function As(n,i,a,c){return n=Pi(7,n,c,i),n.lanes=a,n}function jl(n,i,a,c){return n=Pi(22,n,c,i),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function vf(n,i,a){return n=Pi(6,n,null,i),n.lanes=a,n}function _f(n,i,a){return i=Pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function f_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function xf(n,i,a,c,h,v,E,k,q){return n=new f_(n,i,a,k,q),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Pi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(v),n}function d_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function em(n){if(!n)return Hr;n=n._reactInternals;e:{if(si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(li(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(li(a))return Rh(n,a,i)}return i}function tm(n,i,a,c,h,v,E,k,q){return n=xf(a,c,!0,n,h,v,E,k,q),n.context=em(null),a=n.current,c=Qn(),h=qr(a),v=vr(c,h),v.callback=i??null,Wr(a,v,h),n.current.lanes=h,Nr(n,h,c),fi(n,c),n}function Xl(n,i,a,c){var h=i.current,v=Qn(),E=qr(h);return a=em(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(v,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Wr(h,i,E),n!==null&&($i(n,h,E,v),El(n,h,E)),E}function $l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function yf(n,i){nm(n,i),(n=n.alternate)&&nm(n,i)}function h_(){return null}var im=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}ql.prototype.render=Sf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Xl(n,i,null,null)},ql.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Es(function(){Xl(null,n,null,null)}),i[dr]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var i=tl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<zi.length&&i!==0&&i<zi[a].priority;a++);zi.splice(a,0,n),a===0&&Ee(n)}};function Mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rm(){}function p_(n,i,a,c,h){if(h){if(typeof c=="function"){var v=c;c=function(){var ue=$l(E);v.call(ue)}}var E=tm(i,c,n,0,null,!1,!1,"",rm);return n._reactRootContainer=E,n[dr]=E.current,fa(n.nodeType===8?n.parentNode:n),Es(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var ue=$l(q);k.call(ue)}}var q=xf(n,0,!1,null,null,!1,!1,"",rm);return n._reactRootContainer=q,n[dr]=q.current,fa(n.nodeType===8?n.parentNode:n),Es(function(){Xl(i,q,a,c)}),q}function Kl(n,i,a,c,h){var v=a._reactRootContainer;if(v){var E=v;if(typeof h=="function"){var k=h;h=function(){var q=$l(E);k.call(q)}}Xl(i,E,n,h)}else E=p_(a,i,n,h,c);return $l(E)}el=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Zt(i.pendingLanes);a!==0&&(ea(i,a|1),fi(i,Ze()),(Wt&6)===0&&(po=Ze()+500,Gr()))}break;case 13:Es(function(){var c=gr(n,1);if(c!==null){var h=Qn();$i(c,n,1,h)}}),yf(n,1)}},ta=function(n){if(n.tag===13){var i=gr(n,134217728);if(i!==null){var a=Qn();$i(i,n,134217728,a)}yf(n,134217728)}},$s=function(n){if(n.tag===13){var i=qr(n),a=gr(n,i);if(a!==null){var c=Qn();$i(a,n,i,c)}yf(n,i)}},tl=function(){return Jt},nl=function(n,i){var a=Jt;try{return Jt=n,i()}finally{Jt=a}},Vt=function(n,i,a){switch(i){case"input":if(Ye(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=hl(c);if(!h)throw Error(t(90));H(c),Ye(c,h)}}}break;case"textarea":_e(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ve=hf,Qe=Es;var m_={usingClientEntryPoint:!1,Events:[pa,eo,hl,pe,me,hf]},Ra={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g_={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ie(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||h_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Rn=Zl.inject(g_),Ut=Zl}catch{}}return di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m_,di.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(i))throw Error(t(200));return d_(n,i,null,a)},di.createRoot=function(n,i){if(!Mf(n))throw Error(t(299));var a=!1,c="",h=im;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=xf(n,1,!1,null,null,a,!1,c,h),n[dr]=i.current,fa(n.nodeType===8?n.parentNode:n),new Sf(i)},di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ie(i),n=n===null?null:n.stateNode,n},di.flushSync=function(n){return Es(n)},di.hydrate=function(n,i,a){if(!Yl(i))throw Error(t(200));return Kl(null,n,i,!0,a)},di.hydrateRoot=function(n,i,a){if(!Mf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,v="",E=im;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=tm(i,null,n,1,a??null,h,!1,v,E),n[dr]=i.current,fa(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new ql(i)},di.render=function(n,i,a){if(!Yl(i))throw Error(t(200));return Kl(null,n,i,!1,a)},di.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},di.unstable_batchedUpdates=hf,di.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,i,a,!1,c)},di.version="18.3.1-next-f1338f8080-20240426",di}var dm;function T_(){if(dm)return Tf.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tf.exports=w_(),Tf.exports}var hm;function A_(){if(hm)return Jl;hm=1;var s=T_();return Jl.createRoot=s.createRoot,Jl.hydrateRoot=s.hydrateRoot,Jl}var C_=A_();const R_=i0(C_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="162",b_=0,pm=1,P_=2,r0=1,L_=2,Ar=3,us=0,ii=1,Si=2,as=0,Xo=1,mm=2,gm=3,vm=4,D_=5,Us=100,N_=101,I_=102,_m=103,xm=104,U_=200,F_=201,O_=202,z_=203,xd=204,yd=205,k_=206,B_=207,H_=208,G_=209,V_=210,W_=211,j_=212,X_=213,$_=214,q_=0,Y_=1,K_=2,Uc=3,Z_=4,J_=5,Q_=6,ex=7,$c=0,tx=1,nx=2,ls=0,ix=1,rx=2,sx=3,ox=4,ax=5,lx=6,cx=7,s0=300,qo=301,Yo=302,Sd=303,Md=304,qc=306,Ed=1e3,Zi=1001,wd=1002,ni=1003,ym=1004,Pa=1005,hi=1006,Rf=1007,zs=1008,cs=1009,ux=1010,fx=1011,Ud=1012,o0=1013,os=1014,Cr=1015,Va=1016,a0=1017,l0=1018,ks=1020,dx=1021,Ji=1023,hx=1024,px=1025,Bs=1026,Ko=1027,mx=1028,c0=1029,gx=1030,u0=1031,f0=1033,bf=33776,Pf=33777,Lf=33778,Df=33779,Sm=35840,Mm=35841,Em=35842,wm=35843,d0=36196,Tm=37492,Am=37496,Cm=37808,Rm=37809,bm=37810,Pm=37811,Lm=37812,Dm=37813,Nm=37814,Im=37815,Um=37816,Fm=37817,Om=37818,zm=37819,km=37820,Bm=37821,Nf=36492,Hm=36494,Gm=36495,vx=36283,Vm=36284,Wm=36285,jm=36286,_x=3200,xx=3201,Yc=0,yx=1,rs="",or="srgb",fs="srgb-linear",Fd="display-p3",Kc="display-p3-linear",Fc="linear",cn="srgb",Oc="rec709",zc="p3",go=7680,Xm=519,Sx=512,Mx=513,Ex=514,h0=515,wx=516,Tx=517,Ax=518,Cx=519,Td=35044,$m="300 es",Ad=1035,Rr=2e3,kc=2001;class Jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=Math.PI/180,Bc=180/Math.PI;function br(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Zn(s,e,t){return Math.max(e,Math.min(t,s))}function Rx(s,e){return(s%e+e)%e}function Uf(s,e,t){return(1-t)*s+t*e}function qm(s){return(s&s-1)===0&&s!==0}function Cd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*o+e.x,this.y=l*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(e,t,r,o,l,f,u,d,p){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,u,d,p)}set(e,t,r,o,l,f,u,d,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],u=r[3],d=r[6],p=r[1],m=r[4],g=r[7],_=r[2],S=r[5],M=r[8],A=o[0],x=o[3],y=o[6],N=o[1],w=o[4],R=o[7],B=o[2],z=o[5],O=o[8];return l[0]=f*A+u*N+d*B,l[3]=f*x+u*w+d*z,l[6]=f*y+u*R+d*O,l[1]=p*A+m*N+g*B,l[4]=p*x+m*w+g*z,l[7]=p*y+m*R+g*O,l[2]=_*A+S*N+M*B,l[5]=_*x+S*w+M*z,l[8]=_*y+S*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8];return t*f*m-t*u*p-r*l*m+r*u*d+o*l*p-o*f*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],g=m*f-u*p,_=u*d-m*l,S=p*l-f*d,M=t*g+r*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(o*p-m*r)*A,e[2]=(u*r-o*f)*A,e[3]=_*A,e[4]=(m*t-o*d)*A,e[5]=(o*l-u*t)*A,e[6]=S*A,e[7]=(r*d-p*t)*A,e[8]=(f*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,f,u){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*f+p*u)+f+e,-o*p,o*d,-o*(-p*f+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new Ot;function p0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bx(){const s=Hc("canvas");return s.style.display="block",s}const Ym={};function m0(s){s in Ym||(Ym[s]=!0,console.warn(s))}const Km=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zm=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ql={[fs]:{transfer:Fc,primaries:Oc,toReference:s=>s,fromReference:s=>s},[or]:{transfer:cn,primaries:Oc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Kc]:{transfer:Fc,primaries:zc,toReference:s=>s.applyMatrix3(Zm),fromReference:s=>s.applyMatrix3(Km)},[Fd]:{transfer:cn,primaries:zc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zm),fromReference:s=>s.applyMatrix3(Km).convertLinearToSRGB()}},Px=new Set([fs,Kc]),nn={enabled:!0,_workingColorSpace:fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Px.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=Ql[e].toReference,o=Ql[t].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ql[s].primaries},getTransfer:function(s){return s===rs?Fc:Ql[s].transfer}};function $o(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Of(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vo;class g0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vo===void 0&&(vo=Hc("canvas")),vo.width=e.width,vo.height=e.height;const r=vo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=$o(l[f]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($o(t[r]/255)*255):t[r]=$o(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lx=0;class v0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,u=o.length;f<u;f++)o[f].isDataTexture?l.push(zf(o[f].image)):l.push(zf(o[f]))}else l=zf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function zf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?g0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class ri extends Jo{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,r=Zi,o=Zi,l=hi,f=zs,u=Ji,d=cs,p=ri.DEFAULT_ANISOTROPY,m=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=br(),this.name="",this.source=new v0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=s0;ri.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,r=0,o=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*o+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],m=d[4],g=d[8],_=d[1],S=d[5],M=d[9],A=d[2],x=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(p+1)/2,R=(S+1)/2,B=(y+1)/2,z=(m+_)/4,O=(g+A)/4,$=(M+x)/4;return w>R&&w>B?w<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(w),o=z/r,l=O/r):R>B?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=z/o,l=$/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=O/l,o=$/l),this.set(r,o,l,t),this}let N=Math.sqrt((x-M)*(x-M)+(g-A)*(g-A)+(_-m)*(_-m));return Math.abs(N)<.001&&(N=1),this.x=(x-M)/N,this.y=(g-A)/N,this.z=(_-m)/N,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nx extends Jo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new ri(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let u=0;u<f;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new v0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends Nx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class _0 extends ri{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ni,this.minFilter=ni,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ix extends ri{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ni,this.minFilter=ni,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,f,u){let d=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];const _=l[f+0],S=l[f+1],M=l[f+2],A=l[f+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=A;return}if(g!==A||d!==_||p!==S||m!==M){let x=1-u;const y=d*_+p*S+m*M+g*A,N=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const B=Math.sqrt(w),z=Math.atan2(B,y*N);x=Math.sin(x*z)/B,u=Math.sin(u*z)/B}const R=u*N;if(d=d*x+_*R,p=p*x+S*R,m=m*x+M*R,g=g*x+A*R,x===1-u){const B=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=B,p*=B,m*=B,g*=B}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,f){const u=r[o],d=r[o+1],p=r[o+2],m=r[o+3],g=l[f],_=l[f+1],S=l[f+2],M=l[f+3];return e[t]=u*M+m*g+d*S-p*_,e[t+1]=d*M+m*_+p*g-u*S,e[t+2]=p*M+m*S+u*_-d*g,e[t+3]=m*M-u*g-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,f=e._order,u=Math.cos,d=Math.sin,p=u(r/2),m=u(o/2),g=u(l/2),_=d(r/2),S=d(o/2),M=d(l/2);switch(f){case"XYZ":this._x=_*m*g+p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g-_*S*M;break;case"YXZ":this._x=_*m*g+p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g+_*S*M;break;case"ZXY":this._x=_*m*g-p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g-_*S*M;break;case"ZYX":this._x=_*m*g-p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g+_*S*M;break;case"YZX":this._x=_*m*g+p*S*M,this._y=p*S*g+_*m*M,this._z=p*m*M-_*S*g,this._w=p*m*g-_*S*M;break;case"XZY":this._x=_*m*g-p*S*M,this._y=p*S*g-_*m*M,this._z=p*m*M+_*S*g,this._w=p*m*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],f=t[1],u=t[5],d=t[9],p=t[2],m=t[6],g=t[10],_=r+u+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(f-o)*S}else if(r>u&&r>g){const S=2*Math.sqrt(1+r-u-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(l+p)/S}else if(u>g){const S=2*Math.sqrt(1+u-r-g);this._w=(l-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-r-u);this._w=(f-o)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,f=e._w,u=t._x,d=t._y,p=t._z,m=t._w;return this._x=r*m+f*u+o*p-l*d,this._y=o*m+f*d+l*u-r*p,this._z=l*m+f*p+r*d-o*u,this._w=f*m-r*u-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,f=this._w;let u=f*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=o,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,u),g=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=f*g+this._w*_,this._x=r*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,f=e.y,u=e.z,d=e.w,p=2*(f*o-u*r),m=2*(u*t-l*o),g=2*(l*r-f*t);return this.x=t+d*p+f*g-u*m,this.y=r+d*m+u*p-l*g,this.z=o+d*g+l*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,f=t.x,u=t.y,d=t.z;return this.x=o*d-l*u,this.y=l*f-r*d,this.z=r*u-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new V,Jm=new $a;class qa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=l.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,qi):qi.fromBufferAttribute(l,f),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ec.copy(r.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const o=e.children;for(let l=0,f=o.length;l<f;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),tc.subVectors(this.max,La),_o.subVectors(e.a,La),xo.subVectors(e.b,La),yo.subVectors(e.c,La),Jr.subVectors(xo,_o),Qr.subVectors(yo,xo),Cs.subVectors(_o,yo);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Cs.z,Cs.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Cs.z,0,-Cs.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Cs.y,Cs.x,0];return!Bf(t,_o,xo,yo,tc)||(t=[1,0,0,0,1,0,0,0,1],!Bf(t,_o,xo,yo,tc))?!1:(nc.crossVectors(Jr,Qr),t=[nc.x,nc.y,nc.z],Bf(t,_o,xo,yo,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yr=[new V,new V,new V,new V,new V,new V,new V,new V],qi=new V,ec=new qa,_o=new V,xo=new V,yo=new V,Jr=new V,Qr=new V,Cs=new V,La=new V,tc=new V,nc=new V,Rs=new V;function Bf(s,e,t,r,o){for(let l=0,f=s.length-3;l<=f;l+=3){Rs.fromArray(s,l);const u=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),d=e.dot(Rs),p=t.dot(Rs),m=r.dot(Rs);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>u)return!1}return!0}const Ux=new qa,Da=new V,Hf=new V;class Ya{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ux.setFromPoints(e).getCenter(r);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Hf)),this.expandByPoint(Da.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new V,Gf=new V,ic=new V,es=new V,Vf=new V,rc=new V,Wf=new V;class Od{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gf.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Gf);const l=e.distanceTo(t)*.5,f=-this.direction.dot(ic),u=es.dot(this.direction),d=-es.dot(ic),p=es.lengthSq(),m=Math.abs(1-f*f);let g,_,S,M;if(m>0)if(g=f*d-u,_=f*u-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const A=1/m;g*=A,_*=A,S=g*(g+f*_+2*u)+_*(f*g+_+2*d)+p}else _=l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;else _=-l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;else _<=-M?(g=Math.max(0,-(-f*l+u)),_=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+p):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(g=Math.max(0,-(f*l+u)),_=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+p);else _=f>0?-l:l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Gf).addScaledVector(ic,_),S}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),u=r-f,d=r+f;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,f,u,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,f=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,f=(e.min.y-_.y)*m),r>f||l>o||((l>r||isNaN(r))&&(r=l),(f<o||isNaN(o))&&(o=f),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){Vf.subVectors(t,e),rc.subVectors(r,e),Wf.crossVectors(Vf,rc);let f=this.direction.dot(Wf),u;if(f>0){if(o)return null;u=1}else if(f<0)u=-1,f=-f;else return null;es.subVectors(this.origin,e);const d=u*this.direction.dot(rc.crossVectors(es,rc));if(d<0)return null;const p=u*this.direction.dot(Vf.cross(es));if(p<0||d+p>f)return null;const m=-u*es.dot(Wf);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x)}set(e,t,r,o,l,f,u,d,p,m,g,_,S,M,A,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=f,y[9]=u,y[13]=d,y[2]=p,y[6]=m,y[10]=g,y[14]=_,y[3]=S,y[7]=M,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/So.setFromMatrixColumn(e,0).length(),l=1/So.setFromMatrixColumn(e,1).length(),f=1/So.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,f=Math.cos(r),u=Math.sin(r),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=f*m,S=f*g,M=u*m,A=u*g;t[0]=d*m,t[4]=-d*g,t[8]=p,t[1]=S+M*p,t[5]=_-A*p,t[9]=-u*d,t[2]=A-_*p,t[6]=M+S*p,t[10]=f*d}else if(e.order==="YXZ"){const _=d*m,S=d*g,M=p*m,A=p*g;t[0]=_+A*u,t[4]=M*u-S,t[8]=f*p,t[1]=f*g,t[5]=f*m,t[9]=-u,t[2]=S*u-M,t[6]=A+_*u,t[10]=f*d}else if(e.order==="ZXY"){const _=d*m,S=d*g,M=p*m,A=p*g;t[0]=_-A*u,t[4]=-f*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=f*m,t[9]=A-_*u,t[2]=-f*p,t[6]=u,t[10]=f*d}else if(e.order==="ZYX"){const _=f*m,S=f*g,M=u*m,A=u*g;t[0]=d*m,t[4]=M*p-S,t[8]=_*p+A,t[1]=d*g,t[5]=A*p+_,t[9]=S*p-M,t[2]=-p,t[6]=u*d,t[10]=f*d}else if(e.order==="YZX"){const _=f*d,S=f*p,M=u*d,A=u*p;t[0]=d*m,t[4]=A-_*g,t[8]=M*g+S,t[1]=g,t[5]=f*m,t[9]=-u*m,t[2]=-p*m,t[6]=S*g+M,t[10]=_-A*g}else if(e.order==="XZY"){const _=f*d,S=f*p,M=u*d,A=u*p;t[0]=d*m,t[4]=-g,t[8]=p*m,t[1]=_*g+A,t[5]=f*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=A*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,r){const o=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ts.crossVectors(r,xi),ts.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ts.crossVectors(r,xi)),ts.normalize(),sc.crossVectors(xi,ts),o[0]=ts.x,o[4]=sc.x,o[8]=xi.x,o[1]=ts.y,o[5]=sc.y,o[9]=xi.y,o[2]=ts.z,o[6]=sc.z,o[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],u=r[4],d=r[8],p=r[12],m=r[1],g=r[5],_=r[9],S=r[13],M=r[2],A=r[6],x=r[10],y=r[14],N=r[3],w=r[7],R=r[11],B=r[15],z=o[0],O=o[4],$=o[8],xe=o[12],T=o[1],I=o[5],Se=o[9],ve=o[13],j=o[2],fe=o[6],W=o[10],ae=o[14],F=o[3],Y=o[7],X=o[11],U=o[15];return l[0]=f*z+u*T+d*j+p*F,l[4]=f*O+u*I+d*fe+p*Y,l[8]=f*$+u*Se+d*W+p*X,l[12]=f*xe+u*ve+d*ae+p*U,l[1]=m*z+g*T+_*j+S*F,l[5]=m*O+g*I+_*fe+S*Y,l[9]=m*$+g*Se+_*W+S*X,l[13]=m*xe+g*ve+_*ae+S*U,l[2]=M*z+A*T+x*j+y*F,l[6]=M*O+A*I+x*fe+y*Y,l[10]=M*$+A*Se+x*W+y*X,l[14]=M*xe+A*ve+x*ae+y*U,l[3]=N*z+w*T+R*j+B*F,l[7]=N*O+w*I+R*fe+B*Y,l[11]=N*$+w*Se+R*W+B*X,l[15]=N*xe+w*ve+R*ae+B*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],f=e[1],u=e[5],d=e[9],p=e[13],m=e[2],g=e[6],_=e[10],S=e[14],M=e[3],A=e[7],x=e[11],y=e[15];return M*(+l*d*g-o*p*g-l*u*_+r*p*_+o*u*S-r*d*S)+A*(+t*d*S-t*p*_+l*f*_-o*f*S+o*p*m-l*d*m)+x*(+t*p*g-t*u*S-l*f*g+r*f*S+l*u*m-r*p*m)+y*(-o*u*m-t*d*g+t*u*_+o*f*g-r*f*_+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],p=e[7],m=e[8],g=e[9],_=e[10],S=e[11],M=e[12],A=e[13],x=e[14],y=e[15],N=g*x*p-A*_*p+A*d*S-u*x*S-g*d*y+u*_*y,w=M*_*p-m*x*p-M*d*S+f*x*S+m*d*y-f*_*y,R=m*A*p-M*g*p+M*u*S-f*A*S-m*u*y+f*g*y,B=M*g*d-m*A*d-M*u*_+f*A*_+m*u*x-f*g*x,z=t*N+r*w+o*R+l*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=N*O,e[1]=(A*_*l-g*x*l-A*o*S+r*x*S+g*o*y-r*_*y)*O,e[2]=(u*x*l-A*d*l+A*o*p-r*x*p-u*o*y+r*d*y)*O,e[3]=(g*d*l-u*_*l-g*o*p+r*_*p+u*o*S-r*d*S)*O,e[4]=w*O,e[5]=(m*x*l-M*_*l+M*o*S-t*x*S-m*o*y+t*_*y)*O,e[6]=(M*d*l-f*x*l-M*o*p+t*x*p+f*o*y-t*d*y)*O,e[7]=(f*_*l-m*d*l+m*o*p-t*_*p-f*o*S+t*d*S)*O,e[8]=R*O,e[9]=(M*g*l-m*A*l-M*r*S+t*A*S+m*r*y-t*g*y)*O,e[10]=(f*A*l-M*u*l+M*r*p-t*A*p-f*r*y+t*u*y)*O,e[11]=(m*u*l-f*g*l-m*r*p+t*g*p+f*r*S-t*u*S)*O,e[12]=B*O,e[13]=(m*A*o-M*g*o+M*r*_-t*A*_-m*r*x+t*g*x)*O,e[14]=(M*u*o-f*A*o-M*r*d+t*A*d+f*r*x-t*u*x)*O,e[15]=(f*g*o-m*u*o+m*r*d-t*g*d-f*r*_+t*u*_)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,f=e.x,u=e.y,d=e.z,p=l*f,m=l*u;return this.set(p*f+r,p*u-o*d,p*d+o*u,0,p*u+o*d,m*u+r,m*d-o*f,0,p*d-o*u,m*d+o*f,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,f){return this.set(1,r,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,f=t._y,u=t._z,d=t._w,p=l+l,m=f+f,g=u+u,_=l*p,S=l*m,M=l*g,A=f*m,x=f*g,y=u*g,N=d*p,w=d*m,R=d*g,B=r.x,z=r.y,O=r.z;return o[0]=(1-(A+y))*B,o[1]=(S+R)*B,o[2]=(M-w)*B,o[3]=0,o[4]=(S-R)*z,o[5]=(1-(_+y))*z,o[6]=(x+N)*z,o[7]=0,o[8]=(M+w)*O,o[9]=(x-N)*O,o[10]=(1-(_+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=So.set(o[0],o[1],o[2]).length();const f=So.set(o[4],o[5],o[6]).length(),u=So.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Yi.copy(this);const p=1/l,m=1/f,g=1/u;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=m,Yi.elements[5]*=m,Yi.elements[6]*=m,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,t.setFromRotationMatrix(Yi),r.x=l,r.y=f,r.z=u,this}makePerspective(e,t,r,o,l,f,u=Rr){const d=this.elements,p=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let S,M;if(u===Rr)S=-(f+l)/(f-l),M=-2*f*l/(f-l);else if(u===kc)S=-f/(f-l),M=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,f,u=Rr){const d=this.elements,p=1/(t-e),m=1/(r-o),g=1/(f-l),_=(t+e)*p,S=(r+o)*m;let M,A;if(u===Rr)M=(f+l)*g,A=-2*g;else if(u===kc)M=l*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=A,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const So=new V,Yi=new on,Fx=new V(0,0,0),Ox=new V(1,1,1),ts=new V,sc=new V,xi=new V,Qm=new on,eg=new $a;class Ni{constructor(e=0,t=0,r=0,o=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],f=o[4],u=o[8],d=o[1],p=o[5],m=o[9],g=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Zn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Zn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const tg=new V,Mo=new $a,Mr=new on,oc=new V,Na=new V,kx=new V,Bx=new $a,ng=new V(1,0,0),ig=new V(0,1,0),rg=new V(0,0,1),Hx={type:"added"},Gx={type:"removed"},jf={type:"childadded",child:null},Xf={type:"childremoved",child:null};class En extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new V,t=new Ni,r=new $a,o=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new Ot}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?oc.copy(e):oc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Na,oc,this.up):Mr.lookAt(oc,Na,this.up),this.quaternion.setFromRotationMatrix(Mr),o&&(Mr.extractRotation(o.matrixWorld),Mo.setFromRotationMatrix(Mr),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),jf.child=e,this.dispatchEvent(jf),jf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,f=o.length;l<f;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++){const u=o[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(l(e.materials,this.material[d]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(l(e.animations,d))}}if(t){const u=f(e.geometries),d=f(e.materials),p=f(e.textures),m=f(e.images),g=f(e.shapes),_=f(e.skeletons),S=f(e.animations),M=f(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function f(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}En.DEFAULT_UP=new V(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new V,Er=new V,$f=new V,wr=new V,Eo=new V,wo=new V,sg=new V,qf=new V,Yf=new V,Kf=new V;class Qi{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ki.subVectors(e,t),o.cross(Ki);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ki.subVectors(o,t),Er.subVectors(r,t),$f.subVectors(e,t);const f=Ki.dot(Ki),u=Ki.dot(Er),d=Ki.dot($f),p=Er.dot(Er),m=Er.dot($f),g=f*p-u*u;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(p*d-u*m)*_,M=(f*m-u*d)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,r,o,l,f,u,d){return this.getBarycoord(e,t,r,o,wr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,wr.x),d.addScaledVector(f,wr.y),d.addScaledVector(u,wr.z),d)}static isFrontFacing(e,t,r,o){return Ki.subVectors(r,t),Er.subVectors(e,t),Ki.cross(Er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Ki.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Qi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let f,u;Eo.subVectors(o,r),wo.subVectors(l,r),qf.subVectors(e,r);const d=Eo.dot(qf),p=wo.dot(qf);if(d<=0&&p<=0)return t.copy(r);Yf.subVectors(e,o);const m=Eo.dot(Yf),g=wo.dot(Yf);if(m>=0&&g<=m)return t.copy(o);const _=d*g-m*p;if(_<=0&&d>=0&&m<=0)return f=d/(d-m),t.copy(r).addScaledVector(Eo,f);Kf.subVectors(e,l);const S=Eo.dot(Kf),M=wo.dot(Kf);if(M>=0&&S<=M)return t.copy(l);const A=S*p-d*M;if(A<=0&&p>=0&&M<=0)return u=p/(p-M),t.copy(r).addScaledVector(wo,u);const x=m*M-S*g;if(x<=0&&g-m>=0&&S-M>=0)return sg.subVectors(l,o),u=(g-m)/(g-m+(S-M)),t.copy(o).addScaledVector(sg,u);const y=1/(x+A+_);return f=A*y,u=_*y,t.copy(r).addScaledVector(Eo,f).addScaledVector(wo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Zf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=or){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=nn.workingColorSpace){return this.r=e,this.g=t,this.b=r,nn.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=nn.workingColorSpace){if(e=Rx(e,1),t=Zn(t,0,1),r=Zn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Zf(f,l,e+1/3),this.g=Zf(f,l,e),this.b=Zf(f,l,e-1/3)}return nn.toWorkingColorSpace(this,o),this}setStyle(e,t=or){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],u=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=or){const r=y0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}copyLinearToSRGB(e){return this.r=Of(e.r),this.g=Of(e.g),this.b=Of(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=or){return nn.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Zn(Kn.r*255,0,255))*65536+Math.round(Zn(Kn.g*255,0,255))*256+Math.round(Zn(Kn.b*255,0,255))}getHexString(e=or){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Kn.copy(this),t);const r=Kn.r,o=Kn.g,l=Kn.b,f=Math.max(r,o,l),u=Math.min(r,o,l);let d,p;const m=(u+f)/2;if(u===f)d=0,p=0;else{const g=f-u;switch(p=m<=.5?g/(f+u):g/(2-f-u),f){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=or){nn.fromWorkingColorSpace(Kn.copy(this),e);const t=Kn.r,r=Kn.g,o=Kn.b;return e!==or?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(ac);const r=Uf(ns.h,ac.h,t),o=Uf(ns.s,ac.s,t),l=Uf(ns.l,ac.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new bt;bt.NAMES=y0;let Vx=0;class cr extends Jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Xo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(r.blending=this.blending),this.side!==us&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==Us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Uc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const f=[];for(const u in l){const d=l[u];delete d.metadata,f.push(d)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new V,lc=new He;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return m0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=lr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=tn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array),o=tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array),o=tn(o,this.array),l=tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),e}}class S0 extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class M0 extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Qt extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Wx=0;const Li=new on,Jf=new En,To=new V,yi=new qa,Ia=new qa,Bn=new V;class dn extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?M0:S0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,r){return Li.makeTranslation(e,t,r),this.applyMatrix4(Li),this}scale(e,t,r){return Li.makeScale(e,t,r),this.applyMatrix4(Li),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];Ia.setFromBufferAttribute(u),this.morphTargetsRelative?(Bn.addVectors(yi.min,Ia.min),yi.expandByPoint(Bn),Bn.addVectors(yi.max,Ia.max),yi.expandByPoint(Bn)):(yi.expandByPoint(Ia.min),yi.expandByPoint(Ia.max))}yi.getCenter(r);let o=0;for(let l=0,f=e.count;l<f;l++)Bn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Bn));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],d=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)Bn.fromBufferAttribute(u,p),d&&(To.fromBufferAttribute(e,p),Bn.add(To)),o=Math.max(o,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),u=[],d=[];for(let $=0;$<r.count;$++)u[$]=new V,d[$]=new V;const p=new V,m=new V,g=new V,_=new He,S=new He,M=new He,A=new V,x=new V;function y($,xe,T){p.fromBufferAttribute(r,$),m.fromBufferAttribute(r,xe),g.fromBufferAttribute(r,T),_.fromBufferAttribute(l,$),S.fromBufferAttribute(l,xe),M.fromBufferAttribute(l,T),m.sub(p),g.sub(p),S.sub(_),M.sub(_);const I=1/(S.x*M.y-M.x*S.y);isFinite(I)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(I),x.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(I),u[$].add(A),u[xe].add(A),u[T].add(A),d[$].add(x),d[xe].add(x),d[T].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,xe=N.length;$<xe;++$){const T=N[$],I=T.start,Se=T.count;for(let ve=I,j=I+Se;ve<j;ve+=3)y(e.getX(ve+0),e.getX(ve+1),e.getX(ve+2))}const w=new V,R=new V,B=new V,z=new V;function O($){B.fromBufferAttribute(o,$),z.copy(B);const xe=u[$];w.copy(xe),w.sub(B.multiplyScalar(B.dot(xe))).normalize(),R.crossVectors(z,xe);const I=R.dot(d[$])<0?-1:1;f.setXYZW($,w.x,w.y,w.z,I)}for(let $=0,xe=N.length;$<xe;++$){const T=N[$],I=T.start,Se=T.count;for(let ve=I,j=I+Se;ve<j;ve+=3)O(e.getX(ve+0)),O(e.getX(ve+1)),O(e.getX(ve+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new V,l=new V,f=new V,u=new V,d=new V,p=new V,m=new V,g=new V;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),A=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),f.fromBufferAttribute(t,x),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),u.add(m),d.add(m),p.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(u,d){const p=u.array,m=u.itemSize,g=u.normalized,_=new p.constructor(d.length*m);let S=0,M=0;for(let A=0,x=d.length;A<x;A++){u.isInterleavedBufferAttribute?S=d[A]*u.data.stride+u.offset:S=d[A]*m;for(let y=0;y<m;y++)_[M++]=p[S++]}return new Mi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],p=e(d,r);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const d=[],p=l[u];for(let m=0,g=p.length;m<g;m++){const _=p[m],S=e(_,r);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,d=f.length;u<d;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],g=l[p];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new on,bs=new Od,cc=new Ya,ag=new V,Ao=new V,Co=new V,Ro=new V,Qf=new V,uc=new V,fc=new He,dc=new He,hc=new He,lg=new V,cg=new V,ug=new V,pc=new V,mc=new V;class jt extends En{constructor(e=new dn,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){uc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=u[d],g=l[d];m!==0&&(Qf.fromBufferAttribute(g,e),f?uc.addScaledVector(Qf,m):uc.addScaledVector(Qf.sub(t),m))}t.add(uc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(cc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(cc,ag)===null||bs.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(l).invert(),bs.copy(e.ray).applyMatrix4(og),!(r.boundingBox!==null&&bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,f=this.material,u=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const x=_[M],y=f[x.materialIndex],N=Math.max(x.start,S.start),w=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=N,B=w;R<B;R+=3){const z=u.getX(R),O=u.getX(R+1),$=u.getX(R+2);o=gc(this,y,e,r,p,m,g,z,O,$),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(u.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const N=u.getX(x),w=u.getX(x+1),R=u.getX(x+2);o=gc(this,f,e,r,p,m,g,N,w,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const x=_[M],y=f[x.materialIndex],N=Math.max(x.start,S.start),w=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=N,B=w;R<B;R+=3){const z=R,O=R+1,$=R+2;o=gc(this,y,e,r,p,m,g,z,O,$),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const N=x,w=x+1,R=x+2;o=gc(this,f,e,r,p,m,g,N,w,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function jx(s,e,t,r,o,l,f,u){let d;if(e.side===ii?d=r.intersectTriangle(f,l,o,!0,u):d=r.intersectTriangle(o,l,f,e.side===us,u),d===null)return null;mc.copy(u),mc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(mc);return p<t.near||p>t.far?null:{distance:p,point:mc.clone(),object:s}}function gc(s,e,t,r,o,l,f,u,d,p){s.getVertexPosition(u,Ao),s.getVertexPosition(d,Co),s.getVertexPosition(p,Ro);const m=jx(s,e,t,r,Ao,Co,Ro,pc);if(m){o&&(fc.fromBufferAttribute(o,u),dc.fromBufferAttribute(o,d),hc.fromBufferAttribute(o,p),m.uv=Qi.getInterpolation(pc,Ao,Co,Ro,fc,dc,hc,new He)),l&&(fc.fromBufferAttribute(l,u),dc.fromBufferAttribute(l,d),hc.fromBufferAttribute(l,p),m.uv1=Qi.getInterpolation(pc,Ao,Co,Ro,fc,dc,hc,new He)),f&&(lg.fromBufferAttribute(f,u),cg.fromBufferAttribute(f,d),ug.fromBufferAttribute(f,p),m.normal=Qi.getInterpolation(pc,Ao,Co,Ro,lg,cg,ug,new V),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:d,c:p,normal:new V,materialIndex:0};Qi.getNormal(Ao,Co,Ro,g.normal),m.face=g}return m}class Di extends dn{constructor(e=1,t=1,r=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:f};const u=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const d=[],p=[],m=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,r,t,e,f,l,0),M("z","y","x",1,-1,r,t,-e,f,l,1),M("x","z","y",1,1,e,r,t,o,f,2),M("x","z","y",1,-1,e,r,-t,o,f,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(m,3)),this.setAttribute("uv",new Qt(g,2));function M(A,x,y,N,w,R,B,z,O,$,xe){const T=R/O,I=B/$,Se=R/2,ve=B/2,j=z/2,fe=O+1,W=$+1;let ae=0,F=0;const Y=new V;for(let X=0;X<W;X++){const U=X*I-ve;for(let Q=0;Q<fe;Q++){const Ae=Q*T-Se;Y[A]=Ae*N,Y[x]=U*w,Y[y]=j,p.push(Y.x,Y.y,Y.z),Y[A]=0,Y[x]=0,Y[y]=z>0?1:-1,m.push(Y.x,Y.y,Y.z),g.push(Q/O),g.push(1-X/$),ae+=1}}for(let X=0;X<$;X++)for(let U=0;U<O;U++){const Q=_+U+fe*X,Ae=_+U+fe*(X+1),J=_+(U+1)+fe*(X+1),he=_+(U+1)+fe*X;d.push(Q,Ae,he),d.push(Ae,J,he),F+=6}u.addGroup(S,F,xe),S+=F,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function ti(s){const e={};for(let t=0;t<s.length;t++){const r=Zo(s[t]);for(const o in r)e[o]=r[o]}return e}function Xx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function E0(s){return s.getRenderTarget()===null?s.outputColorSpace:nn.workingColorSpace}const $x={clone:Zo,merge:ti};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class w0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new V,fg=new He,dg=new He;class pi extends w0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(If*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(If*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,fg,dg),t.subVectors(dg,fg)}setViewOffset(e,t,r,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(If*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;l+=f.offsetX*o/d,t-=f.offsetY*r/p,o*=f.width/d,r*=f.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bo=-90,Po=1;class Kx extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(bo,Po,e,t);o.layers=this.layers,this.add(o);const l=new pi(bo,Po,e,t);l.layers=this.layers,this.add(l);const f=new pi(bo,Po,e,t);f.layers=this.layers,this.add(f);const u=new pi(bo,Po,e,t);u.layers=this.layers,this.add(u);const d=new pi(bo,Po,e,t);d.layers=this.layers,this.add(d);const p=new pi(bo,Po,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,f,u,d]=t;for(const p of t)this.remove(p);if(e===Rr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,u,d,p,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,f),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class T0 extends ri{constructor(e,t,r,o,l,f,u,d,p,m){e=e!==void 0?e:[],t=t!==void 0?t:qo,super(e,t,r,o,l,f,u,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends Vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new T0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Di(5,5,5),l=new Pr({name:"CubemapFromEquirect",uniforms:Zo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:as});l.uniforms.tEquirect.value=t;const f=new jt(o,l),u=t.minFilter;return t.minFilter===zs&&(t.minFilter=hi),new Kx(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,o);e.setRenderTarget(l)}}const ed=new V,Jx=new V,Qx=new Ot;class Ns{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ed.subVectors(r,t).cross(Jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Qx.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Ya,vc=new V;class zd{constructor(e=new Ns,t=new Ns,r=new Ns,o=new Ns,l=new Ns,f=new Ns){this.planes=[e,t,r,o,l,f]}set(e,t,r,o,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Rr){const r=this.planes,o=e.elements,l=o[0],f=o[1],u=o[2],d=o[3],p=o[4],m=o[5],g=o[6],_=o[7],S=o[8],M=o[9],A=o[10],x=o[11],y=o[12],N=o[13],w=o[14],R=o[15];if(r[0].setComponents(d-l,_-p,x-S,R-y).normalize(),r[1].setComponents(d+l,_+p,x+S,R+y).normalize(),r[2].setComponents(d+f,_+m,x+M,R+N).normalize(),r[3].setComponents(d-f,_-m,x-M,R-N).normalize(),r[4].setComponents(d-u,_-g,x-A,R-w).normalize(),t===Rr)r[5].setComponents(d+u,_+g,x+A,R+w).normalize();else if(t===kc)r[5].setComponents(u,g,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(vc.x=o.normal.x>0?e.max.x:e.min.x,vc.y=o.normal.y>0?e.max.y:e.min.y,vc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A0(){let s=null,e=!1,t=null,r=null;function o(l,f){t(l,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ey(s,e){const t=e.isWebGL2,r=new WeakMap;function o(p,m){const g=p.array,_=p.usage,S=g.byteLength,M=s.createBuffer();s.bindBuffer(m,M),s.bufferData(m,g,_),p.onUploadCallback();let A;if(g instanceof Float32Array)A=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)A=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)A=s.SHORT;else if(g instanceof Uint32Array)A=s.UNSIGNED_INT;else if(g instanceof Int32Array)A=s.INT;else if(g instanceof Int8Array)A=s.BYTE;else if(g instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,m,g){const _=m.array,S=m._updateRange,M=m.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&M.length===0&&s.bufferSubData(g,0,_),M.length!==0){for(let A=0,x=M.length;A<x;A++){const y=M[A];t?s.bufferSubData(g,y.start*_.BYTES_PER_ELEMENT,_,y.start,y.count):s.bufferSubData(g,y.start*_.BYTES_PER_ELEMENT,_.subarray(y.start,y.start+y.count))}m.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=r.get(p);m&&(s.deleteBuffer(m.buffer),r.delete(p))}function d(p,m){if(p.isGLBufferAttribute){const _=r.get(p);(!_||_.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,o(p,m));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,m),g.version=p.version}}return{get:f,remove:u,update:d}}class Ka extends dn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,f=t/2,u=Math.floor(r),d=Math.floor(o),p=u+1,m=d+1,g=e/u,_=t/d,S=[],M=[],A=[],x=[];for(let y=0;y<m;y++){const N=y*_-f;for(let w=0;w<p;w++){const R=w*g-l;M.push(R,-N,0),A.push(0,0,1),x.push(w/u),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let N=0;N<u;N++){const w=N+p*y,R=N+p*(y+1),B=N+1+p*(y+1),z=N+1+p*y;S.push(w,R,z),S.push(R,B,z)}this.setIndex(S),this.setAttribute("position",new Qt(M,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ay=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ay=`vec3 transformedNormal = objectNormal;
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
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`
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
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,eS=`struct PhysicalMaterial {
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
}`,tS=`
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
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
#endif`,TS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,cM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,wM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,RM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,PM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,DM=`uniform vec3 color;
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
}`,NM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:ty,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:oy,aomap_fragment:ay,aomap_pars_fragment:ly,batching_pars_vertex:cy,batching_vertex:uy,begin_vertex:fy,beginnormal_vertex:dy,bsdfs:hy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:_y,clipping_planes_vertex:xy,color_fragment:yy,color_pars_fragment:Sy,color_pars_vertex:My,color_vertex:Ey,common:wy,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:by,emissivemap_pars_fragment:Py,colorspace_fragment:Ly,colorspace_pars_fragment:Dy,envmap_fragment:Ny,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Uy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:qy,envmap_vertex:Oy,fog_vertex:zy,fog_pars_vertex:ky,fog_fragment:By,fog_pars_fragment:Hy,gradientmap_pars_fragment:Gy,lightmap_fragment:Vy,lightmap_pars_fragment:Wy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Xy,lights_pars_begin:$y,lights_toon_fragment:Yy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Zy,lights_phong_pars_fragment:Jy,lights_physical_fragment:Qy,lights_physical_pars_fragment:eS,lights_fragment_begin:tS,lights_fragment_maps:nS,lights_fragment_end:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:oS,logdepthbuf_vertex:aS,map_fragment:lS,map_pars_fragment:cS,map_particle_fragment:uS,map_particle_pars_fragment:fS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:hS,morphinstance_vertex:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:vS,morphtarget_vertex:_S,normal_fragment_begin:xS,normal_fragment_maps:yS,normal_pars_fragment:SS,normal_pars_vertex:MS,normal_vertex:ES,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:TS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:RS,opaque_fragment:bS,packing:PS,premultiplied_alpha_fragment:LS,project_vertex:DS,dithering_fragment:NS,dithering_pars_fragment:IS,roughnessmap_fragment:US,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:zS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:HS,skinning_pars_vertex:GS,skinning_vertex:VS,skinnormal_vertex:WS,specularmap_fragment:jS,specularmap_pars_fragment:XS,tonemapping_fragment:$S,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:KS,uv_pars_fragment:ZS,uv_pars_vertex:JS,uv_vertex:QS,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distanceRGBA_vert:cM,distanceRGBA_frag:uM,equirect_vert:fM,equirect_frag:dM,linedashed_vert:hM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:vM,meshlambert_frag:_M,meshmatcap_vert:xM,meshmatcap_frag:yM,meshnormal_vert:SM,meshnormal_frag:MM,meshphong_vert:EM,meshphong_frag:wM,meshphysical_vert:TM,meshphysical_frag:AM,meshtoon_vert:CM,meshtoon_frag:RM,points_vert:bM,points_frag:PM,shadow_vert:LM,shadow_frag:DM,sprite_vert:NM,sprite_frag:IM},je={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ar={basic:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ti([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ti([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ti([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ti([je.points,je.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ti([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ti([je.common,je.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ti([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ti([je.sprite,je.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ti([je.common,je.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ti([je.lights,je.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ar.physical={uniforms:ti([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const _c={r:0,b:0,g:0},Ls=new Ni,UM=new on;function FM(s,e,t,r,o,l,f){const u=new bt(0);let d=l===!0?0:1,p,m,g=null,_=0,S=null;function M(x,y){let N=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w)),w===null?A(u,d):w&&w.isColor&&(A(w,1),N=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,f):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===qc)?(m===void 0&&(m=new jt(new Di(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:Zo(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,z,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Ls)),m.material.toneMapped=nn.getTransfer(w.colorSpace)!==cn,(g!==w||_!==w.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=w,_=w.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new jt(new Ka(2,2),new Pr({name:"BackgroundMaterial",uniforms:Zo(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=nn.getTransfer(w.colorSpace)!==cn,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,_=w.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function A(x,y){x.getRGB(_c,E0(s)),r.buffers.color.setClear(_c.r,_c.g,_c.b,y,f)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),d=y,A(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,A(u,d)},render:M}}function OM(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,u={},d=x(null);let p=d,m=!1;function g(j,fe,W,ae,F){let Y=!1;if(f){const X=A(ae,W,fe);p!==X&&(p=X,S(p.object)),Y=y(j,ae,W,F),Y&&N(j,ae,W,F)}else{const X=fe.wireframe===!0;(p.geometry!==ae.id||p.program!==W.id||p.wireframe!==X)&&(p.geometry=ae.id,p.program=W.id,p.wireframe=X,Y=!0)}F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(Y||m)&&(m=!1,$(j,fe,W,ae),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function _(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(j){return r.isWebGL2?s.bindVertexArray(j):l.bindVertexArrayOES(j)}function M(j){return r.isWebGL2?s.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function A(j,fe,W){const ae=W.wireframe===!0;let F=u[j.id];F===void 0&&(F={},u[j.id]=F);let Y=F[fe.id];Y===void 0&&(Y={},F[fe.id]=Y);let X=Y[ae];return X===void 0&&(X=x(_()),Y[ae]=X),X}function x(j){const fe=[],W=[],ae=[];for(let F=0;F<o;F++)fe[F]=0,W[F]=0,ae[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:fe,enabledAttributes:W,attributeDivisors:ae,object:j,attributes:{},index:null}}function y(j,fe,W,ae){const F=p.attributes,Y=fe.attributes;let X=0;const U=W.getAttributes();for(const Q in U)if(U[Q].location>=0){const J=F[Q];let he=Y[Q];if(he===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(he=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(he=j.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;X++}return p.attributesNum!==X||p.index!==ae}function N(j,fe,W,ae){const F={},Y=fe.attributes;let X=0;const U=W.getAttributes();for(const Q in U)if(U[Q].location>=0){let J=Y[Q];J===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(J=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(J=j.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),F[Q]=he,X++}p.attributes=F,p.attributesNum=X,p.index=ae}function w(){const j=p.newAttributes;for(let fe=0,W=j.length;fe<W;fe++)j[fe]=0}function R(j){B(j,0)}function B(j,fe){const W=p.newAttributes,ae=p.enabledAttributes,F=p.attributeDivisors;W[j]=1,ae[j]===0&&(s.enableVertexAttribArray(j),ae[j]=1),F[j]!==fe&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,fe),F[j]=fe)}function z(){const j=p.newAttributes,fe=p.enabledAttributes;for(let W=0,ae=fe.length;W<ae;W++)fe[W]!==j[W]&&(s.disableVertexAttribArray(W),fe[W]=0)}function O(j,fe,W,ae,F,Y,X){X===!0?s.vertexAttribIPointer(j,fe,W,F,Y):s.vertexAttribPointer(j,fe,W,ae,F,Y)}function $(j,fe,W,ae){if(r.isWebGL2===!1&&(j.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const F=ae.attributes,Y=W.getAttributes(),X=fe.defaultAttributeValues;for(const U in Y){const Q=Y[U];if(Q.location>=0){let Ae=F[U];if(Ae===void 0&&(U==="instanceMatrix"&&j.instanceMatrix&&(Ae=j.instanceMatrix),U==="instanceColor"&&j.instanceColor&&(Ae=j.instanceColor)),Ae!==void 0){const J=Ae.normalized,he=Ae.itemSize,ge=t.get(Ae);if(ge===void 0)continue;const De=ge.buffer,Ne=ge.type,Le=ge.bytesPerElement,ot=r.isWebGL2===!0&&(Ne===s.INT||Ne===s.UNSIGNED_INT||Ae.gpuType===o0);if(Ae.isInterleavedBufferAttribute){const et=Ae.data,H=et.stride,Ue=Ae.offset;if(et.isInstancedInterleavedBuffer){for(let ye=0;ye<Q.locationSize;ye++)B(Q.location+ye,et.meshPerAttribute);j.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ye=0;ye<Q.locationSize;ye++)R(Q.location+ye);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ye=0;ye<Q.locationSize;ye++)O(Q.location+ye,he/Q.locationSize,Ne,J,H*Le,(Ue+he/Q.locationSize*ye)*Le,ot)}else{if(Ae.isInstancedBufferAttribute){for(let et=0;et<Q.locationSize;et++)B(Q.location+et,Ae.meshPerAttribute);j.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<Q.locationSize;et++)R(Q.location+et);s.bindBuffer(s.ARRAY_BUFFER,De);for(let et=0;et<Q.locationSize;et++)O(Q.location+et,he/Q.locationSize,Ne,J,he*Le,he/Q.locationSize*et*Le,ot)}}else if(X!==void 0){const J=X[U];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(Q.location,J);break;case 3:s.vertexAttrib3fv(Q.location,J);break;case 4:s.vertexAttrib4fv(Q.location,J);break;default:s.vertexAttrib1fv(Q.location,J)}}}}z()}function xe(){Se();for(const j in u){const fe=u[j];for(const W in fe){const ae=fe[W];for(const F in ae)M(ae[F].object),delete ae[F];delete fe[W]}delete u[j]}}function T(j){if(u[j.id]===void 0)return;const fe=u[j.id];for(const W in fe){const ae=fe[W];for(const F in ae)M(ae[F].object),delete ae[F];delete fe[W]}delete u[j.id]}function I(j){for(const fe in u){const W=u[fe];if(W[j.id]===void 0)continue;const ae=W[j.id];for(const F in ae)M(ae[F].object),delete ae[F];delete W[j.id]}}function Se(){ve(),m=!0,p!==d&&(p=d,S(p.object))}function ve(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:Se,resetDefaultState:ve,dispose:xe,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:R,disableUnusedAttributes:z}}function zM(s,e,t,r){const o=r.isWebGL2;let l;function f(m){l=m}function u(m,g){s.drawArrays(l,m,g),t.update(g,l,1)}function d(m,g,_){if(_===0)return;let S,M;if(o)S=s,M="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](l,m,g,_),t.update(g,l,_)}function p(m,g,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_;M++)this.render(m[M],g[M]);else{S.multiDrawArraysWEBGL(l,m,0,g,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A];t.update(M,l,1)}}this.setMode=f,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function kM(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=f||e.has("OES_texture_float"),B=w&&R,z=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:A,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:N,vertexTextures:w,floatFragmentTextures:R,floatVertexTextures:B,maxSamples:z}}function BM(s){const e=this;let t=null,r=0,o=!1,l=!1;const f=new Ns,u=new Ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||o;return o=_,r=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,A=g.clipIntersection,x=g.clipShadows,y=s.get(g);if(!o||M===null||M.length===0||l&&!x)l?m(null):p();else{const N=l?0:r,w=N*4;let R=y.clippingState||null;d.value=R,R=m(M,_,w,S);for(let B=0;B!==w;++B)R[B]=t[B];y.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,S,M){const A=g!==null?g.length:0;let x=null;if(A!==0){if(x=d.value,M!==!0||x===null){const y=S+A*4,N=_.matrixWorldInverse;u.getNormalMatrix(N),(x===null||x.length<y)&&(x=new Float32Array(y));for(let w=0,R=S;w!==A;++w,R+=4)f.copy(g[w]).applyMatrix4(N,u),f.normal.toArray(x,R),x[R+3]=f.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function HM(s){let e=new WeakMap;function t(f,u){return u===Sd?f.mapping=qo:u===Md&&(f.mapping=Yo),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Sd||u===Md)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new Zx(d.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",o),t(p.texture,f.mapping)}else return null}}return f}function o(f){const u=f.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class C0 extends w0{constructor(e=-1,t=1,r=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,f=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vo=4,hg=[.125,.215,.35,.446,.526,.582],Os=20,td=new C0,pg=new bt;let nd=null,id=0,rd=0;const Is=(1+Math.sqrt(5))/2,Lo=1/Is,mg=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Is,Lo),new V(0,Is,-Lo),new V(Lo,0,Is),new V(-Lo,0,Is),new V(Is,Lo,0),new V(-Is,Lo,0)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Va,format:Ji,colorSpace:fs,depthBuffer:!1},o=vg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GM(l)),this._blurMaterial=VM(l,e,t)}return o}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,r,o){const u=new pi(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(pg),m.toneMapping=ls,m.autoClear=!1;const S=new Fs({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),M=new jt(new Di,S);let A=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,A=!0):(S.color.copy(pg),A=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(u.up.set(0,d[y],0),u.lookAt(p[y],0,0)):N===1?(u.up.set(0,0,d[y]),u.lookAt(0,p[y],0)):(u.up.set(0,d[y],0),u.lookAt(0,0,p[y]));const w=this._cubeSize;xc(o,N*w,y>2?w:0,w,w),m.setRenderTarget(o),A&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===qo||e.mapping===Yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new jt(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const d=this._cubeSize;xc(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(f,td)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=mg[(o-1)%mg.length];this._blur(e,o-1,o,l,f)}t.autoClear=r}_blur(e,t,r,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,o,"latitudinal",l),this._halfBlur(f,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,f,u){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new jt(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Os-1),A=l/M,x=isFinite(l)?1+Math.floor(m*A):Os;x>Os&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Os}`);const y=[];let N=0;for(let O=0;O<Os;++O){const $=O/A,xe=Math.exp(-$*$/2);y.push(xe),O===0?N+=xe:O<x&&(N+=2*xe)}for(let O=0;O<y.length;O++)y[O]=y[O]/N;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=f==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:w}=this;_.dTheta.value=M,_.mipInt.value=w-r;const R=this._sizeLods[o],B=3*R*(o>w-Vo?o-w+Vo:0),z=4*(this._cubeSize-R);xc(t,B,z,3*R,2*R),d.setRenderTarget(t),d.render(g,td)}}function GM(s){const e=[],t=[],r=[];let o=s;const l=s-Vo+1+hg.length;for(let f=0;f<l;f++){const u=Math.pow(2,o);t.push(u);let d=1/u;f>s-Vo?d=hg[f-s+Vo-1]:f===0&&(d=0),r.push(d);const p=1/(u-2),m=-p,g=1+p,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,A=3,x=2,y=1,N=new Float32Array(A*M*S),w=new Float32Array(x*M*S),R=new Float32Array(y*M*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,$=z>2?0:-1,xe=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];N.set(xe,A*M*z),w.set(_,x*M*z);const T=[z,z,z,z,z,z];R.set(T,y*M*z)}const B=new dn;B.setAttribute("position",new Mi(N,A)),B.setAttribute("uv",new Mi(w,x)),B.setAttribute("faceIndex",new Mi(R,y)),e.push(B),o>Vo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function vg(s,e,t){const r=new Vs(s,e,t);return r.texture.mapping=qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function VM(s,e,t){const r=new Float32Array(Os),o=new V(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function _g(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function xg(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function kd(){return`

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
	`}function WM(s){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const d=u.mapping,p=d===Sd||d===Md,m=d===qo||d===Yo;if(p||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new gg(s)),g=p?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(p&&g&&g.height>0||m&&g&&o(g)){t===null&&(t=new gg(s));const _=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",l),_.texture}else return null}}}return u}function o(u){let d=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p}function l(u){const d=u.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function jM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function XM(s,e,t,r){const o={},l=new WeakMap;function f(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const A=_.morphAttributes[M];for(let x=0,y=A.length;x<y;x++)e.remove(A[x])}_.removeEventListener("dispose",f),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const A=S[M];for(let x=0,y=A.length;x<y;x++)e.update(A[x],s.ARRAY_BUFFER)}}function p(g){const _=[],S=g.index,M=g.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let w=0,R=N.length;w<R;w+=3){const B=N[w+0],z=N[w+1],O=N[w+2];_.push(B,z,z,O,O,B)}}else if(M!==void 0){const N=M.array;A=M.version;for(let w=0,R=N.length/3-1;w<R;w+=3){const B=w+0,z=w+1,O=w+2;_.push(B,z,z,O,O,B)}}else return;const x=new(p0(_)?M0:S0)(_,1);x.version=A;const y=l.get(g);y&&e.remove(y),l.set(g,x)}function m(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function $M(s,e,t,r){const o=r.isWebGL2;let l;function f(S){l=S}let u,d;function p(S){u=S.type,d=S.bytesPerElement}function m(S,M){s.drawElements(l,M,u,S*d),t.update(M,l,1)}function g(S,M,A){if(A===0)return;let x,y;if(o)x=s,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](l,M,u,S*d,A),t.update(M,l,A)}function _(S,M,A){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<A;y++)this.render(S[y]/d,M[y]);else{x.multiDrawElementsWEBGL(l,M,0,u,S,0,A);let y=0;for(let N=0;N<A;N++)y+=M[N];t.update(y,l,1)}}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=g,this.renderMultiDraw=_}function qM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,u){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e){return s[0]-e[0]}function KM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function ZM(s,e,t){const r={},o=new Float32Array(8),l=new WeakMap,f=new hn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function d(p,m,g){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,A=M!==void 0?M.length:0;let x=l.get(m);if(x===void 0||x.count!==A){let ve=function(){I.dispose(),l.delete(m),m.removeEventListener("dispose",ve)};var S=ve;x!==void 0&&x.texture.dispose();const y=m.morphAttributes.position!==void 0,N=m.morphAttributes.normal!==void 0,w=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],B=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let O=0;y===!0&&(O=1),N===!0&&(O=2),w===!0&&(O=3);let $=m.attributes.position.count*O,xe=1;$>e.maxTextureSize&&(xe=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const T=new Float32Array($*xe*4*A),I=new _0(T,$,xe,A);I.type=Cr,I.needsUpdate=!0;const Se=O*4;for(let j=0;j<A;j++){const fe=R[j],W=B[j],ae=z[j],F=$*xe*4*j;for(let Y=0;Y<fe.count;Y++){const X=Y*Se;y===!0&&(f.fromBufferAttribute(fe,Y),T[F+X+0]=f.x,T[F+X+1]=f.y,T[F+X+2]=f.z,T[F+X+3]=0),N===!0&&(f.fromBufferAttribute(W,Y),T[F+X+4]=f.x,T[F+X+5]=f.y,T[F+X+6]=f.z,T[F+X+7]=0),w===!0&&(f.fromBufferAttribute(ae,Y),T[F+X+8]=f.x,T[F+X+9]=f.y,T[F+X+10]=f.z,T[F+X+11]=ae.itemSize===4?f.w:1)}}x={count:A,texture:I,size:new He($,xe)},l.set(m,x),m.addEventListener("dispose",ve)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let y=0;for(let w=0;w<_.length;w++)y+=_[w];const N=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(s,"morphTargetBaseInfluence",N),g.getUniforms().setValue(s,"morphTargetInfluences",_)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const M=_===void 0?0:_.length;let A=r[m.id];if(A===void 0||A.length!==M){A=[];for(let R=0;R<M;R++)A[R]=[R,0];r[m.id]=A}for(let R=0;R<M;R++){const B=A[R];B[0]=R,B[1]=_[R]}A.sort(KM);for(let R=0;R<8;R++)R<M&&A[R][1]?(u[R][0]=A[R][0],u[R][1]=A[R][1]):(u[R][0]=Number.MAX_SAFE_INTEGER,u[R][1]=0);u.sort(YM);const x=m.morphAttributes.position,y=m.morphAttributes.normal;let N=0;for(let R=0;R<8;R++){const B=u[R],z=B[0],O=B[1];z!==Number.MAX_SAFE_INTEGER&&O?(x&&m.getAttribute("morphTarget"+R)!==x[z]&&m.setAttribute("morphTarget"+R,x[z]),y&&m.getAttribute("morphNormal"+R)!==y[z]&&m.setAttribute("morphNormal"+R,y[z]),o[R]=O,N+=O):(x&&m.hasAttribute("morphTarget"+R)===!0&&m.deleteAttribute("morphTarget"+R),y&&m.hasAttribute("morphNormal"+R)===!0&&m.deleteAttribute("morphNormal"+R),o[R]=0)}const w=m.morphTargetsRelative?1:1-N;g.getUniforms().setValue(s,"morphTargetBaseInfluence",w),g.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:d}}function JM(s,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function f(){o=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class R0 extends ri{constructor(e,t,r,o,l,f,u,d,p,m){if(m=m!==void 0?m:Bs,m!==Bs&&m!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Bs&&(r=os),r===void 0&&m===Ko&&(r=ks),super(null,o,l,f,u,d,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:ni,this.minFilter=d!==void 0?d:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const b0=new ri,P0=new R0(1,1);P0.compareFunction=h0;const L0=new _0,D0=new Ix,N0=new T0,yg=[],Sg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),wg=new Float32Array(4);function Qo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=yg[o];if(l===void 0&&(l=new Float32Array(o),yg[o]=l),e!==0){r.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,s[f].toArray(l,u)}return l}function Dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zc(s,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function i1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,r))return;wg.set(r),s.uniformMatrix2fv(this.addr,!1,wg),Nn(t,r)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,r))return;Eg.set(r),s.uniformMatrix3fv(this.addr,!1,Eg),Nn(t,r)}}function s1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Dn(t,r))return;Mg.set(r),s.uniformMatrix4fv(this.addr,!1,Mg),Nn(t,r)}}function o1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function u1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function h1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function p1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);const l=this.type===s.SAMPLER_2D_SHADOW?P0:b0;t.setTexture2D(e||l,o)}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||D0,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||N0,o)}function v1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||L0,o)}function _1(s){switch(s){case 5126:return QM;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return v1}}function x1(s,e){s.uniform1fv(this.addr,e)}function y1(s,e){const t=Qo(e,this.size,2);s.uniform2fv(this.addr,t)}function S1(s,e){const t=Qo(e,this.size,3);s.uniform3fv(this.addr,t)}function M1(s,e){const t=Qo(e,this.size,4);s.uniform4fv(this.addr,t)}function E1(s,e){const t=Qo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function w1(s,e){const t=Qo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T1(s,e){const t=Qo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A1(s,e){s.uniform1iv(this.addr,e)}function C1(s,e){s.uniform2iv(this.addr,e)}function R1(s,e){s.uniform3iv(this.addr,e)}function b1(s,e){s.uniform4iv(this.addr,e)}function P1(s,e){s.uniform1uiv(this.addr,e)}function L1(s,e){s.uniform2uiv(this.addr,e)}function D1(s,e){s.uniform3uiv(this.addr,e)}function N1(s,e){s.uniform4uiv(this.addr,e)}function I1(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);Dn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||b0,l[f])}function U1(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);Dn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||D0,l[f])}function F1(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);Dn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||N0,l[f])}function O1(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);Dn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||L0,l[f])}function z1(s){switch(s){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return b1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class k1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_1(t.type)}}class B1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z1(t.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Tg(s,e){s.seq.push(e),s.map[e.id]=e}function G1(s,e,t){const r=s.name,o=r.length;for(sd.lastIndex=0;;){const l=sd.exec(r),f=sd.lastIndex;let u=l[1];const d=l[2]==="]",p=l[3];if(d&&(u=u|0),p===void 0||p==="["&&f+2===o){Tg(t,p===void 0?new k1(u,s,e):new B1(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new H1(u),Tg(t,g)),t=g}}}class Nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);G1(l,f,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,f=t.length;l!==f;++l){const u=t[l],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&r.push(f)}return r}}function Ag(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const V1=37297;let W1=0;function j1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return r.join(`
`)}function X1(s){const e=nn.getPrimaries(nn.workingColorSpace),t=nn.getPrimaries(s);let r;switch(e===t?r="":e===zc&&t===Oc?r="LinearDisplayP3ToLinearSRGB":e===Oc&&t===zc&&(r="LinearSRGBToLinearDisplayP3"),s){case fs:case Kc:return[r,"LinearTransferOETF"];case or:case Fd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Cg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+j1(s.getShaderSource(e),f)}else return o}function $1(s,e){const t=X1(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function q1(s,e){let t;switch(e){case ix:t="Linear";break;case rx:t="Reinhard";break;case sx:t="OptimizedCineon";break;case ox:t="ACESFilmic";break;case lx:t="AgX";break;case cx:t="Neutral";break;case ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wo).join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Z1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function J1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),f=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:u}}return t}function Wo(s){return s!==""}function Rg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(s){return s.replace(Q1,tE)}const eE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tE(s,e){let t=Ft[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=Ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function rE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qo:case Yo:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function lE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function cE(s,e,t,r){const o=s.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const d=rE(t),p=sE(t),m=oE(t),g=aE(t),_=lE(t),S=t.isWebGL2?"":Y1(t),M=K1(t),A=Z1(l),x=o.createProgram();let y,N,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Wo).join(`
`),y.length>0&&(y+=`
`),N=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Wo).join(`
`),N.length>0&&(N+=`
`)):(y=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),N=[S,Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?Ft.tonemapping_pars_fragment:"",t.toneMapping!==ls?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Rd(f),f=Rg(f,t),f=bg(f,t),u=Rd(u),u=Rg(u,t),u=bg(u,t),f=Pg(f),u=Pg(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const R=w+y+f,B=w+N+u,z=Ag(o,o.VERTEX_SHADER,R),O=Ag(o,o.FRAGMENT_SHADER,B);o.attachShader(x,z),o.attachShader(x,O),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function $(Se){if(s.debug.checkShaderErrors){const ve=o.getProgramInfoLog(x).trim(),j=o.getShaderInfoLog(z).trim(),fe=o.getShaderInfoLog(O).trim();let W=!0,ae=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,x,z,O);else{const F=Cg(o,z,"vertex"),Y=Cg(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+Se.name+`
Material Type: `+Se.type+`

Program Info Log: `+ve+`
`+F+`
`+Y)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(j===""||fe==="")&&(ae=!1);ae&&(Se.diagnostics={runnable:W,programLog:ve,vertexShader:{log:j,prefix:y},fragmentShader:{log:fe,prefix:N}})}o.deleteShader(z),o.deleteShader(O),xe=new Nc(o,x),T=J1(o,x)}let xe;this.getUniforms=function(){return xe===void 0&&$(this),xe};let T;this.getAttributes=function(){return T===void 0&&$(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=o.getProgramParameter(x,V1)),I},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=O,this}let uE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dE(e),t.set(e,r)),r}}class dE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function hE(s,e,t,r,o,l,f){const u=new x0,d=new fE,p=new Set,m=[],g=o.isWebGL2,_=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,I,Se,ve,j){const fe=ve.fog,W=j.geometry,ae=T.isMeshStandardMaterial?ve.environment:null,F=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),Y=F&&F.mapping===qc?F.image.height:null,X=A[T.type];T.precision!==null&&(M=o.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=U!==void 0?U.length:0;let Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let J,he,ge,De;if(X){const Qe=ar[X];J=Qe.vertexShader,he=Qe.fragmentShader}else J=T.vertexShader,he=T.fragmentShader,d.update(T),ge=d.getVertexShaderID(T),De=d.getFragmentShaderID(T);const Ne=s.getRenderTarget(),Le=j.isInstancedMesh===!0,ot=j.isBatchedMesh===!0,et=!!T.map,H=!!T.matcap,Ue=!!F,ye=!!T.aoMap,Fe=!!T.lightMap,Me=!!T.bumpMap,Ye=!!T.normalMap,Xe=!!T.displacementMap,Ke=!!T.emissiveMap,Et=!!T.metalnessMap,D=!!T.roughnessMap,C=T.anisotropy>0,de=T.clearcoat>0,_e=T.iridescence>0,be=T.sheen>0,Te=T.transmission>0,gt=C&&!!T.anisotropyMap,at=de&&!!T.clearcoatMap,ze=de&&!!T.clearcoatNormalMap,Oe=de&&!!T.clearcoatRoughnessMap,dt=_e&&!!T.iridescenceMap,Ce=_e&&!!T.iridescenceThicknessMap,_t=be&&!!T.sheenColorMap,it=be&&!!T.sheenRoughnessMap,lt=!!T.specularMap,Ge=!!T.specularColorMap,tt=!!T.specularIntensityMap,ft=Te&&!!T.transmissionMap,mt=Te&&!!T.thicknessMap,Vt=!!T.gradientMap,K=!!T.alphaMap,ce=T.alphaTest>0,ee=!!T.alphaHash,pe=!!T.extensions;let me=ls;T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(me=s.toneMapping);const Ve={isWebGL2:g,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:J,fragmentShader:he,defines:T.defines,customVertexShaderID:ge,customFragmentShaderID:De,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:ot,instancing:Le,instancingColor:Le&&j.instanceColor!==null,instancingMorph:Le&&j.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:fs,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:H,envMap:Ue,envMapMode:Ue&&F.mapping,envMapCubeUVHeight:Y,aoMap:ye,lightMap:Fe,bumpMap:Me,normalMap:Ye,displacementMap:S&&Xe,emissiveMap:Ke,normalMapObjectSpace:Ye&&T.normalMapType===yx,normalMapTangentSpace:Ye&&T.normalMapType===Yc,metalnessMap:Et,roughnessMap:D,anisotropy:C,anisotropyMap:gt,clearcoat:de,clearcoatMap:at,clearcoatNormalMap:ze,clearcoatRoughnessMap:Oe,iridescence:_e,iridescenceMap:dt,iridescenceThicknessMap:Ce,sheen:be,sheenColorMap:_t,sheenRoughnessMap:it,specularMap:lt,specularColorMap:Ge,specularIntensityMap:tt,transmission:Te,transmissionMap:ft,thicknessMap:mt,gradientMap:Vt,opaque:T.transparent===!1&&T.blending===Xo&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:ee,combine:T.combine,mapUv:et&&x(T.map.channel),aoMapUv:ye&&x(T.aoMap.channel),lightMapUv:Fe&&x(T.lightMap.channel),bumpMapUv:Me&&x(T.bumpMap.channel),normalMapUv:Ye&&x(T.normalMap.channel),displacementMapUv:Xe&&x(T.displacementMap.channel),emissiveMapUv:Ke&&x(T.emissiveMap.channel),metalnessMapUv:Et&&x(T.metalnessMap.channel),roughnessMapUv:D&&x(T.roughnessMap.channel),anisotropyMapUv:gt&&x(T.anisotropyMap.channel),clearcoatMapUv:at&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:it&&x(T.sheenRoughnessMap.channel),specularMapUv:lt&&x(T.specularMap.channel),specularColorMapUv:Ge&&x(T.specularColorMap.channel),specularIntensityMapUv:tt&&x(T.specularIntensityMap.channel),transmissionMapUv:ft&&x(T.transmissionMap.channel),thicknessMapUv:mt&&x(T.thicknessMap.channel),alphaMapUv:K&&x(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ye||C),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(et||K),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ae,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Se.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,useLegacyLights:s._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&nn.getTransfer(T.map.colorSpace)===cn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Si,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:pe&&T.extensions.derivatives===!0,extensionFragDepth:pe&&T.extensions.fragDepth===!0,extensionDrawBuffers:pe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function N(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Se in T.defines)I.push(Se),I.push(T.defines[Se]);return T.isRawShaderMaterial===!1&&(w(I,T),R(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function w(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.instancingMorph&&u.enable(4),I.matcap&&u.enable(5),I.envMap&&u.enable(6),I.normalMapObjectSpace&&u.enable(7),I.normalMapTangentSpace&&u.enable(8),I.clearcoat&&u.enable(9),I.iridescence&&u.enable(10),I.alphaTest&&u.enable(11),I.vertexColors&&u.enable(12),I.vertexAlphas&&u.enable(13),I.vertexUv1s&&u.enable(14),I.vertexUv2s&&u.enable(15),I.vertexUv3s&&u.enable(16),I.vertexTangents&&u.enable(17),I.anisotropy&&u.enable(18),I.alphaHash&&u.enable(19),I.batching&&u.enable(20),T.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.useLegacyLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.alphaToCoverage&&u.enable(20),T.push(u.mask)}function B(T){const I=A[T.type];let Se;if(I){const ve=ar[I];Se=$x.clone(ve.uniforms)}else Se=T.uniforms;return Se}function z(T,I){let Se;for(let ve=0,j=m.length;ve<j;ve++){const fe=m[ve];if(fe.cacheKey===I){Se=fe,++Se.usedTimes;break}}return Se===void 0&&(Se=new cE(s,I,T,l),m.push(Se)),Se}function O(T){if(--T.usedTimes===0){const I=m.indexOf(T);m[I]=m[m.length-1],m.pop(),T.destroy()}}function $(T){d.remove(T)}function xe(){d.dispose()}return{getParameters:y,getProgramCacheKey:N,getUniforms:B,acquireProgram:z,releaseProgram:O,releaseShaderCache:$,programs:m,dispose:xe}}function pE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,u){s.get(l)[f]=u}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function mE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ng(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function f(g,_,S,M,A,x){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:A,group:x},s[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=S,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=A,y.group=x),e++,y}function u(g,_,S,M,A,x){const y=f(g,_,S,M,A,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,_,S,M,A,x){const y=f(g,_,S,M,A,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(g,_){t.length>1&&t.sort(g||mE),r.length>1&&r.sort(_||Dg),o.length>1&&o.sort(_||Dg)}function m(){for(let g=e,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:d,finish:m,sort:p}}function gE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let f;return l===void 0?(f=new Ng,s.set(r,[f])):o>=l.length?(f=new Ng,l.push(f)):f=l[o],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new bt};break;case"SpotLight":t={position:new V,direction:new V,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xE=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s,e){const t=new vE,r=_E(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)o.probe.push(new V);const l=new V,f=new on,u=new on;function d(m,g){let _=0,S=0,M=0;for(let Se=0;Se<9;Se++)o.probe[Se].set(0,0,0);let A=0,x=0,y=0,N=0,w=0,R=0,B=0,z=0,O=0,$=0,xe=0;m.sort(yE);const T=g===!0?Math.PI:1;for(let Se=0,ve=m.length;Se<ve;Se++){const j=m[Se],fe=j.color,W=j.intensity,ae=j.distance,F=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=fe.r*W*T,S+=fe.g*W*T,M+=fe.b*W*T;else if(j.isLightProbe){for(let Y=0;Y<9;Y++)o.probe[Y].addScaledVector(j.sh.coefficients[Y],W);xe++}else if(j.isDirectionalLight){const Y=t.get(j);if(Y.color.copy(j.color).multiplyScalar(j.intensity*T),j.castShadow){const X=j.shadow,U=r.get(j);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,o.directionalShadow[A]=U,o.directionalShadowMap[A]=F,o.directionalShadowMatrix[A]=j.shadow.matrix,R++}o.directional[A]=Y,A++}else if(j.isSpotLight){const Y=t.get(j);Y.position.setFromMatrixPosition(j.matrixWorld),Y.color.copy(fe).multiplyScalar(W*T),Y.distance=ae,Y.coneCos=Math.cos(j.angle),Y.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Y.decay=j.decay,o.spot[y]=Y;const X=j.shadow;if(j.map&&(o.spotLightMap[O]=j.map,O++,X.updateMatrices(j),j.castShadow&&$++),o.spotLightMatrix[y]=X.matrix,j.castShadow){const U=r.get(j);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,o.spotShadow[y]=U,o.spotShadowMap[y]=F,z++}y++}else if(j.isRectAreaLight){const Y=t.get(j);Y.color.copy(fe).multiplyScalar(W),Y.halfWidth.set(j.width*.5,0,0),Y.halfHeight.set(0,j.height*.5,0),o.rectArea[N]=Y,N++}else if(j.isPointLight){const Y=t.get(j);if(Y.color.copy(j.color).multiplyScalar(j.intensity*T),Y.distance=j.distance,Y.decay=j.decay,j.castShadow){const X=j.shadow,U=r.get(j);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,o.pointShadow[x]=U,o.pointShadowMap[x]=F,o.pointShadowMatrix[x]=j.shadow.matrix,B++}o.point[x]=Y,x++}else if(j.isHemisphereLight){const Y=t.get(j);Y.skyColor.copy(j.color).multiplyScalar(W*T),Y.groundColor.copy(j.groundColor).multiplyScalar(W*T),o.hemi[w]=Y,w++}}N>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=je.LTC_FLOAT_1,o.rectAreaLTC2=je.LTC_FLOAT_2):(o.rectAreaLTC1=je.LTC_HALF_1,o.rectAreaLTC2=je.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=je.LTC_FLOAT_1,o.rectAreaLTC2=je.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=je.LTC_HALF_1,o.rectAreaLTC2=je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=M;const I=o.hash;(I.directionalLength!==A||I.pointLength!==x||I.spotLength!==y||I.rectAreaLength!==N||I.hemiLength!==w||I.numDirectionalShadows!==R||I.numPointShadows!==B||I.numSpotShadows!==z||I.numSpotMaps!==O||I.numLightProbes!==xe)&&(o.directional.length=A,o.spot.length=y,o.rectArea.length=N,o.point.length=x,o.hemi.length=w,o.directionalShadow.length=R,o.directionalShadowMap.length=R,o.pointShadow.length=B,o.pointShadowMap.length=B,o.spotShadow.length=z,o.spotShadowMap.length=z,o.directionalShadowMatrix.length=R,o.pointShadowMatrix.length=B,o.spotLightMatrix.length=z+O-$,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=$,o.numLightProbes=xe,I.directionalLength=A,I.pointLength=x,I.spotLength=y,I.rectAreaLength=N,I.hemiLength=w,I.numDirectionalShadows=R,I.numPointShadows=B,I.numSpotShadows=z,I.numSpotMaps=O,I.numLightProbes=xe,o.version=xE++)}function p(m,g){let _=0,S=0,M=0,A=0,x=0;const y=g.matrixWorldInverse;for(let N=0,w=m.length;N<w;N++){const R=m[N];if(R.isDirectionalLight){const B=o.directional[_];B.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),_++}else if(R.isSpotLight){const B=o.spot[M];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const B=o.rectArea[A];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(y),u.identity(),f.copy(R.matrixWorld),f.premultiply(y),u.extractRotation(f),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),B.halfWidth.applyMatrix4(u),B.halfHeight.applyMatrix4(u),A++}else if(R.isPointLight){const B=o.point[S];B.position.setFromMatrixPosition(R.matrixWorld),B.position.applyMatrix4(y),S++}else if(R.isHemisphereLight){const B=o.hemi[x];B.direction.setFromMatrixPosition(R.matrixWorld),B.direction.transformDirection(y),x++}}}return{setup:d,setupView:p,state:o}}function Ig(s,e){const t=new SE(s,e),r=[],o=[];function l(){r.length=0,o.length=0}function f(g){r.push(g)}function u(g){o.push(g)}function d(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:d,setupLightsView:p,pushLight:f,pushShadow:u}}function ME(s,e){let t=new WeakMap;function r(l,f=0){const u=t.get(l);let d;return u===void 0?(d=new Ig(s,e),t.set(l,[d])):f>=u.length?(d=new Ig(s,e),u.push(d)):d=u[f],d}function o(){t=new WeakMap}return{get:r,dispose:o}}class EE extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wE extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`;function CE(s,e,t){let r=new zd;const o=new He,l=new He,f=new hn,u=new EE({depthPacking:xx}),d=new wE,p={},m=t.maxTextureSize,g={[us]:ii,[ii]:us,[Si]:Si},_=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:TE,fragmentShader:AE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new dn;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new jt(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let y=this.type;this.render=function(z,O,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const xe=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),Se=s.state;Se.setBlending(as),Se.buffers.color.setClear(1,1,1,1),Se.buffers.depth.setTest(!0),Se.setScissorTest(!1);const ve=y!==Ar&&this.type===Ar,j=y===Ar&&this.type!==Ar;for(let fe=0,W=z.length;fe<W;fe++){const ae=z[fe],F=ae.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const Y=F.getFrameExtents();if(o.multiply(Y),l.copy(F.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/Y.x),o.x=l.x*Y.x,F.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/Y.y),o.y=l.y*Y.y,F.mapSize.y=l.y)),F.map===null||ve===!0||j===!0){const U=this.type!==Ar?{minFilter:ni,magFilter:ni}:{};F.map!==null&&F.map.dispose(),F.map=new Vs(o.x,o.y,U),F.map.texture.name=ae.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const X=F.getViewportCount();for(let U=0;U<X;U++){const Q=F.getViewport(U);f.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),Se.viewport(f),F.updateMatrices(ae,U),r=F.getFrustum(),R(O,$,F.camera,ae,this.type)}F.isPointLightShadow!==!0&&this.type===Ar&&N(F,$),F.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(xe,T,I)};function N(z,O){const $=e.update(A);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Vs(o.x,o.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,$,_,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,$,S,A,null)}function w(z,O,$,xe){let T=null;const I=$.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)T=I;else if(T=$.isPointLight===!0?d:u,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Se=T.uuid,ve=O.uuid;let j=p[Se];j===void 0&&(j={},p[Se]=j);let fe=j[ve];fe===void 0&&(fe=T.clone(),j[ve]=fe,O.addEventListener("dispose",B)),T=fe}if(T.visible=O.visible,T.wireframe=O.wireframe,xe===Ar?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:g[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,$.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Se=s.properties.get(T);Se.light=$}return T}function R(z,O,$,xe,T){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===Ar)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,z.matrixWorld);const ve=e.update(z),j=z.material;if(Array.isArray(j)){const fe=ve.groups;for(let W=0,ae=fe.length;W<ae;W++){const F=fe[W],Y=j[F.materialIndex];if(Y&&Y.visible){const X=w(z,Y,xe,T);z.onBeforeShadow(s,z,O,$,ve,X,F),s.renderBufferDirect($,null,ve,X,z,F),z.onAfterShadow(s,z,O,$,ve,X,F)}}}else if(j.visible){const fe=w(z,j,xe,T);z.onBeforeShadow(s,z,O,$,ve,fe,null),s.renderBufferDirect($,null,ve,fe,z,null),z.onAfterShadow(s,z,O,$,ve,fe,null)}}const Se=z.children;for(let ve=0,j=Se.length;ve<j;ve++)R(Se[ve],O,$,xe,T)}function B(z){z.target.removeEventListener("dispose",B);for(const $ in p){const xe=p[$],T=z.target.uuid;T in xe&&(xe[T].dispose(),delete xe[T])}}}function RE(s,e,t){const r=t.isWebGL2;function o(){let K=!1;const ce=new hn;let ee=null;const pe=new hn(0,0,0,0);return{setMask:function(me){ee!==me&&!K&&(s.colorMask(me,me,me,me),ee=me)},setLocked:function(me){K=me},setClear:function(me,Ve,Qe,ht,Lt){Lt===!0&&(me*=ht,Ve*=ht,Qe*=ht),ce.set(me,Ve,Qe,ht),pe.equals(ce)===!1&&(s.clearColor(me,Ve,Qe,ht),pe.copy(ce))},reset:function(){K=!1,ee=null,pe.set(-1,0,0,0)}}}function l(){let K=!1,ce=null,ee=null,pe=null;return{setTest:function(me){me?Le(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(me){ce!==me&&!K&&(s.depthMask(me),ce=me)},setFunc:function(me){if(ee!==me){switch(me){case q_:s.depthFunc(s.NEVER);break;case Y_:s.depthFunc(s.ALWAYS);break;case K_:s.depthFunc(s.LESS);break;case Uc:s.depthFunc(s.LEQUAL);break;case Z_:s.depthFunc(s.EQUAL);break;case J_:s.depthFunc(s.GEQUAL);break;case Q_:s.depthFunc(s.GREATER);break;case ex:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=me}},setLocked:function(me){K=me},setClear:function(me){pe!==me&&(s.clearDepth(me),pe=me)},reset:function(){K=!1,ce=null,ee=null,pe=null}}}function f(){let K=!1,ce=null,ee=null,pe=null,me=null,Ve=null,Qe=null,ht=null,Lt=null;return{setTest:function(vt){K||(vt?Le(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(vt){ce!==vt&&!K&&(s.stencilMask(vt),ce=vt)},setFunc:function(vt,kt,Xt){(ee!==vt||pe!==kt||me!==Xt)&&(s.stencilFunc(vt,kt,Xt),ee=vt,pe=kt,me=Xt)},setOp:function(vt,kt,Xt){(Ve!==vt||Qe!==kt||ht!==Xt)&&(s.stencilOp(vt,kt,Xt),Ve=vt,Qe=kt,ht=Xt)},setLocked:function(vt){K=vt},setClear:function(vt){Lt!==vt&&(s.clearStencil(vt),Lt=vt)},reset:function(){K=!1,ce=null,ee=null,pe=null,me=null,Ve=null,Qe=null,ht=null,Lt=null}}}const u=new o,d=new l,p=new f,m=new WeakMap,g=new WeakMap;let _={},S={},M=new WeakMap,A=[],x=null,y=!1,N=null,w=null,R=null,B=null,z=null,O=null,$=null,xe=new bt(0,0,0),T=0,I=!1,Se=null,ve=null,j=null,fe=null,W=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=Y>=2);let U=null,Q={};const Ae=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),he=new hn().fromArray(Ae),ge=new hn().fromArray(J);function De(K,ce,ee,pe){const me=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(K,Ve),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ee;Qe++)r&&(K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY)?s.texImage3D(ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ce+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return Ve}const Ne={};Ne[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ne[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Le(s.DEPTH_TEST),d.setFunc(Uc),Xe(!1),Ke(pm),Le(s.CULL_FACE),Me(as);function Le(K){_[K]!==!0&&(s.enable(K),_[K]=!0)}function ot(K){_[K]!==!1&&(s.disable(K),_[K]=!1)}function et(K,ce){return S[K]!==ce?(s.bindFramebuffer(K,ce),S[K]=ce,r&&(K===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=ce),K===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(K,ce){let ee=A,pe=!1;if(K){ee=M.get(ce),ee===void 0&&(ee=[],M.set(ce,ee));const me=K.textures;if(ee.length!==me.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,Qe=me.length;Ve<Qe;Ve++)ee[Ve]=s.COLOR_ATTACHMENT0+Ve;ee.length=me.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);if(pe)if(t.isWebGL2)s.drawBuffers(ee);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ue(K){return x!==K?(s.useProgram(K),x=K,!0):!1}const ye={[Us]:s.FUNC_ADD,[N_]:s.FUNC_SUBTRACT,[I_]:s.FUNC_REVERSE_SUBTRACT};if(r)ye[_m]=s.MIN,ye[xm]=s.MAX;else{const K=e.get("EXT_blend_minmax");K!==null&&(ye[_m]=K.MIN_EXT,ye[xm]=K.MAX_EXT)}const Fe={[U_]:s.ZERO,[F_]:s.ONE,[O_]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[V_]:s.SRC_ALPHA_SATURATE,[H_]:s.DST_COLOR,[k_]:s.DST_ALPHA,[z_]:s.ONE_MINUS_SRC_COLOR,[yd]:s.ONE_MINUS_SRC_ALPHA,[G_]:s.ONE_MINUS_DST_COLOR,[B_]:s.ONE_MINUS_DST_ALPHA,[W_]:s.CONSTANT_COLOR,[j_]:s.ONE_MINUS_CONSTANT_COLOR,[X_]:s.CONSTANT_ALPHA,[$_]:s.ONE_MINUS_CONSTANT_ALPHA};function Me(K,ce,ee,pe,me,Ve,Qe,ht,Lt,vt){if(K===as){y===!0&&(ot(s.BLEND),y=!1);return}if(y===!1&&(Le(s.BLEND),y=!0),K!==D_){if(K!==N||vt!==I){if((w!==Us||z!==Us)&&(s.blendEquation(s.FUNC_ADD),w=Us,z=Us),vt)switch(K){case Xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFunc(s.ONE,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}R=null,B=null,O=null,$=null,xe.set(0,0,0),T=0,N=K,I=vt}return}me=me||ce,Ve=Ve||ee,Qe=Qe||pe,(ce!==w||me!==z)&&(s.blendEquationSeparate(ye[ce],ye[me]),w=ce,z=me),(ee!==R||pe!==B||Ve!==O||Qe!==$)&&(s.blendFuncSeparate(Fe[ee],Fe[pe],Fe[Ve],Fe[Qe]),R=ee,B=pe,O=Ve,$=Qe),(ht.equals(xe)===!1||Lt!==T)&&(s.blendColor(ht.r,ht.g,ht.b,Lt),xe.copy(ht),T=Lt),N=K,I=!1}function Ye(K,ce){K.side===Si?ot(s.CULL_FACE):Le(s.CULL_FACE);let ee=K.side===ii;ce&&(ee=!ee),Xe(ee),K.blending===Xo&&K.transparent===!1?Me(as):Me(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),u.setMask(K.colorWrite);const pe=K.stencilWrite;p.setTest(pe),pe&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),D(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(K){Se!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),Se=K)}function Ke(K){K!==b_?(Le(s.CULL_FACE),K!==ve&&(K===pm?s.cullFace(s.BACK):K===P_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),ve=K}function Et(K){K!==j&&(F&&s.lineWidth(K),j=K)}function D(K,ce,ee){K?(Le(s.POLYGON_OFFSET_FILL),(fe!==ce||W!==ee)&&(s.polygonOffset(ce,ee),fe=ce,W=ee)):ot(s.POLYGON_OFFSET_FILL)}function C(K){K?Le(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function de(K){K===void 0&&(K=s.TEXTURE0+ae-1),U!==K&&(s.activeTexture(K),U=K)}function _e(K,ce,ee){ee===void 0&&(U===null?ee=s.TEXTURE0+ae-1:ee=U);let pe=Q[ee];pe===void 0&&(pe={type:void 0,texture:void 0},Q[ee]=pe),(pe.type!==K||pe.texture!==ce)&&(U!==ee&&(s.activeTexture(ee),U=ee),s.bindTexture(K,ce||Ne[K]),pe.type=K,pe.texture=ce)}function be(){const K=Q[U];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function at(){try{s.texSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ce(){try{s.texStorage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function it(){try{s.texImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function lt(){try{s.texImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ge(K){he.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),he.copy(K))}function tt(K){ge.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),ge.copy(K))}function ft(K,ce){let ee=g.get(ce);ee===void 0&&(ee=new WeakMap,g.set(ce,ee));let pe=ee.get(K);pe===void 0&&(pe=s.getUniformBlockIndex(ce,K.name),ee.set(K,pe))}function mt(K,ce){const pe=g.get(ce).get(K);m.get(ce)!==pe&&(s.uniformBlockBinding(ce,pe,K.__bindingPointIndex),m.set(ce,pe))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},U=null,Q={},S={},M=new WeakMap,A=[],x=null,y=!1,N=null,w=null,R=null,B=null,z=null,O=null,$=null,xe=new bt(0,0,0),T=0,I=!1,Se=null,ve=null,j=null,fe=null,W=null,he.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Le,disable:ot,bindFramebuffer:et,drawBuffers:H,useProgram:Ue,setBlending:Me,setMaterial:Ye,setFlipSided:Xe,setCullFace:Ke,setLineWidth:Et,setPolygonOffset:D,setScissorTest:C,activeTexture:de,bindTexture:_e,unbindTexture:be,compressedTexImage2D:Te,compressedTexImage3D:gt,texImage2D:it,texImage3D:lt,updateUBOMapping:ft,uniformBlockBinding:mt,texStorage2D:Ce,texStorage3D:_t,texSubImage2D:at,texSubImage3D:ze,compressedTexSubImage2D:Oe,compressedTexSubImage3D:dt,scissor:Ge,viewport:tt,reset:Vt}}function bE(s,e,t,r,o,l,f){const u=o.isWebGL2,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new He,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,C){return M?new OffscreenCanvas(D,C):Hc("canvas")}function x(D,C,de,_e){let be=1;const Te=Et(D);if((Te.width>_e||Te.height>_e)&&(be=_e/Math.max(Te.width,Te.height)),be<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const gt=C?Cd:Math.floor,at=gt(be*Te.width),ze=gt(be*Te.height);_===void 0&&(_=A(at,ze));const Oe=de?A(at,ze):_;return Oe.width=at,Oe.height=ze,Oe.getContext("2d").drawImage(D,0,0,at,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+at+"x"+ze+")."),Oe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),D;return D}function y(D){const C=Et(D);return qm(C.width)&&qm(C.height)}function N(D){return u?!1:D.wrapS!==Zi||D.wrapT!==Zi||D.minFilter!==ni&&D.minFilter!==hi}function w(D,C){return D.generateMipmaps&&C&&D.minFilter!==ni&&D.minFilter!==hi}function R(D){s.generateMipmap(D)}function B(D,C,de,_e,be=!1){if(u===!1)return C;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Te=C;if(C===s.RED&&(de===s.FLOAT&&(Te=s.R32F),de===s.HALF_FLOAT&&(Te=s.R16F),de===s.UNSIGNED_BYTE&&(Te=s.R8)),C===s.RED_INTEGER&&(de===s.UNSIGNED_BYTE&&(Te=s.R8UI),de===s.UNSIGNED_SHORT&&(Te=s.R16UI),de===s.UNSIGNED_INT&&(Te=s.R32UI),de===s.BYTE&&(Te=s.R8I),de===s.SHORT&&(Te=s.R16I),de===s.INT&&(Te=s.R32I)),C===s.RG&&(de===s.FLOAT&&(Te=s.RG32F),de===s.HALF_FLOAT&&(Te=s.RG16F),de===s.UNSIGNED_BYTE&&(Te=s.RG8)),C===s.RG_INTEGER&&(de===s.UNSIGNED_BYTE&&(Te=s.RG8UI),de===s.UNSIGNED_SHORT&&(Te=s.RG16UI),de===s.UNSIGNED_INT&&(Te=s.RG32UI),de===s.BYTE&&(Te=s.RG8I),de===s.SHORT&&(Te=s.RG16I),de===s.INT&&(Te=s.RG32I)),C===s.RGBA){const gt=be?Fc:nn.getTransfer(_e);de===s.FLOAT&&(Te=s.RGBA32F),de===s.HALF_FLOAT&&(Te=s.RGBA16F),de===s.UNSIGNED_BYTE&&(Te=gt===cn?s.SRGB8_ALPHA8:s.RGBA8),de===s.UNSIGNED_SHORT_4_4_4_4&&(Te=s.RGBA4),de===s.UNSIGNED_SHORT_5_5_5_1&&(Te=s.RGB5_A1)}return(Te===s.R16F||Te===s.R32F||Te===s.RG16F||Te===s.RG32F||Te===s.RGBA16F||Te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function z(D,C,de){return w(D,de)===!0||D.isFramebufferTexture&&D.minFilter!==ni&&D.minFilter!==hi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function O(D){return D===ni||D===ym||D===Pa?s.NEAREST:s.LINEAR}function $(D){const C=D.target;C.removeEventListener("dispose",$),T(C),C.isVideoTexture&&g.delete(C)}function xe(D){const C=D.target;C.removeEventListener("dispose",xe),Se(C)}function T(D){const C=r.get(D);if(C.__webglInit===void 0)return;const de=D.source,_e=S.get(de);if(_e){const be=_e[C.__cacheKey];be.usedTimes--,be.usedTimes===0&&I(D),Object.keys(_e).length===0&&S.delete(de)}r.remove(D)}function I(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const de=D.source,_e=S.get(de);delete _e[C.__cacheKey],f.memory.textures--}function Se(D){const C=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(C.__webglFramebuffer[_e]))for(let be=0;be<C.__webglFramebuffer[_e].length;be++)s.deleteFramebuffer(C.__webglFramebuffer[_e][be]);else s.deleteFramebuffer(C.__webglFramebuffer[_e]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[_e])}else{if(Array.isArray(C.__webglFramebuffer))for(let _e=0;_e<C.__webglFramebuffer.length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[_e]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let _e=0;_e<C.__webglColorRenderbuffer.length;_e++)C.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[_e]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const de=D.textures;for(let _e=0,be=de.length;_e<be;_e++){const Te=r.get(de[_e]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),f.memory.textures--),r.remove(de[_e])}r.remove(D)}let ve=0;function j(){ve=0}function fe(){const D=ve;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),ve+=1,D}function W(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function ae(D,C){const de=r.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.version>0&&de.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(de,D,C);return}}t.bindTexture(s.TEXTURE_2D,de.__webglTexture,s.TEXTURE0+C)}function F(D,C){const de=r.get(D);if(D.version>0&&de.__version!==D.version){ge(de,D,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,de.__webglTexture,s.TEXTURE0+C)}function Y(D,C){const de=r.get(D);if(D.version>0&&de.__version!==D.version){ge(de,D,C);return}t.bindTexture(s.TEXTURE_3D,de.__webglTexture,s.TEXTURE0+C)}function X(D,C){const de=r.get(D);if(D.version>0&&de.__version!==D.version){De(de,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture,s.TEXTURE0+C)}const U={[Ed]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[wd]:s.MIRRORED_REPEAT},Q={[ni]:s.NEAREST,[ym]:s.NEAREST_MIPMAP_NEAREST,[Pa]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Rf]:s.LINEAR_MIPMAP_NEAREST,[zs]:s.LINEAR_MIPMAP_LINEAR},Ae={[Sx]:s.NEVER,[Cx]:s.ALWAYS,[Mx]:s.LESS,[h0]:s.LEQUAL,[Ex]:s.EQUAL,[Ax]:s.GEQUAL,[wx]:s.GREATER,[Tx]:s.NOTEQUAL};function J(D,C,de){if(C.type===Cr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===hi||C.magFilter===Rf||C.magFilter===Pa||C.magFilter===zs||C.minFilter===hi||C.minFilter===Rf||C.minFilter===Pa||C.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),de?(s.texParameteri(D,s.TEXTURE_WRAP_S,U[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,U[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,U[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Q[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Q[C.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==Zi||C.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,O(C.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,O(C.minFilter)),C.minFilter!==ni&&C.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ae[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ni||C.minFilter!==Pa&&C.minFilter!==zs||C.type===Cr&&e.has("OES_texture_float_linear")===!1||u===!1&&C.type===Va&&e.has("OES_texture_half_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const _e=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function he(D,C){let de=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",$));const _e=C.source;let be=S.get(_e);be===void 0&&(be={},S.set(_e,be));const Te=W(C);if(Te!==D.__cacheKey){be[Te]===void 0&&(be[Te]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,de=!0),be[Te].usedTimes++;const gt=be[D.__cacheKey];gt!==void 0&&(be[D.__cacheKey].usedTimes--,gt.usedTimes===0&&I(C)),D.__cacheKey=Te,D.__webglTexture=be[Te].texture}return de}function ge(D,C,de){let _e=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(_e=s.TEXTURE_3D);const be=he(D,C),Te=C.source;t.bindTexture(_e,D.__webglTexture,s.TEXTURE0+de);const gt=r.get(Te);if(Te.version!==gt.__version||be===!0){t.activeTexture(s.TEXTURE0+de);const at=nn.getPrimaries(nn.workingColorSpace),ze=C.colorSpace===rs?null:nn.getPrimaries(C.colorSpace),Oe=C.colorSpace===rs||at===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const dt=N(C)&&y(C.image)===!1;let Ce=x(C.image,dt,!1,o.maxTextureSize);Ce=Ke(C,Ce);const _t=y(Ce)||u,it=l.convert(C.format,C.colorSpace);let lt=l.convert(C.type),Ge=B(C.internalFormat,it,lt,C.colorSpace,C.isVideoTexture);J(_e,C,_t);let tt;const ft=C.mipmaps,mt=u&&C.isVideoTexture!==!0&&Ge!==d0,Vt=gt.__version===void 0||be===!0,K=Te.dataReady,ce=z(C,Ce,_t);if(C.isDepthTexture)Ge=s.DEPTH_COMPONENT,u?C.type===Cr?Ge=s.DEPTH_COMPONENT32F:C.type===os?Ge=s.DEPTH_COMPONENT24:C.type===ks?Ge=s.DEPTH24_STENCIL8:Ge=s.DEPTH_COMPONENT16:C.type===Cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Bs&&Ge===s.DEPTH_COMPONENT&&C.type!==Ud&&C.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=os,lt=l.convert(C.type)),C.format===Ko&&Ge===s.DEPTH_COMPONENT&&(Ge=s.DEPTH_STENCIL,C.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ks,lt=l.convert(C.type))),Vt&&(mt?t.texStorage2D(s.TEXTURE_2D,1,Ge,Ce.width,Ce.height):t.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,it,lt,null));else if(C.isDataTexture)if(ft.length>0&&_t){mt&&Vt&&t.texStorage2D(s.TEXTURE_2D,ce,Ge,ft[0].width,ft[0].height);for(let ee=0,pe=ft.length;ee<pe;ee++)tt=ft[ee],mt?K&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,tt.width,tt.height,it,lt,tt.data):t.texImage2D(s.TEXTURE_2D,ee,Ge,tt.width,tt.height,0,it,lt,tt.data);C.generateMipmaps=!1}else mt?(Vt&&t.texStorage2D(s.TEXTURE_2D,ce,Ge,Ce.width,Ce.height),K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce.width,Ce.height,it,lt,Ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,it,lt,Ce.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){mt&&Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ge,ft[0].width,ft[0].height,Ce.depth);for(let ee=0,pe=ft.length;ee<pe;ee++)tt=ft[ee],C.format!==Ji?it!==null?mt?K&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,tt.width,tt.height,Ce.depth,it,tt.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ge,tt.width,tt.height,Ce.depth,0,tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,tt.width,tt.height,Ce.depth,it,lt,tt.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ge,tt.width,tt.height,Ce.depth,0,it,lt,tt.data)}else{mt&&Vt&&t.texStorage2D(s.TEXTURE_2D,ce,Ge,ft[0].width,ft[0].height);for(let ee=0,pe=ft.length;ee<pe;ee++)tt=ft[ee],C.format!==Ji?it!==null?mt?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,tt.width,tt.height,it,tt.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ge,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?K&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,tt.width,tt.height,it,lt,tt.data):t.texImage2D(s.TEXTURE_2D,ee,Ge,tt.width,tt.height,0,it,lt,tt.data)}else if(C.isDataArrayTexture)mt?(Vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ge,Ce.width,Ce.height,Ce.depth),K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,it,lt,Ce.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,Ce.width,Ce.height,Ce.depth,0,it,lt,Ce.data);else if(C.isData3DTexture)mt?(Vt&&t.texStorage3D(s.TEXTURE_3D,ce,Ge,Ce.width,Ce.height,Ce.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,it,lt,Ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,Ce.width,Ce.height,Ce.depth,0,it,lt,Ce.data);else if(C.isFramebufferTexture){if(Vt)if(mt)t.texStorage2D(s.TEXTURE_2D,ce,Ge,Ce.width,Ce.height);else{let ee=Ce.width,pe=Ce.height;for(let me=0;me<ce;me++)t.texImage2D(s.TEXTURE_2D,me,Ge,ee,pe,0,it,lt,null),ee>>=1,pe>>=1}}else if(ft.length>0&&_t){if(mt&&Vt){const ee=Et(ft[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ge,ee.width,ee.height)}for(let ee=0,pe=ft.length;ee<pe;ee++)tt=ft[ee],mt?K&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,it,lt,tt):t.texImage2D(s.TEXTURE_2D,ee,Ge,it,lt,tt);C.generateMipmaps=!1}else if(mt){if(Vt){const ee=Et(Ce);t.texStorage2D(s.TEXTURE_2D,ce,Ge,ee.width,ee.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,it,lt,Ce)}else t.texImage2D(s.TEXTURE_2D,0,Ge,it,lt,Ce);w(C,_t)&&R(_e),gt.__version=Te.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function De(D,C,de){if(C.image.length!==6)return;const _e=he(D,C),be=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+de);const Te=r.get(be);if(be.version!==Te.__version||_e===!0){t.activeTexture(s.TEXTURE0+de);const gt=nn.getPrimaries(nn.workingColorSpace),at=C.colorSpace===rs?null:nn.getPrimaries(C.colorSpace),ze=C.colorSpace===rs||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Oe=C.isCompressedTexture||C.image[0].isCompressedTexture,dt=C.image[0]&&C.image[0].isDataTexture,Ce=[];for(let ee=0;ee<6;ee++)!Oe&&!dt?Ce[ee]=x(C.image[ee],!1,!0,o.maxCubemapSize):Ce[ee]=dt?C.image[ee].image:C.image[ee],Ce[ee]=Ke(C,Ce[ee]);const _t=Ce[0],it=y(_t)||u,lt=l.convert(C.format,C.colorSpace),Ge=l.convert(C.type),tt=B(C.internalFormat,lt,Ge,C.colorSpace),ft=u&&C.isVideoTexture!==!0,mt=Te.__version===void 0||_e===!0,Vt=be.dataReady;let K=z(C,_t,it);J(s.TEXTURE_CUBE_MAP,C,it);let ce;if(Oe){ft&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,K,tt,_t.width,_t.height);for(let ee=0;ee<6;ee++){ce=Ce[ee].mipmaps;for(let pe=0;pe<ce.length;pe++){const me=ce[pe];C.format!==Ji?lt!==null?ft?Vt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,me.width,me.height,lt,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,tt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,me.width,me.height,lt,Ge,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,tt,me.width,me.height,0,lt,Ge,me.data)}}}else{if(ce=C.mipmaps,ft&&mt){ce.length>0&&K++;const ee=Et(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,K,tt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(dt){ft?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce[ee].width,Ce[ee].height,lt,Ge,Ce[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,Ce[ee].width,Ce[ee].height,0,lt,Ge,Ce[ee].data);for(let pe=0;pe<ce.length;pe++){const Ve=ce[pe].image[ee].image;ft?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ve.width,Ve.height,lt,Ge,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,tt,Ve.width,Ve.height,0,lt,Ge,Ve.data)}}else{ft?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,lt,Ge,Ce[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,lt,Ge,Ce[ee]);for(let pe=0;pe<ce.length;pe++){const me=ce[pe];ft?Vt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,lt,Ge,me.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,tt,lt,Ge,me.image[ee])}}}w(C,it)&&R(s.TEXTURE_CUBE_MAP),Te.__version=be.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Ne(D,C,de,_e,be,Te){const gt=l.convert(de.format,de.colorSpace),at=l.convert(de.type),ze=B(de.internalFormat,gt,at,de.colorSpace);if(!r.get(C).__hasExternalTextures){const dt=Math.max(1,C.width>>Te),Ce=Math.max(1,C.height>>Te);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?t.texImage3D(be,Te,ze,dt,Ce,C.depth,0,gt,at,null):t.texImage2D(be,Te,ze,dt,Ce,0,gt,at,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,be,r.get(de).__webglTexture,0,Me(C)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,be,r.get(de).__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,C,de){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let _e=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(de||Ye(C)){const be=C.depthTexture;be&&be.isDepthTexture&&(be.type===Cr?_e=s.DEPTH_COMPONENT32F:be.type===os&&(_e=s.DEPTH_COMPONENT24));const Te=Me(C);Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,_e,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,_e,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){const _e=Me(C);de&&Ye(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,C.width,C.height):Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const _e=C.textures;for(let be=0;be<_e.length;be++){const Te=_e[be],gt=l.convert(Te.format,Te.colorSpace),at=l.convert(Te.type),ze=B(Te.internalFormat,gt,at,Te.colorSpace),Oe=Me(C);de&&Ye(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,ze,C.width,C.height):Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,ze,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ze,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ae(C.depthTexture,0);const _e=r.get(C.depthTexture).__webglTexture,be=Me(C);if(C.depthTexture.format===Bs)Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(C.depthTexture.format===Ko)Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function et(D){const C=r.get(D),de=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(de)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,D)}else if(de){C.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[_e]),C.__webglDepthbuffer[_e]=s.createRenderbuffer(),Le(C.__webglDepthbuffer[_e],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Le(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function H(D,C,de){const _e=r.get(D);C!==void 0&&Ne(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),de!==void 0&&et(D)}function Ue(D){const C=D.texture,de=r.get(D),_e=r.get(C);D.addEventListener("dispose",xe);const be=D.textures,Te=D.isWebGLCubeRenderTarget===!0,gt=be.length>1,at=y(D)||u;if(gt||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=C.version,f.memory.textures++),Te){de.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(u&&C.mipmaps&&C.mipmaps.length>0){de.__webglFramebuffer[ze]=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)de.__webglFramebuffer[ze][Oe]=s.createFramebuffer()}else de.__webglFramebuffer[ze]=s.createFramebuffer()}else{if(u&&C.mipmaps&&C.mipmaps.length>0){de.__webglFramebuffer=[];for(let ze=0;ze<C.mipmaps.length;ze++)de.__webglFramebuffer[ze]=s.createFramebuffer()}else de.__webglFramebuffer=s.createFramebuffer();if(gt)if(o.drawBuffers)for(let ze=0,Oe=be.length;ze<Oe;ze++){const dt=r.get(be[ze]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&D.samples>0&&Ye(D)===!1){de.__webglMultisampledFramebuffer=s.createFramebuffer(),de.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer);for(let ze=0;ze<be.length;ze++){const Oe=be[ze];de.__webglColorRenderbuffer[ze]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,de.__webglColorRenderbuffer[ze]);const dt=l.convert(Oe.format,Oe.colorSpace),Ce=l.convert(Oe.type),_t=B(Oe.internalFormat,dt,Ce,Oe.colorSpace,D.isXRRenderTarget===!0),it=Me(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,_t,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,de.__webglColorRenderbuffer[ze])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(de.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(de.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),J(s.TEXTURE_CUBE_MAP,C,at);for(let ze=0;ze<6;ze++)if(u&&C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)Ne(de.__webglFramebuffer[ze][Oe],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Oe);else Ne(de.__webglFramebuffer[ze],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);w(C,at)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(gt){for(let ze=0,Oe=be.length;ze<Oe;ze++){const dt=be[ze],Ce=r.get(dt);t.bindTexture(s.TEXTURE_2D,Ce.__webglTexture),J(s.TEXTURE_2D,dt,at),Ne(de.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,0),w(dt,at)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ze=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(u?ze=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ze,_e.__webglTexture),J(ze,C,at),u&&C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)Ne(de.__webglFramebuffer[Oe],D,C,s.COLOR_ATTACHMENT0,ze,Oe);else Ne(de.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,ze,0);w(C,at)&&R(ze),t.unbindTexture()}D.depthBuffer&&et(D)}function ye(D){const C=y(D)||u,de=D.textures;for(let _e=0,be=de.length;_e<be;_e++){const Te=de[_e];if(w(Te,C)){const gt=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=r.get(Te).__webglTexture;t.bindTexture(gt,at),R(gt),t.unbindTexture()}}}function Fe(D){if(u&&D.samples>0&&Ye(D)===!1){const C=D.textures,de=D.width,_e=D.height;let be=s.COLOR_BUFFER_BIT;const Te=[],gt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=r.get(D),ze=C.length>1;if(ze)for(let Oe=0;Oe<C.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Oe=0;Oe<C.length;Oe++){Te.push(s.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&Te.push(gt);const dt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(dt===!1&&(D.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),ze&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[Oe]),dt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),ze){const Ce=r.get(C[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,de,_e,0,0,de,_e,be,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ze)for(let Oe=0;Oe<C.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,at.__webglColorRenderbuffer[Oe]);const dt=r.get(C[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Me(D){return Math.min(o.maxSamples,D.samples)}function Ye(D){const C=r.get(D);return u&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Xe(D){const C=f.render.frame;g.get(D)!==C&&(g.set(D,C),D.update())}function Ke(D,C){const de=D.colorSpace,_e=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ad||de!==fs&&de!==rs&&(nn.getTransfer(de)===cn?u===!1?e.has("EXT_sRGB")===!0&&_e===Ji?(D.format=Ad,D.minFilter=hi,D.generateMipmaps=!1):C=g0.sRGBToLinear(C):(_e!==Ji||be!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",de)),C}function Et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=fe,this.resetTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=H,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ye}function PE(s,e,t){const r=t.isWebGL2;function o(l,f=rs){let u;const d=nn.getTransfer(f);if(l===cs)return s.UNSIGNED_BYTE;if(l===a0)return s.UNSIGNED_SHORT_4_4_4_4;if(l===l0)return s.UNSIGNED_SHORT_5_5_5_1;if(l===ux)return s.BYTE;if(l===fx)return s.SHORT;if(l===Ud)return s.UNSIGNED_SHORT;if(l===o0)return s.INT;if(l===os)return s.UNSIGNED_INT;if(l===Cr)return s.FLOAT;if(l===Va)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===dx)return s.ALPHA;if(l===Ji)return s.RGBA;if(l===hx)return s.LUMINANCE;if(l===px)return s.LUMINANCE_ALPHA;if(l===Bs)return s.DEPTH_COMPONENT;if(l===Ko)return s.DEPTH_STENCIL;if(l===Ad)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===mx)return s.RED;if(l===c0)return s.RED_INTEGER;if(l===gx)return s.RG;if(l===u0)return s.RG_INTEGER;if(l===f0)return s.RGBA_INTEGER;if(l===bf||l===Pf||l===Lf||l===Df)if(d===cn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===bf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Pf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Lf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Df)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===bf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Pf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Lf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Df)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Sm||l===Mm||l===Em||l===wm)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Sm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Mm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Em)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===wm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===d0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Tm||l===Am)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Tm)return d===cn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Am)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Cm||l===Rm||l===bm||l===Pm||l===Lm||l===Dm||l===Nm||l===Im||l===Um||l===Fm||l===Om||l===zm||l===km||l===Bm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Cm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Rm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===bm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Pm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Lm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Dm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Nm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Im)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Um)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Fm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Om)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===zm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===km)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Bm)return d===cn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Nf||l===Hm||l===Gm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===Nf)return d===cn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Hm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Gm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===vx||l===Vm||l===Wm||l===jm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===Nf)return u.COMPRESSED_RED_RGTC1_EXT;if(l===Vm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Wm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===jm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===ks?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:o}}class LE extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,f=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,r),y=this._getHandJoint(p,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new ri,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,o=new Pr({extensions:{fragDepth:!0},vertexShader:NE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new jt(new Ka(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class FE extends Jo{constructor(e,t){super();const r=this;let o=null,l=1,f=null,u="local-floor",d=1,p=null,m=null,g=null,_=null,S=null,M=null;const A=new UE,x=t.getContextAttributes();let y=null,N=null;const w=[],R=[],B=new He;let z=null;const O=new pi;O.layers.enable(1),O.viewport=new hn;const $=new pi;$.layers.enable(2),$.viewport=new hn;const xe=[O,$],T=new LE;T.layers.enable(1),T.layers.enable(2);let I=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=w[J];return he===void 0&&(he=new od,w[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=w[J];return he===void 0&&(he=new od,w[J]=he),he.getGripSpace()},this.getHand=function(J){let he=w[J];return he===void 0&&(he=new od,w[J]=he),he.getHandSpace()};function ve(J){const he=R.indexOf(J.inputSource);if(he===-1)return;const ge=w[he];ge!==void 0&&(ge.update(J.inputSource,J.frame,p||f),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){o.removeEventListener("select",ve),o.removeEventListener("selectstart",ve),o.removeEventListener("selectend",ve),o.removeEventListener("squeeze",ve),o.removeEventListener("squeezestart",ve),o.removeEventListener("squeezeend",ve),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",fe);for(let J=0;J<w.length;J++){const he=R[J];he!==null&&(R[J]=null,w[J].disconnect(he))}I=null,Se=null,A.reset(),e.setRenderTarget(y),S=null,_=null,g=null,o=null,N=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",ve),o.addEventListener("selectstart",ve),o.addEventListener("selectend",ve),o.addEventListener("squeeze",ve),o.addEventListener("squeezestart",ve),o.addEventListener("squeezeend",ve),o.addEventListener("end",j),o.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:o.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Vs(S.framebufferWidth,S.framebufferHeight,{format:Ji,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let he=null,ge=null,De=null;x.depth&&(De=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?Ko:Bs,ge=x.stencil?ks:os);const Ne={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(Ne),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Vs(_.textureWidth,_.textureHeight,{format:Ji,type:cs,depthTexture:new R0(_.textureWidth,_.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(N);Le.__ignoreDepthValues=_.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await o.requestReferenceSpace(u),Ae.setContext(o),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function fe(J){for(let he=0;he<J.removed.length;he++){const ge=J.removed[he],De=R.indexOf(ge);De>=0&&(R[De]=null,w[De].disconnect(ge))}for(let he=0;he<J.added.length;he++){const ge=J.added[he];let De=R.indexOf(ge);if(De===-1){for(let Le=0;Le<w.length;Le++)if(Le>=R.length){R.push(ge),De=Le;break}else if(R[Le]===null){R[Le]=ge,De=Le;break}if(De===-1)break}const Ne=w[De];Ne&&Ne.connect(ge)}}const W=new V,ae=new V;function F(J,he,ge){W.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);const De=W.distanceTo(ae),Ne=he.projectionMatrix.elements,Le=ge.projectionMatrix.elements,ot=Ne[14]/(Ne[10]-1),et=Ne[14]/(Ne[10]+1),H=(Ne[9]+1)/Ne[5],Ue=(Ne[9]-1)/Ne[5],ye=(Ne[8]-1)/Ne[0],Fe=(Le[8]+1)/Le[0],Me=ot*ye,Ye=ot*Fe,Xe=De/(-ye+Fe),Ke=Xe*-ye;he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const Et=ot+Xe,D=et+Xe,C=Me-Ke,de=Ye+(De-Ke),_e=H*et/D*Et,be=Ue*et/D*Et;J.projectionMatrix.makePerspective(C,de,_e,be,Et,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Y(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;A.texture!==null&&(J.near=A.depthNear,J.far=A.depthFar),T.near=$.near=O.near=J.near,T.far=$.far=O.far=J.far,(I!==T.near||Se!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,Se=T.far,O.near=I,O.far=Se,$.near=I,$.far=Se,O.updateProjectionMatrix(),$.updateProjectionMatrix(),J.updateProjectionMatrix());const he=J.parent,ge=T.cameras;Y(T,he);for(let De=0;De<ge.length;De++)Y(ge[De],he);ge.length===2?F(T,O,$):T.projectionMatrix.copy(O.projectionMatrix),X(J,T,he)};function X(J,he,ge){ge===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(J){d=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null};let U=null;function Q(J,he){if(m=he.getViewerPose(p||f),M=he,m!==null){const ge=m.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let De=!1;ge.length!==T.cameras.length&&(T.cameras.length=0,De=!0);for(let Le=0;Le<ge.length;Le++){const ot=ge[Le];let et=null;if(S!==null)et=S.getViewport(ot);else{const Ue=g.getViewSubImage(_,ot);et=Ue.viewport,Le===0&&(e.setRenderTargetTextures(N,Ue.colorTexture,_.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(N))}let H=xe[Le];H===void 0&&(H=new pi,H.layers.enable(Le),H.viewport=new hn,xe[Le]=H),H.matrix.fromArray(ot.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ot.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(et.x,et.y,et.width,et.height),Le===0&&(T.matrix.copy(H.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),De===!0&&T.cameras.push(H)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Le=g.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,o.renderState)}}for(let ge=0;ge<w.length;ge++){const De=R[ge],Ne=w[ge];De!==null&&Ne!==void 0&&Ne.update(De,he,p||f)}A.render(e,T),U&&U(J,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ae=new A0;Ae.setAnimationLoop(Q),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const Ds=new Ni,OE=new on;function zE(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,E0(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,N,w,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),A(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?d(x,y,N,w):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ii&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ii&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const N=e.get(y),w=N.envMap,R=N.envMapRotation;if(w&&(x.envMap.value=w,Ds.copy(R),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),x.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Ds)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const B=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*B,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,N,w){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*N,x.scale.value=w*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,N){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const N=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,t,r){let o={},l={},f=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(N,w){const R=w.program;r.uniformBlockBinding(N,R)}function p(N,w){let R=o[N.id];R===void 0&&(M(N),R=m(N),o[N.id]=R,N.addEventListener("dispose",x));const B=w.program;r.updateUBOMapping(N,B);const z=e.render.frame;l[N.id]!==z&&(_(N),l[N.id]=z)}function m(N){const w=g();N.__bindingPointIndex=w;const R=s.createBuffer(),B=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,B,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,R),R}function g(){for(let N=0;N<u;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const w=o[N.id],R=N.uniforms,B=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let z=0,O=R.length;z<O;z++){const $=Array.isArray(R[z])?R[z]:[R[z]];for(let xe=0,T=$.length;xe<T;xe++){const I=$[xe];if(S(I,z,xe,B)===!0){const Se=I.__offset,ve=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let fe=0;fe<ve.length;fe++){const W=ve[fe],ae=A(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,Se+j,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,j),j+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Se,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,w,R,B){const z=N.value,O=w+"_"+R;if(B[O]===void 0)return typeof z=="number"||typeof z=="boolean"?B[O]=z:B[O]=z.clone(),!0;{const $=B[O];if(typeof z=="number"||typeof z=="boolean"){if($!==z)return B[O]=z,!0}else if($.equals(z)===!1)return $.copy(z),!0}return!1}function M(N){const w=N.uniforms;let R=0;const B=16;for(let O=0,$=w.length;O<$;O++){const xe=Array.isArray(w[O])?w[O]:[w[O]];for(let T=0,I=xe.length;T<I;T++){const Se=xe[T],ve=Array.isArray(Se.value)?Se.value:[Se.value];for(let j=0,fe=ve.length;j<fe;j++){const W=ve[j],ae=A(W),F=R%B;F!==0&&B-F<ae.boundary&&(R+=B-F),Se.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Se.__offset=R,R+=ae.storage}}}const z=R%B;return z>0&&(R+=B-z),N.__size=R,N.__cache={},this}function A(N){const w={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(w.boundary=4,w.storage=4):N.isVector2?(w.boundary=8,w.storage=8):N.isVector3||N.isColor?(w.boundary=16,w.storage=12):N.isVector4?(w.boundary=16,w.storage=16):N.isMatrix3?(w.boundary=48,w.storage=48):N.isMatrix4?(w.boundary=64,w.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),w}function x(N){const w=N.target;w.removeEventListener("dispose",x);const R=f.indexOf(w.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function y(){for(const N in o)s.deleteBuffer(o[N]);f=[],o={},l={}}return{bind:d,update:p,dispose:y}}class I0{constructor(e={}){const{canvas:t=bx(),context:r=null,depth:o=!0,stencil:l=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=f;const S=new Uint32Array(4),M=new Int32Array(4);let A=null,x=null;const y=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=or,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;const w=this;let R=!1,B=0,z=0,O=null,$=-1,xe=null;const T=new hn,I=new hn;let Se=null;const ve=new bt(0);let j=0,fe=t.width,W=t.height,ae=1,F=null,Y=null;const X=new hn(0,0,fe,W),U=new hn(0,0,fe,W);let Q=!1;const Ae=new zd;let J=!1,he=!1,ge=null;const De=new on,Ne=new He,Le=new V,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return O===null?ae:1}let H=r;function Ue(P,te){for(let ie=0;ie<P.length;ie++){const le=P[ie],re=t.getContext(le,te);if(re!==null)return re}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ce,!1),H===null){const te=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&te.shift(),H=Ue(te,P),H===null)throw Ue(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ye,Fe,Me,Ye,Xe,Ke,Et,D,C,de,_e,be,Te,gt,at,ze,Oe,dt,Ce,_t,it,lt,Ge,tt;function ft(){ye=new jM(H),Fe=new kM(H,ye,e),ye.init(Fe),lt=new PE(H,ye,Fe),Me=new RE(H,ye,Fe),Ye=new qM(H),Xe=new pE,Ke=new bE(H,ye,Me,Xe,Fe,lt,Ye),Et=new HM(w),D=new WM(w),C=new ey(H,Fe),Ge=new OM(H,ye,C,Fe),de=new XM(H,C,Ye,Ge),_e=new JM(H,de,C,Ye),Ce=new ZM(H,Fe,Ke),ze=new BM(Xe),be=new hE(w,Et,D,ye,Fe,Ge,ze),Te=new zE(w,Xe),gt=new gE,at=new ME(ye,Fe),dt=new FM(w,Et,D,Me,_e,_,d),Oe=new CE(w,_e,Fe),tt=new kE(H,Ye,Fe,Me),_t=new zM(H,ye,Ye,Fe),it=new $M(H,ye,Ye,Fe),Ye.programs=be.programs,w.capabilities=Fe,w.extensions=ye,w.properties=Xe,w.renderLists=gt,w.shadowMap=Oe,w.state=Me,w.info=Ye}ft();const mt=new FE(w,H);this.xr=mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(P){P!==void 0&&(ae=P,this.setSize(fe,W,!1))},this.getSize=function(P){return P.set(fe,W)},this.setSize=function(P,te,ie=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=P,W=te,t.width=Math.floor(P*ae),t.height=Math.floor(te*ae),ie===!0&&(t.style.width=P+"px",t.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(fe*ae,W*ae).floor()},this.setDrawingBufferSize=function(P,te,ie){fe=P,W=te,ae=ie,t.width=Math.floor(P*ie),t.height=Math.floor(te*ie),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,te,ie,le){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,te,ie,le),Me.viewport(T.copy(X).multiplyScalar(ae).round())},this.getScissor=function(P){return P.copy(U)},this.setScissor=function(P,te,ie,le){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,te,ie,le),Me.scissor(I.copy(U).multiplyScalar(ae).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(P){Me.setScissorTest(Q=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(P=!0,te=!0,ie=!0){let le=0;if(P){let re=!1;if(O!==null){const We=O.texture.format;re=We===f0||We===u0||We===c0}if(re){const We=O.texture.type,ct=We===cs||We===os||We===Ud||We===ks||We===a0||We===l0,pt=dt.getClearColor(),Ze=dt.getClearAlpha(),Tt=pt.r,Mt=pt.g,xt=pt.b;ct?(S[0]=Tt,S[1]=Mt,S[2]=xt,S[3]=Ze,H.clearBufferuiv(H.COLOR,0,S)):(M[0]=Tt,M[1]=Mt,M[2]=xt,M[3]=Ze,H.clearBufferiv(H.COLOR,0,M))}else le|=H.COLOR_BUFFER_BIT}te&&(le|=H.DEPTH_BUFFER_BIT),ie&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),gt.dispose(),at.dispose(),Xe.dispose(),Et.dispose(),D.dispose(),_e.dispose(),Ge.dispose(),tt.dispose(),be.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Lt),mt.removeEventListener("sessionend",vt),ge&&(ge.dispose(),ge=null),kt.stop()};function Vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=Ye.autoReset,te=Oe.enabled,ie=Oe.autoUpdate,le=Oe.needsUpdate,re=Oe.type;ft(),Ye.autoReset=P,Oe.enabled=te,Oe.autoUpdate=ie,Oe.needsUpdate=le,Oe.type=re}function ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ee(P){const te=P.target;te.removeEventListener("dispose",ee),pe(te)}function pe(P){me(P),Xe.remove(P)}function me(P){const te=Xe.get(P).programs;te!==void 0&&(te.forEach(function(ie){be.releaseProgram(ie)}),P.isShaderMaterial&&be.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,ie,le,re,We){te===null&&(te=ot);const ct=re.isMesh&&re.matrixWorld.determinant()<0,pt=er(P,te,ie,le,re);Me.setMaterial(le,ct);let Ze=ie.index,Tt=1;if(le.wireframe===!0){if(Ze=de.getWireframeAttribute(ie),Ze===void 0)return;Tt=2}const Mt=ie.drawRange,xt=ie.attributes.position;let $t=Mt.start*Tt,_n=(Mt.start+Mt.count)*Tt;We!==null&&($t=Math.max($t,We.start*Tt),_n=Math.min(_n,(We.start+We.count)*Tt)),Ze!==null?($t=Math.max($t,0),_n=Math.min(_n,Ze.count)):xt!=null&&($t=Math.max($t,0),_n=Math.min(_n,xt.count));const qt=_n-$t;if(qt<0||qt===1/0)return;Ge.setup(re,le,pt,ie,Ze);let Rn,Ut=_t;if(Ze!==null&&(Rn=C.get(Ze),Ut=it,Ut.setIndex(Rn)),re.isMesh)le.wireframe===!0?(Me.setLineWidth(le.wireframeLinewidth*et()),Ut.setMode(H.LINES)):Ut.setMode(H.TRIANGLES);else if(re.isLine){let wt=le.linewidth;wt===void 0&&(wt=1),Me.setLineWidth(wt*et()),re.isLineSegments?Ut.setMode(H.LINES):re.isLineLoop?Ut.setMode(H.LINE_LOOP):Ut.setMode(H.LINE_STRIP)}else re.isPoints?Ut.setMode(H.POINTS):re.isSprite&&Ut.setMode(H.TRIANGLES);if(re.isBatchedMesh)Ut.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)Ut.renderInstances($t,qt,re.count);else if(ie.isInstancedBufferGeometry){const wt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Tn=Math.min(ie.instanceCount,wt);Ut.renderInstances($t,qt,Tn)}else Ut.render($t,qt)};function Ve(P,te,ie){P.transparent===!0&&P.side===Si&&P.forceSinglePass===!1?(P.side=ii,P.needsUpdate=!0,Bt(P,te,ie),P.side=us,P.needsUpdate=!0,Bt(P,te,ie),P.side=Si):Bt(P,te,ie)}this.compile=function(P,te,ie=null){ie===null&&(ie=P),x=at.get(ie),x.init(),N.push(x),ie.traverseVisible(function(re){re.isLight&&re.layers.test(te.layers)&&(x.pushLight(re),re.castShadow&&x.pushShadow(re))}),P!==ie&&P.traverseVisible(function(re){re.isLight&&re.layers.test(te.layers)&&(x.pushLight(re),re.castShadow&&x.pushShadow(re))}),x.setupLights(w._useLegacyLights);const le=new Set;return P.traverse(function(re){const We=re.material;if(We)if(Array.isArray(We))for(let ct=0;ct<We.length;ct++){const pt=We[ct];Ve(pt,ie,re),le.add(pt)}else Ve(We,ie,re),le.add(We)}),N.pop(),x=null,le},this.compileAsync=function(P,te,ie=null){const le=this.compile(P,te,ie);return new Promise(re=>{function We(){if(le.forEach(function(ct){Xe.get(ct).currentProgram.isReady()&&le.delete(ct)}),le.size===0){re(P);return}setTimeout(We,10)}ye.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Qe=null;function ht(P){Qe&&Qe(P)}function Lt(){kt.stop()}function vt(){kt.start()}const kt=new A0;kt.setAnimationLoop(ht),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(P){Qe=P,mt.setAnimationLoop(P),P===null?kt.stop():kt.start()},mt.addEventListener("sessionstart",Lt),mt.addEventListener("sessionend",vt),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(te),te=mt.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,te,O),x=at.get(P,N.length),x.init(),N.push(x),De.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Ae.setFromProjectionMatrix(De),he=this.localClippingEnabled,J=ze.init(this.clippingPlanes,he),A=gt.get(P,y.length),A.init(),y.push(A),Xt(P,te,0,w.sortObjects),A.finish(),w.sortObjects===!0&&A.sort(F,Y),this.info.render.frame++,J===!0&&ze.beginShadows();const ie=x.state.shadowsArray;if(Oe.render(ie,P,te),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1)&&dt.render(A,P),x.setupLights(w._useLegacyLights),te.isArrayCamera){const le=te.cameras;for(let re=0,We=le.length;re<We;re++){const ct=le[re];In(A,P,ct,ct.viewport)}}else In(A,P,te);O!==null&&(Ke.updateMultisampleRenderTarget(O),Ke.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,te),Ge.resetDefaultState(),$=-1,xe=null,N.pop(),N.length>0?x=N[N.length-1]:x=null,y.pop(),y.length>0?A=y[y.length-1]:A=null};function Xt(P,te,ie,le){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ae.intersectsSprite(P)){le&&Le.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const ct=_e.update(P),pt=P.material;pt.visible&&A.push(P,ct,pt,ie,Le.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ae.intersectsObject(P))){const ct=_e.update(P),pt=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Le.copy(P.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Le.copy(ct.boundingSphere.center)),Le.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(pt)){const Ze=ct.groups;for(let Tt=0,Mt=Ze.length;Tt<Mt;Tt++){const xt=Ze[Tt],$t=pt[xt.materialIndex];$t&&$t.visible&&A.push(P,ct,$t,ie,Le.z,xt)}}else pt.visible&&A.push(P,ct,pt,ie,Le.z,null)}}const We=P.children;for(let ct=0,pt=We.length;ct<pt;ct++)Xt(We[ct],te,ie,le)}function In(P,te,ie,le){const re=P.opaque,We=P.transmissive,ct=P.transparent;x.setupLightsView(ie),J===!0&&ze.setGlobalState(w.clippingPlanes,ie),We.length>0&&oe(re,We,te,ie),le&&Me.viewport(T.copy(le)),re.length>0&&Dt(re,te,ie),We.length>0&&Dt(We,te,ie),ct.length>0&&Dt(ct,te,ie),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function oe(P,te,ie,le){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const We=Fe.isWebGL2;ge===null&&(ge=new Vs(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Va:cs,minFilter:zs,samples:We?4:0})),w.getDrawingBufferSize(Ne),We?ge.setSize(Ne.x,Ne.y):ge.setSize(Cd(Ne.x),Cd(Ne.y));const ct=w.getRenderTarget();w.setRenderTarget(ge),w.getClearColor(ve),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear();const pt=w.toneMapping;w.toneMapping=ls,Dt(P,ie,le),Ke.updateMultisampleRenderTarget(ge),Ke.updateRenderTargetMipmap(ge);let Ze=!1;for(let Tt=0,Mt=te.length;Tt<Mt;Tt++){const xt=te[Tt],$t=xt.object,_n=xt.geometry,qt=xt.material,Rn=xt.group;if(qt.side===Si&&$t.layers.test(le.layers)){const Ut=qt.side;qt.side=ii,qt.needsUpdate=!0,Gt($t,ie,le,_n,qt,Rn),qt.side=Ut,qt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ke.updateMultisampleRenderTarget(ge),Ke.updateRenderTargetMipmap(ge)),w.setRenderTarget(ct),w.setClearColor(ve,j),w.toneMapping=pt}function Dt(P,te,ie){const le=te.isScene===!0?te.overrideMaterial:null;for(let re=0,We=P.length;re<We;re++){const ct=P[re],pt=ct.object,Ze=ct.geometry,Tt=le===null?ct.material:le,Mt=ct.group;pt.layers.test(ie.layers)&&Gt(pt,te,ie,Ze,Tt,Mt)}}function Gt(P,te,ie,le,re,We){P.onBeforeRender(w,te,ie,le,re,We),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(w,te,ie,le,P,We),re.transparent===!0&&re.side===Si&&re.forceSinglePass===!1?(re.side=ii,re.needsUpdate=!0,w.renderBufferDirect(ie,te,le,re,P,We),re.side=us,re.needsUpdate=!0,w.renderBufferDirect(ie,te,le,re,P,We),re.side=Si):w.renderBufferDirect(ie,te,le,re,P,We),P.onAfterRender(w,te,ie,le,re,We)}function Bt(P,te,ie){te.isScene!==!0&&(te=ot);const le=Xe.get(P),re=x.state.lights,We=x.state.shadowsArray,ct=re.state.version,pt=be.getParameters(P,re.state,We,te,ie),Ze=be.getProgramCacheKey(pt);let Tt=le.programs;le.environment=P.isMeshStandardMaterial?te.environment:null,le.fog=te.fog,le.envMap=(P.isMeshStandardMaterial?D:Et).get(P.envMap||le.environment),le.envMapRotation=le.environment!==null&&P.envMap===null?te.environmentRotation:P.envMapRotation,Tt===void 0&&(P.addEventListener("dispose",ee),Tt=new Map,le.programs=Tt);let Mt=Tt.get(Ze);if(Mt!==void 0){if(le.currentProgram===Mt&&le.lightsStateVersion===ct)return qe(P,pt),Mt}else pt.uniforms=be.getUniforms(P),P.onBuild(ie,pt,w),P.onBeforeCompile(pt,w),Mt=be.acquireProgram(pt,Ze),Tt.set(Ze,Mt),le.uniforms=pt.uniforms;const xt=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(xt.clippingPlanes=ze.uniform),qe(P,pt),le.needsLights=Lr(P),le.lightsStateVersion=ct,le.needsLights&&(xt.ambientLightColor.value=re.state.ambient,xt.lightProbe.value=re.state.probe,xt.directionalLights.value=re.state.directional,xt.directionalLightShadows.value=re.state.directionalShadow,xt.spotLights.value=re.state.spot,xt.spotLightShadows.value=re.state.spotShadow,xt.rectAreaLights.value=re.state.rectArea,xt.ltc_1.value=re.state.rectAreaLTC1,xt.ltc_2.value=re.state.rectAreaLTC2,xt.pointLights.value=re.state.point,xt.pointLightShadows.value=re.state.pointShadow,xt.hemisphereLights.value=re.state.hemi,xt.directionalShadowMap.value=re.state.directionalShadowMap,xt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,xt.spotShadowMap.value=re.state.spotShadowMap,xt.spotLightMatrix.value=re.state.spotLightMatrix,xt.spotLightMap.value=re.state.spotLightMap,xt.pointShadowMap.value=re.state.pointShadowMap,xt.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=Mt,le.uniformsList=null,Mt}function $e(P){if(P.uniformsList===null){const te=P.currentProgram.getUniforms();P.uniformsList=Nc.seqWithValue(te.seq,P.uniforms)}return P.uniformsList}function qe(P,te){const ie=Xe.get(P);ie.outputColorSpace=te.outputColorSpace,ie.batching=te.batching,ie.instancing=te.instancing,ie.instancingColor=te.instancingColor,ie.instancingMorph=te.instancingMorph,ie.skinning=te.skinning,ie.morphTargets=te.morphTargets,ie.morphNormals=te.morphNormals,ie.morphColors=te.morphColors,ie.morphTargetsCount=te.morphTargetsCount,ie.numClippingPlanes=te.numClippingPlanes,ie.numIntersection=te.numClipIntersection,ie.vertexAlphas=te.vertexAlphas,ie.vertexTangents=te.vertexTangents,ie.toneMapping=te.toneMapping}function er(P,te,ie,le,re){te.isScene!==!0&&(te=ot),Ke.resetTextureUnits();const We=te.fog,ct=le.isMeshStandardMaterial?te.environment:null,pt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fs,Ze=(le.isMeshStandardMaterial?D:Et).get(le.envMap||ct),Tt=le.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Mt=!!ie.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),xt=!!ie.morphAttributes.position,$t=!!ie.morphAttributes.normal,_n=!!ie.morphAttributes.color;let qt=ls;le.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(qt=w.toneMapping);const Rn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ut=Rn!==void 0?Rn.length:0,wt=Xe.get(le),Tn=x.state.lights;if(J===!0&&(he===!0||P!==xe)){const Un=P===xe&&le.id===$;ze.setState(le,P,Un)}let Yt=!1;le.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Tn.state.version||wt.outputColorSpace!==pt||re.isBatchedMesh&&wt.batching===!1||!re.isBatchedMesh&&wt.batching===!0||re.isInstancedMesh&&wt.instancing===!1||!re.isInstancedMesh&&wt.instancing===!0||re.isSkinnedMesh&&wt.skinning===!1||!re.isSkinnedMesh&&wt.skinning===!0||re.isInstancedMesh&&wt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&wt.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&wt.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&wt.instancingMorph===!1&&re.morphTexture!==null||wt.envMap!==Ze||le.fog===!0&&wt.fog!==We||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ze.numPlanes||wt.numIntersection!==ze.numIntersection)||wt.vertexAlphas!==Tt||wt.vertexTangents!==Mt||wt.morphTargets!==xt||wt.morphNormals!==$t||wt.morphColors!==_n||wt.toneMapping!==qt||Fe.isWebGL2===!0&&wt.morphTargetsCount!==Ut)&&(Yt=!0):(Yt=!0,wt.__version=le.version);let oi=wt.currentProgram;Yt===!0&&(oi=Bt(le,te,re));let en=!1,At=!1,Ht=!1;const Zt=oi.getUniforms(),pn=wt.uniforms;if(Me.useProgram(oi.program)&&(en=!0,At=!0,Ht=!0),le.id!==$&&($=le.id,At=!0),en||xe!==P){Zt.setValue(H,"projectionMatrix",P.projectionMatrix),Zt.setValue(H,"viewMatrix",P.matrixWorldInverse);const Un=Zt.map.cameraPosition;Un!==void 0&&Un.setValue(H,Le.setFromMatrixPosition(P.matrixWorld)),Fe.logarithmicDepthBuffer&&Zt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Zt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),xe!==P&&(xe=P,At=!0,Ht=!0)}if(re.isSkinnedMesh){Zt.setOptional(H,re,"bindMatrix"),Zt.setOptional(H,re,"bindMatrixInverse");const Un=re.skeleton;Un&&(Fe.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),Zt.setValue(H,"boneTexture",Un.boneTexture,Ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Zt.setOptional(H,re,"batchingTexture"),Zt.setValue(H,"batchingTexture",re._matricesTexture,Ke));const fr=ie.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&Fe.isWebGL2===!0)&&Ce.update(re,ie,oi),(At||wt.receiveShadow!==re.receiveShadow)&&(wt.receiveShadow=re.receiveShadow,Zt.setValue(H,"receiveShadow",re.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(pn.envMap.value=Ze,pn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),At&&(Zt.setValue(H,"toneMappingExposure",w.toneMappingExposure),wt.needsLights&&si(pn,Ht),We&&le.fog===!0&&Te.refreshFogUniforms(pn,We),Te.refreshMaterialUniforms(pn,le,ae,W,ge),Nc.upload(H,$e(wt),pn,Ke)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Nc.upload(H,$e(wt),pn,Ke),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Zt.setValue(H,"center",re.center),Zt.setValue(H,"modelViewMatrix",re.modelViewMatrix),Zt.setValue(H,"normalMatrix",re.normalMatrix),Zt.setValue(H,"modelMatrix",re.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Un=le.uniformsGroups;for(let Ii=0,Xs=Un.length;Ii<Xs;Ii++)if(Fe.isWebGL2){const Dr=Un[Ii];tt.update(Dr,oi),tt.bind(Dr,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function si(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function Lr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,te,ie){Xe.get(P.texture).__webglTexture=te,Xe.get(P.depthTexture).__webglTexture=ie;const le=Xe.get(P);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ie===void 0,le.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,te){const ie=Xe.get(P);ie.__webglFramebuffer=te,ie.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,ie=0){O=P,B=te,z=ie;let le=!0,re=null,We=!1,ct=!1;if(P){const Ze=Xe.get(P);Ze.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),le=!1):Ze.__webglFramebuffer===void 0?Ke.setupRenderTarget(P):Ze.__hasExternalTextures&&Ke.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);const Tt=P.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ct=!0);const Mt=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Mt[te])?re=Mt[te][ie]:re=Mt[te],We=!0):Fe.isWebGL2&&P.samples>0&&Ke.useMultisampledRTT(P)===!1?re=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(Mt)?re=Mt[ie]:re=Mt,T.copy(P.viewport),I.copy(P.scissor),Se=P.scissorTest}else T.copy(X).multiplyScalar(ae).floor(),I.copy(U).multiplyScalar(ae).floor(),Se=Q;if(Me.bindFramebuffer(H.FRAMEBUFFER,re)&&Fe.drawBuffers&&le&&Me.drawBuffers(P,re),Me.viewport(T),Me.scissor(I),Me.setScissorTest(Se),We){const Ze=Xe.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ze.__webglTexture,ie)}else if(ct){const Ze=Xe.get(P.texture),Tt=te||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.__webglTexture,ie||0,Tt)}$=-1},this.readRenderTargetPixels=function(P,te,ie,le,re,We,ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){Me.bindFramebuffer(H.FRAMEBUFFER,pt);try{const Ze=P.texture,Tt=Ze.format,Mt=Ze.type;if(Tt!==Ji&&lt.convert(Tt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=Mt===Va&&(ye.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Mt!==cs&&lt.convert(Mt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Mt===Cr&&(Fe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-le&&ie>=0&&ie<=P.height-re&&H.readPixels(te,ie,le,re,lt.convert(Tt),lt.convert(Mt),We)}finally{const Ze=O!==null?Xe.get(O).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(P,te,ie=0){const le=Math.pow(2,-ie),re=Math.floor(te.image.width*le),We=Math.floor(te.image.height*le);Ke.setTexture2D(te,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,P.x,P.y,re,We),Me.unbindTexture()},this.copyTextureToTexture=function(P,te,ie,le=0){const re=te.image.width,We=te.image.height,ct=lt.convert(ie.format),pt=lt.convert(ie.type);Ke.setTexture2D(ie,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ie.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ie.unpackAlignment),te.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,le,P.x,P.y,re,We,ct,pt,te.image.data):te.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,le,P.x,P.y,te.mipmaps[0].width,te.mipmaps[0].height,ct,te.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,le,P.x,P.y,ct,pt,te.image),le===0&&ie.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(P,te,ie,le,re=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const We=Math.round(P.max.x-P.min.x),ct=Math.round(P.max.y-P.min.y),pt=P.max.z-P.min.z+1,Ze=lt.convert(le.format),Tt=lt.convert(le.type);let Mt;if(le.isData3DTexture)Ke.setTexture3D(le,0),Mt=H.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)Ke.setTexture2DArray(le,0),Mt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,le.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,le.unpackAlignment);const xt=H.getParameter(H.UNPACK_ROW_LENGTH),$t=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_n=H.getParameter(H.UNPACK_SKIP_PIXELS),qt=H.getParameter(H.UNPACK_SKIP_ROWS),Rn=H.getParameter(H.UNPACK_SKIP_IMAGES),Ut=ie.isCompressedTexture?ie.mipmaps[re]:ie.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,P.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,P.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,P.min.z),ie.isDataTexture||ie.isData3DTexture?H.texSubImage3D(Mt,re,te.x,te.y,te.z,We,ct,pt,Ze,Tt,Ut.data):le.isCompressedArrayTexture?H.compressedTexSubImage3D(Mt,re,te.x,te.y,te.z,We,ct,pt,Ze,Ut.data):H.texSubImage3D(Mt,re,te.x,te.y,te.z,We,ct,pt,Ze,Tt,Ut),H.pixelStorei(H.UNPACK_ROW_LENGTH,xt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_n),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Rn),re===0&&le.generateMipmaps&&H.generateMipmap(Mt),Me.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ke.setTextureCube(P,0):P.isData3DTexture?Ke.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ke.setTexture2DArray(P,0):Ke.setTexture2D(P,0),Me.unbindTexture()},this.resetState=function(){B=0,z=0,O=null,Me.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fd?"display-p3":"srgb",t.unpackColorSpace=nn.workingColorSpace===Kc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BE extends I0{}BE.prototype.isWebGL1Renderer=!0;class Bd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=t,this.far=r}clone(){return new Bd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HE extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class GE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=br()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return m0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=br()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=br()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new V;class Gc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=lr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=tn(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=lr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=lr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=lr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=lr(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array),o=tn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),r=tn(r,this.array),o=tn(o,this.array),l=tn(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bd extends cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Do;const Ua=new V,No=new V,Io=new V,Uo=new He,Fa=new He,U0=new on,yc=new V,Oa=new V,Sc=new V,Ug=new He,ad=new He,Fg=new He;class Og extends En{constructor(e=new bd){if(super(),this.isSprite=!0,this.type="Sprite",Do===void 0){Do=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new GE(t,5);Do.setIndex([0,1,2,0,2,3]),Do.setAttribute("position",new Gc(r,3,0,!1)),Do.setAttribute("uv",new Gc(r,2,3,!1))}this.geometry=Do,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),No.setFromMatrixScale(this.matrixWorld),U0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&No.multiplyScalar(-Io.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const f=this.center;Mc(yc.set(-.5,-.5,0),Io,f,No,o,l),Mc(Oa.set(.5,-.5,0),Io,f,No,o,l),Mc(Sc.set(.5,.5,0),Io,f,No,o,l),Ug.set(0,0),ad.set(1,0),Fg.set(1,1);let u=e.ray.intersectTriangle(yc,Oa,Sc,!1,Ua);if(u===null&&(Mc(Oa.set(-.5,.5,0),Io,f,No,o,l),ad.set(0,1),u=e.ray.intersectTriangle(yc,Sc,Oa,!1,Ua),u===null))return;const d=e.ray.origin.distanceTo(Ua);d<e.near||d>e.far||t.push({distance:d,point:Ua.clone(),uv:Qi.getInterpolation(Ua,yc,Oa,Sc,Ug,ad,Fg,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mc(s,e,t,r,o,l){Uo.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Fa.x=l*Uo.x-o*Uo.y,Fa.y=o*Uo.x+l*Uo.y):Fa.copy(Uo),s.copy(e),s.x+=Fa.x,s.y+=Fa.y,s.applyMatrix4(U0)}class Go extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zg=new V,kg=new V,Bg=new on,ld=new Od,Ec=new Ya;class Fo extends En{constructor(e=new dn,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)zg.fromBufferAttribute(t,o-1),kg.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=zg.distanceTo(kg);e.setAttribute("lineDistance",new Qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(o),Ec.radius+=l,e.ray.intersectsSphere(Ec)===!1)return;Bg.copy(o).invert(),ld.copy(e.ray).applyMatrix4(Bg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new V,m=new V,g=new V,_=new V,S=this.isLineSegments?2:1,M=r.index,x=r.attributes.position;if(M!==null){const y=Math.max(0,f.start),N=Math.min(M.count,f.start+f.count);for(let w=y,R=N-1;w<R;w+=S){const B=M.getX(w),z=M.getX(w+1);if(p.fromBufferAttribute(x,B),m.fromBufferAttribute(x,z),ld.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(_);$<e.near||$>e.far||t.push({distance:$,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,f.start),N=Math.min(x.count,f.start+f.count);for(let w=y,R=N-1;w<R;w+=S){if(p.fromBufferAttribute(x,w),m.fromBufferAttribute(x,w+1),ld.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(_);z<e.near||z>e.far||t.push({distance:z,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}class VE extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hg=new on,Pd=new Od,wc=new Ya,Tc=new V;class WE extends En{constructor(e=new dn,t=new VE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(o),wc.radius+=l,e.ray.intersectsSphere(wc)===!1)return;Hg.copy(o).invert(),Pd.copy(e.ray).applyMatrix4(Hg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let M=_,A=S;M<A;M++){const x=p.getX(M);Tc.fromBufferAttribute(g,x),Gg(Tc,x,d,o,e,t,this)}}else{const _=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let M=_,A=S;M<A;M++)Tc.fromBufferAttribute(g,M),Gg(Tc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Gg(s,e,t,r,o,l,f){const u=Pd.distanceSqToPoint(s);if(u<t){const d=new V;Pd.closestPointToPoint(s,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:f})}}class Vg extends ri{constructor(e,t,r,o,l,f,u,d,p){super(e,t,r,o,l,f,u,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let u=0,d=l-1,p;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),p=r[o]-f,p<0)u=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,r[o]===f)return o/(l-1);const m=r[o],_=r[o+1]-m,S=(f-m)/_;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const f=this.getPoint(o),u=this.getPoint(l),d=t||(f.isVector2?new He:new V);return d.copy(u).sub(f).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,o=[],l=[],f=[],u=new V,d=new on;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new V)}l[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);m<=p&&(p=m,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),u.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],u),f[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),u.crossVectors(o[S-1],o[S]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(Zn(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(d.makeRotationAxis(u,M))}f[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Zn(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(u.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(o[M],S*M)),f[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hd extends ur{constructor(e=0,t=0,r=1,o=1,l=0,f=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=f,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new He){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const f=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(f?l=0:l=o),this.aClockwise===!0&&!f&&(l===o?l=-o:l=l-o);const u=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(u),p=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=d-this.aX,S=p-this.aY;d=_*m-S*g+this.aX,p=_*g+S*m+this.aY}return r.set(d,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jE extends Hd{constructor(e,t,r,o,l,f){super(e,t,r,r,o,l,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Gd(){let s=0,e=0,t=0,r=0;function o(l,f,u,d){s=l,e=u,t=-3*l+3*f-2*u-d,r=2*l-2*f+u+d}return{initCatmullRom:function(l,f,u,d,p){o(f,u,p*(u-l),p*(d-f))},initNonuniformCatmullRom:function(l,f,u,d,p,m,g){let _=(f-l)/p-(u-l)/(p+m)+(u-f)/m,S=(u-f)/m-(d-f)/(m+g)+(d-u)/g;_*=m,S*=m,o(f,u,_,S)},calc:function(l){const f=l*l,u=f*l;return s+e*l+t*f+r*u}}}const Ac=new V,cd=new Gd,ud=new Gd,fd=new Gd;class Ic extends ur{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new V){const r=t,o=this.points,l=o.length,f=(l-(this.closed?0:1))*e;let u=Math.floor(f),d=f-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:d===0&&u===l-1&&(u=l-2,d=1);let p,m;this.closed||u>0?p=o[(u-1)%l]:(Ac.subVectors(o[0],o[1]).add(o[0]),p=Ac);const g=o[u%l],_=o[(u+1)%l];if(this.closed||u+2<l?m=o[(u+2)%l]:(Ac.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(_),S),x=Math.pow(_.distanceToSquared(m),S);A<1e-4&&(A=1),M<1e-4&&(M=A),x<1e-4&&(x=A),cd.initNonuniformCatmullRom(p.x,g.x,_.x,m.x,M,A,x),ud.initNonuniformCatmullRom(p.y,g.y,_.y,m.y,M,A,x),fd.initNonuniformCatmullRom(p.z,g.z,_.z,m.z,M,A,x)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(p.x,g.x,_.x,m.x,this.tension),ud.initCatmullRom(p.y,g.y,_.y,m.y,this.tension),fd.initCatmullRom(p.z,g.z,_.z,m.z,this.tension));return r.set(cd.calc(d),ud.calc(d),fd.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wg(s,e,t,r,o){const l=(r-e)*.5,f=(o-t)*.5,u=s*s,d=s*u;return(2*t-2*r+l+f)*d+(-3*t+3*r-2*l-f)*u+l*s+t}function XE(s,e){const t=1-s;return t*t*e}function $E(s,e){return 2*(1-s)*s*e}function qE(s,e){return s*s*e}function Ba(s,e,t,r){return XE(s,e)+$E(s,t)+qE(s,r)}function YE(s,e){const t=1-s;return t*t*t*e}function KE(s,e){const t=1-s;return 3*t*t*s*e}function ZE(s,e){return 3*(1-s)*s*s*e}function JE(s,e){return s*s*s*e}function Ha(s,e,t,r,o){return YE(s,e)+KE(s,t)+ZE(s,r)+JE(s,o)}class F0 extends ur{constructor(e=new He,t=new He,r=new He,o=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new He){const r=t,o=this.v0,l=this.v1,f=this.v2,u=this.v3;return r.set(Ha(e,o.x,l.x,f.x,u.x),Ha(e,o.y,l.y,f.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QE extends ur{constructor(e=new V,t=new V,r=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,f=this.v2,u=this.v3;return r.set(Ha(e,o.x,l.x,f.x,u.x),Ha(e,o.y,l.y,f.y,u.y),Ha(e,o.z,l.z,f.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O0 extends ur{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends ur{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z0 extends ur{constructor(e=new He,t=new He,r=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new He){const r=t,o=this.v0,l=this.v1,f=this.v2;return r.set(Ba(e,o.x,l.x,f.x),Ba(e,o.y,l.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends ur{constructor(e=new V,t=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,f=this.v2;return r.set(Ba(e,o.x,l.x,f.x),Ba(e,o.y,l.y,f.y),Ba(e,o.z,l.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){const r=t,o=this.points,l=(o.length-1)*e,f=Math.floor(l),u=l-f,d=o[f===0?f:f-1],p=o[f],m=o[f>o.length-2?o.length-1:f+1],g=o[f>o.length-3?o.length-1:f+2];return r.set(Wg(u,d.x,p.x,m.x,g.x),Wg(u,d.y,p.y,m.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new He().fromArray(o))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:jE,CatmullRomCurve3:Ic,CubicBezierCurve:F0,CubicBezierCurve3:QE,EllipseCurve:Hd,LineCurve:O0,LineCurve3:ew,QuadraticBezierCurve:z0,QuadraticBezierCurve3:k0,SplineCurve:B0});class tw extends ur{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const f=o[l]-r,u=this.curves[l],d=u.getLength(),p=d===0?0:1-f/d;return u.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const f=l[o],u=f.isEllipseCurve?e*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?e*f.points.length:e,d=f.getPoints(u);for(let p=0;p<d.length;p++){const m=d[p];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Vc[o.type]().fromJSON(o))}return this}}class jg extends tw{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new O0(this.currentPoint.clone(),new He(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new z0(this.currentPoint.clone(),new He(e,t),new He(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,f){const u=new F0(this.currentPoint.clone(),new He(e,t),new He(r,o),new He(l,f));return this.curves.push(u),this.currentPoint.set(l,f),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new B0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,f){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,r,o,l,f),this}absarc(e,t,r,o,l,f){return this.absellipse(e,t,r,r,o,l,f),this}ellipse(e,t,r,o,l,f,u,d){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,r,o,l,f,u,d),this}absellipse(e,t,r,o,l,f,u,d){const p=new Hd(e,t,r,o,l,f,u,d);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wc extends dn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],f=[],u=[],d=[],p=new V,m=new He;f.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let g=0,_=3;g<=t;g++,_+=3){const S=r+g/t*o;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),u.push(0,0,1),m.x=(f[_]/e+1)/2,m.y=(f[_+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ss extends dn{constructor(e=1,t=1,r=1,o=32,l=1,f=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:f,thetaStart:u,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const m=[],g=[],_=[],S=[];let M=0;const A=[],x=r/2;let y=0;N(),f===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(S,2));function N(){const R=new V,B=new V;let z=0;const O=(t-e)/r;for(let $=0;$<=l;$++){const xe=[],T=$/l,I=T*(t-e)+e;for(let Se=0;Se<=o;Se++){const ve=Se/o,j=ve*d+u,fe=Math.sin(j),W=Math.cos(j);B.x=I*fe,B.y=-T*r+x,B.z=I*W,g.push(B.x,B.y,B.z),R.set(fe,O,W).normalize(),_.push(R.x,R.y,R.z),S.push(ve,1-T),xe.push(M++)}A.push(xe)}for(let $=0;$<o;$++)for(let xe=0;xe<l;xe++){const T=A[xe][$],I=A[xe+1][$],Se=A[xe+1][$+1],ve=A[xe][$+1];m.push(T,I,ve),m.push(I,Se,ve),z+=6}p.addGroup(y,z,0),y+=z}function w(R){const B=M,z=new He,O=new V;let $=0;const xe=R===!0?e:t,T=R===!0?1:-1;for(let Se=1;Se<=o;Se++)g.push(0,x*T,0),_.push(0,T,0),S.push(.5,.5),M++;const I=M;for(let Se=0;Se<=o;Se++){const j=Se/o*d+u,fe=Math.cos(j),W=Math.sin(j);O.x=xe*W,O.y=x*T,O.z=xe*fe,g.push(O.x,O.y,O.z),_.push(0,T,0),z.x=fe*.5+.5,z.y=W*.5*T+.5,S.push(z.x,z.y),M++}for(let Se=0;Se<o;Se++){const ve=B+Se,j=I+Se;R===!0?m.push(j,j+1,ve):m.push(j+1,j,ve),$+=3}p.addGroup(y,$,R===!0?1:2),y+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vd extends ss{constructor(e=1,t=1,r=32,o=1,l=!1,f=0,u=Math.PI*2){super(0,e,t,r,o,l,f,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:f,thetaLength:u}}static fromJSON(e){return new Vd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class H0 extends jg{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new jg().fromJSON(o))}return this}}const nw={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=G0(s,0,o,t,!0);const f=[];if(!l||l.next===l.prev)return f;let u,d,p,m,g,_,S;if(r&&(l=aw(s,e,l,t)),s.length>80*t){u=p=s[0],d=m=s[1];for(let M=t;M<o;M+=t)g=s[M],_=s[M+1],g<u&&(u=g),_<d&&(d=_),g>p&&(p=g),_>m&&(m=_);S=Math.max(p-u,m-d),S=S!==0?32767/S:0}return Wa(l,f,t,u,d,S,0),f}};function G0(s,e,t,r,o){let l,f;if(o===_w(s,e,t,r)>0)for(l=e;l<t;l+=r)f=Xg(l,s[l],s[l+1],f);else for(l=t-r;l>=e;l-=r)f=Xg(l,s[l],s[l+1],f);return f&&Jc(f,f.next)&&(Xa(f),f=f.next),f}function Ws(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Jc(t,t.next)||vn(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Wa(s,e,t,r,o,l,f){if(!s)return;!f&&l&&dw(s,r,o,l);let u=s,d,p;for(;s.prev!==s.next;){if(d=s.prev,p=s.next,l?rw(s,r,o,l):iw(s)){e.push(d.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),Xa(s),s=p.next,u=p.next;continue}if(s=p,s===u){f?f===1?(s=sw(Ws(s),e,t),Wa(s,e,t,r,o,l,2)):f===2&&ow(s,e,t,r,o,l):Wa(Ws(s),e,t,r,o,l,1);break}}}function iw(s){const e=s.prev,t=s,r=s.next;if(vn(e,t,r)>=0)return!1;const o=e.x,l=t.x,f=r.x,u=e.y,d=t.y,p=r.y,m=o<l?o<f?o:f:l<f?l:f,g=u<d?u<p?u:p:d<p?d:p,_=o>l?o>f?o:f:l>f?l:f,S=u>d?u>p?u:p:d>p?d:p;let M=r.next;for(;M!==e;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=S&&jo(o,u,l,d,f,p,M.x,M.y)&&vn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function rw(s,e,t,r){const o=s.prev,l=s,f=s.next;if(vn(o,l,f)>=0)return!1;const u=o.x,d=l.x,p=f.x,m=o.y,g=l.y,_=f.y,S=u<d?u<p?u:p:d<p?d:p,M=m<g?m<_?m:_:g<_?g:_,A=u>d?u>p?u:p:d>p?d:p,x=m>g?m>_?m:_:g>_?g:_,y=Ld(S,M,e,t,r),N=Ld(A,x,e,t,r);let w=s.prevZ,R=s.nextZ;for(;w&&w.z>=y&&R&&R.z<=N;){if(w.x>=S&&w.x<=A&&w.y>=M&&w.y<=x&&w!==o&&w!==f&&jo(u,m,d,g,p,_,w.x,w.y)&&vn(w.prev,w,w.next)>=0||(w=w.prevZ,R.x>=S&&R.x<=A&&R.y>=M&&R.y<=x&&R!==o&&R!==f&&jo(u,m,d,g,p,_,R.x,R.y)&&vn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;w&&w.z>=y;){if(w.x>=S&&w.x<=A&&w.y>=M&&w.y<=x&&w!==o&&w!==f&&jo(u,m,d,g,p,_,w.x,w.y)&&vn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;R&&R.z<=N;){if(R.x>=S&&R.x<=A&&R.y>=M&&R.y<=x&&R!==o&&R!==f&&jo(u,m,d,g,p,_,R.x,R.y)&&vn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function sw(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!Jc(o,l)&&V0(o,r,r.next,l)&&ja(o,l)&&ja(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Xa(r),Xa(r.next),r=s=l),r=r.next}while(r!==s);return Ws(r)}function ow(s,e,t,r,o,l){let f=s;do{let u=f.next.next;for(;u!==f.prev;){if(f.i!==u.i&&mw(f,u)){let d=W0(f,u);f=Ws(f,f.next),d=Ws(d,d.next),Wa(f,e,t,r,o,l,0),Wa(d,e,t,r,o,l,0);return}u=u.next}f=f.next}while(f!==s)}function aw(s,e,t,r){const o=[];let l,f,u,d,p;for(l=0,f=e.length;l<f;l++)u=e[l]*r,d=l<f-1?e[l+1]*r:s.length,p=G0(s,u,d,r,!1),p===p.next&&(p.steiner=!0),o.push(pw(p));for(o.sort(lw),l=0;l<o.length;l++)t=cw(o[l],t);return t}function lw(s,e){return s.x-e.x}function cw(s,e){const t=uw(s,e);if(!t)return e;const r=W0(t,s);return Ws(r,r.next),Ws(t,t.next)}function uw(s,e){let t=e,r=-1/0,o;const l=s.x,f=s.y;do{if(f<=t.y&&f>=t.next.y&&t.next.y!==t.y){const _=t.x+(f-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=l&&_>r&&(r=_,o=t.x<t.next.x?t:t.next,_===l))return o}t=t.next}while(t!==e);if(!o)return null;const u=o,d=o.x,p=o.y;let m=1/0,g;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&jo(f<p?l:r,f,d,p,f<p?r:l,f,t.x,t.y)&&(g=Math.abs(f-t.y)/(l-t.x),ja(t,s)&&(g<m||g===m&&(t.x>o.x||t.x===o.x&&fw(o,t)))&&(o=t,m=g)),t=t.next;while(t!==u);return o}function fw(s,e){return vn(s.prev,s,e.prev)<0&&vn(e.next,s,s.next)<0}function dw(s,e,t,r){let o=s;do o.z===0&&(o.z=Ld(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,hw(o)}function hw(s){let e,t,r,o,l,f,u,d,p=1;do{for(t=s,s=null,l=null,f=0;t;){for(f++,r=t,u=0,e=0;e<p&&(u++,r=r.nextZ,!!r);e++);for(d=p;u>0||d>0&&r;)u!==0&&(d===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,u--):(o=r,r=r.nextZ,d--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(f>1);return s}function Ld(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function pw(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function jo(s,e,t,r,o,l,f,u){return(o-f)*(e-u)>=(s-f)*(l-u)&&(s-f)*(r-u)>=(t-f)*(e-u)&&(t-f)*(l-u)>=(o-f)*(r-u)}function mw(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!gw(s,e)&&(ja(s,e)&&ja(e,s)&&vw(s,e)&&(vn(s.prev,s,e.prev)||vn(s,e.prev,e))||Jc(s,e)&&vn(s.prev,s,s.next)>0&&vn(e.prev,e,e.next)>0)}function vn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jc(s,e){return s.x===e.x&&s.y===e.y}function V0(s,e,t,r){const o=Rc(vn(s,e,t)),l=Rc(vn(s,e,r)),f=Rc(vn(t,r,s)),u=Rc(vn(t,r,e));return!!(o!==l&&f!==u||o===0&&Cc(s,t,e)||l===0&&Cc(s,r,e)||f===0&&Cc(t,s,r)||u===0&&Cc(t,e,r))}function Cc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Rc(s){return s>0?1:s<0?-1:0}function gw(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&V0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ja(s,e){return vn(s.prev,s,s.next)<0?vn(s,e,s.next)>=0&&vn(s,s.prev,e)>=0:vn(s,e,s.prev)<0||vn(s,s.next,e)<0}function vw(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function W0(s,e){const t=new Dd(s.i,s.x,s.y),r=new Dd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Xg(s,e,t,r){const o=new Dd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Xa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dd(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _w(s,e,t,r){let o=0;for(let l=e,f=t-r;l<t;l+=r)o+=(s[f]-s[l])*(s[l+1]+s[f+1]),f=l;return o}class Ga{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Ga.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];$g(e),qg(r,e);let f=e.length;t.forEach($g);for(let d=0;d<t.length;d++)o.push(f),f+=t[d].length,qg(r,t[d]);const u=nw.triangulate(r,o);for(let d=0;d<u.length;d+=3)l.push(u.slice(d,d+3));return l}}function $g(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wd extends dn{constructor(e=new H0([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let u=0,d=e.length;u<d;u++){const p=e[u];f(p)}this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2)),this.computeVertexNormals();function f(u){const d=[],p=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:xw;let w,R=!1,B,z,O,$;y&&(w=y.getSpacedPoints(m),R=!0,_=!1,B=y.computeFrenetFrames(m,!1),z=new V,O=new V,$=new V),_||(x=0,S=0,M=0,A=0);const xe=u.extractPoints(p);let T=xe.shape;const I=xe.holes;if(!Ga.isClockWise(T)){T=T.reverse();for(let H=0,Ue=I.length;H<Ue;H++){const ye=I[H];Ga.isClockWise(ye)&&(I[H]=ye.reverse())}}const ve=Ga.triangulateShape(T,I),j=T;for(let H=0,Ue=I.length;H<Ue;H++){const ye=I[H];T=T.concat(ye)}function fe(H,Ue,ye){return Ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(Ue,ye)}const W=T.length,ae=ve.length;function F(H,Ue,ye){let Fe,Me,Ye;const Xe=H.x-Ue.x,Ke=H.y-Ue.y,Et=ye.x-H.x,D=ye.y-H.y,C=Xe*Xe+Ke*Ke,de=Xe*D-Ke*Et;if(Math.abs(de)>Number.EPSILON){const _e=Math.sqrt(C),be=Math.sqrt(Et*Et+D*D),Te=Ue.x-Ke/_e,gt=Ue.y+Xe/_e,at=ye.x-D/be,ze=ye.y+Et/be,Oe=((at-Te)*D-(ze-gt)*Et)/(Xe*D-Ke*Et);Fe=Te+Xe*Oe-H.x,Me=gt+Ke*Oe-H.y;const dt=Fe*Fe+Me*Me;if(dt<=2)return new He(Fe,Me);Ye=Math.sqrt(dt/2)}else{let _e=!1;Xe>Number.EPSILON?Et>Number.EPSILON&&(_e=!0):Xe<-Number.EPSILON?Et<-Number.EPSILON&&(_e=!0):Math.sign(Ke)===Math.sign(D)&&(_e=!0),_e?(Fe=-Ke,Me=Xe,Ye=Math.sqrt(C)):(Fe=Xe,Me=Ke,Ye=Math.sqrt(C/2))}return new He(Fe/Ye,Me/Ye)}const Y=[];for(let H=0,Ue=j.length,ye=Ue-1,Fe=H+1;H<Ue;H++,ye++,Fe++)ye===Ue&&(ye=0),Fe===Ue&&(Fe=0),Y[H]=F(j[H],j[ye],j[Fe]);const X=[];let U,Q=Y.concat();for(let H=0,Ue=I.length;H<Ue;H++){const ye=I[H];U=[];for(let Fe=0,Me=ye.length,Ye=Me-1,Xe=Fe+1;Fe<Me;Fe++,Ye++,Xe++)Ye===Me&&(Ye=0),Xe===Me&&(Xe=0),U[Fe]=F(ye[Fe],ye[Ye],ye[Xe]);X.push(U),Q=Q.concat(U)}for(let H=0;H<x;H++){const Ue=H/x,ye=S*Math.cos(Ue*Math.PI/2),Fe=M*Math.sin(Ue*Math.PI/2)+A;for(let Me=0,Ye=j.length;Me<Ye;Me++){const Xe=fe(j[Me],Y[Me],Fe);De(Xe.x,Xe.y,-ye)}for(let Me=0,Ye=I.length;Me<Ye;Me++){const Xe=I[Me];U=X[Me];for(let Ke=0,Et=Xe.length;Ke<Et;Ke++){const D=fe(Xe[Ke],U[Ke],Fe);De(D.x,D.y,-ye)}}}const Ae=M+A;for(let H=0;H<W;H++){const Ue=_?fe(T[H],Q[H],Ae):T[H];R?(O.copy(B.normals[0]).multiplyScalar(Ue.x),z.copy(B.binormals[0]).multiplyScalar(Ue.y),$.copy(w[0]).add(O).add(z),De($.x,$.y,$.z)):De(Ue.x,Ue.y,0)}for(let H=1;H<=m;H++)for(let Ue=0;Ue<W;Ue++){const ye=_?fe(T[Ue],Q[Ue],Ae):T[Ue];R?(O.copy(B.normals[H]).multiplyScalar(ye.x),z.copy(B.binormals[H]).multiplyScalar(ye.y),$.copy(w[H]).add(O).add(z),De($.x,$.y,$.z)):De(ye.x,ye.y,g/m*H)}for(let H=x-1;H>=0;H--){const Ue=H/x,ye=S*Math.cos(Ue*Math.PI/2),Fe=M*Math.sin(Ue*Math.PI/2)+A;for(let Me=0,Ye=j.length;Me<Ye;Me++){const Xe=fe(j[Me],Y[Me],Fe);De(Xe.x,Xe.y,g+ye)}for(let Me=0,Ye=I.length;Me<Ye;Me++){const Xe=I[Me];U=X[Me];for(let Ke=0,Et=Xe.length;Ke<Et;Ke++){const D=fe(Xe[Ke],U[Ke],Fe);R?De(D.x,D.y+w[m-1].y,w[m-1].x+ye):De(D.x,D.y,g+ye)}}}J(),he();function J(){const H=o.length/3;if(_){let Ue=0,ye=W*Ue;for(let Fe=0;Fe<ae;Fe++){const Me=ve[Fe];Ne(Me[2]+ye,Me[1]+ye,Me[0]+ye)}Ue=m+x*2,ye=W*Ue;for(let Fe=0;Fe<ae;Fe++){const Me=ve[Fe];Ne(Me[0]+ye,Me[1]+ye,Me[2]+ye)}}else{for(let Ue=0;Ue<ae;Ue++){const ye=ve[Ue];Ne(ye[2],ye[1],ye[0])}for(let Ue=0;Ue<ae;Ue++){const ye=ve[Ue];Ne(ye[0]+W*m,ye[1]+W*m,ye[2]+W*m)}}r.addGroup(H,o.length/3-H,0)}function he(){const H=o.length/3;let Ue=0;ge(j,Ue),Ue+=j.length;for(let ye=0,Fe=I.length;ye<Fe;ye++){const Me=I[ye];ge(Me,Ue),Ue+=Me.length}r.addGroup(H,o.length/3-H,1)}function ge(H,Ue){let ye=H.length;for(;--ye>=0;){const Fe=ye;let Me=ye-1;Me<0&&(Me=H.length-1);for(let Ye=0,Xe=m+x*2;Ye<Xe;Ye++){const Ke=W*Ye,Et=W*(Ye+1),D=Ue+Fe+Ke,C=Ue+Me+Ke,de=Ue+Me+Et,_e=Ue+Fe+Et;Le(D,C,de,_e)}}}function De(H,Ue,ye){d.push(H),d.push(Ue),d.push(ye)}function Ne(H,Ue,ye){ot(H),ot(Ue),ot(ye);const Fe=o.length/3,Me=N.generateTopUV(r,o,Fe-3,Fe-2,Fe-1);et(Me[0]),et(Me[1]),et(Me[2])}function Le(H,Ue,ye,Fe){ot(H),ot(Ue),ot(Fe),ot(Ue),ot(ye),ot(Fe);const Me=o.length/3,Ye=N.generateSideWallUV(r,o,Me-6,Me-3,Me-2,Me-1);et(Ye[0]),et(Ye[1]),et(Ye[3]),et(Ye[1]),et(Ye[2]),et(Ye[3])}function ot(H){o.push(d[H*3+0]),o.push(d[H*3+1]),o.push(d[H*3+2])}function et(H){l.push(H.x),l.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return yw(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,f=e.shapes.length;l<f;l++){const u=t[e.shapes[l]];r.push(u)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Vc[o.type]().fromJSON(o)),new Wd(r,e.options)}}const xw={generateTopUV:function(s,e,t,r,o){const l=e[t*3],f=e[t*3+1],u=e[r*3],d=e[r*3+1],p=e[o*3],m=e[o*3+1];return[new He(l,f),new He(u,d),new He(p,m)]},generateSideWallUV:function(s,e,t,r,o,l){const f=e[t*3],u=e[t*3+1],d=e[t*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[o*3],S=e[o*3+1],M=e[o*3+2],A=e[l*3],x=e[l*3+1],y=e[l*3+2];return Math.abs(u-m)<Math.abs(f-p)?[new He(f,1-d),new He(p,1-g),new He(_,1-M),new He(A,1-y)]:[new He(u,1-d),new He(m,1-g),new He(S,1-M),new He(x,1-y)]}};function yw(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jc extends dn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:f,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(f+u,Math.PI);let p=0;const m=[],g=new V,_=new V,S=[],M=[],A=[],x=[];for(let y=0;y<=r;y++){const N=[],w=y/r;let R=0;y===0&&f===0?R=.5/t:y===r&&d===Math.PI&&(R=-.5/t);for(let B=0;B<=t;B++){const z=B/t;g.x=-e*Math.cos(o+z*l)*Math.sin(f+w*u),g.y=e*Math.cos(f+w*u),g.z=e*Math.sin(o+z*l)*Math.sin(f+w*u),M.push(g.x,g.y,g.z),_.copy(g).normalize(),A.push(_.x,_.y,_.z),x.push(z+R,1-w),N.push(p++)}m.push(N)}for(let y=0;y<r;y++)for(let N=0;N<t;N++){const w=m[y][N+1],R=m[y][N],B=m[y+1][N],z=m[y+1][N+1];(y!==0||f>0)&&S.push(w,R,z),(y!==r-1||d<Math.PI)&&S.push(R,B,z)}this.setIndex(S),this.setAttribute("position",new Qt(M,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jd extends dn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const f=[],u=[],d=[],p=[],m=new V,g=new V,_=new V;for(let S=0;S<=r;S++)for(let M=0;M<=o;M++){const A=M/o*l,x=S/r*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(A),g.y=(e+t*Math.cos(x))*Math.sin(A),g.z=t*Math.sin(x),u.push(g.x,g.y,g.z),m.x=e*Math.cos(A),m.y=e*Math.sin(A),_.subVectors(g,m).normalize(),d.push(_.x,_.y,_.z),p.push(M/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=o;M++){const A=(o+1)*S+M-1,x=(o+1)*(S-1)+M-1,y=(o+1)*(S-1)+M,N=(o+1)*S+M;f.push(A,x,N),f.push(x,y,N)}this.setIndex(f),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xc extends dn{constructor(e=new k0(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const f=e.computeFrenetFrames(t,l);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const u=new V,d=new V,p=new He;let m=new V;const g=[],_=[],S=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(S,2));function A(){for(let w=0;w<t;w++)x(w);x(l===!1?t:0),N(),y()}function x(w){m=e.getPointAt(w/t,m);const R=f.normals[w],B=f.binormals[w];for(let z=0;z<=o;z++){const O=z/o*Math.PI*2,$=Math.sin(O),xe=-Math.cos(O);d.x=xe*R.x+$*B.x,d.y=xe*R.y+$*B.y,d.z=xe*R.z+$*B.z,d.normalize(),_.push(d.x,d.y,d.z),u.x=m.x+r*d.x,u.y=m.y+r*d.y,u.z=m.z+r*d.z,g.push(u.x,u.y,u.z)}}function y(){for(let w=1;w<=t;w++)for(let R=1;R<=o;R++){const B=(o+1)*(w-1)+(R-1),z=(o+1)*w+(R-1),O=(o+1)*w+R,$=(o+1)*(w-1)+R;M.push(B,z,$),M.push(z,O,$)}}function N(){for(let w=0;w<=t;w++)for(let R=0;R<=o;R++)p.x=w/t,p.y=R/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xc(new Vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yg extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oo extends cr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sw extends cr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Za extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mw extends Za{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dd=new on,Kg=new V,Zg=new V;class Xd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Kg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kg),Zg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zg),t.updateMatrixWorld(),dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ew extends Xd{constructor(){super(new pi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Bc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jg extends Za{constructor(e,t,r=0,o=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=r,this.angle=o,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new Ew}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qg=new on,za=new V,hd=new V;class ww extends Xd{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new hn(2,1,1,1),new hn(0,1,1,1),new hn(3,1,1,1),new hn(1,1,1,1),new hn(3,0,1,1),new hn(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),za.setFromMatrixPosition(e.matrixWorld),r.position.copy(za),hd.copy(r.position),hd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(hd),r.updateMatrixWorld(),o.makeTranslation(-za.x,-za.y,-za.z),Qg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qg)}}class Tw extends Za{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new ww}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Aw extends Xd{constructor(){super(new C0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cw extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Aw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rw extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);const bw="https://api.openf1.org/v1",$d={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",greenDim:"#00a854",yellow:"#ffd700",purple:"#9b59b6",white:"#ffffff",fogColor:1184280,groundColor:1579039,trackColor:3816008,lineColor:14747136,sceneBg:1184280,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},j0={red:"#E10600",redDark:"#B30500",carbon:"#f4f5f7",carbonLight:"#eaebef",carbonMid:"#dddee4",panelBg:"rgba(255,255,255,0.97)",overlay:"rgba(245,246,250,0.95)",cardBg:"rgba(235,236,244,0.85)",inputBg:"rgba(255,255,255,0.95)",text:"#1a1a2e",textDim:"#5a5a7a",textMuted:"#8888a0",border:"rgba(80,85,120,0.2)",borderLight:"rgba(80,85,120,0.1)",green:"#00a854",greenDim:"#008844",yellow:"#cc9900",purple:"#8844aa",white:"#ffffff",fogColor:15264496,groundColor:14211808,trackColor:8947864,lineColor:14747136,sceneBg:15264496,mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"};let G=$d;const Pw={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},Lw={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},e0=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(Lw))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},pd=[{label:"🏆 NOR vs PIA — Australia 2025 Q • McLaren 1-2 pole battle",year:2025,meeting:"Australian Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2025"},{label:"🔥 HAM vs LEC — China 2025 Q • Ferrari teammates debut",year:2025,meeting:"Chinese Grand Prix",session:"Qualifying",d1:44,d2:16,cat:"2025"},{label:"⚔️ VER vs NOR — Monza 2024 Q • 0.025s gap",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🎭 LEC vs SAI — Monaco 2024 Q • Ferrari home pole fight",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2024"},{label:"🇬🇧 NOR vs PIA — Silverstone 2024 Q • McLaren supremacy",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81,cat:"2024"},{label:"💥 VER vs NOR — Austria 2024 R • The crash race",year:2024,meeting:"Austrian Grand Prix",session:"Race",d1:1,d2:4,cat:"2024"},{label:"🏁 RUS vs VER — Canada 2024 Q • Identical lap times",year:2024,meeting:"Canadian Grand Prix",session:"Qualifying",d1:63,d2:1,cat:"2024"},{label:"🌙 VER vs NOR — Abu Dhabi 2024 Q • Season finale",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2024"},{label:"🇧🇪 RUS vs HAM — Spa 2024 Q • Mercedes 1-2",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44,cat:"2024"},{label:"🎰 LEC vs PIA — Las Vegas 2024 Q • Night fight",year:2024,meeting:"Las Vegas Grand Prix",session:"Qualifying",d1:16,d2:81,cat:"2024"},{label:"🇺🇸 NOR vs VER — Miami 2024 Q • Sprint weekend",year:2024,meeting:"Miami Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"🏎️ HAM vs VER — Bahrain 2024 R • Season opener",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1,cat:"2024"},{label:"🇯🇵 VER vs PIA — Japan 2024 Q • Suzuka showdown",year:2024,meeting:"Japanese Grand Prix",session:"Qualifying",d1:1,d2:81,cat:"2024"},{label:"🇪🇸 NOR vs VER — Spain 2024 Q • Barcelona battle",year:2024,meeting:"Spanish Grand Prix",session:"Qualifying",d1:4,d2:1,cat:"2024"},{label:"👑 VER vs LEC — Bahrain 2023 Q • Season opener",year:2023,meeting:"Bahrain Grand Prix",session:"Qualifying",d1:1,d2:16,cat:"2023"},{label:"🦁 VER vs HAM — Jeddah 2023 Q • Old rivals",year:2023,meeting:"Saudi Arabian Grand Prix",session:"Qualifying",d1:1,d2:44,cat:"2023"},{label:"🌧️ VER vs ALO — Monaco 2023 Q • Wet-dry thriller",year:2023,meeting:"Monaco Grand Prix",session:"Qualifying",d1:1,d2:14,cat:"2023"},{label:"🇸🇬 SAI vs NOR — Singapore 2023 Q • Street circuit pole",year:2023,meeting:"Singapore Grand Prix",session:"Qualifying",d1:55,d2:4,cat:"2023"},{label:"🏆 VER vs NOR — Zandvoort 2023 Q • Dutch home race",year:2023,meeting:"Dutch Grand Prix",session:"Qualifying",d1:1,d2:4,cat:"2023"},{label:"🇲🇽 LEC vs SAI — Mexico 2023 Q • Ferrari lockout",year:2023,meeting:"Mexico City Grand Prix",session:"Qualifying",d1:16,d2:55,cat:"2023"}],bc=["orbit","follow1","follow2","top","cinematic"],Dw={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function js(s,e={},t=2){const r=new URL(`${bw}${s}`);Object.entries(e).forEach(([o,l])=>{l!=null&&l!==""&&r.searchParams.append(o,l)});for(let o=0;o<=t;o++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(o+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(o===t)throw l;await new Promise(f=>setTimeout(f,800*(o+1)))}}const md=s=>js("/meetings",{year:s}),gd=s=>js("/sessions",{meeting_key:s}),t0=s=>js("/drivers",{session_key:s}),zo=(s,e)=>js("/laps",{session_key:s,driver_number:e}),Pc=(s,e)=>js("/stints",{session_key:s,driver_number:e});function Lc(s,e,t,r){const o={session_key:s,driver_number:e};return t&&(o["date>"]=t),r&&(o["date<"]=r),js("/location",o)}function Dc(s,e,t,r){const o={session_key:s,driver_number:e};return t&&(o["date>"]=t),r&&(o["date<"]=r),js("/car_data",o)}function Hs(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),o=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[o].x-s[r].x)*l,y:s[r].y+(s[o].y-s[r].y)*l,z:s[r].z+(s[o].z-s[r].z)*l}}function Gs(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,o=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>o&&(o=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const u=Math.max(t-e,o-r)||1,d=(e+t)/2,p=(r+o)/2,m=(l+f)/2;return s.map(g=>({x:(g.x-d)/u*40,y:(g.z-m)/u*4,z:(g.y-p)/u*40}))}function n0(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function ko(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function Nw(){const[s,e]=we.useState(typeof window<"u"&&window.innerWidth<768);return we.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function Bo(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let o=0;o<e;o++)r.push(s[Math.floor(o*t)]);return r}function Tr(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function Iw(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function Ho(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function Uw(s,e,t,r,o,l,f,u,d,p,m,g,_){const S=we.useRef({}),M=we.useRef({angle:0,pitch:.6,dist:55,drag:!1,lx:0,ly:0,cinT:0}),A=we.useRef(u),x=we.useRef(new V(40,30,40)),y=we.useRef(new V(0,0,0)),N=we.useMemo(()=>t?Gs(t):null,[t]),w=we.useMemo(()=>r?Gs(r):null,[r]),R=we.useMemo(()=>(m==null?void 0:m.map(B=>B.speed||0))||[],[m]);we.useEffect(()=>{const B=s.current;if(!B||!e||e.length<10)return;S.current.ren&&(S.current.ren.dispose(),B.contains(S.current.ren.domElement)&&B.removeChild(S.current.ren.domElement)),S.current.fr&&cancelAnimationFrame(S.current.fr);const z=B.clientWidth,O=B.clientHeight,$=new HE,xe=_?$d:j0;$.background=new bt(xe.sceneBg),$.fog=new Bd(xe.sceneBg,120,350);const T=new pi(50,z/O,.1,500),I=new I0({antialias:!0,preserveDrawingBuffer:!0});I.setSize(z,O),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.appendChild(I.domElement),$.add(new Rw(14540264,_?.7:1.2));const Se=new Cw(16777215,_?1:1.4);Se.position.set(40,80,30),$.add(Se),$.add(new Mw(_?12305629:15658751,_?3355456:8952200,_?.4:.6));const ve=new jt(new Ka(400,400),new Sw({color:xe.groundColor}));ve.rotation.x=-Math.PI/2,ve.position.y=-.2,$.add(ve);const j=new jc(180,32,16),fe=new Float32Array(j.attributes.position.count*3);for(let ce=0;ce<j.attributes.position.count;ce++){const ee=j.attributes.position.getY(ce),pe=Math.max(0,Math.min(1,(ee+10)/190));fe[ce*3]=.06+pe*.04,fe[ce*3+1]=.06+pe*.07,fe[ce*3+2]=.1+pe*.12}j.setAttribute("color",new Qt(fe,3));const W=new jt(j,new Fs({vertexColors:!0,side:ii,fog:!1}));$.add(W);const ae=new Ic(e.map(ce=>new V(ce.x,ce.y,ce.z)),!0),F=Math.min(e.length*3,800),Y=2,X=ae.getPoints(F),U=[],Q=[],Ae=[],J=[],he=[],ge=X.map((ce,ee)=>{const pe=X[(ee+1)%X.length],me=X[(ee-1+X.length)%X.length];return new V(pe.x-me.x,0,pe.z-me.z).normalize()});for(let ce=0;ce<X.length;ce++){const ee=X[ce],pe=ge[ce],me=new V(-pe.z,0,pe.x),Ve=new V(ee.x+me.x*Y/2,ee.y,ee.z+me.z*Y/2),Qe=new V(ee.x-me.x*Y/2,ee.y,ee.z-me.z*Y/2);if(U.push(Ve.x,Ve.y,Ve.z,Qe.x,Qe.y,Qe.z),Q.push(0,1,0,0,1,0),J.push(new V(Ve.x,Ve.y+.02,Ve.z)),he.push(new V(Qe.x,Qe.y+.02,Qe.z)),ce<X.length-1){const ht=ce*2;Ae.push(ht,ht+2,ht+1,ht+1,ht+2,ht+3)}}const De=new dn;De.setAttribute("position",new Qt(U,3)),De.setAttribute("normal",new Qt(Q,3)),De.setIndex(Ae);const Ne=new jt(De,new Yg({color:xe.trackColor,roughness:.8,metalness:.1,side:Si}));if($.add(Ne),g==="heatmap"&&R.length>10){const ce=new Float32Array(X.length*2*3);for(let me=0;me<X.length;me++){const Ve=me/(X.length-1),Qe=Math.min(Math.floor(Ve*(R.length-1)),R.length-1),ht=Math.max(0,Math.min(1,(R[Qe]-50)/300));let Lt,vt,kt;ht<.25?(Lt=0,vt=ht*4,kt=1):ht<.5?(Lt=0,vt=1,kt=1-(ht-.25)*4):ht<.75?(Lt=(ht-.5)*4,vt=1,kt=0):(Lt=1,vt=1-(ht-.75)*4,kt=0);const Xt=me*2;ce[Xt*3]=Lt,ce[Xt*3+1]=vt,ce[Xt*3+2]=kt,ce[(Xt+1)*3]=Lt,ce[(Xt+1)*3+1]=vt,ce[(Xt+1)*3+2]=kt}const ee=De.clone();ee.setAttribute("color",new Qt(ce,3));const pe=new jt(ee,new Fs({vertexColors:!0,transparent:!0,opacity:.55,side:Si,depthWrite:!1}));pe.position.y+=.01,$.add(pe)}const Le=new Go({color:16777215,transparent:!0,opacity:.55});$.add(new Fo(new dn().setFromPoints(J),Le)),$.add(new Fo(new dn().setFromPoints(he),Le));const ot=[53866,16766720,14747136];[0,.33,.66].forEach((ce,ee)=>{const pe=ae.getPointAt(ce),me=ae.getTangentAt(ce),Ve=new V(-me.z,0,me.x).normalize(),Qe=pe.clone().add(Ve.clone().multiplyScalar(Y/2+.3)),ht=pe.clone().sub(Ve.clone().multiplyScalar(Y/2+.3));Qe.y+=.03,ht.y+=.03,$.add(new Fo(new dn().setFromPoints([Qe,ht]),new Go({color:ot[ee],linewidth:2}))),[-1,1].forEach(Lt=>{const vt=new Di(.15,1.2,2),kt=new Yg({color:ot[ee],emissive:ot[ee],emissiveIntensity:.5,transparent:!0,opacity:.7}),Xt=new jt(vt,kt),In=Ve.clone().multiplyScalar(Lt*(Y/2+.8));Xt.position.set(pe.x+In.x,pe.y+.6,pe.z+In.z),Xt.lookAt(pe.x,pe.y+.6,pe.z),$.add(Xt)})});const et=[],H=250;for(let ce=0;ce<H-2;ce++){const ee=ce/H,pe=(ce+1)/H,me=(ce+2)/H,Ve=ae.getPointAt(ee),Qe=ae.getPointAt(pe),ht=ae.getPointAt(me);Math.abs((Qe.x-Ve.x)*(ht.z-Qe.z)-(Qe.z-Ve.z)*(ht.x-Qe.x))>.12&&(et.length===0||Math.abs(pe-et[et.length-1].t)>.035)&&et.push({t:pe,p:Qe})}et.slice(0,20).forEach((ce,ee)=>{const pe=document.createElement("canvas");pe.width=48,pe.height=48;const me=pe.getContext("2d");me.fillStyle="rgba(225,6,0,0.75)",me.beginPath(),me.arc(24,24,20,0,Math.PI*2),me.fill(),me.fillStyle="#fff",me.font="bold 22px sans-serif",me.textAlign="center",me.textBaseline="middle",me.fillText(`${ee+1}`,24,25);const Ve=new Vg(pe),Qe=new Og(new bd({map:Ve,transparent:!0,depthWrite:!1})),ht=ae.getTangentAt(ce.t),vt=new V(-ht.z,0,ht.x).normalize().clone().multiplyScalar(Y/2+1.5);Qe.position.set(ce.p.x+vt.x,ce.p.y+1.5,ce.p.z+vt.z),Qe.scale.set(1.3,1.3,1),$.add(Qe)});const Ue=ae.getPointAt(0),ye=ae.getTangentAt(0),Fe=new V(-ye.z,0,ye.x).normalize(),Me=Ue.clone().add(Fe.clone().multiplyScalar(Y/2));Me.y+=.03;const Ye=Ue.clone().sub(Fe.clone().multiplyScalar(Y/2));Ye.y+=.03,$.add(new Fo(new dn().setFromPoints([Me,Ye]),new Go({color:16777215})));function Xe(ce,ee,pe){const me=new ka,Ve=new bt(ce),Qe=pe?.5:1,ht=pe?.45:.2,Lt=new Oo({color:Ve,emissive:Ve,emissiveIntensity:ht,specular:4473924,shininess:80,transparent:pe,opacity:Qe}),vt=new Oo({color:1118481,shininess:30,transparent:pe,opacity:Qe}),kt=new Oo({color:1710618,shininess:50,transparent:pe,opacity:Qe}),Xt=new Oo({color:1381653,shininess:10,transparent:pe,opacity:Qe}),In=new Oo({color:Ve,emissive:Ve,emissiveIntensity:.15,specular:16777215,shininess:120,transparent:pe,opacity:Qe}),oe=.55,Dt=new Ic([new V(0,.12*oe,2*oe),new V(0,.13*oe,1.5*oe),new V(0,.15*oe,1*oe),new V(0,.18*oe,.5*oe),new V(0,.22*oe,.1*oe),new V(0,.28*oe,-.1*oe),new V(0,.24*oe,-.5*oe),new V(0,.2*oe,-.9*oe),new V(0,.18*oe,-1.1*oe)]),Gt=new Xc(Dt,32,.12*oe,8,!1),Bt=new jt(Gt,Lt);me.add(Bt);const $e=new Vd(.08*oe,.6*oe,12);$e.rotateX(-Math.PI/2);const qe=new jt($e,Lt);qe.position.set(0,.12*oe,2.3*oe),me.add(qe);const er=new ss(.08*oe,.1*oe,.22*oe,8),si=new jt(er,Lt);si.position.set(0,.38*oe,0),me.add(si);const Lr=new jc(.1*oe,12,8,0,Math.PI*2,0,Math.PI*.5),P=new jt(Lr,vt);P.position.set(0,.22*oe,.2*oe),P.scale.set(1.2,.6,2),me.add(P);const te=new Oo({color:5592405,specular:16777215,shininess:200,transparent:pe,opacity:Qe}),ie=new jt(new jd(.16*oe,.016*oe,8,24,Math.PI),te);ie.rotation.z=Math.PI,ie.position.set(0,.32*oe,.22*oe),me.add(ie);const le=new jt(new ss(.012*oe,.015*oe,.32*oe,8),te);le.rotation.x=-.18,le.position.set(0,.3*oe,.42*oe),me.add(le),[-1,1].forEach(en=>{const At=new Ic([new V(en*.28*oe,.14*oe,.4*oe),new V(en*.34*oe,.16*oe,.1*oe),new V(en*.33*oe,.14*oe,-.3*oe),new V(en*.25*oe,.12*oe,-.6*oe)]),Ht=new Xc(At,16,.07*oe,8,!1);me.add(new jt(Ht,Lt))});const re=new Di(.85*oe,.015*oe,2.8*oe);re.translate(0,.04*oe,.3*oe),me.add(new jt(re,kt));const We=new H0;We.moveTo(-.48*oe,0),We.quadraticCurveTo(0,-.015*oe,.48*oe,0),We.lineTo(.48*oe,.008*oe),We.quadraticCurveTo(0,.02*oe,-.48*oe,.008*oe),We.closePath();const ct=new Wd(We,{depth:.16*oe,bevelEnabled:!0,bevelThickness:.005*oe,bevelSize:.005*oe,bevelSegments:3}),pt=new jt(ct,Lt);pt.position.set(0,.06*oe,2*oe),me.add(pt),[-1,1].forEach(en=>{const At=new Di(.008*oe,.07*oe,.2*oe),Ht=new jt(At,Lt);Ht.position.set(en*.48*oe,.065*oe,2.08*oe),me.add(Ht)});const Ze=new Di(.5*oe,.012*oe,.1*oe),Tt=new jt(Ze,Lt);Tt.position.set(0,.47*oe,-1*oe),me.add(Tt);const Mt=new Di(.44*oe,.01*oe,.05*oe),xt=new jt(Mt,Lt);xt.position.set(0,.51*oe,-1.02*oe),xt.rotation.x=-.2,me.add(xt),[-1,1].forEach(en=>{const At=new Di(.008*oe,.16*oe,.14*oe),Ht=new jt(At,Lt);Ht.position.set(en*.25*oe,.43*oe,-1*oe),me.add(Ht)}),[-1,1].forEach(en=>{const At=new ss(.006*oe,.008*oe,.16*oe,6),Ht=new jt(At,kt);Ht.position.set(en*.1*oe,.34*oe,-.96*oe),me.add(Ht)});const $t=new Fs({color:16720384,transparent:!0,opacity:.8}),_n=new jt(new Di(.2*oe,.025*oe,.01*oe),$t);_n.position.set(0,.19*oe,-1.12*oe),me.add(_n);const qt=.16*oe,Rn=.08*oe;[{x:.38,z:1.5},{x:-.38,z:1.5},{x:.42,z:-.65},{x:-.42,z:-.65}].forEach(en=>{const At=new ss(qt,qt,Rn,24);At.rotateZ(Math.PI/2);const Ht=new jt(At,Xt);Ht.position.set(en.x*oe,qt,en.z*oe),me.add(Ht);const Zt=new ss(qt*.5,qt*.5,Rn+.008*oe,16);Zt.rotateZ(Math.PI/2);const pn=new jt(Zt,In);pn.position.set(en.x*oe,qt,en.z*oe),me.add(pn)});const Ut=new Fs({color:0,transparent:!0,opacity:.2,side:Si,depthWrite:!1}),wt=new jt(new Wc(1.2*oe,24),Ut);wt.rotation.x=-Math.PI/2,wt.position.y=.01,me.add(wt);const Tn=new Fs({color:Ve,transparent:!0,opacity:pe?.05:.025,side:Si,depthWrite:!1}),Yt=new jt(new Wc(1.4*oe,16),Tn);Yt.rotation.x=-Math.PI/2,Yt.position.set(0,.005,0),me.add(Yt);const oi=new Tw(Ve,pe?.5:.25,8);if(oi.position.set(0,.35*oe,0),me.add(oi),ee){const en=document.createElement("canvas");en.width=160,en.height=56;const At=en.getContext("2d");At.fillStyle=ce,At.globalAlpha=.9,At.beginPath();const Ht=6;At.moveTo(Ht,0),At.lineTo(160-Ht,0),At.quadraticCurveTo(160,0,160,Ht),At.lineTo(160,56-Ht),At.quadraticCurveTo(160,56,160-Ht,56),At.lineTo(Ht,56),At.quadraticCurveTo(0,56,0,56-Ht),At.lineTo(0,Ht),At.quadraticCurveTo(0,0,Ht,0),At.fill(),At.fillStyle="#fff",At.globalAlpha=.15,At.fillRect(0,0,6,56),At.globalAlpha=1,At.fillStyle="#fff",At.font="bold 30px sans-serif",At.textAlign="center",At.textBaseline="middle",At.fillText(ee,80,30);const Zt=new Vg(en),pn=new Og(new bd({map:Zt,transparent:!0,depthWrite:!1}));pn.position.set(0,.85*oe,0),pn.scale.set(2.2,.8,1),me.add(pn)}return me}const Ke=Xe(l,d,!1),Et=Xe(f,p,!0);$.add(Ke),$.add(Et);const D=new Jg(new bt(l),.6,25,Math.PI/6,.5,1);D.position.set(0,12,0),$.add(D);const C=new Jg(new bt(f),.4,25,Math.PI/6,.5,1);C.position.set(0,12,0),$.add(C);const de=new dn,_e=new Float32Array(6);de.setAttribute("position",new Qt(_e,3));const be=new Go({color:16777215,transparent:!0,opacity:.5}),Te=new Fo(de,be);Te.frustumCulled=!1,$.add(Te);const gt=ae.getPoints(F),at=new dn().setFromPoints(gt),ze=new Fo(at,new Go({color:4500223,transparent:!0,opacity:.12}));ze.position.y+=.015,$.add(ze);function Oe(ce,ee){const me=new Float32Array(360),Ve=new dn;Ve.setAttribute("position",new Mi(me,3));const Qe=new Float32Array(120);Qe.fill(0),Ve.setAttribute("alpha",new Mi(Qe,1)),Ve.setDrawRange(0,0);const ht=new Pr({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new bt(ce)}},vertexShader:"attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }",fragmentShader:`uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${ee?"0.3":"0.55"}); }`}),Lt=new WE(Ve,ht);return $.add(Lt),{mesh:Lt,positions:me,alphas:Qe,max:120,count:0}}const dt=Oe(l,!1),Ce=Oe(f,!0);S.current={scene:$,camera:T,ren:I,car1:Ke,car2:Et,tr1:dt,tr2:Ce,n1:N,n2:w,curve:ae,spot1:D,spot2:C,deltaLine:Te,deltaPos:_e,fr:null};const _t=M.current,it=ce=>{var ee,pe,me,Ve;_t.drag=!0,_t.lx=ce.clientX??((pe=(ee=ce.touches)==null?void 0:ee[0])==null?void 0:pe.clientX)??0,_t.ly=ce.clientY??((Ve=(me=ce.touches)==null?void 0:me[0])==null?void 0:Ve.clientY)??0},lt=ce=>{var me,Ve,Qe,ht;if(!_t.drag)return;const ee=ce.clientX??((Ve=(me=ce.touches)==null?void 0:me[0])==null?void 0:Ve.clientX)??0,pe=ce.clientY??((ht=(Qe=ce.touches)==null?void 0:Qe[0])==null?void 0:ht.clientY)??0;_t.angle+=(ee-_t.lx)*.005,_t.pitch=Math.max(.1,Math.min(1.4,_t.pitch+(pe-_t.ly)*.005)),_t.lx=ee,_t.ly=pe},Ge=()=>{_t.drag=!1},tt=ce=>{_t.dist=Math.max(15,Math.min(200,_t.dist+ce.deltaY*.05))},ft=I.domElement;ft.addEventListener("mousedown",it),ft.addEventListener("mousemove",lt),ft.addEventListener("mouseup",Ge),ft.addEventListener("mouseleave",Ge),ft.addEventListener("wheel",tt,{passive:!0}),ft.addEventListener("touchstart",it,{passive:!0}),ft.addEventListener("touchmove",lt,{passive:!0}),ft.addEventListener("touchend",Ge);function mt(){S.current.fr=requestAnimationFrame(mt),_t.cinT+=3e-4;const ce=A.current;ce==="orbit"?(_t.drag||(_t.angle+=8e-4),x.current.set(Math.cos(_t.angle)*_t.dist*Math.cos(_t.pitch),_t.dist*Math.sin(_t.pitch),Math.sin(_t.angle)*_t.dist*Math.cos(_t.pitch)),y.current.set(0,0,0)):ce==="top"&&(x.current.set(0,65,.01),y.current.set(0,0,0)),T.position.lerp(x.current,.08),T.lookAt(y.current),I.render($,T)}mt();let Vt;const K=()=>{clearTimeout(Vt),Vt=setTimeout(()=>{B&&(T.aspect=B.clientWidth/B.clientHeight,T.updateProjectionMatrix(),I.setSize(B.clientWidth,B.clientHeight))},100)};return window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K),ft.removeEventListener("mousedown",it),ft.removeEventListener("mousemove",lt),ft.removeEventListener("mouseup",Ge),ft.removeEventListener("mouseleave",Ge),ft.removeEventListener("wheel",tt),ft.removeEventListener("touchstart",it),ft.removeEventListener("touchmove",lt),ft.removeEventListener("touchend",Ge),cancelAnimationFrame(S.current.fr),I.dispose(),B.contains(I.domElement)&&B.removeChild(I.domElement)}},[e,l,f,d,p,g,R,_]),we.useEffect(()=>{S.current.n1=N},[N]),we.useEffect(()=>{S.current.n2=w},[w]),we.useEffect(()=>{A.current=u},[u]),we.useEffect(()=>{const{car1:B,car2:z,tr1:O,tr2:$,camera:xe,spot1:T,spot2:I,deltaLine:Se,deltaPos:ve}=S.current;if(!B||!z||!e||e.length<2)return;const j=M.current;function fe(F,Y,X,U){const Q=(X==null?void 0:X.length)>=2?X:e,Ae=Hs(Q,U);if(isNaN(Ae.x)||isNaN(Ae.y)||isNaN(Ae.z))return{x:0,y:0,z:0};F.position.set(Ae.x,Ae.y+.2,Ae.z);const J=Hs(Q,Math.min(1,U+.005));if(Math.abs(J.x-Ae.x)+Math.abs(J.z-Ae.z)>.001&&!isNaN(J.x)&&F.lookAt(J.x,Ae.y+.2,J.z),Y){const he=Math.min(Y.count+1,Y.max);for(let ge=(he-1)*3;ge>=3;ge-=3)Y.positions[ge]=Y.positions[ge-3],Y.positions[ge+1]=Y.positions[ge-2],Y.positions[ge+2]=Y.positions[ge-1];Y.positions[0]=Ae.x,Y.positions[1]=Ae.y+.05,Y.positions[2]=Ae.z;for(let ge=he-1;ge>=1;ge--)Y.alphas[ge]=Y.alphas[ge-1]*.97;Y.alphas[0]=1,Y.count=he,Y.mesh.geometry.attributes.position.needsUpdate=!0,Y.mesh.geometry.attributes.alpha.needsUpdate=!0,Y.mesh.geometry.setDrawRange(0,he)}return Ae}const W=fe(B,O,S.current.n1,o),ae=fe(z,$,S.current.n2,o);if(T&&(T.position.set(W.x,W.y+12,W.z),T.target=B),I&&(I.position.set(ae.x,ae.y+12,ae.z),I.target=z),Se&&ve){ve[0]=W.x,ve[1]=W.y+.5,ve[2]=W.z,ve[3]=ae.x,ve[4]=ae.y+.5,ve[5]=ae.z,Se.geometry.attributes.position.needsUpdate=!0;const F=Math.sqrt((W.x-ae.x)**2+(W.z-ae.z)**2);Se.material.opacity=Math.min(.6,F*.08)}if(xe){const F=A.current;if(F==="follow1"||F==="follow2"){const Y=F==="follow1"?W:ae,X=F==="follow1"?S.current.n1||e:S.current.n2||e,U=Hs(X,Math.min(1,o+.02)),Q=U.x-Y.x,Ae=U.z-Y.z,J=Math.sqrt(Q*Q+Ae*Ae)||1;x.current.set(Y.x-Q/J*8,Y.y+4.5,Y.z-Ae/J*8),y.current.set(U.x,Y.y+.3,U.z)}else if(F==="cinematic"&&S.current.curve){const Y=(j.cinT+o*.3)%1,X=S.current.curve.getPointAt(Y);x.current.set(X.x+8,X.y+5,X.z+8),y.current.set((W.x+ae.x)/2,(W.y+ae.y)/2,(W.z+ae.z)/2)}}},[o,e,u])}const Fw=we.memo(function({tp:e,l1:t,l2:r,prog:o,c1:l,c2:f}){const u=we.useRef(null),d=we.useMemo(()=>t?Gs(t):null,[t]),p=we.useMemo(()=>r?Gs(r):null,[r]);return we.useEffect(()=>{const m=u.current;if(!m||!(e!=null&&e.length))return;const g=m.getContext("2d"),_=m.width,S=14;g.clearRect(0,0,_,_),g.fillStyle=G.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(_-8,0),g.quadraticCurveTo(_,0,_,8),g.lineTo(_,_-8),g.quadraticCurveTo(_,_,_-8,_),g.lineTo(8,_),g.quadraticCurveTo(0,_,0,_-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let M=1/0,A=-1/0,x=1/0,y=-1/0;for(const B of e)B.x<M&&(M=B.x),B.x>A&&(A=B.x),B.z<x&&(x=B.z),B.z>y&&(y=B.z);const N=Math.max(A-M,y-x)||1,w=B=>({x:S+(B.x-M)/N*(_-S*2),y:S+(B.z-x)/N*(_-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((B,z)=>{const O=w(B);z===0?g.moveTo(O.x,O.y):g.lineTo(O.x,O.y)}),g.closePath(),g.stroke();function R(B,z){const O=(B==null?void 0:B.length)>=2?B:e,$=Hs(O,o),xe=w($);g.fillStyle=z,g.shadowColor=z,g.shadowBlur=8,g.beginPath(),g.arc(xe.x,xe.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}R(d,l),R(p,f)},[e,o,t,r,l,f]),L.jsx("canvas",{ref:u,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),vd=we.memo(function({data1:e,data2:t,color1:r,color2:o,maxVal:l,h:f,prog:u,label:d,fillColor:p}){if(!(e!=null&&e.length)&&!(t!=null&&t.length))return null;const m=f||45,g=300;function _(A){if(!(A!=null&&A.length))return"";const x=Math.max(1,Math.floor(A.length/150));let y="";for(let N=0;N<A.length;N+=x){const w=N/(A.length-1)*g,R=m-2-(A[N]||0)/l*(m-4);y+=(N===0?"M":"L")+`${w},${R}`}return y}const S=_(e),M=_(t);return L.jsxs("svg",{width:"100%",height:m,viewBox:`0 0 ${g} ${m}`,preserveAspectRatio:"none",style:{borderRadius:3,background:G.cardBg,display:"block",marginBottom:2},children:[S&&L.jsxs(L.Fragment,{children:[L.jsx("path",{d:S+`L${g},${m}L0,${m}Z`,fill:p||`${r}10`}),L.jsx("path",{d:S,fill:"none",stroke:r,strokeWidth:"1.5",opacity:"0.7"})]}),M&&L.jsxs(L.Fragment,{children:[L.jsx("path",{d:M+`L${g},${m}L0,${m}Z`,fill:`${o}08`}),L.jsx("path",{d:M,fill:"none",stroke:o,strokeWidth:"1.2",opacity:"0.5",strokeDasharray:"3,2"})]}),u!==void 0&&L.jsx("line",{x1:u*g,y1:"0",x2:u*g,y2:m,stroke:"#fff",strokeWidth:"1",opacity:"0.5"}),u!==void 0&&(e==null?void 0:e.length)&&(()=>{const A=Math.floor(u*(e.length-1)),x=e[A]||0,y=m-2-x/l*(m-4);return L.jsx("circle",{cx:u*g,cy:y,r:"2.5",fill:r,opacity:"0.9"})})(),u!==void 0&&(t==null?void 0:t.length)&&(()=>{const A=Math.floor(u*(t.length-1)),x=t[A]||0,y=m-2-x/l*(m-4);return L.jsx("circle",{cx:u*g,cy:y,r:"2",fill:o,opacity:"0.7"})})()]})}),_d=we.memo(function({s:e,t1:t,t2:r,c1:o,c2:l}){const f=t&&r?t-r:null,u=[G.green,G.yellow,G.red];return L.jsxs("div",{style:{flex:1,padding:"5px 8px",background:G.cardBg,borderRadius:4,borderTop:`2px solid ${u[e-1]}`},children:[L.jsxs("div",{style:{fontSize:9,color:G.textMuted,fontFamily:G.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[L.jsx("span",{style:{fontSize:12,color:o,fontFamily:G.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),L.jsx("span",{style:{fontSize:12,color:l,fontFamily:G.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&L.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?G.red:G.green,fontFamily:G.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function Ow(){var qs,ds,Ui,Fi,Oi,Ir,Ur,zi,il,na,Fr;const s=Nw(),[e,t]=we.useState(()=>{try{return localStorage.getItem("f1s-theme")!=="light"}catch{return!0}});G=e?$d:j0;const r=we.useCallback(()=>{t(b=>{const Ee=!b;try{localStorage.setItem("f1s-theme",Ee?"dark":"light")}catch{}return Ee})},[]),[o,l]=we.useState(2026),[f,u]=we.useState([]),[d,p]=we.useState(null),[m,g]=we.useState([]),[_,S]=we.useState(null),[M,A]=we.useState([]),[x,y]=we.useState(null),[N,w]=we.useState(null),[R,B]=we.useState(null),[z,O]=we.useState(null),[$,xe]=we.useState([]),[T,I]=we.useState([]),[Se,ve]=we.useState(null),[j,fe]=we.useState(null),[W,ae]=we.useState(null),[F,Y]=we.useState(null),[X,U]=we.useState(null),[Q,Ae]=we.useState([]),[J,he]=we.useState([]),[ge,De]=we.useState(0),[Ne,Le]=we.useState(!1),[ot,et]=we.useState(1),[H,Ue]=we.useState(!1),[ye,Fe]=we.useState("orbit"),[Me,Ye]=we.useState("normal"),[Xe,Ke]=we.useState(!1),[Et,D]=we.useState(()=>{try{return!localStorage.getItem("f1s-toured")}catch{return!0}}),[C,de]=we.useState(0),[_e,be]=we.useState(!1),[Te,gt]=we.useState(null),[at,ze]=we.useState(!1),Oe=we.useRef(!1),[dt,Ce]=we.useState(""),[_t,it]=we.useState(void 0),[lt,Ge]=we.useState(""),[tt,ft]=we.useState(!0),[mt,Vt]=we.useState("3d"),[K,ce]=we.useState(!1),[ee,pe]=we.useState(!1),[me,Ve]=we.useState(!1),[Qe,ht]=we.useState(""),Lt=we.useRef(null),vt=we.useRef(null),kt=we.useRef(null),Xt=we.useRef(!1);we.useRef(!1);const In=we.useRef(!1),oe=M.find(b=>b.driver_number===x),Dt=M.find(b=>b.driver_number===N),Gt=oe?e0(oe.team_name):"#4488ff",Bt=Dt?e0(Dt.team_name):"#ff4488",$e=$.find(b=>b.lap_number===R),qe=T.find(b=>b.lap_number===z),er=$e!=null&&$e.lap_duration&&(qe!=null&&qe.lap_duration)?$e.lap_duration-qe.lap_duration:null,si=$e!=null&&$e.lap_duration?ge*$e.lap_duration:0,Lr=qe!=null&&qe.lap_duration?ge*qe.lap_duration:0,P=(ds=(qs=Q.find(b=>R>=b.lap_start&&R<=b.lap_end))==null?void 0:qs.compound)==null?void 0:ds.toUpperCase(),te=(Fi=(Ui=J.find(b=>z>=b.lap_start&&z<=b.lap_end))==null?void 0:Ui.compound)==null?void 0:Fi.toUpperCase(),ie=s?200:400,le=we.useMemo(()=>Bo(W==null?void 0:W.map(b=>b.speed||0),ie),[W,ie]),re=we.useMemo(()=>Bo(F==null?void 0:F.map(b=>b.speed||0),ie),[F,ie]),We=we.useMemo(()=>Bo(W==null?void 0:W.map(b=>b.throttle||0),ie),[W,ie]),ct=we.useMemo(()=>Bo(F==null?void 0:F.map(b=>b.throttle||0),ie),[F,ie]),pt=we.useMemo(()=>Bo(W==null?void 0:W.map(b=>b.brake>0?100:0),ie),[W,ie]),Ze=we.useMemo(()=>Bo(F==null?void 0:F.map(b=>b.brake>0?100:0),ie),[F,ie]),Tt=n0(W,ge),Mt=n0(F,ge),xt=we.useMemo(()=>W?Math.max(...W.map(b=>b.speed||0)):0,[W]),$t=we.useMemo(()=>F?Math.max(...F.map(b=>b.speed||0)):0,[F]),_n=we.useMemo(()=>W!=null&&W.length?W.reduce((b,Ee)=>b+(Ee.speed||0),0)/W.length:0,[W]),qt=we.useMemo(()=>F!=null&&F.length?F.reduce((b,Ee)=>b+(Ee.speed||0),0)/F.length:0,[F]);we.useEffect(()=>{In.current||(Ce("Loading..."),Ge(""),md(o).then(b=>{u(b.filter(Ee=>Ee.meeting_name)),p(null),S(null),g([]),A([]),y(null),w(null),U(null),Ce("")}).catch(b=>{Ge(b.message),Ce("")}))},[o]),we.useEffect(()=>{!d||In.current||(Ce("Loading sessions..."),gd(d.meeting_key).then(b=>{g(b.filter(Ee=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Ee.session_name))),S(null),A([]),y(null),w(null),U(null),Ce("")}).catch(b=>{Ge(b.message),Ce("")}))},[d]),we.useEffect(()=>{!_||In.current||(Ce("Loading drivers..."),t0(_.session_key).then(b=>{const Ee=new Set;A(b.filter(ke=>Ee.has(ke.driver_number)?!1:(Ee.add(ke.driver_number),!0))),y(null),w(null),U(null),Ce("")}).catch(b=>{Ge(b.message),Ce("")}))},[_]),we.useEffect(()=>{In.current||_&&x&&(zo(_.session_key,x).then(b=>{xe(b),B(null)}).catch(()=>xe([])),Pc(_.session_key,x).then(Ae).catch(()=>Ae([])))},[_,x]),we.useEffect(()=>{In.current||_&&N&&(zo(_.session_key,N).then(b=>{I(b),O(null)}).catch(()=>I([])),Pc(_.session_key,N).then(he).catch(()=>he([])))},[_,N]),we.useEffect(()=>{if($.length&&!R){const b=ko($);b&&B(b.lap_number)}},[$]),we.useEffect(()=>{if(T.length&&!z){const b=ko(T);b&&O(b.lap_number)}},[T]),we.useEffect(()=>{if(Xt.current)return;const b=Ho();b.year&&b.mk&&(Xt.current=!0,l(Number(b.year)))},[]),we.useEffect(()=>{const b=Ho();if(b.mk&&f.length&&!d){const Ee=f.find(ke=>String(ke.meeting_key)===b.mk);Ee&&p(Ee)}},[f]),we.useEffect(()=>{const b=Ho();if(b.sk&&m.length&&!_){const Ee=m.find(ke=>String(ke.session_key)===b.sk);Ee&&S(Ee)}},[m]),we.useEffect(()=>{const b=Ho();b.d1&&b.d2&&M.length&&!x&&!N&&(y(Number(b.d1)),w(Number(b.d2)))},[M]),we.useEffect(()=>{const b=Ho();b.l1&&$.length&&!R&&B(Number(b.l1))},[$]),we.useEffect(()=>{const b=Ho();b.l2&&T.length&&!z&&O(Number(b.l2))},[T]);const Rn=we.useCallback(async()=>{if(!(!_||!x||!N||!R||!z)){Ce("Fetching telemetry..."),Ge(""),it(0);try{const b=_.session_key,Ee=$.find(bn=>bn.lap_number===R),ke=T.find(bn=>bn.lap_number===z);if(!(Ee!=null&&Ee.date_start)||!(ke!=null&&ke.date_start)){Ge("Lap timing unavailable."),Ce("");return}const Pt=new Date(new Date(Ee.date_start).getTime()+(Ee.lap_duration||120)*1e3).toISOString(),Ct=new Date(new Date(ke.date_start).getTime()+(ke.lap_duration||120)*1e3).toISOString();it(20);const[Nt,It]=await Promise.all([Lc(b,x,Ee.date_start,Pt),Lc(b,N,ke.date_start,Ct)]);it(60);const[xn,yn]=await Promise.all([Dc(b,x,Ee.date_start,Pt),Dc(b,N,ke.date_start,Ct)]);if(Nt.length<5||It.length<5){Ge("Insufficient data."),Ce(""),it(void 0);return}ve(Nt),fe(It),ae(xn),Y(yn),U(Gs(Nt)),De(0),Le(!1),it(100),setTimeout(()=>{Ce(""),it(void 0)},300)}catch(b){Ge(b.message),Ce(""),it(void 0)}}},[_,x,N,R,z,$,T]),Ut=we.useCallback(async b=>{ce(!1),Ce("Loading preset..."),Ge(""),it(0),In.current=!0;try{const ke=(await md(b.year)).filter(rn=>rn.meeting_name),Pt=ke.find(rn=>rn.meeting_name&&rn.meeting_name.toLowerCase().includes(b.meeting.toLowerCase().replace(" grand prix","").trim()));if(!Pt)throw new Error(`Meeting "${b.meeting}" not found for ${b.year}`);it(10);const Nt=(await gd(Pt.meeting_key)).filter(rn=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(rn.session_name)),It=Nt.find(rn=>rn.session_name===b.session);if(!It)throw new Error(`Session "${b.session}" not found`);it(20);const xn=await t0(It.session_key),yn=new Set,bn=xn.filter(rn=>yn.has(rn.driver_number)?!1:(yn.add(rn.driver_number),!0));it(30);const[Ei,Fn]=await Promise.all([zo(It.session_key,b.d1),zo(It.session_key,b.d2)]),Sn=ko(Ei),Vn=ko(Fn);if(!Sn||!Vn)throw new Error("No valid laps found for these drivers");it(45);const[wi,ki]=await Promise.all([Pc(It.session_key,b.d1).catch(()=>[]),Pc(It.session_key,b.d2).catch(()=>[])]);l(b.year),u(ke),p(Pt),g(Nt),S(It),A(bn),y(b.d1),w(b.d2),xe(Ei),I(Fn),B(Sn.lap_number),O(Vn.lap_number),Ae(wi),he(ki),it(50),Ce("Fetching telemetry...");const Bi=It.session_key,Wn=new Date(new Date(Sn.date_start).getTime()+(Sn.lap_duration||120)*1e3).toISOString(),tr=new Date(new Date(Vn.date_start).getTime()+(Vn.lap_duration||120)*1e3).toISOString();it(60);const[mi,Hi]=await Promise.all([Lc(Bi,b.d1,Sn.date_start,Wn),Lc(Bi,b.d2,Vn.date_start,tr)]);it(80);const[hs,un]=await Promise.all([Dc(Bi,b.d1,Sn.date_start,Wn),Dc(Bi,b.d2,Vn.date_start,tr)]);if(mi.length<5||Hi.length<5)throw new Error("Insufficient location data for these laps");ve(mi),fe(Hi),ae(hs),Y(un),U(Gs(mi)),De(0),Le(!1),it(100),setTimeout(()=>{Ce(""),it(void 0),In.current=!1},300)}catch(Ee){Ge(Ee.message),Ce(""),it(void 0),In.current=!1}},[]),wt=we.useCallback(()=>{var Ee;if(!d||!_)return;const b=Iw({year:o,mk:d.meeting_key,sk:_.session_key,d1:x,d2:N,l1:R,l2:z});(Ee=navigator.clipboard)==null||Ee.writeText(b).then(()=>{ht("Copied!"),setTimeout(()=>ht(""),2e3)}),window.history.replaceState(null,"",b.split(window.location.origin)[1])},[o,d,_,x,N,R,z]);Uw(Lt,X,Se,j,ge,Gt,Bt,ye,(oe==null?void 0:oe.name_acronym)||"",(Dt==null?void 0:Dt.name_acronym)||"",W,Me,e),we.useEffect(()=>{if(!Ne){kt.current=null,vt.current&&cancelAnimationFrame(vt.current);return}function b(Ee){kt.current||(kt.current=Ee);const ke=(Ee-kt.current)/1e3;kt.current=Ee,De(Pt=>{const Ct=Pt+ke*.015*ot;return Ct>=1?H?0:(Le(!1),1):Ct}),vt.current=requestAnimationFrame(b)}return vt.current=requestAnimationFrame(b),()=>{vt.current&&cancelAnimationFrame(vt.current)}},[Ne,ot,H]);const Tn=we.useRef(0);we.useEffect(()=>{const b=Ee=>{if(!(Ee.target.tagName==="SELECT"||Ee.target.tagName==="INPUT")){if(Ee.key==="?"||Ee.shiftKey&&Ee.code==="Slash"){Ke(ke=>!ke);return}if(Ee.code==="Escape"){Ke(!1),D(!1);return}if(Ee.code==="Space"&&(Ee.preventDefault(),X&&Le(ke=>!ke)),Ee.code==="KeyR"&&(De(0),Le(!1)),Ee.code==="KeyT"&&ft(ke=>!ke),Ee.code==="KeyC"&&Fe(ke=>bc[(bc.indexOf(ke)+1)%bc.length]),Ee.code==="KeyL"&&Ue(ke=>!ke),Ee.code==="ArrowRight"&&De(ke=>Math.min(1,ke+.01)),Ee.code==="ArrowLeft"){const ke=Date.now();ke-Tn.current<300?De(Pt=>Math.max(0,Pt-.05)):De(Pt=>Math.max(0,Pt-.01)),Tn.current=ke}}};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[X]);const Yt=(K||ee||me||Xe||_e)&&L.jsx("div",{onClick:()=>{ce(!1),pe(!1),Ve(!1),Ke(!1),be(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),oi=K&&L.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:G.carbon,border:`1px solid ${G.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":460,maxHeight:"80vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsxs("div",{children:[L.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:G.sans,letterSpacing:"0.05em"},children:"MEMORABLE BATTLES"}),L.jsx("div",{style:{fontSize:10,color:G.textMuted,marginTop:2},children:"20 iconic qualifying & race comparisons"})]}),L.jsx("button",{onClick:()=>ce(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),L.jsx("div",{style:{overflowY:"auto",padding:"12px 20px 20px",flex:1},children:["2025","2024","2023"].map(b=>{const Ee=pd.filter(ke=>ke.cat===b);return Ee.length?L.jsxs("div",{style:{marginBottom:16},children:[L.jsxs("div",{style:{fontSize:11,fontWeight:900,color:G.red,letterSpacing:"0.12em",marginBottom:8,fontFamily:G.mono,borderBottom:`1px solid ${G.red}22`,paddingBottom:4},children:[b," SEASON"]}),Ee.map((ke,Pt)=>L.jsx("button",{onClick:()=>Ut(ke),style:{display:"block",width:"100%",textAlign:"left",padding:"10px 12px",marginBottom:4,fontSize:12,fontFamily:G.mono,borderLeft:`3px solid ${G.red}`,lineHeight:1.4},children:ke.label},Pt))]},b):null})})]}),en=we.useMemo(()=>W!=null&&W.length?Math.min(...W.filter(b=>b.speed>5).map(b=>b.speed)):0,[W]),At=we.useMemo(()=>F!=null&&F.length?Math.min(...F.filter(b=>b.speed>5).map(b=>b.speed)):0,[F]),Ht=we.useMemo(()=>W!=null&&W.length?W.filter(b=>b.throttle>=95).length/W.length*100:0,[W]),Zt=we.useMemo(()=>F!=null&&F.length?F.filter(b=>b.throttle>=95).length/F.length*100:0,[F]),pn=we.useMemo(()=>W!=null&&W.length?W.filter(b=>b.brake>0).length/W.length*100:0,[W]),fr=we.useMemo(()=>F!=null&&F.length?F.filter(b=>b.brake>0).length/F.length*100:0,[F]),Un=we.useMemo(()=>W!=null&&W.length?W.filter(b=>b.throttle<5&&b.brake===0).length/W.length*100:0,[W]),Ii=we.useMemo(()=>F!=null&&F.length?F.filter(b=>b.throttle<5&&b.brake===0).length/F.length*100:0,[F]),Xs=we.useMemo(()=>{if(!(W!=null&&W.length))return 0;let b=0;for(let Ee=1;Ee<W.length;Ee++)W[Ee].drs>=10&&W[Ee-1].drs<10&&b++;return b},[W]),Dr=we.useMemo(()=>{if(!(F!=null&&F.length))return 0;let b=0;for(let Ee=1;Ee<F.length;Ee++)F[Ee].drs>=10&&F[Ee-1].drs<10&&b++;return b},[F]),Nr=we.useMemo(()=>W!=null&&W.length?Math.max(...W.map(b=>b.rpm||0)):0,[W]),Ja=we.useMemo(()=>F!=null&&F.length?Math.max(...F.map(b=>b.rpm||0)):0,[F]),ea=ee&&X&&L.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:G.carbon,border:`1px solid ${G.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":480,maxHeight:"85vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsxs("div",{children:[L.jsx("div",{style:{fontWeight:900,fontSize:16,fontFamily:G.sans,letterSpacing:"0.05em"},children:"LAP ANALYSIS"}),L.jsx("div",{style:{fontSize:10,color:G.textMuted,marginTop:2},children:"Detailed telemetry comparison"})]}),L.jsx("button",{onClick:()=>{var Pt,Ct,Nt,It,xn,yn;const b=["F1 STORIES — GHOST CAR LAB REPORT",`${(d==null?void 0:d.meeting_name)||""} ${o} — ${(_==null?void 0:_.session_name)||""}`,`${(oe==null?void 0:oe.name_acronym)||"D1"} vs ${(Dt==null?void 0:Dt.name_acronym)||"D2"}`,"",`LAP TIME:    ${$e!=null&&$e.lap_duration?Tr($e.lap_duration):"—"}  vs  ${qe!=null&&qe.lap_duration?Tr(qe.lap_duration):"—"}  Δ ${$e!=null&&$e.lap_duration&&(qe!=null&&qe.lap_duration)?($e.lap_duration-qe.lap_duration>0?"+":"")+($e.lap_duration-qe.lap_duration).toFixed(3)+"s":"—"}`,`TOP SPEED:   ${Math.round(xt)} km/h  vs  ${Math.round($t)} km/h`,`AVG SPEED:   ${Math.round(_n)} km/h  vs  ${Math.round(qt)} km/h`,`SECTOR 1:    ${((Pt=$e==null?void 0:$e.duration_sector_1)==null?void 0:Pt.toFixed(3))||"—"}  vs  ${((Ct=qe==null?void 0:qe.duration_sector_1)==null?void 0:Ct.toFixed(3))||"—"}`,`SECTOR 2:    ${((Nt=$e==null?void 0:$e.duration_sector_2)==null?void 0:Nt.toFixed(3))||"—"}  vs  ${((It=qe==null?void 0:qe.duration_sector_2)==null?void 0:It.toFixed(3))||"—"}`,`SECTOR 3:    ${((xn=$e==null?void 0:$e.duration_sector_3)==null?void 0:xn.toFixed(3))||"—"}  vs  ${((yn=qe==null?void 0:qe.duration_sector_3)==null?void 0:yn.toFixed(3))||"—"}`,`FULL THROTTLE: ${Ht.toFixed(1)}%  vs  ${Zt.toFixed(1)}%`,`BRAKING:     ${pn.toFixed(1)}%  vs  ${fr.toFixed(1)}%`,`COASTING:    ${Un.toFixed(1)}%  vs  ${Ii.toFixed(1)}%`,`TYRE:        ${P||"—"}  vs  ${te||"—"}`,"","Generated by f1stories.gr/ghostcar"],Ee=new Blob([b.join(`
`)],{type:"text/plain"}),ke=document.createElement("a");ke.href=URL.createObjectURL(Ee),ke.download=`f1stories-report-${(oe==null?void 0:oe.name_acronym)||"D1"}-vs-${(Dt==null?void 0:Dt.name_acronym)||"D2"}.txt`,ke.click()},style:{padding:"4px 10px",fontSize:10},children:"📄 EXPORT"}),L.jsx("button",{onClick:()=>pe(!1),style:{marginLeft:"auto",padding:"4px 10px"},children:"✕"})]}),L.jsx("div",{style:{overflowY:"auto",padding:"0 20px 20px"},children:L.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:G.mono},children:[L.jsx("thead",{children:L.jsxs("tr",{style:{color:G.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[L.jsx("th",{style:{textAlign:"left",padding:"10px 8px 6px",borderBottom:`1px solid ${G.red}22`},children:"METRIC"}),L.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:Gt,borderBottom:`2px solid ${Gt}44`},children:(oe==null?void 0:oe.name_acronym)||"D1"}),L.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:Bt,borderBottom:`2px solid ${Bt}44`},children:(Dt==null?void 0:Dt.name_acronym)||"D2"}),L.jsx("th",{style:{textAlign:"center",padding:"10px 8px 6px",color:G.textMuted,borderBottom:`1px solid ${G.borderLight}`,width:50},children:"Δ"})]})}),L.jsx("tbody",{children:[{m:"LAP TIME",v1:$e!=null&&$e.lap_duration?Tr($e.lap_duration):"—",v2:qe!=null&&qe.lap_duration?Tr(qe.lap_duration):"—",d:$e!=null&&$e.lap_duration&&(qe!=null&&qe.lap_duration)?$e.lap_duration-qe.lap_duration:null,unit:"s"},{m:"TOP SPEED",v1:Math.round(xt),v2:Math.round($t),d:xt-$t,unit:"",inv:!0},{m:"AVG SPEED",v1:Math.round(_n),v2:Math.round(qt),d:_n-qt,unit:"",inv:!0},{m:"MIN SPEED",v1:Math.round(en),v2:Math.round(At),d:en-At,unit:"",inv:!0},{m:"SECTOR 1",v1:((Oi=$e==null?void 0:$e.duration_sector_1)==null?void 0:Oi.toFixed(3))||"—",v2:((Ir=qe==null?void 0:qe.duration_sector_1)==null?void 0:Ir.toFixed(3))||"—",d:$e!=null&&$e.duration_sector_1&&(qe!=null&&qe.duration_sector_1)?$e.duration_sector_1-qe.duration_sector_1:null,unit:"s"},{m:"SECTOR 2",v1:((Ur=$e==null?void 0:$e.duration_sector_2)==null?void 0:Ur.toFixed(3))||"—",v2:((zi=qe==null?void 0:qe.duration_sector_2)==null?void 0:zi.toFixed(3))||"—",d:$e!=null&&$e.duration_sector_2&&(qe!=null&&qe.duration_sector_2)?$e.duration_sector_2-qe.duration_sector_2:null,unit:"s"},{m:"SECTOR 3",v1:((il=$e==null?void 0:$e.duration_sector_3)==null?void 0:il.toFixed(3))||"—",v2:((na=qe==null?void 0:qe.duration_sector_3)==null?void 0:na.toFixed(3))||"—",d:$e!=null&&$e.duration_sector_3&&(qe!=null&&qe.duration_sector_3)?$e.duration_sector_3-qe.duration_sector_3:null,unit:"s"},{m:"FULL THROTTLE",v1:`${Ht.toFixed(1)}%`,v2:`${Zt.toFixed(1)}%`,d:Ht-Zt,unit:"%",inv:!0},{m:"BRAKING",v1:`${pn.toFixed(1)}%`,v2:`${fr.toFixed(1)}%`,d:pn-fr,unit:"%"},{m:"COASTING",v1:`${Un.toFixed(1)}%`,v2:`${Ii.toFixed(1)}%`,d:Un-Ii,unit:"%"},{m:"DRS OPENS",v1:Xs,v2:Dr,d:null,unit:""},{m:"MAX RPM",v1:Nr?Math.round(Nr).toLocaleString():"—",v2:Ja?Math.round(Ja).toLocaleString():"—",d:null,unit:""},{m:"TYRE",v1:P||"—",v2:te||"—",d:null,unit:""}].map(b=>{const Ee=b.d!==null?b.inv?b.d>0?1:b.d<0?2:0:b.d<0?1:b.d>0?2:0:0;return L.jsxs("tr",{style:{borderBottom:`1px solid ${G.borderLight}`},children:[L.jsx("td",{style:{padding:"7px 8px",color:G.textDim,letterSpacing:"0.04em",fontSize:10},children:b.m}),L.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Ee===1?Gt:G.text,background:Ee===1?`${Gt}08`:"transparent"},children:b.v1}),L.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontWeight:700,color:Ee===2?Bt:G.text,background:Ee===2?`${Bt}08`:"transparent"},children:b.v2}),L.jsx("td",{style:{padding:"7px 8px",textAlign:"center",fontSize:10,color:b.d!==null?b.d>0?b.inv?G.green:G.red:b.d<0?b.inv?G.red:G.green:G.textMuted:G.textMuted},children:b.d!==null?`${b.d>0?"+":""}${typeof b.d=="number"?Math.abs(b.d)<1?b.d.toFixed(3):Math.round(b.d):b.d}`:"—"})]},b.m)})})]})})]}),Jt=me&&L.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:G.carbon,borderLeft:`1px solid ${G.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:G.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),L.jsx("button",{onClick:()=>Ve(!1),style:{marginLeft:"auto"},children:"✕"})]}),L.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(oe==null?void 0:oe.name_acronym)||"D1",col:Gt,laps:$,sel:R,set:B},{lab:(Dt==null?void 0:Dt.name_acronym)||"D2",col:Bt,laps:T,sel:z,set:O}].map(b=>{const Ee=b.laps.filter(Ct=>Ct.lap_duration>10),ke=Ee.length?Math.min(...Ee.map(Ct=>Ct.lap_duration)):0,Pt=Ee.length?Math.max(...Ee.map(Ct=>Ct.lap_duration)):0;return L.jsxs("div",{style:{marginBottom:18},children:[L.jsx("div",{style:{fontSize:12,fontWeight:700,color:b.col,marginBottom:8,fontFamily:G.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${b.col}`,paddingLeft:8},children:b.lab}),Ee.sort((Ct,Nt)=>Ct.lap_duration-Nt.lap_duration).map(Ct=>{const Nt=Pt>ke?(Ct.lap_duration-ke)/(Pt-ke):0;return L.jsxs("div",{onClick:()=>b.set(Ct.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Ct.lap_number===b.sel?`${b.col}18`:"transparent",borderLeft:Ct.lap_number===b.sel?`2px solid ${b.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:G.mono},children:[L.jsxs("span",{style:{width:30,color:G.textMuted},children:["L",Ct.lap_number]}),L.jsx("span",{style:{fontWeight:Ct.lap_duration===ke?800:400,color:Ct.lap_duration===ke?G.green:G.text},children:Tr(Ct.lap_duration)}),Ct.lap_duration===ke&&L.jsx("span",{style:{fontSize:9,color:G.green,fontWeight:700,background:`${G.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),L.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:G.borderLight,borderRadius:2,overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${(1-Nt)*100}%`,background:Nt<.1?G.green:Nt>.7?G.red:G.yellow,borderRadius:2}})})]},Ct.lap_number)})]},b.lab)})})]}),Qa=we.useCallback(()=>{const b=Lt.current;if(!b)return;const Ee=b.querySelector("canvas");if(!Ee)return;const ke=Ee.toDataURL("image/png"),Pt=document.createElement("a");Pt.href=ke,Pt.download=`f1stories-ghost-${Date.now()}.png`,Pt.click()},[]),el=we.useCallback(async()=>{var b;if(!(!_||!x||!N)){be(!0),gt(null);try{const Ee=await md(o),ke=[];for(const Pt of Ee.filter(Ct=>Ct.meeting_name)){try{const Nt=(await gd(Pt.meeting_key)).find(Ei=>Ei.session_name==="Qualifying");if(!Nt)continue;const[It,xn]=await Promise.all([zo(Nt.session_key,x),zo(Nt.session_key,N)]),yn=ko(It),bn=ko(xn);yn&&bn&&ke.push({gp:(b=Pt.meeting_name)==null?void 0:b.replace("Grand Prix","GP"),t1:yn.lap_duration,t2:bn.lap_duration})}catch{}if(ke.length>=10)break}gt(ke)}catch{gt([])}}},[o,_,x,N]);we.useEffect(()=>{if(!at){Oe.current=!1;return}Oe.current=!0;let b=0;async function Ee(){if(!Oe.current||b>=pd.length){ze(!1);return}await Ut(pd[b]),Le(!0),b++,setTimeout(()=>{Le(!1),Oe.current&&Ee()},12e3)}return Ee(),()=>{Oe.current=!1}},[at,Ut]);const ta=Xe&&L.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:G.carbon,border:`1px solid ${G.red}33`,borderRadius:12,padding:24,zIndex:100,width:s?"92%":380,animation:"fadeIn .2s"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[L.jsx("span",{style:{fontWeight:900,fontSize:16,fontFamily:G.sans,letterSpacing:"0.05em"},children:"KEYBOARD SHORTCUTS"}),L.jsx("button",{onClick:()=>Ke(!1),style:{marginLeft:"auto"},children:"✕"})]}),[["Space","Play / Pause"],["R","Reset to start"],["T","Toggle telemetry"],["C","Cycle camera mode"],["L","Toggle loop"],["← →","Scrub ±1%"],["←← (double-tap)","Rewind 5%"],["D","Toggle theme"],["?","This overlay"],["Esc","Close overlays"]].map(([b,Ee])=>L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsx("kbd",{style:{background:G.cardBg,padding:"2px 8px",borderRadius:3,fontFamily:G.mono,fontSize:11,fontWeight:700,color:G.red,border:`1px solid ${G.border}`},children:b}),L.jsx("span",{style:{fontSize:12,color:G.textDim},children:Ee})]},b))]}),$s=[{text:"Welcome to Ghost Car Lab! Compare F1 laps in 3D with real telemetry.",pos:"center"},{text:"Select a year, Grand Prix, session, and two drivers to compare.",pos:"top"},{text:"Or click ⚡ PRESETS for instant iconic battle comparisons.",pos:"top-right"},{text:"Use the playback bar to scrub through the lap. Space = play/pause.",pos:"bottom"},{text:"Switch camera modes: Free orbit, Chase D1/D2, Helicopter, Cinematic.",pos:"top-left"},{text:"Open STATS for detailed analysis, LAPS to browse all lap times.",pos:"top-right"},{text:"Press ? anytime to see keyboard shortcuts. Enjoy! 🏁",pos:"center"}],tl=Et&&L.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"},children:L.jsxs("div",{style:{background:G.carbon,border:`1px solid ${G.red}44`,borderRadius:12,padding:28,maxWidth:420,width:"90%",textAlign:"center",animation:"fadeIn .3s"},children:[L.jsxs("div",{style:{fontSize:11,color:G.red,fontWeight:900,letterSpacing:"0.15em",marginBottom:12},children:["STEP ",C+1," OF ",$s.length]}),L.jsx("div",{style:{fontSize:15,color:G.text,lineHeight:1.6,marginBottom:20},children:$s[C].text}),L.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:[C>0&&L.jsx("button",{onClick:()=>de(b=>b-1),style:{padding:"6px 16px",fontSize:11},children:"← BACK"}),C<$s.length-1?L.jsx("button",{onClick:()=>de(b=>b+1),className:"f1-btn",style:{padding:"6px 20px",fontSize:11},children:"NEXT →"}):L.jsx("button",{onClick:()=>{D(!1);try{localStorage.setItem("f1s-toured","1")}catch{}},className:"f1-btn",style:{padding:"6px 20px",fontSize:11},children:"GOT IT 🏁"})]}),L.jsx("button",{onClick:()=>{D(!1);try{localStorage.setItem("f1s-toured","1")}catch{}},style:{marginTop:12,fontSize:10,color:G.textMuted,background:"transparent",border:"none",cursor:"pointer"},children:"Skip tour"})]})}),nl=_e&&L.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:G.carbon,border:`1px solid ${G.red}33`,borderRadius:12,padding:0,zIndex:100,width:s?"95%":480,maxHeight:"80vh",display:"flex",flexDirection:"column",animation:"fadeIn .2s",overflow:"hidden"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px 20px",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsxs("div",{children:[L.jsxs("div",{style:{fontWeight:900,fontSize:16,fontFamily:G.sans},children:["HEAD-TO-HEAD ",o]}),L.jsxs("div",{style:{fontSize:10,color:G.textMuted},children:[(oe==null?void 0:oe.name_acronym)||"D1"," vs ",(Dt==null?void 0:Dt.name_acronym)||"D2"," — Qualifying"]})]}),L.jsx("button",{onClick:()=>be(!1),style:{marginLeft:"auto"},children:"✕"})]}),L.jsx("div",{style:{overflowY:"auto",padding:"12px 20px 20px"},children:Te?Te.length===0?L.jsx("div",{style:{textAlign:"center",padding:20,color:G.textDim},children:"No data available"}):L.jsxs(L.Fragment,{children:[L.jsx("svg",{width:"100%",height:Te.length*32+20,viewBox:`0 0 300 ${Te.length*32+20}`,style:{display:"block"},children:Te.map((b,Ee)=>{const ke=b.t1-b.t2,Pt=Math.max(...Te.map(It=>Math.abs(It.t1-It.t2)))||1,Ct=Math.abs(ke)/Pt*100,Nt=Ee*32+16;return L.jsxs("g",{children:[L.jsx("text",{x:"2",y:Nt+4,fill:G.textDim,fontSize:"9",fontFamily:"sans-serif",children:b.gp}),L.jsx("rect",{x:150,y:Nt-5,width:ke<0?Ct:0,height:10,fill:Gt,opacity:"0.7",rx:"2",transform:ke<0?`translate(${-Ct},0)`:""}),L.jsx("rect",{x:150,y:Nt-5,width:ke>0?Ct:0,height:10,fill:Bt,opacity:"0.7",rx:"2"}),L.jsxs("text",{x:150,y:Nt+4,textAnchor:"middle",fill:G.text,fontSize:"8",fontWeight:"700",fontFamily:"sans-serif",children:[ke>0?"+":"",ke.toFixed(3)]})]},Ee)})}),L.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:16,marginTop:8,fontSize:11,fontFamily:G.mono},children:[L.jsxs("span",{style:{color:Gt,fontWeight:700},children:[oe==null?void 0:oe.name_acronym,": ",Te.filter(b=>b.t1<b.t2).length]}),L.jsx("span",{style:{color:G.textMuted},children:"wins"}),L.jsxs("span",{style:{color:Bt,fontWeight:700},children:[Dt==null?void 0:Dt.name_acronym,": ",Te.filter(b=>b.t2<b.t1).length]})]})]}):L.jsx("div",{style:{textAlign:"center",padding:20,color:G.textDim,fontSize:12},children:"Loading qualifying data across GPs..."})})]});return L.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:G.carbon,color:G.text,fontFamily:G.sans,overflow:"hidden"},children:[L.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${G.red}44;border-radius:2px}
        select,button{font-family:${G.sans}}
        select{background:${G.inputBg};color:${G.text};border:1px solid ${G.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${G.red}88}
        button{background:${G.cardBg};color:${G.text};border:1px solid ${G.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${G.red}88;background:${G.carbonMid}}
        .f1-btn{background:${G.red};border-color:${G.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${G.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${G.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),Yt,oi,ea,Jt,ta,nl,tl,L.jsxs("div",{style:{display:"flex",alignItems:"stretch",borderBottom:`2px solid ${G.red}`,background:`linear-gradient(180deg, #111118 0%, ${G.carbon} 100%)`,zIndex:10,position:"relative"},children:[L.jsx("div",{style:{width:s?4:5,background:G.red,flexShrink:0}}),L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:16,padding:s?"8px 10px":"0 20px",flex:1,flexWrap:"wrap",minHeight:s?"auto":48},children:[L.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:8,textDecoration:"none"},children:[L.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"F1 Stories",style:{height:s?28:34,width:"auto"},onError:b=>{b.target.style.display="none"}}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1},children:[L.jsx("span",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",letterSpacing:"0.03em"},children:"F1 STORIES"}),L.jsx("span",{style:{fontSize:s?8:9,fontWeight:400,color:G.textMuted,letterSpacing:"0.12em",textTransform:"uppercase"},children:"Ghost Car Lab"})]})]}),!s&&L.jsx("div",{style:{display:"flex",gap:4,marginLeft:8},children:[{label:"Blog",href:"https://f1stories.gr/blog-module/blog/index.html"},{label:"YouTube",href:"https://www.youtube.com/@F1_Stories_Original"},{label:"Standings",href:"https://f1stories.gr/standings/"}].map(b=>L.jsx("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",style:{fontSize:10,color:G.textDim,textDecoration:"none",padding:"3px 8px",borderRadius:3,fontWeight:600,letterSpacing:"0.05em",transition:"color 0.15s"},onMouseEnter:Ee=>Ee.target.style.color="#fff",onMouseLeave:Ee=>Ee.target.style.color=G.textDim,children:b.label.toUpperCase()},b.label))}),d&&L.jsxs("span",{style:{fontSize:11,color:G.textDim,fontWeight:600,letterSpacing:"0.05em",marginLeft:s?0:8},children:[(Fr=d.meeting_name)==null?void 0:Fr.replace("Grand Prix","GP")," ",o]}),L.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5},children:[L.jsx("button",{onClick:()=>ce(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),_&&L.jsx("button",{onClick:wt,style:{fontSize:10,padding:"4px 10px"},children:Qe||"SHARE"}),X&&L.jsx("button",{onClick:()=>pe(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),X&&L.jsx("button",{onClick:()=>Ve(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"}),X&&x&&N&&L.jsx("button",{onClick:el,style:{fontSize:10,padding:"4px 10px"},children:"H2H"}),X&&L.jsx("button",{onClick:Qa,style:{fontSize:10,padding:"4px 10px"},title:"Screenshot",children:"📸"}),!s&&L.jsx("button",{onClick:()=>ze(b=>!b),style:{fontSize:10,padding:"4px 10px",background:at?`${G.red}33`:G.cardBg,borderColor:at?G.red:G.border},title:"Auto-play showreel",children:at?"⏹":"🎬"}),L.jsx("button",{onClick:r,style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:e?"☀️":"🌙"}),!s&&L.jsx("button",{onClick:()=>Ke(!0),style:{fontSize:10,padding:"4px 8px",fontFamily:G.mono,fontWeight:900},children:"?"})]})]})]}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${G.borderLight}`,background:G.carbonLight},children:[L.jsx("select",{value:o,onChange:b=>l(Number(b.target.value)),children:[2026,2025,2024,2023].map(b=>L.jsx("option",{value:b,children:b},b))}),L.jsxs("select",{value:(d==null?void 0:d.meeting_key)||"",onChange:b=>p(f.find(Ee=>Ee.meeting_key===Number(b.target.value))||null),style:{minWidth:s?110:155},children:[L.jsx("option",{value:"",children:"Grand Prix"}),f.map(b=>L.jsx("option",{value:b.meeting_key,children:b.meeting_name},b.meeting_key))]}),L.jsxs("select",{value:(_==null?void 0:_.session_key)||"",onChange:b=>S(m.find(Ee=>Ee.session_key===Number(b.target.value))||null),disabled:!m.length,style:{minWidth:s?85:115},children:[L.jsx("option",{value:"",children:"Session"}),m.map(b=>L.jsx("option",{value:b.session_key,children:b.session_name},b.session_key))]}),!s&&L.jsx("div",{style:{width:1,height:20,background:`${G.red}33`}}),L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[L.jsx("div",{style:{width:3,height:18,background:Gt,borderRadius:1}}),L.jsxs("select",{value:x||"",onChange:b=>{y(Number(b.target.value)),B(null),xe([])},disabled:!M.length,style:{minWidth:s?68:100},children:[L.jsx("option",{value:"",children:"Driver 1"}),M.map(b=>L.jsx("option",{value:b.driver_number,children:b.name_acronym||`#${b.driver_number}`},b.driver_number))]}),$.length>0&&L.jsxs("select",{value:R||"",onChange:b=>B(Number(b.target.value)),style:{width:s?56:72},children:[L.jsx("option",{value:"",children:"Lap"}),$.filter(b=>b.lap_duration>10).map(b=>L.jsxs("option",{value:b.lap_number,children:["L",b.lap_number]},b.lap_number))]})]}),L.jsx("span",{style:{color:G.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[L.jsx("div",{style:{width:3,height:18,background:Bt,borderRadius:1}}),L.jsxs("select",{value:N||"",onChange:b=>{w(Number(b.target.value)),O(null),I([])},disabled:!M.length,style:{minWidth:s?68:100},children:[L.jsx("option",{value:"",children:"Driver 2"}),M.map(b=>L.jsx("option",{value:b.driver_number,children:b.name_acronym||`#${b.driver_number}`},b.driver_number))]}),T.length>0&&L.jsxs("select",{value:z||"",onChange:b=>O(Number(b.target.value)),style:{width:s?56:72},children:[L.jsx("option",{value:"",children:"Lap"}),T.filter(b=>b.lap_duration>10).map(b=>L.jsxs("option",{value:b.lap_number,children:["L",b.lap_number]},b.lap_number))]})]}),L.jsx("button",{className:"f1-btn",onClick:Rn,disabled:!x||!N||!R||!z||!!dt,children:dt?"...":"COMPARE"})]}),lt&&L.jsxs("div",{style:{padding:"8px 18px",background:`${G.red}11`,borderBottom:`1px solid ${G.red}22`,fontSize:12,color:G.red,display:"flex",alignItems:"center",gap:8},children:[L.jsx("span",{style:{flex:1},children:lt}),L.jsx("button",{onClick:()=>Ge(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),dt&&L.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${G.borderLight}`},children:[L.jsx("div",{style:{fontSize:11,color:G.textDim,fontFamily:G.mono,marginBottom:4},children:dt}),_t!==void 0&&L.jsx("div",{style:{height:2,background:G.borderLight,borderRadius:1,overflow:"hidden"},children:L.jsx("div",{style:{height:"100%",width:`${_t}%`,background:G.red,borderRadius:1,transition:"width .3s"}})})]}),s&&X&&L.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${G.borderLight}`},children:["3d","telemetry"].map(b=>L.jsx("button",{onClick:()=>Vt(b),style:{flex:1,borderRadius:0,borderBottom:mt===b?`2px solid ${G.red}`:"2px solid transparent",background:mt===b?G.cardBg:"transparent",fontWeight:mt===b?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:b==="3d"?"Track":"Telemetry"},b))}),L.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${X?175:130}px)`},children:[(!s||mt==="3d")&&L.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[L.jsx("div",{ref:Lt,style:{width:"100%",height:"100%",background:G.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),X&&L.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[bc.map(b=>L.jsx("button",{onClick:()=>Fe(b),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:ye===b?G.red:G.overlay,color:ye===b?"#fff":G.textDim,borderColor:ye===b?G.red:G.borderLight,fontWeight:700},children:Dw[b]},b)),L.jsx("div",{style:{width:1,height:16,background:G.borderLight}}),L.jsx("button",{onClick:()=>Ye(b=>b==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:Me==="heatmap"?"#0088ff":G.overlay,color:Me==="heatmap"?"#fff":G.textDim,borderColor:Me==="heatmap"?"#0088ff":G.borderLight,fontWeight:700},children:"🌡 Speed"})]}),X&&!s&&L.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:L.jsx(Fw,{tp:X,l1:Se,l2:j,prog:ge,c1:Gt,c2:Bt})}),er!==null&&X&&L.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:L.jsxs("div",{style:{background:G.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${G.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[L.jsx("div",{style:{fontSize:8,color:G.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),L.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:G.mono,color:er>0?G.red:G.green,lineHeight:1.1},children:[er>0?"+":"",er.toFixed(3),L.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),L.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[L.jsxs("span",{style:{fontSize:10,color:Gt,fontFamily:G.mono,fontWeight:700},children:[oe==null?void 0:oe.name_acronym," ",Tr($e==null?void 0:$e.lap_duration)]}),L.jsxs("span",{style:{fontSize:10,color:Bt,fontFamily:G.mono,fontWeight:700},children:[Dt==null?void 0:Dt.name_acronym," ",Tr(qe==null?void 0:qe.lap_duration)]})]})]})}),X&&$e&&qe&&L.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[L.jsx(_d,{s:1,t1:$e.duration_sector_1,t2:qe.duration_sector_1,c1:Gt,c2:Bt}),L.jsx(_d,{s:2,t1:$e.duration_sector_2,t2:qe.duration_sector_2,c1:Gt,c2:Bt}),L.jsx(_d,{s:3,t1:$e.duration_sector_3,t2:qe.duration_sector_3,c1:Gt,c2:Bt})]}),!X&&!dt&&L.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[L.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:60,marginBottom:16,opacity:.6},onError:b=>{b.target.style.display="none"}}),L.jsx("div",{style:{fontSize:s?14:18,fontWeight:900,color:"#fff",marginBottom:4,letterSpacing:"0.04em"},children:"GHOST CAR LAB"}),L.jsx("div",{style:{fontSize:11,color:G.red,fontWeight:600,marginBottom:14,letterSpacing:"0.1em"},children:"by F1 STORIES"}),L.jsx("div",{style:{fontSize:12,color:G.textDim,maxWidth:360,lineHeight:1.6},children:"Compare qualifying laps in 3D with real telemetry data. Select a Grand Prix, session & two drivers — or try ⚡ Presets."}),L.jsxs("div",{style:{marginTop:18,display:"flex",gap:8,justifyContent:"center"},children:[L.jsx("button",{onClick:()=>ce(!0),className:"f1-btn",style:{padding:"8px 20px",fontSize:12},children:"⚡ QUICK START"}),L.jsx("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,color:G.textDim,textDecoration:"none",padding:"8px 14px",border:`1px solid ${G.border}`,borderRadius:4,fontWeight:600},children:"f1stories.gr →"})]})]})]}),(!s&&tt&&X||s&&mt==="telemetry"&&X)&&L.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${G.borderLight}`,background:G.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:L.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[L.jsx("div",{style:{display:"flex",gap:6,marginBottom:10},children:[{di:oe,co:Gt,ct:Tt,tire:P},{di:Dt,co:Bt,ct:Mt,tire:te}].map((b,Ee)=>{var ke;return L.jsxs("div",{style:{flex:1,background:G.cardBg,borderRadius:6,padding:"8px 8px 6px",borderTop:`3px solid ${b.co}`,position:"relative",textAlign:"center"},children:[L.jsx("div",{style:{fontSize:12,fontWeight:900,color:b.co,fontFamily:G.mono,letterSpacing:"0.05em"},children:((ke=b.di)==null?void 0:ke.name_acronym)||"—"}),L.jsxs("svg",{width:"90",height:"55",viewBox:"0 0 90 55",style:{margin:"4px auto 2px"},children:[L.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:G.border,strokeWidth:"4",strokeLinecap:"round"}),L.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:b.co,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:`${Math.min(b.ct.speed,360)/360*110} 110`}),L.jsx("text",{x:"45",y:"42",textAnchor:"middle",fill:"#fff",fontSize:"18",fontWeight:"900",fontFamily:G.mono,children:Math.round(b.ct.speed)}),L.jsx("text",{x:"45",y:"52",textAnchor:"middle",fill:G.textMuted,fontSize:"7",fontFamily:G.mono,children:"KM/H"})]}),L.jsxs("div",{style:{display:"flex",gap:3,justifyContent:"center",marginTop:2},children:[L.jsxs("div",{style:{width:28,textAlign:"center"},children:[L.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:G.border,borderRadius:2,position:"relative",overflow:"hidden"},children:L.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:`${b.ct.throttle}%`,background:G.green,borderRadius:2,transition:"height 0.1s"}})}),L.jsx("div",{style:{fontSize:7,color:G.textMuted,fontFamily:G.mono,marginTop:1},children:"THR"})]}),L.jsxs("div",{style:{width:28,textAlign:"center"},children:[L.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:G.border,borderRadius:2,position:"relative",overflow:"hidden"},children:L.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:b.ct.brake>0?"100%":"0%",background:G.red,borderRadius:2,transition:"height 0.1s"}})}),L.jsx("div",{style:{fontSize:7,color:G.textMuted,fontFamily:G.mono,marginTop:1},children:"BRK"})]}),L.jsxs("div",{style:{width:28,textAlign:"center"},children:[L.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#fff",fontFamily:G.mono,lineHeight:"20px"},children:b.ct.n_gear??b.ct.gear??"—"}),L.jsx("div",{style:{fontSize:7,color:G.textMuted,fontFamily:G.mono,marginTop:1},children:"GEAR"})]})]}),b.tire&&L.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",alignItems:"center",gap:2},children:[L.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:Pw[b.tire]||"#888"}}),L.jsx("span",{style:{fontSize:8,fontFamily:G.mono,color:G.textMuted},children:b.tire})]}),b.ct.drs>=10&&L.jsx("div",{style:{position:"absolute",bottom:4,right:6,fontSize:8,fontWeight:700,color:G.green,fontFamily:G.mono,background:`${G.green}15`,padding:"1px 4px",borderRadius:2,animation:"pulse 1s infinite"},children:"DRS"})]},Ee)})}),X&&L.jsxs("div",{style:{marginBottom:10},children:[L.jsx("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"ELEVATION"}),L.jsx("svg",{width:"100%",height:"40",viewBox:"0 0 300 40",preserveAspectRatio:"none",style:{borderRadius:3,background:G.cardBg},children:(()=>{const b=X.map(It=>It.y),Ee=Math.min(...b),Pt=Math.max(...b)-Ee||1,Ct=Math.max(1,Math.floor(X.length/150));let Nt="";for(let It=0;It<X.length;It+=Ct){const xn=It/(X.length-1)*300,yn=38-(b[It]-Ee)/Pt*34;Nt+=(It===0?"M":"L")+`${xn},${yn}`}return L.jsxs(L.Fragment,{children:[L.jsx("path",{d:Nt+"L300,40L0,40Z",fill:`${G.red}15`}),L.jsx("path",{d:Nt,fill:"none",stroke:G.red,strokeWidth:"1.5",opacity:"0.6"}),L.jsx("line",{x1:ge*300,y1:"0",x2:ge*300,y2:"40",stroke:"#fff",strokeWidth:"1",opacity:"0.5"})]})})()})]}),$e&&qe&&$e.duration_sector_1&&qe.duration_sector_1&&(()=>{const b=$e.duration_sector_1,Ee=$e.duration_sector_2,ke=$e.duration_sector_3,Pt=qe.duration_sector_1,Ct=qe.duration_sector_2,Nt=qe.duration_sector_3,It=b-Pt,xn=It+(Ee-Ct),yn=xn+(ke-Nt),bn=[0,It,xn,yn],Ei=Math.max(...bn.map(Math.abs))||.5;return L.jsxs("div",{style:{marginBottom:10},children:[L.jsx("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"LAP DELTA"}),L.jsxs("svg",{width:"100%",height:"50",viewBox:"0 0 300 50",preserveAspectRatio:"none",style:{borderRadius:3,background:G.cardBg,display:"block"},children:[L.jsx("line",{x1:"0",y1:"25",x2:"300",y2:"25",stroke:G.textMuted,strokeWidth:"0.5",opacity:"0.3"}),bn.map((Fn,Sn)=>{const Vn=Sn/3*280+10,wi=25-Fn/Ei*20;return L.jsxs("g",{children:[Sn>0&&L.jsx("line",{x1:(Sn-1)/3*280+10,y1:25-bn[Sn-1]/Ei*20,x2:Vn,y2:wi,stroke:Fn<0?Gt:Bt,strokeWidth:"2"}),L.jsx("circle",{cx:Vn,cy:wi,r:"3",fill:Fn<0?Gt:Fn>0?Bt:G.textMuted}),Sn>0&&L.jsxs("text",{x:Vn,y:wi<25?wi-6:wi+12,textAnchor:"middle",fill:G.text,fontSize:"7",fontFamily:"sans-serif",fontWeight:"700",children:[Fn>0?"+":"",Fn.toFixed(3)]})]},Sn)}),["S1","S2","S3","END"].map((Fn,Sn)=>L.jsx("text",{x:Sn/3*280+10,y:"48",textAnchor:"middle",fill:G.textMuted,fontSize:"7",fontFamily:"sans-serif",children:Fn},Fn)),L.jsx("text",{x:"295",y:"10",textAnchor:"end",fill:Gt,fontSize:"7",children:oe==null?void 0:oe.name_acronym}),L.jsx("text",{x:"295",y:"45",textAnchor:"end",fill:Bt,fontSize:"7",children:Dt==null?void 0:Dt.name_acronym})]})]})})(),(le==null?void 0:le.length)>10&&(re==null?void 0:re.length)>10&&(()=>{const b=[.1,.25,.5,.75,.9],Ee=["T1 10%","T2 25%","T3 50%","T4 75%","T5 90%"];return L.jsxs("div",{style:{marginBottom:10},children:[L.jsx("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED TRAPS"}),L.jsx("div",{style:{display:"flex",gap:3,flexWrap:"wrap"},children:b.map((ke,Pt)=>{const Ct=le[Math.floor(ke*(le.length-1))]||0,Nt=re[Math.floor(ke*(re.length-1))]||0,It=Ct>Nt?1:Nt>Ct?2:0;return L.jsxs("div",{style:{flex:1,minWidth:48,background:G.cardBg,borderRadius:3,padding:"3px 4px",textAlign:"center"},children:[L.jsx("div",{style:{fontSize:7,color:G.textMuted,fontFamily:G.mono},children:Ee[Pt]}),L.jsx("div",{style:{fontSize:11,fontWeight:800,color:It===1?Gt:It===2?Bt:G.text,fontFamily:G.mono},children:Math.round(Ct)}),L.jsx("div",{style:{fontSize:11,fontWeight:800,color:It===2?Bt:It===1?Gt:G.text,fontFamily:G.mono,opacity:.7},children:Math.round(Nt)})]},Pt)})})]})})(),X&&L.jsxs("div",{style:{marginBottom:10},children:[L.jsx("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:4,fontWeight:700},children:"G-FORCE"}),L.jsx("div",{style:{display:"flex",gap:6},children:[{di:oe,co:Gt,ct:Tt,tel:W},{di:Dt,co:Bt,ct:Mt,tel:F}].map((b,Ee)=>{var hs;const ke=b.tel||[],Pt=Math.min(Math.floor(ge*(ke.length-1)),ke.length-1),Ct=ke[Math.max(0,Pt-2)]||{};ke[Math.max(0,Pt-1)];const Nt=ke[Pt]||{};ke[Math.min(Pt+1,ke.length-1)];const xn=((Nt.speed||0)-(Ct.speed||0))/3.6/(.54*9.81),yn=Pt>2?Hs(b.tel?Gs(ke.map((un,rn)=>({x:rn,y:0,z:0}))):X,Math.max(0,ge-.01)):{x:0,z:0},bn=Hs(X,ge),Ei=Hs(X,Math.min(1,ge+.01)),Fn=bn.x-yn.x,Sn=bn.z-yn.z,Vn=Ei.x-bn.x,wi=Ei.z-bn.z,Bi=(Fn*wi-Sn*Vn)*(Nt.speed||0)*4e-4,Wn=(un,rn,Or)=>Math.max(rn,Math.min(Or,un)),tr=Wn(Bi,-5,5),mi=Wn(xn,-5,5),Hi=Math.sqrt(tr*tr+mi*mi);return L.jsxs("div",{style:{flex:1,background:G.cardBg,borderRadius:6,padding:"6px 4px 4px",textAlign:"center"},children:[L.jsxs("svg",{width:"100%",height:"90",viewBox:"-6 -6 12 12",style:{display:"block"},children:[L.jsx("defs",{children:L.jsxs("radialGradient",{id:`gGrad${Ee}`,children:[L.jsx("stop",{offset:"0%",stopColor:b.co,stopOpacity:"0.06"}),L.jsx("stop",{offset:"100%",stopColor:b.co,stopOpacity:"0"})]})}),L.jsx("circle",{cx:"0",cy:"0",r:"5.5",fill:`url(#gGrad${Ee})`}),[1,2,3,4,5].map(un=>L.jsx("circle",{cx:"0",cy:"0",r:un,fill:"none",stroke:un<=2?`${G.textMuted}33`:`${G.textMuted}18`,strokeWidth:"0.06"},un)),L.jsx("line",{x1:"-5.5",y1:"0",x2:"5.5",y2:"0",stroke:G.textMuted,strokeWidth:"0.04",opacity:"0.4"}),L.jsx("line",{x1:"0",y1:"-5.5",x2:"0",y2:"5.5",stroke:G.textMuted,strokeWidth:"0.04",opacity:"0.4"}),L.jsx("text",{x:"5.3",y:"-0.3",textAnchor:"end",fill:G.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"LAT"}),L.jsx("text",{x:"0.3",y:"-5",textAnchor:"start",fill:G.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"ACC"}),L.jsx("text",{x:"0.3",y:"5.5",textAnchor:"start",fill:G.textMuted,fontSize:"0.7",fontFamily:"sans-serif",opacity:"0.6",children:"BRK"}),Hi>.2&&L.jsx("circle",{cx:"0",cy:"0",r:Math.min(Hi,5),fill:"none",stroke:b.co,strokeWidth:"0.08",opacity:"0.25"}),[.92,.84,.76,.68].map((un,rn)=>{const Or=Math.max(0,Math.floor((ge-(rn+1)*.003)*(ke.length-1))),ps=ke[Or]||{},Qc=ke[Math.max(0,Or-2)]||{},ia=((ps.speed||0)-(Qc.speed||0))/3.6/(.54*9.81);return L.jsx("circle",{cx:Wn(Bi*un,-5,5),cy:Wn(-ia,-5,5),r:.25-rn*.04,fill:b.co,opacity:.15+rn*-.03},rn)}),L.jsx("circle",{cx:Wn(tr,-5,5),cy:Wn(-mi,-5,5),r:"0.4",fill:b.co,opacity:"0.9"}),L.jsx("circle",{cx:Wn(tr,-5,5),cy:Wn(-mi,-5,5),r:"0.6",fill:"none",stroke:b.co,strokeWidth:"0.08",opacity:"0.4"})]}),L.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:2},children:[L.jsxs("span",{style:{fontSize:13,fontWeight:900,color:b.co,fontFamily:G.mono},children:[Hi.toFixed(1),L.jsx("span",{style:{fontSize:8,fontWeight:400,color:G.textMuted},children:"G"})]}),L.jsx("span",{style:{fontSize:9,color:G.textDim,fontFamily:G.mono,alignSelf:"center"},children:((hs=b.di)==null?void 0:hs.name_acronym)||"—"})]})]},Ee)})})]}),L.jsxs("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:["SPEED ",L.jsx("span",{style:{color:G.textMuted,fontWeight:400},children:"(km/h)"})]}),L.jsx(vd,{data1:le,data2:re,color1:Gt,color2:Bt,maxVal:370,prog:ge}),L.jsxs("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:["THROTTLE ",L.jsx("span",{style:{color:G.textMuted,fontWeight:400},children:"(%)"})]}),L.jsx(vd,{data1:We,data2:ct,color1:Gt,color2:Bt,maxVal:100,prog:ge,fillColor:`${G.green}10`}),L.jsx("div",{style:{fontSize:10,color:G.textMuted,fontFamily:G.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),L.jsx(vd,{data1:pt,data2:Ze,color1:Gt,color2:Bt,maxVal:100,h:35,prog:ge,fillColor:`${G.red}10`})]})})]}),X&&L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${G.carbonLight}, ${G.carbon})`,borderTop:`1px solid ${G.red}22`},children:[L.jsx("button",{onClick:()=>{De(0),Le(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),L.jsx("button",{onClick:()=>Le(!Ne),style:{padding:"3px 9px",fontSize:13,background:Ne?`${G.red}33`:G.cardBg,borderColor:Ne?G.red:G.border},children:Ne?"⏸":"▶"}),L.jsx("button",{onClick:()=>Ue(!H),style:{padding:"3px 7px",opacity:H?1:.35,fontSize:11},children:"🔁"}),L.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:ge,onChange:b=>De(parseFloat(b.target.value)),style:{flex:1,height:4,accentColor:G.red}}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[L.jsx("span",{style:{fontSize:10,color:Gt,fontFamily:G.mono,fontWeight:700,lineHeight:1.2},children:Tr(si)}),L.jsx("span",{style:{fontSize:10,color:Bt,fontFamily:G.mono,fontWeight:700,lineHeight:1.2},children:Tr(Lr)})]}),L.jsxs("select",{value:ot,onChange:b=>et(parseFloat(b.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[L.jsx("option",{value:.25,children:".25x"}),L.jsx("option",{value:.5,children:".5x"}),L.jsx("option",{value:1,children:"1x"}),L.jsx("option",{value:2,children:"2x"}),L.jsx("option",{value:4,children:"4x"})]}),!s&&L.jsx("button",{onClick:()=>ft(!tt),style:{padding:"3px 7px",fontSize:10,opacity:tt?1:.35},children:"📊"})]}),L.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:s?8:16,padding:"8px 18px",background:G.carbon,borderTop:`1px solid ${G.borderLight}`,flexWrap:"wrap"},children:[L.jsxs("a",{href:"https://f1stories.gr/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:6,textDecoration:"none"},children:[L.jsx("img",{src:"https://f1stories.gr/images/logo.png",alt:"",style:{height:18},onError:b=>{b.target.style.display="none"}}),L.jsx("span",{style:{fontSize:10,color:G.textDim,fontWeight:600},children:"f1stories.gr"})]}),L.jsx("span",{style:{fontSize:9,color:G.textMuted},children:"•"}),L.jsx("span",{style:{fontSize:9,color:G.textMuted,fontFamily:G.mono},children:"Data by OpenF1 API"}),L.jsx("span",{style:{fontSize:9,color:G.textMuted},children:"•"}),L.jsxs("span",{style:{fontSize:9,color:G.textMuted},children:["© ",new Date().getFullYear()," F1 Stories"]})]})]})}R_.createRoot(document.getElementById("root")).render(L.jsx(S_.StrictMode,{children:L.jsx(Ow,{})}));
