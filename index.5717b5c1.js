!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u,c=r("bpxeT"),i=r("2TvXO"),l=r("dIxxU"),s=document.querySelector(".js-books"),a=document.querySelector(".popup-modal-background"),d=document.querySelector(".popup-modal-close-button"),p=document.querySelector(".book-image"),f=document.querySelector(".book-title"),b=document.querySelector(".book-author"),k=document.querySelector(".book-description"),m=document.querySelector(".add-to-list-button"),v=document.querySelector(".amazon-link"),y=document.querySelector(".bookshop-link"),h=(document.querySelector(".openbook-link"),[]);function x(){return(x=e(c)(e(i).mark((function t(n){var o,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,g(n.target.dataset.id);case 4:u=e.sent,a.classList.replace("hidden","visible"),p.setAttribute("src",u.book_image),p.setAttribute("alt",u.title),f.textContent=u.title,b.textContent=u.author,k.textContent=u.description,o=u.buy_links.find((function(e){return"Amazon"===e.name})).url,r=u.buy_links.find((function(e){return"Bookshop"===e.name})).url,v.setAttribute("href",o),y.setAttribute("href",r),q(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log("Error");case 21:case"end":return e.stop()}}),t,null,[[1,18]])})))).apply(this,arguments)}function g(e){return S.apply(this,arguments)}function S(){return(S=e(c)(e(i).mark((function t(n){var o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("https://books-backend.p.goit.global/books/".concat(n));case 2:return o=e.sent,e.next=5,o.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){h.some((function(e){return e._id===u._id}))?(m.removeEventListener("click",E),m.addEventListener("click",L),m.textContent="REMOVE FROM SHOPING LIST"):(m.removeEventListener("click",L),m.addEventListener("click",E),m.textContent="ADD TO SHOPING LIST")}function E(){console.log("Added!"),h.push(u),console.log(h),q()}function L(){console.log("Removed!"),h=h.filter((function(e){return e._id!==u._id})),console.log(h),q()}s.addEventListener("click",(function(e){return x.apply(this,arguments)})),d.addEventListener("click",(function(){a.classList.replace("visible","hidden")}))}();
//# sourceMappingURL=index.5717b5c1.js.map
