import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as r}from"./index-CqcSDpoT.js";import"./index-CDs2tPxN.js";function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h2,{id:"nexcopytoclipboard-component",children:"NexCopyToClipboard Component"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexcopytoclipboard--docs",rel:"nofollow",children:"NexCopyToClipboard Storybook"})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"NexCopyToClipboard "}),"is a component designed to facilitate copying text to the clipboard within your React application. It offers the following features:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Clipboard Copy:"})," ",e.jsx(o.code,{children:"NexCopyToClipboard "}),"allows users to easily copy text content to their clipboard with a single click."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Customization:"})," You can customize the appearance of the copy button by providing a custom class name and specifying the type of button (e.g., primary, secondary)."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["To use ",e.jsx(o.code,{children:"NexCopyToClipboard"}),", simply import the component and provide the necessary props:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCopyToClipboard from '@nexcomponent/lib/src/components/NexCopyToClipboard/index';\r
\r
function MyComponent() {\r
  return (\r
    <NexCopyToClipboard\r
      textToCopy="Text to be copied"\r
      type="primary"\r
      className="custom-class"\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(o.h3,{id:"props",children:"Props"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"textToCopy (required):"})," The text content to be copied to the clipboard."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"type (optional):"})," Type of the copy button (e.g., primary, secondary). Default is no specific type."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"className (optional):"})," Custom class name to be applied to the copy button."]}),`
`]}),`
`,e.jsx(o.h3,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCopyToClipboard from '@nexcomponent/lib/src/components/NexCopyToClipboard/index';\r
\r
function MyComponent() {\r
  return (\r
    <NexCopyToClipboard\r
      textToCopy="Text to be copied"\r
      type="primary"\r
      className="custom-class"\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(o.h3,{id:"customization",children:"Customization"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"NexCopyToClipboard "}),"can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the button type, class name, and styling to match your application's design requirements."]})]})}function p(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
