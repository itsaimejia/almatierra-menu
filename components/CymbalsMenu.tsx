import { Group, createStyles, Stack, Image, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { normilizeRoute } from '../static/onStrings';
import { CymbalDetail } from './CymbalDetail';
import { imageCymbals } from '../utils/data'

const useStyles = createStyles((theme, _params, getRef) => {
    const image = getRef('image')
    return {
        image: {
            ref: image,

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            transition: 'transform 500ms ease',
            backgroundPosition: 'center',

        },

    }
})

interface CymbalMenuProps {
    cymbals: Array<any>
    image: string;
    menus: string
}
export function CymbalsMenu({ cymbals, image, menus }: CymbalMenuProps) {
    const showImage = useMediaQuery('(min-width: 600px)');
    const { classes, theme } = useStyles();

    const router = useRouter()
    /*Getting the third element of the array.*/
    const findCategories = router.asPath.split('/')[3]
    //const findMenus = router.asPath.split('/')[2]

    /*Getting all categories from the data file.*/
    const categories = cymbals.map( (c: any) => normilizeRoute(c.categorie))
    //const menusData = cymbals.map( (c: any) => normilizeRoute(c.menu))
    //let allCategoriesData: any
    //const categoriesData = cymbals.map ( (c: any) => c)
    let categorieSelected : any 
    /*Assigning the categorie  in categorieSelected.*/
    categories.forEach( (cat) => cat == findCategories ? categorieSelected = cat : "")
    //cymbals.forEach( (cat) => normilizeRoute(cat.menu) ==  findMenus ? normilizeRoute(cat.categorie) == findCategories ? console.log(cat.name) : "" : "")
    //console.log(categoriesData)



    return <>{
        showImage ? categorieSelected == findCategories ? (<Grid >

            <Grid.Col span={4}><Image height={'260px'} src={'https://firebasestorage.googleapis.com/v0/b/almatierra-7796b.appspot.com/o/entrada1.jpg?alt=media&token=4e3cdfa1-7441-4856-a269-b773cf8400dd'} alt={'sadas'}></Image></Grid.Col>
            <Grid.Col span={8}>
                <Stack>
                    {/* Se separa por las categorias pero esto se debe poner afuera para que no genere imagenes sin informacion  {cymbals.find( (d: any, i: number) => d.categorie == normilizeRoute(findCategories) ?  (<CymbalDetail key={i} name={d.name} description={d.description} price={d.price} />)  : console.log(""))} */}
                    {cymbals.map((c: any, i: number) => normilizeRoute(c.categorie) == categorieSelected ? (<CymbalDetail key={i} name={c.name} description={c.description} price={c.price} />) : "")} 
                </Stack>
            </Grid.Col>

        </Grid>) : ""  : (
            <Stack>
                {cymbals.map((c: any, i: number) => normilizeRoute(c.categorie) == findCategories ? (<CymbalDetail key={i} name={c.name} description={c.description} price={c.price} />) : "")} 
            </Stack>
        )
    }</>
}