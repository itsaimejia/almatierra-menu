import { Container, Box, SimpleGrid, Button } from "@mantine/core";
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
                    <Button ></Button>
                </Container>
            </Box>
        </LayoutMenu>


    );
}