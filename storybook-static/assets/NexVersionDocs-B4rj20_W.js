import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as s}from"./index-CqcSDpoT.js";import"./index-CDs2tPxN.js";function o(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"nexversion-component",children:"NexVersion Component"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexversion--docs",rel:"nofollow",children:"NexVersion Storybook"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexVersion "}),"is a component designed to display and edit version numbers within your React application. It offers the following features:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Editable Version:"})," ",e.jsx(n.code,{children:"NexVersion "}),"allows users to edit the displayed version number by clicking on it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Save Functionality:"})," Users can save the edited version number, triggering a provided callback function to handle the update."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use ",e.jsx(n.code,{children:"NexVersion"}),", simply import the component and provide the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexVersion from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  const handleSaveVersion = (newVersion: string) => {\r
    // Handle saving the new version\r
    console.log('New version:', newVersion);\r
  };\r
\r
  return (\r
    <NexVersion version="1.0.0" handleSave={handleSaveVersion} />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"version (required):"})," The version number to be displayed and edited."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"handleSave (optional):"})," Callback function to handle saving the edited version number."]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexVersion from '@nexcomponent/lib/NexVersion';\r
\r
function MyComponent() {\r
  const handleSaveVersion = (newVersion: string) => {\r
    // Handle saving the new version\r
    console.log('New version:', newVersion);\r
  };\r
\r
  return (\r
    <NexVersion version="1.0.0" handleSave={handleSaveVersion} />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexVersion "}),"can be customized by adjusting the styles defined in the accompanying CSS file (",e.jsx(n.code,{children:"NexVersion.scss"}),"). You can modify the appearance and behavior of the version number display and editing interface to match your application's design requirements."]})]})}function d(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{d as default};
