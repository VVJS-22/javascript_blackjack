import { Wrapper } from '../styles/header'
import Button from './Button'

const Header = () => {
    return (
        <Wrapper>
            <h1>BlackJack</h1>
            <Button
            text="Help?"
            color="#fff"
            bgColor="#797979"
            />
        </Wrapper>
    )
}

export default Header