import{R as m}from"./index-CDs2tPxN.js";const n=({onClick:r,className:t,size:a="normal",inverted:s,type:o,text:i})=>{const l=e=>e&&["primary","secondary","tertiary","quaternary","success","info","warning","danger"].includes(e)?`nex-button--${e}`:"",u=`nex-button ${t||""} ${(e=>e?`nex-button--${e}`:"")(a)} ${l(o)} ${s&&"inverted"||""}`;return m.createElement("button",{className:u,onClick:r},i)},g=n;n.__docgenInfo={description:"",methods:[],displayName:"NexButton",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'normal' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string",elements:[{name:"unknown"},{name:"string"}]},description:""},inverted:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};export{g as N};