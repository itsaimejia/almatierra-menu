import { Group, createStyles, Stack, Box } from '@mantine/core';
import { CymbalDetail } from './CymbalDetail';
interface CymbalMenuProps {
    cymbals: Array<any>
    image: string;
}
export function CymbalsMenu({ cymbals, image }: CymbalMenuProps) {
    return (
        <Group sx={{ borderStyle: 'dotted' }} grow>

            <Box sx={{
                borderStyle: 'dotted',
                height: '100%',
                borderColor: 'red',
            }}></Box>
            <Stack>
                {cymbals.map((c: any) => (<CymbalDetail key={c.name} name={c.name} description={c.description} price={c.price} />))}
            </Stack>

        </Group>
    )
}