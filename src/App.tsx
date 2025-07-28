import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/cadastro" element={<>Cadastro</>} />
        <Route path="/login" element={<>Login</>} />
        <Route path="/leads" element={<>Leads</>} />
        <Route path="/perfil" element={<>Perfil</>} />
      </Routes>
    </Router>
  )
}

export default App
