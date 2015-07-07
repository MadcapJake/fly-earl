<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

[![][fly-badge]]([fly]) ![][mit-badge]

> [Fly][fly] plugin for [Earl Grey](https://breuleux.github.io/earl-grey/)


## Usage

```
yield this.source(glob).earl([opts])
```
`opts.es5` is a boolean option to change compilation to ES5.  Defaults to false.

`opts.sourceMaps` is a string that specifies how to handle sourcemaps. `.compute` will compute sourcemaps but does not place `sourceMappingURL` within the file. `.inline` does add it.  The default is null.

`opts.runtime` is a string that specifies which runtime to require.  If null, no runtime is used and this removes some boilerplate code.  This defaults to requiring `earlgrey-runtime`.

`opts.parameters` is an object containing flags that you can pass right into your programs to be accessed by macros via `@getopt("flagName")`.  Flags are not limited to booleans and can be any arbitray data. For example:
```earl-grey
parameters = {
  debug-level = .critical
  test-data = {"Pepperoni", "Cheese", "Sausage", "Peppers"}
  tests = false
}
```
### Install

```
npm install -D fly-earl
```

### JavaScript

```js
exports.build = function* () {
  yield this
    .source("src/**/*.eg")
    .earl({ es5: true})
    .target("dist/")
}
```

### Earl Grey

```earl-grey
provide: build

gen build = ->
  yield chain this:
    @source("src/**/*.eg")
    @earl({ es5 = true })
    @target("dist/")
```

### Roadmap ✈

+ Source Maps.

# License

[MIT](http://opensource.org/licenses/MIT) © [Jacob Russo][author] [et al.](https://github.com/bucaran/fly-earl/graphs/contributors)




[author]: http://madcapjake.com

[fly]: https://github.com/flyjs/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square

[npm-pkg-link]: https://www.npmjs.org/package/fly-earl
