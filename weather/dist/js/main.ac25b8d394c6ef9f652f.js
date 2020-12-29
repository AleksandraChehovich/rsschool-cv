(()=>{var e={767:()=>{var e=document.querySelector(".container"),t=document.querySelector(".controlls_background");function n(){fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=eIT-Ii4B4Amh3yuKBKVJd1M9qhPaJ44yHtuU7LeIrxE").then((function(e){return e.json()})).then((function(t){e.style.backgroundImage="url(".concat(t.urls.regular,")")}))}n(),setInterval((function(){n()}),3e5),t.addEventListener("click",n)},622:()=>{var e=document.querySelector(".fullscreen"),t=!1;e.addEventListener("click",(function(){var n,a=e.querySelector("img"),o=document.querySelector(".container");t?(document.exitFullscreen?document.exitFullscreen():document.webkitRequestFullscreen?document.webkitRequestFullscreen():document.mozRequestFullscreen&&document.mozRequestFullScreen(),a.src="./fullscreen.svg",t=!1):((n=o).requestFullscreen?n.requestFullscreen():n.webkitrequestFullscreen?n.webkitRequestFullscreen():n.mozRequestFullscreen&&n.mozRequestFullScreen(),a.src="./fullscreenClose.svg",t=!0)}))},235:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"./img/fullscreen.b3de74981fcd8eab31add47a0526d21b.svg"},739:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"./img/photo-gallery.636aeaf8b55b9a92917a2cfd03dc6734.svg"},617:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"./img/refresh-button.63e9ad77217f9c49958c978683dd5c0c.svg"},483:function(){!function(){"use strict";function e(e){var t=!0,n=!1,a=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!o[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function i(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function u(n){n.metaKey||n.altKey||n.ctrlKey||(c(e.activeElement)&&r(e.activeElement),t=!0)}function d(e){t=!1}function l(e){c(e.target)&&(t||s(e.target))&&r(e.target)}function m(e){c(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(a),a=window.setTimeout((function(){n=!1}),100),i(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),p())}function p(){document.addEventListener("mousemove",y),document.addEventListener("mousedown",y),document.addEventListener("mouseup",y),document.addEventListener("pointermove",y),document.addEventListener("pointerdown",y),document.addEventListener("pointerup",y),document.addEventListener("touchmove",y),document.addEventListener("touchstart",y),document.addEventListener("touchend",y)}function _(){document.removeEventListener("mousemove",y),document.removeEventListener("mousedown",y),document.removeEventListener("mouseup",y),document.removeEventListener("pointermove",y),document.removeEventListener("pointerdown",y),document.removeEventListener("pointerup",y),document.removeEventListener("touchmove",y),document.removeEventListener("touchstart",y),document.removeEventListener("touchend",y)}function y(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,_())}document.addEventListener("keydown",u,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",v,!0),p(),e.addEventListener("focus",l,!0),e.addEventListener("blur",m,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},353:(e,t,n)=>{var a=n(370),o=n(235),c=n(617),s=n(739),r=a(o),i=a(c),u=a(s),d='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <script src="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js"><\/script> <link href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css" rel="stylesheet"/> <title>Weather</title> </head> <body> <div class="container"> <div class="overlay"> <div class="app"> <div class="error"> <div class="error_window"> <div class="error_text">Incorrect city name!</div> </div> </div> <button class="fullscreen"> <img src="'+r+'" alt=""> </button> <div class="app_controlls controlls"> <div class="controlls_item"> <button class="controlls_background"> <img src="'+i+'" alt=""> </button> <div class="controlls_language switch"> <button class="controlls_language-item controlls_language-item__ru ru switch_item">Ru</button> <button class="controlls_language-item controlls_language-item__en en switch_item active">En</button> </div> <div class="controlls_degrees switch"> <button class="controlls_degrees-item controlls_degrees-item__f f switch_item">F</button> <button class="controlls_degrees-item controlls_ldegrees-item__c c switch_item active">C</button> </div> </div> <form action="url" autocomplete="on" class="controlls_item search-form" onkeypress="if(13==event.keyCode)return!1"> <input class="search-form_input" type="text" value=""> <button class="search-form_button" type="button">Search</button> </form> </div> <div class="app_data data"> <div class="data_item data_item__futured"> <div class="next-day data_next-day"> <div class="next-day_text"></div> <div class="next-day_temperature"> <div class="next-day_temperature-value temperature"> <span class="next-day_temperature__num temperature_num first"></span> <span class="next-day_temperature__sign temperature_sign">o</span> </div> <img src="'+u+'" alt="icon" class="next-day_temperature-icon icon icon__first"> </div> </div> <div class="next-day data_next-day"> <div class="next-day_text"></div> <div class="next-day_temperature"> <div class="next-day_temperature-value temperature"> <span class="next-day_temperature__num temperature_num second"></span> <span class="next-day_temperature__sign temperature_sign">o</span> </div> <img src="'+u+'" alt="icon" class="next-day_temperature-icon icon icon__second"> </div> </div> <div class="next-day data_next-day"> <div class="next-day_text"></div> <div class="next-day_temperature"> <div class="next-day_temperature-value temperature"> <span class="next-day_temperature__num temperature_num third"></span> <span class="next-day_temperature__sign temperature_sign">o</span> </div> <img src="'+u+'" alt="icon" class="next-day_temperature-icon icon icon__third"> </div> </div> </div> <div class="data_item data_item__current"> <div class="location data_location"></div> <div class="data_date date"> <span class="date_weekday"></span> <span class="date_day"></span> </div> <div class="data_time time"></div> <div class="data_temperature"> <div class="data_temperature-value temperature"> <span class="data_temperature__num temperature_num temperature_num__xl current"></span> <span class="data_temperature__sign temperature_sign temperature_sign__xl">o</span> </div> <div class="data_temperature-icon"> <div class="data_icon"> <img src="'+u+'" alt="icon" class="data_temperature-icon__img icon icon__current"> <div class="data_temperature-icon__context"></div> </div> <div class="data_details"> <div class="feels"> <span class="feels_text text"></span> <div class="feels_temperature-value temperature"> <span class="feels_temperature__num temperature_num temperature_num__xs">10</span> <span class="feels_temperature__sign temperature_sign temperature_sign__xs">o</span> </div> </div> <div class="wind"> <span class="wind_text text"></span> <span class="wind_value"></span> </div> <div class="humidity"> <span class="humidity_text text"></span> <span class="humidity_value"></span> </div> </div> </div> </div> </div> <div class="data_item data_item__location location-map"> <div id="map" class="location-map_map">My map will go here</div> <div class="location-map_wrapper"> <div class="location-map_latitude"><span class="latitude_ctx">latitude: </span><span class="latitude"></span></div> <div class="location-map_longitude"><span class="longitude_ctx">longitude: </span><span class="longitude"></span></div> </div> </div> </div> </div> </div> </div> </body> </html> ';e.exports=d},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}}},t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",(()=>{"use strict";n(483),n(353),n(767);var e,t,a=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function c(e){var t=document.querySelector(".date_weekday"),n=document.querySelector(".date_day");"US"===e&&(e="en-GB");var c=new Date;t.textContent=c.toLocaleString(e,{year:"2-digit",month:"numeric",day:"numeric"}),n.textContent=c.toLocaleString("".concat(+localStorage.getItem("language")?"ru-RU":"en-En"),{weekday:"short"}),function(e){for(var t=document.querySelectorAll(".next-day_text"),n=+localStorage.getItem("language")?a:o,c=0;c<t.length;c+=1)7===(e+=1)&&(e=0),t[c].textContent=n[e]}(c.getDay())}function s(n,a){var o=document.querySelector(".time");e=n||e;var c={hour:"numeric",minute:"numeric",second:"numeric",timeZone:t=a||t},r=new Date;o.textContent=r.toLocaleString(e,c),setTimeout((function(){s()}),1e3,e,t)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n,a=(r(n={U:"У",K:"К",E:"Е",N:"Н",G:"Г",SH:"Ш",SCH:"Щ",Z:"З",H:"Х",yo:"ё",i:"й",ts:"ц",u:"у",k:"к",e:"е",n:"н",g:"г",sh:"ш",sch:"щ",z:"з",h:"х",F:"Ф",V:"В",a:"А",P:"П",R:"Р",O:"О",L:"Л",D:"Д",f:"ф",v:"в"},"a","а"),r(n,"p","п"),r(n,"r","р"),r(n,"o","о"),r(n,"l","л"),r(n,"d","д"),r(n,"S","С"),r(n,"M","М"),r(n,"I","И"),r(n,"T","Т"),r(n,"B","Б"),r(n,"s","с"),r(n,"m","м"),r(n,"i","и"),r(n,"t","т"),r(n,"b","б"),n),o=t?{Ё:"E",Й:"I",Ц:"TS",У:"U",К:"K",Е:"E",Н:"N",Г:"G",Ш:"SH",Щ:"SCH",З:"Z",Х:"H",Ъ:"'",ё:"e",й:"i",ц:"ts",у:"u",к:"k",е:"e",н:"n",г:"g",ш:"sh",щ:"sch",з:"z",х:"h",ъ:"'",Ф:"F",Ы:"I",В:"V",А:"a",П:"P",Р:"R",О:"O",Л:"L",Д:"D",Ж:"ZH",Э:"E",ф:"f",ы:"i",в:"v",а:"a",п:"p",р:"r",о:"o",л:"l",д:"d",ж:"zh",э:"e",Я:"Ya",Ч:"CH",С:"S",М:"M",И:"I",Т:"T",Ь:"'",Б:"B",Ю:"YU",я:"ya",ч:"ch",с:"s",м:"m",и:"i",т:"t",ь:"'",б:"b",ю:"yu"}:a;return e.split("").map((function(e){return o[e]||e})).join("")}function u(e){var t,n,a=document.querySelector(".icon__current"),o=document.querySelector(".icon__first"),c=document.querySelector(".icon__second"),s=document.querySelector(".icon__third");a.src=(t=e.data[0],+(n=document.querySelector(".time")).textContent.substring(0,2)>20||+n.textContent.substring(0,2)<5?"./temp_icons/".concat(t.weather.icon.substring(0,3),"n.svg"):"./temp_icons/".concat(t.weather.icon,".svg")),o.src="./temp_icons/".concat(e.data[1].weather.icon,".svg"),c.src="./temp_icons/".concat(e.data[2].weather.icon,".svg"),s.src="./temp_icons/".concat(e.data[3].weather.icon,".svg")}var d=document.querySelector(".controlls_degrees"),l=document.querySelector(".controlls_language"),m=document.querySelector(".search-form_button"),v=document.querySelector(".search-form_input"),p="en",_=1,y="M",f=0,g="Minsk";function h(){var e=document.querySelector(".feels_text"),t=document.querySelector(".wind_text"),n=document.querySelector(".humidity_text"),a=document.querySelector(".latitude_ctx"),o=document.querySelector(".longitude_ctx");p="ru",g=i(g,!1),m.textContent="Поиск",e.textContent="Ощущается как:",t.textContent="Ветер:",n.textContent="Влажность:",a.textContent="Широта:",o.textContent="Долгота:"}function x(){var e=document.querySelector(".feels_text"),t=document.querySelector(".wind_text"),n=document.querySelector(".humidity_text"),a=document.querySelector(".latitude_ctx"),o=document.querySelector(".longitude_ctx");p="en",g=i(g,!0),m.textContent="Search",e.textContent="Feel like:",t.textContent="Wind:",n.textContent="Humidity:",a.textContent="Latitude:",o.textContent="Longitude:"}function b(e){return"".concat(e.slice(0,e.indexOf(".")),"<sup>o</sup>").concat(e.slice(e.indexOf(".")+1,e.indexOf(".")+3),"'")}function S(){var e=document.querySelector(".current"),t=document.querySelector(".first"),n=document.querySelector(".second"),a=document.querySelector(".third"),o=document.querySelector(".humidity_value"),r=document.querySelector(".wind_value"),i=document.querySelector(".feels_temperature__num"),d=document.querySelector(".data_temperature-icon__context"),l=document.querySelector(".data_location"),m="https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(g,"&days=4&units=").concat(y,"&lang=").concat(p,"&key=7598a76e99de44c2b7e89e8205dcfa43");fetch(m).then((function(e){return e.json()})).then((function(m){var v=m.lon,p=m.lat,_=m.timezone,y=m.country_code;e.textContent=Math.round(m.data[0].high_temp),t.textContent=Math.round(m.data[1].high_temp),n.textContent=Math.round(m.data[2].high_temp),a.textContent=Math.round(m.data[3].high_temp),o.textContent="".concat(m.data[0].rh," %"),r.textContent="".concat(Math.round(m.data[0].wind_spd)," ").concat(f?"м/с":"m/s"),d.textContent="".concat(m.data[0].weather.description),i.textContent=Math.round(m.data[0].temp),l.textContent=m.city_name,function(e,t){var n=document.querySelector(".latitude"),a=document.querySelector(".longitude");n.innerHTML=b(e),a.innerHTML=b(t),mapboxgl.accessToken="pk.eyJ1Ijoic2FudW5pYSIsImEiOiJja2lrNTN6cnEwNmpxMnFwa251NnZsbGMxIn0.bi_bHohbNm1r-c9tAIISMg",new mapboxgl.Map({container:"map",center:[Number(t),Number(e)],zoom:9,style:"mapbox://styles/mapbox/streets-v11"})}(p,v),c(y),s(y,_),u(m)})).catch((function(){var e;(e=document.querySelector(".error")).classList.add("active"),setTimeout((function(){e.classList.remove("active")}),1200)}))}function L(e,t){fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(e,"&lon=").concat(t)).then((function(e){return e.json()})).then((function(e){g=e.address.city})).then((function(e){var t;t=document.querySelectorAll(".controlls_degrees-item"),+localStorage.getItem("temperatureMeasurement")?(t.forEach((function(e){e.classList.remove("active"),e.classList.contains("c")&&e.classList.add("active")})),y="M"):(t.forEach((function(e){e.classList.remove("active"),e.classList.contains("f")&&e.classList.add("active")})),y="I"),function(){var e=document.querySelectorAll(".controlls_language-item");+localStorage.getItem("language")?e.forEach((function(e){e.classList.remove("active"),e.classList.contains("ru")&&(e.classList.add("active"),h())})):e.forEach((function(e){e.classList.remove("active"),e.classList.contains("en")&&(e.classList.add("active"),x())}))}(),S()}))}function w(){var e=document.querySelector(".search-form_input");g=i(g=e.value,"ru"!==p),S(),e.value=""}window.addEventListener("load",(function(){var e,t;navigator.geolocation.getCurrentPosition((function(n){t=n.coords.latitude,e=n.coords.longitude,L(t,e)}))})),d.onclick=function(e){document.querySelectorAll(".controlls_degrees-item").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),"C"===e.target.textContent?(_=1,y="M"):(_=0,y="I"),localStorage.setItem("temperatureMeasurement",_),S()},l.onclick=function(e){document.querySelectorAll(".controlls_language-item").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),"Ru"===e.target.textContent?(f=1,h()):(x(),f=0),localStorage.setItem("language",f),S(),c()},m.addEventListener("click",w),v.addEventListener("keypress",(function(e){13===e.keyCode&&w()}));n(622)})()})();