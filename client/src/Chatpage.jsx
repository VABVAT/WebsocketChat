import { useContext, useEffect, useRef, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { socketContext } from './Webcontext';
function Chatpage(){
    // const [message, setMessages] = useState(props.messages);
    const {Socket, connectToSocket, message, setMessage} = useContext(socketContext)
    const [pseudoState, setState] = useState(0);

    useEffect(() => {
        Socket.onmessage = (event) => {
            const data = event.data;
            setMessage((prev) => ([...prev, {'roomId' : roomId, 'payload' : data}]))
        }
    }, [Socket])


    const location = useLocation();
    const queryParsed = new URLSearchParams(location.search);
    const roomId = parseInt(queryParsed.get('roomId'))

    const messageRef = useRef();
    
    
    return (
        <div className="flex flex-col bg-black min-h-screen" >
            {message.map((curr) => (parseInt(curr.roomId) === roomId ? <div className="text-black bg-white w-[10%] text-center p-2 rounded-2xl mt-4" > {curr.payload} </div> : null))}
        <input ref={messageRef} className="absolute bottom-0 w-[80%] left-10 h-10 rounded-xl p-4" placeholder='enter your message' ></input>
        <button onClick={() => {
            // setState((prev) => (prev + 1))
            Socket.send(JSON.stringify({roomId : roomId, payload : messageRef.current.value}))
            }} className='absolute bottom-2 right-10 bg-white p-2 w-40'> Send </button>
        </div>
    )
}

export default Chatpage;