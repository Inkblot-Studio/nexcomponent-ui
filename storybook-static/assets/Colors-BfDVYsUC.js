import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as c}from"./index-DSkyVWTJ.js";import"./index-CTjT7uj6.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"theming-guide-for-nexcomponent",children:"Theming Guide for NexComponent"}),`
`,r.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,r.jsx(n.p,{children:"NexComponent allows for extensive customization to ensure that your UI components align perfectly with your brand identity and design requirements. By leveraging CSS variables, you can easily adjust the colors and styles of the components throughout your application."}),`
`,r.jsx(n.h2,{id:"customizing-colors",children:"Customizing Colors"}),`
`,r.jsx(n.p,{children:"NexComponent uses a set of predefined color variables to maintain consistency. You can customize these colors at the root level of your project to reflect your desired palette."}),`
`,r.jsx(n.h3,{id:"default-color-variables",children:"Default Color Variables"}),`
`,r.jsx(n.p,{children:"Below are the default color variables used by NexComponent:"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-css",children:`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');\r
\r
:root {\r
  font-family: "Inter", sans-serif;\r
\r
  /* Primary colors */\r
  --nex-primary-color: #3D4DE1;\r
  --nex-primary-color-rgb: 61, 77, 225;\r
  --nex-primary-opacity: 1;\r
  --nex-primary-contrast-color: #f3f3f3;\r
\r
  /* Secondary colors */\r
  --nex-secondary-color: #ef910a;\r
  --nex-secondary-color-rgb: 239, 145, 10;\r
  --nex-secondary-opacity: 1;\r
  --nex-secondary-contrast-color: #f3f3f3;\r
\r
  /* Tertiary colors */\r
  --nex-tertiary-color: #88ffca;\r
  --nex-tertiary-color-rgb: 136, 255, 202;\r
  --nex-tertiary-opacity: 1;\r
  --nex-tertiary-contrast-color: #f3f3f3;\r
\r
  /* Quaternary colors */\r
  --nex-quaternary-color: #4addef;\r
  --nex-quaternary-color-rgb: 74, 221, 239;\r
  --nex-quaternary-opacity: 1;\r
  --nex-quaternary-contrast-color: #f3f3f3;\r
\r
  /* Font color */\r
  --nex-font-color: #17181D;\r
  --nex-font-color-rgb: 23, 24, 29;\r
  --nex-font-opacity: 1;\r
\r
  /* Background color */\r
  --nex-background-color: #f3f3f3;\r
  --nex-background-color-rgb: 243, 243, 243;\r
  --nex-background-opacity: 1;\r
\r
  /* Complimentary color */\r
  --nex-complimentary-color: #bababa;\r
  --nex-complimentary-color-rgb: 186, 186, 186;\r
  --nex-complimentary-opacity: 1;\r
\r
  /* Bootstrap */\r
  --nex-success: #5cb85c;\r
  --nex-success-rgb: 92, 184, 92;\r
  --nex-success-opacity: 1;\r
\r
  --nex-info: #5bc0de;\r
  --nex-info-rgb: 91, 192, 222;\r
  --nex-info-opacity: 1;\r
\r
  --nex-warning: #f0ad4e;\r
  --nex-warning-rgb: 240, 173, 78;\r
  --nex-warning-opacity: 1;\r
\r
  --nex-danger: #d9534f;\r
  --nex-danger-rgb: 217, 83, 79;\r
  --nex-danger-opacity: 1;\r
}
`})}),`
`,r.jsx(n.h3,{id:"customization-steps",children:"Customization Steps"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Root Level Customization"}),": Modify the color variables within the ",r.jsx(n.code,{children:":root"})," selector to match your brand's color scheme:"]}),`
`]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-css",children:`:root {\r
  /* Primary colors */\r
  --nex-primary-color: #1f9be1;\r
  --nex-primary-contrast-color: #f3f3f3;\r
\r
  /* Secondary colors */\r
  --nex-secondary-color: #ef910a;\r
  --nex-secondary-contrast-color: #f3f3f3;\r
\r
  /* Tertiary colors */\r
  --nex-tertiary-color: #88ffca;\r
  --nex-tertiary-contrast-color: #f3f3f3;\r
\r
  /* Quaternary colors */\r
  --nex-quaternary-color: #4addef;\r
  --nex-quaternary-contrast-color: #f3f3f3;\r
\r
  /* Font color */\r
  --nex-font-color: #1e1d2a;\r
\r
  /* Background color */\r
  --nex-background-color: #f3f3f3;\r
\r
  /* Complimentary color */\r
  --nex-complimentary-color: #bababa;\r
\r
  /* Bootstrap */\r
  --nex-success: #5cb85c;\r
  --nex-info: #5bc0de;\r
  --nex-warning: #f0ad4e;\r
  --nex-danger: #d9534f;\r
}
`})}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Changing Colors"}),": Adjust the following variables to tailor the color scheme to your project's needs:",`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Primary Colors"}),": Update ",r.jsx(n.code,{children:"--nex-primary-color"})," and ",r.jsx(n.code,{children:"--nex-primary-contrast-color"})," for primary elements and their contrast."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Secondary Colors"}),": Modify ",r.jsx(n.code,{children:"--nex-secondary-color"})," and ",r.jsx(n.code,{children:"--nex-secondary-contrast-color"})," for secondary elements."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Tertiary and Quaternary Colors"}),": Customize ",r.jsx(n.code,{children:"--nex-tertiary-color"}),", ",r.jsx(n.code,{children:"--nex-tertiary-contrast-color"}),", ",r.jsx(n.code,{children:"--nex-quaternary-color"}),", and ",r.jsx(n.code,{children:"--nex-quaternary-contrast-color"})," as needed."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Font and Background Colors"}),": Adjust ",r.jsx(n.code,{children:"--nex-font-color"})," and ",r.jsx(n.code,{children:"--nex-background-color"})," to match your text and background preferences."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Complimentary Color"}),": Change ",r.jsx(n.code,{children:"--nex-complimentary-color"})," for accents and highlights."]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Bootstrap Colors"}),": Optionally, modify ",r.jsx(n.code,{children:"--nex-success"}),", ",r.jsx(n.code,{children:"--nex-info"}),", ",r.jsx(n.code,{children:"--nex-warning"}),", and ",r.jsx(n.code,{children:"--nex-danger"})," to seamlessly integrate with Bootstrap components."]}),`
`]}),`
`]}),`
`]}),`
`,r.jsx(n.h3,{id:"applying-your-custom-theme",children:"Applying Your Custom Theme"}),`
`,r.jsx(n.p,{children:"After updating the variables, ensure your styles are correctly applied by importing your custom CSS file into your project:"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-css",children:`import './path/to/your/custom.css';
`})}),`
`,r.jsx(n.p,{children:"By following these steps, you can effortlessly tailor the color scheme of your NexComponent library to match your brand and project requirements."}),`
`,r.jsx(n.p,{children:"For further guidance or assistance, refer to the detailed documentation of NexComponent or consult with your development team."})]})}function l(o={}){const{wrapper:n}={...c(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{l as default};
