(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78466],{29285:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-6-0",function(){return n(39343)}])},39343:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(31085),s=n(71184),a=n(57024),i=n(90658),o=n(63315),l=n(22493),c=n(18036),d=n(31019),h=n(25457),p=n(97291),u=n(18891),m=n(18675),x=n(20017);let j=(0,m.P)(x.XZ.Changelog760);function f(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"container-queries-support",children:"Container queries support"}),"\n",(0,r.jsxs)(t.p,{children:["You can now use ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"container queries"}),"\nwith Mantine components. ",(0,r.jsx)(t.code,{children:"rem"})," and ",(0,r.jsx)(t.code,{children:"em"})," functions from ",(0,r.jsx)(t.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nare available in container queries staring from ",(0,r.jsx)(t.code,{children:"postcss-preset-mantine@1.13.0"}),"."]}),"\n",(0,r.jsx)(n,{data:a.l}),"\n",(0,r.jsx)(t.h2,{id:"radarchart-component",children:"RadarChart component"}),"\n",(0,r.jsxs)(t.p,{children:["New ",(0,r.jsx)(t.a,{href:"/charts/radar-chart/",children:"RadarChart"})," component:"]}),"\n",(0,r.jsx)(n,{data:i.l}),"\n",(0,r.jsx)(t.h2,{id:"focustrapinitialfocus-component",children:"FocusTrap.InitialFocus component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/focus-trap",children:"FocusTrap.InitialFocus"})," is a new component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,r.jsx)(t.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,r.jsx)(t.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,r.jsx)(n,{data:o.s}),"\n",(0,r.jsx)(t.h2,{id:"new-mantineprovider-props",children:"New MantineProvider props"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now includes more props to control how styles\nare generated and injected. These props are useful if you use Mantine as a headless library\nand in test environments."]}),"\n",(0,r.jsx)(t.h3,{id:"deduplicatecssvariables",children:"deduplicateCssVariables"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"deduplicateCssVariables"})," prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.\nBy default, it is set to ",(0,r.jsx)(t.code,{children:"true"}),". If set to ",(0,r.jsx)(t.code,{children:"false"}),", all Mantine CSS variables will be added in ",(0,r.jsx)(t.code,{children:"<style />"})," tag,\neven if they have the same value as in the default theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateCssVariables={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withstaticclasses",children:"withStaticClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withStaticClasses"})," determines whether components should have static classes, for example, ",(0,r.jsx)(t.code,{children:"mantine-Button-root"}),".\nBy default, static classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withStaticClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withStaticClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"withglobalclasses",children:"withGlobalClasses"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"withGlobalClasses"})," determines whether global classes should be added with ",(0,r.jsx)(t.code,{children:"<style />"})," tag.\nGlobal classes are required for ",(0,r.jsx)(t.code,{children:"hiddenFrom"}),"/",(0,r.jsx)(t.code,{children:"visibleFrom"})," and ",(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"})," props to work.\nBy default, global classes are enabled, to disable them set ",(0,r.jsx)(t.code,{children:"withGlobalClasses"})," to ",(0,r.jsx)(t.code,{children:"false"}),". Note that\ndisabling global classes may break styles of some components."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withGlobalClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,r.jsx)(t.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mantine classes are not applied to components"}),"\n",(0,r.jsxs)(t.li,{children:["Inline CSS variables are not added with ",(0,r.jsx)(t.code,{children:"style"})," attribute"]}),"\n",(0,r.jsx)(t.li,{children:"All color scheme related features are removed"}),"\n",(0,r.jsx)(t.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Limitations of ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,r.jsxs)(t.li,{children:["Props that are related to styles in all components (",(0,r.jsx)(t.code,{children:"color"}),", ",(0,r.jsx)(t.code,{children:"radius"}),", ",(0,r.jsx)(t.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,r.jsxs)(t.li,{children:["Some components that rely on styles will become unusable (",(0,r.jsx)(t.a,{href:"/core/grid",children:"Grid"}),", ",(0,r.jsx)(t.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,r.jsx)(t.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"lightHidden"}),"/",(0,r.jsx)(t.code,{children:"darkHidden"}),", ",(0,r.jsx)(t.code,{children:"visibleFrom"}),"/",(0,r.jsx)(t.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,r.jsx)(t.code,{children:'mt="xs"'})," will not work, but ",(0,r.jsx)(t.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),", follow the ",(0,r.jsx)(t.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,r.jsx)(t.code,{children:"MantineProvider"})," with ",(0,r.jsx)(t.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,r.jsx)(t.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sparkline-trendcolors",children:"Sparkline trendColors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/sparkline/",children:"Sparkline"})," now supports ",(0,r.jsx)(t.code,{children:"trendColors"})," prop to change chart color depending on the trend.\nThe prop accepts an object with ",(0,r.jsx)(t.code,{children:"positive"}),", ",(0,r.jsx)(t.code,{children:"negative"})," and ",(0,r.jsx)(t.code,{children:"neutral"})," properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,r.jsx)(t.code,{children:"data"})," array)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,r.jsx)(t.code,{children:"positive"}),"."]}),"\n",(0,r.jsx)(n,{data:l.W}),"\n",(0,r.jsx)(t.h2,{id:"richtexteditor-tasks-extension",children:"RichTextEditor tasks extension"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/x/tiptap/#tasks",children:"RichTextEditor"})," now supports tasks ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/docs/editor/api/nodes/task-list",children:"tiptap extension"}),":"]}),"\n",(0,r.jsx)(n,{data:c.v}),"\n",(0,r.jsx)(t.h2,{id:"renderoption-prop",children:"renderOption prop"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(t.a,{href:"/inputs/autocomplete",children:"Autocomplete"}),"\ncomponents now support ",(0,r.jsx)(t.code,{children:"renderOption"})," prop that allows to customize option rendering:"]}),"\n",(0,r.jsx)(n,{data:d.w}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:h.w}),"\n",(0,r.jsx)(t.h2,{id:"styles-improvements",children:"Styles improvements"}),"\n",(0,r.jsxs)(t.p,{children:["All Mantine components have been migrated to ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",children:"logical CSS properties"}),"\n(as a replacement for rtl styles) and ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where",children:":where"})," pseudo-class\n(as a replacement for ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"private CSS variables"}),"). These changes\nshould not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,\n",(0,r.jsx)(t.code,{children:"@mantine/core/styles.css"})," now has ~ 8% smaller size (192kb -> 177kb)."]}),"\n",(0,r.jsx)(t.h2,{id:"pass-props-to-inner-recharts-components",children:"Pass props to inner recharts components"}),"\n",(0,r.jsxs)(t.p,{children:["You can now pass props down to recharts ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),", ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Area",children:"Area"})," and ",(0,r.jsx)(t.a,{href:"https://recharts.org/en-US/api/Line",children:"Line"})," components\nwith ",(0,r.jsx)(t.code,{children:"barProps"}),", ",(0,r.jsx)(t.code,{children:"areaProps"})," and ",(0,r.jsx)(t.code,{children:"lineProps"})," props on ",(0,r.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,r.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,r.jsx)(t.p,{children:"All props accept either an object with props or a function that receives\nseries data as an argument and returns an object with props."}),"\n",(0,r.jsx)(n,{data:p.a}),"\n",(0,r.jsx)(t.h2,{id:"piechart-percent-labels",children:"PieChart percent labels"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/charts/pie-chart/",children:"PieChart"})," now supports ",(0,r.jsx)(t.code,{children:"percent"})," labels:"]}),"\n",(0,r.jsx)(n,{data:u.I}),"\n",(0,r.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/styles/responsive",children:"Responsive styles guide"})," now includes new sections about responsive props and container queries"]}),"\n",(0,r.jsxs)(t.li,{children:["New ",(0,r.jsx)(t.a,{href:"/styles/unstyled/#headlessmantineprovider",children:"HeadlessMantineProvider section"})," in the unstyled guide"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/action-icon/",children:"ActionIcon"})," now includes additional documentation section on how to make the button the same size as Mantine inputs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"})," now includes an example of how to rotate x-axis labels"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/guides/redwood/",children:"Redwood guide"})," has been updated to the latest redwood version with Vite"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,r.jsxs)(t.p,{children:["New articles added to the ",(0,r.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/browser-zooms-on-focus",children:"Browser zooms in when input is focused. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/pinch-to-zoom-modal",children:"It is not possible to pinch to zoom when Modal is opened. What should I do?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/how-to-lock-scroll",children:"How can I lock scroll in my application?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/roadmap",children:"Where can I find the roadmap?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/tabs-border-color",children:"How can I change Tabs border color?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"How can I change inputs focus styles?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/third-party-styles",children:"Can I use Mantine with Emotion/styled-components/tailwindcss?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/input-mask",children:"Is there a way to add mask to Mantine input?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/align-input-button",children:"How to align input with a button in a flex container?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-color",children:"How can I change component color prop value depending on the color scheme?"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-list-state/",children:"use-list-state"})," hook now supports ",(0,r.jsx)(t.code,{children:"swap"})," handler"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"form.setFieldValue"})," now supports callback function as an argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"px"}),", ",(0,r.jsx)(t.code,{children:"py"}),", ",(0,r.jsx)(t.code,{children:"mx"})," and ",(0,r.jsx)(t.code,{children:"my"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," now use logical CSS properties ",(0,r.jsx)(t.code,{children:"padding-inline"}),", ",(0,r.jsx)(t.code,{children:"padding-block"}),", ",(0,r.jsx)(t.code,{children:"margin-inline"})," and ",(0,r.jsx)(t.code,{children:"margin-block"})," instead of ",(0,r.jsx)(t.code,{children:"padding-left"}),", ",(0,r.jsx)(t.code,{children:"padding-right"}),", etc."]}),"\n",(0,r.jsxs)(t.li,{children:["All components now support ",(0,r.jsx)(t.code,{children:"me"}),", ",(0,r.jsx)(t.code,{children:"ms"}),", ",(0,r.jsx)(t.code,{children:"ps"}),", ",(0,r.jsx)(t.code,{children:"pe"})," ",(0,r.jsx)(t.a,{href:"/styles/style-props/",children:"style props"})," to set ",(0,r.jsx)(t.code,{children:"margin-inline-end"}),", ",(0,r.jsx)(t.code,{children:"margin-inline-start"}),", ",(0,r.jsx)(t.code,{children:"padding-inline-start"})," and ",(0,r.jsx)(t.code,{children:"padding-inline-end"})," CSS properties"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,r.jsx)(t.a,{href:"/core/popover",children:"Popover"})," and other components based on ",(0,r.jsx)(t.code,{children:"Popover"})," now support ",(0,r.jsx)(t.code,{children:"floatingStrategy"})," prop to control ",(0,r.jsx)(t.a,{href:"https://floating-ui.com/docs/usefloating#strategy",children:"Floating UI strategy"})]}),"\n",(0,r.jsxs)(t.li,{children:["All ",(0,r.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,r.jsx)(t.code,{children:"children"})," prop, which passes children to the root recharts component"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/hooks/use-resize-observer/",children:"use-resize-observer"})," and ",(0,r.jsx)(t.a,{href:"/hooks/use-element-size/",children:"use-element-size"})," hooks now support ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters",children:"ResizeObserver options"})," as hook argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onClear"})," prop, the function is called when clear button is clicked"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,r.jsx)(t.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,r.jsx)(t.code,{children:"onRemove"})," prop, the function is called with removed item value when one of the items is deselected"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mantinedev/redwood-template",children:"Redwood template"})," has been updated to the latest redwood version with Vite"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,{...e,children:(0,r.jsx)(f,{...e})})}},97291:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});var r=n(31085),s=n(40702),a=n(79301);let i={type:"code",component:function(){return(0,r.jsx)(s.E,{h:200,data:a.p,dataKey:"month",orientation:"vertical",yAxisProps:{width:80},barProps:{radius:10},series:[{name:"Smartphones",color:"blue.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={200}
      data={data}
      dataKey="month"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'Smartphones', color: 'blue.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a.kZ,language:"tsx",fileName:"data.ts"}]}},18891:(e,t,n)=>{"use strict";n.d(t,{I:()=>i});var r=n(31085),s=n(22118),a=n(1850);let i={type:"configurator",component:function(e){return(0,r.jsx)(s.r,{...e,withLabels:!0,data:a.p,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:a.k,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent"]}]}},1850:(e,t,n)=>{"use strict";n.d(t,{k:()=>s,p:()=>r});let r=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],s=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},90658:(e,t,n)=>{"use strict";n.d(t,{l:()=>i});var r=n(31085),s=n(71521),a=n(72048);let i={type:"code",component:function(){return(0,r.jsx)(s.V,{h:300,data:a.Cx,dataKey:"product",withPolarRadiusAxis:!0,series:[{name:"Sales January",color:"lime.4",opacity:.1},{name:"Sales February",color:"cyan.4",opacity:.1}]})},code:[{code:`
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a.HY,language:"tsx",fileName:"data.ts"}]}},72048:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>a,HY:()=>i,kZ:()=>s,p:()=>r});let r=[{product:"Apples",sales:120},{product:"Oranges",sales:98},{product:"Tomatoes",sales:86},{product:"Grapes",sales:99},{product:"Bananas",sales:85},{product:"Lemons",sales:65}],s=`
export const data = [
  {
    product: 'Apples',
    sales: 120,
  },
  {
    product: 'Oranges',
    sales: 98,
  },
  {
    product: 'Tomatoes',
    sales: 86,
  },
  {
    product: 'Grapes',
    sales: 99,
  },
  {
    product: 'Bananas',
    sales: 85,
  },
  {
    product: 'Lemons',
    sales: 65,
  },
];
`,a=[{product:"Apples","Sales January":120,"Sales February":100},{product:"Oranges","Sales January":98,"Sales February":90},{product:"Tomatoes","Sales January":86,"Sales February":70},{product:"Grapes","Sales January":99,"Sales February":80},{product:"Bananas","Sales January":85,"Sales February":120},{product:"Lemons","Sales January":65,"Sales February":150}],i=`
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];`},22493:(e,t,n)=>{"use strict";n.d(t,{W:()=>d});var r=n(31085),s=n(6154),a=n(75390),i=n(93065);let o=[10,20,40,20,40,10,50],l=[50,40,20,40,20,40,10],c=[10,20,40,20,40,10,50,5,10],d={type:"code",component:function(){return(0,r.jsxs)(a.B,{gap:"sm",children:[(0,r.jsx)(i.E,{children:"Positive trend:"}),(0,r.jsx)(s.O,{w:200,h:60,data:o,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(i.E,{mt:"md",children:"Negative trend:"}),(0,r.jsx)(s.O,{w:200,h:60,data:l,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,r.jsx)(i.E,{mt:"md",children:"Neutral trend:"}),(0,r.jsx)(s.O,{w:200,h:60,data:c,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
`,centered:!0}},63315:(e,t,n)=>{"use strict";n.d(t,{s:()=>c});var r=n(31085),s=n(19042),a=n(4203),i=n(90275),o=n(52022),l=n(92051);let c={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.j)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.a,{opened:e,onClose:n,title:"Focus demo",children:[(0,r.jsx)(a.s.InitialFocus,{}),(0,r.jsx)(i.k,{label:"First input",placeholder:"First input"}),(0,r.jsx)(i.k,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(o.$,{variant:"default",onClick:t,children:"Open modal"})]})}}},31019:(e,t,n)=>{"use strict";n.d(t,{w:()=>x});var r=n(31085),s=n(54586),a=n(94630),i=n(51189),o=n(19392),l=n(11466),c=n(56051),d=n(78501);let h=`
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},u={left:(0,r.jsx)(s.A,{...p}),center:(0,r.jsx)(a.A,{...p}),right:(0,r.jsx)(i.A,{...p}),justify:(0,r.jsx)(o.A,{...p})},m=({option:e,checked:t})=>(0,r.jsxs)(c.Y,{flex:"1",gap:"xs",children:[u[e.value],e.label,t&&(0,r.jsx)(l.A,{style:{marginInlineStart:"auto"},...p})]}),x={type:"code",component:function(){return(0,r.jsx)(d.l,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:h,centered:!0,maxWidth:340,defaultExpanded:!1}},25457:(e,t,n)=>{"use strict";n.d(t,{w:()=>c});var r=n(31085),s=n(56051),a=n(93065),i=n(66732);let o={Apples:{emoji:"\uD83C\uDF4E",description:"Crisp and juicy snacking delight"},Bread:{emoji:"\uD83C\uDF5E",description:"Freshly baked daily essential"},Bananas:{emoji:"\uD83C\uDF4C",description:"Perfect for a healthy breakfast"},Eggs:{emoji:"\uD83E\uDD5A",description:"Versatile protein source for cooking"},Broccoli:{emoji:"\uD83E\uDD66",description:"Nutrient-rich green vegetable"}},l=({option:e})=>(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(a.E,{span:!0,fz:24,children:o[e.value].emoji}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.E,{children:e.value}),(0,r.jsx)(a.E,{size:"xs",opacity:.5,children:o[e.value].description})]})]}),c={type:"code",component:function(){return(0,r.jsx)(i.u,{data:["Apples","Bread","Bananas","Eggs","Broccoli"],renderOption:l,label:"Groceries",placeholder:"Pick tag from list or type to add new",maxDropdownHeight:300})},code:`
import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '\u{1F34E}',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '\u{1F35E}',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '\u{1F34C}',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '\u{1F95A}',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '\u{1F966}',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1}},57024:(e,t,n)=>{"use strict";n.d(t,{l:()=>a});var r=n(31085),s={root:"m_cd12fd1e",child:"m_d4760060"};let a={type:"code",component:function(){return(0,r.jsx)("div",{className:s.root,children:(0,r.jsx)("div",{className:s.child,children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]}},18036:(e,t,n)=>{"use strict";n.d(t,{v:()=>h});var r=n(31085),s=n(9068),a=n(6581),i=n(37353),o=n(95062),l=n(83667);let c=e=>e.extend({addKeyboardShortcuts:()=>({"Mod-[":({editor:e})=>(e.chain().focus().liftListItem("taskItem").run(),!0),"Mod-]":({editor:e})=>(e.chain().focus().sinkListItem("taskItem").run(),!0)})}).configure({HTMLAttributes:{class:`${l.A.taskList} mantine-RichTextEditor-taskList`}});var d=n(10047);let h={type:"code",component:function(){let e=(0,i.hG)({extensions:[o.A,c(a.A),s.Ay.configure({nested:!0,HTMLAttributes:{class:"test-item"}})],content:`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      `});return(0,r.jsxs)(d.d,{editor:e,children:[(0,r.jsx)(d.d.Toolbar,{children:(0,r.jsxs)(d.d.ControlsGroup,{children:[(0,r.jsx)(d.d.TaskList,{}),(0,r.jsx)(d.d.TaskListLift,{}),(0,r.jsx)(d.d.TaskListSink,{})]})}),(0,r.jsx)(d.d.Content,{})]})},code:`
import TaskItem from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, getTaskListExtension } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'test-item',
        },
      }),
    ],
    content: \`
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
      \`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
`}},28970:(e,t,n)=>{"use strict";n.d(t,{s:()=>s});var r=n(31085);function s({color:e,id:t,withGradient:n,fillOpacity:s}){return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:s}),(0,r.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,r.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,r.jsx)("stop",{stopColor:e,stopOpacity:s??.2})})})}s.displayName="@mantine/charts/AreaGradient"},22118:(e,t,n)=>{"use strict";n.d(t,{r:()=>C});var r=n(31085),s=n(87183),a=n(79874),i=n(65340),o=n(4206),l=n(37662),c=n(7098),d=n(51606),h=n(39735),p=n(6754),u=n(29686),m=n(92408),x=n(69564),j=n(36456),f=n(34056),v=n(93581),g={root:"m_cd8943fd"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.V)((e,{strokeColor:t,labelColor:n,withLabels:r,size:s,labelsPosition:a})=>({root:{"--chart-stroke-color":t?(0,d.r)(t,e):void 0,"--chart-labels-color":n?(0,d.r)(n,e):void 0,"--chart-size":r&&"outside"===a?(0,h.D)(s+80):(0,h.D)(s)}})),w=(e,t,n,r)=>"percent"===e&&"number"==typeof n?`${(100*n).toFixed(0)}%`:"function"==typeof r&&"number"==typeof t?r(t):t,k=(e,t)=>({cx:n,cy:s,midAngle:a,innerRadius:i,outerRadius:o,value:l,percent:c})=>{let d=Math.PI/180,h=i+(o-i)*.5,p=n+h*Math.cos(-(a||0)*d),u=s+h*Math.sin(-(a||0)*d);return(0,r.jsx)("text",{x:p,y:u,textAnchor:p>n?"start":"end",dominantBaseline:"central",className:g.label,children:w(e,l,c,t)})},S=(e,t)=>({x:n,y:s,cx:a,cy:i,percent:o,value:l})=>(0,r.jsx)("text",{x:n,y:s,cx:a,cy:i,textAnchor:n>a?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,r.jsx)("tspan",{x:n,children:w(e,l,o,t)})}),C=(0,p.P9)((e,t)=>{let n=(0,u.Y)("PieChart",y,e),{classNames:c,className:h,style:p,styles:w,unstyled:C,vars:T,data:I,withTooltip:P,tooltipAnimationDuration:A,tooltipProps:O,pieProps:F,paddingAngle:M,withLabels:E,withLabelsLine:N,size:R,strokeWidth:D,startAngle:L,endAngle:_,tooltipDataSource:G,children:B,pieChartProps:z,labelsPosition:H,valueFormatter:V,labelsType:q,strokeColor:J,attributes:W,...Y}=n,U=(0,m.xd)(),K=(0,x.I)({name:"PieChart",classes:g,props:n,className:h,style:p,classNames:c,styles:w,unstyled:C,attributes:W,vars:T,varsResolver:b}),{resolvedClassNames:Z,resolvedStyles:$}=(0,j.Y)({classNames:c,styles:w,props:n}),X=I.map((e,t)=>(0,r.jsx)(s.f,{fill:(0,d.r)(e.color,U),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:D},t));return(0,r.jsx)(f.a,{ref:t,size:R,...K("root"),...Y,children:(0,r.jsx)(a.u,{children:(0,r.jsxs)(i.r,{...z,children:[(0,r.jsx)(o.F,{data:I,innerRadius:0,outerRadius:R/2,dataKey:"value",isAnimationActive:!1,paddingAngle:M,startAngle:L,endAngle:_,label:!!E&&("inside"===H?k(q||"value",V):S(q||"value",V)),labelLine:!!N&&"outside"===H&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...F,children:X}),P&&(0,r.jsx)(l.m,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>(0,r.jsx)(v.I,{payload:I,classNames:Z,styles:$,type:"radial",segmentId:"segment"===G?e?.[0]?.name:void 0,valueFormatter:V,attributes:W}),...O}),B]})})})});C.displayName="@mantine/charts/PieChart",C.classes=g},71521:(e,t,n)=>{"use strict";n.d(t,{V:()=>T});var r=n(31085),s=n(14041),a=n(80296),i=n(79874),o=n(6962),l=n(23072),c=n(37392),d=n(76683),h=n(37662),p=n(23361),u=n(7098),m=n(51606),x=n(6754),j=n(29686),f=n(92408),v=n(69564),g=n(36456),y=n(34056),b=n(50571),w=n(93581),k={root:"m_1f271cf7",container:"m_cf06f58c"};let S={withPolarGrid:!0,withPolarAngleAxis:!0,withPolarRadiusAxis:!1,withTooltip:!1,withDots:!1,tooltipAnimationDuration:0},C=(0,u.V)((e,{gridColor:t,textColor:n})=>({root:{"--chart-grid-color":t?(0,m.r)(t,e):void 0,"--chart-text-color":n?(0,m.r)(n,e):void 0}})),T=(0,x.P9)((e,t)=>{let n=(0,j.Y)("RadarChart",S,e),{classNames:u,className:x,style:T,styles:I,unstyled:P,vars:A,data:O,series:F,dataKey:M,gridColor:E,textColor:N,radarProps:R,radarChartProps:D,polarGridProps:L,polarAngleAxisProps:_,polarRadiusAxisProps:G,tooltipProps:B,withPolarGrid:z,withPolarAngleAxis:H,withPolarRadiusAxis:V,withTooltip:q,tooltipAnimationDuration:J,children:W,withLegend:Y,withDots:U,dotProps:K,activeDotProps:Z,legendProps:$,attributes:X,...Q}=n,ee=(0,f.xd)(),et=(0,v.I)({name:"RadarChart",classes:k,props:n,className:x,style:T,classNames:u,styles:I,unstyled:P,attributes:X,vars:A,varsResolver:C}),[en,er]=(0,s.useState)(null),{resolvedClassNames:es,resolvedStyles:ea}=(0,g.Y)({classNames:u,styles:I,props:n}),ei=F.map((e,t)=>(0,r.jsx)(a.V,{name:e.name,dataKey:e.name,stroke:(0,m.r)(e.strokeColor||e.color,ee),fill:(0,m.r)(e.color,ee),fillOpacity:en?en===e.name?e.opacity||.4:.05:e.opacity||.4,dot:!!U&&{fillOpacity:1,strokeOpacity:0,strokeWidth:1,fill:(0,m.r)(e.color,ee),stroke:(0,m.r)(e.color,ee),...K},activeDot:!!U&&{fill:(0,m.r)(e.color,ee),stroke:(0,m.r)(e.color,ee),...Z},strokeOpacity:en?en===e.name?1:.1:1,isAnimationActive:!1,..."function"==typeof R?R(e):R},t));return(0,r.jsx)(y.a,{ref:t,...et("root"),...Q,children:(0,r.jsx)(i.u,{...et("container"),children:(0,r.jsxs)(o.V,{data:O,...D,children:[z&&(0,r.jsx)(l.z,{stroke:"var(--chart-grid-color)",...L}),H&&(0,r.jsx)(c.r,{dataKey:M,..._}),V&&(0,r.jsx)(d.E,{stroke:"var(--chart-grid-color)",...G}),q&&(0,r.jsx)(h.m,{animationDuration:J,isAnimationActive:0!==J,cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1},content:({label:e,payload:t})=>(0,r.jsx)(w.I,{label:e,payload:t,classNames:es,styles:ea,series:F,attributes:X}),...B}),ei,Y&&(0,r.jsx)(p.s,{verticalAlign:"bottom",content:e=>(0,r.jsx)(b._,{payload:e.payload,onHighlight:er,legendPosition:$?.verticalAlign||"bottom",classNames:es,styles:ea,series:F,centered:!0,attributes:X}),...$}),W]})})})});T.displayName="@mantine/charts/RadarChart",T.classes=k},6154:(e,t,n)=>{"use strict";n.d(t,{O:()=>v});var r=n(31085),s=n(14041),a=n(79874),i=n(28255),o=n(22821),l=n(7098),c=n(51606),d=n(6754),h=n(29686),p=n(69564),u=n(34056),m=n(28970);let x={},j={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},f=(0,l.V)((e,{color:t,data:n,trendColors:r})=>({root:{"--chart-color":r?(0,c.r)(function(e,t){let n=e[0],r=e[e.length-1];return null===n||null===r?t.neutral||t.positive:n<r?t.positive:n>r?t.negative:t.neutral||t.positive}(n,r),e):t?(0,c.r)(t,e):void 0}})),v=(0,d.P9)((e,t)=>{let n=(0,h.Y)("Sparkline",j,e),{classNames:l,className:c,style:d,styles:v,unstyled:g,vars:y,data:b,withGradient:w,fillOpacity:k,curveType:S,strokeWidth:C,trendColors:T,connectNulls:I,areaProps:P,attributes:A,...O}=n,F=(0,p.I)({name:"Sparkline",classes:x,props:n,className:c,style:d,classNames:l,styles:v,unstyled:g,attributes:A,vars:y,varsResolver:f}),M=(0,s.useId)(),E=(0,s.useMemo)(()=>b.map((e,t)=>({value:e,index:t})),[b]);return(0,r.jsx)(u.a,{ref:t,...F("root"),...O,dir:"ltr",children:(0,r.jsx)(a.u,{children:(0,r.jsxs)(i.Q,{data:E,children:[(0,r.jsx)(o.G,{dataKey:"value",type:S,fill:`url(#${M})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:I,strokeWidth:C,fillOpacity:1,...P}),(0,r.jsx)("defs",{children:(0,r.jsx)(m.s,{id:M,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:k,withGradient:w})})]})})})});v.displayName="@mantine/charts/Sparkline",v.classes=x},78501:(e,t,n)=>{"use strict";n.d(t,{l:()=>v});var r=n(31085),s=n(14041),a=n(97567),i=n(82307),o=n(34211),l=n(36456),c=n(29686),d=n(6754),h=n(46395),p=n(35213),u=n(31791),m=n(65567),x=n(88559),j=n(87059);let f={withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},v=(0,d.P9)((e,t)=>{let n=(0,c.Y)("Select",f,e),{classNames:d,styles:v,unstyled:g,vars:y,dropdownOpened:b,defaultDropdownOpened:w,onDropdownClose:k,onDropdownOpen:S,onFocus:C,onBlur:T,onClick:I,onChange:P,data:A,value:O,defaultValue:F,selectFirstOptionOnChange:M,onOptionSubmit:E,comboboxProps:N,readOnly:R,disabled:D,filter:L,limit:_,withScrollArea:G,maxDropdownHeight:B,size:z,searchable:H,rightSection:V,checkIconPosition:q,withCheckIcon:J,nothingFoundMessage:W,name:Y,form:U,searchValue:K,defaultSearchValue:Z,onSearchChange:$,allowDeselect:X,error:Q,rightSectionPointerEvents:ee,id:et,clearable:en,clearButtonProps:er,hiddenInputProps:es,renderOption:ea,onClear:ei,autoComplete:eo,scrollAreaProps:el,__defaultRightSection:ec,__clearSection:ed,__clearable:eh,chevronColor:ep,autoSelectOnBlur:eu,attributes:em,...ex}=n,ej=(0,s.useMemo)(()=>(0,h.d)(A),[A]),ef=(0,s.useMemo)(()=>(0,p.D)(ej),[ej]),ev=(0,a.B)(et),[eg,ey,eb]=(0,i.Z)({value:O,defaultValue:F,finalValue:null,onChange:P}),ew="string"==typeof eg?ef[eg]:void 0,ek=(0,o.Z)(ew),[eS,eC,eT]=(0,i.Z)({value:K,defaultValue:Z,finalValue:ew?ew.label:"",onChange:$}),eI=(0,x.B)({opened:b,defaultOpened:w,onDropdownOpen:()=>{S?.(),eI.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{k?.(),setTimeout(eI.resetSelectedOption,0)}}),eP=e=>{eC(e),eI.resetSelectedOption()},{resolvedClassNames:eA,resolvedStyles:eO}=(0,l.Y)({props:n,styles:v,classNames:d});(0,s.useEffect)(()=>{M&&eI.selectFirstOption()},[M,eS]),(0,s.useEffect)(()=>{null===O&&eP(""),"string"==typeof O&&ew&&(ek?.value!==ew.value||ek?.label!==ew.label)&&eP(ew.label)},[O,ew]),(0,s.useEffect)(()=>{eb||eT||eP("string"==typeof eg&&ef[eg]?.label||"")},[A,eg]);let eF=(0,r.jsx)(u.G.ClearButton,{...er,onClear:()=>{ey(null,null),eP(""),ei?.()}}),eM=en&&!!eg&&!D&&!R;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.G,{store:eI,__staticSelector:"Select",classNames:eA,styles:eO,unstyled:g,readOnly:R,size:z,attributes:em,onOptionSubmit:e=>{E?.(e);let t=X&&ef[e].value===eg?null:ef[e],n=t?t.value:null;n!==eg&&ey(n,t),eb||eP("string"==typeof n&&t?.label||""),eI.closeDropdown()},...N,children:[(0,r.jsx)(u.G.Target,{targetType:H?"input":"button",autoComplete:eo,children:(0,r.jsx)(j.O,{id:ev,ref:t,__defaultRightSection:(0,r.jsx)(u.G.Chevron,{size:z,error:Q,unstyled:g,color:ep}),__clearSection:eF,__clearable:eM,rightSection:V,rightSectionPointerEvents:ee||(eM?"all":"none"),...ex,size:z,__staticSelector:"Select",disabled:D,readOnly:R||!H,value:eS,onChange:e=>{eP(e.currentTarget.value),eI.openDropdown(),M&&eI.selectFirstOption()},onFocus:e=>{H&&eI.openDropdown(),C?.(e)},onBlur:e=>{eu&&eI.clickSelectedOption(),H&&eI.closeDropdown(),eP(null!=eg&&ef[eg]?.label||""),T?.(e)},onClick:e=>{H?eI.openDropdown():eI.toggleDropdown(),I?.(e)},classNames:eA,styles:eO,unstyled:g,pointer:!H,error:Q,attributes:em})}),(0,r.jsx)(m.i,{data:ej,hidden:R||D,filter:L,search:eS,limit:_,hiddenWhenEmpty:!W,withScrollArea:G,maxDropdownHeight:B,filterOptions:!!H&&ew?.label!==eS,value:eg,checkIconPosition:q,withCheckIcon:J,nothingFoundMessage:W,unstyled:g,labelId:ex.label?`${ev}-label`:void 0,"aria-label":ex.label?void 0:ex["aria-label"],renderOption:ea,scrollAreaProps:el})]}),(0,r.jsx)(u.G.HiddenInput,{value:eg,name:Y,form:U,disabled:D,...es})]})});v.classes={...j.O.classes,...u.G.classes},v.displayName="@mantine/core/Select"},34211:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(14041);function s(e){let t=(0,r.useRef)(void 0);return(0,r.useEffect)(()=>{t.current=e},[e]),t.current}}},e=>{var t=t=>e(e.s=t);e.O(0,[90401,59573,16576,35115,28054,46828,22821,8084,65340,22905,94456,18675,31791,17650,10047,66732,90636,46593,38792],()=>t(29285)),_N_E=e.O()}]);