/* Importing the components from the mantine/core library and others files. */
import { Stack, Container, Box, Group, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { normilizeRoute } from "../static/onStrings";
import { dataMenus } from "../utils/data";
import { ButtonMenuOption } from "./ButtonMenuOption";
import { CategoriesScroll } from "./CategoriesScroll";


/* A function that is exporting the LayoutMenu component and it has a children parameter. */
export default function LayoutMenu({ children }: { children: any }) {
    /* A hook that is getting the current route. */
    const router = useRouter()
    /*Getting the second element of the array.*/
    const currentMenu = router.asPath.split('/')[2]

    //console.log(currentMenu)
    /**
     * It returns the first element of the dataMenus array that has a title property equal to the
     * currentMenu variable.
     */
    const getDataMenu = () => dataMenus.find(d => normilizeRoute(d.title) === currentMenu)
    return (
        <Stack sx={{ backgroundColor: '#B2945E' }}>
            <Box sx={{ width: '100%', height: 400, backgroundImage: `url(${getDataMenu()?.banner})`, padding: 0, margin: 0, backgroundSize: 'cover', backgroundPosition: 'center center' }}></Box>
            <Container sx={{ width: '90%' }}>
                <Group position="center" spacing="xl">
                    {/* Mapping the dataMenus array and returning a ButtonMenuOption component for each
                    element of the array. */
                        dataMenus.map((m) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={false} />)}
                </Group>
            </Container>
            {/* A component that is creating a divider and have a black color. */}
            <Divider color="dark" />
            {/* Getting the categories property of the object that is returned by the
            getDataMenu function.  */}
            <CategoriesScroll array={getDataMenu()?.categories ?? []} />
            {/* A prop that is passed to the LayoutMenu component. */}
            {children}
        </Stack>


    );
}