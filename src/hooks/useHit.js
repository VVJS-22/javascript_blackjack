import { useDataContext } from "../contexts/GameDB"

const useHit = () => {
    const {
        wins
    } = useDataContext()
    const blackjackHit = async () => {
        console.log(wins)
    }

    return [blackjackHit]
}

export default useHit
