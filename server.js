const express = require('express');
const server = express();
const PORT = 2022;

/* add routers */
server.use('/' , require('./src/routers/newFile'));
server.use('/' , require('./src/routers/download'));
server.use('/' , require('./src/routers/deleteFile'));

/* serve static files */
server.use('/static',express.static('./uploaded'));

/* main page renderer */
server.get('/' , (req , res)=>{
    res.status(200).sendFile( __dirname + '/index.html');
});

/* other routers */
server.get('*' , (req , res)=>{
    res.status(404).json({Error: 'Not Found!'});
});

server.post('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

server.put('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

server.delete('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

/* error handeler */
server.use((err, req, res,next) => {
    res.status(500).json({error: true, message: err.message, data: []});
})

/* port listining */
server.listen(PORT);