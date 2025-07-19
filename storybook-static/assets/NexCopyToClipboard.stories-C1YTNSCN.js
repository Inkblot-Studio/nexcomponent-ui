import{R as m}from"./index-CTjT7uj6.js";import{F as M,f as U}from"./index-Cz5aGmX0.js";import"./index-BzjuzjN8.js";const y=({className:l,size:j="normal",type:B,textToCopy:G})=>{const H=r=>r&&["primary","secondary","tertiary","quaternary","success","info","warning","danger"].includes(r)?`nex-copy-to-clipboard--${r}`:"",J=r=>r?`nex-copy-to-clipboard--${r}`:"",K=()=>{navigator.clipboard.writeText(G)},L=`nex-copy-to-clipboard ${l||""} ${H(B)} ${J(j)}`;return m.createElement("button",{className:L,onClick:K},m.createElement(M,{icon:U}))},O=y;try{y.displayName="NexCopyToClipboard",y.__docgenInfo={description:`NexCopyToClipboard component

A button component that copies text to the clipboard when clicked.`,displayName:"NexCopyToClipboard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},textToCopy:{defaultValue:null,description:"",name:"textToCopy",required:!0,type:{name:"string"}}}}}catch{}const re={title:"NexComponent/NexCopyToClipboard",component:O,tags:["autodocs"]},e=l=>m.createElement("div",{style:{margin:"20px"}},m.createElement(O,{...l})),o=e.bind({});o.args={textToCopy:"Text to be copied"};const a=e.bind({});a.args={textToCopy:"Text to be copied",type:"primary"};const t=e.bind({});t.args={textToCopy:"Text to be copied",type:"secondary"};const s=e.bind({});s.args={textToCopy:"Text to be copied",type:"tertiary"};const n=e.bind({});n.args={textToCopy:"Text to be copied",type:"quaternary"};const p=e.bind({});p.args={textToCopy:"Text to be copied",type:"success"};const i=e.bind({});i.args={textToCopy:"Text to be copied",type:"info"};const c=e.bind({});c.args={textToCopy:"Text to be copied",type:"warning"};const d=e.bind({});d.args={textToCopy:"Text to be copied",type:"danger"};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,b,T;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,N,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(f=(N=t.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var S,_,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var $,h,w;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var E,D,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,k,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,F,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var Q,R,W;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const oe=["Default","Primary","Secondary","Tertiary","Quaternary","Success","Info","Warning","Danger"];export{d as Danger,o as Default,i as Info,a as Primary,n as Quaternary,t as Secondary,p as Success,s as Tertiary,c as Warning,oe as __namedExportsOrder,re as default};
