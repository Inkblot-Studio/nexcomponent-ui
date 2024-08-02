import{r,R as e}from"./index-CTjT7uj6.js";import{F as S}from"./index.es-D6nAsfRb.js";import{c as E}from"./index-C6Ip3LZi.js";import{N as d}from"./NexInput-DIFRW0l9.js";import"./index-Ddlm_yV4.js";import{m as v}from"./motion-CD0aH4T1.js";import{N as k}from"./NexButton-DE0bDmfp.js";import"./index-BzjuzjN8.js";import"./jsx-runtime-Cw0GR0a5.js";try{d.displayName="NexInput",d.__docgenInfo={description:`NexInput component

A customizable input component with support for different types, sizes, and an optional peek button for password fields.`,displayName:"NexInput",props:{peekButton:{defaultValue:null,description:"",name:"peekButton",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fieldSize:{defaultValue:{value:"normal"},description:"",name:"fieldSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}}}}}catch{}const m=({version:n,handleSave:i})=>{const a=r.useRef(null),[o,t]=r.useState(!1),[l,u]=r.useState(n),[p,f]=r.useState(n);r.useEffect(()=>{const c=w=>{a.current&&!a.current.contains(w.target)&&(u(p),t(!1))};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[p]);const V=()=>{t(!0),f(l)},h=c=>{u(c.target.value)},_=()=>{i&&i(l),t(!1),f(l)};return e.createElement("div",{className:"nex-version-wrapper",ref:a},e.createElement(v.div,{className:`nex-version ${o?"clicked":""}`,onClick:V,initial:{opacity:1},animate:{opacity:o?.5:1},transition:{duration:.3}},p),o&&e.createElement(v.div,{className:"nex-version-edit-wrapper",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3}},e.createElement(S,{icon:E,className:"arrow-icon"}),e.createElement(d,{type:"text",placeholder:l,onChange:h,fieldSize:"small",width:80}),e.createElement(k,{onClick:_,text:"Save",type:"success"})))},y=m;try{m.displayName="NexVersion",m.__docgenInfo={description:`NexVersion component

Component to display and edit a version number.`,displayName:"NexVersion",props:{version:{defaultValue:null,description:"",name:"version",required:!0,type:{name:"string"}},handleSave:{defaultValue:null,description:"",name:"handleSave",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const F={title:"NexComponent/NexVersion",component:y,tags:["autodocs"]},C=n=>{const[i,a]=r.useState("1.0.0"),o=t=>{console.log("New version:",t),a(t)};return e.createElement("div",{style:{margin:"20px"}},e.createElement(y,{...n,version:i,handleSave:o}))},s=C.bind({});s.args={};var N,g,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [version, setVersion] = useState('1.0.0');
  const handleSave = (newVersion: string) => {
    console.log('New version:', newVersion);
    setVersion(newVersion);
  };
  return <div style={{
    margin: '20px'
  }}>\r
      <NexVersion {...args} version={version} handleSave={handleSave} />\r
    </div>;
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,F as default};
