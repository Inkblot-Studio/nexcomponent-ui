import{R as e,r as i}from"./index-CTjT7uj6.js";import"./index-6Bw_5W_H.js";import{m}from"./proxy-D8k4h0nK.js";import{N as o}from"./NexButton-xZJiy1lO.js";import"./jsx-runtime-Cw0GR0a5.js";const r=({setOpenModal:t})=>{const n=()=>{t(!1)};return e.createElement("div",{className:"nex-modal-wrapper"},e.createElement(m.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"nex-modal-inner-wrapper"},e.createElement("div",{className:"nex-modal-body"},e.createElement("p",null,"The next page looks amazing. Hope you want to go there!")),e.createElement("div",{className:"nex-modal-footer"},e.createElement(o,{onClick:()=>{t(!1)},text:"Cancel",type:"danger"}),e.createElement(o,{onClick:n,text:"Continue",type:"primary"}))))},c=r;try{r.displayName="NexModal",r.__docgenInfo={description:`NexModal component

A modal component that displays a message and buttons for user interaction.`,displayName:"NexModal",props:{setOpenModal:{defaultValue:null,description:"",name:"setOpenModal",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const f={title:"NexComponent/NexModal",component:c,tags:["autodocs"]},u=t=>{const[n,l]=i.useState(!1);return e.createElement("div",{style:{margin:"20px"}},e.createElement(o,{onClick:()=>l(!0),text:"Open Modal",type:"warning"}),n?e.createElement(c,{...t,setOpenModal:l}):"")},a=u.bind({});a.args={};var s,p,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [openModal, setOpenModal] = useState(false);
  return <div style={{
    margin: '20px'
  }}>\r
      <NexButton onClick={() => setOpenModal(true)} text='Open Modal' type='warning'></NexButton>\r
      {openModal ? <NexModal {...args} setOpenModal={setOpenModal} /> : ''}\r
    </div>;
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,f as default};
