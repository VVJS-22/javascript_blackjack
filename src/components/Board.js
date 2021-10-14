import { Wrapper } from '../styles/board'
import Button from './Button'

const Board = () => {
    return (
        <Wrapper>
            <section>
                <div className="card-area">
                    <div className="you"></div>
                    <div className="dealer"></div>
                </div>
                <div className="button-area">
                    <div className="inner-button-area">
                        <div className="button-flex">
                            <Button 
                            text="Hit"
                            bgColor="#08f"
                            color="#fff"
                            hoverColor="hsl(208,100%,40%)"
                            />
                            <Button
                            text="Stand"
                            bgColor="#ead408"
                            hoverColor="hsl(54,93%,40%)"
                            color="#000"
                            />
                            <Button
                            text="Deal"
                            bgColor="#f30"
                            color="#fff"
                            hoverColor="hsl(12,100%,40%)"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Board
