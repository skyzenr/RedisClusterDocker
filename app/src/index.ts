const Express = require('express')
const Redis = require('ioredis')
const app = Express()
const port = 3000

app.get('/', (req, res) => {

    const cluster = new Redis.Cluster([{
        port: 7002,
        host: 'localhost'
    }, {
        port: 7003,
        host: 'localhost'
    }])

    cluster.set('foo', 'bar')
    cluster.get('foo', function(err, res) {
        console.log(err)
        console.log(res)
    })


    res.send('Hello World!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))