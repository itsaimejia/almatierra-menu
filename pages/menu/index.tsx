import { Carousel } from '@mantine/carousel'
import { Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'
import { CardMenu } from '../../components/CardMenu'
import React from 'react'
import { dataMenus } from '../../utils/data'


const images = [
    {
        alt: 'sdfasd',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/314558181_549765833819081_6417361056919649367_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFlY3f7F7YdkRPEXjA5gkuyULOeXAxHq4tQs55cDEeri7wLAc25OEfdmuaPgElfMhqGOgD4IbVNn5NTG-AJUqk-&_nc_ohc=IaJMWumN2GsAX9XMebm&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfBBJv4gY-j90EOXhMhfFSWzuIIo1wMJ5uwe0MzdqLxWzg&oe=636CBA48'
    },

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
                        {dataMenus.map((v) => (<CardMenu key={v.title} image={v.image} title={v.title}></CardMenu>))}
                    </SimpleGrid>
                </Container>
            </div>
        </Stack>

    )
}

