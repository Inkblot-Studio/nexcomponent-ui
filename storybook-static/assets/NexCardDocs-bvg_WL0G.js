import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import"./index-uubelm5h.js";function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexcard-component",children:"NexCard Component"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexcard--docs",rel:"nofollow",children:"NexCard Storybook"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexCard"})," is a versatile component used to display cards with various content within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Display:"})," ",n.jsx(e.code,{children:"NexCard"})," supports displaying images, titles, text content, actions, and footer sections."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," You can customize the appearance of the card, including the presence of images, titles, and footer sections."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexibility:"})," ",n.jsx(e.code,{children:"NexCard"})," can be easily integrated into any React application and styled to match your design system."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h5,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexCard"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCard\r
      title="Card Title"\r
      image="path/to/image.jpg"\r
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\r
      actions={<button onClick={() => console.log('Action clicked')}>Action</button>}\r
      footer={<div>Card Footer</div>}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"title (optional):"})," Title of the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"image (optional):"})," Image URL to be displayed on the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"content (optional):"})," Text content to be displayed on the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"actions (optional):"})," Actions to be displayed on the card (e.g., buttons, links)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"footer (optional):"})," Footer content to be displayed below the card."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCard\r
      title="Card Title"\r
      image="path/to/image.jpg"\r
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\r
      actions={<button onClick={() => console.log('Action clicked')}>Action</button>}\r
      footer={<div>Card Footer</div>}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexCard"})," can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the content, layout, and styling to match your application's design requirements."]})]})}function a(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{a as default};
