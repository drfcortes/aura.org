import"./index.9MVAkNgL.js";var u={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function p(){if(d)return o;d=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(n,t,e){var r=null;if(e!==void 0&&(r=""+e),t.key!==void 0&&(r=""+t.key),"key"in t){e={};for(var a in t)a!=="key"&&(e[a]=t[a])}else e=t;return t=e.ref,{$$typeof:i,type:n,key:r,ref:t!==void 0?t:null,props:e}}return o.Fragment=l,o.jsx=s,o.jsxs=s,o}var x;function R(){return x||(x=1,u.exports=p()),u.exports}var c=R();function h({jsonData:i}){const l=()=>{const n=JSON.stringify(i,null,2);navigator.clipboard.writeText(n).then(()=>{alert("JSON copied to clipboard!")}).catch(t=>{console.error("Copy failed",t)})},s=()=>{const n=JSON.stringify(i,null,2),t=new Blob([n],{type:"application/json"}),e=URL.createObjectURL(t),r=document.createElement("a");r.href=e,r.download="aura_block.json",r.click(),URL.revokeObjectURL(e)};return c.jsxs("div",{className:"mt-6 flex gap-4",children:[c.jsx("button",{onClick:l,className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",children:"📋 Copy JSON"}),c.jsx("button",{onClick:s,className:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition",children:"⬇️ Download JSON"})]})}export{h as default};
