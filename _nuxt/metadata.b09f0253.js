import{q as M,b as F}from"./cosmos.a4d9ec5d.js";import{q as d,r as s,f}from"./entry.79ffe43a.js";const T=d("metadata",()=>{const e=s({}),n=s({});function u(a,t){return`${a}_${t}`}const i=f(()=>a=>e.value[a]),l=f(()=>(a,t)=>n.value[u(a,t)]);async function r(a){return e.value[a]=await M(a),e.value[a]}async function y(a){const t=e.value[a];return t||r(a)}async function o(a,t){return n.value[u(a,t)]=await F(a,t),n.value[u(a,t)]}async function v(a,t){const c=n.value[u(a,t)];return c||o(a,t)}return{classMetadata:e,nftMetadata:n,getClassMetadataById:i,getNftMetadataById:l,fetchClassMetadata:r,lazyFetchClassMetadata:y,fetchNFTMetadata:o,lazyFetchNFTMetadata:v}});export{T as u};
