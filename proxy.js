const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy
  .createProxyServer({
  })
  // .listen(9000)

http.createServer(function (req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  // res.end();
  console.info('proxy req', req.url, req.path)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')

  proxy.web(req, res, {
    target:'http://localhost:9200'
  })
}).listen(9000);

console.info('listening at http://localhost:9000')
