import styled from 'styled-components'

export const CardAlerta = styled.div`
  color: #055160;
  font-size: 1rem;
  width: 80%;
  background-color: ${(props) => props.theme.cinzaDefault};
  border: 1px solid #b6effb;
  border-radius: 8px;
  box-shadow: 0px 0px 50px 1px rgba(5, 81, 96, 30%);
  //grid-column: 1/3;
  line-height: 1.5rem;
  margin: 5% auto 12%;
  padding: 1rem;

  span {
    color: ${(props) => props.theme.vermelho};
  }
`
