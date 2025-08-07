"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45040],{38792:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var n,o,a,u=a[o];if(!e(t[u],r[u]))return!1}return!0}return t!=t&&r!=r}},74015:(e,t,r)=>{function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,a,u=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?a=Object.create(e.__proto__||null):"[object Array]"===l?a=Array(e.length):"[object Set]"===l?(a=new Set,e.forEach(function(e){a.add(o(e))})):"[object Map]"===l?(a=new Map,e.forEach(function(e,t){a.set(o(t),o(e))})):"[object Date]"===l?a=new Date(+e):"[object RegExp]"===l?a=new RegExp(e.source,e.flags):"[object DataView]"===l?a=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?a=e.slice(0):"Array]"===l.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);u<r.length;u++)n(a,r[u],Object.getOwnPropertyDescriptor(e,r[u]));for(u=0,r=Object.getOwnPropertyNames(e);u<r.length;u++)Object.hasOwnProperty.call(a,t=r[u])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Q:()=>o})},2654:(e,t,r)=>{r.d(t,{l:()=>c});var n=r(31085),o=r(14041),a=r(90275),u=r(1169),l=r(52022),i=r(23719);let c={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:""},enhanceGetInputProps:e=>e.form.initialized?{}:{disabled:!0}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Your name",placeholder:"Your name"}),(0,o.createElement)(u.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(l.$,{onClick:()=>e.initialize({name:"John",age:20}),mt:"md",children:"Initialize form"})]})},code:`
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},71138:(e,t,r)=>{r.d(t,{n:()=>s});var n=r(31085),o=r(14041),a=r(90275),u=r(1169),l=r(52022),i=r(23719),c=r(84097),m=r(15659);let s={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{name:"",age:0},validate:{name:(0,c.h)("Name is required"),age:(0,m.h)({min:18},"You must be at least 18 to register")}});return(0,n.jsxs)(n.Fragment,{children:[(0,o.createElement)(a.k,{...e.getInputProps("name"),key:e.key("name"),label:"Name",placeholder:"Name"}),(0,o.createElement)(u.Q,{...e.getInputProps("age"),key:e.key("age"),label:"Age",placeholder:"Age",mt:"md"}),(0,n.jsx)(l.$,{onClick:()=>new Promise(e=>{setTimeout(()=>{e({name:"John Doe",age:25})},1e3)}).then(t=>e.initialize(t)),mt:"md",children:"Initialize form"})]})},code:`
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
`,centered:!0,maxWidth:340}},1169:(e,t,r)=>{r.d(t,{Q:()=>P});var n=r(31085),o=r(14041),a=r(54357),u=r(57715),l=r(68193),i=r(82307),c=r(34321),m=r(1962),s=r(33450),f=r(7098),d=r(36456),p=r(69564),g=r(29686),b=r(6754),h=r(87059),y=r(33970);function v({direction:e,style:t,...r}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var N={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let w=/^(0\.0*|-0(\.0*)?)$/,j=/^-?0\d+(\.\d+)?\.?$/;function I(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function k(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||I(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function E(e,t,r){return void 0===e||(void 0===t||e>=t)&&(void 0===r||e<=r)}let x={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},A=(0,f.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,s.YC)(t,"ni-chevron-size")}})),P=(0,b.P9)((e,t)=>{let r=(0,g.Y)("NumberInput",x,e),{className:s,classNames:f,styles:b,unstyled:P,vars:O,onChange:_,onValueChange:S,value:D,defaultValue:F,max:R,min:V,step:M,hideControls:T,rightSection:C,isAllowed:z,clampBehavior:B,onBlur:Y,allowDecimal:q,decimalScale:G,onKeyDown:L,onKeyDownCapture:$,handlersRef:J,startValue:Q,disabled:X,rightSectionPointerEvents:Z,allowNegative:K,readOnly:U,size:W,rightSectionWidth:H,stepHoldInterval:ee,stepHoldDelay:et,allowLeadingZeros:er,withKeyboardEvents:en,trimLeadingZeroesOnBlur:eo,attributes:ea,...eu}=r,el=(0,p.I)({name:"NumberInput",classes:N,props:r,classNames:f,styles:b,unstyled:P,attributes:ea,vars:O,varsResolver:A}),{resolvedClassNames:ei,resolvedStyles:ec}=(0,d.Y)({classNames:f,styles:b,props:r}),[em,es]=(0,i.Z)({value:D,defaultValue:F,finalValue:"",onChange:_}),ef=void 0!==et&&void 0!==ee,ed=(0,o.useRef)(null),ep=(0,o.useRef)(null),eg=(0,o.useRef)(0),eb=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eh=e=>{ed.current&&void 0!==e&&ed.current.setSelectionRange(e,e)},ey=(0,o.useRef)(m.l);ey.current=()=>{let e;if(!k(em))return;let t=Math.max(eb(em),eb(M)),r=10**t;if(!I(em)&&("number"!=typeof em||Number.isNaN(em)))e=(0,l.q)(Q,V,R);else if(void 0!==R){let t=(Math.round(Number(em)*r)+Math.round(M*r))/r;e=t<=R?t:R}else e=(Math.round(Number(em)*r)+Math.round(M*r))/r;let n=e.toFixed(t);es(parseFloat(n)),S?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>eh(ed.current?.value.length),0)};let ev=(0,o.useRef)(m.l);ev.current=()=>{let e;if(!k(em))return;let t=void 0!==V?V:K?Number.MIN_SAFE_INTEGER:0,r=Math.max(eb(em),eb(M)),n=10**r;if(!I(em)&&"number"!=typeof em||Number.isNaN(em))e=(0,l.q)(Q,t,R);else{let r=(Math.round(Number(em)*n)-Math.round(M*n))/n;e=void 0!==t&&r<t?t:r}let o=e.toFixed(r);es(parseFloat(o)),S?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eh(ed.current?.value.length),0)},(0,c.bl)(J,{increment:ey.current,decrement:ev.current});let eN=e=>{e?ey.current?.():ev.current?.(),eg.current+=1},ew=e=>{if(eN(e),ef){let t="number"==typeof ee?ee:ee(eg.current);ep.current=window.setTimeout(()=>ew(e),t)}},ej=(e,t)=>{e.preventDefault(),ed.current?.focus(),eN(t),ef&&(ep.current=window.setTimeout(()=>ew(t),et))},eI=()=>{ep.current&&window.clearTimeout(ep.current),ep.current=null,eg.current=0},ek=(0,n.jsxs)("div",{...el("controls"),children:[(0,n.jsx)(y.N,{...el("control"),tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof em&&void 0!==R&&em>=R,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ej(e,!0)},onPointerUp:eI,onPointerLeave:eI,children:(0,n.jsx)(v,{direction:"up"})}),(0,n.jsx)(y.N,{...el("control"),tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof em&&void 0!==V&&em<=V,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ej(e,!1)},onPointerUp:eI,onPointerLeave:eI,children:(0,n.jsx)(v,{direction:"down"})})]});return(0,n.jsx)(h.O,{component:u.HG,allowNegative:K,className:(0,a.A)(N.root,s),size:W,...eu,readOnly:U,disabled:X,value:em,getInputRef:(0,c.pc)(t,ed),onValueChange:(e,t)=>{"event"===t.source&&es(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||w.test(e.value)||er&&j.test(e.value)?e.value:e.floatValue),S?.(e,t)},rightSection:T||U||!k(em)?C:C||ek,classNames:ei,styles:ec,unstyled:P,__staticSelector:"NumberInput",decimalScale:q?G:0,onKeyDown:e=>{L?.(e),!U&&en&&("ArrowUp"===e.key&&(e.preventDefault(),ey.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ev.current?.()))},onKeyDownCapture:e=>{if($?.(e),"Backspace"===e.key){let t=ed.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eh(0),0))}},rightSectionPointerEvents:Z??(X?"none":void 0),rightSectionWidth:H??`var(--ni-right-section-width-${W||"sm"})`,allowLeadingZeros:er,onBlur:e=>{let t=em;"blur"===B&&"number"==typeof t&&(t=(0,l.q)(t,V,R)),eo&&"string"==typeof t&&15>eb(t)&&(t=function(e,t,r){let n=e.toString().replace(/^0+/,""),o=parseFloat(n);return Number.isNaN(o)?n:o>Number.MAX_SAFE_INTEGER?void 0!==t?t:n:(0,l.q)(o,r,t)}(t,R,V)),em!==t&&es(t),Y?.(e)},attributes:ea,isAllowed:e=>"strict"===B?z?z(e)&&E(e.floatValue,V,R):E(e.floatValue,V,R):!z||z(e)})});P.classes={...h.O.classes,...N},P.displayName="@mantine/core/NumberInput"},15659:(e,t,r)=>{r.d(t,{h:()=>n});function n({min:e,max:t},r){let n=r||!0;return r=>{if("number"!=typeof r)return n;let o=!0;return"number"==typeof e&&r<e&&(o=!1),"number"==typeof t&&r>t&&(o=!1),o?null:n}}},84097:(e,t,r)=>{r.d(t,{h:()=>n});function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}}}]);