!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,c=r("bpxeT"),u=r("2TvXO"),a=r("dIxxU"),s=document.querySelector(".js-books"),l=document.querySelector(".popup-modal-background"),d=document.querySelector(".popup-modal-close-button"),p=document.querySelector(".book-image"),f=document.querySelector(".book-title-pop"),b=document.querySelector(".book-author"),k=document.querySelector(".book-description"),m=document.querySelector(".amazon-link"),v=document.querySelector(".bookshop-link"),g=document.querySelector(".applebooks-link"),h=document.querySelector(".add-to-list-button"),y=document.querySelector(".book-adding-text"),S=JSON.parse(localStorage.getItem("bookShopingListLS"))||[];function L(e){return x.apply(this,arguments)}function x(){return(x=e(c)(e(u).mark((function t(n){var o,r,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.parentNode.hasAttribute("data-bookid")){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,q(n.target.parentNode.dataset.bookid);case 6:i=e.sent,s.removeEventListener("click",L),l.classList.replace("hidden","visible"),p.setAttribute("src",i.book_image),p.setAttribute("alt",i.title),f.textContent=i.title,b.textContent=i.author,k.textContent=i.description,o=i.buy_links.find((function(e){return"Amazon"===e.name})).url,r=i.buy_links.find((function(e){return"Bookshop"===e.name})).url,c=i.buy_links.find((function(e){return"Apple Books"===e.name})).url,m.setAttribute("href",o),v.setAttribute("href",r),g.setAttribute("href",c),w(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),console.log("Error");case 26:case"end":return e.stop()}}),t,null,[[3,23]])})))).apply(this,arguments)}function E(){l.classList.replace("visible","hidden"),s.addEventListener("click",L)}function q(e){return _.apply(this,arguments)}function _(){return(_=e(c)(e(u).mark((function t(n){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.default.get("https://books-backend.p.goit.global/books/".concat(n));case 2:return o=e.sent,e.next=5,o.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){console.log(S),S.some((function(e){return e._id===i._id}))?(h.removeEventListener("click",O),h.addEventListener("click",A),h.textContent="REMOVE FROM SHOPING LIST",y.classList.replace("hidden","visible")):(h.removeEventListener("click",A),h.addEventListener("click",O),h.textContent="ADD TO SHOPING LIST",y.classList.replace("visible","hidden")),localStorage.setItem("bookShopingListLS",JSON.stringify(S))}function O(){console.log("Added!"),S.push(i),w()}function A(){console.log("Removed!"),S=S.filter((function(e){return e._id!==i._id})),w()}s.addEventListener("click",L),d.addEventListener("click",E),l.addEventListener("click",(function(e){e.target.classList.contains("popup-modal-background")&&E()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&E()}))}();
//# sourceMappingURL=index.51d65b84.js.map