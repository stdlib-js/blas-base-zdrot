// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";function s(e,r,s,n,d,i,o,m,a){var f,l,p,j,u,v,b,c;if(e<=0)return d;for(f=t(r,0),l=t(d,0),j=2*s,u=2*i,v=2*n,b=2*o,c=0;c<e;c++)p=m*f[v]+a*l[b],l[b]=m*l[b]-a*f[v],f[v]=p,p=m*f[v+1]+a*l[b+1],l[b+1]=m*l[b+1]-a*f[v+1],f[v+1]=p,v+=j,b+=u;return d}function n(e,t,n,d,i,o,m){return s(e,t,n,r(e,n),d,i,r(e,i),o,m)}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
