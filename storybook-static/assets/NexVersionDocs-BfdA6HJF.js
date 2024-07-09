import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import"./index-CTjT7uj6.js";function i(r){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexversion-component",children:"NexVersion Component"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexVersion "}),"is a component designed to display and edit version numbers within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Editable Version:"})," ",n.jsx(e.code,{children:"NexVersion "}),"allows users to edit the displayed version number by clicking on it."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Save Functionality:"})," Users can save the edited version number, triggering a provided callback function to handle the update."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexVersion"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
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
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"version (required):"})," The version number to be displayed and edited."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"handleSave (optional):"})," Callback function to handle saving the edited version number."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
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
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexVersion "}),"can be customized by adjusting the styles defined in the accompanying CSS file (",n.jsx(e.code,{children:"NexVersion.scss"}),"). You can modify the appearance and behavior of the version number display and editing interface to match your application's design requirements."]})]})}function a(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{a as default};
