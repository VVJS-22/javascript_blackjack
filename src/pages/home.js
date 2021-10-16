import {
    Header,
    Board,
    Result,
    Table,
    Button
} from '../components'

import { Wrapper } from '../styles/pageWrapper'

const home = () => {
    return (
        <Wrapper
        bgColor = "#3f3f3f"
        >
            <Header 
            title  = "BlackJack"
            path  = "/help"
            >
                <Button
                text="Help?"
                color="#fff"
                bgColor="hsl(126,84%,31%)"
                hoverColor="hsl(126,84%,25%)"
                // text = "Help?"
                top = "1.25rem"
                right = "1.25rem"
                position = "absolute"
                />
            </Header>
            <Result />
            <Board />
            <Table />
        </Wrapper>
    )
}

export default home




// rgb #rrggbb #000000 #ffffff #ff0000 #00ff00 #0000ff  #3f3f3f