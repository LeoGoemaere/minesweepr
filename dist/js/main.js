"use strict";window.addEventListener("DOMContentLoaded",function(){function n(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}var i=(document.querySelector("main"),document.querySelectorAll(".slide")),e=function(){for(var n=window.innerHeight,e=0;e<i.length;e++)i[e].style.height=n+"px"};e();var t=!1,r=function(){t=window.innerWidth<window.innerHeight};r(),window.addEventListener("resize",function(){n()===!1&&e(),t?window.innerWidth>window.innerHeight&&(e(),t=!1):window.innerWidth<window.innerHeight&&(e(),t=!0)},!1)},!1);