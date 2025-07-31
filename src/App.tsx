import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { Home, Leads, Login,Profiles, Registration } from './pages'
import Cookies from 'js-cookie'

function App() {
  const ProtectadRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Autenticação necessaria')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectadRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profiles />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
