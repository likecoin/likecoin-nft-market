import{q as M,a as m}from"./index.35c3ad47.js";import{p as F,r as s,m as f}from"./entry.b2225e57.js";const p=F("metadata",()=>{const e=s({}),n=s({});function u(a,t){return`${a}_${t}`}const i=f(()=>a=>e.value[a]),l=f(()=>(a,t)=>n.value[u(a,t)]);async function r(a){return e.value[a]=await M(a),e.value[a]}async function y(a){const t=e.value[a];return t||r(a)}async function o(a,t){return n.value[u(a,t)]=await m(a,t),n.value[u(a,t)]}async function v(a,t){const c=n.value[u(a,t)];return c||o(a,t)}return{classMetadata:e,nftMetadata:n,getClassMetadataById:i,getNftMetadataById:l,fetchClassMetadata:r,lazyFetchClassMetadata:y,fetchNFTMetadata:o,lazyFetchNFTMetadata:v}});export{p as u};