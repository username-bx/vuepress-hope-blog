import{l as t}from"./app-7acabcd2.js";const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-7acabcd2.js").then(r=>r.Q),[]);return e({serverURL:"https://comments.luogesidoc.com/"})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};