const os = require('os')

// info about currrent user
console.log(os.userInfo())

// system uptime in seconds
console.log('The system uptime is ' + os.uptime());

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log(currentOS)