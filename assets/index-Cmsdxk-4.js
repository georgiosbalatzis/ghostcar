(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Eg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wc={exports:{}},ea={},Xc={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function U_(){if(bp)return bt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(D,j,Me){this.props=D,this.context=j,this.refs=w,this.updater=Me||S}x.prototype.isReactComponent={},x.prototype.setState=function(D,j){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,j,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=x.prototype;function I(D,j,Me){this.props=D,this.context=j,this.refs=w,this.updater=Me||S}var R=I.prototype=new v;R.constructor=I,E(R,x.prototype),R.isPureReactComponent=!0;var b=Array.isArray,B=Object.prototype.hasOwnProperty,k={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function Z(D,j,Me){var Y,ae={},xe=null,Oe=null;if(j!=null)for(Y in j.ref!==void 0&&(Oe=j.ref),j.key!==void 0&&(xe=""+j.key),j)B.call(j,Y)&&!P.hasOwnProperty(Y)&&(ae[Y]=j[Y]);var De=arguments.length-2;if(De===1)ae.children=Me;else if(1<De){for(var Ae=Array(De),lt=0;lt<De;lt++)Ae[lt]=arguments[lt+2];ae.children=Ae}if(D&&D.defaultProps)for(Y in De=D.defaultProps,De)ae[Y]===void 0&&(ae[Y]=De[Y]);return{$$typeof:s,type:D,key:xe,ref:Oe,props:ae,_owner:k.current}}function me(D,j){return{$$typeof:s,type:D.type,key:j,ref:D.ref,props:D.props,_owner:D._owner}}function A(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function U(D){var j={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Me){return j[Me]})}var pe=/\/+/g;function fe(D,j){return typeof D=="object"&&D!==null&&D.key!=null?U(""+D.key):j.toString(36)}function G(D,j,Me,Y,ae){var xe=typeof D;(xe==="undefined"||xe==="boolean")&&(D=null);var Oe=!1;if(D===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(D.$$typeof){case s:case e:Oe=!0}}if(Oe)return Oe=D,ae=ae(Oe),D=Y===""?"."+fe(Oe,0):Y,b(ae)?(Me="",D!=null&&(Me=D.replace(pe,"$&/")+"/"),G(ae,j,Me,"",function(lt){return lt})):ae!=null&&(A(ae)&&(ae=me(ae,Me+(!ae.key||Oe&&Oe.key===ae.key?"":(""+ae.key).replace(pe,"$&/")+"/")+D)),j.push(ae)),1;if(Oe=0,Y=Y===""?".":Y+":",b(D))for(var De=0;De<D.length;De++){xe=D[De];var Ae=Y+fe(xe,De);Oe+=G(xe,j,Me,Ae,ae)}else if(Ae=y(D),typeof Ae=="function")for(D=Ae.call(D),De=0;!(xe=D.next()).done;)xe=xe.value,Ae=Y+fe(xe,De++),Oe+=G(xe,j,Me,Ae,ae);else if(xe==="object")throw j=String(D),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Oe}function K(D,j,Me){if(D==null)return D;var Y=[],ae=0;return G(D,Y,"","",function(xe){return j.call(Me,xe,ae++)}),Y}function ie(D){if(D._status===-1){var j=D._result;j=j(),j.then(function(Me){(D._status===0||D._status===-1)&&(D._status=1,D._result=Me)},function(Me){(D._status===0||D._status===-1)&&(D._status=2,D._result=Me)}),D._status===-1&&(D._status=0,D._result=j)}if(D._status===1)return D._result.default;throw D._result}var ee={current:null},O={transition:null},Q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function $(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:K,forEach:function(D,j,Me){K(D,function(){j.apply(this,arguments)},Me)},count:function(D){var j=0;return K(D,function(){j++}),j},toArray:function(D){return K(D,function(j){return j})||[]},only:function(D){if(!A(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=x,bt.Fragment=t,bt.Profiler=a,bt.PureComponent=I,bt.StrictMode=r,bt.Suspense=h,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,bt.act=$,bt.cloneElement=function(D,j,Me){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Y=E({},D.props),ae=D.key,xe=D.ref,Oe=D._owner;if(j!=null){if(j.ref!==void 0&&(xe=j.ref,Oe=k.current),j.key!==void 0&&(ae=""+j.key),D.type&&D.type.defaultProps)var De=D.type.defaultProps;for(Ae in j)B.call(j,Ae)&&!P.hasOwnProperty(Ae)&&(Y[Ae]=j[Ae]===void 0&&De!==void 0?De[Ae]:j[Ae])}var Ae=arguments.length-2;if(Ae===1)Y.children=Me;else if(1<Ae){De=Array(Ae);for(var lt=0;lt<Ae;lt++)De[lt]=arguments[lt+2];Y.children=De}return{$$typeof:s,type:D.type,key:ae,ref:xe,props:Y,_owner:Oe}},bt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},bt.createElement=Z,bt.createFactory=function(D){var j=Z.bind(null,D);return j.type=D,j},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:c,render:D}},bt.isValidElement=A,bt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ie}},bt.memo=function(D,j){return{$$typeof:p,type:D,compare:j===void 0?null:j}},bt.startTransition=function(D){var j=O.transition;O.transition={};try{D()}finally{O.transition=j}},bt.unstable_act=$,bt.useCallback=function(D,j){return ee.current.useCallback(D,j)},bt.useContext=function(D){return ee.current.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D){return ee.current.useDeferredValue(D)},bt.useEffect=function(D,j){return ee.current.useEffect(D,j)},bt.useId=function(){return ee.current.useId()},bt.useImperativeHandle=function(D,j,Me){return ee.current.useImperativeHandle(D,j,Me)},bt.useInsertionEffect=function(D,j){return ee.current.useInsertionEffect(D,j)},bt.useLayoutEffect=function(D,j){return ee.current.useLayoutEffect(D,j)},bt.useMemo=function(D,j){return ee.current.useMemo(D,j)},bt.useReducer=function(D,j,Me){return ee.current.useReducer(D,j,Me)},bt.useRef=function(D){return ee.current.useRef(D)},bt.useState=function(D){return ee.current.useState(D)},bt.useSyncExternalStore=function(D,j,Me){return ee.current.useSyncExternalStore(D,j,Me)},bt.useTransition=function(){return ee.current.useTransition()},bt.version="18.3.1",bt}var Pp;function Kf(){return Pp||(Pp=1,Xc.exports=U_()),Xc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function N_(){if(Lp)return ea;Lp=1;var s=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var _,g={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:c,key:y,ref:S,props:g,_owner:a.current}}return ea.Fragment=t,ea.jsx=f,ea.jsxs=f,ea}var Dp;function F_(){return Dp||(Dp=1,Wc.exports=N_()),Wc.exports}var q=F_(),Ce=Kf();const O_=Eg(Ce);var xl={},jc={exports:{}},$n={},qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function z_(){return Ip||(Ip=1,(function(s){function e(O,Q){var $=O.length;O.push(Q);e:for(;0<$;){var D=$-1>>>1,j=O[D];if(0<a(j,Q))O[D]=Q,O[$]=j,$=D;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Q=O[0],$=O.pop();if($!==Q){O[0]=$;e:for(var D=0,j=O.length,Me=j>>>1;D<Me;){var Y=2*(D+1)-1,ae=O[Y],xe=Y+1,Oe=O[xe];if(0>a(ae,$))xe<j&&0>a(Oe,ae)?(O[D]=Oe,O[xe]=$,D=xe):(O[D]=ae,O[Y]=$,D=Y);else if(xe<j&&0>a(Oe,$))O[D]=Oe,O[xe]=$,D=xe;else break e}}return Q}function a(O,Q){var $=O.sortIndex-Q.sortIndex;return $!==0?$:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],p=[],_=1,g=null,y=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(O){for(var Q=t(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=O)r(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=t(p)}}function b(O){if(w=!1,R(O),!E)if(t(h)!==null)E=!0,ie(B);else{var Q=t(p);Q!==null&&ee(b,Q.startTime-O)}}function B(O,Q){E=!1,w&&(w=!1,v(Z),Z=-1),S=!0;var $=y;try{for(R(Q),g=t(h);g!==null&&(!(g.expirationTime>Q)||O&&!U());){var D=g.callback;if(typeof D=="function"){g.callback=null,y=g.priorityLevel;var j=D(g.expirationTime<=Q);Q=s.unstable_now(),typeof j=="function"?g.callback=j:g===t(h)&&r(h),R(Q)}else r(h);g=t(h)}if(g!==null)var Me=!0;else{var Y=t(p);Y!==null&&ee(b,Y.startTime-Q),Me=!1}return Me}finally{g=null,y=$,S=!1}}var k=!1,P=null,Z=-1,me=5,A=-1;function U(){return!(s.unstable_now()-A<me)}function pe(){if(P!==null){var O=s.unstable_now();A=O;var Q=!0;try{Q=P(!0,O)}finally{Q?fe():(k=!1,P=null)}}else k=!1}var fe;if(typeof I=="function")fe=function(){I(pe)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,K=G.port2;G.port1.onmessage=pe,fe=function(){K.postMessage(null)}}else fe=function(){x(pe,0)};function ie(O){P=O,k||(k=!0,fe())}function ee(O,Q){Z=x(function(){O(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ie(B))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var $=y;y=Q;try{return O()}finally{y=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=y;y=O;try{return Q()}finally{y=$}},s.unstable_scheduleCallback=function(O,Q,$){var D=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?D+$:D):$=D,O){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=$+j,O={id:_++,callback:Q,priorityLevel:O,startTime:$,expirationTime:j,sortIndex:-1},$>D?(O.sortIndex=$,e(p,O),t(h)===null&&O===t(p)&&(w?(v(Z),Z=-1):w=!0,ee(b,$-D))):(O.sortIndex=j,e(h,O),E||S||(E=!0,ie(B))),O},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(O){var Q=y;return function(){var $=y;y=Q;try{return O.apply(this,arguments)}finally{y=$}}}})(Yc)),Yc}var Up;function k_(){return Up||(Up=1,qc.exports=z_()),qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function B_(){if(Np)return $n;Np=1;var s=Kf(),e=k_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,I);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,I);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),k=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),U=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),O=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,D;function j(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Me=!1;function Y(n,i){if(!n||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){u=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}n()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,N=m.length-1;1<=M&&0<=N&&d[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(d[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||d[M]!==m[N]){var V=`
`+d[M].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=M&&0<=N);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?j(n):""}function ae(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case k:return"Portal";case me:return"Profiler";case Z:return"StrictMode";case fe:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case pe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function Oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=lt(n))}function te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Je(n,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ut(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=De(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function xt(n,i){Be(n,i);var o=De(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,o):i.hasOwnProperty("defaultValue")&&ht(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function qe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ht(n,i,o){(i!=="number"||Ft(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Mt=Array.isArray;function L(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function he(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Mt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:De(o)}}function _e(n,i){var o=De(i.value),u=De(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Te(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Se(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Se(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tt,Ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(tt=tt||document.createElement("div"),tt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=tt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ue(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Nt(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Nt(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var $e=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ne(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nt=null;function je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,F=null,se=null;function H(n){if(n=ko(n)){if(typeof ye!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),ye(n.stateNode,n.type,i))}}function ge(n){F?se?se.push(n):se=[n]:F=n}function ve(){if(F){var n=F,i=se;if(se=F=null,H(n),i)for(n=0;n<i.length;n++)H(i[n])}}function ke(n,i){return n(i)}function ft(){}var Ct=!1;function wt(n,i,o){if(Ct)return n(i,o);Ct=!0;try{return ke(n,i,o)}finally{Ct=!1,(F!==null||se!==null)&&(ft(),ve())}}function pt(n,i){var o=n.stateNode;if(o===null)return null;var u=Ua(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var zt=!1;if(c)try{var an={};Object.defineProperty(an,"passive",{get:function(){zt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{zt=!1}function Pi(n,i,o,u,d,m,M,N,V){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(we){this.onError(we)}}var gi=!1,Dn=null,Qn=!1,mn=null,It={onError:function(n){gi=!0,Dn=n}};function wn(n,i,o,u,d,m,M,N,V){gi=!1,Dn=null,Pi.apply(It,arguments)}function Or(n,i,o,u,d,m,M,N,V){if(wn.apply(this,arguments),gi){if(gi){var ue=Dn;gi=!1,Dn=null}else throw Error(t(198));Qn||(Qn=!0,mn=ue)}}function In(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function hs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(In(n)!==n)throw Error(t(188))}function J(n){var i=n.alternate;if(!i){if(i=In(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return C(d),n;if(m===u)return C(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,N=d.child;N;){if(N===o){M=!0,o=d,u=m;break}if(N===u){M=!0,u=d,o=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===o){M=!0,o=m,u=d;break}if(N===u){M=!0,u=m,o=d;break}N=N.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ce(n){return n=J(n),n!==null?de(n):null}function de(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=de(n);if(i!==null)return i;n=n.sibling}return null}var le=e.unstable_scheduleCallback,He=e.unstable_cancelCallback,et=e.unstable_shouldYield,st=e.unstable_requestPaint,Ve=e.unstable_now,yt=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,mt=e.unstable_UserBlockingPriority,Ot=e.unstable_NormalPriority,gn=e.unstable_LowPriority,$t=e.unstable_IdlePriority,Sn=null,Pt=null;function vt(n){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Sn,n,void 0,(n.current.flags&128)===128)}catch{}}var z=Math.clz32?Math.clz32:Gt,Pe=Math.log,Ze=Math.LN2;function Gt(n){return n>>>=0,n===0?32:31-(Pe(n)/Ze|0)|0}var Tt=64,kt=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ln(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var N=M&~d;N!==0?u=St(N):(m&=M,m!==0&&(u=St(m)))}else M=o&~d,M!==0?u=St(M):m!==0&&(u=St(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-z(i),d=1<<o,u|=n[o],i&=~d;return u}function Un(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-z(m),N=1<<M,V=d[M];V===-1?((N&o)===0||(N&u)!==0)&&(d[M]=Un(N,i)):V<=i&&(n.expiredLanes|=N),m&=~N}}function ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Li(){var n=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),n}function Nn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function li(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-z(i),n[i]=o}function mu(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-z(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function xo(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-z(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Lt=0;function yo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var So,zr,Mo,_a,va,Fn=!1,xa=[],rr=null,sr=null,or=null,Eo=new Map,wo=new Map,ar=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(i.pointerId)}}function To(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ko(i),i!==null&&zr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function i0(n,i,o,u,d){switch(i){case"focusin":return rr=To(rr,n,i,o,u,d),!0;case"dragenter":return sr=To(sr,n,i,o,u,d),!0;case"mouseover":return or=To(or,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return Eo.set(m,To(Eo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,wo.set(m,To(wo.get(m)||null,n,i,o,u,d)),!0}return!1}function hd(n){var i=kr(n.target);if(i!==null){var o=In(i);if(o!==null){if(i=o.tag,i===13){if(i=hs(o),i!==null){n.blockedOn=i,va(n.priority,function(){Mo(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ya(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=_u(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);nt=u,o.target.dispatchEvent(u),nt=null}else return i=ko(o),i!==null&&zr(i),n.blockedOn=o,!1;i.shift()}return!0}function pd(n,i,o){ya(n)&&o.delete(i)}function r0(){Fn=!1,rr!==null&&ya(rr)&&(rr=null),sr!==null&&ya(sr)&&(sr=null),or!==null&&ya(or)&&(or=null),Eo.forEach(pd),wo.forEach(pd)}function Ao(n,i){n.blockedOn===i&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,r0)))}function Ro(n){function i(d){return Ao(d,n)}if(0<xa.length){Ao(xa[0],n);for(var o=1;o<xa.length;o++){var u=xa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&Ao(rr,n),sr!==null&&Ao(sr,n),or!==null&&Ao(or,n),Eo.forEach(i),wo.forEach(i),o=0;o<ar.length;o++)u=ar[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)hd(o),o.blockedOn===null&&ar.shift()}var ps=b.ReactCurrentBatchConfig,Sa=!0;function s0(n,i,o,u){var d=Lt,m=ps.transition;ps.transition=null;try{Lt=1,gu(n,i,o,u)}finally{Lt=d,ps.transition=m}}function o0(n,i,o,u){var d=Lt,m=ps.transition;ps.transition=null;try{Lt=4,gu(n,i,o,u)}finally{Lt=d,ps.transition=m}}function gu(n,i,o,u){if(Sa){var d=_u(n,i,o,u);if(d===null)Uu(n,i,u,Ma,o),dd(n,u);else if(i0(d,n,i,o,u))u.stopPropagation();else if(dd(n,u),i&4&&-1<n0.indexOf(n)){for(;d!==null;){var m=ko(d);if(m!==null&&So(m),m=_u(n,i,o,u),m===null&&Uu(n,i,u,Ma,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Uu(n,i,u,null,o)}}var Ma=null;function _u(n,i,o,u){if(Ma=null,n=je(u),n=kr(n),n!==null)if(i=In(n),i===null)n=null;else if(o=i.tag,o===13){if(n=hs(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ma=n,null}function md(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yt()){case dt:return 1;case mt:return 4;case Ot:case gn:return 16;case $t:return 536870912;default:return 16}default:return 16}}var lr=null,vu=null,Ea=null;function gd(){if(Ea)return Ea;var n,i=vu,o=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return Ea=d.slice(n,1<u?1-u:void 0)}function wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ta(){return!0}function _d(){return!1}function Jn(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ta:_d,this.isPropagationStopped=_d,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Jn(ms),Co=$({},ms,{view:0,detail:0}),a0=Jn(Co),yu,Su,bo,Aa=$({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bo&&(bo&&n.type==="mousemove"?(yu=n.screenX-bo.screenX,Su=n.screenY-bo.screenY):Su=yu=0,bo=n),yu)},movementY:function(n){return"movementY"in n?n.movementY:Su}}),vd=Jn(Aa),l0=$({},Aa,{dataTransfer:0}),u0=Jn(l0),c0=$({},Co,{relatedTarget:0}),Mu=Jn(c0),f0=$({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=Jn(f0),h0=$({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p0=Jn(h0),m0=$({},ms,{data:0}),xd=Jn(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=v0[n])?!!i[n]:!1}function Eu(){return x0}var y0=$({},Co,{key:function(n){if(n.key){var i=g0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),S0=Jn(y0),M0=$({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Jn(M0),E0=$({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),w0=Jn(E0),T0=$({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=Jn(T0),R0=$({},Aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=Jn(R0),b0=[9,13,27,32],wu=c&&"CompositionEvent"in window,Po=null;c&&"documentMode"in document&&(Po=document.documentMode);var P0=c&&"TextEvent"in window&&!Po,Sd=c&&(!wu||Po&&8<Po&&11>=Po),Md=" ",Ed=!1;function wd(n,i){switch(n){case"keyup":return b0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function L0(n,i){switch(n){case"compositionend":return Td(i);case"keypress":return i.which!==32?null:(Ed=!0,Md);case"textInput":return n=i.data,n===Md&&Ed?null:n;default:return null}}function D0(n,i){if(gs)return n==="compositionend"||!wu&&wd(n,i)?(n=gd(),Ea=vu=lr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sd&&i.locale!=="ko"?null:i.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!I0[n.type]:i==="textarea"}function Rd(n,i,o,u){ge(u),i=La(i,"onChange"),0<i.length&&(o=new xu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Lo=null,Do=null;function U0(n){Xd(n,0)}function Ra(n){var i=Ss(n);if(te(i))return n}function N0(n,i){if(n==="change")return i}var Cd=!1;if(c){var Tu;if(c){var Au="oninput"in document;if(!Au){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Au=typeof bd.oninput=="function"}Tu=Au}else Tu=!1;Cd=Tu&&(!document.documentMode||9<document.documentMode)}function Pd(){Lo&&(Lo.detachEvent("onpropertychange",Ld),Do=Lo=null)}function Ld(n){if(n.propertyName==="value"&&Ra(Do)){var i=[];Rd(i,Do,n,je(n)),wt(U0,i)}}function F0(n,i,o){n==="focusin"?(Pd(),Lo=i,Do=o,Lo.attachEvent("onpropertychange",Ld)):n==="focusout"&&Pd()}function O0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ra(Do)}function z0(n,i){if(n==="click")return Ra(i)}function k0(n,i){if(n==="input"||n==="change")return Ra(i)}function B0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:B0;function Io(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!_i(n[d],i[d]))return!1}return!0}function Dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Id(n,i){var o=Dd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Dd(o)}}function Ud(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ud(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Nd(){for(var n=window,i=Ft();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ft(n.document)}return i}function Ru(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function H0(n){var i=Nd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ud(o.ownerDocument.documentElement,o)){if(u!==null&&Ru(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Id(o,m);var M=Id(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G0=c&&"documentMode"in document&&11>=document.documentMode,_s=null,Cu=null,Uo=null,bu=!1;function Fd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bu||_s==null||_s!==Ft(u)||(u=_s,"selectionStart"in u&&Ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Uo&&Io(Uo,u)||(Uo=u,u=La(Cu,"onSelect"),0<u.length&&(i=new xu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=_s)))}function Ca(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Pu={},Od={};c&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function ba(n){if(Pu[n])return Pu[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Od)return Pu[n]=i[o];return n}var zd=ba("animationend"),kd=ba("animationiteration"),Bd=ba("animationstart"),Hd=ba("transitionend"),Gd=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Gd.set(n,i),l(i,[n])}for(var Lu=0;Lu<Vd.length;Lu++){var Du=Vd[Lu],V0=Du.toLowerCase(),W0=Du[0].toUpperCase()+Du.slice(1);ur(V0,"on"+W0)}ur(zd,"onAnimationEnd"),ur(kd,"onAnimationIteration"),ur(Bd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Hd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Wd(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Or(u,i,void 0,n),n.currentTarget=null}function Xd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var N=u[M],V=N.instance,ue=N.currentTarget;if(N=N.listener,V!==m&&d.isPropagationStopped())break e;Wd(d,N,ue),m=V}else for(M=0;M<u.length;M++){if(N=u[M],V=N.instance,ue=N.currentTarget,N=N.listener,V!==m&&d.isPropagationStopped())break e;Wd(d,N,ue),m=V}}}if(Qn)throw n=mn,Qn=!1,mn=null,n}function Xt(n,i){var o=i[Bu];o===void 0&&(o=i[Bu]=new Set);var u=n+"__bubble";o.has(u)||(jd(i,n,2,!1),o.add(u))}function Iu(n,i,o){var u=0;i&&(u|=4),jd(o,n,u,i)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Pa]){n[Pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(X0.has(o)||Iu(o,!1,n),Iu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pa]||(i[Pa]=!0,Iu("selectionchange",!1,i))}}function jd(n,i,o,u){switch(md(i)){case 1:var d=s0;break;case 4:d=o0;break;default:d=gu}o=d.bind(null,i,o,n),d=void 0,!zt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Uu(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var V=M.tag;if((V===3||V===4)&&(V=M.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;M=M.return}for(;N!==null;){if(M=kr(N),M===null)return;if(V=M.tag,V===5||V===6){u=m=M;continue e}N=N.parentNode}}u=u.return}wt(function(){var ue=m,we=je(o),Re=[];e:{var Ee=Gd.get(n);if(Ee!==void 0){var We=xu,Ye=n;switch(n){case"keypress":if(wa(o)===0)break e;case"keydown":case"keyup":We=S0;break;case"focusin":Ye="focus",We=Mu;break;case"focusout":Ye="blur",We=Mu;break;case"beforeblur":case"afterblur":We=Mu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=w0;break;case zd:case kd:case Bd:We=d0;break;case Hd:We=A0;break;case"scroll":We=a0;break;case"wheel":We=C0;break;case"copy":case"cut":case"paste":We=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=yd}var Ke=(i&4)!==0,on=!Ke&&n==="scroll",ne=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var X=ue,re;X!==null;){re=X;var Le=re.stateNode;if(re.tag===5&&Le!==null&&(re=Le,ne!==null&&(Le=pt(X,ne),Le!=null&&Ke.push(Oo(X,Le,re)))),on)break;X=X.return}0<Ke.length&&(Ee=new We(Ee,Ye,null,o,we),Re.push({event:Ee,listeners:Ke}))}}if((i&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",Ee&&o!==nt&&(Ye=o.relatedTarget||o.fromElement)&&(kr(Ye)||Ye[Bi]))break e;if((We||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,We?(Ye=o.relatedTarget||o.toElement,We=ue,Ye=Ye?kr(Ye):null,Ye!==null&&(on=In(Ye),Ye!==on||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(We=null,Ye=ue),We!==Ye)){if(Ke=vd,Le="onMouseLeave",ne="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=yd,Le="onPointerLeave",ne="onPointerEnter",X="pointer"),on=We==null?Ee:Ss(We),re=Ye==null?Ee:Ss(Ye),Ee=new Ke(Le,X+"leave",We,o,we),Ee.target=on,Ee.relatedTarget=re,Le=null,kr(we)===ue&&(Ke=new Ke(ne,X+"enter",Ye,o,we),Ke.target=re,Ke.relatedTarget=on,Le=Ke),on=Le,We&&Ye)t:{for(Ke=We,ne=Ye,X=0,re=Ke;re;re=xs(re))X++;for(re=0,Le=ne;Le;Le=xs(Le))re++;for(;0<X-re;)Ke=xs(Ke),X--;for(;0<re-X;)ne=xs(ne),re--;for(;X--;){if(Ke===ne||ne!==null&&Ke===ne.alternate)break t;Ke=xs(Ke),ne=xs(ne)}Ke=null}else Ke=null;We!==null&&qd(Re,Ee,We,Ke,!1),Ye!==null&&on!==null&&qd(Re,on,Ye,Ke,!0)}}e:{if(Ee=ue?Ss(ue):window,We=Ee.nodeName&&Ee.nodeName.toLowerCase(),We==="select"||We==="input"&&Ee.type==="file")var Qe=N0;else if(Ad(Ee))if(Cd)Qe=k0;else{Qe=O0;var ot=F0}else(We=Ee.nodeName)&&We.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Qe=z0);if(Qe&&(Qe=Qe(n,ue))){Rd(Re,Qe,o,we);break e}ot&&ot(n,Ee,ue),n==="focusout"&&(ot=Ee._wrapperState)&&ot.controlled&&Ee.type==="number"&&ht(Ee,"number",Ee.value)}switch(ot=ue?Ss(ue):window,n){case"focusin":(Ad(ot)||ot.contentEditable==="true")&&(_s=ot,Cu=ue,Uo=null);break;case"focusout":Uo=Cu=_s=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Fd(Re,o,we);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Fd(Re,o,we)}var at;if(wu)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else gs?wd(n,o)&&(gt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(Sd&&o.locale!=="ko"&&(gs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&gs&&(at=gd()):(lr=we,vu="value"in lr?lr.value:lr.textContent,gs=!0)),ot=La(ue,gt),0<ot.length&&(gt=new xd(gt,n,null,o,we),Re.push({event:gt,listeners:ot}),at?gt.data=at:(at=Td(o),at!==null&&(gt.data=at)))),(at=P0?L0(n,o):D0(n,o))&&(ue=La(ue,"onBeforeInput"),0<ue.length&&(we=new xd("onBeforeInput","beforeinput",null,o,we),Re.push({event:we,listeners:ue}),we.data=at))}Xd(Re,i)})}function Oo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function La(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=pt(n,o),m!=null&&u.unshift(Oo(n,m,d)),m=pt(n,i),m!=null&&u.push(Oo(n,m,d))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qd(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var N=o,V=N.alternate,ue=N.stateNode;if(V!==null&&V===u)break;N.tag===5&&ue!==null&&(N=ue,d?(V=pt(o,m),V!=null&&M.unshift(Oo(o,V,N))):d||(V=pt(o,m),V!=null&&M.push(Oo(o,V,N)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var j0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Yd(n){return(typeof n=="string"?n:""+n).replace(j0,`
`).replace(q0,"")}function Da(n,i,o){if(i=Yd(i),Yd(n)!==i&&o)throw Error(t(425))}function Ia(){}var Nu=null,Fu=null;function Ou(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(n){return $d.resolve(null).then(n).catch(K0)}:zu;function K0(n){setTimeout(function(){throw n})}function ku(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Ro(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Ro(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Kd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Di="__reactFiber$"+ys,zo="__reactProps$"+ys,Bi="__reactContainer$"+ys,Bu="__reactEvents$"+ys,Z0="__reactListeners$"+ys,Q0="__reactHandles$"+ys;function kr(n){var i=n[Di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Bi]||o[Di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Kd(n);n!==null;){if(o=n[Di])return o;n=Kd(n)}return i}n=o,o=n.parentNode}return null}function ko(n){return n=n[Di]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[zo]||null}var Hu=[],Ms=-1;function fr(n){return{current:n}}function jt(n){0>Ms||(n.current=Hu[Ms],Hu[Ms]=null,Ms--)}function Vt(n,i){Ms++,Hu[Ms]=n.current,n.current=i}var dr={},Tn=fr(dr),Wn=fr(!1),Br=dr;function Es(n,i){var o=n.type.contextTypes;if(!o)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xn(n){return n=n.childContextTypes,n!=null}function Na(){jt(Wn),jt(Tn)}function Zd(n,i,o){if(Tn.current!==dr)throw Error(t(168));Vt(Tn,i),Vt(Wn,o)}function Qd(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Oe(n)||"Unknown",d));return $({},o,u)}function Fa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Br=Tn.current,Vt(Tn,n),Vt(Wn,Wn.current),!0}function Jd(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Qd(n,i,Br),u.__reactInternalMemoizedMergedChildContext=n,jt(Wn),jt(Tn),Vt(Tn,n)):jt(Wn),Vt(Wn,o)}var Hi=null,Oa=!1,Gu=!1;function eh(n){Hi===null?Hi=[n]:Hi.push(n)}function J0(n){Oa=!0,eh(n)}function hr(){if(!Gu&&Hi!==null){Gu=!0;var n=0,i=Lt;try{var o=Hi;for(Lt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Hi=null,Oa=!1}catch(d){throw Hi!==null&&(Hi=Hi.slice(n+1)),le(dt,hr),d}finally{Lt=i,Gu=!1}}return null}var ws=[],Ts=0,za=null,ka=0,ui=[],ci=0,Hr=null,Gi=1,Vi="";function Gr(n,i){ws[Ts++]=ka,ws[Ts++]=za,za=n,ka=i}function th(n,i,o){ui[ci++]=Gi,ui[ci++]=Vi,ui[ci++]=Hr,Hr=n;var u=Gi;n=Vi;var d=32-z(u)-1;u&=~(1<<d),o+=1;var m=32-z(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Gi=1<<32-z(i)+d|o<<d|u,Vi=m+n}else Gi=1<<m|o<<d|u,Vi=n}function Vu(n){n.return!==null&&(Gr(n,1),th(n,1,0))}function Wu(n){for(;n===za;)za=ws[--Ts],ws[Ts]=null,ka=ws[--Ts],ws[Ts]=null;for(;n===Hr;)Hr=ui[--ci],ui[ci]=null,Vi=ui[--ci],ui[ci]=null,Gi=ui[--ci],ui[ci]=null}var ei=null,ti=null,Kt=!1,vi=null;function nh(n,i){var o=pi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ih(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Hr!==null?{id:Gi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function Xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ju(n){if(Kt){var i=ti;if(i){var o=i;if(!ih(n,i)){if(Xu(n))throw Error(t(418));i=cr(o.nextSibling);var u=ei;i&&ih(n,i)?nh(u,o):(n.flags=n.flags&-4097|2,Kt=!1,ei=n)}}else{if(Xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,ei=n}}}function rh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Ba(n){if(n!==ei)return!1;if(!Kt)return rh(n),Kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ou(n.type,n.memoizedProps)),i&&(i=ti)){if(Xu(n))throw sh(),Error(t(418));for(;i;)nh(n,i),i=cr(i.nextSibling)}if(rh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=cr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?cr(n.stateNode.nextSibling):null;return!0}function sh(){for(var n=ti;n;)n=cr(n.nextSibling)}function As(){ti=ei=null,Kt=!1}function qu(n){vi===null?vi=[n]:vi.push(n)}var e_=b.ReactCurrentBatchConfig;function Bo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=d.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ha(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function oh(n){var i=n._init;return i(n._payload)}function ah(n){function i(ne,X){if(n){var re=ne.deletions;re===null?(ne.deletions=[X],ne.flags|=16):re.push(X)}}function o(ne,X){if(!n)return null;for(;X!==null;)i(ne,X),X=X.sibling;return null}function u(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function d(ne,X){return ne=Sr(ne,X),ne.index=0,ne.sibling=null,ne}function m(ne,X,re){return ne.index=re,n?(re=ne.alternate,re!==null?(re=re.index,re<X?(ne.flags|=2,X):re):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function M(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function N(ne,X,re,Le){return X===null||X.tag!==6?(X=zc(re,ne.mode,Le),X.return=ne,X):(X=d(X,re),X.return=ne,X)}function V(ne,X,re,Le){var Qe=re.type;return Qe===P?we(ne,X,re.props.children,Le,re.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ie&&oh(Qe)===X.type)?(Le=d(X,re.props),Le.ref=Bo(ne,X,re),Le.return=ne,Le):(Le=fl(re.type,re.key,re.props,null,ne.mode,Le),Le.ref=Bo(ne,X,re),Le.return=ne,Le)}function ue(ne,X,re,Le){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=kc(re,ne.mode,Le),X.return=ne,X):(X=d(X,re.children||[]),X.return=ne,X)}function we(ne,X,re,Le,Qe){return X===null||X.tag!==7?(X=Kr(re,ne.mode,Le,Qe),X.return=ne,X):(X=d(X,re),X.return=ne,X)}function Re(ne,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=zc(""+X,ne.mode,re),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return re=fl(X.type,X.key,X.props,null,ne.mode,re),re.ref=Bo(ne,null,X),re.return=ne,re;case k:return X=kc(X,ne.mode,re),X.return=ne,X;case ie:var Le=X._init;return Re(ne,Le(X._payload),re)}if(Mt(X)||Q(X))return X=Kr(X,ne.mode,re,null),X.return=ne,X;Ha(ne,X)}return null}function Ee(ne,X,re,Le){var Qe=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Qe!==null?null:N(ne,X,""+re,Le);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case B:return re.key===Qe?V(ne,X,re,Le):null;case k:return re.key===Qe?ue(ne,X,re,Le):null;case ie:return Qe=re._init,Ee(ne,X,Qe(re._payload),Le)}if(Mt(re)||Q(re))return Qe!==null?null:we(ne,X,re,Le,null);Ha(ne,re)}return null}function We(ne,X,re,Le,Qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return ne=ne.get(re)||null,N(X,ne,""+Le,Qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case B:return ne=ne.get(Le.key===null?re:Le.key)||null,V(X,ne,Le,Qe);case k:return ne=ne.get(Le.key===null?re:Le.key)||null,ue(X,ne,Le,Qe);case ie:var ot=Le._init;return We(ne,X,re,ot(Le._payload),Qe)}if(Mt(Le)||Q(Le))return ne=ne.get(re)||null,we(X,ne,Le,Qe,null);Ha(X,Le)}return null}function Ye(ne,X,re,Le){for(var Qe=null,ot=null,at=X,gt=X=0,xn=null;at!==null&&gt<re.length;gt++){at.index>gt?(xn=at,at=null):xn=at.sibling;var Ut=Ee(ne,at,re[gt],Le);if(Ut===null){at===null&&(at=xn);break}n&&at&&Ut.alternate===null&&i(ne,at),X=m(Ut,X,gt),ot===null?Qe=Ut:ot.sibling=Ut,ot=Ut,at=xn}if(gt===re.length)return o(ne,at),Kt&&Gr(ne,gt),Qe;if(at===null){for(;gt<re.length;gt++)at=Re(ne,re[gt],Le),at!==null&&(X=m(at,X,gt),ot===null?Qe=at:ot.sibling=at,ot=at);return Kt&&Gr(ne,gt),Qe}for(at=u(ne,at);gt<re.length;gt++)xn=We(at,ne,gt,re[gt],Le),xn!==null&&(n&&xn.alternate!==null&&at.delete(xn.key===null?gt:xn.key),X=m(xn,X,gt),ot===null?Qe=xn:ot.sibling=xn,ot=xn);return n&&at.forEach(function(Mr){return i(ne,Mr)}),Kt&&Gr(ne,gt),Qe}function Ke(ne,X,re,Le){var Qe=Q(re);if(typeof Qe!="function")throw Error(t(150));if(re=Qe.call(re),re==null)throw Error(t(151));for(var ot=Qe=null,at=X,gt=X=0,xn=null,Ut=re.next();at!==null&&!Ut.done;gt++,Ut=re.next()){at.index>gt?(xn=at,at=null):xn=at.sibling;var Mr=Ee(ne,at,Ut.value,Le);if(Mr===null){at===null&&(at=xn);break}n&&at&&Mr.alternate===null&&i(ne,at),X=m(Mr,X,gt),ot===null?Qe=Mr:ot.sibling=Mr,ot=Mr,at=xn}if(Ut.done)return o(ne,at),Kt&&Gr(ne,gt),Qe;if(at===null){for(;!Ut.done;gt++,Ut=re.next())Ut=Re(ne,Ut.value,Le),Ut!==null&&(X=m(Ut,X,gt),ot===null?Qe=Ut:ot.sibling=Ut,ot=Ut);return Kt&&Gr(ne,gt),Qe}for(at=u(ne,at);!Ut.done;gt++,Ut=re.next())Ut=We(at,ne,gt,Ut.value,Le),Ut!==null&&(n&&Ut.alternate!==null&&at.delete(Ut.key===null?gt:Ut.key),X=m(Ut,X,gt),ot===null?Qe=Ut:ot.sibling=Ut,ot=Ut);return n&&at.forEach(function(I_){return i(ne,I_)}),Kt&&Gr(ne,gt),Qe}function on(ne,X,re,Le){if(typeof re=="object"&&re!==null&&re.type===P&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case B:e:{for(var Qe=re.key,ot=X;ot!==null;){if(ot.key===Qe){if(Qe=re.type,Qe===P){if(ot.tag===7){o(ne,ot.sibling),X=d(ot,re.props.children),X.return=ne,ne=X;break e}}else if(ot.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ie&&oh(Qe)===ot.type){o(ne,ot.sibling),X=d(ot,re.props),X.ref=Bo(ne,ot,re),X.return=ne,ne=X;break e}o(ne,ot);break}else i(ne,ot);ot=ot.sibling}re.type===P?(X=Kr(re.props.children,ne.mode,Le,re.key),X.return=ne,ne=X):(Le=fl(re.type,re.key,re.props,null,ne.mode,Le),Le.ref=Bo(ne,X,re),Le.return=ne,ne=Le)}return M(ne);case k:e:{for(ot=re.key;X!==null;){if(X.key===ot)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){o(ne,X.sibling),X=d(X,re.children||[]),X.return=ne,ne=X;break e}else{o(ne,X);break}else i(ne,X);X=X.sibling}X=kc(re,ne.mode,Le),X.return=ne,ne=X}return M(ne);case ie:return ot=re._init,on(ne,X,ot(re._payload),Le)}if(Mt(re))return Ye(ne,X,re,Le);if(Q(re))return Ke(ne,X,re,Le);Ha(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(o(ne,X.sibling),X=d(X,re),X.return=ne,ne=X):(o(ne,X),X=zc(re,ne.mode,Le),X.return=ne,ne=X),M(ne)):o(ne,X)}return on}var Rs=ah(!0),lh=ah(!1),Ga=fr(null),Va=null,Cs=null,Yu=null;function $u(){Yu=Cs=Va=null}function Ku(n){var i=Ga.current;jt(Ga),n._currentValue=i}function Zu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function bs(n,i){Va=n,Yu=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function fi(n){var i=n._currentValue;if(Yu!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Va===null)throw Error(t(308));Cs=n,Va.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Vr=null;function Qu(n){Vr===null?Vr=[n]:Vr.push(n)}function uh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Qu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Wi(n,u)}function Wi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var pr=!1;function Ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ch(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Dt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Wi(n,o)}return d=u.interleaved,d===null?(i.next=i,Qu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Wi(n,o)}function Wa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,xo(n,o)}}function fh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Xa(n,i,o,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var V=N,ue=V.next;V.next=null,M===null?m=ue:M.next=ue,M=V;var we=n.alternate;we!==null&&(we=we.updateQueue,N=we.lastBaseUpdate,N!==M&&(N===null?we.firstBaseUpdate=ue:N.next=ue,we.lastBaseUpdate=V))}if(m!==null){var Re=d.baseState;M=0,we=ue=V=null,N=m;do{var Ee=N.lane,We=N.eventTime;if((u&Ee)===Ee){we!==null&&(we=we.next={eventTime:We,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ye=n,Ke=N;switch(Ee=i,We=o,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Re=Ye.call(We,Re,Ee);break e}Re=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,Ee=typeof Ye=="function"?Ye.call(We,Re,Ee):Ye,Ee==null)break e;Re=$({},Re,Ee);break e;case 2:pr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,Ee=d.effects,Ee===null?d.effects=[N]:Ee.push(N))}else We={eventTime:We,lane:Ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},we===null?(ue=we=We,V=Re):we=we.next=We,M|=Ee;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,d.lastBaseUpdate=Ee,d.shared.pending=null}}while(!0);if(we===null&&(V=Re),d.baseState=V,d.firstBaseUpdate=ue,d.lastBaseUpdate=we,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=M,n.lanes=M,n.memoizedState=Re}}function dh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ho={},Ii=fr(Ho),Go=fr(Ho),Vo=fr(Ho);function Wr(n){if(n===Ho)throw Error(t(174));return n}function ec(n,i){switch(Vt(Vo,i),Vt(Go,n),Vt(Ii,Ho),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}jt(Ii),Vt(Ii,i)}function Ps(){jt(Ii),jt(Go),jt(Vo)}function hh(n){Wr(Vo.current);var i=Wr(Ii.current),o=ct(i,n.type);i!==o&&(Vt(Go,n),Vt(Ii,o))}function tc(n){Go.current===n&&(jt(Ii),jt(Go))}var Qt=fr(0);function ja(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nc=[];function ic(){for(var n=0;n<nc.length;n++)nc[n]._workInProgressVersionPrimary=null;nc.length=0}var qa=b.ReactCurrentDispatcher,rc=b.ReactCurrentBatchConfig,Xr=0,Jt=null,fn=null,_n=null,Ya=!1,Wo=!1,Xo=0,t_=0;function An(){throw Error(t(321))}function sc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!_i(n[o],i[o]))return!1;return!0}function oc(n,i,o,u,d,m){if(Xr=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qa.current=n===null||n.memoizedState===null?s_:o_,n=o(u,d),Wo){m=0;do{if(Wo=!1,Xo=0,25<=m)throw Error(t(301));m+=1,_n=fn=null,i.updateQueue=null,qa.current=a_,n=o(u,d)}while(Wo)}if(qa.current=Za,i=fn!==null&&fn.next!==null,Xr=0,_n=fn=Jt=null,Ya=!1,i)throw Error(t(300));return n}function ac(){var n=Xo!==0;return Xo=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Jt.memoizedState=_n=n:_n=_n.next=n,_n}function di(){if(fn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=_n===null?Jt.memoizedState:_n.next;if(i!==null)_n=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?Jt.memoizedState=_n=n:_n=_n.next=n}return _n}function jo(n,i){return typeof i=="function"?i(n):i}function lc(n){var i=di(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=fn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var N=M=null,V=null,ue=m;do{var we=ue.lane;if((Xr&we)===we)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:n(u,ue.action);else{var Re={lane:we,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(N=V=Re,M=u):V=V.next=Re,Jt.lanes|=we,jr|=we}ue=ue.next}while(ue!==null&&ue!==m);V===null?M=u:V.next=N,_i(u,i.memoizedState)||(jn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=V,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Jt.lanes|=m,jr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function uc(n){var i=di(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);_i(m,i.memoizedState)||(jn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function ph(){}function mh(n,i){var o=Jt,u=di(),d=i(),m=!_i(u.memoizedState,d);if(m&&(u.memoizedState=d,jn=!0),u=u.queue,cc(vh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,qo(9,_h.bind(null,o,u,d,i),void 0,null),vn===null)throw Error(t(349));(Xr&30)!==0||gh(o,i,d)}return d}function gh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function _h(n,i,o,u){i.value=o,i.getSnapshot=u,xh(i)&&yh(n)}function vh(n,i,o){return o(function(){xh(i)&&yh(n)})}function xh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!_i(n,o)}catch{return!0}}function yh(n){var i=Wi(n,1);i!==null&&Mi(i,n,1,-1)}function Sh(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},i.queue=n,n=n.dispatch=r_.bind(null,Jt,n),[i.memoizedState,n]}function qo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Mh(){return di().memoizedState}function $a(n,i,o,u){var d=Ui();Jt.flags|=n,d.memoizedState=qo(1|i,o,void 0,u===void 0?null:u)}function Ka(n,i,o,u){var d=di();u=u===void 0?null:u;var m=void 0;if(fn!==null){var M=fn.memoizedState;if(m=M.destroy,u!==null&&sc(u,M.deps)){d.memoizedState=qo(i,o,m,u);return}}Jt.flags|=n,d.memoizedState=qo(1|i,o,m,u)}function Eh(n,i){return $a(8390656,8,n,i)}function cc(n,i){return Ka(2048,8,n,i)}function wh(n,i){return Ka(4,2,n,i)}function Th(n,i){return Ka(4,4,n,i)}function Ah(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Rh(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4,4,Ah.bind(null,i,n),o)}function fc(){}function Ch(n,i){var o=di();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&sc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function bh(n,i){var o=di();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&sc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Ph(n,i,o){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(_i(o,i)||(o=Li(),Jt.lanes|=o,jr|=o,n.baseState=!0),i)}function n_(n,i){var o=Lt;Lt=o!==0&&4>o?o:4,n(!0);var u=rc.transition;rc.transition={};try{n(!1),i()}finally{Lt=o,rc.transition=u}}function Lh(){return di().memoizedState}function i_(n,i,o){var u=xr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Dh(n))Ih(i,o);else if(o=uh(n,i,o,u),o!==null){var d=zn();Mi(o,n,u,d),Uh(o,i,u)}}function r_(n,i,o){var u=xr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Dh(n))Ih(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,o);if(d.hasEagerState=!0,d.eagerState=N,_i(N,M)){var V=i.interleaved;V===null?(d.next=d,Qu(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}o=uh(n,i,d,u),o!==null&&(d=zn(),Mi(o,n,u,d),Uh(o,i,u))}}function Dh(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function Ih(n,i){Wo=Ya=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Uh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,xo(n,o)}}var Za={readContext:fi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},s_={readContext:fi,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:fi,useEffect:Eh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,$a(4194308,4,Ah.bind(null,i,n),o)},useLayoutEffect:function(n,i){return $a(4194308,4,n,i)},useInsertionEffect:function(n,i){return $a(4,2,n,i)},useMemo:function(n,i){var o=Ui();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ui();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=i_.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:Sh,useDebugValue:fc,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Sh(!1),i=n[0];return n=n_.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Jt,d=Ui();if(Kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vn===null)throw Error(t(349));(Xr&30)!==0||gh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Eh(vh.bind(null,u,m,n),[n]),u.flags|=2048,qo(9,_h.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Ui(),i=vn.identifierPrefix;if(Kt){var o=Vi,u=Gi;o=(u&~(1<<32-z(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=t_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},o_={readContext:fi,useCallback:Ch,useContext:fi,useEffect:cc,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Th,useMemo:bh,useReducer:lc,useRef:Mh,useState:function(){return lc(jo)},useDebugValue:fc,useDeferredValue:function(n){var i=di();return Ph(i,fn.memoizedState,n)},useTransition:function(){var n=lc(jo)[0],i=di().memoizedState;return[n,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1},a_={readContext:fi,useCallback:Ch,useContext:fi,useEffect:cc,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Th,useMemo:bh,useReducer:uc,useRef:Mh,useState:function(){return uc(jo)},useDebugValue:fc,useDeferredValue:function(n){var i=di();return fn===null?i.memoizedState=n:Ph(i,fn.memoizedState,n)},useTransition:function(){var n=uc(jo)[0],i=di().memoizedState;return[n,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function dc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:$({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qa={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),d=xr(n),m=Xi(u,d);m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(Mi(i,n,d,u),Wa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),d=xr(n),m=Xi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(Mi(i,n,d,u),Wa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=xr(n),d=Xi(o,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(Mi(i,n,u,o),Wa(i,n,u))}};function Nh(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!Io(o,u)||!Io(d,m):!0}function Fh(n,i,o){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=fi(m):(d=Xn(i)?Br:Tn.current,u=i.contextTypes,m=(u=u!=null)?Es(n,d):dr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Oh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function hc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Ju(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=fi(m):(m=Xn(i)?Br:Tn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(dc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qa.enqueueReplaceState(d,d.state,null),Xa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var o="",u=i;do o+=ae(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function pc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function mc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function zh(n,i,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){sl||(sl=!0,Pc=u),mc(n,i)},o}function kh(n,i,o){o=Xi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){mc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){mc(n,i),typeof u!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Bh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new l_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=M_.bind(null,n,i,o),i.then(n,n))}function Hh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Gh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Xi(-1,1),i.tag=2,mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var u_=b.ReactCurrentOwner,jn=!1;function On(n,i,o,u){i.child=n===null?lh(i,null,o,u):Rs(i,n.child,o,u)}function Vh(n,i,o,u,d){o=o.render;var m=i.ref;return bs(i,d),u=oc(n,i,o,u,m,d),o=ac(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Kt&&o&&Vu(i),i.flags|=1,On(n,i,u,d),i.child)}function Wh(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Oc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Xh(n,i,m,u,d)):(n=fl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Io,o(M,u)&&n.ref===i.ref)return ji(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Xh(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Io(m,u)&&n.ref===i.ref)if(jn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,ji(n,i,d)}return gc(n,i,o,u,d)}function jh(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Is,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Vt(Is,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Vt(Is,ni),ni|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Vt(Is,ni),ni|=u;return On(n,i,d,o),i.child}function qh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function gc(n,i,o,u,d){var m=Xn(o)?Br:Tn.current;return m=Es(i,m),bs(i,d),o=oc(n,i,o,u,m,d),u=ac(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Kt&&u&&Vu(i),i.flags|=1,On(n,i,o,d),i.child)}function Yh(n,i,o,u,d){if(Xn(o)){var m=!0;Fa(i)}else m=!1;if(bs(i,d),i.stateNode===null)el(n,i),Fh(i,o,u),hc(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var V=M.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=fi(ue):(ue=Xn(o)?Br:Tn.current,ue=Es(i,ue));var we=o.getDerivedStateFromProps,Re=typeof we=="function"||typeof M.getSnapshotBeforeUpdate=="function";Re||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==u||V!==ue)&&Oh(i,M,u,ue),pr=!1;var Ee=i.memoizedState;M.state=Ee,Xa(i,u,M,d),V=i.memoizedState,N!==u||Ee!==V||Wn.current||pr?(typeof we=="function"&&(dc(i,o,we,u),V=i.memoizedState),(N=pr||Nh(i,o,N,u,Ee,V,ue))?(Re||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),M.props=u,M.state=V,M.context=ue,u=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,ch(n,i),N=i.memoizedProps,ue=i.type===i.elementType?N:xi(i.type,N),M.props=ue,Re=i.pendingProps,Ee=M.context,V=o.contextType,typeof V=="object"&&V!==null?V=fi(V):(V=Xn(o)?Br:Tn.current,V=Es(i,V));var We=o.getDerivedStateFromProps;(we=typeof We=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==Re||Ee!==V)&&Oh(i,M,u,V),pr=!1,Ee=i.memoizedState,M.state=Ee,Xa(i,u,M,d);var Ye=i.memoizedState;N!==Re||Ee!==Ye||Wn.current||pr?(typeof We=="function"&&(dc(i,o,We,u),Ye=i.memoizedState),(ue=pr||Nh(i,o,ue,u,Ee,Ye,V)||!1)?(we||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ye,V),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ye,V)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),M.props=u,M.state=Ye,M.context=V,u=ue):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Ee===n.memoizedState||(i.flags|=1024),u=!1)}return _c(n,i,o,u,m,d)}function _c(n,i,o,u,d,m){qh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&Jd(i,o,!1),ji(n,i,m);u=i.stateNode,u_.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Rs(i,n.child,null,m),i.child=Rs(i,null,N,m)):On(n,i,N,m),i.memoizedState=u.state,d&&Jd(i,o,!0),i.child}function $h(n){var i=n.stateNode;i.pendingContext?Zd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zd(n,i.context,!1),ec(n,i.containerInfo)}function Kh(n,i,o,u,d){return As(),qu(d),i.flags|=256,On(n,i,o,u),i.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function xc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zh(n,i,o){var u=i.pendingProps,d=Qt.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Vt(Qt,d&1),n===null)return ju(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=dl(M,u,0,null),n=Kr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=xc(o),i.memoizedState=vc,n):yc(i,M));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return c_(n,i,M,u,N,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,N=d.sibling;var V={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=Sr(d,V),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?m=Sr(N,m):(m=Kr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?xc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=vc,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function yc(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,o,u){return u!==null&&qu(u),Rs(i,n.child,null,o),n=yc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function c_(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=pc(Error(t(422))),Ja(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=dl({mode:"visible",children:u.children},d,0,null),m=Kr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Rs(i,n.child,null,M),i.child.memoizedState=xc(M),i.memoizedState=vc,m);if((i.mode&1)===0)return Ja(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,m=Error(t(419)),u=pc(m,u,void 0),Ja(n,i,M,u)}if(N=(M&n.childLanes)!==0,jn||N){if(u=vn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Wi(n,d),Mi(u,n,d,-1))}return Fc(),u=pc(Error(t(421))),Ja(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=E_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ti=cr(d.nextSibling),ei=i,Kt=!0,vi=null,n!==null&&(ui[ci++]=Gi,ui[ci++]=Vi,ui[ci++]=Hr,Gi=n.id,Vi=n.overflow,Hr=i),i=yc(i,u.children),i.flags|=4096,i)}function Qh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Zu(n.return,i,o)}function Sc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Jh(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(On(n,i,u.children,o),u=Qt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qh(n,o,i);else if(n.tag===19)Qh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Vt(Qt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&ja(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Sc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ja(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Sc(i,!0,o,null,m);break;case"together":Sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Sr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Sr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function f_(n,i,o){switch(i.tag){case 3:$h(i),As();break;case 5:hh(i);break;case 1:Xn(i.type)&&Fa(i);break;case 4:ec(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Vt(Ga,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Vt(Qt,Qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zh(n,i,o):(Vt(Qt,Qt.current&1),n=ji(n,i,o),n!==null?n.sibling:null);Vt(Qt,Qt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Jh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt(Qt,Qt.current),u)break;return null;case 22:case 23:return i.lanes=0,jh(n,i,o)}return ji(n,i,o)}var ep,Mc,tp,np;ep=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Mc=function(){},tp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Wr(Ii.current);var m=null;switch(o){case"input":d=Je(n,d),u=Je(n,u),m=[];break;case"select":d=$({},d,{value:void 0}),u=$({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ia)}Ne(o,u);var M;o=null;for(ue in d)if(!u.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var N=d[ue];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in u){var V=u[ue];if(N=d!=null?d[ue]:void 0,u.hasOwnProperty(ue)&&V!==N&&(V!=null||N!=null))if(ue==="style")if(N){for(M in N)!N.hasOwnProperty(M)||V&&V.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in V)V.hasOwnProperty(M)&&N[M]!==V[M]&&(o||(o={}),o[M]=V[M])}else o||(m||(m=[]),m.push(ue,o)),o=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,N=N?N.__html:void 0,V!=null&&N!==V&&(m=m||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Xt("scroll",n),m||N===V||(m=[])):(m=m||[]).push(ue,V))}o&&(m=m||[]).push("style",o);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},np=function(n,i,o,u){o!==u&&(i.flags|=4)};function Yo(n,i){if(!Kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function d_(n,i,o){var u=i.pendingProps;switch(Wu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return Xn(i.type)&&Na(),Rn(i),null;case 3:return u=i.stateNode,Ps(),jt(Wn),jt(Tn),ic(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Ic(vi),vi=null))),Mc(n,i),Rn(i),null;case 5:tc(i);var d=Wr(Vo.current);if(o=i.type,n!==null&&i.stateNode!=null)tp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=Wr(Ii.current),Ba(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Di]=i,u[zo]=m,n=(i.mode&1)!==0,o){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(d=0;d<No.length;d++)Xt(No[d],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":ut(u,m),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Xt("invalid",u);break;case"textarea":he(u,m),Xt("invalid",u)}Ne(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?u.textContent!==N&&(m.suppressHydrationWarning!==!0&&Da(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&Da(u.textContent,N,n),d=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Xt("scroll",u)}switch(o){case"input":it(u),qe(u,m,!0);break;case"textarea":it(u),Te(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ia)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Se(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[Di]=i,n[zo]=u,ep(n,i,!1,!1),i.stateNode=n;e:{switch(M=Ge(o,u),o){case"dialog":Xt("cancel",n),Xt("close",n),d=u;break;case"iframe":case"object":case"embed":Xt("load",n),d=u;break;case"video":case"audio":for(d=0;d<No.length;d++)Xt(No[d],n);d=u;break;case"source":Xt("error",n),d=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=u;break;case"details":Xt("toggle",n),d=u;break;case"input":ut(n,u),d=Je(n,u),Xt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=$({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":he(n,u),d=T(n,u),Xt("invalid",n);break;default:d=u}Ne(o,d),N=d;for(m in N)if(N.hasOwnProperty(m)){var V=N[m];m==="style"?rt(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ie(n,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Ue(n,V):typeof V=="number"&&Ue(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Xt("scroll",n):V!=null&&R(n,m,V,M))}switch(o){case"input":it(n),qe(n,u,!1);break;case"textarea":it(n),Te(n);break;case"option":u.value!=null&&n.setAttribute("value",""+De(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?L(n,!!u.multiple,m,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)np(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Wr(Vo.current),Wr(Ii.current),Ba(i)){if(u=i.stateNode,o=i.memoizedProps,u[Di]=i,(m=u.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:Da(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Di]=i,i.stateNode=u}return Rn(i),null;case 13:if(jt(Qt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),As(),i.flags|=98560,m=!1;else if(m=Ba(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Di]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),m=!1}else vi!==null&&(Ic(vi),vi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?dn===0&&(dn=3):Fc())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return Ps(),Mc(n,i),n===null&&Fo(i.stateNode.containerInfo),Rn(i),null;case 10:return Ku(i.type._context),Rn(i),null;case 17:return Xn(i.type)&&Na(),Rn(i),null;case 19:if(jt(Qt),m=i.memoizedState,m===null)return Rn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Yo(m,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=ja(n),M!==null){for(i.flags|=128,Yo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Vt(Qt,Qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ve()>Us&&(i.flags|=128,u=!0,Yo(m,!1),i.lanes=4194304)}else{if(!u)if(n=ja(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Yo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Kt)return Rn(i),null}else 2*Ve()-m.renderingStartTime>Us&&o!==1073741824&&(i.flags|=128,u=!0,Yo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ve(),i.sibling=null,o=Qt.current,Vt(Qt,u?o&1|2:o&1),i):(Rn(i),null);case 22:case 23:return Nc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ni&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h_(n,i){switch(Wu(i),i.tag){case 1:return Xn(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),jt(Wn),jt(Tn),ic(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return tc(i),null;case 13:if(jt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Qt),null;case 4:return Ps(),null;case 10:return Ku(i.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var tl=!1,Cn=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ds(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){tn(n,i,u)}else o.current=null}function Ec(n,i,o){try{o()}catch(u){tn(n,i,u)}}var ip=!1;function m_(n,i){if(Nu=Sa,n=Nd(),Ru(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,N=-1,V=-1,ue=0,we=0,Re=n,Ee=null;t:for(;;){for(var We;Re!==o||d!==0&&Re.nodeType!==3||(N=M+d),Re!==m||u!==0&&Re.nodeType!==3||(V=M+u),Re.nodeType===3&&(M+=Re.nodeValue.length),(We=Re.firstChild)!==null;)Ee=Re,Re=We;for(;;){if(Re===n)break t;if(Ee===o&&++ue===d&&(N=M),Ee===m&&++we===u&&(V=M),(We=Re.nextSibling)!==null)break;Re=Ee,Ee=Re.parentNode}Re=We}o=N===-1||V===-1?null:{start:N,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fu={focusedElem:n,selectionRange:o},Sa=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,on=Ye.memoizedState,ne=i.stateNode,X=ne.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:xi(i.type,Ke),on);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){tn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return Ye=ip,ip=!1,Ye}function $o(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ec(i,o,m)}d=d.next}while(d!==u)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function wc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function rp(n){var i=n.alternate;i!==null&&(n.alternate=null,rp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[zo],delete i[Bu],delete i[Z0],delete i[Q0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sp(n){return n.tag===5||n.tag===3||n.tag===4}function op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,o),n=n.sibling;n!==null;)Tc(n,i,o),n=n.sibling}function Ac(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ac(n,i,o),n=n.sibling;n!==null;)Ac(n,i,o),n=n.sibling}var Mn=null,yi=!1;function gr(n,i,o){for(o=o.child;o!==null;)ap(n,i,o),o=o.sibling}function ap(n,i,o){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Sn,o)}catch{}switch(o.tag){case 5:Cn||Ds(o,i);case 6:var u=Mn,d=yi;Mn=null,gr(n,i,o),Mn=u,yi=d,Mn!==null&&(yi?(n=Mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(yi?(n=Mn,o=o.stateNode,n.nodeType===8?ku(n.parentNode,o):n.nodeType===1&&ku(n,o),Ro(n)):ku(Mn,o.stateNode));break;case 4:u=Mn,d=yi,Mn=o.stateNode.containerInfo,yi=!0,gr(n,i,o),Mn=u,yi=d;break;case 0:case 11:case 14:case 15:if(!Cn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&Ec(o,i,M),d=d.next}while(d!==u)}gr(n,i,o);break;case 1:if(!Cn&&(Ds(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){tn(o,i,N)}gr(n,i,o);break;case 21:gr(n,i,o);break;case 22:o.mode&1?(Cn=(u=Cn)||o.memoizedState!==null,gr(n,i,o),Cn=u):gr(n,i,o);break;default:gr(n,i,o)}}function lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new p_),i.forEach(function(u){var d=w_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:Mn=N.stateNode,yi=!1;break e;case 3:Mn=N.stateNode.containerInfo,yi=!0;break e;case 4:Mn=N.stateNode.containerInfo,yi=!0;break e}N=N.return}if(Mn===null)throw Error(t(160));ap(m,M,d),Mn=null,yi=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ue){tn(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,n),i=i.sibling}function up(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ni(n),u&4){try{$o(3,n,n.return),nl(3,n)}catch(Ke){tn(n,n.return,Ke)}try{$o(5,n,n.return)}catch(Ke){tn(n,n.return,Ke)}}break;case 1:Si(i,n),Ni(n),u&512&&o!==null&&Ds(o,o.return);break;case 5:if(Si(i,n),Ni(n),u&512&&o!==null&&Ds(o,o.return),n.flags&32){var d=n.stateNode;try{Ue(d,"")}catch(Ke){tn(n,n.return,Ke)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,N=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&Be(d,m),Ge(N,M);var ue=Ge(N,m);for(M=0;M<V.length;M+=2){var we=V[M],Re=V[M+1];we==="style"?rt(d,Re):we==="dangerouslySetInnerHTML"?Ie(d,Re):we==="children"?Ue(d,Re):R(d,we,Re,ue)}switch(N){case"input":xt(d,m);break;case"textarea":_e(d,m);break;case"select":var Ee=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?L(d,!!m.multiple,We,!1):Ee!==!!m.multiple&&(m.defaultValue!=null?L(d,!!m.multiple,m.defaultValue,!0):L(d,!!m.multiple,m.multiple?[]:"",!1))}d[zo]=m}catch(Ke){tn(n,n.return,Ke)}}break;case 6:if(Si(i,n),Ni(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ke){tn(n,n.return,Ke)}}break;case 3:if(Si(i,n),Ni(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ro(i.containerInfo)}catch(Ke){tn(n,n.return,Ke)}break;case 4:Si(i,n),Ni(n);break;case 13:Si(i,n),Ni(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(bc=Ve())),u&4&&lp(n);break;case 22:if(we=o!==null&&o.memoizedState!==null,n.mode&1?(Cn=(ue=Cn)||we,Si(i,n),Cn=ue):Si(i,n),Ni(n),u&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!we&&(n.mode&1)!==0)for(Xe=n,we=n.child;we!==null;){for(Re=Xe=we;Xe!==null;){switch(Ee=Xe,We=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:$o(4,Ee,Ee.return);break;case 1:Ds(Ee,Ee.return);var Ye=Ee.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ke){tn(u,o,Ke)}}break;case 5:Ds(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){dp(Re);continue}}We!==null?(We.return=Ee,Xe=We):dp(Re)}we=we.sibling}e:for(we=null,Re=n;;){if(Re.tag===5){if(we===null){we=Re;try{d=Re.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=Re.stateNode,V=Re.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null,N.style.display=Nt("display",M))}catch(Ke){tn(n,n.return,Ke)}}}else if(Re.tag===6){if(we===null)try{Re.stateNode.nodeValue=ue?"":Re.memoizedProps}catch(Ke){tn(n,n.return,Ke)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;we===Re&&(we=null),Re=Re.return}we===Re&&(we=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Si(i,n),Ni(n),u&4&&lp(n);break;case 21:break;default:Si(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(sp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ue(d,""),u.flags&=-33);var m=op(n);Ac(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,N=op(n);Tc(n,N,M);break;default:throw Error(t(161))}}catch(V){tn(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function g_(n,i,o){Xe=n,cp(n)}function cp(n,i,o){for(var u=(n.mode&1)!==0;Xe!==null;){var d=Xe,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||tl;if(!M){var N=d.alternate,V=N!==null&&N.memoizedState!==null||Cn;N=tl;var ue=Cn;if(tl=M,(Cn=V)&&!ue)for(Xe=d;Xe!==null;)M=Xe,V=M.child,M.tag===22&&M.memoizedState!==null?hp(d):V!==null?(V.return=M,Xe=V):hp(d);for(;m!==null;)Xe=m,cp(m),m=m.sibling;Xe=d,tl=N,Cn=ue}fp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Xe=m):fp(n)}}function fp(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||nl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Cn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:xi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&dh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}dh(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var we=ue.memoizedState;if(we!==null){var Re=we.dehydrated;Re!==null&&Ro(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&wc(i)}catch(Ee){tn(i,i.return,Ee)}}if(i===n){Xe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function dp(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function hp(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{nl(4,i)}catch(V){tn(i,o,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(V){tn(i,d,V)}}var m=i.return;try{wc(i)}catch(V){tn(i,m,V)}break;case 5:var M=i.return;try{wc(i)}catch(V){tn(i,M,V)}}}catch(V){tn(i,i.return,V)}if(i===n){Xe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Xe=N;break}Xe=i.return}}var __=Math.ceil,il=b.ReactCurrentDispatcher,Rc=b.ReactCurrentOwner,hi=b.ReactCurrentBatchConfig,Dt=0,vn=null,un=null,En=0,ni=0,Is=fr(0),dn=0,Ko=null,jr=0,rl=0,Cc=0,Zo=null,qn=null,bc=0,Us=1/0,qi=null,sl=!1,Pc=null,_r=null,ol=!1,vr=null,al=0,Qo=0,Lc=null,ll=-1,ul=0;function zn(){return(Dt&6)!==0?Ve():ll!==-1?ll:ll=Ve()}function xr(n){return(n.mode&1)===0?1:(Dt&2)!==0&&En!==0?En&-En:e_.transition!==null?(ul===0&&(ul=Li()),ul):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:md(n.type)),n)}function Mi(n,i,o,u){if(50<Qo)throw Qo=0,Lc=null,Error(t(185));li(n,o,u),((Dt&2)===0||n!==vn)&&(n===vn&&((Dt&2)===0&&(rl|=o),dn===4&&yr(n,En)),Yn(n,u),o===1&&Dt===0&&(i.mode&1)===0&&(Us=Ve()+500,Oa&&hr()))}function Yn(n,i){var o=n.callbackNode;en(n,i);var u=ln(n,n===vn?En:0);if(u===0)o!==null&&He(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&He(o),i===1)n.tag===0?J0(mp.bind(null,n)):eh(mp.bind(null,n)),$0(function(){(Dt&6)===0&&hr()}),o=null;else{switch(yo(u)){case 1:o=dt;break;case 4:o=mt;break;case 16:o=Ot;break;case 536870912:o=$t;break;default:o=Ot}o=Ep(o,pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function pp(n,i){if(ll=-1,ul=0,(Dt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ns()&&n.callbackNode!==o)return null;var u=ln(n,n===vn?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=cl(n,u);else{i=u;var d=Dt;Dt|=2;var m=_p();(vn!==n||En!==i)&&(qi=null,Us=Ve()+500,Yr(n,i));do try{y_();break}catch(N){gp(n,N)}while(!0);$u(),il.current=m,Dt=d,un!==null?i=0:(vn=null,En=0,i=dn)}if(i!==0){if(i===2&&(d=ai(n),d!==0&&(u=d,i=Dc(n,d))),i===1)throw o=Ko,Yr(n,0),yr(n,u),Yn(n,Ve()),o;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!v_(d)&&(i=cl(n,u),i===2&&(m=ai(n),m!==0&&(u=m,i=Dc(n,m))),i===1))throw o=Ko,Yr(n,0),yr(n,u),Yn(n,Ve()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:$r(n,qn,qi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=bc+500-Ve(),10<i)){if(ln(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zu($r.bind(null,n,qn,qi),i);break}$r(n,qn,qi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-z(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*__(u/1960))-u,10<u){n.timeoutHandle=zu($r.bind(null,n,qn,qi),u);break}$r(n,qn,qi);break;case 5:$r(n,qn,qi);break;default:throw Error(t(329))}}}return Yn(n,Ve()),n.callbackNode===o?pp.bind(null,n):null}function Dc(n,i){var o=Zo;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=cl(n,i),n!==2&&(i=qn,qn=o,i!==null&&Ic(i)),n}function Ic(n){qn===null?qn=n:qn.push.apply(qn,n)}function v_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!_i(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Cc,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-z(i),u=1<<o;n[o]=-1,i&=~u}}function mp(n){if((Dt&6)!==0)throw Error(t(327));Ns();var i=ln(n,0);if((i&1)===0)return Yn(n,Ve()),null;var o=cl(n,i);if(n.tag!==0&&o===2){var u=ai(n);u!==0&&(i=u,o=Dc(n,u))}if(o===1)throw o=Ko,Yr(n,0),yr(n,i),Yn(n,Ve()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$r(n,qn,qi),Yn(n,Ve()),null}function Uc(n,i){var o=Dt;Dt|=1;try{return n(i)}finally{Dt=o,Dt===0&&(Us=Ve()+500,Oa&&hr())}}function qr(n){vr!==null&&vr.tag===0&&(Dt&6)===0&&Ns();var i=Dt;Dt|=1;var o=hi.transition,u=Lt;try{if(hi.transition=null,Lt=1,n)return n()}finally{Lt=u,hi.transition=o,Dt=i,(Dt&6)===0&&hr()}}function Nc(){ni=Is.current,jt(Is)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Y0(o)),un!==null)for(o=un.return;o!==null;){var u=o;switch(Wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Na();break;case 3:Ps(),jt(Wn),jt(Tn),ic();break;case 5:tc(u);break;case 4:Ps();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:Ku(u.type._context);break;case 22:case 23:Nc()}o=o.return}if(vn=n,un=n=Sr(n.current,null),En=ni=i,dn=0,Ko=null,Cc=rl=jr=0,qn=Zo=null,Vr!==null){for(i=0;i<Vr.length;i++)if(o=Vr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Vr=null}return n}function gp(n,i){do{var o=un;try{if($u(),qa.current=Za,Ya){for(var u=Jt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ya=!1}if(Xr=0,_n=fn=Jt=null,Wo=!1,Xo=0,Rc.current=null,o===null||o.return===null){dn=1,Ko=i,un=null;break}e:{var m=n,M=o.return,N=o,V=i;if(i=En,N.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,we=N,Re=we.tag;if((we.mode&1)===0&&(Re===0||Re===11||Re===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var We=Hh(M);if(We!==null){We.flags&=-257,Gh(We,M,N,m,i),We.mode&1&&Bh(m,ue,i),i=We,V=ue;var Ye=i.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(V),i.updateQueue=Ke}else Ye.add(V);break e}else{if((i&1)===0){Bh(m,ue,i),Fc();break e}V=Error(t(426))}}else if(Kt&&N.mode&1){var on=Hh(M);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Gh(on,M,N,m,i),qu(Ls(V,N));break e}}m=V=Ls(V,N),dn!==4&&(dn=2),Zo===null?Zo=[m]:Zo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=zh(m,V,i);fh(m,ne);break e;case 1:N=V;var X=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(_r===null||!_r.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Le=kh(m,N,i);fh(m,Le);break e}}m=m.return}while(m!==null)}xp(o)}catch(Qe){i=Qe,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function _p(){var n=il.current;return il.current=Za,n===null?Za:n}function Fc(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(jr&268435455)===0&&(rl&268435455)===0||yr(vn,En)}function cl(n,i){var o=Dt;Dt|=2;var u=_p();(vn!==n||En!==i)&&(qi=null,Yr(n,i));do try{x_();break}catch(d){gp(n,d)}while(!0);if($u(),Dt=o,il.current=u,un!==null)throw Error(t(261));return vn=null,En=0,dn}function x_(){for(;un!==null;)vp(un)}function y_(){for(;un!==null&&!et();)vp(un)}function vp(n){var i=Mp(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?xp(n):un=i,Rc.current=null}function xp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=d_(o,i,ni),o!==null){un=o;return}}else{if(o=h_(o,i),o!==null){o.flags&=32767,un=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);dn===0&&(dn=5)}function $r(n,i,o){var u=Lt,d=hi.transition;try{hi.transition=null,Lt=1,S_(n,i,o,u)}finally{hi.transition=d,Lt=u}return null}function S_(n,i,o,u){do Ns();while(vr!==null);if((Dt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(mu(n,m),n===vn&&(un=vn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ol||(ol=!0,Ep(Ot,function(){return Ns(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=hi.transition,hi.transition=null;var M=Lt;Lt=1;var N=Dt;Dt|=4,Rc.current=null,m_(n,o),up(o,n),H0(Fu),Sa=!!Nu,Fu=Nu=null,n.current=o,g_(o),st(),Dt=N,Lt=M,hi.transition=m}else n.current=o;if(ol&&(ol=!1,vr=n,al=d),m=n.pendingLanes,m===0&&(_r=null),vt(o.stateNode),Yn(n,Ve()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(sl)throw sl=!1,n=Pc,Pc=null,n;return(al&1)!==0&&n.tag!==0&&Ns(),m=n.pendingLanes,(m&1)!==0?n===Lc?Qo++:(Qo=0,Lc=n):Qo=0,hr(),null}function Ns(){if(vr!==null){var n=yo(al),i=hi.transition,o=Lt;try{if(hi.transition=null,Lt=16>n?16:n,vr===null)var u=!1;else{if(n=vr,vr=null,al=0,(Dt&6)!==0)throw Error(t(331));var d=Dt;for(Dt|=4,Xe=n.current;Xe!==null;){var m=Xe,M=m.child;if((Xe.flags&16)!==0){var N=m.deletions;if(N!==null){for(var V=0;V<N.length;V++){var ue=N[V];for(Xe=ue;Xe!==null;){var we=Xe;switch(we.tag){case 0:case 11:case 15:$o(8,we,m)}var Re=we.child;if(Re!==null)Re.return=we,Xe=Re;else for(;Xe!==null;){we=Xe;var Ee=we.sibling,We=we.return;if(rp(we),we===ue){Xe=null;break}if(Ee!==null){Ee.return=We,Xe=Ee;break}Xe=We}}}var Ye=m.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var on=Ke.sibling;Ke.sibling=null,Ke=on}while(Ke!==null)}}Xe=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Xe=M;else e:for(;Xe!==null;){if(m=Xe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:$o(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,Xe=ne;break e}Xe=m.return}}var X=n.current;for(Xe=X;Xe!==null;){M=Xe;var re=M.child;if((M.subtreeFlags&2064)!==0&&re!==null)re.return=M,Xe=re;else e:for(M=X;Xe!==null;){if(N=Xe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:nl(9,N)}}catch(Qe){tn(N,N.return,Qe)}if(N===M){Xe=null;break e}var Le=N.sibling;if(Le!==null){Le.return=N.return,Xe=Le;break e}Xe=N.return}}if(Dt=d,hr(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Sn,n)}catch{}u=!0}return u}finally{Lt=o,hi.transition=i}}return!1}function yp(n,i,o){i=Ls(o,i),i=zh(n,i,1),n=mr(n,i,1),i=zn(),n!==null&&(li(n,1,i),Yn(n,i))}function tn(n,i,o){if(n.tag===3)yp(n,n,o);else for(;i!==null;){if(i.tag===3){yp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_r===null||!_r.has(u))){n=Ls(o,n),n=kh(i,n,1),i=mr(i,n,1),n=zn(),i!==null&&(li(i,1,n),Yn(i,n));break}}i=i.return}}function M_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(En&o)===o&&(dn===4||dn===3&&(En&130023424)===En&&500>Ve()-bc?Yr(n,0):Cc|=o),Yn(n,i)}function Sp(n,i){i===0&&((n.mode&1)===0?i=1:(i=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var o=zn();n=Wi(n,i),n!==null&&(li(n,i,o),Yn(n,o))}function E_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Sp(n,o)}function w_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Sp(n,o)}var Mp;Mp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wn.current)jn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return jn=!1,f_(n,i,o);jn=(n.flags&131072)!==0}else jn=!1,Kt&&(i.flags&1048576)!==0&&th(i,ka,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;el(n,i),n=i.pendingProps;var d=Es(i,Tn.current);bs(i,o),d=oc(null,i,u,n,d,o);var m=ac();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xn(u)?(m=!0,Fa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ju(i),d.updater=Qa,i.stateNode=d,d._reactInternals=i,hc(i,u,n,o),i=_c(null,i,u,!0,m,o)):(i.tag=0,Kt&&m&&Vu(i),On(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(el(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=A_(u),n=xi(u,n),d){case 0:i=gc(null,i,u,n,o);break e;case 1:i=Yh(null,i,u,n,o);break e;case 11:i=Vh(null,i,u,n,o);break e;case 14:i=Wh(null,i,u,xi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xi(u,d),gc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xi(u,d),Yh(n,i,u,d,o);case 3:e:{if($h(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,ch(n,i),Xa(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Kh(n,i,u,o,d);break e}else if(u!==d){d=Ls(Error(t(424)),i),i=Kh(n,i,u,o,d);break e}else for(ti=cr(i.stateNode.containerInfo.firstChild),ei=i,Kt=!0,vi=null,o=lh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(As(),u===d){i=ji(n,i,o);break e}On(n,i,u,o)}i=i.child}return i;case 5:return hh(i),n===null&&ju(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Ou(u,d)?M=null:m!==null&&Ou(u,m)&&(i.flags|=32),qh(n,i),On(n,i,M,o),i.child;case 6:return n===null&&ju(i),null;case 13:return Zh(n,i,o);case 4:return ec(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Rs(i,null,u,o):On(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xi(u,d),Vh(n,i,u,d,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Vt(Ga,u._currentValue),u._currentValue=M,m!==null)if(_i(m.value,M)){if(m.children===d.children&&!Wn.current){i=ji(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var V=N.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=Xi(-1,o&-o),V.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var we=ue.pending;we===null?V.next=V:(V.next=we.next,we.next=V),ue.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Zu(m.return,o,i),N.lanes|=o;break}V=V.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),Zu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}On(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,bs(i,o),d=fi(d),u=u(d),i.flags|=1,On(n,i,u,o),i.child;case 14:return u=i.type,d=xi(u,i.pendingProps),d=xi(u.type,d),Wh(n,i,u,d,o);case 15:return Xh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xi(u,d),el(n,i),i.tag=1,Xn(u)?(n=!0,Fa(i)):n=!1,bs(i,o),Fh(i,u,d),hc(i,u,d,o),_c(null,i,u,!0,n,o);case 19:return Jh(n,i,o);case 22:return jh(n,i,o)}throw Error(t(156,i.tag))};function Ep(n,i){return le(n,i)}function T_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,i,o,u){return new T_(n,i,o,u)}function Oc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function A_(n){if(typeof n=="function")return Oc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pe)return 11;if(n===K)return 14}return 2}function Sr(n,i){var o=n.alternate;return o===null?(o=pi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")Oc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case P:return Kr(o.children,d,m,i);case Z:M=8,d|=8;break;case me:return n=pi(12,o,i,d|2),n.elementType=me,n.lanes=m,n;case fe:return n=pi(13,o,i,d),n.elementType=fe,n.lanes=m,n;case G:return n=pi(19,o,i,d),n.elementType=G,n.lanes=m,n;case ee:return dl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:M=10;break e;case U:M=9;break e;case pe:M=11;break e;case K:M=14;break e;case ie:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pi(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Kr(n,i,o,u){return n=pi(7,n,u,i),n.lanes=o,n}function dl(n,i,o,u){return n=pi(22,n,u,i),n.elementType=ee,n.lanes=o,n.stateNode={isHidden:!1},n}function zc(n,i,o){return n=pi(6,n,null,i),n.lanes=o,n}function kc(n,i,o){return i=pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function R_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nn(0),this.expirationTimes=Nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bc(n,i,o,u,d,m,M,N,V){return n=new R_(n,i,o,N,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=pi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(m),n}function C_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function wp(n){if(!n)return dr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Xn(o))return Qd(n,o,i)}return i}function Tp(n,i,o,u,d,m,M,N,V){return n=Bc(o,u,!0,n,d,m,M,N,V),n.context=wp(null),o=n.current,u=zn(),d=xr(o),m=Xi(u,d),m.callback=i??null,mr(o,m,d),n.current.lanes=d,li(n,d,u),Yn(n,u),n}function hl(n,i,o,u){var d=i.current,m=zn(),M=xr(d);return o=wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Xi(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,M),n!==null&&(Mi(n,d,M,m),Wa(n,d,M)),M}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ap(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Hc(n,i){Ap(n,i),(n=n.alternate)&&Ap(n,i)}function b_(){return null}var Rp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gc(n){this._internalRoot=n}ml.prototype.render=Gc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=Gc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){hl(null,n,null,null)}),i[Bi]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=_a();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ar.length&&i!==0&&i<ar[o].priority;o++);ar.splice(o,0,n),o===0&&hd(n)}};function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function P_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ue=pl(M);m.call(ue)}}var M=Tp(i,u,n,0,null,!1,!1,"",Cp);return n._reactRootContainer=M,n[Bi]=M.current,Fo(n.nodeType===8?n.parentNode:n),qr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var ue=pl(V);N.call(ue)}}var V=Bc(n,0,!1,null,null,!1,!1,"",Cp);return n._reactRootContainer=V,n[Bi]=V.current,Fo(n.nodeType===8?n.parentNode:n),qr(function(){hl(i,V,o,u)}),V}function _l(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var N=d;d=function(){var V=pl(M);N.call(V)}}hl(i,M,n,d)}else M=P_(o,i,n,d,u);return pl(M)}So=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=St(i.pendingLanes);o!==0&&(xo(i,o|1),Yn(i,Ve()),(Dt&6)===0&&(Us=Ve()+500,hr()))}break;case 13:qr(function(){var u=Wi(n,1);if(u!==null){var d=zn();Mi(u,n,1,d)}}),Hc(n,1)}},zr=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var o=zn();Mi(i,n,134217728,o)}Hc(n,134217728)}},Mo=function(n){if(n.tag===13){var i=xr(n),o=Wi(n,i);if(o!==null){var u=zn();Mi(o,n,i,u)}Hc(n,i)}},_a=function(){return Lt},va=function(n,i){var o=Lt;try{return Lt=n,i()}finally{Lt=o}},ye=function(n,i,o){switch(i){case"input":if(xt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ua(u);if(!d)throw Error(t(90));te(u),xt(u,d)}}}break;case"textarea":_e(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},ke=Uc,ft=qr;var L_={usingClientEntryPoint:!1,Events:[ko,Ss,Ua,ge,ve,Uc]},Jo={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ce(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||b_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Sn=vl.inject(D_),Pt=vl}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_,$n.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(i))throw Error(t(200));return C_(n,i,null,o)},$n.createRoot=function(n,i){if(!Vc(n))throw Error(t(299));var o=!1,u="",d=Rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Bc(n,1,!1,null,null,o,!1,u,d),n[Bi]=i.current,Fo(n.nodeType===8?n.parentNode:n),new Gc(i)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ce(i),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return qr(n)},$n.hydrate=function(n,i,o){if(!gl(i))throw Error(t(200));return _l(null,n,i,!0,o)},$n.hydrateRoot=function(n,i,o){if(!Vc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Tp(i,null,n,1,o??null,d,!1,m,M),n[Bi]=i.current,Fo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ml(i)},$n.render=function(n,i,o){if(!gl(i))throw Error(t(200));return _l(null,n,i,!1,o)},$n.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},$n.unstable_batchedUpdates=Uc,$n.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!gl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,o,!1,u)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Fp;function H_(){if(Fp)return jc.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),jc.exports=B_(),jc.exports}var Op;function G_(){if(Op)return xl;Op=1;var s=H_();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var V_=G_();const W_=Eg(V_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="162",X_=0,zp=1,j_=2,wg=1,q_=2,Ji=3,Nr=0,Gn=1,si=2,Lr=0,uo=1,kp=2,Bp=3,Hp=4,Y_=5,os=100,$_=101,K_=102,Gp=103,Vp=104,Z_=200,Q_=201,J_=202,ev=203,zf=204,kf=205,tv=206,nv=207,iv=208,rv=209,sv=210,ov=211,av=212,lv=213,uv=214,cv=0,fv=1,dv=2,iu=3,hv=4,pv=5,mv=6,gv=7,Qf=0,_v=1,vv=2,Dr=0,xv=1,yv=2,Sv=3,Mv=4,Ev=5,wv=6,Tv=7,Tg=300,fo=301,ho=302,Bf=303,Hf=304,du=306,Gf=1e3,Ai=1001,Vf=1002,Hn=1003,Wp=1004,ta=1005,Kn=1006,$c=1007,ls=1008,Ir=1009,Av=1010,Rv=1011,Jf=1012,Ag=1013,Pr=1014,er=1015,fa=1016,Rg=1017,Cg=1018,us=1020,Cv=1021,Ri=1023,bv=1024,Pv=1025,cs=1026,po=1027,Lv=1028,bg=1029,Dv=1030,Pg=1031,Lg=1033,Kc=33776,Zc=33777,Qc=33778,Jc=33779,Xp=35840,jp=35841,qp=35842,Yp=35843,Dg=36196,$p=37492,Kp=37496,Zp=37808,Qp=37809,Jp=37810,em=37811,tm=37812,nm=37813,im=37814,rm=37815,sm=37816,om=37817,am=37818,lm=37819,um=37820,cm=37821,ef=36492,fm=36494,dm=36495,Iv=36283,hm=36284,pm=36285,mm=36286,Uv=3200,Nv=3201,ed=0,Fv=1,br="",Fi="srgb",Fr="srgb-linear",td="display-p3",hu="display-p3-linear",ru="linear",qt="srgb",su="rec709",ou="p3",Fs=7680,gm=519,Ov=512,zv=513,kv=514,Ig=515,Bv=516,Hv=517,Gv=518,Vv=519,Wf=35044,_m="300 es",Xf=1035,tr=2e3,au=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,lu=180/Math.PI;function Ur(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Ln(s,e,t){return Math.max(e,Math.min(t,s))}function Wv(s,e){return(s%e+e)%e}function nf(s,e,t){return(1-t)*s+t*e}function vm(s){return(s&s-1)===0&&s!==0}function jf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(e,t,r,a,l,f,c,h,p){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p)}set(e,t,r,a,l,f,c,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],w=a[0],x=a[3],v=a[6],I=a[1],R=a[4],b=a[7],B=a[2],k=a[5],P=a[8];return l[0]=f*w+c*I+h*B,l[3]=f*x+c*R+h*k,l[6]=f*v+c*b+h*P,l[1]=p*w+_*I+g*B,l[4]=p*x+_*R+g*k,l[7]=p*v+_*b+g*P,l[2]=y*w+S*I+E*B,l[5]=y*x+S*R+E*k,l[8]=y*v+S*b+E*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8];return t*f*_-t*c*p-r*l*_+r*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=_*f-c*p,y=c*h-_*l,S=p*l-f*h,E=t*g+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(a*p-_*r)*w,e[2]=(c*r-a*f)*w,e[3]=y*w,e[4]=(_*t-a*h)*w,e[5]=(a*l-c*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(f*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new Rt;function Ug(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xv(){const s=uu("canvas");return s.style.display="block",s}const xm={};function Ng(s){s in xm||(xm[s]=!0,console.warn(s))}const ym=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sm=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yl={[Fr]:{transfer:ru,primaries:su,toReference:s=>s,fromReference:s=>s},[Fi]:{transfer:qt,primaries:su,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[hu]:{transfer:ru,primaries:ou,toReference:s=>s.applyMatrix3(Sm),fromReference:s=>s.applyMatrix3(ym)},[td]:{transfer:qt,primaries:ou,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Sm),fromReference:s=>s.applyMatrix3(ym).convertLinearToSRGB()}},jv=new Set([Fr,hu]),Ht={enabled:!0,_workingColorSpace:Fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!jv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=yl[e].toReference,a=yl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return yl[s].primaries},getTransfer:function(s){return s===br?ru:yl[s].transfer}};function co(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sf(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class Fg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=uu("canvas")),Os.width=e.width,Os.height=e.height;const r=Os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=co(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(co(t[r]/255)*255):t[r]=co(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qv=0;class Og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(of(a[f].image)):l.push(of(a[f]))}else l=of(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class Vn extends _o{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,r=Ai,a=Ai,l=Kn,f=ls,c=Ri,h=Ir,p=Vn.DEFAULT_ANISOTROPY,_=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ur(),this.name="",this.source=new Og(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Tg;Vn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,a=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],y=h[1],S=h[5],E=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,b=(S+1)/2,B=(v+1)/2,k=(_+y)/4,P=(g+w)/4,Z=(E+x)/4;return R>b&&R>B?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=k/r,l=P/r):b>B?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=k/a,l=Z/a):B<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),r=P/l,a=Z/l),this.set(r,a,l,t),this}let I=Math.sqrt((x-E)*(x-E)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(I)<.001&&(I=1),this.x=(x-E)/I,this.y=(g-w)/I,this.z=(y-_)/I,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $v extends _o{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const l=new Vn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Og(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends $v{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class zg extends Vn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kv extends Vn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const y=l[f+0],S=l[f+1],E=l[f+2],w=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(c===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(g!==w||h!==y||p!==S||_!==E){let x=1-c;const v=h*y+p*S+_*E+g*w,I=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const B=Math.sqrt(R),k=Math.atan2(B,v*I);x=Math.sin(x*k)/B,c=Math.sin(c*k)/B}const b=c*I;if(h=h*x+y*b,p=p*x+S*b,_=_*x+E*b,g=g*x+w*b,x===1-c){const B=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=B,p*=B,_*=B,g*=B}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[f],y=l[f+1],S=l[f+2],E=l[f+3];return e[t]=c*E+_*g+h*S-p*y,e[t+1]=h*E+_*y+p*g-c*S,e[t+2]=p*E+_*S+c*y-h*g,e[t+3]=_*E-c*g-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(r/2),_=c(a/2),g=c(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(f){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],_=t[6],g=t[10],y=r+c+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+f*c+a*p-l*h,this._y=a*_+f*h+l*c-r*p,this._z=l*_+f*p+r*h-a*c,this._w=f*_-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,c),g=Math.sin((1-t)*_)/p,y=Math.sin(t*_)/p;return this._w=f*g+this._w*y,this._x=r*g+this._x*y,this._y=a*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*a-c*r),_=2*(c*t-l*a),g=2*(l*r-f*t);return this.x=t+h*p+f*g-c*_,this.y=r+h*_+c*p-l*g,this.z=a+h*g+l*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new W,Mm=new da;class ha{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(l,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ml.subVectors(this.max,na),zs.subVectors(e.a,na),ks.subVectors(e.b,na),Bs.subVectors(e.c,na),Er.subVectors(ks,zs),wr.subVectors(Bs,ks),Zr.subVectors(zs,Bs);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-Zr.y,Zr.x,0];return!lf(t,zs,ks,Bs,Ml)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,zs,ks,Bs,Ml))?!1:(El.crossVectors(Er,wr),t=[El.x,El.y,El.z],lf(t,zs,ks,Bs,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new W,new W,new W,new W,new W,new W,new W,new W],Ei=new W,Sl=new ha,zs=new W,ks=new W,Bs=new W,Er=new W,wr=new W,Zr=new W,na=new W,Ml=new W,El=new W,Qr=new W;function lf(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Qr.fromArray(s,l);const c=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>c)return!1}return!0}const Zv=new ha,ia=new W,uf=new W;class pa{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Zv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ia,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(uf)),this.expandByPoint(ia.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new W,cf=new W,wl=new W,Tr=new W,ff=new W,Tl=new W,df=new W;class nd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){cf.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(cf);const l=e.distanceTo(t)*.5,f=-this.direction.dot(wl),c=Tr.dot(this.direction),h=-Tr.dot(wl),p=Tr.lengthSq(),_=Math.abs(1-f*f);let g,y,S,E;if(_>0)if(g=f*h-c,y=f*c-h,E=l*_,g>=0)if(y>=-E)if(y<=E){const w=1/_;g*=w,y*=w,S=g*(g+f*y+2*c)+y*(f*g+y+2*h)+p}else y=l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;else y=-l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;else y<=-E?(g=Math.max(0,-(-f*l+c)),y=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(g=Math.max(0,-(f*l+c)),y=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+y*(y+2*h)+p);else y=f>0?-l:l,g=Math.max(0,-(f*y+c)),S=-g*g+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(cf).addScaledVector(wl,y),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),a=$i.dot($i)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),g>=0?(c=(e.min.z-y.z)*g,h=(e.max.z-y.z)*g):(c=(e.max.z-y.z)*g,h=(e.min.z-y.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,a,l){ff.subVectors(t,e),Tl.subVectors(r,e),df.crossVectors(ff,Tl);let f=this.direction.dot(df),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;Tr.subVectors(this.origin,e);const h=c*this.direction.dot(Tl.crossVectors(Tr,Tl));if(h<0)return null;const p=c*this.direction.dot(ff.cross(Tr));if(p<0||h+p>f)return null;const _=-c*Tr.dot(df);return _<0?null:this.at(_/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,r,a,l,f,c,h,p,_,g,y,S,E,w,x){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,p,_,g,y,S,E,w,x)}set(e,t,r,a,l,f,c,h,p,_,g,y,S,E,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=f,v[9]=c,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=S,v[7]=E,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),f=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=f*_,S=f*g,E=c*_,w=c*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+E*p,t[5]=y-w*p,t[9]=-c*h,t[2]=w-y*p,t[6]=E+S*p,t[10]=f*h}else if(e.order==="YXZ"){const y=h*_,S=h*g,E=p*_,w=p*g;t[0]=y+w*c,t[4]=E*c-S,t[8]=f*p,t[1]=f*g,t[5]=f*_,t[9]=-c,t[2]=S*c-E,t[6]=w+y*c,t[10]=f*h}else if(e.order==="ZXY"){const y=h*_,S=h*g,E=p*_,w=p*g;t[0]=y-w*c,t[4]=-f*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=f*_,t[9]=w-y*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const y=f*_,S=f*g,E=c*_,w=c*g;t[0]=h*_,t[4]=E*p-S,t[8]=y*p+w,t[1]=h*g,t[5]=w*p+y,t[9]=S*p-E,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const y=f*h,S=f*p,E=c*h,w=c*p;t[0]=h*_,t[4]=w-y*g,t[8]=E*g+S,t[1]=g,t[5]=f*_,t[9]=-c*_,t[2]=-p*_,t[6]=S*g+E,t[10]=y-w*g}else if(e.order==="XZY"){const y=f*h,S=f*p,E=c*h,w=c*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=y*g+w,t[5]=f*_,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*_,t[10]=w*g+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qv,e,Jv)}lookAt(e,t,r){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ar.crossVectors(r,ii),Ar.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ar.crossVectors(r,ii)),Ar.normalize(),Al.crossVectors(ii,Ar),a[0]=Ar.x,a[4]=Al.x,a[8]=ii.x,a[1]=Ar.y,a[5]=Al.y,a[9]=ii.y,a[2]=Ar.z,a[6]=Al.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],w=r[6],x=r[10],v=r[14],I=r[3],R=r[7],b=r[11],B=r[15],k=a[0],P=a[4],Z=a[8],me=a[12],A=a[1],U=a[5],pe=a[9],fe=a[13],G=a[2],K=a[6],ie=a[10],ee=a[14],O=a[3],Q=a[7],$=a[11],D=a[15];return l[0]=f*k+c*A+h*G+p*O,l[4]=f*P+c*U+h*K+p*Q,l[8]=f*Z+c*pe+h*ie+p*$,l[12]=f*me+c*fe+h*ee+p*D,l[1]=_*k+g*A+y*G+S*O,l[5]=_*P+g*U+y*K+S*Q,l[9]=_*Z+g*pe+y*ie+S*$,l[13]=_*me+g*fe+y*ee+S*D,l[2]=E*k+w*A+x*G+v*O,l[6]=E*P+w*U+x*K+v*Q,l[10]=E*Z+w*pe+x*ie+v*$,l[14]=E*me+w*fe+x*ee+v*D,l[3]=I*k+R*A+b*G+B*O,l[7]=I*P+R*U+b*K+B*Q,l[11]=I*Z+R*pe+b*ie+B*$,l[15]=I*me+R*fe+b*ee+B*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],w=e[7],x=e[11],v=e[15];return E*(+l*h*g-a*p*g-l*c*y+r*p*y+a*c*S-r*h*S)+w*(+t*h*S-t*p*y+l*f*y-a*f*S+a*p*_-l*h*_)+x*(+t*p*g-t*c*S-l*f*g+r*f*S+l*c*_-r*p*_)+v*(-a*c*_-t*h*g+t*c*y+a*f*g-r*f*y+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],w=e[13],x=e[14],v=e[15],I=g*x*p-w*y*p+w*h*S-c*x*S-g*h*v+c*y*v,R=E*y*p-_*x*p-E*h*S+f*x*S+_*h*v-f*y*v,b=_*w*p-E*g*p+E*c*S-f*w*S-_*c*v+f*g*v,B=E*g*h-_*w*h-E*c*y+f*w*y+_*c*x-f*g*x,k=t*I+r*R+a*b+l*B;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/k;return e[0]=I*P,e[1]=(w*y*l-g*x*l-w*a*S+r*x*S+g*a*v-r*y*v)*P,e[2]=(c*x*l-w*h*l+w*a*p-r*x*p-c*a*v+r*h*v)*P,e[3]=(g*h*l-c*y*l-g*a*p+r*y*p+c*a*S-r*h*S)*P,e[4]=R*P,e[5]=(_*x*l-E*y*l+E*a*S-t*x*S-_*a*v+t*y*v)*P,e[6]=(E*h*l-f*x*l-E*a*p+t*x*p+f*a*v-t*h*v)*P,e[7]=(f*y*l-_*h*l+_*a*p-t*y*p-f*a*S+t*h*S)*P,e[8]=b*P,e[9]=(E*g*l-_*w*l-E*r*S+t*w*S+_*r*v-t*g*v)*P,e[10]=(f*w*l-E*c*l+E*r*p-t*w*p-f*r*v+t*c*v)*P,e[11]=(_*c*l-f*g*l-_*r*p+t*g*p+f*r*S-t*c*S)*P,e[12]=B*P,e[13]=(_*w*a-E*g*a+E*r*y-t*w*y-_*r*x+t*g*x)*P,e[14]=(E*c*a-f*w*a-E*r*h+t*w*h+f*r*x-t*c*x)*P,e[15]=(f*g*a-_*c*a+_*r*h-t*g*h-f*r*y+t*c*y)*P,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,p=l*f,_=l*c;return this.set(p*f+r,p*c-a*h,p*h+a*c,0,p*c+a*h,_*c+r,_*h-a*f,0,p*h-a*c,_*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,_=f+f,g=c+c,y=l*p,S=l*_,E=l*g,w=f*_,x=f*g,v=c*g,I=h*p,R=h*_,b=h*g,B=r.x,k=r.y,P=r.z;return a[0]=(1-(w+v))*B,a[1]=(S+b)*B,a[2]=(E-R)*B,a[3]=0,a[4]=(S-b)*k,a[5]=(1-(y+v))*k,a[6]=(x+I)*k,a[7]=0,a[8]=(E+R)*P,a[9]=(x-I)*P,a[10]=(1-(y+w))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Hs.set(a[0],a[1],a[2]).length();const f=Hs.set(a[4],a[5],a[6]).length(),c=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],wi.copy(this);const p=1/l,_=1/f,g=1/c;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,t.setFromRotationMatrix(wi),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=tr){const h=this.elements,p=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let S,E;if(c===tr)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(c===au)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=tr){const h=this.elements,p=1/(t-e),_=1/(r-a),g=1/(f-l),y=(t+e)*p,S=(r+a)*_;let E,w;if(c===tr)E=(f+l)*g,w=-2*g;else if(c===au)E=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hs=new W,wi=new Wt,Qv=new W(0,0,0),Jv=new W(1,1,1),Ar=new W,Al=new W,ii=new W,Em=new Wt,wm=new da;class bi{constructor(e=0,t=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],_=a[9],g=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ex=0;const Tm=new W,Gs=new da,Ki=new Wt,Rl=new W,ra=new W,tx=new W,nx=new da,Am=new W(1,0,0),Rm=new W(0,1,0),Cm=new W(0,0,1),ix={type:"added"},rx={type:"removed"},hf={type:"childadded",child:null},pf={type:"childremoved",child:null};class sn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new W,t=new bi,r=new da,a=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Rt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ra,Rl,this.up):Ki.lookAt(Rl,ra,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Gs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ix),hf.child=e,this.dispatchEvent(hf),hf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(c){const h=[];for(const p in c){const _=c[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new W(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new W,Zi=new W,mf=new W,Qi=new W,Vs=new W,Ws=new W,bm=new W,gf=new W,_f=new W,vf=new W;class Ci{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Ti.subVectors(e,t),a.cross(Ti);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Ti.subVectors(a,t),Zi.subVectors(r,t),mf.subVectors(e,t);const f=Ti.dot(Ti),c=Ti.dot(Zi),h=Ti.dot(mf),p=Zi.dot(Zi),_=Zi.dot(mf),g=f*p-c*c;if(g===0)return l.set(0,0,0),null;const y=1/g,S=(p*h-c*_)*y,E=(f*_-c*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Qi.x),h.addScaledVector(f,Qi.y),h.addScaledVector(c,Qi.z),h)}static isFrontFacing(e,t,r,a){return Ti.subVectors(r,t),Zi.subVectors(e,t),Ti.cross(Zi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ti.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;Vs.subVectors(a,r),Ws.subVectors(l,r),gf.subVectors(e,r);const h=Vs.dot(gf),p=Ws.dot(gf);if(h<=0&&p<=0)return t.copy(r);_f.subVectors(e,a);const _=Vs.dot(_f),g=Ws.dot(_f);if(_>=0&&g<=_)return t.copy(a);const y=h*g-_*p;if(y<=0&&h>=0&&_<=0)return f=h/(h-_),t.copy(r).addScaledVector(Vs,f);vf.subVectors(e,l);const S=Vs.dot(vf),E=Ws.dot(vf);if(E>=0&&S<=E)return t.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(r).addScaledVector(Ws,c);const x=_*E-S*g;if(x<=0&&g-_>=0&&S-E>=0)return bm.subVectors(l,a),c=(g-_)/(g-_+(S-E)),t.copy(a).addScaledVector(bm,c);const v=1/(x+w+y);return f=w*v,c=y*v,t.copy(r).addScaledVector(Vs,f).addScaledVector(Ws,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ht.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Ht.workingColorSpace){if(e=Wv(e,1),t=Ln(t,0,1),r=Ln(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=xf(f,l,e+1/3),this.g=xf(f,l,e),this.b=xf(f,l,e-1/3)}return Ht.toWorkingColorSpace(this,a),this}setStyle(e,t=Fi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fi){const r=Bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return Ht.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Ln(Pn.r*255,0,255))*65536+Math.round(Ln(Pn.g*255,0,255))*256+Math.round(Ln(Pn.b*255,0,255))}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Pn.copy(this),t);const r=Pn.r,a=Pn.g,l=Pn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const _=(c+f)/2;if(c===f)h=0,p=0;else{const g=f-c;switch(p=_<=.5?g/(f+c):g/(2-f-c),f){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Fi){Ht.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,a=Pn.b;return e!==Fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Cl);const r=nf(Rr.h,Cl.h,t),a=nf(Rr.s,Cl.s,t),l=nf(Rr.l,Cl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Et;Et.NAMES=Bg;let sx=0;class ir extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=uo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=kf,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zf&&(r.blendSrc=this.blendSrc),this.blendDst!==kf&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==iu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oo extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new W,bl=new _t;class oi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ng("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),a=Bt(a,this.array),l=Bt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class Hg extends oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gg extends oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yt extends oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ox=0;const mi=new Wt,yf=new sn,Xs=new W,ri=new ha,sa=new ha,yn=new W;class rn extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Gg:Hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Rt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];sa.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(ri.min,sa.min),ri.expandByPoint(yn),yn.addVectors(ri.max,sa.max),ri.expandByPoint(yn)):(ri.expandByPoint(sa.min),ri.expandByPoint(sa.max))}ri.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)yn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(yn));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)yn.fromBufferAttribute(c,p),h&&(Xs.fromBufferAttribute(e,p),yn.add(Xs)),a=Math.max(a,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let Z=0;Z<r.count;Z++)c[Z]=new W,h[Z]=new W;const p=new W,_=new W,g=new W,y=new _t,S=new _t,E=new _t,w=new W,x=new W;function v(Z,me,A){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,me),g.fromBufferAttribute(r,A),y.fromBufferAttribute(l,Z),S.fromBufferAttribute(l,me),E.fromBufferAttribute(l,A),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(U),x.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(U),c[Z].add(w),c[me].add(w),c[A].add(w),h[Z].add(x),h[me].add(x),h[A].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Z=0,me=I.length;Z<me;++Z){const A=I[Z],U=A.start,pe=A.count;for(let fe=U,G=U+pe;fe<G;fe+=3)v(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const R=new W,b=new W,B=new W,k=new W;function P(Z){B.fromBufferAttribute(a,Z),k.copy(B);const me=c[Z];R.copy(me),R.sub(B.multiplyScalar(B.dot(me))).normalize(),b.crossVectors(k,me);const U=b.dot(h[Z])<0?-1:1;f.setXYZW(Z,R.x,R.y,R.z,U)}for(let Z=0,me=I.length;Z<me;++Z){const A=I[Z],U=A.start,pe=A.count;for(let fe=U,G=U+pe;fe<G;fe+=3)P(e.getX(fe+0)),P(e.getX(fe+1)),P(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new W,l=new W,f=new W,c=new W,h=new W,p=new W,_=new W,g=new W;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,x),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),c.add(_),h.add(_),p.add(_),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),f.fromBufferAttribute(t,y+2),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,h){const p=c.array,_=c.itemSize,g=c.normalized,y=new p.constructor(h.length*_);let S=0,E=0;for(let w=0,x=h.length;w<x;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*_;for(let v=0;v<_;v++)y[E++]=p[S++]}return new oi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new Wt,Jr=new nd,Pl=new pa,Lm=new W,js=new W,qs=new W,Ys=new W,Sf=new W,Ll=new W,Dl=new _t,Il=new _t,Ul=new _t,Dm=new W,Im=new W,Um=new W,Nl=new W,Fl=new W;class nn extends sn{constructor(e=new rn,t=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Ll.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=c[h],g=l[h];_!==0&&(Sf.fromBufferAttribute(g,e),f?Ll.addScaledVector(Sf,_):Ll.addScaledVector(Sf.sub(t),_))}t.add(Ll)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Pl,Lm)===null||Jr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Pm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Pm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=f[x.materialIndex],I=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let b=I,B=R;b<B;b+=3){const k=c.getX(b),P=c.getX(b+1),Z=c.getX(b+2);a=Ol(this,v,e,r,p,_,g,k,P,Z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const I=c.getX(x),R=c.getX(x+1),b=c.getX(x+2);a=Ol(this,f,e,r,p,_,g,I,R,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=f[x.materialIndex],I=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let b=I,B=R;b<B;b+=3){const k=b,P=b+1,Z=b+2;a=Ol(this,v,e,r,p,_,g,k,P,Z),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const I=x,R=x+1,b=x+2;a=Ol(this,f,e,r,p,_,g,I,R,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function ax(s,e,t,r,a,l,f,c){let h;if(e.side===Gn?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Nr,c),h===null)return null;Fl.copy(c),Fl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Fl);return p<t.near||p>t.far?null:{distance:p,point:Fl.clone(),object:s}}function Ol(s,e,t,r,a,l,f,c,h,p){s.getVertexPosition(c,js),s.getVertexPosition(h,qs),s.getVertexPosition(p,Ys);const _=ax(s,e,t,r,js,qs,Ys,Nl);if(_){a&&(Dl.fromBufferAttribute(a,c),Il.fromBufferAttribute(a,h),Ul.fromBufferAttribute(a,p),_.uv=Ci.getInterpolation(Nl,js,qs,Ys,Dl,Il,Ul,new _t)),l&&(Dl.fromBufferAttribute(l,c),Il.fromBufferAttribute(l,h),Ul.fromBufferAttribute(l,p),_.uv1=Ci.getInterpolation(Nl,js,qs,Ys,Dl,Il,Ul,new _t)),f&&(Dm.fromBufferAttribute(f,c),Im.fromBufferAttribute(f,h),Um.fromBufferAttribute(f,p),_.normal=Ci.getInterpolation(Nl,js,qs,Ys,Dm,Im,Um,new W),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:c,b:h,c:p,normal:new W,materialIndex:0};Ci.getNormal(js,qs,Ys,g.normal),_.face=g}return _}class ki extends rn{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,a,f,2),E("x","z","y",1,-1,e,r,-t,a,f,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2));function E(w,x,v,I,R,b,B,k,P,Z,me){const A=b/P,U=B/Z,pe=b/2,fe=B/2,G=k/2,K=P+1,ie=Z+1;let ee=0,O=0;const Q=new W;for(let $=0;$<ie;$++){const D=$*U-fe;for(let j=0;j<K;j++){const Me=j*A-pe;Q[w]=Me*I,Q[x]=D*R,Q[v]=G,p.push(Q.x,Q.y,Q.z),Q[w]=0,Q[x]=0,Q[v]=k>0?1:-1,_.push(Q.x,Q.y,Q.z),g.push(j/P),g.push(1-$/Z),ee+=1}}for(let $=0;$<Z;$++)for(let D=0;D<P;D++){const j=y+D+K*$,Me=y+D+K*($+1),Y=y+(D+1)+K*($+1),ae=y+(D+1)+K*$;h.push(j,Me,ae),h.push(Me,Y,ae),O+=6}c.addGroup(S,O,me),S+=O,y+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=mo(s[t]);for(const a in r)e[a]=r[a]}return e}function lx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vg(s){return s.getRenderTarget()===null?s.outputColorSpace:Ht.workingColorSpace}const ux={clone:mo,merge:Bn};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Wg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new W,Nm=new _t,Fm=new _t;class Zn extends Wg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Fm),t.subVectors(Fm,Nm)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tf*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ks=1;class dx extends sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn($s,Ks,e,t);a.layers=this.layers,this.add(a);const l=new Zn($s,Ks,e,t);l.layers=this.layers,this.add(l);const f=new Zn($s,Ks,e,t);f.layers=this.layers,this.add(f);const c=new Zn($s,Ks,e,t);c.layers=this.layers,this.add(c);const h=new Zn($s,Ks,e,t);h.layers=this.layers,this.add(h);const p=new Zn($s,Ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const p of t)this.remove(p);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Xg extends Vn{constructor(e,t,r,a,l,f,c,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,r,a,l,f,c,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hx extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Xg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ki(5,5,5),l=new nr({name:"CubemapFromEquirect",uniforms:mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Lr});l.uniforms.tEquirect.value=t;const f=new nn(a,l),c=t.minFilter;return t.minFilter===ls&&(t.minFilter=Kn),new dx(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const Mf=new W,px=new W,mx=new Rt;class rs{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Mf.subVectors(r,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Mf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||mx.getNormalMatrix(e),a=this.coplanarPoint(Mf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new pa,zl=new W;class id{constructor(e=new rs,t=new rs,r=new rs,a=new rs,l=new rs,f=new rs){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],p=a[4],_=a[5],g=a[6],y=a[7],S=a[8],E=a[9],w=a[10],x=a[11],v=a[12],I=a[13],R=a[14],b=a[15];if(r[0].setComponents(h-l,y-p,x-S,b-v).normalize(),r[1].setComponents(h+l,y+p,x+S,b+v).normalize(),r[2].setComponents(h+f,y+_,x+E,b+I).normalize(),r[3].setComponents(h-f,y-_,x-E,b-I).normalize(),r[4].setComponents(h-c,y-g,x-w,b-R).normalize(),t===tr)r[5].setComponents(h+c,y+g,x+w,b+R).normalize();else if(t===au)r[5].setComponents(c,g,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(zl.x=a.normal.x>0?e.max.x:e.min.x,zl.y=a.normal.y>0?e.max.y:e.min.y,zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jg(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gx(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,y=p.usage,S=g.byteLength,E=s.createBuffer();s.bindBuffer(_,E),s.bufferData(_,g,y),p.onUploadCallback();let w;if(g instanceof Float32Array)w=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)w=s.SHORT;else if(g instanceof Uint32Array)w=s.UNSIGNED_INT;else if(g instanceof Int32Array)w=s.INT;else if(g instanceof Int8Array)w=s.BYTE;else if(g instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:w,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,_,g){const y=_.array,S=_._updateRange,E=_.updateRanges;if(s.bindBuffer(g,p),S.count===-1&&E.length===0&&s.bufferSubData(g,0,y),E.length!==0){for(let w=0,x=E.length;w<x;w++){const v=E[w];t?s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):s.bufferSubData(g,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(g,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);if(g===void 0)r.set(p,a(p,_));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,p,_),g.version=p.version}}return{get:f,remove:c,update:h}}class ma extends rn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),p=c+1,_=h+1,g=e/c,y=t/h,S=[],E=[],w=[],x=[];for(let v=0;v<_;v++){const I=v*y-f;for(let R=0;R<p;R++){const b=R*g-l;E.push(b,-I,0),w.push(0,0,1),x.push(R/c),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let I=0;I<c;I++){const R=I+p*v,b=I+p*(v+1),B=I+1+p*(v+1),k=I+1+p*v;S.push(R,b,k),S.push(b,B,k)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(w,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var _x=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
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
	
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
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
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
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
#endif`,uS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
}`,US=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,XS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:_x,alphahash_pars_fragment:vx,alphamap_fragment:xx,alphamap_pars_fragment:yx,alphatest_fragment:Sx,alphatest_pars_fragment:Mx,aomap_fragment:Ex,aomap_pars_fragment:wx,batching_pars_vertex:Tx,batching_vertex:Ax,begin_vertex:Rx,beginnormal_vertex:Cx,bsdfs:bx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Nx,color_fragment:Fx,color_pars_fragment:Ox,color_pars_vertex:zx,color_vertex:kx,common:Bx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Wx,emissivemap_fragment:Xx,emissivemap_pars_fragment:jx,colorspace_fragment:qx,colorspace_pars_fragment:Yx,envmap_fragment:$x,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:cy,envmap_vertex:Jx,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_fragment:sy,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:ly,lights_pars_begin:uy,lights_toon_fragment:fy,lights_toon_pars_fragment:dy,lights_phong_fragment:hy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:_y,lights_fragment_maps:vy,lights_fragment_end:xy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Ey,map_fragment:wy,map_pars_fragment:Ty,map_particle_fragment:Ay,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:by,morphinstance_vertex:Py,morphcolor_vertex:Ly,morphnormal_vertex:Dy,morphtarget_pars_vertex:Iy,morphtarget_vertex:Uy,normal_fragment_begin:Ny,normal_fragment_maps:Fy,normal_pars_fragment:Oy,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:jy,premultiplied_alpha_fragment:qy,project_vertex:Yy,dithering_fragment:$y,dithering_pars_fragment:Ky,roughnessmap_fragment:Zy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:eS,shadowmap_vertex:tS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:rS,skinning_vertex:sS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:uS,tonemapping_pars_fragment:cS,transmission_fragment:fS,transmission_pars_fragment:dS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:_S,background_frag:vS,backgroundCube_vert:xS,backgroundCube_frag:yS,cube_vert:SS,cube_frag:MS,depth_vert:ES,depth_frag:wS,distanceRGBA_vert:TS,distanceRGBA_frag:AS,equirect_vert:RS,equirect_frag:CS,linedashed_vert:bS,linedashed_frag:PS,meshbasic_vert:LS,meshbasic_frag:DS,meshlambert_vert:IS,meshlambert_frag:US,meshmatcap_vert:NS,meshmatcap_frag:FS,meshnormal_vert:OS,meshnormal_frag:zS,meshphong_vert:kS,meshphong_frag:BS,meshphysical_vert:HS,meshphysical_frag:GS,meshtoon_vert:VS,meshtoon_frag:WS,points_vert:XS,points_frag:jS,shadow_vert:qS,shadow_frag:YS,sprite_vert:$S,sprite_frag:KS},Fe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Bn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Bn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Bn([Fe.points,Fe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Bn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Bn([Fe.common,Fe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Bn([Fe.sprite,Fe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Bn([Fe.common,Fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Bn([Fe.lights,Fe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const kl={r:0,b:0,g:0},ts=new bi,ZS=new Wt;function QS(s,e,t,r,a,l,f){const c=new Et(0);let h=l===!0?0:1,p,_,g=null,y=0,S=null;function E(x,v){let I=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?t:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),I=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,f):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===du)?(_===void 0&&(_=new nn(new ki(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:mo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,k,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),ts.copy(v.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(ts)),_.material.toneMapped=Ht.getTransfer(R.colorSpace)!==qt,(g!==R||y!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new nn(new ma(2,2),new nr({name:"BackgroundMaterial",uniforms:mo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Ht.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||y!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,y=R.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,v){x.getRGB(kl,Vg(s)),r.buffers.color.setClear(kl.r,kl.g,kl.b,v,f)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),h=v,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,w(c,h)},render:E}}function JS(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=x(null);let p=h,_=!1;function g(G,K,ie,ee,O){let Q=!1;if(f){const $=w(ee,ie,K);p!==$&&(p=$,S(p.object)),Q=v(G,ee,ie,O),Q&&I(G,ee,ie,O)}else{const $=K.wireframe===!0;(p.geometry!==ee.id||p.program!==ie.id||p.wireframe!==$)&&(p.geometry=ee.id,p.program=ie.id,p.wireframe=$,Q=!0)}O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(Q||_)&&(_=!1,Z(G,K,ie,ee),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(G){return r.isWebGL2?s.bindVertexArray(G):l.bindVertexArrayOES(G)}function E(G){return r.isWebGL2?s.deleteVertexArray(G):l.deleteVertexArrayOES(G)}function w(G,K,ie){const ee=ie.wireframe===!0;let O=c[G.id];O===void 0&&(O={},c[G.id]=O);let Q=O[K.id];Q===void 0&&(Q={},O[K.id]=Q);let $=Q[ee];return $===void 0&&($=x(y()),Q[ee]=$),$}function x(G){const K=[],ie=[],ee=[];for(let O=0;O<a;O++)K[O]=0,ie[O]=0,ee[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:ee,object:G,attributes:{},index:null}}function v(G,K,ie,ee){const O=p.attributes,Q=K.attributes;let $=0;const D=ie.getAttributes();for(const j in D)if(D[j].location>=0){const Y=O[j];let ae=Q[j];if(ae===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(ae=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(ae=G.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;$++}return p.attributesNum!==$||p.index!==ee}function I(G,K,ie,ee){const O={},Q=K.attributes;let $=0;const D=ie.getAttributes();for(const j in D)if(D[j].location>=0){let Y=Q[j];Y===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),O[j]=ae,$++}p.attributes=O,p.attributesNum=$,p.index=ee}function R(){const G=p.newAttributes;for(let K=0,ie=G.length;K<ie;K++)G[K]=0}function b(G){B(G,0)}function B(G,K){const ie=p.newAttributes,ee=p.enabledAttributes,O=p.attributeDivisors;ie[G]=1,ee[G]===0&&(s.enableVertexAttribArray(G),ee[G]=1),O[G]!==K&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,K),O[G]=K)}function k(){const G=p.newAttributes,K=p.enabledAttributes;for(let ie=0,ee=K.length;ie<ee;ie++)K[ie]!==G[ie]&&(s.disableVertexAttribArray(ie),K[ie]=0)}function P(G,K,ie,ee,O,Q,$){$===!0?s.vertexAttribIPointer(G,K,ie,O,Q):s.vertexAttribPointer(G,K,ie,ee,O,Q)}function Z(G,K,ie,ee){if(r.isWebGL2===!1&&(G.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const O=ee.attributes,Q=ie.getAttributes(),$=K.defaultAttributeValues;for(const D in Q){const j=Q[D];if(j.location>=0){let Me=O[D];if(Me===void 0&&(D==="instanceMatrix"&&G.instanceMatrix&&(Me=G.instanceMatrix),D==="instanceColor"&&G.instanceColor&&(Me=G.instanceColor)),Me!==void 0){const Y=Me.normalized,ae=Me.itemSize,xe=t.get(Me);if(xe===void 0)continue;const Oe=xe.buffer,De=xe.type,Ae=xe.bytesPerElement,lt=r.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||Me.gpuType===Ag);if(Me.isInterleavedBufferAttribute){const it=Me.data,te=it.stride,Ft=Me.offset;if(it.isInstancedInterleavedBuffer){for(let Je=0;Je<j.locationSize;Je++)B(j.location+Je,it.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Je=0;Je<j.locationSize;Je++)b(j.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Je=0;Je<j.locationSize;Je++)P(j.location+Je,ae/j.locationSize,De,Y,te*Ae,(Ft+ae/j.locationSize*Je)*Ae,lt)}else{if(Me.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)B(j.location+it,Me.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let it=0;it<j.locationSize;it++)b(j.location+it);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let it=0;it<j.locationSize;it++)P(j.location+it,ae/j.locationSize,De,Y,ae*Ae,ae/j.locationSize*it*Ae,lt)}}else if($!==void 0){const Y=$[D];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(j.location,Y);break;case 3:s.vertexAttrib3fv(j.location,Y);break;case 4:s.vertexAttrib4fv(j.location,Y);break;default:s.vertexAttrib1fv(j.location,Y)}}}}k()}function me(){pe();for(const G in c){const K=c[G];for(const ie in K){const ee=K[ie];for(const O in ee)E(ee[O].object),delete ee[O];delete K[ie]}delete c[G]}}function A(G){if(c[G.id]===void 0)return;const K=c[G.id];for(const ie in K){const ee=K[ie];for(const O in ee)E(ee[O].object),delete ee[O];delete K[ie]}delete c[G.id]}function U(G){for(const K in c){const ie=c[K];if(ie[G.id]===void 0)continue;const ee=ie[G.id];for(const O in ee)E(ee[O].object),delete ee[O];delete ie[G.id]}}function pe(){fe(),_=!0,p!==h&&(p=h,S(p.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:pe,resetDefaultState:fe,dispose:me,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:b,disableUnusedAttributes:k}}function eM(s,e,t,r){const a=r.isWebGL2;let l;function f(_){l=_}function c(_,g){s.drawArrays(l,_,g),t.update(g,l,1)}function h(_,g,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,_,g,y),t.update(g,l,y)}function p(_,g,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(_[E],g[E]);else{S.multiDrawArraysWEBGL(l,_,0,g,0,y);let E=0;for(let w=0;w<y;w++)E+=g[w];t.update(E,l,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function tM(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,b=f||e.has("OES_texture_float"),B=R&&b,k=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:I,vertexTextures:R,floatFragmentTextures:b,floatVertexTextures:B,maxSamples:k}}function nM(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new rs,c=new Rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||a;return a=y,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){t=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!a||E===null||E.length===0||l&&!x)l?_(null):p();else{const I=l?0:r,R=I*4;let b=v.clippingState||null;h.value=b,b=_(E,y,R,S);for(let B=0;B!==R;++B)b[B]=t[B];v.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=h.value,E!==!0||x===null){const v=S+w*4,I=y.matrixWorldInverse;c.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,b=S;R!==w;++R,b+=4)f.copy(g[R]).applyMatrix4(I,c),f.normal.toArray(x,b),x[b+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function iM(s){let e=new WeakMap;function t(f,c){return c===Bf?f.mapping=fo:c===Hf&&(f.mapping=ho),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Bf||c===Hf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new hx(h.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class qg extends Wg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=4,Om=[.125,.215,.35,.446,.526,.582],as=20,Ef=new qg,zm=new Et;let wf=null,Tf=0,Af=0;const ss=(1+Math.sqrt(5))/2,Zs=1/ss,km=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ss,Zs),new W(0,ss,-Zs),new W(Zs,0,ss),new W(-Zs,0,ss),new W(ss,Zs,0),new W(-ss,Zs,0)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){wf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Tf,Af),e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:fa,format:Ri,colorSpace:Fr,depthBuffer:!1},a=Hm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(l)),this._blurMaterial=sM(l,e,t)}return a}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Ef)}_sceneToCubeUV(e,t,r,a){const c=new Zn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(zm),_.toneMapping=Dr,_.autoClear=!1;const S=new oo({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),E=new nn(new ki,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(zm),w=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(c.up.set(0,h[v],0),c.lookAt(p[v],0,0)):I===1?(c.up.set(0,0,h[v]),c.lookAt(0,p[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,p[v]));const R=this._cubeSize;Bl(a,I*R,v>2?R:0,R,R),_.setRenderTarget(a),w&&_.render(E,c),_.render(e,c)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===fo||e.mapping===ho;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new nn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Bl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,Ef)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=km[(a-1)%km.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new nn(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*as-1),w=l/E,x=isFinite(l)?1+Math.floor(_*w):as;x>as&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${as}`);const v=[];let I=0;for(let P=0;P<as;++P){const Z=P/w,me=Math.exp(-Z*Z/2);v.push(me),P===0?I+=me:P<x&&(I+=2*me)}for(let P=0;P<v.length;P++)v[P]=v[P]/I;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=f==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-r;const b=this._sizeLods[a],B=3*b*(a>R-ao?a-R+ao:0),k=4*(this._cubeSize-b);Bl(t,B,k,3*b,2*b),h.setRenderTarget(t),h.render(g,Ef)}}function rM(s){const e=[],t=[],r=[];let a=s;const l=s-ao+1+Om.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-ao?h=Om[f-s+ao-1]:f===0&&(h=0),r.push(h);const p=1/(c-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,w=3,x=2,v=1,I=new Float32Array(w*E*S),R=new Float32Array(x*E*S),b=new Float32Array(v*E*S);for(let k=0;k<S;k++){const P=k%3*2/3-1,Z=k>2?0:-1,me=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];I.set(me,w*E*k),R.set(y,x*E*k);const A=[k,k,k,k,k,k];b.set(A,v*E*k)}const B=new rn;B.setAttribute("position",new oi(I,w)),B.setAttribute("uv",new oi(R,x)),B.setAttribute("faceIndex",new oi(b,v)),e.push(B),a>ao&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Hm(s,e,t){const r=new fs(s,e,t);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function sM(s,e,t){const r=new Float32Array(as),a=new W(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Gm(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Vm(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function oM(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===Bf||h===Hf,_=h===fo||h===ho;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new Bm(s)),g=p?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&a(g)){t===null&&(t=new Bm(s));const y=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function aM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function lM(s,e,t,r){const a={},l=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const w=y.morphAttributes[E];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}y.removeEventListener("dispose",f),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(g,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,t.memory.geometries++),y}function h(g){const y=g.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const w=S[E];for(let x=0,v=w.length;x<v;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(g){const y=[],S=g.index,E=g.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let R=0,b=I.length;R<b;R+=3){const B=I[R+0],k=I[R+1],P=I[R+2];y.push(B,k,k,P,P,B)}}else if(E!==void 0){const I=E.array;w=E.version;for(let R=0,b=I.length/3-1;R<b;R+=3){const B=R+0,k=R+1,P=R+2;y.push(B,k,k,P,P,B)}}else return;const x=new(Ug(y)?Gg:Hg)(y,1);x.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const y=l.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:c,update:h,getWireframeAttribute:_}}function uM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function _(S,E){s.drawElements(l,E,c,S*h),t.update(E,l,1)}function g(S,E,w){if(w===0)return;let x,v;if(a)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](l,E,c,S*h,w),t.update(E,l,w)}function y(S,E,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<w;v++)this.render(S[v]/h,E[v]);else{x.multiDrawElementsWEBGL(l,E,0,c,S,0,w);let v=0;for(let I=0;I<w;I++)v+=E[I];t.update(v,l,1)}}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g,this.renderMultiDraw=y}function cM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function fM(s,e){return s[0]-e[0]}function dM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hM(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new Zt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,_,g){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=E!==void 0?E.length:0;let x=l.get(_);if(x===void 0||x.count!==w){let fe=function(){U.dispose(),l.delete(_),_.removeEventListener("dispose",fe)};var S=fe;x!==void 0&&x.texture.dispose();const v=_.morphAttributes.position!==void 0,I=_.morphAttributes.normal!==void 0,R=_.morphAttributes.color!==void 0,b=_.morphAttributes.position||[],B=_.morphAttributes.normal||[],k=_.morphAttributes.color||[];let P=0;v===!0&&(P=1),I===!0&&(P=2),R===!0&&(P=3);let Z=_.attributes.position.count*P,me=1;Z>e.maxTextureSize&&(me=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const A=new Float32Array(Z*me*4*w),U=new zg(A,Z,me,w);U.type=er,U.needsUpdate=!0;const pe=P*4;for(let G=0;G<w;G++){const K=b[G],ie=B[G],ee=k[G],O=Z*me*4*G;for(let Q=0;Q<K.count;Q++){const $=Q*pe;v===!0&&(f.fromBufferAttribute(K,Q),A[O+$+0]=f.x,A[O+$+1]=f.y,A[O+$+2]=f.z,A[O+$+3]=0),I===!0&&(f.fromBufferAttribute(ie,Q),A[O+$+4]=f.x,A[O+$+5]=f.y,A[O+$+6]=f.z,A[O+$+7]=0),R===!0&&(f.fromBufferAttribute(ee,Q),A[O+$+8]=f.x,A[O+$+9]=f.y,A[O+$+10]=f.z,A[O+$+11]=ee.itemSize===4?f.w:1)}}x={count:w,texture:U,size:new _t(Z,me)},l.set(_,x),_.addEventListener("dispose",fe)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",p.morphTexture,t);else{let v=0;for(let R=0;R<y.length;R++)v+=y[R];const I=_.morphTargetsRelative?1:1-v;g.getUniforms().setValue(s,"morphTargetBaseInfluence",I),g.getUniforms().setValue(s,"morphTargetInfluences",y)}g.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let w=r[_.id];if(w===void 0||w.length!==E){w=[];for(let b=0;b<E;b++)w[b]=[b,0];r[_.id]=w}for(let b=0;b<E;b++){const B=w[b];B[0]=b,B[1]=y[b]}w.sort(dM);for(let b=0;b<8;b++)b<E&&w[b][1]?(c[b][0]=w[b][0],c[b][1]=w[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(fM);const x=_.morphAttributes.position,v=_.morphAttributes.normal;let I=0;for(let b=0;b<8;b++){const B=c[b],k=B[0],P=B[1];k!==Number.MAX_SAFE_INTEGER&&P?(x&&_.getAttribute("morphTarget"+b)!==x[k]&&_.setAttribute("morphTarget"+b,x[k]),v&&_.getAttribute("morphNormal"+b)!==v[k]&&_.setAttribute("morphNormal"+b,v[k]),a[b]=P,I+=P):(x&&_.hasAttribute("morphTarget"+b)===!0&&_.deleteAttribute("morphTarget"+b),v&&_.hasAttribute("morphNormal"+b)===!0&&_.deleteAttribute("morphNormal"+b),a[b]=0)}const R=_.morphTargetsRelative?1:1-I;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function pM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return g}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class Yg extends Vn{constructor(e,t,r,a,l,f,c,h,p,_){if(_=_!==void 0?_:cs,_!==cs&&_!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===cs&&(r=Pr),r===void 0&&_===po&&(r=us),super(null,a,l,f,c,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Hn,this.minFilter=h!==void 0?h:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $g=new Vn,Kg=new Yg(1,1);Kg.compareFunction=Ig;const Zg=new zg,Qg=new Kv,Jg=new Xg,Wm=[],Xm=[],jm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function vo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Wm[a];if(l===void 0&&(l=new Float32Array(a),Wm[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pu(s,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Ym.set(r),s.uniformMatrix2fv(this.addr,!1,Ym),pn(t,r)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;qm.set(r),s.uniformMatrix3fv(this.addr,!1,qm),pn(t,r)}}function SM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;jm.set(r),s.uniformMatrix4fv(this.addr,!1,jm),pn(t,r)}}function MM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function AM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Kg:$g;t.setTexture2D(e||l,a)}function LM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Qg,a)}function DM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Jg,a)}function IM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Zg,a)}function UM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return IM}}function NM(s,e){s.uniform1fv(this.addr,e)}function FM(s,e){const t=vo(e,this.size,2);s.uniform2fv(this.addr,t)}function OM(s,e){const t=vo(e,this.size,3);s.uniform3fv(this.addr,t)}function zM(s,e){const t=vo(e,this.size,4);s.uniform4fv(this.addr,t)}function kM(s,e){const t=vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function BM(s,e){const t=vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HM(s,e){const t=vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GM(s,e){s.uniform1iv(this.addr,e)}function VM(s,e){s.uniform2iv(this.addr,e)}function WM(s,e){s.uniform3iv(this.addr,e)}function XM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function qM(s,e){s.uniform2uiv(this.addr,e)}function YM(s,e){s.uniform3uiv(this.addr,e)}function $M(s,e){s.uniform4uiv(this.addr,e)}function KM(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||$g,l[f])}function ZM(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Qg,l[f])}function QM(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Jg,l[f])}function JM(s,e,t){const r=this.cache,a=e.length,l=pu(t,a);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Zg,l[f])}function eE(s){switch(s){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return zM;case 35674:return kM;case 35675:return BM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return VM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return jM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return JM}}class tE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=UM(t.type)}}class nE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eE(t.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function $m(s,e){s.seq.push(e),s.map[e.id]=e}function rE(s,e,t){const r=s.name,a=r.length;for(Rf.lastIndex=0;;){const l=Rf.exec(r),f=Rf.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){$m(t,p===void 0?new tE(c,s,e):new nE(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new iE(c),$m(t,g)),t=g}}}class tu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);rE(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Km(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const sE=37297;let oE=0;function aE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function lE(s){const e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(s);let r;switch(e===t?r="":e===ou&&t===su?r="LinearDisplayP3ToLinearSRGB":e===su&&t===ou&&(r="LinearSRGBToLinearDisplayP3"),s){case Fr:case hu:return[r,"LinearTransferOETF"];case Fi:case td:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+aE(s.getShaderSource(e),f)}else return a}function uE(s,e){const t=lE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cE(s,e){let t;switch(e){case xv:t="Linear";break;case yv:t="Reinhard";break;case Sv:t="OptimizedCineon";break;case Mv:t="ACESFilmic";break;case wv:t="AgX";break;case Tv:t="Neutral";break;case Ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function dE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function hE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function lo(s){return s!==""}function Qm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(mE,_E)}const gE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _E(s,e){let t=At[e];if(t===void 0){const r=gE.get(e);if(r!==void 0)t=At[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(s){return s.replace(vE,xE)}function xE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function tg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function yE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function SE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fo:case ho:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ME(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function wE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function TE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=yE(t),p=SE(t),_=ME(t),g=EE(t),y=wE(t),S=t.isWebGL2?"":fE(t),E=dE(t),w=hE(l),x=a.createProgram();let v,I,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),v.length>0&&(v+=`
`),I=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),I.length>0&&(I+=`
`)):(v=[tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),I=[S,tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?At.tonemapping_pars_fragment:"",t.toneMapping!==Dr?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,uE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),f=qf(f),f=Qm(f,t),f=Jm(f,t),c=qf(c),c=Qm(c,t),c=Jm(c,t),f=eg(f),c=eg(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,I=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);const b=R+v+f,B=R+I+c,k=Km(a,a.VERTEX_SHADER,b),P=Km(a,a.FRAGMENT_SHADER,B);a.attachShader(x,k),a.attachShader(x,P),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function Z(pe){if(s.debug.checkShaderErrors){const fe=a.getProgramInfoLog(x).trim(),G=a.getShaderInfoLog(k).trim(),K=a.getShaderInfoLog(P).trim();let ie=!0,ee=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,k,P);else{const O=Zm(a,k,"vertex"),Q=Zm(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+pe.name+`
Material Type: `+pe.type+`

Program Info Log: `+fe+`
`+O+`
`+Q)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(G===""||K==="")&&(ee=!1);ee&&(pe.diagnostics={runnable:ie,programLog:fe,vertexShader:{log:G,prefix:v},fragmentShader:{log:K,prefix:I}})}a.deleteShader(k),a.deleteShader(P),me=new tu(a,x),A=pE(a,x)}let me;this.getUniforms=function(){return me===void 0&&Z(this),me};let A;this.getAttributes=function(){return A===void 0&&Z(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(x,sE)),U},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=k,this.fragmentShader=P,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function bE(s,e,t,r,a,l,f){const c=new kg,h=new RE,p=new Set,_=[],g=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return p.add(A),A===0?"uv":`uv${A}`}function v(A,U,pe,fe,G){const K=fe.fog,ie=G.geometry,ee=A.isMeshStandardMaterial?fe.environment:null,O=(A.isMeshStandardMaterial?t:e).get(A.envMap||ee),Q=O&&O.mapping===du?O.image.height:null,$=w[A.type];A.precision!==null&&(E=a.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const D=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,j=D!==void 0?D.length:0;let Me=0;ie.morphAttributes.position!==void 0&&(Me=1),ie.morphAttributes.normal!==void 0&&(Me=2),ie.morphAttributes.color!==void 0&&(Me=3);let Y,ae,xe,Oe;if($){const ft=Oi[$];Y=ft.vertexShader,ae=ft.fragmentShader}else Y=A.vertexShader,ae=A.fragmentShader,h.update(A),xe=h.getVertexShaderID(A),Oe=h.getFragmentShaderID(A);const De=s.getRenderTarget(),Ae=G.isInstancedMesh===!0,lt=G.isBatchedMesh===!0,it=!!A.map,te=!!A.matcap,Ft=!!O,Je=!!A.aoMap,ut=!!A.lightMap,Be=!!A.bumpMap,xt=!!A.normalMap,qe=!!A.displacementMap,ht=!!A.emissiveMap,Mt=!!A.metalnessMap,L=!!A.roughnessMap,T=A.anisotropy>0,he=A.clearcoat>0,_e=A.iridescence>0,Te=A.sheen>0,Se=A.transmission>0,ct=T&&!!A.anisotropyMap,tt=he&&!!A.clearcoatMap,Ie=he&&!!A.clearcoatNormalMap,Ue=he&&!!A.clearcoatRoughnessMap,ze=_e&&!!A.iridescenceMap,be=_e&&!!A.iridescenceThicknessMap,Nt=Te&&!!A.sheenColorMap,rt=Te&&!!A.sheenRoughnessMap,$e=!!A.specularMap,Ne=!!A.specularColorMap,Ge=!!A.specularIntensityMap,nt=Se&&!!A.transmissionMap,je=Se&&!!A.thicknessMap,ye=!!A.gradientMap,F=!!A.alphaMap,se=A.alphaTest>0,H=!!A.alphaHash,ge=!!A.extensions;let ve=Dr;A.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ve=s.toneMapping);const ke={isWebGL2:g,shaderID:$,shaderType:A.type,shaderName:A.name,vertexShader:Y,fragmentShader:ae,defines:A.defines,customVertexShaderID:xe,customFragmentShaderID:Oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:lt,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Fr,alphaToCoverage:!!A.alphaToCoverage,map:it,matcap:te,envMap:Ft,envMapMode:Ft&&O.mapping,envMapCubeUVHeight:Q,aoMap:Je,lightMap:ut,bumpMap:Be,normalMap:xt,displacementMap:S&&qe,emissiveMap:ht,normalMapObjectSpace:xt&&A.normalMapType===Fv,normalMapTangentSpace:xt&&A.normalMapType===ed,metalnessMap:Mt,roughnessMap:L,anisotropy:T,anisotropyMap:ct,clearcoat:he,clearcoatMap:tt,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ue,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:be,sheen:Te,sheenColorMap:Nt,sheenRoughnessMap:rt,specularMap:$e,specularColorMap:Ne,specularIntensityMap:Ge,transmission:Se,transmissionMap:nt,thicknessMap:je,gradientMap:ye,opaque:A.transparent===!1&&A.blending===uo&&A.alphaToCoverage===!1,alphaMap:F,alphaTest:se,alphaHash:H,combine:A.combine,mapUv:it&&x(A.map.channel),aoMapUv:Je&&x(A.aoMap.channel),lightMapUv:ut&&x(A.lightMap.channel),bumpMapUv:Be&&x(A.bumpMap.channel),normalMapUv:xt&&x(A.normalMap.channel),displacementMapUv:qe&&x(A.displacementMap.channel),emissiveMapUv:ht&&x(A.emissiveMap.channel),metalnessMapUv:Mt&&x(A.metalnessMap.channel),roughnessMapUv:L&&x(A.roughnessMap.channel),anisotropyMapUv:ct&&x(A.anisotropyMap.channel),clearcoatMapUv:tt&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:rt&&x(A.sheenRoughnessMap.channel),specularMapUv:$e&&x(A.specularMap.channel),specularColorMapUv:Ne&&x(A.specularColorMap.channel),specularIntensityMapUv:Ge&&x(A.specularIntensityMap.channel),transmissionMapUv:nt&&x(A.transmissionMap.channel),thicknessMapUv:je&&x(A.thicknessMap.channel),alphaMapUv:F&&x(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(xt||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ie.attributes.uv&&(it||F),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:G.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Me,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&pe.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:it&&A.map.isVideoTexture===!0&&Ht.getTransfer(A.map.colorSpace)===qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===si,flipSided:A.side===Gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:ge&&A.extensions.derivatives===!0,extensionFragDepth:ge&&A.extensions.fragDepth===!0,extensionDrawBuffers:ge&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&A.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ke.vertexUv1s=p.has(1),ke.vertexUv2s=p.has(2),ke.vertexUv3s=p.has(3),p.clear(),ke}function I(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const pe in A.defines)U.push(pe),U.push(A.defines[pe]);return A.isRawShaderMaterial===!1&&(R(U,A),b(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function R(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function b(A,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),A.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),A.push(c.mask)}function B(A){const U=w[A.type];let pe;if(U){const fe=Oi[U];pe=ux.clone(fe.uniforms)}else pe=A.uniforms;return pe}function k(A,U){let pe;for(let fe=0,G=_.length;fe<G;fe++){const K=_[fe];if(K.cacheKey===U){pe=K,++pe.usedTimes;break}}return pe===void 0&&(pe=new TE(s,U,A,l),_.push(pe)),pe}function P(A){if(--A.usedTimes===0){const U=_.indexOf(A);_[U]=_[_.length-1],_.pop(),A.destroy()}}function Z(A){h.remove(A)}function me(){h.dispose()}return{getParameters:v,getProgramCacheKey:I,getUniforms:B,acquireProgram:k,releaseProgram:P,releaseShaderCache:Z,programs:_,dispose:me}}function PE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function LE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ig(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(g,y,S,E,w,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:w,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=w,v.group=x),e++,v}function c(g,y,S,E,w,x){const v=f(g,y,S,E,w,x);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,y,S,E,w,x){const v=f(g,y,S,E,w,x);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,y){t.length>1&&t.sort(g||LE),r.length>1&&r.sort(y||ng),a.length>1&&a.sort(y||ng)}function _(){for(let g=e,y=s.length;g<y;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:_,sort:p}}function DE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new ig,s.set(r,[f])):a>=l.length?(f=new ig,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Et};break;case"SpotLight":t={position:new W,direction:new W,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function UE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NE=0;function FE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OE(s,e){const t=new IE,r=UE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)a.probe.push(new W);const l=new W,f=new Wt,c=new Wt;function h(_,g){let y=0,S=0,E=0;for(let pe=0;pe<9;pe++)a.probe[pe].set(0,0,0);let w=0,x=0,v=0,I=0,R=0,b=0,B=0,k=0,P=0,Z=0,me=0;_.sort(FE);const A=g===!0?Math.PI:1;for(let pe=0,fe=_.length;pe<fe;pe++){const G=_[pe],K=G.color,ie=G.intensity,ee=G.distance,O=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)y+=K.r*ie*A,S+=K.g*ie*A,E+=K.b*ie*A;else if(G.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(G.sh.coefficients[Q],ie);me++}else if(G.isDirectionalLight){const Q=t.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity*A),G.castShadow){const $=G.shadow,D=r.get(G);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,a.directionalShadow[w]=D,a.directionalShadowMap[w]=O,a.directionalShadowMatrix[w]=G.shadow.matrix,b++}a.directional[w]=Q,w++}else if(G.isSpotLight){const Q=t.get(G);Q.position.setFromMatrixPosition(G.matrixWorld),Q.color.copy(K).multiplyScalar(ie*A),Q.distance=ee,Q.coneCos=Math.cos(G.angle),Q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Q.decay=G.decay,a.spot[v]=Q;const $=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,$.updateMatrices(G),G.castShadow&&Z++),a.spotLightMatrix[v]=$.matrix,G.castShadow){const D=r.get(G);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,a.spotShadow[v]=D,a.spotShadowMap[v]=O,k++}v++}else if(G.isRectAreaLight){const Q=t.get(G);Q.color.copy(K).multiplyScalar(ie),Q.halfWidth.set(G.width*.5,0,0),Q.halfHeight.set(0,G.height*.5,0),a.rectArea[I]=Q,I++}else if(G.isPointLight){const Q=t.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity*A),Q.distance=G.distance,Q.decay=G.decay,G.castShadow){const $=G.shadow,D=r.get(G);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,a.pointShadow[x]=D,a.pointShadowMap[x]=O,a.pointShadowMatrix[x]=G.shadow.matrix,B++}a.point[x]=Q,x++}else if(G.isHemisphereLight){const Q=t.get(G);Q.skyColor.copy(G.color).multiplyScalar(ie*A),Q.groundColor.copy(G.groundColor).multiplyScalar(ie*A),a.hemi[R]=Q,R++}}I>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const U=a.hash;(U.directionalLength!==w||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==I||U.hemiLength!==R||U.numDirectionalShadows!==b||U.numPointShadows!==B||U.numSpotShadows!==k||U.numSpotMaps!==P||U.numLightProbes!==me)&&(a.directional.length=w,a.spot.length=v,a.rectArea.length=I,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=B,a.pointShadowMap.length=B,a.spotShadow.length=k,a.spotShadowMap.length=k,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=B,a.spotLightMatrix.length=k+P-Z,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=Z,a.numLightProbes=me,U.directionalLength=w,U.pointLength=x,U.spotLength=v,U.rectAreaLength=I,U.hemiLength=R,U.numDirectionalShadows=b,U.numPointShadows=B,U.numSpotShadows=k,U.numSpotMaps=P,U.numLightProbes=me,a.version=NE++)}function p(_,g){let y=0,S=0,E=0,w=0,x=0;const v=g.matrixWorldInverse;for(let I=0,R=_.length;I<R;I++){const b=_[I];if(b.isDirectionalLight){const B=a.directional[y];B.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(v),y++}else if(b.isSpotLight){const B=a.spot[E];B.position.setFromMatrixPosition(b.matrixWorld),B.position.applyMatrix4(v),B.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(v),E++}else if(b.isRectAreaLight){const B=a.rectArea[w];B.position.setFromMatrixPosition(b.matrixWorld),B.position.applyMatrix4(v),c.identity(),f.copy(b.matrixWorld),f.premultiply(v),c.extractRotation(f),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),B.halfWidth.applyMatrix4(c),B.halfHeight.applyMatrix4(c),w++}else if(b.isPointLight){const B=a.point[S];B.position.setFromMatrixPosition(b.matrixWorld),B.position.applyMatrix4(v),S++}else if(b.isHemisphereLight){const B=a.hemi[x];B.direction.setFromMatrixPosition(b.matrixWorld),B.direction.transformDirection(v),x++}}}return{setup:h,setupView:p,state:a}}function rg(s,e){const t=new OE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(g){r.push(g)}function c(g){a.push(g)}function h(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function zE(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new rg(s,e),t.set(l,[h])):f>=c.length?(h=new rg(s,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class kE extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BE extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HE=`void main() {
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
}`;function VE(s,e,t){let r=new id;const a=new _t,l=new _t,f=new Zt,c=new kE({depthPacking:Nv}),h=new BE,p={},_=t.maxTextureSize,g={[Nr]:Gn,[Gn]:Nr,[si]:si},y=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new rn;E.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new nn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let v=this.type;this.render=function(k,P,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const me=s.getRenderTarget(),A=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),pe=s.state;pe.setBlending(Lr),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const fe=v!==Ji&&this.type===Ji,G=v===Ji&&this.type!==Ji;for(let K=0,ie=k.length;K<ie;K++){const ee=k[K],O=ee.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const Q=O.getFrameExtents();if(a.multiply(Q),l.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/Q.x),a.x=l.x*Q.x,O.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/Q.y),a.y=l.y*Q.y,O.mapSize.y=l.y)),O.map===null||fe===!0||G===!0){const D=this.type!==Ji?{minFilter:Hn,magFilter:Hn}:{};O.map!==null&&O.map.dispose(),O.map=new fs(a.x,a.y,D),O.map.texture.name=ee.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const $=O.getViewportCount();for(let D=0;D<$;D++){const j=O.getViewport(D);f.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),pe.viewport(f),O.updateMatrices(ee,D),r=O.getFrustum(),b(P,Z,O.camera,ee,this.type)}O.isPointLightShadow!==!0&&this.type===Ji&&I(O,Z),O.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(me,A,U)};function I(k,P){const Z=e.update(w);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new fs(a.x,a.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(P,null,Z,y,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(P,null,Z,S,w,null)}function R(k,P,Z,me){let A=null;const U=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(U!==void 0)A=U;else if(A=Z.isPointLight===!0?h:c,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const pe=A.uuid,fe=P.uuid;let G=p[pe];G===void 0&&(G={},p[pe]=G);let K=G[fe];K===void 0&&(K=A.clone(),G[fe]=K,P.addEventListener("dispose",B)),A=K}if(A.visible=P.visible,A.wireframe=P.wireframe,me===Ji?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:g[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,Z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const pe=s.properties.get(A);pe.light=Z}return A}function b(k,P,Z,me,A){if(k.visible===!1)return;if(k.layers.test(P.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const fe=e.update(k),G=k.material;if(Array.isArray(G)){const K=fe.groups;for(let ie=0,ee=K.length;ie<ee;ie++){const O=K[ie],Q=G[O.materialIndex];if(Q&&Q.visible){const $=R(k,Q,me,A);k.onBeforeShadow(s,k,P,Z,fe,$,O),s.renderBufferDirect(Z,null,fe,$,k,O),k.onAfterShadow(s,k,P,Z,fe,$,O)}}}else if(G.visible){const K=R(k,G,me,A);k.onBeforeShadow(s,k,P,Z,fe,K,null),s.renderBufferDirect(Z,null,fe,K,k,null),k.onAfterShadow(s,k,P,Z,fe,K,null)}}const pe=k.children;for(let fe=0,G=pe.length;fe<G;fe++)b(pe[fe],P,Z,me,A)}function B(k){k.target.removeEventListener("dispose",B);for(const Z in p){const me=p[Z],A=k.target.uuid;A in me&&(me[A].dispose(),delete me[A])}}}function WE(s,e,t){const r=t.isWebGL2;function a(){let F=!1;const se=new Zt;let H=null;const ge=new Zt(0,0,0,0);return{setMask:function(ve){H!==ve&&!F&&(s.colorMask(ve,ve,ve,ve),H=ve)},setLocked:function(ve){F=ve},setClear:function(ve,ke,ft,Ct,wt){wt===!0&&(ve*=Ct,ke*=Ct,ft*=Ct),se.set(ve,ke,ft,Ct),ge.equals(se)===!1&&(s.clearColor(ve,ke,ft,Ct),ge.copy(se))},reset:function(){F=!1,H=null,ge.set(-1,0,0,0)}}}function l(){let F=!1,se=null,H=null,ge=null;return{setTest:function(ve){ve?Ae(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(ve){se!==ve&&!F&&(s.depthMask(ve),se=ve)},setFunc:function(ve){if(H!==ve){switch(ve){case cv:s.depthFunc(s.NEVER);break;case fv:s.depthFunc(s.ALWAYS);break;case dv:s.depthFunc(s.LESS);break;case iu:s.depthFunc(s.LEQUAL);break;case hv:s.depthFunc(s.EQUAL);break;case pv:s.depthFunc(s.GEQUAL);break;case mv:s.depthFunc(s.GREATER);break;case gv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=ve}},setLocked:function(ve){F=ve},setClear:function(ve){ge!==ve&&(s.clearDepth(ve),ge=ve)},reset:function(){F=!1,se=null,H=null,ge=null}}}function f(){let F=!1,se=null,H=null,ge=null,ve=null,ke=null,ft=null,Ct=null,wt=null;return{setTest:function(pt){F||(pt?Ae(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(pt){se!==pt&&!F&&(s.stencilMask(pt),se=pt)},setFunc:function(pt,zt,an){(H!==pt||ge!==zt||ve!==an)&&(s.stencilFunc(pt,zt,an),H=pt,ge=zt,ve=an)},setOp:function(pt,zt,an){(ke!==pt||ft!==zt||Ct!==an)&&(s.stencilOp(pt,zt,an),ke=pt,ft=zt,Ct=an)},setLocked:function(pt){F=pt},setClear:function(pt){wt!==pt&&(s.clearStencil(pt),wt=pt)},reset:function(){F=!1,se=null,H=null,ge=null,ve=null,ke=null,ft=null,Ct=null,wt=null}}}const c=new a,h=new l,p=new f,_=new WeakMap,g=new WeakMap;let y={},S={},E=new WeakMap,w=[],x=null,v=!1,I=null,R=null,b=null,B=null,k=null,P=null,Z=null,me=new Et(0,0,0),A=0,U=!1,pe=null,fe=null,G=null,K=null,ie=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),O=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=Q>=2);let D=null,j={};const Me=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),ae=new Zt().fromArray(Me),xe=new Zt().fromArray(Y);function Oe(F,se,H,ge){const ve=new Uint8Array(4),ke=s.createTexture();s.bindTexture(F,ke),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<H;ft++)r&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(se+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return ke}const De={};De[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(De[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ae(s.DEPTH_TEST),h.setFunc(iu),qe(!1),ht(zp),Ae(s.CULL_FACE),Be(Lr);function Ae(F){y[F]!==!0&&(s.enable(F),y[F]=!0)}function lt(F){y[F]!==!1&&(s.disable(F),y[F]=!1)}function it(F,se){return S[F]!==se?(s.bindFramebuffer(F,se),S[F]=se,r&&(F===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=se),F===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function te(F,se){let H=w,ge=!1;if(F){H=E.get(se),H===void 0&&(H=[],E.set(se,H));const ve=F.textures;if(H.length!==ve.length||H[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,ft=ve.length;ke<ft;ke++)H[ke]=s.COLOR_ATTACHMENT0+ke;H.length=ve.length,ge=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,ge=!0);if(ge)if(t.isWebGL2)s.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ft(F){return x!==F?(s.useProgram(F),x=F,!0):!1}const Je={[os]:s.FUNC_ADD,[$_]:s.FUNC_SUBTRACT,[K_]:s.FUNC_REVERSE_SUBTRACT};if(r)Je[Gp]=s.MIN,Je[Vp]=s.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Je[Gp]=F.MIN_EXT,Je[Vp]=F.MAX_EXT)}const ut={[Z_]:s.ZERO,[Q_]:s.ONE,[J_]:s.SRC_COLOR,[zf]:s.SRC_ALPHA,[sv]:s.SRC_ALPHA_SATURATE,[iv]:s.DST_COLOR,[tv]:s.DST_ALPHA,[ev]:s.ONE_MINUS_SRC_COLOR,[kf]:s.ONE_MINUS_SRC_ALPHA,[rv]:s.ONE_MINUS_DST_COLOR,[nv]:s.ONE_MINUS_DST_ALPHA,[ov]:s.CONSTANT_COLOR,[av]:s.ONE_MINUS_CONSTANT_COLOR,[lv]:s.CONSTANT_ALPHA,[uv]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(F,se,H,ge,ve,ke,ft,Ct,wt,pt){if(F===Lr){v===!0&&(lt(s.BLEND),v=!1);return}if(v===!1&&(Ae(s.BLEND),v=!0),F!==Y_){if(F!==I||pt!==U){if((R!==os||k!==os)&&(s.blendEquation(s.FUNC_ADD),R=os,k=os),pt)switch(F){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.ONE,s.ONE);break;case Bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,B=null,P=null,Z=null,me.set(0,0,0),A=0,I=F,U=pt}return}ve=ve||se,ke=ke||H,ft=ft||ge,(se!==R||ve!==k)&&(s.blendEquationSeparate(Je[se],Je[ve]),R=se,k=ve),(H!==b||ge!==B||ke!==P||ft!==Z)&&(s.blendFuncSeparate(ut[H],ut[ge],ut[ke],ut[ft]),b=H,B=ge,P=ke,Z=ft),(Ct.equals(me)===!1||wt!==A)&&(s.blendColor(Ct.r,Ct.g,Ct.b,wt),me.copy(Ct),A=wt),I=F,U=!1}function xt(F,se){F.side===si?lt(s.CULL_FACE):Ae(s.CULL_FACE);let H=F.side===Gn;se&&(H=!H),qe(H),F.blending===uo&&F.transparent===!1?Be(Lr):Be(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),c.setMask(F.colorWrite);const ge=F.stencilWrite;p.setTest(ge),ge&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),L(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){pe!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),pe=F)}function ht(F){F!==X_?(Ae(s.CULL_FACE),F!==fe&&(F===zp?s.cullFace(s.BACK):F===j_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),fe=F}function Mt(F){F!==G&&(O&&s.lineWidth(F),G=F)}function L(F,se,H){F?(Ae(s.POLYGON_OFFSET_FILL),(K!==se||ie!==H)&&(s.polygonOffset(se,H),K=se,ie=H)):lt(s.POLYGON_OFFSET_FILL)}function T(F){F?Ae(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function he(F){F===void 0&&(F=s.TEXTURE0+ee-1),D!==F&&(s.activeTexture(F),D=F)}function _e(F,se,H){H===void 0&&(D===null?H=s.TEXTURE0+ee-1:H=D);let ge=j[H];ge===void 0&&(ge={type:void 0,texture:void 0},j[H]=ge),(ge.type!==F||ge.texture!==se)&&(D!==H&&(s.activeTexture(H),D=H),s.bindTexture(F,se||De[F]),ge.type=F,ge.texture=se)}function Te(){const F=j[D];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(F){ae.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function Ge(F){xe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),xe.copy(F))}function nt(F,se){let H=g.get(se);H===void 0&&(H=new WeakMap,g.set(se,H));let ge=H.get(F);ge===void 0&&(ge=s.getUniformBlockIndex(se,F.name),H.set(F,ge))}function je(F,se){const ge=g.get(se).get(F);_.get(se)!==ge&&(s.uniformBlockBinding(se,ge,F.__bindingPointIndex),_.set(se,ge))}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},D=null,j={},S={},E=new WeakMap,w=[],x=null,v=!1,I=null,R=null,b=null,B=null,k=null,P=null,Z=null,me=new Et(0,0,0),A=0,U=!1,pe=null,fe=null,G=null,K=null,ie=null,ae.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Ae,disable:lt,bindFramebuffer:it,drawBuffers:te,useProgram:Ft,setBlending:Be,setMaterial:xt,setFlipSided:qe,setCullFace:ht,setLineWidth:Mt,setPolygonOffset:L,setScissorTest:T,activeTexture:he,bindTexture:_e,unbindTexture:Te,compressedTexImage2D:Se,compressedTexImage3D:ct,texImage2D:rt,texImage3D:$e,updateUBOMapping:nt,uniformBlockBinding:je,texStorage2D:be,texStorage3D:Nt,texSubImage2D:tt,texSubImage3D:Ie,compressedTexSubImage2D:Ue,compressedTexSubImage3D:ze,scissor:Ne,viewport:Ge,reset:ye}}function XE(s,e,t,r,a,l,f){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new _t,g=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return E?new OffscreenCanvas(L,T):uu("canvas")}function x(L,T,he,_e){let Te=1;const Se=Mt(L);if((Se.width>_e||Se.height>_e)&&(Te=_e/Math.max(Se.width,Se.height)),Te<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=T?jf:Math.floor,tt=ct(Te*Se.width),Ie=ct(Te*Se.height);y===void 0&&(y=w(tt,Ie));const Ue=he?w(tt,Ie):y;return Ue.width=tt,Ue.height=Ie,Ue.getContext("2d").drawImage(L,0,0,tt,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+tt+"x"+Ie+")."),Ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function v(L){const T=Mt(L);return vm(T.width)&&vm(T.height)}function I(L){return c?!1:L.wrapS!==Ai||L.wrapT!==Ai||L.minFilter!==Hn&&L.minFilter!==Kn}function R(L,T){return L.generateMipmaps&&T&&L.minFilter!==Hn&&L.minFilter!==Kn}function b(L){s.generateMipmap(L)}function B(L,T,he,_e,Te=!1){if(c===!1)return T;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Se=T;if(T===s.RED&&(he===s.FLOAT&&(Se=s.R32F),he===s.HALF_FLOAT&&(Se=s.R16F),he===s.UNSIGNED_BYTE&&(Se=s.R8)),T===s.RED_INTEGER&&(he===s.UNSIGNED_BYTE&&(Se=s.R8UI),he===s.UNSIGNED_SHORT&&(Se=s.R16UI),he===s.UNSIGNED_INT&&(Se=s.R32UI),he===s.BYTE&&(Se=s.R8I),he===s.SHORT&&(Se=s.R16I),he===s.INT&&(Se=s.R32I)),T===s.RG&&(he===s.FLOAT&&(Se=s.RG32F),he===s.HALF_FLOAT&&(Se=s.RG16F),he===s.UNSIGNED_BYTE&&(Se=s.RG8)),T===s.RG_INTEGER&&(he===s.UNSIGNED_BYTE&&(Se=s.RG8UI),he===s.UNSIGNED_SHORT&&(Se=s.RG16UI),he===s.UNSIGNED_INT&&(Se=s.RG32UI),he===s.BYTE&&(Se=s.RG8I),he===s.SHORT&&(Se=s.RG16I),he===s.INT&&(Se=s.RG32I)),T===s.RGBA){const ct=Te?ru:Ht.getTransfer(_e);he===s.FLOAT&&(Se=s.RGBA32F),he===s.HALF_FLOAT&&(Se=s.RGBA16F),he===s.UNSIGNED_BYTE&&(Se=ct===qt?s.SRGB8_ALPHA8:s.RGBA8),he===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),he===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function k(L,T,he){return R(L,he)===!0||L.isFramebufferTexture&&L.minFilter!==Hn&&L.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){return L===Hn||L===Wp||L===ta?s.NEAREST:s.LINEAR}function Z(L){const T=L.target;T.removeEventListener("dispose",Z),A(T),T.isVideoTexture&&g.delete(T)}function me(L){const T=L.target;T.removeEventListener("dispose",me),pe(T)}function A(L){const T=r.get(L);if(T.__webglInit===void 0)return;const he=L.source,_e=S.get(he);if(_e){const Te=_e[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&U(L),Object.keys(_e).length===0&&S.delete(he)}r.remove(L)}function U(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const he=L.source,_e=S.get(he);delete _e[T.__cacheKey],f.memory.textures--}function pe(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Te=0;Te<T.__webglFramebuffer[_e].length;Te++)s.deleteFramebuffer(T.__webglFramebuffer[_e][Te]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const he=L.textures;for(let _e=0,Te=he.length;_e<Te;_e++){const Se=r.get(he[_e]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),f.memory.textures--),r.remove(he[_e])}r.remove(L)}let fe=0;function G(){fe=0}function K(){const L=fe;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),fe+=1,L}function ie(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ee(L,T){const he=r.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&he.__version!==L.version){const _e=L.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(he,L,T);return}}t.bindTexture(s.TEXTURE_2D,he.__webglTexture,s.TEXTURE0+T)}function O(L,T){const he=r.get(L);if(L.version>0&&he.__version!==L.version){xe(he,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,he.__webglTexture,s.TEXTURE0+T)}function Q(L,T){const he=r.get(L);if(L.version>0&&he.__version!==L.version){xe(he,L,T);return}t.bindTexture(s.TEXTURE_3D,he.__webglTexture,s.TEXTURE0+T)}function $(L,T){const he=r.get(L);if(L.version>0&&he.__version!==L.version){Oe(he,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture,s.TEXTURE0+T)}const D={[Gf]:s.REPEAT,[Ai]:s.CLAMP_TO_EDGE,[Vf]:s.MIRRORED_REPEAT},j={[Hn]:s.NEAREST,[Wp]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[$c]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},Me={[Ov]:s.NEVER,[Vv]:s.ALWAYS,[zv]:s.LESS,[Ig]:s.LEQUAL,[kv]:s.EQUAL,[Gv]:s.GEQUAL,[Bv]:s.GREATER,[Hv]:s.NOTEQUAL};function Y(L,T,he){if(T.type===er&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===$c||T.magFilter===ta||T.magFilter===ls||T.minFilter===Kn||T.minFilter===$c||T.minFilter===ta||T.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),he?(s.texParameteri(L,s.TEXTURE_WRAP_S,D[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,D[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,D[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,j[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,j[T.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==Ai||T.wrapT!==Ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,P(T.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,P(T.minFilter)),T.minFilter!==Hn&&T.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Hn||T.minFilter!==ta&&T.minFilter!==ls||T.type===er&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const _e=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ae(L,T){let he=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",Z));const _e=T.source;let Te=S.get(_e);Te===void 0&&(Te={},S.set(_e,Te));const Se=ie(T);if(Se!==L.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,he=!0),Te[Se].usedTimes++;const ct=Te[L.__cacheKey];ct!==void 0&&(Te[L.__cacheKey].usedTimes--,ct.usedTimes===0&&U(T)),L.__cacheKey=Se,L.__webglTexture=Te[Se].texture}return he}function xe(L,T,he){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const Te=ae(L,T),Se=T.source;t.bindTexture(_e,L.__webglTexture,s.TEXTURE0+he);const ct=r.get(Se);if(Se.version!==ct.__version||Te===!0){t.activeTexture(s.TEXTURE0+he);const tt=Ht.getPrimaries(Ht.workingColorSpace),Ie=T.colorSpace===br?null:Ht.getPrimaries(T.colorSpace),Ue=T.colorSpace===br||tt===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ze=I(T)&&v(T.image)===!1;let be=x(T.image,ze,!1,a.maxTextureSize);be=ht(T,be);const Nt=v(be)||c,rt=l.convert(T.format,T.colorSpace);let $e=l.convert(T.type),Ne=B(T.internalFormat,rt,$e,T.colorSpace,T.isVideoTexture);Y(_e,T,Nt);let Ge;const nt=T.mipmaps,je=c&&T.isVideoTexture!==!0&&Ne!==Dg,ye=ct.__version===void 0||Te===!0,F=Se.dataReady,se=k(T,be,Nt);if(T.isDepthTexture)Ne=s.DEPTH_COMPONENT,c?T.type===er?Ne=s.DEPTH_COMPONENT32F:T.type===Pr?Ne=s.DEPTH_COMPONENT24:T.type===us?Ne=s.DEPTH24_STENCIL8:Ne=s.DEPTH_COMPONENT16:T.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===cs&&Ne===s.DEPTH_COMPONENT&&T.type!==Jf&&T.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Pr,$e=l.convert(T.type)),T.format===po&&Ne===s.DEPTH_COMPONENT&&(Ne=s.DEPTH_STENCIL,T.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=us,$e=l.convert(T.type))),ye&&(je?t.texStorage2D(s.TEXTURE_2D,1,Ne,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Ne,be.width,be.height,0,rt,$e,null));else if(T.isDataTexture)if(nt.length>0&&Nt){je&&ye&&t.texStorage2D(s.TEXTURE_2D,se,Ne,nt[0].width,nt[0].height);for(let H=0,ge=nt.length;H<ge;H++)Ge=nt[H],je?F&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Ge.width,Ge.height,rt,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,H,Ne,Ge.width,Ge.height,0,rt,$e,Ge.data);T.generateMipmaps=!1}else je?(ye&&t.texStorage2D(s.TEXTURE_2D,se,Ne,be.width,be.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,rt,$e,be.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,be.width,be.height,0,rt,$e,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Ne,nt[0].width,nt[0].height,be.depth);for(let H=0,ge=nt.length;H<ge;H++)Ge=nt[H],T.format!==Ri?rt!==null?je?F&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,Ge.width,Ge.height,be.depth,rt,Ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ne,Ge.width,Ge.height,be.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,Ge.width,Ge.height,be.depth,rt,$e,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Ne,Ge.width,Ge.height,be.depth,0,rt,$e,Ge.data)}else{je&&ye&&t.texStorage2D(s.TEXTURE_2D,se,Ne,nt[0].width,nt[0].height);for(let H=0,ge=nt.length;H<ge;H++)Ge=nt[H],T.format!==Ri?rt!==null?je?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,Ge.width,Ge.height,rt,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Ne,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Ge.width,Ge.height,rt,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,H,Ne,Ge.width,Ge.height,0,rt,$e,Ge.data)}else if(T.isDataArrayTexture)je?(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Ne,be.width,be.height,be.depth),F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,rt,$e,be.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,be.width,be.height,be.depth,0,rt,$e,be.data);else if(T.isData3DTexture)je?(ye&&t.texStorage3D(s.TEXTURE_3D,se,Ne,be.width,be.height,be.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,rt,$e,be.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,be.width,be.height,be.depth,0,rt,$e,be.data);else if(T.isFramebufferTexture){if(ye)if(je)t.texStorage2D(s.TEXTURE_2D,se,Ne,be.width,be.height);else{let H=be.width,ge=be.height;for(let ve=0;ve<se;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ne,H,ge,0,rt,$e,null),H>>=1,ge>>=1}}else if(nt.length>0&&Nt){if(je&&ye){const H=Mt(nt[0]);t.texStorage2D(s.TEXTURE_2D,se,Ne,H.width,H.height)}for(let H=0,ge=nt.length;H<ge;H++)Ge=nt[H],je?F&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,rt,$e,Ge):t.texImage2D(s.TEXTURE_2D,H,Ne,rt,$e,Ge);T.generateMipmaps=!1}else if(je){if(ye){const H=Mt(be);t.texStorage2D(s.TEXTURE_2D,se,Ne,H.width,H.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,$e,be)}else t.texImage2D(s.TEXTURE_2D,0,Ne,rt,$e,be);R(T,Nt)&&b(_e),ct.__version=Se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Oe(L,T,he){if(T.image.length!==6)return;const _e=ae(L,T),Te=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+he);const Se=r.get(Te);if(Te.version!==Se.__version||_e===!0){t.activeTexture(s.TEXTURE0+he);const ct=Ht.getPrimaries(Ht.workingColorSpace),tt=T.colorSpace===br?null:Ht.getPrimaries(T.colorSpace),Ie=T.colorSpace===br||ct===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,be=[];for(let H=0;H<6;H++)!Ue&&!ze?be[H]=x(T.image[H],!1,!0,a.maxCubemapSize):be[H]=ze?T.image[H].image:T.image[H],be[H]=ht(T,be[H]);const Nt=be[0],rt=v(Nt)||c,$e=l.convert(T.format,T.colorSpace),Ne=l.convert(T.type),Ge=B(T.internalFormat,$e,Ne,T.colorSpace),nt=c&&T.isVideoTexture!==!0,je=Se.__version===void 0||_e===!0,ye=Te.dataReady;let F=k(T,Nt,rt);Y(s.TEXTURE_CUBE_MAP,T,rt);let se;if(Ue){nt&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ge,Nt.width,Nt.height);for(let H=0;H<6;H++){se=be[H].mipmaps;for(let ge=0;ge<se.length;ge++){const ve=se[ge];T.format!==Ri?$e!==null?nt?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,0,0,ve.width,ve.height,$e,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,Ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,0,0,ve.width,ve.height,$e,Ne,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,Ge,ve.width,ve.height,0,$e,Ne,ve.data)}}}else{if(se=T.mipmaps,nt&&je){se.length>0&&F++;const H=Mt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,F,Ge,H.width,H.height)}for(let H=0;H<6;H++)if(ze){nt?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,be[H].width,be[H].height,$e,Ne,be[H].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ge,be[H].width,be[H].height,0,$e,Ne,be[H].data);for(let ge=0;ge<se.length;ge++){const ke=se[ge].image[H].image;nt?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,0,0,ke.width,ke.height,$e,Ne,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,Ge,ke.width,ke.height,0,$e,Ne,ke.data)}}else{nt?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,$e,Ne,be[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ge,$e,Ne,be[H]);for(let ge=0;ge<se.length;ge++){const ve=se[ge];nt?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,0,0,$e,Ne,ve.image[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,Ge,$e,Ne,ve.image[H])}}}R(T,rt)&&b(s.TEXTURE_CUBE_MAP),Se.__version=Te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function De(L,T,he,_e,Te,Se){const ct=l.convert(he.format,he.colorSpace),tt=l.convert(he.type),Ie=B(he.internalFormat,ct,tt,he.colorSpace);if(!r.get(T).__hasExternalTextures){const ze=Math.max(1,T.width>>Se),be=Math.max(1,T.height>>Se);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?t.texImage3D(Te,Se,Ie,ze,be,T.depth,0,ct,tt,null):t.texImage2D(Te,Se,Ie,ze,be,0,ct,tt,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Te,r.get(he).__webglTexture,0,Be(T)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Te,r.get(he).__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,T,he){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let _e=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(he||xt(T)){const Te=T.depthTexture;Te&&Te.isDepthTexture&&(Te.type===er?_e=s.DEPTH_COMPONENT32F:Te.type===Pr&&(_e=s.DEPTH_COMPONENT24));const Se=Be(T);xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,_e,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,_e,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const _e=Be(T);he&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const _e=T.textures;for(let Te=0;Te<_e.length;Te++){const Se=_e[Te],ct=l.convert(Se.format,Se.colorSpace),tt=l.convert(Se.type),Ie=B(Se.internalFormat,ct,tt,Se.colorSpace),Ue=Be(T);he&&xt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ie,T.width,T.height):xt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,Ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ee(T.depthTexture,0);const _e=r.get(T.depthTexture).__webglTexture,Te=Be(T);if(T.depthTexture.format===cs)xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===po)xt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function it(L){const T=r.get(L),he=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(he)throw new Error("target.depthTexture not supported in Cube render targets");lt(T.__webglFramebuffer,L)}else if(he){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ae(T.__webglDepthbuffer[_e],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Ae(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(L,T,he){const _e=r.get(L);T!==void 0&&De(_e.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),he!==void 0&&it(L)}function Ft(L){const T=L.texture,he=r.get(L),_e=r.get(T);L.addEventListener("dispose",me);const Te=L.textures,Se=L.isWebGLCubeRenderTarget===!0,ct=Te.length>1,tt=v(L)||c;if(ct||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,f.memory.textures++),Se){he.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(c&&T.mipmaps&&T.mipmaps.length>0){he.__webglFramebuffer[Ie]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)he.__webglFramebuffer[Ie][Ue]=s.createFramebuffer()}else he.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){he.__webglFramebuffer=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)he.__webglFramebuffer[Ie]=s.createFramebuffer()}else he.__webglFramebuffer=s.createFramebuffer();if(ct)if(a.drawBuffers)for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const ze=r.get(Te[Ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),f.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&xt(L)===!1){he.__webglMultisampledFramebuffer=s.createFramebuffer(),he.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Te.length;Ie++){const Ue=Te[Ie];he.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);const ze=l.convert(Ue.format,Ue.colorSpace),be=l.convert(Ue.type),Nt=B(Ue.internalFormat,ze,be,Ue.colorSpace,L.isXRRenderTarget===!0),rt=Be(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Nt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(he.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(he.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Se){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Y(s.TEXTURE_CUBE_MAP,T,tt);for(let Ie=0;Ie<6;Ie++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)De(he.__webglFramebuffer[Ie][Ue],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ue);else De(he.__webglFramebuffer[Ie],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);R(T,tt)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ct){for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const ze=Te[Ie],be=r.get(ze);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),Y(s.TEXTURE_2D,ze,tt),De(he.__webglFramebuffer,L,ze,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),R(ze,tt)&&b(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,_e.__webglTexture),Y(Ie,T,tt),c&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)De(he.__webglFramebuffer[Ue],L,T,s.COLOR_ATTACHMENT0,Ie,Ue);else De(he.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ie,0);R(T,tt)&&b(Ie),t.unbindTexture()}L.depthBuffer&&it(L)}function Je(L){const T=v(L)||c,he=L.textures;for(let _e=0,Te=he.length;_e<Te;_e++){const Se=he[_e];if(R(Se,T)){const ct=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,tt=r.get(Se).__webglTexture;t.bindTexture(ct,tt),b(ct),t.unbindTexture()}}}function ut(L){if(c&&L.samples>0&&xt(L)===!1){const T=L.textures,he=L.width,_e=L.height;let Te=s.COLOR_BUFFER_BIT;const Se=[],ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=r.get(L),Ie=T.length>1;if(Ie)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){Se.push(s.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&Se.push(ct);const ze=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(ze===!1&&(L.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),Ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ue]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ct]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ct])),Ie){const be=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,he,_e,0,0,he,_e,Te,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ue]);const ze=r.get(T[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}}function Be(L){return Math.min(a.maxSamples,L.samples)}function xt(L){const T=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ht(L,T){const he=L.colorSpace,_e=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Xf||he!==Fr&&he!==br&&(Ht.getTransfer(he)===qt?c===!1?e.has("EXT_sRGB")===!0&&_e===Ri?(L.format=Xf,L.minFilter=Kn,L.generateMipmaps=!1):T=Fg.sRGBToLinear(T):(_e!==Ri||Te!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",he)),T}function Mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(_.width=L.naturalWidth||L.width,_.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(_.width=L.displayWidth,_.height=L.displayHeight):(_.width=L.width,_.height=L.height),_}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=te,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=De,this.useMultisampledRTT=xt}function jE(s,e,t){const r=t.isWebGL2;function a(l,f=br){let c;const h=Ht.getTransfer(f);if(l===Ir)return s.UNSIGNED_BYTE;if(l===Rg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Cg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===Av)return s.BYTE;if(l===Rv)return s.SHORT;if(l===Jf)return s.UNSIGNED_SHORT;if(l===Ag)return s.INT;if(l===Pr)return s.UNSIGNED_INT;if(l===er)return s.FLOAT;if(l===fa)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===Cv)return s.ALPHA;if(l===Ri)return s.RGBA;if(l===bv)return s.LUMINANCE;if(l===Pv)return s.LUMINANCE_ALPHA;if(l===cs)return s.DEPTH_COMPONENT;if(l===po)return s.DEPTH_STENCIL;if(l===Xf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Lv)return s.RED;if(l===bg)return s.RED_INTEGER;if(l===Dv)return s.RG;if(l===Pg)return s.RG_INTEGER;if(l===Lg)return s.RGBA_INTEGER;if(l===Kc||l===Zc||l===Qc||l===Jc)if(h===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Xp||l===jp||l===qp||l===Yp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Xp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===jp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===qp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Yp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Dg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===$p||l===Kp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===$p)return h===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Kp)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm||l===im||l===rm||l===sm||l===om||l===am||l===lm||l===um||l===cm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Zp)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Qp)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Jp)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===em)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===tm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===nm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===im)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===rm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===sm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===om)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===am)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===lm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===um)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===cm)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===ef||l===fm||l===dm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===ef)return h===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===fm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Iv||l===hm||l===pm||l===mm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===ef)return c.COMPRESSED_RED_RGTC1_EXT;if(l===hm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===pm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===mm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===us?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class qE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ca;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const $E=`
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

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Vn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new nr({extensions:{fragDepth:!0},vertexShader:$E,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new nn(new ma(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class QE extends _o{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,p=null,_=null,g=null,y=null,S=null,E=null;const w=new ZE,x=t.getContextAttributes();let v=null,I=null;const R=[],b=[],B=new _t;let k=null;const P=new Zn;P.layers.enable(1),P.viewport=new Zt;const Z=new Zn;Z.layers.enable(2),Z.viewport=new Zt;const me=[P,Z],A=new qE;A.layers.enable(1),A.layers.enable(2);let U=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=R[Y];return ae===void 0&&(ae=new Cf,R[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=R[Y];return ae===void 0&&(ae=new Cf,R[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=R[Y];return ae===void 0&&(ae=new Cf,R[Y]=ae),ae.getHandSpace()};function fe(Y){const ae=b.indexOf(Y.inputSource);if(ae===-1)return;const xe=R[ae];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,p||f),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",K);for(let Y=0;Y<R.length;Y++){const ae=b[Y];ae!==null&&(b[Y]=null,R[Y].disconnect(ae))}U=null,pe=null,w.reset(),e.setRenderTarget(v),S=null,y=null,g=null,a=null,I=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",G),a.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(B),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new fs(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,xe=null,Oe=null;x.depth&&(Oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?po:cs,xe=x.stencil?us:Pr);const De={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};g=new XRWebGLBinding(a,t),y=g.createProjectionLayer(De),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new fs(y.textureWidth,y.textureHeight,{format:Ri,type:Ir,depthTexture:new Yg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ae=e.properties.get(I);Ae.__ignoreDepthValues=y.ignoreDepthValues}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(c),Me.setContext(a),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function K(Y){for(let ae=0;ae<Y.removed.length;ae++){const xe=Y.removed[ae],Oe=b.indexOf(xe);Oe>=0&&(b[Oe]=null,R[Oe].disconnect(xe))}for(let ae=0;ae<Y.added.length;ae++){const xe=Y.added[ae];let Oe=b.indexOf(xe);if(Oe===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=b.length){b.push(xe),Oe=Ae;break}else if(b[Ae]===null){b[Ae]=xe,Oe=Ae;break}if(Oe===-1)break}const De=R[Oe];De&&De.connect(xe)}}const ie=new W,ee=new W;function O(Y,ae,xe){ie.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const Oe=ie.distanceTo(ee),De=ae.projectionMatrix.elements,Ae=xe.projectionMatrix.elements,lt=De[14]/(De[10]-1),it=De[14]/(De[10]+1),te=(De[9]+1)/De[5],Ft=(De[9]-1)/De[5],Je=(De[8]-1)/De[0],ut=(Ae[8]+1)/Ae[0],Be=lt*Je,xt=lt*ut,qe=Oe/(-Je+ut),ht=qe*-Je;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Mt=lt+qe,L=it+qe,T=Be-ht,he=xt+(Oe-ht),_e=te*it/L*Mt,Te=Ft*it/L*Mt;Y.projectionMatrix.makePerspective(T,he,_e,Te,Mt,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Q(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;w.texture!==null&&(Y.near=w.depthNear,Y.far=w.depthFar),A.near=Z.near=P.near=Y.near,A.far=Z.far=P.far=Y.far,(U!==A.near||pe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,pe=A.far,P.near=U,P.far=pe,Z.near=U,Z.far=pe,P.updateProjectionMatrix(),Z.updateProjectionMatrix(),Y.updateProjectionMatrix());const ae=Y.parent,xe=A.cameras;Q(A,ae);for(let Oe=0;Oe<xe.length;Oe++)Q(xe[Oe],ae);xe.length===2?O(A,P,Z):A.projectionMatrix.copy(P.projectionMatrix),$(Y,A,ae)};function $(Y,ae,xe){xe===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=lu*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Y){h=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null};let D=null;function j(Y,ae){if(_=ae.getViewerPose(p||f),E=ae,_!==null){const xe=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let Oe=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,Oe=!0);for(let Ae=0;Ae<xe.length;Ae++){const lt=xe[Ae];let it=null;if(S!==null)it=S.getViewport(lt);else{const Ft=g.getViewSubImage(y,lt);it=Ft.viewport,Ae===0&&(e.setRenderTargetTextures(I,Ft.colorTexture,y.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(I))}let te=me[Ae];te===void 0&&(te=new Zn,te.layers.enable(Ae),te.viewport=new Zt,me[Ae]=te),te.matrix.fromArray(lt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(lt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(it.x,it.y,it.width,it.height),Ae===0&&(A.matrix.copy(te.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Oe===!0&&A.cameras.push(te)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=g.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&w.init(e,Ae,a.renderState)}}for(let xe=0;xe<R.length;xe++){const Oe=b[xe],De=R[xe];Oe!==null&&De!==void 0&&De.update(Oe,ae,p||f)}w.render(e,A),D&&D(Y,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),E=null}const Me=new jg;Me.setAnimationLoop(j),this.setAnimationLoop=function(Y){D=Y},this.dispose=function(){}}}const ns=new bi,JE=new Wt;function e1(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Vg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,I,R,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?h(x,v,I,R):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=e.get(v),R=I.envMap,b=I.envMapRotation;if(R&&(x.envMap.value=R,ns.copy(b),ns.x*=-1,ns.y*=-1,ns.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(ns)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const B=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*B,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,I,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=R*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const I=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function t1(s,e,t,r){let a={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(I,R){const b=R.program;r.uniformBlockBinding(I,b)}function p(I,R){let b=a[I.id];b===void 0&&(E(I),b=_(I),a[I.id]=b,I.addEventListener("dispose",x));const B=R.program;r.updateUBOMapping(I,B);const k=e.render.frame;l[I.id]!==k&&(y(I),l[I.id]=k)}function _(I){const R=g();I.__bindingPointIndex=R;const b=s.createBuffer(),B=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,B,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function g(){for(let I=0;I<c;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const R=a[I.id],b=I.uniforms,B=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let k=0,P=b.length;k<P;k++){const Z=Array.isArray(b[k])?b[k]:[b[k]];for(let me=0,A=Z.length;me<A;me++){const U=Z[me];if(S(U,k,me,B)===!0){const pe=U.__offset,fe=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let K=0;K<fe.length;K++){const ie=fe[K],ee=w(ie);typeof ie=="number"||typeof ie=="boolean"?(U.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,pe+G,U.__data)):ie.isMatrix3?(U.__data[0]=ie.elements[0],U.__data[1]=ie.elements[1],U.__data[2]=ie.elements[2],U.__data[3]=0,U.__data[4]=ie.elements[3],U.__data[5]=ie.elements[4],U.__data[6]=ie.elements[5],U.__data[7]=0,U.__data[8]=ie.elements[6],U.__data[9]=ie.elements[7],U.__data[10]=ie.elements[8],U.__data[11]=0):(ie.toArray(U.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,pe,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,R,b,B){const k=I.value,P=R+"_"+b;if(B[P]===void 0)return typeof k=="number"||typeof k=="boolean"?B[P]=k:B[P]=k.clone(),!0;{const Z=B[P];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return B[P]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function E(I){const R=I.uniforms;let b=0;const B=16;for(let P=0,Z=R.length;P<Z;P++){const me=Array.isArray(R[P])?R[P]:[R[P]];for(let A=0,U=me.length;A<U;A++){const pe=me[A],fe=Array.isArray(pe.value)?pe.value:[pe.value];for(let G=0,K=fe.length;G<K;G++){const ie=fe[G],ee=w(ie),O=b%B;O!==0&&B-O<ee.boundary&&(b+=B-O),pe.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=b,b+=ee.storage}}}const k=b%B;return k>0&&(b+=B-k),I.__size=b,I.__cache={},this}function w(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function x(I){const R=I.target;R.removeEventListener("dispose",x);const b=f.indexOf(R.__bindingPointIndex);f.splice(b,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},l={}}return{bind:h,update:p,dispose:v}}class e0{constructor(e={}){const{canvas:t=Xv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=f;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const v=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fi,this._useLegacyLights=!1,this.toneMapping=Dr,this.toneMappingExposure=1;const R=this;let b=!1,B=0,k=0,P=null,Z=-1,me=null;const A=new Zt,U=new Zt;let pe=null;const fe=new Et(0);let G=0,K=t.width,ie=t.height,ee=1,O=null,Q=null;const $=new Zt(0,0,K,ie),D=new Zt(0,0,K,ie);let j=!1;const Me=new id;let Y=!1,ae=!1,xe=null;const Oe=new Wt,De=new _t,Ae=new W,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return P===null?ee:1}let te=r;function Ft(C,J){for(let ce=0;ce<C.length;ce++){const de=C[ce],le=t.getContext(de,J);if(le!==null)return le}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",se,!1),te===null){const J=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&J.shift(),te=Ft(J,C),te===null)throw Ft(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Je,ut,Be,xt,qe,ht,Mt,L,T,he,_e,Te,Se,ct,tt,Ie,Ue,ze,be,Nt,rt,$e,Ne,Ge;function nt(){Je=new aM(te),ut=new tM(te,Je,e),Je.init(ut),$e=new jE(te,Je,ut),Be=new WE(te,Je,ut),xt=new cM(te),qe=new PE,ht=new XE(te,Je,Be,qe,ut,$e,xt),Mt=new iM(R),L=new oM(R),T=new gx(te,ut),Ne=new JS(te,Je,T,ut),he=new lM(te,T,xt,Ne),_e=new pM(te,he,T,xt),be=new hM(te,ut,ht),Ie=new nM(qe),Te=new bE(R,Mt,L,Je,ut,Ne,Ie),Se=new e1(R,qe),ct=new DE,tt=new zE(Je,ut),ze=new QS(R,Mt,L,Be,_e,y,h),Ue=new VE(R,_e,ut),Ge=new t1(te,xt,ut,Be),Nt=new eM(te,Je,xt,ut),rt=new uM(te,Je,xt,ut),xt.programs=Te.programs,R.capabilities=ut,R.extensions=Je,R.properties=qe,R.renderLists=ct,R.shadowMap=Ue,R.state=Be,R.info=xt}nt();const je=new QE(R,te);this.xr=je,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const C=Je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(K,ie,!1))},this.getSize=function(C){return C.set(K,ie)},this.setSize=function(C,J,ce=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,ie=J,t.width=Math.floor(C*ee),t.height=Math.floor(J*ee),ce===!0&&(t.style.width=C+"px",t.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(K*ee,ie*ee).floor()},this.setDrawingBufferSize=function(C,J,ce){K=C,ie=J,ee=ce,t.width=Math.floor(C*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,J,ce,de){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,J,ce,de),Be.viewport(A.copy($).multiplyScalar(ee).round())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,J,ce,de){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,J,ce,de),Be.scissor(U.copy(D).multiplyScalar(ee).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){Be.setScissorTest(j=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(C=!0,J=!0,ce=!0){let de=0;if(C){let le=!1;if(P!==null){const He=P.texture.format;le=He===Lg||He===Pg||He===bg}if(le){const He=P.texture.type,et=He===Ir||He===Pr||He===Jf||He===us||He===Rg||He===Cg,st=ze.getClearColor(),Ve=ze.getClearAlpha(),yt=st.r,dt=st.g,mt=st.b;et?(S[0]=yt,S[1]=dt,S[2]=mt,S[3]=Ve,te.clearBufferuiv(te.COLOR,0,S)):(E[0]=yt,E[1]=dt,E[2]=mt,E[3]=Ve,te.clearBufferiv(te.COLOR,0,E))}else de|=te.COLOR_BUFFER_BIT}J&&(de|=te.DEPTH_BUFFER_BIT),ce&&(de|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ct.dispose(),tt.dispose(),qe.dispose(),Mt.dispose(),L.dispose(),_e.dispose(),Ne.dispose(),Ge.dispose(),Te.dispose(),je.dispose(),je.removeEventListener("sessionstart",wt),je.removeEventListener("sessionend",pt),xe&&(xe.dispose(),xe=null),zt.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=xt.autoReset,J=Ue.enabled,ce=Ue.autoUpdate,de=Ue.needsUpdate,le=Ue.type;nt(),xt.autoReset=C,Ue.enabled=J,Ue.autoUpdate=ce,Ue.needsUpdate=de,Ue.type=le}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function H(C){const J=C.target;J.removeEventListener("dispose",H),ge(J)}function ge(C){ve(C),qe.remove(C)}function ve(C){const J=qe.get(C).programs;J!==void 0&&(J.forEach(function(ce){Te.releaseProgram(ce)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ce,de,le,He){J===null&&(J=lt);const et=le.isMesh&&le.matrixWorld.determinant()<0,st=Or(C,J,ce,de,le);Be.setMaterial(de,et);let Ve=ce.index,yt=1;if(de.wireframe===!0){if(Ve=he.getWireframeAttribute(ce),Ve===void 0)return;yt=2}const dt=ce.drawRange,mt=ce.attributes.position;let Ot=dt.start*yt,gn=(dt.start+dt.count)*yt;He!==null&&(Ot=Math.max(Ot,He.start*yt),gn=Math.min(gn,(He.start+He.count)*yt)),Ve!==null?(Ot=Math.max(Ot,0),gn=Math.min(gn,Ve.count)):mt!=null&&(Ot=Math.max(Ot,0),gn=Math.min(gn,mt.count));const $t=gn-Ot;if($t<0||$t===1/0)return;Ne.setup(le,de,st,ce,Ve);let Sn,Pt=Nt;if(Ve!==null&&(Sn=T.get(Ve),Pt=rt,Pt.setIndex(Sn)),le.isMesh)de.wireframe===!0?(Be.setLineWidth(de.wireframeLinewidth*it()),Pt.setMode(te.LINES)):Pt.setMode(te.TRIANGLES);else if(le.isLine){let vt=de.linewidth;vt===void 0&&(vt=1),Be.setLineWidth(vt*it()),le.isLineSegments?Pt.setMode(te.LINES):le.isLineLoop?Pt.setMode(te.LINE_LOOP):Pt.setMode(te.LINE_STRIP)}else le.isPoints?Pt.setMode(te.POINTS):le.isSprite&&Pt.setMode(te.TRIANGLES);if(le.isBatchedMesh)Pt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)Pt.renderInstances(Ot,$t,le.count);else if(ce.isInstancedBufferGeometry){const vt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,z=Math.min(ce.instanceCount,vt);Pt.renderInstances(Ot,$t,z)}else Pt.render(Ot,$t)};function ke(C,J,ce){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,mn(C,J,ce),C.side=Nr,C.needsUpdate=!0,mn(C,J,ce),C.side=si):mn(C,J,ce)}this.compile=function(C,J,ce=null){ce===null&&(ce=C),x=tt.get(ce),x.init(),I.push(x),ce.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(x.pushLight(le),le.castShadow&&x.pushShadow(le))}),C!==ce&&C.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(x.pushLight(le),le.castShadow&&x.pushShadow(le))}),x.setupLights(R._useLegacyLights);const de=new Set;return C.traverse(function(le){const He=le.material;if(He)if(Array.isArray(He))for(let et=0;et<He.length;et++){const st=He[et];ke(st,ce,le),de.add(st)}else ke(He,ce,le),de.add(He)}),I.pop(),x=null,de},this.compileAsync=function(C,J,ce=null){const de=this.compile(C,J,ce);return new Promise(le=>{function He(){if(de.forEach(function(et){qe.get(et).currentProgram.isReady()&&de.delete(et)}),de.size===0){le(C);return}setTimeout(He,10)}Je.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ft=null;function Ct(C){ft&&ft(C)}function wt(){zt.stop()}function pt(){zt.start()}const zt=new jg;zt.setAnimationLoop(Ct),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(C){ft=C,je.setAnimationLoop(C),C===null?zt.stop():zt.start()},je.addEventListener("sessionstart",wt),je.addEventListener("sessionend",pt),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(J),J=je.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,J,P),x=tt.get(C,I.length),x.init(),I.push(x),Oe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Me.setFromProjectionMatrix(Oe),ae=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,ae),w=ct.get(C,v.length),w.init(),v.push(w),an(C,J,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(O,Q),this.info.render.frame++,Y===!0&&Ie.beginShadows();const ce=x.state.shadowsArray;if(Ue.render(ce,C,J),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&ze.render(w,C),x.setupLights(R._useLegacyLights),J.isArrayCamera){const de=J.cameras;for(let le=0,He=de.length;le<He;le++){const et=de[le];Pi(w,C,et,et.viewport)}}else Pi(w,C,J);P!==null&&(ht.updateMultisampleRenderTarget(P),ht.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(R,C,J),Ne.resetDefaultState(),Z=-1,me=null,I.pop(),I.length>0?x=I[I.length-1]:x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function an(C,J,ce,de){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){de&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const et=_e.update(C),st=C.material;st.visible&&w.push(C,et,st,ce,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const et=_e.update(C),st=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Ae.copy(et.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(st)){const Ve=et.groups;for(let yt=0,dt=Ve.length;yt<dt;yt++){const mt=Ve[yt],Ot=st[mt.materialIndex];Ot&&Ot.visible&&w.push(C,et,Ot,ce,Ae.z,mt)}}else st.visible&&w.push(C,et,st,ce,Ae.z,null)}}const He=C.children;for(let et=0,st=He.length;et<st;et++)an(He[et],J,ce,de)}function Pi(C,J,ce,de){const le=C.opaque,He=C.transmissive,et=C.transparent;x.setupLightsView(ce),Y===!0&&Ie.setGlobalState(R.clippingPlanes,ce),He.length>0&&gi(le,He,J,ce),de&&Be.viewport(A.copy(de)),le.length>0&&Dn(le,J,ce),He.length>0&&Dn(He,J,ce),et.length>0&&Dn(et,J,ce),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function gi(C,J,ce,de){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;const He=ut.isWebGL2;xe===null&&(xe=new fs(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")?fa:Ir,minFilter:ls,samples:He?4:0})),R.getDrawingBufferSize(De),He?xe.setSize(De.x,De.y):xe.setSize(jf(De.x),jf(De.y));const et=R.getRenderTarget();R.setRenderTarget(xe),R.getClearColor(fe),G=R.getClearAlpha(),G<1&&R.setClearColor(16777215,.5),R.clear();const st=R.toneMapping;R.toneMapping=Dr,Dn(C,ce,de),ht.updateMultisampleRenderTarget(xe),ht.updateRenderTargetMipmap(xe);let Ve=!1;for(let yt=0,dt=J.length;yt<dt;yt++){const mt=J[yt],Ot=mt.object,gn=mt.geometry,$t=mt.material,Sn=mt.group;if($t.side===si&&Ot.layers.test(de.layers)){const Pt=$t.side;$t.side=Gn,$t.needsUpdate=!0,Qn(Ot,ce,de,gn,$t,Sn),$t.side=Pt,$t.needsUpdate=!0,Ve=!0}}Ve===!0&&(ht.updateMultisampleRenderTarget(xe),ht.updateRenderTargetMipmap(xe)),R.setRenderTarget(et),R.setClearColor(fe,G),R.toneMapping=st}function Dn(C,J,ce){const de=J.isScene===!0?J.overrideMaterial:null;for(let le=0,He=C.length;le<He;le++){const et=C[le],st=et.object,Ve=et.geometry,yt=de===null?et.material:de,dt=et.group;st.layers.test(ce.layers)&&Qn(st,J,ce,Ve,yt,dt)}}function Qn(C,J,ce,de,le,He){C.onBeforeRender(R,J,ce,de,le,He),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),le.onBeforeRender(R,J,ce,de,C,He),le.transparent===!0&&le.side===si&&le.forceSinglePass===!1?(le.side=Gn,le.needsUpdate=!0,R.renderBufferDirect(ce,J,de,le,C,He),le.side=Nr,le.needsUpdate=!0,R.renderBufferDirect(ce,J,de,le,C,He),le.side=si):R.renderBufferDirect(ce,J,de,le,C,He),C.onAfterRender(R,J,ce,de,le,He)}function mn(C,J,ce){J.isScene!==!0&&(J=lt);const de=qe.get(C),le=x.state.lights,He=x.state.shadowsArray,et=le.state.version,st=Te.getParameters(C,le.state,He,J,ce),Ve=Te.getProgramCacheKey(st);let yt=de.programs;de.environment=C.isMeshStandardMaterial?J.environment:null,de.fog=J.fog,de.envMap=(C.isMeshStandardMaterial?L:Mt).get(C.envMap||de.environment),de.envMapRotation=de.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,yt===void 0&&(C.addEventListener("dispose",H),yt=new Map,de.programs=yt);let dt=yt.get(Ve);if(dt!==void 0){if(de.currentProgram===dt&&de.lightsStateVersion===et)return wn(C,st),dt}else st.uniforms=Te.getUniforms(C),C.onBuild(ce,st,R),C.onBeforeCompile(st,R),dt=Te.acquireProgram(st,Ve),yt.set(Ve,dt),de.uniforms=st.uniforms;const mt=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(mt.clippingPlanes=Ie.uniform),wn(C,st),de.needsLights=hs(C),de.lightsStateVersion=et,de.needsLights&&(mt.ambientLightColor.value=le.state.ambient,mt.lightProbe.value=le.state.probe,mt.directionalLights.value=le.state.directional,mt.directionalLightShadows.value=le.state.directionalShadow,mt.spotLights.value=le.state.spot,mt.spotLightShadows.value=le.state.spotShadow,mt.rectAreaLights.value=le.state.rectArea,mt.ltc_1.value=le.state.rectAreaLTC1,mt.ltc_2.value=le.state.rectAreaLTC2,mt.pointLights.value=le.state.point,mt.pointLightShadows.value=le.state.pointShadow,mt.hemisphereLights.value=le.state.hemi,mt.directionalShadowMap.value=le.state.directionalShadowMap,mt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,mt.spotShadowMap.value=le.state.spotShadowMap,mt.spotLightMatrix.value=le.state.spotLightMatrix,mt.spotLightMap.value=le.state.spotLightMap,mt.pointShadowMap.value=le.state.pointShadowMap,mt.pointShadowMatrix.value=le.state.pointShadowMatrix),de.currentProgram=dt,de.uniformsList=null,dt}function It(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=tu.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function wn(C,J){const ce=qe.get(C);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function Or(C,J,ce,de,le){J.isScene!==!0&&(J=lt),ht.resetTextureUnits();const He=J.fog,et=de.isMeshStandardMaterial?J.environment:null,st=P===null?R.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fr,Ve=(de.isMeshStandardMaterial?L:Mt).get(de.envMap||et),yt=de.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),mt=!!ce.morphAttributes.position,Ot=!!ce.morphAttributes.normal,gn=!!ce.morphAttributes.color;let $t=Dr;de.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&($t=R.toneMapping);const Sn=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Pt=Sn!==void 0?Sn.length:0,vt=qe.get(de),z=x.state.lights;if(Y===!0&&(ae===!0||C!==me)){const en=C===me&&de.id===Z;Ie.setState(de,C,en)}let Pe=!1;de.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==z.state.version||vt.outputColorSpace!==st||le.isBatchedMesh&&vt.batching===!1||!le.isBatchedMesh&&vt.batching===!0||le.isInstancedMesh&&vt.instancing===!1||!le.isInstancedMesh&&vt.instancing===!0||le.isSkinnedMesh&&vt.skinning===!1||!le.isSkinnedMesh&&vt.skinning===!0||le.isInstancedMesh&&vt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&vt.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&vt.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&vt.instancingMorph===!1&&le.morphTexture!==null||vt.envMap!==Ve||de.fog===!0&&vt.fog!==He||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ie.numPlanes||vt.numIntersection!==Ie.numIntersection)||vt.vertexAlphas!==yt||vt.vertexTangents!==dt||vt.morphTargets!==mt||vt.morphNormals!==Ot||vt.morphColors!==gn||vt.toneMapping!==$t||ut.isWebGL2===!0&&vt.morphTargetsCount!==Pt)&&(Pe=!0):(Pe=!0,vt.__version=de.version);let Ze=vt.currentProgram;Pe===!0&&(Ze=mn(de,J,le));let Gt=!1,Tt=!1,kt=!1;const St=Ze.getUniforms(),ln=vt.uniforms;if(Be.useProgram(Ze.program)&&(Gt=!0,Tt=!0,kt=!0),de.id!==Z&&(Z=de.id,Tt=!0),Gt||me!==C){St.setValue(te,"projectionMatrix",C.projectionMatrix),St.setValue(te,"viewMatrix",C.matrixWorldInverse);const en=St.map.cameraPosition;en!==void 0&&en.setValue(te,Ae.setFromMatrixPosition(C.matrixWorld)),ut.logarithmicDepthBuffer&&St.setValue(te,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&St.setValue(te,"isOrthographic",C.isOrthographicCamera===!0),me!==C&&(me=C,Tt=!0,kt=!0)}if(le.isSkinnedMesh){St.setOptional(te,le,"bindMatrix"),St.setOptional(te,le,"bindMatrixInverse");const en=le.skeleton;en&&(ut.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),St.setValue(te,"boneTexture",en.boneTexture,ht)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(St.setOptional(te,le,"batchingTexture"),St.setValue(te,"batchingTexture",le._matricesTexture,ht));const Un=ce.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0&&ut.isWebGL2===!0)&&be.update(le,ce,Ze),(Tt||vt.receiveShadow!==le.receiveShadow)&&(vt.receiveShadow=le.receiveShadow,St.setValue(te,"receiveShadow",le.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(ln.envMap.value=Ve,ln.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Tt&&(St.setValue(te,"toneMappingExposure",R.toneMappingExposure),vt.needsLights&&In(ln,kt),He&&de.fog===!0&&Se.refreshFogUniforms(ln,He),Se.refreshMaterialUniforms(ln,de,ee,ie,xe),tu.upload(te,It(vt),ln,ht)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(tu.upload(te,It(vt),ln,ht),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&St.setValue(te,"center",le.center),St.setValue(te,"modelViewMatrix",le.modelViewMatrix),St.setValue(te,"normalMatrix",le.normalMatrix),St.setValue(te,"modelMatrix",le.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const en=de.uniformsGroups;for(let ai=0,Li=en.length;ai<Li;ai++)if(ut.isWebGL2){const Nn=en[ai];Ge.update(Nn,Ze),Ge.bind(Nn,Ze)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ze}function In(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function hs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,J,ce){qe.get(C.texture).__webglTexture=J,qe.get(C.depthTexture).__webglTexture=ce;const de=qe.get(C);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ce===void 0,de.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,J){const ce=qe.get(C);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ce=0){P=C,B=J,k=ce;let de=!0,le=null,He=!1,et=!1;if(C){const Ve=qe.get(C);Ve.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(te.FRAMEBUFFER,null),de=!1):Ve.__webglFramebuffer===void 0?ht.setupRenderTarget(C):Ve.__hasExternalTextures&&ht.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);const yt=C.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(et=!0);const dt=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(dt[J])?le=dt[J][ce]:le=dt[J],He=!0):ut.isWebGL2&&C.samples>0&&ht.useMultisampledRTT(C)===!1?le=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(dt)?le=dt[ce]:le=dt,A.copy(C.viewport),U.copy(C.scissor),pe=C.scissorTest}else A.copy($).multiplyScalar(ee).floor(),U.copy(D).multiplyScalar(ee).floor(),pe=j;if(Be.bindFramebuffer(te.FRAMEBUFFER,le)&&ut.drawBuffers&&de&&Be.drawBuffers(C,le),Be.viewport(A),Be.scissor(U),Be.setScissorTest(pe),He){const Ve=qe.get(C.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,ce)}else if(et){const Ve=qe.get(C.texture),yt=J||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ve.__webglTexture,ce||0,yt)}Z=-1},this.readRenderTargetPixels=function(C,J,ce,de,le,He,et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(st=st[et]),st){Be.bindFramebuffer(te.FRAMEBUFFER,st);try{const Ve=C.texture,yt=Ve.format,dt=Ve.type;if(yt!==Ri&&$e.convert(yt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mt=dt===fa&&(Je.has("EXT_color_buffer_half_float")||ut.isWebGL2&&Je.has("EXT_color_buffer_float"));if(dt!==Ir&&$e.convert(dt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(dt===er&&(ut.isWebGL2||Je.has("OES_texture_float")||Je.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-de&&ce>=0&&ce<=C.height-le&&te.readPixels(J,ce,de,le,$e.convert(yt),$e.convert(dt),He)}finally{const Ve=P!==null?qe.get(P).__webglFramebuffer:null;Be.bindFramebuffer(te.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,J,ce=0){const de=Math.pow(2,-ce),le=Math.floor(J.image.width*de),He=Math.floor(J.image.height*de);ht.setTexture2D(J,0),te.copyTexSubImage2D(te.TEXTURE_2D,ce,0,0,C.x,C.y,le,He),Be.unbindTexture()},this.copyTextureToTexture=function(C,J,ce,de=0){const le=J.image.width,He=J.image.height,et=$e.convert(ce.format),st=$e.convert(ce.type);ht.setTexture2D(ce,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ce.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ce.unpackAlignment),J.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,de,C.x,C.y,le,He,et,st,J.image.data):J.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,de,C.x,C.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,de,C.x,C.y,et,st,J.image),de===0&&ce.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ce,de,le=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=Math.round(C.max.x-C.min.x),et=Math.round(C.max.y-C.min.y),st=C.max.z-C.min.z+1,Ve=$e.convert(de.format),yt=$e.convert(de.type);let dt;if(de.isData3DTexture)ht.setTexture3D(de,0),dt=te.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)ht.setTexture2DArray(de,0),dt=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,de.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,de.unpackAlignment);const mt=te.getParameter(te.UNPACK_ROW_LENGTH),Ot=te.getParameter(te.UNPACK_IMAGE_HEIGHT),gn=te.getParameter(te.UNPACK_SKIP_PIXELS),$t=te.getParameter(te.UNPACK_SKIP_ROWS),Sn=te.getParameter(te.UNPACK_SKIP_IMAGES),Pt=ce.isCompressedTexture?ce.mipmaps[le]:ce.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,Pt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Pt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,C.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,C.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,C.min.z),ce.isDataTexture||ce.isData3DTexture?te.texSubImage3D(dt,le,J.x,J.y,J.z,He,et,st,Ve,yt,Pt.data):de.isCompressedArrayTexture?te.compressedTexSubImage3D(dt,le,J.x,J.y,J.z,He,et,st,Ve,Pt.data):te.texSubImage3D(dt,le,J.x,J.y,J.z,He,et,st,Ve,yt,Pt),te.pixelStorei(te.UNPACK_ROW_LENGTH,mt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Ot),te.pixelStorei(te.UNPACK_SKIP_PIXELS,gn),te.pixelStorei(te.UNPACK_SKIP_ROWS,$t),te.pixelStorei(te.UNPACK_SKIP_IMAGES,Sn),le===0&&de.generateMipmaps&&te.generateMipmap(dt),Be.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ht.setTextureCube(C,0):C.isData3DTexture?ht.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ht.setTexture2DArray(C,0):ht.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){B=0,k=0,P=null,Be.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===td?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===hu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class n1 extends e0{}n1.prototype.isWebGL1Renderer=!0;class sd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=r}clone(){return new sd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class r1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ng("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new W;class cu{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),a=Bt(a,this.array),l=Bt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yf extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qs;const oa=new W,Js=new W,eo=new W,to=new _t,aa=new _t,t0=new Wt,Hl=new W,la=new W,Gl=new W,sg=new _t,bf=new _t,og=new _t;class ag extends sn{constructor(e=new Yf){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new r1(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new cu(r,3,0,!1)),Qs.setAttribute("uv",new cu(r,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new _t(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),t0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-eo.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Vl(Hl.set(-.5,-.5,0),eo,f,Js,a,l),Vl(la.set(.5,-.5,0),eo,f,Js,a,l),Vl(Gl.set(.5,.5,0),eo,f,Js,a,l),sg.set(0,0),bf.set(1,0),og.set(1,1);let c=e.ray.intersectTriangle(Hl,la,Gl,!1,oa);if(c===null&&(Vl(la.set(-.5,.5,0),eo,f,Js,a,l),bf.set(0,1),c=e.ray.intersectTriangle(Hl,Gl,la,!1,oa),c===null))return;const h=e.ray.origin.distanceTo(oa);h<e.near||h>e.far||t.push({distance:h,point:oa.clone(),uv:Ci.getInterpolation(oa,Hl,la,Gl,sg,bf,og,new _t),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vl(s,e,t,r,a,l){to.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(aa.x=l*to.x-a*to.y,aa.y=a*to.x+l*to.y):aa.copy(to),s.copy(e),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(t0)}class so extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lg=new W,ug=new W,cg=new Wt,Pf=new nd,Wl=new pa;class no extends sn{constructor(e=new rn,t=new so){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)lg.fromBufferAttribute(t,a-1),ug.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=lg.distanceTo(ug);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(a),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;cg.copy(a).invert(),Pf.copy(e.ray).applyMatrix4(cg);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new W,_=new W,g=new W,y=new W,S=this.isLineSegments?2:1,E=r.index,x=r.attributes.position;if(E!==null){const v=Math.max(0,f.start),I=Math.min(E.count,f.start+f.count);for(let R=v,b=I-1;R<b;R+=S){const B=E.getX(R),k=E.getX(R+1);if(p.fromBufferAttribute(x,B),_.fromBufferAttribute(x,k),Pf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(y);Z<e.near||Z>e.far||t.push({distance:Z,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,f.start),I=Math.min(x.count,f.start+f.count);for(let R=v,b=I-1;R<b;R+=S){if(p.fromBufferAttribute(x,R),_.fromBufferAttribute(x,R+1),Pf.distanceSqToSegment(p,_,y,g)>h)continue;y.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(y);k<e.near||k>e.far||t.push({distance:k,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class s1 extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fg=new Wt,$f=new nd,Xl=new pa,jl=new W;class o1 extends sn{constructor(e=new rn,t=new s1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(a),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;fg.copy(a).invert(),$f.copy(e.ray).applyMatrix4(fg);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=y,w=S;E<w;E++){const x=p.getX(E);jl.fromBufferAttribute(g,x),dg(jl,x,h,a,e,t,this)}}else{const y=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=y,w=S;E<w;E++)jl.fromBufferAttribute(g,E),dg(jl,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function dg(s,e,t,r,a,l,f){const c=$f.distanceSqToPoint(s);if(c<t){const h=new W;$f.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:f})}}class hg extends Vn{constructor(e,t,r,a,l,f,c,h,p){super(e,t,r,a,l,f,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class a1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,p;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),p=r[a]-f,p<0)c=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const _=r[a],y=r[a+1]-_,S=(f-_)/y;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new _t:new W);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new W,a=[],l=[],f=[],c=new W,h=new Wt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new W)}l[0]=new W,f[0]=new W;let p=Number.MAX_VALUE;const _=Math.abs(a[0].x),g=Math.abs(a[0].y),y=Math.abs(a[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),y<=p&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(Ln(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,E))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(Ln(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),f[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function od(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,p){a(f,c,p*(c-l),p*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,p,_,g){let y=(f-l)/p-(c-l)/(p+_)+(c-f)/_,S=(c-f)/_-(h-f)/(_+g)+(h-c)/g;y*=_,S*=_,a(f,c,y,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const ql=new W,Lf=new od,Df=new od,If=new od;class l1 extends a1{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new W){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let p,_;this.closed||c>0?p=a[(c-1)%l]:(ql.subVectors(a[0],a[1]).add(a[0]),p=ql);const g=a[c%l],y=a[(c+1)%l];if(this.closed||c+2<l?_=a[(c+2)%l]:(ql.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(y),S),x=Math.pow(y.distanceToSquared(_),S);w<1e-4&&(w=1),E<1e-4&&(E=w),x<1e-4&&(x=w),Lf.initNonuniformCatmullRom(p.x,g.x,y.x,_.x,E,w,x),Df.initNonuniformCatmullRom(p.y,g.y,y.y,_.y,E,w,x),If.initNonuniformCatmullRom(p.z,g.z,y.z,_.z,E,w,x)}else this.curveType==="catmullrom"&&(Lf.initCatmullRom(p.x,g.x,y.x,_.x,this.tension),Df.initCatmullRom(p.y,g.y,y.y,_.y,this.tension),If.initCatmullRom(p.z,g.z,y.z,_.z,this.tension));return r.set(Lf.calc(h),Df.calc(h),If.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new W().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class fu extends rn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],f=[],c=[],h=[],p=new W,_=new _t;f.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let g=0,y=3;g<=t;g++,y+=3){const S=r+g/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(f[y]/e+1)/2,_.y=(f[y+1]/e+1)/2,h.push(_.x,_.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ad extends rn{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:c,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],g=[],y=[],S=[];let E=0;const w=[],x=r/2;let v=0;I(),f===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(S,2));function I(){const b=new W,B=new W;let k=0;const P=(t-e)/r;for(let Z=0;Z<=l;Z++){const me=[],A=Z/l,U=A*(t-e)+e;for(let pe=0;pe<=a;pe++){const fe=pe/a,G=fe*h+c,K=Math.sin(G),ie=Math.cos(G);B.x=U*K,B.y=-A*r+x,B.z=U*ie,g.push(B.x,B.y,B.z),b.set(K,P,ie).normalize(),y.push(b.x,b.y,b.z),S.push(fe,1-A),me.push(E++)}w.push(me)}for(let Z=0;Z<a;Z++)for(let me=0;me<l;me++){const A=w[me][Z],U=w[me+1][Z],pe=w[me+1][Z+1],fe=w[me][Z+1];_.push(A,U,fe),_.push(U,pe,fe),k+=6}p.addGroup(v,k,0),v+=k}function R(b){const B=E,k=new _t,P=new W;let Z=0;const me=b===!0?e:t,A=b===!0?1:-1;for(let pe=1;pe<=a;pe++)g.push(0,x*A,0),y.push(0,A,0),S.push(.5,.5),E++;const U=E;for(let pe=0;pe<=a;pe++){const G=pe/a*h+c,K=Math.cos(G),ie=Math.sin(G);P.x=me*ie,P.y=x*A,P.z=me*K,g.push(P.x,P.y,P.z),y.push(0,A,0),k.x=K*.5+.5,k.y=ie*.5*A+.5,S.push(k.x,k.y),E++}for(let pe=0;pe<a;pe++){const fe=B+pe,G=U+pe;b===!0?_.push(G,G+1,fe):_.push(G+1,G,fe),Z+=3}p.addGroup(v,Z,b===!0?1:2),v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ld extends ad{constructor(e=1,t=1,r=32,a=1,l=!1,f=0,c=Math.PI*2){super(0,e,t,r,a,l,f,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:f,thetaLength:c}}static fromJSON(e){return new ld(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ud extends rn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+c,Math.PI);let p=0;const _=[],g=new W,y=new W,S=[],E=[],w=[],x=[];for(let v=0;v<=r;v++){const I=[],R=v/r;let b=0;v===0&&f===0?b=.5/t:v===r&&h===Math.PI&&(b=-.5/t);for(let B=0;B<=t;B++){const k=B/t;g.x=-e*Math.cos(a+k*l)*Math.sin(f+R*c),g.y=e*Math.cos(f+R*c),g.z=e*Math.sin(a+k*l)*Math.sin(f+R*c),E.push(g.x,g.y,g.z),y.copy(g).normalize(),w.push(y.x,y.y,y.z),x.push(k+b,1-R),I.push(p++)}_.push(I)}for(let v=0;v<r;v++)for(let I=0;I<t;I++){const R=_[v][I+1],b=_[v][I],B=_[v+1][I],k=_[v+1][I+1];(v!==0||f>0)&&S.push(R,b,k),(v!==r-1||h<Math.PI)&&S.push(b,B,k)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(w,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cd extends rn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const f=[],c=[],h=[],p=[],_=new W,g=new W,y=new W;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const w=E/a*l,x=S/r*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(w),g.y=(e+t*Math.cos(x))*Math.sin(w),g.z=t*Math.sin(x),c.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),y.subVectors(g,_).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const w=(a+1)*S+E-1,x=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,I=(a+1)*S+E;f.push(w,x,I),f.push(x,v,I)}this.setIndex(f),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yl extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u1 extends ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ga extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class c1 extends ga{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uf=new Wt,pg=new W,mg=new W;class fd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mg),t.updateMatrixWorld(),Uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f1 extends fd{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=lu*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gg extends ga{constructor(e,t,r=0,a=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new f1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _g=new Wt,ua=new W,Nf=new W;class d1 extends fd{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),r.position.copy(ua),Nf.copy(r.position),Nf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Nf),r.updateMatrixWorld(),a.makeTranslation(-ua.x,-ua.y,-ua.z),_g.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_g)}}class h1 extends ga{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new d1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p1 extends fd{constructor(){super(new qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m1 extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class g1 extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);const _1="https://api.openf1.org/v1",oe={red:"#E10600",redDark:"#B30500",carbon:"#15151e",carbonLight:"#1c1c28",carbonMid:"#222230",panelBg:"rgba(18,18,28,0.96)",overlay:"rgba(12,12,20,0.92)",cardBg:"rgba(25,25,38,0.85)",inputBg:"rgba(28,28,42,0.95)",text:"#e8e8f0",textDim:"#8b8ba0",textMuted:"#505068",border:"rgba(80,80,120,0.25)",borderLight:"rgba(60,60,90,0.18)",green:"#00d26a",yellow:"#ffd700",mono:"'Titillium Web', 'Barlow Condensed', sans-serif",sans:"'Titillium Web', sans-serif"},v1={SOFT:"#ff3333",MEDIUM:"#ffcc00",HARD:"#cccccc",INTERMEDIATE:"#44cc44",WET:"#4488ff"},x1={"Red Bull Racing":"#3671C6","Red Bull":"#3671C6",McLaren:"#FF8000",Ferrari:"#E8002D",Mercedes:"#27F4D2","Aston Martin":"#229971",Alpine:"#0093CC",Williams:"#64C4FF",RB:"#6692FF","Racing Bulls":"#6692FF","Kick Sauber":"#52E252",Sauber:"#52E252","Haas F1 Team":"#B6BABD",Haas:"#B6BABD",Cadillac:"#FFD700"},vg=s=>{if(!s)return"#888";for(const[e,t]of Object.entries(x1))if(s.toLowerCase().includes(e.toLowerCase()))return t;return"#888"},y1=[{label:"VER vs NOR — Monza 2024 Q",year:2024,meeting:"Italian Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"HAM vs VER — Bahrain 2024 R",year:2024,meeting:"Bahrain Grand Prix",session:"Race",d1:44,d2:1},{label:"NOR vs PIA — Silverstone 2024 Q",year:2024,meeting:"British Grand Prix",session:"Qualifying",d1:4,d2:81},{label:"LEC vs SAI — Monaco 2024 Q",year:2024,meeting:"Monaco Grand Prix",session:"Qualifying",d1:16,d2:55},{label:"VER vs NOR — Abu Dhabi 2024 Q",year:2024,meeting:"Abu Dhabi Grand Prix",session:"Qualifying",d1:1,d2:4},{label:"RUS vs HAM — Spa 2024 Q",year:2024,meeting:"Belgian Grand Prix",session:"Qualifying",d1:63,d2:44}],$l=["orbit","follow1","follow2","top","cinematic"],S1={orbit:"Free",follow1:"Chase D1",follow2:"Chase D2",top:"Heli",cinematic:"Film"};async function ds(s,e={},t=2){const r=new URL(`${_1}${s}`);Object.entries(e).forEach(([a,l])=>{l!=null&&l!==""&&r.searchParams.append(a,l)});for(let a=0;a<=t;a++)try{const l=await fetch(r.toString());if(l.status===429){await new Promise(f=>setTimeout(f,1500*(a+1)));continue}if(!l.ok)throw new Error(`API ${l.status}`);return l.json()}catch(l){if(a===t)throw l;await new Promise(f=>setTimeout(f,800*(a+1)))}}const xg=s=>ds("/meetings",{year:s}),yg=s=>ds("/sessions",{meeting_key:s}),Sg=s=>ds("/drivers",{session_key:s}),Kl=(s,e)=>ds("/laps",{session_key:s,driver_number:e}),Zl=(s,e)=>ds("/stints",{session_key:s,driver_number:e});function Ql(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),ds("/location",a)}function Jl(s,e,t,r){const a={session_key:s,driver_number:e};return t&&(a["date>"]=t),r&&(a["date<"]=r),ds("/car_data",a)}function nu(s,e){if(!(s!=null&&s.length))return{x:0,y:0,z:0};const t=Math.max(0,Math.min(1,e))*(s.length-1),r=Math.floor(t),a=Math.min(r+1,s.length-1),l=t-r;return{x:s[r].x+(s[a].x-s[r].x)*l,y:s[r].y+(s[a].y-s[r].y)*l,z:s[r].z+(s[a].z-s[r].z)*l}}function go(s){if(!(s!=null&&s.length))return[];let e=1/0,t=-1/0,r=1/0,a=-1/0,l=1/0,f=-1/0;for(const g of s)g.x<e&&(e=g.x),g.x>t&&(t=g.x),g.y<r&&(r=g.y),g.y>a&&(a=g.y),g.z<l&&(l=g.z),g.z>f&&(f=g.z);const c=Math.max(t-e,a-r)||1,h=(e+t)/2,p=(r+a)/2,_=(l+f)/2;return s.map(g=>({x:(g.x-h)/c*40,y:(g.z-_)/c*4,z:(g.y-p)/c*40}))}function Mg(s,e){return s!=null&&s.length?s[Math.min(Math.floor(e*(s.length-1)),s.length-1)]:{speed:0,throttle:0,brake:0,rpm:0,gear:0,drs:0,n_gear:0}}function eu(s){const e=s.filter(t=>t.lap_duration>10&&t.date_start);return e.length?e.reduce((t,r)=>t.lap_duration<r.lap_duration?t:r):null}function M1(){const[s,e]=Ce.useState(typeof window<"u"&&window.innerWidth<768);return Ce.useEffect(()=>{const t=()=>e(window.innerWidth<768);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),s}function io(s,e){if(!s||s.length<=e)return s||[];const t=s.length/e,r=[];for(let a=0;a<e;a++)r.push(s[Math.floor(a*t)]);return r}function is(s){if(!s||s<=0)return"0:00.000";const e=Math.floor(s/60),t=s-e*60;return`${e}:${t<10?"0":""}${t.toFixed(3)}`}function E1(s){const e=new URLSearchParams;return s.year&&e.set("y",s.year),s.mk&&e.set("mk",s.mk),s.sk&&e.set("sk",s.sk),s.d1&&e.set("d1",s.d1),s.d2&&e.set("d2",s.d2),s.l1&&e.set("l1",s.l1),s.l2&&e.set("l2",s.l2),`${window.location.origin}${window.location.pathname}?${e.toString()}`}function ro(){const s=new URLSearchParams(window.location.search);return{year:s.get("y"),mk:s.get("mk"),sk:s.get("sk"),d1:s.get("d1"),d2:s.get("d2"),l1:s.get("l1"),l2:s.get("l2")}}function w1(s,e,t,r,a,l,f,c,h,p,_,g){const y=Ce.useRef({}),S=Ce.useRef({angle:0,pitch:.6,dist:85,drag:!1,lx:0,ly:0,cinT:0}),E=Ce.useRef(c),w=Ce.useRef(new W(40,30,40)),x=Ce.useRef(new W(0,0,0)),v=Ce.useMemo(()=>t?go(t):null,[t]),I=Ce.useMemo(()=>r?go(r):null,[r]),R=Ce.useMemo(()=>(_==null?void 0:_.map(b=>b.speed||0))||[],[_]);Ce.useEffect(()=>{const b=s.current;if(!b||!e||e.length<10)return;y.current.ren&&(y.current.ren.dispose(),b.contains(y.current.ren.domElement)&&b.removeChild(y.current.ren.domElement)),y.current.fr&&cancelAnimationFrame(y.current.fr);const B=b.clientWidth,k=b.clientHeight,P=new i1;P.background=new Et(1184280),P.fog=new sd(1184280,120,350);const Z=new Zn(50,B/k,.1,500),me=new e0({antialias:!0});me.setSize(B,k),me.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.appendChild(me.domElement),P.add(new g1(14540264,.7));const A=new m1(16777215,1);A.position.set(40,80,30),P.add(A),P.add(new c1(12305629,3355456,.4));const U=new nn(new ma(400,400),new u1({color:1579039}));U.rotation.x=-Math.PI/2,U.position.y=-.2,P.add(U);const pe=new ud(180,32,16),fe=new Float32Array(pe.attributes.position.count*3);for(let ye=0;ye<pe.attributes.position.count;ye++){const F=pe.attributes.position.getY(ye),se=Math.max(0,Math.min(1,(F+10)/190));fe[ye*3]=.06+se*.04,fe[ye*3+1]=.06+se*.07,fe[ye*3+2]=.1+se*.12}pe.setAttribute("color",new Yt(fe,3));const G=new nn(pe,new oo({vertexColors:!0,side:Gn,fog:!1}));P.add(G);const K=new l1(e.map(ye=>new W(ye.x,ye.y,ye.z)),!0),ie=Math.min(e.length*3,800),ee=2,O=K.getPoints(ie),Q=[],$=[],D=[],j=[],Me=[],Y=O.map((ye,F)=>{const se=O[(F+1)%O.length],H=O[(F-1+O.length)%O.length];return new W(se.x-H.x,0,se.z-H.z).normalize()});for(let ye=0;ye<O.length;ye++){const F=O[ye],se=Y[ye],H=new W(-se.z,0,se.x),ge=new W(F.x+H.x*ee/2,F.y,F.z+H.z*ee/2),ve=new W(F.x-H.x*ee/2,F.y,F.z-H.z*ee/2);if(Q.push(ge.x,ge.y,ge.z,ve.x,ve.y,ve.z),$.push(0,1,0,0,1,0),j.push(new W(ge.x,ge.y+.02,ge.z)),Me.push(new W(ve.x,ve.y+.02,ve.z)),ye<O.length-1){const ke=ye*2;D.push(ke,ke+2,ke+1,ke+1,ke+2,ke+3)}}const ae=new rn;ae.setAttribute("position",new Yt(Q,3)),ae.setAttribute("normal",new Yt($,3)),ae.setIndex(D);const xe=new nn(ae,new Yl({color:3816008,roughness:.8,metalness:.1,side:si}));if(P.add(xe),g==="heatmap"&&R.length>10){const ye=new Float32Array(O.length*2*3);for(let H=0;H<O.length;H++){const ge=H/(O.length-1),ve=Math.min(Math.floor(ge*(R.length-1)),R.length-1),ke=Math.max(0,Math.min(1,(R[ve]-50)/300));let ft,Ct,wt;ke<.25?(ft=0,Ct=ke*4,wt=1):ke<.5?(ft=0,Ct=1,wt=1-(ke-.25)*4):ke<.75?(ft=(ke-.5)*4,Ct=1,wt=0):(ft=1,Ct=1-(ke-.75)*4,wt=0);const pt=H*2;ye[pt*3]=ft,ye[pt*3+1]=Ct,ye[pt*3+2]=wt,ye[(pt+1)*3]=ft,ye[(pt+1)*3+1]=Ct,ye[(pt+1)*3+2]=wt}const F=ae.clone();F.setAttribute("color",new Yt(ye,3));const se=new nn(F,new oo({vertexColors:!0,transparent:!0,opacity:.55,side:si,depthWrite:!1}));se.position.y+=.01,P.add(se)}const Oe=new so({color:16777215,transparent:!0,opacity:.55});P.add(new no(new rn().setFromPoints(j),Oe)),P.add(new no(new rn().setFromPoints(Me),Oe));const De=[53866,16766720,14747136];[0,.33,.66].forEach((ye,F)=>{const se=K.getPointAt(ye),H=K.getTangentAt(ye),ge=new W(-H.z,0,H.x).normalize(),ve=se.clone().add(ge.clone().multiplyScalar(ee/2+.3)),ke=se.clone().sub(ge.clone().multiplyScalar(ee/2+.3));ve.y+=.03,ke.y+=.03,P.add(new no(new rn().setFromPoints([ve,ke]),new so({color:De[F],linewidth:2}))),[-1,1].forEach(ft=>{const Ct=new ki(.15,1.2,2),wt=new Yl({color:De[F],emissive:De[F],emissiveIntensity:.5,transparent:!0,opacity:.7}),pt=new nn(Ct,wt),zt=ge.clone().multiplyScalar(ft*(ee/2+.8));pt.position.set(se.x+zt.x,se.y+.6,se.z+zt.z),pt.lookAt(se.x,se.y+.6,se.z),P.add(pt)})});const Ae=[],lt=250;for(let ye=0;ye<lt-2;ye++){const F=ye/lt,se=(ye+1)/lt,H=(ye+2)/lt,ge=K.getPointAt(F),ve=K.getPointAt(se),ke=K.getPointAt(H);Math.abs((ve.x-ge.x)*(ke.z-ve.z)-(ve.z-ge.z)*(ke.x-ve.x))>.12&&(Ae.length===0||Math.abs(se-Ae[Ae.length-1].t)>.035)&&Ae.push({t:se,p:ve})}Ae.slice(0,20).forEach((ye,F)=>{const se=document.createElement("canvas");se.width=48,se.height=48;const H=se.getContext("2d");H.fillStyle="rgba(225,6,0,0.75)",H.beginPath(),H.arc(24,24,20,0,Math.PI*2),H.fill(),H.fillStyle="#fff",H.font="bold 22px sans-serif",H.textAlign="center",H.textBaseline="middle",H.fillText(`${F+1}`,24,25);const ge=new hg(se),ve=new ag(new Yf({map:ge,transparent:!0,depthWrite:!1})),ke=K.getTangentAt(ye.t),Ct=new W(-ke.z,0,ke.x).normalize().clone().multiplyScalar(ee/2+1.5);ve.position.set(ye.p.x+Ct.x,ye.p.y+1.5,ye.p.z+Ct.z),ve.scale.set(1.3,1.3,1),P.add(ve)});const it=K.getPointAt(0),te=K.getTangentAt(0),Ft=new W(-te.z,0,te.x).normalize(),Je=it.clone().add(Ft.clone().multiplyScalar(ee/2));Je.y+=.03;const ut=it.clone().sub(Ft.clone().multiplyScalar(ee/2));ut.y+=.03,P.add(new no(new rn().setFromPoints([Je,ut]),new so({color:16777215})));function Be(ye,F,se){const H=new ca,ge=new Et(ye),ve=new Yl({color:ge,emissive:ge,emissiveIntensity:se?.6:.35,metalness:.7,roughness:.25,transparent:se,opacity:se?.55:1}),ke=new nn(new ki(.5,.2,1.6),ve);ke.position.y=.2,H.add(ke);const ft=new nn(new ki(.9,.06,.25),ve);ft.position.set(0,.12,.85),H.add(ft);const Ct=new nn(new ki(.7,.18,.08),ve);Ct.position.set(0,.45,-.75),H.add(Ct),[-.35,.35].forEach(mn=>{const It=new nn(new ki(.03,.22,.15),ve);It.position.set(mn,.42,-.75),H.add(It)});const wt=new nn(new ld(.12,.5,4),ve);wt.geometry.rotateX(-Math.PI/2),wt.position.set(0,.18,1.05),H.add(wt);const pt=new Yl({color:3355443,metalness:.9,roughness:.1}),zt=new nn(new cd(.18,.025,6,12,Math.PI),pt);zt.rotation.z=Math.PI,zt.position.set(0,.35,.15),H.add(zt);const an=new oo({color:0,transparent:!0,opacity:.25,side:si,depthWrite:!1}),Pi=new nn(new fu(1,16),an);Pi.rotation.x=-Math.PI/2,Pi.position.y=.01,H.add(Pi);const gi=new oo({color:ge,transparent:!0,opacity:se?.08:.04,side:si,depthWrite:!1}),Dn=new nn(new fu(1.5,16),gi);Dn.rotation.x=-Math.PI/2,Dn.position.y=.005,H.add(Dn);const Qn=new h1(ge,se?.7:.4,10);if(Qn.position.set(0,.5,0),H.add(Qn),F){const mn=document.createElement("canvas");mn.width=160,mn.height=56;const It=mn.getContext("2d");It.fillStyle=ye,It.globalAlpha=.9,It.beginPath();const wn=6;It.moveTo(wn,0),It.lineTo(160-wn,0),It.quadraticCurveTo(160,0,160,wn),It.lineTo(160,56-wn),It.quadraticCurveTo(160,56,160-wn,56),It.lineTo(wn,56),It.quadraticCurveTo(0,56,0,56-wn),It.lineTo(0,wn),It.quadraticCurveTo(0,0,wn,0),It.fill(),It.fillStyle="#fff",It.globalAlpha=.15,It.fillRect(0,0,6,56),It.globalAlpha=1,It.fillStyle="#fff",It.font="bold 30px sans-serif",It.textAlign="center",It.textBaseline="middle",It.fillText(F,80,30);const Or=new hg(mn),In=new ag(new Yf({map:Or,transparent:!0,depthWrite:!1}));In.position.set(0,1.6,0),In.scale.set(2.8,1,1),H.add(In)}return H}const xt=Be(l,h,!1),qe=Be(f,p,!0);P.add(xt),P.add(qe);const ht=new gg(new Et(l),.6,25,Math.PI/6,.5,1);ht.position.set(0,12,0),P.add(ht);const Mt=new gg(new Et(f),.4,25,Math.PI/6,.5,1);Mt.position.set(0,12,0),P.add(Mt);const L=new rn,T=new Float32Array(6);L.setAttribute("position",new Yt(T,3));const he=new so({color:16777215,transparent:!0,opacity:.5}),_e=new no(L,he);_e.frustumCulled=!1,P.add(_e);const Te=K.getPoints(ie),Se=new rn().setFromPoints(Te),ct=new no(Se,new so({color:4500223,transparent:!0,opacity:.12}));ct.position.y+=.015,P.add(ct);function tt(ye,F){const H=new Float32Array(360),ge=new rn;ge.setAttribute("position",new oi(H,3));const ve=new Float32Array(120);ve.fill(0),ge.setAttribute("alpha",new oi(ve,1)),ge.setDrawRange(0,0);const ke=new nr({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Et(ye)}},vertexShader:"attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }",fragmentShader:`uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${F?"0.3":"0.55"}); }`}),ft=new o1(ge,ke);return P.add(ft),{mesh:ft,positions:H,alphas:ve,max:120,count:0}}const Ie=tt(l,!1),Ue=tt(f,!0);y.current={scene:P,camera:Z,ren:me,car1:xt,car2:qe,tr1:Ie,tr2:Ue,n1:v,n2:I,curve:K,spot1:ht,spot2:Mt,deltaLine:_e,deltaPos:T,fr:null};const ze=S.current,be=ye=>{var F,se,H,ge;ze.drag=!0,ze.lx=ye.clientX??((se=(F=ye.touches)==null?void 0:F[0])==null?void 0:se.clientX)??0,ze.ly=ye.clientY??((ge=(H=ye.touches)==null?void 0:H[0])==null?void 0:ge.clientY)??0},Nt=ye=>{var H,ge,ve,ke;if(!ze.drag)return;const F=ye.clientX??((ge=(H=ye.touches)==null?void 0:H[0])==null?void 0:ge.clientX)??0,se=ye.clientY??((ke=(ve=ye.touches)==null?void 0:ve[0])==null?void 0:ke.clientY)??0;ze.angle+=(F-ze.lx)*.005,ze.pitch=Math.max(.1,Math.min(1.4,ze.pitch+(se-ze.ly)*.005)),ze.lx=F,ze.ly=se},rt=()=>{ze.drag=!1},$e=ye=>{ze.dist=Math.max(15,Math.min(200,ze.dist+ye.deltaY*.05))},Ne=me.domElement;Ne.addEventListener("mousedown",be),Ne.addEventListener("mousemove",Nt),Ne.addEventListener("mouseup",rt),Ne.addEventListener("mouseleave",rt),Ne.addEventListener("wheel",$e,{passive:!0}),Ne.addEventListener("touchstart",be,{passive:!0}),Ne.addEventListener("touchmove",Nt,{passive:!0}),Ne.addEventListener("touchend",rt);function Ge(){y.current.fr=requestAnimationFrame(Ge),ze.cinT+=3e-4;const ye=E.current;ye==="orbit"?(ze.drag||(ze.angle+=8e-4),w.current.set(Math.cos(ze.angle)*ze.dist*Math.cos(ze.pitch),ze.dist*Math.sin(ze.pitch),Math.sin(ze.angle)*ze.dist*Math.cos(ze.pitch)),x.current.set(0,0,0)):ye==="top"&&(w.current.set(0,65,.01),x.current.set(0,0,0)),Z.position.lerp(w.current,.08),Z.lookAt(x.current),me.render(P,Z)}Ge();let nt;const je=()=>{clearTimeout(nt),nt=setTimeout(()=>{b&&(Z.aspect=b.clientWidth/b.clientHeight,Z.updateProjectionMatrix(),me.setSize(b.clientWidth,b.clientHeight))},100)};return window.addEventListener("resize",je),()=>{window.removeEventListener("resize",je),Ne.removeEventListener("mousedown",be),Ne.removeEventListener("mousemove",Nt),Ne.removeEventListener("mouseup",rt),Ne.removeEventListener("mouseleave",rt),Ne.removeEventListener("wheel",$e),Ne.removeEventListener("touchstart",be),Ne.removeEventListener("touchmove",Nt),Ne.removeEventListener("touchend",rt),cancelAnimationFrame(y.current.fr),me.dispose(),b.contains(me.domElement)&&b.removeChild(me.domElement)}},[e,l,f,h,p,g,R]),Ce.useEffect(()=>{y.current.n1=v},[v]),Ce.useEffect(()=>{y.current.n2=I},[I]),Ce.useEffect(()=>{E.current=c},[c]),Ce.useEffect(()=>{const{car1:b,car2:B,tr1:k,tr2:P,camera:Z,spot1:me,spot2:A,deltaLine:U,deltaPos:pe}=y.current;if(!b||!B||!e||e.length<2)return;const fe=S.current;function G(ee,O,Q,$){const D=(Q==null?void 0:Q.length)>=2?Q:e,j=nu(D,$);if(isNaN(j.x)||isNaN(j.y)||isNaN(j.z))return{x:0,y:0,z:0};ee.position.set(j.x,j.y+.2,j.z);const Me=nu(D,Math.min(1,$+.005));if(Math.abs(Me.x-j.x)+Math.abs(Me.z-j.z)>.001&&!isNaN(Me.x)&&ee.lookAt(Me.x,j.y+.2,Me.z),O){const Y=Math.min(O.count+1,O.max);for(let ae=(Y-1)*3;ae>=3;ae-=3)O.positions[ae]=O.positions[ae-3],O.positions[ae+1]=O.positions[ae-2],O.positions[ae+2]=O.positions[ae-1];O.positions[0]=j.x,O.positions[1]=j.y+.05,O.positions[2]=j.z;for(let ae=Y-1;ae>=1;ae--)O.alphas[ae]=O.alphas[ae-1]*.97;O.alphas[0]=1,O.count=Y,O.mesh.geometry.attributes.position.needsUpdate=!0,O.mesh.geometry.attributes.alpha.needsUpdate=!0,O.mesh.geometry.setDrawRange(0,Y)}return j}const K=G(b,k,y.current.n1,a),ie=G(B,P,y.current.n2,a);if(me&&(me.position.set(K.x,K.y+12,K.z),me.target=b),A&&(A.position.set(ie.x,ie.y+12,ie.z),A.target=B),U&&pe){pe[0]=K.x,pe[1]=K.y+.5,pe[2]=K.z,pe[3]=ie.x,pe[4]=ie.y+.5,pe[5]=ie.z,U.geometry.attributes.position.needsUpdate=!0;const ee=Math.sqrt((K.x-ie.x)**2+(K.z-ie.z)**2);U.material.opacity=Math.min(.6,ee*.08)}if(Z){const ee=E.current;if(ee==="follow1"||ee==="follow2"){const O=ee==="follow1"?K:ie,Q=ee==="follow1"?y.current.n1||e:y.current.n2||e,$=nu(Q,Math.min(1,a+.02)),D=$.x-O.x,j=$.z-O.z,Me=Math.sqrt(D*D+j*j)||1;w.current.set(O.x-D/Me*8,O.y+4.5,O.z-j/Me*8),x.current.set($.x,O.y+.3,$.z)}else if(ee==="cinematic"&&y.current.curve){const O=(fe.cinT+a*.3)%1,Q=y.current.curve.getPointAt(O);w.current.set(Q.x+8,Q.y+5,Q.z+8),x.current.set((K.x+ie.x)/2,(K.y+ie.y)/2,(K.z+ie.z)/2)}}},[a,e,c])}const T1=Ce.memo(function({tp:e,l1:t,l2:r,prog:a,c1:l,c2:f}){const c=Ce.useRef(null),h=Ce.useMemo(()=>t?go(t):null,[t]),p=Ce.useMemo(()=>r?go(r):null,[r]);return Ce.useEffect(()=>{const _=c.current;if(!_||!(e!=null&&e.length))return;const g=_.getContext("2d"),y=_.width,S=14;g.clearRect(0,0,y,y),g.fillStyle=oe.overlay,g.beginPath(),g.moveTo(8,0),g.lineTo(y-8,0),g.quadraticCurveTo(y,0,y,8),g.lineTo(y,y-8),g.quadraticCurveTo(y,y,y-8,y),g.lineTo(8,y),g.quadraticCurveTo(0,y,0,y-8),g.lineTo(0,8),g.quadraticCurveTo(0,0,8,0),g.fill();let E=1/0,w=-1/0,x=1/0,v=-1/0;for(const B of e)B.x<E&&(E=B.x),B.x>w&&(w=B.x),B.z<x&&(x=B.z),B.z>v&&(v=B.z);const I=Math.max(w-E,v-x)||1,R=B=>({x:S+(B.x-E)/I*(y-S*2),y:S+(B.z-x)/I*(y-S*2)});g.strokeStyle="rgba(225,6,0,0.3)",g.lineWidth=2.5,g.beginPath(),e.forEach((B,k)=>{const P=R(B);k===0?g.moveTo(P.x,P.y):g.lineTo(P.x,P.y)}),g.closePath(),g.stroke();function b(B,k){const P=(B==null?void 0:B.length)>=2?B:e,Z=nu(P,a),me=R(Z);g.fillStyle=k,g.shadowColor=k,g.shadowBlur=8,g.beginPath(),g.arc(me.x,me.y,5,0,Math.PI*2),g.fill(),g.shadowBlur=0}b(h,l),b(p,f)},[e,a,t,r,l,f]),q.jsx("canvas",{ref:c,width:150,height:150,style:{width:150,height:150,borderRadius:8}})}),Ff=Ce.memo(function({data1:e,data2:t,color1:r,color2:a,maxVal:l,h:f}){const c=Ce.useRef(null);return Ce.useEffect(()=>{const h=c.current;if(!h)return;const p=h.getContext("2d"),_=h.width,g=h.height;p.clearRect(0,0,_,g);function y(S,E){if(!(S!=null&&S.length))return;const w=Math.max(1,Math.floor(S.length/_));p.strokeStyle=E,p.lineWidth=1.5,p.beginPath();let x=!0;for(let v=0;v<S.length;v+=w){const I=v/(S.length-1)*_,R=g-S[v]/l*g*.9-g*.05;x?p.moveTo(I,R):p.lineTo(I,R),x=!1}p.stroke()}y(e,r),y(t,a)},[e,t,r,a,l]),q.jsx("canvas",{ref:c,width:320,height:f||45,style:{width:"100%",height:f||45,borderRadius:3}})}),Of=Ce.memo(function({s:e,t1:t,t2:r,c1:a,c2:l}){const f=t&&r?t-r:null,c=[oe.green,oe.yellow,oe.red];return q.jsxs("div",{style:{flex:1,padding:"5px 8px",background:oe.cardBg,borderRadius:4,borderTop:`2px solid ${c[e-1]}`},children:[q.jsxs("div",{style:{fontSize:9,color:oe.textMuted,fontFamily:oe.mono,textTransform:"uppercase",letterSpacing:"0.1em"},children:["Sector ",e]}),q.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[q.jsx("span",{style:{fontSize:12,color:a,fontFamily:oe.mono,fontWeight:600},children:t?t.toFixed(3):"—"}),q.jsx("span",{style:{fontSize:12,color:l,fontFamily:oe.mono,fontWeight:600},children:r?r.toFixed(3):"—"})]}),f!==null&&q.jsxs("div",{style:{fontSize:11,fontWeight:700,color:f>0?oe.red:oe.green,fontFamily:oe.mono,textAlign:"center",marginTop:2},children:[f>0?"+":"",f.toFixed(3)]})]})});function A1(){var st,Ve,yt,dt,mt,Ot,gn,$t,Sn,Pt,vt;const s=M1(),[e,t]=Ce.useState(2026),[r,a]=Ce.useState([]),[l,f]=Ce.useState(null),[c,h]=Ce.useState([]),[p,_]=Ce.useState(null),[g,y]=Ce.useState([]),[S,E]=Ce.useState(null),[w,x]=Ce.useState(null),[v,I]=Ce.useState(null),[R,b]=Ce.useState(null),[B,k]=Ce.useState([]),[P,Z]=Ce.useState([]),[me,A]=Ce.useState(null),[U,pe]=Ce.useState(null),[fe,G]=Ce.useState(null),[K,ie]=Ce.useState(null),[ee,O]=Ce.useState(null),[Q,$]=Ce.useState([]),[D,j]=Ce.useState([]),[Me,Y]=Ce.useState(0),[ae,xe]=Ce.useState(!1),[Oe,De]=Ce.useState(1),[Ae,lt]=Ce.useState(!1),[it,te]=Ce.useState("orbit"),[Ft,Je]=Ce.useState("normal"),[ut,Be]=Ce.useState(""),[xt,qe]=Ce.useState(void 0),[ht,Mt]=Ce.useState(""),[L,T]=Ce.useState(!0),[he,_e]=Ce.useState("3d"),[Te,Se]=Ce.useState(!1),[ct,tt]=Ce.useState(!1),[Ie,Ue]=Ce.useState(!1),[ze,be]=Ce.useState(""),Nt=Ce.useRef(null),rt=Ce.useRef(null),$e=Ce.useRef(null),Ne=Ce.useRef(!1);Ce.useRef(!1);const Ge=Ce.useRef(!1),nt=g.find(z=>z.driver_number===S),je=g.find(z=>z.driver_number===w),ye=nt?vg(nt.team_name):"#4488ff",F=je?vg(je.team_name):"#ff4488",se=B.find(z=>z.lap_number===v),H=P.find(z=>z.lap_number===R),ge=se!=null&&se.lap_duration&&(H!=null&&H.lap_duration)?se.lap_duration-H.lap_duration:null,ve=se!=null&&se.lap_duration?Me*se.lap_duration:0,ke=H!=null&&H.lap_duration?Me*H.lap_duration:0,ft=(Ve=(st=Q.find(z=>v>=z.lap_start&&v<=z.lap_end))==null?void 0:st.compound)==null?void 0:Ve.toUpperCase(),Ct=(dt=(yt=D.find(z=>R>=z.lap_start&&R<=z.lap_end))==null?void 0:yt.compound)==null?void 0:dt.toUpperCase(),wt=s?200:400,pt=Ce.useMemo(()=>io(fe==null?void 0:fe.map(z=>z.speed||0),wt),[fe,wt]),zt=Ce.useMemo(()=>io(K==null?void 0:K.map(z=>z.speed||0),wt),[K,wt]),an=Ce.useMemo(()=>io(fe==null?void 0:fe.map(z=>z.throttle||0),wt),[fe,wt]),Pi=Ce.useMemo(()=>io(K==null?void 0:K.map(z=>z.throttle||0),wt),[K,wt]),gi=Ce.useMemo(()=>io(fe==null?void 0:fe.map(z=>z.brake>0?100:0),wt),[fe,wt]),Dn=Ce.useMemo(()=>io(K==null?void 0:K.map(z=>z.brake>0?100:0),wt),[K,wt]),Qn=Mg(fe,Me),mn=Mg(K,Me),It=Ce.useMemo(()=>fe?Math.max(...fe.map(z=>z.speed||0)):0,[fe]),wn=Ce.useMemo(()=>K?Math.max(...K.map(z=>z.speed||0)):0,[K]),Or=Ce.useMemo(()=>fe!=null&&fe.length?fe.reduce((z,Pe)=>z+(Pe.speed||0),0)/fe.length:0,[fe]),In=Ce.useMemo(()=>K!=null&&K.length?K.reduce((z,Pe)=>z+(Pe.speed||0),0)/K.length:0,[K]);Ce.useEffect(()=>{Ge.current||(Be("Loading..."),Mt(""),xg(e).then(z=>{a(z.filter(Pe=>Pe.meeting_name)),f(null),_(null),h([]),y([]),E(null),x(null),O(null),Be("")}).catch(z=>{Mt(z.message),Be("")}))},[e]),Ce.useEffect(()=>{!l||Ge.current||(Be("Loading sessions..."),yg(l.meeting_key).then(z=>{h(z.filter(Pe=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Pe.session_name))),_(null),y([]),E(null),x(null),O(null),Be("")}).catch(z=>{Mt(z.message),Be("")}))},[l]),Ce.useEffect(()=>{!p||Ge.current||(Be("Loading drivers..."),Sg(p.session_key).then(z=>{const Pe=new Set;y(z.filter(Ze=>Pe.has(Ze.driver_number)?!1:(Pe.add(Ze.driver_number),!0))),E(null),x(null),O(null),Be("")}).catch(z=>{Mt(z.message),Be("")}))},[p]),Ce.useEffect(()=>{Ge.current||p&&S&&(Kl(p.session_key,S).then(z=>{k(z),I(null)}).catch(()=>k([])),Zl(p.session_key,S).then($).catch(()=>$([])))},[p,S]),Ce.useEffect(()=>{Ge.current||p&&w&&(Kl(p.session_key,w).then(z=>{Z(z),b(null)}).catch(()=>Z([])),Zl(p.session_key,w).then(j).catch(()=>j([])))},[p,w]),Ce.useEffect(()=>{if(B.length&&!v){const z=eu(B);z&&I(z.lap_number)}},[B]),Ce.useEffect(()=>{if(P.length&&!R){const z=eu(P);z&&b(z.lap_number)}},[P]),Ce.useEffect(()=>{if(Ne.current)return;const z=ro();z.year&&z.mk&&(Ne.current=!0,t(Number(z.year)))},[]),Ce.useEffect(()=>{const z=ro();if(z.mk&&r.length&&!l){const Pe=r.find(Ze=>String(Ze.meeting_key)===z.mk);Pe&&f(Pe)}},[r]),Ce.useEffect(()=>{const z=ro();if(z.sk&&c.length&&!p){const Pe=c.find(Ze=>String(Ze.session_key)===z.sk);Pe&&_(Pe)}},[c]),Ce.useEffect(()=>{const z=ro();z.d1&&z.d2&&g.length&&!S&&!w&&(E(Number(z.d1)),x(Number(z.d2)))},[g]),Ce.useEffect(()=>{const z=ro();z.l1&&B.length&&!v&&I(Number(z.l1))},[B]),Ce.useEffect(()=>{const z=ro();z.l2&&P.length&&!R&&b(Number(z.l2))},[P]);const hs=Ce.useCallback(async()=>{if(!(!p||!S||!w||!v||!R)){Be("Fetching telemetry..."),Mt(""),qe(0);try{const z=p.session_key,Pe=B.find(en=>en.lap_number===v),Ze=P.find(en=>en.lap_number===R);if(!(Pe!=null&&Pe.date_start)||!(Ze!=null&&Ze.date_start)){Mt("Lap timing unavailable."),Be("");return}const Gt=new Date(new Date(Pe.date_start).getTime()+(Pe.lap_duration||120)*1e3).toISOString(),Tt=new Date(new Date(Ze.date_start).getTime()+(Ze.lap_duration||120)*1e3).toISOString();qe(20);const[kt,St]=await Promise.all([Ql(z,S,Pe.date_start,Gt),Ql(z,w,Ze.date_start,Tt)]);qe(60);const[ln,Un]=await Promise.all([Jl(z,S,Pe.date_start,Gt),Jl(z,w,Ze.date_start,Tt)]);if(kt.length<5||St.length<5){Mt("Insufficient data."),Be(""),qe(void 0);return}A(kt),pe(St),G(ln),ie(Un),O(go(kt)),Y(0),xe(!1),qe(100),setTimeout(()=>{Be(""),qe(void 0)},300)}catch(z){Mt(z.message),Be(""),qe(void 0)}}},[p,S,w,v,R,B,P]),C=Ce.useCallback(async z=>{Se(!1),Be("Loading preset..."),Mt(""),qe(0),Ge.current=!0;try{const Ze=(await xg(z.year)).filter(Fn=>Fn.meeting_name),Gt=Ze.find(Fn=>Fn.meeting_name&&Fn.meeting_name.toLowerCase().includes(z.meeting.toLowerCase().replace(" grand prix","").trim()));if(!Gt)throw new Error(`Meeting "${z.meeting}" not found for ${z.year}`);qe(10);const kt=(await yg(Gt.meeting_key)).filter(Fn=>["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(Fn.session_name)),St=kt.find(Fn=>Fn.session_name===z.session);if(!St)throw new Error(`Session "${z.session}" not found`);qe(20);const ln=await Sg(St.session_key),Un=new Set,en=ln.filter(Fn=>Un.has(Fn.driver_number)?!1:(Un.add(Fn.driver_number),!0));qe(30);const[ai,Li]=await Promise.all([Kl(St.session_key,z.d1),Kl(St.session_key,z.d2)]),Nn=eu(ai),li=eu(Li);if(!Nn||!li)throw new Error("No valid laps found for these drivers");qe(45);const[mu,xo]=await Promise.all([Zl(St.session_key,z.d1).catch(()=>[]),Zl(St.session_key,z.d2).catch(()=>[])]);t(z.year),a(Ze),f(Gt),h(kt),_(St),y(en),E(z.d1),x(z.d2),k(ai),Z(Li),I(Nn.lap_number),b(li.lap_number),$(mu),j(xo),qe(50),Be("Fetching telemetry...");const Lt=St.session_key,yo=new Date(new Date(Nn.date_start).getTime()+(Nn.lap_duration||120)*1e3).toISOString(),So=new Date(new Date(li.date_start).getTime()+(li.lap_duration||120)*1e3).toISOString();qe(60);const[zr,Mo]=await Promise.all([Ql(Lt,z.d1,Nn.date_start,yo),Ql(Lt,z.d2,li.date_start,So)]);qe(80);const[_a,va]=await Promise.all([Jl(Lt,z.d1,Nn.date_start,yo),Jl(Lt,z.d2,li.date_start,So)]);if(zr.length<5||Mo.length<5)throw new Error("Insufficient location data for these laps");A(zr),pe(Mo),G(_a),ie(va),O(go(zr)),Y(0),xe(!1),qe(100),setTimeout(()=>{Be(""),qe(void 0),Ge.current=!1},300)}catch(Pe){Mt(Pe.message),Be(""),qe(void 0),Ge.current=!1}},[]),J=Ce.useCallback(()=>{var Pe;if(!l||!p)return;const z=E1({year:e,mk:l.meeting_key,sk:p.session_key,d1:S,d2:w,l1:v,l2:R});(Pe=navigator.clipboard)==null||Pe.writeText(z).then(()=>{be("Copied!"),setTimeout(()=>be(""),2e3)}),window.history.replaceState(null,"",z.split(window.location.origin)[1])},[e,l,p,S,w,v,R]);w1(Nt,ee,me,U,Me,ye,F,it,(nt==null?void 0:nt.name_acronym)||"",(je==null?void 0:je.name_acronym)||"",fe,Ft),Ce.useEffect(()=>{if(!ae){$e.current=null,rt.current&&cancelAnimationFrame(rt.current);return}function z(Pe){$e.current||($e.current=Pe);const Ze=(Pe-$e.current)/1e3;$e.current=Pe,Y(Gt=>{const Tt=Gt+Ze*.015*Oe;return Tt>=1?Ae?0:(xe(!1),1):Tt}),rt.current=requestAnimationFrame(z)}return rt.current=requestAnimationFrame(z),()=>{rt.current&&cancelAnimationFrame(rt.current)}},[ae,Oe,Ae]);const ce=Ce.useRef(0);Ce.useEffect(()=>{const z=Pe=>{if(!(Pe.target.tagName==="SELECT"||Pe.target.tagName==="INPUT")&&(Pe.code==="Space"&&(Pe.preventDefault(),ee&&xe(Ze=>!Ze)),Pe.code==="KeyR"&&(Y(0),xe(!1)),Pe.code==="KeyT"&&T(Ze=>!Ze),Pe.code==="KeyC"&&te(Ze=>$l[($l.indexOf(Ze)+1)%$l.length]),Pe.code==="KeyL"&&lt(Ze=>!Ze),Pe.code==="ArrowRight"&&Y(Ze=>Math.min(1,Ze+.01)),Pe.code==="ArrowLeft")){const Ze=Date.now();Ze-ce.current<300?Y(Gt=>Math.max(0,Gt-.05)):Y(Gt=>Math.max(0,Gt-.01)),ce.current=Ze}};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[ee]);const de=(Te||ct||Ie)&&q.jsx("div",{onClick:()=>{Se(!1),tt(!1),Ue(!1)},style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:99,backdropFilter:"blur(4px)"}}),le=Te&&q.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:oe.carbon,border:`1px solid ${oe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":400,animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[q.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:oe.sans,letterSpacing:"0.05em"},children:"QUICK PRESETS"}),q.jsx("button",{onClick:()=>Se(!1),style:{marginLeft:"auto"},children:"✕"})]}),y1.map((z,Pe)=>q.jsx("button",{onClick:()=>C(z),style:{display:"block",width:"100%",textAlign:"left",padding:"12px 14px",marginBottom:6,fontSize:13,fontFamily:oe.mono,borderLeft:`3px solid ${oe.red}`},children:z.label},Pe))]}),He=ct&&ee&&q.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:oe.carbon,border:`1px solid ${oe.red}33`,borderRadius:12,padding:24,zIndex:100,minWidth:s?"92%":420,animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:16},children:[q.jsx("span",{style:{fontWeight:700,fontSize:16,fontFamily:oe.sans,letterSpacing:"0.05em"},children:"COMPARISON"}),q.jsx("button",{onClick:()=>tt(!1),style:{marginLeft:"auto"},children:"✕"})]}),q.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,fontFamily:oe.mono},children:[q.jsx("thead",{children:q.jsxs("tr",{style:{color:oe.textMuted,fontSize:10,letterSpacing:"0.1em"},children:[q.jsx("th",{style:{textAlign:"left",padding:"6px 8px",borderBottom:`1px solid ${oe.red}22`},children:"METRIC"}),q.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:ye,borderBottom:`1px solid ${ye}33`},children:(nt==null?void 0:nt.name_acronym)||"D1"}),q.jsx("th",{style:{textAlign:"center",padding:"6px 8px",color:F,borderBottom:`1px solid ${F}33`},children:(je==null?void 0:je.name_acronym)||"D2"})]})}),q.jsx("tbody",{children:[{m:"LAP TIME",v1:se!=null&&se.lap_duration?is(se.lap_duration):"—",v2:H!=null&&H.lap_duration?is(H.lap_duration):"—"},{m:"TOP SPEED",v1:`${Math.round(It)}`,v2:`${Math.round(wn)}`},{m:"AVG SPEED",v1:`${Math.round(Or)}`,v2:`${Math.round(In)}`},{m:"SECTOR 1",v1:((mt=se==null?void 0:se.duration_sector_1)==null?void 0:mt.toFixed(3))||"—",v2:((Ot=H==null?void 0:H.duration_sector_1)==null?void 0:Ot.toFixed(3))||"—"},{m:"SECTOR 2",v1:((gn=se==null?void 0:se.duration_sector_2)==null?void 0:gn.toFixed(3))||"—",v2:(($t=H==null?void 0:H.duration_sector_2)==null?void 0:$t.toFixed(3))||"—"},{m:"SECTOR 3",v1:((Sn=se==null?void 0:se.duration_sector_3)==null?void 0:Sn.toFixed(3))||"—",v2:((Pt=H==null?void 0:H.duration_sector_3)==null?void 0:Pt.toFixed(3))||"—"},{m:"TYRE",v1:ft||"—",v2:Ct||"—"}].map(z=>q.jsxs("tr",{style:{borderBottom:`1px solid ${oe.borderLight}`},children:[q.jsx("td",{style:{padding:"8px 8px",color:oe.textDim,letterSpacing:"0.05em"},children:z.m}),q.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:ye},children:z.v1}),q.jsx("td",{style:{padding:"8px",textAlign:"center",fontWeight:700,color:F},children:z.v2})]},z.m))})]})]}),et=Ie&&q.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:s?"100%":380,background:oe.carbon,borderLeft:`1px solid ${oe.red}22`,zIndex:100,display:"flex",flexDirection:"column",animation:"fadeIn .2s"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"14px 16px",borderBottom:`1px solid ${oe.borderLight}`},children:[q.jsx("span",{style:{fontWeight:700,fontSize:14,fontFamily:oe.sans,letterSpacing:"0.05em"},children:"LAP TIMES"}),q.jsx("button",{onClick:()=>Ue(!1),style:{marginLeft:"auto"},children:"✕"})]}),q.jsx("div",{style:{flex:1,overflowY:"auto",padding:14},children:[{lab:(nt==null?void 0:nt.name_acronym)||"D1",col:ye,laps:B,sel:v,set:I},{lab:(je==null?void 0:je.name_acronym)||"D2",col:F,laps:P,sel:R,set:b}].map(z=>{const Pe=z.laps.filter(Tt=>Tt.lap_duration>10),Ze=Pe.length?Math.min(...Pe.map(Tt=>Tt.lap_duration)):0,Gt=Pe.length?Math.max(...Pe.map(Tt=>Tt.lap_duration)):0;return q.jsxs("div",{style:{marginBottom:18},children:[q.jsx("div",{style:{fontSize:12,fontWeight:700,color:z.col,marginBottom:8,fontFamily:oe.mono,letterSpacing:"0.1em",borderLeft:`3px solid ${z.col}`,paddingLeft:8},children:z.lab}),Pe.sort((Tt,kt)=>Tt.lap_duration-kt.lap_duration).map(Tt=>{const kt=Gt>Ze?(Tt.lap_duration-Ze)/(Gt-Ze):0;return q.jsxs("div",{onClick:()=>z.set(Tt.lap_number),style:{display:"flex",gap:8,alignItems:"center",padding:"5px 8px",borderRadius:4,cursor:"pointer",background:Tt.lap_number===z.sel?`${z.col}18`:"transparent",borderLeft:Tt.lap_number===z.sel?`2px solid ${z.col}`:"2px solid transparent",marginBottom:2,fontSize:12,fontFamily:oe.mono},children:[q.jsxs("span",{style:{width:30,color:oe.textMuted},children:["L",Tt.lap_number]}),q.jsx("span",{style:{fontWeight:Tt.lap_duration===Ze?800:400,color:Tt.lap_duration===Ze?oe.green:oe.text},children:is(Tt.lap_duration)}),Tt.lap_duration===Ze&&q.jsx("span",{style:{fontSize:9,color:oe.green,fontWeight:700,background:`${oe.green}15`,padding:"1px 5px",borderRadius:3},children:"P1"}),q.jsx("div",{style:{marginLeft:"auto",width:36,height:3,background:oe.borderLight,borderRadius:2,overflow:"hidden"},children:q.jsx("div",{style:{height:"100%",width:`${(1-kt)*100}%`,background:kt<.1?oe.green:kt>.7?oe.red:oe.yellow,borderRadius:2}})})]},Tt.lap_number)})]},z.lab)})})]});return q.jsxs("div",{style:{width:"100%",minHeight:"100vh",background:oe.carbon,color:oe.text,fontFamily:oe.sans,overflow:"hidden"},children:[q.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${oe.red}44;border-radius:2px}
        select,button{font-family:${oe.sans}}
        select{background:${oe.inputBg};color:${oe.text};border:1px solid ${oe.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${oe.red}88}
        button{background:${oe.cardBg};color:${oe.text};border:1px solid ${oe.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${oe.red}88;background:${oe.carbonMid}}
        .f1-btn{background:${oe.red};border-color:${oe.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${oe.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${oe.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}),de,le,He,et,q.jsxs("div",{style:{padding:s?"8px 10px":"0",display:"flex",alignItems:"stretch",borderBottom:`2px solid ${oe.red}`,background:`linear-gradient(180deg, ${oe.carbonLight} 0%, ${oe.carbon} 100%)`,zIndex:10,position:"relative",overflow:"hidden"},children:[q.jsx("div",{style:{width:s?4:6,background:oe.red,flexShrink:0}}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?8:14,padding:s?"0 8px":"10px 18px",flex:1,flexWrap:"wrap"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[q.jsx("span",{style:{fontSize:s?16:22,fontWeight:900,letterSpacing:"0.04em",color:"#fff",textTransform:"uppercase"},children:"Phantom"}),q.jsx("span",{style:{fontSize:s?16:22,fontWeight:300,color:oe.red,letterSpacing:"0.04em"},children:"Cars"})]}),l&&q.jsxs("span",{style:{fontSize:11,color:oe.textDim,fontWeight:600,letterSpacing:"0.05em"},children:[(vt=l.meeting_name)==null?void 0:vt.replace("Grand Prix","GP")," ",e]}),q.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6},children:[q.jsx("button",{onClick:()=>Se(!0),style:{fontSize:10,padding:"4px 10px",letterSpacing:"0.05em"},children:"⚡ PRESETS"}),p&&q.jsx("button",{onClick:J,style:{fontSize:10,padding:"4px 10px"},children:ze||"SHARE"}),ee&&q.jsx("button",{onClick:()=>tt(!0),style:{fontSize:10,padding:"4px 10px"},children:"STATS"}),ee&&q.jsx("button",{onClick:()=>Ue(!0),style:{fontSize:10,padding:"4px 10px"},children:"LAPS"})]})]})]}),q.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:s?"8px 10px":"8px 18px",borderBottom:`1px solid ${oe.borderLight}`,background:oe.carbonLight},children:[q.jsx("select",{value:e,onChange:z=>t(Number(z.target.value)),children:[2026,2025,2024,2023].map(z=>q.jsx("option",{value:z,children:z},z))}),q.jsxs("select",{value:(l==null?void 0:l.meeting_key)||"",onChange:z=>f(r.find(Pe=>Pe.meeting_key===Number(z.target.value))||null),style:{minWidth:s?110:155},children:[q.jsx("option",{value:"",children:"Grand Prix"}),r.map(z=>q.jsx("option",{value:z.meeting_key,children:z.meeting_name},z.meeting_key))]}),q.jsxs("select",{value:(p==null?void 0:p.session_key)||"",onChange:z=>_(c.find(Pe=>Pe.session_key===Number(z.target.value))||null),disabled:!c.length,style:{minWidth:s?85:115},children:[q.jsx("option",{value:"",children:"Session"}),c.map(z=>q.jsx("option",{value:z.session_key,children:z.session_name},z.session_key))]}),!s&&q.jsx("div",{style:{width:1,height:20,background:`${oe.red}33`}}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[q.jsx("div",{style:{width:3,height:18,background:ye,borderRadius:1}}),q.jsxs("select",{value:S||"",onChange:z=>{E(Number(z.target.value)),I(null),k([])},disabled:!g.length,style:{minWidth:s?68:100},children:[q.jsx("option",{value:"",children:"Driver 1"}),g.map(z=>q.jsx("option",{value:z.driver_number,children:z.name_acronym||`#${z.driver_number}`},z.driver_number))]}),B.length>0&&q.jsxs("select",{value:v||"",onChange:z=>I(Number(z.target.value)),style:{width:s?56:72},children:[q.jsx("option",{value:"",children:"Lap"}),B.filter(z=>z.lap_duration>10).map(z=>q.jsxs("option",{value:z.lap_number,children:["L",z.lap_number]},z.lap_number))]})]}),q.jsx("span",{style:{color:oe.red,fontSize:11,fontWeight:900,letterSpacing:"0.1em"},children:"VS"}),q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[q.jsx("div",{style:{width:3,height:18,background:F,borderRadius:1}}),q.jsxs("select",{value:w||"",onChange:z=>{x(Number(z.target.value)),b(null),Z([])},disabled:!g.length,style:{minWidth:s?68:100},children:[q.jsx("option",{value:"",children:"Driver 2"}),g.map(z=>q.jsx("option",{value:z.driver_number,children:z.name_acronym||`#${z.driver_number}`},z.driver_number))]}),P.length>0&&q.jsxs("select",{value:R||"",onChange:z=>b(Number(z.target.value)),style:{width:s?56:72},children:[q.jsx("option",{value:"",children:"Lap"}),P.filter(z=>z.lap_duration>10).map(z=>q.jsxs("option",{value:z.lap_number,children:["L",z.lap_number]},z.lap_number))]})]}),q.jsx("button",{className:"f1-btn",onClick:hs,disabled:!S||!w||!v||!R||!!ut,children:ut?"...":"COMPARE"})]}),ht&&q.jsxs("div",{style:{padding:"8px 18px",background:`${oe.red}11`,borderBottom:`1px solid ${oe.red}22`,fontSize:12,color:oe.red,display:"flex",alignItems:"center",gap:8},children:[q.jsx("span",{style:{flex:1},children:ht}),q.jsx("button",{onClick:()=>Mt(""),style:{padding:"2px 8px",fontSize:10},children:"✕"})]}),ut&&q.jsxs("div",{style:{padding:"8px 18px",borderBottom:`1px solid ${oe.borderLight}`},children:[q.jsx("div",{style:{fontSize:11,color:oe.textDim,fontFamily:oe.mono,marginBottom:4},children:ut}),xt!==void 0&&q.jsx("div",{style:{height:2,background:oe.borderLight,borderRadius:1,overflow:"hidden"},children:q.jsx("div",{style:{height:"100%",width:`${xt}%`,background:oe.red,borderRadius:1,transition:"width .3s"}})})]}),s&&ee&&q.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${oe.borderLight}`},children:["3d","telemetry"].map(z=>q.jsx("button",{onClick:()=>_e(z),style:{flex:1,borderRadius:0,borderBottom:he===z?`2px solid ${oe.red}`:"2px solid transparent",background:he===z?oe.cardBg:"transparent",fontWeight:he===z?700:400,fontSize:11,padding:"7px 0",letterSpacing:"0.08em",textTransform:"uppercase"},children:z==="3d"?"Track":"Telemetry"},z))}),q.jsxs("div",{style:{display:"flex",flexDirection:s?"column":"row",height:s?"auto":`calc(100vh - ${ee?175:130}px)`},children:[(!s||he==="3d")&&q.jsxs("div",{style:{flex:1,position:"relative",minHeight:s?"50vh":"auto"},children:[q.jsx("div",{ref:Nt,style:{width:"100%",height:"100%",background:oe.carbon,cursor:"grab",minHeight:s?"50vh":"auto"}}),ee&&q.jsxs("div",{style:{position:"absolute",top:10,left:10,zIndex:2,display:"flex",gap:3},children:[$l.map(z=>q.jsx("button",{onClick:()=>te(z),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:it===z?oe.red:oe.overlay,color:it===z?"#fff":oe.textDim,borderColor:it===z?oe.red:oe.borderLight,fontWeight:700},children:S1[z]},z)),q.jsx("div",{style:{width:1,height:16,background:oe.borderLight}}),q.jsx("button",{onClick:()=>Je(z=>z==="normal"?"heatmap":"normal"),style:{padding:"3px 8px",fontSize:9,letterSpacing:"0.05em",textTransform:"uppercase",background:Ft==="heatmap"?"#0088ff":oe.overlay,color:Ft==="heatmap"?"#fff":oe.textDim,borderColor:Ft==="heatmap"?"#0088ff":oe.borderLight,fontWeight:700},children:"🌡 Speed"})]}),ee&&!s&&q.jsx("div",{style:{position:"absolute",top:44,left:10,zIndex:2},children:q.jsx(T1,{tp:ee,l1:me,l2:U,prog:Me,c1:ye,c2:F})}),ge!==null&&ee&&q.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2,animation:"fadeIn .4s"},children:q.jsxs("div",{style:{background:oe.overlay,backdropFilter:"blur(8px)",borderRadius:6,padding:s?"6px 16px":"8px 24px",border:`1px solid ${oe.red}33`,display:"flex",flexDirection:"column",alignItems:"center"},children:[q.jsx("div",{style:{fontSize:8,color:oe.textMuted,letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"},children:"Interval"}),q.jsxs("div",{style:{fontSize:s?20:28,fontWeight:900,fontFamily:oe.mono,color:ge>0?oe.red:oe.green,lineHeight:1.1},children:[ge>0?"+":"",ge.toFixed(3),q.jsx("span",{style:{fontSize:"0.5em",opacity:.7},children:"s"})]}),q.jsxs("div",{style:{display:"flex",gap:16,marginTop:3},children:[q.jsxs("span",{style:{fontSize:10,color:ye,fontFamily:oe.mono,fontWeight:700},children:[nt==null?void 0:nt.name_acronym," ",is(se==null?void 0:se.lap_duration)]}),q.jsxs("span",{style:{fontSize:10,color:F,fontFamily:oe.mono,fontWeight:700},children:[je==null?void 0:je.name_acronym," ",is(H==null?void 0:H.lap_duration)]})]})]})}),ee&&se&&H&&q.jsxs("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,zIndex:2,maxWidth:"95%"},children:[q.jsx(Of,{s:1,t1:se.duration_sector_1,t2:H.duration_sector_1,c1:ye,c2:F}),q.jsx(Of,{s:2,t1:se.duration_sector_2,t2:H.duration_sector_2,c1:ye,c2:F}),q.jsx(Of,{s:3,t1:se.duration_sector_3,t2:H.duration_sector_3,c1:ye,c2:F})]}),!ee&&!ut&&q.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",animation:"fadeIn .6s",padding:20},children:[q.jsx("div",{style:{fontSize:72,fontWeight:900,color:oe.red,opacity:.08,letterSpacing:"-0.03em",lineHeight:1},children:"F1"}),q.jsx("div",{style:{fontSize:s?14:17,fontWeight:700,color:oe.textMuted,marginBottom:8,letterSpacing:"0.03em"},children:"GHOST CAR COMPARISON"}),q.jsx("div",{style:{fontSize:12,color:oe.textMuted,maxWidth:340},children:"Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons."})]})]}),(!s&&L&&ee||s&&he==="telemetry"&&ee)&&q.jsx("div",{style:{width:s?"100%":310,borderLeft:s?"none":`1px solid ${oe.borderLight}`,background:oe.panelBg,display:"flex",flexDirection:"column",maxHeight:s?"55vh":"auto",animation:"fadeIn .2s"},children:q.jsxs("div",{style:{padding:s?10:14,overflowY:"auto",flex:1},children:[q.jsx("div",{style:{display:"flex",gap:6,marginBottom:10},children:[{di:nt,co:ye,ct:Qn,tire:ft},{di:je,co:F,ct:mn,tire:Ct}].map((z,Pe)=>{var Ze;return q.jsxs("div",{style:{flex:1,background:oe.cardBg,borderRadius:6,padding:"8px 8px 6px",borderTop:`3px solid ${z.co}`,position:"relative",textAlign:"center"},children:[q.jsx("div",{style:{fontSize:12,fontWeight:900,color:z.co,fontFamily:oe.mono,letterSpacing:"0.05em"},children:((Ze=z.di)==null?void 0:Ze.name_acronym)||"—"}),q.jsxs("svg",{width:"90",height:"55",viewBox:"0 0 90 55",style:{margin:"4px auto 2px"},children:[q.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:oe.border,strokeWidth:"4",strokeLinecap:"round"}),q.jsx("path",{d:"M 10 50 A 35 35 0 0 1 80 50",fill:"none",stroke:z.co,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:`${Math.min(z.ct.speed,360)/360*110} 110`}),q.jsx("text",{x:"45",y:"42",textAnchor:"middle",fill:"#fff",fontSize:"18",fontWeight:"900",fontFamily:oe.mono,children:Math.round(z.ct.speed)}),q.jsx("text",{x:"45",y:"52",textAnchor:"middle",fill:oe.textMuted,fontSize:"7",fontFamily:oe.mono,children:"KM/H"})]}),q.jsxs("div",{style:{display:"flex",gap:3,justifyContent:"center",marginTop:2},children:[q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:oe.border,borderRadius:2,position:"relative",overflow:"hidden"},children:q.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:`${z.ct.throttle}%`,background:oe.green,borderRadius:2,transition:"height 0.1s"}})}),q.jsx("div",{style:{fontSize:7,color:oe.textMuted,fontFamily:oe.mono,marginTop:1},children:"THR"})]}),q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{height:20,width:6,margin:"0 auto",background:oe.border,borderRadius:2,position:"relative",overflow:"hidden"},children:q.jsx("div",{style:{position:"absolute",bottom:0,width:"100%",height:z.ct.brake>0?"100%":"0%",background:oe.red,borderRadius:2,transition:"height 0.1s"}})}),q.jsx("div",{style:{fontSize:7,color:oe.textMuted,fontFamily:oe.mono,marginTop:1},children:"BRK"})]}),q.jsxs("div",{style:{width:28,textAlign:"center"},children:[q.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#fff",fontFamily:oe.mono,lineHeight:"20px"},children:z.ct.n_gear??z.ct.gear??"—"}),q.jsx("div",{style:{fontSize:7,color:oe.textMuted,fontFamily:oe.mono,marginTop:1},children:"GEAR"})]})]}),z.tire&&q.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",alignItems:"center",gap:2},children:[q.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:v1[z.tire]||"#888"}}),q.jsx("span",{style:{fontSize:8,fontFamily:oe.mono,color:oe.textMuted},children:z.tire})]}),z.ct.drs>=10&&q.jsx("div",{style:{position:"absolute",bottom:4,right:6,fontSize:8,fontWeight:700,color:oe.green,fontFamily:oe.mono,background:`${oe.green}15`,padding:"1px 4px",borderRadius:2,animation:"pulse 1s infinite"},children:"DRS"})]},Pe)})}),ee&&q.jsxs("div",{style:{marginBottom:10},children:[q.jsx("div",{style:{fontSize:10,color:oe.textMuted,fontFamily:oe.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"ELEVATION"}),q.jsx("svg",{width:"100%",height:"40",viewBox:"0 0 300 40",preserveAspectRatio:"none",style:{borderRadius:3,background:oe.cardBg},children:(()=>{const z=ee.map(St=>St.y),Pe=Math.min(...z),Gt=Math.max(...z)-Pe||1,Tt=Math.max(1,Math.floor(ee.length/150));let kt="";for(let St=0;St<ee.length;St+=Tt){const ln=St/(ee.length-1)*300,Un=38-(z[St]-Pe)/Gt*34;kt+=(St===0?"M":"L")+`${ln},${Un}`}return q.jsxs(q.Fragment,{children:[q.jsx("path",{d:kt+"L300,40L0,40Z",fill:`${oe.red}15`}),q.jsx("path",{d:kt,fill:"none",stroke:oe.red,strokeWidth:"1.5",opacity:"0.6"}),q.jsx("line",{x1:Me*300,y1:"0",x2:Me*300,y2:"40",stroke:"#fff",strokeWidth:"1",opacity:"0.5"})]})})()})]}),ee&&q.jsxs("div",{style:{marginBottom:10},children:[q.jsx("div",{style:{fontSize:10,color:oe.textMuted,fontFamily:oe.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"G-FORCE"}),q.jsx("div",{style:{display:"flex",gap:6},children:[{di:nt,co:ye,ct:Qn,tel:fe},{di:je,co:F,ct:mn,tel:K}].map((z,Pe)=>{var Li;const Ze=z.tel||[],Gt=Math.min(Math.floor(Me*(Ze.length-1)),Ze.length-2),Tt=Ze[Math.max(0,Gt-1)]||{},kt=Ze[Gt]||{};Ze[Math.min(Gt+1,Ze.length-1)];const St=((kt.speed||0)-(Tt.speed||0))*.028,ln=Math.sin(Me*Math.PI*8)*(kt.speed||0)*.003,Un=Nn=>Math.max(-4,Math.min(4,Nn)),en=Un(ln),ai=Un(St);return q.jsxs("svg",{width:"60",height:"60",viewBox:"-5 -5 10 10",style:{background:oe.cardBg,borderRadius:4,flex:1},children:[q.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"none",stroke:oe.border,strokeWidth:"0.15"}),q.jsx("circle",{cx:"0",cy:"0",r:"2",fill:"none",stroke:oe.border,strokeWidth:"0.1"}),q.jsx("line",{x1:"-4.5",y1:"0",x2:"4.5",y2:"0",stroke:oe.border,strokeWidth:"0.05"}),q.jsx("line",{x1:"0",y1:"-4.5",x2:"0",y2:"4.5",stroke:oe.border,strokeWidth:"0.05"}),q.jsx("circle",{cx:en,cy:-ai,r:"0.6",fill:z.co,opacity:"0.8"}),q.jsx("text",{x:"0",y:"4.8",textAnchor:"middle",fill:oe.textMuted,fontSize:"1.2",fontFamily:"sans-serif",children:((Li=z.di)==null?void 0:Li.name_acronym)||"—"})]},Pe)})})]}),q.jsx("div",{style:{fontSize:10,color:oe.textMuted,fontFamily:oe.mono,letterSpacing:"0.1em",marginBottom:3,fontWeight:700},children:"SPEED"}),q.jsx(Ff,{data1:pt,data2:zt,color1:ye,color2:F,maxVal:370}),q.jsx("div",{style:{fontSize:10,color:oe.textMuted,fontFamily:oe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"THROTTLE"}),q.jsx(Ff,{data1:an,data2:Pi,color1:ye,color2:F,maxVal:100}),q.jsx("div",{style:{fontSize:10,color:oe.textMuted,fontFamily:oe.mono,letterSpacing:"0.1em",marginBottom:3,marginTop:8,fontWeight:700},children:"BRAKE"}),q.jsx(Ff,{data1:gi,data2:Dn,color1:ye,color2:F,maxVal:100,h:35})]})})]}),ee&&q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:s?6:10,padding:s?"6px 10px":"6px 18px",background:`linear-gradient(180deg, ${oe.carbonLight}, ${oe.carbon})`,borderTop:`1px solid ${oe.red}22`},children:[q.jsx("button",{onClick:()=>{Y(0),xe(!1)},style:{padding:"3px 7px",fontSize:11},children:"⏮"}),q.jsx("button",{onClick:()=>xe(!ae),style:{padding:"3px 9px",fontSize:13,background:ae?`${oe.red}33`:oe.cardBg,borderColor:ae?oe.red:oe.border},children:ae?"⏸":"▶"}),q.jsx("button",{onClick:()=>lt(!Ae),style:{padding:"3px 7px",opacity:Ae?1:.35,fontSize:11},children:"🔁"}),q.jsx("input",{type:"range",min:"0",max:"1",step:"0.001",value:Me,onChange:z=>Y(parseFloat(z.target.value)),style:{flex:1,height:4,accentColor:oe.red}}),q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:s?55:70,gap:0},children:[q.jsx("span",{style:{fontSize:10,color:ye,fontFamily:oe.mono,fontWeight:700,lineHeight:1.2},children:is(ve)}),q.jsx("span",{style:{fontSize:10,color:F,fontFamily:oe.mono,fontWeight:700,lineHeight:1.2},children:is(ke)})]}),q.jsxs("select",{value:Oe,onChange:z=>De(parseFloat(z.target.value)),style:{width:48,padding:"2px 3px",fontSize:10},children:[q.jsx("option",{value:.25,children:".25x"}),q.jsx("option",{value:.5,children:".5x"}),q.jsx("option",{value:1,children:"1x"}),q.jsx("option",{value:2,children:"2x"}),q.jsx("option",{value:4,children:"4x"})]}),!s&&q.jsx("button",{onClick:()=>T(!L),style:{padding:"3px 7px",fontSize:10,opacity:L?1:.35},children:"📊"})]})]})}W_.createRoot(document.getElementById("root")).render(q.jsx(O_.StrictMode,{children:q.jsx(A1,{})}));
