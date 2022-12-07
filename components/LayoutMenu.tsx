import { Stack, Container, Box, Group, Divider, createStyles, Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import { title } from "process";
import { useState } from "react";
import { normilizeRoute } from "../static/onStrings";
import { ButtonMenuOption } from "./ButtonMenuOption";
import { CategoriesScroll } from "./CategoriesScroll";
import { MenuOptionsDrawer } from "./MenuOptionsDrawer";

export default function LayoutMenu({ children, dataMenus }: { children: any, dataMenus: Array<any> }) {
    const isNotMobile = useMediaQuery('(min-width: 600px)');
    const [openedBurger, setOpenedBurger] = useState(false)

    /* A hook that is getting the current route. */
    const router = useRouter()

    const currentMenu = router.asPath.split('/')[2]

    //console.log(currentMenu)

    const getDataMenu = () => dataMenus.find((d: any) => normilizeRoute(d.title) === currentMenu)
    return (
        <Stack sx={{ backgroundColor: '#f5f5dc' }}>
            {isNotMobile ? null : (<Burger
                color={openedBurger ? 'black' : 'white'}
                opened={openedBurger}
                onClick={() => setOpenedBurger((o: any) => !o)}
                sx={{
                    [`@media only screen and (max-width: 600px)`]: {
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        zIndex: 3
                    },
                }}
            />)}
            <Box sx={{
                width: '100%',
                height: isNotMobile ? 350 : 100,
                backgroundImage: `url(${getDataMenu()?.banner})`,
                padding: 0, margin: 0, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                [`@media only screen and (max-width: 600px)`]: {
                    position: 'fixed',
                    top: 0,
                    zIndex: 1
                },
            }}></Box>
            {isNotMobile ? (<Container sx={{ width: '90%' }}>
                <Group position="center" spacing="xl">
                    {
                        dataMenus.map((m: any) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={false} dataMenus={dataMenus} onClose={setOpenedBurger} />)}
                </Group>
            </Container>) : null}
            {/* A component that is creating a divider and have a black color. */}
            <Divider color="dark" />

            <CategoriesScroll array={getDataMenu()?.categories ?? []} />
            <MenuOptionsDrawer opened={openedBurger} onClose={setOpenedBurger} dataMenus={dataMenus} />
            {/* Shows all the data of the dishes on the menu. */}
            {children}
        </Stack>


    );
}