import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import"./index-CTjT7uj6.js";function r(i){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"nexfooter-component",children:"NexFooter Component"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"NexFooter"})," component is designed to be a flexible and visually appealing footer for your React application. It offers a variety of social media icons, customizable display options, and ensures proper copyright display."]}),`
`,n.jsx(e.h3,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Logo Display:"})," You can display a logo or a name depending on the provided props."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Social Media Integration:"})," Includes a wide range of social media icons from FontAwesome."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customization:"})," The footer can be customized with different social media links and appearance settings."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive Design:"})," Ensures the footer looks good on all devices."]}),`
`]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use the ",n.jsx(e.code,{children:"NexFooter"})," component, import it into your React application and provide the necessary props:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexFooter from './NexFooter';\r
import { NexFooterProps } from './NexFooter.types';\r
\r
const footerProps: NexFooterProps = {\r
  logoSrc: 'path/to/logo.png',\r
  displayName: 'My Company',\r
  socials: [\r
    { type: 'facebook', url: 'https://facebook.com/mycompany' },\r
    { type: 'twitter', url: 'https://twitter.com/mycompany' },\r
    // Add more social links as needed\r
  ],\r
};\r
\r
function App() {\r
  return (\r
    <div className="App">\r
      {/* Other components */}\r
      <NexFooter {...footerProps} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"logoSrc (optional):"})," URL of the logo to be displayed. If not provided, the ",n.jsx(e.code,{children:"displayName"})," will be shown instead."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"displayName (required):"})," The name of the company or application to be displayed."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"socials (optional):"})," Array of social media links. Each link should include a ",n.jsx(e.code,{children:"type"})," (corresponding to a FontAwesome icon) and a ",n.jsx(e.code,{children:"url"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"className (optional):"})," Additional CSS class names to be applied to the footer."]}),`
`]}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';\r
import NexFooter from './NexFooter';\r
\r
const footerProps = {\r
  logoSrc: 'path/to/logo.png',\r
  displayName: 'My Company',\r
  socials: [\r
    { type: 'facebook', url: 'https://facebook.com/mycompany' },\r
    { type: 'twitter', url: 'https://twitter.com/mycompany' },\r
  ],\r
};\r
\r
function App() {\r
  return (\r
    <div className="App">\r
      {/* Other components */}\r
      <NexFooter {...footerProps} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsx(e.h3,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:["You can customize the ",n.jsx(e.code,{children:"NexFooter"})," by providing different props or styles to match your application's design requirements. Adjust the logo, display name, and social media links to suit your needs."]}),`
`,n.jsx(e.h3,{id:"social-icons",children:"Social Icons"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"NexFooter"})," component supports a wide range of social media icons, including:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Facebook"}),`
`,n.jsx(e.li,{children:"Twitter"}),`
`,n.jsx(e.li,{children:"Instagram"}),`
`,n.jsx(e.li,{children:"LinkedIn"}),`
`,n.jsx(e.li,{children:"GitHub"}),`
`,n.jsx(e.li,{children:"YouTube"}),`
`,n.jsx(e.li,{children:"Pinterest"}),`
`,n.jsx(e.li,{children:"Snapchat"}),`
`,n.jsx(e.li,{children:"TikTok"}),`
`,n.jsx(e.li,{children:"Reddit"}),`
`,n.jsx(e.li,{children:"Tumblr"}),`
`,n.jsx(e.li,{children:"Medium"}),`
`,n.jsx(e.li,{children:"Vimeo"}),`
`,n.jsx(e.li,{children:"Stack Overflow"}),`
`,n.jsx(e.li,{children:"Behance"}),`
`,n.jsx(e.li,{children:"Dribbble"}),`
`,n.jsx(e.li,{children:"Flickr"}),`
`,n.jsx(e.li,{children:"WhatsApp"}),`
`,n.jsx(e.li,{children:"Telegram"}),`
`,n.jsx(e.li,{children:"Slack"}),`
`,n.jsx(e.li,{children:"Discord"}),`
`,n.jsx(e.li,{children:"Spotify"}),`
`,n.jsx(e.li,{children:"Quora"}),`
`,n.jsx(e.li,{children:"SoundCloud"}),`
`,n.jsx(e.li,{children:"Apple"}),`
`,n.jsx(e.li,{children:"Google"}),`
`,n.jsx(e.li,{children:"Amazon"}),`
`,n.jsx(e.li,{children:"Microsoft"}),`
`,n.jsx(e.li,{children:"Dropbox"}),`
`,n.jsx(e.li,{children:"WordPress"}),`
`,n.jsx(e.li,{children:"Blogger"}),`
`,n.jsx(e.li,{children:"Weibo"}),`
`,n.jsx(e.li,{children:"WeChat"}),`
`,n.jsx(e.li,{children:"Xing"}),`
`,n.jsx(e.li,{children:"QQ"}),`
`,n.jsx(e.li,{children:"VK"}),`
`,n.jsx(e.li,{children:"Patreon"}),`
`,n.jsx(e.li,{children:"DeviantArt"}),`
`,n.jsx(e.li,{children:"Drupal"}),`
`,n.jsx(e.li,{children:"Joomla"}),`
`,n.jsx(e.li,{children:"Mastodon"}),`
`,n.jsx(e.li,{children:"Mix"}),`
`,n.jsx(e.li,{children:"Foursquare"}),`
`,n.jsx(e.li,{children:"Meetup"}),`
`,n.jsx(e.li,{children:"Steam"}),`
`,n.jsx(e.li,{children:"Xbox"}),`
`,n.jsx(e.li,{children:"PlayStation"}),`
`,n.jsx(e.li,{children:"Skype"}),`
`,n.jsx(e.li,{children:"TeamSpeak"}),`
`,n.jsx(e.li,{children:"Goodreads"}),`
`,n.jsx(e.li,{children:"Houzz"}),`
`,n.jsx(e.li,{children:"Yelp"}),`
`,n.jsx(e.li,{children:"Periscope"}),`
`,n.jsx(e.li,{children:"Diaspora"}),`
`]})]})}function t(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{t as default};
