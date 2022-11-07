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
        <Button
            sx={{ display: 'inline-block', position: 'relative', verticalAlign: 'bottom', margin: '5px' }}
            onClick={() => router.push(`/menu/${normilizeRoute(menu)}/${normilizeRoute(title)}`)}
            styles={() => ({
                root: {
                    borderRadius: '15px',
                    backgroundColor: router.asPath.includes(normilizeRoute(title)) ? '#D9D9D9' : '#B2945E',
                    color: 'black', fontSize: fontSize, ":hover": { backgroundColor: '#CCB182' }
                }
            })}>
            {title}
        </Button>
    )
}
