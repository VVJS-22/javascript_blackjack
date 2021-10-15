import {
    Header,
    Board,
    Result,
    Table
} from '../components'

import { Wrapper } from '../styles/pageWrapper'

const home = () => {
    return (
        <Wrapper
        bgColor = "#3f3f3f"
        >
            <Header 
            title  = "BlackJack"
            text = "Help?"
            path  = "/help"
            top = "1.25rem"
            right = "1.25rem"
            />
            <Result />
            <Board />
            <Table />
        </Wrapper>
    )
}

export default home




// rgb #rrggbb #000000 #ffffff #ff0000 #00ff00 #0000ff  #3f3f3f