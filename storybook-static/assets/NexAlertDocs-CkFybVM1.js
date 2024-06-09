import{j as e}from"./jsx-runtime-BnIj46N_.js";import{useMDXComponents as t}from"./index-DLsXyOuj.js";import"./index-CsdIBAqE.js";function s(n){const r={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h2,{id:"nexalert-component",children:"NexAlert Component"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"http://localhost:6006/?path=/docs/nexcomponent-nexalert--docs",rel:"nofollow",children:"View NexAlert story in Storybook"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"NexAlert"})," is a versatile component used to display different types of alerts within your application. It offers the following features:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Types of Alerts:"})," ",e.jsx(r.code,{children:"NexAlert"})," supports various types of alerts including success, error, warning, and informational messages."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Customization:"})," You can customize the message content, type of alert, duration of display, and the presence of a dismiss button."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Flexibility:"})," ",e.jsx(r.code,{children:"NexAlert"})," can be easily integrated into any React application and styled to match your design system."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accessibility:"})," The component ensures accessibility standards are met, providing a seamless experience for all users."]}),`
`]}),`
`,e.jsx(r.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Before using ",e.jsx(r.code,{children:"NexAlert"})," component, ensure that you have installed the necessary dependencies and set up your project environment appropriately."]}),`
`,e.jsxs(r.li,{children:["Make sure the ",e.jsx(r.code,{children:"<NexAlertsProvider>"})," wraps the contents of your page."]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// App.tsx\r
(...)\r
import { NexAlertsProvider } from "@nexcomponent/lib/src/components/NexAlert/index";\r
\r
function App() {\r
  return (\r
        <NexAlertsProvider>\r
            // Your app content\r
        </NexAlertsProvider>\r
    )\r
}
`})}),`
`,e.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h5,{id:"alert-stacking",children:"Alert Stacking"}),`
`,e.jsxs(r.p,{children:["When multiple alerts are triggered, ",e.jsx(r.code,{children:"NexAlert"})," provides a stacking mechanism to manage the display of these alerts:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Maximum Number of Alerts:"})," ",e.jsx(r.code,{children:"NexAlert"})," limits the number of alerts that can be displayed simultaneously. By default, it allows up to 4 alerts to be displayed at once."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Stacking Behavior:"})," When a new alert is triggered and the maximum number of alerts is already displayed, ",e.jsx(r.code,{children:"NexAlert"})," automatically dismisses the oldest alert to make room for the new one. This ensures that the most recent alerts are always visible to the user."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Order of Dismissal:"})," The oldest alert in the stack (the one that has been displayed the longest) is dismissed first to accommodate the new alert. This ensures that alerts are dismissed in the order they were triggered, maintaining a consistent user experience."]}),`
`]}),`
`]}),`
`,e.jsx(r.h3,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import React, { useEffect } from 'react';\r
import { useAlerts } from './NexAlertsProvider';\r
\r
const MyComponent = () => {\r
  const { addAlert } = useAlerts();\r
\r
  useEffect(() => {\r
    // Simulate triggering multiple alerts\r
    addAlert({ type: 'info', message: 'Info 1' });\r
    addAlert({ type: 'error', message: 'Error 1' });\r
    addAlert({ type: 'success', message: 'Success 1' });\r
    addAlert({ type: 'warning', message: 'Warning 1' });\r
  }, []);\r
\r
  return (\r
    <div>\r
      <h1>My Component</h1>\r
      {/* Your component JSX */}\r
    </div>\r
  );\r
};\r
\r
export default MyComponent;
`})}),`
`,e.jsx(r.h3,{id:"managing-alerts",children:"Managing Alerts"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"NexAlert"})," provides a ",e.jsx(r.code,{children:"useAlerts"})," hook and a ",e.jsx(r.code,{children:"clearAlerts"})," method to manage alerts programmatically:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useAlerts Hook:"})," This hook provides functions to add alerts and clear all alerts. It ensures that alerts are managed within the context of a ",e.jsx(r.code,{children:"NexAlertsProvider"}),"."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"clearAlerts Method:"})," The ",e.jsx(r.code,{children:"clearAlerts"})," method clears all alerts currently displayed by dismissing them from the stack. This can be useful for scenarios where you want to remove all alerts at once, such as after a user action or when navigating away from a page."]}),`
`]}),`
`]}),`
`,e.jsx(r.h3,{id:"example-1",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import React, { useEffect } from 'react';\r
import { useAlerts } from './NexAlertsProvider';\r
\r
const MyComponent = () => {\r
  const { addAlert, clearAlerts } = useAlerts();\r
\r
  useEffect(() => {\r
    // Simulate triggering multiple alerts\r
    addAlert({ type: 'info', message: 'Info 1' });\r
    addAlert({ type: 'error', message: 'Error 1' });\r
    addAlert({ type: 'success', message: 'Success 1' });\r
    addAlert({ type: 'warning', message: 'Warning 1' });\r
\r
    // Clear all alerts after 5 seconds\r
    const timeoutId = setTimeout(() => {\r
      clearAlerts();\r
    }, 5000);\r
\r
    return () => clearTimeout(timeoutId);\r
  }, []);\r
\r
  return (\r
    <div>\r
      <h1>My Component</h1>\r
      {/* Your component JSX */}\r
    </div>\r
  );\r
};\r
\r
export default MyComponent;
`})})]})}function a(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
