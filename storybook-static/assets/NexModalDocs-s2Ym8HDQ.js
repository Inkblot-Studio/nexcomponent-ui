import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as r}from"./index-CqcSDpoT.js";import"./index-CDs2tPxN.js";function t(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexmodal-component",children:"NexModal Component"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexmodal--docs",rel:"nofollow",children:"NexModal Storybook"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexModal "}),"is a component designed to display modal dialogs within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal Content:"})," ",n.jsx(e.code,{children:"NexModal "}),"displays customizable content within a modal dialog, including text, buttons, and other elements."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button Actions:"})," You can define actions for buttons within the modal to handle user interactions such as confirming or canceling an action."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexModal"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexModal from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  const handleOpenModal = () => {\r
    // Set state or trigger action to open the modal\r
  };\r
\r
  const handleCloseModal = () => {\r
    // Set state or trigger action to close the modal\r
  };\r
\r
  return (\r
    <>\r
      <button onClick={handleOpenModal}>Open Modal</button>\r
      <NexModal setOpenModal={handleCloseModal} />\r
    </>\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"setOpenModal (required):"})," Function to control the visibility of the modal. When called with ",n.jsx(e.code,{children:"true"}),", the modal is displayed. When called with ",n.jsx(e.code,{children:"false"}),", the modal is hidden."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useState } from 'react';\r
import NexModal from '@nexcomponent/lib/NexModal/index';\r
\r
function MyComponent() {\r
  const [openModal, setOpenModal] = useState(false);\r
\r
  const handleOpenModal = () => {\r
    setOpenModal(true);\r
  };\r
\r
  const handleCloseModal = () => {\r
    setOpenModal(false);\r
  };\r
\r
  return (\r
    <>\r
      <button onClick={handleOpenModal}>Open Modal</button>\r
      {openModal && <NexModal setOpenModal={handleCloseModal} />}\r
    </>\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexModal "}),"can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the modal content, button actions, and styling to match your application's design requirements."]})]})}function d(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{d as default};
