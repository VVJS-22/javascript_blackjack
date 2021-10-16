import { Header, Instruction, Button } from '../components'
import { Wrapper} from '../styles/pageWrapper'

const help = () => {
    return (
        <Wrapper
        bgColor = "radial-gradient(circle, rgba(42,80,25,1) 43%, rgba(25,52,12,1) 87%)"
        >
            <Header 
            title  = "How To Play"
            // text = "Let's Play"
            path = "/"
            >
                <Button
                text="Let's Play"
                color="#3f3f3f"
                bgColor="#fff"
                hoverColor="hsl(0,30%,90%)"
                bottom = "1.25rem"
                left = "50%"
                center = "translateX(-50%)"
                position = "fixed"
                />
            </Header>
            <Instruction  />
        </Wrapper>
    )
}

export default help
