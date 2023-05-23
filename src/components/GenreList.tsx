import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import { useData } from "../hooks/useData"
import { Genre, GenreListProps } from "../types"
import { getCroppedImageUrl } from "../services/image-url"

export const GenreList = ({ onSelectGenre }: GenreListProps) => {
    const { data, error, loading } = useData<Genre>('genres')

    if(error) return null
    if(loading) return <Spinner />
    return (
        <List>
            { data.map(genre => (
            <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Button fontSize="lg" variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>)
            )}
        </List>
    )
}