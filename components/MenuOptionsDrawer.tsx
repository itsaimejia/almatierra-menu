import { Box, Button, Center, Collapse, Divider, Drawer, Group, ScrollArea, Stack, UnstyledButton, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import React from 'react'
import { ButtonMenuOption } from './ButtonMenuOption'

export const MenuOptionsDrawer = ({ opened, onClose, dataMenus }: { opened: boolean, onClose: any, dataMenus: Array<any> }) => {
    return (
        <Drawer
            closeOnEscape
            withCloseButton={false}
            opened={opened}
            onClose={() => onClose(false)}
            size="100%"

            zIndex={1}

        >
            <ScrollArea sx={{ height: 'calc(100vh )', backgroundColor: '#f5f5dc' }} mx="-md">
                <Stack>
                    <Center>
                        <Text fw={700} size={30}>Menú Almatierra</Text>
                    </Center>
                    {dataMenus.map((m: any) => <ButtonMenuOption key={m.title} title={m.title} fontSize={'1.8rem'} active={false} dataMenus={dataMenus} onClose={onClose} />)}
                </Stack>
            </ScrollArea>
        </Drawer>
    )
}
