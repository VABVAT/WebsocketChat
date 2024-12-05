import { createContext, useState } from "react";

export const socketContext = createContext(null);

function SocketContextProvider({children}){
    const [message, setMessage] = useState([]);
    const [Socket, setSocket] = useState()
    const connectToSocket = (roomId) => {
        const newSocket = new WebSocket('ws://localhost:3000/?' + roomId);
        setSocket(newSocket)
        return newSocket
    }

    return (
        <socketContext.Provider  value={{Socket, connectToSocket, message, setMessage}}>
            {children}
        </socketContext.Provider>
    )
}

export default SocketContextProvider
 