!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l);var o=l("1WSnx"),n=document.querySelector("[name='email']"),i=document.querySelector("[name='message']"),s=document.querySelector(".feedback-form");var u=e(o).throttle((function(){var e={email:n.value.trim(),message:i.value.trim()};try{var t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}catch(e){console.log("stringedData error: "+e)}}),500);n.addEventListener("input",u),i.addEventListener("input",u),s.addEventListener("submit",(function(e){e.preventDefault();var t={email:n.value.trim(),message:i.value.trim()};""===t.email||""===t.message?alert("Both fields must be filled before sending"):(console.log(t),localStorage.removeItem("feedback-form-state"),n.value=null,i.value=null)}));try{var d=JSON.parse(localStorage.getItem("feedback-form-state"));""===d.email&&""===d.message||(n.value=d.email,i.value=d.message)}catch(e){console.log("parsedData error: "+e)}}();
//# sourceMappingURL=03-feedback.dc82a37f.js.map