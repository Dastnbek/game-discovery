import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { GameCardProps } from "../types"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"

export const GameCard = ({ game }: GameCardProps) => {
    const { name, parent_platforms, metacritic, background_image } = game
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={background_image} />
            <CardBody>
                <Heading fontSize="2xl">{name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={parent_platforms.map(p => p.platform)} />
                    <CriticScore score={metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}