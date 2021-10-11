import {
    Header,
    Board,
    Result,
    Table
} from '../components'

import styled from 'styled-components'

const home = () => {
    return (
        <Wrapper>
            <Header />
            <Result />
            <Board />
            <Table />
        </Wrapper>
    )
}

export default home

const Wrapper = styled.section`
    background: #3f3f3f;
    min-height: 100vh;
`


// rgb #rrggbb #000000 #ffffff #ff0000 #00ff00 #0000ff  #3f3f3f