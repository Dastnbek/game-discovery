import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import { useData } from "../hooks/useData"
import { Genre } from "../types"
import { getCroppedImageUrl } from "../services/image-url"

export const GenreList = () => {
    const { data, error, loading } = useData<Genre>('genres')

    if(error) return null
    if(loading) return <Spinner />
    return (
        <List>
            { data.map(genre => (
            <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Text fontSize="lg">{genre.name}</Text>
                </HStack>
            </ListItem>)
            )}
        </List>
    )
}