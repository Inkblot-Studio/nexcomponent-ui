import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import"./index-CTjT7uj6.js";function i(t){const e={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"nexcard-component",children:"NexCard Component"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexCard"})," is a versatile component used to display cards with various content within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Display:"})," ",n.jsx(e.code,{children:"NexCard"})," supports displaying images, titles, text content, and actions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," You can customize the appearance of the card, including the presence of images and titles."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexibility:"})," ",n.jsx(e.code,{children:"NexCard"})," can be easily integrated into any React application and styled to match your design system."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Variations:"})," ",n.jsx(e.code,{children:"NexCard"})," can be rendered with or without actions, images, and titles. Actions work best with ",n.jsx(e.code,{children:"NexButton"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h4,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexCard"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCard\r
      title="Card Title"\r
      imageUrl="path/to/image.jpg"\r
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\r
      actions={<button onClick={() => console.log('Action clicked')}>Action</button>}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"title (optional):"})," Title of the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"imageUrl (optional):"})," Image URL to be displayed on the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"content (optional):"})," Text content to be displayed on the card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"actions (optional):"})," Actions to be displayed on the card (e.g., buttons, links). Works best with ",n.jsx(e.code,{children:"NexButton"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"border (optional):"})," Whether to display a border around the card, true by default"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"className (optional):"})," Additional CSS class names to be applied to the button."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCard\r
      title="Card Title"\r
      imageUrl="path/to/image.jpg"\r
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\r
      actions={<button onClick={() => console.log('Action clicked')}>Action</button>}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexCard"})," can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the content, layout, and styling to match your application's design requirements. The UI will vary depending on whether an image is included or not."]})]})}function a(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{a as default};
