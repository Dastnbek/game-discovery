export interface Game {
    id: number
    name: string
}

export interface FetchGameResposne {
    count: number
    results: Game[]
}
