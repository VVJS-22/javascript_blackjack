import styled from 'styled-components/macro'

export const Wrapper = styled.section`
    background: ${({bgColor = "rgb(42,80,25)"}) => (bgColor)};
    min-height: 100vh;
`