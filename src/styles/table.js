import styled from 'styled-components/macro'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    table {
        border: 1px solid #fff;
        border-collapse: collapse;
        width: 90%;
        margin-bottom: 2rem;
        overflow: auto;
        th,td {
            border: 1px solid #fff;
            text-align: center;
            padding: 0.75rem 1rem;
        }
    }
`