import{c as v,_ as y}from"./cosmos.2841eefc.js";import{a as N,p as C,s as g,r as F,b as L,x as T,e as t,u as l,f as o,i as $,F as x,h as V,o as n,j as f,k as h,t as I}from"./entry.7d45334d.js";import{u as b}from"./wallet.48257029.js";const B=o("h2",null,"Owned NFTs",-1),O={key:0},S={key:1},R={key:0},j=["onClick"],q=["onClick"],W=N({__name:"index",setup(D){const i=C(),d=b(),{wallet:a}=g(d),c=F([]);L(async()=>{a.value||await m(),a.value&&u()}),T(a,s=>{s&&u()});const{connect:m}=d;async function u(){c.value=await v(a.value)}async function p(s){i.push({path:`/listings/${s}`})}async function w(s,r){i.push({path:`/sell/${s}/${r}`})}return(s,r)=>{const _=y;return n(),t("div",null,[B,l(a)?(n(),t("section",S,[o("ul",null,[l(c).length?$("",!0):(n(),t("div",R,"You don't own any NFT on LikeCoin chain")),(n(!0),t(x,null,V(l(c),e=>(n(),t("li",null,[o("div",null,[f(_,{"class-id":e.classId},null,8,["class-id"]),h(" | "),f(_,{"class-id":e.classId,"nft-id":e.id},null,8,["class-id","nft-id"]),h(" | "+I(e.data.metadata.name)+" ",1),o("button",{onClick:k=>p(e.classId)},"View Listing",8,j),o("button",{onClick:k=>w(e.classId,e.id)},"Sell",8,q)])]))),256))])])):(n(),t("div",O,"Please connect wallet"))])}}});export{W as default};
