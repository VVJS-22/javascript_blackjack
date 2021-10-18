import { Wrapper } from '../styles/table'

const Table = () => {
    return (
        <Wrapper>
            <table>
                <tbody>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Table
