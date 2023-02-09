import { Carousel } from '@mantine/carousel'
import { Center, Container, Flex, Image, SimpleGrid, Skeleton, Stack } from '@mantine/core'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { CardMenu } from '../components/CardMenu';
import { db } from '../firebase/firebase';

export default function Home({ images }: { images: any }) {
  console.log
  const [dataMenus, setDataMenus] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      let menus: any = []
      const querySnapshot = await getDocs(collection(db, "menus"))
      querySnapshot.forEach((doc:any) => {
        const newObject = {
          banner: doc.data().banner,
          categories: doc.data().categorie,
          image: doc.data().mainImage,
          title: doc.data().title,
          index: doc.data().index
        }
        menus.push(newObject)
      })
      const sortMenus = menus.sort((a: any, b: any) => parseInt(a.index) - parseInt(b.index))
      setDataMenus(sortMenus)
    }
    fetchMenus()
  }, [])

  return (
    //shows a carousel with images of events
    <Stack sx={{ backgroundColor: '#f5f5dc' }}>
      <Carousel
        sx={{ minWidth: '100%', backgroundColor: 'black' }}
        slideSize="70%"
        slideGap="md"
        loop
        withIndicators>
        {images.map((i: any) => {
          return (
            <Carousel.Slide key={i.alt}>
              <Flex
                mih={50}
                gap="xs"
                justify="center"
              >
                < Image
                  width={300}
                  src={i.src}
                  alt={i.alt}
                />
              </Flex>
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

export async function getServerSideProps() {
  let images: any = []
  const querySnapshot = await getDocs(collection(db, "images"))
  querySnapshot.forEach((doc:any) => {

    const newObject = {
      alt: doc.data().alt,
      categorie: doc.data().categorie,
      menu: doc.data().menu,
      section: doc.data().section,
      src: doc.data().src
    }
    images.push(newObject)
  })
  let banners = images.filter((e: any) => e.section === 'banner')
  return {
    props: {
      images: banners
    },
  }
}



