/* Importing the Button component from the @mantine/core package and others files. */
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { normilizeRoute } from '../static/onStrings';

/* Defining the props that the component will receive. */
interface ButtonCategorieOptionProps {
    title: string
    menu: string
    fontSize: string
}
/* A function that is being exported and destructuring the props that the component will receive. */
export const ButtonCategorieOption = ({ title, menu, fontSize, ...others }: ButtonCategorieOptionProps) => {
    /* A hook that is being imported from the next/router package. */
    const router = useRouter()
    /* Returning a button component with the props that it is receiving. */
    return (

        <Button
            sx={{ display: 'inline-block', position: 'relative', verticalAlign: 'bottom', margin: '5px' }}
            onClick={() => router.push(`/menu/${normilizeRoute(menu)}/${normilizeRoute(title)}`)}
            /* A function that is being passed to the Button component as a prop. */
            styles={() => ({
                root: {
                    borderRadius: '15px',
                    backgroundColor: router.asPath.includes(`/menu/${normilizeRoute(menu)}/${normilizeRoute(title)}`) ? '#D9D9D9' : '#B2945E',
                    color: 'black', fontSize: fontSize, ":hover": { backgroundColor: '#CCB182' }
                }
            })}>
            {/* A prop that is being passed to the Button component. */}
            {title}
        </Button>
    )
}
