import { Carousel } from '@mantine/carousel'
import { Center, Container, Divider, Image, SimpleGrid, Stack } from '@mantine/core'
import { CardMenu } from '../../components/CardMenu'
import React from 'react'
import { dataMenus } from '../../utils/data'



const images = [
    {
        alt: 'sdfasd',
        src: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/311698054_536496241812707_7152371002135164725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=UP4svn-GWGgAX_zCM7z&tn=ifCx4hRLDSVJP77E&_nc_ht=scontent.ftij2-1.fna&oh=00_AfA8g3TQuZOo1_7BDMylYJYJjANqhzvP7U37MOV-bsPTLQ&oe=63702CB9'
    },
    {
        alt: 'sdfasd1',
        src: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/312481001_536495958479402_6208845249030281969_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=pf_d5DYb5cIAX_RrFXJ&tn=ifCx4hRLDSVJP77E&_nc_ht=scontent.ftij2-1.fna&oh=00_AfCSc85t7i28s2xK-nYq6Y2wOrSiBY1MhA8fYW4EB1b8DA&oe=636F744C'
    },
    {
        alt: 'sdfasd2',
        src: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/312488532_536495465146118_7861647654943942272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=7JjVx3mfuucAX_1Rf96&tn=ifCx4hRLDSVJP77E&_nc_ht=scontent.ftij2-1.fna&oh=00_AfAwVARZBJGnqZRWA_71lv7brFX81fBYHyWt15_EylT1aQ&oe=636ECCA6'
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
