import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { normilizeRoute } from '../static/onStrings';
import { dataMenus } from '../utils/data';

interface ButtonMenuOptionProps {
    title: string
    fontSize: string
    active: boolean
}
export const ButtonMenuOption = ({ title, fontSize, active }: ButtonMenuOptionProps) => {
    const router = useRouter()
    const getCategories = () => dataMenus.find(d => normilizeRoute(d.title) === normilizeRoute(title))
    const firstChild = () => getCategories()?.categories[0].toString()
    return (
        <Button
            onClick={() => router.push(`/menu/${normilizeRoute(title)}/${normilizeRoute(firstChild() ?? '')}`)}
            styles={() => ({
                root: {
                    borderRadius: '15px',
                    backgroundColor: active ? '#D9D9D9' : router.asPath.includes(normilizeRoute(title)) ? '#D9D9D9' : '#B2945E',
                    color: 'black',
                    fontSize: fontSize,
                    ":hover": { backgroundColor: '#CCB182' }
                }
            })}>
            {title}
        </Button>
    )
}
