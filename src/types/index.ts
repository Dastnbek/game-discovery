import { ReactNode } from "react"

export interface Game {
    id: number
    name: string
    background_image?: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

export interface Genre {
    id: number
    name: string
    image_background: string
}
export interface FetchGameResposne {
    count: number
    results: Game[]
}

export interface FetchGenresResponse {
    count: number
    results: Genre[]
}

export interface GameCardProps {
    game: Game
}
export interface Platform {
    id: number
    name: string
    slug: string
}

export interface PlatformIconListProps {
    platforms: Platform[]
}

export interface CriticScoreProps {
    score: number
}

export interface GameCardContainerProps {
    children: ReactNode
}

export interface GenericFetchRespose<T> {
    count: number
    results: T[]
}