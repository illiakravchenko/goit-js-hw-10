import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const s=parseInt(e.target.elements.delay.value,10),r=e.target.elements.state.value;o(s,r).then(t=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function o(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
