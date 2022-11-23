import { Center, ScrollArea } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { ButtonCategorieOption } from './ButtonCategorieOption'

export const CategoriesScroll = ({ array }: { array: Array<string> }) => {
    const router = useRouter()
    const currentMenu = router.asPath.split('/')[2]
    return (
        <Center sx={{ borderRadius: '10px' }}>

            <ScrollArea
                styles={() => ({
                    scrollbar: {
                        '&, &:hover': {
                            background: 'rgba(0,0,0,0.2)',
                        },
                        '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb': {
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        },
                    },
                })}
                sx={{ whiteSpace: 'nowrap', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '15px', padding: '5px 0 ' }}>
                {/* Show subcategories in a scrollArea */}
                {array.map((c: any) => (
                    <ButtonCategorieOption key={c} title={c} fontSize={'1.6rem'} menu={currentMenu} />
                ))}
            </ScrollArea>


        </Center>
    )
}
