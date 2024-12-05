import { useContext, useRef, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { socketContext } from './Webcontext';
function Roompage() {
  // const [count, setCount] = useState(0)
  const {Socket, connectToSocket} = useContext(socketContext)
  const roomRef = useRef();
  const navigate = useNavigate();
  async function openConnection() {
    const newSocket = connectToSocket(roomRef.current.value)
    newSocket.onopen(
      navigate('/chat?roomId=' + roomRef.current.value)
    )
  }

  return (
    <div className='min-h-screen flex flex-row bg-gray-300 items-center justify-center '>
      <input ref={roomRef} className='w-[200px] text-center h-[40px] border-black border-2 border-solid ' placeholder='Enter Room code'></input>
      <button onClick={openConnection} className='transform-all duration-200 ml-20 bg-black text-white p-3 rounded-xl hover:bg-white hover:text-black'>Enter Room</button>
    </div>
  )
}

export default Roompage
