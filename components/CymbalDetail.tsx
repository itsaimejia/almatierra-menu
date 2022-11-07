import { Box, Group, Stack, Text } from '@mantine/core'
import React from 'react'


interface CymbalDetailProps {
    name: string;
    description: string;
    price: string;
}
export const CymbalDetail = ({ name, description, price }: CymbalDetailProps) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack >
                <Group position='apart' grow>
                    <Text weight={700}>
                        {name}
                    </Text>
                    <Text weight={700} >
                        {price}

                    </Text>
                </Group>
                <Text sx={{ margin: 0 }} size={'sm'} color={'#4D4D4D'}>
                    {description}
                </Text>

            </Stack>
        </Box>
    )
}
