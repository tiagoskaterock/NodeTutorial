const http = require('http')

const port = 5000

const webpage = '<h1>Welcome to my Homepage</h1><p>This is my first page using NodeJS</p>';

const server = http.createServer((req, res) => {
	res.write(webpage)
	res.end()
})

server.listen(port)
