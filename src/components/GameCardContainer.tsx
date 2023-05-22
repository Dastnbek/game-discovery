import { Box } from "@chakra-ui/react"
import { GameCardContainerProps } from '../types'

export const GameCardContainer = ({ children }: GameCardContainerProps) => {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}