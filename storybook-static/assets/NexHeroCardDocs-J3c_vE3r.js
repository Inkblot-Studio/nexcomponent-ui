import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import"./index-CTjT7uj6.js";function r(t){const e={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"nexherocard-component",children:"NexHeroCard Component"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexHeroCard"})," is a prominent component designed to display hero sections with various content within your React application. It offers the following features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Display:"})," ",n.jsx(e.code,{children:"NexHeroCard"})," supports displaying titles, subtitles, and a customizable button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," You can customize the appearance of the card, including the presence of a background image and button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexibility:"})," ",n.jsx(e.code,{children:"NexHeroCard"})," can be easily integrated into any React application and styled to match your design system."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Variations:"})," ",n.jsx(e.code,{children:"NexHeroCard"})," can be rendered with or without a background image, and with or without a button."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h4,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsxs(e.p,{children:["To use ",n.jsx(e.code,{children:"NexHeroCard"}),", simply import the component and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexHeroCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexHeroCard\r
      title="Hero Title"\r
      subtitle="Hero Subtitle"\r
      backgroundUrl="path/to/background.jpg"\r
      buttonLabel="Click Me"\r
      buttonHandle={() => console.log('Button clicked')}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"title (optional):"})," Title of the hero card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"subtitle (optional):"})," Subtitle of the hero card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"type (optional):"})," Type of the hero card, which can determine its styling."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"buttonLabel (optional):"})," Label for the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"buttonHandle (optional):"})," Handler function to be called when the button is clicked."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"backgroundUrl (optional):"})," URL of the background image to be displayed on the hero card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"className (optional):"})," Additional CSS class names to be applied to the hero card."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexHeroCard from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexHeroCard\r
      title="Hero Title"\r
      subtitle="Hero Subtitle"\r
      backgroundUrl="path/to/background.jpg"\r
      buttonLabel="Click Me"\r
      buttonHandle={() => console.log('Button clicked')}\r
    />\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"NexHeroCard"})," can be customized by providing different props or styling to achieve the desired appearance and functionality. You can adjust the content, layout, and styling to match your application's design requirements. The UI will vary depending on whether a background image is included or not, and the button can be styled using ",n.jsx(e.code,{children:"NexButton"}),"."]})]})}function a(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{a as default};
