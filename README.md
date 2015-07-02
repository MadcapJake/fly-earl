<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

[![][fly-badge]]([fly]) ![][mit-badge]

> [Fly][fly] plugin for [Earl Grey](https://breuleux.github.io/earl-grey/)


## Usage

Currently alpha, use at your own risk.  Will add more details here as they come.

### Install

```a
npm install -D fly-coffee
```

### JavaScript

```js
exports.build = function* () {
  yield this
    .source("src/**/*.eg")
    .earl()
    .target("dist/")
}
```

### Earl Grey

```earl-grey
provide: build

gen build = ->
  yield chain this:
    @source("src/**/*.eg")
    @earl()
    @target("dist/")
```

### Roadmap ✈

+ Source Maps.

# License

[MIT](http://opensource.org/licenses/MIT) © [Jacob Russo][author] [et al.](https://github.com/bucaran/fly-earl/graphs/contributors)




[author]: http://madcapjake.com

[fly]: https://www.github.com/bucaran/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square

[npm-pkg-link]: https://www.npmjs.org/package/fly-earl
