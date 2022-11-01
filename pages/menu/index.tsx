import { Carousel } from '@mantine/carousel'
import { Center, Container, Divider, Image, SimpleGrid, Stack } from '@mantine/core'
import { CardMenu } from '../../components/CardMenu'
import React from 'react'

const mockdata = [
    {
        title: 'Comida',
        image:
            'https://gh-onboarding.s3.amazonaws.com/almatierra-restaurant-noche_5cdc0a98f5.png',

    },
    {
        title: 'Desayunos',
        image:
            'https://gh-onboarding.s3.amazonaws.com/medium_ojo-azul-web-0004-img-0971_9be7a64408.jpg',

    },
    {
        title: 'Bebidas sin alcohol',
        image:
            'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/274871680_3106982496183192_5762296052679277238_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGbHo-j1dxx3T9m6oSv_B8LDBLpLDL2pXEMEuksMvalccC7mwm5MInc5jkGTvMO-n99MVhQKDLCL9BxxbAURtVe&_nc_ohc=7aNWFdge7uwAX-t4caa&_nc_ht=scontent.ftij2-1.fna&oh=00_AfD_xfXAiAmg0KNJrUfAJTLfKmuAIOHPdM5o1SdMvEMX_A&oe=636445F5'
    },
    {
        title: 'Cafeteria',
        image:
            'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/278501684_3139129839635124_2699534012152403975_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEtFgXNZwYoGqfhsDG6MUcAajHcfE7MP31qMdx8Tsw_fdCzz8ihGxZO-UqSqNrUuM6HhQ5onuoSlQ-adVu71f76&_nc_ohc=HiPvIwaMODgAX9yi2fc&_nc_ht=scontent.ftij2-1.fna&oh=00_AfA2Y-LFdsV1TqblCp1Cwm-EKJcXqQg1OkmCKx9IzfgZ2Q&oe=6365A461',

    },
    {
        title: 'Cocteleria/Licores',
        image:
            'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/274938190_3106981999516575_5659830263868263256_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEAWqPRABCO2-kB7CDokbo2fPTTWd16bn989NNZ3Xpuf3gJyV-GotG4Bjn-K8H2S19YusSC_JbtCPudRVWKOVGa&_nc_ohc=z0p-krudPgkAX8dOe16&_nc_ht=scontent.ftij2-1.fna&oh=00_AfD2GO2kBcH7QAOVERaQ8GpmYmhXOAXq-kTr4Ut-7s754Q&oe=63652E5C',

    },
    {
        title: 'Vino',
        image:
            'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/305842330_498974802231518_914079038529931362_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEgTskmgKGlS7MP5gbofhOe9GaF1Qm_C_v0ZoXVCb8L-6503vD-w_K8-6TbX_f73iG_46Aj5cqUX3TT2f18zALE&_nc_ohc=7Y4SraZHNicAX_DcDBn&_nc_ht=scontent.ftij2-1.fna&oh=00_AfB6YLrf6CfJkM8MMCi0oLdBbI1TtYrYmTtjwxxOdzR5kg&oe=636572AC',

    },
    {
        title: 'Vino2',
        image:
            'https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/305842330_498974802231518_914079038529931362_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEgTskmgKGlS7MP5gbofhOe9GaF1Qm_C_v0ZoXVCb8L-6503vD-w_K8-6TbX_f73iG_46Aj5cqUX3TT2f18zALE&_nc_ohc=7Y4SraZHNicAX_DcDBn&_nc_ht=scontent.ftij2-1.fna&oh=00_AfB6YLrf6CfJkM8MMCi0oLdBbI1TtYrYmTtjwxxOdzR5kg&oe=636572AC',

    },
]
const images = [
    {
        alt: 'sdfasd',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/311698054_536496241812707_7152371002135164725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeErG_laiZCuL1spp1c6aDLHE6-oo9Zp7I0Tr6ij1mnsjZS55GpEEEr1lf4DnyslmfY4czMYj31xmiZnJcJadcs0&_nc_ohc=T1r5cAAIRqUAX-8y_Tp&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfDXbU5PcjmxEHwAJahCuVHbpQC15VcMcfnLXDQPQqO0pw&oe=63664979'
    },
    {
        alt: 'sdfasd1',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/312481001_536495958479402_6208845249030281969_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwSRs9oeWz7z-E7avXKoPrnrjWA_yfgHeeuNYD_J-Ad6feUmgiBY9a9wOE7xzD7dLl_ohUQToHT5aLgHXhknAa&_nc_ohc=ULvF6lXDOBgAX8odGyU&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfA6KM652BqMLbcmZj9b6ZTlrgif9e5CzIpOiGPvMeSnSg&oe=6365910C'
    },
    {
        alt: 'sdfasd2',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/312488532_536495465146118_7861647654943942272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHv9oUXON3smRC0PB0s5JDhQtr8Dfyc90hC2vwN_Jz3SN7xmU9axYBvREDBnwG2xgaWFeqqUnQEgZ0a_-CyEfDr&_nc_ohc=e30aKWJ3MDkAX_LpzyL&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfDyClLDA2AaVIlwIQdgb9vFpOxXbmT_f-PnF-cupWJCAg&oe=6364E966'
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
                    console.log(i)
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
                        {mockdata.map((v) => (<CardMenu key={v.title} image={v.image} title={v.title}></CardMenu>))}
                    </SimpleGrid>
                </Container>
            </div>
        </Stack>

    )
}
