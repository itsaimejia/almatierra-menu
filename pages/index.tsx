import { Carousel } from '@mantine/carousel'
import { Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'

import React from 'react'

import { useRouter } from 'next/router';
import { CardMenu } from '../components/CardMenu';
import { dataMenus } from '../utils/data';


const images = [
  {
    alt: 'Banner 1',
    src: 'https://firebasestorage.googleapis.com/v0/b/almatierra-7796b.appspot.com/o/banner1.jpg?alt=media&token=1d8dbd78-b04f-4f3d-ae08-344860dd2fa7'
  }, {
    alt: 'Banner 2',
    src: 'https://firebasestorage.googleapis.com/v0/b/almatierra-7796b.appspot.com/o/banner2.jpg?alt=media&token=6b3fb746-2b34-43d0-8a7c-235d4da10e36'
  }

]
export default function Home() {

  return (
    <Stack sx={{ backgroundColor: '#B2945E' }}>
      <Carousel
        sx={{ minWidth: '100%', maxHeight: '40%', backgroundColor: 'black' }}
        slideSize="70%"
        slideGap="md"
        loop
        withIndicators>
        {images.map((i: any) => {

          return (
            <Carousel.Slide key={i.alt}>
              <Center>
                <Image
                  sx={{ maxWidth: 280, maxHeight: '40%' }}
                  src={i.src}
                  alt="asxas"
                />
              </Center>
            </Carousel.Slide>)
        })}
      </Carousel>
      <div>
        <Container >
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 600, cols: 1 }, { maxWidth: 755, cols: 2 }, { maxWidth: 980, cols: 3 }]}>
            {dataMenus.map((v: any, i: number) => (<CardMenu key={i} image={v.image} title={v.title}></CardMenu>))}
          </SimpleGrid>
        </Container>
      </div>
    </Stack>

  )
}

