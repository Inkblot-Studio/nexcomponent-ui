import{j as n}from"./jsx-runtime-BnIj46N_.js";import{useMDXComponents as s}from"./index-DLsXyOuj.js";import"./index-CsdIBAqE.js";function r(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexinput-component",children:"NexInput Component"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexinput--docs",rel:"nofollow",children:"NexInput Storybook"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexInput "}),"is a versatile component used to create input fields within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Input Types:"})," ",n.jsx(e.code,{children:"NexInput "}),"supports various input types including text, password, email, number, and more."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Password Peeking:"})," You can enable a peek button for password inputs to allow users to toggle password visibility."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," ",n.jsx(e.code,{children:"NexInput "}),"allows customization of input field width, size, and additional class names."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexInput"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexInput from '@nexcomponent/lib/src/components/NexInput/index';\r
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
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"type (required):"})," Type of the input field (e.g., text, password, email)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"peekButton (optional):"})," Enable or disable the peek button for password inputs."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"className (optional):"})," Custom class name to be applied to the input field wrapper."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"width (optional):"})," Width of the input field in pixels."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"fieldSize (optional - default: 'normal'):"})," Size of the input field (can be 'small', 'normal', or 'large')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"rest (optional):"})," Any additional props supported by the HTML input element (e.g., placeholder, value, onChange)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexInput from '@nexcomponent/lib/src/components/NexInput/index';\r
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
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexInput"})," can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the input type, placeholder text, width, size, and styling to match your application's design requirements."]})]})}function p(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{p as default};
