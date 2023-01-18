import styled from 'styled-components'

const STATUS_COLORS = {
  obrigatorio: 'vermelho-500',
  opcional: 'verde-500',
} as const

interface ContainerInputProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Container = styled.section`
  background-color: ${(props) => props.theme.cinzaDefault};
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    padding: 2.5rem 0;
    background-color: ${(props) => props.theme.branco};
  }
`

export const TituloSecao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0;
  padding: 0 1.5rem;

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.texto};
  }
`

export const OpcoesSecao = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5rem 0;
  //background-color: ${(props) => props.theme.inputBackgroundLight};
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0 1.5rem;

  label {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.texto};
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.3125rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    border: 1px solid ${(props) => props.theme.inputBorderColor};
    border-radius: 4px;
    color: ${(props) => props.theme.inputTextColor};
  }
`

export const SpanStatus = styled.span<ContainerInputProps>`
  color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`

export const ContainerOptionsSelect = styled(ContainerInput)`
  select {
    width: 100%;
    padding: 0.3125rem 1rem;

    border: 1px solid ${(props) => props.theme.inputBorderColor};
    border-radius: 4px;

    option {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: ${(props) => props.theme.inputTextColor};
    }
  }
`

export const ContainerTelefone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0 1.5rem;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.texto};
    }

    label {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.texto};
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.3125rem 1rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      border: 1px solid ${(props) => props.theme.inputBorderColor};
      border-radius: 4px;
      color: ${(props) => props.theme.inputTextColor};
      margin-bottom: 1.25rem;
    }

    button {
      background-color: ${(props) => props.theme.azulPrimario};
      border: 0;
      border-radius: 4px;
      width: 100%;
      height: 2rem;
      margin: 2rem 0;
      color: ${(props) => props.theme.branco};
      &:active {
        opacity: 0.7;
      }
    }
  }
`

export const ListaTelefones = styled.ul`
  li {
    list-style: none;
    font-size: 1rem;
    color: ${(props) => props.theme.texto};
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        color: ${(props) => props.theme.texto};
      }
    }

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme.vermelho};
      cursor: pointer;
    }
  }

  li + li {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const BotaoFormNovoUsuario = styled.div`
  padding: 0 1.5rem;
  button {
    background-color: ${(props) => props.theme.azulPrimario};
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    margin: 2rem auto;
    color: ${(props) => props.theme.branco};
    &:active {
      opacity: 0.7;
    }
  }
`
