export interface Game {
    id: number
    name: string
    background_image?: string
}

export interface FetchGameResposne {
    count: number
    results: Game[]
}

export interface GameCardProps {
    game: Game
}
