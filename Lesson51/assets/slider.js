!function n(s,o,l){function u(r,e){if(!o[r]){if(!s[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(d)return d(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var c=o[r]={exports:{}};s[r][0].call(c.exports,function(e){return u(s[r][1][e]||e)},c,c.exports,n,s,o,l)}return o[r].exports}for(var d="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,r,t){"use strict";var o=document.querySelector(".ac-slider--view > ul"),l=document.querySelectorAll(".ac-slider--view__slides"),i=document.querySelector(".ac-slider--arrows__left"),c=document.querySelector(".ac-slider--arrows__right"),u=l.length,n=function(e){var r,t,i=document.querySelector(".ac-slider--view__slides.is-active"),c=Array.from(l).indexOf(i)+e+e,n=document.querySelector(".ac-slider--view__slides:nth-child("+c+")"),s=document.querySelector(".ac-slider--view__slides.is-active");u<c&&(n=document.querySelector(".ac-slider--view__slides:nth-child(1)")),0==c&&(n=document.querySelector(".ac-slider--view__slides:nth-child("+u+")")),r=n,t=s,i.classList.remove("is-active"),t.classList.remove("is-active"),r.classList.add("is-active"),o.setAttribute("style","transform:translateX(-"+r.offsetLeft+"px)")};c.addEventListener("click",function(){return n(1)}),i.addEventListener("click",function(){return n(0)})},{}]},{},[1]);
//# sourceMappingURL=slider.js.map
