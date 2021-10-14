import { Wrapper } from '../styles/header'
import Button from './Button'

const Header = () => {
    return (
        <Wrapper>
            <h1>BlackJack</h1>
            <Button
            text="Help?"
            color="#fff"
            bgColor="hsl(126,84%,31%)"
            hoverColor="hsl(126,84%,25%)"
            />
        </Wrapper>
    )
}

export default Header