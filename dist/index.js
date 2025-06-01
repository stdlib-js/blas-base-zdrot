"use strict";var y=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=y(function(K,w){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist');function k(r,e,s,d,u,f,p,n,o){var t,v,q,c,j,a,i,x;if(r<=0)return u;for(t=l(e,0),v=l(u,0),c=s*2,j=f*2,a=d*2,i=p*2,x=0;x<r;x++)q=n*t[a]+o*v[i],v[i]=n*v[i]-o*t[a],t[a]=q,q=n*t[a+1]+o*v[i+1],v[i+1]=n*v[i+1]-o*t[a+1],t[a+1]=q,a+=c,i+=j;return u}w.exports=k
});var E=y(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=m();function B(r,e,s,d,u,f,p){var n=R(r,s),o=R(r,u);return A(r,e,s,n,d,u,o,f,p)}_.exports=B
});var g=y(function(M,b){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),D=m();C(O,"ndarray",D);b.exports=O
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=g(),z,h=G(F(__dirname,"./native.js"));H(h)?z=I:z=h;module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
