import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { normilizeRoute } from '../static/onStrings';

interface ButtonMenuOptionProps {
    title: string
    fontSize: string
    active: boolean
    dataMenus: Array<any>
}

export const ButtonMenuOption = ({ title, fontSize, active, dataMenus }: ButtonMenuOptionProps) => {

   
    const router = useRouter()

   
    const getCategories = () => dataMenus.find((d: any) => normilizeRoute(d.title) === normilizeRoute(title))
   
    const firstChild = () => getCategories()?.categories[0].toString()
    return (
        //Button that shows the title of the categories and their information
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
