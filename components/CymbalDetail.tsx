import { Box, Group, Stack, Text } from '@mantine/core'
import React from 'react'


interface CymbalDetailProps {
    name: string;
    description: string;
    price: string;
}
export const CymbalDetail = ({ name, description, price }: CymbalDetailProps) => {
    return (
        <Box sx={{ width: '100%', borderBottom: 'solid', borderBottomStyle: 'dotted' }}>
            <Stack sx={{ textAlign: 'left' }}>
            {/* Shows the name of each dish on the menu */}
                <Group position='apart' >
                    <Text weight={700}>
                        {name}
                        
            {/* Shows the price of each dish on the menu */}
                    </Text>
                    <Text weight={700} >
                        ${price}
                    </Text>
                </Group>
                {/* Shows the description of each dish on the menu */}
                <Text sx={{ margin: 0, paddingBottom: '10px' }} size={'sm'} color={'#4D4D4D'}>
                    {description}
                </Text>
            </Stack>
        </Box>
    )
}
