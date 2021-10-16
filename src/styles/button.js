import styled from 'styled-components/macro'

export const Wrapper = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
    background: ${({bgColor}) => (bgColor)};
    color: ${({color}) => (color)};
    position: ${({position}) => (position)};
    top: ${({top}) => (top)};
    right: ${({right}) => (right)};
    bottom: ${({bottom}) => (bottom)};
    left: ${({left}) => (left)};
    transform: ${({center}) => (center)};


    &:not(:first-of-type) {
        margin-left: 1rem;
    }

    &:hover {
        background:  ${({hoverColor}) => (hoverColor)};
    }
`