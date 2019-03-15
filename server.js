var express = require('express');
var server = require('http').Server;
var app = new express(server);
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  console.log('file served');
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || '3000', er => {
  console.log('Server started ...');
});
