const {WebSocket, WebSocketServer} = require('ws')
const express = require('express')
const app = new express();

// const httpsServer = app.listen(3000);
const wss = new WebSocketServer({port: 3000});
const sockets = [];

wss.on('connection', function(socket, req){
    // ! for authentication purposes
    const arr = req.url.split('?')[1];
    
    // const roomId = json(arr[1]);
    const roomId = {
        roomId : parseInt(arr)
    }
    
    sockets.push({   
        roomId : roomId.roomId,
        socket: socket    
    })
    
    

    socket.on('message', function(message){
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
        for(let i = 0; i < sockets.length; i++){
            if(sockets[i].roomId  === parseInt(parsedMessage.roomId)){
                const s = sockets[i].socket
                s.send(parsedMessage.payload);
            }
        }
    })
    
})