import{r as g,R as m}from"./index-CDs2tPxN.js";const f=({message:s="",type:O="info",timeout:d=0,handleDismiss:t=null})=>{const[R,p]=g.useState(!1);g.useEffect(()=>{const e=setTimeout(()=>{p(!0)},50);return()=>clearTimeout(e)},[]),g.useEffect(()=>{if(d>0&&t){const e=setTimeout(()=>{p(!1),setTimeout(()=>{t()},300)},d*1e3);return()=>clearTimeout(e)}},[d,t]);const $=e=>{e.preventDefault(),p(!1),t&&setTimeout(()=>{t()},300)},P=`nex-alert ${(e=>{switch(e){case"error":return"nex-alert--error";case"success":return"nex-alert--success";case"info":return"nex-alert--info";case"warning":return"nex-alert--warning";default:return""}})(O)} ${R?"visible":"hidden"}`;return s!=null&&s.length?m.createElement("div",{className:P},m.createElement("div",{className:"nex-alert__message"},s),t&&m.createElement("button",{className:"nex-alert__dismiss-button",onClick:$},"Dismiss")):null};f.__docgenInfo={description:"",methods:[],displayName:"NexAlert",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'info' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},timeout:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},handleDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"null",computed:!1}}}};const H={title:"NexComponent/NexAlert",component:f,tags:["autodocs"]},r=s=>m.createElement("div",{style:{margin:"10px"}},m.createElement(f,{...s})),a=r.bind({});a.args={id:"1",type:"error",message:"Error: Something went wrong!"};const n=r.bind({});n.args={id:"1",type:"success",message:"Success: Operation completed successfully."};const o=r.bind({});o.args={id:"1",type:"info",message:"Info: Please note the following information."};const i=r.bind({});i.args={id:"1",type:"warning",message:"Warning: This action cannot be undone."};const c=r.bind({});c.args={id:"1",type:"error",message:"Error: This alert will disappear after 5 seconds.",timeout:5e3};const l=r.bind({});l.args={id:"1",type:"info",message:"Info: This alert will not have a dismiss button."};const j=()=>{console.log("Dismiss button clicked!")},u=r.bind({});u.args={id:"1",type:"success",message:"Success: Click the dismiss button to close this alert.",handleDismiss:()=>j()};var v,x,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var A,N,b;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(b=(N=n.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var T,w,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,h,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var C,D,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,q,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var k,W,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const J=["ErrorAlert","SuccessAlert","InfoAlert","WarningAlert","CustomDuration","NoDismissButton","DismissButtonFunction"];export{c as CustomDuration,u as DismissButtonFunction,a as ErrorAlert,o as InfoAlert,l as NoDismissButton,n as SuccessAlert,i as WarningAlert,J as __namedExportsOrder,H as default};
