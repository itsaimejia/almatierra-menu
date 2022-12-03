import { Carousel } from '@mantine/carousel'
import { Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { CardMenu } from '../../components/CardMenu';
import { db } from '../../firebase/firebase';


export default function Home({ images }: { images: any }) {


  return (
    //shows a carousel with images of events
    <Stack sx={{ backgroundColor: '#B2945E' }}>

      <div>

      </div>
    </Stack>

  )
}

export async function getServerSideProps() {
  const content = null;

  if (!content) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
}



