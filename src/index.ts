const message: string = "Сайн байна уу, Webpack бүхий TypeScript! минь"; 
console.log(message); 
 
const par = document.getElementsByClassName("paragraph")[0]; 
 
const span = document.createElement("span"); 
span.textContent = "do u love me"; 
par?.appendChild(span); 
 
const button = document.querySelector("button"); 
button?.addEventListener("click", () => { 
  window.alert("dooo uuu love meee"); 
});