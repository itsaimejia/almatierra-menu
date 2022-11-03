import { Stack, Container, Center, Box, Group, Button, Divider, ScrollArea, Paper, SimpleGrid } from "@mantine/core";
import { Tabs } from '@mantine/core';
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonCategorieOption } from "../../../components/ButtonCategorieOption";
import { ButtonMenuOption } from "../../../components/ButtonMenuOption";
import { normilizeRoute } from "../../../static/onStrings";
import { dataCymbals, dataMenus, imageCymbals } from "../../../utils/data";
import { CardMenu } from "../../../components/CardMenu";
import { CategoriesScroll } from "../../../components/CategoriesScroll";
import { CymbalsMenu } from "../../../components/CymbalsMenu";



export default function IdCategorie() {
    const router = useRouter()
    const currentMenu = router.asPath.split('/')[2]

    const getCategories = () => dataMenus.find(d => normilizeRoute(d.title) === currentMenu)

    return (

        <Stack sx={{ backgroundColor: '#B2945E' }}>
            <Box sx={{ width: '100%', height: 400, backgroundImage: 'url(https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/274929060_3106982709516504_1243775622008841051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPvTZK8FjU1VK4CCDQoWyQvtsvdV0awrC-2y91XRrCsEm4nbbmHdkzypvKysDNjZvqTAbCymXCjzYD2uNMTxNQ&_nc_ohc=Fr99Qoy75vEAX-6-aA7&tn=M0wZF9Gw0GOBgZ6L&_nc_ht=scontent.ftij2-1.fna&oh=00_AfCZER1DNDqbeYOX5HMkA0uEtRt5B51Xa8sjhUz8HQJ9Ag&oe=6365C5AD)', padding: 0, margin: 0, backgroundSize: 'cover' }}></Box>

            <Container sx={{ width: '90%' }}>
                <Group position="center" spacing="xl">
                    {dataMenus.map((m) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={normilizeRoute(m.title) === currentMenu} />)}
                </Group>
            </Container>
            <Divider color={'black'} />



            <CategoriesScroll array={getCategories()?.categories ?? []} />


           <Center>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>  
                 
                    
                    {dataCymbals.map((s: any) => (<CymbalsMenu key={s.name} description={s.description} name={s.name} price={s.price} image={s.image}></CymbalsMenu>))}
                    
                </SimpleGrid>
          </Center>
        </Stack>


    );
}