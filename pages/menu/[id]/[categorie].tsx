import { Container, Box, SimpleGrid } from "@mantine/core";
import { dataMenus } from "../../../utils/data";
import { CardMenu } from "../../../components/CardMenu";
import LayoutMenu from "../../../components/LayoutMenu";



export default function IdCategorie() {
    return (
        <LayoutMenu>
            <Box
                sx={(theme) => ({

                    textAlign: 'center',
                    padding: theme.spacing.xl,
                })}
            >
                <Container >
                    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }, { maxWidth: 755, cols: 1 }, { maxWidth: 980, cols: 2 }]}>
                        {dataMenus.map((v) => (<CardMenu key={v.title} image={v.image} title={v.title}></CardMenu>))}
                    </SimpleGrid>
                </Container>
            </Box>
        </LayoutMenu>


    );
}