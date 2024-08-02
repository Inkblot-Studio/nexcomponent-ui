import{r as f,R as a}from"./index-CTjT7uj6.js";const p=({message:e="",type:R="info",timeout:d=0,handleDismiss:t=null})=>{const[$,g]=f.useState(!1);f.useEffect(()=>{const r=setTimeout(()=>{g(!0)},50);return()=>clearTimeout(r)},[]),f.useEffect(()=>{if(d>0&&t){const r=setTimeout(()=>{g(!1),setTimeout(()=>{t()},300)},d*1e3);return()=>clearTimeout(r)}},[d,t]);const P=r=>{r.preventDefault(),g(!1),t&&setTimeout(()=>{t()},300)},j=`nex-alert ${(r=>{switch(r){case"error":return"nex-alert--error";case"success":return"nex-alert--success";case"info":return"nex-alert--info";case"warning":return"nex-alert--warning";default:return""}})(R)} ${$?"visible":"hidden"}`;return e!=null&&e.length?a.createElement("div",{className:j},a.createElement("div",{className:"nex-alert__message"},e),t&&a.createElement("button",{className:"nex-alert__dismiss-button",onClick:P},"Dismiss")):null},x=({children:e})=>a.createElement("div",{className:"nex-alerts-wrapper"},e);try{p.displayName="NexAlert",p.__docgenInfo={description:`NexAlert component

A component to display alert messages with various types and an optional auto-dismiss feature.`,displayName:"NexAlert",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}},handleDismiss:{defaultValue:{value:"null"},description:"",name:"handleDismiss",required:!1,type:{name:"(() => void)"}}}}}catch{}try{x.displayName="NexAlertsWrapper",x.__docgenInfo={description:`NexAlertsWrapper component

A wrapper component for grouping multiple NexAlert components.`,displayName:"NexAlertsWrapper",props:{}}}catch{}const J={title:"NexComponent/NexAlert",component:p,tags:["autodocs"]},s=e=>a.createElement("div",{style:{margin:"10px"}},a.createElement(p,{...e})),n=s.bind({});n.args={id:"1",type:"error",message:"Error: Something went wrong!"};const o=s.bind({});o.args={id:"1",type:"success",message:"Success: Operation completed successfully."};const i=s.bind({});i.args={id:"1",type:"info",message:"Info: Please note the following information."};const c=s.bind({});c.args={id:"1",type:"warning",message:"Warning: This action cannot be undone."};const l=s.bind({});l.args={id:"1",type:"error",message:"Error: This alert will disappear after 5 seconds.",timeout:5e3};const u=s.bind({});u.args={id:"1",type:"info",message:"Info: This alert will not have a dismiss button."};const z=()=>{console.log("Dismiss button clicked!")},m=s.bind({});m.args={id:"1",type:"success",message:"Success: Click the dismiss button to close this alert.",handleDismiss:()=>z()};var y,v,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var N,_,b;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var E,w,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var h,T,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,I,V;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var W,q,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var k,F,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
    <NexAlert {...args} />\r
  </div>`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const K=["ErrorAlert","SuccessAlert","InfoAlert","WarningAlert","CustomDuration","NoDismissButton","DismissButtonFunction"];export{l as CustomDuration,m as DismissButtonFunction,n as ErrorAlert,i as InfoAlert,u as NoDismissButton,o as SuccessAlert,c as WarningAlert,K as __namedExportsOrder,J as default};
