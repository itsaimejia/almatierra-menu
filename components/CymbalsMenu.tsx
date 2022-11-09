
import {  Text, Group, createStyles, Stack } from '@mantine/core';
import { normilizeRoute } from '../static/onStrings';
import { dataCymbals } from '../utils/data';
import { CymbalDetail } from './CymbalDetail';



const useStyles = createStyles((theme, _params, getRef) => {
    const image = getRef('image');
   
    return {
     
        description: {
            color : 'black'
            ,
           fontSize: '1.8rem',
        },

        name: {
            fontSize: '2rem',
            color: theme.black,
            marginBottom: 5,
        },
        price: {
            fontSize: '1.8rem',
        color:theme.black,
        },
        image: {
            ref: image,
            width: '200px',
            borderStyle: 'dotted',
            height: '100%',
            borderColor: 'red',
            
           
        
        }
    };
});

interface Menu {
  
    name: string;
    description: string;
    price: string;
    image: string;
}


export function CymbalsMenu({  name, description , price,image}: Menu) {
    const { classes, theme } = useStyles();

    const getCategories = () => dataCymbals.find(d => normilizeRoute(d.name) === normilizeRoute(name))
    const firstChild = () => getCategories()?.categorie[0].toString()
    return (
      
           
        <Group sx={{borderStyle:'dotted'}}>
            
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
            <Stack>
                
                {dataCymbals.map((j) => (<CymbalDetail key={j.name} description={j.description} name={j.name} price={j.price} ></CymbalDetail>))}
           

            </Stack>
                
            </Group>
        )
}