import{a as S,v as b,r,f as C,h as l,u as s,l as T,i as e,y as E,z as g,A as k,B as N,t as F,k as L,o}from"./entry.2cad2210.js";import{C as R,j as V,k as x}from"./cosmos.50c2661b.js";import{u as I}from"./wallet.cbfc5702.js";const U=e("h2",null,"Send NFTs",-1),B={key:0},D={key:1},H=e("label",null,"NFT Class ID",-1),O=e("br",null,null,-1),A=e("label",null,"Recepient Address list",-1),M=e("br",null,null,-1),P=e("label",null,"Transfer message",-1),$=e("br",null,null,-1),j=["href"],z={key:1},G={key:3},K=S({__name:"send",setup(W){const w=I(),{wallet:u,signer:f}=b(w),i=r(""),d=r(""),c=r(""),v=r(!1),p=r(""),_=r(""),m=C(()=>d.value.trim().split(`
`)),{connect:h}=w;async function y(){if(_.value="",v.value=!1,(!u.value||!f.value)&&await h(),!(!u.value||!f.value))try{v.value=!0;const{nfts:a}=await V({classId:i.value,owner:u.value,needCount:m.value.length});if(a.length<m.value.length)throw new Error("NOT_ENOUGH_NFT_TO_SEND");const t=await x(m.value,i.value,a.map(n=>n.id),f.value,u.value,c.value);v.value=!1,p.value=t.transactionHash}catch(a){console.error(a),_.value=a.toString()}}return(a,t)=>(o(),l("div",null,[U,s(u)?(o(),l("section",D,[e("section",null,[H,O,g(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>N(i)?i.value=n:null)},null,512),[[k,s(i)]])]),e("section",null,[A,M,g(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=n=>N(d)?d.value=n:null),cols:"50",rows:"10"},null,512),[[k,s(d)]])]),e("section",null,[P,$,g(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>N(c)?c.value=n:null)},null,512),[[k,s(c)]])]),s(p)?(o(),l("a",{key:0,href:`${s(R)}/${s(p)}`,target:"_blank",rel:"noopener"}," Sucess, view transaction here ",8,j)):s(v)?(o(),l("div",z,"Loadings...")):(o(),l("button",{key:2,onClick:y},"Send")),s(_)?(o(),l("div",G,F(s(_)),1)):L("",!0)])):(o(),l("div",B,[T("Please "),e("a",{href:"#",onClick:t[0]||(t[0]=E((...n)=>s(h)&&s(h)(...n),["prevent"]))},"connect"),T(" wallet")]))]))}});export{K as default};
