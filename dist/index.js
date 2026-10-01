"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(f){throw (r=0, f)}};};var N=o(function(y,q){
var t=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-assert-is-infinitef/dist'),n=require('@stdlib/math-base-special-absf/dist'),c=require('@stdlib/math-base-special-expm1f/dist'),m=require('@stdlib/math-base-special-lnf/dist'),l=require('@stdlib/math-base-special-powf/dist'),w=require('@stdlib/math-base-special-fmodf/dist'),E=require('@stdlib/math-base-special-truncf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),u=i(0),v=i(1),s=i(.5),F=i(.2);function O(e,r){var f,a;if(e=i(e),r=i(r),t(e)||t(r))return NaN;if(r===u)return u;if(e===u)return-v;if(e<u&&w(r,2)===u&&(e=-e),e>u){if((n(i(r*i(e-v)))<s||n(r)<F)&&(a=i(m(e)*r),a<s))return c(a)}else if(E(r)!==r)return NaN;return f=i(l(e,r)-v),p(f)||t(f)?NaN:f}q.exports=O
});var H=N();module.exports=H;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
