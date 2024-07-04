import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import"./index-uubelm5h.js";function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexbutton-component",children:"NexButton Component"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexbutton--docs",rel:"nofollow",children:"View NexButton story in Storybook"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexButton"})," is a customizable button component designed for use in React applications. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button Types:"})," ",n.jsx(e.code,{children:"NexButton"})," supports various types of buttons including primary, secondary, tertiary, quaternary, success, info, warning, and danger."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button Sizes:"})," You can customize the size of the button according to your design requirements."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexibility:"})," ",n.jsx(e.code,{children:"NexButton"})," can be easily integrated into any React application and styled to match your design system."]}),`
`]}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onClick"}),": Function to be called when the button is clicked."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"className"}),": Additional CSS class names to be applied to the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"size"}),": Size of the button. Can be 'small', 'normal', or 'large'. Default is 'normal'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type"}),": Type of the button. Can be 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', or 'danger'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"inverted"}),": Boolean indicating if the button should have an inverted color scheme."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text"}),": Text to be displayed on the button."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexButton from '@nexcomponent/lib';\r
\r
const MyComponent = () => {\r
  const handleClick = () => {\r
    console.log('Button clicked!');\r
  };\r
\r
  return (\r
    <div>\r
      <h1>My Component</h1>\r
      <NexButton onClick={handleClick} type="primary" size="large" text="Click me" />\r
    </div>\r
  );\r
};\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"styling",children:"Styling"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexButton"})," uses CSS classes for styling. You can customize the appearance of the button by modifying the corresponding CSS classes in your project."]})]})}function l(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{l as default};
