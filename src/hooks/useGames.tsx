import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { Game, FetchGameResposne } from '../types'
import { CanceledError } from "axios"

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [loading, setLoadingState] = useState<boolean>(false)

    useEffect(() => {
        // Read about it
        const controller = new AbortController()
        setLoadingState(true)

        apiClient.get<FetchGameResposne>('/games', { signal: controller.signal})
            .then(res => {
                setGames(res.data.results)
                setLoadingState(false)
            })
            .catch(err => {
                if(err instanceof CanceledError) return
                setError(err)
                setLoadingState(false)
            })

        return () => controller.abort()
    }, [])

    return {games, error, loading}

}