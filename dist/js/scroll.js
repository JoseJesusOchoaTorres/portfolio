"use strict";!function(){function e(t){t.preventDefault();var e=this.getAttribute("href"),o=document.querySelector(e);if(o){var r,n=(r=o,Math.floor(r.getBoundingClientRect().top));window.scrollBy({top:n-66,left:0,behavior:"smooth"})}}document.querySelectorAll('a[href^="#"]').forEach(function(t){return t.onclick=e})}();