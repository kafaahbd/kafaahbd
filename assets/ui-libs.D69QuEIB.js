import{r as c,j as _,i as B,g as Jt,s as At,a as Lt,b as rt,c as Vt,d as Qt,e as te,f as ee,h as ne,k as se,l as oe,m as Dt,n as ie,o as ae,p as re,q as ce,S as le,H as ue,F as A,t as he,u as jt,v as z,w as ct,x as E,y as $t,z as de,A as lt,B as fe,C as H,D as J,E as ut,G as pe,I as me,J as b,K as ye,L as ge,M as ve,N as ht,O as ke,P as xe,Q as dt,R as Me,T as we,U as R,V as Pe,W as Ce,X as Nt,Y as Ee,Z as Se,_ as _e}from"./vendor.Cww9vrQA.js";const et=c.createContext({});function nt(e){const t=c.useRef(null);return t.current===null&&(t.current=e()),t.current}const be=typeof window<"u",It=be?c.useLayoutEffect:c.useEffect,O=c.createContext(null),st=c.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function ft(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ae(...e){return t=>{let n=!1;const s=e.map(o=>{const i=ft(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<s.length;o++){const i=s[o];typeof i=="function"?i():ft(e[o],null)}}}}function Le(...e){return c.useCallback(Ae(...e),e)}class Ve extends c.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(B(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=B(s)&&s.offsetWidth||0,i=B(s)&&s.offsetHeight||0,a=getComputedStyle(n),r=this.props.sizeRef.current;r.height=parseFloat(a.height),r.width=parseFloat(a.width),r.top=n.offsetTop,r.left=n.offsetLeft,r.right=o-r.width-r.left,r.bottom=i-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function De({children:e,isPresent:t,anchorX:n,anchorY:s,root:o,pop:i}){var u;const a=c.useId(),r=c.useRef(null),p=c.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:d}=c.useContext(st),f=((u=e.props)==null?void 0:u.ref)??(e==null?void 0:e.ref),h=Le(r,f);return c.useInsertionEffect(()=>{const{width:y,height:m,top:g,left:v,right:k,bottom:x}=p.current;if(t||i===!1||!r.current||!y||!m)return;const M=n==="left"?`left: ${v}`:`right: ${k}`,w=s==="bottom"?`bottom: ${x}`:`top: ${g}`;r.current.dataset.motionPopId=a;const C=document.createElement("style");d&&(C.nonce=d);const L=o??document.head;return L.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${m}px !important;
            ${M}px !important;
            ${w}px !important;
          }
        `),()=>{L.contains(C)&&L.removeChild(C)}},[t]),_.jsx(Ve,{isPresent:t,childRef:r,sizeRef:p,pop:i,children:i===!1?e:c.cloneElement(e,{ref:h})})}const je=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:i,mode:a,anchorX:r,anchorY:p,root:d})=>{const f=nt($e),h=c.useId();let u=!0,y=c.useMemo(()=>(u=!1,{id:h,initial:t,isPresent:n,custom:o,onExitComplete:m=>{f.set(m,!0);for(const g of f.values())if(!g)return;s&&s()},register:m=>(f.set(m,!1),()=>f.delete(m))}),[n,f,s]);return i&&u&&(y={...y}),c.useMemo(()=>{f.forEach((m,g)=>f.set(g,!1))},[n]),c.useEffect(()=>{!n&&!f.size&&s&&s()},[n]),e=_.jsx(De,{pop:a==="popLayout",isPresent:n,anchorX:r,anchorY:p,root:d,children:e}),_.jsx(O.Provider,{value:y,children:e})};function $e(){return new Map}function Tt(e=!0){const t=c.useContext(O);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,i=c.useId();c.useEffect(()=>{if(e)return o(i)},[e]);const a=c.useCallback(()=>e&&s&&s(i),[i,s,e]);return!n&&s?[!1,a]:[!0]}const N=e=>e.key||"";function pt(e){const t=[];return c.Children.forEach(e,n=>{c.isValidElement(n)&&t.push(n)}),t}const uo=({children:e,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:i="sync",propagate:a=!1,anchorX:r="left",anchorY:p="top",root:d})=>{const[f,h]=Tt(a),u=c.useMemo(()=>pt(e),[e]),y=a&&!f?[]:u.map(N),m=c.useRef(!0),g=c.useRef(u),v=nt(()=>new Map),k=c.useRef(new Set),[x,M]=c.useState(u),[w,C]=c.useState(u);It(()=>{m.current=!1,g.current=u;for(let S=0;S<w.length;S++){const P=N(w[S]);y.includes(P)?(v.delete(P),k.current.delete(P)):v.get(P)!==!0&&v.set(P,!1)}},[w,y.length,y.join("-")]);const L=[];if(u!==x){let S=[...u];for(let P=0;P<w.length;P++){const V=w[P],q=N(V);y.includes(q)||(S.splice(P,0,V),L.push(V))}return i==="wait"&&L.length&&(S=L),C(pt(S)),M(u),null}const{forceRender:W}=c.useContext(et);return _.jsx(_.Fragment,{children:w.map(S=>{const P=N(S),V=a&&!f?!1:u===w||y.includes(P),q=()=>{if(k.current.has(P))return;if(k.current.add(P),v.has(P))v.set(P,!0);else return;let at=!0;v.forEach(Zt=>{Zt||(at=!1)}),at&&(W==null||W(),C(g.current),a&&(h==null||h()),s&&s())};return _.jsx(je,{isPresent:V,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:i,root:d,onExitComplete:V?void 0:q,anchorX:r,anchorY:p,children:S},P)})})},Rt=c.createContext({strict:!1}),mt={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let yt=!1;function Ne(){if(yt)return;const e={};for(const t in mt)e[t]={isEnabled:n=>mt[t].some(s=>!!n[s])};At(e),yt=!0}function zt(){return Ne(),Jt()}function Ie(e){const t=zt();for(const n in e)t[n]={...t[n],...e[n]};At(t)}const Te=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function F(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Te.has(e)}let Ht=e=>!F(e);function Re(e){typeof e=="function"&&(Ht=t=>t.startsWith("on")?!F(t):e(t))}try{Re(require("@emotion/is-prop-valid").default)}catch{}function ze(e,t,n){const s={};for(const o in e)o==="values"&&typeof e.values=="object"||(Ht(o)||n===!0&&F(o)||!t&&!F(o)||e.draggable&&o.startsWith("onDrag"))&&(s[o]=e[o]);return s}const G=c.createContext({});function He(e,t){if(Lt(e)){const{initial:n,animate:s}=e;return{initial:n===!1||rt(n)?n:void 0,animate:rt(s)?s:void 0}}return e.inherit!==!1?t:{}}function Fe(e){const{initial:t,animate:n}=He(e,c.useContext(G));return c.useMemo(()=>({initial:t,animate:n}),[gt(t),gt(n)])}function gt(e){return Array.isArray(e)?e.join(" "):e}const ot=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ft(e,t,n){for(const s in t)!Vt(t[s])&&!Qt(s,n)&&(e[s]=t[s])}function Oe({transformTemplate:e},t){return c.useMemo(()=>{const n=ot();return te(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ge(e,t){const n=e.style||{},s={};return Ft(s,n,e),Object.assign(s,Oe(e,t)),s}function We(e,t){const n={},s=Ge(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=s,n}const Ot=()=>({...ot(),attrs:{}});function qe(e,t,n,s){const o=c.useMemo(()=>{const i=Ot();return ee(i,t,ne(s),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Ft(i,e.style,e),o.style={...i,...o.style}}return o}const Be=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function it(e){return typeof e!="string"||e.includes("-")?!1:!!(Be.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ue(e,t,n,{latestValues:s},o,i=!1,a){const p=(a??it(e)?qe:We)(t,s,o,e),d=ze(t,typeof e=="string",i),f=e!==c.Fragment?{...d,...p,ref:n}:{},{children:h}=t,u=c.useMemo(()=>Vt(h)?h.get():h,[h]);return c.createElement(e,{...f,children:u})}function Xe({scrapeMotionValuesFromProps:e,createRenderState:t},n,s,o){return{latestValues:Ye(n,s,o,e),renderState:t()}}function Ye(e,t,n,s){const o={},i=s(e,{});for(const u in i)o[u]=se(i[u]);let{initial:a,animate:r}=e;const p=Lt(e),d=oe(e);t&&d&&!p&&e.inherit!==!1&&(a===void 0&&(a=t.initial),r===void 0&&(r=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const h=f?r:a;if(h&&typeof h!="boolean"&&!Dt(h)){const u=Array.isArray(h)?h:[h];for(let y=0;y<u.length;y++){const m=ie(e,u[y]);if(m){const{transitionEnd:g,transition:v,...k}=m;for(const x in k){let M=k[x];if(Array.isArray(M)){const w=f?M.length-1:0;M=M[w]}M!==null&&(o[x]=M)}for(const x in g)o[x]=g[x]}}}return o}const Gt=e=>(t,n)=>{const s=c.useContext(G),o=c.useContext(O),i=()=>Xe(e,t,s,o);return n?i():nt(i)},Ke=Gt({scrapeMotionValuesFromProps:ae,createRenderState:ot}),Ze=Gt({scrapeMotionValuesFromProps:re,createRenderState:Ot}),Je=Symbol.for("motionComponentSymbol");function Qe(e,t,n){const s=c.useRef(n);c.useInsertionEffect(()=>{s.current=n});const o=c.useRef(null);return c.useCallback(i=>{var r;i&&((r=e.onMount)==null||r.call(e,i));const a=s.current;if(typeof a=="function")if(i){const p=a(i);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):a(i);else a&&(a.current=i);t&&(i?t.mount(i):t.unmount())},[t])}const Wt=c.createContext({});function D(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function tn(e,t,n,s,o,i){var M,w;const{visualElement:a}=c.useContext(G),r=c.useContext(Rt),p=c.useContext(O),d=c.useContext(st),f=d.reducedMotion,h=d.skipAnimations,u=c.useRef(null),y=c.useRef(!1);s=s||r.renderer,!u.current&&s&&(u.current=s(e,{visualState:t,parent:a,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:f,skipAnimations:h,isSVG:i}),y.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,g=c.useContext(Wt);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&en(u.current,n,o,g);const v=c.useRef(!1);c.useInsertionEffect(()=>{m&&v.current&&m.update(n,p)});const k=n[ce],x=c.useRef(!!k&&typeof window<"u"&&!((M=window.MotionHandoffIsComplete)!=null&&M.call(window,k))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,k)));return It(()=>{y.current=!0,m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),c.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,k)}),x.current=!1),m.enteringChildren=void 0)}),m}function en(e,t,n,s){const{layoutId:o,layout:i,drag:a,dragConstraints:r,layoutScroll:p,layoutRoot:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:qt(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!a||r&&D(r),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:s,crossfade:f,layoutScroll:p,layoutRoot:d})}function qt(e){if(e)return e.options.allowProjection!==!1?e.projection:qt(e.parent)}function U(e,{forwardMotionProps:t=!1,type:n}={},s,o){s&&Ie(s);const i=n?n==="svg":it(e),a=i?Ze:Ke;function r(d,f){let h;const u={...c.useContext(st),...d,layoutId:nn(d)},{isStatic:y}=u,m=Fe(d),g=a(d,y);if(!y&&typeof window<"u"){sn();const v=on(u);h=v.MeasureLayout,m.visualElement=tn(e,g,u,o,v.ProjectionNode,i)}return _.jsxs(G.Provider,{value:m,children:[h&&m.visualElement?_.jsx(h,{visualElement:m.visualElement,...u}):null,Ue(e,d,Qe(g,m.visualElement,f),g,y,t,i)]})}r.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const p=c.forwardRef(r);return p[Je]=e,p}function nn({layoutId:e}){const t=c.useContext(et).id;return t&&e!==void 0?t+"-"+e:e}function sn(e,t){c.useContext(Rt).strict}function on(e){const t=zt(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(e)||s!=null&&s.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function an(e,t){if(typeof Proxy>"u")return U;const n=new Map,s=(i,a)=>U(i,a,e,t),o=(i,a)=>s(i,a);return new Proxy(o,{get:(i,a)=>a==="create"?s:(n.has(a)||n.set(a,U(a,void 0,e,t)),n.get(a))})}const rn=(e,t)=>t.isSVG??it(e)?new le(t):new ue(t,{allowProjection:e!==c.Fragment});class cn extends A{constructor(t){super(t),t.animationState||(t.animationState=he(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Dt(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let ln=0;class un extends A{constructor(){super(...arguments),this.id=ln++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const hn={animation:{Feature:cn},exit:{Feature:un}};function $(e){return{point:{x:e.pageX,y:e.pageY}}}const dn=e=>t=>jt(t)&&e(t,$(t));function j(e,t,n,s){return z(e,t,dn(n),s)}const Bt=({current:e})=>e?e.ownerDocument.defaultView:null,vt=(e,t)=>Math.abs(e-t);function fn(e,t){const n=vt(e.x,t.x),s=vt(e.y,t.y);return Math.sqrt(n**2+s**2)}const kt=new Set(["auto","scroll"]);class Ut{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=I(this.lastRawMoveEventInfo,this.transformPagePoint));const y=X(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=fn(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!g)return;const{point:v}=y,{timestamp:k}=ct;this.history.push({...v,timestamp:k});const{onStart:x,onMove:M}=this.handlers;m||(x&&x(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,y)},this.handlePointerMove=(y,m)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=m,this.lastMoveEventInfo=I(m,this.transformPagePoint),E.update(this.updatePoint,!0)},this.handlePointerUp=(y,m)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=X(y.type==="pointercancel"?this.lastMoveEventInfo:I(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(y,x),v&&v(y,x)},!jt(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=a,this.contextWindow=o||window;const p=$(t),d=I(p,this.transformPagePoint),{point:f}=d,{timestamp:h}=ct;this.history=[{...f,timestamp:h}];const{onSessionStart:u}=n;u&&u(t,X(d,this.history)),this.removeListeners=$t(j(this.contextWindow,"pointermove",this.handlePointerMove),j(this.contextWindow,"pointerup",this.handlePointerUp),j(this.contextWindow,"pointercancel",this.handlePointerUp)),r&&this.startScrollTracking(r)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(kt.has(s.overflowX)||kt.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:o.x-n.x,y:o.y-n.y};i.x===0&&i.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,o),E.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),de(this.updatePoint)}}function I(e,t){return t?{point:t(e.point)}:e}function xt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function X({point:e},t){return{point:e,delta:xt(e,Xt(t)),offset:xt(e,pn(t)),velocity:mn(t,.1)}}function pn(e){return e[0]}function Xt(e){return e[e.length-1]}function mn(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,s=null;const o=Xt(e);for(;n>=0&&(s=e[n],!(o.timestamp-s.timestamp>lt(t)));)n--;if(!s)return{x:0,y:0};s===e[0]&&e.length>2&&o.timestamp-s.timestamp>lt(t)*2&&(s=e[1]);const i=fe(o.timestamp-s.timestamp);if(i===0)return{x:0,y:0};const a={x:(o.x-s.x)/i,y:(o.y-s.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function yn(e,{min:t,max:n},s){return t!==void 0&&e<t?e=s?H(t,e,s.min):Math.max(e,t):n!==void 0&&e>n&&(e=s?H(n,e,s.max):Math.min(e,n)),e}function Mt(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function gn(e,{top:t,left:n,bottom:s,right:o}){return{x:Mt(e.x,n,o),y:Mt(e.y,t,s)}}function wt(e,t){let n=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,s]=[s,n]),{min:n,max:s}}function vn(e,t){return{x:wt(e.x,t.x),y:wt(e.y,t.y)}}function kn(e,t){let n=.5;const s=J(e),o=J(t);return o>s?n=ut(t.min,t.max-s,e.min):s>o&&(n=ut(e.min,e.max-o,t.min)),pe(0,1,n)}function xn(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Q=.35;function Mn(e=Q){return e===!1?e=0:e===!0&&(e=Q),{x:Pt(e,"left","right"),y:Pt(e,"top","bottom")}}function Pt(e,t,n){return{min:Ct(e,t),max:Ct(e,n)}}function Ct(e,t){return typeof e=="number"?e:e[t]||0}const wn=new WeakMap;class Pn{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const i=h=>{n&&this.snapToCursor($(h).point),this.stopAnimation()},a=(h,u)=>{const{drag:y,dragPropagation:m,onDragStart:g}=this.getProps();if(y&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xe(y),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),b(k=>{let x=this.getAxisMotionValue(k).get()||0;if(Me.test(x)){const{projection:M}=this.visualElement;if(M&&M.layout){const w=M.layout.layoutBox[k];w&&(x=J(w)*(parseFloat(x)/100))}}this.originPoint[k]=x}),g&&E.update(()=>g(h,u),!1,!0),ht(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},r=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u;const{dragPropagation:y,dragDirectionLock:m,onDirectionLock:g,onDrag:v}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:k}=u;if(m&&this.currentDirection===null){this.currentDirection=En(k),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",u.point,k),this.updateAxis("y",u.point,k),this.visualElement.render(),v&&E.update(()=>v(h,u),!1,!0)},p=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u,this.stop(h,u),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new Ut(t,{onSessionStart:i,onStart:a,onMove:r,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:s,contextWindow:Bt(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!o||!s)return;const{velocity:a}=o;this.startAnimation(a);const{onDragEnd:r}=this.getProps();r&&E.postRender(()=>r(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!T(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(a=yn(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,o=this.constraints;t&&D(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=gn(s.layoutBox,t):this.constraints=!1,this.elastic=Mn(n),o!==this.constraints&&!D(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&b(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=xn(s.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!D(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=ye(s,o.root,this.visualElement.getTransformPagePoint());let a=vn(o.layout.layoutBox,i);if(n){const r=n(ge(a));this.hasMutatedConstraints=!!r,r&&(a=ve(r))}return a}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:r}=this.getProps(),p=this.constraints||{},d=b(f=>{if(!T(f,n,this.currentDirection))return;let h=p&&p[f]||{};a&&(h={min:0,max:0});const u=o?200:1e6,y=o?40:1e7,m={type:"inertia",velocity:s?t[f]:0,bounceStiffness:u,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(f,m)});return Promise.all(d).then(r)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return ht(this.visualElement,t),s.start(ke(t,s,0,n,this.visualElement,!1))}stopAnimation(){b(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){b(n=>{const{drag:s}=this.getProps();if(!T(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:r}=o.layout.layoutBox[n],p=i.get()||0;i.set(t[n]-H(a,r,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!D(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};b(a=>{const r=this.getAxisMotionValue(a);if(r&&this.constraints!==!1){const p=r.get();o[a]=kn({min:p,max:p},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),b(a=>{if(!T(a,t,null))return;const r=this.getAxisMotionValue(a),{min:p,max:d}=this.constraints[a];r.set(H(p,d,o[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;wn.set(this.visualElement,this);const t=this.visualElement.current,n=j(t,"pointerdown",d=>{const{drag:f,dragListener:h=!0}=this.getProps(),u=d.target,y=u!==t&&we(u);f&&h&&!y&&this.start(d)});let s;const o=()=>{const{dragConstraints:d}=this.getProps();D(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),s||(s=Cn(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",o);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),E.read(o);const r=z(window,"resize",()=>this.scalePositionWithinConstraints()),p=i.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f})=>{this.isDragging&&f&&(b(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=d[h].translate,u.set(u.get()+d[h].translate))}),this.visualElement.render())});return()=>{r(),n(),a(),p&&p(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:a=Q,dragMomentum:r=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:i,dragElastic:a,dragMomentum:r}}}function Et(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Cn(e,t,n){const s=dt(e,Et(n)),o=dt(t,Et(n));return()=>{s(),o()}}function T(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function En(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Sn extends A{constructor(t){super(t),this.removeGroupControls=R,this.removeListeners=R,this.controls=new Pn(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||R}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Y=e=>(t,n)=>{e&&E.update(()=>e(t,n),!1,!0)};class _n extends A{constructor(){super(...arguments),this.removePointerDownListener=R}onPointerDown(t){this.session=new Ut(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bt(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Y(t),onStart:Y(n),onMove:Y(s),onEnd:(i,a)=>{delete this.session,o&&E.postRender(()=>o(i,a))}}}mount(){this.removePointerDownListener=j(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let K=!1;class bn extends c.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),s&&s.register&&o&&s.register(i),K&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ce.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:i}=this.props,{projection:a}=s;return a&&(a.isPresent=i,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),K=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==i?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||E.postRender(()=>{const r=a.getStack();(!r||!r.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Pe.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;K=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Yt(e){const[t,n]=Tt(),s=c.useContext(et);return _.jsx(bn,{...e,layoutGroup:s,switchLayoutGroup:c.useContext(Wt),isPresent:t,safeToRemove:n})}const An={pan:{Feature:_n},drag:{Feature:Sn,ProjectionNode:Nt,MeasureLayout:Yt}};function St(e,t,n){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,i=s[o];i&&E.postRender(()=>i(t,$(t)))}class Ln extends A{mount(){const{current:t}=this.node;t&&(this.unmount=Ee(t,(n,s)=>(St(this.node,s,"Start"),o=>St(this.node,o,"End"))))}unmount(){}}class Vn extends A{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$t(z(this.node.current,"focus",()=>this.onFocus()),z(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _t(e,t,n){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),i=s[o];i&&E.postRender(()=>i(t,$(t)))}class Dn extends A{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=Se(t,(o,i)=>(_t(this.node,i,"Start"),(a,{success:r})=>_t(this.node,a,r?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const tt=new WeakMap,Z=new WeakMap,jn=e=>{const t=tt.get(e.target);t&&t(e)},$n=e=>{e.forEach(jn)};function Nn({root:e,...t}){const n=e||document;Z.has(n)||Z.set(n,{});const s=Z.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver($n,{root:e,...t})),s[o]}function In(e,t,n){const s=Nn(t);return tt.set(e,n),s.observe(e),()=>{tt.delete(e),s.unobserve(e)}}const Tn={some:0,all:1};class Rn extends A{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:Tn[o]},r=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,i&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:h}=this.node.getProps(),u=d?f:h;u&&u(p)};return In(this.node.current,a,r)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(zn(t,n))&&this.startObserver()}unmount(){}}function zn({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Hn={inView:{Feature:Rn},tap:{Feature:Dn},focus:{Feature:Vn},hover:{Feature:Ln}},Fn={layout:{ProjectionNode:Nt,MeasureLayout:Yt}},On={...hn,...Hn,...An,...Fn},ho=an(On,rn),Gn={some:0,all:1};function Wn(e,t,{root:n,margin:s,amount:o="some"}={}){const i=_e(e),a=new WeakMap,r=d=>{d.forEach(f=>{const h=a.get(f.target);if(f.isIntersecting!==!!h)if(f.isIntersecting){const u=t(f.target,f);typeof u=="function"?a.set(f.target,u):p.unobserve(f.target)}else typeof h=="function"&&(h(f),a.delete(f.target))})},p=new IntersectionObserver(r,{root:n,rootMargin:s,threshold:typeof o=="number"?o:Gn[o]});return i.forEach(d=>p.observe(d)),()=>p.disconnect()}function fo(e,{root:t,margin:n,amount:s,once:o=!1,initial:i=!1}={}){const[a,r]=c.useState(i);return c.useEffect(()=>{if(!e.current||o&&a)return;const p=()=>(r(!0),o?void 0:()=>r(!1)),d={root:t&&t.current||void 0,margin:n,amount:s};return Wn(e.current,p,d)},[t,e,n,o,s]),a}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=e=>{const t=Bn(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Un={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:i,iconNode:a,...r},p)=>c.createElement("svg",{ref:p,...Un,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:Kt("lucide",o),...!i&&!Xn(r)&&{"aria-hidden":"true"},...r},[...a.map(([d,f])=>c.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,t)=>{const n=c.forwardRef(({className:s,...o},i)=>c.createElement(Yn,{ref:i,iconNode:t,className:Kt(`lucide-${qn(bt(e))}`,`lucide-${e}`,s),...o}));return n.displayName=bt(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],po=l("arrow-left",Kn);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],mo=l("arrow-right",Zn);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],yo=l("baby",Jn);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]],go=l("ban",Qn);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],vo=l("banknote",ts);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],ko=l("beaker",es);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]],xo=l("book-check",ns);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Mo=l("book-open",ss);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],wo=l("briefcase",os);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Po=l("chevron-right",is);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Co=l("circle-alert",as);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Eo=l("circle-check",rs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],So=l("circle-user",cs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],_o=l("clock",ls);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],bo=l("code-xml",us);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Ao=l("code",hs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Lo=l("compass",ds);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Vo=l("cookie",fs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]],Do=l("copyright",ps);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],jo=l("cpu",ms);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],$o=l("credit-card",ys);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],No=l("database",gs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Io=l("earth",vs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],To=l("external-link",ks);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ro=l("eye",xs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],zo=l("facebook",Ms);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ho=l("file-text",ws);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Fo=l("github",Ps);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Oo=l("globe",Cs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Go=l("graduation-cap",Es);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],Wo=l("handshake",Ss);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],qo=l("history",_s);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Bo=l("house",bs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Uo=l("info",As);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Xo=l("languages",Ls);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Yo=l("layers",Vs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Ko=l("library",Ds);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Zo=l("lightbulb",js);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Jo=l("lock",$s);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Qo=l("log-out",Ns);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ti=l("mail",Is);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ei=l("map-pin",Ts);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ni=l("menu",Rs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],si=l("message-circle",zs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],oi=l("message-square",Hs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ii=l("moon",Fs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ai=l("phone",Os);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],ri=l("refresh-ccw",Gs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ci=l("refresh-cw",Ws);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],li=l("rocket",qs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],ui=l("scale",Bs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hi=l("search",Us);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],di=l("send",Xs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fi=l("settings",Ys);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],pi=l("share-2",Ks);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mi=l("shield-check",Zs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],yi=l("shopping-cart",Js);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],gi=l("smartphone",Qs);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vi=l("sparkles",to);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ki=l("sun",eo);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],xi=l("target",no);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Mi=l("triangle-alert",so);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],wi=l("user-plus",oo);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Pi=l("users",io);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ci=l("x",ao);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Ei=l("youtube",ro);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Si=l("zap",co);export{ui as $,uo as A,wo as B,Lo as C,No as D,To as E,zo as F,Go as G,Bo as H,Uo as I,pi as J,Vo as K,Xo as L,ii as M,yo as N,ri as O,ai as P,_o as Q,ci as R,ki as S,xi as T,wi as U,Co as V,vo as W,Ci as X,Ei as Y,Si as Z,bo as _,ni as a,Qo as a0,fi as a1,So as a2,$o as a3,Mi as a4,Do as a5,go as a6,di as a7,oi as a8,Fo as a9,jo as aa,Zo as ab,ko as ac,fo as ad,xo as ae,Oo as af,si as b,mo as c,ei as d,ti as e,po as f,hi as g,Mo as h,vi as i,Ro as j,Po as k,Ao as l,ho as m,gi as n,Yo as o,yi as p,Ko as q,li as r,qo as s,Eo as t,Pi as u,Wo as v,Io as w,mi as x,Ho as y,Jo as z};
