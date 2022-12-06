import { Group, createStyles, Stack, Image, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { normilizeRoute } from '../static/onStrings';
import { CymbalDetail } from './CymbalDetail';
import { imageCymbals } from '../utils/data'

interface CymbalMenuProps {
    cymbals: Array<any>
    image: string;

}
export function CymbalsMenu({ cymbals, image }: CymbalMenuProps) {
    const showImage = useMediaQuery('(min-width: 600px)');

    return <>{
        showImage ? (<Grid sx={{ paddingBottom: '15px' }}>

            <Grid.Col span={5}><Image height={'270px'} src={image} alt={'sadas'}></Image></Grid.Col>
            <Grid.Col span={7}>
                <Stack>
                    {/* Se separa por las categorias pero esto se debe poner afuera para que no genere imagenes sin informacion  {cymbals.find( (d: any, i: number) => d.categorie == normilizeRoute(findCategories) ?  (<CymbalDetail key={i} name={d.name} description={d.description} price={d.price} />)  : console.log(""))} */}
                    {cymbals.map((c: any, i: number) => (<CymbalDetail key={i} name={c.name} description={c.description} price={c.price} />))}

                </Stack>
            </Grid.Col>

        </Grid>) : (
            <Stack>
                <Image height={'270px'} src={image} alt={'sadas'}></Image>
                {cymbals.map((c: any, i: number) => (<CymbalDetail key={i} name={c.name} description={c.description} price={c.price} />))}
            </Stack>
        )
    }</>
}