import { Group, createStyles, Stack, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CymbalDetail } from './CymbalDetail';
interface CymbalMenuProps {
    cymbals: Array<any>
    image: string;
}
export function CymbalsMenu({ cymbals, image }: CymbalMenuProps) {
    const showImage = useMediaQuery('(min-width: 600px)');

    return <>{
        showImage ? (<Group grow>

            <Box sx={{
                borderStyle: 'dotted',
                height: '100%',
                borderColor: 'red',
            }}></Box>
            <Stack>
                {cymbals.map((c: any) => (<CymbalDetail key={c.name} name={c.name} description={c.description} price={c.price} />))}
            </Stack>

        </Group>) : (
            <Stack>
                {cymbals.map((c: any) => (<CymbalDetail key={c.name} name={c.name} description={c.description} price={c.price} />))}
            </Stack>
        )
    }</>
}