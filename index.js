import{a as u,S as d,i as a}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="50984165-ff91babc2717b2b8abbd0ea6f",m="https://pixabay.com/api/";async function p(o){const r={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await u.get(m,{params:r})).data}function y(o){return o.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:l})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${r}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${t}</p>
            <p><b>Comments:</b> ${i}</p>
            <p><b>Downloads:</b> ${l}</p>
          </div>
        </li>
      `).join("")}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}const h=new d(".gallery a"),b=document.querySelector(".form"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");b.addEventListener("submit",S);async function S(o){o.preventDefault();const r=o.currentTarget.elements.searchQuery.value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}g(),c.classList.remove("hidden");try{const n=await p(r);if(n.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=y(n.hits);L.insertAdjacentHTML("beforeend",s),h.refresh()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{c.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
