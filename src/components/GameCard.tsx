import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { GameCardProps } from "../types"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"
import { getCroppedImageUrl } from "../services/image-url"

export const GameCard = ({ game }: GameCardProps) => {
    const { name, parent_platforms, metacritic, background_image } = game
    const image_url = getCroppedImageUrl(background_image)

    return (
        <Card>
            <Image src={image_url} />
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