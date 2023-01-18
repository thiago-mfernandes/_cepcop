import { Container } from './styles'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { CardContainer } from '../../components/Card/styles'

export function Usuarios() {
  return (
    <main>
      <Container>
        <img src={Logo} alt="" />
        <CardContainer>
          <h3>Novo Usuário</h3>
          <button>
            <NavLink to="/user/cadastro">Fazer Cadastro</NavLink>
          </button>
          <hr />
          <h3>Já possuo cadastro:</h3>
          <button>
            <NavLink to="/user/login">Ver Agendamento</NavLink>
          </button>
        </CardContainer>
      </Container>
    </main>
  )
}
