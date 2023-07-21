const http = require('http')

const port = 5000

const homepage = '<h1>Welcome to my Homepage</h1><p>This is my first page using NodeJS</p>';
const about = '<h1>About</h1><p>Lorem ipsum dolor sit amet</p>';
const blog = '<h1>Blog</h1><p>Nemo enim ipsam voluptatem quia voluptas</p>';
const contact = '<h1>Contact</h1><p>Qui dolorem eum fugiat quo voluptas nulla pariatur</p>';
const notFind = '<h1>OOOOPSSS!!!</h1><p>This page doesn\'t exist, sorry =(</p>';

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			res.write(homepage)	
			break;
		case '/about':
			res.write(about)	
			break;
		case '/blog':
			res.write(blog)	
			break;
		case '/contact':
			res.write(contact)	
			break;
		default:
			res.write(notFind)	
			break;
	}
	
	res.end()
})

server.listen(port)
