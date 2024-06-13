import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as i}from"./index-CqcSDpoT.js";import"./index-CDs2tPxN.js";function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"getting-started-with-nexcomponentlib-react-ui-library",children:"Getting Started with @nexcomponent/lib React UI Library"}),`
`,n.jsx(e.h4,{id:"welcome-to-the-getting-started-guide-for-nexcomponentlib-this-guide-will-walk-you-through-the-process-of-installing-the-library-and-using-its-components-in-your-react-application",children:"\nWelcome to the getting started guide for `@nexcomponent/lib`! This guide will walk you through the process of installing the library and using its components in your React application.\n"}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["Install ",n.jsx(e.code,{children:"@nexcomponent/lib"})," via npm or yarn:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-txt",children:`npm install @nexcomponent/lib --save
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-txt",children:`yarn add @nexcomponent/lib
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"importing-components",children:"Importing Components"}),`
`,n.jsxs(e.p,{children:["Once installed, you can import components from ",n.jsx(e.code,{children:"@nexcomponent/lib"})," into your React application:"]}),`
`,n.jsx(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,n.jsxs(e.p,{children:["Here's an example demonstrating the usage of the ",n.jsx(e.code,{children:"NexButton"})," component:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexButton from '@nexcomponent/lib/src/components/NexButton/NexButton';\r
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
`,n.jsx(e.h2,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(e.p,{children:["For detailed documentation on each component and its props, visit the ",n.jsx(e.a,{href:"https://nexcomponent-docs.com/",rel:"nofollow",children:"official documentation"}),"."]}),`
`,n.jsx(e.h2,{id:"styling",children:"Styling"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@nexcomponent/lib"})," components come with minimal styling. You can customize the styles by either:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Passing custom className or styles directly to the components."}),`
`]}),`
`,n.jsx(e.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,n.jsx(e.p,{children:"For additional help or support, you can:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Visit the ",n.jsx(e.a,{href:"https://nexcomponent.com/",rel:"nofollow",children:"official website"}),"."]}),`
`,n.jsxs(e.li,{children:["Join our community on ",n.jsx(e.a,{href:"",children:"Discord"}),"."]}),`
`,n.jsxs(e.li,{children:["Report bugs or request features on ",n.jsx(e.a,{href:"https://github.com/nexcomponent/lib/issues",rel:"nofollow",children:"GitHub"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["That's it! You're now ready to start using ",n.jsx(e.code,{children:"@nexcomponent/lib"})," in your React application. Happy coding!"]}),`
`,n.jsx(e.p,{children:"Test Text 2"})]})}function c(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default};
