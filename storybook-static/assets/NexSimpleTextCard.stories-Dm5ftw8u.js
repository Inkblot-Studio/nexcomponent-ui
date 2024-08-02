import{R as e}from"./index-CTjT7uj6.js";const r=({title:a,subtitle:m,border:p=!0,className:l})=>e.createElement("div",{className:`nex-simple-text-card-wrapper ${p?"border":""} ${l||""}`},e.createElement("div",{className:"nex-simple-text-card-inner-wrapper"},e.createElement("div",{className:"title"},a),e.createElement("div",{className:"subtitle"},m))),d=r;try{r.displayName="NexSimpleTextCard",r.__docgenInfo={description:`NexSimpleTextCard component

Component to display a simple text card with title and subtitle.`,displayName:"NexSimpleTextCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},border:{defaultValue:{value:"true"},description:"",name:"border",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u={title:"NexComponent/NexSimpleTextCard",component:d,tags:["autodocs"]},o=a=>e.createElement("div",{style:{margin:"20px"}},e.createElement(d,{...a})),t=o.bind({});t.args={title:"Simple Card",subtitle:"This is a simple text card."};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div style={{
  margin: '20px'
}}>\r
    <NexSimpleTextCard {...args} />\r
  </div>`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,u as default};
