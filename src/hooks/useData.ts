import { useState, useEffect } from 'react'
import { CanceledError } from 'axios'
import { GenericFetchRespose } from '../types'
import apiClient from '../services/api-client'

export const useData = <T>(endoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoadingState] = useState<boolean>(false)

    useEffect(() => {
        // Read about it
        const controller = new AbortController()
        setLoadingState(true)
        
        apiClient.get<GenericFetchRespose<T>>(`/${endoint}`, { signal: controller.signal})
            .then(res => {
                setData(res.data.results)
                setLoadingState(false)
            })
            .catch(err => {
                if(err instanceof CanceledError) return
                setError(err)
                setLoadingState(false)
            })

        return () => controller.abort()
    }, [])

    return {data, error, loading}
}