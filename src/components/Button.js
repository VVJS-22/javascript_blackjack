import { Wrapper } from '../styles/button'

const Button = ({ text,func, ...restProps }) => {
    // const { text, bgColor } = props
    return (
        <Wrapper 
        {...restProps}
        onClick = {() => func && func()}
        >
            {text}
        </Wrapper>
    )
}

export default Button

