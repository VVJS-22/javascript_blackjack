import { Wrapper } from '../styles/button'

const Button = ({ text, ...restProps}) => {
    // const { text, bgColor } = props
    return (
        <Wrapper {...restProps}>{text}</Wrapper>
    )
}

export default Button

