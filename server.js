let express = require('express');
let app = express();
let port = process.env.port || 3001;
require('./dbconnection');
let router = require('./routers/route')
let http = require('http').createServer(app);

const { Socket } = require('socket.io');
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

http.listen(port, () => {
    console.log('express server started');
}); 