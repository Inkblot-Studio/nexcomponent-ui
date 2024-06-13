import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as r}from"./index-CqcSDpoT.js";import"./index-CDs2tPxN.js";function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexnav-component",children:"NexNav Component"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexnav--docs",rel:"nofollow",children:"NexNav Storybook"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexNav "}),"is a component designed to create navigation bars or menus within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigation Menu:"})," ",n.jsx(e.code,{children:"NexNav"})," displays a customizable navigation menu with logo, menu items, and optional identity links (e.g., login, sign up)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile-Friendly:"})," The component includes a responsive design, making it suitable for desktop and mobile devices."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," You can customize the appearance and behavior of the navigation menu by adjusting various props and styles."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless navigation experience for all users."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexNav"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexNav from '@nexcomponent/lib/src/components/NexNav';\r
\r
function MyComponent() {\r
  const navItems = [\r
    { label: 'Home', onClick: () => console.log('Home clicked') },\r
    { label: 'About', onClick: () => console.log('About clicked') },\r
    // Add more menu items as needed\r
  ];\r
\r
  return (\r
    <NexNav\r
      logoSrc="/path/to/logo.png"\r
      altText="Company Name"\r
      navItems={navItems}\r
      identity={true}\r
      identityProps={{\r
        onLoginClick: () => console.log('Login clicked'),\r
        onSignUpClick: () => console.log('Sign Up clicked')\r
      }}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"logoSrc (optional):"})," URL of the logo image to be displayed in the navigation bar."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"altText (required):"})," Alternate text for the logo image, or the company name if no logo is provided."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"identity (optional - default: false):"})," Whether to display identity links (e.g., login, sign up) in the navigation menu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"navItems (required):"})," Array of menu items to be displayed in the navigation menu. Each item should have a ",n.jsx(e.code,{children:"label"})," and an optional ",n.jsx(e.code,{children:"onClick"})," function."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"identityProps (optional):"})," Additional props for identity links, including ",n.jsx(e.code,{children:"onLoginClick"})," and ",n.jsx(e.code,{children:"onSignUpClick"})," functions."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexNav from '@nexcomponent/lib/src/components/NexNav';\r
\r
function MyComponent() {\r
  const navItems = [\r
    { label: 'Home', onClick: () => console.log('Home clicked') },\r
    { label: 'About', onClick: () => console.log('About clicked') },\r
    // Add more menu items as needed\r
  ];\r
\r
  return (\r
    <NexNav\r
      logoSrc="/path/to/logo.png"\r
      altText="Company Name"\r
      navItems={navItems}\r
      identity={true}\r
      identityProps={{\r
        onLoginClick: () => console.log('Login clicked'),\r
        onSignUpClick: () => console.log('Sign Up clicked')\r
      }}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexNav "}),"can be customized by adjusting the styles defined in the accompanying CSS file (",n.jsx(e.code,{children:"NexNav.scss"}),"). You can modify the appearance, layout, and behavior of the navigation menu to match your application's design requirements."]})]})}function a(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{a as default};
