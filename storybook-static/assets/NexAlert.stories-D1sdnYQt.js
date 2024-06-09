import{j as d}from"./jsx-runtime-BnIj46N_.js";import{r as g}from"./index-CsdIBAqE.js";const f=({message:s="",type:F="info",timeout:m=0,handleDismiss:t=null})=>{const[O,p]=g.useState(!1);g.useEffect(()=>{const e=setTimeout(()=>{p(!0)},50);return()=>clearTimeout(e)},[]),g.useEffect(()=>{if(m>0&&t){const e=setTimeout(()=>{p(!1),setTimeout(()=>{t()},300)},m*1e3);return()=>clearTimeout(e)}},[m,t]);const $=e=>{e.preventDefault(),p(!1),t&&setTimeout(()=>{t()},300)},P=`nex-alert ${(e=>{switch(e){case"error":return"nex-alert--error";case"success":return"nex-alert--success";case"info":return"nex-alert--info";case"warning":return"nex-alert--warning";default:return""}})(F)} ${O?"visible":"hidden"}`;return s!=null&&s.length?d.jsxs("div",{className:P,children:[d.jsx("div",{className:"nex-alert__message",children:s}),t&&d.jsx("button",{className:"nex-alert__dismiss-button",onClick:$,children:"Dismiss"})]}):null};f.__docgenInfo={description:"",methods:[],displayName:"NexAlert",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'info' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},timeout:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},handleDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"null",computed:!1}}}};const J={title:"NexComponent/NexAlert",component:f,tags:["autodocs"]},r=s=>d.jsx("div",{style:{margin:"10px"},children:d.jsx(f,{...s})}),a=r.bind({});a.args={id:"1",type:"error",message:"Error: Something went wrong!"};const n=r.bind({});n.args={id:"1",type:"success",message:"Success: Operation completed successfully."};const i=r.bind({});i.args={id:"1",type:"info",message:"Info: Please note the following information."};const o=r.bind({});o.args={id:"1",type:"warning",message:"Warning: This action cannot be undone."};const c=r.bind({});c.args={id:"1",type:"error",message:"Error: This alert will disappear after 5 seconds.",timeout:5e3};const l=r.bind({});l.args={id:"1",type:"info",message:"Info: This alert will not have a dismiss button."};const R=()=>{console.log("Dismiss button clicked!")},u=r.bind({});u.args={id:"1",type:"success",message:"Success: Click the dismiss button to close this alert.",handleDismiss:()=>R()};var x,v,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,N,b;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(b=(N=n.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var T,h,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var S,E,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var C,j,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,V,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,k,W;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(W=(k=u.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const K=["ErrorAlert","SuccessAlert","InfoAlert","WarningAlert","CustomDuration","NoDismissButton","DismissButtonFunction"];export{c as CustomDuration,u as DismissButtonFunction,a as ErrorAlert,i as InfoAlert,l as NoDismissButton,n as SuccessAlert,o as WarningAlert,K as __namedExportsOrder,J as default};
