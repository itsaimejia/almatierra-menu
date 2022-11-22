import { Carousel } from '@mantine/carousel'
import { Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { CardMenu } from '../components/CardMenu';

export default function Home({ images }: { images: any }) {
  const [dataMenus, setDataMenus] = useState([])
  useEffect(() => {
    const fetchMenus = async () => {
      const res = await fetch(`/api/menus`)
      const data = await res.json()
      const titleMenusList = data.map((d: any) => d.title)
      setDataMenus(data ?? [])
    }
    fetchMenus()
  }, [])
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
            {dataMenus.map((v: any, i: number) => (<CardMenu key={i} image={v.image} title={v.title} dataMenus={dataMenus}></CardMenu>))}
          </SimpleGrid>
        </Container>
      </div>
    </Stack>

  )
}

export async function getStaticProps() {
  const url = 'https://almatierra-7796b-default-rtdb.firebaseio.com/images.json'
  const res = await fetch(url)
  let json = await res.json()
  let imgs = json.filter((e: any) => e !== null)
  let images = imgs.filter((e: any) => e.section === 'banner')
  return {
    props: {
      images
    },
  }
}



