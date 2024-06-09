import{j as r}from"./jsx-runtime-BnIj46N_.js";import{useMDXComponents as t}from"./index-DLsXyOuj.js";import"./index-CsdIBAqE.js";function e(o){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h2,{id:"customizing-colors-in-client-projects",children:"Customizing Colors in Client Projects"}),`
`,r.jsx(n.p,{children:"The provided UI library incorporates a set of predefined color variables to maintain consistency across projects. These colors can be effortlessly customized at the root level of your client projects to align with your brand identity or design requirements."}),`
`,r.jsx(n.h3,{id:"integration-steps",children:"Integration Steps"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"Root Level Customization"}),": Modify the color variables within the :root selector to reflect your desired palette:"]}),`
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
`,r.jsx(n.h3,{id:"changing-colors",children:"Changing Colors"}),`
`,r.jsx(n.p,{children:"To adapt the color scheme to your project's requirements:"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"Primary Colors: Adjust --nex-primary-color and --nex-primary-contrast-color for primary elements and their contrast."}),`
`,r.jsx(n.li,{children:"econdary Colors: Modify --nex-secondary-color and --nex-secondary-contrast-color for secondary elements."}),`
`,r.jsx(n.li,{children:"Tertiary and Quaternary Colors: Customize --nex-tertiary-color, --nex-tertiary-contrast-color, --nex-quaternary-color, and --nex-quaternary-contrast-color as needed."}),`
`,r.jsx(n.li,{children:"Font and Background Colors: Alter --nex-font-color and --nex-background-color to match your text and background preferences."}),`
`,r.jsx(n.li,{children:"Complimentary Color: Adjust --nex-complimentary-color for accents and highlights."}),`
`,r.jsx(n.li,{children:"Bootstrap Colors: Optionally, modify --nex-success, --nex-info, --nex-warning, and --nex-danger to integrate with Bootstrap components seamlessly."}),`
`]}),`
`,r.jsx(n.p,{children:"By following these steps, you can effortlessly tailor the color scheme of your client projects while leveraging the flexibility and consistency offered by the UI library."}),`
`,r.jsx(n.p,{children:"For further guidance or assistance, refer to the documentation of your chosen UI library or consult with your development team."})]})}function i(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{i as default};
