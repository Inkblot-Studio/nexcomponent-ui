import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import"./index-uubelm5h.js";function r(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"nexinput-component",children:"NexInput Component"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexinput--docs",rel:"nofollow",children:"NexInput Storybook"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexInput "}),"is a versatile component used to create input fields within your React application. It offers the following features:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input Types:"})," ",e.jsx(n.code,{children:"NexInput "}),"supports various input types including text, password, email, number, and more."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Password Peeking:"})," You can enable a peek button for password inputs to allow users to toggle password visibility."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customization:"})," ",e.jsx(n.code,{children:"NexInput "}),"allows customization of input field width, size, and additional class names."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use ",e.jsx(n.code,{children:"NexInput"}),", simply import the component and provide the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexInput from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexInput\r
      type="text"\r
      placeholder="Enter your text here"\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type (required):"})," Type of the input field (e.g., text, password, email)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"peekButton (optional):"})," Enable or disable the peek button for password inputs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className (optional):"})," Custom class name to be applied to the input field wrapper."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"width (optional):"})," Width of the input field in pixels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"fieldSize (optional - default: 'normal'):"})," Size of the input field (can be 'small', 'normal', or 'large')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"rest (optional):"})," Any additional props supported by the HTML input element (e.g., placeholder, value, onChange)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexInput from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexInput\r
      type="password"\r
      placeholder="Enter your password"\r
      peekButton={true}\r
      className="custom-input"\r
      width={200}\r
      fieldSize="large"\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexInput"})," can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the input type, placeholder text, width, size, and styling to match your application's design requirements."]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{p as default};
