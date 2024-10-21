import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [value, setValue] = useState();

  const navigate = useNavigate()

  const handleJoinRoom = useCallback(()=>{
    navigate(`/room/${value}`)
  },[navigate, value])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Join a Room</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            type="text" 
            placeholder="Enter Room Code"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button onClick={handleJoinRoom} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Join
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage