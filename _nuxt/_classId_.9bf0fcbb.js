import{L as I,q as T,b as C,_ as $,B as w,s as q}from"./cosmos.2841eefc.js";import{a as B,o as n,e as a,t as l,u as t,p as x,q as R,s as S,r as L,m as E,b as V,f as e,j as v,i as D,F as K,h as U}from"./entry.7d45334d.js";import{u as j}from"./wallet.48257029.js";const A=["href"],H=B({__name:"UserLink",props:{wallet:{type:String,required:!0}},setup(c){const i=c;return(g,d)=>(n(),a("a",{href:`https://${t(I)}/${i.wallet}`,target:"_blank",rel:"noopener"},l(c.wallet),9,A))}}),M=e("h2",null,"Listings",-1),O={key:0},W=["onClick"],P=B({__name:"[classId]",setup(c){const i=x(),g=R(),d=j(),{wallet:p,signer:_}=S(d),m=L([]),f=L({}),o=E(()=>g.params.classId);V(async()=>{f.value=await T(o.value),m.value=await C(o.value)});const{connect:k}=d;function b(r){return new w(r).shiftedBy(-9).toFixed()}async function F({classId:r,nftId:y,seller:u,price:h}){if((!p.value||!_.value)&&await k(),!p.value||!_.value)return;const s=new w(h).shiftedBy(-9).toNumber(),N=await q(r,y,u,s,_.value,p.value);console.log(N),i.push({path:"/owned"})}return(r,y)=>{const u=$,h=H;return n(),a("div",null,[e("h1",null,l(t(f).name),1),e("h3",null,[v(u,{"class-id":t(o)},null,8,["class-id"])]),e("p",null,l(t(f).description),1),M,e("ul",null,[t(m).length?D("",!0):(n(),a("div",O,"No one is selling this NFT yet")),(n(!0),a(K,null,U(t(m),s=>(n(),a("li",null,[e("div",null,[v(u,{"class-id":t(o),"nft-id":s.nftId},null,8,["class-id","nft-id"]),e("span",null," | "+l(b(s.price))+" LIKE | ",1),v(h,{wallet:s.seller},null,8,["wallet"]),e("span",null," | "+l(s.expiration),1),e("button",{onClick:N=>F(s)},"Buy",8,W)])]))),256))])])}}});export{P as default};
