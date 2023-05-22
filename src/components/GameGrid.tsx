import { SimpleGrid, Text } from "@chakra-ui/react"
import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"
import { GameCardContainer } from "./GameCardContainer"
import { useData } from "../hooks/useData"
import { Game } from "../types"

export const GameGrid = () => {
    const { data, error, loading } =  useData<Game>('games')
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                { loading && skeletons.map(skeleton => (
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                )) }
                {data.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}