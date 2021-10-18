import {
    Header,
    Board,
    Result,
    Table,
    Button
} from '../components'

import { Wrapper } from '../styles/pageWrapper'
import useHit from '../hooks/useHit'

const Home = () => {
    const [blackjackHit] = useHit()
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
            <Board>
                <Button 
                    text="Hit"
                    bgColor="#08f"
                    color="#fff"
                    hoverColor="hsl(208,100%,40%)"
                    func={blackjackHit}
                />
                <Button
                    text="Stand"
                    bgColor="#ead408"
                    hoverColor="hsl(54,93%,40%)"
                    color="#000"
                />
                <Button
                    text="Deal"
                    bgColor="#f30"
                    color="#fff"
                    hoverColor="hsl(12,100%,40%)"
                />
            </Board>
            <Table />
        </Wrapper>
    )
}

export default Home




// rgb #rrggbb #000000 #ffffff #ff0000 #00ff00 #0000ff  #3f3f3f