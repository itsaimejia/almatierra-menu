import { Group, createStyles, Stack, Image, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CymbalDetail } from './CymbalDetail';

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
}
export function CymbalsMenu({ cymbals, image }: CymbalMenuProps) {
    const showImage = useMediaQuery('(min-width: 600px)');
    const { classes, theme } = useStyles();


    return <>{
        showImage ? (<Grid >

            <Grid.Col span={4}><Image height={'260px'} src={'https://firebasestorage.googleapis.com/v0/b/almatierra-7796b.appspot.com/o/entrada1.jpg?alt=media&token=4e3cdfa1-7441-4856-a269-b773cf8400dd'} alt={'sadas'}></Image></Grid.Col>
            <Grid.Col span={8}>
                <Stack>
                    {cymbals.map((c: any) => (<CymbalDetail key={c.name} name={c.name} description={c.description} price={c.price} />))}
                </Stack>
            </Grid.Col>

        </Grid>) : (
            <Stack>
                {cymbals.map((c: any) => (<CymbalDetail key={c.name} name={c.name} description={c.description} price={c.price} />))}
            </Stack>
        )
    }</>
}