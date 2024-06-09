import{j as d}from"./jsx-runtime-BnIj46N_.js";import{F as L,f as M}from"./index-DW_kERNA.js";import"./index-CsdIBAqE.js";import"./index-MS7LKRHD.js";const R=({className:m,type:B,textToCopy:G})=>{const H=y=>y&&["primary","secondary","tertiary","quaternary","success","info","warning","danger"].includes(y)?`nex-copy-to-clipboard--${y}`:"",J=()=>{navigator.clipboard.writeText(G)},K=`nex-copy-to-clipboard ${m||""} ${H(B)}`;return d.jsx("button",{className:K,onClick:J,children:d.jsx(L,{icon:M})})},z=R;R.__docgenInfo={description:"",methods:[],displayName:"NexCopyToClipboard",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string",elements:[{name:"unknown"},{name:"string"}]},description:""},textToCopy:{required:!0,tsType:{name:"string"},description:""}}};const rr={title:"NexComponent/NexCopyToClipboard",component:z,tags:["autodocs"]},r=m=>d.jsx("div",{style:{margin:"20px"},children:d.jsx(z,{...m})}),e=r.bind({});e.args={textToCopy:"Text to be copied"};const o=r.bind({});o.args={textToCopy:"Text to be copied",type:"primary"};const a=r.bind({});a.args={textToCopy:"Text to be copied",type:"secondary"};const s=r.bind({});s.args={textToCopy:"Text to be copied",type:"tertiary"};const t=r.bind({});t.args={textToCopy:"Text to be copied",type:"quaternary"};const n=r.bind({});n.args={textToCopy:"Text to be copied",type:"success"};const i=r.bind({});i.args={textToCopy:"Text to be copied",type:"info"};const p=r.bind({});p.args={textToCopy:"Text to be copied",type:"warning"};const c=r.bind({});c.args={textToCopy:"Text to be copied",type:"danger"};var g,l,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(x=(l=e.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var u,C,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var b,v,N;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var f,S,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,q,_;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(_=(q=t.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var h,D,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var $,k,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var F,P,Q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var W,A,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}> \r
      <NexCopyToClipboard {...args} />\r
    </div>`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const er=["Default","Primary","Secondary","Tertiary","Quaternary","Success","Info","Warning","Danger"];export{c as Danger,e as Default,i as Info,o as Primary,t as Quaternary,a as Secondary,n as Success,s as Tertiary,p as Warning,er as __namedExportsOrder,rr as default};
