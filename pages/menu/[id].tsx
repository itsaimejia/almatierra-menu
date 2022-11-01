import { Stack, Container, Center, Box } from "@mantine/core";
import { Tabs } from '@mantine/core';

export default function id() {
    return (
       
        <><Box sx={{ width: '100%', height: 400, backgroundImage: 'url(https://scontent.ftij2-1.fna.fbcdn.net/v/t39.30808-6/274929060_3106982709516504_1243775622008841051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPvTZK8FjU1VK4CCDQoWyQvtsvdV0awrC-2y91XRrCsEm4nbbmHdkzypvKysDNjZvqTAbCymXCjzYD2uNMTxNQ&_nc_ohc=Fr99Qoy75vEAX-6-aA7&tn=M0wZF9Gw0GOBgZ6L&_nc_ht=scontent.ftij2-1.fna&oh=00_AfCZER1DNDqbeYOX5HMkA0uEtRt5B51Xa8sjhUz8HQJ9Ag&oe=6365C5AD)', padding: 0, margin: 0 ,backgroundSize:'cover'}}></Box><Center>
            <Tabs color="teal" defaultValue="first">
                <Tabs.List>
                    <Tabs.Tab value="first">Comida</Tabs.Tab>
                    <Tabs.Tab value="second" color="blue">Desayunos </Tabs.Tab>
                    <Tabs.Tab value="tercero">Bebidas</Tabs.Tab>
                    <Tabs.Tab value="cuarto">Cafeteria</Tabs.Tab>
                    <Tabs.Tab value="quinto">Mixologia</Tabs.Tab>
                    <Tabs.Tab value="sexto">Vinos</Tabs.Tab>
                    

                </Tabs.List>

                <Tabs.Panel value="first" pt="xs">
                    COMIDAAA AQUI
                </Tabs.Panel>

                <Tabs.Panel value="tercero" pt="xs">
                    BEBIDAS
                </Tabs.Panel>

                <Tabs.Panel value="cuarto" pt="xs">
                    ¿CAFETERIA
                </Tabs.Panel>

                <Tabs.Panel value="quinto" pt="xs">
                    MIXOLOGIA
                </Tabs.Panel>

                <Tabs.Panel value="second" pt="xs">
                    DESAYUNOS
                </Tabs.Panel>

                <Tabs.Panel value="sexto" pt="xs">
                    VINOS
                </Tabs.Panel>
            </Tabs>
        </Center></>
        

    );
}