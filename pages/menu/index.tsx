import { Carousel } from '@mantine/carousel'
import { Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { CardMenu } from '../../components/CardMenu';
import { db } from '../../firebase/firebase';

export default function Home({ images }: { images: any }) {
  const [dataMenus, setDataMenus] = useState([])
    useEffect(() => {
        const fetchMenus = async () => {
            let menus: any = []
            const querySnapshot = await getDocs(collection(db, "menus"))
            querySnapshot.forEach((doc) => {
                
            const newObject = {
                banner: doc.data().banner,
                categories: doc.data().categories,
                image: doc.data().image,
                title: doc.data().title
            }
            menus.push(newObject)
        })   
        setDataMenus(menus)
        }
        fetchMenus()
    }, [])
    
  return (
    //shows a carousel with images of events
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
        {/* Shows all the information of the main menu */}
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 600, cols: 1 }, { maxWidth: 755, cols: 2 }, { maxWidth: 980, cols: 3 }]}>
            {dataMenus.map((v: any, i: number) => (<CardMenu key={i} image={v.image} title={v.title} dataMenus={dataMenus}></CardMenu>))}
          </SimpleGrid>
        </Container>
      </div>
    </Stack>

  )
}

export async function getStaticProps() {
  let images: any = []
    const querySnapshot = await getDocs(collection(db, "images"))
    querySnapshot.forEach((doc) => {
        
    const newObject = {
        alt: doc.data().alt,
        categorie: doc.data().categorie,
        menu: doc.data().menu,
        section: doc.data().section,
        src: doc.data().src
    }
    images.push(newObject)
})   
  let imgs = images.filter((e: any) => e !== null)
  let banners = imgs.filter((e: any) => e.section === 'banner')
  return {
    props: {
      images: banners
    },
  }
}