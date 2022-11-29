import { Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { normilizeRoute } from '../static/onStrings';

interface ButtonMenuOptionProps {
    title: string
    fontSize: string
    active: boolean
    dataMenus: Array<any>
    onClose: any
}

export const ButtonMenuOption = ({ title, fontSize, active, dataMenus, onClose }: ButtonMenuOptionProps) => {
    const router = useRouter()
    const isNotMobile = useMediaQuery('(min-width: 600px)')
    const getCategories = () => dataMenus.find((d: any) => normilizeRoute(d.title) === normilizeRoute(title))
    const firstChild = () => getCategories()?.categories[0].toString()
    return (
        //Button that shows the title of the categories and their information
        <Button
            onClick={() => {
                router.push(`/menu/${normilizeRoute(title)}/${normilizeRoute(firstChild() ?? '')}`)
                isNotMobile ? null : onClose()
            }
            }

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
