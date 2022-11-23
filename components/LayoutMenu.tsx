import { Stack, Container, Box, Group, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { normilizeRoute } from "../static/onStrings";
import { ButtonMenuOption } from "./ButtonMenuOption";
import { CategoriesScroll } from "./CategoriesScroll";


export default function LayoutMenu({ children, dataMenus }: { children: any, dataMenus: Array<any> }) {

    /* A hook that is getting the current route. */
    const router = useRouter()

    const currentMenu = router.asPath.split('/')[2]

    //console.log(currentMenu)
    
    const getDataMenu = () => dataMenus.find((d: any) => normilizeRoute(d.title) === currentMenu)
    return (
        <Stack sx={{ backgroundColor: '#B2945E' }}>
            <Box sx={{ width: '100%', height: 400, backgroundImage: `url(${getDataMenu()?.banner})`, padding: 0, margin: 0, backgroundSize: 'cover', backgroundPosition: 'center center' }}></Box>
            <Container sx={{ width: '90%' }}>
                <Group position="center" spacing="xl">
                    {
                        dataMenus.map((m: any) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={false} dataMenus={dataMenus} />)}
                </Group>
            </Container>
            {/* A component that is creating a divider and have a black color. */}
            <Divider color="dark" />
 
            <CategoriesScroll array={getDataMenu()?.categories ?? []} />
            {/* Shows all the data of the dishes on the menu. */}
            {children}
        </Stack>


    );
}