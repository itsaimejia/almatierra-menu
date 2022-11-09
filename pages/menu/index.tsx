import { Carousel } from '@mantine/carousel'
import { Button, Center, Container, Image, SimpleGrid, Stack } from '@mantine/core'
import { CardMenu } from '../../components/CardMenu'
import React from 'react'
import { dataMenus } from '../../utils/data'
import { useRouter } from 'next/router'
import { getDoc, doc, collection, getDocs } from 'firebase/firestore'
import { database } from '../../firebase/firebase'


const images = [
    {
        alt: 'sdfasd',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/311698054_536496241812707_7152371002135164725_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeErG_laiZCuL1spp1c6aDLHE6-oo9Zp7I0Tr6ij1mnsjZS55GpEEEr1lf4DnyslmfY4czMYj31xmiZnJcJadcs0&_nc_ohc=T1r5cAAIRqUAX-8y_Tp&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfDXbU5PcjmxEHwAJahCuVHbpQC15VcMcfnLXDQPQqO0pw&oe=63664979'
    },
    {
        alt: 'sdfasd1',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/312481001_536495958479402_6208845249030281969_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwSRs9oeWz7z-E7avXKoPrnrjWA_yfgHeeuNYD_J-Ad6feUmgiBY9a9wOE7xzD7dLl_ohUQToHT5aLgHXhknAa&_nc_ohc=ULvF6lXDOBgAX8odGyU&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfA6KM652BqMLbcmZj9b6ZTlrgif9e5CzIpOiGPvMeSnSg&oe=6365910C'
    },
    {
        alt: 'sdfasd2',
        src: 'https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/312488532_536495465146118_7861647654943942272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHv9oUXON3smRC0PB0s5JDhQtr8Dfyc90hC2vwN_Jz3SN7xmU9axYBvREDBnwG2xgaWFeqqUnQEgZ0a_-CyEfDr&_nc_ohc=e30aKWJ3MDkAX_LpzyL&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfDyClLDA2AaVIlwIQdgb9vFpOxXbmT_f-PnF-cupWJCAg&oe=6364E966'
    },

]
export default function Home() {

    const getDataElement = async () => {
        let res: any = []
        const docs = await getDocs(collection(database, "menu"));
        docs.forEach((doc) => {
            res.push(doc.data());
        })
    if(!docs.empty){
        console.log("Document data: ", res);
    }else{
        console.log("no such document!")
    }
}

    return (
        <Button onClick={() => getDataElement()}>datos</Button>
    )
}
