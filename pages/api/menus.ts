import { Container } from "@mantine/core";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { database } from "../../firebase/firebase";

export const getMenus = async () => {
    const docs = await getDocs(collection(database, 'menus'))
    let res: any = []
    docs.forEach((doc) => {
        res.push(doc.data())
    })
    return res.sort(function (a: any, b: any) { return a.priority - b.priority })
}