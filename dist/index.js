"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=y(function(K,w){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist');function k(e,r,u,d,n,f,p,o,s){var t,v,q,c,j,a,i,x;if(e<=0)return n;for(t=l(r,0),v=l(n,0),c=u*2,j=f*2,a=d*2,i=p*2,x=0;x<e;x++)q=o*t[a]+s*v[i],v[i]=o*v[i]-s*t[a],t[a]=q,q=o*t[a+1]+s*v[i+1],v[i+1]=o*v[i+1]-s*t[a+1],t[a+1]=q,a+=c,i+=j;return n}w.exports=k
});var E=y(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=m();function B(e,r,u,d,n,f,p){var o=R(e,u),s=R(e,n);return A(e,r,u,o,d,n,s,f,p)}_.exports=B
});var g=y(function(M,b){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),D=m();C(O,"ndarray",D);b.exports=O
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=g(),z,h=G(F(__dirname,"./native.js"));H(h)?z=I:z=h;module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
