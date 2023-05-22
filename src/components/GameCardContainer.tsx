import { Box } from "@chakra-ui/react"
import { GameCardContainerProps } from '../types'

export const GameCardContainer = ({ children }: GameCardContainerProps) => {
    return (
        <Box width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}