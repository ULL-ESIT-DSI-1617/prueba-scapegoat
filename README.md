Repo to test the npm module example
in [ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)

To run the tests:

```
[~/.../prueba-scapegoat(master)]$ npm test

> prueba-scapegoat@1.0.0 test /Users/casiano/local/src/javascript/evalua-module/creating-and-publishing-a-node-js-module-not-submodule/prueba-scapegoat
> npm run clean; npm i --no-save && mocha


> prueba-scapegoat@1.0.0 clean /Users/casiano/local/src/javascript/evalua-module/creating-and-publishing-a-node-js-module-not-submodule/prueba-scapegoat
> rm -fR node_modules package-lock.json

npm WARN deprecated mkdirp@0.5.3: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN prueba-scapegoat@1.0.0 No repository field.

added 115 packages from 84 contributors and audited 214 packages in 6.415s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities



  #escape
    ✓ converts & into &amp;
    ✓ converts " into &quot;
    ✓ converts ' into &#39;
    ✓ converts < into &lt;
    ✓ converts > into &gt;
    ✓ returns empty string if called with falsey value

  #unescape
    ✓ converts &amp; into &
    ✓ converts &quot; into "
    ✓ converts &#39; into '
    ✓ converts &lt; into <
    ✓ converts &gt; into >
    ✓ does not double unescape values
    ✓ returns empty string if called with falsey value


  13 passing (16ms)

[~/.../prueba-scapegoat(master)]$
```

See the [**main** repo](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
