!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,u=r("bpxeT"),c=r("2TvXO"),l=r("dIxxU"),s=document.querySelector(".js-books"),a=document.querySelector(".popup-modal-background"),d=document.querySelector(".popup-modal-close-button"),p=document.querySelector(".book-image"),f=document.querySelector(".book-title"),b=document.querySelector(".book-author"),k=document.querySelector(".book-description"),m=document.querySelector(".add-to-list-button"),v=document.querySelector(".amazon-link"),h=document.querySelector(".bookshop-link"),y=document.querySelector(".applebook-link"),S=JSON.parse(localStorage.getItem("bookShopingListLS"))||[];function g(){return(g=e(u)(e(c).mark((function t(n){var o,r,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,x(n.target.parentNode.dataset.bookid);case 4:i=e.sent,a.classList.replace("hidden","visible"),p.setAttribute("src",i.book_image),p.setAttribute("alt",i.title),f.textContent=i.title,b.textContent=i.author,k.textContent=i.description,o=i.buy_links.find((function(e){return"Amazon"===e.name})).url,r=i.buy_links.find((function(e){return"Bookshop"===e.name})).url,u=i.buy_links.find((function(e){e.name})).url,v.setAttribute("href",o),h.setAttribute("href",r),y.setAttribute("href",u),q(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log("Error");case 23:case"end":return e.stop()}}),t,null,[[1,20]])})))).apply(this,arguments)}function x(e){return L.apply(this,arguments)}function L(){return(L=e(u)(e(c).mark((function t(n){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("https://books-backend.p.goit.global/books/".concat(n));case 2:return o=e.sent,e.next=5,o.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){console.log(S),S.some((function(e){return e._id===i._id}))?(m.removeEventListener("click",_),m.addEventListener("click",E),m.textContent="REMOVE FROM SHOPING LIST"):(m.removeEventListener("click",E),m.addEventListener("click",_),m.textContent="ADD TO SHOPING LIST"),localStorage.setItem("bookShopingListLS",JSON.stringify(S))}function _(){console.log("Added!"),S.push(i),q()}function E(){console.log("Removed!"),S=S.filter((function(e){return e._id!==i._id})),q()}s.addEventListener("click",(function(e){return g.apply(this,arguments)})),d.addEventListener("click",(function(){a.classList.replace("visible","hidden")}))}();
//# sourceMappingURL=index.7a18d7c9.js.map
