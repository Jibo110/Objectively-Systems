/* Problem 2 : Fix the following Node.js Express route to properly send a JSON response with status code 200.  

const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    res.send(200, { message: 'Success' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
*/

// Solution: 
const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    res.status(200).json({ message: 'Success' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});