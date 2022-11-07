import { Container, Box, SimpleGrid } from "@mantine/core";
import { dataCymbals } from '../../../utils/data';
import LayoutMenu from "../../../components/LayoutMenu";
import { CymbalsMenu } from "../../../components/CymbalsMenu";
import { useRouter } from "next/router";



export default function IdCategorie() {
    const router = useRouter()
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
            <Box
                sx={(theme) => ({

                    textAlign: 'center',
                    padding: theme.spacing.xl,
                })}
            >
                <Container >
                    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }, { maxWidth: 755, cols: 1 }, { maxWidth: 980, cols: 2 }]}>
                        {dataToCymbals.map((dt: any, i: number) => <CymbalsMenu key={i} cymbals={dt} image={""} />)}
                    </SimpleGrid>
                </Container>
            </Box>



        </LayoutMenu>
    )
}