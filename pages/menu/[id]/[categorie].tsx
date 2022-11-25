/* Importing the components from the mantine and other files. */
import { Container, Box, SimpleGrid } from "@mantine/core";
import LayoutMenu from "../../../components/LayoutMenu";
import { CymbalsMenu } from "../../../components/CymbalsMenu";
import { useRouter } from "next/router";
import { normilizeRoute } from "../../../static/onStrings";
import { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";




/* A function that returns the layout of the page. */
export default function IdCategorie() {

    const [dataCymbals, setDataCymbals] = useState([])
    useEffect(() => {
        const fetchCymbals = async () => {
            const querySnapshot = await getDocs(collection(db, "cymbals"))
            let cymbals: any = []
            querySnapshot.forEach((doc) => {
                const newObject = {
                    id: doc.id,
                    menu: doc.data().menu,
                    categorie: doc.data().categorie,
                    name: doc.data().name,
                    description: doc.data().description,
                    price: doc.data().price,
                    status: doc.data().status
                }
                cymbals.push(newObject)
            })
            let activeCymbals = cymbals.filter((c: any) => c.status === 'active')
            setDataCymbals(activeCymbals)
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
    const fetchImage = async () => {
        let images: any = []
        const querySnapshot = await getDocs(collection(db, "images"))
        querySnapshot.forEach((doc) => {
            
        const newObject = {
            alt: doc.data().alt,
            categorie: doc.data().categorie,
            menu: doc.data().menu,
            section: doc.data().section,
            src: doc.data().src
        }
        images.push(newObject)
    })   
    setImageCymbals(images)
    }
    fetchImage()

    const router = useRouter()

    const currentMenu = router.asPath.split('/')[2]
    const currentCategorie = router.asPath.split('/')[3]
    let imagesCategorie: any = []
    imageCymbals.forEach((i: any, n: number) => normilizeRoute(i.categorie) == currentCategorie ? imagesCategorie[n] = i.src : "")
    imagesCategorie = imagesCategorie.filter((e: any) => e !== null)
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

            <Box
                sx={(theme) => ({

                    textAlign: 'center',
                    padding: theme.spacing.xl,
                })}
            >
                <Container sx={{ maxWidth: '1200px' }}>

                    <SimpleGrid
                        cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
                        {
                            dataToCymbals.map((dt: any, i: number) => <CymbalsMenu key={i} cymbals={dt} image={imagesCategorie[i]} />)}

                    </SimpleGrid>
                </Container>
            </Box>



        </LayoutMenu>
    )
}