import styled, { css } from 'styled-components'

const Heading = styled.div`
    font-size: 30px;
    font-weight: 600;

    ${props => props.h1 && css`
        font-size: 50px;
    `}
`

export default Heading;