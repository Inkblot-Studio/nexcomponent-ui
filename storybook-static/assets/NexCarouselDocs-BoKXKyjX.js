import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import"./index-uubelm5h.js";function r(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"nexcarousel-component",children:"NexCarousel Component"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexcarousel--docs",rel:"nofollow",children:"NexCarousel Storybook"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexCarousel"})," is a versatile component used to create image carousels or sliders within your React application. It offers the following features:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Slideshow:"})," ",e.jsx(n.code,{children:"NexCarousel"})," supports automatic looping through the elements at specified intervals, providing a seamless slideshow experience."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation Buttons:"})," You can enable navigation buttons to allow users to manually navigate through the carousel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customization:"})," ",e.jsx(n.code,{children:"NexCarousel"})," allows customization of navigation button positions, line indicators, and more, to match your design system."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,e.jsx(n.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Before using ",e.jsx(n.code,{children:"NexCarousel"})," component, ensure that you have installed the necessary dependencies and set up your project environment appropriately."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h5,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["To use ",e.jsx(n.code,{children:"NexCarousel"}),", simply import the component and wrap your carousel content with it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCarousel from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCarousel>\r
      {/* Your carousel content here */}\r
    </NexCarousel>\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h5,{id:"with-automatic-slideshow",children:"With Automatic Slideshow"}),`
`,e.jsxs(n.p,{children:["You can enable automatic slideshow by providing the ",e.jsx(n.code,{children:"interval"})," prop with the desired interval in seconds:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCarousel from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCarousel interval={5}>\r
      {/* Your carousel content here */}\r
    </NexCarousel>\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children (required):"})," The content elements to be displayed within the carousel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"navButtons (optional - default: false):"})," Enable or disable navigation buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"navigationPosition (optional - default: 'bottom'):"})," Position of navigation buttons (can be 'top', 'bottom', 'left', or 'right')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"line (optional - default: false):"})," Enable or disable line indicators."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"interval (optional):"})," Interval in seconds for automatic slideshow. If provided, the carousel will automatically switch elements at the specified interval."]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';\r
import NexCarousel from '@nexcomponent/lib';\r
\r
function MyComponent() {\r
  return (\r
    <NexCarousel navButtons={true} navigationPosition="bottom" line={true} interval={3}>\r
      {/* Your carousel content here */}\r
    </NexCarousel>\r
  );\r
}\r
\r
export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"additional-functionality",children:"Additional Functionality"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexCarousel"})," also provides additional functionality to programmatically manage the carousel:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"handleNext()"}),e.jsx(n.strong,{children:":"})," Function to navigate to the next slide."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"handlePrev()"}),e.jsx(n.strong,{children:":"})," Function to navigate to the previous slide."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"handleJumpToSlide(index: number)"}),e.jsx(n.strong,{children:":"})," Function to jump to a specific slide by index."]}),`
`]}),`
`,e.jsx(n.p,{children:"You can use these functions as needed within your components to control the carousel behavior."})]})}function a(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{a as default};
