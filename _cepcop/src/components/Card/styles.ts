import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.branco};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  height: max-content;
`
