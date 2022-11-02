import { Stack, Container, Box, Group, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { normilizeRoute } from "../static/onStrings";
import { dataMenus } from "../utils/data";
import { ButtonMenuOption } from "./ButtonMenuOption";
import { CategoriesScroll } from "./CategoriesScroll";




export default function LayoutMenu({ children }: { children: any }) {
    const router = useRouter()
    const currentMenu = router.asPath.split('/')[2]
    const getCategories = () => dataMenus.find(d => normilizeRoute(d.title) === currentMenu)
    return (
        <Stack sx={{ backgroundColor: '#B2945E' }}>
            <Box sx={{ width: '100%', height: 400, backgroundImage: 'url(https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/274929060_3106982709516504_1243775622008841051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPvTZK8FjU1VK4CCDQoWyQvtsvdV0awrC-2y91XRrCsEm4nbbmHdkzypvKysDNjZvqTAbCymXCjzYD2uNMTxNQ&_nc_ohc=Fr99Qoy75vEAX-6-aA7&tn=M0wZF9Gw0GOBgZ6L&_nc_ht=scontent.ftij2-1.fna&oh=00_AfCZER1DNDqbeYOX5HMkA0uEtRt5B51Xa8sjhUz8HQJ9Ag&oe=6365C5AD)', padding: 0, margin: 0, backgroundSize: 'cover', backgroundPosition: 'center center' }}></Box>

            <Container sx={{ width: '90%' }}>
                <Group position="center" spacing="xl">
                    {dataMenus.map((m) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={false} />)}
                </Group>
            </Container>
            <Divider color={'black'} />
            <CategoriesScroll array={getCategories()?.categories ?? []} />
            {children}
        </Stack>


    );
}