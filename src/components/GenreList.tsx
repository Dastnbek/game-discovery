import { useData } from "../hooks/useData"
import { Genre } from "../types"

export const GenreList = () => {
    const { data, error, loading } = useData<Genre>('genres')
    return (
        <ul>
            { data.map(genre => <li key={genre.id}>{genre.name}</li>) }
        </ul>
    )
}