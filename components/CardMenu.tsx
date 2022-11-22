import { IconArrowNarrowRight } from '@tabler/icons';
import { Card, Text, Group, createStyles } from '@mantine/core';
import { normilizeRoute } from '../static/onStrings';

const useStyles = createStyles((theme, _params, getRef) => {
    const image = getRef('image');
    return {
        card: {
            position: 'relative',
            height: 250,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

            [`&:hover .${image}`]: {
                transform: 'scale(1.03)',
            },
        },

        image: {
            ref: image,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            transition: 'transform 500ms ease',
            backgroundPosition: 'center'
        },

        content: {
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            zIndex: 1,
        },

        title: {
            color: theme.white,
            marginBottom: 5,
        },
    };
});

interface ImageCardProps {
    image: string
    title: string
    dataMenus: Array<any>
}

export function CardMenu({ image, title, dataMenus }: ImageCardProps) {
    const { classes, theme } = useStyles();

    const getCategories = () => dataMenus.find((d: any) => normilizeRoute(d.title) === normilizeRoute(title))
    const firstChild = () => getCategories()?.categories[0].toString()
    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            href={`/menu/${normilizeRoute(title)}/${normilizeRoute(firstChild() ?? '')}`}
            target="_self"
        >
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
            <div className={classes.content}>

                <Group position="apart" spacing="xs">
                    <Text size="lg" className={classes.title} weight={500}>
                        {title}
                    </Text>
                    <IconArrowNarrowRight size={18} color='white' />
                </Group>

            </div>
        </Card>)
}