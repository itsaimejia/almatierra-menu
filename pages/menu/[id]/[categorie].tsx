/* Importing the components from the mantine and other files. */
import { Container, Box, SimpleGrid } from "@mantine/core";
import LayoutMenu from "../../../components/LayoutMenu";
import { CymbalsMenu } from "../../../components/CymbalsMenu";
import { useRouter } from "next/router";
import { normilizeRoute } from "../../../static/onStrings";
import { useEffect, useState } from 'react';
import { imageCymbals } from '../../../utils/data';




/* A function that returns the layout of the page. */
export default function IdCategorie() {

    const [dataCymbals, setDataCymbals] = useState([])
    useEffect(() => {
        const fetchCymbals = async () => {
            const res = await fetch(`/api/cymbals`)
            const data = await res.json()
            setDataCymbals(data ?? [])
        }
        fetchCymbals()
    }, [])

    const [dataMenus, setDataMenus] = useState([])
    useEffect(() => {
        const fetchMenus = async () => {
            const res = await fetch(`/api/menus`)
            const data = await res.json()
            setDataMenus(data ?? [])
        }
        fetchMenus()
    }, [])

    const [imageCymbals, setImageCymbals] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch(`/api/images`)
            const data = await res.json()
            const images = data.filter((i: any) => i.section === 'menu')
            setImageCymbals(images ?? [])
        }
        fetchImages()
    }, [])

    const router = useRouter()
    /*Getting the third element of the array.*/
    const currentMenu = router.asPath.split('/')[2]
    const currentCategorie = router.asPath.split('/')[3]
    console.log(imageCymbals)
    let imagesCategorie: any = []
    imageCymbals.forEach((i: any, n: number) => normilizeRoute(i.categorie) == currentCategorie ? imagesCategorie[n] = i.image : "")

    /*Getting all categories from the data file.*/
    const cymbalsPerCatergorie = dataCymbals.filter((c: any) => (normilizeRoute(c.menu) === currentMenu) && (normilizeRoute(c.categorie) === currentCategorie))
    
    let dataToCymbals: any = []
    let each3: any = []
    {
        cymbalsPerCatergorie.map((d: any, i: number) => {
            each3.push(d)
            if (i === cymbalsPerCatergorie.length - 1) {
                dataToCymbals.push(each3)
            } else if ((i + 1) % 3 === 0) {
                dataToCymbals.push(each3)
                each3 = []
            }
        })
    }
    return (
        <LayoutMenu dataMenus={dataMenus}>
            {/* A component from the Mantine library. It is a component that allows you to add a box
            with a padding of xl.  */}
            <Box
                sx={(theme) => ({

                    textAlign: 'center',
                    padding: theme.spacing.xl,
                })}
            >
                <Container sx={{ maxWidth: '1200px' }}>

                    <SimpleGrid
                        cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
                        {/* Mapping the dataToCymbals array and returning the CymbalsMenu component. */

                            dataToCymbals.map((dt: any, i: number) => <CymbalsMenu key={i} cymbals={dt} image={imagesCategorie[i]} />)}

                    </SimpleGrid>
                </Container>
            </Box>



        </LayoutMenu>
    )
}