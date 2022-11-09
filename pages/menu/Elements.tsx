import { Container } from "@mantine/core";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase";

export const Elements = async () => {
    //var res : any = [];
    const getDataElement = async () => {
        const docs = await getDoc(doc(database, 'menu/bebidas'));
    if(docs.exists()){
        console.log("Document data: ", docs.data());
    }else{
        console.log("no such document!")
    }
    }
}
