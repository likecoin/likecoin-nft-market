import{a as i,b as u,r,e as c,f as e,w as d,h,v as p,u as _,i as f,o as m}from"./entry.3b2d7bc7.js";const v=e("h2",null,"Search NFT Class",-1),w=["onSubmit"],S=e("input",{type:"submit",value:"Search"},null,-1),T=e("h2",null,"View and Sell NFT",-1),N=i({__name:"index",setup(b){const n=u(),s=r("");function o(){n.push({path:`/listings/${s.value}`})}function l(){n.push({path:"/owned"})}return(x,t)=>(m(),c("div",null,[e("section",null,[v,e("form",{onSubmit:d(o,["prevent"])},[h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>f(s)?s.value=a:null),placeholder:"Search NFT Class ID"},null,512),[[p,_(s)]]),S],40,w)]),e("section",null,[T,e("button",{onClick:l},"View my NFTs")])]))}});export{N as default};
