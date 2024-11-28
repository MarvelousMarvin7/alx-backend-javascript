const http = require('node:http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}\n`);
});

module.exports = app;