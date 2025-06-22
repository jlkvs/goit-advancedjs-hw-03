import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=void 0,f="https://pixabay.com/api/";async function m(n){const t=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=await fetch(`${f}?${t}`);if(!o.ok)throw new Error("Failed to fetch images");return o.json()}function p(n){return n.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:s,downloads:l})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${t}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${s}</p>
            <p><b>Downloads:</b> ${l}</p>
          </div>
        </li>
      `).join("")}function y(){const n=document.querySelector(".gallery");n.innerHTML=""}const g=new u(".gallery a"),h=document.querySelector(".search-form"),b=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",L);async function L(n){n.preventDefault();const t=n.currentTarget.elements.searchQuery.value.trim();if(!t){a.warning({message:"Please enter a search query.",position:"topRight"});return}y(),c.classList.remove("hidden");try{const o=await m(t);if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=p(o.hits);b.insertAdjacentHTML("beforeend",i),g.refresh()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{c.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
