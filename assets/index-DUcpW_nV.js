function im(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var od={exports:{}},Ps={},ad={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),sm=Symbol.for("react.portal"),om=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),lm=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),fm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),pm=Symbol.for("react.lazy"),ou=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,cd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ld}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=qn.prototype;function Ha(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ld}var Wa=Ha.prototype=new dd;Wa.constructor=Ha;ud(Wa,qn.prototype);Wa.isPureReactComponent=!0;var au=Array.isArray,fd=Object.prototype.hasOwnProperty,Ka={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)fd.call(t,r)&&!hd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xr,type:e,key:s,ref:o,props:i,_owner:Ka.current}}function gm(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lu=/\/+/g;function eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vm(""+e.key):t.toString(36)}function xi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xr:case sm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+eo(o,0):r,au(i)?(n="",e!=null&&(n=e.replace(lu,"$&/")+"/"),xi(i,t,n,"",function(u){return u})):i!=null&&(Ga(i)&&(i=gm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",au(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+eo(s,a);o+=xi(s,t,n,l,i)}else if(l=mm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+eo(s,a++),o+=xi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fi(e,t,n){if(e==null)return e;var r=[],i=0;return xi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Oi={transition:null},wm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:Ka};D.Children={map:fi,forEach:function(e,t,n){fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=qn;D.Fragment=om;D.Profiler=lm;D.PureComponent=Ha;D.StrictMode=am;D.Suspense=fm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ud({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ka.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)fd.call(t,l)&&!hd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:um,_context:e},e.Consumer=e};D.createElement=pd;D.createFactory=function(e){var t=pd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:dm,render:e}};D.isValidElement=Ga;D.lazy=function(e){return{$$typeof:pm,_payload:{_status:-1,_result:e},_init:ym}};D.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.2.0";ad.exports=D;var k=ad.exports;const md=sd(k),_m=im({__proto__:null,default:md},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=k,Sm=Symbol.for("react.element"),Im=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Tm=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cm={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)km.call(t,r)&&!Cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sm,type:e,key:s,ref:o,props:i,_owner:Tm.current}}Ps.Fragment=Im;Ps.jsx=gd;Ps.jsxs=gd;od.exports=Ps;var g=od.exports,Fo={},vd={exports:{}},Te={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,ci=Z>>>1;G<ci;){var Ht=2*(G+1)-1,Zs=C[Ht],Wt=Ht+1,di=C[Wt];if(0>i(Zs,A))Wt<Z&&0>i(di,Zs)?(C[G]=di,C[Wt]=A,G=Wt):(C[G]=Zs,C[Ht]=A,G=Ht);else if(Wt<Z&&0>i(di,A))C[G]=di,C[Wt]=A,G=Wt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,w=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(C){if(_=!1,p(C),!w)if(n(l)!==null)w=!0,Js(S);else{var O=n(u);O!==null&&Xs(y,O.startTime-C)}}function S(C,O){w=!1,_&&(_=!1,h(N),N=-1),v=!0;var A=m;try{for(p(O),f=n(l);f!==null&&(!(f.expirationTime>O)||C&&!Le());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var Z=G(f.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&r(l),p(O)}else r(l);f=n(l)}if(f!==null)var ci=!0;else{var Ht=n(u);Ht!==null&&Xs(y,Ht.startTime-O),ci=!1}return ci}finally{f=null,m=A,v=!1}}var P=!1,R=null,N=-1,b=5,L=-1;function Le(){return!(e.unstable_now()-L<b)}function er(){if(R!==null){var C=e.unstable_now();L=C;var O=!0;try{O=R(!0,C)}finally{O?tr():(P=!1,R=null)}}else P=!1}var tr;if(typeof c=="function")tr=function(){c(er)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,rm=su.port2;su.port1.onmessage=er,tr=function(){rm.postMessage(null)}}else tr=function(){I(er,0)};function Js(C){R=C,P||(P=!0,tr())}function Xs(C,O){N=I(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Js(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return C()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=m;m=C;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:d++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Xs(y,A-G))):(C.sortIndex=Z,t(l,C),w||v||(w=!0,Js(S))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=m;return function(){var A=m;m=O;try{return C.apply(this,arguments)}finally{m=A}}}})(wd);yd.exports=wd;var Pm=yd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=k,ke=Pm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Rr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Ed.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function Nm(e){return bo.call(cu,e)?!0:bo.call(uu,e)?!1:Rm.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Om(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qa,Qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Om(t,n,i,r)&&(n=null),r||i===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),_n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),kd=Symbol.for("react.offscreen"),du=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,to;function cr(e){if(to===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);to=t&&t[1]||""}return`
`+to+e}var no=!1;function ro(e,t){if(!e||no)return"";no=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{no=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function Am(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=ro(e.type,!1),e;case 11:return e=ro(e.type.render,!1),e;case 1:return e=ro(e.type,!0),e;default:return""}}function Vo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case _n:return"Portal";case zo:return"Profiler";case Ja:return"StrictMode";case $o:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Vo(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Vo(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vo(t);case 8:return t===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dm(e){var t=Td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pi(e){e._valueTracker||(e._valueTracker=Dm(e))}function Cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pd(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Wo(e,t){Pd(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ko(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ko(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(dr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Rd(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(jm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Dn=null,Mn=null;function gu(e){if(e=ti(e)){if(typeof Xo!="function")throw Error(E(280));var t=e.stateNode;t&&(t=As(t),Xo(e.stateNode,e.type,t))}}function Ld(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function Dd(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Md(e,t){return e(t)}function jd(){}var io=!1;function Ud(e,t,n){if(io)return e(t,n);io=!0;try{return Md(e,t,n)}finally{io=!1,(Dn!==null||Mn!==null)&&(jd(),Dd())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Zo=!1;if(ot)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Zo=!1}function Um(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yr=!1,qi=null,Qi=!1,ea=null,Fm={onError:function(e){yr=!0,qi=e}};function bm(e,t,n,r,i,s,o,a,l){yr=!1,qi=null,Um.apply(Fm,arguments)}function zm(e,t,n,r,i,s,o,a,l){if(bm.apply(this,arguments),yr){if(yr){var u=qi;yr=!1,qi=null}else throw Error(E(198));Qi||(Qi=!0,ea=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(pn(e)!==e)throw Error(E(188))}function $m(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vu(i),e;if(s===r)return vu(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function bd(e){return e=$m(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var $d=ke.unstable_scheduleCallback,yu=ke.unstable_cancelCallback,Bm=ke.unstable_shouldYield,Vm=ke.unstable_requestPaint,q=ke.unstable_now,Hm=ke.unstable_getCurrentPriorityLevel,tl=ke.unstable_ImmediatePriority,Bd=ke.unstable_UserBlockingPriority,Yi=ke.unstable_NormalPriority,Wm=ke.unstable_LowPriority,Vd=ke.unstable_IdlePriority,Rs=null,Ke=null;function Km(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Rs,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Qm,Gm=Math.log,qm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Gm(e)/qm|0)|0}var gi=64,vi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fr(a):(s&=o,s!==0&&(r=fr(s)))}else o=n&~i,o!==0?r=fr(o):s!==0&&(r=fr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Fe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ym(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Xm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function Wd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,rl,Gd,qd,Qd,na=!1,yi=[],Ct=null,Pt=null,Rt=null,Or=new Map,Ar=new Map,vt=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function ir(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function eg(e,t,n,r,i){switch(t){case"focusin":return Ct=ir(Ct,e,t,n,r,i),!0;case"dragenter":return Pt=ir(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=ir(Rt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Or.set(s,ir(Or.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ar.set(s,ir(Ar.get(s)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fd(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jo=r,n.target.dispatchEvent(r),Jo=null}else return t=ti(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function _u(e,t,n){Ai(e)&&n.delete(t)}function tg(){na=!1,Ct!==null&&Ai(Ct)&&(Ct=null),Pt!==null&&Ai(Pt)&&(Pt=null),Rt!==null&&Ai(Rt)&&(Rt=null),Or.forEach(_u),Ar.forEach(_u)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,tg)))}function Lr(e){function t(i){return sr(i,e)}if(0<yi.length){sr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&sr(Ct,e),Pt!==null&&sr(Pt,e),Rt!==null&&sr(Rt,e),Or.forEach(t),Ar.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&vt.shift()}var jn=ft.ReactCurrentBatchConfig,Xi=!0;function ng(e,t,n,r){var i=j,s=jn.transition;jn.transition=null;try{j=1,il(e,t,n,r)}finally{j=i,jn.transition=s}}function rg(e,t,n,r){var i=j,s=jn.transition;jn.transition=null;try{j=4,il(e,t,n,r)}finally{j=i,jn.transition=s}}function il(e,t,n,r){if(Xi){var i=ra(e,t,n,r);if(i===null)go(e,t,r,Zi,n),wu(e,r);else if(eg(i,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<Zm.indexOf(e)){for(;i!==null;){var s=ti(i);if(s!==null&&Kd(s),s=ra(e,t,n,r),s===null&&go(e,t,r,Zi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else go(e,t,r,null,n)}}var Zi=null;function ra(e,t,n,r){if(Zi=null,e=el(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function Jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hm()){case tl:return 1;case Bd:return 4;case Yi:case Wm:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var It=null,sl=null,Li=null;function Xd(){if(Li)return Li;var e,t=sl,n=t.length,r,i="value"in It?It.value:It.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Eu(){return!1}function Ce(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wi:Eu,this.isPropagationStopped=Eu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Ce(Qn),ei=W({},Qn,{view:0,detail:0}),ig=Ce(ei),oo,ao,or,Ns=W({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(oo=e.screenX-or.screenX,ao=e.screenY-or.screenY):ao=oo=0,or=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),Su=Ce(Ns),sg=W({},Ns,{dataTransfer:0}),og=Ce(sg),ag=W({},ei,{relatedTarget:0}),lo=Ce(ag),lg=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Ce(lg),cg=W({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dg=Ce(cg),fg=W({},Qn,{data:0}),Iu=Ce(fg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mg[e])?!!t[e]:!1}function al(){return gg}var vg=W({},ei,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yg=Ce(vg),wg=W({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Ce(wg),_g=W({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Eg=Ce(_g),Sg=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Ce(Sg),kg=W({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=Ce(kg),Cg=[9,13,27,32],ll=ot&&"CompositionEvent"in window,wr=null;ot&&"documentMode"in document&&(wr=document.documentMode);var Pg=ot&&"TextEvent"in window&&!wr,Zd=ot&&(!ll||wr&&8<wr&&11>=wr),Tu=" ",Cu=!1;function ef(e,t){switch(e){case"keyup":return Cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Rg(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(Cu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Cu?null:e;default:return null}}function Ng(e,t){if(Sn)return e==="compositionend"||!ll&&ef(e,t)?(e=Xd(),Li=sl=It=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zd&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function nf(e,t,n,r){Ld(r),t=es(t,"onChange"),0<t.length&&(n=new ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Dr=null;function Og(e){pf(e,0)}function xs(e){var t=Tn(e);if(Cd(t))return e}function Ag(e,t){if(e==="change")return t}var rf=!1;if(ot){var uo;if(ot){var co="oninput"in document;if(!co){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),co=typeof Ru.oninput=="function"}uo=co}else uo=!1;rf=uo&&(!document.documentMode||9<document.documentMode)}function Nu(){_r&&(_r.detachEvent("onpropertychange",sf),Dr=_r=null)}function sf(e){if(e.propertyName==="value"&&xs(Dr)){var t=[];nf(t,Dr,e,el(e)),Ud(Og,t)}}function Lg(e,t,n){e==="focusin"?(Nu(),_r=t,Dr=n,_r.attachEvent("onpropertychange",sf)):e==="focusout"&&Nu()}function Dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(Dr)}function Mg(e,t){if(e==="click")return xs(t)}function jg(e,t){if(e==="input"||e==="change")return xs(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Ug;function Mr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bo.call(t,i)||!ze(e[i],t[i]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fg(e){var t=af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&of(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ou(n,s);var o=Ou(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bg=ot&&"documentMode"in document&&11>=document.documentMode,In=null,ia=null,Er=null,sa=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sa||In==null||In!==Gi(r)||(r=In,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Mr(Er,r)||(Er=r,r=es(ia,"onSelect"),0<r.length&&(t=new ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},fo={},lf={};ot&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Os(e){if(fo[e])return fo[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return fo[e]=t[n];return e}var uf=Os("animationend"),cf=Os("animationiteration"),df=Os("animationstart"),ff=Os("transitionend"),hf=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){hf.set(e,t),hn(t,[e])}for(var ho=0;ho<Lu.length;ho++){var po=Lu[ho],zg=po.toLowerCase(),$g=po[0].toUpperCase()+po.slice(1);bt(zg,"on"+$g)}bt(uf,"onAnimationEnd");bt(cf,"onAnimationIteration");bt(df,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(ff,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Du(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Du(i,a,u),s=l}}}if(Qi)throw e=ea,Qi=!1,ea=null,e}function z(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(mf(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),mf(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Ei]){e[Ei]=!0,Ed.forEach(function(n){n!=="selectionchange"&&(Bg.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,mo("selectionchange",!1,t))}}function mf(e,t,n,r){switch(Jd(t)){case 1:var i=ng;break;case 4:i=rg;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!Zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function go(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ud(function(){var u=s,d=el(n),f=[];e:{var m=hf.get(e);if(m!==void 0){var v=ol,w=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":v=yg;break;case"focusin":w="focus",v=lo;break;case"focusout":w="blur",v=lo;break;case"beforeblur":case"afterblur":v=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Eg;break;case uf:case cf:case df:v=ug;break;case ff:v=Ig;break;case"scroll":v=ig;break;case"wheel":v=Tg;break;case"copy":case"cut":case"paste":v=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ku}var _=(t&4)!==0,I=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=xr(c,h),y!=null&&_.push(Ur(c,y,p)))),I)break;c=c.return}0<_.length&&(m=new v(m,w,null,n,d),f.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Jo&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[at]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Qt(w):null,w!==null&&(I=pn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=Su,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=ku,y="onPointerLeave",h="onPointerEnter",c="pointer"),I=v==null?m:Tn(v),p=w==null?m:Tn(w),m=new _(y,c+"leave",v,n,d),m.target=I,m.relatedTarget=p,y=null,Qt(d)===u&&(_=new _(h,c+"enter",w,n,d),_.target=p,_.relatedTarget=I,y=_),I=y,v&&w)t:{for(_=v,h=w,c=0,p=_;p;p=wn(p))c++;for(p=0,y=h;y;y=wn(y))p++;for(;0<c-p;)_=wn(_),c--;for(;0<p-c;)h=wn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=wn(_),h=wn(h)}_=null}else _=null;v!==null&&Mu(f,m,v,_,!1),w!==null&&I!==null&&Mu(f,I,w,_,!0)}}e:{if(m=u?Tn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Ag;else if(Pu(m))if(rf)S=jg;else{S=Dg;var P=Lg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Mg);if(S&&(S=S(e,u))){nf(f,S,n,d);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ko(m,"number",m.value)}switch(P=u?Tn(u):window,e){case"focusin":(Pu(P)||P.contentEditable==="true")&&(In=P,ia=u,Er=null);break;case"focusout":Er=ia=In=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,Au(f,n,d);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":Au(f,n,d)}var R;if(ll)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Sn?ef(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Zd&&n.locale!=="ko"&&(Sn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Sn&&(R=Xd()):(It=d,sl="value"in It?It.value:It.textContent,Sn=!0)),P=es(u,N),0<P.length&&(N=new Iu(N,e,null,n,d),f.push({event:N,listeners:P}),R?N.data=R:(R=tf(n),R!==null&&(N.data=R)))),(R=Pg?Rg(e,n):Ng(e,n))&&(u=es(u,"onBeforeInput"),0<u.length&&(d=new Iu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}pf(f,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function es(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xr(e,n),s!=null&&r.unshift(Ur(e,s,i)),s=xr(e,t),s!=null&&r.push(Ur(e,s,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xr(n,s),l!=null&&o.unshift(Ur(n,l,a))):i||(l=xr(n,s),l!=null&&o.push(Ur(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Vg=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Vg,`
`).replace(Hg,"")}function Si(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(E(425))}function ts(){}var oa=null,aa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(Gg)}:ua;function Gg(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),We="__reactFiber$"+Yn,Fr="__reactProps$"+Yn,at="__reactContainer$"+Yn,ca="__reactEvents$"+Yn,qg="__reactListeners$"+Yn,Qg="__reactHandles$"+Yn;function Qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[We])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[We]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function As(e){return e[Fr]||null}var da=[],Cn=-1;function zt(e){return{current:e}}function $(e){0>Cn||(e.current=da[Cn],da[Cn]=null,Cn--)}function F(e,t){Cn++,da[Cn]=e.current,e.current=t}var Ft={},le=zt(Ft),ge=zt(!1),nn=Ft;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function ns(){$(ge),$(le)}function bu(e,t,n){if(le.current!==Ft)throw Error(E(168));F(le,t),F(ge,n)}function gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Lm(e)||"Unknown",i));return W({},n,r)}function rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,nn=le.current,F(le,e),F(ge,ge.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=gf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(le),F(le,e)):$(ge),F(ge,n)}var et=null,Ls=!1,yo=!1;function vf(e){et===null?et=[e]:et.push(e)}function Yg(e){Ls=!0,vf(e)}function $t(){if(!yo&&et!==null){yo=!0;var e=0,t=j;try{var n=et;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Ls=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),$d(tl,$t),i}finally{j=t,yo=!1}}return null}var Pn=[],Rn=0,is=null,ss=0,Pe=[],Re=0,rn=null,tt=1,nt="";function Kt(e,t){Pn[Rn++]=ss,Pn[Rn++]=is,is=e,ss=t}function yf(e,t,n){Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=rn,rn=e;var r=tt;e=nt;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var s=32-Fe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tt=1<<32-Fe(t)+i|n<<i|r,nt=s+e}else tt=1<<s|n<<i|r,nt=e}function cl(e){e.return!==null&&(Kt(e,1),yf(e,1,0))}function dl(e){for(;e===is;)is=Pn[--Rn],Pn[Rn]=null,ss=Pn[--Rn],Pn[Rn]=null;for(;e===rn;)rn=Pe[--Re],Pe[Re]=null,nt=Pe[--Re],Pe[Re]=null,tt=Pe[--Re],Pe[Re]=null}var Se=null,Ee=null,B=!1,Ue=null;function wf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(B){var t=Ee;if(t){var n=t;if(!$u(e,t)){if(fa(e))throw Error(E(418));t=Nt(n.nextSibling);var r=Se;t&&$u(e,t)?wf(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(fa(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ii(e){if(e!==Se)return!1;if(!B)return Bu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Ee)){if(fa(e))throw _f(),Error(E(418));for(;t;)wf(e,t),t=Nt(t.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?Nt(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=Ee;e;)e=Nt(e.nextSibling)}function Vn(){Ee=Se=null,B=!1}function fl(e){Ue===null?Ue=[e]:Ue.push(e)}var Jg=ft.ReactCurrentBatchConfig;function Me(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var os=zt(null),as=null,Nn=null,hl=null;function pl(){hl=Nn=as=null}function ml(e){var t=os.current;$(os),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){as=e,hl=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(as===null)throw Error(E(308));Nn=e,as.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Yt=null;function gl(e){Yt===null?Yt=[e]:Yt.push(e)}function Ef(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}function Vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,r){var i=e.updateQueue;gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=W({},f,m);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=f}}function Hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var If=new _d.Component().refs;function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),s=st(r,i);s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),s=st(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,i),t!==null&&(be(t,e,i,r),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=At(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(be(t,e,r,n),Mi(t,e,r))}};function Wu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,s):!0}function kf(e,t,n){var r=!1,i=Ft,s=t.contextType;return typeof s=="object"&&s!==null?s=Oe(s):(i=ve(t)?nn:le.current,r=t.contextTypes,s=(r=r!=null)?Bn(e,i):Ft),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ds,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=If,vl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Oe(s):(s=ve(t)?nn:le.current,i.context=Bn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ma(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ds.enqueueReplaceState(i,i.state,null),ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===If&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function Tf(e){function t(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Lt(h,c),h.index=0,h.sibling=null,h}function s(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,y){return c===null||c.tag!==6?(c=To(p,h.mode,y),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,y){var S=p.type;return S===En?d(h,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&Gu(S)===c.type)?(y=i(c,p.props),y.ref=ar(h,c,p),y.return=h,y):(y=$i(p.type,p.key,p.props,null,h.mode,y),y.ref=ar(h,c,p),y.return=h,y)}function u(h,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Co(p,h.mode,y),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,y,S){return c===null||c.tag!==7?(c=en(p,h.mode,y,S),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=To(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hi:return p=$i(c.type,c.key,c.props,null,h.mode,p),p.ref=ar(h,null,c),p.return=h,p;case _n:return c=Co(c,h.mode,p),c.return=h,c;case mt:var y=c._init;return f(h,y(c._payload),p)}if(dr(c)||nr(c))return c=en(c,h.mode,p,null),c.return=h,c;ki(h,c)}return null}function m(h,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(h,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:return p.key===S?l(h,c,p,y):null;case _n:return p.key===S?u(h,c,p,y):null;case mt:return S=p._init,m(h,c,S(p._payload),y)}if(dr(p)||nr(p))return S!==null?null:d(h,c,p,y,null);ki(h,p)}return null}function v(h,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(c,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:return h=h.get(y.key===null?p:y.key)||null,l(c,h,y,S);case _n:return h=h.get(y.key===null?p:y.key)||null,u(c,h,y,S);case mt:var P=y._init;return v(h,c,p,P(y._payload),S)}if(dr(y)||nr(y))return h=h.get(p)||null,d(c,h,y,S,null);ki(c,y)}return null}function w(h,c,p,y){for(var S=null,P=null,R=c,N=c=0,b=null;R!==null&&N<p.length;N++){R.index>N?(b=R,R=null):b=R.sibling;var L=m(h,R,p[N],y);if(L===null){R===null&&(R=b);break}e&&R&&L.alternate===null&&t(h,R),c=s(L,c,N),P===null?S=L:P.sibling=L,P=L,R=b}if(N===p.length)return n(h,R),B&&Kt(h,N),S;if(R===null){for(;N<p.length;N++)R=f(h,p[N],y),R!==null&&(c=s(R,c,N),P===null?S=R:P.sibling=R,P=R);return B&&Kt(h,N),S}for(R=r(h,R);N<p.length;N++)b=v(R,h,N,p[N],y),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?N:b.key),c=s(b,c,N),P===null?S=b:P.sibling=b,P=b);return e&&R.forEach(function(Le){return t(h,Le)}),B&&Kt(h,N),S}function _(h,c,p,y){var S=nr(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var P=S=null,R=c,N=c=0,b=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(b=R,R=null):b=R.sibling;var Le=m(h,R,L.value,y);if(Le===null){R===null&&(R=b);break}e&&R&&Le.alternate===null&&t(h,R),c=s(Le,c,N),P===null?S=Le:P.sibling=Le,P=Le,R=b}if(L.done)return n(h,R),B&&Kt(h,N),S;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,y),L!==null&&(c=s(L,c,N),P===null?S=L:P.sibling=L,P=L);return B&&Kt(h,N),S}for(R=r(h,R);!L.done;N++,L=p.next())L=v(R,h,N,L.value,y),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=s(L,c,N),P===null?S=L:P.sibling=L,P=L);return e&&R.forEach(function(er){return t(h,er)}),B&&Kt(h,N),S}function I(h,c,p,y){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===En){if(P.tag===7){n(h,P.sibling),c=i(P,p.props.children),c.return=h,h=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&Gu(S)===P.type){n(h,P.sibling),c=i(P,p.props),c.ref=ar(h,P,p),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}p.type===En?(c=en(p.props.children,h.mode,y,p.key),c.return=h,h=c):(y=$i(p.type,p.key,p.props,null,h.mode,y),y.ref=ar(h,c,p),y.return=h,h=y)}return o(h);case _n:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Co(p,h.mode,y),c.return=h,h=c}return o(h);case mt:return P=p._init,I(h,c,P(p._payload),y)}if(dr(p))return w(h,c,p,y);if(nr(p))return _(h,c,p,y);ki(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=To(p,h.mode,y),c.return=h,h=c),o(h)):n(h,c)}return I}var Hn=Tf(!0),Cf=Tf(!1),ni={},Ge=zt(ni),br=zt(ni),zr=zt(ni);function Jt(e){if(e===ni)throw Error(E(174));return e}function yl(e,t){switch(F(zr,t),F(br,e),F(Ge,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qo(t,e)}$(Ge),F(Ge,t)}function Wn(){$(Ge),$(br),$(zr)}function Pf(e){Jt(zr.current);var t=Jt(Ge.current),n=qo(t,e.type);t!==n&&(F(br,e),F(Ge,n))}function wl(e){br.current===e&&($(Ge),$(br))}var V=zt(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function _l(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var ji=ft.ReactCurrentDispatcher,_o=ft.ReactCurrentBatchConfig,sn=0,H=null,J=null,ee=null,cs=!1,Sr=!1,$r=0,Xg=0;function se(){throw Error(E(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,i,s){if(sn=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ji.current=e===null||e.memoizedState===null?nv:rv,e=n(r,i),Sr){s=0;do{if(Sr=!1,$r=0,25<=s)throw Error(E(301));s+=1,ee=J=null,t.updateQueue=null,ji.current=iv,e=n(r,i)}while(Sr)}if(ji.current=ds,t=J!==null&&J.next!==null,sn=0,ee=J=H=null,cs=!1,t)throw Error(E(300));return e}function Il(){var e=$r!==0;return $r=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Br(e,t){return typeof t=="function"?t(e):t}function Eo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,H.lanes|=d,on|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ze(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,on|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ze(s,t.memoizedState)||(me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Rf(){}function Nf(e,t){var n=H,r=Ae(),i=t(),s=!ze(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,kl(Af.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Vr(9,Of.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));sn&30||xf(n,t,i)}return i}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,Lf(t)&&Df(e)}function Af(e,t,n){return n(function(){Lf(t)&&Df(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Df(e){var t=lt(e,1);t!==null&&be(t,e,1,-1)}function qu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=tv.bind(null,H,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return Ae().memoizedState}function Ui(e,t,n,r){var i=He();H.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Ms(e,t,n,r){var i=Ae();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&El(r,o.deps)){i.memoizedState=Vr(t,n,s,r);return}}H.flags|=e,i.memoizedState=Vr(1|t,n,s,r)}function Qu(e,t){return Ui(8390656,8,e,t)}function kl(e,t){return Ms(2048,8,e,t)}function jf(e,t){return Ms(4,2,e,t)}function Uf(e,t){return Ms(4,4,e,t)}function Ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4,4,Ff.bind(null,t,e),n)}function Tl(){}function zf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $f(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bf(e,t,n){return sn&21?(ze(n,t)||(n=Hd(),H.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Zg(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=_o.transition;_o.transition={};try{e(!1),t()}finally{j=n,_o.transition=r}}function Vf(){return Ae().memoizedState}function ev(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Wf(t,n);else if(n=Ef(e,t,n,r),n!==null){var i=de();be(n,e,r,i),Kf(n,t,r)}}function tv(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Wf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ze(a,o)){var l=t.interleaved;l===null?(i.next=i,gl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ef(e,t,i,r),n!==null&&(i=de(),be(n,e,r,i),Kf(n,t,r))}}function Hf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Wf(e,t){Sr=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}var ds={readContext:Oe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},nv={readContext:Oe,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,Ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ev.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:Tl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=Zg.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=He();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));sn&30||xf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Qu(Af.bind(null,r,s,e),[e]),r.flags|=2048,Vr(9,Of.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(B){var n=nt,r=tt;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rv={readContext:Oe,useCallback:zf,useContext:Oe,useEffect:kl,useImperativeHandle:bf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:$f,useReducer:Eo,useRef:Mf,useState:function(){return Eo(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return Bf(t,J.memoizedState,e)},useTransition:function(){var e=Eo(Br)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Vf,unstable_isNewReconciler:!1},iv={readContext:Oe,useCallback:zf,useContext:Oe,useEffect:kl,useImperativeHandle:bf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:$f,useReducer:So,useRef:Mf,useState:function(){return So(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return J===null?t.memoizedState=e:Bf(t,J.memoizedState,e)},useTransition:function(){var e=So(Br)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:Vf,unstable_isNewReconciler:!1};function Kn(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Io(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function Gf(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hs||(hs=!0,Pa=r),va(e,t)},n}function qf(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){va(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var ov=ft.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Hn(t,e.child,n,r)}function Zu(e,t,n,r,i){n=n.render;var s=t.ref;return Un(t,i),r=Sl(e,t,n,r,s,i),n=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(B&&n&&cl(t),t.flags|=1,ce(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ll(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Qf(e,t,s,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(o,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Lt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Mr(s,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,ut(e,t,i)}return ya(e,t,n,r,i)}function Yf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(On,_e),_e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(On,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(On,_e),_e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(On,_e),_e|=r;return ce(e,t,i,n),t.child}function Jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var s=ve(n)?nn:le.current;return s=Bn(t,s),Un(t,i),n=Sl(e,t,n,r,s,i),r=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(B&&r&&cl(t),t.flags|=1,ce(e,t,n,i),t.child)}function tc(e,t,n,r,i){if(ve(n)){var s=!0;rs(t)}else s=!1;if(Un(t,i),t.stateNode===null)Fi(e,t),kf(t,n,r),ga(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ve(n)?nn:le.current,u=Bn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ku(t,o,r,u),gt=!1;var m=t.memoizedState;o.state=m,ls(t,r,o,i),l=t.memoizedState,a!==r||m!==l||ge.current||gt?(typeof d=="function"&&(ma(t,n,d,r),l=t.memoizedState),(a=gt||Wu(t,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),o.props=u,f=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ve(n)?nn:le.current,l=Bn(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ku(t,o,r,l),gt=!1,m=t.memoizedState,o.state=m,ls(t,r,o,i);var w=t.memoizedState;a!==f||m!==w||ge.current||gt?(typeof v=="function"&&(ma(t,n,v,r),w=t.memoizedState),(u=gt||Wu(t,n,u,r,m,w,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,s,i)}function wa(e,t,n,r,i,s){Jf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&zu(t,n,!1),ut(e,t,s);r=t.stateNode,ov.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Hn(t,e.child,null,s),t.child=Hn(t,null,a,s)):ce(e,t,a,s),t.memoizedState=r.state,i&&zu(t,n,!0),t.child}function Xf(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),yl(e,t.containerInfo)}function nc(e,t,n,r,i){return Vn(),fl(i),t.flags|=256,ce(e,t,n,r),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fs(o,r,0,null),e=en(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ea(n),t.memoizedState=_a,e):Cl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return av(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Lt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lt(a,s):(s=en(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=_a,r}return s=e.child,e=s.sibling,r=Lt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cl(e,t){return t=Fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,n,r){return r!==null&&fl(r),Hn(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function av(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Io(Error(E(422))),Ti(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Fs({mode:"visible",children:r.children},i,0,null),s=en(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hn(t,e.child,null,o),t.child.memoizedState=Ea(o),t.memoizedState=_a,s);if(!(t.mode&1))return Ti(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Io(s,r,void 0),Ti(e,t,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lt(e,i),be(r,e,i,-1))}return Al(),r=Io(Error(E(421))),Ti(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ee=Nt(i.nextSibling),Se=t,B=!0,Ue=null,e!==null&&(Pe[Re++]=tt,Pe[Re++]=nt,Pe[Re++]=rn,tt=e.id,nt=e.overflow,rn=t),t=Cl(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function ko(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ce(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&us(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ko(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&us(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ko(t,!0,n,null,s);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lv(e,t,n){switch(t.tag){case 3:Xf(t),Vn();break;case 5:Pf(t);break;case 1:ve(t.type)&&rs(t);break;case 4:yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Zf(e,t,n):(F(V,V.current&1),e=ut(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return eh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Yf(e,t,n)}return ut(e,t,n)}var th,Sa,nh,rh;th=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};nh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(Ge.current);var s=null;switch(n){case"input":i=Ho(e,i),r=Ho(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=Go(e,i),r=Go(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ts)}Qo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uv(e,t,n){var r=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&ns(),oe(t),null;case 3:return r=t.stateNode,Wn(),$(ge),$(le),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(xa(Ue),Ue=null))),Sa(e,t),oe(t),null;case 5:wl(t);var i=Jt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)nh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return oe(t),null}if(e=Jt(Ge.current),Ii(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[We]=t,r[Fr]=s,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)z(hr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":fu(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":pu(r,s),z("invalid",r)}Qo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":pi(r),hu(r,s,!0);break;case"textarea":pi(r),mu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ts)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[We]=t,e[Fr]=r,th(e,t,!1,!1),t.stateNode=e;e:{switch(o=Yo(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)z(hr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":fu(e,r),i=Ho(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),z("invalid",e);break;case"textarea":pu(e,r),i=Go(e,r),z("invalid",e);break;default:i=r}Qo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ad(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(e,l):typeof l=="number"&&Nr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",e):l!=null&&Ya(e,s,l,o))}switch(n){case"input":pi(e),hu(e,r,!1);break;case"textarea":pi(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ln(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ts)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Jt(zr.current),Jt(Ge.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(s=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))_f(),Vn(),t.flags|=98560,s=!1;else if(s=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[We]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Ue!==null&&(xa(Ue),Ue=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Al())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Wn(),Sa(e,t),e===null&&jr(t.stateNode.containerInfo),oe(t),null;case 10:return ml(t.type._context),oe(t),null;case 17:return ve(t.type)&&ns(),oe(t),null;case 19:if($(V),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)lr(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=us(e),o!==null){for(t.flags|=128,lr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&q()>Gn&&(t.flags|=128,r=!0,lr(s,!1),t.lanes=4194304)}else{if(!r)if(e=us(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return oe(t),null}else 2*q()-s.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,lr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function cv(e,t){switch(dl(t),t.tag){case 1:return ve(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),$(ge),$(le),_l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wl(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return Wn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var Ci=!1,ae=!1,dv=typeof WeakSet=="function"?WeakSet:Set,T=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){K(e,t,r)}}var ic=!1;function fv(e,t){if(oa=Xi,e=af(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},Xi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,I=w.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Me(t.type,_),I);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=ic,ic=!1,w}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ia(t,n,s)}i=i.next}while(i!==r)}}function js(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ih(e){var t=e.alternate;t!==null&&(e.alternate=null,ih(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Fr],delete t[ca],delete t[qg],delete t[Qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sh(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ts));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var ne=null,je=!1;function ht(e,t,n){for(n=n.child;n!==null;)oh(e,t,n),n=n.sibling}function oh(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Rs,n)}catch{}switch(n.tag){case 5:ae||xn(n,t);case 6:var r=ne,i=je;ne=null,ht(e,t,n),ne=r,je=i,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),Lr(e)):vo(ne,n.stateNode));break;case 4:r=ne,i=je,ne=n.stateNode.containerInfo,je=!0,ht(e,t,n),ne=r,je=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ia(n,t,o),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!ae&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ht(e,t,n),ae=r):ht(e,t,n);break;default:ht(e,t,n)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dv),t.forEach(function(r){var i=Ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,je=!1;break e;case 3:ne=a.stateNode.containerInfo,je=!0;break e;case 4:ne=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ne===null)throw Error(E(160));oh(s,o,i),ne=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ah(t,e),t=t.sibling}function ah(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ve(e),r&4){try{Ir(3,e,e.return),js(3,e)}catch(_){K(e,e.return,_)}try{Ir(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:De(t,e),Ve(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(De(t,e),Ve(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pd(i,s),Yo(a,o);var u=Yo(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ad(i,f):d==="dangerouslySetInnerHTML"?xd(i,f):d==="children"?Nr(i,f):Ya(i,d,f,u)}switch(a){case"input":Wo(i,s);break;case"textarea":Rd(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ln(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ln(i,!!s.multiple,s.defaultValue,!0):Ln(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fr]=s}catch(_){K(e,e.return,_)}}break;case 6:if(De(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){K(e,e.return,_)}}break;case 3:if(De(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:De(t,e),Ve(e);break;case 13:De(t,e),Ve(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nl=q())),r&4&&oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,De(t,e),ae=u):De(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(T=e,d=e.child;d!==null;){for(f=T=d;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ir(4,m,m.return);break;case 1:xn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){lc(f);continue}}v!==null?(v.return=m,T=v):lc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Od("display",o))}catch(_){K(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){K(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:De(t,e),Ve(e),r&4&&oc(e);break;case 21:break;default:De(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var s=sc(e);Ca(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sc(e);Ta(e,a,o);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hv(e,t,n){T=e,lh(e)}function lh(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ci;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ci;var u=ae;if(Ci=o,(ae=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?uc(i):l!==null?(l.return=o,T=l):uc(i);for(;s!==null;)T=s,lh(s),s=s.sibling;T=i,Ci=a,ae=u}ac(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):ac(e)}}function ac(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||js(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Hu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&ka(t)}catch(m){K(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function lc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function uc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{js(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var s=t.return;try{ka(t)}catch(l){K(t,s,l)}break;case 5:var o=t.return;try{ka(t)}catch(l){K(t,o,l)}}}catch(l){K(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var pv=Math.ceil,fs=ft.ReactCurrentDispatcher,Pl=ft.ReactCurrentOwner,xe=ft.ReactCurrentBatchConfig,M=0,te=null,Q=null,re=0,_e=0,On=zt(0),X=0,Hr=null,on=0,Us=0,Rl=0,kr=null,pe=null,Nl=0,Gn=1/0,Ze=null,hs=!1,Pa=null,Ot=null,Pi=!1,kt=null,ps=0,Tr=0,Ra=null,bi=-1,zi=0;function de(){return M&6?q():bi!==-1?bi:bi=q()}function At(e){return e.mode&1?M&2&&re!==0?re&-re:Jg.transition!==null?(zi===0&&(zi=Hd()),zi):(e=j,e!==0||(e=window.event,e=e===void 0?16:Jd(e.type)),e):1}function be(e,t,n,r){if(50<Tr)throw Tr=0,Ra=null,Error(E(185));Zr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Us|=n),X===4&&yt(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(Gn=q()+500,Ls&&$t()))}function ye(e,t){var n=e.callbackNode;Jm(e,t);var r=Ji(e,e===te?re:0);if(r===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?Yg(cc.bind(null,e)):vf(cc.bind(null,e)),Kg(function(){!(M&6)&&$t()}),n=null;else{switch(Wd(r)){case 1:n=tl;break;case 4:n=Bd;break;case 16:n=Yi;break;case 536870912:n=Vd;break;default:n=Yi}n=gh(n,uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uh(e,t){if(bi=-1,zi=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Ji(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ms(e,r);else{t=r;var i=M;M|=2;var s=dh();(te!==e||re!==t)&&(Ze=null,Gn=q()+500,Zt(e,t));do try{vv();break}catch(a){ch(e,a)}while(!0);pl(),fs.current=s,M=i,Q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ta(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=Hr,Zt(e,0),yt(e,r),ye(e,q()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!mv(i)&&(t=ms(e,r),t===2&&(s=ta(e),s!==0&&(r=s,t=Na(e,s))),t===1))throw n=Hr,Zt(e,0),yt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Gt(e,pe,Ze);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Nl+500-q(),10<t)){if(Ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(Gt.bind(null,e,pe,Ze),t);break}Gt(e,pe,Ze);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Fe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pv(r/1960))-r,10<r){e.timeoutHandle=ua(Gt.bind(null,e,pe,Ze),r);break}Gt(e,pe,Ze);break;case 5:Gt(e,pe,Ze);break;default:throw Error(E(329))}}}return ye(e,q()),e.callbackNode===n?uh.bind(null,e):null}function Na(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=ms(e,t),e!==2&&(t=pe,pe=n,t!==null&&xa(t)),e}function xa(e){pe===null?pe=e:pe.push.apply(pe,e)}function mv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Rl,t&=~Us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(M&6)throw Error(E(327));Fn();var t=Ji(e,0);if(!(t&1))return ye(e,q()),null;var n=ms(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=Hr,Zt(e,0),yt(e,t),ye(e,q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,pe,Ze),ye(e,q()),null}function xl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Gn=q()+500,Ls&&$t())}}function an(e){kt!==null&&kt.tag===0&&!(M&6)&&Fn();var t=M;M|=1;var n=xe.transition,r=j;try{if(xe.transition=null,j=1,e)return e()}finally{j=r,xe.transition=n,M=t,!(M&6)&&$t()}}function Ol(){_e=On.current,$(On)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ns();break;case 3:Wn(),$(ge),$(le),_l();break;case 5:wl(r);break;case 4:Wn();break;case 13:$(V);break;case 19:$(V);break;case 10:ml(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(te=e,Q=e=Lt(e.current,null),re=_e=t,X=0,Hr=null,Rl=Us=on=0,pe=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yt=null}return e}function ch(e,t){do{var n=Q;try{if(pl(),ji.current=ds,cs){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cs=!1}if(sn=0,ee=J=H=null,Sr=!1,$r=0,Pl.current=null,n===null||n.return===null){X=1,Hr=t,Q=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ju(o);if(v!==null){v.flags&=-257,Xu(v,o,a,s,t),v.mode&1&&Yu(s,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){Yu(s,u,t),Al();break e}l=Error(E(426))}}else if(B&&a.mode&1){var I=Ju(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Xu(I,o,a,s,t),fl(Kn(l,a));break e}}s=l=Kn(l,a),X!==4&&(X=2),kr===null?kr=[s]:kr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Gf(s,l,t);Vu(s,h);break e;case 1:a=l;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=qf(s,a,t);Vu(s,y);break e}}s=s.return}while(s!==null)}hh(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function dh(){var e=fs.current;return fs.current=ds,e===null?ds:e}function Al(){(X===0||X===3||X===2)&&(X=4),te===null||!(on&268435455)&&!(Us&268435455)||yt(te,re)}function ms(e,t){var n=M;M|=2;var r=dh();(te!==e||re!==t)&&(Ze=null,Zt(e,t));do try{gv();break}catch(i){ch(e,i)}while(!0);if(pl(),M=n,fs.current=r,Q!==null)throw Error(E(261));return te=null,re=0,X}function gv(){for(;Q!==null;)fh(Q)}function vv(){for(;Q!==null&&!Bm();)fh(Q)}function fh(e){var t=mh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?hh(e):Q=t,Pl.current=null}function hh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cv(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=uv(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function Gt(e,t,n){var r=j,i=xe.transition;try{xe.transition=null,j=1,yv(e,t,n,r)}finally{xe.transition=i,j=r}return null}function yv(e,t,n,r){do Fn();while(kt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xm(e,s),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pi||(Pi=!0,gh(Yi,function(){return Fn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xe.transition,xe.transition=null;var o=j;j=1;var a=M;M|=4,Pl.current=null,fv(e,n),ah(n,e),Fg(aa),Xi=!!oa,aa=oa=null,e.current=n,hv(n),Vm(),M=a,j=o,xe.transition=s}else e.current=n;if(Pi&&(Pi=!1,kt=e,ps=i),s=e.pendingLanes,s===0&&(Ot=null),Km(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hs)throw hs=!1,e=Pa,Pa=null,e;return ps&1&&e.tag!==0&&Fn(),s=e.pendingLanes,s&1?e===Ra?Tr++:(Tr=0,Ra=e):Tr=0,$t(),null}function Fn(){if(kt!==null){var e=Wd(ps),t=xe.transition,n=j;try{if(xe.transition=null,j=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,ps=0,M&6)throw Error(E(331));var i=M;for(M|=4,T=e.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Ir(8,d,s)}var f=d.child;if(f!==null)f.return=d,T=f;else for(;T!==null;){d=T;var m=d.sibling,v=d.return;if(ih(d),d===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ir(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}var c=e.current;for(T=c;T!==null;){o=T;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,T=p;else e:for(o=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:js(9,a)}}catch(S){K(a,a.return,S)}if(a===o){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(M=i,$t(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Rs,e)}catch{}r=!0}return r}finally{j=n,xe.transition=t}}return!1}function dc(e,t,n){t=Kn(n,t),t=Gf(e,t,1),e=xt(e,t,1),t=de(),e!==null&&(Zr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Kn(n,e),e=qf(t,e,1),t=xt(t,e,1),e=de(),t!==null&&(Zr(t,1,e),ye(t,e));break}}t=t.return}}function wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>q()-Nl?Zt(e,0):Rl|=n),ye(e,t)}function ph(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=de();e=lt(e,t),e!==null&&(Zr(e,t,n),ye(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function Ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),ph(e,n)}var mh;mh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,lv(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&yf(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Bn(t,le.current);Un(t,n),i=Sl(null,t,r,e,i,n);var s=Il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(s=!0,rs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vl(t),i.updater=Ds,t.stateNode=i,i._reactInternals=t,ga(t,r,e,n),t=wa(null,t,r,!0,s,n)):(t.tag=0,B&&s&&cl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Iv(r),e=Me(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=Zu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,Me(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),tc(e,t,r,i,n);case 3:e:{if(Xf(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Sf(e,t),ls(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kn(Error(E(423)),t),t=nc(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(E(424)),t),t=nc(e,t,r,n,i);break e}else for(Ee=Nt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,Ue=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=ut(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Pf(t),e===null&&ha(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,la(r,i)?o=null:s!==null&&la(r,s)&&(t.flags|=32),Jf(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&ha(t),null;case 13:return Zf(e,t,n);case 4:return yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Zu(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(os,r._currentValue),r._currentValue=o,s!==null)if(ze(s.value,o)){if(s.children===i.children&&!ge.current){t=ut(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=st(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pa(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=Oe(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),ec(e,t,r,i,n);case 15:return Qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Fi(e,t),t.tag=1,ve(r)?(e=!0,rs(t)):e=!1,Un(t,n),kf(t,r,i),ga(t,r,i,n),wa(null,t,r,!0,e,n);case 19:return eh(e,t,n);case 22:return Yf(e,t,n)}throw Error(E(156,t.tag))};function gh(e,t){return $d(e,t)}function Sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Sv(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iv(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Za)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Ll(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case En:return en(n.children,i,s,t);case Ja:o=8,i|=8;break;case zo:return e=Ne(12,n,t,i|2),e.elementType=zo,e.lanes=s,e;case $o:return e=Ne(13,n,t,i),e.elementType=$o,e.lanes=s,e;case Bo:return e=Ne(19,n,t,i),e.elementType=Bo,e.lanes=s,e;case kd:return Fs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:o=10;break e;case Id:o=9;break e;case Xa:o=11;break e;case Za:o=14;break e;case mt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function en(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Fs(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=kd,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,s,o,a,l){return e=new kv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ne(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(s),e}function Tv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vh(e){if(!e)return Ft;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ve(n))return gf(e,n,t)}return t}function yh(e,t,n,r,i,s,o,a,l){return e=Dl(n,r,!0,e,i,s,o,a,l),e.context=vh(null),n=e.current,r=de(),i=At(n),s=st(r,i),s.callback=t??null,xt(n,s,i),e.current.lanes=i,Zr(e,i,r),ye(e,r),e}function bs(e,t,n,r){var i=t.current,s=de(),o=At(i);return n=vh(n),t.context===null?t.context=n:t.pendingContext=n,t=st(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,o),e!==null&&(be(e,i,o,s),Mi(e,i,o)),o}function gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ml(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function Cv(){return null}var wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}zs.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));bs(e,t,null,null)};zs.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){bs(null,e,null,null)}),t[at]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&Yd(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Pv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gs(o);s.call(u)}}var o=yh(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=o,e[at]=o.current,jr(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gs(l);a.call(u)}}var l=Dl(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=l,e[at]=l.current,jr(e.nodeType===8?e.parentNode:e),an(function(){bs(t,l,n,r)}),l}function Bs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gs(o);a.call(l)}}bs(t,o,e,i)}else o=Pv(n,t,e,i,r);return gs(o)}Kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(nl(t,n|1),ye(t,q()),!(M&6)&&(Gn=q()+500,$t()))}break;case 13:an(function(){var r=lt(e,1);if(r!==null){var i=de();be(r,e,1,i)}}),Ml(e,1)}};rl=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=de();be(t,e,134217728,n)}Ml(e,134217728)}};Gd=function(e){if(e.tag===13){var t=At(e),n=lt(e,t);if(n!==null){var r=de();be(n,e,t,r)}Ml(e,t)}};qd=function(){return j};Qd=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Xo=function(e,t,n){switch(t){case"input":if(Wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=As(r);if(!i)throw Error(E(90));Cd(r),Wo(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Md=xl;jd=an;var Rv={usingClientEntryPoint:!1,Events:[ti,Tn,As,Ld,Dd,xl]},ur={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nv={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Rs=Ri.inject(Nv),Ke=Ri}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(E(200));return Tv(e,t,null,n)};Te.createRoot=function(e,t){if(!Ul(e))throw Error(E(299));var n=!1,r="",i=wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,jr(e.nodeType===8?e.parentNode:e),new jl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return an(e)};Te.hydrate=function(e,t,n){if(!$s(t))throw Error(E(200));return Bs(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=yh(t,null,e,1,n??null,i,!1,s,o),e[at]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zs(t)};Te.render=function(e,t,n){if(!$s(t))throw Error(E(200));return Bs(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!$s(e))throw Error(E(40));return e._reactRootContainer?(an(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Te.unstable_batchedUpdates=xl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$s(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Bs(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function _h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_h)}catch(e){console.error(e)}}_h(),vd.exports=Te;var xv=vd.exports,pc=xv;Fo.createRoot=pc.createRoot,Fo.hydrateRoot=pc.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const mc="popstate";function Ov(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Oa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vs(i)}return Lv(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Av(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||Av()})}function vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Tt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Wr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Tt.Pop;let I=d(),h=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:h})}function m(I,h){a=Tt.Push;let c=Oa(_.location,I,h);n&&n(c,I),u=d()+1;let p=gc(c,u),y=_.createHref(c);try{o.pushState(p,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function v(I,h){a=Tt.Replace;let c=Oa(_.location,I,h);n&&n(c,I),u=d();let p=gc(c,u),y=_.createHref(c);o.replaceState(p,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function w(I){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof I=="string"?I:vs(I);return c=c.replace(/ $/,"%20"),Y(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mc,f),l=I,()=>{i.removeEventListener(mc,f),l=null}},createHref(I){return t(i,I)},createURL:w,encodeLocation(I){let h=w(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(I){return o.go(I)}};return _}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function Dv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jn(t):t,i=Fl(r.pathname||"/",n);if(i==null)return null;let s=Sh(e);Mv(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=Gv(i);o=Hv(s[a],l)}return o}function Sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dt([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sh(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Bv(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Ih(s.path))i(s,o,l)}),t}function Ih(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ih(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jv=/^:[\w-]+$/,Uv=3,Fv=2,bv=1,zv=10,$v=-2,yc=e=>e==="*";function Bv(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=$v),t&&(r+=Fv),n.filter(i=>!yc(i)).reduce((i,s)=>i+(jv.test(s)?Uv:s===""?bv:zv),r)}function Vv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hv(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Wv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:Dt([i,d.pathname]),pathnameBase:Jv(Dt([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Dt([i,d.pathnameBase]))}return s}function Wv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[f];return v&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Kv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Gv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Eh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:Qv(n,t):t,search:Xv(r),hash:Zv(i)}}function Qv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Po(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kh(e,t){let n=Yv(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Th(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Wr({},e),Y(!i.pathname||!i.pathname.includes("?"),Po("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Po("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Po("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=qv(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),Jv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ey(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ch=["post","put","patch","delete"];new Set(Ch);const ty=["get",...Ch];new Set(ty);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kr.apply(this,arguments)}const bl=k.createContext(null),ny=k.createContext(null),mn=k.createContext(null),Vs=k.createContext(null),gn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Ph=k.createContext(null);function ry(e,t){let{relative:n}=t===void 0?{}:t;ri()||Y(!1);let{basename:r,navigator:i}=k.useContext(mn),{hash:s,pathname:o,search:a}=Nh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Dt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ri(){return k.useContext(Vs)!=null}function Hs(){return ri()||Y(!1),k.useContext(Vs).location}function Rh(e){k.useContext(mn).static||k.useLayoutEffect(e)}function zl(){let{isDataRoute:e}=k.useContext(gn);return e?gy():iy()}function iy(){ri()||Y(!1);let e=k.useContext(bl),{basename:t,future:n,navigator:r}=k.useContext(mn),{matches:i}=k.useContext(gn),{pathname:s}=Hs(),o=JSON.stringify(kh(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Rh(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Th(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Dt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function Nh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(mn),{matches:i}=k.useContext(gn),{pathname:s}=Hs(),o=JSON.stringify(kh(i,r.v7_relativeSplatPath));return k.useMemo(()=>Th(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function sy(e,t){return oy(e,t)}function oy(e,t,n,r){ri()||Y(!1);let{navigator:i}=k.useContext(mn),{matches:s}=k.useContext(gn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Hs(),d;if(t){var f;let I=typeof t=="string"?Jn(t):t;l==="/"||(f=I.pathname)!=null&&f.startsWith(l)||Y(!1),d=I}else d=u;let m=d.pathname||"/",v=m;if(l!=="/"){let I=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let w=Dv(e,{pathname:v}),_=dy(w&&w.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:Dt([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:Dt([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return t&&_?k.createElement(Vs.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Tt.Pop}},_):_}function ay(){let e=my(),t=ey(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const ly=k.createElement(ay,null);class uy extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(gn.Provider,{value:this.props.routeContext},k.createElement(Ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cy(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(gn.Provider,{value:t},r)}function dy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));d>=0||Y(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:v}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,w=!1,_=null,I=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||ly,l&&(u<0&&m===0?(vy("route-fallback",!1),w=!0,I=null):u===m&&(w=!0,I=f.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),c=()=>{let p;return v?p=_:w?p=I:f.route.Component?p=k.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,k.createElement(cy,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?k.createElement(uy,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var xh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xh||{}),ys=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ys||{});function fy(e){let t=k.useContext(bl);return t||Y(!1),t}function hy(e){let t=k.useContext(ny);return t||Y(!1),t}function py(e){let t=k.useContext(gn);return t||Y(!1),t}function Oh(e){let t=py(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function my(){var e;let t=k.useContext(Ph),n=hy(ys.UseRouteError),r=Oh(ys.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gy(){let{router:e}=fy(xh.UseNavigateStable),t=Oh(ys.UseNavigateStable),n=k.useRef(!1);return Rh(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Kr({fromRouteId:t},s)))},[e,t])}const wc={};function vy(e,t,n){!t&&!wc[e]&&(wc[e]=!0)}function Bi(e){Y(!1)}function yy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:s,static:o=!1,future:a}=e;ri()&&Y(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Kr({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Jn(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,_=k.useMemo(()=>{let I=Fl(d,l);return I==null?null:{location:{pathname:I,search:f,hash:m,state:v,key:w},navigationType:i}},[l,d,f,m,v,w,i]);return _==null?null:k.createElement(mn.Provider,{value:u},k.createElement(Vs.Provider,{children:n,value:_}))}function wy(e){let{children:t,location:n}=e;return sy(Aa(t),n)}new Promise(()=>{});function Aa(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Aa(r.props.children,s));return}r.type!==Bi&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Aa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}function _y(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ey(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sy(e,t){return e.button===0&&(!t||t==="_self")&&!Ey(e)}const Iy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ky="6";try{window.__reactRouterVersion=ky}catch{}const Ty="startTransition",_c=_m[Ty];function Cy(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Ov({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&_c?_c(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(yy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Da=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,m=_y(t,Iy),{basename:v}=k.useContext(mn),w,_=!1;if(typeof u=="string"&&Ry.test(u)&&(w=u,Py))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Fl(y.pathname,v);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:_=!0}catch{}let I=ry(u,{relative:i}),h=Ny(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||h(p)}return k.createElement("a",La({},m,{href:w||I,onClick:_||s?r:c,ref:n,target:l}))});var Ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ec||(Ec={}));var Sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function Ny(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=zl(),u=Hs(),d=Nh(e,{relative:o});return k.useCallback(f=>{if(Sy(f,n)){f.preventDefault();let m=r!==void 0?r:vs(u)===vs(d);l(e,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}const Ah="/rc-tutors/assets/iie_logo-B2FMXMzB.png",xy="/rc-tutors/assets/login_image-B1xroHJh.jpeg",$l="/rc-tutors/assets/rc_logo-H1BBQ8e9.jpeg";var Ic={};/**
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
 */const Lh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Oy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Oy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new Ay;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ay extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ly=function(e){const t=Lh(e);return Dh.encodeByteArray(t,!0)},Mh=function(e){return Ly(e).replace(/\./g,"")},jh=function(e){try{return Dh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const My=()=>Dy().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof Ic>"u")return;const e=Ic.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Uy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jh(e[1]);return t&&JSON.parse(t)},Bl=()=>{try{return My()||jy()||Uy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fy=e=>{var t,n;return(n=(t=Bl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Uh=()=>{var e;return(e=Bl())===null||e===void 0?void 0:e.config},Fh=e=>{var t;return(t=Bl())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class by{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function bh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $y(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function By(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Vy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hy="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hy,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Wy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function Wy(e,t){return e.replace(Ky,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ky=/\{\$([^}]+)}/g;function Gy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(kc(s)&&kc(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kc(e){return e!==null&&typeof e=="object"}/**
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
 */function ii(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function qy(e,t){const n=new Qy(e,t);return n.subscribe.bind(n)}class Qy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ro),i.error===void 0&&(i.error=Ro),i.complete===void 0&&(i.complete=Ro);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ro(){}/**
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
 */const Jy=1e3,Xy=2,Zy=4*60*60*1e3,e0=.5;function Tc(e,t=Jy,n=Xy){const r=t*Math.pow(n,e),i=Math.round(e0*r*(Math.random()-.5)*2);return Math.min(Zy,r+i)}/**
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
 */class t0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new by;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(r0(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n0(e){return e===qt?void 0:e}function r0(e){return e.instantiationMode==="EAGER"}/**
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
 */class i0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new t0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const s0={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},o0=U.INFO,a0={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},l0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=a0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vl{constructor(t){this.name=t,this._logLevel=o0,this._logHandler=l0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const u0=(e,t)=>t.some(n=>e instanceof n);let Cc,Pc;function c0(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d0(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bh=new WeakMap,Ma=new WeakMap,Vh=new WeakMap,No=new WeakMap,Hl=new WeakMap;function f0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Mt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bh.set(n,e)}).catch(()=>{}),Hl.set(t,e),t}function h0(e){if(Ma.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ma.set(e,t)}let ja={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ma.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function p0(e){ja=e(ja)}function m0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xo(this),t,...n);return Vh.set(r,t.sort?t.sort():[t]),Mt(r)}:d0().includes(e)?function(...t){return e.apply(xo(this),t),Mt(Bh.get(this))}:function(...t){return Mt(e.apply(xo(this),t))}}function g0(e){return typeof e=="function"?m0(e):(e instanceof IDBTransaction&&h0(e),u0(e,c0())?new Proxy(e,ja):e)}function Mt(e){if(e instanceof IDBRequest)return f0(e);if(No.has(e))return No.get(e);const t=g0(e);return t!==e&&(No.set(e,t),Hl.set(t,e)),t}const xo=e=>Hl.get(e);function Hh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const v0=["get","getKey","getAll","getAllKeys","count"],y0=["put","add","delete","clear"],Oo=new Map;function Rc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Oo.get(t))return Oo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=y0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oo.set(t,s),s}p0(e=>({...e,get:(t,n,r)=>Rc(t,n)||e.get(t,n,r),has:(t,n)=>!!Rc(t,n)||e.has(t,n)}));/**
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
 */class w0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ua="@firebase/app",Nc="0.9.28";/**
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
 */const ln=new Vl("@firebase/app"),E0="@firebase/app-compat",S0="@firebase/analytics-compat",I0="@firebase/analytics",k0="@firebase/app-check-compat",T0="@firebase/app-check",C0="@firebase/auth",P0="@firebase/auth-compat",R0="@firebase/database",N0="@firebase/database-compat",x0="@firebase/functions",O0="@firebase/functions-compat",A0="@firebase/installations",L0="@firebase/installations-compat",D0="@firebase/messaging",M0="@firebase/messaging-compat",j0="@firebase/performance",U0="@firebase/performance-compat",F0="@firebase/remote-config",b0="@firebase/remote-config-compat",z0="@firebase/storage",$0="@firebase/storage-compat",B0="@firebase/firestore",V0="@firebase/firestore-compat",H0="firebase",W0="10.8.1";/**
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
 */const Fa="[DEFAULT]",K0={[Ua]:"fire-core",[E0]:"fire-core-compat",[I0]:"fire-analytics",[S0]:"fire-analytics-compat",[T0]:"fire-app-check",[k0]:"fire-app-check-compat",[C0]:"fire-auth",[P0]:"fire-auth-compat",[R0]:"fire-rtdb",[N0]:"fire-rtdb-compat",[x0]:"fire-fn",[O0]:"fire-fn-compat",[A0]:"fire-iid",[L0]:"fire-iid-compat",[D0]:"fire-fcm",[M0]:"fire-fcm-compat",[j0]:"fire-perf",[U0]:"fire-perf-compat",[F0]:"fire-rc",[b0]:"fire-rc-compat",[z0]:"fire-gcs",[$0]:"fire-gcs-compat",[B0]:"fire-fst",[V0]:"fire-fst-compat","fire-js":"fire-js",[H0]:"fire-js-all"};/**
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
 */const ws=new Map,ba=new Map;function G0(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(ba.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;ba.set(t,e);for(const n of ws.values())G0(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new vn("app","Firebase",q0);/**
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
 */class Q0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const si=W0;function Wh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(n||(n=Uh()),!n)throw jt.create("no-options");const s=ws.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw jt.create("duplicate-app",{appName:i})}const o=new i0(i);for(const l of ba.values())o.addComponent(l);const a=new Q0(n,r,o);return ws.set(i,a),a}function Kh(e=Fa){const t=ws.get(e);if(!t&&e===Fa&&Uh())return Wh();if(!t)throw jt.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=K0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}ct(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Y0="firebase-heartbeat-database",J0=1,qr="firebase-heartbeat-store";let Ao=null;function Gh(){return Ao||(Ao=Hh(Y0,J0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qr)}catch(n){console.warn(n)}}}}).catch(e=>{throw jt.create("idb-open",{originalErrorMessage:e.message})})),Ao}async function X0(e){try{const n=(await Gh()).transaction(qr),r=await n.objectStore(qr).get(qh(e));return await n.done,r}catch(t){if(t instanceof Xe)ln.warn(t.message);else{const n=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function xc(e,t){try{const r=(await Gh()).transaction(qr,"readwrite");await r.objectStore(qr).put(t,qh(e)),await r.done}catch(n){if(n instanceof Xe)ln.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function qh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Z0=1024,ew=30*24*60*60*1e3;class tw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Oc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ew}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oc(),{heartbeatsToSend:r,unsentEntries:i}=nw(this._heartbeatsCache.heartbeats),s=Mh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Oc(){return new Date().toISOString().substring(0,10)}function nw(e,t=Z0){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ac(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ac(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await X0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ac(e){return Mh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function iw(e){ct(new Je("platform-logger",t=>new w0(t),"PRIVATE")),ct(new Je("heartbeat",t=>new tw(t),"PRIVATE")),qe(Ua,Nc,e),qe(Ua,Nc,"esm2017"),qe("fire-js","")}iw("");function Wl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=Qh,Yh=new vn("auth","Firebase",Qh());/**
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
 */const _s=new Vl("@firebase/auth");function ow(e,...t){_s.logLevel<=U.WARN&&_s.warn(`Auth (${si}): ${e}`,...t)}function Vi(e,...t){_s.logLevel<=U.ERROR&&_s.error(`Auth (${si}): ${e}`,...t)}/**
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
 */function $e(e,...t){throw Kl(e,...t)}function Qe(e,...t){return Kl(e,...t)}function aw(e,t,n){const r=Object.assign(Object.assign({},sw()),{[t]:n});return new vn("auth","Firebase",r).create(t,{appName:e.name})}function Kl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Yh.create(e,...t)}function x(e,t,...n){if(!e)throw Kl(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vi(t),new Error(t)}function dt(e,t){e||rt(t)}/**
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
 */function za(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function lw(){return Lc()==="http:"||Lc()==="https:"}function Lc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lw()||bh()||"connection"in navigator)?navigator.onLine:!0}function cw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class oi{constructor(t,n){this.shortDelay=t,this.longDelay=n,dt(n>t,"Short delay should be less than long delay!"),this.isMobile=zy()||$y()}get(){return uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const dw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fw=new oi(3e4,6e4);function Bt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vt(e,t,n,r,i={}){return Xh(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ii(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Jh.fetch()(Zh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Xh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},dw),t);try{const i=new pw(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ni(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ni(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ni(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aw(e,d,u);$e(e,d)}}catch(i){if(i instanceof Xe)throw i;$e(e,"network-request-failed",{message:String(i)})}}async function ai(e,t,n,r,i={}){const s=await Vt(e,t,n,r,i);return"mfaPendingCredential"in s&&$e(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Zh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gl(e.config,i):`${e.config.apiScheme}://${i}`}function hw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),fw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(e,t,r);return i.customData._tokenResponse=n,i}function Dc(e){return e!==void 0&&e.enterprise!==void 0}class mw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return hw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function gw(e,t){return Vt(e,"GET","/v2/recaptchaConfig",Bt(e,t))}/**
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
 */async function vw(e,t){return Vt(e,"POST","/v1/accounts:delete",t)}async function yw(e,t){return Vt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Cr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ww(e,t=!1){const n=Be(e),r=await n.getIdToken(t),i=ql(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cr(Lo(i.auth_time)),issuedAtTime:Cr(Lo(i.iat)),expirationTime:Cr(Lo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lo(e){return Number(e)*1e3}function ql(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=jh(n);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _w(e){const t=ql(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xe&&Ew(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Ew({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Sw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qr(e,yw(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Tw(s.providerUserInfo):[],a=kw(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ep(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function Iw(e){const t=Be(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Tw(e){return e.map(t=>{var{providerId:n}=t,r=Wl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cw(e,t){const n=await Xh(e,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Zh(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pw(e,t){return Vt(e,"POST","/v2/accounts:revokeToken",Bt(e,t))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_w(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Cw(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yr;return r&&(x(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function pt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Wl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ep(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ww(this,t)}reload(){return Iw(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qr(this,vw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:S,providerData:P,stsTokenManager:R}=n;x(p&&R,t,"internal-error");const N=Yr.fromJSON(this.name,R);x(typeof p=="string",t,"internal-error"),pt(f,t.name),pt(m,t.name),x(typeof y=="boolean",t,"internal-error"),x(typeof S=="boolean",t,"internal-error"),pt(v,t.name),pt(w,t.name),pt(_,t.name),pt(I,t.name),pt(h,t.name),pt(c,t.name);const b=new tn({uid:p,auth:t,email:m,emailVerified:y,displayName:f,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(b.providerData=P.map(L=>Object.assign({},L))),I&&(b._redirectEventId=I),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Yr;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Es(s),s}}/**
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
 */class tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}tp.type="NONE";const jc=tp;/**
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
 */function Hi(e,t,n){return`firebase:${e}:${t}:${n}`}class bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new bn(it(jc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||it(jc);const o=Hi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=tn._fromJSON(t,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new bn(s,t,r))}}/**
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
 */function Uc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ip(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(np(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(op(t))return"Blackberry";if(ap(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||rp(t))&&!t.includes("edge/"))return"Chrome";if(sp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function np(e=ue()){return/firefox\//i.test(e)}function Ql(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rp(e=ue()){return/crios\//i.test(e)}function ip(e=ue()){return/iemobile/i.test(e)}function sp(e=ue()){return/android/i.test(e)}function op(e=ue()){return/blackberry/i.test(e)}function ap(e=ue()){return/webos/i.test(e)}function Ws(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rw(e=ue()){var t;return Ws(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Nw(){return By()&&document.documentMode===10}function lp(e=ue()){return Ws(e)||sp(e)||ap(e)||op(e)||/windows phone/i.test(e)||ip(e)}function xw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function up(e,t=[]){let n;switch(e){case"Browser":n=Uc(ue());break;case"Worker":n=`${Uc(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class Ow{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Aw(e,t={}){return Vt(e,"GET","/v2/passwordPolicy",Bt(e,t))}/**
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
 */const Lw=6;class Dw{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Lw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Mw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Be(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Aw(this),n=new Dw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ow(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return Be(e)}class Fc{constructor(t){this.auth=t,this.observer=null,this.addObserver=qy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jw(e){Ks=e}function cp(e){return Ks.loadJS(e)}function Uw(){return Ks.recaptchaEnterpriseScript}function Fw(){return Ks.gapiScript}function bw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const zw="recaptcha-enterprise",$w="NO_RECAPTCHA";class Bw{constructor(t){this.type=zw,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Dc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o($w)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Dc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Uw();l.length!==0&&(l+=a),cp(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function bc(e,t,n,r=!1){const i=new Bw(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $a(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function Vw(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gr(s,t??{}))return i;$e(i,"already-initialized")}return n.initialize({options:t})}function Hw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ww(e,t,n){const r=yn(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=dp(t),{host:o,port:a}=Kw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Gw()}function dp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Kw(e){const t=dp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zc(o)}}}function zc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Gw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Yl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}async function qw(e,t){return Vt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Qw(e,t){return ai(e,"POST","/v1/accounts:signInWithPassword",Bt(e,t))}/**
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
 */async function Yw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}async function Jw(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}/**
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
 */class Jr extends Yl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Jr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Jr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,n,"signInWithPassword",Qw);case"emailLink":return Yw(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,r,"signUpPassword",qw);case"emailLink":return Jw(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */const Xw="http://localhost";class un extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Wl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:Xw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ii(n)}return t}}/**
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
 */function Zw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e_(e){const t=pr(mr(e)).link,n=t?pr(mr(t)).deep_link_id:null,r=pr(mr(e)).deep_link_id;return(r?pr(mr(r)).link:null)||r||n||t||e}class Jl{constructor(t){var n,r,i,s,o,a;const l=pr(mr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Zw((i=l.mode)!==null&&i!==void 0?i:null);x(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=e_(t);try{return new Jl(n)}catch{return null}}}/**
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
 */async function t_(e,t){return ai(e,"POST","/v1/accounts:signUp",Bt(e,t))}/**
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
 */class cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),o=$c(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=$c(r);return new cn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function $c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ss extends Xe{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ss.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ss(t,n,r,i)}}function hp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ss._fromErrorAndOperation(e,s,t,r):s})}async function n_(e,t,n=!1){const r=await Qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cn._forOperation(e,"link",r)}/**
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
 */async function r_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Qr(e,hp(r,i,t,e),n);x(s.idToken,r,"internal-error");const o=ql(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(e.uid===a,r,"user-mismatch"),cn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),s}}/**
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
 */async function pp(e,t,n=!1){const r="signIn",i=await hp(e,r,t),s=await cn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function i_(e,t){return pp(yn(e),t)}/**
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
 */async function mp(e){const t=yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function gp(e,t,n){const r=yn(e),o=await $a(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mp(e),l}),a=await cn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function s_(e,t,n){return i_(Be(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mp(e),r})}function o_(e,t,n,r){return Be(e).onIdTokenChanged(t,n,r)}function a_(e,t,n){return Be(e).beforeAuthStateChanged(t,n)}function l_(e,t,n,r){return Be(e).onAuthStateChanged(t,n,r)}function u_(e){return Be(e).signOut()}const Is="__sak";/**
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
 */class vp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function c_(){const e=ue();return Ql(e)||Ws(e)}const d_=1e3,f_=10;class yp extends vp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=c_()&&xw(),this.fallbackToPolling=lp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Nw()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,f_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yp.type="LOCAL";const h_=yp;/**
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
 */function p_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Gs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await p_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
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
 */class m_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Xl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function g_(e){Ye().location.href=e}/**
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
 */function Ep(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function v_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function w_(){return Ep()?self:null}/**
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
 */const Sp="firebaseLocalStorageDb",__=1,ks="firebaseLocalStorage",Ip="fbase_key";class ui{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qs(e,t){return e.transaction([ks],t?"readwrite":"readonly").objectStore(ks)}function E_(){const e=indexedDB.deleteDatabase(Sp);return new ui(e).toPromise()}function Ba(){const e=indexedDB.open(Sp,__);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ks,{keyPath:Ip})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ks)?t(r):(r.close(),await E_(),t(await Ba()))})})}async function Bc(e,t,n){const r=qs(e,!0).put({[Ip]:t,value:n});return new ui(r).toPromise()}async function S_(e,t){const n=qs(e,!1).get(t),r=await new ui(n).toPromise();return r===void 0?null:r.value}function Vc(e,t){const n=qs(e,!0).delete(t);return new ui(n).toPromise()}const I_=800,k_=3;class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(w_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await v_(),!this.activeServiceWorker)return;this.sender=new m_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||y_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ba();return await Bc(t,Is,"1"),await Vc(t,Is),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>S_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=qs(i,!1).getAll();return new ui(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const T_=kp;new oi(3e4,6e4);/**
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
 */function C_(e,t){return t?it(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Zl extends Yl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function P_(e){return pp(e.auth,new Zl(e),e.bypassAuthState)}function R_(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),r_(n,new Zl(e),e.bypassAuthState)}async function N_(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),n_(n,new Zl(e),e.bypassAuthState)}/**
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
 */class Tp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return P_;case"linkViaPopup":case"linkViaRedirect":return N_;case"reauthViaPopup":case"reauthViaRedirect":return R_;default:$e(this.auth,"internal-error")}}resolve(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x_=new oi(2e3,1e4);class An extends Tp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const t=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,x_.get())};t()}}An.currentPopupAction=null;/**
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
 */const O_="pendingRedirect",Wi=new Map;class A_ extends Tp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const r=await L_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L_(e,t){const n=j_(t),r=M_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function D_(e,t){Wi.set(e._key(),t)}function M_(e){return it(e._redirectPersistence)}function j_(e){return Hi(O_,e.config.apiKey,e.name)}async function U_(e,t,n=!1){const r=yn(e),i=C_(r,t),o=await new A_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const F_=10*60*1e3;class b_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Cp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=F_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(t))}saveEventToCache(t){this.cachedEventUids.add(Hc(t)),this.lastProcessedEventTime=Date.now()}}function Hc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Cp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cp(e);default:return!1}}/**
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
 */async function $_(e,t={}){return Vt(e,"GET","/v1/projects",t)}/**
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
 */const B_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V_=/^https?/;async function H_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await $_(e);for(const n of t)try{if(W_(n))return}catch{}$e(e,"unauthorized-domain")}function W_(e){const t=za(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!V_.test(n))return!1;if(B_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K_=new oi(3e4,6e4);function Wc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function G_(e){return new Promise((t,n)=>{var r,i,s;function o(){Wc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wc(),n(Qe(e,"network-request-failed"))},timeout:K_.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=bw("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Qe(e,"network-request-failed"))},cp(`${Fw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function q_(e){return Ki=Ki||G_(e),Ki}/**
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
 */const Q_=new oi(5e3,15e3),Y_="__/auth/iframe",J_="emulator/auth/iframe",X_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e1(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gl(t,J_):`https://${e.config.authDomain}/${Y_}`,r={apiKey:t.apiKey,appName:e.name,v:si},i=Z_.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ii(r).slice(1)}`}async function t1(e){const t=await q_(e),n=Ye().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:e1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(e,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},Q_.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const n1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r1=500,i1=600,s1="_blank",o1="http://localhost";class Kc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a1(e,t,n,r=r1,i=i1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},n1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ue().toLowerCase();n&&(a=rp(u)?s1:n),np(u)&&(t=t||o1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(Rw(u)&&a!=="_self")return l1(t||"",a),new Kc(null);const f=window.open(t||"",a,d);x(f,e,"popup-blocked");try{f.focus()}catch{}return new Kc(f)}function l1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const u1="__/auth/handler",c1="emulator/auth/handler",d1=encodeURIComponent("fac");async function Gc(e,t,n,r,i,s){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:si,eventId:i};if(t instanceof fp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Gy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(t instanceof li){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${d1}=${encodeURIComponent(l)}`:"";return`${f1(e)}?${ii(a).slice(1)}${u}`}function f1({config:e}){return e.emulator?Gl(e,c1):`https://${e.authDomain}/${u1}`}/**
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
 */const Do="webStorageSupport";class h1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_p,this._completeRedirectFn=U_,this._overrideRedirectResult=D_}async _openPopup(t,n,r,i){var s;dt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gc(t,n,r,za(),i);return a1(t,o,Xl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Gc(t,n,r,za(),i);return g_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await t1(t),r=new b_(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Do,{type:Do},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Do];o!==void 0&&n(!!o),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lp()||Ql()||Ws()}}const p1=h1;var qc="@firebase/auth",Qc="1.6.1";/**
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
 */class m1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function g1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v1(e){ct(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:up(e)},u=new Mw(r,i,s,l);return Hw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ct(new Je("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new m1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(qc,Qc,g1(e)),qe(qc,Qc,"esm2017")}/**
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
 */const y1=5*60,w1=Fh("authIdTokenMaxAge")||y1;let Yc=null;const _1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w1)return;const i=n==null?void 0:n.token;Yc!==i&&(Yc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E1(e=Kh()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Vw(e,{popupRedirectResolver:p1,persistence:[T_,h_,_p]}),r=Fh("authTokenSyncURL");if(r){const s=_1(r);a_(n,s,()=>s(n.currentUser)),o_(n,o=>s(o))}const i=Fy("auth");return i&&Ww(n,`http://${i}`),n}function S1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}jw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",S1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v1("Browser");var I1="firebase",k1="10.8.1";/**
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
 */qe(I1,k1,"app");const Pp="@firebase/installations",eu="0.6.5";/**
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
 */const Rp=1e4,Np=`w:${eu}`,xp="FIS_v2",T1="https://firebaseinstallations.googleapis.com/v1",C1=60*60*1e3,P1="installations",R1="Installations";/**
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
 */const N1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dn=new vn(P1,R1,N1);function Op(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
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
 */function Ap({projectId:e}){return`${T1}/projects/${e}/installations`}function Lp(e){return{token:e.token,requestStatus:2,expiresIn:O1(e.expiresIn),creationTime:Date.now()}}async function Dp(e,t){const r=(await t.json()).error;return dn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function x1(e,{refreshToken:t}){const n=Mp(e);return n.append("Authorization",A1(t)),n}async function jp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function O1(e){return Number(e.replace("s","000"))}function A1(e){return`${xp} ${e}`}/**
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
 */async function L1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ap(e),i=Mp(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:xp,appId:e.appId,sdkVersion:Np},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lp(u.authToken)}}else throw await Dp("Create Installation",l)}/**
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
 */function Up(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function D1(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const M1=/^[cdef][\w-]{21}$/,Va="";function j1(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=U1(e);return M1.test(n)?n:Va}catch{return Va}}function U1(e){return D1(e).substr(0,22)}/**
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
 */function Qs(e){return`${e.appName}!${e.appId}`}/**
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
 */const Fp=new Map;function bp(e,t){const n=Qs(e);zp(n,t),F1(n,t)}function zp(e,t){const n=Fp.get(e);if(n)for(const r of n)r(t)}function F1(e,t){const n=b1();n&&n.postMessage({key:e,fid:t}),z1()}let Xt=null;function b1(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{zp(e.data.key,e.data.fid)}),Xt}function z1(){Fp.size===0&&Xt&&(Xt.close(),Xt=null)}/**
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
 */const $1="firebase-installations-database",B1=1,fn="firebase-installations-store";let Mo=null;function tu(){return Mo||(Mo=Hh($1,B1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}})),Mo}async function Ts(e,t){const n=Qs(e),i=(await tu()).transaction(fn,"readwrite"),s=i.objectStore(fn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&bp(e,t.fid),t}async function $p(e){const t=Qs(e),r=(await tu()).transaction(fn,"readwrite");await r.objectStore(fn).delete(t),await r.done}async function Ys(e,t){const n=Qs(e),i=(await tu()).transaction(fn,"readwrite"),s=i.objectStore(fn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bp(e,a.fid),a}/**
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
 */async function nu(e){let t;const n=await Ys(e.appConfig,r=>{const i=V1(r),s=H1(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Va?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function V1(e){const t=e||{fid:j1(),registrationStatus:0};return Bp(t)}function H1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=W1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:K1(e)}:{installationEntry:t}}async function W1(e,t){try{const n=await L1(e,t);return Ts(e.appConfig,n)}catch(n){throw Op(n)&&n.customData.serverCode===409?await $p(e.appConfig):await Ts(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function K1(e){let t=await Jc(e.appConfig);for(;t.registrationStatus===1;)await Up(100),t=await Jc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nu(e);return r||n}return t}function Jc(e){return Ys(e,t=>{if(!t)throw dn.create("installation-not-found");return Bp(t)})}function Bp(e){return G1(e)?{fid:e.fid,registrationStatus:0}:e}function G1(e){return e.registrationStatus===1&&e.registrationTime+Rp<Date.now()}/**
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
 */async function q1({appConfig:e,heartbeatServiceProvider:t},n){const r=Q1(e,n),i=x1(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Np,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jp(()=>fetch(r,a));if(l.ok){const u=await l.json();return Lp(u)}else throw await Dp("Generate Auth Token",l)}function Q1(e,{fid:t}){return`${Ap(e)}/${t}/authTokens:generate`}/**
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
 */async function ru(e,t=!1){let n;const r=await Ys(e.appConfig,s=>{if(!Vp(s))throw dn.create("not-registered");const o=s.authToken;if(!t&&X1(o))return s;if(o.requestStatus===1)return n=Y1(e,t),s;{if(!navigator.onLine)throw dn.create("app-offline");const a=eE(s);return n=J1(e,a),a}});return n?await n:r.authToken}async function Y1(e,t){let n=await Xc(e.appConfig);for(;n.authToken.requestStatus===1;)await Up(100),n=await Xc(e.appConfig);const r=n.authToken;return r.requestStatus===0?ru(e,t):r}function Xc(e){return Ys(e,t=>{if(!Vp(t))throw dn.create("not-registered");const n=t.authToken;return tE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function J1(e,t){try{const n=await q1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ts(e.appConfig,r),n}catch(n){if(Op(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $p(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ts(e.appConfig,r)}throw n}}function Vp(e){return e!==void 0&&e.registrationStatus===2}function X1(e){return e.requestStatus===2&&!Z1(e)}function Z1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+C1}function eE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function tE(e){return e.requestStatus===1&&e.requestTime+Rp<Date.now()}/**
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
 */async function nE(e){const t=e,{installationEntry:n,registrationPromise:r}=await nu(t);return r?r.catch(console.error):ru(t).catch(console.error),n.fid}/**
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
 */async function rE(e,t=!1){const n=e;return await iE(n),(await ru(n,t)).token}async function iE(e){const{registrationPromise:t}=await nu(e);t&&await t}/**
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
 */function sE(e){if(!e||!e.options)throw jo("App Configuration");if(!e.name)throw jo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw jo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function jo(e){return dn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Hp="installations",oE="installations-internal",aE=e=>{const t=e.getProvider("app").getImmediate(),n=sE(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lE=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Hp).getImmediate();return{getId:()=>nE(n),getToken:i=>rE(n,i)}};function uE(){ct(new Je(Hp,aE,"PUBLIC")),ct(new Je(oE,lE,"PRIVATE"))}uE();qe(Pp,eu);qe(Pp,eu,"esm2017");/**
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
 */const Cs="analytics",cE="firebase_id",dE="origin",fE=60*1e3,hE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",iu="https://www.googletagmanager.com/gtag/js";/**
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
 */const pE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new vn("analytics","Analytics",pE);/**
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
 */function mE(e){if(!e.startsWith(iu)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function Wp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function gE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function vE(e,t){const n=gE("firebase-js-sdk-policy",{createScriptURL:mE}),r=document.createElement("script"),i=`${iu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function wE(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Wp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,s)}async function _E(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Wp(n);for(const l of o){const u=a.find(f=>f.measurementId===l),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){we.error(s)}}function EE(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await _E(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await wE(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){we.error(a)}}return i}function SE(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=EE(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function IE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(iu)&&n.src.includes(e))return n;return null}/**
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
 */const kE=30,TE=1e3;class CE{constructor(t={},n=TE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kp=new CE;function PE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function RE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:PE(r)},s=hE.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function NE(e,t=Kp,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ie.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new AE;return setTimeout(async()=>{a.abort()},n!==void 0?n:fE),Gp({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Gp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Kp){var s;const{appId:o,measurementId:a}=e;try{await xE(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await RE(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!OE(u)){if(i.deleteThrottleMetadata(o),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Tc(n,i.intervalMillis,kE):Tc(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),we.debug(`Calling attemptFetch again in ${d} millis`),Gp(e,f,r,i)}}function xE(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function OE(e){if(!(e instanceof Xe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class AE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function LE(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function DE(){if(zh())try{await $h()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ME(e,t,n,r,i,s,o){var a;const l=NE(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>we.error(v)),t.push(l);const u=DE().then(v=>{if(v)return r.getId()}),[d,f]=await Promise.all([l,u]);IE(s)||vE(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[dE]="firebase",m.update=!0,f!=null&&(m[cE]=f),i("config",d.measurementId,m),d.measurementId}/**
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
 */class jE{constructor(t){this.app=t}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},Zc=[];const ed={};let Uo="dataLayer",UE="gtag",td,qp,nd=!1;function FE(){const e=[];if(bh()&&e.push("This is a browser extension environment."),Vy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function bE(e,t,n){FE();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Pr[r]!=null)throw Ie.create("already-exists",{id:r});if(!nd){yE(Uo);const{wrappedGtag:s,gtagCore:o}=SE(Pr,Zc,ed,Uo,UE);qp=s,td=o,nd=!0}return Pr[r]=ME(e,Zc,ed,t,td,Uo,n),new jE(e)}function zE(e=Kh()){e=Be(e);const t=Xn(e,Cs);return t.isInitialized()?t.getImmediate():$E(e)}function $E(e,t={}){const n=Xn(e,Cs);if(n.isInitialized()){const i=n.getImmediate();if(Gr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function BE(e,t,n,r){e=Be(e),LE(qp,Pr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const rd="@firebase/analytics",id="0.10.1";function VE(){ct(new Je(Cs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return bE(r,i,n)},"PUBLIC")),ct(new Je("analytics-internal",e,"PRIVATE")),qe(rd,id),qe(rd,id,"esm2017");function e(t){try{const n=t.getProvider(Cs).getImmediate();return{logEvent:(r,i,s)=>BE(n,r,i,s)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}VE();const HE={apiKey:"AIzaSyCKHkf6o8L9E5u1YjdvAoJqBzZAYufhGSs",authDomain:"rc-tutors-f8841.firebaseapp.com",projectId:"rc-tutors-f8841",storageBucket:"rc-tutors-f8841.appspot.com",messagingSenderId:"1004513724315",appId:"1:1004513724315:web:0dc1bae8526751e043433e",measurementId:"G-TTW1GP930T"},Qp=Wh(HE);zE(Qp);const gr=E1(Qp);function WE(){const e=zl(),[t,n]=k.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),[r,i]=k.useState(!1),[s,o]=k.useState(null),a=u=>{const{name:d,value:f}=u.target;n({...t,[d]:f})},l=u=>{if(u.preventDefault(),t.password!==t.confirmPassword){o("Passwords do not match.");return}i(!0),o(null),gp(gr,t.email,t.password).then(d=>{console.log("User registered:",d.user),e("/logi"),i(!1)}).catch(d=>{console.error("Error registering:",d),o(d.message),i(!1)})};return g.jsxs("div",{className:"vh-90",children:[g.jsx("div",{className:"container-fluid h-custom mb-2 mt-3",children:g.jsxs("div",{className:"row d-flex justify-content-center align-items-center h-100",children:[g.jsx("div",{className:"col-md-9 col-lg-6 col-xl-5",children:g.jsx("img",{src:xy,alt:"login_img",className:"img-fluid"})}),g.jsx("div",{className:"col-md-8 col-lg-6 col-xl-4 offset-xl-1",children:g.jsxs("form",{onSubmit:l,children:[g.jsxs("div",{className:"d-flex flex-row align-items-center justify-content-center justify-content-lg-start",children:[g.jsx("div",{children:g.jsx("img",{src:Ah,alt:"iie-logo",className:"img-fluid"})}),g.jsx("div",{className:"ms-3",children:g.jsx("img",{src:$l,alt:"rc-logo",className:"img-fluid"})})]}),g.jsx("div",{className:"divider d-flex align-items-center my-4",children:g.jsx("p",{className:"text-center fw-bold mx-3 mb-0",children:"Register"})}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"firstName",children:"First Name"}),g.jsx("input",{type:"text",id:"firstName",name:"firstName",value:t.firstName,onChange:a,className:"form-control"})]}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"lastName",children:"Surname"}),g.jsx("input",{type:"text",id:"lastName",name:"lastName",value:t.lastName,onChange:a,className:"form-control"})]}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"email",children:"Email address"}),g.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a,className:"form-control",placeholder:"use school email"})]}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:a,className:"form-control"})]}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),g.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:t.confirmPassword,onChange:a,className:"form-control"})]}),g.jsxs("div",{className:"text-center text-lg-start mb-4",children:[g.jsx("button",{type:"submit",className:"btn btn-danger",style:{paddingLeft:"2.5rem",paddingRight:"2.5rem"},children:"Register"}),g.jsxs("p",{className:"small fw-bold pt-1 mb-0",children:["Already have an account? ",g.jsx(Da,{to:"/login",children:"Login"})]})]})]})})]})}),g.jsx("div",{className:"d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger",children:g.jsx("div",{className:"text-white mb-3 mb-md-0",children:"Copyright © 2020. All rights reserved."})}),s&&g.jsx("div",{className:"alert alert-danger",role:"alert",children:s})]})}var Yp={exports:{}},KE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GE=KE,qE=GE;function Jp(){}function Xp(){}Xp.resetWarningCache=Jp;var QE=function(){function e(r,i,s,o,a,l){if(l!==qE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xp,resetWarningCache:Jp};return n.PropTypes=n,n};Yp.exports=QE();var YE=Yp.exports;const JE=sd(YE),Zp=k.createContext(null),em=({children:e})=>{const[t,n]=k.useState(null),[r,i]=k.useState(!0),s=(u,d)=>(i(!0),gp(gr,u,d)),o=(u,d)=>(i(!0),s_(gr,u,d)),a=()=>(i(!0),u_(gr));k.useEffect(()=>{const u=l_(gr,d=>{n(d),i(!1)});return()=>{u()}},[]);const l={createUser:s,user:t,loginUser:o,logOut:a,loading:r};return g.jsx(Zp.Provider,{value:l,children:e})};em.propTypes={children:JE.node.isRequired};function XE(){const e=zl(),[t,n]=k.useState({email:"",password:""}),{loginUser:r}=k.useContext(Zp),i=o=>{const{name:a,value:l}=o.target;n({...t,[a]:l})},s=async o=>{o.preventDefault();try{await r(t.email,t.password),console.log("Signed in"),e("/home")}catch(a){console.error("Login failed:",a)}};return g.jsxs("section",{className:"vh-90",children:[g.jsxs("div",{className:" h-custom mt-5",children:[g.jsx("div",{}),g.jsx("div",{className:"row d-flex flex-row flex-wrap  justify-content-center align-items-center",children:g.jsx("div",{className:"col-md-8 col-lg-6 col-xl-4 offset-xl-1",children:g.jsxs("form",{onSubmit:s,children:[g.jsxs("div",{className:"d-flex flex-row flex-wrap  align-items-center justify-content-center justify-content-lg-start",children:[g.jsx("div",{children:g.jsx("img",{src:Ah,alt:"iie-logo",className:"w-20 h-17"})}),g.jsx("div",{className:"ms-3",children:g.jsx("img",{src:$l,alt:"rc-logo",className:"w-20 h-17"})})]}),g.jsx("div",{className:"divider d-flex align-items-center my-4",children:g.jsx("p",{className:"text-center fw-bold mx-3 mb-0",children:"Login"})}),g.jsx("div",{className:"text-center text-lg-start mt-1",children:g.jsx("p",{className:"small fw-bold mt-2 pt-1 mb-3",children:" Sign in with your organizational account"})}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"email",children:"Email address"}),g.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:i,className:"form-control"})]}),g.jsxs("div",{className:"form-outline mb-1",children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:i,className:"form-control"})]}),g.jsxs("div",{className:"text-center text-lg-start mt-4 pt-2",children:[g.jsx("button",{type:"submit",className:"btn btn-danger",style:{paddingLeft:"2.5rem",paddingRight:"2.5rem"},children:"Login"}),g.jsxs("p",{className:"small fw-bold mt-2 pt-1 mb-5",children:["Don't have an account? ",g.jsx(Da,{to:"/",children:"Register"}),g.jsxs("p",{children:["Try going here ",g.jsx(Da,{to:"src\\pages\\home\\Homepage",children:"Homepage"})," "]})]})]})]})})})]}),g.jsx("div",{className:"d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger position-fixed-bottom",children:g.jsx("div",{className:"text-white mb-3 mb-md-0",children:"Copyright © 2020. All rights reserved."})})]})}const ZE="/rc-tutors/assets/user-Dmrpev-u.png",eS="/rc-tutors/assets/teacher-CKId1KmK.png",tm="/rc-tutors/assets/world-g-yCYWs-.png",nm="/rc-tutors/assets/message-Bm1Bl0nq.png",tS=()=>{const[e,t]=k.useState(!0),n=()=>{t(!e)},r=()=>{t(!1)};return g.jsxs(g.Fragment,{children:[e&&g.jsx("div",{className:"bg-red-600 text-white h-screen w-1/9 fixed top-0 left-0 pr-6",children:g.jsxs("div",{className:"flex flex-col h-full justify-between",children:[g.jsxs("div",{children:[g.jsx("div",{className:"p-4",children:g.jsx("img",{src:$l,alt:"rc-logo",className:"sidebar_img"})}),g.jsxs("ul",{children:[g.jsxs("li",{className:"mb-2 flex items-center p-1",children:[g.jsx("img",{src:ZE,alt:"icon1",className:"w-7 h-7 mr-2"}),g.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"profile"})]}),g.jsxs("li",{className:"mb-2 flex items-center p-1",children:[g.jsx("img",{src:eS,alt:"icon2",className:"w-7 h-7 mr-2"}),g.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"tutors"})]}),g.jsxs("li",{className:"mb-2 flex items-center p-1",children:[g.jsx("img",{src:tm,alt:"icon2",className:"w-7 h-7 mr-2"}),g.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"Activity stream"})]}),g.jsxs("li",{className:"mb-2 flex items-center p-1",children:[g.jsx("img",{src:nm,alt:"icon2",className:"w-7 h-7 mr-2"}),g.jsx("a",{href:"#",className:"text-black no-underline font-semibold",children:"chat"})]})]})]}),g.jsx("div",{className:"pb-4 pl-3 pr-3",children:g.jsx("button",{onClick:r,className:"bg-white text-red-500 font- px-4 py-2 rounded-md w-full",children:"Sign Out"})})]})}),!e&&g.jsx("div",{className:"fixed top-0 left-0 pr-6",children:g.jsx("button",{onClick:n,className:"bg-red-500 text-white p-2 rounded-sm",children:"☰"})})]})};function nS(){return g.jsx("header",{children:g.jsxs("div",{className:" justify-center flex pt-3 pb-2 items-center font-semibold bg-red-600",children:[g.jsx("img",{src:tm,alt:"icon2",className:"w-8 h-8 mr-2"}),g.jsx("h1",{className:"text-black text-2xl font-semibold",children:"Activity Stream"})]})})}const rS="/rc-tutors/assets/ringing-B1HeKZhR.png",iS=()=>g.jsxs("ul",{className:"list-none",children:[g.jsxs("li",{className:"flex items-center mb-4 relative",children:[g.jsx("img",{src:rS,alt:"Image 1",className:"mr-2 w-8 h-8"}),g.jsxs("div",{children:[g.jsx("p",{children:"Title 1"}),g.jsx("div",{className:"connector-line"}),g.jsxs("ul",{className:"list-none pl-4",children:[g.jsx("li",{className:"notilist",children:"List item 1"}),g.jsx("li",{className:"notilist",children:"List item 2"}),g.jsx("li",{className:"notilist",children:"List item 3"}),g.jsx("li",{className:"notilist",children:"List item 4"})]})]})]}),g.jsxs("li",{className:"flex items-center mb-4 relative",children:[g.jsx("img",{src:nm,alt:"Image 2",className:"mr-2 w-8 h-8"}),g.jsxs("div",{children:[g.jsx("p",{children:"Title 2"}),g.jsx("div",{className:"connector-line"}),g.jsxs("ul",{className:"list-none pl-4",children:[g.jsx("li",{className:"notilist",children:"List item 5"}),g.jsx("li",{className:"notilist",children:"List item 6"}),g.jsx("li",{className:"notilist",children:"List item 7"}),g.jsx("li",{className:"notilist",children:"List item 8"})]})]})]})]}),sS=()=>g.jsx("div",{children:g.jsxs("div",{children:[g.jsx(tS,{}),g.jsx(nS,{}),g.jsx("div",{className:"p-10",children:g.jsx(iS,{})}),g.jsx("p",{children:"words"})]})});function oS(){return g.jsx(Cy,{basename:"rc-tutors",children:g.jsx(em,{children:g.jsxs(wy,{children:[g.jsx(Bi,{path:"/",element:g.jsx(WE,{})}),g.jsx(Bi,{path:"/login",element:g.jsx(XE,{})}),g.jsx(Bi,{path:"/home",element:g.jsx(sS,{})})]})})})}Fo.createRoot(document.getElementById("root")).render(g.jsx(md.StrictMode,{children:g.jsx(oS,{})}));
