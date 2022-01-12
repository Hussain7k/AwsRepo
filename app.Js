// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
	res.send('This is hosted on aws '
		+ ' server By Yaser')
	res.end()
})

// Port Number
const PORT = process.env.PORT ||3000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
