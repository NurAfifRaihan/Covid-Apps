function Ih(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ld={exports:{}},so={},sd={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),Rh=Symbol.for("react.portal"),Lh=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Mh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),Bh=Symbol.for("react.memo"),Wh=Symbol.for("react.lazy"),ec=Symbol.iterator;function Vh(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cd=Object.assign,fd={};function vr(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||ud}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=vr.prototype;function Ms(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||ud}var Ds=Ms.prototype=new dd;Ds.constructor=Ms;cd(Ds,vr.prototype);Ds.isPureReactComponent=!0;var tc=Array.isArray,pd=Object.prototype.hasOwnProperty,Fs={current:null},md={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)pd.call(t,r)&&!md.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Ea,type:e,key:i,ref:o,props:a,_owner:Fs.current}}function Hh(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function Yh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nc=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yh(""+e.key):t.toString(36)}function ci(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ea:case Rh:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Do(o,0):r,tc(a)?(n="",e!=null&&(n=e.replace(nc,"$&/")+"/"),ci(a,t,n,"",function(u){return u})):a!=null&&(Us(a)&&(a=Hh(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(nc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",tc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Do(i,l);o+=ci(i,t,n,s,a)}else if(s=Vh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Do(i,l++),o+=ci(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function La(e,t,n){if(e==null)return e;var r=[],a=0;return ci(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Gh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},fi={transition:null},Qh={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:fi,ReactCurrentOwner:Fs};function vd(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:La,forEach:function(e,t,n){La(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return La(e,function(){t++}),t},toArray:function(e){return La(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=vr;$.Fragment=Lh;$.Profiler=$h;$.PureComponent=Ms;$.StrictMode=zh;$.Suspense=Uh;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;$.act=vd;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Fs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)pd.call(t,s)&&!md.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ea,type:e.type,key:a,ref:i,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:Dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mh,_context:e},e.Consumer=e};$.createElement=hd;$.createFactory=function(e){var t=hd.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Fh,render:e}};$.isValidElement=Us;$.lazy=function(e){return{$$typeof:Wh,_payload:{_status:-1,_result:e},_init:Gh}};$.memo=function(e,t){return{$$typeof:Bh,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=fi.transition;fi.transition={};try{e()}finally{fi.transition=t}};$.unstable_act=vd;$.useCallback=function(e,t){return ke.current.useCallback(e,t)};$.useContext=function(e){return ke.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};$.useEffect=function(e,t){return ke.current.useEffect(e,t)};$.useId=function(){return ke.current.useId()};$.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ke.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};$.useRef=function(e){return ke.current.useRef(e)};$.useState=function(e){return ke.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ke.current.useTransition()};$.version="18.3.1";sd.exports=$;var b=sd.exports;const yt=od(b),Kh=Ih({__proto__:null,default:yt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=b,Jh=Symbol.for("react.element"),Zh=Symbol.for("react.fragment"),qh=Object.prototype.hasOwnProperty,ev=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qh.call(t,r)&&!tv.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Jh,type:e,key:i,ref:o,props:a,_owner:ev.current}}so.Fragment=Zh;so.jsx=gd;so.jsxs=gd;ld.exports=so;var v=ld.exports,kl={},yd={exports:{}},ze={},wd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var I=P.length;P.push(A);e:for(;0<I;){var B=I-1>>>1,W=P[B];if(0<a(W,A))P[B]=A,P[I]=W,I=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],I=P.pop();if(I!==A){P[0]=I;e:for(var B=0,W=P.length,ln=W>>>1;B<ln;){var Ge=2*(B+1)-1,Nt=P[Ge],Oe=Ge+1,ft=P[Oe];if(0>a(Nt,I))Oe<W&&0>a(ft,Nt)?(P[B]=ft,P[Oe]=I,B=Oe):(P[B]=Nt,P[Ge]=I,B=Ge);else if(Oe<W&&0>a(ft,I))P[B]=ft,P[Oe]=I,B=Oe;else break e}}return A}function a(P,A){var I=P.sortIndex-A.sortIndex;return I!==0?I:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,c=null,h=3,g=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function w(P){if(x=!1,m(P),!y)if(n(s)!==null)y=!0,Sr(S);else{var A=n(u);A!==null&&on(w,A.startTime-P)}}function S(P,A){y=!1,x&&(x=!1,p(O),O=-1),g=!0;var I=h;try{for(m(A),c=n(s);c!==null&&(!(c.expirationTime>A)||P&&!je());){var B=c.callback;if(typeof B=="function"){c.callback=null,h=c.priorityLevel;var W=B(c.expirationTime<=A);A=e.unstable_now(),typeof W=="function"?c.callback=W:c===n(s)&&r(s),m(A)}else r(s);c=n(s)}if(c!==null)var ln=!0;else{var Ge=n(u);Ge!==null&&on(w,Ge.startTime-A),ln=!1}return ln}finally{c=null,h=I,g=!1}}var C=!1,E=null,O=-1,M=5,L=-1;function je(){return!(e.unstable_now()-L<M)}function rn(){if(E!==null){var P=e.unstable_now();L=P;var A=!0;try{A=E(!0,P)}finally{A?an():(C=!1,E=null)}}else C=!1}var an;if(typeof d=="function")an=function(){d(rn)};else if(typeof MessageChannel<"u"){var Ia=new MessageChannel,$o=Ia.port2;Ia.port1.onmessage=rn,an=function(){$o.postMessage(null)}}else an=function(){k(rn,0)};function Sr(P){E=P,C||(C=!0,an())}function on(P,A){O=k(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Sr(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var I=h;h=A;try{return P()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=h;h=P;try{return A()}finally{h=I}},e.unstable_scheduleCallback=function(P,A,I){var B=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,P={id:f++,callback:A,priorityLevel:P,startTime:I,expirationTime:W,sortIndex:-1},I>B?(P.sortIndex=I,t(u,P),n(s)===null&&P===n(u)&&(x?(p(O),O=-1):x=!0,on(w,I-B))):(P.sortIndex=W,t(s,P),y||g||(y=!0,Sr(S))),P},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(P){var A=h;return function(){var I=h;h=A;try{return P.apply(this,arguments)}finally{h=I}}}})(xd);wd.exports=xd;var nv=wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=b,Le=nv;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kd=new Set,Zr={};function Nn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)kd.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc={},ac={};function iv(e){return Sl.call(ac,e)?!0:Sl.call(rc,e)?!1:av.test(e)?ac[e]=!0:(rc[e]=!0,!1)}function ov(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lv(e,t,n,r){if(t===null||typeof t>"u"||ov(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bs,Ws);me[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bs,Ws);me[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bs,Ws);me[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vs(e,t,n,r){var a=me.hasOwnProperty(t)?me[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lv(t,n,a,r)&&(n=null),r||a===null?iv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Ed=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Cd=Symbol.for("react.offscreen"),ic=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Fo;function Ar(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||""}return`
`+Fo+e}var Uo=!1;function Bo(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function sv(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Rn:return"Portal";case El:return"Profiler";case Hs:return"StrictMode";case Cl:return"Suspense";case _l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ed:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function uv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $a(e){e._valueTracker||(e._valueTracker=cv(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pd(e,t){t=t.checked,t!=null&&Vs(e,"checked",t,!1)}function Nl(e,t){Pd(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ir(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Nd(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ma,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fv=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){fv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var dv=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,Jn=null,Zn=null;function cc(e){if(e=ba(e)){if(typeof Ll!="function")throw Error(_(280));var t=e.stateNode;t&&(t=mo(t),Ll(e.stateNode,e.type,t))}}function Id(e){Jn?Zn?Zn.push(e):Zn=[e]:Jn=e}function Rd(){if(Jn){var e=Jn,t=Zn;if(Zn=Jn=null,cc(e),t)for(e=0;e<t.length;e++)cc(t[e])}}function Ld(e,t){return e(t)}function zd(){}var Wo=!1;function $d(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return Ld(e,t,n)}finally{Wo=!1,(Jn!==null||Zn!==null)&&(zd(),Rd())}}function ea(e,t){var n=e.stateNode;if(n===null)return null;var r=mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var zl=!1;if(wt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){zl=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{zl=!1}function pv(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Fr=!1,Oi=null,Ti=!1,$l=null,mv={onError:function(e){Fr=!0,Oi=e}};function hv(e,t,n,r,a,i,o,l,s){Fr=!1,Oi=null,pv.apply(mv,arguments)}function vv(e,t,n,r,a,i,o,l,s){if(hv.apply(this,arguments),Fr){if(Fr){var u=Oi;Fr=!1,Oi=null}else throw Error(_(198));Ti||(Ti=!0,$l=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(jn(e)!==e)throw Error(_(188))}function gv(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return fc(a),e;if(i===r)return fc(a),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Dd(e){return e=gv(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var Ud=Le.unstable_scheduleCallback,dc=Le.unstable_cancelCallback,yv=Le.unstable_shouldYield,wv=Le.unstable_requestPaint,ne=Le.unstable_now,xv=Le.unstable_getCurrentPriorityLevel,Ks=Le.unstable_ImmediatePriority,Bd=Le.unstable_UserBlockingPriority,Ai=Le.unstable_NormalPriority,kv=Le.unstable_LowPriority,Wd=Le.unstable_IdlePriority,uo=null,ut=null;function Sv(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:_v,Ev=Math.log,Cv=Math.LN2;function _v(e){return e>>>=0,e===0?32:31-(Ev(e)/Cv|0)|0}var Da=64,Fa=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=Rr(l):(i&=o,i!==0&&(r=Rr(i)))}else o=n&~a,o!==0?r=Rr(o):i!==0&&(r=Rr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),a=1<<n,r|=e[n],t&=~a;return r}function bv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-qe(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=bv(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vd(){var e=Da;return Da<<=1,!(Da&4194240)&&(Da=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ca(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Nv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-qe(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var U=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yd,Js,Gd,Qd,Kd,Dl=!1,Ua=[],Ft=null,Ut=null,Bt=null,ta=new Map,na=new Map,Lt=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":ta.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(t.pointerId)}}function br(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ba(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ov(e,t,n,r,a){switch(t){case"focusin":return Ft=br(Ft,e,t,n,r,a),!0;case"dragenter":return Ut=br(Ut,e,t,n,r,a),!0;case"mouseover":return Bt=br(Bt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return ta.set(i,br(ta.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,na.set(i,br(na.get(i)||null,e,t,n,r,a)),!0}return!1}function Xd(e){var t=fn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Md(n),t!==null){e.blockedOn=t,Kd(e.priority,function(){Gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return t=ba(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){di(e)&&n.delete(t)}function Tv(){Dl=!1,Ft!==null&&di(Ft)&&(Ft=null),Ut!==null&&di(Ut)&&(Ut=null),Bt!==null&&di(Bt)&&(Bt=null),ta.forEach(mc),na.forEach(mc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Tv)))}function ra(e){function t(a){return Pr(a,e)}if(0<Ua.length){Pr(Ua[0],e);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&Pr(Ft,e),Ut!==null&&Pr(Ut,e),Bt!==null&&Pr(Bt,e),ta.forEach(t),na.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Xd(n),n.blockedOn===null&&Lt.shift()}var qn=bt.ReactCurrentBatchConfig,Ri=!0;function Av(e,t,n,r){var a=U,i=qn.transition;qn.transition=null;try{U=1,Zs(e,t,n,r)}finally{U=a,qn.transition=i}}function Iv(e,t,n,r){var a=U,i=qn.transition;qn.transition=null;try{U=4,Zs(e,t,n,r)}finally{U=a,qn.transition=i}}function Zs(e,t,n,r){if(Ri){var a=Fl(e,t,n,r);if(a===null)el(e,t,r,Li,n),pc(e,r);else if(Ov(a,e,t,n,r))r.stopPropagation();else if(pc(e,r),t&4&&-1<jv.indexOf(e)){for(;a!==null;){var i=ba(a);if(i!==null&&Yd(i),i=Fl(e,t,n,r),i===null&&el(e,t,r,Li,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var Li=null;function Fl(e,t,n,r){if(Li=null,e=Qs(r),e=fn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Li=e,null}function Jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xv()){case Ks:return 1;case Bd:return 4;case Ai:case kv:return 16;case Wd:return 536870912;default:return 16}default:return 16}}var $t=null,qs=null,pi=null;function Zd(){if(pi)return pi;var e,t=qs,n=t.length,r,a="value"in $t?$t.value:$t.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return pi=a.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ba(){return!0}function hc(){return!1}function $e(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ba:hc,this.isPropagationStopped=hc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=$e(gr),_a=q({},gr,{view:0,detail:0}),Rv=$e(_a),Ho,Yo,Nr,co=q({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Ho=e.screenX-Nr.screenX,Yo=e.screenY-Nr.screenY):Yo=Ho=0,Nr=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),vc=$e(co),Lv=q({},co,{dataTransfer:0}),zv=$e(Lv),$v=q({},_a,{relatedTarget:0}),Go=$e($v),Mv=q({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=$e(Mv),Fv=q({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uv=$e(Fv),Bv=q({},gr,{data:0}),gc=$e(Bv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hv[e])?!!t[e]:!1}function tu(){return Yv}var Gv=q({},_a,{key:function(e){if(e.key){var t=Wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=$e(Gv),Kv=q({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=$e(Kv),Xv=q({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Jv=$e(Xv),Zv=q({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=$e(Zv),e0=q({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=$e(e0),n0=[9,13,27,32],nu=wt&&"CompositionEvent"in window,Ur=null;wt&&"documentMode"in document&&(Ur=document.documentMode);var r0=wt&&"TextEvent"in window&&!Ur,qd=wt&&(!nu||Ur&&8<Ur&&11>=Ur),wc=" ",xc=!1;function ep(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function a0(e,t){switch(e){case"compositionend":return tp(t);case"keypress":return t.which!==32?null:(xc=!0,wc);case"textInput":return e=t.data,e===wc&&xc?null:e;default:return null}}function i0(e,t){if(zn)return e==="compositionend"||!nu&&ep(e,t)?(e=Zd(),pi=qs=$t=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o0[e.type]:t==="textarea"}function np(e,t,n,r){Id(r),t=zi(t,"onChange"),0<t.length&&(n=new eu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,aa=null;function l0(e){pp(e,0)}function fo(e){var t=Dn(e);if(bd(t))return e}function s0(e,t){if(e==="change")return t}var rp=!1;if(wt){var Qo;if(wt){var Ko="oninput"in document;if(!Ko){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Ko=typeof Sc.oninput=="function"}Qo=Ko}else Qo=!1;rp=Qo&&(!document.documentMode||9<document.documentMode)}function Ec(){Br&&(Br.detachEvent("onpropertychange",ap),aa=Br=null)}function ap(e){if(e.propertyName==="value"&&fo(aa)){var t=[];np(t,aa,e,Qs(e)),$d(l0,t)}}function u0(e,t,n){e==="focusin"?(Ec(),Br=t,aa=n,Br.attachEvent("onpropertychange",ap)):e==="focusout"&&Ec()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(aa)}function f0(e,t){if(e==="click")return fo(t)}function d0(e,t){if(e==="input"||e==="change")return fo(t)}function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:p0;function ia(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Sl.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m0(e){var t=op(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(r!==null&&ru(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=_c(n,i);var o=_c(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h0=wt&&"documentMode"in document&&11>=document.documentMode,$n=null,Ul=null,Wr=null,Bl=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||$n==null||$n!==ji(r)||(r=$n,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ia(Wr,r)||(Wr=r,r=zi(Ul,"onSelect"),0<r.length&&(t=new eu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function Wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Xo={},lp={};wt&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function po(e){if(Xo[e])return Xo[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lp)return Xo[e]=t[n];return e}var sp=po("animationend"),up=po("animationiteration"),cp=po("animationstart"),fp=po("transitionend"),dp=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){dp.set(e,t),Nn(t,[e])}for(var Jo=0;Jo<Pc.length;Jo++){var Zo=Pc[Jo],v0=Zo.toLowerCase(),g0=Zo[0].toUpperCase()+Zo.slice(1);en(v0,"on"+g0)}en(sp,"onAnimationEnd");en(up,"onAnimationIteration");en(cp,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(fp,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vv(r,t,void 0,e),e.currentTarget=null}function pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Nc(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Nc(a,l,u),i=s}}}if(Ti)throw e=$l,Ti=!1,$l=null,e}function H(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var r=e+"__bubble";n.has(r)||(mp(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),mp(n,e,r,t)}var Va="_reactListening"+Math.random().toString(36).slice(2);function oa(e){if(!e[Va]){e[Va]=!0,kd.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Va]||(t[Va]=!0,qo("selectionchange",!1,t))}}function mp(e,t,n,r){switch(Jd(t)){case 1:var a=Av;break;case 4:a=Iv;break;default:a=Zs}n=a.bind(null,t,n,e),a=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function el(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=fn(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}$d(function(){var u=i,f=Qs(n),c=[];e:{var h=dp.get(e);if(h!==void 0){var g=eu,y=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":g=Qv;break;case"focusin":y="focus",g=Go;break;case"focusout":y="blur",g=Go;break;case"beforeblur":case"afterblur":g=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jv;break;case sp:case up:case cp:g=Dv;break;case fp:g=qv;break;case"scroll":g=Rv;break;case"wheel":g=t0;break;case"copy":case"cut":case"paste":g=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yc}var x=(t&4)!==0,k=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ea(d,p),w!=null&&x.push(la(d,w,m)))),k)break;d=d.return}0<x.length&&(h=new g(h,y,null,n,f),c.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Rl&&(y=n.relatedTarget||n.fromElement)&&(fn(y)||y[xt]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?fn(y):null,y!==null&&(k=jn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=vc,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=yc,w="onPointerLeave",p="onPointerEnter",d="pointer"),k=g==null?h:Dn(g),m=y==null?h:Dn(y),h=new x(w,d+"leave",g,n,f),h.target=k,h.relatedTarget=m,w=null,fn(f)===u&&(x=new x(p,d+"enter",y,n,f),x.target=m,x.relatedTarget=k,w=x),k=w,g&&y)t:{for(x=g,p=y,d=0,m=x;m;m=An(m))d++;for(m=0,w=p;w;w=An(w))m++;for(;0<d-m;)x=An(x),d--;for(;0<m-d;)p=An(p),m--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=An(x),p=An(p)}x=null}else x=null;g!==null&&jc(c,h,g,x,!1),y!==null&&k!==null&&jc(c,k,y,x,!0)}}e:{if(h=u?Dn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=s0;else if(kc(h))if(rp)S=d0;else{S=c0;var C=u0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=f0);if(S&&(S=S(e,u))){np(c,S,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&jl(h,"number",h.value)}switch(C=u?Dn(u):window,e){case"focusin":(kc(C)||C.contentEditable==="true")&&($n=C,Ul=u,Wr=null);break;case"focusout":Wr=Ul=$n=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,bc(c,n,f);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":bc(c,n,f)}var E;if(nu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zn?ep(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(qd&&n.locale!=="ko"&&(zn||O!=="onCompositionStart"?O==="onCompositionEnd"&&zn&&(E=Zd()):($t=f,qs="value"in $t?$t.value:$t.textContent,zn=!0)),C=zi(u,O),0<C.length&&(O=new gc(O,e,null,n,f),c.push({event:O,listeners:C}),E?O.data=E:(E=tp(n),E!==null&&(O.data=E)))),(E=r0?a0(e,n):i0(e,n))&&(u=zi(u,"onBeforeInput"),0<u.length&&(f=new gc("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=E))}pp(c,t)})}function la(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ea(e,n),i!=null&&r.unshift(la(e,i,a)),i=ea(e,t),i!=null&&r.push(la(e,i,a))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=ea(n,i),s!=null&&o.unshift(la(n,s,l))):a||(s=ea(n,i),s!=null&&o.push(la(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var w0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(w0,`
`).replace(x0,"")}function Ha(e,t,n){if(t=Oc(t),Oc(e)!==t&&n)throw Error(_(425))}function $i(){}var Wl=null,Vl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(E0)}:Yl;function E0(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ra(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ra(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),lt="__reactFiber$"+yr,sa="__reactProps$"+yr,xt="__reactContainer$"+yr,Gl="__reactEvents$"+yr,C0="__reactListeners$"+yr,_0="__reactHandles$"+yr;function fn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ac(e);e!==null;){if(n=e[lt])return n;e=Ac(e)}return t}e=n,n=e.parentNode}return null}function ba(e){return e=e[lt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function mo(e){return e[sa]||null}var Ql=[],Fn=-1;function tn(e){return{current:e}}function Q(e){0>Fn||(e.current=Ql[Fn],Ql[Fn]=null,Fn--)}function V(e,t){Fn++,Ql[Fn]=e.current,e.current=t}var Xt={},ye=tn(Xt),be=tn(!1),kn=Xt;function ar(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Pe(e){return e=e.childContextTypes,e!=null}function Mi(){Q(be),Q(ye)}function Ic(e,t,n){if(ye.current!==Xt)throw Error(_(168));V(ye,t),V(be,n)}function hp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,uv(e)||"Unknown",a));return q({},n,r)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,kn=ye.current,V(ye,e),V(be,be.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=hp(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,Q(be),Q(ye),V(ye,e)):Q(be),V(be,n)}var mt=null,ho=!1,nl=!1;function vp(e){mt===null?mt=[e]:mt.push(e)}function b0(e){ho=!0,vp(e)}function nn(){if(!nl&&mt!==null){nl=!0;var e=0,t=U;try{var n=mt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,ho=!1}catch(a){throw mt!==null&&(mt=mt.slice(e+1)),Ud(Ks,nn),a}finally{U=t,nl=!1}}return null}var Un=[],Bn=0,Fi=null,Ui=0,Fe=[],Ue=0,Sn=null,ht=1,vt="";function un(e,t){Un[Bn++]=Ui,Un[Bn++]=Fi,Fi=e,Ui=t}function gp(e,t,n){Fe[Ue++]=ht,Fe[Ue++]=vt,Fe[Ue++]=Sn,Sn=e;var r=ht;e=vt;var a=32-qe(r)-1;r&=~(1<<a),n+=1;var i=32-qe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ht=1<<32-qe(t)+a|n<<a|r,vt=i+e}else ht=1<<i|n<<a|r,vt=e}function au(e){e.return!==null&&(un(e,1),gp(e,1,0))}function iu(e){for(;e===Fi;)Fi=Un[--Bn],Un[Bn]=null,Ui=Un[--Bn],Un[Bn]=null;for(;e===Sn;)Sn=Fe[--Ue],Fe[Ue]=null,vt=Fe[--Ue],Fe[Ue]=null,ht=Fe[--Ue],Fe[Ue]=null}var Re=null,Ie=null,X=!1,Je=null;function yp(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ie=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:ht,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Ie=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(X){var t=Ie;if(t){var n=t;if(!Lc(e,t)){if(Kl(e))throw Error(_(418));t=Wt(n.nextSibling);var r=Re;t&&Lc(e,t)?yp(r,n):(e.flags=e.flags&-4097|2,X=!1,Re=e)}}else{if(Kl(e))throw Error(_(418));e.flags=e.flags&-4097|2,X=!1,Re=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Ya(e){if(e!==Re)return!1;if(!X)return zc(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Ie)){if(Kl(e))throw wp(),Error(_(418));for(;t;)yp(e,t),t=Wt(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Re?Wt(e.stateNode.nextSibling):null;return!0}function wp(){for(var e=Ie;e;)e=Wt(e.nextSibling)}function ir(){Ie=Re=null,X=!1}function ou(e){Je===null?Je=[e]:Je.push(e)}var P0=bt.ReactCurrentBatchConfig;function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $c(e){var t=e._init;return t(e._payload)}function xp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Gt(p,d),p.index=0,p.sibling=null,p}function i(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,m,w){return d===null||d.tag!==6?(d=ul(m,p.mode,w),d.return=p,d):(d=a(d,m),d.return=p,d)}function s(p,d,m,w){var S=m.type;return S===Ln?f(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&$c(S)===d.type)?(w=a(d,m.props),w.ref=jr(p,d,m),w.return=p,w):(w=ki(m.type,m.key,m.props,null,p.mode,w),w.ref=jr(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=cl(m,p.mode,w),d.return=p,d):(d=a(d,m.children||[]),d.return=p,d)}function f(p,d,m,w,S){return d===null||d.tag!==7?(d=yn(m,p.mode,w,S),d.return=p,d):(d=a(d,m),d.return=p,d)}function c(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ul(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case za:return m=ki(d.type,d.key,d.props,null,p.mode,m),m.ref=jr(p,null,d),m.return=p,m;case Rn:return d=cl(d,p.mode,m),d.return=p,d;case It:var w=d._init;return c(p,w(d._payload),m)}if(Ir(d)||Cr(d))return d=yn(d,p.mode,m,null),d.return=p,d;Ga(p,d)}return null}function h(p,d,m,w){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return m.key===S?s(p,d,m,w):null;case Rn:return m.key===S?u(p,d,m,w):null;case It:return S=m._init,h(p,d,S(m._payload),w)}if(Ir(m)||Cr(m))return S!==null?null:f(p,d,m,w,null);Ga(p,m)}return null}function g(p,d,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case za:return p=p.get(w.key===null?m:w.key)||null,s(d,p,w,S);case Rn:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,S);case It:var C=w._init;return g(p,d,m,C(w._payload),S)}if(Ir(w)||Cr(w))return p=p.get(m)||null,f(d,p,w,S,null);Ga(d,w)}return null}function y(p,d,m,w){for(var S=null,C=null,E=d,O=d=0,M=null;E!==null&&O<m.length;O++){E.index>O?(M=E,E=null):M=E.sibling;var L=h(p,E,m[O],w);if(L===null){E===null&&(E=M);break}e&&E&&L.alternate===null&&t(p,E),d=i(L,d,O),C===null?S=L:C.sibling=L,C=L,E=M}if(O===m.length)return n(p,E),X&&un(p,O),S;if(E===null){for(;O<m.length;O++)E=c(p,m[O],w),E!==null&&(d=i(E,d,O),C===null?S=E:C.sibling=E,C=E);return X&&un(p,O),S}for(E=r(p,E);O<m.length;O++)M=g(E,p,O,m[O],w),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?O:M.key),d=i(M,d,O),C===null?S=M:C.sibling=M,C=M);return e&&E.forEach(function(je){return t(p,je)}),X&&un(p,O),S}function x(p,d,m,w){var S=Cr(m);if(typeof S!="function")throw Error(_(150));if(m=S.call(m),m==null)throw Error(_(151));for(var C=S=null,E=d,O=d=0,M=null,L=m.next();E!==null&&!L.done;O++,L=m.next()){E.index>O?(M=E,E=null):M=E.sibling;var je=h(p,E,L.value,w);if(je===null){E===null&&(E=M);break}e&&E&&je.alternate===null&&t(p,E),d=i(je,d,O),C===null?S=je:C.sibling=je,C=je,E=M}if(L.done)return n(p,E),X&&un(p,O),S;if(E===null){for(;!L.done;O++,L=m.next())L=c(p,L.value,w),L!==null&&(d=i(L,d,O),C===null?S=L:C.sibling=L,C=L);return X&&un(p,O),S}for(E=r(p,E);!L.done;O++,L=m.next())L=g(E,p,O,L.value,w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?O:L.key),d=i(L,d,O),C===null?S=L:C.sibling=L,C=L);return e&&E.forEach(function(rn){return t(p,rn)}),X&&un(p,O),S}function k(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Ln&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case za:e:{for(var S=m.key,C=d;C!==null;){if(C.key===S){if(S=m.type,S===Ln){if(C.tag===7){n(p,C.sibling),d=a(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&$c(S)===C.type){n(p,C.sibling),d=a(C,m.props),d.ref=jr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Ln?(d=yn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=ki(m.type,m.key,m.props,null,p.mode,w),w.ref=jr(p,d,m),w.return=p,p=w)}return o(p);case Rn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=a(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=cl(m,p.mode,w),d.return=p,p=d}return o(p);case It:return C=m._init,k(p,d,C(m._payload),w)}if(Ir(m))return y(p,d,m,w);if(Cr(m))return x(p,d,m,w);Ga(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=a(d,m),d.return=p,p=d):(n(p,d),d=ul(m,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return k}var or=xp(!0),kp=xp(!1),Bi=tn(null),Wi=null,Wn=null,lu=null;function su(){lu=Wn=Wi=null}function uu(e){var t=Bi.current;Q(Bi),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){Wi=e,lu=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(lu!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Wi===null)throw Error(_(308));Wn=e,Wi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var dn=null;function cu(e){dn===null?dn=[e]:dn.push(e)}function Sp(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,cu(t)):(n.next=a.next,a.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,kt(e,n)}return a=r.interleaved,a===null?(t.next=t,cu(r)):(t.next=a.next,a.next=t),r.interleaved=t,kt(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var a=e.updateQueue;Rt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var c=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(h=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){c=y.call(g,c,h);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(g,c,h):y,h==null)break e;c=q({},c,h);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=c):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(f===null&&(s=c),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Cn|=o,e.lanes=o,e.memoizedState=c}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var Pa={},ct=tn(Pa),ua=tn(Pa),ca=tn(Pa);function pn(e){if(e===Pa)throw Error(_(174));return e}function du(e,t){switch(V(ca,t),V(ua,e),V(ct,Pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}Q(ct),V(ct,t)}function lr(){Q(ct),Q(ua),Q(ca)}function Cp(e){pn(ca.current);var t=pn(ct.current),n=Tl(t,e.type);t!==n&&(V(ua,e),V(ct,n))}function pu(e){ua.current===e&&(Q(ct),Q(ua))}var J=tn(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function mu(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var vi=bt.ReactCurrentDispatcher,al=bt.ReactCurrentBatchConfig,En=0,Z=null,oe=null,ue=null,Yi=!1,Vr=!1,fa=0,N0=0;function he(){throw Error(_(321))}function hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function vu(e,t,n,r,a,i){if(En=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vi.current=e===null||e.memoizedState===null?A0:I0,e=n(r,a),Vr){i=0;do{if(Vr=!1,fa=0,25<=i)throw Error(_(301));i+=1,ue=oe=null,t.updateQueue=null,vi.current=R0,e=n(r,a)}while(Vr)}if(vi.current=Gi,t=oe!==null&&oe.next!==null,En=0,ue=oe=Z=null,Yi=!1,t)throw Error(_(300));return e}function gu(){var e=fa!==0;return fa=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function He(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(_(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function da(e,t){return typeof t=="function"?t(e):t}function il(e){var t=He(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=oe,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((En&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,o=r):s=s.next=c,Z.lanes|=f,Cn|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,nt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Z.lanes|=i,Cn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=He(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);nt(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _p(){}function bp(e,t){var n=Z,r=He(),a=t(),i=!nt(r.memoizedState,a);if(i&&(r.memoizedState=a,Ce=!0),r=r.queue,yu(jp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,pa(9,Np.bind(null,n,r,a,t),void 0,null),fe===null)throw Error(_(349));En&30||Pp(n,t,a)}return a}function Pp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Np(e,t,n,r){t.value=n,t.getSnapshot=r,Op(t)&&Tp(e)}function jp(e,t,n){return n(function(){Op(t)&&Tp(e)})}function Op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Tp(e){var t=kt(e,1);t!==null&&et(t,e,1,-1)}function Fc(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=T0.bind(null,Z,e),[t.memoizedState,e]}function pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ap(){return He().memoizedState}function gi(e,t,n,r){var a=at();Z.flags|=e,a.memoizedState=pa(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var a=He();r=r===void 0?null:r;var i=void 0;if(oe!==null){var o=oe.memoizedState;if(i=o.destroy,r!==null&&hu(r,o.deps)){a.memoizedState=pa(t,n,i,r);return}}Z.flags|=e,a.memoizedState=pa(1|t,n,i,r)}function Uc(e,t){return gi(8390656,8,e,t)}function yu(e,t){return vo(2048,8,e,t)}function Ip(e,t){return vo(4,2,e,t)}function Rp(e,t){return vo(4,4,e,t)}function Lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,Lp.bind(null,t,e),n)}function wu(){}function $p(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dp(e,t,n){return En&21?(nt(n,t)||(n=Vd(),Z.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function j0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{U=n,al.transition=r}}function Fp(){return He().memoizedState}function O0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Up(e))Bp(t,n);else if(n=Sp(e,t,n,r),n!==null){var a=xe();et(n,e,r,a),Wp(n,t,r)}}function T0(e,t,n){var r=Yt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Up(e))Bp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,nt(l,o)){var s=t.interleaved;s===null?(a.next=a,cu(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Sp(e,t,a,r),n!==null&&(a=xe(),et(n,e,r,a),Wp(n,t,r))}}function Up(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Bp(e,t){Vr=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var Gi={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},A0={readContext:Ve,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,Lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O0.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:wu,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=j0.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,a=at();if(X){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),fe===null)throw Error(_(349));En&30||Pp(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Uc(jp.bind(null,r,i,e),[e]),r.flags|=2048,pa(9,Np.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=at(),t=fe.identifierPrefix;if(X){var n=vt,r=ht;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},I0={readContext:Ve,useCallback:$p,useContext:Ve,useEffect:yu,useImperativeHandle:zp,useInsertionEffect:Ip,useLayoutEffect:Rp,useMemo:Mp,useReducer:il,useRef:Ap,useState:function(){return il(da)},useDebugValue:wu,useDeferredValue:function(e){var t=He();return Dp(t,oe.memoizedState,e)},useTransition:function(){var e=il(da)[0],t=He().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:bp,useId:Fp,unstable_isNewReconciler:!1},R0={readContext:Ve,useCallback:$p,useContext:Ve,useEffect:yu,useImperativeHandle:zp,useInsertionEffect:Ip,useLayoutEffect:Rp,useMemo:Mp,useReducer:ol,useRef:Ap,useState:function(){return ol(da)},useDebugValue:wu,useDeferredValue:function(e){var t=He();return oe===null?t.memoizedState=e:Dp(t,oe.memoizedState,e)},useTransition:function(){var e=ol(da)[0],t=He().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:bp,useId:Fp,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),a=Yt(e),i=gt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,a),t!==null&&(et(t,e,a,r),hi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),a=Yt(e),i=gt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,a),t!==null&&(et(t,e,a,r),hi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Yt(e),a=gt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Vt(e,a,r),t!==null&&(et(t,e,r,n),hi(t,e,r))}};function Bc(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ia(n,r)||!ia(a,i):!0}function Vp(e,t,n){var r=!1,a=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(a=Pe(t)?kn:ye.current,r=t.contextTypes,i=(r=r!=null)?ar(e,a):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function ql(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},fu(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ve(i):(i=Pe(t)?kn:ye.current,a.context=ar(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&go.enqueueReplaceState(a,a.state,null),Vi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=sv(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Hp(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ki||(Ki=!0,cs=r),es(e,t)},n}function Yp(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){es(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){es(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=K0.bind(null,e,t,n),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var z0=bt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?kp(t,null,n,r):or(t,e.child,n,r)}function Gc(e,t,n,r,a){n=n.render;var i=t.ref;return er(t,a),r=vu(e,t,n,r,i,a),n=gu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(X&&n&&au(t),t.flags|=1,we(e,t,r,a),t.child)}function Qc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gp(e,t,i,r,a)):(e=ki(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,r)&&e.ref===t.ref)return St(e,t,a)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(ia(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,a)}return ts(e,t,n,r,a)}function Qp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Hn,Ae),Ae|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Hn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Hn,Ae),Ae|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Hn,Ae),Ae|=r;return we(e,t,a,n),t.child}function Kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ts(e,t,n,r,a){var i=Pe(n)?kn:ye.current;return i=ar(t,i),er(t,a),n=vu(e,t,n,r,i,a),r=gu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(X&&r&&au(t),t.flags|=1,we(e,t,n,a),t.child)}function Kc(e,t,n,r,a){if(Pe(n)){var i=!0;Di(t)}else i=!1;if(er(t,a),t.stateNode===null)yi(e,t),Vp(t,n,r),ql(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Pe(n)?kn:ye.current,u=ar(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Wc(t,o,r,u),Rt=!1;var h=t.memoizedState;o.state=h,Vi(t,r,o,a),s=t.memoizedState,l!==r||h!==s||be.current||Rt?(typeof f=="function"&&(Zl(t,n,f,r),s=t.memoizedState),(l=Rt||Bc(t,n,l,r,h,s,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ep(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ke(t.type,l),o.props=u,c=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Pe(n)?kn:ye.current,s=ar(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==s)&&Wc(t,o,r,s),Rt=!1,h=t.memoizedState,o.state=h,Vi(t,r,o,a);var y=t.memoizedState;l!==c||h!==y||be.current||Rt?(typeof g=="function"&&(Zl(t,n,g,r),y=t.memoizedState),(u=Rt||Bc(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ns(e,t,n,r,i,a)}function ns(e,t,n,r,a,i){Kp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Rc(t,n,!1),St(e,t,i);r=t.stateNode,z0.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=or(t,e.child,null,i),t.child=or(t,null,l,i)):we(e,t,l,i),t.memoizedState=r.state,a&&Rc(t,n,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ic(e,t.context,!1),du(e,t.containerInfo)}function Xc(e,t,n,r,a){return ir(),ou(a),t.flags|=256,we(e,t,n,r),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jp(e,t,n){var r=t.pendingProps,a=J.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),V(J,a&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=xo(o,r,0,null),e=yn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=as(n),t.memoizedState=rs,e):xu(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return $0(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Gt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Gt(l,i):(i=yn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?as(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=rs,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xu(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qa(e,t,n,r){return r!==null&&ou(r),or(t,e.child,null,n),e=xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $0(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(_(422))),Qa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=xo({mode:"visible",children:r.children},a,0,null),i=yn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&or(t,e.child,null,o),t.child.memoizedState=as(o),t.memoizedState=rs,i);if(!(t.mode&1))return Qa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=ll(i,r,void 0),Qa(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ce||l){if(r=fe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,kt(e,a),et(r,e,a,-1))}return bu(),r=ll(Error(_(421))),Qa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=X0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ie=Wt(a.nextSibling),Re=t,X=!0,Je=null,e!==null&&(Fe[Ue++]=ht,Fe[Ue++]=vt,Fe[Ue++]=Sn,ht=e.id,vt=e.overflow,Sn=t),t=xu(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function sl(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Zp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(J,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),sl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Hi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}sl(t,!0,n,null,i);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M0(e,t,n){switch(t.tag){case 3:Xp(t),ir();break;case 5:Cp(t);break;case 1:Pe(t.type)&&Di(t);break;case 4:du(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;V(Bi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Jp(e,t,n):(V(J,J.current&1),e=St(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Qp(e,t,n)}return St(e,t,n)}var qp,is,em,tm;qp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};em=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,pn(ct.current);var i=null;switch(n){case"input":a=Pl(e,a),r=Pl(e,r),i=[];break;case"select":a=q({},a,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":a=Ol(e,a),r=Ol(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}Al(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};tm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function D0(e,t,n){var r=t.pendingProps;switch(iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&Mi(),ve(t),null;case 3:return r=t.stateNode,lr(),Q(be),Q(ye),mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ps(Je),Je=null))),is(e,t),ve(t),null;case 5:pu(t);var a=pn(ca.current);if(n=t.type,e!==null&&t.stateNode!=null)em(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=pn(ct.current),Ya(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[lt]=t,r[sa]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)H(Lr[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":oc(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":sc(r,i),H("invalid",r)}Al(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,e),a=["children",""+l]):Zr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":$a(r),lc(r,i,!0);break;case"textarea":$a(r),uc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$i)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[lt]=t,e[sa]=r,qp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Il(n,r),n){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)H(Lr[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":oc(e,r),a=Pl(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":sc(e,r),a=Ol(e,r),H("invalid",e);break;default:a=r}Al(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Ad(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Od(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qr(e,s):typeof s=="number"&&qr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Vs(e,i,s,o))}switch(n){case"input":$a(e),lc(e,r,!1);break;case"textarea":$a(e),uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)tm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=pn(ca.current),pn(ct.current),Ya(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ha(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ve(t),null;case 13:if(Q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ie!==null&&t.mode&1&&!(t.flags&128))wp(),ir(),t.flags|=98560,i=!1;else if(i=Ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[lt]=t}else ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Je!==null&&(ps(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):bu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return lr(),is(e,t),e===null&&oa(t.stateNode.containerInfo),ve(t),null;case 10:return uu(t.type._context),ve(t),null;case 17:return Pe(t.type)&&Mi(),ve(t),null;case 19:if(Q(J),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Or(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Hi(e),o!==null){for(t.flags|=128,Or(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>ur&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!X)return ve(t),null}else 2*ne()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,V(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function F0(e,t){switch(iu(t),t.tag){case 1:return Pe(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),Q(be),Q(ye),mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pu(t),null;case 13:if(Q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(J),null;case 4:return lr(),null;case 10:return uu(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Ka=!1,ge=!1,U0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Zc=!1;function B0(e,t){if(Wl=Ri,e=op(),ru(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var g;c!==n||a!==0&&c.nodeType!==3||(l=o+a),c!==i||r!==0&&c.nodeType!==3||(s=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},Ri=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=Zc,Zc=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&os(t,n,i)}a=a.next}while(a!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[sa],delete t[Gl],delete t[C0],delete t[_0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}var de=null,Xe=!1;function Ot(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(uo,n)}catch{}switch(n.tag){case 5:ge||Vn(n,t);case 6:var r=de,a=Xe;de=null,Ot(e,t,n),de=r,Xe=a,de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),ra(e)):tl(de,n.stateNode));break;case 4:r=de,a=Xe,de=n.stateNode.containerInfo,Xe=!0,Ot(e,t,n),de=r,Xe=a;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&os(n,t,o),a=a.next}while(a!==r)}Ot(e,t,n);break;case 1:if(!ge&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Ot(e,t,n),ge=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U0),t.forEach(function(r){var a=J0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Xe=!1;break e;case 3:de=l.stateNode.containerInfo,Xe=!0;break e;case 4:de=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(de===null)throw Error(_(160));am(i,o,a),de=null,Xe=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ee(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)im(t,e),t=t.sibling}function im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),rt(e),r&4){try{Hr(3,e,e.return),yo(3,e)}catch(x){ee(e,e.return,x)}try{Hr(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Qe(t,e),rt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Qe(t,e),rt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var a=e.stateNode;try{qr(a,"")}catch(x){ee(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Pd(a,i),Il(l,o);var u=Il(l,i);for(o=0;o<s.length;o+=2){var f=s[o],c=s[o+1];f==="style"?Ad(a,c):f==="dangerouslySetInnerHTML"?Od(a,c):f==="children"?qr(a,c):Vs(a,f,c,u)}switch(l){case"input":Nl(a,i);break;case"textarea":Nd(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Xn(a,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Xn(a,!!i.multiple,i.defaultValue,!0):Xn(a,!!i.multiple,i.multiple?[]:"",!1))}a[sa]=i}catch(x){ee(e,e.return,x)}}break;case 6:if(Qe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){ee(e,e.return,x)}}break;case 3:if(Qe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Qe(t,e),rt(e);break;case 13:Qe(t,e),rt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Eu=ne())),r&4&&ef(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||f,Qe(t,e),ge=u):Qe(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(j=e,f=e.child;f!==null;){for(c=j=f;j!==null;){switch(h=j,g=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:Vn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ee(r,n,x)}}break;case 5:Vn(h,h.return);break;case 22:if(h.memoizedState!==null){nf(c);continue}}g!==null?(g.return=h,j=g):nf(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{a=c.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Td("display",o))}catch(x){ee(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){ee(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qe(t,e),rt(e),r&4&&ef(e);break;case 21:break;default:Qe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(qr(a,""),r.flags&=-33);var i=qc(e);us(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qc(e);ss(e,l,o);break;default:throw Error(_(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W0(e,t,n){j=e,om(e)}function om(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var a=j,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ka;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Ka;var u=ge;if(Ka=o,(ge=s)&&!u)for(j=a;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?rf(a):s!==null?(s.return=o,j=s):rf(a);for(;i!==null;)j=i,om(i),i=i.sibling;j=a,Ka=l,ge=u}tf(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,j=i):tf(e)}}function tf(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ra(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ge||t.flags&512&&ls(t)}catch(h){ee(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function nf(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function rf(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ee(t,a,s)}}var i=t.return;try{ls(t)}catch(s){ee(t,i,s)}break;case 5:var o=t.return;try{ls(t)}catch(s){ee(t,o,s)}}}catch(s){ee(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var V0=Math.ceil,Qi=bt.ReactCurrentDispatcher,ku=bt.ReactCurrentOwner,We=bt.ReactCurrentBatchConfig,D=0,fe=null,ae=null,pe=0,Ae=0,Hn=tn(0),le=0,ma=null,Cn=0,wo=0,Su=0,Yr=null,Ee=null,Eu=0,ur=1/0,dt=null,Ki=!1,cs=null,Ht=null,Xa=!1,Mt=null,Xi=0,Gr=0,fs=null,wi=-1,xi=0;function xe(){return D&6?ne():wi!==-1?wi:wi=ne()}function Yt(e){return e.mode&1?D&2&&pe!==0?pe&-pe:P0.transition!==null?(xi===0&&(xi=Vd()),xi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Jd(e.type)),e):1}function et(e,t,n,r){if(50<Gr)throw Gr=0,fs=null,Error(_(185));Ca(e,n,r),(!(D&2)||e!==fe)&&(e===fe&&(!(D&2)&&(wo|=n),le===4&&zt(e,pe)),Ne(e,r),n===1&&D===0&&!(t.mode&1)&&(ur=ne()+500,ho&&nn()))}function Ne(e,t){var n=e.callbackNode;Pv(e,t);var r=Ii(e,e===fe?pe:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?b0(af.bind(null,e)):vp(af.bind(null,e)),S0(function(){!(D&6)&&nn()}),n=null;else{switch(Hd(r)){case 1:n=Ks;break;case 4:n=Bd;break;case 16:n=Ai;break;case 536870912:n=Wd;break;default:n=Ai}n=mm(n,lm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lm(e,t){if(wi=-1,xi=0,D&6)throw Error(_(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=Ii(e,e===fe?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ji(e,r);else{t=r;var a=D;D|=2;var i=um();(fe!==e||pe!==t)&&(dt=null,ur=ne()+500,gn(e,t));do try{G0();break}catch(l){sm(e,l)}while(!0);su(),Qi.current=i,D=a,ae!==null?t=0:(fe=null,pe=0,t=le)}if(t!==0){if(t===2&&(a=Ml(e),a!==0&&(r=a,t=ds(e,a))),t===1)throw n=ma,gn(e,0),zt(e,r),Ne(e,ne()),n;if(t===6)zt(e,r);else{if(a=e.current.alternate,!(r&30)&&!H0(a)&&(t=Ji(e,r),t===2&&(i=Ml(e),i!==0&&(r=i,t=ds(e,i))),t===1))throw n=ma,gn(e,0),zt(e,r),Ne(e,ne()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:cn(e,Ee,dt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Eu+500-ne(),10<t)){if(Ii(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Yl(cn.bind(null,e,Ee,dt),t);break}cn(e,Ee,dt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-qe(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V0(r/1960))-r,10<r){e.timeoutHandle=Yl(cn.bind(null,e,Ee,dt),r);break}cn(e,Ee,dt);break;case 5:cn(e,Ee,dt);break;default:throw Error(_(329))}}}return Ne(e,ne()),e.callbackNode===n?lm.bind(null,e):null}function ds(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ps(t)),e}function ps(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function H0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!nt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Su,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function af(e){if(D&6)throw Error(_(327));tr();var t=Ii(e,0);if(!(t&1))return Ne(e,ne()),null;var n=Ji(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=ds(e,r))}if(n===1)throw n=ma,gn(e,0),zt(e,t),Ne(e,ne()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ee,dt),Ne(e,ne()),null}function Cu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(ur=ne()+500,ho&&nn())}}function _n(e){Mt!==null&&Mt.tag===0&&!(D&6)&&tr();var t=D;D|=1;var n=We.transition,r=U;try{if(We.transition=null,U=1,e)return e()}finally{U=r,We.transition=n,D=t,!(D&6)&&nn()}}function _u(){Ae=Hn.current,Q(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mi();break;case 3:lr(),Q(be),Q(ye),mu();break;case 5:pu(r);break;case 4:lr();break;case 13:Q(J);break;case 19:Q(J);break;case 10:uu(r.type._context);break;case 22:case 23:_u()}n=n.return}if(fe=e,ae=e=Gt(e.current,null),pe=Ae=t,le=0,ma=null,Su=wo=Cn=0,Ee=Yr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}dn=null}return e}function sm(e,t){do{var n=ae;try{if(su(),vi.current=Gi,Yi){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Yi=!1}if(En=0,ue=oe=Z=null,Vr=!1,fa=0,ku.current=null,n===null||n.return===null){le=1,ma=t,ae=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Hc(o);if(g!==null){g.flags&=-257,Yc(g,o,l,i,t),g.mode&1&&Vc(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if(!(t&1)){Vc(i,u,t),bu();break e}s=Error(_(426))}}else if(X&&l.mode&1){var k=Hc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Yc(k,o,l,i,t),ou(sr(s,l));break e}}i=s=sr(s,l),le!==4&&(le=2),Yr===null?Yr=[i]:Yr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Hp(i,s,t);Mc(i,p);break e;case 1:l=s;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Yp(i,l,t);Mc(i,w);break e}}i=i.return}while(i!==null)}fm(n)}catch(S){t=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function um(){var e=Qi.current;return Qi.current=Gi,e===null?Gi:e}function bu(){(le===0||le===3||le===2)&&(le=4),fe===null||!(Cn&268435455)&&!(wo&268435455)||zt(fe,pe)}function Ji(e,t){var n=D;D|=2;var r=um();(fe!==e||pe!==t)&&(dt=null,gn(e,t));do try{Y0();break}catch(a){sm(e,a)}while(!0);if(su(),D=n,Qi.current=r,ae!==null)throw Error(_(261));return fe=null,pe=0,le}function Y0(){for(;ae!==null;)cm(ae)}function G0(){for(;ae!==null&&!yv();)cm(ae)}function cm(e){var t=pm(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?fm(e):ae=t,ku.current=null}function fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=F0(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ae=null;return}}else if(n=D0(n,t,Ae),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);le===0&&(le=5)}function cn(e,t,n){var r=U,a=We.transition;try{We.transition=null,U=1,Q0(e,t,n,r)}finally{We.transition=a,U=r}return null}function Q0(e,t,n,r){do tr();while(Mt!==null);if(D&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Nv(e,i),e===fe&&(ae=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,mm(Ai,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=We.transition,We.transition=null;var o=U;U=1;var l=D;D|=4,ku.current=null,B0(e,n),im(n,e),m0(Vl),Ri=!!Wl,Vl=Wl=null,e.current=n,W0(n),wv(),D=l,U=o,We.transition=i}else e.current=n;if(Xa&&(Xa=!1,Mt=e,Xi=a),i=e.pendingLanes,i===0&&(Ht=null),Sv(n.stateNode),Ne(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ki)throw Ki=!1,e=cs,cs=null,e;return Xi&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===fs?Gr++:(Gr=0,fs=e):Gr=0,nn(),null}function tr(){if(Mt!==null){var e=Hd(Xi),t=We.transition,n=U;try{if(We.transition=null,U=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Xi=0,D&6)throw Error(_(331));var a=D;for(D|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var f=j;switch(f.tag){case 0:case 11:case 15:Hr(8,f,i)}var c=f.child;if(c!==null)c.return=f,j=c;else for(;j!==null;){f=j;var h=f.sibling,g=f.return;if(nm(f),f===u){j=null;break}if(h!==null){h.return=g,j=h;break}j=g}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,j=p;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){o=j;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,j=m;else e:for(o=d;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yo(9,l)}}catch(S){ee(l,l.return,S)}if(l===o){j=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,j=w;break e}j=l.return}}if(D=a,nn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(uo,e)}catch{}r=!0}return r}finally{U=n,We.transition=t}}return!1}function of(e,t,n){t=sr(n,t),t=Hp(e,t,1),e=Vt(e,t,1),t=xe(),e!==null&&(Ca(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=sr(n,e),e=Yp(t,e,1),t=Vt(t,e,1),e=xe(),t!==null&&(Ca(t,1,e),Ne(t,e));break}}t=t.return}}function K0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-Eu?gn(e,0):Su|=n),Ne(e,t)}function dm(e,t){t===0&&(e.mode&1?(t=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):t=1);var n=xe();e=kt(e,t),e!==null&&(Ca(e,t,n),Ne(e,n))}function X0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dm(e,n)}function J0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),dm(e,n)}var pm;pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,M0(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,X&&t.flags&1048576&&gp(t,Ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yi(e,t),e=t.pendingProps;var a=ar(t,ye.current);er(t,n),a=vu(null,t,r,e,a,n);var i=gu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,Di(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fu(t),a.updater=go,t.stateNode=a,a._reactInternals=t,ql(t,r,e,n),t=ns(null,t,r,!0,i,n)):(t.tag=0,X&&i&&au(t),we(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=q0(r),e=Ke(r,e),a){case 0:t=ts(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Gc(null,t,r,e,n);break e;case 14:t=Qc(null,t,r,Ke(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ke(r,a),ts(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ke(r,a),Kc(e,t,r,a,n);case 3:e:{if(Xp(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Ep(e,t),Vi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=sr(Error(_(423)),t),t=Xc(e,t,r,n,a);break e}else if(r!==a){a=sr(Error(_(424)),t),t=Xc(e,t,r,n,a);break e}else for(Ie=Wt(t.stateNode.containerInfo.firstChild),Re=t,X=!0,Je=null,n=kp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===a){t=St(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Cp(t),e===null&&Xl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Hl(r,a)?o=null:i!==null&&Hl(r,i)&&(t.flags|=32),Kp(e,t),we(e,t,o,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return Jp(e,t,n);case 4:return du(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ke(r,a),Gc(e,t,r,a,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,V(Bi,r._currentValue),r._currentValue=o,i!==null)if(nt(i.value,o)){if(i.children===a.children&&!be.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=gt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Jl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}we(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,er(t,n),a=Ve(a),r=r(a),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,a=Ke(r,t.pendingProps),a=Ke(r.type,a),Qc(e,t,r,a,n);case 15:return Gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ke(r,a),yi(e,t),t.tag=1,Pe(r)?(e=!0,Di(t)):e=!1,er(t,n),Vp(t,r,a),ql(t,r,a,n),ns(null,t,r,!0,e,n);case 19:return Zp(e,t,n);case 22:return Qp(e,t,n)}throw Error(_(156,t.tag))};function mm(e,t){return Ud(e,t)}function Z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Z0(e,t,n,r)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q0(e){if(typeof e=="function")return Pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Gs)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ki(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Pu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ln:return yn(n.children,a,i,t);case Hs:o=8,a|=8;break;case El:return e=Be(12,n,t,a|2),e.elementType=El,e.lanes=i,e;case Cl:return e=Be(13,n,t,a),e.elementType=Cl,e.lanes=i,e;case _l:return e=Be(19,n,t,a),e.elementType=_l,e.lanes=i,e;case Cd:return xo(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:o=10;break e;case Ed:o=9;break e;case Ys:o=11;break e;case Gs:o=14;break e;case It:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Be(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function yn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Cd,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eg(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Nu(e,t,n,r,a,i,o,l,s){return e=new eg(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(i),e}function tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hm(e){if(!e)return Xt;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Pe(n))return hp(e,n,t)}return t}function vm(e,t,n,r,a,i,o,l,s){return e=Nu(n,r,!0,e,a,i,o,l,s),e.context=hm(null),n=e.current,r=xe(),a=Yt(n),i=gt(r,a),i.callback=t??null,Vt(n,i,a),e.current.lanes=a,Ca(e,a,r),Ne(e,r),e}function ko(e,t,n,r){var a=t.current,i=xe(),o=Yt(a);return n=hm(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(a,t,o),e!==null&&(et(e,a,o,i),hi(e,a,o)),o}function Zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function ng(){return null}var gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}So.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ko(e,t,null,null)};So.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){ko(null,e,null,null)}),t[xt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Xd(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function rg(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Zi(o);i.call(u)}}var o=vm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=o,e[xt]=o.current,oa(e.nodeType===8?e.parentNode:e),_n(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=Zi(s);l.call(u)}}var s=Nu(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=s,e[xt]=s.current,oa(e.nodeType===8?e.parentNode:e),_n(function(){ko(t,s,n,r)}),s}function Co(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=Zi(o);l.call(s)}}ko(t,o,e,a)}else o=rg(n,t,e,a,r);return Zi(o)}Yd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(Xs(t,n|1),Ne(t,ne()),!(D&6)&&(ur=ne()+500,nn()))}break;case 13:_n(function(){var r=kt(e,1);if(r!==null){var a=xe();et(r,e,1,a)}}),ju(e,1)}};Js=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=xe();et(t,e,134217728,n)}ju(e,134217728)}};Gd=function(e){if(e.tag===13){var t=Yt(e),n=kt(e,t);if(n!==null){var r=xe();et(n,e,t,r)}ju(e,t)}};Qd=function(){return U};Kd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ll=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=mo(r);if(!a)throw Error(_(90));bd(r),Nl(r,a)}}}break;case"textarea":Nd(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};Ld=Cu;zd=_n;var ag={usingClientEntryPoint:!1,Events:[ba,Dn,mo,Id,Rd,Cu]},Tr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ig={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dd(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{uo=Ja.inject(ig),ut=Ja}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(_(200));return tg(e,t,null,n)};ze.createRoot=function(e,t){if(!Tu(e))throw Error(_(299));var n=!1,r="",a=gm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Nu(e,1,!1,null,null,n,!1,r,a),e[xt]=t.current,oa(e.nodeType===8?e.parentNode:e),new Ou(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Dd(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return _n(e)};ze.hydrate=function(e,t,n){if(!Eo(t))throw Error(_(200));return Co(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=gm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=vm(t,null,e,1,n??null,a,!1,i,o),e[xt]=t.current,oa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new So(t)};ze.render=function(e,t,n){if(!Eo(t))throw Error(_(200));return Co(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(_(40));return e._reactRootContainer?(_n(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};ze.unstable_batchedUpdates=Cu;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Eo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Co(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),yd.exports=ze;var og=yd.exports,uf=og;kl.createRoot=uf.createRoot,kl.hydrateRoot=uf.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const cf="popstate";function lg(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:l}=r.location;return ms("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:qi(a)}return ug(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sg(){return Math.random().toString(36).substr(2,8)}function ff(e,t){return{usr:e.state,key:e.key,idx:t}}function ms(e,t,n,r){return n===void 0&&(n=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||sg()})}function qi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ug(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Dt.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(ha({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function c(){l=Dt.Pop;let k=f(),p=k==null?null:k-u;u=k,s&&s({action:l,location:x.location,delta:p})}function h(k,p){l=Dt.Push;let d=ms(x.location,k,p);u=f()+1;let m=ff(d,u),w=x.createHref(d);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(w)}i&&s&&s({action:l,location:x.location,delta:1})}function g(k,p){l=Dt.Replace;let d=ms(x.location,k,p);u=f();let m=ff(d,u),w=x.createHref(d);o.replaceState(m,"",w),i&&s&&s({action:l,location:x.location,delta:0})}function y(k){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof k=="string"?k:qi(k);return d=d.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(cf,c),s=k,()=>{a.removeEventListener(cf,c),s=null}},createHref(k){return t(a,k)},createURL:y,encodeLocation(k){let p=y(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(k){return o.go(k)}};return x}var df;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(df||(df={}));function cg(e,t,n){return n===void 0&&(n="/"),fg(e,t,n,!1)}function fg(e,t,n,r){let a=typeof t=="string"?wr(t):t,i=Au(a.pathname||"/",n);if(i==null)return null;let o=xm(e);dg(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Eg(i);l=kg(o[s],u,r)}return l}function xm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Qt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:wg(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of km(i.path))a(i,o,s)}),t}function km(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=km(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function dg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pg=/^:[\w-]+$/,mg=3,hg=2,vg=1,gg=10,yg=-2,pf=e=>e==="*";function wg(e,t){let n=e.split("/"),r=n.length;return n.some(pf)&&(r+=yg),t&&(r+=hg),n.filter(a=>!pf(a)).reduce((a,i)=>a+(pg.test(i)?mg:i===""?vg:gg),r)}function xg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function kg(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",c=mf({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),h=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=mf({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:Qt([i,c.pathname]),pathnameBase:Pg(Qt([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Qt([i,c.pathnameBase]))}return o}function mf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sg(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let x=l[c]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[c];return g&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Sg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Eg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Au(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Cg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:_g(n,t):t,search:Ng(r),hash:jg(a)}}function _g(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sm(e,t){let n=bg(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Em(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=wr(e):(a=ha({},e),ie(!a.pathname||!a.pathname.includes("?"),fl("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),fl("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),fl("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=n;else{let c=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;a.pathname=h.join("/")}l=c>=0?t[c]:"/"}let s=Cg(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Qt=e=>e.join("/").replace(/\/\/+/g,"/"),Pg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ng=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Og(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cm=["post","put","patch","delete"];new Set(Cm);const Tg=["get",...Cm];new Set(Tg);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}const Iu=b.createContext(null),Ag=b.createContext(null),On=b.createContext(null),_o=b.createContext(null),Tn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),_m=b.createContext(null);function Ig(e,t){let{relative:n}=t===void 0?{}:t;Na()||ie(!1);let{basename:r,navigator:a}=b.useContext(On),{hash:i,pathname:o,search:l}=Pm(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Qt([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Na(){return b.useContext(_o)!=null}function bo(){return Na()||ie(!1),b.useContext(_o).location}function bm(e){b.useContext(On).static||b.useLayoutEffect(e)}function Rg(){let{isDataRoute:e}=b.useContext(Tn);return e?Gg():Lg()}function Lg(){Na()||ie(!1);let e=b.useContext(Iu),{basename:t,future:n,navigator:r}=b.useContext(On),{matches:a}=b.useContext(Tn),{pathname:i}=bo(),o=JSON.stringify(Sm(a,n.v7_relativeSplatPath)),l=b.useRef(!1);return bm(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Em(u,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Qt([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,o,i,e])}function Pm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(On),{matches:a}=b.useContext(Tn),{pathname:i}=bo(),o=JSON.stringify(Sm(a,r.v7_relativeSplatPath));return b.useMemo(()=>Em(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function zg(e,t){return $g(e,t)}function $g(e,t,n,r){Na()||ie(!1);let{navigator:a}=b.useContext(On),{matches:i}=b.useContext(Tn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=bo(),f;if(t){var c;let k=typeof t=="string"?wr(t):t;s==="/"||(c=k.pathname)!=null&&c.startsWith(s)||ie(!1),f=k}else f=u;let h=f.pathname||"/",g=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=cg(e,{pathname:g}),x=Bg(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Qt([s,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Qt([s,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&x?b.createElement(_o.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Dt.Pop}},x):x}function Mg(){let e=Yg(),t=Og(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:a},n):null,null)}const Dg=b.createElement(Mg,null);class Fg extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Tn.Provider,{value:this.props.routeContext},b.createElement(_m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ug(e){let{routeContext:t,match:n,children:r}=e,a=b.useContext(Iu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Tn.Provider,{value:t},r)}function Bg(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let f=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);f>=0||ie(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let c=o[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:h,errors:g}=n,y=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||y){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,c,h)=>{let g,y=!1,x=null,k=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,x=c.route.errorElement||Dg,s&&(u<0&&h===0?(y=!0,k=null):u===h&&(y=!0,k=c.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,h+1)),d=()=>{let m;return g?m=x:y?m=k:c.route.Component?m=b.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=f,b.createElement(Ug,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?b.createElement(Fg,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Nm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nm||{}),eo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(eo||{});function Wg(e){let t=b.useContext(Iu);return t||ie(!1),t}function Vg(e){let t=b.useContext(Ag);return t||ie(!1),t}function Hg(e){let t=b.useContext(Tn);return t||ie(!1),t}function jm(e){let t=Hg(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Yg(){var e;let t=b.useContext(_m),n=Vg(eo.UseRouteError),r=jm(eo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Gg(){let{router:e}=Wg(Nm.UseNavigateStable),t=jm(eo.UseNavigateStable),n=b.useRef(!1);return bm(()=>{n.current=!0}),b.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,va({fromRouteId:t},i)))},[e,t])}function zr(e){ie(!1)}function Qg(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Dt.Pop,navigator:i,static:o=!1,future:l}=e;Na()&&ie(!1);let s=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:o,future:va({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=wr(r));let{pathname:f="/",search:c="",hash:h="",state:g=null,key:y="default"}=r,x=b.useMemo(()=>{let k=Au(f,s);return k==null?null:{location:{pathname:k,search:c,hash:h,state:g,key:y},navigationType:a}},[s,f,c,h,g,y,a]);return x==null?null:b.createElement(On.Provider,{value:u},b.createElement(_o.Provider,{children:n,value:x}))}function Kg(e){let{children:t,location:n}=e;return zg(hs(t),n)}new Promise(()=>{});function hs(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,a)=>{if(!b.isValidElement(r))return;let i=[...t,a];if(r.type===b.Fragment){n.push.apply(n,hs(r.props.children,i));return}r.type!==zr&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hs(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}function Xg(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zg(e,t){return e.button===0&&(!t||t==="_self")&&!Jg(e)}const qg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],e1="6";try{window.__reactRouterVersion=e1}catch{}const t1="startTransition",hf=Kh[t1];function n1(e){let{basename:t,children:n,future:r,window:a}=e,i=b.useRef();i.current==null&&(i.current=lg({window:a,v5Compat:!0}));let o=i.current,[l,s]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=b.useCallback(c=>{u&&hf?hf(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>o.listen(f),[o,f]),b.createElement(Qg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Za=b.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,h=Xg(t,qg),{basename:g}=b.useContext(On),y,x=!1;if(typeof u=="string"&&a1.test(u)&&(y=u,r1))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Au(w.pathname,g);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:x=!0}catch{}let k=Ig(u,{relative:a}),p=i1(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a,unstable_viewTransition:c});function d(m){r&&r(m),m.defaultPrevented||p(m)}return b.createElement("a",vs({},h,{href:y||k,onClick:x||i?r:d,ref:n,target:s}))});var vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vf||(vf={}));var gf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gf||(gf={}));function i1(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,s=Rg(),u=bo(),f=Pm(e,{relative:o});return b.useCallback(c=>{if(Zg(c,n)){c.preventDefault();let h=r!==void 0?r:qi(u)===qi(f);s(e,{replace:h,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[u,s,f,r,a,n,e,i,o,l])}var _e=function(){return _e=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_e.apply(this,arguments)};function to(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",Qr="-moz-",F="-webkit-",Om="comm",Po="rule",Ru="decl",o1="@import",Tm="@keyframes",l1="@layer",Am=Math.abs,Lu=String.fromCharCode,gs=Object.assign;function s1(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Im(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Si(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function cr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Rm(e){return e.length}function $r(e,t){return t.push(e),e}function u1(e,t){return e.map(t).join("")}function yf(e,t){return e.filter(function(n){return!pt(n,t)})}var No=1,fr=1,Lm=0,Ye=0,re=0,xr="";function jo(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:No,column:fr,length:o,return:"",siblings:l}}function At(e,t){return gs(jo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=At(e.root,{children:[e]});$r(e,e.siblings)}function c1(){return re}function f1(){return re=Ye>0?ce(xr,--Ye):0,fr--,re===10&&(fr=1,No--),re}function tt(){return re=Ye<Lm?ce(xr,Ye++):0,fr++,re===10&&(fr=1,No++),re}function wn(){return ce(xr,Ye)}function Ei(){return Ye}function Oo(e,t){return cr(xr,e,t)}function ys(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d1(e){return No=fr=1,Lm=it(xr=e),Ye=0,[]}function p1(e){return xr="",e}function dl(e){return Im(Oo(Ye-1,ws(e===91?e+2:e===40?e+1:e)))}function m1(e){for(;(re=wn())&&re<33;)tt();return ys(e)>2||ys(re)>3?"":" "}function h1(e,t){for(;--t&&tt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Oo(e,Ei()+(t<6&&wn()==32&&tt()==32))}function ws(e){for(;tt();)switch(re){case e:return Ye;case 34:case 39:e!==34&&e!==39&&ws(re);break;case 40:e===41&&ws(e);break;case 92:tt();break}return Ye}function v1(e,t){for(;tt()&&e+re!==57;)if(e+re===84&&wn()===47)break;return"/*"+Oo(t,Ye-1)+"*"+Lu(e===47?e:tt())}function g1(e){for(;!ys(wn());)tt();return Oo(e,Ye)}function y1(e){return p1(Ci("",null,null,null,[""],e=d1(e),0,[0],e))}function Ci(e,t,n,r,a,i,o,l,s){for(var u=0,f=0,c=o,h=0,g=0,y=0,x=1,k=1,p=1,d=0,m="",w=a,S=i,C=r,E=m;k;)switch(y=d,d=tt()){case 40:if(y!=108&&ce(E,c-1)==58){Si(E+=R(dl(d),"&","&\f"),"&\f",Am(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=dl(d);break;case 9:case 10:case 13:case 32:E+=m1(y);break;case 92:E+=h1(Ei()-1,7);continue;case 47:switch(wn()){case 42:case 47:$r(w1(v1(tt(),Ei()),t,n,s),s);break;default:E+="/"}break;case 123*x:l[u++]=it(E)*p;case 125*x:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+f:p==-1&&(E=R(E,/\f/g,"")),g>0&&it(E)-c&&$r(g>32?xf(E+";",r,n,c-1,s):xf(R(E," ","")+";",r,n,c-2,s),s);break;case 59:E+=";";default:if($r(C=wf(E,t,n,u,f,a,l,m,w=[],S=[],c,i),i),d===123)if(f===0)Ci(E,t,C,C,w,i,c,l,S);else switch(h===99&&ce(E,3)===110?100:h){case 100:case 108:case 109:case 115:Ci(e,C,C,r&&$r(wf(e,C,C,0,0,a,l,m,a,w=[],c,S),S),a,S,c,l,r?w:S);break;default:Ci(E,C,C,C,[""],S,0,l,S)}}u=f=g=0,x=p=1,m=E="",c=o;break;case 58:c=1+it(E),g=y;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&f1()==125)continue}switch(E+=Lu(d),d*x){case 38:p=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(it(E)-1)*p,p=1;break;case 64:wn()===45&&(E+=dl(tt())),h=wn(),f=c=it(m=E+=g1(Ei())),d++;break;case 45:y===45&&it(E)==2&&(x=0)}}return i}function wf(e,t,n,r,a,i,o,l,s,u,f,c){for(var h=a-1,g=a===0?i:[""],y=Rm(g),x=0,k=0,p=0;x<r;++x)for(var d=0,m=cr(e,h+1,h=Am(k=o[x])),w=e;d<y;++d)(w=Im(k>0?g[d]+" "+m:R(m,/&\f/g,g[d])))&&(s[p++]=w);return jo(e,t,n,a===0?Po:l,s,u,f,c)}function w1(e,t,n,r){return jo(e,t,n,Om,Lu(c1()),cr(e,2,-2),0,r)}function xf(e,t,n,r,a){return jo(e,t,n,Ru,cr(e,0,r),cr(e,r+1,-1),r,a)}function zm(e,t,n){switch(s1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Qr+e+Y+e+e;case 5936:switch(ce(e,t+11)){case 114:return F+e+Y+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Y+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Y+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+Y+e+e;case 6165:return F+e+Y+"flex-"+e+e;case 5187:return F+e+R(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return F+e+Y+"flex-item-"+R(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":Y+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return F+e+Y+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+Y+R(e,"shrink","negative")+e;case 5292:return F+e+Y+R(e,"basis","preferred-size")+e;case 6060:return F+"box-"+R(e,"-grow","")+F+e+Y+R(e,"grow","positive")+e;case 4554:return F+R(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!pt(e,/flex-|baseline/))return Y+"grid-column-align"+cr(e,t)+e;break;case 2592:case 3360:return Y+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,pt(r.props,/grid-\w+-end/)})?~Si(e+(n=n[t].value),"span",0)?e:Y+R(e,"-start","")+e+Y+"grid-row-span:"+(~Si(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":Y+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:Y+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Qr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Si(e,"stretch",0)?zm(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,l,s,u){return Y+a+":"+i+u+(o?Y+a+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ce(e,t+6)===121)return R(e,":",":"+F)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ce(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Y+"$2box$3")+e;case 100:return R(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function no(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function x1(e,t,n,r){switch(e.type){case l1:if(e.children.length)break;case o1:case Ru:return e.return=e.return||e.value;case Om:return"";case Tm:return e.return=e.value+"{"+no(e.children,r)+"}";case Po:if(!it(e.value=e.props.join(",")))return""}return it(n=no(e.children,r))?e.return=e.value+"{"+n+"}":""}function k1(e){var t=Rm(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}function S1(e){return function(t){t.root||(t=t.return)&&e(t)}}function E1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ru:e.return=zm(e.value,e.length,n);return;case Tm:return no([At(e,{value:R(e.value,"@","@"+F)})],r);case Po:if(e.length)return u1(n=e.props,function(a){switch(pt(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(At(e,{props:[R(a,/:(read-\w+)/,":"+Qr+"$1")]})),In(At(e,{props:[a]})),gs(e,{props:yf(n,r)});break;case"::placeholder":In(At(e,{props:[R(a,/:(plac\w+)/,":"+F+"input-$1")]})),In(At(e,{props:[R(a,/:(plac\w+)/,":"+Qr+"$1")]})),In(At(e,{props:[R(a,/:(plac\w+)/,Y+"input-$1")]})),In(At(e,{props:[a]})),gs(e,{props:yf(n,r)});break}return""})}}var C1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},dr=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",$m="active",Mm="data-styled-version",To="6.1.11",zu=`/*!sc*/
`,$u=typeof window<"u"&&"HTMLElement"in window,_1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),Ao=Object.freeze([]),pr=Object.freeze({});function b1(e,t,n){return n===void 0&&(n=pr),e.theme!==n.theme&&e.theme||t||n.theme}var Dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),P1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,N1=/(^-|-$)/g;function kf(e){return e.replace(P1,"-").replace(N1,"")}var j1=/(a)(d)/gi,qa=52,Sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function xs(e){var t,n="";for(t=Math.abs(e);t>qa;t=t/qa|0)n=Sf(t%qa)+n;return(Sf(t%qa)+n).replace(j1,"$1-$2")}var pl,Fm=5381,Yn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Um=function(e){return Yn(Fm,e)};function O1(e){return xs(Um(e)>>>0)}function T1(e){return e.displayName||e.name||"Component"}function ml(e){return typeof e=="string"&&!0}var Bm=typeof Symbol=="function"&&Symbol.for,Wm=Bm?Symbol.for("react.memo"):60115,A1=Bm?Symbol.for("react.forward_ref"):60112,I1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},R1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L1=((pl={})[A1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pl[Wm]=Vm,pl);function Ef(e){return("type"in(t=e)&&t.type.$$typeof)===Wm?Vm:"$$typeof"in e?L1[e.$$typeof]:I1;var t}var z1=Object.defineProperty,$1=Object.getOwnPropertyNames,Cf=Object.getOwnPropertySymbols,M1=Object.getOwnPropertyDescriptor,D1=Object.getPrototypeOf,_f=Object.prototype;function Hm(e,t,n){if(typeof t!="string"){if(_f){var r=D1(t);r&&r!==_f&&Hm(e,r,n)}var a=$1(t);Cf&&(a=a.concat(Cf(t)));for(var i=Ef(e),o=Ef(t),l=0;l<a.length;++l){var s=a[l];if(!(s in R1||n&&n[s]||o&&s in o||i&&s in i)){var u=M1(t,s);try{z1(e,s,u)}catch{}}}}return e}function mr(e){return typeof e=="function"}function Mu(e){return typeof e=="object"&&"styledComponentId"in e}function mn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ga(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ks(e,t,n){if(n===void 0&&(n=!1),!n&&!ga(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ks(e[r],t[r]);else if(ga(t))for(var r in t)e[r]=ks(e[r],t[r]);return e}function Du(e,t){Object.defineProperty(e,"toString",{value:t})}function ja(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var F1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw ja(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(zu);return n},e}(),_i=new Map,ro=new Map,bi=1,ei=function(e){if(_i.has(e))return _i.get(e);for(;ro.has(bi);)bi++;var t=bi++;return _i.set(e,t),ro.set(t,e),t},U1=function(e,t){bi=t+1,_i.set(e,t),ro.set(t,e)},B1="style[".concat(dr,"][").concat(Mm,'="').concat(To,'"]'),W1=new RegExp("^".concat(dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),V1=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},H1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(zu),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(W1);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(U1(f,u),V1(e,f,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}};function Y1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ym=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){var s=Array.from(l.querySelectorAll("style[".concat(dr,"]")));return s[s.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(dr,$m),r.setAttribute(Mm,To);var o=Y1();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},G1=function(){function e(t){this.element=Ym(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw ja(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Q1=function(){function e(t){this.element=Ym(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),K1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pf=$u,X1={isServer:!$u,useCSSOMInjection:!_1},Gm=function(){function e(t,n,r){t===void 0&&(t=pr),n===void 0&&(n={});var a=this;this.options=_e(_e({},X1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$u&&Pf&&(Pf=!1,function(i){for(var o=document.querySelectorAll(B1),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(dr)!==$m&&(H1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Du(this,function(){return function(i){for(var o=i.getTag(),l=o.length,s="",u=function(c){var h=function(p){return ro.get(p)}(c);if(h===void 0)return"continue";var g=i.names.get(h),y=o.getGroup(c);if(g===void 0||y.length===0)return"continue";var x="".concat(dr,".g").concat(c,'[id="').concat(h,'"]'),k="";g!==void 0&&g.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),s+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(zu)},f=0;f<l;f++)u(f);return s}(a)})}return e.registerId=function(t){return ei(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new K1(a):r?new G1(a):new Q1(a)}(this.options),new F1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ei(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ei(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ei(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),J1=/&/g,Z1=/^\s*\/\/.*$/gm;function Qm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qm(n.children,t)),n})}function q1(e){var t,n,r,a=pr,i=a.options,o=i===void 0?pr:i,l=a.plugins,s=l===void 0?Ao:l,u=function(h,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===Po&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(J1,n).replace(r,u))}),o.prefix&&f.push(E1),f.push(x1);var c=function(h,g,y,x){g===void 0&&(g=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(Z1,""),p=y1(y||g?"".concat(y," ").concat(g," { ").concat(k," }"):k);o.namespace&&(p=Qm(p,o.namespace));var d=[];return no(p,k1(f.concat(S1(function(m){return d.push(m)})))),d};return c.hash=s.length?s.reduce(function(h,g){return g.name||ja(15),Yn(h,g.name)},Fm).toString():"",c}var ey=new Gm,Ss=q1(),Km=yt.createContext({shouldForwardProp:void 0,styleSheet:ey,stylis:Ss});Km.Consumer;yt.createContext(void 0);function Nf(){return b.useContext(Km)}var ty=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Ss);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Du(this,function(){throw ja(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ss),this.name+t.hash},e}(),ny=function(e){return e>="A"&&e<="Z"};function jf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ny(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Xm=function(e){return e==null||e===!1||e===""},Jm=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Xm(i)&&(Array.isArray(i)&&i.isCss||mr(i)?r.push("".concat(jf(a),":"),i,";"):ga(i)?r.push.apply(r,to(to(["".concat(a," {")],Jm(i),!1),["}"],!1)):r.push("".concat(jf(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in C1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(Xm(e))return[];if(Mu(e))return[".".concat(e.styledComponentId)];if(mr(e)){if(!mr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return xn(a,t,n,r)}var i;return e instanceof ty?n?(e.inject(n,r),[e.getName(r)]):[e]:ga(e)?Jm(e):Array.isArray(e)?Array.prototype.concat.apply(Ao,e.map(function(o){return xn(o,t,n,r)})):[e.toString()]}function ry(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(mr(n)&&!Mu(n))return!1}return!0}var ay=Um(To),iy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ry(t),this.componentId=n,this.baseHash=Yn(ay,n),this.baseStyle=r,Gm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=mn(a,this.staticRulesId);else{var i=bf(xn(this.rules,t,n,r)),o=xs(Yn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}a=mn(a,o),this.staticRulesId=o}else{for(var s=Yn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var h=bf(xn(c,t,n,r));s=Yn(s,h+f),u+=h}}if(u){var g=xs(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),a=mn(a,g)}}return a},e}(),Zm=yt.createContext(void 0);Zm.Consumer;var hl={};function oy(e,t,n){var r=Mu(e),a=e,i=!ml(e),o=t.attrs,l=o===void 0?Ao:o,s=t.componentId,u=s===void 0?function(w,S){var C=typeof w!="string"?"sc":kf(w);hl[C]=(hl[C]||0)+1;var E="".concat(C,"-").concat(O1(To+C+hl[C]));return S?"".concat(S,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(w){return ml(w)?"styled.".concat(w):"Styled(".concat(T1(w),")")}(e):f,h=t.displayName&&t.componentId?"".concat(kf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&a.shouldForwardProp){var x=a.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(w,S){return x(w,S)&&k(w,S)}}else y=x}var p=new iy(n,h,r?a.componentStyle:void 0);function d(w,S){return function(C,E,O){var M=C.attrs,L=C.componentStyle,je=C.defaultProps,rn=C.foldedComponentIds,an=C.styledComponentId,Ia=C.target,$o=yt.useContext(Zm),Sr=Nf(),on=C.shouldForwardProp||Sr.shouldForwardProp,P=b1(E,$o,je)||pr,A=function(Nt,Oe,ft){for(var Er,sn=_e(_e({},Oe),{className:void 0,theme:ft}),Mo=0;Mo<Nt.length;Mo+=1){var Ra=mr(Er=Nt[Mo])?Er(sn):Er;for(var jt in Ra)sn[jt]=jt==="className"?mn(sn[jt],Ra[jt]):jt==="style"?_e(_e({},sn[jt]),Ra[jt]):Ra[jt]}return Oe.className&&(sn.className=mn(sn.className,Oe.className)),sn}(M,E,P),I=A.as||Ia,B={};for(var W in A)A[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&A.theme===P||(W==="forwardedAs"?B.as=A.forwardedAs:on&&!on(W,I)||(B[W]=A[W]));var ln=function(Nt,Oe){var ft=Nf(),Er=Nt.generateAndInjectStyles(Oe,ft.styleSheet,ft.stylis);return Er}(L,A),Ge=mn(rn,an);return ln&&(Ge+=" "+ln),A.className&&(Ge+=" "+A.className),B[ml(I)&&!Dm.has(I)?"class":"className"]=Ge,B.ref=O,b.createElement(I,B)}(m,w,S)}d.displayName=c;var m=yt.forwardRef(d);return m.attrs=g,m.componentStyle=p,m.displayName=c,m.shouldForwardProp=y,m.foldedComponentIds=r?mn(a.foldedComponentIds,a.styledComponentId):"",m.styledComponentId=h,m.target=r?a.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var O=0,M=C;O<M.length;O++)ks(S,M[O],!0);return S}({},a.defaultProps,w):w}}),Du(m,function(){return".".concat(m.styledComponentId)}),i&&Hm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Of(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Tf=function(e){return Object.assign(e,{isCss:!0})};function ly(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(mr(e)||ga(e))return Tf(xn(Of(Ao,to([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):Tf(xn(Of(r,t)))}function Es(e,t,n){if(n===void 0&&(n=pr),!t)throw ja(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,ly.apply(void 0,to([a],i,!1)))};return r.attrs=function(a){return Es(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Es(e,t,_e(_e({},n),a))},r}var qm=function(e){return Es(oy,e)},Me=qm;Dm.forEach(function(e){Me[e]=qm(e)});const sy=Me.div`
.container {
    margin: 1rem;
  }
  
  .main {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .main__left {
    margin-bottom: 1rem;
  }
  
  .main__title {
    color: #118AB2;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  .main__genre {
    color: #07b48c;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  
  .main__description {
    color: #3d506b;
    margin-bottom: 1rem;
    font-size: 19px;
  }
  
  .main__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 20px;
    background-color: #118AB2;
    color: #fff;
  }
  
  .main__image {
    max-width: 50%;
    margin-left: 10rem;
    height: 300px;
    border-radius: 25px;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style main. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }
  
    .main {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .main__left {
      flex-basis: 40%;
    }
  
    .main__right {
      flex-basis: 60%;
    }
  }
  
`;function Fu(){return v.jsx(sy,{children:v.jsx("div",{className:"container",children:v.jsxs("section",{className:"main",children:[v.jsxs("div",{className:"main__left",children:[v.jsx("h2",{className:"main__title",children:"Covid ID"}),v.jsx("h3",{className:"main__genre",children:"Mentoring Perkembangan Covid"}),v.jsx("p",{className:"main__description",children:"Vaksinasi Covid-19 merupakan salah satu upaya pemerintah Indonesia dalam menangani masalah Covid-19. Vaksinasi Covid-19 bertujuan untuk menciptakan kekebalan kelompok (herd immunity) agar masyarakat menjadi lebih produktif dalam menjalankan aktivitas kesehariannya."}),v.jsx("button",{className:"main__button",children:"Vaccine"})]}),v.jsx("div",{className:"main__right",children:v.jsx("img",{className:"main__image",src:"/img/dokter.jpg",alt:"placeholder"})})]})})})}function Af(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Af(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ao(e){"@babel/helpers - typeof";return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ao(e)}function uy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fy(e,t,n){return t&&cy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uu(e,t){return py(e)||hy(e,t)||eh(e,t)||gy()}function Oa(e){return dy(e)||my(e)||eh(e)||vy()}function dy(e){if(Array.isArray(e))return Cs(e)}function py(e){if(Array.isArray(e))return e}function my(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function eh(e,t){if(e){if(typeof e=="string")return Cs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cs(e,t)}}function Cs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var If=function(){},Bu={},th={},nh=null,rh={mark:If,measure:If};try{typeof window<"u"&&(Bu=window),typeof document<"u"&&(th=document),typeof MutationObserver<"u"&&(nh=MutationObserver),typeof performance<"u"&&(rh=performance)}catch{}var yy=Bu.navigator||{},Rf=yy.userAgent,Lf=Rf===void 0?"":Rf,Jt=Bu,K=th,zf=nh,ti=rh;Jt.document;var Pt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",ah=~Lf.indexOf("MSIE")||~Lf.indexOf("Trident/"),ni,ri,ai,ii,oi,Et="___FONT_AWESOME___",_s=16,ih="fa",oh="svg-inline--fa",bn="data-fa-i2svg",bs="data-fa-pseudo-element",wy="data-fa-pseudo-element-pending",Wu="data-prefix",Vu="data-icon",$f="fontawesome-i2svg",xy="async",ky=["HTML","HEAD","STYLE","SCRIPT"],lh=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",Hu=[G,te];function Ta(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var ya=Ta((ni={},se(ni,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se(ni,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ni)),wa=Ta((ri={},se(ri,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(ri,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ri)),xa=Ta((ai={},se(ai,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(ai,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ai)),Sy=Ta((ii={},se(ii,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(ii,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ii)),Ey=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sh="fa-layers-text",Cy=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_y=Ta((oi={},se(oi,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(oi,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),oi)),uh=[1,2,3,4,5,6,7,8,9,10],by=uh.concat([11,12,13,14,15,16,17,18,19,20]),Py=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=new Set;Object.keys(wa[G]).map(ka.add.bind(ka));Object.keys(wa[te]).map(ka.add.bind(ka));var Ny=[].concat(Hu,Oa(ka),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hn.GROUP,hn.SWAP_OPACITY,hn.PRIMARY,hn.SECONDARY]).concat(uh.map(function(e){return"".concat(e,"x")})).concat(by.map(function(e){return"w-".concat(e)})),Kr=Jt.FontAwesomeConfig||{};function jy(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oy(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var Ty=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ty.forEach(function(e){var t=Uu(e,2),n=t[0],r=t[1],a=Oy(jy(n));a!=null&&(Kr[r]=a)})}var ch={styleDefault:"solid",familyDefault:"classic",cssPrefix:ih,replacementClass:oh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kr.familyPrefix&&(Kr.cssPrefix=Kr.familyPrefix);var hr=N(N({},ch),Kr);hr.autoReplaceSvg||(hr.observeMutations=!1);var T={};Object.keys(ch).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){hr[e]=n,Xr.forEach(function(r){return r(T)})},get:function(){return hr[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){hr.cssPrefix=t,Xr.forEach(function(n){return n(T)})},get:function(){return hr.cssPrefix}});Jt.FontAwesomeConfig=T;var Xr=[];function Ay(e){return Xr.push(e),function(){Xr.splice(Xr.indexOf(e),1)}}var Tt=_s,st={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iy(e){if(!(!e||!Pt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}}var Ry="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sa(){for(var e=12,t="";e-- >0;)t+=Ry[Math.random()*62|0];return t}function kr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Yu(e){return e.classList?kr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function fh(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ly(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(fh(e[n]),'" ')},"").trim()}function Io(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Gu(e){return e.size!==st.size||e.x!==st.x||e.y!==st.y||e.rotate!==st.rotate||e.flipX||e.flipY}function zy(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function $y(e){var t=e.transform,n=e.width,r=n===void 0?_s:n,a=e.height,i=a===void 0?_s:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&ah?s+="translate(".concat(t.x/Tt-r/2,"em, ").concat(t.y/Tt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Tt,"em), calc(-50% + ").concat(t.y/Tt,"em)) "):s+="translate(".concat(t.x/Tt,"em, ").concat(t.y/Tt,"em) "),s+="scale(".concat(t.size/Tt*(t.flipX?-1:1),", ").concat(t.size/Tt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var My=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function dh(){var e=ih,t=oh,n=T.cssPrefix,r=T.replacementClass,a=My;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Mf=!1;function vl(){T.autoAddCss&&!Mf&&(Iy(dh()),Mf=!0)}var Dy={mixout:function(){return{dom:{css:dh,insertCss:vl}}},hooks:function(){return{beforeDOMElementCreation:function(){vl()},beforeI2svg:function(){vl()}}}},Ct=Jt||{};Ct[Et]||(Ct[Et]={});Ct[Et].styles||(Ct[Et].styles={});Ct[Et].hooks||(Ct[Et].hooks={});Ct[Et].shims||(Ct[Et].shims=[]);var Ze=Ct[Et],ph=[],Fy=function e(){K.removeEventListener("DOMContentLoaded",e),io=1,ph.map(function(t){return t()})},io=!1;Pt&&(io=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),io||K.addEventListener("DOMContentLoaded",Fy));function Uy(e){Pt&&(io?setTimeout(e,0):ph.push(e))}function Aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?fh(e):"<".concat(t," ").concat(Ly(r),">").concat(i.map(Aa).join(""),"</").concat(t,">")}function Df(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gl=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function By(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ps(e){var t=By(e);return t.length===1?t[0].toString(16):null}function Wy(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ff(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ns(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ff(t);typeof Ze.hooks.addPack=="function"&&!a?Ze.hooks.addPack(e,Ff(t)):Ze.styles[e]=N(N({},Ze.styles[e]||{}),i),e==="fas"&&Ns("fa",t)}var li,si,ui,Gn=Ze.styles,Vy=Ze.shims,Hy=(li={},se(li,G,Object.values(xa[G])),se(li,te,Object.values(xa[te])),li),Qu=null,mh={},hh={},vh={},gh={},yh={},Yy=(si={},se(si,G,Object.keys(ya[G])),se(si,te,Object.keys(ya[te])),si);function Gy(e){return~Ny.indexOf(e)}function Qy(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Gy(a)?a:null}var wh=function(){var t=function(i){return gl(Gn,function(o,l,s){return o[s]=gl(l,i,{}),o},{})};mh=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),hh=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),yh=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Gn||T.autoFetchSvg,r=gl(Vy,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});vh=r.names,gh=r.unicodes,Qu=Ro(T.styleDefault,{family:T.familyDefault})};Ay(function(e){Qu=Ro(e.styleDefault,{family:T.familyDefault})});wh();function Ku(e,t){return(mh[e]||{})[t]}function Ky(e,t){return(hh[e]||{})[t]}function vn(e,t){return(yh[e]||{})[t]}function xh(e){return vh[e]||{prefix:null,iconName:null}}function Xy(e){var t=gh[e],n=Ku("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zt(){return Qu}var Xu=function(){return{prefix:null,iconName:null,rest:[]}};function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=ya[r][e],i=wa[r][e]||wa[r][a],o=e in Ze.styles?e:null;return i||o||null}var Uf=(ui={},se(ui,G,Object.keys(xa[G])),se(ui,te,Object.keys(xa[te])),ui);function Lo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,G,"".concat(T.cssPrefix,"-").concat(G)),se(t,te,"".concat(T.cssPrefix,"-").concat(te)),t),o=null,l=G;(e.includes(i[G])||e.some(function(u){return Uf[G].includes(u)}))&&(l=G),(e.includes(i[te])||e.some(function(u){return Uf[te].includes(u)}))&&(l=te);var s=e.reduce(function(u,f){var c=Qy(T.cssPrefix,f);if(Gn[f]?(f=Hy[l].includes(f)?Sy[l][f]:f,o=f,u.prefix=f):Yy[l].indexOf(f)>-1?(o=f,u.prefix=Ro(f,{family:l})):c?u.iconName=c:f!==T.replacementClass&&f!==i[G]&&f!==i[te]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?xh(u.iconName):{},g=vn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Gn.far&&Gn.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},Xu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===te&&(Gn.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=vn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Zt()||"fas"),s}var Jy=function(){function e(){uy(this,e),this.definitions={}}return fy(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),Ns(l,o[l]);var s=xa[G][l];s&&Ns(s,o[l]),wh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[l][c]=u)}),n[l][s]=u}),n}}]),e}(),Bf=[],Qn={},nr={},Zy=Object.keys(nr);function qy(e,t){var n=t.mixoutsTo;return Bf=e,Qn={},Object.keys(nr).forEach(function(r){Zy.indexOf(r)===-1&&delete nr[r]}),Bf.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ao(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Qn[o]||(Qn[o]=[]),Qn[o].push(i[o])})}r.provides&&r.provides(nr)}),n}function js(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Qn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Qn[e]||[];a.forEach(function(i){i.apply(null,n)})}function _t(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return nr[e]?nr[e].apply(null,t):void 0}function Os(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Zt();if(t)return t=vn(n,t)||t,Df(kh.definitions,n,t)||Df(Ze.styles,n,t)}var kh=new Jy,ew=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Pn("noAuto")},tw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pt?(Pn("beforeI2svg",t),_t("pseudoElements2svg",t),_t("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Uy(function(){rw({autoReplaceSvgRoot:n}),Pn("watch",t)})}},nw={icon:function(t){if(t===null)return null;if(ao(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ro(t[0]);return{prefix:r,iconName:vn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Ey))){var a=Lo(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Zt(),iconName:vn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Zt();return{prefix:i,iconName:vn(i,t)||t}}}},De={noAuto:ew,config:T,dom:tw,parse:nw,library:kh,findIconDefinition:Os,toHtml:Aa},rw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ze.styles).length>0||T.autoFetchSvg)&&Pt&&T.autoReplaceSvg&&De.dom.i2svg({node:r})};function zo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Pt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function aw(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Gu(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Io(N(N({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function iw(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function Ju(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,c=e.extra,h=e.watchable,g=h===void 0?!1:h,y=r.found?r:n,x=y.width,k=y.height,p=a==="fak",d=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(M){return c.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(c.classes).join(" "),m={children:[],attributes:N(N({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:d,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(k)})},w=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(x/k*16*.0625,"em")}:{};g&&(m.attributes[bn]=""),s&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||Sa())},children:[s]}),delete m.attributes.title);var S=N(N({},m),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},w),c.styles)}),C=r.found&&n.found?_t("generateAbstractMask",S)||{children:[],attributes:{}}:_t("generateAbstractIcon",S)||{children:[],attributes:{}},E=C.children,O=C.attributes;return S.children=E,S.attributes=O,l?iw(S):aw(S)}function Wf(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[bn]="");var f=N({},o.styles);Gu(a)&&(f.transform=$y({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var c=Io(f);c.length>0&&(u.style=c);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function ow(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Io(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yl=Ze.styles;function Ts(e){var t=e[0],n=e[1],r=e.slice(4),a=Uu(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(hn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(hn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lw={found:!1,width:512,height:512};function sw(e,t){!lh&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function As(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Zt()),new Promise(function(r,a){if(_t("missingIconAbstract"),n==="fa"){var i=xh(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yl[t]&&yl[t][e]){var o=yl[t][e];return r(Ts(o))}sw(e,t),r(N(N({},lw),{},{icon:T.showMissingIcons&&e?_t("missingIconAbstract")||{}:{}}))})}var Vf=function(){},Is=T.measurePerformance&&ti&&ti.mark&&ti.measure?ti:{mark:Vf,measure:Vf},Mr='FA "6.5.2"',uw=function(t){return Is.mark("".concat(Mr," ").concat(t," begins")),function(){return Sh(t)}},Sh=function(t){Is.mark("".concat(Mr," ").concat(t," ends")),Is.measure("".concat(Mr," ").concat(t),"".concat(Mr," ").concat(t," begins"),"".concat(Mr," ").concat(t," ends"))},Zu={begin:uw,end:Sh},Pi=function(){};function Hf(e){var t=e.getAttribute?e.getAttribute(bn):null;return typeof t=="string"}function cw(e){var t=e.getAttribute?e.getAttribute(Wu):null,n=e.getAttribute?e.getAttribute(Vu):null;return t&&n}function fw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function dw(){if(T.autoReplaceSvg===!0)return Ni.replace;var e=Ni[T.autoReplaceSvg];return e||Ni.replace}function pw(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function mw(e){return K.createElement(e)}function Eh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pw:mw:n;if(typeof e=="string")return K.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Eh(o,{ceFn:r}))}),a}function hw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ni={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Eh(a),n)}),n.getAttribute(bn)===null&&T.keepOriginalSource){var r=K.createComment(hw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Yu(n).indexOf(T.replacementClass))return Ni.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===T.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Aa(l)}).join(`
`);n.setAttribute(bn,""),n.innerHTML=o}};function Yf(e){e()}function Ch(e,t){var n=typeof t=="function"?t:Pi;if(e.length===0)n();else{var r=Yf;T.mutateApproach===xy&&(r=Jt.requestAnimationFrame||Yf),r(function(){var a=dw(),i=Zu.begin("mutate");e.map(a),i(),n()})}}var qu=!1;function _h(){qu=!0}function Rs(){qu=!1}var oo=null;function Gf(e){if(zf&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Pi:t,r=e.nodeCallback,a=r===void 0?Pi:r,i=e.pseudoElementsCallback,o=i===void 0?Pi:i,l=e.observeMutationsRoot,s=l===void 0?K:l;oo=new zf(function(u){if(!qu){var f=Zt();kr(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Hf(c.addedNodes[0])&&(T.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&T.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Hf(c.target)&&~Py.indexOf(c.attributeName))if(c.attributeName==="class"&&cw(c.target)){var h=Lo(Yu(c.target)),g=h.prefix,y=h.iconName;c.target.setAttribute(Wu,g||f),y&&c.target.setAttribute(Vu,y)}else fw(c.target)&&a(c.target)})}}),Pt&&oo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vw(){oo&&oo.disconnect()}function gw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function yw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Lo(Yu(e));return a.prefix||(a.prefix=Zt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ky(a.prefix,e.innerText)||Ku(a.prefix,Ps(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ww(e){var t=kr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Sa()):(t["aria-hidden"]="true",t.focusable="false")),t}function xw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:st,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yw(e),r=n.iconName,a=n.prefix,i=n.rest,o=ww(e),l=js("parseNodeAttributes",{},e),s=t.styleParser?gw(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:st,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var kw=Ze.styles;function bh(e){var t=T.autoReplaceSvg==="nest"?Qf(e,{styleParser:!1}):Qf(e);return~t.extra.classes.indexOf(sh)?_t("generateLayersText",e,t):_t("generateSvgReplacementMutation",e,t)}var qt=new Set;Hu.map(function(e){qt.add("fa-".concat(e))});Object.keys(ya[G]).map(qt.add.bind(qt));Object.keys(ya[te]).map(qt.add.bind(qt));qt=Oa(qt);function Kf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pt)return Promise.resolve();var n=K.documentElement.classList,r=function(c){return n.add("".concat($f,"-").concat(c))},a=function(c){return n.remove("".concat($f,"-").concat(c))},i=T.autoFetchSvg?qt:Hu.map(function(f){return"fa-".concat(f)}).concat(Object.keys(kw));i.includes("fa")||i.push("fa");var o=[".".concat(sh,":not([").concat(bn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(bn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=kr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Zu.begin("onTree"),u=l.reduce(function(f,c){try{var h=bh(c);h&&f.push(h)}catch(g){lh||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(h){Ch(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),c(h)})})}function Sw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bh(e).then(function(n){n&&Ch([n],t)})}function Ew(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Os(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Os(a||{})),e(r,N(N({},n),{},{mask:a}))}}var Cw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?st:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,c=n.title,h=c===void 0?null:c,g=n.titleId,y=g===void 0?null:g,x=n.classes,k=x===void 0?[]:x,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var S=t.prefix,C=t.iconName,E=t.icon;return zo(N({type:"icon"},t),function(){return Pn("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?d["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(y||Sa()):(d["aria-hidden"]="true",d.focusable="false")),Ju({icons:{main:Ts(E),mask:s?Ts(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:N(N({},st),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:d,styles:w,classes:k}})})}},_w={mixout:function(){return{icon:Ew(Cw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Kf,n.nodeCallback=Sw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?K:r,i=n.callback,o=i===void 0?function(){}:i;return Kf(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,c=r.maskId,h=r.extra;return new Promise(function(g,y){Promise.all([As(a,l),f.iconName?As(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var k=Uu(x,2),p=k[0],d=k[1];g([n,Ju({icons:{main:p,mask:d},prefix:l,iconName:a,transform:s,symbol:u,maskId:c,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Io(l);s.length>0&&(a.style=s);var u;return Gu(o)&&(u=_t("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},bw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zo({type:"layer"},function(){Pn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Oa(i)).join(" ")},children:o}]})}}}},Pw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,c=f===void 0?{}:f;return zo({type:"counter",content:n},function(){return Pn("beforeDOMElementCreation",{content:n,params:r}),ow({content:n.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Oa(l))}})})}}}},Nw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?st:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,c=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return zo({type:"text",content:n},function(){return Pn("beforeDOMElementCreation",{content:n,params:r}),Wf({content:n,transform:N(N({},st),i),title:l,extra:{attributes:c,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Oa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(ah){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Wf({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},jw=new RegExp('"',"ug"),Xf=[1105920,1112319];function Ow(e){var t=e.replace(jw,""),n=Wy(t,0),r=n>=Xf[0]&&n<=Xf[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ps(a?t[0]:t),isSecondary:r||a}}function Jf(e,t){var n="".concat(wy).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=kr(e.children),o=i.filter(function(E){return E.getAttribute(bs)===t})[0],l=Jt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Cy),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var c=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?te:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?wa[h][s[2].toLowerCase()]:_y[h][u],y=Ow(c),x=y.value,k=y.isSecondary,p=s[0].startsWith("FontAwesome"),d=Ku(g,x),m=d;if(p){var w=Xy(x);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!k&&(!o||o.getAttribute(Wu)!==g||o.getAttribute(Vu)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var S=xw(),C=S.extra;C.attributes[bs]=t,As(d,g).then(function(E){var O=Ju(N(N({},S),{},{icons:{main:E,mask:Xu()},prefix:g,iconName:m,extra:C,watchable:!0})),M=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=O.map(function(L){return Aa(L)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Tw(e){return Promise.all([Jf(e,"::before"),Jf(e,"::after")])}function Aw(e){return e.parentNode!==document.head&&!~ky.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Zf(e){if(Pt)return new Promise(function(t,n){var r=kr(e.querySelectorAll("*")).filter(Aw).map(Tw),a=Zu.begin("searchPseudoElements");_h(),Promise.all(r).then(function(){a(),Rs(),t()}).catch(function(){a(),Rs(),n()})})}var Iw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zf,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?K:r;T.searchPseudoElements&&Zf(a)}}},qf=!1,Rw={mixout:function(){return{dom:{unwatch:function(){_h(),qf=!0}}}},hooks:function(){return{bootstrap:function(){Gf(js("mutationObserverCallbacks",{}))},noAuto:function(){vw()},watch:function(n){var r=n.observeMutationsRoot;qf?Rs():Gf(js("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ed=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Lw={mixout:function(){return{parse:{transform:function(n){return ed(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ed(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:c,path:h};return{tag:"g",attributes:N({},g.outer),children:[{tag:"g",attributes:N({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),g.path)}]}]}}}},wl={x:0,y:0,width:"100%",height:"100%"};function td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zw(e){return e.tag==="g"?e.children:[e]}var $w={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Lo(a.split(" ").map(function(o){return o.trim()})):Xu();return i.prefix||(i.prefix=Zt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,c=o.width,h=o.icon,g=zy({transform:s,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:N(N({},wl),{},{fill:"white"})},x=f.children?{children:f.children.map(td)}:{},k={tag:"g",attributes:N({},g.inner),children:[td(N({tag:f.tag,attributes:N(N({},f.attributes),g.path)},x))]},p={tag:"g",attributes:N({},g.outer),children:[k]},d="mask-".concat(l||Sa()),m="clip-".concat(l||Sa()),w={tag:"mask",attributes:N(N({},wl),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:zw(h)},w]};return r.push(S,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},wl)}),{children:r,attributes:a}}}},Mw={provides:function(t){var n=!1;Jt.matchMedia&&(n=Jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dw={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Fw=[Dy,_w,bw,Pw,Nw,Iw,Rw,Lw,$w,Mw,Dw];qy(Fw,{mixoutsTo:De});De.noAuto;De.config;De.library;De.dom;var Ls=De.parse;De.findIconDefinition;De.toHtml;var Uw=De.icon;De.layer;De.text;De.counter;var Ph={exports:{}},Bw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ww=Bw,Vw=Ww;function Nh(){}function jh(){}jh.resetWarningCache=Nh;var Hw=function(){function e(r,a,i,o,l,s){if(s!==Vw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jh,resetWarningCache:Nh};return n.PropTypes=n,n};Ph.exports=Hw();var Yw=Ph.exports;const z=od(Yw);function nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nd(Object(n),!0).forEach(function(r){Kn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lo(e){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(e)}function Kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gw(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qw(e,t){if(e==null)return{};var n=Gw(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zs(e){return Kw(e)||Xw(e)||Jw(e)||Zw()}function Kw(e){if(Array.isArray(e))return $s(e)}function Xw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jw(e,t){if(e){if(typeof e=="string")return $s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $s(e,t)}}function $s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qw(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,c=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,x=e.listItem,k=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Kn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Kn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Kn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Kn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function ex(e){return e=e-0,e===e}function Oh(e){return ex(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var tx=["style"];function nx(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rx(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Oh(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[nx(a)]=i:t[a]=i,t},{})}function Th(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Th(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=rx(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[Oh(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Qw(n,tx);return a.attrs.style=ot(ot({},a.attrs.style),o),e.apply(void 0,[t.tag,ot(ot({},a.attrs),l)].concat(zs(r)))}var Ah=!1;try{Ah=!0}catch{}function ax(){if(!Ah&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function rd(e){if(e&&lo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ls.icon)return Ls.icon(e);if(e===null)return null;if(e&&lo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kn({},e,t):{}}var ad={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Jr=yt.forwardRef(function(e,t){var n=ot(ot({},ad),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,s=n.titleId,u=n.maskId,f=rd(r),c=xl("classes",[].concat(zs(qw(n)),zs((o||"").split(" ")))),h=xl("transform",typeof n.transform=="string"?Ls.transform(n.transform):n.transform),g=xl("mask",rd(a)),y=Uw(f,ot(ot(ot(ot({},c),h),g),{},{symbol:i,title:l,titleId:s,maskId:u}));if(!y)return ax("Could not find icon",f),null;var x=y.abstract,k={ref:t};return Object.keys(n).forEach(function(p){ad.hasOwnProperty(p)||(k[p]=n[p])}),ix(x[0],k)});Jr.displayName="FontAwesomeIcon";Jr.propTypes={beat:z.bool,border:z.bool,beatFade:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};var ix=Th.bind(null,yt.createElement),ox={prefix:"fas",iconName:"virus",icon:[512,512,[],"e074","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H43.5c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H468.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},lx={prefix:"fas",iconName:"skull",icon:[512,512,[128128],"f54c","M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},sx={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ux=sx;const cx=Me.div`
  .container {
    padding: 20px;
    text-align: center;
  }

  .container h1 {
    color: #118AB2;
  }

  .container p {
    font-size: 1.8rem;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
  }

  .cardContainerp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    width: 391px;
    height: 384px;
    text-align: left;
  }

  .card h2 {
    font-size: 1,5rem;
    margin-bottom: 20px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }

  .number {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .icon {
    font-size: 2rem;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .confirmed .icon,
  .confirmed .number {
    color: #06D6A0;
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .recovered .icon,
  .recovered .number {
    color: #118AB2;
  }

  .death .icon,
  .death .number {
    color: #EF476F;
  }

  .label {
    font-size: 1rem;
    color: #000;
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    .card {
      width: calc(33.33% - 20px); /* Adjusts to fit three cards in a row with margin */
    }
  }

  @media (min-width: 992px) {
    .card {
      width: calc(33.33% - 20px); /* Adjusts to fit three cards in a row with margin */
    }
  }
`,fx=Me.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 40px;
  flex: auto;
  margin: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    max-width: 400px;
    margin: 4rem auto;
  }

  p {
    font-size: 20px;
    margin: auto;
  }

  h2 {
    margin: 0;
    color: black; /* Warna default untuk <h2> */
    font-size: 36px;
    margin-top: 10px;
  }

  &.confirmed h2 {
    color: #06d6a0; /* Warna untuk kasus Positif */
  }

  &.recovered h2 {
    color: #118ab2; /* Warna untuk kasus Sembuh */
  }

  &.death h2 {
    color: #ef476f; /* Warna untuk kasus Meninggal */
  }
`;function dx(e){const{status:t,total:n}=e;return v.jsxs(fx,{className:t.toLowerCase(),children:[v.jsx("p",{children:t}),v.jsx("h2",{children:n})]})}function px(){const[e,t]=b.useState([]),[n,r]=b.useState([]);return b.useEffect(()=>{(async()=>{try{const o=await(await fetch("https://covid-fe-2023.vercel.app/api/global.json")).json();r(o.global),t(o.regions)}catch(i){console.error("Error fetching data:",i)}})()},[]),v.jsxs(cx,{children:[v.jsxs("div",{className:"container",children:[v.jsx("h1",{children:"Global"}),v.jsx("p",{children:"Data Covid Global"}),v.jsx("div",{className:"cardContainerp",children:n.map((a,i)=>v.jsx(dx,{status:a.status,total:a.total.toLocaleString()},i))})]}),v.jsxs("div",{className:"container",children:[v.jsx("h1",{className:"title",children:"Situation by Regions"}),v.jsx("p",{className:"subtitle",children:"Bacaan Pilihan Covid"}),v.jsx("div",{className:"cardContainer",children:e.map((a,i)=>v.jsxs("div",{className:"card",children:[v.jsx("h2",{children:a.name}),v.jsxs("div",{className:"stat confirmed",children:[v.jsx("span",{className:"label",children:"Confirmed"}),v.jsxs("div",{className:"number",children:[a.numbers.confirmed.toLocaleString(),v.jsx(Jr,{className:"icon",icon:ox})]})]}),v.jsxs("div",{className:"stat recovered",children:[v.jsx("span",{className:"label",children:"Recovered"}),v.jsxs("div",{className:"number",children:[a.numbers.recovered.toLocaleString(),v.jsx(Jr,{className:"icon",icon:ux})]})]}),v.jsxs("div",{className:"stat death",children:[v.jsx("span",{className:"label",children:"Death"}),v.jsxs("div",{className:"number",children:[a.numbers.death.toLocaleString(),v.jsx(Jr,{className:"icon",icon:lx})]})]})]},i))})]})]})}function mx(){return v.jsx("div",{children:v.jsxs("main",{children:[v.jsx(Fu,{}),v.jsx(px,{})]})})}const hx=Me.div`
.container {
    background-color: #118AB2;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

.footer{
    display: flex;
}
  
  .footer__title {
    margin-bottom: 1rem;
    font-size: 3.5rem;
  }
  
  .footer__author {
    margin-bottom: 1rem;
  }
  .footer__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  .footer__item {
    margin-bottom: 1rem;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .footer{

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .footer__list {
        flex-direction: row;
      }
    
      .footer__item {
        margin: 0 1rem;
      }
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
`;function vx(){return v.jsx(hx,{children:v.jsx("div",{className:"container",children:v.jsxs("footer",{className:"footer",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"footer__title",children:"Covid App"}),v.jsx("p",{className:"footer__author",children:"Create by Lurking Choco"})]}),v.jsx("div",{children:v.jsxs("ul",{className:"footer__list",children:[v.jsx("li",{className:"footer__item",children:"Global"}),v.jsx("li",{className:"footer__item",children:"Indonesia"}),v.jsx("li",{className:"footer__item",children:"Provinsi"}),v.jsx("li",{className:"footer__item",children:"About"})]})})]})})})}const gx=Me.div`
  .container {
    background-color: #118AB2;
    padding: 1rem;
    color: #ffffff;
  }
  
  .navbar {
    display: flex;
    flex-direction: column;
  }
  
  .navbar__brand {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  .navbar__item {
    margin-bottom: 1rem;
  }

  .navbar__item a {
    text-decoration: none;
    color: white; /* Warna teks untuk link */
  }

  .navbar__item a:hover {
    color: white; /* Warna teks saat di-hover */
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    .navbar__brand {
      margin-bottom: 0;
    }
  
    .navbar__list {
      flex-direction: row;
    }
  
    .navbar__item {
      margin: 0 1rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing TODO HERE.
     * We haven't styling Navbar.
     */
  }
`;function yx(){return v.jsx(gx,{children:v.jsx("div",{className:"container",children:v.jsxs("nav",{className:"navbar",children:[v.jsx("div",{children:v.jsx("h1",{className:"navbar__brand",children:"Covid App"})}),v.jsx("div",{children:v.jsxs("ul",{className:"navbar__list",children:[v.jsx("li",{className:"navbar__item",children:v.jsx(Za,{to:"/",children:" Global "})}),v.jsx("li",{className:"navbar__item",children:v.jsx(Za,{to:"/wilayah/indonesia",children:"Indonesia"})}),v.jsx("li",{className:"navbar__item",children:v.jsx(Za,{to:"/wilayah/provinsi",children:"Provinsi"})}),v.jsx("li",{className:"navbar__item",children:v.jsx(Za,{to:"/wilayah/about",children:"About"})})]})})]})})})}const wx="_container_19pg9_1",xx={container:wx};function kx({children:e}){return v.jsx("div",{className:xx.container,children:e})}function Sx({children:e}){return v.jsxs(v.Fragment,{children:[v.jsx(yx,{}),v.jsx("main",{children:v.jsx(kx,{children:e})}),v.jsx(vx,{})]})}const Ex=Me.div`
  .tableContainer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: #333;

    h1 {
      text-align: center;
      color: #118AB2;
    }
    h3 {
      text-align: center;
      color: #06D6A0;
    }
  }

  .provinsi {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;

    th, td {
      border: 1px solid #00f577;
      padding: 8px;
    }

    th {
      background-color: #70d2f2;
    }

    tbody tr:nth-child(odd) {
      background-color: #69f0cc;
    }
  }
`;Me.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 40px;
  flex: auto;
  margin: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    max-width: 400px;
    margin: 4rem auto;
  }

  p {
    font-size: 20px;
    margin: auto;
  }

  h2 {
    margin: 0;
    color: black; /* Warna default untuk <h2> */
    font-size: 36px;
    margin-top: 10px;
  }

  &.confirmed h2 {
    color: #06d6a0; /* Warna untuk kasus Positif */
  }

  &.recovered h2 {
    color: #118ab2; /* Warna untuk kasus Sembuh */
  }

  &.death h2 {
    color: #ef476f; /* Warna untuk kasus Meninggal */
  }
`;function Cx(){const[e,t]=b.useState([]);return b.useEffect(()=>{fetch("https://covid-fe-2023.vercel.app/api/indonesia.json").then(n=>n.json()).then(n=>{n&&n.regions?t(n.regions):console.error("Data tidak ditemukan")}).catch(n=>console.error("Error fetching data:",n))},[]),v.jsx(Ex,{children:v.jsxs("div",{className:"tableContainer",children:[v.jsx("h1",{children:"Provinsi"}),v.jsx("h3",{children:"Total kasus Covid 19"}),v.jsxs("table",{className:"provinsi",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"No"}),v.jsx("th",{children:"Provinsi"}),v.jsx("th",{children:"Positif"}),v.jsx("th",{children:"Sembuh"}),v.jsx("th",{children:"Dirawat"}),v.jsx("th",{children:"Meninggal"})]})}),v.jsx("tbody",{children:e.length>0?e.map((n,r)=>v.jsxs("tr",{children:[v.jsx("td",{children:r+1}),v.jsx("td",{children:n.name}),v.jsx("td",{children:n.numbers.confirmed}),v.jsx("td",{children:n.numbers.recovered}),v.jsx("td",{children:n.numbers.treatment}),v.jsx("td",{children:n.numbers.death})]},r)):v.jsx("tr",{children:v.jsx("td",{colSpan:"6",children:"Loading..."})})})]})]})})}const _x=Me.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 40px;
  flex: auto;
  margin: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    max-width: 400px;
    margin: 4rem auto;
  }

  p {
    font-size: 20px;
    margin: auto;
  }

  h2 {
    margin: 0;
    color: black; /* Warna default untuk <h2> */
    font-size: 36px;
    margin-top: 10px;
  }

  &.confirmed h2 {
    color: #06d6a0; /* Warna untuk kasus Positif */
  }

  &.recovered h2 {
    color: #118ab2; /* Warna untuk kasus Sembuh */
  }

  &.death h2 {
    color: #ef476f; /* Warna untuk kasus Meninggal */
  }
`;function bx(e){const{status:t,total:n}=e;return v.jsxs(_x,{className:t.toLowerCase(),children:[v.jsx("p",{children:t}),v.jsx("h2",{children:n})]})}const Px=Me.div`
.container {
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.container h1 {
  color: #118AB2;
}


.cardContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  padding: 0 50px;
}
`;function Nx(){const[e,t]=b.useState([]);return b.useEffect(()=>{fetch("https://covid-fe-2023.vercel.app/api/indonesia.json").then(n=>n.json()).then(n=>t(n.indonesia)).catch(n=>console.error("Error fetching data:",n))},[]),v.jsx(Px,{children:v.jsxs("div",{className:"container",children:[v.jsx("h1",{children:"Indonesia"}),v.jsx("p",{children:"Data Covid Berdasarkan Indonesia"}),v.jsx("div",{className:"cardContainer",children:e.map(n=>v.jsx(bx,{status:n.status,total:n.total},n.status))})]})})}function jx(){return v.jsxs(v.Fragment,{children:[v.jsx(Fu,{}),v.jsx(Nx,{}),v.jsx(Cx,{})]})}let Ox=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const Tx=Me.div`
.formContainer {
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.formGroup {
  margin-bottom: 10px;
  margin-left: 1rem;
}
.formGroup select{
  border: 2px solid #118AB2;
}

.formGroup input{
  border: 2px solid #118AB2;
}

label {
  margin-bottom: 5px;
}
.form__image {
  max-width: 50%;
  margin-left: 1rem;
  height: 300px;
  border-radius: 25px;
}

.formGroup p {
  color: #EF476F;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #118AB2;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 3px;
}

button {
  background-color: #118AB2;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style form. 
   */
   .container {
    max-width: 1200px;
    margin: 3rem auto;
    
  }

  .form {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .form__left {
    flex-basis: 40%;
  }

  .form__right {
    flex-basis: 60%;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
    
  }

  .form {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .form__left {
    flex-basis: 40%;
  }

  .form__right {
    flex-basis: 60%;
  }
}
`;function Ax({prov:e,setProvinsiData:t}){const[n,r]=b.useState(""),[a,i]=b.useState(""),[o,l]=b.useState(""),[s,u]=b.useState(!1),f=c=>{if(c.preventDefault(),n===""||a===""||o===""){u(!0);return}t(h=>{const g=h.find(k=>k.kota===n),y=parseInt(o);let x=[...h];if(g)x=h.map(k=>{if(k.kota===n)switch(a){case"kasus":return{...k,kasus:k.kasus+y};case"sembuh":return{...k,kasus:k.kasus-y,sembuh:k.sembuh+y};case"meninggal":return{...k,kasus:k.kasus-y,meninggal:k.meninggal+y};case"dirawat":return{...k,kasus:k.kasus+y,dirawat:k.dirawat+y};default:return k}return k});else{const k={kota:n,kasus:a==="kasus"?y:0,dirawat:a==="dirawat"?y:0,sembuh:a==="sembuh"?y:0,meninggal:a==="meninggal"?y:0};x.push(k)}return x}),r(""),i(""),l(""),u(!1)};return v.jsx(Tx,{children:v.jsx("div",{className:"container",children:v.jsxs("section",{className:"form",children:[v.jsx("div",{className:"form__left",children:v.jsx("img",{className:"form__image",src:"/img/p.svg",alt:"placeholder"})}),v.jsx("div",{className:"form__right",children:v.jsxs("div",{className:"formContainer",children:[v.jsx("h2",{children:"Form Input Kasus COVID"}),v.jsxs("form",{onSubmit:f,children:[v.jsxs("div",{className:"formGroup",children:[v.jsx("label",{htmlFor:"provinsi",children:"Provinsi:"}),v.jsxs("select",{id:"provinsi",value:n,onChange:c=>r(c.target.value),children:[v.jsx("option",{value:"",children:"Pilih Provinsi"}),e.provinces.map(c=>v.jsx("option",{value:c.kota,children:c.kota},Ox()))]})]}),v.jsxs("div",{className:"formGroup",children:[v.jsx("label",{htmlFor:"status",children:"Status:"}),v.jsxs("select",{id:"status",value:a,onChange:c=>i(c.target.value),children:[v.jsx("option",{value:"",children:"Pilih Status"}),v.jsx("option",{value:"kasus",children:"Positif"}),v.jsx("option",{value:"sembuh",children:"Sembuh"}),v.jsx("option",{value:"dirawat",children:"Dirawat"}),v.jsx("option",{value:"meninggal",children:"Meninggal"})]})]}),v.jsxs("div",{className:"formGroup",children:[v.jsx("label",{htmlFor:"jumlah",children:"Jumlah:"}),v.jsx("input",{type:"number",id:"jumlah",value:o,onChange:c=>l(c.target.value)}),s&&v.jsx("p",{children:"Semua field harus diisi"})]}),v.jsx("button",{type:"submit",children:"Tambah"})]})]})})]})})})}const Ix="_provinsi_8sxg5_1",Rx={provinsi:Ix};function Lx(e){const{nomor:t,kota:n,kasus:r,sembuh:a,meninggal:i,dirawat:o}=e;return v.jsxs("tr",{className:Rx.row,children:[v.jsx("td",{children:t}),v.jsx("td",{children:n}),v.jsx("td",{children:r}),v.jsx("td",{children:a}),v.jsx("td",{children:o}),v.jsx("td",{children:i})]})}const zx=Me.div`
.tableContainer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: #333;
  
    h1 {
      text-align: center;
      color: #118AB2;
    }
    h3{
        text-align: center;
      color: #06D6A0;

    }
  }
  
  .provinsi {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
  
    th, td {
      border: 1px solid #00f577;
      padding: 8px;
    }
  
    th {
      background-color: #70d2f2;
    }
  
    tbody tr:nth-child(odd) {
      background-color: #69f0cc;
    }
  }
`;function $x(e){const{prov:t}=e;return v.jsx(zx,{children:v.jsxs("div",{className:"tableContainer",children:[v.jsx("h1",{children:"Provinsi"}),v.jsx("h3",{children:"Data Covid Berdasarkan Provinsi"}),v.jsxs("table",{className:"provinsi",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"No"}),v.jsx("th",{children:"Provinsi"}),v.jsx("th",{children:"Positif"}),v.jsx("th",{children:"Sembuh"}),v.jsx("th",{children:"Dirawat"}),v.jsx("th",{children:"Meninggal"})]})}),v.jsx("tbody",{children:t.map((n,r)=>v.jsx(Lx,{nomor:r+1,kota:n.kota,kasus:n.kasus,sembuh:n.sembuh,dirawat:n.dirawat,meninggal:n.meninggal},r))})]})]})})}const id={last_update:"2024-04-01",total_province:34,provinces:[{kota:"Jakarta",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Jawa Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Jawa Tengah",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Jawa Timur",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Banten",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Yogyakarta",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kalimantan Timur",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Bali",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sumatera Utara",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Riau",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sulawesi Selatan",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sumatera Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Nusa Tenggara Timur",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kalimantan Selatan",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sumatera Selatan",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Lampung",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kepulauan Riau",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Bangka Belitung",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kalimantan Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sulawesi Tengah",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kalimantan Tengah",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sulawesi Utara",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Papua",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Kalimantan Utara",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Aceh",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Jambi",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Nusa Tenggara Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Papua Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Bengkulu",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sulawesi Tenggara",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Maluku",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Sulawesi Barat",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Maluku Utara",kasus:0,sembuh:0,meninggal:0,dirawat:0},{kota:"Gorontalo",kasus:0,sembuh:0,meninggal:0,dirawat:0}]};function Mx(){const[e,t]=b.useState(id.provinces);return v.jsxs(v.Fragment,{children:[v.jsx(Fu,{}),v.jsx($x,{prov:e}),v.jsx(Ax,{prov:id,setProvinsiData:t})]})}const Dx=Me.div`
.container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.header {
  font-size: 24px;
  margin-bottom: 10px;
}

.article {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  margin-top: 5px;
}
`;var Fx={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ux="https://newsapi.org/v2",Bx=Fx.NEWS_API_KEY,Wx={NEWS:`${Ux}/everything?q=keyword&apiKey=${Bx}`};function Vx(){const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{(async()=>{try{const o=await(await fetch(Wx.NEWS)).json();t(o.articles),r(!1)}catch(i){console.error("Error fetching the news articles:",i),r(!1)}})()},[]),v.jsx(Dx,{children:v.jsxs("div",{className:"container",children:[v.jsx("div",{className:"header",children:"Random News in the World"}),n?v.jsx("div",{children:"Loading..."}):e.map((a,i)=>v.jsxs("div",{className:"article",children:[v.jsx("div",{className:"title",children:a.title}),v.jsx("div",{className:"description",children:a.description})]},i))]})})}function Hx(){return v.jsx(v.Fragment,{children:v.jsx(Vx,{})})}function Yx(){return v.jsx("div",{children:v.jsx(Sx,{children:v.jsxs(Kg,{children:[v.jsx(zr,{path:"/",element:v.jsx(mx,{})}),v.jsx(zr,{path:"/wilayah/indonesia",element:v.jsx(jx,{})}),v.jsx(zr,{path:"/wilayah/provinsi",element:v.jsx(Mx,{})}),v.jsx(zr,{path:"/wilayah/about",element:v.jsx(Hx,{})})]})})})}kl.createRoot(document.getElementById("root")).render(v.jsx(yt.StrictMode,{children:v.jsx(n1,{children:v.jsx(Yx,{})})}));
