const express = require('express')
const bunyan = require('bunyan');
const app = express()
const port = 3000


const log = bunyan.createLogger({ name: 'app' });
app.all('/', (req, res) => {
    log(req);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}; Hi`)
});