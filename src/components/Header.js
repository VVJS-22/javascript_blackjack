import styled from "styled-components"

const Header = () => {
    return (
        <Wrapper>
            <h1>
                This is Header
            </h1>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    h1 {
        font-size: 3rem;
    }
`
