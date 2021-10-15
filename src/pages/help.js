import { Header, Instruction } from '../components'
import { Wrapper} from '../styles/pageWrapper'

const help = () => {
    return (
        <Wrapper
        bgColor = "radial-gradient(circle, rgba(42,80,25,1) 43%, rgba(25,52,12,1) 87%)"
        >
            <Header 
            title  = "How To Play"
            text = "Let's Play"
            path = "/"
            bottom = "1.25rem"
            left = "50%"
            style = {
                {
                    transform: `translateX(-50%)`
                }
            }
            />
            <Instruction  />
        </Wrapper>
    )
}

export default help
