import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 10px 20px;
  color: #000;
  background: #999;

  ${props => props.primary && css`
    background: purple;
    color: white;
  `}
`

export default Button;