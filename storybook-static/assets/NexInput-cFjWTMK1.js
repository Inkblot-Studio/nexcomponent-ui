import{r as l,R as s}from"./index-uubelm5h.js";const n=({type:e,peekButton:r,className:u,width:t,fieldSize:p="normal",...i})=>{const[a,c]=l.useState(!1);l.useEffect(()=>{r&&t&&t<100&&console.error("NexInput error: Width should be at least 100px.")},[t]);const d=()=>{c(!a)},m=o=>o?`nex-input--${o}`:"",f=`${u||""} ${e==="password"?"password-wrapper":""}`,x=t?{width:`${t}px`}:{};return s.createElement("div",{className:`nex-input ${f} ${m(p)}`,style:x},s.createElement("input",{...i,type:e==="password"&&a?"text":e}),r&&e==="password"&&s.createElement("button",{type:"button",className:"peek-button",onClick:d},a?"Hide":"Show"))},N=n;try{n.displayName="NexInput",n.__docgenInfo={description:"",displayName:"NexInput",props:{peekButton:{defaultValue:null,description:"",name:"peekButton",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},fieldSize:{defaultValue:{value:"normal"},description:"",name:"fieldSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}}}}}catch{}export{N};
