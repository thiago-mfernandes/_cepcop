import { Routes, Route } from 'react-router-dom'
import { FormLogin } from './components/FormLogin'
import { Administradores } from './Pages/administradores'
import { Usuarios } from './Pages/usuarios'
import { CadastroUsuario } from './Pages/usuarios/cadastroUsuario'

export function Router() {
  return (
    <Routes>
      <Route path="/user" element={<Usuarios />} />
      <Route path="/user/cadastro" element={<CadastroUsuario />} />
      <Route path="/user/login" element={<FormLogin />} />

      <Route path="/admin" element={<Administradores />} />
    </Routes>
  )
}
