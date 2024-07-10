<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zdrot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Applies a plane rotation.



<section class="usage">

## Usage

```javascript
import zdrot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zdrot@deno/mod.js';
```

#### zdrot( N, zx, strideX, zy, strideY, c, s )

Applies a plane rotation.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot( zx.length, zx, 1, zy, 1, 0.8, 0.6 );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-0.6

var im = imag( z );
// returns ~-1.2

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~0.8

im = imag( z );
// returns ~1.6
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.
-   **zy**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `zy`.

The `N` and stride parameters determine how values from `zx` and `zy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot( 2, zx, 2, zy, 2, 0.8, 0.6 );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-0.6

var im = imag( z );
// returns ~-1.2

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~0.8

im = imag( z );
// returns ~1.6
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';

// Initial arrays...
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zdrot( 2, zx1, -2, zy1, 1, 0.8, 0.6 );

var z = zy0.get( 2 );
// returns <Complex128>

var re = real( z );
// returns ~-4.2

var im = imag( z );
// returns ~-4.8

z = zx0.get( 3 );
// returns <Complex128>

re = real( z );
// returns ~5.6

im = imag( z );
// returns ~6.4
```

#### zdrot.ndarray( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );

var z = zy.get( 0 );
// returns <Complex128>

var re = real( z );
// returns ~-0.6

var im = imag( z );
// returns ~-1.2

z = zx.get( 0 );
// returns <Complex128>

re = real( z );
// returns ~0.8

im = imag( z );
// returns ~1.6
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.
-   **offsetY**: starting index for `zy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( 2, zx, 2, 1, zy, 2, 1, 0.8, 0.6 );

var z = zy.get( 3 );
// returns <Complex128>

var re = real( z );
// returns ~-4.2

var im = imag( z );
// returns ~-4.8

z = zx.get( 1 );
// returns <Complex128>

re = real( z );
// returns ~2.4

im = imag( z );
// returns ~3.2
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `zx` and `zy` unchanged.
-   `zdrot()` corresponds to the [BLAS][blas] level 1 function [`zdrot`][zdrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@deno/mod.js';
import zcopy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zcopy@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import zdrot from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zdrot@deno/mod.js';

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var zx = filledarrayBy( 10, 'complex128', rand );
var zxc = zcopy( zx.length, zx, 1, zeros( zx.length, 'complex128' ), 1 );

var zy = filledarrayBy( 10, 'complex128', rand );
var zyc = zcopy( zy.length, zy, 1, zeros( zy.length, 'complex128' ), 1 );

// Apply a plane rotation:
zdrot( zx.length, zx, 1, zy, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', zxc, zyc, zx, zy );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zdrot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zdrot

[test-image]: https://github.com/stdlib-js/blas-base-zdrot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-zdrot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-zdrot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-zdrot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-zdrot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-zdrot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-zdrot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-zdrot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-zdrot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-zdrot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-zdrot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-zdrot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-zdrot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-zdrot/main/LICENSE

[blas]: http://www.netlib.org/blas

[zdrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

</section>

<!-- /.links -->
