var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("2shzp");const i=document.querySelector(".js-books"),l=document.querySelector(".popup-modal-background"),c=document.querySelector(".popup-modal-close-button"),s=document.querySelector(".book-image"),d=document.querySelector(".book-title"),a=document.querySelector(".book-author"),u=document.querySelector(".book-description"),p=document.querySelector(".add-to-list-button"),b=document.querySelector(".amazon-link"),f=document.querySelector(".bookshop-link"),k=document.querySelector(".applebooks-link");let m,g=JSON.parse(localStorage.getItem("bookShopingListLS"))||[];function S(){l.classList.replace("visible","hidden")}function y(){console.log(g),g.some((e=>e._id===m._id))?(p.removeEventListener("click",h),p.addEventListener("click",v),p.textContent="REMOVE FROM SHOPING LIST"):(p.removeEventListener("click",v),p.addEventListener("click",h),p.textContent="ADD TO SHOPING LIST"),localStorage.setItem("bookShopingListLS",JSON.stringify(g))}function h(){console.log("Added!"),g.push(m),y()}function v(){console.log("Removed!"),g=g.filter((e=>e._id!==m._id)),y()}i.addEventListener("click",(async function(e){e.preventDefault();try{m=await async function(e){const t=await r.default.get(`https://books-backend.p.goit.global/books/${e}`);return await t.data}(e.target.parentNode.dataset.bookid),l.classList.replace("hidden","visible"),s.setAttribute("src",m.book_image),s.setAttribute("alt",m.title),d.textContent=m.title,a.textContent=m.author,u.textContent=m.description;const t=m.buy_links.find((e=>"Amazon"===e.name)).url,o=m.buy_links.find((e=>"Bookshop"===e.name)).url,n=m.buy_links.find((e=>"Apple Books"===e.name)).url;b.setAttribute("href",t),f.setAttribute("href",o),k.setAttribute("href",n),y()}catch{console.log("Error")}})),c.addEventListener("click",S),l.addEventListener("click",(e=>{e.target.classList.contains("popup-modal-background")&&S()}));
//# sourceMappingURL=index.4f12c509.js.map
