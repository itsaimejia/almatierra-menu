import { Group,  Stack , Text } from '@mantine/core'
import React from 'react'


interface MenuDetailProps{

    name: string;
    description: string;
    price: string;
  
}
export const CymbalDetail = ({name,description,price}:MenuDetailProps) => {
  return (
      <Stack >
          <Group position='apart'>
              <Text sx={{ fontSize: '2rem' }} weight={700}>
                  {name}
              </Text>
              <Text sx={{ fontSize: '2rem' }} weight={700} >
                  {price}

              </Text>
          </Group>
          <Text size={'sm'} color={'#4D4D4D'}>
              {description}
          </Text>

      </Stack>
  )
}
