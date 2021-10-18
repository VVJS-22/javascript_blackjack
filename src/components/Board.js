import { useState } from 'react'
import { Wrapper } from '../styles/board'

const Board = ({children}) => {
    const [points] = useState({
        you: 0,
        dealer: 0
    })
    return (
        <Wrapper>
            <section>
                <div className="card-area">
                    <div className="you">
                        <h2>You: {points.you}</h2>
                    </div>
                    <div className="dealer">
                        <h2>Dealer: {points.dealer}</h2>
                    </div>
                </div>
                <div className="button-area">
                    <div className="inner-button-area">
                        <div className="button-flex">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Board
