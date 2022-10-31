import { Carousel } from '@mantine/carousel'
import { Center, Image, Stack } from '@mantine/core'




export default function Home() {
  const images = [
    {
      "alt": "asdas1",
      "src": "312063953_543755607753437_6672272973999994885_n"
    },
    {
      "alt": "asdas2",
      "src": "312063953_543755607753437_6672272973999994885_n"
    },
    {
      "alt": "asdas3",
      "src": "312063953_543755607753437_6672272973999994885_n"
    },

  ]
  return (
    <Stack>
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
                  sx={{ maxWidth: 350, maxHeight: '40%' }}
                  src={`${i.src}.jpg`}
                  alt="asxas"
                />
              </Center>
            </Carousel.Slide>)
        })}
      </Carousel>

    </Stack>

  )
}
