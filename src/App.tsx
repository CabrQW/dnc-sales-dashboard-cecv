import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login,Profiles, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/login" element={<Home />} />
        <Route path="/leads" element={<Leads/>} />
        <Route path="/perfil" element={<Profiles/>} />
      </Routes>
    </Router>
  )
}

export default App
