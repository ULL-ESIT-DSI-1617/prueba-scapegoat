var scapegoat = require('@ull-esit-dsi-1617/scapegoat');
var escape = scapegoat.escape;
var unescape = scapegoat.unescape;
 
var html = '<h1>Hello World</h1>';

var  escaped = escape(html);
var  unescaped = unescape(escaped);

console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
