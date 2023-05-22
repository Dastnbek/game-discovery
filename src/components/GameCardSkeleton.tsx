import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

export const GameCardSkeleton = () => {
    return (
        <Card width='300px' borderRadius={10}>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}