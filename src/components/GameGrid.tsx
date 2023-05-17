import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Game {
    id: number
    name: string
}

interface FetchGameResposne {
    count: number
    results: Game[]
}



export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    
    useEffect(() => {
        apiClient.get<FetchGameResposne>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err))
    }, [])

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game?.id}>
                    {game?.name}
                 </li>)}
            </ul>
        </>
        
    )
}