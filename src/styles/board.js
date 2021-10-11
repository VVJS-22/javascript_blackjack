import styled from 'styled-components/macro'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    section {
        min-height: 500px;
        background: rgb(42,80,25);
        background: radial-gradient(circle, rgba(42,80,25,1) 43%, rgba(25,52,12,1) 87%);
        width: 90%;
        border: 1px solid #000;

        .card-area {
            height: 82%;
            display: flex;
            padding: 0.875rem;
            
            .you {
                border: 1px solid #000;
                flex: 1;
            }

            .dealer {
                border: 1px solid #000;
                flex: 1;
            }
        }

        .button-area {
            height: 18%;

            .inner-button-area {
                height: 100%;
                border-top: 2px solid #000;
                display: flex;
                align-items: center;
                justify-content: center;

                .button-flex {
                    border: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    padding: 1rem;
                }
            }
        }
    }
`
