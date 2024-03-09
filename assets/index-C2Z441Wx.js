function nm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},Ro={},ad={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),su=Symbol.iterator;function hm(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,cd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ld}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=qn.prototype;function Ha(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ld}var Wa=Ha.prototype=new dd;Wa.constructor=Ha;ud(Wa,qn.prototype);Wa.isPureReactComponent=!0;var au=Array.isArray,fd=Object.prototype.hasOwnProperty,Ka={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)fd.call(t,r)&&!hd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xr,type:e,key:o,ref:s,props:i,_owner:Ka.current}}function pm(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lu=/\/+/g;function ts(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xr:case rm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ts(s,0):r,au(i)?(n="",e!=null&&(n=e.replace(lu,"$&/")+"/"),xi(i,t,n,"",function(u){return u})):i!=null&&(Ga(i)&&(i=pm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",au(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ts(o,a);s+=xi(o,t,n,l,i)}else if(l=hm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ts(o,a++),s+=xi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function fi(e,t,n){if(e==null)return e;var r=[],i=0;return xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Oi={transition:null},vm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:Ka};D.Children={map:fi,forEach:function(e,t,n){fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=qn;D.Fragment=im;D.Profiler=sm;D.PureComponent=Ha;D.StrictMode=om;D.Suspense=cm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ud({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ka.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)fd.call(t,l)&&!hd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};D.createElement=pd;D.createFactory=function(e){var t=pd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:um,render:e}};D.isValidElement=Ga;D.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:gm}};D.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.2.0";ad.exports=D;var k=ad.exports;const md=od(k),ym=nm({__proto__:null,default:md},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=k,_m=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,Im=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_m,type:e,key:o,ref:s,props:i,_owner:Im.current}}Ro.Fragment=Em;Ro.jsx=gd;Ro.jsxs=gd;sd.exports=Ro;var v=sd.exports,Fs={},vd={exports:{}},Te={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,ci=Z>>>1;G<ci;){var Ht=2*(G+1)-1,es=C[Ht],Wt=Ht+1,di=C[Wt];if(0>i(es,A))Wt<Z&&0>i(di,es)?(C[G]=di,C[Wt]=A,G=Wt):(C[G]=es,C[Ht]=A,G=Ht);else if(Wt<Z&&0>i(di,A))C[G]=di,C[Wt]=A,G=Wt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,m=3,g=!1,w=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(C){if(_=!1,p(C),!w)if(n(l)!==null)w=!0,Xo(S);else{var O=n(u);O!==null&&Zo(y,O.startTime-C)}}function S(C,O){w=!1,_&&(_=!1,h(N),N=-1),g=!0;var A=m;try{for(p(O),f=n(l);f!==null&&(!(f.expirationTime>O)||C&&!Le());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var Z=G(f.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&r(l),p(O)}else r(l);f=n(l)}if(f!==null)var ci=!0;else{var Ht=n(u);Ht!==null&&Zo(y,Ht.startTime-O),ci=!1}return ci}finally{f=null,m=A,g=!1}}var P=!1,R=null,N=-1,b=5,L=-1;function Le(){return!(e.unstable_now()-L<b)}function er(){if(R!==null){var C=e.unstable_now();L=C;var O=!0;try{O=R(!0,C)}finally{O?tr():(P=!1,R=null)}}else P=!1}var tr;if(typeof c=="function")tr=function(){c(er)};else if(typeof MessageChannel<"u"){var ou=new MessageChannel,tm=ou.port2;ou.port1.onmessage=er,tr=function(){tm.postMessage(null)}}else tr=function(){I(er,0)};function Xo(C){R=C,P||(P=!0,tr())}function Zo(C,O){N=I(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Xo(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return C()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=m;m=C;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:d++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Zo(y,A-G))):(C.sortIndex=Z,t(l,C),w||g||(w=!0,Xo(S))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=m;return function(){var A=m;m=O;try{return C.apply(this,arguments)}finally{m=A}}}})(wd);yd.exports=wd;var Tm=yd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=k,ke=Tm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Rr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Ed.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,Cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function Pm(e){return bs.call(cu,e)?!0:bs.call(uu,e)?!1:Cm.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function Rm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nm(e,t,n,r){if(t===null||typeof t>"u"||Rm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nm(t,n,i,r)&&(n=null),r||i===null?Pm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),_n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),kd=Symbol.for("react.offscreen"),du=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ns;function cr(e){if(ns===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ns=t&&t[1]||""}return`
`+ns+e}var rs=!1;function is(e,t){if(!e||rs)return"";rs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{rs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function xm(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=is(e.type,!1),e;case 11:return e=is(e.type.render,!1),e;case 1:return e=is(e.type,!0),e;default:return""}}function Vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case _n:return"Portal";case zs:return"Profiler";case Ja:return"StrictMode";case $s:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Vs(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Vs(e(t))}catch{}}return null}function Om(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vs(t);case 8:return t===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=Td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pi(e){e._valueTracker||(e._valueTracker=Am(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pd(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Ws(e,t){Pd(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ks(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ks(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(dr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function Rd(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Lm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,Dn=null,Mn=null;function gu(e){if(e=ti(e)){if(typeof Xs!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Lo(t),Xs(e.stateNode,e.type,t))}}function Ld(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function Dd(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Md(e,t){return e(t)}function Ud(){}var os=!1;function jd(e,t,n){if(os)return e(t,n);os=!0;try{return Md(e,t,n)}finally{os=!1,(Dn!==null||Mn!==null)&&(Ud(),Dd())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Zs=!1;if(st)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Zs=!1}function Mm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yr=!1,qi=null,Qi=!1,ea=null,Um={onError:function(e){yr=!0,qi=e}};function jm(e,t,n,r,i,o,s,a,l){yr=!1,qi=null,Mm.apply(Um,arguments)}function Fm(e,t,n,r,i,o,s,a,l){if(jm.apply(this,arguments),yr){if(yr){var u=qi;yr=!1,qi=null}else throw Error(E(198));Qi||(Qi=!0,ea=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(pn(e)!==e)throw Error(E(188))}function bm(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vu(i),e;if(o===r)return vu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function bd(e){return e=bm(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var $d=ke.unstable_scheduleCallback,yu=ke.unstable_cancelCallback,zm=ke.unstable_shouldYield,$m=ke.unstable_requestPaint,q=ke.unstable_now,Bm=ke.unstable_getCurrentPriorityLevel,tl=ke.unstable_ImmediatePriority,Bd=ke.unstable_UserBlockingPriority,Yi=ke.unstable_NormalPriority,Vm=ke.unstable_LowPriority,Vd=ke.unstable_IdlePriority,No=null,Ke=null;function Hm(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Gm,Wm=Math.log,Km=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Wm(e)/Km|0)|0}var gi=64,vi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=fr(a):(o&=s,o!==0&&(r=fr(o)))}else s=n&~i,s!==0?r=fr(s):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Wd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,rl,Gd,qd,Qd,na=!1,yi=[],Ct=null,Pt=null,Rt=null,Or=new Map,Ar=new Map,vt=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xm(e,t,n,r,i){switch(t){case"focusin":return Ct=ir(Ct,e,t,n,r,i),!0;case"dragenter":return Pt=ir(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=ir(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,ir(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ar.set(o,ir(Ar.get(o)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fd(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Js=r,n.target.dispatchEvent(r),Js=null}else return t=ti(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function _u(e,t,n){Ai(e)&&n.delete(t)}function Zm(){na=!1,Ct!==null&&Ai(Ct)&&(Ct=null),Pt!==null&&Ai(Pt)&&(Pt=null),Rt!==null&&Ai(Rt)&&(Rt=null),Or.forEach(_u),Ar.forEach(_u)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Zm)))}function Lr(e){function t(i){return or(i,e)}if(0<yi.length){or(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&or(Ct,e),Pt!==null&&or(Pt,e),Rt!==null&&or(Rt,e),Or.forEach(t),Ar.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&vt.shift()}var Un=ft.ReactCurrentBatchConfig,Xi=!0;function eg(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=1,il(e,t,n,r)}finally{U=i,Un.transition=o}}function tg(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=4,il(e,t,n,r)}finally{U=i,Un.transition=o}}function il(e,t,n,r){if(Xi){var i=ra(e,t,n,r);if(i===null)gs(e,t,r,Zi,n),wu(e,r);else if(Xm(i,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<Jm.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&Kd(o),o=ra(e,t,n,r),o===null&&gs(e,t,r,Zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else gs(e,t,r,null,n)}}var Zi=null;function ra(e,t,n,r){if(Zi=null,e=el(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function Jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case tl:return 1;case Bd:return 4;case Yi:case Vm:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var It=null,ol=null,Li=null;function Xd(){if(Li)return Li;var e,t=ol,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Eu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:Eu,this.isPropagationStopped=Eu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Ce(Qn),ei=W({},Qn,{view:0,detail:0}),ng=Ce(ei),as,ls,sr,xo=W({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(as=e.screenX-sr.screenX,ls=e.screenY-sr.screenY):ls=as=0,sr=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Su=Ce(xo),rg=W({},xo,{dataTransfer:0}),ig=Ce(rg),og=W({},ei,{relatedTarget:0}),us=Ce(og),sg=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=Ce(sg),lg=W({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ug=Ce(lg),cg=W({},Qn,{data:0}),Iu=Ce(cg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hg[e])?!!t[e]:!1}function al(){return pg}var mg=W({},ei,{key:function(e){if(e.key){var t=dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gg=Ce(mg),vg=W({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Ce(vg),yg=W({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),wg=Ce(yg),_g=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=Ce(_g),Sg=W({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=Ce(Sg),kg=[9,13,27,32],ll=st&&"CompositionEvent"in window,wr=null;st&&"documentMode"in document&&(wr=document.documentMode);var Tg=st&&"TextEvent"in window&&!wr,Zd=st&&(!ll||wr&&8<wr&&11>=wr),Tu=" ",Cu=!1;function ef(e,t){switch(e){case"keyup":return kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Cg(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Cu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Cu?null:e;default:return null}}function Pg(e,t){if(Sn)return e==="compositionend"||!ll&&ef(e,t)?(e=Xd(),Li=ol=It=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zd&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function nf(e,t,n,r){Ld(r),t=eo(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Dr=null;function Ng(e){pf(e,0)}function Oo(e){var t=Tn(e);if(Cd(t))return e}function xg(e,t){if(e==="change")return t}var rf=!1;if(st){var cs;if(st){var ds="oninput"in document;if(!ds){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),ds=typeof Ru.oninput=="function"}cs=ds}else cs=!1;rf=cs&&(!document.documentMode||9<document.documentMode)}function Nu(){_r&&(_r.detachEvent("onpropertychange",of),Dr=_r=null)}function of(e){if(e.propertyName==="value"&&Oo(Dr)){var t=[];nf(t,Dr,e,el(e)),jd(Ng,t)}}function Og(e,t,n){e==="focusin"?(Nu(),_r=t,Dr=n,_r.attachEvent("onpropertychange",of)):e==="focusout"&&Nu()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Dr)}function Lg(e,t){if(e==="click")return Oo(t)}function Dg(e,t){if(e==="input"||e==="change")return Oo(t)}function Mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Mg;function Mr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bs.call(t,i)||!ze(e[i],t[i]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ug(e){var t=af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ou(n,o);var s=Ou(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jg=st&&"documentMode"in document&&11>=document.documentMode,In=null,ia=null,Er=null,oa=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||In==null||In!==Gi(r)||(r=In,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Mr(Er,r)||(Er=r,r=eo(ia,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},fs={},lf={};st&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Ao(e){if(fs[e])return fs[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return fs[e]=t[n];return e}var uf=Ao("animationend"),cf=Ao("animationiteration"),df=Ao("animationstart"),ff=Ao("transitionend"),hf=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){hf.set(e,t),hn(t,[e])}for(var hs=0;hs<Lu.length;hs++){var ps=Lu[hs],Fg=ps.toLowerCase(),bg=ps[0].toUpperCase()+ps.slice(1);bt(Fg,"on"+bg)}bt(uf,"onAnimationEnd");bt(cf,"onAnimationIteration");bt(df,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(ff,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fm(r,t,void 0,e),e.currentTarget=null}function pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Du(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Du(i,a,u),o=l}}}if(Qi)throw e=ea,Qi=!1,ea=null,e}function z(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function ms(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ei]){e[Ei]=!0,Ed.forEach(function(n){n!=="selectionchange"&&(zg.has(n)||ms(n,!1,e),ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,ms("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Jd(t)){case 1:var i=eg;break;case 4:i=tg;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}jd(function(){var u=o,d=el(n),f=[];e:{var m=hf.get(e);if(m!==void 0){var g=sl,w=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":g=gg;break;case"focusin":w="focus",g=us;break;case"focusout":w="blur",g=us;break;case"beforeblur":case"afterblur":g=us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wg;break;case uf:case cf:case df:g=ag;break;case ff:g=Eg;break;case"scroll":g=ng;break;case"wheel":g=Ig;break;case"copy":case"cut":case"paste":g=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ku}var _=(t&4)!==0,I=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=xr(c,h),y!=null&&_.push(jr(c,y,p)))),I)break;c=c.return}0<_.length&&(m=new g(m,w,null,n,d),f.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Js&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[at]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Qt(w):null,w!==null&&(I=pn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(_=Su,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=ku,y="onPointerLeave",h="onPointerEnter",c="pointer"),I=g==null?m:Tn(g),p=w==null?m:Tn(w),m=new _(y,c+"leave",g,n,d),m.target=I,m.relatedTarget=p,y=null,Qt(d)===u&&(_=new _(h,c+"enter",w,n,d),_.target=p,_.relatedTarget=I,y=_),I=y,g&&w)t:{for(_=g,h=w,c=0,p=_;p;p=wn(p))c++;for(p=0,y=h;y;y=wn(y))p++;for(;0<c-p;)_=wn(_),c--;for(;0<p-c;)h=wn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=wn(_),h=wn(h)}_=null}else _=null;g!==null&&Mu(f,m,g,_,!1),w!==null&&I!==null&&Mu(f,I,w,_,!0)}}e:{if(m=u?Tn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=xg;else if(Pu(m))if(rf)S=Dg;else{S=Ag;var P=Og}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Lg);if(S&&(S=S(e,u))){nf(f,S,n,d);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ks(m,"number",m.value)}switch(P=u?Tn(u):window,e){case"focusin":(Pu(P)||P.contentEditable==="true")&&(In=P,ia=u,Er=null);break;case"focusout":Er=ia=In=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Au(f,n,d);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Au(f,n,d)}var R;if(ll)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Sn?ef(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Zd&&n.locale!=="ko"&&(Sn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Sn&&(R=Xd()):(It=d,ol="value"in It?It.value:It.textContent,Sn=!0)),P=eo(u,N),0<P.length&&(N=new Iu(N,e,null,n,d),f.push({event:N,listeners:P}),R?N.data=R:(R=tf(n),R!==null&&(N.data=R)))),(R=Tg?Cg(e,n):Pg(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new Iu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}pf(f,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=xr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xr(n,o),l!=null&&s.unshift(jr(n,l,a))):i||(l=xr(n,o),l!=null&&s.push(jr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $g=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Bg,"")}function Si(e,t,n){if(t=Uu(t),Uu(e)!==t&&n)throw Error(E(425))}function to(){}var sa=null,aa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Wg)}:ua;function Wg(e){setTimeout(function(){throw e})}function vs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),We="__reactFiber$"+Yn,Fr="__reactProps$"+Yn,at="__reactContainer$"+Yn,ca="__reactEvents$"+Yn,Kg="__reactListeners$"+Yn,Gg="__reactHandles$"+Yn;function Qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[We])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[We]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Lo(e){return e[Fr]||null}var da=[],Cn=-1;function zt(e){return{current:e}}function $(e){0>Cn||(e.current=da[Cn],da[Cn]=null,Cn--)}function F(e,t){Cn++,da[Cn]=e.current,e.current=t}var Ft={},le=zt(Ft),ge=zt(!1),nn=Ft;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function no(){$(ge),$(le)}function bu(e,t,n){if(le.current!==Ft)throw Error(E(168));F(le,t),F(ge,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Om(e)||"Unknown",i));return W({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,nn=le.current,F(le,e),F(ge,ge.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=gf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(le),F(le,e)):$(ge),F(ge,n)}var et=null,Do=!1,ys=!1;function vf(e){et===null?et=[e]:et.push(e)}function qg(e){Do=!0,vf(e)}function $t(){if(!ys&&et!==null){ys=!0;var e=0,t=U;try{var n=et;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Do=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),$d(tl,$t),i}finally{U=t,ys=!1}}return null}var Pn=[],Rn=0,io=null,oo=0,Pe=[],Re=0,rn=null,tt=1,nt="";function Kt(e,t){Pn[Rn++]=oo,Pn[Rn++]=io,io=e,oo=t}function yf(e,t,n){Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=rn,rn=e;var r=tt;e=nt;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,tt=1<<32-Fe(t)+i|n<<i|r,nt=o+e}else tt=1<<o|n<<i|r,nt=e}function cl(e){e.return!==null&&(Kt(e,1),yf(e,1,0))}function dl(e){for(;e===io;)io=Pn[--Rn],Pn[Rn]=null,oo=Pn[--Rn],Pn[Rn]=null;for(;e===rn;)rn=Pe[--Re],Pe[Re]=null,nt=Pe[--Re],Pe[Re]=null,tt=Pe[--Re],Pe[Re]=null}var Se=null,Ee=null,B=!1,je=null;function wf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(B){var t=Ee;if(t){var n=t;if(!$u(e,t)){if(fa(e))throw Error(E(418));t=Nt(n.nextSibling);var r=Se;t&&$u(e,t)?wf(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(fa(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ii(e){if(e!==Se)return!1;if(!B)return Bu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Ee)){if(fa(e))throw _f(),Error(E(418));for(;t;)wf(e,t),t=Nt(t.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?Nt(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=Ee;e;)e=Nt(e.nextSibling)}function Vn(){Ee=Se=null,B=!1}function fl(e){je===null?je=[e]:je.push(e)}var Qg=ft.ReactCurrentBatchConfig;function Me(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var so=zt(null),ao=null,Nn=null,hl=null;function pl(){hl=Nn=ao=null}function ml(e){var t=so.current;$(so),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){ao=e,hl=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(ao===null)throw Error(E(308));Nn=e,ao.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Yt=null;function gl(e){Yt===null?Yt=[e]:Yt.push(e)}function Ef(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}function Vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,g=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(g,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(g,f,m):w,m==null)break e;f=W({},f,m);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=f}}function Hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var If=new _d.Component().refs;function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),o=ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),o=ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=At(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(be(t,e,r,n),Mi(t,e,r))}};function Wu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function kf(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ve(t)?nn:le.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=If,vl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ve(t)?nn:le.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===If&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function Tf(e){function t(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Lt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,y){return c===null||c.tag!==6?(c=Ts(p,h.mode,y),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,y){var S=p.type;return S===En?d(h,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&Gu(S)===c.type)?(y=i(c,p.props),y.ref=ar(h,c,p),y.return=h,y):(y=$i(p.type,p.key,p.props,null,h.mode,y),y.ref=ar(h,c,p),y.return=h,y)}function u(h,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Cs(p,h.mode,y),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,y,S){return c===null||c.tag!==7?(c=en(p,h.mode,y,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ts(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hi:return p=$i(c.type,c.key,c.props,null,h.mode,p),p.ref=ar(h,null,c),p.return=h,p;case _n:return c=Cs(c,h.mode,p),c.return=h,c;case mt:var y=c._init;return f(h,y(c._payload),p)}if(dr(c)||nr(c))return c=en(c,h.mode,p,null),c.return=h,c;ki(h,c)}return null}function m(h,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:return p.key===S?l(h,c,p,y):null;case _n:return p.key===S?u(h,c,p,y):null;case mt:return S=p._init,m(h,c,S(p._payload),y)}if(dr(p)||nr(p))return S!==null?null:d(h,c,p,y,null);ki(h,p)}return null}function g(h,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(c,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:return h=h.get(y.key===null?p:y.key)||null,l(c,h,y,S);case _n:return h=h.get(y.key===null?p:y.key)||null,u(c,h,y,S);case mt:var P=y._init;return g(h,c,p,P(y._payload),S)}if(dr(y)||nr(y))return h=h.get(p)||null,d(c,h,y,S,null);ki(c,y)}return null}function w(h,c,p,y){for(var S=null,P=null,R=c,N=c=0,b=null;R!==null&&N<p.length;N++){R.index>N?(b=R,R=null):b=R.sibling;var L=m(h,R,p[N],y);if(L===null){R===null&&(R=b);break}e&&R&&L.alternate===null&&t(h,R),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L,R=b}if(N===p.length)return n(h,R),B&&Kt(h,N),S;if(R===null){for(;N<p.length;N++)R=f(h,p[N],y),R!==null&&(c=o(R,c,N),P===null?S=R:P.sibling=R,P=R);return B&&Kt(h,N),S}for(R=r(h,R);N<p.length;N++)b=g(R,h,N,p[N],y),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?N:b.key),c=o(b,c,N),P===null?S=b:P.sibling=b,P=b);return e&&R.forEach(function(Le){return t(h,Le)}),B&&Kt(h,N),S}function _(h,c,p,y){var S=nr(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var P=S=null,R=c,N=c=0,b=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(b=R,R=null):b=R.sibling;var Le=m(h,R,L.value,y);if(Le===null){R===null&&(R=b);break}e&&R&&Le.alternate===null&&t(h,R),c=o(Le,c,N),P===null?S=Le:P.sibling=Le,P=Le,R=b}if(L.done)return n(h,R),B&&Kt(h,N),S;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,y),L!==null&&(c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return B&&Kt(h,N),S}for(R=r(h,R);!L.done;N++,L=p.next())L=g(R,h,N,L.value,y),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=o(L,c,N),P===null?S=L:P.sibling=L,P=L);return e&&R.forEach(function(er){return t(h,er)}),B&&Kt(h,N),S}function I(h,c,p,y){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===En){if(P.tag===7){n(h,P.sibling),c=i(P,p.props.children),c.return=h,h=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&Gu(S)===P.type){n(h,P.sibling),c=i(P,p.props),c.ref=ar(h,P,p),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}p.type===En?(c=en(p.props.children,h.mode,y,p.key),c.return=h,h=c):(y=$i(p.type,p.key,p.props,null,h.mode,y),y.ref=ar(h,c,p),y.return=h,h=y)}return s(h);case _n:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Cs(p,h.mode,y),c.return=h,h=c}return s(h);case mt:return P=p._init,I(h,c,P(p._payload),y)}if(dr(p))return w(h,c,p,y);if(nr(p))return _(h,c,p,y);ki(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=Ts(p,h.mode,y),c.return=h,h=c),s(h)):n(h,c)}return I}var Hn=Tf(!0),Cf=Tf(!1),ni={},Ge=zt(ni),br=zt(ni),zr=zt(ni);function Jt(e){if(e===ni)throw Error(E(174));return e}function yl(e,t){switch(F(zr,t),F(br,e),F(Ge,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}$(Ge),F(Ge,t)}function Wn(){$(Ge),$(br),$(zr)}function Pf(e){Jt(zr.current);var t=Jt(Ge.current),n=qs(t,e.type);t!==n&&(F(br,e),F(Ge,n))}function wl(e){br.current===e&&($(Ge),$(br))}var V=zt(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function _l(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var Ui=ft.ReactCurrentDispatcher,_s=ft.ReactCurrentBatchConfig,on=0,H=null,J=null,ee=null,co=!1,Sr=!1,$r=0,Yg=0;function oe(){throw Error(E(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,i,o){if(on=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?ev:tv,e=n(r,i),Sr){o=0;do{if(Sr=!1,$r=0,25<=o)throw Error(E(301));o+=1,ee=J=null,t.updateQueue=null,Ui.current=nv,e=n(r,i)}while(Sr)}if(Ui.current=fo,t=J!==null&&J.next!==null,on=0,ee=J=H=null,co=!1,t)throw Error(E(300));return e}function Il(){var e=$r!==0;return $r=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Br(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((on&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,H.lanes|=d,sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ze(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ss(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ze(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rf(){}function Nf(e,t){var n=H,r=Ae(),i=t(),o=!ze(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,kl(Af.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Vr(9,Of.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));on&30||xf(n,t,i)}return i}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,Lf(t)&&Df(e)}function Af(e,t,n){return n(function(){Lf(t)&&Df(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Df(e){var t=lt(e,1);t!==null&&be(t,e,1,-1)}function qu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Zg.bind(null,H,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Ae().memoizedState}function ji(e,t,n,r){var i=He();H.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&El(r,s.deps)){i.memoizedState=Vr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function Qu(e,t){return ji(8390656,8,e,t)}function kl(e,t){return Uo(2048,8,e,t)}function Uf(e,t){return Uo(4,2,e,t)}function jf(e,t){return Uo(4,4,e,t)}function Ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Ff.bind(null,t,e),n)}function Tl(){}function zf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $f(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bf(e,t,n){return on&21?(ze(n,t)||(n=Hd(),H.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Jg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{U=n,_s.transition=r}}function Vf(){return Ae().memoizedState}function Xg(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Wf(t,n);else if(n=Ef(e,t,n,r),n!==null){var i=de();be(n,e,r,i),Kf(n,t,r)}}function Zg(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Wf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ze(a,s)){var l=t.interleaved;l===null?(i.next=i,gl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ef(e,t,i,r),n!==null&&(i=de(),be(n,e,r,i),Kf(n,t,r))}}function Hf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Wf(e,t){Sr=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}var fo={readContext:Oe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},ev={readContext:Oe,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:Tl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=Jg.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=He();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));on&30||xf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qu(Af.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,Of.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(B){var n=nt,r=tt;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tv={readContext:Oe,useCallback:zf,useContext:Oe,useEffect:kl,useImperativeHandle:bf,useInsertionEffect:Uf,useLayoutEffect:jf,useMemo:$f,useReducer:Es,useRef:Mf,useState:function(){return Es(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return Bf(t,J.memoizedState,e)},useTransition:function(){var e=Es(Br)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Vf,unstable_isNewReconciler:!1},nv={readContext:Oe,useCallback:zf,useContext:Oe,useEffect:kl,useImperativeHandle:bf,useInsertionEffect:Uf,useLayoutEffect:jf,useMemo:$f,useReducer:Ss,useRef:Mf,useState:function(){return Ss(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return J===null?t.memoizedState=e:Bf(t,J.memoizedState,e)},useTransition:function(){var e=Ss(Br)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Vf,unstable_isNewReconciler:!1};function Kn(e,t){try{var n="",r=t;do n+=xm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,Pa=r),va(e,t)},n}function qf(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){va(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vv.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var iv=ft.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Hn(t,e.child,n,r)}function Zu(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=Sl(e,t,n,r,o,i),n=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(B&&n&&cl(t),t.flags|=1,ce(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ll(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qf(e,t,o,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(s,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Lt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,ut(e,t,i)}return ya(e,t,n,r,i)}function Yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(On,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(On,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(On,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(On,_e),_e|=r;return ce(e,t,i,n),t.child}function Jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var o=ve(n)?nn:le.current;return o=Bn(t,o),jn(t,i),n=Sl(e,t,n,r,o,i),r=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(B&&r&&cl(t),t.flags|=1,ce(e,t,n,i),t.child)}function tc(e,t,n,r,i){if(ve(n)){var o=!0;ro(t)}else o=!1;if(jn(t,i),t.stateNode===null)Fi(e,t),kf(t,n,r),ga(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ve(n)?nn:le.current,u=Bn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ku(t,s,r,u),gt=!1;var m=t.memoizedState;s.state=m,lo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ge.current||gt?(typeof d=="function"&&(ma(t,n,d,r),l=t.memoizedState),(a=gt||Wu(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ve(n)?nn:le.current,l=Bn(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ku(t,s,r,l),gt=!1,m=t.memoizedState,s.state=m,lo(t,r,s,i);var w=t.memoizedState;a!==f||m!==w||ge.current||gt?(typeof g=="function"&&(ma(t,n,g,r),w=t.memoizedState),(u=gt||Wu(t,n,u,r,m,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,o,i)}function wa(e,t,n,r,i,o){Jf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&zu(t,n,!1),ut(e,t,o);r=t.stateNode,iv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&zu(t,n,!0),t.child}function Xf(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),yl(e,t.containerInfo)}function nc(e,t,n,r,i){return Vn(),fl(i),t.flags|=256,ce(e,t,n,r),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bo(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ea(n),t.memoizedState=_a,e):Cl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ov(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Lt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Lt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ea(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=_a,r}return o=e.child,e=o.sibling,r=Lt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cl(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,n,r){return r!==null&&fl(r),Hn(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ov(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Is(Error(E(422))),Ti(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,s),t.child.memoizedState=Ea(s),t.memoizedState=_a,o);if(!(t.mode&1))return Ti(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Is(o,r,void 0),Ti(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lt(e,i),be(r,e,i,-1))}return Al(),r=Is(Error(E(421))),Ti(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Nt(i.nextSibling),Se=t,B=!0,je=null,e!==null&&(Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=rn,tt=e.id,nt=e.overflow,rn=t),t=Cl(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function ks(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ks(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ks(t,!0,n,null,o);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sv(e,t,n){switch(t.tag){case 3:Xf(t),Vn();break;case 5:Pf(t);break;case 1:ve(t.type)&&ro(t);break;case 4:yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(so,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Zf(e,t,n):(F(V,V.current&1),e=ut(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Yf(e,t,n)}return ut(e,t,n)}var th,Sa,nh,rh;th=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(Ge.current);var o=null;switch(n){case"input":i=Hs(e,i),r=Hs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Gs(e,i),r=Gs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Qs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function av(e,t,n){var r=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&no(),se(t),null;case 3:return r=t.stateNode,Wn(),$(ge),$(le),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(xa(je),je=null))),Sa(e,t),se(t),null;case 5:wl(t);var i=Jt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return se(t),null}if(e=Jt(Ge.current),Ii(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[Fr]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)z(hr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":fu(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":pu(r,o),z("invalid",r)}Qs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":pi(r),hu(r,o,!0);break;case"textarea":pi(r),mu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[Fr]=r,th(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ys(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)z(hr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":fu(e,r),i=Hs(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),z("invalid",e);break;case"textarea":pu(e,r),i=Gs(e,r),z("invalid",e);break;default:i=r}Qs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ad(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(e,l):typeof l=="number"&&Nr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",e):l!=null&&Ya(e,o,l,s))}switch(n){case"input":pi(e),hu(e,r,!1);break;case"textarea":pi(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Jt(zr.current),Jt(Ge.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return se(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))_f(),Vn(),t.flags|=98560,o=!1;else if(o=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[We]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else je!==null&&(xa(je),je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Al())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Wn(),Sa(e,t),e===null&&Ur(t.stateNode.containerInfo),se(t),null;case 10:return ml(t.type._context),se(t),null;case 17:return ve(t.type)&&no(),se(t),null;case 19:if($(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Gn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return se(t),null}else 2*q()-o.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function lv(e,t){switch(dl(t),t.tag){case 1:return ve(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),$(ge),$(le),_l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wl(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return Wn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var Ci=!1,ae=!1,uv=typeof WeakSet=="function"?WeakSet:Set,T=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){K(e,t,r)}}var ic=!1;function cv(e,t){if(sa=Xi,e=af(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},Xi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,I=w.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Me(t.type,_),I);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=ic,ic=!1,w}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ia(t,n,o)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Fr],delete t[ca],delete t[Kg],delete t[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oh(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var ne=null,Ue=!1;function ht(e,t,n){for(n=n.child;n!==null;)sh(e,t,n),n=n.sibling}function sh(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:ae||xn(n,t);case 6:var r=ne,i=Ue;ne=null,ht(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?vs(e.parentNode,n):e.nodeType===1&&vs(e,n),Lr(e)):vs(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,ht(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ia(n,t,s),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!ae&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ht(e,t,n),ae=r):ht(e,t,n);break;default:ht(e,t,n)}}function sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uv),t.forEach(function(r){var i=wv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(E(160));sh(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ve(e),r&4){try{Ir(3,e,e.return),jo(3,e)}catch(_){K(e,e.return,_)}try{Ir(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:De(t,e),Ve(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(De(t,e),Ve(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Pd(i,o),Ys(a,s);var u=Ys(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Ad(i,f):d==="dangerouslySetInnerHTML"?xd(i,f):d==="children"?Nr(i,f):Ya(i,d,f,u)}switch(a){case"input":Ws(i,o);break;case"textarea":Rd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(_){K(e,e.return,_)}}break;case 6:if(De(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){K(e,e.return,_)}}break;case 3:if(De(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:De(t,e),Ve(e);break;case 13:De(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nl=q())),r&4&&sc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,De(t,e),ae=u):De(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(T=e,d=e.child;d!==null;){for(f=T=d;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ir(4,m,m.return);break;case 1:xn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){lc(f);continue}}g!==null?(g.return=m,T=g):lc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Od("display",s))}catch(_){K(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){K(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:De(t,e),Ve(e),r&4&&sc(e);break;case 21:break;default:De(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=oc(e);Ca(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=oc(e);Ta(e,a,s);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dv(e,t,n){T=e,lh(e)}function lh(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ci;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ci;var u=ae;if(Ci=s,(ae=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?uc(i):l!==null?(l.return=s,T=l):uc(i);for(;o!==null;)T=o,lh(o),o=o.sibling;T=i,Ci=a,ae=u}ac(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):ac(e)}}function ac(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&ka(t)}catch(m){K(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function lc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function uc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{ka(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{ka(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var fv=Math.ceil,ho=ft.ReactCurrentDispatcher,Pl=ft.ReactCurrentOwner,xe=ft.ReactCurrentBatchConfig,M=0,te=null,Q=null,re=0,_e=0,On=zt(0),X=0,Hr=null,sn=0,Fo=0,Rl=0,kr=null,pe=null,Nl=0,Gn=1/0,Ze=null,po=!1,Pa=null,Ot=null,Pi=!1,kt=null,mo=0,Tr=0,Ra=null,bi=-1,zi=0;function de(){return M&6?q():bi!==-1?bi:bi=q()}function At(e){return e.mode&1?M&2&&re!==0?re&-re:Qg.transition!==null?(zi===0&&(zi=Hd()),zi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Jd(e.type)),e):1}function be(e,t,n,r){if(50<Tr)throw Tr=0,Ra=null,Error(E(185));Zr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Fo|=n),X===4&&yt(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(Gn=q()+500,Do&&$t()))}function ye(e,t){var n=e.callbackNode;Qm(e,t);var r=Ji(e,e===te?re:0);if(r===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?qg(cc.bind(null,e)):vf(cc.bind(null,e)),Hg(function(){!(M&6)&&$t()}),n=null;else{switch(Wd(r)){case 1:n=tl;break;case 4:n=Bd;break;case 16:n=Yi;break;case 536870912:n=Vd;break;default:n=Yi}n=gh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if(bi=-1,zi=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Ji(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=go(e,r);else{t=r;var i=M;M|=2;var o=dh();(te!==e||re!==t)&&(Ze=null,Gn=q()+500,Zt(e,t));do try{mv();break}catch(a){ch(e,a)}while(!0);pl(),ho.current=o,M=i,Q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ta(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=Hr,Zt(e,0),yt(e,r),ye(e,q()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hv(i)&&(t=go(e,r),t===2&&(o=ta(e),o!==0&&(r=o,t=Na(e,o))),t===1))throw n=Hr,Zt(e,0),yt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Gt(e,pe,Ze);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Nl+500-q(),10<t)){if(Ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(Gt.bind(null,e,pe,Ze),t);break}Gt(e,pe,Ze);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Fe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fv(r/1960))-r,10<r){e.timeoutHandle=ua(Gt.bind(null,e,pe,Ze),r);break}Gt(e,pe,Ze);break;case 5:Gt(e,pe,Ze);break;default:throw Error(E(329))}}}return ye(e,q()),e.callbackNode===n?uh.bind(null,e):null}function Na(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=go(e,t),e!==2&&(t=pe,pe=n,t!==null&&xa(t)),e}function xa(e){pe===null?pe=e:pe.push.apply(pe,e)}function hv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Rl,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(M&6)throw Error(E(327));Fn();var t=Ji(e,0);if(!(t&1))return ye(e,q()),null;var n=go(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=Hr,Zt(e,0),yt(e,t),ye(e,q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,pe,Ze),ye(e,q()),null}function xl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Gn=q()+500,Do&&$t())}}function an(e){kt!==null&&kt.tag===0&&!(M&6)&&Fn();var t=M;M|=1;var n=xe.transition,r=U;try{if(xe.transition=null,U=1,e)return e()}finally{U=r,xe.transition=n,M=t,!(M&6)&&$t()}}function Ol(){_e=On.current,$(On)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Wn(),$(ge),$(le),_l();break;case 5:wl(r);break;case 4:Wn();break;case 13:$(V);break;case 19:$(V);break;case 10:ml(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(te=e,Q=e=Lt(e.current,null),re=_e=t,X=0,Hr=null,Rl=Fo=sn=0,pe=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Yt=null}return e}function ch(e,t){do{var n=Q;try{if(pl(),Ui.current=fo,co){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}co=!1}if(on=0,ee=J=H=null,Sr=!1,$r=0,Pl.current=null,n===null||n.return===null){X=1,Hr=t,Q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Ju(s);if(g!==null){g.flags&=-257,Xu(g,s,a,o,t),g.mode&1&&Yu(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){Yu(o,u,t),Al();break e}l=Error(E(426))}}else if(B&&a.mode&1){var I=Ju(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Xu(I,s,a,o,t),fl(Kn(l,a));break e}}o=l=Kn(l,a),X!==4&&(X=2),kr===null?kr=[o]:kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Gf(o,l,t);Vu(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=qf(o,a,t);Vu(o,y);break e}}o=o.return}while(o!==null)}hh(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function dh(){var e=ho.current;return ho.current=fo,e===null?fo:e}function Al(){(X===0||X===3||X===2)&&(X=4),te===null||!(sn&268435455)&&!(Fo&268435455)||yt(te,re)}function go(e,t){var n=M;M|=2;var r=dh();(te!==e||re!==t)&&(Ze=null,Zt(e,t));do try{pv();break}catch(i){ch(e,i)}while(!0);if(pl(),M=n,ho.current=r,Q!==null)throw Error(E(261));return te=null,re=0,X}function pv(){for(;Q!==null;)fh(Q)}function mv(){for(;Q!==null&&!zm();)fh(Q)}function fh(e){var t=mh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?hh(e):Q=t,Pl.current=null}function hh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lv(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=av(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function Gt(e,t,n){var r=U,i=xe.transition;try{xe.transition=null,U=1,gv(e,t,n,r)}finally{xe.transition=i,U=r}return null}function gv(e,t,n,r){do Fn();while(kt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ym(e,o),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pi||(Pi=!0,gh(Yi,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xe.transition,xe.transition=null;var s=U;U=1;var a=M;M|=4,Pl.current=null,cv(e,n),ah(n,e),Ug(aa),Xi=!!sa,aa=sa=null,e.current=n,dv(n),$m(),M=a,U=s,xe.transition=o}else e.current=n;if(Pi&&(Pi=!1,kt=e,mo=i),o=e.pendingLanes,o===0&&(Ot=null),Hm(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(po)throw po=!1,e=Pa,Pa=null,e;return mo&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Ra?Tr++:(Tr=0,Ra=e):Tr=0,$t(),null}function Fn(){if(kt!==null){var e=Wd(mo),t=xe.transition,n=U;try{if(xe.transition=null,U=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,mo=0,M&6)throw Error(E(331));var i=M;for(M|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Ir(8,d,o)}var f=d.child;if(f!==null)f.return=d,T=f;else for(;T!==null;){d=T;var m=d.sibling,g=d.return;if(ih(d),d===u){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jo(9,a)}}catch(S){K(a,a.return,S)}if(a===s){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(M=i,$t(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{U=n,xe.transition=t}}return!1}function dc(e,t,n){t=Kn(n,t),t=Gf(e,t,1),e=xt(e,t,1),t=de(),e!==null&&(Zr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Kn(n,e),e=qf(t,e,1),t=xt(t,e,1),e=de(),t!==null&&(Zr(t,1,e),ye(t,e));break}}t=t.return}}function vv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>q()-Nl?Zt(e,0):Rl|=n),ye(e,t)}function ph(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=de();e=lt(e,t),e!==null&&(Zr(e,t,n),ye(e,n))}function yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function wv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),ph(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,sv(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&yf(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Bn(t,le.current);jn(t,n),i=Sl(null,t,r,e,i,n);var o=Il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vl(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,ga(t,r,e,n),t=wa(null,t,r,!0,o,n)):(t.tag=0,B&&o&&cl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ev(r),e=Me(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=Zu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,Me(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),tc(e,t,r,i,n);case 3:e:{if(Xf(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sf(e,t),lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Kn(Error(E(423)),t),t=nc(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(E(424)),t),t=nc(e,t,r,n,i);break e}else for(Ee=Nt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,je=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=ut(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Pf(t),e===null&&ha(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,la(r,i)?s=null:o!==null&&la(r,o)&&(t.flags|=32),Jf(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ha(t),null;case 13:return Zf(e,t,n);case 4:return yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Zu(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(so,r._currentValue),r._currentValue=s,o!==null)if(ze(o.value,s)){if(o.children===i.children&&!ge.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ot(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=Oe(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),ec(e,t,r,i,n);case 15:return Qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Fi(e,t),t.tag=1,ve(r)?(e=!0,ro(t)):e=!1,jn(t,n),kf(t,r,i),ga(t,r,i,n),wa(null,t,r,!0,e,n);case 19:return eh(e,t,n);case 22:return Yf(e,t,n)}throw Error(E(156,t.tag))};function gh(e,t){return $d(e,t)}function _v(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new _v(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ev(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Za)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ll(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return en(n.children,i,o,t);case Ja:s=8,i|=8;break;case zs:return e=Ne(12,n,t,i|2),e.elementType=zs,e.lanes=o,e;case $s:return e=Ne(13,n,t,i),e.elementType=$s,e.lanes=o,e;case Bs:return e=Ne(19,n,t,i),e.elementType=Bs,e.lanes=o,e;case kd:return bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:s=10;break e;case Id:s=9;break e;case Xa:s=11;break e;case Za:s=14;break e;case mt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=kd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ts(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ss(0),this.expirationTimes=ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,o,s,a,l){return e=new Sv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(o),e}function Iv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vh(e){if(!e)return Ft;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ve(n))return gf(e,n,t)}return t}function yh(e,t,n,r,i,o,s,a,l){return e=Dl(n,r,!0,e,i,o,s,a,l),e.context=vh(null),n=e.current,r=de(),i=At(n),o=ot(r,i),o.callback=t??null,xt(n,o,i),e.current.lanes=i,Zr(e,i,r),ye(e,r),e}function zo(e,t,n,r){var i=t.current,o=de(),s=At(i);return n=vh(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,s),e!==null&&(be(e,i,s,o),Mi(e,i,s)),s}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ml(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function kv(){return null}var wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}$o.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));zo(e,t,null,null)};$o.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){zo(null,e,null,null)}),t[at]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&Yd(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Tv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vo(s);o.call(u)}}var s=yh(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=s,e[at]=s.current,Ur(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vo(l);a.call(u)}}var l=Dl(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=l,e[at]=l.current,Ur(e.nodeType===8?e.parentNode:e),an(function(){zo(t,l,n,r)}),l}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vo(s);a.call(l)}}zo(t,s,e,i)}else s=Tv(n,t,e,i,r);return vo(s)}Kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(nl(t,n|1),ye(t,q()),!(M&6)&&(Gn=q()+500,$t()))}break;case 13:an(function(){var r=lt(e,1);if(r!==null){var i=de();be(r,e,1,i)}}),Ml(e,1)}};rl=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=de();be(t,e,134217728,n)}Ml(e,134217728)}};Gd=function(e){if(e.tag===13){var t=At(e),n=lt(e,t);if(n!==null){var r=de();be(n,e,t,r)}Ml(e,t)}};qd=function(){return U};Qd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Xs=function(e,t,n){switch(t){case"input":if(Ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lo(r);if(!i)throw Error(E(90));Cd(r),Ws(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Md=xl;Ud=an;var Cv={usingClientEntryPoint:!1,Events:[ti,Tn,Lo,Ld,Dd,xl]},ur={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Pv={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{No=Ri.inject(Pv),Ke=Ri}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(t))throw Error(E(200));return Iv(e,t,null,n)};Te.createRoot=function(e,t){if(!jl(e))throw Error(E(299));var n=!1,r="",i=wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Ul(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return an(e)};Te.hydrate=function(e,t,n){if(!Bo(t))throw Error(E(200));return Vo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!jl(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yh(t,null,e,1,n??null,i,!1,o,s),e[at]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $o(t)};Te.render=function(e,t,n){if(!Bo(t))throw Error(E(200));return Vo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(E(40));return e._reactRootContainer?(an(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Te.unstable_batchedUpdates=xl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Vo(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function _h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_h)}catch(e){console.error(e)}}_h(),vd.exports=Te;var Rv=vd.exports,pc=Rv;Fs.createRoot=pc.createRoot,Fs.hydrateRoot=pc.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const mc="popstate";function Nv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Oa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yo(i)}return Ov(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xv(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||xv()})}function yo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ov(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Tt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Wr({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Tt.Pop;let I=d(),h=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:h})}function m(I,h){a=Tt.Push;let c=Oa(_.location,I,h);n&&n(c,I),u=d()+1;let p=gc(c,u),y=_.createHref(c);try{s.pushState(p,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}o&&l&&l({action:a,location:_.location,delta:1})}function g(I,h){a=Tt.Replace;let c=Oa(_.location,I,h);n&&n(c,I),u=d();let p=gc(c,u),y=_.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:_.location,delta:0})}function w(I){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof I=="string"?I:yo(I);return c=c.replace(/ $/,"%20"),Y(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return e(i,s)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mc,f),l=I,()=>{i.removeEventListener(mc,f),l=null}},createHref(I){return t(i,I)},createURL:w,encodeLocation(I){let h=w(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(I){return s.go(I)}};return _}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function Av(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jn(t):t,i=Fl(r.pathname||"/",n);if(i==null)return null;let o=Sh(e);Lv(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=Wv(i);s=Bv(o[a],l)}return s}function Sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:zv(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ih(o.path))i(o,s,l)}),t}function Ih(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ih(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Dv=/^:[\w-]+$/,Mv=3,Uv=2,jv=1,Fv=10,bv=-2,yc=e=>e==="*";function zv(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=bv),t&&(r+=Uv),n.filter(i=>!yc(i)).reduce((i,o)=>i+(Dv.test(o)?Mv:o===""?jv:Fv),r)}function $v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Vv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:Dt([i,d.pathname]),pathnameBase:Qv(Dt([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Dt([i,d.pathnameBase]))}return o}function Vv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:g}=d;if(m==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[f];return g&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Hv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Wv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Eh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:Gv(n,t):t,search:Yv(r),hash:Jv(i)}}function Gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kh(e,t){let n=qv(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Th(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Wr({},e),Y(!i.pathname||!i.pathname.includes("?"),Ps("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Ps("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Ps("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=Kv(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),Qv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ch=["post","put","patch","delete"];new Set(Ch);const Zv=["get",...Ch];new Set(Zv);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kr.apply(this,arguments)}const bl=k.createContext(null),ey=k.createContext(null),mn=k.createContext(null),Ho=k.createContext(null),gn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Ph=k.createContext(null);function ty(e,t){let{relative:n}=t===void 0?{}:t;ri()||Y(!1);let{basename:r,navigator:i}=k.useContext(mn),{hash:o,pathname:s,search:a}=Nh(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Dt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ri(){return k.useContext(Ho)!=null}function Wo(){return ri()||Y(!1),k.useContext(Ho).location}function Rh(e){k.useContext(mn).static||k.useLayoutEffect(e)}function zl(){let{isDataRoute:e}=k.useContext(gn);return e?py():ny()}function ny(){ri()||Y(!1);let e=k.useContext(bl),{basename:t,future:n,navigator:r}=k.useContext(mn),{matches:i}=k.useContext(gn),{pathname:o}=Wo(),s=JSON.stringify(kh(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Rh(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Th(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Dt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Nh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(mn),{matches:i}=k.useContext(gn),{pathname:o}=Wo(),s=JSON.stringify(kh(i,r.v7_relativeSplatPath));return k.useMemo(()=>Th(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function ry(e,t){return iy(e,t)}function iy(e,t,n,r){ri()||Y(!1);let{navigator:i}=k.useContext(mn),{matches:o}=k.useContext(gn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Wo(),d;if(t){var f;let I=typeof t=="string"?Jn(t):t;l==="/"||(f=I.pathname)!=null&&f.startsWith(l)||Y(!1),d=I}else d=u;let m=d.pathname||"/",g=m;if(l!=="/"){let I=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let w=Av(e,{pathname:g}),_=uy(w&&w.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:Dt([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:Dt([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),o,n,r);return t&&_?k.createElement(Ho.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Tt.Pop}},_):_}function oy(){let e=hy(),t=Xv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const sy=k.createElement(oy,null);class ay extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(gn.Provider,{value:this.props.routeContext},k.createElement(Ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ly(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(gn.Provider,{value:t},r)}function uy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));d>=0||Y(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:g}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,m)=>{let g,w=!1,_=null,I=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||sy,l&&(u<0&&m===0?(my("route-fallback",!1),w=!0,I=null):u===m&&(w=!0,I=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),c=()=>{let p;return g?p=_:w?p=I:f.route.Component?p=k.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,k.createElement(ly,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?k.createElement(ay,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var xh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xh||{}),wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wo||{});function cy(e){let t=k.useContext(bl);return t||Y(!1),t}function dy(e){let t=k.useContext(ey);return t||Y(!1),t}function fy(e){let t=k.useContext(gn);return t||Y(!1),t}function Oh(e){let t=fy(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function hy(){var e;let t=k.useContext(Ph),n=dy(wo.UseRouteError),r=Oh(wo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function py(){let{router:e}=cy(xh.UseNavigateStable),t=Oh(wo.UseNavigateStable),n=k.useRef(!1);return Rh(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Kr({fromRouteId:t},o)))},[e,t])}const wc={};function my(e,t,n){!t&&!wc[e]&&(wc[e]=!0)}function Bi(e){Y(!1)}function gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:s=!1,future:a}=e;ri()&&Y(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:o,static:s,future:Kr({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Jn(r));let{pathname:d="/",search:f="",hash:m="",state:g=null,key:w="default"}=r,_=k.useMemo(()=>{let I=Fl(d,l);return I==null?null:{location:{pathname:I,search:f,hash:m,state:g,key:w},navigationType:i}},[l,d,f,m,g,w,i]);return _==null?null:k.createElement(mn.Provider,{value:u},k.createElement(Ho.Provider,{children:n,value:_}))}function vy(e){let{children:t,location:n}=e;return ry(Aa(t),n)}new Promise(()=>{});function Aa(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Aa(r.props.children,o));return}r.type!==Bi&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Aa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}function yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _y(e,t){return e.button===0&&(!t||t==="_self")&&!wy(e)}const Ey=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sy="6";try{window.__reactRouterVersion=Sy}catch{}const Iy="startTransition",_c=ym[Iy];function ky(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=Nv({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&_c?_c(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>s.listen(d),[s,d]),k.createElement(gy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Da=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,m=yy(t,Ey),{basename:g}=k.useContext(mn),w,_=!1;if(typeof u=="string"&&Cy.test(u)&&(w=u,Ty))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Fl(y.pathname,g);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:_=!0}catch{}let I=ty(u,{relative:i}),h=Py(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||h(p)}return k.createElement("a",La({},m,{href:w||I,onClick:_||o?r:c,ref:n,target:l}))});var Ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ec||(Ec={}));var Sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function Py(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=zl(),u=Wo(),d=Nh(e,{relative:s});return k.useCallback(f=>{if(_y(f,n)){f.preventDefault();let m=r!==void 0?r:yo(u)===yo(d);l(e,{replace:m,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}const Ah="/rc-tutors/assets/iie_logo-B2FMXMzB.png",Ry="/rc-tutors/assets/login_image-B1xroHJh.jpeg",$l="/rc-tutors/assets/rc_logo-H1BBQ8e9.jpeg";var Ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ny=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ny(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new xy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oy=function(e){const t=Lh(e);return Dh.encodeByteArray(t,!0)},Mh=function(e){return Oy(e).replace(/\./g,"")},Uh=function(e){try{return Dh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=()=>Ay().__FIREBASE_DEFAULTS__,Dy=()=>{if(typeof process>"u"||typeof Ic>"u")return;const e=Ic.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},My=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Uh(e[1]);return t&&JSON.parse(t)},Bl=()=>{try{return Ly()||Dy()||My()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Uy=e=>{var t,n;return(n=(t=Bl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jh=()=>{var e;return(e=Bl())===null||e===void 0?void 0:e.config},Fh=e=>{var t;return(t=Bl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function bh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function by(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function $y(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=By,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Vy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xe(i,a,r)}}function Vy(e,t){return e.replace(Hy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Hy=/\{\$([^}]+)}/g;function Wy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(kc(o)&&kc(s)){if(!Gr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ky(e,t){const n=new Gy(e,t);return n.subscribe.bind(n)}class Gy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rs),i.error===void 0&&(i.error=Rs),i.complete===void 0&&(i.complete=Rs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=1e3,Yy=2,Jy=4*60*60*1e3,Xy=.5;function Tc(e,t=Qy,n=Yy){const r=t*Math.pow(n,e),i=Math.round(Xy*r*(Math.random()-.5)*2);return Math.min(Jy,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(t0(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e0(e){return e===qt?void 0:e}function t0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Zy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const r0={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},i0=j.INFO,o0={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},s0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=o0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vl{constructor(t){this.name=t,this._logLevel=i0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?r0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const a0=(e,t)=>t.some(n=>e instanceof n);let Cc,Pc;function l0(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u0(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bh=new WeakMap,Ma=new WeakMap,Vh=new WeakMap,Ns=new WeakMap,Hl=new WeakMap;function c0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Mt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Bh.set(n,e)}).catch(()=>{}),Hl.set(t,e),t}function d0(e){if(Ma.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ma.set(e,t)}let Ua={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ma.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function f0(e){Ua=e(Ua)}function h0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xs(this),t,...n);return Vh.set(r,t.sort?t.sort():[t]),Mt(r)}:u0().includes(e)?function(...t){return e.apply(xs(this),t),Mt(Bh.get(this))}:function(...t){return Mt(e.apply(xs(this),t))}}function p0(e){return typeof e=="function"?h0(e):(e instanceof IDBTransaction&&d0(e),a0(e,l0())?new Proxy(e,Ua):e)}function Mt(e){if(e instanceof IDBRequest)return c0(e);if(Ns.has(e))return Ns.get(e);const t=p0(e);return t!==e&&(Ns.set(e,t),Hl.set(t,e)),t}const xs=e=>Hl.get(e);function Hh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const m0=["get","getKey","getAll","getAllKeys","count"],g0=["put","add","delete","clear"],Os=new Map;function Rc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=g0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Os.set(t,o),o}f0(e=>({...e,get:(t,n,r)=>Rc(t,n)||e.get(t,n,r),has:(t,n)=>!!Rc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ja="@firebase/app",Nc="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Vl("@firebase/app"),w0="@firebase/app-compat",_0="@firebase/analytics-compat",E0="@firebase/analytics",S0="@firebase/app-check-compat",I0="@firebase/app-check",k0="@firebase/auth",T0="@firebase/auth-compat",C0="@firebase/database",P0="@firebase/database-compat",R0="@firebase/functions",N0="@firebase/functions-compat",x0="@firebase/installations",O0="@firebase/installations-compat",A0="@firebase/messaging",L0="@firebase/messaging-compat",D0="@firebase/performance",M0="@firebase/performance-compat",U0="@firebase/remote-config",j0="@firebase/remote-config-compat",F0="@firebase/storage",b0="@firebase/storage-compat",z0="@firebase/firestore",$0="@firebase/firestore-compat",B0="firebase",V0="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="[DEFAULT]",H0={[ja]:"fire-core",[w0]:"fire-core-compat",[E0]:"fire-analytics",[_0]:"fire-analytics-compat",[I0]:"fire-app-check",[S0]:"fire-app-check-compat",[k0]:"fire-auth",[T0]:"fire-auth-compat",[C0]:"fire-rtdb",[P0]:"fire-rtdb-compat",[R0]:"fire-fn",[N0]:"fire-fn-compat",[x0]:"fire-iid",[O0]:"fire-iid-compat",[A0]:"fire-fcm",[L0]:"fire-fcm-compat",[D0]:"fire-perf",[M0]:"fire-perf-compat",[U0]:"fire-rc",[j0]:"fire-rc-compat",[F0]:"fire-gcs",[b0]:"fire-gcs-compat",[z0]:"fire-fst",[$0]:"fire-fst-compat","fire-js":"fire-js",[B0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,ba=new Map;function W0(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(ba.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;ba.set(t,e);for(const n of _o.values())W0(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new vn("app","Firebase",K0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=V0;function Wh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=jh()),!n)throw Ut.create("no-options");const o=_o.get(i);if(o){if(Gr(n,o.options)&&Gr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new n0(i);for(const l of ba.values())s.addComponent(l);const a=new G0(n,r,s);return _o.set(i,a),a}function Kh(e=Fa){const t=_o.get(e);if(!t&&e===Fa&&jh())return Wh();if(!t)throw Ut.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=H0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}ct(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="firebase-heartbeat-database",Q0=1,qr="firebase-heartbeat-store";let As=null;function Gh(){return As||(As=Hh(q0,Q0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),As}async function Y0(e){try{const n=(await Gh()).transaction(qr),r=await n.objectStore(qr).get(qh(e));return await n.done,r}catch(t){if(t instanceof Xe)ln.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function xc(e,t){try{const r=(await Gh()).transaction(qr,"readwrite");await r.objectStore(qr).put(t,qh(e)),await r.done}catch(n){if(n instanceof Xe)ln.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function qh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=1024,X0=30*24*60*60*1e3;class Z0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=X0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oc(),{heartbeatsToSend:r,unsentEntries:i}=ew(this._heartbeatsCache.heartbeats),o=Mh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Oc(){return new Date().toISOString().substring(0,10)}function ew(e,t=J0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ac(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ac(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ac(e){return Mh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(e){ct(new Je("platform-logger",t=>new v0(t),"PRIVATE")),ct(new Je("heartbeat",t=>new Z0(t),"PRIVATE")),qe(ja,Nc,e),qe(ja,Nc,"esm2017"),qe("fire-js","")}nw("");function Wl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rw=Qh,Yh=new vn("auth","Firebase",Qh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Vl("@firebase/auth");function iw(e,...t){Eo.logLevel<=j.WARN&&Eo.warn(`Auth (${oi}): ${e}`,...t)}function Vi(e,...t){Eo.logLevel<=j.ERROR&&Eo.error(`Auth (${oi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,...t){throw Kl(e,...t)}function Qe(e,...t){return Kl(e,...t)}function ow(e,t,n){const r=Object.assign(Object.assign({},rw()),{[t]:n});return new vn("auth","Firebase",r).create(t,{appName:e.name})}function Kl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Yh.create(e,...t)}function x(e,t,...n){if(!e)throw Kl(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vi(t),new Error(t)}function dt(e,t){e||rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function sw(){return Lc()==="http:"||Lc()==="https:"}function Lc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sw()||bh()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n){this.shortDelay=t,this.longDelay=n,dt(n>t,"Short delay should be less than long delay!"),this.isMobile=Fy()||by()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(e,t){dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new si(3e4,6e4);function Bt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vt(e,t,n,r,i={}){return Xh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ii(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Jh.fetch()(Zh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Xh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uw),t);try{const i=new fw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ni(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ni(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ni(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ow(e,d,u);$e(e,d)}}catch(i){if(i instanceof Xe)throw i;$e(e,"network-request-failed",{message:String(i)})}}async function ai(e,t,n,r,i={}){const o=await Vt(e,t,n,r,i);return"mfaPendingCredential"in o&&$e(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Zh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gl(e.config,i):`${e.config.apiScheme}://${i}`}function dw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),cw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(e,t,r);return i.customData._tokenResponse=n,i}function Dc(e){return e!==void 0&&e.enterprise!==void 0}class hw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return dw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pw(e,t){return Vt(e,"GET","/v2/recaptchaConfig",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(e,t){return Vt(e,"POST","/v1/accounts:delete",t)}async function gw(e,t){return Vt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vw(e,t=!1){const n=Be(e),r=await n.getIdToken(t),i=ql(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Cr(Ls(i.auth_time)),issuedAtTime:Cr(Ls(i.iat)),expirationTime:Cr(Ls(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ls(e){return Number(e)*1e3}function ql(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uh(n);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yw(e){const t=ql(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xe&&ww(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ww({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qr(e,gw(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Iw(o.providerUserInfo):[],a=Sw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ep(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function Ew(e){const t=Be(e);await So(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Iw(e){return e.map(t=>{var{providerId:n}=t,r=Wl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(e,t){const n=await Xh(e,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Zh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tw(e,t){return Vt(e,"POST","/v2/accounts:revokeToken",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await kw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Yr;return r&&(x(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(x(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Wl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _w(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ep(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vw(this,t)}reload(){return Ew(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qr(this,mw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:S,providerData:P,stsTokenManager:R}=n;x(p&&R,t,"internal-error");const N=Yr.fromJSON(this.name,R);x(typeof p=="string",t,"internal-error"),pt(f,t.name),pt(m,t.name),x(typeof y=="boolean",t,"internal-error"),x(typeof S=="boolean",t,"internal-error"),pt(g,t.name),pt(w,t.name),pt(_,t.name),pt(I,t.name),pt(h,t.name),pt(c,t.name);const b=new tn({uid:p,auth:t,email:m,emailVerified:y,displayName:f,isAnonymous:S,photoURL:w,phoneNumber:g,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(b.providerData=P.map(L=>Object.assign({},L))),I&&(b._redirectEventId=I),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Yr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await So(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;function it(e){dt(e instanceof Function,"Expected a class definition");let t=Mc.get(e);return t?(dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}tp.type="NONE";const Uc=tp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t,n){return`firebase:${e}:${t}:${n}`}class bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new bn(it(Uc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||it(Uc);const s=Hi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=tn._fromJSON(t,d);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new bn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new bn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ip(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(np(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sp(t))return"Blackberry";if(ap(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||rp(t))&&!t.includes("edge/"))return"Chrome";if(op(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function np(e=ue()){return/firefox\//i.test(e)}function Ql(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rp(e=ue()){return/crios\//i.test(e)}function ip(e=ue()){return/iemobile/i.test(e)}function op(e=ue()){return/android/i.test(e)}function sp(e=ue()){return/blackberry/i.test(e)}function ap(e=ue()){return/webos/i.test(e)}function Ko(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cw(e=ue()){var t;return Ko(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pw(){return zy()&&document.documentMode===10}function lp(e=ue()){return Ko(e)||op(e)||ap(e)||sp(e)||/windows phone/i.test(e)||ip(e)}function Rw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(e,t=[]){let n;switch(e){case"Browser":n=jc(ue());break;case"Worker":n=`${jc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(e,t={}){return Vt(e,"GET","/v2/passwordPolicy",Bt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=6;class Aw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Ow,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await So(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Be(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xw(this),n=new Aw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&iw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return Be(e)}class Fc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ky(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(e){Go=e}function cp(e){return Go.loadJS(e)}function Mw(){return Go.recaptchaEnterpriseScript}function Uw(){return Go.gapiScript}function jw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Fw="recaptcha-enterprise",bw="NO_RECAPTCHA";class zw{constructor(t){this.type=Fw,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{pw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new hw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Dc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(bw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Dc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Mw();l.length!==0&&(l+=a),cp(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function bc(e,t,n,r=!1){const i=new zw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function $a(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await bc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Gr(o,t??{}))return i;$e(i,"already-initialized")}return n.initialize({options:t})}function Bw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Vw(e,t,n){const r=yn(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=dp(t),{host:s,port:a}=Hw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ww()}function dp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Hw(e){const t=dp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:zc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:zc(s)}}}function zc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ww(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}async function Kw(e,t){return Vt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(e,t){return ai(e,"POST","/v1/accounts:signInWithPassword",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}async function Qw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Yl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Jr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Jr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,n,"signInWithPassword",Gw);case"emailLink":return qw(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,r,"signUpPassword",Kw);case"emailLink":return Qw(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){return ai(e,"POST","/v1/accounts:signInWithIdp",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="http://localhost";class un extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Wl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new un(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:Yw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ii(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xw(e){const t=pr(mr(e)).link,n=t?pr(mr(t)).deep_link_id:null,r=pr(mr(e)).deep_link_id;return(r?pr(mr(r)).link:null)||r||n||t||e}class Jl{constructor(t){var n,r,i,o,s,a;const l=pr(mr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Jw((i=l.mode)!==null&&i!==void 0?i:null);x(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Xw(t);try{return new Jl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Jr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Jl.parseLink(n);return x(r,"argument-error"),Jr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends fp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends li{constructor(){super("facebook.com")}static credential(t){return un._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wt.credential(t.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return un._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends li{constructor(){super("github.com")}static credential(t){return un._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends li{constructor(){super("twitter.com")}static credential(t,n){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t){return ai(e,"POST","/v1/accounts:signUp",Bt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=$c(r);return new cn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=$c(r);return new cn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function $c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Xe{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Io(t,n,r,i)}}function hp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(e,o,t,r):o})}async function e_(e,t,n=!1){const r=await Qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Qr(e,hp(r,i,t,e),n);x(o.idToken,r,"internal-error");const s=ql(o.idToken);x(s,r,"internal-error");const{sub:a}=s;return x(e.uid===a,r,"user-mismatch"),cn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(e,t,n=!1){const r="signIn",i=await hp(e,r,t),o=await cn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function n_(e,t){return pp(yn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(e){const t=yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function gp(e,t,n){const r=yn(e),s=await $a(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mp(e),l}),a=await cn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function r_(e,t,n){return n_(Be(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mp(e),r})}function i_(e,t,n,r){return Be(e).onIdTokenChanged(t,n,r)}function o_(e,t,n){return Be(e).beforeAuthStateChanged(t,n)}function s_(e,t,n,r){return Be(e).onAuthStateChanged(t,n,r)}function a_(e){return Be(e).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){const e=ue();return Ql(e)||Ko(e)}const u_=1e3,c_=10;class yp extends vp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=l_()&&Rw(),this.fallbackToPolling=lp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Pw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,c_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},u_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yp.type="LOCAL";const d_=yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends vp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}wp.type="SESSION";const _p=wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await f_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Xl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function p_(e){Ye().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function m_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function v_(){return Ep()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="firebaseLocalStorageDb",y_=1,To="firebaseLocalStorage",Ip="fbase_key";class ui{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(e,t){return e.transaction([To],t?"readwrite":"readonly").objectStore(To)}function w_(){const e=indexedDB.deleteDatabase(Sp);return new ui(e).toPromise()}function Ba(){const e=indexedDB.open(Sp,y_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(To,{keyPath:Ip})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(To)?t(r):(r.close(),await w_(),t(await Ba()))})})}async function Bc(e,t,n){const r=Qo(e,!0).put({[Ip]:t,value:n});return new ui(r).toPromise()}async function __(e,t){const n=Qo(e,!1).get(t),r=await new ui(n).toPromise();return r===void 0?null:r.value}function Vc(e,t){const n=Qo(e,!0).delete(t);return new ui(n).toPromise()}const E_=800,S_=3;class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>S_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(v_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await m_(),!this.activeServiceWorker)return;this.sender=new h_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||g_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ba();return await Bc(t,ko,"1"),await Vc(t,ko),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>__(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Qo(i,!1).getAll();return new ui(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const I_=kp;new si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e,t){return t?it(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Yl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function T_(e){return pp(e.auth,new Zl(e),e.bypassAuthState)}function C_(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),t_(n,new Zl(e),e.bypassAuthState)}async function P_(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),e_(n,new Zl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return T_;case"linkViaPopup":case"linkViaRedirect":return P_;case"reauthViaPopup":case"reauthViaRedirect":return C_;default:$e(this.auth,"internal-error")}}resolve(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new si(2e3,1e4);class An extends Tp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const t=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,R_.get())};t()}}An.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="pendingRedirect",Wi=new Map;class x_ extends Tp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const r=await O_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O_(e,t){const n=D_(t),r=L_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A_(e,t){Wi.set(e._key(),t)}function L_(e){return it(e._redirectPersistence)}function D_(e){return Hi(N_,e.config.apiKey,e.name)}async function M_(e,t,n=!1){const r=yn(e),i=k_(r,t),s=await new x_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=10*60*1e3;class j_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!F_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Cp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=U_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(t))}saveEventToCache(t){this.cachedEventUids.add(Hc(t)),this.lastProcessedEventTime=Date.now()}}function Hc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Cp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function F_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(e,t={}){return Vt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$_=/^https?/;async function B_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await b_(e);for(const n of t)try{if(V_(n))return}catch{}$e(e,"unauthorized-domain")}function V_(e){const t=za(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$_.test(n))return!1;if(z_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new si(3e4,6e4);function Wc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function W_(e){return new Promise((t,n)=>{var r,i,o;function s(){Wc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wc(),n(Qe(e,"network-request-failed"))},timeout:H_.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=jw("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(Qe(e,"network-request-failed"))},cp(`${Uw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function K_(e){return Ki=Ki||W_(e),Ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new si(5e3,15e3),q_="__/auth/iframe",Q_="emulator/auth/iframe",Y_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X_(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gl(t,Q_):`https://${e.config.authDomain}/${q_}`,r={apiKey:t.apiKey,appName:e.name,v:oi},i=J_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ii(r).slice(1)}`}async function Z_(e){const t=await K_(e),n=Ye().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:X_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Qe(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},G_.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t1=500,n1=600,r1="_blank",i1="http://localhost";class Kc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o1(e,t,n,r=t1,i=n1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},e1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=rp(u)?r1:n),np(u)&&(t=t||i1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(Cw(u)&&a!=="_self")return s1(t||"",a),new Kc(null);const f=window.open(t||"",a,d);x(f,e,"popup-blocked");try{f.focus()}catch{}return new Kc(f)}function s1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="__/auth/handler",l1="emulator/auth/handler",u1=encodeURIComponent("fac");async function Gc(e,t,n,r,i,o){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(t instanceof fp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Wy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(t instanceof li){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${u1}=${encodeURIComponent(l)}`:"";return`${c1(e)}?${ii(a).slice(1)}${u}`}function c1({config:e}){return e.emulator?Gl(e,l1):`https://${e.authDomain}/${a1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="webStorageSupport";class d1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_p,this._completeRedirectFn=M_,this._overrideRedirectResult=A_}async _openPopup(t,n,r,i){var o;dt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gc(t,n,r,za(),i);return o1(t,s,Xl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Gc(t,n,r,za(),i);return p_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Z_(t),r=new j_(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ds,{type:Ds},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ds];s!==void 0&&n(!!s),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lp()||Ql()||Ko()}}const f1=d1;var qc="@firebase/auth",Qc="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m1(e){ct(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;x(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:up(e)},u=new Lw(r,i,o,l);return Bw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ct(new Je("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new h1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(qc,Qc,p1(e)),qe(qc,Qc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=5*60,v1=Fh("authIdTokenMaxAge")||g1;let Yc=null;const y1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>v1)return;const i=n==null?void 0:n.token;Yc!==i&&(Yc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function w1(e=Kh()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$w(e,{popupRedirectResolver:f1,persistence:[I_,d_,_p]}),r=Fh("authTokenSyncURL");if(r){const o=y1(r);o_(n,o,()=>o(n.currentUser)),i_(n,s=>o(s))}const i=Uy("auth");return i&&Vw(n,`http://${i}`),n}function _1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Dw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Qe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m1("Browser");var E1="firebase",S1="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(E1,S1,"app");const Pp="@firebase/installations",eu="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=1e4,Np=`w:${eu}`,xp="FIS_v2",I1="https://firebaseinstallations.googleapis.com/v1",k1=60*60*1e3,T1="installations",C1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dn=new vn(T1,C1,P1);function Op(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap({projectId:e}){return`${I1}/projects/${e}/installations`}function Lp(e){return{token:e.token,requestStatus:2,expiresIn:N1(e.expiresIn),creationTime:Date.now()}}async function Dp(e,t){const r=(await t.json()).error;return dn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function R1(e,{refreshToken:t}){const n=Mp(e);return n.append("Authorization",x1(t)),n}async function Up(e){const t=await e();return t.status>=500&&t.status<600?e():t}function N1(e){return Number(e.replace("s","000"))}function x1(e){return`${xp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ap(e),i=Mp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:xp,appId:e.appId,sdkVersion:Np},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Up(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lp(u.authToken)}}else throw await Dp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=/^[cdef][\w-]{21}$/,Va="";function D1(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=M1(e);return L1.test(n)?n:Va}catch{return Va}}function M1(e){return A1(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new Map;function bp(e,t){const n=Yo(e);zp(n,t),U1(n,t)}function zp(e,t){const n=Fp.get(e);if(n)for(const r of n)r(t)}function U1(e,t){const n=j1();n&&n.postMessage({key:e,fid:t}),F1()}let Xt=null;function j1(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{zp(e.data.key,e.data.fid)}),Xt}function F1(){Fp.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebase-installations-database",z1=1,fn="firebase-installations-store";let Ms=null;function tu(){return Ms||(Ms=Hh(b1,z1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}})),Ms}async function Co(e,t){const n=Yo(e),i=(await tu()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&bp(e,t.fid),t}async function $p(e){const t=Yo(e),r=(await tu()).transaction(fn,"readwrite");await r.objectStore(fn).delete(t),await r.done}async function Jo(e,t){const n=Yo(e),i=(await tu()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&bp(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(e){let t;const n=await Jo(e.appConfig,r=>{const i=$1(r),o=B1(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Va?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function $1(e){const t=e||{fid:D1(),registrationStatus:0};return Bp(t)}function B1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=V1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:H1(e)}:{installationEntry:t}}async function V1(e,t){try{const n=await O1(e,t);return Co(e.appConfig,n)}catch(n){throw Op(n)&&n.customData.serverCode===409?await $p(e.appConfig):await Co(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function H1(e){let t=await Jc(e.appConfig);for(;t.registrationStatus===1;)await jp(100),t=await Jc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nu(e);return r||n}return t}function Jc(e){return Jo(e,t=>{if(!t)throw dn.create("installation-not-found");return Bp(t)})}function Bp(e){return W1(e)?{fid:e.fid,registrationStatus:0}:e}function W1(e){return e.registrationStatus===1&&e.registrationTime+Rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1({appConfig:e,heartbeatServiceProvider:t},n){const r=G1(e,n),i=R1(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Np,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Up(()=>fetch(r,a));if(l.ok){const u=await l.json();return Lp(u)}else throw await Dp("Generate Auth Token",l)}function G1(e,{fid:t}){return`${Ap(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(e,t=!1){let n;const r=await Jo(e.appConfig,o=>{if(!Vp(o))throw dn.create("not-registered");const s=o.authToken;if(!t&&Y1(s))return o;if(s.requestStatus===1)return n=q1(e,t),o;{if(!navigator.onLine)throw dn.create("app-offline");const a=X1(o);return n=Q1(e,a),a}});return n?await n:r.authToken}async function q1(e,t){let n=await Xc(e.appConfig);for(;n.authToken.requestStatus===1;)await jp(100),n=await Xc(e.appConfig);const r=n.authToken;return r.requestStatus===0?ru(e,t):r}function Xc(e){return Jo(e,t=>{if(!Vp(t))throw dn.create("not-registered");const n=t.authToken;return Z1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Q1(e,t){try{const n=await K1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Co(e.appConfig,r),n}catch(n){if(Op(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $p(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Co(e.appConfig,r)}throw n}}function Vp(e){return e!==void 0&&e.registrationStatus===2}function Y1(e){return e.requestStatus===2&&!J1(e)}function J1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+k1}function X1(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Z1(e){return e.requestStatus===1&&e.requestTime+Rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e){const t=e,{installationEntry:n,registrationPromise:r}=await nu(t);return r?r.catch(console.error):ru(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(e,t=!1){const n=e;return await nE(n),(await ru(n,t)).token}async function nE(e){const{registrationPromise:t}=await nu(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(e){if(!e||!e.options)throw Us("App Configuration");if(!e.name)throw Us("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Us(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Us(e){return dn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="installations",iE="installations-internal",oE=e=>{const t=e.getProvider("app").getImmediate(),n=rE(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sE=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Hp).getImmediate();return{getId:()=>eE(n),getToken:i=>tE(n,i)}};function aE(){ct(new Je(Hp,oE,"PUBLIC")),ct(new Je(iE,sE,"PRIVATE"))}aE();qe(Pp,eu);qe(Pp,eu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="analytics",lE="firebase_id",uE="origin",cE=60*1e3,dE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",iu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new vn("analytics","Analytics",fE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(e){if(!e.startsWith(iu)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function Wp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function pE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function mE(e,t){const n=pE("firebase-js-sdk-policy",{createScriptURL:hE}),r=document.createElement("script"),i=`${iu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function gE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function vE(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Wp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,o)}async function yE(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Wp(n);for(const l of s){const u=a.find(f=>f.measurementId===l),d=u&&t[u.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){we.error(o)}}function wE(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await yE(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await vE(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){we.error(a)}}return i}function _E(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=wE(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function EE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(iu)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=30,IE=1e3;class kE{constructor(t={},n=IE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kp=new kE;function TE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function CE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:TE(r)},o=dE.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function PE(e,t=Kp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ie.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new xE;return setTimeout(async()=>{a.abort()},n!==void 0?n:cE),Gp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Gp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Kp){var o;const{appId:s,measurementId:a}=e;try{await RE(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await CE(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!NE(u)){if(i.deleteThrottleMetadata(s),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const d=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Tc(n,i.intervalMillis,SE):Tc(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,f),we.debug(`Calling attemptFetch again in ${d} millis`),Gp(e,f,r,i)}}function RE(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function NE(e){if(!(e instanceof Xe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class xE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function OE(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(){if(zh())try{await $h()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LE(e,t,n,r,i,o,s){var a;const l=PE(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>we.error(g)),t.push(l);const u=AE().then(g=>{if(g)return r.getId()}),[d,f]=await Promise.all([l,u]);EE(o)||mE(o,d.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[uE]="firebase",m.update=!0,f!=null&&(m[lE]=f),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t){this.app=t}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},Zc=[];const ed={};let js="dataLayer",ME="gtag",td,qp,nd=!1;function UE(){const e=[];if(bh()&&e.push("This is a browser extension environment."),$y()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function jE(e,t,n){UE();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Pr[r]!=null)throw Ie.create("already-exists",{id:r});if(!nd){gE(js);const{wrappedGtag:o,gtagCore:s}=_E(Pr,Zc,ed,js,ME);qp=o,td=s,nd=!0}return Pr[r]=LE(e,Zc,ed,t,td,js,n),new DE(e)}function FE(e=Kh()){e=Be(e);const t=Xn(e,Po);return t.isInitialized()?t.getImmediate():bE(e)}function bE(e,t={}){const n=Xn(e,Po);if(n.isInitialized()){const i=n.getImmediate();if(Gr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function zE(e,t,n,r){e=Be(e),OE(qp,Pr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const rd="@firebase/analytics",id="0.10.1";function $E(){ct(new Je(Po,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return jE(r,i,n)},"PUBLIC")),ct(new Je("analytics-internal",e,"PRIVATE")),qe(rd,id),qe(rd,id,"esm2017");function e(t){try{const n=t.getProvider(Po).getImmediate();return{logEvent:(r,i,o)=>zE(n,r,i,o)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}$E();const BE={apiKey:"AIzaSyCKHkf6o8L9E5u1YjdvAoJqBzZAYufhGSs",authDomain:"rc-tutors-f8841.firebaseapp.com",projectId:"rc-tutors-f8841",storageBucket:"rc-tutors-f8841.appspot.com",messagingSenderId:"1004513724315",appId:"1:1004513724315:web:0dc1bae8526751e043433e",measurementId:"G-TTW1GP930T"},Qp=Wh(BE);FE(Qp);const gr=w1(Qp);function VE(){const e=zl(),[t,n]=k.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),[r,i]=k.useState(!1),[o,s]=k.useState(null),a=u=>{const{name:d,value:f}=u.target;n({...t,[d]:f})},l=u=>{if(u.preventDefault(),t.password!==t.confirmPassword){s("Passwords do not match.");return}i(!0),s(null),gp(gr,t.email,t.password).then(d=>{console.log("User registered:",d.user),e("/logi"),i(!1)}).catch(d=>{console.error("Error registering:",d),s(d.message),i(!1)})};return v.jsxs("div",{className:"vh-90",children:[v.jsx("div",{className:"container-fluid h-custom mb-2 mt-3",children:v.jsxs("div",{className:"row d-flex justify-content-center align-items-center h-100",children:[v.jsx("div",{className:"col-md-9 col-lg-6 col-xl-5",children:v.jsx("img",{src:Ry,alt:"login_img",className:"img-fluid"})}),v.jsx("div",{className:"col-md-8 col-lg-6 col-xl-4 offset-xl-1",children:v.jsxs("form",{onSubmit:l,children:[v.jsxs("div",{className:"d-flex flex-row align-items-center justify-content-center justify-content-lg-start",children:[v.jsx("div",{children:v.jsx("img",{src:Ah,alt:"iie-logo",className:"img-fluid"})}),v.jsx("div",{className:"ms-3",children:v.jsx("img",{src:$l,alt:"rc-logo",className:"img-fluid"})})]}),v.jsx("div",{className:"divider d-flex align-items-center my-4",children:v.jsx("p",{className:"text-center fw-bold mx-3 mb-0",children:"Register"})}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"firstName",children:"First Name"}),v.jsx("input",{type:"text",id:"firstName",name:"firstName",value:t.firstName,onChange:a,className:"form-control"})]}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"lastName",children:"Surname"}),v.jsx("input",{type:"text",id:"lastName",name:"lastName",value:t.lastName,onChange:a,className:"form-control"})]}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"email",children:"Email address"}),v.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a,className:"form-control",placeholder:"use school email"})]}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"password",children:"Password"}),v.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:a,className:"form-control"})]}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),v.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:t.confirmPassword,onChange:a,className:"form-control"})]}),v.jsxs("div",{className:"text-center text-lg-start mb-4",children:[v.jsx("button",{type:"submit",className:"btn btn-danger",style:{paddingLeft:"2.5rem",paddingRight:"2.5rem"},children:"Register"}),v.jsxs("p",{className:"small fw-bold pt-1 mb-0",children:["Already have an account? ",v.jsx(Da,{to:"/login",children:"Login"})]})]})]})})]})}),v.jsx("div",{className:"d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger",children:v.jsx("div",{className:"text-white mb-3 mb-md-0",children:"Copyright © 2020. All rights reserved."})}),o&&v.jsx("div",{className:"alert alert-danger",role:"alert",children:o})]})}var Yp={exports:{}},HE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WE=HE,KE=WE;function Jp(){}function Xp(){}Xp.resetWarningCache=Jp;var GE=function(){function e(r,i,o,s,a,l){if(l!==KE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xp,resetWarningCache:Jp};return n.PropTypes=n,n};Yp.exports=GE();var qE=Yp.exports;const QE=od(qE),Zp=k.createContext(null),em=({children:e})=>{const[t,n]=k.useState(null),[r,i]=k.useState(!0),o=(u,d)=>(i(!0),gp(gr,u,d)),s=(u,d)=>(i(!0),r_(gr,u,d)),a=()=>(i(!0),a_(gr));k.useEffect(()=>{const u=s_(gr,d=>{n(d),i(!1)});return()=>{u()}},[]);const l={createUser:o,user:t,loginUser:s,logOut:a,loading:r};return v.jsx(Zp.Provider,{value:l,children:e})};em.propTypes={children:QE.node.isRequired};function YE(){const e=zl(),[t,n]=k.useState({email:"",password:""}),{loginUser:r}=k.useContext(Zp),i=s=>{const{name:a,value:l}=s.target;n({...t,[a]:l})},o=async s=>{s.preventDefault();try{await r(t.email,t.password),console.log("Signed in"),e("/home")}catch(a){console.error("Login failed:",a)}};return v.jsxs("section",{className:"vh-90",children:[v.jsxs("div",{className:" h-custom mt-5",children:[v.jsx("div",{}),v.jsxs("div",{className:"row d-flex flex-row flex-wrap  justify-content-center align-items-center h-100",children:[v.jsx("img",{src:loginImage,alt:"login_img",className:"img-fluid"}),v.jsx("div",{className:"col-md-8 col-lg-6 col-xl-4 offset-xl-1",children:v.jsxs("form",{onSubmit:o,children:[v.jsxs("div",{className:"d-flex flex-row flex-wrap  align-items-center justify-content-center justify-content-lg-start",children:[v.jsx("div",{children:v.jsx("img",{src:Ah,alt:"iie-logo",className:"w-20 h-17"})}),v.jsx("div",{className:"ms-3",children:v.jsx("img",{src:$l,alt:"rc-logo",className:"w-20 h-17"})})]}),v.jsx("div",{className:"divider d-flex align-items-center my-4",children:v.jsx("p",{className:"text-center fw-bold mx-3 mb-0",children:"Login"})}),v.jsx("div",{className:"text-center text-lg-start mt-1",children:v.jsx("p",{className:"small fw-bold mt-2 pt-1 mb-3",children:" Sign in with your organizational account"})}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"email",children:"Email address"}),v.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:i,className:"form-control"})]}),v.jsxs("div",{className:"form-outline mb-1",children:[v.jsx("label",{htmlFor:"password",children:"Password"}),v.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:i,className:"form-control"})]}),v.jsxs("div",{className:"text-center text-lg-start mt-4 pt-2",children:[v.jsx("button",{type:"submit",className:"btn btn-danger",style:{paddingLeft:"2.5rem",paddingRight:"2.5rem"},children:"Login"}),v.jsxs("p",{className:"small fw-bold mt-2 pt-1 mb-5",children:["Don't have an account? ",v.jsx(Da,{to:"/",children:"Register"}),v.jsxs("p",{children:["Try going here ",v.jsx(Da,{to:"src\\pages\\home\\Homepage",children:"Homepage"})," "]})]})]})]})})]})]}),v.jsx("div",{className:"d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger position-fixed-bottom",children:v.jsx("div",{className:"text-white mb-3 mb-md-0",children:"Copyright © 2020. All rights reserved."})})]})}const JE="/rc-tutors/assets/user-Dmrpev-u.png",XE="/rc-tutors/assets/teacher-CKId1KmK.png",ZE="/rc-tutors/assets/world-g-yCYWs-.png",eS="/rc-tutors/assets/message-Bm1Bl0nq.png",tS=()=>{const[e,t]=k.useState(!0),n=()=>{t(!e)},r=()=>{t(!1)};return v.jsxs(v.Fragment,{children:[e&&v.jsx("div",{className:"bg-red-600 text-white h-screen w-1/9 fixed top-0 left-0 pr-6",children:v.jsxs("div",{className:"flex flex-col h-full justify-between",children:[v.jsxs("div",{children:[v.jsx("div",{className:"p-4",children:v.jsx("img",{src:$l,alt:"rc-logo",className:"bob"})}),v.jsxs("ul",{children:[v.jsxs("li",{className:"mb-2 flex items-center p-1",children:[v.jsx("img",{src:JE,alt:"icon1",className:"w-7 h-7 mr-2"}),v.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"profile"})]}),v.jsxs("li",{className:"mb-2 flex items-center p-1",children:[v.jsx("img",{src:XE,alt:"icon2",className:"w-7 h-7 mr-2"}),v.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"tutors"})]}),v.jsxs("li",{className:"mb-2 flex items-center p-1",children:[v.jsx("img",{src:ZE,alt:"icon2",className:"w-7 h-7 mr-2"}),v.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"Activity stream"})]}),v.jsxs("li",{className:"mb-2 flex items-center p-1",children:[v.jsx("img",{src:eS,alt:"icon2",className:"w-7 h-7 mr-2"}),v.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"chat"})]})]})]}),v.jsx("div",{className:"pb-4 pl-3 pr-3",children:v.jsx("button",{onClick:r,className:"bg-white text-red-500 font- px-4 py-2 rounded-md w-full",children:"Sign Out"})})]})}),!e&&v.jsx("div",{className:"fixed top-0 left-0 pr-6",children:v.jsx("button",{onClick:n,className:"bg-red-500 text-white p-2 rounded-sm",children:"☰"})})]})},nS=()=>v.jsxs("div",{children:[v.jsx("div",{children:"Activity Stream"}),v.jsxs("div",{children:[v.jsx(tS,{}),v.jsx("div",{children:v.jsx("h1",{children:"Activity"})})]})]});function rS(){return v.jsx(ky,{basename:"rc-tutors",children:v.jsx(em,{children:v.jsxs(vy,{children:[v.jsx(Bi,{path:"/",element:v.jsx(VE,{})}),v.jsx(Bi,{path:"/login",element:v.jsx(YE,{})}),v.jsx(Bi,{path:"/home",element:v.jsx(nS,{})})]})})})}Fs.createRoot(document.getElementById("root")).render(v.jsx(md.StrictMode,{children:v.jsx(rS,{})}));
