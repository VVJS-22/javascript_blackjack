import styled from 'styled-components/macro'

export const Wrapper = styled.button`
    padding: 0.5rem 1rem;
    background: ${({bgColor}) => (bgColor)};
    color: ${({color}) => (color)};
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;

    &:not(:first-of-type) {
        margin-left: 1rem;
    }

    &:hover {
        background:  ${({hoverColor}) => (hoverColor)};
    }
`