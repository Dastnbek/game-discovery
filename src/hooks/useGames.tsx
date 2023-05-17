import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { Game, FetchGameResposne } from '../types'
import { CanceledError } from "axios"

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')


    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<FetchGameResposne>('/games', { signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError) return
                setError(err)
            })

        return () => controller.abort()
    }, [])

    return {games, error}

}