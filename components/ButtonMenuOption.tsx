/* Importing the Button component from the Mantine library. */
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { normilizeRoute } from '../static/onStrings';
import { dataMenus } from '../utils/data';

/* Defining the props that the component will receive. */
interface ButtonMenuOptionProps {
    title: string
    fontSize: string
    active: boolean
}
/* A function that is being exported and destructuring the props object.. */
export const ButtonMenuOption = ({ title, fontSize, active }: ButtonMenuOptionProps) => {
    /* A hook that is provided by Next.js. It allows you to access the router object. */
    const router = useRouter()
    console.log(router.asPath)
    /**
     * It takes the title of the current page and finds the corresponding menu item in the dataMenus
     * array
     */
    const getCategories = () => dataMenus.find(d => normilizeRoute(d.title) === normilizeRoute(title))
    /**
     * It returns the first category in the categories array.
     */
    const firstChild = () => getCategories()?.categories[0].toString()
    return (
        <Button
            /* A function that is being called when the button is clicked. It is using the router
            object to navigate to the page that is being passed as a parameter. */
            onClick={() => router.push(`/menu/${normilizeRoute(title)}/${normilizeRoute(firstChild() ?? '')}`)}
            /* A function that returns an object. The object is being passed to the Button component as
            a prop. The Button component uses the object to style itself. */
            styles={() => ({
                root: {
                    borderRadius: '15px',
                    backgroundColor: active ? '#D9D9D9' : router.asPath === `/menu/${normilizeRoute(title)}/${normilizeRoute(firstChild() ?? '')}` ? '#D9D9D9' : '#B2945E',
                    color: 'black',
                    fontSize: fontSize,
                    ":hover": { backgroundColor: '#CCB182' }
                }
            })}>
            {/* A placeholder for the title prop that is being passed to the component. */}
            {title}
        </Button>
    )
}
