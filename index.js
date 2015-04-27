let http = require('http')
let request = require('request')
let argv = require('yargs')
	.default('host', '127.0.0.1')
	.argv
let scheme = 'http://'
let port = argv.port || argv.host === '127.0.0.1' ? 8000 : 80
let destinationUrl = argv.url || scheme + argv.host + ':' + port

http.createServer((req, res) => {
	for (let header in req.headers) {
		res.setHeader(header, req.headers[header])
	}
	req.pipe(res)
}).listen(8000)

console.log('Listening at http://127.0.0.1:8000')


http.createServer((req, res) => {
	let options = {
		headers: req.headers,
		url: destinationUrl
	}
	let destinationResponse = req.pipe(request(options))
	destinationResponse.pipe(res)
}).listen(8001)
