import Home from './pages/home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
