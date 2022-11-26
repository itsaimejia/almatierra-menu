import { collection, getDocs } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../firebase/firebase"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {    
    let images: any = []
    const querySnapshot = await getDocs(collection(db, "images"))
    querySnapshot.forEach((doc) => {
        const newObject = {
            alt: doc.data().alt,
            categorie: doc.data().categorie,
            menu: doc.data().menu,
            section: doc.data().section,
            src: doc.data().src
        }
        images.push(newObject)
    })   


    res.status(200).json(images)
}
