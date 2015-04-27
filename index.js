let http = require('http')

http.createServer((req, res) => {
	for (let header in req.headers) {
		res.setHeader(header, req.headers[header])
	}
	req.pipe(res);
}).listen(8000)

console.log('Listening at http://127.0.0.1:8000')
