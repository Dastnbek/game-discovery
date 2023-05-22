export interface Game {
    id: number
    name: string
    background_image?: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}
export interface FetchGameResposne {
    count: number
    results: Game[]
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
