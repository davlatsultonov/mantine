(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76534],{45285:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return r(58452)}])},58452:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>_});var t=r(31085),n=r(71184),l=r(6433);let a={type:"configurator",component:function(e){return(0,t.jsx)(l.A,{...e,placeholder:"Input placeholder"})},code:`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7},i={type:"configurator",component:function(e){return(0,t.jsx)(l.A,{maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899",...e})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},s={type:"code",component:function(){return(0,t.jsx)(l.A,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
`,centered:!0,maxWidth:340};var c=r(14041),p=r(93065);let d={type:"code",component:function(){let[e,o]=(0,c.useState)("#FFFFFF");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p.E,{mb:"md",children:["Change end value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsx)(l.A,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:o})]})},code:`
import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
`,centered:!0,maxWidth:340},u={type:"code",component:function(){return(0,t.jsx)(l.A,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`};var h=r(2242);let m={type:"code",component:function(){return(0,t.jsx)(l.A,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(h.S.colors).map(e=>h.S.colors[e][6])})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(h.S.colors).map(e=>`'${h.S.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`};var y=r(54381);let f={type:"code",component:function(){return(0,t.jsx)(l.A,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...h.S.colors.red,...h.S.colors.green,...h.S.colors.blue]})},code:`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`},v={type:"code",component:function(){return(0,t.jsx)(l.A,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[...h.S.colors.red,...h.S.colors.green,...h.S.colors.blue]})},code:`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`,centered:!0,maxWidth:340},x={type:"code",component:function(){return(0,t.jsx)(l.A,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){return(0,t.jsx)(l.A,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,centered:!0,maxWidth:340};var b=(0,r(73366).A)("outline","focus-2","IconFocus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]);let w={type:"code",component:function(){return(0,t.jsx)(l.A,{eyeDropperIcon:(0,t.jsx)(b,{size:18,stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:`
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`,centered:!0,maxWidth:340};var j=r(55090);let k={type:"code",component:function(){let e=(0,t.jsx)(j.A,{size:18,stroke:1.5});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),(0,t.jsx)(l.A,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"})]})},code:`
import { ColorInput } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker size={18} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

`,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,t.jsx)(l.A,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},I={type:"code",component:function(){return(0,t.jsx)(l.A,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`},A={type:"code",component:function(){return(0,t.jsx)(l.A,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,centered:!0,maxWidth:340};var M=r(76971);let E=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`,D={type:"styles-api",data:M.U,component:function(e){return(0,t.jsx)(l.A,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:E,centered:!0,maxWidth:340};var V=r(18675),F=r(20017);let S=(0,V.P)(F.XZ.ColorInput);function P(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:r,GetElementRef:l,InputAccessibility:c,InputFeatures:p,InputSections:h,StylesApiSelectors:b}=o;return r||T("Demo",!0),l||T("GetElementRef",!0),c||T("InputAccessibility",!0),p||T("InputFeatures",!0),h||T("InputSections",!0),b||T("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(p,{component:"ColorInput",element:"input"}),"\n",(0,t.jsx)(r,{data:a}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"formats",children:"Formats"}),"\n",(0,t.jsx)(o.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,t.jsx)(r,{data:i}),"\n",(0,t.jsx)(o.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,t.jsxs)(o.p,{children:["By default, ",(0,t.jsx)(o.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,t.jsx)(o.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:s}),"\n",(0,t.jsx)(o.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,t.jsx)(r,{data:d}),"\n",(0,t.jsx)(o.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,t.jsxs)(o.p,{children:["To disable free input set ",(0,t.jsx)(o.code,{children:"disallowInput"})," prop:"]}),"\n",(0,t.jsx)(r,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsx)(o.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,t.jsx)(r,{data:m}),"\n",(0,t.jsxs)(o.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,t.jsx)(o.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,t.jsx)(o.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,t.jsx)(r,{data:y.M}),"\n",(0,t.jsx)(o.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,t.jsx)(r,{data:f}),"\n",(0,t.jsx)(o.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,t.jsxs)(o.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,t.jsx)(o.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,t.jsx)(r,{data:v}),"\n",(0,t.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["To hide dropdown, set ",(0,t.jsx)(o.code,{children:"withPicker={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,t.jsxs)(o.p,{children:["By default, if ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,t.jsx)(o.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:g}),"\n",(0,t.jsx)(o.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,t.jsxs)(o.p,{children:["You can replace eye dropper icon with any React node using ",(0,t.jsx)(o.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,t.jsx)(r,{data:w}),"\n",(0,t.jsx)(h,{component:"ColorInput"}),"\n",(0,t.jsxs)(o.p,{children:["Note that by default, ",(0,t.jsx)(o.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,t.jsx)(o.code,{children:"leftSection"}),"\nand ",(0,t.jsx)(o.code,{children:"rightSection"})," props:"]}),"\n",(0,t.jsx)(r,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(r,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(r,{data:I}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(r,{data:A}),"\n",(0,t.jsx)(b,{component:"ColorInput"}),"\n",(0,t.jsx)(r,{data:D}),"\n",(0,t.jsx)(l,{component:"ColorInput",refType:"input"}),"\n",(0,t.jsx)(c,{component:"ColorInput"})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(S,{...e,children:(0,t.jsx)(P,{...e})})}function T(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},55090:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},11749:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},54381:(e,o,r)=>{"use strict";r.d(o,{M:()=>a});var t=r(31085),n=r(3278),l=r(2242);let a={type:"configurator",component:function(e){return(0,t.jsx)(n.s,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.S.colors).map(e=>l.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.S.colors).map(e=>`'${l.S.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},23232:(e,o,r)=>{"use strict";r.d(o,{$7:()=>l,l$:()=>t,wQ:()=>n});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},6433:(e,o,r)=>{"use strict";r.d(o,{A:()=>M});var t=r(31085),n=r(14041),l=r(82307),a=r(18351),i=r(68323),s=r(33450),c=r(7098),p=r(36456),d=r(69564),u=r(29686),h=r(6754),m=r(22962),y=r(3278),f=r(32709),v=r(38838),x=r(14318),g=r(34452),b=r(21664),w=r(87059),j=r(35764);function k({style:e,...o}){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)",...e},viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}),(0,t.jsx)("path",{d:"M12 3l0 4"}),(0,t.jsx)("path",{d:"M12 21l0 -3"}),(0,t.jsx)("path",{d:"M3 12l4 0"}),(0,t.jsx)("path",{d:"M21 12l-3 0"}),(0,t.jsx)("path",{d:"M12 12l0 .01"})]})}var C={eyeDropperIcon:"m_b077c2bc",colorPreview:"m_c5ccdcab",dropdown:"m_5ece2cd7"};let I={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},A=(0,c.V)((e,{size:o})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,s.YC)(o,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,s.YC)(o,"ci-preview-size")}})),M=(0,h.P9)((e,o)=>{let r=(0,u.Y)("ColorInput",I,e),{classNames:s,styles:c,unstyled:h,disallowInput:w,fixOnBlur:M,popoverProps:E,withPreview:D,withEyeDropper:V,eyeDropperIcon:F,closeOnColorSwatchClick:S,eyeDropperButtonProps:P,value:_,defaultValue:T,onChange:W,onChangeEnd:z,onClick:H,onFocus:N,onBlur:R,inputProps:B,format:O="hex",wrapperProps:L,readOnly:Y,withPicker:U,swatches:X,disabled:$,leftSection:G,rightSection:Z,swatchesPerRow:q,...Q}=(0,b.I)("ColorInput",I,e),J=(0,d.I)({name:"ColorInput",props:r,classes:C,classNames:s,styles:c,unstyled:h,rootSelector:"wrapper",vars:r.vars,varsResolver:A}),{resolvedClassNames:K,resolvedStyles:ee}=(0,p.Y)({classNames:s,styles:c,props:r}),[eo,er]=(0,n.useState)(!1),[et,en]=(0,n.useState)(""),[el,ea]=(0,l.Z)({value:_,defaultValue:T,finalValue:"",onChange:W}),{supported:ei,open:es}=(0,a.X)(),ec=(0,t.jsx)(m.M,{...P,...J("eyeDropperButton",{className:P?.className,style:P?.style}),variant:"subtle",color:"gray",size:B.size,unstyled:h,onClick:()=>es().then(e=>{if(e?.sRGBHex){let o=(0,f.Vm)(O,(0,v.H0)(e.sRGBHex));ea(o),z?.(o)}}).catch(()=>{}),children:F||(0,t.jsx)(k,{...J("eyeDropperIcon")})});return(0,n.useEffect)(()=>{((0,v.Yc)(el)||""===el.trim())&&en(el)},[el]),(0,i.C)(()=>{(0,v.Yc)(el)&&ea((0,f.Vm)(O,(0,v.H0)(el)))},[O]),(0,t.jsx)(g.p.Wrapper,{...L,classNames:K,styles:ee,__staticSelector:"ColorInput",children:(0,t.jsxs)(j.A,{__staticSelector:"ColorInput",position:"bottom-start",offset:5,opened:eo,...E,classNames:K,styles:ee,unstyled:h,withRoles:!1,disabled:Y||!1===U&&(!Array.isArray(X)||0===X.length),children:[(0,t.jsx)(j.A.Target,{children:(0,t.jsx)(g.p,{autoComplete:"off",...Q,...B,classNames:K,styles:ee,disabled:$,ref:o,__staticSelector:"ColorInput",onFocus:e=>{N?.(e),er(!0)},onBlur:e=>{M&&ea(et),R?.(e),er(!1)},onClick:e=>{H?.(e),er(!0)},spellCheck:!1,value:el,onChange:e=>{let o=e.currentTarget.value;ea(o),(0,v.Yc)(o)&&z?.(f.Vm(O,v.H0(o)))},leftSection:G||(D?(0,t.jsx)(x.q,{color:(0,v.Yc)(el)?el:"#fff",size:"var(--ci-preview-size)",...J("colorPreview")}):null),readOnly:w||Y,pointer:w,unstyled:h,rightSection:Z||(V&&!$&&!Y&&ei?ec:null)})}),(0,t.jsx)(j.A.Dropdown,{onMouseDown:e=>e.preventDefault(),className:C.dropdown,children:(0,t.jsx)(y.s,{__staticSelector:"ColorInput",value:el,onChange:ea,onChangeEnd:z,format:O,swatches:X,swatchesPerRow:q,withPicker:U,size:B.size,focusable:!1,unstyled:h,styles:ee,classNames:K,onColorSwatchClick:()=>S&&er(!1),attributes:L.attributes})})]})})});M.classes=w.O.classes,M.displayName="@mantine/core/ColorInput"},18351:(e,o,r)=>{"use strict";r.d(o,{X:()=>l});var t=r(14041),n=r(89571);function l(){let[e,o]=(0,t.useState)(!1);(0,n.o)(()=>{o("undefined"!=typeof window&&!navigator.userAgent.includes("OPR")&&"EyeDropper"in window)},[]);let r=(0,t.useCallback)((o={})=>e?new window.EyeDropper().open(o):Promise.resolve(void 0),[e]);return{supported:e,open:r}}}},e=>{var o=o=>e(e.s=o);e.O(0,[18675,90636,46593,38792],()=>o(45285)),_N_E=e.O()}]);