import { Routes, Route, Link } from 'react-router-dom'
// import './App.css'
import HomePage from './pages/Home'
import RoomPage from './pages/Room'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App