!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("iU1Pc");function i(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=document.querySelectorAll("input"),r=Number(t[0].value),o=Number(t[1].value),c=Number(t[2].value);n.currentTarget.reset();for(var l=1;l<=c;l+=1)i(l,r).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)})),r+=o}))}();
//# sourceMappingURL=03-promises.bc477b9b.js.map