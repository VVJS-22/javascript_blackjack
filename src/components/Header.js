import { Wrapper } from '../styles/header'
// import Button from './Button'
import { Link } from 'react-router-dom'

const Header = ({
    title, 
    // text, 
    path,
    top, 
    right, 
    bottom, 
    left, 
    center,
    position,
    children
}) => {
    return (
        <Wrapper
        >
            <h1>{title}</h1>
            <Link to={path}>
                {/* <Button
                text={text}
                color="#fff"
                bgColor="hsl(126,84%,31%)"
                hoverColor="hsl(126,84%,25%)"
                /> */}
                {children}
            </Link>
        </Wrapper>
    )
}

export default Header