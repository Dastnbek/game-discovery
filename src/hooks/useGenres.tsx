import { useState, useEffect } from 'react'
import { CanceledError } from "axios"
import { FetchGenresResponse, Genre } from '../types'
import apiClient from '../services/api-client'

export const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [loading, setLoadingState] = useState<boolean>(false)

    useEffect(() => {
        // Read about it
        const controller = new AbortController()
        setLoadingState(true)

        apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal})
            .then(res => {
                setGenres(res.data.results)
                setLoadingState(false)
            })
            .catch(err => {
                if(err instanceof CanceledError) return
                setError(err)
                setLoadingState(false)
            })

        return () => controller.abort()
    }, [])

    return {genres, error, loading}
}