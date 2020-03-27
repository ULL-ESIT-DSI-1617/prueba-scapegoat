Repo to test the npm module example
in [ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)

To run the tests:

```
[~/local/src/javascript/evalua-module/create-a-npm-module/prueba-scapegoat(master)]$ npm test

> prueba-scapegoat@1.0.0 test /Users/casiano/local/src/javascript/evalua-module/create-a-npm-module/prueba-scapegoat
> rm -f salida.txt; (npm i && node main.js | tee salida.txt) && (diff salida.txt expected.txt && echo 'OK!') || echo 'NOT OK' 

up to date in 0.133s
html <h1>Hello World</h1> escaped &lt;h1&gt;Hello World&lt;/h1&gt; unescaped <h1>Hello World</h1>
OK!
```

See the [**main** repo](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
