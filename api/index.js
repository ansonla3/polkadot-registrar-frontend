const app = require('express')()

app.get('/search/:address', (req, res) => {
    console.log(" address :", req.params.address);

    // console.log('calling search result');
    res.end('callign search')
})

app.get('/healthcheck', (req, res) => {
    res.send(200);
})

export default app;