import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.cinzaDefault};
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;

  img {
    width: 35%;
    margin: 0 auto 1.8rem;
  }

  div {
    hr {
      margin-bottom: 1.5rem;
      color: ${(props) => props.theme.texto};
      opacity: 0.2;
      width: 100%;
    }

    h3 {
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.texto};
      font-size: 1rem;
      font-weight: 300;
    }

    button {
      background-color: ${(props) => props.theme.azulPrimario};
      border: 0;
      border-radius: 4px;
      width: 100%;
      height: 2rem;
      margin-bottom: 2rem;
      &:active {
        opacity: 0.7;
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.branco};
      }
    }
  }
`
