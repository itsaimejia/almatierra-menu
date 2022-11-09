/* Importing the components from the mantine and other files. */
import { Container, Box, SimpleGrid } from "@mantine/core";
import { dataCymbals } from '../../../utils/data';
import LayoutMenu from "../../../components/LayoutMenu";
import { CymbalsMenu } from "../../../components/CymbalsMenu";
import { useRouter } from "next/router";


/* A function that returns the layout of the page. */
export default function IdCategorie() {
    const router = useRouter()
    console.log(router.asPath)
    let dataToCymbals: any = []
    let each3: any = []
    {
        dataCymbals.map((d: any, i: number) => {
            each3.push(d)
            if ((i + 1) % 3 === 0) {
                dataToCymbals.push(each3)
                each3 = []
            }
        })
    }
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

                <Container sx={{ maxWidth: '1200px' }}>
                    {/* SimpleGrid Styles */}
                    <SimpleGrid
                        cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
                        {/* Mapping the dataToCymbals array and returning the CymbalsMenu component. */
                            dataToCymbals.map((dt: any, i: number) => <CymbalsMenu key={i} cymbals={dt} image={""} />)}
                    </SimpleGrid>
                </Container>
            </Box>



        </LayoutMenu>
    )
}