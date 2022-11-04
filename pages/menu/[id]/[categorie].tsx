/* Importing the components from the mantine and other files. */
import { Container, Box, SimpleGrid } from "@mantine/core";
import { dataMenus } from "../../../utils/data";
import { CardMenu } from "../../../components/CardMenu";
import LayoutMenu from "../../../components/LayoutMenu";


/* A function that returns the layout of the page. */
export default function IdCategorie() {
    return (
        <LayoutMenu>
             {/* A component from the Mantine library. It is a component that allows you to add a box
            with a padding of xl.  */}
            <Box
                sx={(theme) => ({

                    textAlign: 'center',
                    padding: theme.spacing.xl,
                })}
            >
                <Container>
                    {/* SimpleGrid Styles */}
                    <SimpleGrid
                    cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }, { maxWidth: 755, cols: 1 }, { maxWidth: 980, cols: 2 }]}>
                        {/* Mapping the dataMenus array and returning the CardMenu component. */
                        dataMenus.map((v) => (<CardMenu key={v.title} image={v.image} title={v.title}></CardMenu>))}
                    </SimpleGrid>
                </Container>
            </Box>
        </LayoutMenu>


    );
}