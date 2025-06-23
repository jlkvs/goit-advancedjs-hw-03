import{a as u,S as d,i as a}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="50984165-ff91babc2717b2b8abbd0ea6f",m="https://pixabay.com/api/";async function p(o){const t={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await u.get(m,{params:t})).data}function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:l})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${t}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${i}</p>
            <p><b>Downloads:</b> ${l}</p>
          </div>
        </li>
      `).join("")}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}const h=new d(".gallery a"),b=document.querySelector(".search-form"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");b.addEventListener("submit",S);async function S(o){o.preventDefault();const t=o.currentTarget.elements.searchQuery.value.trim();if(!t){a.warning({message:"Please enter a search query.",position:"topRight"});return}g(),c.classList.remove("hidden");try{const n=await p(t);if(n.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=y(n.hits);L.insertAdjacentHTML("beforeend",s),h.refresh()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{c.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
