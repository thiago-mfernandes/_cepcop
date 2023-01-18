import { Outlet } from 'react-router-dom'

export function FormLogin() {
  return (
    <>
      <form action="">
        <h2>Login</h2>
        <label htmlFor="">CPF</label>
        <input type="text" id="nome" />

        <label htmlFor="senha">Senha</label>
        <input type="text" id="senha" />
      </form>
      <Outlet />
    </>
  )
}
