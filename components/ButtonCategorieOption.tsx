
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { normilizeRoute } from '../static/onStrings';


interface ButtonCategorieOptionProps {
    title: string
    menu: string
    fontSize: string
}

export const ButtonCategorieOption = ({ title, menu, fontSize, ...others }: ButtonCategorieOptionProps) => {

    const router = useRouter()

    return (
        //Button that shows the title of the subcategories and their information
        <Button
            sx={{ display: 'inline-block', position: 'relative', verticalAlign: 'bottom', margin: '5px' }}
            onClick={() => router.push(`/menu/${normilizeRoute(menu)}/${normilizeRoute(title)}`)}
            styles={() => ({
                root: {
                    borderRadius: '15px',
                    backgroundColor: router.asPath.includes(`/menu/${normilizeRoute(menu)}/${normilizeRoute(title)}`) ? '#D9D9D9' : '#BB3E03',
                    color: 'black', fontSize: fontSize, ":hover": { backgroundColor: '#bb5d03' }
                }
            })}>
            {title}
        </Button>
    )
}
